<template>
  <div>
    <b-navbar variant="faded" type="light">
        <router-link to="/add_article">
          <b-icon-arrow-left-short class="h3 my-3 text-secondary"></b-icon-arrow-left-short>
        </router-link>
        <b-navbar-brand tag="h1" class="mb-0 my-3 mx-auto pr-3">Tabel Artikel</b-navbar-brand>
    </b-navbar>
  </div>
</template>

<script>
export default {
    name: 'Appbar'
}
</script>

<style>

</style>