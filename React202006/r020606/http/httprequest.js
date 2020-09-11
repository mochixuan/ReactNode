// XMLHttpRequest
function xhrRequest() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', "https://github.com/", true);
    // 当 readyState 属性改变时会调用它
    xhr.onreadystatechange = function() {
        if (xhr.readyState === xhr.DONE) {
            if (xhr.status >= 200 && xhr.status < 300 ||
                xhr.status === 304) {
                    console.log('请求完成:', xhr.responseText);
                }
        }
    }
    //添加请求头
    // xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    // 异常处理
    xhr.onerror = function() {
        console.log('请求失败');
    }
    //跨域携带cookie
    xhr.withCredentials = true;
    // 发出请求
    xhr.send("name=mochixuan&age=23");
}