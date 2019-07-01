import React, { Component } from 'react';
import {connect} from 'react-redux'
class Card extends Component {
    render() {
        console.log(this.props,'././././.')
        let {list,useranswer}=this.props
        let idSum=[];//装所有已做题的id
        useranswer.map((item,index)=>{
            idSum.push(item.id)
        })
        return (
            <div>
                <h3>答题卡</h3>
               {
                   list.map((item,index)=>{
                      //如果已做题的id在所有题的id中存在的话 则显示高亮
                       return <span className={idSum.includes(item.id)?"idx active":"idx"} key={index} onClick={()=>{
                        //点击时调到相应的一题   
                        this.props.history.push('/detail',{idx:index})
                       }}>{index+1}</span>
                   })
               }
            </div>
        );
    }
}
let mapStateToProps=(state)=>{
    return{
        list:state.reducer.qTypeQs[0].questions,//所有单选题的数组
        useranswer:state.reducer2//包括useranswer，所选题的id
    }
}
export default connect(mapStateToProps)(Card)
