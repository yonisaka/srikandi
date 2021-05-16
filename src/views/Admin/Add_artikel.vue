<template>
  <div class="home">
    <Appbar :page="page"/>
    <v-container fill-height class="text-left">
      <v-row justify="center" align="center" >
        <v-col cols="12" sm="6" class="mx-auto">
          <b-form role="form" v-on:submit.prevent>
            <b-form-group
                label="Banner Article"
                label-for="input-2"
            >
                <b-form-file
                  id="input-2"
                  type="file"
                  v-model="form.file"
                  placeholder="Select file banner"
                  drop-placeholder="Drop file here..."
                  ref="file"
                ></b-form-file>
            </b-form-group>
            <b-form-group
                id="input-group-1"
                label="Article title"
                label-for="input-1"
            >
                <b-form-input
                id="input-1"
                v-model="form.artikel_judul"
                type="text"
                placeholder="Article title"
                required
                ></b-form-input>
            </b-form-group>
            <b-form-group
                id="input-group-1"
                label="Article date"
                label-for="input-1"
            >
                <b-form-datepicker id="example-datepicker" v-model="form.artikel_tanggal" class="mb-2"></b-form-datepicker>
            </b-form-group>
            <b-form-group
                id="input-group-1"
                label="Article contents"
                label-for="input-1"
            >
                <b-form-textarea
                id="textarea"
                v-model="form.artikel_isi"
                placeholder="Write the contects..."
                rows="8"
                max-rows="8"
                ></b-form-textarea>
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
  name: "Add_artikel",
  components: {
    Appbar,
  },
  data() {
    return {
      isLoading: false,
      form: {},
      page: {
        path: '/admin/home',
        title: 'Tambah Artikel',
      }
    };
  },
  methods: {
    add_process() {
      this.isLoading = true
      let formData = new FormData()
      formData.append('artikel_judul', this.form.artikel_judul)
      formData.append('artikel_isi', this.form.artikel_isi)
      formData.append('artikel_tanggal', this.form.artikel_tanggal)
      formData.append('file', this.form.file);
      formData.append('mdb', this.$session.get('user').user_id)
      formData.append('mdb_name', this.$session.get('user').username)
      if (this.form.artikel_judul && this.form.artikel_isi && this.form.artikel_tanggal) {
          axios
          .post("https://srikandi.yogiyulianto.com/artikel/add", formData,
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
              this.$router.push({ path: "/"+this.$session.get('user').role+"/home"})
          })
          .catch((err) => console.log(err));
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
