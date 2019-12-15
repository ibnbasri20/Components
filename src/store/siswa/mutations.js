export default{
    'DATA_SISWA' : (state,payload) => {
        state.DATA_SISWA = payload
    },
    "SET_PAGE": (state, payload) => {
        state.current_page = payload
    }
}