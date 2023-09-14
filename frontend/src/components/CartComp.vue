<template>
    <h2 class="text-center">Checkout</h2>
  <div class="checkout container-fluid d-flex justify-content-center text-center">
    <table>
      <tr>
        <th>Product Image</th>
        <th>Product Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
      <tbody v-for="product in getCart" :key="product.id">
        <tr>
          <td><img :src="product.prodImg1" /></td>
          <td>{{ product.productName }}</td>
          <td>{{ product.price }}</td>
          <td>
            <button @click="deleteFromCart(product.orderId)">Remove</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
table {
  width: 80%;
}
th,
td {
  border: 2px solid #526d82;
  
}
</style>
