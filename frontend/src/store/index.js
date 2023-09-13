import { createStore } from "vuex";
const url = "https://kaiser-pops-api.onrender.com/";
import axios from "axios";
// import sweet from 'sweet-alert'
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
import router from "@/router";

export default createStore({
  state: {
    products: null,
    product: null,
    users: null,
    user: null || JSON.parse(localStorage.getItem("user")),
    userAuthorization: null,
    loggedUser: false,
    asc: true,
    message: null,
    cart: null,
    userData: null,
    token: null || localStorage.getItem("token"),
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
    setUsers: (state, users) => {
      state.users = users;
    },
    setUser: (state, user) => {
      (state.user = user),
        (state.userAuthorization = true),
        localStorage.setItem("user", JSON.stringify(user));
    },
    setLoggedUser: (state, loggedUser) => {
      state.loggedUser = loggedUser;
    },
    setMessage: (state, value) => {
      state.message = value;
    },
    setCart: (state, value) => {
      state.cart = value;
    },
    addToCart(state, product) {
      state.cart.push(product);
    },
    removeFromCart(state, orderId) {
      state.cart = state.cart.filter((cart) => cart.orderId !== orderId);
    },
    setToken: (state, token) => {
      state.token = token;
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
    async addProduct(context, payload) {
      try {
        const { message, err } = (await axios.post(`${url}product`, payload))
          .data;
        if (message) {
          context.commit("setProduct", message);
          context.dispatch("getProducts");
        } else {
          context.commit("setMessage", err);
        }
      } catch (e) {
        context.commit("setMessage", e);
      }
    },
    // async getCart(context, id) {
    //   const res = await axios.get(`${url}user/${id}/carts`);
    //   context.commit("setCart");
    // },

    // async addProdToCart({ commit }, { userID, productID }) {
    //   try {
    //     const res = await axios.post(`${url}user/${userID}}/cart`, {
    //       userID,
    //       productID,
    //     });
    //     if (res.status === 200) {
    //       commit("addToCart", res.data);
    //     } else {
    //     }
    //   } catch (error) {
    //     console.error(error);
    //   }
    // },
    // async deleteFromCart({ commit }, { userID, orderId }) {
    //   try {
    //     await axios.delete(`${url}user/${userID}/cart/${orderId}`);
    //     commit("removeFromCart", orderId);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // },

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

    async getUser(context, payload) {
      try {
        const { data } = await axios.get(
          `${url}user/${payload.userID}`,
          payload.data
        );
        context.commit("setUser", data.result);
      } catch (err) {
        context.commit("setMessage", "An error occurred while fetching user");
      }
    },
    // getUser: async (context, id) => {
    //   try {
    //     const res = await fetch(`${url}users/${id}`);
    //     if (!res.ok) {
    //       throw new Error("Unable to fetch user");
    //     }
    //     const { result } = await res.json();
    //     console.log(result);
    //     context.commit("setUser", result);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // },

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
      try {
        const res = await axios.post(`${url}login`, payload);
        const { err, token, message, result } = await res.data;

        if (result) {
          context.commit("setUser", result);
          context.commit("setToken", token);
          localStorage.setItem("setToken", token);
          localStorage.setItem("user", JSON.stringify(result));
          cookies.set("AuthUser", { token, message, result });
          context.commit("setMessage", message);
        } else {
          context.commit("setMessage", err);
        }
      } catch (e) {
        console.error(e);
      }
    },
  },
});
