<script setup>

</script>

<template>
    <div class="flex flex-col p-14 justify-center text-white">
        <div class="flex flex-col gap-10 w-3/4">
            <h1 class="uppercase font-bold text-xl">E-car vtc</h1>
            <hr>
            <h2>
                Voici un projet de refonte de l'image de marque d'une
                entreprise de VTC.
            </h2>
            <h2>
                Ce projet comprend une refonte complète du site web de l'entreprise, ainsi que la
                mise en place d'une présence solide et cohérente sur les réseaux sociaux. Nous avons également travaillé
                à l'établissement d'une identité visuelle forte et moderne, qui reflète les valeurs et l'esprit de
                l'entreprise.
            </h2>
            <h2>Nous sommes convaincus que cette refonte permettra à l'entreprise de se démarquer de la
                concurrence et de renforcer sa présence sur le marché.

            </h2>
        </div>
        <div class="flex justify-center py-20 pr-10">
            <img src="../../public/img_dekstop/presentation_ecarVTC.png" alt="">
        </div>
        <div class="flex flex-col mt-10 text-center gap-10">
            <h2 class="font-semibold text-2xl">Découvrez mes autres projets !</h2>
            <nav role="navigation" class="text-white font-montserrat font-medium primary-navigation">
                <ul>
                    <li><a href="#">Travaux personnels &dtrif;</a>
                        <ul class=" text-white dropdown">
                            <li class=" text-white "><a class=" text-white " href="#">Web Development</a></li>
                            <li>
                                <Routerlink to="/bb">
                                    Web Design
                                </Routerlink>
                            </li>
                            <li><a href="#">Illustration</a></li>
                            <li><a href="#">Iconography</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Projets scolaires &dtrif;</a>
                        <ul class=" text-white dropdown">
                            <li class=" text-white "><a class=" text-white " href="#">Web Development</a></li>
                            <li><a href="#">Web Design</a></li>
                            <li><a href="#">Illustration</a></li>
                            <li><a href="#">Iconography</a></li>
                        </ul>
                    </li>
                    <li class="last-element"><a href="#">Illustrations &dtrif;</a>
                        <ul class=" text-white dropdown">
                            <li class=" text-white "><a class=" text-white " href="#">Web Development</a></li>
                            <li><a href="#">Web Design</a></li>
                            <li><a href="#">Illustration</a></li>
                            <li><a href="#">Iconography</a></li>
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