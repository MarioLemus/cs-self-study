/*
* la capa de presentacion :se encarga de presentar los datos
* (views de una pagina web, endpoints de api, etc)
*
* ademas se encarga de consumir las abstracciones provenientes de la capa de dominio
*/
import { Router } from 'express'
import { ProcessUser } from '../02-domain/ProcessUser.js'

const router = Router()


router.get('/', async (req, res) => {
    const processedUser = new ProcessUser()
    const users = await processedUser.usersList()
    //console.log(users)
    res.send(users)
})

router.post('/', async (req, res) => {
    const { user } = req.body
    if (!user) {
        res.sendStatus(411)
        return
    }

    const processedUser = new ProcessUser(user)
    if (await processedUser.add()) {
        res.sendStatus(201)
    }
    return 
})

export default router