const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const tricks = {
    'backside 180': {
        'name': 'backside 180',
        'class': 'fundamental',
        'info': 'combines an ollie with a 180-degree turn, leading with your back. Take off going your normal stance and land switch.', 
        'tricksPrior': 'ollie, kickturn, frontside 180',
        'media': 'https://i.makeagif.com/media/9-12-2016/nm2J8h.gif'

    },
    'bigspin': {
        'name': 'bigspin',
        'class': 'spin',
        'info': 'a 360 pop shuvit with a body varial in the same direction.', 
        'tricksPrior': 'ollie, backside 180 ollie, shuvit, pop-shuvit, 360 shuvit.',
        'media': 'https://pa1.narvii.com/6314/68d3a92655853a25d5f1a54ef6a6f4523bec0665_hq.gif'
    },
    'frontside 180': {
        'name': 'frontside 180',
        'class': 'fundamental',
        'info': 'combines an ollie with a 180-degree turn, leading with your back. Take off going your normal stance and land switch.', 
        'tricksPrior': 'ollie, kickturn, backside 180',
        'media': 'https://thumbs.gfycat.com/RemarkableWebbedFluke-mobile.mp4'
    },
    'hardflip': {
        'name': 'hardflip',
        'class': 'flip',
        'info': 'a frontside pop shuvit kickflip', 
        'tricksPrior': 'ollie, frontside shuvit, kickflip, frontside flip, 360 flip',
        'media': 'https://i.makeagif.com/media/6-11-2015/L0Q7tJ.mp4'
    },
    'heelflip': {
        'name': 'heelflip',
        'class': 'flip',
        'info': 'using your heel push the board to make it flip 360 degree before landing back on it', 
        'tricksPrior': 'ollie, shuvit, kickflip'
    },
    'kickflip': {
        'name': 'kickflip',
        'class': 'flip',
        'info': 'a 360 degree flip along the axis that the rider does before landing back on the board', 
        'tricksPrior': 'ollie, backside shuvit, frontside 180 ollie'
    },
    'ollie': {
        'name': 'ollie',
        'class': 'fundamental',
        'info': 'a leap into the air by popping back foot, jumping, and sliding your front foot forward to level out the board at the peak of the jump', 
        'tricksPrior': 'ollie, frontside, shuvit, kickflip'
    },
    'pop shuvit': {
        'name': 'pop shuvit',
        'class': 'fundamental',
        'info': 'a boardspin while doing an ollie', 
        'tricksPrior': 'kickturn, ollie, shuvit'
    },
    'pressure flip': {
        'name': 'pressure flip',
        'class': 'flip',
        'info': ' rear foot scoops the tail toward your backside so that the board does a 180 and half a heelflip. a flip where your back foot does most of the job.', 
        'tricksPrior': 'shuvit, pop shuvit'
    },
    'shuvit': {
        'name': 'shuvit',
        'class': 'fundamental',
        'info': 'a 180-degree board spin', 
        'tricksPrior': 'kickturn, ollie'
    },
    'unknown': {
        'name': 'unknown',
        'class': 'unknown',
        'info': 'unknown', 
        'tricksPrior': 'unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    //lower case query parameter that is inserted for searching...
    const trickName = request.params.name.toLowerCase()

    //bracket notation because spaces dont work well with dot notation.

    //if trickName is a property of tricks object... eg: if heelflip is within tricks??

    if( tricks[trickName] ){
        response.json(tricks[trickName])
    } else {
        response.json(tricks['unknown'])
    }

})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}!`)
})