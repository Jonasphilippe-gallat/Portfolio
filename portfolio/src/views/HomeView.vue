<script setup>
import { RouterLink, RouterView } from 'vue-router'
import circle4 from '../components/design/circle4.vue';
import circle_rightVue from '../components/design/circle_right.vue';
import Artvector from '../components/design/artvector.vue';
import transition_full from '../components/design/transition_full.vue';
import pattern_fond_mobile from '../components/design/pattern_fond_mobile.vue';
import pattern_fond_desktop from '../components/design/pattern_fond_desktop.vue';
import transition_black from '../components/design/transition_black.vue'
import transition_white from '../components/design/transition_white.vue'
import art_hand from '../components/design/art_hand.vue'
import circle4desk from '../components/design/circle4desk.vue'
import circle_point from '../components/design/circle_point.vue'
import design_fond_hand from '../components/design/design_fond_hand.vue'

</script>

<template>

  <main class="overflow-hidden overflow-x-hidden">
    <section class="max-h-[1352.0px] ">
      <div class="absolute w-full">
        <design_fond_hand class="relative hidden 1350px:flex -z-50 -top-32 left-10 w-[100%]"></design_fond_hand>
      </div>
      <div class="flex pattern_fond_m ">
        <pattern_fond_mobile class="absolute  w-full"></pattern_fond_mobile>
      </div>



      <img class="absolute w-full h-[180%] flex -z-10" src="../../public/fond_hero_desktop.png" alt="Image de fond">
      <div class="flex flex-col justify-center mx-auto text-center pt-16 max-w-xl w-[85%]">
        <h1 class="text-white uppercase text-[19vw] tablet:text-9xl ">Web designer</h1>

        <div class="relative bottom-[0.5vh]">
          <hr class="bg-white ">
          <p class="junior relative text-[35px] shadow-sm    text-white bottom-[0.85vh]"> junior</p>
        </div>
      </div>

      <circle_rightVue class=" relative mx-auto 1000px:mr-[7%] 1000px:mt-0 1000px:-top-40 1000px:w-20  mt-5">
      </circle_rightVue>
      <img class="1000px:flex hidden absolute left-0 top-0 w-1/4 max-w-[280px]" src="../../public/point_pattern.png"
        alt="">
      <div
        class="1000px:hidden absolute right-0 w-2/4 top-96 overflow-hidden overflow-x-hidden overflow-y-hidden  flex flex-col items-end ">
        <artvector class="mt-5 h-full relative justify-end float-right -right-10 max-w-[200px] w-4/5"></artvector>

        <circle4 class=" mt-5  float-right relative right-0 max-w-[200px]  w-3/4 mr-4">
        </circle4>
      </div>

      <div class="absolute hidden 1000px:flex w-1/3 left-20 top-80 ">
        <div class="flex flex-col  items-end">
          <Artvector class=" w-4/5"></Artvector>
          <circle4desk class="w-10/12 z-10 absolute top-[270px] -left-10"></circle4desk>
        </div>
        <div class="flex flex-col relative left-4 top-20">
          <div class="flex justify-start">
            <button
              class="duration-300 bg-white text-black w-4/5 h-full items-end rounded-full border font-outfit uppercase font-[600] border-white py-2  text-xs">
              Explorer
            </button>
          </div>
          <art_hand class="w-4/5 relative  -top-5 "></art_hand>
        </div>
      </div>
      <img class="absolute hidden 1000px:flex  right-0 top-64 w-1/2" src="../../public/wave.png" alt="">
      <circle_point class="relative -z-10 right-20 -top-32 w-1/3 hidden 1000px:flex"></circle_point>
      <img
        class=" relative w-1/2 max-w-[200px] -left-10 1000px:hidden -top-40 1000px:-top-40 1000px:max-w-[200px]  mt-5"
        src="../../public/circle_point.png" alt="cercle en pointillé">
      <div
        class="w-1/2 h-[55px] flex 1000px:absolute 1000px:top-0 1000px:right-0 1000px:w-[15vw] 1000px:m-8  items-center justify-center relative text-center align-middle -top-36 mx-auto">
        <button
          class="button duration-300 hover:bg-white hover:text-black hover:w-full hover:h-full w-[90%] h-[90%] rounded-full border font-outfit uppercase font-[600] border-white text-white py-3 px-10 text-lg text-center align-middle">
          Contact
        </button>
      </div>
      <div class="relative  flex flex-col justify-center items-center text-center mb-20">
        <div
          class="absolute bigphone:hidden overflow-y-hidden -top-[300px] -right-[60%] mx-auto w-[200%] bigphone:w-[800px] bigphone:right-[4%] bigphone:-top-72 flex ">
          <transition_white class="w-[100%] mx-auto"></transition_white>
        </div>
        <h2 class="text-white text-4xl"> Qui suis-je ? </h2>
        <img class="w-1/2 relative max-w-[200px] -top-4 -z-10" src="../../public/sousligne_title.png" alt="">
        <p class="text-white font-outfit max-w-[350px] mx-10 mt-8">C’est un site gratuit et interactif pour apprendre le
          français à
          partir de
          vidéos,
          d’émissions et de reportages
          d’actualité. Choisissez parmi plus de 2000 exercices en ligne et améliorez votre compréhension orale en
          français, du niveau débutant au niveau avancé.</p>
      </div>


    </section>
    <section class="bg-white w-full h-full">
      <div class="w-full h-full overflow-x-hidden overflow-hidden">
        <div
          class="absolute mx-auto overflow-x-hidden overflow-hidden hidden bigphone:flex justify-center top-[625px] 620px:top-[675px] tablet:top-[612px] w-full">
          <transition_full class="w-full relative min-w-[900px] tablet:min-w-[800px] -right-12  max-w-[800px] ">
          </transition_full>
        </div>
        <div
          class="absolute z-50 bigphone:hidden  top-[1200px] -right-[57.5%] mx-auto w-[200%] bigphone:w-[80%] bigphone:right-[5%] bigphone:-top-18 flex ">
          <transition_black class="w-full"></transition_black>
        </div>

        <div class="relative z-50  justify-center">

        </div>
      </div>
      <div class="bg-white w-full h-full">
        <div class="py-20 flex flex-col justify-center items-center text-center ">
          <h2 class="text-4xl z-20"> Mes projets </h2>
          <img class="w-1/2 relative max-w-[200px] -top-4 z-10" src="../../public/sousligne_title.png" alt="">


        </div>
        <div class=" section_project mt-20">
          <div class="project_card_mobile justify-start items-start  ">
            <img class="project_thumb_mobile px-2 " src="../../public/thumb_e-car.png" alt="">
            <div class="flex flex-col gap-4 mx-5 pt-2 pb-5">
              <h3 class=" font-bold text-2xl">E-car VTC</h3>
              <p>C’est un site gratuit et interactif pour apprendre le français à partir de vidéos, d’émissions et de
                reportages d’actualité. Choisissez parmi plus de 2000 exercices en ligne et améliorez votre
                compréhension
                orale en français, du niveau débutant au niveau avancé.</p>



            </div>
            <div class="flex flex-col gap-2 p-5 pb-20">
              <div class="flex flex-row gap-2">
                <div class="bg-black py-2 px-10 rounded-full text-white"> Web design</div>
                <div class="bg-black py-2 px-10 rounded-full text-white"> Branding</div>
              </div>
              <div class="flex flex-row gap-2">
                <div class="bg-black py-2 px-10 rounded-full text-white"> Identité visuelle</div>

              </div>
            </div>
          </div>
          <div class="project_card_mobile justify-start items-start ">
            <img class="project_thumb_mobile px-2 " src="../../public/thumb_e-car.png" alt="">
            <div class="flex flex-col gap-4 mx-5 pt-2 pb-5">
              <h3 class="font-bold text-2xl">E-car VTC</h3>
              <p>C’est un site gratuit et interactif pour apprendre le français à partir de vidéos, d’émissions et de
                reportages d’actualité. Choisissez parmi plus de 2000 exercices en ligne et améliorez votre
                compréhension
                orale en français, du niveau débutant au niveau avancé.</p>



            </div>
            <div class="flex flex-col gap-2 p-5 pb-20">
              <div class="flex flex-row gap-2">
                <div class="bg-black py-2 px-10 rounded-full text-white"> Web design</div>
                <div class="bg-black py-2 px-10 rounded-full text-white"> Branding</div>
              </div>
              <div class="flex flex-row gap-2">
                <div class="bg-black py-2 px-10 rounded-full text-white"> Identité visuelle</div>

              </div>
            </div>
          </div>
          <div class="project_card_mobile justify-start items-start ">
            <img class="project_thumb_mobile px-2 " src="../../public/thumb_e-car.png" alt="">
            <div class="flex flex-col gap-4 mx-5 pt-2 pb-5">
              <h3 class="font-bold text-2xl">E-car VTC</h3>
              <p>C’est un site gratuit et interactif pour apprendre le français à partir de vidéos, d’émissions et de
                reportages d’actualité. Choisissez parmi plus de 2000 exercices en ligne et améliorez votre
                compréhension
                orale en français, du niveau débutant au niveau avancé.</p>



            </div>
            <div class="flex flex-col gap-2 p-5 pb-20">
              <div class="flex flex-row gap-2">
                <div class="bg-black py-2 px-10 rounded-full text-white"> Web design</div>
                <div class="bg-black py-2 px-10 rounded-full text-white"> Branding</div>
              </div>
              <div class="flex flex-row gap-2">
                <div class="bg-black py-2 px-10 rounded-full text-white"> Identité visuelle</div>

              </div>
            </div>
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
  overflow-y: hidden;
}

body {
  overflow-y: hidden;
}

main {
  overflow-y: hidden;
}

.project_card_mobile {
  margin-top: 20px;
  margin-bottom: 20px;

}

.section_project {
  font-family: 'Outfit', sans-serif;
}


/*@media (min-width: 720px) {

  .pattern_fond_d {
    visibility: visible;

  }
}

@media (min-width: 720px) {

  .pattern_fond_m {
    visibility: hidden;

  }
}*/
</style>

