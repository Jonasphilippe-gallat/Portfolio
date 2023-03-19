import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './index.css'

const app = createApp(App)

app.use(router)

app.mount('#app')



const background = document.querySelector('section');
const top = document.querySelector('star')

top.addEventListener('click', function () {
    console.log(background.classList);


});
