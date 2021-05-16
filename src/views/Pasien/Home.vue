<template>
  <div class="home">
    <!-- <Appbar /> -->
    <div @click="logout" class="btn-exit mt-4 ml-3">
      <h5><b-icon-box-arrow-left></b-icon-box-arrow-left></h5>
    </div>
    <v-container fill-height class="text-center mt-5">
      <v-row justify="center" align="center" class="mt-3">
        <v-col cols="10" sm="4" class="mx-auto mt-5">
          <p class="text-title h5 font-weight-bold">Welcome, {{ user.username }}</p>
          <p class="text-subtitle h6 text-secondary mt-3">
            Health information system <br> to handle anemia deasese <br> Indonesian adolescents
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
              Anemia Education
            </button>
          </router-link>
        </v-col>
        <v-col cols="6" sm="6" class="p-4">
          <router-link to="/pasien/list_konsultasi">
            <button class="btn btn-success btn-block btn-round btn-main">
              <div class="h3 py-3">
              <b-icon-person-badge></b-icon-person-badge>
              </div>
              Consultation data
            </button>
          </router-link>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" sm="6" class="p-4 mx-auto">
          <router-link to="/pasien/add_konsultasi">
            <button class="btn btn-success btn-block btn-round btn-main">
              <div class="h3 py-3">
              <b-icon-person-check></b-icon-person-check>
              </div>
              Consultation
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
              this.$toast.success("Success Logout", {
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
