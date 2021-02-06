<template>
  <div class="home">
    <Appbar :page="page"/>
    <v-container fill-height class="text-center">
      <v-row justify="center" align="center" >
        <v-col cols="12" sm="6" class="mx-auto">
          <b-card img-src="https://placekitten.com/100/100" img-alt="Card image" img-left class="mb-3">
            <b-card-text>
                Some quick example text to build on the card and make up the bulk of the card's content.
            </b-card-text>
          </b-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Appbar from "@/components/Appbar.vue";
export default {
  name: "Artikel_admin",
  components: {
    Appbar,
  },
  data() {
    return {
      page: {
        path: '/admin/home',
        title: 'Tabel Artikel',
      }
    };
  }
};
</script>
