import { controls, sounds } from "./elements.js"; 
import * as activity from "./actions.js";

export function registerControls() {
    controls.addEventListener('click', (event) => {
        const actionControls = event.target.dataset.action;
    
        if(typeof activity[actionControls] !== "function") {
            return;
        }

        /* formas de acessar uma função dentro um objeto
        activity.toogleRunning()
        activity["toogleRunning"]()
        activity[actionControls]()
        */
       activity[actionControls]()
    })

}

export function registerSounds() {
    sounds.addEventListener('click', (event) => {
        const actionSounds = event.target.dataset.action;
        if(actionSounds === undefined) {
            return;
        }
    })

    activity[actionSounds];
}