<template>
  <section>
    <div>
      <h1>
        inventory-tracker
      </h1>
      <h2>
        Inventory Tracker for Augur&#39;s Lore Tabletop Roleplaying Game
      </h2>
    </div>
  </section>
</template>

<script>

export default {
  
  mounted() {
    this.$axios.$get('/api/test').then((data) => {
      console.log(data);
    })
  }
}
</script>

<style>

</style>
