<template>
  <div v-if="product" class="container-fluid text-center">
    <h1>{{ product[0].productName }}</h1>
    <img :src="product[0].prodImg1" :alt="product[0].productName" class="img-fluid">
    <img :src="product[0].prodImg2" :alt="product[0].productName" class="img-fluid">
    <p>Price: R {{ product[0].price }}</p>
    <p> {{ product[0].descr }}</p>
  </div>
  <div v-else class="d-flex justify-content-center m-3 p-3"><SpinnerComp/></div>
</template>

<script>
import SpinnerComp from '@/components/SpinnerComp.vue';
export default {
    computed: {
        product() {
            return this.$store.state.product;
        },
    },
    mounted () {
        this.$store.dispatch("getProduct", this.$route.params.id);
    },
    components: {
        SpinnerComp
    }
}
</script>

<style scoped>
    h1, p {
        text-shadow: 5px 5px 5px #272829, 0px 0px 18px #272829;
    }
    
</style>