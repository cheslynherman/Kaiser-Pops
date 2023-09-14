<template>
  <h1 class="text-center m-2">{{ $store.state.user?.firstName }}'s Profile</h1>
  <div v-if="user">
    <div class="profile container-fluid text-center">
      <img :src="$store.state.user?.userImage" />
      <h3>
        {{ $store.state.user?.firstName }} {{ $store.state.user?.lastName }}
      </h3>
      <h3>{{ $store.state.user?.email }}</h3>
      <h3>{{ $store.state.user?.age }}</h3>
      <h3>{{ $store.state.user?.gender }}</h3>
      <h3>{{ $store.state.user?.city }}</h3>
      <button class="m-2">
        <router-link to="/logout">Log Off</router-link>
      </button>
      <br />
      <EditProfile/>
      <br>
      <button @click="delUser(user.userID)">Delete Account</button>
    </div>
  </div>
  <div v-else class="d-flex justify-content-center"><SpinnerComp /></div>
</template>

<script>
import SpinnerComp from '@/components/SpinnerComp.vue'
import EditProfile from '@/components/EditProfile.vue';
export default {
  props: ["user"],
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  mounted() {
    return this.$store.dispatch("getUser");
  },
  methods: {
    delUser(id) {
      if (confirm("You are deleting user, are you sure?")) {
        this.$store.dispatch("delUser", id);
        alert("this user has been deleted");
        window.location.reload();
      }
    },
  },
  components: {
    SpinnerComp,
    EditProfile
  }
};
</script>

<style scoped>

img {
  border: 2px solid #526d82;
  border-radius: 100px;
  margin: 10px;
  height: 180px;
}

h3 {
  margin: 10px;
}

a {
  text-decoration: none;
  color: #272829;
}

button {
  background: #526d82;
  border-radius: 30px;
  width: 130px;
  color: #272829;
  border: 2px solid #526d82;
  box-shadow: 0 0 0 0 transparent;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  margin: 5px;
}

button:hover {
  box-shadow: 0 0 30px 5px #526d82;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}

h1,
h3 {
  text-shadow: 5px 5px 5px #272829, 0px 0px 18px #272829;
}
</style>
