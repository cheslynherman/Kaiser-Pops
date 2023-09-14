<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    class=""
    data-bs-toggle="modal"
    data-bs-target="#addUser"
  >
    Add User
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    id="addUser"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Add User</h1>
          <button type="button" data-bs-dismiss="modal">X</button>
        </div>
        <div class="modal-body">
          <form>
            <p>All fields are required</p>
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
                oninvalid="this.setCustomValidity('Please insert first name')"
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
                oninvalid="this.setCustomValidity('Please insert last name')"
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
                oninvalid="this.setCustomValidity('Please insert email address')"
                oninput="this.setCustomValidity('')"
              />
            </div>

            <div class="inputs">
              <label for="exampleFormControlInput1" class="form-label"
                >Gender</label
              >
              <input
                type="text"
                v-model="payload.gender"
                class="form-control"
                id="exampleFormControlInput1"
                required
                oninvalid="this.setCustomValidity('Please insert gender')"
                oninput="this.setCustomValidity('')"
              />
            </div>

            <div class="inputs">
              <label for="exampleFormControlInput1" class="form-label"
                >Age</label
              >
              <input
                type="number"
                v-model="payload.age"
                class="form-control"
                id="exampleFormControlInput1"
                required
                oninvalid="this.setCustomValidity('Please insert age')"
                oninput="this.setCustomValidity('')"
              />
            </div>

            <div class="inputs">
              <label for="exampleFormControlInput1" class="form-label"
                >City</label
              >
              <input
                type="text"
                v-model="payload.city"
                class="form-control"
                id="exampleFormControlInput1"
                required
                oninvalid="this.setCustomValidity('Please insert residing city')"
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
                oninvalid="this.setCustomValidity('Please set password')"
                oninput="this.setCustomValidity('')"
              />
            </div>

            <div class="inputs">
              <label for="exampleFormControlInput1" class="form-label"
                >User Image</label
              >
              <input
                type="url"
                v-model="payload.userImage"
                class="form-control"
                id="exampleFormControlInput1"
                required
                oninvalid="this.setCustomValidity('Please insert user image url')"
                oninput="this.setCustomValidity('')"
              />
            </div>

            <div class="inputs">
              <label for="exampleFormControlInput1" class="form-label"
                >Role</label
              >
              <input
                type="text"
                v-model="payload.roles"
                class="form-control"
                id="exampleFormControlInput1"
                required
                oninvalid="this.setCustomValidity('Please insert user role')"
                oninput="this.setCustomValidity('')"
              />
            </div>
            <button type="reset" class="">Reset</button>
            <button type="submit" @click="addUser" class="">Submit</button>
          </form>
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
      this.$store.dispatch("register", this.payload);
      alert("User Has Been Added Successfully");
      window.location.reload();
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
  width: 120px;
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
