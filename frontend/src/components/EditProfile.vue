<template>
    <!-- Button trigger modal -->
    <button
      type="button"
      class=""
      @click="openModal(user?.userID)"
      data-bs-toggle="modal"
      :data-bs-target="'#editUser' + user?.userID"
    >
      Edit Profile
    </button>
  
    <!-- Modal -->
    <div
      class="modal fade"
      :id="'editUser' + user?.userID"
      tabindex="-1"
      :aria-labelledby="'editUser' + user?.userID"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Edit User:</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="updateUser">
              <div class="inputs">
                <label for="exampleFormControlInput1" class="form-label"
                  >First Name</label
                >
                <input
                  type="text"
                  v-model="payload.firstName"
                  class="form-control"
                  id="exampleFormControlInput1"
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
                />
              </div>
              <button type="reset" class="">Reset</button>
              <button type="submit" class="">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ["user"],
    data() {
      return {
        update: {
          ...this.user,
        },
        updateUserID: null,
  
        payload: {
          userID: this.user?.userID,
          firstName: this.user?.firstName,
          lastName: this.user?.lastName,
          email: this.user?.email,
          gender: this.user?.gender,
          age: this.user?.age,
          city: this.user?.city,
          userImage: this.user?.userImage,
          roles: this.user?.roles,
        },
      };
    },
    computed: {
      user() {
        return this.$store.state.user;
      },
    },
  
    methods: {
      openModal(userID) {
        // this.updateUserID = userID;
        // this.update = {
        //   ...this.$store.state.users.find((user) => user.userID === userID),
        // };
      },
      updateUser() {
     
        this.$store.dispatch("updateUser", this.payload);
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
    width: 130px;
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
  