<template>
  <div class="home">
    <v-container fill-height class="text-center mt-3">
      <v-row justify="center" align="center" class="mt-2">
        <v-col cols="10" sm="4" class="mx-auto mt-2">
          <img src="../assets/srikandi.png" width="25%" />
          <p class="text-title h5 font-weight-bold mt-3">Srikandi Health</p>
          <p class="text-subtitle h6 text-secondary mt-3">
            Sistem Informasi <br> Kesehatan Menanggulangi <br> Anemia pada Remaja Indonesia
          </p>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="6" sm="6" class="p-4">
          <router-link to="/nakes/register">
            <button class="btn btn-success btn-block btn-round btn-main" >
              <div class="h3 py-2">
              <b-icon-plus-square></b-icon-plus-square>
              </div>
              Tenaga Kesehatan
            </button>
          </router-link>
        </v-col>
        <v-col cols="6" sm="6" class="p-4">
          <router-link to="/pasien/register">
            <button class="btn btn-success btn-block btn-round btn-main" >
              <div class="h3 py-2">
              <b-icon-people></b-icon-people>
              </div>
              Remaja
            </button>
          </router-link>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="6" sm="6" class="p-4 mx-auto">
          <router-link to="/admin/register">
            <button class="btn btn-success btn-block btn-round btn-main">
              <div class="h3 py-2">
              <b-icon-person-badge></b-icon-person-badge>
              </div>
              Edukasi Anemia
            </button>
          </router-link>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="12" class="mx-auto">
          <p class="text-secondary text-small">Already have an account? <router-link to="/" class="font-weight-bold text-secondary"> Sign in</router-link> </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: "Register",
  components: {
    
  },
  data() {
    return {

    };
  }
};
</script>
