<template>
  <div class="home">
    <Appbar :page="page"/>
    <v-container fill-height class="text-center">
      <v-row justify="center" align="center" >
        <v-col 
        cols="12" sm="6" 
        class="mx-auto" v-for="data in result" :key="data.video_id">
          <CardVideo :data="data" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Appbar from "@/components/Appbar.vue";
import CardVideo from "@/components/CardVideo.vue";
import axios from "axios";

export default {
  name: "Video_admin",
  components: {
    Appbar,
    CardVideo,
  },
  data() {
    return {
      result: [],
      page: {
        path: '/admin/home',
        title: 'Table Video',
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
      .get("https://srikandi.yogiyulianto.com/video/show")
      .then((response) => this.setResult(response.data.result))
      .catch((error) => console.log(error));
  },
};
</script>
