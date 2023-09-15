<template>
  <div class="options container-fluid d-flex justify-content-around">
    <div>
      <input type="text" v-model="search" placeholder="search" />
      <select v-model="category">
        <option value="All">All</option>
        <option value="Anime">Anime</option>
        <option value="Horror">Horror</option>
        <option value="Marvel">Marvel</option>
        <option value="Cartoons">Cartoons</option>
        <option value="Fantasy">Fantasy</option>
      </select>
    </div>
    <div>
      <button @click="sortByPrice" class="sort">Sort By Price</button>
      <button @click="sortByName" class="sort">Sort By Name</button>
    </div>

    <div>
      <router-link to="/cart" class="cart">
        <img
          src="https://i.postimg.cc/sx6sXqfw/icons8-cart-100-2.png"
          alt="cart"
          class="cart-img img-fluid"
        />
      </router-link>
    </div>
  </div>

  <div class="">
    <p class="text-center">↡ Click on items below to view product details ↡</p>
  </div>
  <div v-if="products" class="display container-fluid">
    <ProductCard
      v-for="product of products"
      :key="product.productID"
      :product="product"
    />
  </div>
  <div v-else class="d-flex justify-content-center"><SpinnerComp /></div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import SpinnerComp from "@/components/SpinnerComp.vue";
export default {
  data() {
    return {
      search: "",
      category: "All",
    };
  },
  methods: {
    sortByPrice() {
      this.$store.commit("sortProducts");
    },
    sortByName() {
      this.$store.commit("sortByName");
    },
  },
  computed: {
    products() {
      return this.$store.state.products?.filter((product) => {
        let isMatch = true;
        if (
          !product.productName.toLowerCase().includes(this.search.toLowerCase())
        ) {
          isMatch = false;
        }
        if (this.category !== "All" && this.category !== product.category) {
          isMatch = false;
        }
        return isMatch;
      });
    },
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
  components: {
    ProductCard,
    SpinnerComp,
  },
};
</script>

<style scoped>
input,
select,
button {
  margin: 10px;
  background: #526d82;
  color: #272829;
  border: 2px solid #526d82;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}
input:hover,
select:hover,
button:hover {
  box-shadow: 0 0 20px 5px #526d82;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
  transform: translateY(-0.33em)
}
.cart {
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}
.cart:hover {
  box-shadow: 0 0 20px 5px #526d82;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
  transform: translateY(-0.33em)
}
input,
select,
.sort {
  border-radius: 30px;
  padding: 3px;
}

input,
select {
  width: 200px;
}

.sort {
  width: 150px;
}
::placeholder {
  color: #272829;
}
.cart,
.cart-img {
  border-radius: 80px;
}
.cart-img {
  height: 40px;
}

.text-center {
  text-shadow: 5px 5px 5px #272829, 0px 0px 18px #272829;
  text-transform: capitalize;
}

.display {
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-content: center;
}

@media only screen and (max-width: 800px) {
  .display {
    display: grid;
    grid-template-columns: auto auto;
  }
}

@media only screen and (max-width: 650px) {
  .display {
    display: grid;
    grid-template-columns: auto;
  }
  .options {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  button {
    width: 200px !important;
  }
}
</style>
