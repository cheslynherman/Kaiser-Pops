<template>
  <table>
    <tr>
      <th>Product Image</th>
      <th>Product Name</th>
      <th>Price</th>
      <th>Action</th>
    </tr>
  </table>
  <tbody v-for="product in getCart" :key="product.id">
    <tr>
      <td><img :src="product.prodImg1" /></td>
      <td>{{ product.productName }}</td>
      <td>{{ product.price }}</td>
      <td><button @click="deleteFromCart(product.orderId)">Remove</button></td>
    </tr>
  </tbody>
</template>

<script>
export default {
  Name: "setCart",
  computed: {
    getCart() {
      return this.$store.state.cart;
    },
    user() {
      return this.$store.state.userData;
    },
  },
  mounted() {
    this.$store.dispatch("getCart", this.user.userID);
  },
  methods: {
    deleteFromCart(orderId) {
      const userID = this.user.userID;
      this.$store.dispatch("deleteFromCart", { userID, orderId })
      .then(() => {
        alert ("Product has been removed from cart")
      })
      .catch((error) => {
        console.error("Unable to remove from cart", error)
      })
    },
  },
};
</script>

<style scoped></style>
