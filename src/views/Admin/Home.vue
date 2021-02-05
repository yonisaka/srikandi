<template>
  <div class="home">
    <!-- <Appbar /> -->
    <v-container fill-height class="text-center mt-5">
      <v-row justify="center" align="center" class="mt-5">
        <v-col cols="10" sm="4" class="mx-auto mt-5">
          <p class="text-title h5 font-weight-bold">Selamat Datang, di Edukasi</p>
          <p class="text-subtitle h6 text-secondary mt-3">
            Sistem Informasi <br> Kesehatan Menanggulangi <br> Anemia pada Remaja Indonesia
          </p>
        </v-col>
      </v-row>
      <v-row justify="center" align="center" class="mt-5">
        <v-col cols="6" sm="6" class="mt-4 p-4">
          <router-link to="/add_article">
            <button class="btn btn-success btn-block btn-round">
              <div class="h3 py-3">
              <b-icon-pencil-square></b-icon-pencil-square>
              </div>
              Add Artikel
            </button>
          </router-link>
        </v-col>
        <v-col cols="6" sm="6" class="mt-4 p-4">
          <router-link to="/artikel_admin">
            <button class="btn btn-success btn-block btn-round">
              <div class="h3 py-3">
              <b-icon-newspaper></b-icon-newspaper>
              </div>
              Lihat Artikel
            </button>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: "Home_admin",
  components: {
    
  }
};
</script>
