<template>
  <div :style="{
    height: '820px',
    backgroundImage: 'url('+require('@/assets/bg.png')+')',
    backgroundPosition: 'center center',
    backgroundSize: 'cover'
    }">
    <div class="container-fluid">
        <div class="row no-gutter">
            <div class="col-md-12">
                <div class="login d-flex align-items-center py-5">
                    <div class="container pt-5">
                        <div class="row pt-5">
                            <div class="col-lg-10 col-xl-5 mx-auto pt-5">
                                <h3 class="display-4 text-light"><img src="../assets/srikandi.png" width="20%" /></h3>
                                <h5 class="mb-4 text-light">Welcome to <br> Srikandi Health</h5>
                                <form class="mt-2" v-on:submit.prevent>
                                    <div class="form-group mb-3">
                                        <input type="text" placeholder="Email address" v-model="auth.user_mail" class="form-control rounded-pill border-0 shadow-sm px-4">
                                    </div>
                                    <div class="form-group mb-3">
                                        <input type="password" placeholder="Password" v-model="auth.user_password" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary">
                                    </div>
                                    <b-overlay
                                      :show="isLoading"
                                      rounded
                                      opacity="0.6"
                                      spinner-small
                                      spinner-variant="primary"
                                      >
                                      <b-button 
                                        type="submit" 
                                        block
                                        variant="success"
                                        :disabled="isLoading"
                                        @click="login" 
                                      >
                                      Login</b-button>
                                    </b-overlay>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-center mt-5">
            <p class="text-light text-small">You don't have another account? <router-link to="/register" class="font-weight-bold text-light"> Sign up</router-link> </p>
          </div>
        </div>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
// import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
  name: "Login",
  components: {

  },
  data() {
    return {
      isLoading: false,
      auth: {},
    };
  },
  beforeCreate() {
    if(this.$session.get('user') != null){
      this.$router.push({ path: "/"+ this.$session.get('user').role +"/home"})
    }
  },
  methods: {
    // setUser(data) {
    //   this.user = data;
    // },
    login() {
      this.isLoading = true
      if (this.auth.user_mail && this.auth.user_password) {
        axios
          .post("https://srikandi.yogiyulianto.com/auth/login", this.auth)
          .then((response) => {
            this.isLoading = false
            if (response.data != null){
              console.log(response.data.data);
              this.$session.start()
              this.$session.set('user', response.data.data);
              this.$toast.success("Berhasil Login", {
                type: "success",
                position: "top-right",
                duration: 3000,
                dismissible: true,
              });
              this.$router.push({ path: "/"+response.data.data.role+"/home"})
            } else {
              this.$toast.error("Email dan Password tidak ditemukan", {
                type: "error",
                position: "top-right",
                duration: 3000,
                dismissible: true,
              });
            }
            
          })
          .catch(() => {
            this.isLoading = false
            this.$toast.error("Email dan Password tidak ditemukan", {
                type: "error",
                position: "top-right",
                duration: 3000,
                dismissible: true,
              });
          });
      } else {
        this.isLoading = false
        this.$toast.error("Email dan Password Harus diisi", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      }
    },
  },
};
</script>
