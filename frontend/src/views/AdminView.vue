<template>
  <div class="userSection container-fluid">
    <div>
      <h3 class="heading text-center">Users</h3>
    </div>
    <div class="text-center">
      <AddUser/>
    </div>
    <div class="userTable">
      <table >
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
            <td><img :src="user.userImage" alt="user" class="img-fluid"></td>
            <td><button @click="delUser(user.userID)">Delete</button><EditUser/></td>
          </tr>
          <tr v-else>no</tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="userSection container-fluid">
    <div>
      <h3 class="heading text-center">Products</h3>
    </div>
    <div class="text-center">
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
            <td><img :src="product.prodImg1" :alt="product.productName" class="img-fluid"></td>
            <td><img :src="product.prodImg2" :alt="product.productName" class="img-fluid"></td>
            <td><button @click="delProduct(product.productID)">Delete</button><EditProduct/></td>
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
import EditUser from '@/components/EditUser.vue'
import EditProduct from '@/components/EditProduct.vue';
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
        EditUser,
        EditProduct
    }
};
</script>

<style scoped>
table {
    width: 90%;
    margin: auto;
    text-align: center;
}

img {
    height: 100px;
    width: 100px;
}
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
    margin: 5px;
}

button:hover {
    box-shadow: 0 0 30px 5px #526d82;
    -webkit-transition: all 0.2s ease-out;
    -moz-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;
}

td, th {
    border: 2px solid #526D82;
    padding: 10px;
    text-shadow: 5px 5px 5px #272829, 0px 0px 18px #272829;
}

.userTable, .productTable {
    margin: 15px;
}

.heading {
    text-shadow: 5px 5px 5px #272829, 0px 0px 18px #272829;
}
</style>
