console.log('web worker js');
function count() {
     postMessage({name: 'worker线程'});
}
// 监听
onmessage = function(e) {
    console.log ('收到主线程的数据: ', e.data);
}
count()