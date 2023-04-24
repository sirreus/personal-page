<template>
  <section id="personality">
    <article>
      <h2>/** personality */</h2>
      <div id="plug"></div>
      <div id="personality-text">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </div>
      <img id="pers-photo" src="../assets/pers-photo1.jpg" alt="person-photo" />
    </article>
    <ScrollButton id="next" @click="scrollTo" isRotatable="true" />
  </section>
</template>

<script>
import ScrollButton from "./ScrollButton.vue";

export default {
  name: "PersonalitySection",
  components: {
    ScrollButton,
  },
  data() {
    return {
      nextSection: "contacts",
    };
  },
  methods: {
    scrollTo() {
      let element = document.getElementById(this.nextSection);
      const y = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: y, behavior: "smooth" });

      if (this.nextSection === "contacts") {
        this.nextSection = "experience";
      } else {
        this.nextSection = "contacts";
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  font-size: 22px;
}
article {
  display: grid;
  grid-template-columns: auto 210px;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}
#pers-photo {
  width: 210px;
  opacity: 0.85;
}
#personality {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 100vh;
}
#personality-text {
  width: 480px;
  margin-right: 16px;
  text-align: justify;
}
/* #next {
  position: absolute;
  bottom: 24px;
} */

@media only screen and (max-width: 768px) {
  #personality {
    flex-direction: column;
  }
  article {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #plug {
    order: 1;
  }
  h2 {
    order: 2;
  }
  #pers-photo {
    width: 180px;
    order: 3;
  }
  #personality-text {
    margin-right: 0;
    order: 4;
  }
}

@media only screen and (max-width: 540px) {
  #personality-text {
    width: 90vw;
  }
}
@media only screen and (max-width: 390px) {
  #personality {
    justify-content: space-between;
  }
  h2 {
    margin-bottom: 0;
  }
  #next {
    margin-top: 32px;
  }
}
</style>
