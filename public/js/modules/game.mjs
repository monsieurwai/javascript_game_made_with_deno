import { Player } from "/js/modules/player.mjs"
import { Area } from "/js/modules/area.mjs"
import { Monster } from "/js/modules/monster.mjs"
import { Modal } from "/js/modules/modal.mjs"

export class Game {
    constructor() {}

    // Initialisation d'une partie
    init() {

        // Initialisation du terrain
        const area = new Area();
        area.init()

        // Initialisation d'un joueur
        const player = new Player("player-0", 3, 0, [])
        player.init()

        // Initialisation des monstres
        const monsters = this.generateMonsters(100)

        this.start(player, monsters, area);
    }

    // Lancement de la partie
    start(player, monsters, area) {
        let count = 0
        setInterval(() => {
            if (count < 100) {
                monsters[count].monsterPath(monsters[count], player)
                count++
            } else {
                const endModal = new Modal("modal_to_end")
                endModal.open()
            }
        }, 2000);
    }

    // Génère les monstres
    generateMonsters(numberOfMonsters) {
        let monsters = []
        for (let i = 0; i < numberOfMonsters; i++) {
            monsters.push(new Monster(Math.random() > 0.7 ? "strong" : "weak", Math.round(Math.random() * 5)))
        }
        return monsters
    }

}