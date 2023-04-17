/*
* la capa de acceso a data: se encarga de preparar las abstracciones que interactuen con:
* (db, reddis, apis externas, etc)
*/
import fs from 'fs/promises'
import path from 'path'

export class UserData {

    async saveUser(user) {
        const dbPath = path.join(process.cwd(), "data.txt")
        try {
            await fs.appendFile(dbPath, user)
        } catch (error) {
            console.error(error)
        }
    }

    async getUsers() {
        const dbPath = path.join(process.cwd(), "data.txt")
        try {
            const buffer = await fs.readFile(dbPath)
            const users = buffer.toString().split("\n")
            return users
        } catch (error) {
            console.error(error)
        }
    }
}
