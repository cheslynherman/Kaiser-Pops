import { createStore } from 'vuex'
const url = "https://kaiser-pops-api.onrender.com/"

export default createStore({
  state: {
    products: null,
    product: null,
    users: null,
    user: null,
    asc: true,

  },
 
  mutations: {
    setProducts: (state, value)=> {
      state.products = value
    },
    setProduct: (state, value) => {
      state.product = value
    },
    sortProducts: (state) => {
      
    }
  },
  actions: {
  },
  
})
