
import React, {Component} from 'react'

import '../../styles/mydogs/DogProfile.css'

import DogGeneral from './dogprofile/DogGeneral'
import DogDetail from './dogprofile/DogDetail'

class DogProfile extends Component{

	render(){
		return(
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-6">
						<DogGeneral
						dog={this.props.dog}
						deselectADog= {this.props.deselectADog}/>
					</div>
					<div className="col-md-5 col-md-offset-1">
						<DogDetail 
						dog={this.props.dog}/>
					</div>
				</div>
			</div>
		)
	}
}

export default DogProfile