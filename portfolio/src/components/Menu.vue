<script setup>
import star from "../../src/components/design/star.vue";
import redstar from "../../src/components/design/redstar.vue";
</script>

<template>
    <div class="z-50">
        <div ref="sideNav" class="bm-menu shadow-2xl ">
            <nav class="bm-item-list">
                <div
                    class="text-main-blue text-right gap-1 font-montserrat font-semibold justify-center items-end ml-[30%] w-full flex flex-col ">
                    <RouterLink class="w-full" to="/">
                        <div class=" title_list w-full items-center flex gap-4">

                            <p class="title_item w-full uppercase "> Accueil</p>

                            <redstar class="w-10 redstar h-10 mr-10"></redstar>

                        </div>
                    </RouterLink>


                    <RouterLink class="w-full flex " to="/Projects">
                        <div class=" title_list w-full  items-center flex gap-4">

                            <p class="title_item w-full uppercase "> Projets</p>
                            <redstar class="w-10 redstar h-10 mr-10"></redstar>
                        </div>
                    </RouterLink>

                    <RouterLink class="w-full " to="/Contact">
                        <div class=" title_list  items-center  w-full flex gap-4">

                            <p class="title_item w-full uppercase"> Contact</p>
                            <redstar class="w-10 redstar h-10 mr-10"></redstar>

                        </div>
                    </RouterLink>


                </div>

            </nav>
            <span class="bm-cross-button cross-style" @click="closeMenu" :class="{ hidden: !crossIcon }">
                <span v-for="(x, index) in 2" :key="x" class="bm-cross"
                    :style="{ position: 'absolute', width: '2px', height: '35px', left: '10px', transform: index === 1 ? 'rotate(45deg)' : 'rotate(-45deg)' }">
                </span>
            </span>
        </div>
        <div ref="bmBurgerButton" class="bm-burger-button" @click="openMenu" :class="{ hidden: !burgerIcon }">
            <span class="bm-burger-bars line-style" :style="{ top: 20 * (index * 2) + '%' }" v-for="(x, index) in 3"
                :key="index"></span>
        </div>
    </div>
</template>
<script>



export default {
    name: 'menubar',
    data() {
        return {
            isSideBarOpen: false
        };
    },
    props: {
        isOpen: {
            type: Boolean,
            required: false
        },
        right: {
            type: Boolean,
            required: false
        },
        width: {
            type: [String],
            required: false,
            default: '500'
        },
        disableEsc: {
            type: Boolean,
            required: false
        },
        noOverlay: {
            type: Boolean,
            required: false
        },
        onStateChange: {
            type: Function,
            required: false
        },
        burgerIcon: {
            type: Boolean,
            required: false,
            default: true
        },
        crossIcon: {
            type: Boolean,
            required: false,
            default: true
        },
        disableOutsideClick: {
            type: Boolean,
            required: false,
            default: false
        },
        closeOnNavigation: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    methods: {
        openMenu() {
            this.$emit('openMenu');
            this.isSideBarOpen = true;
            if (!this.noOverlay) {
                document.body.classList.add('bm-overlay');
            }
            if (this.right) {
                this.$refs.sideNav.style.left = 'auto';
                this.$refs.sideNav.style.right = '0px';
            }
            this.$nextTick(function () {
                this.$refs.sideNav.style.width = this.width
                    ? this.width + 'px'
                    : '500px';
            });
        },
        closeMenu() {
            this.$emit('closeMenu');
            this.isSideBarOpen = false;
            document.body.classList.remove('bm-overlay');
            this.$refs.sideNav.style.width = '0px';
        },
        closeMenuOnEsc(e) {
            e = e || window.event;
            if (e.key === 'Escape' || e.keyCode === 27) {
                this.closeMenu();
            }
        },
        documentClick(e) {
            let element = this.$refs.bmBurgerButton;
            let target = null;
            if (e && e.target) {
                target = e.target;
            }
            if (
                element &&
                element !== target &&
                !element.contains(target) &&
                !this.hasClass(target, 'bm-menu') &&
                this.isSideBarOpen &&
                !this.disableOutsideClick
            ) {
                this.closeMenu();
            } else if (
                element &&
                this.hasClass(target, 'bm-menu') &&
                this.isSideBarOpen &&
                this.closeOnNavigation
            ) {
                this.closeMenu();
            }
        },
        hasClass(element, className) {
            do {
                if (element.classList && element.classList.contains(className)) {
                    return true;
                }
                element = element.parentNode;
            } while (element);
            return false;
        },
    },
    mounted() {
        if (!this.disableEsc) {
            document.addEventListener('keyup', this.closeMenuOnEsc);
        }
    },
    created: function () {
        document.addEventListener('click', this.documentClick);
    },
    destroyed: function () {
        document.removeEventListener('keyup', this.closeMenuOnEsc);
        document.removeEventListener('click', this.documentClick);
    },
    watch: {
        isOpen: {
            deep: true,
            immediate: true,
            handler(newValue, oldValue) {
                this.$nextTick(() => {
                    if (!oldValue && newValue) {
                        this.openMenu();
                    }
                    if (oldValue && !newValue) {
                        this.closeMenu();
                    }
                });
            }
        },
        right: {
            deep: true,
            immediate: true,
            handler(oldValue, newValue) {
                if (oldValue) {
                    this.$nextTick(() => {
                        this.$refs.bmBurgerButton.style.left = 'auto';
                        this.$refs.bmBurgerButton.style.right = '36px';
                        this.$refs.sideNav.style.left = '0px';
                        this.$refs.sideNav.style.right = '0px';
                        document.querySelector('.bm-burger-button').style.left = 'auto';
                        document.querySelector('.bm-burger-button').style.right = '36px';
                        document.querySelector('.bm-menu').style.left = '0px';
                        document.querySelector('.bm-menu').style.right = '0px';
                        document.querySelector('.cross-style').style.right = '25px';
                    });
                }
                if (newValue) {
                    if (
                        this.$refs.bmBurgerButton.hasAttribute('style')
                    ) {
                        this.$refs.bmBurgerButton.removeAttribute('style');
                        this.$refs.sideNav.style.right = 'auto';
                        document
                            .querySelector('.bm-burger-button')
                            .removeAttribute('style');
                        document.getElementById('sideNav').style.right = 'auto';
                        document.querySelector('.cross-style').style.right = '0px';
                    }
                }
            }
        }
    }
};
</script>
<style>
.redstar {
    fill: #FFF016
}

.bm-burger-button {
    z-index: 100;
    position: absolute;
    width: 36px;
    height: 25px;
    right: 36px;
    top: 36px;
    cursor: pointer;
    stroke-linejoin: round;
}

.bm-burger-button.hidden {
    display: none;
}

.bm-burger-bars {
    background-color: #FFF016;
    stroke-linejoin: round;
}

.line-style {
    position: absolute;
    height: 20%;
    left: 0;
    right: 0;
    height: 3px;
    border-radius: 100px;
}

.cross-style {
    position: absolute;
    top: 35px;
    right: 35px;
    cursor: pointer;
}

.bm-cross {
    background: #FFF016;
    width: 40px;
    height: 40px;
}

.bm-cross-button {
    height: 32px;
    width: 32px;
}

.bm-cross-button.hidden {
    display: none;
}

.bm-menu {
    height: 100%;
    /* 100% Full-height */
    max-width: 500px;
    width: 0;
    /* 0 width - change this with JavaScript */
    position: fixed;
    /* Stay in place */
    z-index: 1000;
    /* Stay on top */
    top: 0;
    right: 0;
    background-color: #242424;
    /* Black*/
    overflow-x: hidden;
    /* Disable horizontal scroll */
    padding-top: 60px;
    /* Place content 60px from the top */
    transition: 0.5s;
    /*0.5 second transition effect to slide in the sidenav*/
}

.bm-overlay {
    background: rgba(0, 0, 0, 1);
    z-index: 1000;
    color: rgba(0, 0, 0, 0.5);
    background-color: rgba(0, 0, 0, 1);
    border-color: rgba(0, 0, 0, 0.5);

}

.bm-item-list {
    color: #b8b7ad;
    margin-top: 80px;

    font-size: 33px;
    display: flex;

    justify-items: end;


}

.bm-item-list>* {
    display: flex;
    text-decoration: none;

    flex-direction: column;
}

.bm-item-list>*>span {
    margin-left: 10px;
    font-weight: 900;
    color: black;
    display: flex;
    flex-direction: column;
}

.title_list {
    width: 100%;
    justify-content: end;
    align-items: end;
    text-align: left;


    color: #FFF016;
    transition: 0.8s;
}



.title_list_contact {
    width: 100%;
    justify-content: center;
    align-items: center;


    color: #FFF016;

    transition: 0.8s;
}

.title_list_contact:hover {
    background-color: #0C2633;


}

.title_item {
    padding:
        14px;
}
</style>