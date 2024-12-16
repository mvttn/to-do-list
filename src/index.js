import "./styles/style.css";
import { Interface } from "./modules/interface";
import { storage } from "./modules/todos";

const mainContent = document.querySelector("#main-content");
const app = Interface();
app.initialise();

console.log(storage);

export { mainContent };
