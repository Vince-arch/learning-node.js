const EventEmmiter = require('events')

const customEmmiter = new EventEmmiter()

customEmmiter.on('response', (name, id) => {
    console.log(`data received user ${name} with id:${id}`)
})
customEmmiter.on('response', () => {
    console.log(`some other logic here`)
})

customEmmiter.emit('response', 'John', 34)