<template>
  <router-link :to="'/dokter/detail_pasien/'+data.pasien_id">
  <b-card >
    <b-card-text class="text-left">
        <p class="h5 font-weight-bold text-dark">{{ data.pasien_nama }}</p>
        <small class="text-secondary">{{ data.mdd|moment('MMM Do YYYY') }} </small>
        <p class="text-secondary text-justify">Gejala : {{ data.pasien_gejala }} </p>
        <b-button class="text-right btn btn-sm btn-success float-right px-4">Detail</b-button>
    </b-card-text>
  </b-card>
  </router-link>
</template>

<script>
export default {
  name: "CardPasien",
  props: ["data"],
 
};
</script>

<style>
</style>