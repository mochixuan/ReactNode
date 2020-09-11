import React,{Component} from 'react';

class App extends Component{

  constructor(props) {
    super(props)

    this.state = {
      items: [
        {icon: require('./img/welcome_1.png'),title: '数据处理',desc: '获取信用评估，进行数据处理，满足风险模型的需求'},
        {icon: require('./img/welcome_2.png'),title: '风险模型',desc: '模型训练、模型优化，为风险决策引擎提供模型执行模块、决策依据'},
        {icon: require('./img/welcome_3.png'),title: '可视化配置决策引擎',desc: '可视化配置决策集、决策表、决策树、评分卡、决策流，提供对外服务的API'},
        {icon: require('./img/welcome_4.png'),title: '客户信用评估',desc: '通过模型、风险决策引擎生成精准、详细的信用评估报告'},
        {icon: require('./img/welcome_5.png'),title: '客户分类',desc: '根据模型算法对客户进行全方位分类，精准区分好客户和坏客户'},
        {icon: require('./img/welcome_6.png'),title: '风险决策',desc: '根据客户信用评估和客户分类，对客户做出合理的信贷决策'},
      ]
    }
  }

    render(){
        return (
            <div style={styles.contanier}>
                {
                  this.state.items.map((item, index) => {
                    return (
                      <div style={styles.item} key={item.title}>
                        <img src={item.icon} style={styles.item_icon} alt={item.title}/>
                        <span style={styles.item_title}>{item.title}</span>
                        <span style={styles.item_desc}>{item.desc}</span>
                      </div>
                    )
                  })
                }
            </div>
        );
    }

};

const styles = {
  contanier: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    height: '100%',
    marginTop: '5%',
    alignItems: 'center'
  },
  item: {
    width: '30%',
    height: 280,
    display: 'flex',
    marginTop: 40,
    flexDirection: 'column',
    alignItems: 'center',
  },
  item_icon: {
    width: 100,
    height: 100,
    backgroundSize: 'cover',
  },
  item_title: {
    fontSize: 18,
    color: '#F49189',
    marginTop: 20
  },
  item_desc: {
    textAlign: 'center',
    fontSize: 18,
    color: '#666',
    marginTop: 10,
    width: 240,
  }
}

export default App;
