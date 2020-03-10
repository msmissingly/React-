import React,{Component} from 'react'
import './item.css'

class Item extends Component{
	delete=(id)=>{
		if(window.confirm('确定要删除吗？')){
			this.props.deleteComment(id)
		}
	}
	render(){
		
		const {id,name,content} = this.props
        return(
            <li className="list-group-item">
				<div className="handle">
					<a onClick={()=>{this.delete(id)}} href="#1">删除</a>
				</div>
				<p className="user"><span >{name}</span><span>说:</span></p>
				<p className="centence">{content}</p>
			</li>
        )
    }
} 

export default Item