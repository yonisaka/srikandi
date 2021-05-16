<template>
  <div class="home">
    <Appbar :page="page"/>
    <v-container fill-height class="text-center">
      <v-row justify="center" align="center" >
        <v-col cols="12" sm="6" 
        class="mx-auto" 
        v-for="data in result" :key="data.konsultasi_id">
          <CardPasien :data="data" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Appbar from "@/components/Appbar.vue";
import CardPasien from "@/components/CardPasien.vue";
import axios from "axios";

export default {
  name: "Artikel_admin",
  components: {
    Appbar,
    CardPasien,
  },
  data() {
    return {
      result: [],
      page: {
        path: '/dokter/home',
        title: 'Data Patient',
      }
    };
  },
  methods: {
    setResult(data) {
      this.result = data;
    },
  },
  mounted() {
    axios
      .get("https://srikandi.yogiyulianto.com/konsultasi/show")
      .then((response) => this.setResult(response.data.result))
      .catch((error) => console.log(error));
  },
};
</script>
