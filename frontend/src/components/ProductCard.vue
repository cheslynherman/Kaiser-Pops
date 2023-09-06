<template>
  <router-link :to="{ name: 'product', params: { id: product.productID } }">
    <div class="card">
      <img
        :src="product.prodImg1"
        class="card-img-top"
        :alt="product.productName"
      />
      <div class="card-body">
        <h4 class="card-title">{{ product.productName }}</h4>
        <p class="card-text">R {{ product.price }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
    props: ["product"],
};
</script>

<style scoped>

.card {
    width: 20rem;
    background: transparent !important;
    border: 1px solid #526D82;
    border-radius: 0px;
}
a {
    text-decoration: none;
}
.card-body {
    text-shadow: 5px 5px 5px #272829, 0px 0px 18px #272829;
}
</style>
