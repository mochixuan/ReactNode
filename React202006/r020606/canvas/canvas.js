setTimeout(()=>{
    window.location.reload();
},10000)

console.log('加载开始')

const onImgLoad = (url, callback) => {
    const img = new Image();
    img.src = url;
    if (img.complete) { //complete 属性可返回浏览器是否已完成对图像的加载
        callback(img);
    } else {
        img.onload = function() {
            callback(img)
            img.onload = null;
        }
    }
}

const canvas = document.getElementById('shot');
const clientWidth = document.body.clientWidth;
const clientHeight = document.body.clientHeight;
const devicePixelRatio = window.devicePixelRatio;
canvas.width = clientWidth;
canvas.height = clientHeight;


if (!canvas.getContext) {
    alert('浏览器版本过低请更新浏览器');
} else {
    const ctx = canvas.getContext('2d');
    // ctx.fillRect(0, 0, 100, 100); 
    // ctx.clearRect(0, 0, 50, 50);
    
    // ctx.moveTo(100,100);
    // ctx.lineTo(100, 200);
    // ctx.lineTo(200,200);
    // ctx.closePath();
    // ctx.stroke(); // 相当于你把点定好了，却没用线连起来
    // ctx.fill();

    // ctx.moveTo(200, 200);
    // ctx.arc(200,200, 100, 0, Math.PI/4, false);
    // ctx.closePath();
    // ctx.stroke();

    const imgUrl =
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593428391493&di=4aaba76cc2fcf3353aa69957138a91e5&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201405%2F27%2F20140527233157_nFycY.jpeg';
    const imgQr = '../img/qrcode.png';
    onImgLoad(imgUrl, (img)=>{
        ctx.drawImage(img, 0, 0, clientWidth, clientWidth*img.height/img.width);
    })
    
    onImgLoad(imgQr, (img) => {
      ctx.drawImage(img, clientWidth-120, clientHeight-120, 100, 100);
    });
    
}

console.log('加载结束')