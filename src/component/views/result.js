import React, { Component } from 'react';
import {connect} from 'react-redux'
class Result extends Component {
    render() {
        let {list,useranswer}=this.props
        
        useranswer.map((item,index)=>{
            list.filter((item1,index)=>{
                //筛选出用户做题  并把用户答案赋值给这道题的userAnswer  最后 将用户答案与正确答案作比较
                if(item1.id==item.id){
                    item1.userAnswer=item.userAnswer
                }
            })
        })
    
        return (
            <div>
                <p>红色为错题，绿色为回答正确，白色为未作答</p>
                {
                    list.map((item,index)=>{
                        //将用户答案与正确答案作比较 显示对错
                        return <span className={item.userAnswer==item.answer?"idx green":(item.userAnswer==null?"idx":"idx red")}  key={index}>{index+1}</span>
                    })
                }
            </div>
        );
    }
}
let mapStateToProps=(state)=>{
    return{
        list:state.reducer.qTypeQs[0].questions,//所有单选题的数组
        useranswer:state.reducer2
    }
}

export default connect(mapStateToProps)(Result)
