<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    @click="editProd(product.productID)"
    class=""
    data-bs-toggle="modal"
    :data-bs-target="'#editProduct' + product.productID"
  >
    Edit
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    :id="'editProduct' + product.productID"
    tabindex="-1"
    :aria-labelledby="'exampleModalLabel' + product.productID"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Product</h1>
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
              <label for="productID">Product ID</label>
              <input
                type="text"
                v-model="updateProd.productID"
                id="productID"
              />
            </div>
            <div class="inputs">
              <label for="productName">Product Name</label>
              <input
                type="text"
                v-model="updateProd.productName"
                id="productName"
              />
            </div>
            <div class="inputs">
              <label for="quantity">Quantity</label>
              <input
                type="number"
                v-model="updateProd.quantity"
                id="productID"
              />
            </div>
            <div class="inputs">
              <label for="price">Price</label>
              <input type="number" v-model="updateProd.price" id="price" />
            </div>
            <div class="inputs">
              <label for="category">Category</label>
              <input type="text" v-model="updateProd.category" id="category" />
            </div>
            <div class="inputs">
              <label for="desc">Description</label>
              <input type="text" v-model="updateProd.descr" id="desc" />
            </div>
            <div class="inputs">
              <label for="prodImg1">Product Image 1</label>
              <input type="url" v-model="updateProd.prodImg1" id="prodImg1" />
            </div>
            <div class="inputs">
              <label for="prodImg2">Product Image 2</label>
              <input type="url" v-model="updateProd.prodImg2" id="prodImg2" />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            @click="updateProduct(product.productID)"
            class=""
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  data() {
    return {
      updateProd: {
        ...this.product,
      },
      updateProdID: null,
      product: {
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
  computed: {
    currentProd() {
      return this.$store.state.product;
    },
  },
  methods: {
    editProd(productID) {
      this.updateProdID = productID;
      this.updateProd = {
        ...this.$store.state.products.find(
          (product) => product.productID === productID
        ),
      };
    },
    updateProduct(productID) {
        this.$store.dispatch("updateProduct", {
            productID: productID,
            ...this.updateProd,
        })
        .then(() => {
            console.log("updated")
        })
        .catch((err) => {
            console.error("error while updating", err)
        })
    }
  },
};
</script>

<style scoped>
button {
    background: #526D82;
    border-radius: 30px;
    width: 100px;
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
