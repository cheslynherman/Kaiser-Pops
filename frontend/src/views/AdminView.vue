<template>
  <div class="userSection container-fluid">
    <div>
      <h3 class="text-center">Users</h3>
    </div>
    <div>
      <AddUser/>
    </div>
    <div class="userTable">
      <table>
        <tr>
          <th>User ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email Address</th>
          <th>Age</th>
          <th>User Image</th>
          <th>Actions</th>
        </tr>
        <tbody v-for="user of users" :key="user.userID" :user="user">
          <tr v-if="users">
            <td>{{ user.userID }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.age }}</td>
            <td><img :src="user.userImage" alt="user"></td>
            <td><button @click="delUser(user.userID)">Delete</button><EditUser/></td>
          </tr>
          <tr v-else>no</tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="userSection container-fluid">
    <div>
      <h3 class="text-center">Products</h3>
    </div>
    <div>
     <AddProduct/>
    </div>
    <div class="productTable">
      <table>
        <tr>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Category</th>
          <th>Price</th>
          <th>Product Image 1</th>
          <th>Product Image 2</th>
          <th>Actions</th>
        </tr>
        <tbody v-for="product of products" :key="product.productID" :product="product">
          <tr v-if="products">
            <td>{{ product.productID }}</td>
            <td>{{ product.productName }}</td>
            <td>{{ product.quantity }}</td>
            <td>{{ product.category }}</td>
            <td>{{ product.price }}</td>
            <td><img :src="product.prodImg2" :alt="product.productName" class="img-fluid"></td>
            <td><img :src="product.prodImg1" :alt="product.productName" class="img-fluid"></td>
            <td><button @click="delProduct(product.productID)">Delete</button><button>placeholder</button></td>
          </tr>
          <tr v-else>no</tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import AddUser from '@/components/AddUser.vue'
import AddProduct from '@/components/AddProduct.vue'
import EditUser from '@/components/EditUser.vue';
export default {
    created() {
        this.$store.dispatch("getUsers"), this.$store.dispatch("getProducts")
    },
    computed: {
        users() {
            return this.$store.state.users
        },
        products() {
            return this.$store.state.products
        }
    },
    methods: {
        delUser(id){
            if (confirm ("You are deleting user, are you sure?")){
                this.$store.dispatch ("delUser", id);
                alert ("this user has been deleted");
                window.location.reload();
            }
        },
        delProduct(id) {
            if (confirm ("You are deleting product, are you sure")) {
                this.$store.dispatch ("delProduct", id);
                alert ("this product has been deleted")
                window.location.reload(); 
            }
        }
    },
    components: {
        AddUser,
        AddProduct,
        EditUser 
    }
};
</script>

<style scoped></style>
