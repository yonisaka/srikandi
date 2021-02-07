<template>
  <b-card class="card-data">
    <b-card-title>
        <h4 class="pb-2"> {{ data.video_judul}} </h4>
        <Media 
          width="100%"
          :kind="'video'"
          :controls="true"
          :src="data.video_filepath"
        >
        </Media>
        <small class="text-small float-left">By : {{ data.mdb_name }} {{ data.mdd }}</small>
    </b-card-title>
  </b-card>
</template>

<script>
import Media from '@dongido/vue-viaudio'

export default {
  name: "CardVideo",
  props: ["data"],
  components: {
    Media,
  },
  methods: {
 
  }
};
</script>