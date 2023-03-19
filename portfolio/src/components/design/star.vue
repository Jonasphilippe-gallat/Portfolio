<template>
    <div class="test2">
        <svg class="test2" width="154" height="154" viewBox="0 0 154 154" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M69.9506 0.632202H84.0492V153.368H69.9506V0.632202Z M0.63208 84.0493V69.9507H153.368V84.0493H0.63208Z M99.227 3.5991L112.288 8.90816L54.773 150.401L41.7121 145.092L99.227 3.5991Z M3.59903 54.7731L8.90809 41.7122L150.401 99.2271L145.092 112.288L3.59903 54.7731Z
               
                                                   M126.179 18.1513L136.12 28.1482L27.8211 135.849L17.8795 125.852L126.179 18.1513Z
              
                                                    M18.1513 27.8211L28.1481 17.8795L135.849 126.179L125.852 136.12L18.1513 27.8211Z
                
                                                   M144.543 40.6717L150.051 53.6496L9.45748 113.328L3.94869 100.35L144.543 40.6717Z
          
                                                 M40.6718 9.4574L53.6497 3.94861L113.328 144.543L100.35 150.051L40.6718 9.4574Z"
                fill="white" />
        </svg>
    </div>
</template>

<style>
.test2 :hover {
    animation: rotation-etoile infinite 2s ease-in-out alternate;
    transform-origin: 50% 50%;


}

@keyframes rotation-etoile {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(540deg);
    }
}
</style>
