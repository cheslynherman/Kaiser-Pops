<template>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#addProduct"
    >
      Add User
    </button>
  
    <!-- Modal -->
    <div
      class="modal fade"
      id="addProduct"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Add Product</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form >
              <div class="inputs">
                <label for="firstName">First Name</label>
                <input type="text" v-model="payload.firstName" id="firstName" required />
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
  
              <div class="inputs">
                <label for="userImage">User Image</label>
                <input type="url" v-model="payload.userImage" id="userImage" required />
              </div>
  
              <div class="inputs">
                <label for="role">Role</label>
                <input type="text" v-model="payload.roles" id="role" required />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="" data-bs-dismiss="modal">Close</button>
            <button type="submit" @click="addUser" class="">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
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
          this.$store.dispatch("register", this.payload)
          alert ("User Has Been Added Successfully");
          window.location.reload()
      }
    }
  };
  </script>
  
  <style scoped></style>
  