<script setup lang="ts">
import { onMounted, ref } from 'vue'
import emailjs from '@emailjs/browser'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()

const timeout = 4000
const email = ref('')
const emailError = ref('')
const name = ref('')
const title = ref('')
const message = ref('')
const contactSelected = ref("mail")
const calendarHeight = ref(0)
const validationAlert = ref(false)
const errorAlert = ref(false)
const errorMessage = ref('')
const errorEmailAlert = ref(false)
const errorNotCompletedAlert = ref(false)

function selectMail() {
  console.log('selectMail')
  contactSelected.value = 'mail'
  calendarHeight.value = 0
}

function selectCalendar() {
  console.log('selectCalendar')
  contactSelected.value = 'calendar'
  calendarHeight.value = 925
}

function showAlert(alertType: string) {
  if (alertType === 'validation') {
    validationAlert.value = true
    setTimeout(() => {
      validationAlert.value = false
    }, timeout)
  } else if (alertType === 'error') {
    errorAlert.value = true
    setTimeout(() => {
      errorAlert.value = false
    }, timeout)
  } else if (alertType === 'emailError') {
    errorEmailAlert.value = true
    setTimeout(() => {
      errorEmailAlert.value = false
    }, timeout)
  } else if (alertType === 'notCompetedError') {
    errorNotCompletedAlert.value = true
    setTimeout(() => {
      errorNotCompletedAlert.value = false
    }, timeout)
  }
}

const validateEmail = () => {
  const emailPattern = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim
  if (!emailPattern.test(email.value)) {
    emailError.value = 'Veuillez entrer une adresse email valide'
  } else {
    emailError.value = ''
  }
}

function submitForm() {
  if (name.value == '' || email.value == '' || title.value == '' || message.value == '') {
    showAlert('notCompetedError')
  } else if (emailError.value != '') {
    showAlert('emailError')
  } else {
    emailjs.sendForm('service_kx3lmiz', 'template_9a87ktd', '#contact-form').then(
      () => {
        showAlert('validation')
        name.value = ''
        email.value = ''
        title.value = ''
        message.value = ''
      },
      (error: string) => {
        errorMessage.value = error
        showAlert('error')
      }
    )
  }
}

onMounted(() => {
  emailjs.init({
    publicKey: 'Kl2imbL-5M-nbn11K'
  })

  // Charger dynamiquement le script Calendly
  const scriptId = 'calendly-script'
  if (!document.getElementById(scriptId)) {
    const script = document.createElement('script')
    script.id = scriptId
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.head.appendChild(script)
  }
})
</script>

<template>
  <div id="contact-content" class="content">
    <div class="contact-box">
      <div class="contact-title">
        <div class="title-content">
          <div class="title-content-en">Contact me</div>
          <div class="contact-title-fr title-content-fr">Me contacter</div>
        </div>
        <div class="contact-selector">
          <div
            class="contact-selector-button"
            :class="{'active-conctact-button': (contactSelected == 'mail'), 'inactive-conctact-button': (contactSelected != 'mail')}"
            @click="selectMail">
            <img
              v-if="contactSelected == 'mail'"
              src="../../assets/icons/mail-white.svg"
              class="icon-sidebar"
              alt="mail icon"
              style="height: 45px;" />
            <img
              v-if="contactSelected != 'mail'"
              src="../../assets/icons/mail-blue.svg"
              class="icon-sidebar"
              alt="mail icon"
              style="height: 45px;" />
          </div>
          <div
            class="contact-selector-button"
            :class="{'active-conctact-button': (contactSelected == 'calendar'), 'inactive-conctact-button': (contactSelected != 'calendar')}"
            @click="selectCalendar">
            <img
              v-if="contactSelected == 'calendar'"
              src="../../assets/icons/calendar-white.svg"
              class="icon-sidebar"
              alt="calendar icon"
              style="height: 45px;" />
            <img
              v-if="contactSelected != 'calendar'"
              src="../../assets/icons/calendar-blue.svg"
              class="icon-sidebar"
              alt="calendar icon"
              style="height: 45px;" />
          </div>
        </div>
      </div>

      <!-- Formulaire de contact -->
      <form v-if="contactSelected == 'mail'" action="" id="contact-form" ref="contact-form">
        <div class="contact-form-box">
          <!-- Alertes -->
          <div v-if="validationAlert" class="validation-alert">
            Your message has been sent successfully
          </div>
          <div v-if="errorAlert" class="error-alert">
            <div>An error occurred while sending the message :</div>
            <div>{{ errorMessage }}</div>
          </div>
          <div v-if="errorEmailAlert" class="error-alert">
            <div>Your email is not valid</div>
          </div>
          <div v-if="errorNotCompletedAlert" class="error-alert">
            Complete all the inputs before sending an email
          </div>
          <!-- Champs du formulaire -->
          <div class="contact-form-personal-info">
            <input
              class="contact-input"
              type="text"
              name="contact-form-name"
              id="contact-form-name"
              placeholder="Name"
              v-model="name" />
            <div class="contact-form-email-container">
              <input
                class="contact-input"
                type="text"
                name="contact-form-email"
                id="contact-form-email"
                placeholder="Email"
                v-model="email"
                @input="validateEmail"
                :class="{ 'contact-input-error': emailError && email != '' }" />
              <div class="text-error">{{ emailError }}</div>
            </div>
          </div>
          <input
            class="contact-input"
            type="text"
            name="contact-form-title"
            id="contact-form-title"
            placeholder="Title"
            v-model="title" />
          <textarea
            class="contact-input"
            name="contact-form-message"
            id="contact-form-message"
            cols="30"
            :rows="width >= 850 ? 10 : 6"
            placeholder="Message"
            v-model="message"></textarea>
          <div class="terminal-container tc-light tc-light-button" @click="submitForm">
            <span>Send</span>
          </div>
        </div>
      </form>
      
      <!-- Calendly -->
      <div class="calendly-container" :class="{'calendly-container-shadow': contactSelected == 'calendar'}">
        <div
          class="calendly-inline-widget"
          data-url="https://calendly.com/romain-heriteau1/30min"
          style="min-width: 320px; width: 100%;"
          :style="{'height': calendarHeight+'px'}">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 850px) {
  .contact-box {
    margin: 30px;
    max-width: 1000px;
  }

  .contact-form-box {
    padding: 40px 40px 0px 40px;
  }

  .validation-alert {
    padding: 20px;
    margin-bottom: 20px;
  }

  .error-alert {
    padding: 20px;
    margin-bottom: 20px;
  }

  .contact-input {
    padding: 10px;
    font-size: 20px;
  }

  .contact-form-box > input,
  textarea {
    margin-bottom: 20px;
  }

  .contact-form-personal-info {
    margin-bottom: 20px;
  }

  .contact-title {
    width: 40%;
  }
}

@media (max-width: 849px) {
  .contact-box {
    /*margin-left: 50px;
    padding-left: 40px;*/
    margin: 3vw;
  }

  .contact-form-box {
    padding: 4vw 4vw 0px 4vw;
  }

  .validation-alert {
    padding: 14px;
    margin-bottom: 12px;
  }

  .error-alert {
    padding: 14px;
    margin-bottom: 12px;
  }

  .contact-input {
    padding: 7px;
    font-size: 15px;
  }

  .contact-form-box > input,
  textarea {
    margin-bottom: 12px;
  }

  .contact-form-personal-info {
    margin-bottom: 12px;
  }

  .contact-title {
    width: 300px;
  }

  .calendly-container {
    padding-top: 20px;
  }
}



.contact-selector {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  bottom: -30px;
}

.active-conctact-button {
  background-color: #3B5CDD;
  color: white;
}

.inactive-conctact-button {
  background-color: white;
  color: black;
}

.contact-selector-button {
  z-index: 5;
  width: 100px;
  padding-block: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: 0px 0px 25px rgb(0 0 0 / 20%);
}

.calendly-container {
  width: 100%;
}

.calendly-container-shadow {
  -webkit-box-shadow: 0px -10px 5px rgb(0 0 0 / 10%);
  -moz-box-shadow: 0px -10px 5px rgb(0 0 0 / 10%);
  box-shadow: 0px -10px 5px rgb(0 0 0 / 10%);
}

#contact-content {
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #40dbef, #30b2ec 42%, #3a5bdc 80%);
}

.contact-box {
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
  display: flex;
  padding-bottom: 30px;
  justify-content: center;
  position: relative;
}

.contact-title-fr {
  left: 40px;
}

#contact-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  width: 100%;
  -webkit-box-shadow: 0px -10px 5px rgb(0 0 0 / 10%);
  -moz-box-shadow: 0px -10px 5px rgb(0 0 0 / 10%);
  box-shadow: 0px -10px 5px rgb(0 0 0 / 10%);
}

.validation-alert {
  background-color: #d4edda;
  width: 100%;
  text-align: center;
  border: solid 1px #5cb85c;
  color: #5cb85c;
}

.error-alert {
  background-color: #f8d7da;
  width: 100%;
  text-align: center;
  border: solid 1px #d9534f;
  color: #d9534f;
}

.contact-form-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 900px;
}

.contact-form-box > input,
textarea {
  width: 100%;
}

.contact-form-personal-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.text-error {
  color: #d9534f;
}

#contact-form-name {
  width: 30%;
  max-height: fit-content;
}

.contact-form-email-container {
  width: 65%;
}

#contact-form-email {
  width: 100%;
}

.contact-input {
  border-radius: 0px;
  border: 1px solid #040a25;
  color: #3d3d3d;
  font-family: Exo, sans-serif;
  font-weight: bold;
}

.contact-input-error {
  background-color: #f8d7da;
  border: solid 1px #d9534f;
}

.contact-input::placeholder {
  color: #cccdd1;
}
</style>
