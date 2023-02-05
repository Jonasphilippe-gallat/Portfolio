<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <main>
    <section class="max-h-[1352.0px]">


      <img class="absolute  w-full" src="../../public/pattern_fond_mobile.png" alt="Image de fond">
      <img class="absolute w-full h-full -z-10" src="../../public/fond_hero_mobile.png" alt="Image de fond">
      <div class="flex flex-col justify-center mx-auto text-center pt-16 max-w-xl w-[85%]">
        <h1 class="text-white  uppercase text-[19vw]  ">Web designer</h1>

        <div class="relative bottom-[0.5vh]">
          <hr class="bg-white ">
          <p class="junior relative text-[35px] shadow-sm    text-white bottom-[1.5vh]"> junior</p>
        </div>
      </div>


      <img class=" mx-auto mt-5" src="../../public/circle_right.png" alt="Image de fond">

      <div class=" absolute right-0 w-2/4 top-96 ">
        <img class="mt-5 relative float-right -right-5 w-3/5" src="../../public/art_vector.png" alt="Image de fond">
        <img class=" mt-5 float-right w-3/4 mr-4" src="../../public/circlequart_mobile.png" alt="Image de fond">
      </div>
      <img class="relative w-1/2 max-w-[200px] -left-10 -top-40  mt-5" src="../../public/circle_point.png"
        alt="Image de fond">
      <div class="w-1/2 h-[55px] flex items-center justify-center relative -top-36 mx-auto">
        <button
          class="button duration-300 hover:bg-white hover:text-black hover:w-full hover:h-full w-[90%] h-[90%] rounded-full border font-outfit uppercase font-[600] border-white text-white py-3 px-10 text-lg">
          Contact
        </button>
      </div>
      <div class="relative  flex flex-col justify-center items-center text-center mb-20">
        <h2 class="text-white text-4xl"> Qui suis-je ? </h2>
        <img class="w-1/2 relative -top-4 -z-10" src="../../public/sousligne_title.png" alt="">
        <p class="text-white font-outfit max-w-96 mx-10 mt-8">C’est un site gratuit et interactif pour apprendre le
          français à
          partir de
          vidéos,
          d’émissions et de reportages
          d’actualité. Choisissez parmi plus de 2000 exercices en ligne et améliorez votre compréhension orale en
          français, du niveau débutant au niveau avancé.</p>
      </div>
    </section>
    <section class="bg-white w-full h-full">
      <div class="bg-white w-full h-full">
        <div class="py-10 ">
          <h2> Nos projets</h2>
          <img class="w-1/2 relative -top-4 -z-10" src="../../public/sousligne_title.png" alt="">
          <div class="h-[600px]">

          </div>
        </div>
      </div>
    </section>
  </main>

</template>

<style scoped>
h1 {
  font-family: 'ThunderMed';
}

h2 {
  font-family: 'Fog5';
}

.junior {
  font-family: 'Fog5';
}



p {
  font-family: 'Outfit', sans-serif;
}

html {
  overflow-x: hidden;
}

body {
  overflow-x: hidden;
}

main {
  overflow-x: hidden;
}
</style>

