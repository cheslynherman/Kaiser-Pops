<template>
  <div v-if="product" class="container-fluid text-center">
    <h1>{{ product[0].productName }}</h1>
    <img
      :src="product[0].prodImg1"
      :alt="product[0].productName"
      class="img-fluid"
    />
    <img
      :src="product[0].prodImg2"
      :alt="product[0].productName"
      class="img-fluid"
    />
    <p>Price: R {{ product[0].price }}</p>
    <p>{{ product[0].descr }}</p>
    <button @click="addToCart(product.productID)">Add To Cart</button>
  </div>
  <div v-else class="d-flex justify-content-center m-3 p-3">
    <SpinnerComp />
  </div>
</template>

<script>
import SpinnerComp from "@/components/SpinnerComp.vue";
export default {
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  mounted() {
    this.$store.dispatch("getProduct", this.$route.params.id);
  },
  components: {
    SpinnerComp,
  },
  methods: {
    addToCart(productID) {
      if (this.user.userID) {
        this.$store.dispatch("addToCart", {
          userID: this.user.userID,
          productID,
        });
      }
    },
  },
};
</script>

<style scoped>
h1,
p {
  text-shadow: 5px 5px 5px #272829, 0px 0px 18px #272829;
  margin: 10px;
}
img {
  height: 400px;
  margin: 10px;
}
button {
  background: #526d82;
  border-radius: 30px;
  width: 150px;
  color: #272829;
  border: 2px solid #526d82;
  box-shadow: 0 0 0 0 transparent;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  margin: 5px;
}

button:hover {
  box-shadow: 0 0 30px 5px #526d82;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}

@media only screen and (max-width: 400px) {
  img {
  height: 250px;
  
}
}
</style>
