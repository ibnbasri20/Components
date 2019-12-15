<template>
  <div class="dropdown"  ref="trigger">
    <slot name="trigger"/>

    <transition :name="effect">
      <div
        :class="[`dropdown-menu right `, classObj]"
        v-show="show"
      >
        <slot/>
      </div>
    </transition>
  </div>
</template>

<script>
import EventListener from '../utils/EventListener.js'
export default {
  name: 'Dropdown',
  props: {
    triggerEvent: {
      type: String,
      default: 'click',
      required: false
    },
    clickClose: {
      type: Boolean,
      default: false,
      required: false
    },
    effect: {
      type: String,
      default: 'fadeDown',
      required: false
    },
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    open () {
      this.show = true
      this.$emit('show')
    },
    close () {
      this.show = false
      this.$emit('hide')
    },
    toggle () {
      this.show ? this.close() : this.open()
      this.$emit('toggle')
    },
    onFocus () {}
  },
  computed: {
    classObj () {
      const { tall } = this
      const classes = {}
      classes['show'] = this.show
      return classes
    }
  },
  mounted () {
    this.$nextTick(() => {
      if (!this.$refs.trigger) {
        return
      }
      const el = this.$el
      const trig = this.$refs.trigger.children[0]
      if (this.triggerEvent === 'click') {
        this._clickEvent = EventListener.listen(trig, 'click', this.toggle)
        this._closeEvent = EventListener.listen(window, 'click', e => {
          if (!this.clickClose && !el.contains(e.target) && this.show) {
            this.close()
          }
        })
      } else if (this.triggerEvent === 'hover') {
        this._mouseenterEvent = EventListener.listen(trig, 'mouseenter', () => {
          this.open()
        })
        this._closeEvent = EventListener.listen(this.$el, 'mouseleave', () => {
          setTimeout(() => {
            this.close()
          }, 500)
        })
      }
    })
  },
  beforeDestroy () {
    if (this._closeEvent) this._closeEvent.remove()
    if (this._clickEvent) this._clickEvent.remove()
    if (this._mouseenterEvent) this._mouseenterEvent.remove()
  }
}
</script>

<style lang="scss">
.show{
    display:block;
}
.position-right-bottom{
    top: 100%!important;
    bottom: auto!important;
    left: auto!important;
    right: 0!important;
}
.dropdown-item{
    font-size: .9rem;
    font-weight: 500;
}
.dropdown{
    position:relative;
}
.dropdown-menu{
    font-size: .9rem;
    position: absolute;
    z-index: 1000;
    top: 100%;
    left: 0;
    display: none;
    float: left;
    min-width: 10rem;
    margin: .125rem 0 0;
    padding: .5rem 0;
    list-style: none;
    text-align: left;
    color: #1b2955;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: .25rem;
    background-color: #fff;
    background-clip: padding-box;
}
.dropdown-menu.show{
    display:block;
}

.right{
    right:0 !important;
    left:auto !important;
}
</style>