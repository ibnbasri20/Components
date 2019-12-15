<template>
  <ol class="list-reset flex text-grey-dark">
    <li>
      <a v-if="href || Object.keys(to).length" class="text-blue handle font-bold" @click="handleClick"><slot></slot></a>
      <a v-else class="text-blue"><slot></slot></a>
      <span class="mx-2" v-html="separator"></span>
    </li>
  </ol>
</template>

<script>
  export default {
    name: 'BreadcrumbItem',
    props: {
      href: String,
      to: {
        type: [Object, String],
        default () {
          return {}
        }
      },
      replace: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        separator: ''
      }
    },
    mounted () {
      this.separator = this.$parent.separator
    },
    methods: {
      handleClick () {
        const to = this.to
        const href = this.href
        if (href) {
          console.log(href)
        } else {
          this.replace ? this.$router.replace(to) : this.$router.push(to)
        }
      }
    }
  }
</script>

<style lang="scss">
ol{
  li{
    a{
      cursor: pointer;
    }
  }
}
</style>
