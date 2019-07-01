import React, { Component } from 'react';
import {connect} from 'react-redux'
class Detail extends Component {
    state = {
        start: 0
    }
    componentDidMount(){
        this.setstart()
    }
    setstart(){
        //接受答题卡传过来的下标 根据下标设定从当前第几道题开始
       if(this.props.location.state){
           let idx=this.props.location.state.idx
        
           this.setState({
               start:idx
           })
       }
    }
    render() {
        let {list} = this.props;
        let {start}=this.state
        return (
            <div className="detail">
                <p>{list[0].title}</p>
                <h3 dangerouslySetInnerHTML={{ __html: `第${start+1}题`+list[0].questions[start].title }} />
                {
                   list[0].questions[start].questionChoices.map((item, index) => {
                            return <li className="list" key={item.id} onClick={() => {
                            //将点击的答案以及本题的id存到store中
                            this.props.saveuserAnswer({userAnswer:item.order.toUpperCase(),id:list[0].questions[start].id,idx:start})
                            //显示高亮效果    
                            setTimeout(()=>{
                                //递归 实现题的跳转
                                    if (this.state.start < list[0].questions.length - 1) {
                                        this.setState({
                                            start: this.state.start + 1
                                        })
                                    }
                                },200)
                            }}>{item.order.toUpperCase()}.{item.content}</li>
                    })
                }
                <button className="card" onClick={()=>{
                    //点击答题卡跳转到答题卡页面
                    this.props.history.push('/card')
                }}>答题卡</button>
                <button className="result" onClick={()=>{
                    //点击提交跳转到结果页面
                    this.props.history.push('/result')
                }}>提交试卷</button>
            </div>
        );
    }
}
let mapStateToProps=(state)=>{
    return{
        list:state.reducer3
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        //存储本题id 以及本题答案
        saveuserAnswer:(data)=>{
            dispatch({type:"USER_ANS",data})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Detail)
