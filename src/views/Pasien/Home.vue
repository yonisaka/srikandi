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
          <router-link to="/pasien/list_artikel">
            <button class="btn btn-success btn-block btn-round btn-main">
              <div class="h3 py-3">
              <b-icon-newspaper></b-icon-newspaper>
              </div>
              Edukasi Anemia
            </button>
          </router-link>
        </v-col>
        <v-col cols="6" sm="6" class="p-4">
          <router-link to="/pasien/list_konsultasi">
            <button class="btn btn-success btn-block btn-round btn-main">
              <div class="h3 py-3">
              <b-icon-newspaper></b-icon-newspaper>
              </div>
              Data Konsultasi
            </button>
          </router-link>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" sm="6" class="p-4 mx-auto">
          <router-link to="/pasien/add_konsultasi">
            <button class="btn btn-success btn-block btn-round btn-main">
              <div class="h3 py-3">
              <b-icon-newspaper></b-icon-newspaper>
              </div>
              Konsultasi
            </button>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: "Home_pasien",
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
  },
  // mounted() {
  //   axios
  //     .get("http://localhost/srikandi_api/remaja/pasien_user?user_id=" + this.user.user_id)
  //     .then((response) => {
  //       this.$session.start()
  //       this.$session.set('pasien', response.data.data)
  //     })
  //     .catch((error) => console.log(error));
  // },
};
</script>
