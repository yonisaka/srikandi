<template>
  <div class="home">
    <Appbar :page="page"/>
    <v-container fill-height class="text-center">
      <v-row justify="center" align="center" >
        <v-col cols="10" sm="6" 
        class="mx-auto">
            <b-img :src="data.artikel_filepath" fluid alt="Image"></b-img>
            <p class="text-left text-dark text-small pt-2">{{ data.artikel_tanggal|moment('MMM Do YYYY') }} </p>
            <p class="text-dark text-justify">{{ data.artikel_isi }} </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Appbar from "@/components/Appbar.vue";
import axios from "axios";

export default {
  name: "Detail_artikel",
  components: {
    Appbar,
  },
  data() {
    return {
      data: {},
      page: {
        path: '/admin/list_artikel',
        title: this.$route.params.title,
      }
    };
  },
  methods: {
    setData(data) {
      this.data = data;
    },
  },
  mounted() {
    axios
      .get("https://srikandi.yogiyulianto.com/artikel/show?artikel_id=" + this.$route.params.id)
      .then((response) => this.setData(response.data.result))
      .catch((error) => console.log(error));
  },
};
</script>
