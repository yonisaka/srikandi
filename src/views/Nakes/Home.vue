<template>
  <div class="home">
    <!-- <Appbar /> -->
    <div @click="logout" class="btn-exit mt-4 ml-3">
      <h5><b-icon-box-arrow-left></b-icon-box-arrow-left></h5>
    </div>
    <v-container fill-height class="text-center mt-5">
      <v-row justify="center" align="center" class="mt-5">
        <v-col cols="10" sm="4" class="mx-auto mt-5">
          <p class="text-title h5 font-weight-bold">Welcome, {{ user.username }}</p>
          <p class="text-subtitle h6 text-secondary mt-3">
            Health information system <br> to handle anemia deasese <br> Indonesian adolescents
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
              Add patient data
            </button>
          </router-link>
        </v-col>
        <v-col cols="6" sm="6" class="p-4">
          <router-link to="/dokter/pasien">
            <button class="btn btn-success btn-block btn-round btn-main">
              <div class="h3 py-3">
              <b-icon-newspaper></b-icon-newspaper>
              </div>
              See patient
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
  },
  methods: {
    logout() {
      this.$confirm(
        {
          message: `Are you sure want to logout?`,
          button: {
            no: 'No',
            yes: 'Yes'
          },
          /**
          * Callback Function
          * @param {Boolean} confirm 
          */
          callback: confirm => {
            if (confirm) {
              // ... do something
              this.$session.destroy();
              this.$toast.success("Success", {
                type: "success",
                position: "top-right",
                duration: 3000,
                dismissible: true,
              });
              window.location.href = '/';
              // this.$router.push({ path: "/", redirect: '/'})
            }
          }
        }
      )
    }
  }
};
</script>
