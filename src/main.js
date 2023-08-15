import {createApp} from 'vue'
import App from './app/App'
import components from '@/shared/ui';

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
});

app.mount('#app') 