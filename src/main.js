import {createApp} from 'vue'
import App from './app/App'
import components from '@/shared/ui';
import router from "@/app/router";
import '@/shared/styles/styles.css';

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
});

app.use(router).mount('#app') 