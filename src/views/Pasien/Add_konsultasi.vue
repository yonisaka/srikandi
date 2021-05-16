<template>
  <div class="home">
    <Appbar :page="page"/>
    <v-container fill-height class="text-left">
      <v-row justify="center" align="center" >
        <v-col cols="11" sm="6" class="mx-auto">
          <b-form role="form" v-on:submit.prevent>
            <b-form-group
                id="input-group-1"
                label="Homogoblin levels(hb)"
                label-for="input-1"
            >
                <b-form-input
                v-model="form.pasien_hb"
                type="text"
                placeholder="Homogoblin levels (hb)"
                required
                ></b-form-input>
            </b-form-group>
            <b-form-group
              label="Symptoms"
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
  name: "Add_konsultasi",
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
          { value: 'man', text: 'Man' },
          { value: 'woman', text: 'Woman' },
      ],
      isLoading: false,
      form: {},
      page: {
        path: '/pasien/home',
        title: 'Add data',
      },
      user: this.$session.get('user'),
    };
  },
  methods: {
    setGejala(data) { 
      this.gejala = data;
    },
    add_process() {
      this.isLoading = true
      let formData = new FormData()
      formData.append('pasien_id', this.user.role_id)     
      formData.append('pasien_hb', this.form.pasien_hb)
      formData.append('pasien_gejala', this.pasien_gejala)
      console.log(this.form)

      if (this.form.pasien_hb && this.pasien_gejala) {

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
            .post("https://srikandi.yogiyulianto.com/konsultasi/add", formData,
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
  },
  mounted() {
    axios
      .get("https://srikandi.yogiyulianto.com/gejala/show")
      .then((response) => this.setGejala(response.data.result))
      .catch((error) => console.log(error));
  },
};
</script>
