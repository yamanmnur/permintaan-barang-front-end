import axiosserviceAuth from '../services/axios.service'
import baseUrl from '../services/base-url';
import ApiRoute from '../services/api.route'
export default (to, from, next) => {

  if (localStorage.getItem('user') != null && localStorage.getItem('user').length > 0) {
    axiosserviceAuth.get(baseUrl() + "/" + ApiRoute.cekBearer)
    .then(() => {
      next()
        console.log("sucess")
    }).catch(e => {
        console.log(e)
        console.log("error")
      localStorage.removeItem('user')
      next('/pages/login')
    })
    // verify with firebase or jwt


  } else {
    localStorage.removeItem('user')
    next('/pages/login')
  }
}
