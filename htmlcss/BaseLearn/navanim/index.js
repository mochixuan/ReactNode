window.onload = function () {
    const nav = document.getElementsByClassName('nav')[0]
    const navItems = nav.children
    for (let i = 0 ; i < navItems.length ; i++) {
        navItems[i].style.top = Math.cos(Math.PI*(-180+i*45)/180)*100+80+'px'
        navItems[i].style.left = Math.sin(Math.PI*(180-i*45)/180)*100+80+'px'
    }
}
let open = true
function onChange() {
    const nav = document.getElementsByClassName('nav')[0]
    if (open) {
        nav.className = 'nav nav-close'
    } else {
        nav.className = 'nav nav-open'
    }
    open = !open
}
