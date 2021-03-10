<template>
  <div class="home">
    <Appbar :page="page"/>
    <v-container fill-height class="text-left">
      <v-row justify="center" align="center" >
        <v-col cols="12" sm="6" class="mx-auto">
          <b-form role="form" v-on:submit.prevent>
            <b-form-group
                id="input-group-1"
                label="Judul Video:"
                label-for="input-1"
            >
                <b-form-input
                id="input-1"
                v-model="form.video_judul"
                type="text"
                placeholder="Judul Video"
                required
                ></b-form-input>
            </b-form-group>
            <b-form-group
                label="File Video:"
                label-for="input-2"
            >
                <b-form-file
                  id="input-2"
                  type="file"
                  v-model="form.file"
                  placeholder="Pilih file video"
                  drop-placeholder="Drop file here..."
                  ref="file"
                ></b-form-file>
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
  name: "Add_video",
  components: {
    Appbar,
  },
  data() {
    return {
      isLoading: false,
      form: {},
      page: {
        path: '/admin/home',
        title: 'Tambah Video',
      }
    };
  },
  methods: {
    add_process() {
      this.isLoading = true
      let formData = new FormData()
      formData.append('video_judul', this.form.video_judul)
      formData.append('file', this.form.file);
      formData.append('mdb', this.$session.get('user').user_id)
      formData.append('mdb_name', this.$session.get('user').username)
      if (this.form.video_judul) {
          axios
          .post("https://srikandi.yogiyulianto.com/video/add", formData,
          {
              headers: {
                  'Content-Type': 'multipart/form-data'
              }
          })
          .then(() => {
              // this.setUser(response.data)
              this.$toast.success("Berhasil menambahkan Video", {
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
