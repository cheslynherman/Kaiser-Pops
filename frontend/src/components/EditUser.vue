<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    class=""
    @click="openModal(user.userID)"
    data-bs-toggle="modal"
    :data-bs-target="'#editUser' + user.userID"
  >
    Edit
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    :id="'editUser' + user.userID"
    tabindex="-1"
    :aria-labelledby="'editUser' + user.userID"
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
          <form>
            <div class="inputs">
              <label for="userID">User ID</label>
              <input type="text" v-model="update.userID" id="userID" />
            </div>

            <div class="inputs">
              <label for="firstName">First Name</label>
              <input type="text" v-model="update.firstName" id="firstName" />
            </div>

            <div class="inputs">
              <label for="lastName">Last Name</label>
              <input type="text" v-model="update.lastName" id="lastName" />
            </div>

            <div class="inputs">
              <label for="email">Email Address</label>
              <input type="text" v-model="update.email" id="email" />
            </div>

            <div class="inputs">
              <label for="gender">Gender</label>
              <input type="text" v-model="update.gender" id="gender" />
            </div>

            <div class="inputs">
              <label for="age">Age</label>
              <input type="number" v-model="update.age" id="age" />
            </div>

            <div class="inputs">
              <label for="city">City</label>
              <input type="text" v-model="update.city" id="city" />
            </div>

            <div class="inputs">
              <label for="userImage">User Image</label>
              <input type="url" v-model="update.userImage" id="userImage" />
            </div>

            <div class="inputs">
              <label for="role">Role</label>
              <input type="text" v-model="update.roles" id="role" />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="" data-bs-dismiss="modal">Close</button>
          <button type="submit" @click="updateUser(user.userID)" class="">
            Save changes
          </button>
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

      user: {
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        age: "",
        city: "",
        userImage: "",
        roles: "",
      },
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.user;
    },
  },

  methods: {
    openModal(userID) {
      this.updateUserID = userID;
      this.update = {
        ...this.$store.state.users.find((user) => user.userID === userID),
      };
    },
    updateUser(userID) {
      this.$store
        .dispatch("updateUser", {
          userID: userID,
          ...this.update,
        })
        .then(() => {
          alert("User has been updated");
          console.log("User has been updated");
        })
        .catch((err) => {
          console.error("Error", err);
        });
    },
  },
};
</script>

<style scoped>
button {
    background: #526D82;
    border-radius: 30px;
    width: 100px;
    color: #272829;
    border: 2px solid #526D82;
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
