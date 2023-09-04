<template>
  <main>
    <div class="logo container-fluid d-flex justify-content-center">
      <h1 class="kaiserPops">Kaiser Pops</h1>
    </div>
    <div class="logo2 container-fluid d-flex justify-content-center">
      <h1 class="slogan">Popping Dreams Into Reality</h1>
    </div>
  </main>

  <div class="carousels">
    <div
      id="carouselExampleInterval"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="2000">
          <img
            src="https://i.postimg.cc/pLk57JH9/iron-man-boxed-removebg-preview.png"
            class="d-block m-auto w-100"
            alt="Image"
          />
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img
            src="https://i.postimg.cc/pLk57JH9/iron-man-boxed-removebg-preview.png"
            class="d-block m-auto w-100"
            alt="Image"
          />
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img
            src="https://i.postimg.cc/pLk57JH9/iron-man-boxed-removebg-preview.png"
            class="d-block m-auto w-100"
            alt="Image"
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.logo {
  align-items: center;
  margin-top: 20vh;
}

.kaiserPops {
  font-size: 100px;
  text-shadow: 5px 5px 5px #272829, 0px 0px 18px #272829;
}

.slogan {
  font-size: 65px;
  text-shadow: 5px 5px 5px #272829, 0px 0px 18px #272829;
}

.logo2 {
  margin-top: 30px;
}

.carousels {
  margin: 50px;
  height: 50vh;
}
</style>
