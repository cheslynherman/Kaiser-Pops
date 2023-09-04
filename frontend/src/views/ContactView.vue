<template>
  <h2 class="text-center m-2">I Would Love To Hear From You</h2>

  <div class="formSection container-fluid">
    <div class="text">
        <p>Required fields are marked with *</p>
    </div>
    <form action="https://formspree.io/f/mgejyzoz" method="POST">
      <div class="inputs mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >First Name *</label
        >
        <input
          name="name"
          class="form-control"
          id="exampleFormControlInput1"
          required
          oninvalid="this.setCustomValidity('Please provideth your first name')"
            oninput="this.setCustomValidity('')"
        />
      </div>

      <div class="inputs mb-3 ms-auto">
        <label for="exampleFormControlInput1" class="form-label"
          >Last Name *</label
        >
        <input
          name="name"
          class="form-control"
          id="exampleFormControlInput1"
          required
          oninvalid="this.setCustomValidity('Please provideth thy last name')"
            oninput="this.setCustomValidity('')"
        />
      </div>

      <div class="inputs mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Email Address *</label
        >
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          required
          oninvalid="this.setCustomValidity('Please provideth thy email address')"
            oninput="this.setCustomValidity('')"
        />
      </div>

      <div class="inputs mb-3 ms-auto">
        <label for="exampleFormControlTextarea1" class="form-label"
          >Leave a Message *</label
        >
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="1"
          required
          oninvalid="this.setCustomValidity('Please leaveth thy comments')"
            oninput="this.setCustomValidity('')"
        ></textarea>
      </div>

      <div class="submit">
        <button type="submit">Send</button>
      </div>
      <div class="reset">
        <button type="reset">Reset</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
.formSection {
  border: 2px solid #526d82;
  width: 55%;
  margin: auto;
  padding: 15px;
}

.inputs {
    width: 50%;
}

.submit, .reset {
    display: flex;
    justify-content: center;
}
p {
    font-size: 11px;
}
h2 {
    text-shadow: 5px 5px 5px #272829, 0px 0px 18px #272829;
}
input, textarea {
    border: 2px solid #526d82 !important;
    background: #526d82 !important;
    border-radius: 30px !important;
    color: #272829;
    box-shadow: 0 0 0 0 transparent;
    -webkit-transition: all 0.2s ease-in;
    -moz-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;

}

input:hover, textarea:hover {
      background: #526d82;
    box-shadow: 0 0 30px 5px #526d82;
    -webkit-transition: all 0.2s ease-out;
    -moz-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;
}


button {
    border: 2px solid #526d82;
    width: 150px;
    border-radius: 30px;
    margin: 10px;
    background: #526d82;
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
