<template>
  <div class="profile container-fluid m-auto">
        <img :src="$store.state.user?.userImage">
        <h3>{{ $store.state.user?.firstName }} {{ $store.state.user?.lastName }}</h3>
        <h3>{{ $store.state.user?.email }}</h3>
        <h3>{{ $store.state.user?.age }}</h3>
        <h3>{{ $store.state.user?.gender }}</h3>
        <h3>{{ $store.state.user?.city }}</h3>
  </div>
</template>

<script>

export default {
    props: ["user"],
    computed: {
        user() {
            return this.$store.state.user
        }
    },
    mounted() {
        return this.$store.dispatch("getUser")
    }
   
}
</script>

<style scoped>

</style>