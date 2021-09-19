class ApiRoute {
    constructor() {
        
        this.cekBearer = "api/cek-bearer"
        this.login = "api/login"
        this.forgotPassword = "api/forgot-password"
        this.cekOtp = "api/cek-otp"
        this.resetPassword = "api/forgot-password/reset-password"
        
        this.getPermintaan = "api/permintaan"
        this.getDetailPermintaan = "api/permintaan/"
        this.postData = "api/permintaan"
        this.updateDataPermintaan = "api/update-permintaan"
        this.deleteData = "api/permintaan/"

        this.getAllPeminta = "api/users"
        this.getBarang = "api/barang"
    }
  
  }
  
  export default new ApiRoute();
  