import { createStore } from 'vuex'
const url = "https://kaiser-pops-api.onrender.com/"
import axios from 'axios'

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
      state.products.sort ((a, b) =>{
        return a.price - b.price;
      });
      if (!state.asc){
        state.products.reverse();
      }
      state.asc= !state.asc 
    },
    sortByName: (state) => {
      state.products.sort((a, b) => {
        if (a.productName < b.productName) {
          return -1;
        }
        if (a.productName > b.productName) {
          return 1;
        }
        return 0;
      });
      if (!state.asc) {
        state.products.reverse();
      }
      state.asc = !state.asc
    },
    setUsers: (state, value) => {
      state.users= value
    },
    setUser: (state, value) => {
      state.user = value
    }
  },
  actions: { 
    getProducts: async (context) => {
      try {
        const res = await fetch(`${url}products`);
        if (!res.ok) {
          throw new Error("Unable to fetch products");
        }
        const products = await res.json();
        console.log(products.results)
        context.commit("setProducts", products.results);
        
      } catch (error) {
        context.commit(true);
        
      }
    },
    getProduct: async (context, id) => {
      try {
        const res = await fetch (`${url}products/${id}` );
        if(!res.ok) {
          throw new Error ("Unable to fetch product");
        }
        const {result} = await res.json();
        console.log(result)
        context.commit("setProduct", result);
      } catch (error) {
        console.error(error);
      }
    },
    async addProduct(context, payload) {
      
    },
    getUsers: async (context) => {
      try {
        const res = await fetch (`${url}users`)
        if (!res.ok) {
          throw new Error ("Unable to fetch users");
        }
        const users = await res.json();
        console.log (users.results)
        context.commit ("setUsers", users.results);
      } catch (error) {
        context.commit(true);
      }
    },
    getUser: async (context, id) => {
      try {
        const res = await fetch (`${url}users/${id}`);
        if (!res.ok) {
          throw new Error ("Unable to fetch user");
        }
        const {result} = await res.json();
        console.log (result)
        context.commit ("setUser", result);
      } catch (error) {
        console.error(error);
      }
    },
    async register (context, payload) {
      try {
        const res = await axios.post(`${url}register`, payload);
        const { message, err}= await res.data;
        if (err) {
          context.commit("message", "Unable to register");
        }
        if (message) {
          context.commit ("setUser", message);
        }
      } catch(e) {
        context.commit("message", "You incurred an error");
      }
    }
  },
  
})
