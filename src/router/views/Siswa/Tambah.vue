<template>
    <div class="px-2">
        <Breadcrumb separator=">">
          <Breadcrumb-Item href="/">Home</Breadcrumb-Item>
          <Breadcrumb-Item href="/siswa">Siswa</Breadcrumb-Item>
          <Breadcrumb-Item>Tambah Data</Breadcrumb-Item>
        </Breadcrumb>
        <div class="flex flex-wrap -mx-2">
            <div class="w-full mb-3 px-2">
                <Card class="bg-white">
                    <div class="w-full">
                        <form @submit.prevent="tambah">
                            <Form></Form>
                            <div class="flex items-center justify-between">
                                <button @click="tambah" class="w-full bg-blue-500 hover:bg-blue-700 text-white font-light py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                    Masukan Data
                                </button>
                            </div>
                        </form>
                    </div>
                </Card>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import Form from './Form.vue'
export default {
    components:{Form},
    methods:{
        ...mapActions({
            tambah: 'siswa/FIREBASE_ALGOLIA'
        }),
    }
}
</script>
