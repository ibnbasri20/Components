<template>
    <div class="px-2">
        <Breadcrumb separator=">">
          <Breadcrumb-Item href="/">Home</Breadcrumb-Item>
          <Breadcrumb-Item>Siswa</Breadcrumb-Item>
        </Breadcrumb>
        <button @click="tambah" class="bg-teal-500 hover:bg-teal-600 focus:outline-none focus:shadow-outline text-white py-2 px-2 mx-1 rounded mb-5">
            Tambah Data Siswa
        </button>
        <button class="bg-teal-500 hover:bg-teal-600 focus:outline-none focus:shadow-outline text-white py-2 px-2 mx-1 rounded mb-5">
             Import Data
        </button>
        <button class="bg-teal-500 hover:bg-teal-600 focus:outline-none focus:shadow-outline text-white py-2 px-2 mx-1 rounded mb-5">
            Kirim Pembayaran Kelas 7
        </button>

        <div class="flex flex-wrap -mx-2">
            <div class="w-full mb-4 px-2">
                <Card class="bg-white">
                    <ais-instant-search
                        :search-client="searchClient"
                        index-name="prod_SISWA"
                    >
                    <ais-search-box placeholder="Search here…" class="mb-3" />
                    <TableAl :columns="columns" class="mb-3">
                        <template slot="aksi" slot-scope="data">
                            <button @click="hapus(data.item.objectID)" class="bg-red-500 hover:bg-teal-600 focus:outline-none focus:shadow-outline text-white py-2 px-2 mx-1 rounded mb-5">
                                Hapus
                            </button>
                            <button class="bg-yellow-500 hover:bg-teal-600 focus:outline-none focus:shadow-outline text-white py-2 px-2 mx-1 rounded mb-5">
                                Edit
                            </button>
                            <button class="bg-yellow-500 hover:bg-teal-600 focus:outline-none focus:shadow-outline text-white py-2 px-2 mx-1 rounded mb-5">
                                Lihat
                            </button>
                        </template>
                    </TableAl>
                    <ais-pagination class="ml-18"/>
                    </ais-instant-search>
                </Card>
            </div>
        </div>
    </div>
</template>

<script>
import algoliasearch from 'algoliasearch/lite';
import TableAl from '@/components/table/Algolia.vue'
import 'instantsearch.css/themes/algolia-min.css';
import {mapActions, mapState} from 'vuex'
export default {
    components:{TableAl},
    data(){
        return{
             searchClient: algoliasearch(
                '6U3OZZHAI3',
                '81ffce63aaf95a4e8e0c2e3008352d7a'
            ),
            columns: {
                nis:'NIS',
                nama:'NAMA',
                kelas:'KELAS',
                umur:'UMUR',
                alamat:'ALAMAT',
                aksi:'AKSI'
            }
        }
    },
    methods:{
        ...mapActions({
            hapus: 'siswa/DELETE_SISWA'
        }),
        tambah(){
            this.$router.push('/siswa/tambah')
        }
    }
}
</script>
