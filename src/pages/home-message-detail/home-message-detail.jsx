import React, { Component } from 'react'
class HomeMessageDetail extends Component{
    state={
        messages:[
            {id:'001',name:'aa',content:'加油武汉'},
            {id:'002',name:'bb',content:'加油中国'},
            {id:'003',name:'cc',content:'加油自己'},
            {id:'004',name:'dd',content:'加油1021'}
        ]
    }

    render(){
        const {id} = this.props.match.params
        const result = this.state.messages.find((messageObj)=>{
            return messageObj.id === id
        })
        return(
               <ul>
				 <li>ID:{result.id}</li>
				 <li>Name:{result.name}</li>
				 <li>CONTENT:{result.content}</li>
			    </ul>
        )
    }
}
export default HomeMessageDetail