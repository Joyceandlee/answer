import React, { Component } from 'react';
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'
import './css/home.css'
import data from './mock1.json'
import {connect} from'react-redux'

let Homepage=React.lazy(()=>import('./views/homepage'))
let Detail=React.lazy(()=>import('./views/detail.js'))
let Card=React.lazy(()=>import('./views/card.js'))
let Result=React.lazy(()=>import('./views/result'))
class Home extends Component {
    constructor(props){
        super(props)
        this.props.addList(data)//将获取到的json数据存到数据库
    }
    render() {
        return (
            <BrowserRouter>
                <Route path="/homepage" component={Homepage} />
                <Route path="/detail" component={Detail} />
                <Route path="/card" component={Card} />
                <Route path="/result" component={Result} />
                <Redirect from='/' to="/homepage"/>
            </BrowserRouter>
        );
    }
}
let mapStateToProps=(state)=>{
    return{

    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        //将获取到的json数据存到数据库
        addList:(data)=>{
            dispatch({type:"ADD_LIST",data})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);
