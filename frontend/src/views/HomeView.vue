<template>
  <main class="main container-fluid">
    <div class="logo container-fluid d-flex justify-content-center">
      <h1 class="kaiserPops">Kaiser Pops</h1>
    </div>
    <div class="logo2 container-fluid d-flex justify-content-center">
      <h1 class="slogan">Popping Dreams Into Reality</h1>
    </div>
  </main>
  
  <div class="container-fluid d-flex justify-content-center">
    <div class="carousels">
      <div id="firstCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="2000">
            <img
              src="https://i.postimg.cc/v869BnWj/groot-removebg-preview.png"
              class="d-block m-auto img-fluid"
              alt="Image"
            />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img
              src="https://i.postimg.cc/K84mGPT3/vegeta-removebg-preview.png"
              class="d-block m-auto img-fluid"
              alt="Image"
            />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img
              src="https://i.postimg.cc/HnfVw6XK/IT-removebg-preview-1.png"
              class="d-block m-auto img-fluid"
              alt="Image"
            />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img
              src="https://i.postimg.cc/F15Hd7QX/carl-removebg-preview.png"
              class="d-block m-auto img-fluid"
              alt="Image"
            />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img
              src="https://i.postimg.cc/fWjzBTZy/maki-removebg-preview-1.png"
              class="d-block m-auto img-fluid"
              alt="Image"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#firstCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#firstCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    <div class="carousels">
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="2500">
            <img
              src="https://i.postimg.cc/y8rYcQKT/obito-boxed-removebg-preview-1.png"
              class="d-block m-auto img-fluid"
              alt="Image"
            />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img
              src="https://i.postimg.cc/NMKXR9ZK/agatha-vs-wanda-boxed-removebg-preview.png"
              class="d-block m-auto img-fluid"
              alt="Image"
            />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img
              src="https://i.postimg.cc/T18Kmkrs/gotg-boxed-removebg-preview.png"
              class="d-block m-auto img-fluid"
              alt="Image"
            />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img
              src="https://i.postimg.cc/ht8fmbjy/IT-boxed-removebg-preview.png"
              class="d-block m-auto img-fluid"
              alt="Image"
            />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img
              src="https://i.postimg.cc/26dDcTsM/Frieza-boxed-removebg-preview.png"
              class="d-block m-auto img-fluid"
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
  </div>

  
</template>

<script>
export default {};
</script>

<style scoped>
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
  margin-bottom: 100px;
}

.carousels {
  margin: 50px;
  /* height: 50vh; */
  /* From https://css.glass */
  width: 45%;
  background: rgba(82, 109, 130, 0.05);
  border-radius: 16px;
  border: 2px solid #526d82;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(82, 109, 130, 1);
  transform: skewY(5deg);
}
.pop-container {
  display: flex;
  overflow: auto;
  white-space: nowrap;
  padding: 10px;
}
.carousel-inner {
  transform: skewY(-5deg);
}

.carousel-control-next-icon {
  filter: invert(100%);
}

.carousel-control-prev-icon {
  filter: invert(100%);
}

.d-block {
  height: 400px;
}
</style>
