const EventEmitter = require('events');
const uuid = require('uuid');



class Logger extends EventEmitter {
    log(msg) {
        // Call event
        //console.log(uuid.v4());
        this.emit('message', {id: uuid.v4(), msg});
    }
}

module.exports = Logger;

/*
// Listen
const Logger = require('./logger');

const logger = new Logger();

logger.on('message', (data) => console.log('Called Listener:', data));

logger.log('Hello world!');
logger.log('Hello Peng!');
logger.log('Hello Min!');
logger.log('Hello China!');
*/
