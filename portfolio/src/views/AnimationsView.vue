<script setup>

</script>

<template>
    <div class="flex flex-col justify-center text-white">
        <div class="flex flex-col p-14 gap-8 w-2/4">
            <h1 class="uppercase font-bold text-xl">ANIMATIONS 2d</h1>
            <hr>
            <h2>
                Voici quelques unes de mes animations, encore débutant, celle ci ont été effectuées pour me familiariser
                avec le Motion Design et le logiciel After Effect.


            </h2>
        </div>
        <div class="mx-14">
            <div class="w-1/2 flex ">
                <video src="../../public/vidéos/anim_insta.mp4" controls></video>
                <video src="../../public/vidéos/animation_insta.mp4" controls></video>
            </div>
            <div class="w-1/2 flex ">
                <video src="../../public/vidéos/splash_1.mp4" controls></video>
                <video src="../../public/vidéos/cv_sound_v2.mp4" controls></video>
            </div>
        </div>
        <div class="flex flex-col mt-32 text-center gap-10">
            <h2 class="font-semibold text-2xl">Découvrez mes autres projets !</h2>
            <nav role="navigation" class="text-white font-montserrat font-medium primary-navigation">
                <ul>
                    <li><a href="#">Travaux personnels &dtrif;</a>
                        <ul class=" text-white dropdown">
                            <li>
                                <RouterLink to="/CouleursdeVie">

                                    Animations 2D</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/CouleursdeVie">

                                    Castle Toys</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/CouleursdeVie">

                                    Just Juice</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/CouleursdeVie">

                                    Pinball Space</RouterLink>
                            </li>
                        </ul>
                    </li>
                    <li><a href="#">Projets scolaires &dtrif;</a>
                        <ul class=" text-white dropdown">
                            <li>
                                <RouterLink to="/E-carVTC">

                                    E-car VTC</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/CouleursdeVie">

                                    Muse'aic</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/CouleursdeVie">

                                    Vélotaf</RouterLink>
                            </li>
                        </ul>
                    </li>
                    <li class="last-element"><a href="#">Illustrations &dtrif;</a>
                        <ul class=" text-white dropdown">
                            <li class=" text-white ">
                                <RouterLink to="/CouleursdeVie">

                                    Couleurs de Vie</RouterLink>
                            </li>
                            <li class=" text-white ">
                                <RouterLink to="/CouleursdeVie">

                                    Citadelle</RouterLink>
                            </li>

                        </ul>
                    </li>

                </ul>
            </nav>


            <RouterLink to="/agency"></RouterLink>
        </div>
    </div>

</template>

<style scoped>
.primary-navigation {
    margin: 0 auto;
    display: block;

    padding: 10px 0 150px 0;

    font-size: 16px;


}

ul li {
    list-style: none;
    margin: 0 auto;
    border-left: 2px solid #3ca0e7;

    display: inline-block;
    padding: 0 30px;
    position: relative;
    text-decoration: none;
    text-align: center;

}

.last-element {
    border-right: 2px solid #3ca0e7;
    padding-left: 40px;
    padding-right: 40px;
}


li a {
    color: white;
}

li ul li a {

    font-weight: 400;
    font-size: smaller;
}

li a:hover {
    color: #3ca0e7;
}

li:hover {
    cursor: pointer;
}

ul li ul {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    padding-left: 0;
    left: 0;
    right: 0;
    display: none;
    background: #111;
}

ul li:hover>ul,
ul li ul:hover {
    visibility: visible;
    opacity: 1;
    display: block;
    min-width: 150px;
    text-align: left;
    padding-top: 20px;
    box-shadow: 0px 3px 5px -1px #3ca0e7;
}

ul li ul li {
    clear: both;
    width: 100%;
    text-align: left;
    margin-bottom: 20px;
    border-style: none;
}

ul li ul li a:hover {
    padding-left: 10px;
    border-left: 2px solid #3ca0e7;
    transition: all 0.3s ease;
}


a {

    text-decoration: none;


}

a:hover {
    color: #3CA0E7;
}



ul li ul li a {
    transition: all 0.5s ease;
}
</style>