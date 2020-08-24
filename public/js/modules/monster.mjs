import { Modal } from "/js/modules/modal.mjs";

export class Monster {
    constructor(type, position) {
        this.hp = type === "weak" ? 1 : 5
        this.score = type === "weak" ? 100 : 500
        this.position = position
        this.bonus = Math.random() > 0.95 ? "hp_bonus" : null
    }

    // Chemin à parcourir par le monstre
    monsterPath(monster, player) {
        const monsterDOM = this.createMonsterDOM(monster, player)
        document.getElementById("game_col_" + monster.position).appendChild(monsterDOM)
        let position = 0
        const moving = new Promise((resolve) => {
            setInterval(() => {
                if (monsterDOM.offsetTop < document.getElementById("game_zone_base").offsetTop) {
                    position = position + 1
                    monsterDOM.style.top = `${position}px`
                } else {
                    resolve("explosion")
                }
            }, 20);
        })

        // Après le mouvement du monstre
        moving.then((response) => {
            if (response === "explosion") {
                this.exploseMonster(monsterDOM, player)
            }
        })
    }

    // Créer un monstre
    createMonsterDOM(monster, player) {
        const monsterDOM = document.createElement("img")
        monsterDOM.classList.add("p-2", "absolute", "top-0", "transition", "duration-1000", "linear", "z-10", "cursor-pointer");
        monsterDOM.src = monster.hp === 1 ? "/images/svg/monsterType0.svg" : "/images/svg/monsterType1.svg"
        monsterDOM.alt = "";
        monsterDOM.onclick = () => this.clickOnMonster(monster, monsterDOM, player)
        return monsterDOM
    }

    // Click sur un monster
    clickOnMonster(monster, monsterDOM, player) {
        monster.hp = monster.hp - 1;
        if (monster.hp === 0) {
            player.score = player.score + monster.score
            player.setScore(player.score)
            if (monster.bonus === "hp_bonus") {
                player.addBonus(monster.bonus)
            }
            monsterDOM.remove();
        }
    }

    // Explose le monstre
    exploseMonster(monster, player) {
        monster.src = "/images/svg/monsterExplosion.svg"
        player.hp = player.hp - 1
        player.setHp(player.hp)
        if (player.hp === -1) {
            const modalToLost = new Modal("modal_to_lost")
            modalToLost.open()
        }
        setTimeout(() => {
            monster.style.opacity = 0
        }, 500);
    }
}