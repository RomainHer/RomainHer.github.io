<script setup lang="ts"></script>

<template>
  <header>
    <nav class="sidebar">
      <div class="items">
        <a href="#home-content" class="logo-name">RH. </a>
        <a href="#me-content">
          <img src="../assets/icons/person-white.png" class="icon-sidebar" alt="icon me" />
        </a>
        <a href="#projects-content">
          <img src="../assets/icons/code.svg" class="icon-sidebar" alt="icon project" />
        </a>
        <a href="#contact-content">
          <img src="../assets/icons/messages.svg" class="icon-sidebar" alt="icon contact" />
        </a>
      </div>
    </nav>
  </header>
</template>

<style scoped>
a {
  text-decoration: none;
}

.logo-name {
  background: linear-gradient(to right, #40dbef, #30b2ec 27%, #2f51d5 61%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Maven Pro', sans-serif;
  font-optical-sizing: auto;
  font-size: xx-large;
  font-weight: bold;
  font-style: normal;
}

.sidebar {
  border-right: solid 1px white;
  position: fixed;
  display: flex;
  background-color: #040a25;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  align-items: center;
  width: 71px;
  height: 100%;
}

.items {
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.icon-sidebar {
  padding-top: 15px;
  padding-bottom: 15px;
  width: 35px;
  fill: white;
}
</style>
