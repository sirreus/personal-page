<template>
  <AboutSection id="about" />
  <ExperienceSection id="experience" />
  <PersonalitySection id="personality" />
  <ContactsSection id="contacts" />
</template>

<script>
import AboutSection from "./components/AboutSection.vue";
import ExperienceSection from "./components/ExperienceSection.vue";
import PersonalitySection from "./components/PersonalitySection.vue";
import ContactsSection from "./components/ContactsSection.vue";

export default {
  name: "App",
  components: {
    AboutSection,
    ExperienceSection,
    PersonalitySection,
    ContactsSection,
  },
};
</script>

<style>
#app {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
}
#next {
  text-decoration: none;
  position: absolute;
  bottom: 24px;
}

@media only screen and (max-width: 390px) {
  #app {
    padding-top: 48px;
  }
}
</style>
