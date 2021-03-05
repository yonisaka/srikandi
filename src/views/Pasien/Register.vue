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
                v-model="form.pasien_nama"
                type="text"
                placeholder="Nama Lengkap"
                required
                ></b-form-input>
            </b-form-group>

            <b-form-group
                id="input-group-1"
                label="Alamat"
                label-for="input-1"
            >
                <b-form-textarea
                id="textarea"
                v-model="form.pasien_alamat"
                placeholder="Tuliskan Alamat..."
                rows="3"
                max-rows="3"
                ></b-form-textarea>
            </b-form-group>
            <b-form-group
                label="Jenis Kelamin"
            >
            <b-form-select v-model="form.pasien_jenis" :options="options"></b-form-select>
            </b-form-group>
            <b-form-group
                id="input-group-1"
                label="Umur"
                label-for="input-1"
            >
                <b-form-input
                v-model="form.pasien_umur"
                type="text"
                placeholder="Umur"
                required
                ></b-form-input>
            </b-form-group>
            <b-form-group
                id="input-group-1"
                label="Kadar Homogoblin (hb)"
                label-for="input-1"
            >
                <b-form-input
                v-model="form.pasien_hb"
                type="text"
                placeholder="Kadar Homogoblin (hb)"
                required
                ></b-form-input>
            </b-form-group>
            <b-form-group
              label="Gejala"
              v-slot="{ ariaDescribedby }"
            >
              <b-form-checkbox
                v-for="data in gejala"
                v-model="pasien_gejala"
                :key="data.gejala_id"
                :value="data.gejala_nama"
                :aria-describedby="ariaDescribedby"
                name="flavour-3a"
              >
                {{ data.gejala_nama }}
              </b-form-checkbox>
            </b-form-group>
            <b-form-group
                id="input-group-1"
                label="Nomor Telp"
                label-for="input-1"
            >
                <b-form-input
                v-model="form.pasien_telp"
                type="text"
                placeholder="Nomor Telp"
                required
                ></b-form-input>
            </b-form-group>
            <b-form-group
                id="input-group-1"
                label="Email"
                label-for="input-1"
            >
                <b-form-input
                v-model="form.pasien_mail"
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
                v-model="form.pasien_password"
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
                v-model="form.konfirm_pasien_password"
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
  name: "Register_pasien",
  components: {
      Appbar,
  },
  data() {
    return {
      pasien_gejala: [],
      gejala: [],
      selected: null,
      options: [
          { value: null, text: 'Please select an option' },
          { value: 'laki-laki', text: 'Laki-laki' },
          { value: 'perempuan', text: 'Perempuan' },
      ],
      isLoading: false,
      form: {},
      page: {
        path: '/register',
        title: 'Masukan Data Remaja',
      }
    };
  },
  methods: {
    setGejala(data) { 
      this.gejala = data;
    },
    add_process() {
      this.isLoading = true
      let formData = new FormData()
      formData.append('pasien_nama', this.form.pasien_nama)
      formData.append('pasien_mail', this.form.pasien_mail)
      formData.append('pasien_password', this.form.pasien_password)
      formData.append('pasien_jenis', this.form.pasien_jenis)
      formData.append('pasien_alamat', this.form.pasien_alamat)
      formData.append('pasien_umur', this.form.pasien_umur)
      formData.append('pasien_hb', this.form.pasien_hb)
      formData.append('pasien_telp', this.form.pasien_telp)
      formData.append('pasien_gejala', this.pasien_gejala)
      console.log(this.form)

      if (this.form.pasien_nama && this.form.pasien_mail && this.form.pasien_password && this.form.pasien_alamat && this.form.pasien_telp && this.form.pasien_umur) {

          if (this.form.pasien_password != this.form.konfirm_pasien_password){
            this.isLoading = false
            this.$toast.error("Periksa Password anda", {
            type: "error",
            position: "top-right",
            duration: 3000,
            dismissible: true,
            });
          } else {
            axios
            .post("https://srikandi.yogiyulianto.com/remaja/add", formData,
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
  },
  mounted() {
    axios
      .get("https://srikandi.yogiyulianto.com/gejala/show")
      .then((response) => this.setGejala(response.data.result))
      .catch((error) => console.log(error));
  },
};
</script>
