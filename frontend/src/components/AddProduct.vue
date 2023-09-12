<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    class=""
    data-bs-toggle="modal"
    data-bs-target="#addProduct"
  >
    Add Product
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    id="addProduct"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Add Product</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="addProduct">
            <div class="inputs">
              <label for="productName">Product Name</label>
              <input
                type="text"
                v-model="productData.productName"
                id="productName"
                required
              />
            </div>

            <div class="inputs">
              <label for="quantity">Quantity</label>
              <input
                type="number"
                v-model="productData.quantity"
                id="quantity"
                required
              />
            </div>

            <div class="inputs">
              <label for="price">Price</label>
              <input
                type="number"
                v-model="productData.price"
                id="price"
                required
              />
            </div>

            <div class="inputs">
              <label for="category">Category</label>
              <input
                type="text"
                v-model="productData.category"
                id="category"
                required
              />
            </div>

            <div class="inputs">
              <label for="description">Description</label>
              <input
                type="text"
                v-model="productData.descr"
                id="description"
                required
              />
            </div>

            <div class="inputs">
              <label for="prodImg1">Product Image 1</label>
              <input
                type="url"
                v-model="productData.prodImg1"
                id="prodImg1"
                required
              />
            </div>

            <div class="inputs">
              <label for="prodImg2">Product Image 2</label>
              <input
                type="url"
                v-model="productData.prodImg2"
                id="prodImg2"
                required
              />
            </div>
            <button type="button" class="" data-bs-dismiss="modal">
              Close
            </button>
            <button type="submit" class="">
              Save changes
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from '@/router';
export default {
  props: ["product"],
  data() {
    return {
      productData: {
        productName: "",
        quantity: "",
        price: "",
        category: "",
        descr: "",
        prodImg1: "",
        prodImg2: "",
      },
    };
  },
  methods: {
    addProduct() {
      this.$store.dispatch("addProduct", this.productData);
      router.push("/admin");
    },
  },
};
</script>

<style scoped>
button {
  background: #526d82;
  border-radius: 30px;
  width: 120px;
  color: #272829;
  border: 2px solid #526d82;
  box-shadow: 0 0 0 0 transparent;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}
</style>
