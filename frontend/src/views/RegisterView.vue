<template>
  <h2 class="text-center">Register</h2>
  <div class="registerForm container-fluid">
    <form>
      <div class="inputs">
        <label for="exampleFormControlInput1" class="form-label"
          >First Name</label
        >
        <input
          type="text"
          v-model="payload.firstName"
          class="form-control"
          id="exampleFormControlInput1"
          required
          oninvalid="this.setCustomValidity('Please insert your first name')"
          oninput="this.setCustomValidity('')"
        />
      </div>

      <div class="inputs">
        <label for="exampleFormControlInput1" class="form-label"
          >Last Name</label
        >
        <input
          type="text"
          v-model="payload.lastName"
          class="form-control"
          id="exampleFormControlInput1"
          required
          oninvalid="this.setCustomValidity('Please insert your last name')"
          oninput="this.setCustomValidity('')"
        />
      </div>

      <div class="inputs">
        <label for="exampleFormControlInput1" class="form-label"
          >Email Address</label
        >
        <input
          type="text"
          v-model="payload.email"
          class="form-control"
          id="exampleFormControlInput1"
          required
          oninvalid="this.setCustomValidity('Please insert your email address')"
          oninput="this.setCustomValidity('')"
        />
      </div>

      <div class="inputs">
        <label for="exampleFormControlInput1" class="form-label">Gender</label>
        <input
          type="text"
          v-model="payload.gender"
          class="form-control"
          id="exampleFormControlInput1"
          required
          oninvalid="this.setCustomValidity('Please state your gender')"
          oninput="this.setCustomValidity('')"
        />
      </div>

      <div class="inputs">
        <label for="exampleFormControlInput1" class="form-label">Age</label>
        <input
          type="number"
          v-model="payload.age"
          class="form-control"
          id="exampleFormControlInput1"
          required
          oninvalid="this.setCustomValidity('Please state your age')"
          oninput="this.setCustomValidity('')"
        />
      </div>

      <div class="inputs">
        <label for="exampleFormControlInput1" class="form-label">City</label>
        <input
          type="text"
          v-model="payload.city"
          class="form-control"
          id="exampleFormControlInput1"
          required
          oninvalid="this.setCustomValidity('Please insert your residing city')"
          oninput="this.setCustomValidity('')"
        />
      </div>

      <div class="inputs">
        <label for="exampleFormControlInput1" class="form-label"
          >Password</label
        >
        <input
          type="password"
          v-model="payload.userPassword"
          class="form-control"
          id="exampleFormControlInput1"
          required
          minlength="5"
          oninvalid="this.setCustomValidity('Please insert a strong password')"
          oninput="this.setCustomValidity('')"
        />
      </div>
    </form>
    <p class="text-center m-1">All fields are required</p>
    <div class="text-center">
      <button type="submit" @click="addUser()" class="">Register</button>
    </div>
  </div>
</template>

<script>
import router from "@/router";
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
      router.push("/login");
    },
  },
};
</script>

<style scoped>
.registerForm {
  border: 2px solid #526d82;
  width: 30%;
  margin: auto;
}
.inputs {
  width: 80%;
  margin: auto;
  padding: 10px;
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
  border: 2px solid #526d82;
  border-radius: 30px;
  width: 150px;
  margin: 20px;
  box-shadow: 0 0 0 0 transparent;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}

button:hover {
  background: #526d82;
  box-shadow: 0 0 30px 5px #526d82;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}

@media only screen and (max-width: 800px) {
  .registerForm {
    width: 70%;
  }
}

@media only screen and (max-width: 400px) {
  .registerForm {
    width: 85%;
  }
}
</style>
