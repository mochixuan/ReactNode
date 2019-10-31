import avator from '../img/avatar.jpg'
import styles1 from './index.scss'

function imageLoader() {
    const root = document.getElementById('root')

    const img1 = new Image();
    img1.src = avator;
    img1.classList.add(styles1['avatar-circle'])
    root.append(img1)
}

export default imageLoader