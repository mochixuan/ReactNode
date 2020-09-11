import React,{Component} from 'react';

class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.onChangeName = this.onChangeName.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onLogin = this.onLogin.bind(this);
    }

    render(){
        return (
            <div style={styles.contanier}>
                <div style={styles.swipe}>
                  <div style={styles.desc_text}>
                    风险决策系统运用风险模型的训练分析结果，<br/>
                    可视化设计决策集、决策树、决策表、评分 <br/>
                    卡、决策流，提供风险API服务，为信贷作业 <br/>
                    提供风险决策支持
                  </div>
                  <div style={styles.login}>
                    <div style={styles.login_header}>
                      <image style={styles.login_header_icon}/>
                      <span style={styles.login_header_text}>欢迎使用风控决策系统</span>
                    </div>
                    <input style={styles.input} placeholder='用户名' onChange={this.onChangeName}/>
                    <input style={styles.input} placeholder='密码' onChange={this.onChangePassword} type='password' />
                    <button style={styles.login_btn} onClick={this.onLogin}>登录</button>
                  </div>
                </div>
            </div>
        );
    }

    onChangeName(event){
      this.setState({username: event.target.value});
    }

    onChangePassword(event){
      this.setState({password: event.target.value});
    }

    onLogin(){
      console.log(this.state.username,this.state.password)
    }

};

const styles = {
  contanier: {
    width: '100vm',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundImage: `url(${require('./img/login_background.jpg')})`,
  },
  swipe: {
    display: 'flex',
    justifyContent: 'center',
  },
  desc_text: {
    fontSize: 28,
    lineHeight: 1.5,
    color: 'white',
    textAlign: 'center',
    marginRight: 160,
    marginTop: 240,
  },
  login: {
    display: 'flex',
    flexDirection: 'column',
    width: 350,
    height: 300,
    marginTop: 220,
    backgroundColor: 'white',
    boxShadow: '4px 4px 4px 0px #949494',
  },
  login_header: {
    display: 'flex',
    alignItems: 'center',
    height: 80
  },
  login_header_icon: {
    width: 101,
    height: 55,
    marginLeft: 15,
    backgroundSize: 'cover',
    backgroundImage: `url(${require('./img/login_logo.png')})`,
  },
  login_header_text: {
    marginLeft: 10,
    fontSize: 20,
    color: '#333'
  },
  input: {
    height: 36,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    background: 'none',
    outline: 'none',
    borderBottom: '1px solid #dbdbdb',  
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    fontSize: 16,
  },
  login_btn: {
    width: 320,
    height: 36,
    outline: 'none',
    background: '#4596EC',
    // border: '0px solid transparent',
    marginTop: 40,
    marginLeft: 15,
    color: 'white',
    fontSize: 20,
    borderRadius: 2,
    // boxShadow: '0px 2px 2px 0px #949494',
    // pointer: 'course'
  }
}

export default App;
