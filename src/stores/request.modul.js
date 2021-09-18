// import AuthService from '../services/auth.service';
import RequestService from '../services/requestservice';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = {
    message : '',
    data : []
}

export const request = {
  namespaced: true,
  state: initialState,
  actions: {

    alertError(){
      this.$swal.fire({
        title: "Peringatan!",
        text: "Data Gagal Disimpan",
        icon: "errorr",
        showCancelButton: true
      });
    },
    alertSuccess(){
      const Toast = this.$swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        onOpen: toast => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        }
      });
      Toast.fire({
        icon: "success",
        title: "Data Berhasil Dihapus"
      });
    },

    getInformasiUmum({commit}) {
      return RequestService.getInformasiUmum().then(
        response => {
          commit('messageSuccess',response.data.message);
          commit('getData',response.data.data.content);
          
        },
        error => {
            commit('messageError',error.response.data.message);
            //   commit('getData',response.data.data);
        }
      );
    },
    postInformasiUmum({commit},formData){
        return RequestService.postInformasiUmum(formData).then(
            response => {
                commit('messageSuccess',response.data.message);
              return Promise.resolve(formData);
            },
            error => {
              commit('messageError',error.response.data.message);
              return Promise.reject(error);
            }
        );
    }
  
  },
  mutations: {
    messageSuccess(state,message) {
      state.message = message;
    },
    getData(state,data){
      state.data = data
    },
    messageError(state,message){
      state.message = message;
    }

  }
};