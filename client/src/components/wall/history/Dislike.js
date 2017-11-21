import React, {Component} from 'react'

import HistoriesApi from '../../../services/HistoriesApi'

class Dislike extends Component{
	constructor(props){
		super(props)

		this.state={
			disliked: false
		}
	}

	setDisliked = (disliked) =>{
		this.setState({disliked})
	}

	componentWillMount(){
		this.setDisliked(this.props.disliked)
	}
	componentWillReceiveProps(nextProps){
		this.setDisliked(nextProps.disliked)
	}

	deleteOrAddLike = (disliked) =>{
		if(disliked){
			HistoriesApi.deleteDislike(this.props.idHistory, this.props.myIdDog)
		}else{
			HistoriesApi.addDislike(this.props.idHistory, this.props.myIdDog)
		}
		this.setDisliked(!disliked)
		this.props.setDisliked(!disliked)
	}
	
	handleDislike(disliked){
		if(this.props.myIdDog)
			this.deleteOrAddLike(disliked)
	}
	render(){
		return (
			<button className={this.state.disliked ? 'disliked outlineNone borderButtonHistory marginButtonHistory buttonResize' : 'dislike outlineNone borderButtonHistory marginButtonHistory buttonResize'}
				onClick={() =>{this.handleDislike(this.state.disliked)}}
				>
			</button>
		)
	}
}

export default Dislike