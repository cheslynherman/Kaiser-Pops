<template>
  <div class="form">
    <form @submit.prevent="login">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Email address:</label
        >
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          required
          v-model="payload.email"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label"
          >Password:</label
        >
        <input
          type="password"
          class="form-control"
          id="exampleFormControlTextarea1"
          required
          v-model="payload.userPassword"
        />
      </div>
      <div class="link">
        <router-link to="/register">Not signed up yet?</router-link>
      </div>
      <div class="text-center">
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
</template>

<!-- <script>

import {useCookies} from 'vue3-cookies'
const {cookies} = useCookies()
export default {
    data() {
        return {
            payload: {
                email: "",
                userPassword: ""
            }
        }
    },
    computed: {
      message() {
        return this.$store.state.message
      },
      user() {
        return this.$store.state.user
      }
    },
    methods: {
        login() {
            this.$store.dispatch("login", this.payload)
            this.$router.push("/")
        }
    },
    mounted() {
      console.log(cookies.get("setToken"))
    }
};
</script> -->

<script>
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
export default {
  props: ['payload'],

    data() {
        return {
            payload: {
                email: "",
                userPassword: "",
            }
        }
    },

    computed: {
        message() {
            return this.$store.state.message
        },

        user() {
            return this.$store.state.user
        }
    },

    methods: {
        login() {
            this.$store.dispatch('login', this.payload)
            this.$router.push("/");
        }
    },

    mounted() {
      console.log(cookies.get('setToken'));
    }
};
</script>


<style scoped>
.form {
  width: 30%;
  border: 2px solid #526d82;
  margin: auto;
  padding: 20px;
}
.link {
  text-align: right;
}
a {
  text-decoration: none;
  color: #272829;
}

label {
  text-shadow: 5px 5px 5px #272829, 0px 0px 18px #272829;
  
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
</style>
