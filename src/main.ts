import { createApp } from "vue";
import App from "./App.vue";
import addIconComponent from "@/components/icon";

const app = createApp(App);
app.mount("#app");
addIconComponent(app);
