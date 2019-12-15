<script>
export default {
    props:{
        show:{
            type:Boolean,
            default:false
        }
    },
    methods:{
        toggle(){
            this.$emit('update:show', !this.show)
        },
        mobile(){
          if (screen.width > 991) {
            this.$emit('update:show', false)
            }else if(screen.width < 991){
            this.$emit('update:show', false)
            }
        },
        outSidebar(e){
            if(window.innerWidth < 991){
                if (!this.$el.contains(e.target)){
                    this.$emit('update:show', false)
                }
            }
        }
    },
    watch:{
        show(){
            if(this.show == true){
                document.body.classList.add('sidebar-show')
            }else{
                document.body.classList.remove('sidebar-show')
            }
        },
    },
    created(){
        window.addEventListener('resize', this.mobile)
        window.addEventListener('mousedown', this.outSidebar)
    },
    destroyed(){
        window.removeEventListener('resize', this.mobile)
        window.removeEventListener('mousedown', this.outSidebar)
    },
}
</script>
<template>
    <div class="sidebar-app" :class="[show ? 'show' : '']">
        <div class="sidebar-brand">
                <!-- begin sidebar branding-->
            <img class="brand-logo" src="assets/img/logo.png" width="40">
            <span class="brand-content font-secondary"><a href="/crisp/">  ERP</a></span>
                <!-- end sidebar branding-->
            <div class="ml-auto mr-2">
                <button class="my-auto outline-none hidden md:hidden lg:block xl:block" @click="toggle">
                    <i class="material-icons icon-xl" v-if="!show"
                    >dehaze</i>
                    <i class="material-icons" v-if="show"
                    >close</i>
                </button>
                    <button class="my-auto outline-none block lg:hidden xl:hidden" @click="toggle">
                    <i class="material-icons">close</i>
                </button>
            </div>
        </div>
        <div class="scroll-wrapper sidebar-wrapper">
            <div class="sidebar-wrapper">
                <!-- Begin sidebar menu -->
                <ul class="menu">
                    <li class="menu-item">
                        <router-link to="/" class="menu-link">
                            <span class="menu-label">
                                <span class="menu-name">Dashboard</span>
                            </span>
                            <span class="menu-icon">
                                <i class="material-icons icon-middle">dashboard</i>
                            </span>
                        </router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="/siswa" class="menu-link">
                            <span class="menu-label">
                                <span class="menu-name">Siswa</span>
                            </span>
                            <span class="menu-icon">
                                <i class="material-icons icon-middle">person</i>
                            </span>
                        </router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="/siswa" class="menu-link">
                            <span class="menu-label">
                                <span class="menu-name">Kelas</span>
                            </span>
                            <span class="menu-icon">
                                <i class="material-icons icon-middle">person</i>
                            </span>
                        </router-link>
                    </li>
                    <li class="menu-item">
                        <a href="#" class="menu-link">
                            <span class="menu-label">
                                <span class="menu-name">Pembayaran</span>
                            </span>
                            <span class="menu-icon">
                                <i class="material-icons icon-middle">receipt</i>
                            </span>
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="#" class="menu-link">
                            <span class="menu-label">
                                <span class="menu-name">Laporan</span>
                            </span>
                            <span class="menu-icon">
                                <i class="material-icons icon-middle">receipt</i>
                            </span>
                        </a>
                    </li>
                </ul>
                <!-- End sidebar menu -->
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.sidebar-app{
    font-weight: 500;
    position: fixed;
    z-index: 999;
    top: 0;
    right: auto;
    bottom: 0;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    width: 240px;
    transition: transform ease .2s;
    color: #fff;
    border-right: 1px solid rgba(255,255,255,.07);
    background-color: #162246;
    @media(min-width:991px){
        transform: translateX(-170px);
    }
    @media(max-width: 991px){
        transform: translateX(-240px);
    }
    &:hover{
        @media(min-width: 991px){
        transform: translateX(0px);
        .icon-xl{
            display: block;
          }
        }
    }
    .sidebar-brand{
        display: flex;
        width: 100%;
        height: 65px;
        padding-right: 15px;
        padding-left: 15px;
        background-color: rgba(0,0,0,.15);
        flex: 0 0 auto;
        align-items: center;
        .brand-logo{
            max-width: 100%;
        }
        .brand-content{
            font-weight: 600;
            display: inline-block;
            padding: 0 5px;
            letter-spacing: 3px;
            text-transform: uppercase;
        }
    }
    .sidebar-wrapper{
        position: relative;
        overflow: hidden;
        width: 100%;
        padding-bottom: 30px;
        flex: 1 1 auto;
    }
    .menu{
        margin: 0;
        padding: 0;
        list-style: none;
        .menu-item{
            position: relative;
            display: block;
            clear: both;
            width: 100%;
            list-style: none;
            transition: opacity ease .2s;
            .menu-link{
                display: table;
                width: 100%;
                padding: 10px 15px;
                transition: opacity .2s ease;
                justify-content: space-between;
                .menu-label{
                    display: table-cell;
                    vertical-align: middle;
                    color: rgba(255,255,255,.5);
                   .menu-name{
                       display:block;
                       color:white;
                   }
                }
            }
            .menu-icon{
                position: relative;
                display: table-cell;
                width: 40px;
                height: 40px;
                margin-top: auto;
                margin-bottom: auto;
                margin-left: auto;
                text-align: center;
                vertical-align: middle;
                border-radius: .25rem;
                background: rgba(255,255,255,.22);
                .icon-placeholder{
                        font-size: 18px;
                }
                .icon-badge{
                    font-size: 10px;
                    position: absolute;
                    top: -7px;
                    right: -6px;
                    padding: .3em .6em;
                }
            }
        }
    }
}

.mini{
    transform: translateX(-170px);
    @media(max-width:991px){
    transform: translateX(-240px);
    }
}
.show{
    transform: translateX(0px);
}
.icon-middle{
    vertical-align: middle;
}
.icon-xl{
  display: none;
}
</style>
