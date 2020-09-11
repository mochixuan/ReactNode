import React,{ Component} from 'react'
import axios from 'axios';

let testState ;

class DomTest1 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            test: 0,
        }
    }

    render() {
        console.warn('child')
        return (
            <div>
                <button onClick={()=> { 
                    this.setState({test: this.state.test+1}) 
                    testState.setState({test: 100})
                    // window.postMessage("message", '*');
                    
                }}>子{this.state.test}</button>
            </div>
        )
    }
}



export default class DomTest extends Component {

    constructor(props) {
        super(props)

        this.state = {
            test: 0
        }
    }

    componentDidMount() {
        window.addEventListener('message', (data) => {
            this.setState({
                test: this.state.test
            })
        })

        testState = this;
        this.testFetch()
    }

    testFetch() {
        // const controller = new AbortController();
        // const signal = controller.signal;
        
        // signal.addEventListener('abort', function (e) {
        //     console.log(signal, 'signal的中断状态');
        // });

        // setTimeout(function () {
        //     controller.abort();
        // }, 2000);

        // 增加部分结束
        //   fetch('https://xaest.xiaoantimes.com/api/user/SjptStatisticService/loanData', {
        //     mode: 'no-cors',
        //     method: 'POST',
        //     headers: {
        //       Accept: 'application/json',
        //     },
        //   }).then((response) => response.json())
        //     .then((res) => {
        //       console.warn('请求成功', res);
        //     })
        //     .catch((error) => {
        //       console.warn('请求失败', error);
        //     });

        axios
          .post(
            'http://localhost:1234/',
            {},
            {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                accept: '',
              },
            }
          )
          .then((res) => {
            console.warn('请求成功', res);
          })
          .catch((error) => {
            console.warn('请求失败', error);
          });
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        console.warn('parent')
        return (
            <div style={{display: 'flex',justifyContent: 'center',margin: 100}}>
                父父
                {this.state.test}
                <button onClick={() => {
                    this.setState({
                        test: this.state.test+1
                    })
                }}>父丹姐</button>
                <DomTest1 props={this.state.test}/>
            </div>
        )
    }
}