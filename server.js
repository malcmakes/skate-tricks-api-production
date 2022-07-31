const express = require('express')
const app = express()
const PORT = 8000

const tricks = {
    'backside 180': {
        'name': 'backside 180',
        'type': 'fundamental',
        'info': 'combines an ollie with a 180-degree turn, leading with your back. Take off going your normal stance and land switch.', 
        'tricksPrior': 'ollie, kickturn, frontside 180'
    },
    'frontside 180': {
        'name': 'frontside 180',
        'type': 'fundamental',
        'info': 'combines an ollie with a 180-degree turn, leading with your back. Take off going your normal stance and land switch.', 
        'tricksPrior': 'ollie, kickturn, backside 180'
    },
    'hardflip': {
        'name': 'hardflip',
        'type': 'flip',
        'info': 'a frontside pop shuvit kickflip', 
        'tricksPrior': 'ollie, frontside shuvit, kickflip, frontside flip, 360 flip'
    },
    'heelflip': {
        'name': 'heelflip',
        'type': 'flip',
        'info': 'using your heel push the board to make it flip 360 degree before landing back on it', 
        'tricksPrior': 'ollie, frontside shuvit, kickflip'
    },
    'kickflip': {
        'name': 'kickflip',
        'type': 'flip',
        'info': 'a 360 degree flip along the axis that the rider does before landing back on the board', 
        'tricksPrior': 'ollie, backside shuvit, frontside 180 ollie'
    },
    'ollie': {
        'name': 'ollie',
        'type': 'fundamental',
        'info': 'a leap into the air by popping back foot, jumping, and sliding your front foot forward to level out the board at the peak of the jump', 
        'tricksPrior': 'ollie, frontside, shuvit, kickflip'
    },
    'pop shuvit': {
        'name': 'pop shuvit',
        'type': 'fundamental',
        'info': 'a boardspin while doing an ollie', 
        'tricksPrior': 'kickturn, ollie, shuvit'
    },
    'pressure flip': {
        'name': 'pressure flip',
        'type': 'flip',
        'info': ' rear foot scoops the tail toward your backside so that the board does a 180 and half a heelflip. a flip where your back foot does most of the job.', 
        'tricksPrior': 'shuvit, pop shuvit'
    },
    'shuvit': {
        'name': 'shuvit',
        'type': 'fundamental',
        'info': 'a 180-degree board spin', 
        'tricksPrior': 'kickturn, ollie'
    },
    'unknown': {
        'name': 'unknown',
        'type': 'unknown',
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