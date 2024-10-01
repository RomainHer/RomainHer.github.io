<script setup lang="ts"></script>

<template>
  <div id="contact-content" class="content">
    <div class="contact-box">
      <div class="contact-title title-content">
        <div class="title-content-en">Contact me</div>
        <div class="contact-title-fr title-content-fr">Me contacter</div>
      </div>
      <form action="" class="contact-form">
        <div class="contact-form-box">
          <div class="contact-form-personal-info">
            <input
              class="contact-input"
              type="text"
              name="contact-form-name"
              id="contact-form-name"
              placeholder="Name"
            />
            <input
              class="contact-input"
              type="text"
              name="contact-form-email"
              id="contact-form-email"
              placeholder="Email"
            />
          </div>
          <input
            class="contact-input"
            type="text"
            name="contact-form-title"
            id="contact-form-title"
            placeholder="Title"
          />
          <textarea
            class="contact-input"
            name="contact-form-message"
            id="contact-form-message"
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <div class="terminal-container tc-light tc-light-button">
            <span>Send</span>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
#contact-content {
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #40dbef, #30b2ec 42%, #3a5bdc 80%);
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
  padding-bottom: 50px;
}

.contact-title-fr {
  left: 40px;
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

.contact-form-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 40px 0px 40px;
  width: 100%;
  max-width: 900px;
}

.contact-form-box > input,
textarea {
  margin-bottom: 20px;
  width: 100%;
}

.contact-form-personal-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
}

#contact-form-name {
  width: 30%;
}

#contact-form-email {
  width: 65%;
}

.contact-input {
  padding: 10px;
  border-radius: 0px;
  border: 1px solid #040a25;
  color: #3d3d3d;
  font-family: Exo, sans-serif;
  font-size: 20px;
  font-weight: bold;
}

.contact-input::placeholder {
  color: #cccdd1;
}
</style>
