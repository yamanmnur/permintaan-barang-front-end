
/**
 * +-------------------------------------------------+
 * |                                                 |
 * | Function Global Untuk Sweet Alert 2             |
 * +_________________________________________________+
 * 
 * Asalkan function mixin dan vue componentnya sama pagination bisa berjalan
 */

 export const AlertUtils = {
    data() {
      return {
        sortCriteria: ""
      };
    },
    methods: {
      alertDeleteSuccess() {
        var vm = this;
        const Toast = vm.$swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            onOpen: toast => {
              toast.addEventListener("mouseenter", vm.$swal.stopTimer);
              toast.addEventListener("mouseleave", vm.$swal.resumeTimer);
            }
        });
        Toast.fire({
            icon: "success",
            title: "Data Berhasil Dihapus"
        });
      },
      alertEditSuccess() {
        var vm = this;
        const Toast = vm.$swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            onOpen: toast => {
              toast.addEventListener("mouseenter", vm.$swal.stopTimer);
              toast.addEventListener("mouseleave", vm.$swal.resumeTimer);
            },            
        });        
        Toast.fire({
          icon: "success",
          title: "Data Berhasil Diubah"
        });
      },      
      alertSuccess(message = "Data Berhasil Disimpan") {
        var vm = this;
        const Toast = vm.$swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            onOpen: toast => {
              toast.addEventListener("mouseenter", vm.$swal.stopTimer);
              toast.addEventListener("mouseleave", vm.$swal.resumeTimer);
            }
        });
        Toast.fire({
            icon: "success",
            title: message
        });
      },
      alertEmailSuccess() {
        var vm = this;
        const Toast = vm.$swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            onOpen: toast => {
              toast.addEventListener("mouseenter", vm.$swal.stopTimer);
              toast.addEventListener("mouseleave", vm.$swal.resumeTimer);
            }
        });
        Toast.fire({
            icon: "success",
            title: "Email berhasil dikirim"
        });
      },
      alertEmailFailed() {
        var vm = this;
        const Toast = vm.$swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            onOpen: toast => {
              toast.addEventListener("mouseenter", vm.$swal.stopTimer);
              toast.addEventListener("mouseleave", vm.$swal.resumeTimer);
            }
        });
        Toast.fire({
            icon: "success",
            title: "Email gagal dikirim"
        });
      },
      alertError(message) {
        this.$swal.fire({
          title: "Peringatan!",
          text: message,
          icon: "warning",
          showCancelButton: true
        });
      },
      alertExportSuccess(message = 'Ekpor Data Berhasil') {
        var vm = this;
        const Toast = vm.$swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            onOpen: toast => {
              toast.addEventListener("mouseenter", vm.$swal.stopTimer);
              toast.addEventListener("mouseleave", vm.$swal.resumeTimer);
            }
        });
        Toast.fire({
          icon: "success",
          title: message
        });
      },
      alertExportFailed(message = 'Ekpor Data Gagal') {
        var vm = this;
        const Toast = vm.$swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            onOpen: toast => {
              toast.addEventListener("mouseenter", vm.$swal.stopTimer);
              toast.addEventListener("mouseleave", vm.$swal.resumeTimer);
            }
        });
        Toast.fire({
          icon: "error",
          title: message
        });
      },
      alertDownloadSuccess(message = 'Download Data Berhasil') {
        var vm = this;
        const Toast = vm.$swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            onOpen: toast => {
              toast.addEventListener("mouseenter", vm.$swal.stopTimer);
              toast.addEventListener("mouseleave", vm.$swal.resumeTimer);
            }
        });
        Toast.fire({
          icon: "success",
          title: message
        });
      },
      alertDownloadFailed(message = 'Download Data Gagal') {
        var vm = this;
        const Toast = vm.$swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            onOpen: toast => {
              toast.addEventListener("mouseenter", vm.$swal.stopTimer);
              toast.addEventListener("mouseleave", vm.$swal.resumeTimer);
            }
        });
        Toast.fire({
          icon: "error",
          title: message
        });
      }
    }
  };