import { createSSRApp } from "vue";
import i18n from "@/utils/lang/i18n-main";
import App from "./App.vue";
import { createRouter } from "./router";
import { createHead } from "@unhead/vue";
import "./scss/main.scss";

// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here.
export function createApp() {
  const app = createSSRApp(App);
  const router = createRouter();
  const head = createHead();
  app.use(router);
  app.use(i18n);
  app.use(head as any);
  return { app, router, head };
}
