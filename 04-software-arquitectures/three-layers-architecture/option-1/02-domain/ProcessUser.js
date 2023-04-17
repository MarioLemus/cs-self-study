/*
* la capa de dominio: se encarga de manejar la logica de la aplicacion
*
* esta capa unicamente consume las abstracciones del acceso a data
*/
import { UserData } from '../03-dataAccess/UserData.js'

export class ProcessUser {
    #user
    constructor(user) {
        this.#user = user
    }

    #formatUser() {
        return this.#user.trim().replaceAll(" ", "_")
    }

    #generateRandomNumber() {
        const val1 = Math.floor(Math.random() * 10) + 4
        const val2 = Math.floor(Math.random() * 10) + 16
        const val3 = Math.floor(Math.random() * 10) + 36
        const val4 = Math.floor(Math.random() * 10) + 6
        return `${val1}${val2}${val3}${val4}`
    }

    async #checkUserExistence() {
        const userData = new UserData()
        const users = await userData.getUsers()
        const user = this.#formatUser(this.#user)
        return users.includes(user)
    }

    async add() {
        const userData = new UserData()
        const user = this.#formatUser(this.#user)
        if (await this.#checkUserExistence()) {
            console.log("user already exists, so a random value is going to be append to it.")   
            userData.saveUser(`\n${user}${this.#generateRandomNumber()}`)
        } else {
            console.log("user created")
            userData.saveUser(`\n${user}${this.#generateRandomNumber()}`)
        }
        return true
    }

    async usersList() {
        const userData = new UserData()
        const users = await userData.getUsers()
        return JSON.stringify(users)
    }
}
