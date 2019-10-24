let tabChildElements;

window.onload = function () {
    // tabChildElement = document.getElementsByClassName('context')[0].children
    tabChildElements = document.querySelectorAll(".context>div")
    for (let i = 0 ; i < tabChildElements.length ; i++) {
        if (i != 0) {
            tabChildElements[i].style.display = 'none'
        }
        document.querySelectorAll(".nav>a")[i].onclick = function() {
            for (let j = 0 ; j < tabChildElements.length ; j++) {
                if (j != i) {
                    tabChildElements[j].style.display = 'none'
                } else {
                    tabChildElements[j].style.display = 'block'
                }
            }
        }
    }

}

