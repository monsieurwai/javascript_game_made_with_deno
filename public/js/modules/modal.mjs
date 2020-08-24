export class Modal {
    constructor(id) {
        this.id = id
        this.dom = document.getElementById(id)
    }

    // Ouverture modal
    open() {
        this.dom.classList.add("open")
    }

    // Fermeture modal
    close() {
        this.dom.classList.remove("open")
    }
}