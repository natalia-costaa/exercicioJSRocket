import state from "./state.js";
import * as el from "./elements.js";
import { stop } from "./actions.js";



export function countdown() {
    
    clearTimeout(state.countdownId)

    if(!state.isRunning) {
        return
    }

    let isFinished = state.minutes <= 0 && state.seconds <= 0;
    
    if(isFinished) {
        stop();
        return;
    }

    state.seconds--;

    if(state.seconds < 0) {
        state.seconds = 59;
        state.minutes--;
    }
    
    updateDisplay(state.minutes, state.seconds)
        
    state.countdownId = setTimeout( () => countdown(), 1000);
    
}

export function updateDisplay(minutes, seconds) {
    /*
    Nullish coalescing operator ??
    é um operador lógico que retorna seu operando do lado direito quando seu operando do 
    lado esquerdo é nulo ou indefinido e, caso contrário, retorna seu operando do lado esquerdo.
    */

    minutes = minutes ?? state.minutes;
    seconds = seconds ?? state.seconds;

    /*
    nesse caso, minutes = minutesA ?? state.minutes se o minutesA for nulo, então pegar o valor de 
    state.minutes
    */

    el.minutes.textContent = String(minutes).padStart(2,"0");
    el.seconds.textContent = String(seconds).padStart(2,"0");

}

export function increaseTimer() {

    if(state.minutes < 60) {
        state.minutes += 5;
    }

}

export function decreaseTimer() {
    
    if (state.minutes > 4) {
        state.minutes -= 5;
        
    }
}