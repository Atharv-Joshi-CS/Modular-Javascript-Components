import { Counter } from "./components/counter.js";
import { Timer } from "./components/timer.js";

const rootDiv = document.getElementById("root");

const counterSection = document.createElement("div")
counterSection.classList.add("section")
rootDiv.appendChild(counterSection);

const timerSection = document.createElement("div")
timerSection.classList.add("section")
rootDiv.appendChild(timerSection);

const counter1 = new Counter();
counter1.mount(counterSection);

const counter2 = new Counter();
counter2.mount(counterSection);

const counter3 = new Counter();
counter3.mount(counterSection)

const timer1 = new Timer();
timer1.mount(timerSection);

const timer2 = new Timer();
timer2.mount(timerSection);

const timer3 = new Timer();
timer3.mount(timerSection);