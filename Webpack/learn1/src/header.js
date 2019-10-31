function Header() {
    const dom = document.getElementById('root')
    const element = document.createElement('header');
    element.innerText = '我是JS生成'
    dom.append(element)
}

export default Header;