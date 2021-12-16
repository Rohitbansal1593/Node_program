const EventEmitter = require('events');
const current_time="6:00pm";

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('6:00pm', () => {
  console.log('time to home');
});

// let current_time=prompt.start();
if(current_time==="6:00pm"){
    myEmitter.emit(current_time);
}
else{
    console.log("do your work");
}
