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
          <form>
            <div class="inputs">
              <label for="productName">Product Name</label>
              <input
                type="text"
                v-model="payload.productName"
                id="productName"
                required
              />
            </div>

            <div class="inputs">
              <label for="quantity">Quantity</label>
              <input
                type="number"
                v-model="payload.quantity"
                id="quantity"
                required
              />
            </div>

            <div class="inputs">
              <label for="price">Price</label>
              <input
                type="number"
                v-model="payload.price"
                id="price"
                required
              />
            </div>

            <div class="inputs">
              <label for="category">Category</label>
              <input
                type="text"
                v-model="payload.category"
                id="category"
                required
              />
            </div>

            <div class="inputs">
              <label for="description">Description</label>
              <input
                type="text"
                v-model="payload.descr"
                id="description"
                required
              />
            </div>

            <div class="inputs">
              <label for="prodImg1">Product Image 1</label>
              <input
                type="url"
                v-model="payload.prodImg1"
                id="prodImg1"
                required
              />
            </div>

            <div class="inputs">
              <label for="prodImg2">Product Image 2</label>
              <input
                type="url"
                v-model="payload.prodImg2"
                id="prodImg2"
                required
              />
            </div>
          </form>
          <div class="modal-footer">
            <button type="button" class="" data-bs-dismiss="modal">
              Close
            </button>
            <button type="submit" @click="addProduct()" class="">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      payload: {
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
      this.$store.dispatch("addProduct", this.payload);
      alert("Product Has Been Added Successfully");
      window.location.reload();
    },
  },
};
</script>

<style scoped>
button {
    background: #526D82;
    border-radius: 30px;
    width: 120px;
    color: #272829;
    border: 2px solid #526D82;
    box-shadow: 0 0 0 0 transparent;
    -webkit-transition: all 0.2s ease-in;
    -moz-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
}

button:hover {
    box-shadow: 0 0 30px 5px #526d82;
    -webkit-transition: all 0.2s ease-out;
    -moz-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;
}
</style>
