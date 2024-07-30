import state from './state.js';
import * as phenomenon from './events.js';
import * as timer from "./timer.js";

export function start(minutes, seconds) {
    /* 
        dessa forma o estado foi atualizado em todo o projeto, com isso, 
        não é necessário passar os parâmetros no updateDisplay(), pois os valores de 
        state.minutes já foi att   
    */ 
    state.minutes = minutes;
    state.seconds = seconds;

    timer.updateDisplay();

    phenomenon.registerControls()
 //   phenomenon.registerSounds();


}