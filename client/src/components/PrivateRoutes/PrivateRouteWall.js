import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import Home from '../home/Home'
import Wall from '../wall/Wall'
import Xtorage from '../../Xtorage'


class PrivateRouteWall extends Component{

	render(){
		return (
			<div>
				{Xtorage.session.getObject('token') 
					?
		          	<Route exact path='/wall' render={() => ( 
		          		<Wall
	          				config={this.props.config}
	          				myDogProfile={this.props.myDogProfile}
	          				setPoints={this.props.setPoints}/>
		          		)}/>
		          	:
		          	<Route exact path='/wall' render={() => ( 
		          			<Home
		          				setIdUser={this.props.setIdUser}
		          				loadDogs={this.props.loadDogs}/> 
		          		)}/>
	          	}
			</div>
		)
	}
}

export default PrivateRouteWall;