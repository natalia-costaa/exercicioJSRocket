import state from "./state.js";
import * as timer from "./timer.js";

// a função com o mesmo nome do dataset action (data-action) para 
export function toogleRunning() {
    /* troca o true pelo false ao clicar
    state.isRunning = !state.isRunning;
    */

    // troca o true pelo false
    state.isRunning = document.documentElement.classList.toggle('running');
    timer.countdown()
}

export function stop() {
    state.isRunning = false;
    document.documentElement.classList.remove('running');
    timer.updateDisplay()
}

export function increase() {
    timer.increaseTimer();
    timer.updateDisplay();
}

export function decrease() {
    timer.decreaseTimer();
    timer.updateDisplay();
}


