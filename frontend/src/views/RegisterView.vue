<template>
  <div class="registerForm">
    <form>
      <div class="inputs">
        <label for="firstName">First Name</label>
        <input
          type="text"
          v-model="payload.firstName"
          id="firstName"
          required
        />
      </div>

      <div class="inputs">
        <label for="lastName">Last Name</label>
        <input type="text" v-model="payload.lastName" id="lastName" required />
      </div>

      <div class="inputs">
        <label for="email">Email Address</label>
        <input type="text" v-model="payload.email" id="email" required />
      </div>

      <div class="inputs">
        <label for="gender">Gender</label>
        <input type="text" v-model="payload.gender" id="gender" required />
      </div>

      <div class="inputs">
        <label for="age">Age</label>
        <input type="number" v-model="payload.age" id="age" required />
      </div>

      <div class="inputs">
        <label for="city">City</label>
        <input type="text" v-model="payload.city" id="city" required />
      </div>

      <div class="inputs">
        <label for="password">Password</label>
        <input
          type="password"
          v-model="payload.userPassword"
          id="password"
          required
        />
      </div>
    </form>
    <button type="submit" @click="addUser()" class="">Save changes</button>
  </div>
</template>

<script>
import router from '@/router';
export default {
  data() {
    return {
      payload: {
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        age: "",
        city: "",
        userPassword: "",
        userImage: "https://i.postimg.cc/K8bnFjqz/icons8-user-96.png",
        roles: "user",
      },
    };
  },
  methods: {
    addUser() {
      this.$store.dispatch("register", this.payload);
      alert("User Has Been Added Successfully");
      router.push("/login")
    },
  },
};
</script>

<style scoped></style>
