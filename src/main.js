import {createApp} from 'vue'
import App from './app/App'
import components from '@/shared/ui';
import router from "@/app/router";
import '@/shared/styles/styles.css';
import store from '@/shared/store';

const app = createApp(App)


components.forEach(component => {
    app.component(component.name, component)
});

app.use(store); // Использование Vuex в приложении
app.use(router).mount('#app') 