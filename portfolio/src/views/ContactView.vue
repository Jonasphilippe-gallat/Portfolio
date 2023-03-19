<script setup>
import ContactTitle_desktop from '../components/design/contact-title_desktop.vue';

import contactTitle_mobileVue from '../components/design/contact-title_mobile.vue';
import contact_star_linkedin from '../components/design/contact_star_linkedin.vue';
import contact_star_mail from '../components/design/contact_star_mail.vue';
import contact_star_phone from '../components/design/contact_star_phone.vue';
</script>

<template>
    <RouterLink
        class=" z-50 hidden tablet:flex fixed bottom-10 left-10 h-20 w-20 rounded-full border-black hover:border-white hover:border duration-700 bg-[black]"
        to="/">

        <div class="w-8 h-8 mx-auto my-auto flex justify-center items-center">
            <img src="../../public/home.svg" alt="">

        </div>
    </RouterLink>

    <section class="section-contact-mobile flex 1350px:hidden">
        <div class="p-[10%] mt-20 flex flex-col justify-center w-full h-full">
            <div>
                <contactTitle_mobileVue class="w-full h-full" />

            </div>
            <div class="flex flex-col gap-[3vh] mt-7">
                <hr class="">
                <p
                    class="text-white font-outfit text-left font-light
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ">
                    Mon
                    nom
                    est
                    Jonas
                    Philippe
                    Gallat, je
                    suis
                    actuellement
                    en
                    2ème année du
                    BUT MMI (Métiers du Multimédia
                    et de l'Internet) en spécialisation création numérique.
                <p> En tant que créatif dans l'âme j'ai pu,
                    dans le
                    cadre ou non de ma formation, développé des compétences solides en design graphique.</p>
                Je vous présente ici mon univers créatif à travers quelques unes de mes créations.
                </p>
                <hr class="">
            </div>
            <div
                class="flex flex-col gap-10 contact_section font-bold text-white justify-center uppercase my-8 mt-14 text-center text-3xl">
                <div class="flex flex-col justify-center gap-3">
                    <a href="mailto:jonas.pgallat@gmail.com">
                        <contact_star_mail class="mx-auto"></contact_star_mail>
                    </a>
                    <p>jonas.pgallat@gmail.com</p>
                </div>
                <div class="flex flex-col justify-center gap-3">
                    <a href="https://www.linkedin.com/in/jonas-philippe-gallat/" target="_blank">
                        <contact_star_linkedin class="mx-auto"></contact_star_linkedin>
                    </a>
                    <p>Jonas Philippe Gallat </p>
                </div>
                <div class="flex flex-col justify-center gap-3">
                    <a href="tel:+330641030204">
                        <contact_star_phone class="mx-auto"></contact_star_phone>
                    </a>
                    <p>06.41.03.02.04</p>
                </div>

            </div>


        </div>
    </section>
    <section class="section-contact-desktop hidden 1350px:flex">
        <div class="flex  flex-col justify-center w-full px-[10%] pt-[2%] ">
            <contact-title_desktop class="w-[80%] h-full mx-auto"></contact-title_desktop>
            <div class="flex justify-end content-end self-end w-[30%] mt-5 mr-[5.5%]">
                <p
                    class="text-white font-outfit text-left font-light w-full text-[1vw] leading-[130%]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ">
                    Mon
                    nom
                    est
                    Jonas
                    Philippe
                    Gallat, je
                    suis
                    actuellement
                    en
                    2ème année du
                    BUT MMI (Métiers du Multimédia
                    et de l'Internet) en spécialisation création numérique.
                <p> En tant que créatif dans l'âme j'ai pu,
                    dans le
                    cadre ou non de ma formation, développé des compétences solides en design graphique.</p>
                Je vous présente ici mon univers créatif à travers quelques unes de mes créations.
                </p>
            </div>


        </div>

        <div
            class="flex max-h-[400px] flex-col w-full h-full right-[42%] top-[39%] absolute contact_section font-bold text-white uppercase justify-start items-end gap-[5%] text-[2vw]">
            <div class="flex flex-row-reverse items-center gap-10 w-full">
                <a href="mailto:jonas.pgallat@gmail.com">
                    <contact_star_mail class="  shrink-0"></contact_star_mail>
                </a>

                <p class="shrink">jonas.pgallat@gmail.com</p>
            </div>
            <div class="flex flex-row-reverse items-center gap-10 w-full ">
                <a href="https://www.linkedin.com/in/jonas-philippe-gallat/" target="_blank">
                    <contact_star_linkedin class="shrink-0"></contact_star_linkedin>
                </a>

                <p class="shrink-0">Jonas Philippe Gallat </p>

            </div>
            <div class="flex flex-row-reverse items-center gap-10       w-full">
                <a href="tel:+330641030204">
                    <contact_star_phone class="shrink-0"></contact_star_phone>
                </a>

                <p class="shrink">06.41.03.02.04</p>
            </div>
        </div>
    </section>
</template>

<style>
body {
    background-image: url(../../public/home_bg.png);


}

.section-contact-mobile {
    overflow: hidden;
}

.section-contact-desktop {
    overflow: hidden;
}

.contact_section {
    font-family: 'ThunderBold';
}
</style>

