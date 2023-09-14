<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    @click="editProd(product?.productID)"
    class=""
    data-bs-toggle="modal"
    :data-bs-target="'#editProduct' + product?.productID"
  >
    Edit
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    :id="'editProduct' + product?.productID"
    tabindex="-1"
    :aria-labelledby="'editProduct' + product?.productID"
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
          <form @submit.prevent="updateProduct">
            <div class="inputs">
              <label for="exampleFormControlInput1" class="form-label"
                >Product Name</label
              >
              <input
                type="text"
                v-model="payload.productName"
                class="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div class="inputs">
              <label for="exampleFormControlInput1" class="form-label"
                >Quantity</label
              >
              <input
                type="number"
                v-model="payload.quantity"
                class="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div class="inputs">
              <label for="exampleFormControlInput1" class="form-label"
                >Price</label
              >
              <input
                type="number"
                v-model="payload.price"
                class="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div class="inputs">
              <label for="exampleFormControlInput1" class="form-label"
                >Category</label
              >
              <input
                type="text"
                v-model="payload.category"
                class="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div class="inputs">
              <label for="exampleFormControlInput1" class="form-label"
                >Description</label
              >
              <input
                type="text"
                v-model="payload.descr"
                class="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div class="inputs">
              <label for="exampleFormControlInput1" class="form-label"
                >Product Image 1</label
              >
              <input
                type="url"
                v-model="payload.prodImg1"
                class="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div class="inputs">
              <label for="exampleFormControlInput1" class="form-label"
                >Product Image 2</label
              >
              <input
                type="url"
                v-model="payload.prodImg2"
                class="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <button type="reset" class="">Reset</button>
            <button type="submit" class="" data-bs-dismiss="modal">Save</button>
          </form>
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
      payload: {
        productID: this.product?.productID,
        productName: this.product?.productName,
        quantity: this.product?.quantity,
        price: this.product?.price,
        category: this.product?.category,
        descr: this.product?.descr,
        prodImg1: this.product?.prodImg1,
        prodImg2: this.product?.prodImg2,
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
    updateProduct() {
      this.$store.dispatch("updateProduct", this.payload)
    
    },
  },
};
</script>

<style scoped>
.inputs {
  margin: 10px;
}

.modal-content {
  background: #ffdd83;
}

input {
  border: 2px solid #526d82 !important;
  background: #526d82 !important;
  border-radius: 30px !important;
  color: #272829;
  box-shadow: 0 0 0 0 transparent;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}

input:hover {
  background: #526d82;
  box-shadow: 0 0 30px 5px #526d82;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}
button {
  background: #526d82;
  border-radius: 30px;
  width: 100px;
  margin: 10px;
  color: #272829;
  border: 2px solid #526d82;
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

