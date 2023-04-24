<template>
  <section id="about">
    <article>
      <img id="ava" alt="ava" src="../assets/ava.jpg" />
      <LinksSection />
      <h1>Hello there!</h1>
      <h2>/** My name is Kirill I'm Frontend developer */</h2>
      <div id="about-text">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </div>
    </article>
    <ScrollButton id="next" @click="scrollTo" />
  </section>
</template>

<script>
import LinksSection from "./LinksSection.vue";
import ScrollButton from "./ScrollButton.vue";

export default {
  name: "AboutSection",
  components: {
    LinksSection,
    ScrollButton,
  },
  data() {
    return {
      nextSection: "experience",
    };
  },
  methods: {
    scrollTo() {
      let element = document.getElementById(this.nextSection);
      const y = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#ava {
  width: 280px;
  height: 280px;
  border-radius: 50%;
  object-fit: cover;
  object-position: 0 -45px;
  opacity: 0.85;
}
h1 {
  font-size: 26px;
}
h2 {
  font-size: 22px;
}
#about {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  height: 92vh;
}
#about-text {
  width: 480px;
}

@media only screen and (max-width: 768px) {
  #ava {
    width: 220px;
    height: 220px;
  }
}

@media only screen and (max-width: 540px) {
  #about-text {
    width: 90vw;
  }
}

@media only screen and (max-width: 390px) {
  #about {
    height: 92vh;
  }

  #ava {
    width: 180px;
    height: 180px;
  }
}
</style>
