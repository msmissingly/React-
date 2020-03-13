import React,{Component} from 'react'

class Items extends Component{
    render(){
        const {html_url,avatar_url,login} = this.props
        return (
            <div className="card">
                    <a href={html_url}  target="_blank" rel="noopener noreferrer">
                        <img src={avatar_url} alt='' style={{ width: '100px' }} />
                    </a>
                    <p className="card-text">{login}</p>
            </div>
        )
    }
}

export default Items