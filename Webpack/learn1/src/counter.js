import './counter.css'

export default function () {
    const divEle = document.createElement("button");
    divEle.setAttribute("id","hot");
    divEle.innerText = "单机添加"
    divEle.style.backgroundColor = '#f0f0f0'
    divEle.style.width = '120px'
    divEle.style.margin = "auto 0px"
    document.body.appendChild(divEle);


    divEle.onclick = function() {
        const pEle = document.createElement("div");
        pEle.innerHTML = divEle.children.length;
        divEle.appendChild(pEle);
    }
}