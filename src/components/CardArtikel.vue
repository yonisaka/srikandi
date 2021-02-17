<template>
  <router-link :to="'/admin/detail_artikel/'+data.artikel_id+'/'+data.artikel_judul">
  <b-card :img-src="data.artikel_filepath" 
  img-alt="Card image" 
  img-left
  img-width="160px"
  img-height="160px"
  >
    <b-card-text class="text-left">
        <p class="h5 font-weight-bold text-dark">{{ data.artikel_judul }}</p>
        <small class="text-secondary">{{ data.artikel_tanggal|moment('MMM Do YYYY') }} </small>
        <p class="text-secondary text-justify">{{ data.isi_ringkas }} </p>
    </b-card-text>
  </b-card>
  </router-link>
</template>

<script>
export default {
  name: "CardArtikel",
  props: ["data"],
 
};
</script>

<style>
</style>