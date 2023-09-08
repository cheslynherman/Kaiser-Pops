import { createStore } from "vuex";
const url = "https://kaiser-pops-api.onrender.com/";
import axios from "axios";
import router from "@/router";

export default createStore({
  state: {
    products: null,
    product: null,
    users: null,
    user: null,
    asc: true,
    message: null,
  },

  mutations: {
    setProducts: (state, value) => {
      state.products = value;
    },
    setProduct: (state, value) => {
      state.product = value;
    },
    sortProducts: (state) => {
      state.products.sort((a, b) => {
        return a.price - b.price;
      });
      if (!state.asc) {
        state.products.reverse();
      }
      state.asc = !state.asc;
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
      state.asc = !state.asc;
    },
    setUsers: (state, value) => {
      state.users = value;
    },
    setUser: (state, value) => {
      state.user = value;
    },
    setMessage: (state, value) => {
      state.message = value;
    },
  },
  actions: {
    getProducts: async (context) => {
      try {
        const res = await fetch(`${url}products`);
        if (!res.ok) {
          throw new Error("Unable to fetch products");
        }
        const products = await res.json();
        console.log(products.results);
        context.commit("setProducts", products.results);
      } catch (error) {
        context.commit("message", "Error occurred when fetching products");
      }
    },
    getProduct: async (context, id) => {
      try {
        const res = await fetch(`${url}products/${id}`);
        if (!res.ok) {
          throw new Error("Unable to fetch product");
        }
        const { result } = await res.json();
        console.log(result);
        context.commit("setProduct", result);
      } catch (error) {
        console.error(error);
      }
    },
    async delProduct(context, id) {
      try {
        const res = await axios.delete(`${url}products/${id}`);
        const { message, err } = res.data;
        if (err) {
          console.error("An error has occurred: ", err);
          context.commit("setMessage", "Unable to delete product");
        }
        if (message) {
          context.dispatch("getProducts");
          context.commit("setProduct", message);
          console.log("Product has been deleted");
        }
      } catch (e) {
        context.commit("setMessage", "an error occurred");
      }
    },
    async updateProduct(context, payload) {
      try {
        const { res } = await axios.patch(
          `${url}product/${payload.productID}`,
          data
        );
        const { message, err } = await res.data;
        if (err) {
          context.commit("setMessage", err);
        }
        if (message) {
          context.dispatch("getProducts");
          context.commit("setProduct", message);
          context.commit("setMessage", "Successfully updated product.");
        }
      } catch (e) {
        context.commit("setMessage", e);
      }
    },
    // async addProduct(context, payload) {
    //   try {
    //     const {res} = await axios.post(`${url}product`, payload)
    //     const {message, err} = await res.data
    //     if (message) {
    //       context.dispatch("getProducts")
    //       context.commit("setProduct", message)
    //     } else {
    //       context.commit("setMessage", err)
    //     }
    //   } catch (e) {
    //     context.commit("setMessage", e)
    //   }
    // },
    // async addProduct(context, payload) {
    //   try {
    //     const res = await axios.post(`${url}product`, payload)
    //     const {message, err} = await res.data
    //     if (err) {
    //       context.commit("message", "Unable to add products")
    //     }
    //     if (message) {
    //       context.commit ("setProduct", message)
    //     }
    //   } catch (e) {
    //     context.commit ("message", "You incurred an error")
    //   }

    getUsers: async (context) => {
      try {
        const res = await fetch(`${url}users`);
        if (!res.ok) {
          throw new Error("Unable to fetch users");
        }
        const users = await res.json();
        console.log(users.results);
        context.commit("setUsers", users.results);
      } catch (error) {
        context.commit("message", "Error occurred when fetching users");
      }
    },
    getUser: async (context, id) => {
      try {
        const res = await fetch(`${url}users/${id}`);
        if (!res.ok) {
          throw new Error("Unable to fetch user");
        }
        const { result } = await res.json();
        console.log(result);
        context.commit("setUser", result);
      } catch (error) {
        console.error(error);
      }
    },

    async register(context, payload) {
      try {
        const res = await axios.post(`${url}register`, payload);
        const { message, err } = await res.data;
        if (err) {
          context.commit("message", "Unable to register");
        }
        if (message) {
          context.commit("setUser", message);
        }
      } catch (e) {
        context.commit("message", "You incurred an error");
      }
    },
    async delUser(context, id) {
      try {
        const res = await axios.delete(`${url}user/${id}`);
        const { message, err } = res.data;
        if (err) {
          console.error("An error has occured: ", err);
          context.commit("setMessage", "Unable to delete user");
        }
        if (message) {
          context.dispatch("getUsers");
          context.commit("setUser", message);
          console.log("User deleted successfully");
        }
      } catch (e) {
        context.commit("setMessage", "an error occurred");
      }
    },
    async updateUser(context, payload) {
      try {
        const res = await axios.patch(
          `${url}user/${payload.userID}`,
          payload.data
        );
        const { message, err } = res.data;
        if (message) {
          context.commit("setUser", message);
        } else {
          context.commit("setMessage", err);
        }
      } catch (e) {
        context.commit("setMessage", "error occurred while updating user");
      }
    },
    async login(context, payload) {
      const res = await axios.post(`${url}login`, payload);
      const { cresult, err } = await res.data;
      localStorage.setItem("user", JSON.stringify(cresult));
      if (cresult) {
        context.commit("setUser", cresult);
        router.push("/");
      } else {
        context.commit("setMessage", err);
      }
    },
  },
});
