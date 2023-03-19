
<script>
// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
    if (video.mute = true) {
        video.unmute();
        btn.innerHTML = "Pause";
    } else {
        video.mute();
        btn.innerHTML = "Play";
    }
}
</script>



<template>
    <RouterLink
        class=" z-50 hidden tablet:flex fixed bottom-10 left-10 h-20 w-20 rounded-full border-black hover:border-white hover:border duration-700 bg-[black]"
        to="/">

        <div class="w-8 h-8 mx-auto my-auto flex justify-center items-center">
            <img src="../../public/home.svg" alt="">

        </div>
    </RouterLink>
    <div class="hidden 1350px:flex flex-col h-full w-full  text-white font-outfit">


        <div class="w-full  flex flex-row">
            <div class="w-1/3 font-outfit p-[3%]">
                <h2 class="font-bold text-[3vw] text-[#B5DDFF] leading-[100%] uppercase">e-car vtc <span
                        class="font-thin">brand
                        identity</span> </h2>
                <p class="pt-10 text-[1vw]">Ce projet visait à créer et à établir une image de marque complète pour le
                    lancement d'une
                    société de VTC.</p>
                <h3 class="font-semibold ml-[1%] mt-[30%] text-[2vw]">Challenge</h3>
                <ul class="list-outside ml-[5%] mt-7 text-[1vw]">
                    <li class="list-disc mt-3">établir une identité visuelle moderne et simple
                    </li>
                    <li class="list-disc mt-3">établir une communication sur les réseaux sociaux
                    </li>
                    <li class="list-disc mt-3">concevoir et livrer un site web pour son activité
                    </li>
                    <li class="list-disc mt-3">élaborer des visuels pour sa campagne de communication</li>
                </ul>
            </div>

            <div class="w-2/3 overflow-hidden shadow-xl">
                <div class="">
                    <form>
                        <input type="radio" name="fancy" value="spades" id="spades" />
                        <input type="radio" name="fancy" autofocus value="clubs" id="clubs" />
                        <input type="radio" name="fancy" value="hearts" id="hearts" />

                        <input type="radio" name="fancy" value="diamonds" id="diamonds" />
                        <label for="spades">
                        </label> <label for="clubs"> </label><label for="hearts"> </label><label for="diamonds"></label>

                    </form>
                </div>
            </div>
        </div>
        <hr>
        <div class="w-full  flex flex-row">
            <div class="w-1/3 font-outfit p-[3%]">
                <h2 class="font-bold text-[3vw] uppercase leading-[100%] text-[#FFF016]">UMLA TOUR <span
                        class="font-thin">Illustration</span>
                </h2>
                <p class="pt-10 text-[1vw]">Il s'agit ici d'une illustration basé sur les affiches promotionnels de la
                    tournée du rappeur Alpha Wann</p>
                <h3 class="font-semibold ml-[1%] mt-[30%] text-[2vw]">Challenge</h3>
                <ul class="list-outside ml-[5%]  mt-7 text-[1vw]">
                    <li class="list-disc mt-3">Garder le meme message de communication
                    </li>
                    <li class="list-disc mt-3">Conserver une ambiance et un ton similaire
                    </li>

                </ul>
            </div>

            <div class="w-2/3 overflow-hidden shadow-xl">
                <div class="">
                    <form>

                        <input type="radio" name="fancy" autofocus value="second_1" id="second_1" />
                        <input type="radio" name="fancy" value="second_2" id="second_2" />
                        <input type="radio" name="fancy" value="second_3" id="second_3" />
                        <input type="radio" name="fancy" value="second_4" id="second_4" />
                        <input type="radio" name="fancy" value="second_5" id="second_5" />
                        <label for="second_1"> </label><label for="second_2"> </label><label for="second_3">
                        </label><label for="second_4"></label>
                        <label for="second_5"></label>

                    </form>
                </div>
            </div>
        </div>
        <hr>
        <div class="w-full  flex flex-row">
            <div class="w-1/3 font-outfit p-[3%]">
                <h2 class="font-bold text-[3vw] leading-[100%] text-[#EB5F4F] uppercase">MAKI CAW <span
                        class="font-thin">visual
                        identity</span> </h2>
                <p class="pt-10 text-[1vw]">Voici un projet fictif de création d'identité visuelle et de communication pour
                    une marque de restauration particulière.
                    Il s'agit ici d'une marque proposant deux services de restauration différents.
                </p>
                <h3 class="font-semibold ml-[1%] mt-[30%] text-[2vw]">Challenge</h3>
                <ul class="list-outside ml-[5%] mt-7 text-[1vw]">
                    <li class="list-disc mt-3">établir une identité visuelle cohérente
                    </li>
                    <li class="list-disc mt-3">Restranscrire une ambiance originale et professionnelle
                    </li>
                    <li class="list-disc mt-3">Imaginer et conceptualiser des supports de communication
                    </li>

                </ul>
            </div>

            <div class="w-2/3 overflow-hidden shadow-xl">
                <div class="">
                    <form>

                        <input type="radio" name="fancy" autofocus value="third_1" id="third_1" />
                        <input type="radio" name="fancy" value="third_2" id="third_2" />
                        <input type="radio" name="fancy" value="third_3" id="third_3" />
                        <input type="radio" name="fancy" value="third_4" id="third_4" />
                        <input type="radio" name="fancy" value="third_5" id="third_5" />
                        <input type="radio" name="fancy" value="third_6" id="third_6" />
                        <input type="radio" name="fancy" value="third_7" id="third_7" />
                        <label for="third_1"> </label><label for="third_2"> </label><label for="third_3">
                        </label><label for="third_4"></label>
                        <label for="third_5"></label>
                        <label for="third_6"></label>
                        <label for="third_7"></label>

                    </form>
                </div>
            </div>
        </div>
        <hr>
        <div class="w-full  flex flex-row">
            <div class="w-1/3 font-outfit p-[3%]">
                <h2 class="font-bold text-[3vw] leading-[100%] text-[#F07D7B] uppercase">PORTFOLIO <span
                        class="font-thin">ANIMATION 2D</span> </h2>
                <p class="pt-10 text-[1vw]">Cette courte vidéo animée à pour but de mettre en avant quelques uns de mes
                    projets et également mes compétences en motion design par la même occasion. </p>
                <h3 class="font-semibold ml-[1%] mt-[30%] text-[2vw]">Challenge</h3>
                <ul class="list-outside ml-[5%] mt-7 text-[1vw]">
                    <li class="list-disc mt-3">Obtenir un rendu dynamique
                    </li>
                    <li class="list-disc mt-3">Établir une ambiance originale et homogène
                    </li>
                    <li class="list-disc mt-3">Réaliser un sound design cohérent
                    </li>

                </ul>
            </div>

            <div class="w-2/3 overflow-hidden shadow-xl">
                <div class="">
                    <form>

                        <input type="radio" name="fancy" autofocus value="four_1" id="four_1" />
                        <input type="radio" name="fancy" value="four_2" id="four_2" />
                        <input type="radio" name="fancy" value="four_3" id="four_3" />
                        <input href="https://drive.google.com/file/d/1AxAzqdxGqImZNi-zQTXRm_bZL1VTJShD/view?usp=sharing"
                            type="radio" name="fancy" value="four_4" id="four_4" />

                        <label for="four_1">

                        </label><label for="four_2"> </label><label for="four_3">
                        </label>

                        <label for="four_4">
                            <video autoplay muted loop id="myVideo" src="../../public/CV-Animé_Jonas_Philippe-Gallat.mp4">

                            </video>

                            <a id="myBtn" class="absolute bottom-7   rounded-full  duration-500 mt-7"
                                href="https://drive.google.com/file/d/1AxAzqdxGqImZNi-zQTXRm_bZL1VTJShD/view?usp=sharing">
                                <img src="../../public/volume.svg" alt="">

                            </a>
                        </label>


                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="flex 1350px:hidden flex-col h-full w-full  text-white font-outfit">


        <div class="w-full  flex flex-col">
            <div class="w-full mt-24 overflow-hidden  shadow-xl">
                <div class="">
                    <form>
                        <input type="radio" name="fancy" value="mobile_spades" id="mobile_spades" />
                        <input type="radio" name="fancy" autofocus value="mobile_clubs" id="mobile_clubs" />
                        <input type="radio" name="fancy" value="mobile_hearts" id="mobile_hearts" />

                        <input type="radio" name="fancy" value="mobile_diamonds" id="mobile_diamonds" />
                        <label class="h-96" for="mobile_spades">
                        </label> <label class="h-96" for="mobile_clubs"> </label><label class="h-96" for="mobile_hearts">
                        </label><label class="h-96" for="mobile_diamonds"></label>

                    </form>
                </div>
            </div>
            <div class="w-full mb-14 px-[10%] font-outfit p-[3%]">
                <h2 class="font-bold text-3xl text-[#B5DDFF] leading-[100%] text-center uppercase">e-car vtc <span
                        class="font-thin">brand
                        identity</span> </h2>
                <p class="pt-10 text-lg text-center">Ce projet visait à créer et à établir une image de marque complète pour
                    le
                    lancement d'une
                    société de VTC.</p>
                <h3 class="font-semibold  text-center mt-[10%] text-lg">Challenge</h3>
                <ul class="list-outside flex flex-col items-center text-sm">
                    <li class="list-disc mt-3">établir une identité visuelle moderne et simple
                    </li>
                    <li class="list-disc mt-3">établir une présence sur les réseaux sociaux
                    </li>
                    <li class="list-disc mt-3">concevoir un site web pour son activité
                    </li>
                    <li class="list-disc mt-3">élaborer des visuels pour la communication</li>
                </ul>
            </div>


        </div>
        <hr>
        <div class="w-full  flex flex-col">
            <div class="w-full mt-14 overflow-hidden  shadow-xl">
                <div class="">
                    <form>
                        <input type="radio" name="fancy" value="mobile_second_1" id="mobile_second_1" />
                        <input type="radio" name="fancy" autofocus value="mobile_second_2" id="mobile_second_2" />
                        <input type="radio" name="fancy" value="mobile_second_3" id="mobile_second_3" />

                        <input type="radio" name="fancy" value="mobile_second_4" id="mobile_second_4" />
                        <input type="radio" name="fancy" value="mobile_second_5" id="mobile_second_5" />
                        <label class="h-96" for="mobile_second_1">
                        </label> <label class="h-96" for="mobile_second_2"> </label><label class="h-96"
                            for="mobile_second_3">
                        </label><label class="h-96" for="mobile_second_4"></label>
                        <label class="h-96" for="mobile_second_5"></label>

                    </form>
                </div>
            </div>
            <div class="w-full mb-14 px-[10%] font-outfit p-[3%]">
                <h2 class="font-bold text-3xl text-[#FFF016] leading-[100%] text-center uppercase">UMLA TOUR <span
                        class="font-thin"> Illustration</span> </h2>
                <p class="pt-10 text-lg text-center">Il s'agit ici d'une illustration basé sur les affiches promotionnels de
                    la
                    tournée du rappeur Alpha Wann</p>
                <h3 class="font-semibold  text-center mt-[10%] text-lg">Challenge</h3>
                <ul class="list-outside flex flex-col items-center text-sm">
                    <li class="list-disc mt-3">Garder le meme message de communication
                    </li>
                    <li class="list-disc mt-3">Conserver une ambiance et un ton similaire
                    </li>

                </ul>
            </div>


        </div>
        <hr>
        <div class="w-full  flex flex-col">
            <div class="w-full mt-14 overflow-hidden  shadow-xl">
                <div class="">
                    <form>
                        <input type="radio" name="fancy" value="mobile_third_1" id="mobile_third_1" />
                        <input type="radio" name="fancy" autofocus value="mobile_third_2" id="mobile_third_2" />
                        <input type="radio" name="fancy" value="mobile_third_3" id="mobile_third_3" />

                        <input type="radio" name="fancy" value="mobile_third_4" id="mobile_third_4" />
                        <input type="radio" name="fancy" value="mobile_third_5" id="mobile_third_5" />
                        <input type="radio" name="fancy" value="mobile_third_6" id="mobile_third_6" />
                        <input type="radio" name="fancy" value="mobile_third_7" id="mobile_third_7" />
                        <label class="h-96" for="mobile_third_1">
                        </label> <label class="h-96" for="mobile_third_2"> </label><label class="h-96" for="mobile_third_3">
                        </label>
                        <label class="h-96" for="mobile_third_4"></label>
                        <label class="h-96" for="mobile_third_5"></label>
                        <label class="h-96" for="mobile_third_6"></label>
                        <label class="h-96" for="mobile_third_7"></label>

                    </form>
                </div>
            </div>
            <div class="w-full mb-14 px-[10%] font-outfit p-[3%]">
                <h2 class="font-bold text-3xl text-[#EB5F4F] leading-[100%] text-center uppercase">MAKI CAW<span
                        class="font-thin"> visual
                        identity</span> </h2>
                <p class="pt-10 text-lg text-center">Voici un projet fictif de création d'identité visuelle et de
                    communication pour
                    une marque de restauration particulière.
                    Il s'agit ici d'une marque proposant deux services de restauration différents.
                </p>
                <h3 class="font-semibold  text-center mt-[10%] text-lg">Challenge</h3>
                <ul class="list-outside flex flex-col items-center text-sm">
                    <li class="list-disc mt-3">établir une identité visuelle cohérente
                    </li>
                    <li class="list-disc mt-3 px-auto">Restranscrire une ambiance originale
                    </li>
                    <li class="list-disc mt-3 px-auto">Conceptualiser des supports de communication
                    </li>

                </ul>
            </div>


        </div>
        <hr>
        <div class="w-full  flex flex-col">
            <div class="w-full mt-14 overflow-hidden  shadow-xl">
                <div class="">
                    <form>
                        <input type="radio" name="fancy" value="mobile_four_1" id="mobile_four_1" />
                        <input type="radio" name="fancy" autofocus value="mobile_four_2" id="mobile_four_2" />
                        <input type="radio" name="fancy" value="mobile_four_3" id="mobile_four_3" />

                        <input type="radio" name="fancy" value="mobile_four_4" id="mobile_four_4" />

                        <label class="h-96" for="mobile_four_1">
                        </label> <label class="h-96" for="mobile_four_2"> </label><label class="h-96" for="mobile_four_3">
                        </label>
                        <label class="h-96 " for="mobile_four_4">
                            <video autoplay muted loop id="myVideo_mobile"
                                src="../../public/CV-Animé_Jonas_Philippe-Gallat.mp4">

                            </video>

                            <a id="myBtn_mobile" class="absolute bottom-0 left-[41%]  rounded-full  duration-500 mt-7"
                                href="https://drive.google.com/file/d/1AxAzqdxGqImZNi-zQTXRm_bZL1VTJShD/view?usp=sharing">
                                <img src="../../public/volume.svg" alt="">

                            </a>

                        </label>


                    </form>
                </div>
            </div>
            <div class="w-full mb-14 mt-8 px-[10%] font-outfit p-[3%]">
                <h2 class="font-bold text-3xl text-[#F07D7B] leading-[100%] text-center uppercase">PORTFOLIO <span
                        class="font-thin">ANIMATION 2D</span> </h2>
                <p class="pt-10 text-lg text-center">Cette courte vidéo animée à pour but de mettre en avant quelques uns de
                    mes
                    projets et également mes compétences en motion design par la même occasion.</p>
                <h3 class="font-semibold  text-center mt-[10%] text-lg">Challenge</h3>
                <ul class="list-outside flex flex-col items-center text-sm">
                    <li class="list-disc mt-3">Obtenir un rendu dynamique
                    </li>
                    <li class="list-disc mt-3">Établir une ambiance originale et homogène
                    </li>
                    <li class="list-disc mt-3">Réaliser un sound design cohérent
                    </li>

                </ul>
            </div>


        </div>
    </div>
</template>

<style>
* {
    box-sizing: border-box;
}

body {
    font-family: sans-serif;

}



label {

    color: rgba(255, 255, 255, 0);
    transition: transform 400ms ease-out;
    display: inline-block;
    min-height: 100%;
    width: 100%;
    height: 100vh;
    position: relative;
    z-index: 1;
    text-align: center;
    line-height: 100vh;

}

form {

    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    white-space: nowrap;
}

input {
    display: none;
    position: absolute;
    visibility: hidden;

}


input:focus~.keys {
    opacity: 0.8;
}

input:nth-of-type(1):checked~label:nth-of-type(1),
input:nth-of-type(2):checked~label:nth-of-type(2),
input:nth-of-type(3):checked~label:nth-of-type(3),
input:nth-of-type(4):checked~label:nth-of-type(4),
input:nth-of-type(5):checked~label:nth-of-type(5),
input:nth-of-type(6):checked~label:nth-of-type(6),
input:nth-of-type(7):checked~label:nth-of-type(7),
input:nth-of-type(8):checked~label:nth-of-type(8) {
    z-index: 0;
}

input:nth-of-type(1):checked~label {
    transform: translate3d(0, 0, 0);
}

input:nth-of-type(2):checked~label {
    transform: translate3d(-100%, 0, 0);
}

input:nth-of-type(3):checked~label {
    transform: translate3d(-200%, 0, 0);
}

input:nth-of-type(4):checked~label {
    transform: translate3d(-300%, 0, 0);
}

input:nth-of-type(5):checked~label {
    transform: translate3d(-400%, 0, 0);
}

input:nth-of-type(6):checked~label {
    transform: translate3d(-500%, 0, 0);
}

input:nth-of-type(7):checked~label {
    transform: translate3d(-600%, 0, 0);
}

input:nth-of-type(8):checked~label {
    transform: translate3d(-700%, 0, 0);
}

label {
    flex-shrink: 1;

    background-size: contain;
    background-repeat: no-repeat;
    background-color: none;
    font-size: 3rem;
    background-position: center;
}

label[for="diamonds"] {
    background-image: url(../../public/ECAR-0.png);

}

label[for="hearts"] {
    background-image: url(../../public/ECAR-1.png);
}

label[for="clubs"] {
    background-image: url(../../public/ECAR-2.png);
}

label[for="spades"] {
    background-image: url(../../public/ECAR-3.png);
}

label[for="second_1"] {
    background-image: url(../../public/UMLA-0.png);
}

label[for="second_2"] {
    background-image: url(../../public/UMLA-1.png);
}

label[for="second_3"] {
    background-image: url(../../public/UMLA-3.png);
}

label[for="second_4"] {
    background-image: url(../../public/UMLA-2.png);
}

label[for="second_5"] {
    background-image: url(../../public/UMLA-4.png);
}

label[for="third_1"] {
    background-image: url(../../public/MAKI-0.png);
}

label[for="third_2"] {
    background-image: url(../../public/MAKI-1.png);
}

label[for="third_3"] {
    background-image: url(../../public/MAKI-2.png);
}

label[for="third_4"] {
    background-image: url(../../public/MAKI-3.png);
}

label[for="third_5"] {
    background-image: url(../../public/MAKI-4.png);
}

label[for="third_6"] {
    background-image: url(../../public/MAKI-5.png);
}

label[for="third_7"] {
    background-image: url(../../public/MAKI-6.png);
}

#myBtn {



    padding: 25px;
    border: none;

    cursor: pointer;
}

#myBtn:hover {
    background: #F07D7B;

}

#myBtn_mobile {



    padding: 25px;
    border-width: 1px;


    cursor: pointer;
}

#myBtn_mobile:hover {
    background: #F07D7B;

}

#myVideo_mobile {
    max-height: 400px;
    margin-left: auto;
    margin-right: auto;
}

label[for="four_1"] {
    background-image: url(../../public/CV-2.png);
}

label[for="four_2"] {
    background-image: url(../../public/CV-3.png);
}

label[for="four_3"] {
    background-image: url(../../public/CV-1.png);
}


label[for="mobile_diamonds"] {
    background-image: url(../../public/ECAR-0.png);

}

label[for="mobile_hearts"] {
    background-image: url(../../public/ECAR-1.png);
}

label[for="mobile_clubs"] {
    background-image: url(../../public/ECAR-2.png);
}

label[for="mobile_spades"] {
    background-image: url(../../public/ECAR-3.png);
}

label[for="mobile_second_1"] {
    background-image: url(../../public/UMLA-0.png);
}

label[for="mobile_second_2"] {
    background-image: url(../../public/UMLA-1.png);
}

label[for="mobile_second_3"] {
    background-image: url(../../public/UMLA-3.png);
}

label[for="mobile_second_4"] {
    background-image: url(../../public/UMLA-2.png);
}

label[for="mobile_second_5"] {
    background-image: url(../../public/UMLA-4.png);
}

label[for="mobile_third_1"] {
    background-image: url(../../public/MAKI-0.png);
}

label[for="mobile_third_2"] {
    background-image: url(../../public/MAKI-1.png);
}

label[for="mobile_third_3"] {
    background-image: url(../../public/MAKI-2.png);
}

label[for="mobile_third_4"] {
    background-image: url(../../public/MAKI-3.png);
}

label[for="mobile_third_5"] {
    background-image: url(../../public/MAKI-4.png);
}

label[for="mobile_third_6"] {
    background-image: url(../../public/MAKI-5.png);
}

label[for="mobile_third_7"] {
    background-image: url(../../public/MAKI-6.png);
}

label[for="mobile_four_1"] {
    background-image: url(../../public/CV-2.png);
}

label[for="mobile_four_2"] {
    background-image: url(../../public/CV-3.png);
}

label[for="mobile_four_3"] {
    background-image: url(../../public/CV-1.png);
}

label:before,
label:after {
    color: white;
    display: block;
    background: rgba(0, 0, 0, 0.3);
    position: absolute;
    padding: 2rem;
    font-size: 1.5rem;
    height: 5rem;
    vertical-align: middle;
    line-height: 1rem;
    top: 50%;
    transform: translate3d(0, -50%, 0);
    cursor: pointer;


}

label:before {
    content: "\276D";

    right: 100%;
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
}

label:after {
    content: "\276C";
    left: 100%;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
}
</style>