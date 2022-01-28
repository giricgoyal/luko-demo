import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { App } from "vue";

library.add(faBars);

const addIconComponent = (app: App): void => {
  app.component("icon", FontAwesomeIcon);
};

export default addIconComponent;
