import React, { Component } from 'react';
import {connect} from'react-redux'
class Homepage extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>{
                    this.props.saveList(this.props.qTypeQs)
                    //跳转到答题页面  并随身携带单选题数组
                    this.props.history.push('/detail')
                }}>开始做题</button>
            </div>
        );
    }
}


let mapStateToProps=(state)=>{
    return{
        qTypeQs:state.reducer.qTypeQs
    }
}
let mapDispatchToProps=(dispatch)=>{
    return {
        saveList:(list)=>{
            dispatch({type:"SAVE_LIST",list})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Homepage)

