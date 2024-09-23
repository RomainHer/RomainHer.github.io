<script setup lang="ts"></script>

<template>
  <div id="contact-content" class="content">
    <div class="contact-box">
      <div class="contact-title">
        <div class="contact-title-en">Contact me</div>
        <div class="contact-title-fr">Me contacter</div>
      </div>
      <form action="" class="contact-form">
        <div>
          <input type="text" name="name" id="name" placeholder="Name">
          <input type="text" name="email" id="email" placeholder="Email">
        </div>
        <input type="text" name="title" id="title" placeholder="Title">
        <textarea name="message" id="message" cols="30" rows="10" placeholder="message"></textarea>
      </form>
    </div>
  </div>
</template>

<style scoped>
#contact-content {
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #40DBEF, #30B2EC 42%, #3A5BDC 80%);
}

.contact-box {
  margin: 30px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 15px;
  background-color: white;
  width: 100%;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: 0px 0px 25px rgb(0 0 0 / 20%);
  -moz-box-shadow: 0px 0px 25px rgb(0 0 0 / 20%);
  box-shadow: 0px 0px 25px rgb(0 0 0 / 20%);
}

.contact-title {
  position: relative;
  padding-bottom: 20px;
}

.contact-title-en {
  text-align: center;
  font-family: 'Exo', sans-serif;
  font-size: 40px;
  font-weight: 700;
  color: #040a25;
}

.contact-title-fr {
  position: absolute;
  text-align: center;
  top: 20px;
  left: 40px;
  font-family: 'Birthstone', cursive;
  font-size: 40px;
  background: linear-gradient(to right, #40DBEF, #30B2EC 27%, #2F51D5 61%);
  background-clip: text;
  width: fit-content;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.contact-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  -webkit-box-shadow: 0px -10px 5px rgb(0 0 0 / 10%);
  -moz-box-shadow: 0px -10px 5px rgb(0 0 0 / 10%);
  box-shadow: 0px -10px 5px rgb(0 0 0 / 10%);
}

.contact-form * {
  width: 80%;
}
</style>
