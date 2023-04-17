#!/usr/bin/env node

// server
import express from 'express'
import router from './01-presentation/index.js'

const app = express()

app.use(express.json())
app.use(router)


app.listen("3000", () => {
    console.log("option-1 -> running on post 3000")
})