const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient

require('dotenv').config()

const connectionString = process.env.DB_STRING

//Middleware
app.use(cors())
app.use(express.json())

MongoClient.connect(connectionString)
    .then(client => {
        console.log('Connected to Database')
        const db = client.db('skate-tricks-api')
        const infoCollection = db.collection('trick-info')

    app.get('/', (request, response) => {
        response.sendFile(__dirname + '/index.html')
    })

    app.get('/api/:trickName', (request, response) => {
    const tricksName = request.params.trickName.toLowerCase()

      infoCollection.find({name: tricksName}).toArray()
        
        .then(results => {
            console.log(results)
            response.json(results[0])
        })
        .catch(error => console.error(error)) 
    })
})
.catch(error => console.error(error))

// app.listen(process.env.PORT || PORT, () => {
//     console.log(`Server is running!`)
// })

app.listen(process.env.PORT || 8787, () => {
    console.log('Server is running.')
  })
  