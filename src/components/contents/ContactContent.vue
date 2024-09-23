<script setup lang="ts"></script>

<template>
  <div id="contact-content" class="content">
    <div class="contact-box">
      <div class="contact-title">
        <div class="contact-title-en">Contact me</div>
        <div class="contact-title-fr">Me contacter</div>
      </div>
      <div class="contact-form">
        <form action=""></form>
      </div>
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
  padding: 20px;
  background-color: white;
  width: 100%;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
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
</style>
