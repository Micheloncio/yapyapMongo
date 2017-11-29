import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import Home from '../home/Home'
import DailyContest from '../dailycontest/DailyContest'
import Xtorage from '../../Xtorage'


class PrivateRouteDailyContest extends Component{

	render(){
		return (
			<div>
				{Xtorage.session.getObject('token') 
					?
		          	<Route exact path='/daily-contest' render={() => ( 
		          		<DailyContest
	          				config={this.props.config}
	          				myDogProfile={this.props.config.dogSelected}
	          				setPoints={this.props.setPoints}/>
		          		)}/>
		          	:
		          	<Route exact path='/daily-contest' component={Home}/>
	          	}
			</div>
		)
	}
}

export default PrivateRouteDailyContest;