<template>
  <div class="home">
    <Appbar :page="page"/>
    <v-container fill-height class="text-center">
      <v-row justify="center" align="center" >
        <v-col cols="12" sm="6" 
        class="mx-auto" 
        v-for="data in result" :key="data.artikel_id">
          <CardArtikel :data="data" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Appbar from "@/components/Appbar.vue";
import CardArtikel from "@/components/CardArtikel.vue";
import axios from "axios";

export default {
  name: "Artikel_pasien",
  components: {
    Appbar,
    CardArtikel,
  },
  data() {
    return {
      result: [],
      page: {
        path: '/pasien/home',
        title: 'Tabel Artikel',
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
      .get("https://srikandi.yogiyulianto.com/artikel/show")
      .then((response) => this.setResult(response.data.result))
      .catch((error) => console.log(error));
  },
};
</script>
