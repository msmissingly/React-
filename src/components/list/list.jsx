import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import Items from '../items/items'
import './list.css'

class List extends Component {
    state = {
		isFirst:true,
		isLoading:false,//请求前要true，请求得到响应后要false
		users:[],//一些用户
		error:''//错误信息
	}

    componentDidMount(){
        //定时器，订阅消息
        PubSub.subscribe('Message',(message,data)=>{
            this.setState(data)
        })
    }


    render() {
        const {isFirst,isLoading,users,error} = this.state
        let content
        if(isFirst) content =<h2>欢迎使用</h2>
        else if(isLoading) content=<h2>Loading...</h2>
        else if(error) content=<h2>{error}</h2>
        else  {
            content =users.map((userObj)=>{
                return <Items key={userObj.login} {...userObj}/>
                
            })
        }
        return (
            <div className="row">
                {content}
            </div>
        )
    }
}
export default List