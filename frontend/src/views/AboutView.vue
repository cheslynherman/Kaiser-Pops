<template>
  <div class="about text-center container-fluid">
    <h1>Meet The Founder</h1>
    <div>
      <img
        src="https://i.postimg.cc/0QFQqLZ8/C12-Cheslyn-Herman-1-removebg-preview-1.png"
        alt=""
        class="img-fluid m-3"
      />
    </div>
    <div class="para container-fluid m-auto w-50">
      <p>
        Hello, fellow collectors and enthusiasts! I'm Cheslyn Herman, the
        founder of Kaiser Pops, and I am thrilled to share my journey of turning
        a passion into a vibrant online store. As a lifelong admirer of pop
        culture, I've always been captivated by the stories, characters, and
        moments that shape our favorite movies, shows, and comics. With Kaiser
        Pops, I've set out to create a haven where collectors can indulge in
        their passions and uncover treasures that resonate with their inner
        fandom.
      </p>
      <br />
      <p>
        My love for collectibles ignited when I stumbled upon my first Funko Pop
        figure. The charm and detail in each design, the connection to beloved
        characters, and the joy they bring to collectors inspired me to embark
        on this adventure. Through Kaiser Pops, I aim to provide a curated
        selection that reflects the diverse tastes within the collecting
        community. Whether you're a seasoned collector searching for rare finds
        or a newcomer exploring the world of pop culture collectibles, I invite
        you to join our journey.
      </p>
      <br />
      <p>
        At Kaiser Pops, it's more than just buying and selling—it's about
        creating a space where our shared passions can thrive. Every piece in
        our collection is carefully chosen to evoke nostalgia, ignite
        conversations, and bring smiles to your faces. As collectors ourselves,
        we understand the thrill of finding that one missing piece to complete a
        set or discovering a gem that holds sentimental value.
      </p>
      <br />
      <p>
        Thank you for being a part of the Kaiser Pops family. Together, let's
        embrace the magic of collecting, one 'pop' at a time!
      </p>
      <br />
      <p>Warm Regards,</p>
      <p>Cheslyn Herman</p>
      <p>Kaiser Pops, Founder</p>
    </div>
  </div>

  <div class="details container-fluid">
    <h2 class="text-center m-3">More Information</h2>
    <div class="information container-fluid d-flex justify-content-center">
      <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13233.069675818386!2d18.4926986!3d-33.9856643!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc433bedd50e81%3A0x9c746d268c8e0ad9!2sLife%20Choices!5e0!3m2!1sen!2sza!4v1694259988434!5m2!1sen!2sza"
          width="300"
          height="300"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="info">
        <h3>Details</h3>
        <p>Call: 0800 123 456</p>
        <p>Email: info@kaiserpopsstore.co.za</p>
        <p>Address: 314 Imam Haron Road, Lansdowne</p>
        <p>Business Hours: 9AM - 4PM</p>
        <a href="https://www.facebook.com/"
          ><img
            src="https://i.postimg.cc/bN0M7ZQ3/icons8-facebook-150-3.png"
            alt="Facebook"
            class="socials img-fluid" /></a
        ><a href="https://www.instagram.com/"
          ><img
            src="https://i.postimg.cc/htSwcKsg/icons8-instagram-100-2.png"
            alt="Instagram"
            class="socials img-fluid"
        /></a>
        <a href="https://www.twitter.com/"
          ><img
            src="https://i.postimg.cc/QtWY0C8g/icons8-twitter-100-1.png"
            alt="Twitter"
            class="socials img-fluid"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.about {
  margin: 10px;
  padding: 10px;
}
.img-fluid {
  height: 50vh;
}

.map,
.info {
  margin: 20px;
}

.socials {
  height: 100px;
}

.details {
  border-top: 2px solid #526d82;
  border-bottom: 2px solid #526d82;
  width: 50%;
  margin: auto;
  padding: 10px;
}

h1,
h2,
h3,
p {
  text-shadow: 5px 5px 5px #272829, 0px 0px 18px #272829;
}

@media only screen and (max-width: 700px) {
  iframe {
    height: 300px;
    width: 300px;
  }
}

@media only screen and (max-width: 600px) {
  .information {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

@media only screen and (max-width: 350px) {
  iframe {
    height: 200px;
    width: 200px;
  }
  .para {
    width: 70% !important;
  }
}
</style>
