<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/"
          ><img
            src="https://i.postimg.cc/mgzKrDgf/Blue-Beige-Minimalist-Smear-Elegant-Initials-Monogram-Logo-2.png"
            alt="Logo"
            class="navImage"
        /></router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link to="/" class="navButtons">Home</router-link>
            <router-link to="/products" class="navButtons"
              >Products</router-link
            >
            <router-link to="/about" class="navButtons"
              >About</router-link
            >
            <router-link to="/contact" class="navButtons"
              >Contact</router-link
            >
            <router-link to="/login" class="navButtons"
              >Login</router-link
            >
            <router-link to="/admin" class="navButtons"
              >Admin</router-link
            >
            <router-link to="/profile" class="navButtons"
              ><img src="https://i.postimg.cc/K8bnFjqz/icons8-user-96.png" class="routerImg"></router-link
            >
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <style scoped>
  nav {
    background-color: #FFDD83 !important;
    margin-bottom: 20px;
    
  }
  .navImage {
    height: 60px;
    width: 60px;
    
  }

  .routerImg {
    height: 30px;
  }
  .navbar-nav {
    margin-left: auto;
  }
  .navButtons {
    margin-right: 20px;
    color: #272829;
    
  }

  
  a {
    text-decoration: none;
    text-shadow: 5px 5px 5px #272829, 0px 0px 18px #272829;
  }
  nav a.router-link-exact-active {
  border-bottom: 2px solid #526D82;
}
  
  </style>
  