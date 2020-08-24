export class Player {

    constructor(id, hp, score, bonus) {
        this.id = id
        this.hp = isNaN(hp) ? hp : 3;
        this.score = isNaN(score) ? score : 0;
        this.bonus = bonus
    }

    // Initialisation d'un joueur
    init() {
        this.setHp(this.hp)
        this.setScore(this.score)
    }

    // Met le nombre de point de vie au joueur passé en paramètre
    setHp(hp) {
        this.hp = hp;
        const lifeWrapper = document.getElementById("life");
        lifeWrapper.innerHTML = ""
        for (let i = 0; i <= hp; i++) {
            const hpDOM = this.createHpDOM()
            lifeWrapper.appendChild(hpDOM)
        }
    }

    // Créé le DOM html d'un point de vie
    createHpDOM() {
        const hpDOM = document.createElement("img")
        hpDOM.classList.add("p-2");
        hpDOM.src = "/images/svg/hearth.svg";
        hpDOM.alt = "";
        return hpDOM
    }

    // Ajoute le score a la vue html
    setScore(score) {
        const scoreWrapper = document.getElementById("score")
        scoreWrapper.innerText = score
    }

    // Ajoute le bonus a la vue html
    setBonus(bonus) {
        const bonusWrapper = document.getElementById("bonus");
        bonusWrapper.innerHTML = ""
        for (let i = 0; i < this.bonus.length; i++) {
            const bonusDOM = this.createBonusDOM(bonus)
            bonusWrapper.appendChild(bonusDOM)
        }
    }

    // Supprime le bonus renseigné
    removeBonus(bonus) {
        const bonusWrapper = document.getElementById("bonus");
        for (let i = 0; i < this.bonus.length; i++) {
            if (this.bonus[i] === bonus) {
                this.bonus.splice(i, 1)
                bonusWrapper.children[i].remove()
            }
        }
    }

    // Créé le DOM html d'un point de vie
    createBonusDOM(bonus) {
        const bonusDOM = document.createElement("img")
        bonusDOM.classList.add("p-2", "cursor-pointer");
        bonusDOM.src = (bonus === "hp_bonus") ? "/images/svg/playerBonusHealth.svg" : "";
        bonusDOM.alt = "";
        bonusDOM.onclick = () => this.useBonus(bonus)
        return bonusDOM;
    }

    // Ajoute le bonus renseigné
    addBonus(bonus) {
        this.bonus.push(bonus)
        this.setBonus(bonus)
    }

    // Utilise le bonus
    useBonus(bonus) {
        if (bonus === "hp_bonus") {
            this.setHp(this.hp + 1)
            this.removeBonus(bonus)
        }
    }

}