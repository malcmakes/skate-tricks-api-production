const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8787

const MongoClient = require('mongodb').MongoClient

const connectionString = "mongodb+srv://procxi:hOXwlFj9QXhO93ox@cluster0.qzekfaw.mongodb.net/?retryWrites=true&w=majority"

// hOXwlFj9QXhO93ox

//Middleware
app.use(cors())
app.use(express.json())

// const tricks = {
//     'backside 180': {
//         'name': 'backside 180',
//         'class': 'fundamental',
//         'info': 'combines an ollie with a 180-degree turn, leading with your back. Take off going your normal stance and land switch.', 
//         'tricksPrior': 'ollie, kickturn, frontside 180',
//         'media': 'https://i.makeagif.com/media/9-12-2016/nm2J8h.gif'

//     },
//     'bigspin': {
//         'name': 'bigspin',
//         'class': 'spin',
//         'info': 'a 360 pop shuvit with a body varial in the same direction.', 
//         'tricksPrior': 'ollie, backside 180 ollie, shuvit, pop-shuvit, 360 shuvit.',
//         'media': 'https://pa1.narvii.com/6314/68d3a92655853a25d5f1a54ef6a6f4523bec0665_hq.gif'
//     },
//     'frontside 180': {
//         'name': 'frontside 180',
//         'class': 'fundamental',
//         'info': 'combines an ollie with a 180-degree turn, leading with your back. Take off going your normal stance and land switch.', 
//         'tricksPrior': 'ollie, kickturn, backside 180',
//         'media': 'https://gfycat.com/deliriouspersonaldrongo'
//     },
//     'hardflip': {
//         'name': 'hardflip',
//         'class': 'flip',
//         'info': 'a frontside pop shuvit kickflip', 
//         'tricksPrior': 'ollie, frontside shuvit, kickflip, frontside flip, 360 flip',
//         'media': 'https://i.gifer.com/9R9c.gif'
//     },
//     'heelflip': {
//         'name': 'heelflip',
//         'class': 'flip',
//         'info': 'using your heel push the board to make it flip 360 degree before landing back on it', 
//         'tricksPrior': 'ollie, shuvit, kickflip',
//         'media': 'https://33.media.tumblr.com/85a67f233714f0c6444619b101bd0ba6/tumblr_nkg2mr8ziZ1u93ikoo1_500.gif'
//     },
//     'kickflip': {
//         'name': 'kickflip',
//         'class': 'flip',
//         'info': 'a 360 degree flip along the axis that the rider does before landing back on the board', 
//         'tricksPrior': 'ollie, backside shuvit, frontside 180 ollie',
//         'media': 'https://37.media.tumblr.com/acf215fd73a6b2c7ffc3cb1ec0d2d456/tumblr_n3x0bvU51w1rq31wzo1_400.gif'
//     },
//     'ollie': {
//         'name': 'ollie',
//         'class': 'fundamental',
//         'info': 'a leap into the air by popping back foot, jumping, and sliding your front foot forward to level out the board at the peak of the jump', 
//         'tricksPrior': 'kickturn, riding',
//         'media': 'https://www.wired.com/wp-content/uploads/2014/10/ollie-tracking-with-CM-optimized.gif'
//     },
//     'pop shuvit': {
//         'name': 'pop shuvit',
//         'class': 'fundamental',
//         'info': 'a boardspin while doing an ollie', 
//         'tricksPrior': 'kickturn, ollie, shuvit'
//     },
//     'pressure flip': {
//         'name': 'pressure flip',
//         'class': 'flip',
//         'info': ' rear foot scoops the tail toward your backside so that the board does a 180 and half a heelflip. a flip where your back foot does most of the job.', 
//         'tricksPrior': 'shuvit, pop shuvit'
//     },
//     'shuvit': {
//         'name': 'shuvit',
//         'class': 'fundamental',
//         'info': 'a 180-degree board spin', 
//         'tricksPrior': 'kickturn, ollie'
//     },
//     'unknown': {
//         'name': 'unknown',
//         'class': 'unknown',
//         'info': 'unknown', 
//         'tricksPrior': 'unknown'
//     }
// }


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

    // if(aliens[aliensName]) {
    //     response.json(aliens[aliensName])
    // } else {
    //     response.json(aliens['humans'])
    // }
    })

})
.catch(error => console.errror(error))

app.listen(process.env.PORT || PORT, () => {
    console.log('Server is running!')
})



























// MongoClient.connect(connectionString)
//     .then(client => {
//         console.log('Connected to Database')
//         const db = client.db('skate-tricks-api')
//         const infoCollection = db.collection('tricks-info')

//         app.get('/', (request, response) => {
//             response.sendFile(__dirname + '/index.html')
//         })
        
//         app.get('/api/:trickName', (request, response) => {
//             //lower case query parameter that is inserted for searching...
//             const tricksName = request.params.trickName.toLowerCase()

//             infoCollection.find({name: tricksName}).toArray()
//             .then(results => {
//                 console.log(results)
//                 response.json(results[0])
//             })
//             .catch(error => console.error(error))
//         })

//     })
//     .catch(error => console.error(error))

// app.listen(process.env.PORT || PORT, () => {
//     console.log(`The server is now running on port ${PORT}!`)
// })