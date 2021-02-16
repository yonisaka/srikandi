<template>
  <div class="home">
    <!-- <Appbar /> -->
    <v-container fill-height class="text-center mt-5">
      <v-row justify="center" align="center" class="mt-5">
        <v-col cols="10" sm="4" class="mx-auto mt-5">
          <p class="text-title h5 font-weight-bold">Selamat Datang, {{ user.username }}</p>
          <p class="text-subtitle h6 text-secondary mt-3">
            Sistem Informasi <br> Kesehatan Menanggulangi <br> Anemia pada Remaja Indonesia
          </p>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="6" sm="6" class="p-4">
          <router-link to="/dokter/add_pasien">
            <button class="btn btn-success btn-block btn-round btn-main">
              <div class="h3 py-3">
              <b-icon-pencil-square></b-icon-pencil-square>
              </div>
              Tambah Data Pasien
            </button>
          </router-link>
        </v-col>
        <v-col cols="6" sm="6" class="p-4">
          <router-link to="/dokter/pasien">
            <button class="btn btn-success btn-block btn-round btn-main">
              <div class="h3 py-3">
              <b-icon-newspaper></b-icon-newspaper>
              </div>
              Lihat Data Pasien
            </button>
          </router-link>
        </v-col>
      </v-row>
      <!-- <v-row justify="center" align="center">
        <v-col cols="6" sm="6" class="p-4">
          <router-link to="/admin/add_video">
            <button class="btn btn-success btn-block btn-round">
              <div class="h3 py-3">
              <b-icon-cloud-arrow-up></b-icon-cloud-arrow-up>
              </div>
              Tambah Video
            </button>
          </router-link>
        </v-col>
        <v-col cols="6" sm="6" class="p-4">
          <router-link to="/admin/list_video">
            <button class="btn btn-success btn-block btn-round">
              <div class="h3 py-3">
              <b-icon-youtube></b-icon-youtube>
              </div>
              Lihat Video
            </button>
          </router-link>
        </v-col>
      </v-row> -->
    </v-container>
  </div>
</template>

<script>

export default {
  name: "Home_nakes",
  components: {
    
  },
  data() {
    return {
      user: this.$session.get('user'),
    };
  },
  beforeCreate() {
    if(this.$session.get('user') == null){
      this.$router.push({ path: "/"})
    }
  }
};
</script>
