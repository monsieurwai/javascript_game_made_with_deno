import { Game } from "/js/modules/game.mjs"
import { Modal } from "/js/modules/modal.mjs"

document.addEventListener("DOMContentLoaded", function() {

    // Initialisation des instances
    const game = new Game();
    const modal = new Modal("modal_to_start");
    const startButton = document.getElementById("start_game");
    const reStartButton = document.getElementById("re_start_game");
    const reStartButtonAfterLost = document.getElementById("re_start_game_after_lost");

    // Ouverture de la modal qui sert à lancer la partie
    modal.open()

    // Le joueur a lancé la partie
    startButton.onclick = () => {
        modal.close()
        game.init()
    }

    // relance la game après avoir gagné
    reStartButton.onclick = () => {
        window.location.href = window.location.pathname + window.location.search + window.location.hash;
    }

    // relance la game après avoir perdu
    reStartButtonAfterLost.onclick = () => {
        window.location.href = window.location.pathname + window.location.search + window.location.hash;
    }
});