import {createApp} from 'vue'
import App from './app/App'
import components from '@/shared/ui';
import router from "@/app/router";

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
});

app.use(router).mount('#app') 