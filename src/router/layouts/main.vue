<template>
    <div id="app">
        <Sidebar :show.sync="active"/>
        <main class="app-main">
            <div class="navbar flex">
                <div class="mr-auto flex">
                    <button class="my-auto h-16 outline-none md:block lg:hidden xl:hidden" @click="toggle">
                        <i class="material-icons">dehaze</i>
                    </button>
                    <button class="h-16 outline-none pl-1 pr-1">
                        <i class="material-icons">search</i>
                    </button>
                </div>
                <div class="ml-auto">
                    <Dropdown class="user">
                        <template slot="trigger">
                            <img class="user-img"
                            src="https://scontent.fcgk11-1.fna.fbcdn.net/v/t1.0-9/s960x960/73403938_2432268670426462_6046534854290440192_o.jpg?_nc_cat=100&_nc_eui2=AeE4SG3YOHoB8s150l1QE2ns9p_8kFWGXCUhNKlp8kHbpYlHHAeeXTeyP8_7if2rc9z7CzM6jxEHNi-_AcnWB2n_CEPZhgkPtU4LU5Bc36tkHQ&_nc_ohc=aReTGoExb98AQmKxmC8hIKZty2C-qmUmHBIgprgC6OwESd-dqHtd7tSag&_nc_ht=scontent.fcgk11-1.fna&oh=9784502ae65c1af319addd29470974b1&oe=5E43025E">
                        </template>
                        <router-link class="dropdown-item" to="login">Logout</router-link>
                    </Dropdown>
                </div>
            </div>
            <div class="container mx-auto px-4 xl:px-2">
                <router-view/>
            </div>
        </main>
    </div>
</template>

<script>
import Sidebar from '@/components/sidebar/Sidebar.vue'
export default {
    components:{Sidebar},
    data(){
        return{
            active:false
        }
    },
    methods:{
        toggle(){
            this.active = true
        }
    }
}
</script>

<style lang="scss" scoped>
.app-main{
    padding-left:70px;
    width:100%;
    transition: all .4s ease-in-out;
    @media(max-width: 991px){
        padding-left:0px;
    }
    .navbar{
        height:60px;
        background:white;
        margin-bottom: 40px;
    }
}
.user{
  margin-right:5px;
  border:none;
  outline:none;
  background-color:transparent;
  height:65px;
  .user-img{
    width:50px;
    border-radius:100%;
    margin-top:6px;
 }
}

</style>
