import React,{Component} from 'react'
import {Link,Route} from 'react-router-dom'
import HomeMessageDetail from '../home-message-detail/home-message-detail'

class HomeMessage extends Component{
  state={
    messages:[]
  }
  componentDidMount(){
    this.timer=setTimeout(()=>{
      this.setState({
        messages:[
          {id:'001',name:'消息1'},
          {id:'002',name:'消息2'},
          {id:'003',name:'消息3'},
          {id:'004',name:'消息4'},
        ]
      })
    },1000)
  }
  componentWillUnmount(){
    clearTimeout(this.timer)
  }
    render(){
        return(
                <div>
                  <ul>
                     {
                       this.state.messages.map((messageObj)=>{
                         return <li key={messageObj.id}>
                           <Link to={`/home/message/detail/${messageObj.id}`}>{messageObj.name}</Link>&nbsp;&nbsp;
                         </li>
                       })
                     }
                     
                  </ul>
                  <hr/>
                  <Route path='/home/message/detail/:id' component={HomeMessageDetail}/>
                </div>
        )
    }
}
export default HomeMessage