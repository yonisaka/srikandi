<template>
  <div class="home">
    <Appbar :page="page"/>
    <v-container fill-height class="text-left">
      <v-row justify="center" align="center" >
        <v-col cols="11" sm="6" class="mx-auto">
          <b-form role="form" v-on:submit.prevent>
            <b-form-group
                id="input-group-1"
                label="Nama Lengkap"
                label-for="input-1"
            >
                <b-form-input
                v-model="form.user_nama"
                type="text"
                placeholder="Nama Lengkap"
                required
                ></b-form-input>
            </b-form-group>
            <b-form-group
                id="input-group-1"
                label="Email"
                label-for="input-1"
            >
                <b-form-input
                v-model="form.user_mail"
                type="text"
                placeholder="Email"
                required
                ></b-form-input>
            </b-form-group>
            <b-form-group
                id="input-group-1"
                label="Password"
                label-for="input-1"
            >
                <b-form-input
                v-model="form.user_password"
                type="password"
                placeholder="Password"
                required
                ></b-form-input>
            </b-form-group>
            <b-form-group
                id="input-group-1"
                label="Konfirm Password"
                label-for="input-1"
            >
                <b-form-input
                v-model="form.konfirm_user_password"
                type="password"
                placeholder="Konfirm Password"
                required
                ></b-form-input>
            </b-form-group>
            <b-overlay
              :show="isLoading"
              rounded
              opacity="0.6"
              spinner-small
              spinner-variant="primary"
              >
              <b-button block type="submit" 
              @click="add_process" 
              class="btn btn-round btn-success my-4">
                Simpan
                <b-icon-arrow-right-short></b-icon-arrow-right-short>
              </b-button>
            </b-overlay>
          </b-form> 
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Appbar from "@/components/Appbar.vue";
import axios from "axios";

export default {
  name: "Register_admin",
  components: {
      Appbar,
  },
  data() {
    return {
      isLoading: false,
      form: {},
      page: {
        path: '/register',
        title: 'Register Edukasi',
      }
    };
  },
  methods: {
    add_process() {
      this.isLoading = true
      let formData = new FormData()
      formData.append('user_nama', this.form.user_nama)
      formData.append('user_mail', this.form.user_mail)
      formData.append('user_password', this.form.user_password)

      if (this.form.user_nama && this.form.user_mail && this.form.user_password ) {

          if (this.form.user_password != this.form.konfirm_user_password){
            this.isLoading = false
            this.$toast.error("Periksa Password anda", {
            type: "error",
            position: "top-right",
            duration: 3000,
            dismissible: true,
            });
          } else {
            axios
            .post("http://srikandi.yogiyulianto.com/user/add", formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(() => {
                // this.setUser(response.data)
                this.$toast.success("Berhasil menambahkan Akun", {
                type: "success",
                position: "top-right",
                duration: 3000,
                dismissible: true,
                });
                this.isLoading = false
                this.$router.push({ path: "/"})
            })
            .catch((err) => console.log(err));
          }
          
      } else {
          this.isLoading = false
          this.$toast.error("Form harus diisi", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true,
          });
      }
    }
  }
};
</script>
