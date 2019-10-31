import avator from '../img/avatar.jpg'
import styles from './index.css'

function imageLoader() {
    const root = document.getElementById('root')

    const img = new Image();
    img.src = avator;
    img.classList.add(styles.avatar)
    root.append(img)
}

export default imageLoader