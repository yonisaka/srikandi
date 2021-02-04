<template>
    <div class="container-fluid">
        <div class="row no-gutter">
            <div class="col-md-12">
                <div class="login d-flex align-items-center py-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-10 col-xl-5 mx-auto">
                                <h3 class="display-4">Login</h3>
                                <p class="text-muted mb-4">Masuk ke akun anda</p>
                                <form class="mt-2" v-on:submit.prevent>
                                    <div class="form-group mb-3">
                                        <input type="text" placeholder="Email address" v-model="auth.user_mail" class="form-control rounded-pill border-0 shadow-sm px-4">
                                    </div>
                                    <div class="form-group mb-3">
                                        <input type="password" placeholder="Password" v-model="auth.user_password" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary">
                                    </div>

                                    <button type="submit" @click="login" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign in</button>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
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
      // user: [],
      auth: {},
    };
  },
  methods: {
    // setUser(data) {
    //   this.user = data;
    // },
    login() {
      if (this.auth.user_mail && this.auth.user_password) {
        this.auth.user_role = 'user';
        axios
          .post("https://localhost/srikandi_api/auth/login", this.auth)
          .then((response) => {
            if (response.data != null){
              console.log(response.data.data);
              this.$cookie.set('user_id', response.data.data.user_id, { expires: '30m' });
              this.$cookie.set('user_nama', response.data.data.user_nama, { expires: '30m' });

              // this.setUser(response.data)
              this.$toast.success("Berhasil Login", {
                type: "success",
                position: "top-right",
                duration: 3000,
                dismissible: true,
              });
              this.$router.push({ path: "/"})
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
            this.$toast.error("Email dan Password tidak ditemukan", {
                type: "error",
                position: "top-right",
                duration: 3000,
                dismissible: true,
              });
          });
      } else {
        this.$toast.error("Email dan Password Harus diisi", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      }
    },
  },
  // mounted() {
  //   axios
  //     .get("http://localhost:8000/movie")
  //     .then((response) => this.setUser(response.data))
  //     .catch((error) => console.log(error));
  // }
};
</script>
