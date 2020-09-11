import React from 'react';
import ReactDOM from 'react-dom';

// export default function Portal() {
//     const elRef = useRef();
//     useEffect(() => {
//         elRef.current = document.createElement('div');
//         const modalRoot = document.getElementById('modal-root');
//         modalRoot.appendChild(elRef.current);
//         return () => {
//             modalRoot.removeChild(elRef.current);
//         }
//     }, [])

//     return ReactDOM.createPortal(
//         (
//             <div style={styles.portal}>我是个Portal</div>
//         ),
//         elRef.current
//     )
// }

export default class Portal extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }
    componentDidMount() {
        this.modalRoot = document.getElementById('p1');
        this.modalRoot.appendChild(this.el);
    }
    componentWillUnmount() {
        this.modalRoot.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            (
             <div style={styles.portal}>我是个Portal</div>
            ),
            this.el
        );
    }
}

const styles = {
    modal: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.3)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    portal: {
        width: '80px',
        height: '48px',
        lineHeigh: '48px',
        color: '#f00'
    }
}