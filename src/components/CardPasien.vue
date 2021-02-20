<template>
  <router-link :to="'/'+user.role+'/detail_pasien/'+data.konsultasi_id">
  <b-card >
    <b-card-text class="text-left">
        <p class="h5 font-weight-bold text-dark">{{ data.pasien_nama }}</p>
        <small class="text-secondary">{{ data.tanggal_konsultasi|moment('MMM Do YYYY') }} </small>
        <p class="text-secondary text-justify">HB : {{ data.pasien_homoglobin }} <br> Gejala : {{ data.pasien_gejala }} </p>
        <b-button class="text-right btn btn-sm btn-success float-right px-4">Detail</b-button>
    </b-card-text>
  </b-card>
  </router-link>
</template>

<script>
export default {
  name: "CardPasien",
  props: ["data"],
  data() {
    return {
      user: this.$session.get('user'),
    };
  },
};
</script>

<style>
</style>