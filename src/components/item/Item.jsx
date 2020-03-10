import React,{Component} from 'react'

class Item extends React.Component{
    render(){
        return(
            <li className="list-group-item">
				<div className="handle">
					<a  href="#1">删除</a>
				</div>
				<p className="user"><span >张三</span><span>说:</span></p>
				<p className="centence">内容是</p>
			</li>
        )
    }
} 

export default Item