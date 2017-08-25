var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
var starttime = new Date();

// 如果在emit事件中有阻塞 例如IO操作或者直接给setTimeout的话，将会直接执行下一步，体现了node.js的异步非阻塞思想。
event.on('event_1', function(){
	console.log('触发了event_1事件');
});
// 设置一个阻塞
setTimeout(function(){
	event.emit('event_1');
},1000)
// event.emit('event_1');
console.log('程序执行完毕');