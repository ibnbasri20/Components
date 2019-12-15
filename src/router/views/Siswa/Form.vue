<template>
  <div>
    <div class="mb-2">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="nis">NIS</label>
      <input
        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-300"
        id="nis"
        type="number"
        placeholder="NIS"
        v-model="form.nis"
      />
    </div>
    <div class="mb-2">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="nama">Nama</label>
      <input
        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:border-blue-300"
        id="text"
        type="Nama"
        placeholder="NAMA"
        v-model="form.nama"
      />
    </div>
    <div class="mb-2">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="kelas">Kelas</label>
      <input
        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:border-blue-300"
        id="kelas"
        type="number"
        placeholder="Kelas"
        v-model="form.kelas"
      />
    </div>
    <div class="mb-2">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="umur">Umur</label>
      <input
        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:border-blue-300"
        id="umur"
        type="number"
        placeholder="Umur"
        v-model="form.umur"
      />
    </div>
    <div class="mb-2">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="alamat">Alamat</label>
      <textarea
        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:border-blue-300"
        id="alamat"
        type="text"
        placeholder="Alamat"
        v-model="form.alamat"
      />
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  computed:{
    ...mapState({
      form : state => state.siswa.FORM_SISWA
    })
  },
}
</script>