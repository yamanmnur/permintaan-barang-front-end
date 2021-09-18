<template>
  <div class="c-app flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol md="8">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm   v-on:submit.prevent="postLogin">
                  <h1>Login</h1>
                  <p class="text-muted">Sign In to your account</p>
                  <CInput
                    placeholder="Email"
                    v-model="user.email"
                    autocomplete=" email"
                  >
                    <template #prepend-content><CIcon name="cil-user"/></template>
                  </CInput>
                  <CInput
                    placeholder="Password"
                    type="password"
                    v-model="user.password"
                    autocomplete="curent-password"
                  >
                    <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                  </CInput>
                  <CRow>
                    <CCol col="6" class="text-left">
                      <CButton type="submit" color="primary" class="px-4">Login</CButton>
                    </CCol>
                    
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
      
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
// import axios from 'axios';
import User from "../../models/User";
export default {
  name: "Login",
  data() {
    return {
      typePassword: "password",
      classIconPassword: true,
      user: new User("", "",""),
      message: "",
      loading: true,
      alert: true,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/dashboard");
    }
  },
  mounted() {
   
  },
  methods: {
    switchVisibility() {
      this.typePassword = this.typePassword === 'password' ? 'text' : 'password'
    },
    postLogin() {
      // let loader = this.$loading.show({
      //   container: false ? null : this.$refs.formContainer,
      //   canCancel: true,
      //   onCancel: this.onCancel,
      // });
      var vm = this;
      this.$store.dispatch("auth/login", this.user).then(
        () => {
          // loader.hide();
          this.$router.push("/dashboard");
        },
        (error) => {
          // loader.hide();
          // comment console console.log(error);
          this.alert = false;
        }
      );
    },
  },
};
</script>
