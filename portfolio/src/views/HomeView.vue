<script setup>
import arrow from "../../src/components/design/arrow.vue";
import star from "../../src/components/design/star.vue";
import hometitle_mobile from "../../src/components/design/hometitle_mobile.vue";
import hometitle_desktop from "../../src/components/design/hometitle_desktop.vue";
import hometitle2_desktop from "../../src/components/design/hometitle2_desktop.vue";
import circle_left from "../../src/components/design/circle_left.vue";
import circle_right from "../../src/components/design/circle_right.vue";

</script>

<template>
  <main class="overflow-hidden overflow-x-hidden ">

    <section class="h-full w-full section">

      <div class="w-[80%] tablet:hidden mx-auto">
        <star class="h-[100%] w-[50%] relative top-16"></star>
        <h1 class="invisible">Web designer junior</h1>
        <div class="flex justify-end ">
          <hometitle_mobile class="w-[100%] h-[100%] "></hometitle_mobile>
        </div>
        <div class="flex  font-outfit w-[100%] h-[100%] text-white justify-end items-end mt-10">
          <arrow class=" relative -left-[10%] w-3/12 h-1/6"></arrow>
          <button class="py-[4%] w-4/6 px-16 bg-main-red rounded-full text-gray-900"> projects </button>
        </div>
        <div class="flex gap-2 font-outfit text-white my-14 text-center items-center font-bold text-xl">
          <circle_left class="shrink-0"></circle_left>
          <p>“Découvrez la fusion entre la technologie et l'art.”</p>
          <circle_right class="shrink-0"></circle_right>
        </div>
        <div class="flex justify-center mb-9">
          <button class="py-[4%] w-4/6 px-16 bg-white rounded-full font-outfit text-gray-900"> contact </button>
        </div>
        <p class="invisible">.</p>
      </div>

      <div class="hidden tablet:flex">

        <span class="loader hidden font-outfit">Loading</span>

        <div class="flex flex-row h-20 absolute w-full content-between justify-between p-7">
          <RouterLink class="w-[250px] z-20" to="/Projects">
            <button
              class=" hover:bg-opacity-0 hover:border hover:text-main-red border-main-red duration-500 hover:w-[100%] font-outfit w-[100%] h-12  px-[2.5vh] bg-main-red rounded-full font-medium >">
              projects
            </button>
          </RouterLink>
          <RouterLink class=" z-20" to="/Contact">
            <button
              class=" float-right hover:bg-opacity-0 hover:border hover:text-main-red border-main-red duration-500  font-outfit w-[250px] h-12  px-[2.5vh] bg-main-red rounded-full font-medium >">
              contact
            </button>
          </RouterLink>


        </div>
        <div class="w-full h-[730px] flex justify-center">
          <hometitle2_desktop class="w-[80%] h-[76%] mt-28 mb-0 etoiles"></hometitle2_desktop>
        </div>
        <arrow
          class=" 1000px:flex hidden hover:w-[23%] hover:h-[22.2%] duration-500 absolute bottom-14 left-20 w-[15%] h-[15%] float-left">
        </arrow>
        <div
          class="1000px:flex hidden gap-2 absolute left-[8%] top-32 1000px:top-48 w-[20%] font-outfit text-white my-14 text-center items-center font-bold text-sm 1000px:text-lg">
          <circle_left class="shrink-0 w-6 1000px:w-8"></circle_left>
          <p class="select-none">“Découvrez la fusion entre la technologie et l'art.”</p>
          <circle_right class="shrink-0 w-6 1000px:w-8"></circle_right>
        </div>
        <div class="w-full absolute ">
          <star class="1000px:flex hidden float-right relative top-[300px] h-[30%] w-[17%]  mr-4"></star>
        </div>
      </div>
    </section>


  </main>
</template>

<style scoped>
.section {
  background-image: url(../../public/home_bg.png);
}

html,
body {
  overflow: hidden;
}



.fondu-out {
  opacity: 0;
  transition: opacity 0.4s ease-out;
}

.etoiles :hover {
  stroke-width: 10%;
  stroke-dasharray: 1 100 100;
}
</style>

