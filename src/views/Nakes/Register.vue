<template>
  <div class="home">
    <Appbar :page="page"/>
    <v-container fill-height class="text-left">
      <v-row justify="center" align="center" >
        <v-col cols="11" sm="6" class="mx-auto">
          <b-form role="form" v-on:submit.prevent>
            <b-form-radio-group v-slot="{ ariaDescribedby }" class="my-3">
                <b-form-radio v-model="form.nakes_jenis" :aria-describedby="ariaDescribedby" name="some-radios" value="dokter">Dokter</b-form-radio>
                <b-form-radio v-model="form.nakes_jenis" :aria-describedby="ariaDescribedby" name="some-radios" value="bidan">Bidan</b-form-radio>
            </b-form-radio-group>
            <b-form-group
                id="input-group-1"
                label="Fullname"
                label-for="input-1"
            >
                <b-form-input
                v-model="form.user_nama"
                type="text"
                placeholder="Fullname"
                required
                ></b-form-input>
            </b-form-group>

            <b-form-group
                id="input-group-1"
                label="Address"
                label-for="input-1"
            >
                <b-form-textarea
                id="textarea"
                v-model="form.nakes_alamat"
                placeholder="Address..."
                rows="3"
                max-rows="3"
                ></b-form-textarea>
            </b-form-group>
            <b-form-group
                id="input-group-1"
                label="Phone number"
                label-for="input-1"
            >
                <b-form-input
                v-model="form.nakes_telp"
                type="text"
                placeholder="Phone number"
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
                label="Confirm Password"
                label-for="input-1"
            >
                <b-form-input
                v-model="form.konfirm_user_password"
                type="password"
                placeholder="Confirm Password"
                required
                ></b-form-input>
            </b-form-group>
            <b-form-group
                id="input-group-1"
                label="Age"
                label-for="input-1"
            >
                <b-form-input
                v-model="form.umur"
                type="text"
                placeholder="Age"
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
                Save
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
  name: "Register_nakes",
  components: {
      Appbar,
  },
  data() {
    return {
      isLoading: false,
      form: {},
      page: {
        path: '/register',
        title: 'Register public health office',
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
      formData.append('nakes_alamat', this.form.nakes_alamat)
      formData.append('nakes_jenis', this.form.nakes_jenis)
      formData.append('nakes_telp', this.form.nakes_telp)
      formData.append('umur', this.form.umur)

      if (this.form.user_nama && this.form.user_mail && this.form.user_password && this.form.nakes_jenis && this.form.nakes_telp && this.form.umur) {

          if (this.form.user_password != this.form.konfirm_user_password){
            this.isLoading = false
            this.$toast.error("Check your password", {
            type: "error",
            position: "top-right",
            duration: 3000,
            dismissible: true,
            });
          } else {
            axios
            .post("https://srikandi.yogiyulianto.com/nakes/add", formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(() => {
                // this.setUser(response.data)
                this.$toast.success("Success", {
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
          this.$toast.error("Form must be filled", {
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
