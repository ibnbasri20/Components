import actions from './actions'
import mutations from './mutations'
const namespaced = true

const state = {
    DATA_SISWA:[],
    current_page:1,
    per_page:10,
    FORM_SISWA:{
        nis:'',
        nama:'',
        kelas:'',
        alamat:'',
        umur:'',
    }
}

export default{
    namespaced,
    state,
    actions,
    mutations
}