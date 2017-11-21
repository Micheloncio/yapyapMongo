import React, {Component} from 'react'

import '../../styles/mydogs/MyDogs.css'

import DogProfile from './DogProfile'
import NavBarMyDog from './NavBarMyDog/NavBarMyDog'
import NoDogsYet from './NoDogsYet'
import DogList from './DogList/DogList'

import DogsApi from '../../services/DogsApi'

class MyDogs extends Component{

	constructor(){
		super()

		this.state = {
			anyDog: true,
			dogs:[]
		}
	}

	setAnyDog = (anyDog) => {
		this.setState({anyDog})
	}
	setDogs = (dogs) => {
		this.setState({dogs})
	}

	loadDogs = (idUser) =>{
		DogsApi.listDogsByUser(idUser)
			.then(dogs =>{
				this.setDogs(dogs || [])
			})
			.catch()
	}
	deleteDog = (idDog) =>{
		const filteredDogs = this.state.dogs.filter(dog =>{
									return dog._id !==	idDog})
		this.setDogs(filteredDogs)
	}

	setMainDog = (dog,itsSelect) =>{
		this.props.setDogSelected(dog)
		this.props.setAnyDogSelected(itsSelect)
	}

	selectADog = (idDog) =>{
		const dogSelected = this.state.dogs.filter(dog =>{return dog._id === idDog})
		this.setMainDog(dogSelected[0],true)
	}
	deselectADog  = () =>{
		this.setMainDog({},false)
	}

	componentDidMount(){
		this.loadDogs(this.props.idUser)
	}

	render(){
		return(
			<div className="backgroundMyDogs">
				<div className="container-fluid">
					<div className="row">
						<NavBarMyDog 
							idUser={this.props.idUser}
							loadDogs={this.loadDogs}/>
					</div>		
					{this.props.anyDogSelected
						? 
						<DogProfile 
							dog={this.props.dogSelected}
							deselectADog= {this.deselectADog}/>
						:
						<div className="row">
							{this.state.dogs.length 
								? 
								<DogList
									dogs={this.state.dogs}
									selectADog={this.selectADog}
									deleteDog={this.deleteDog}/> 
								: 
								<NoDogsYet/>
							}
						</div>
					}
				</div>
			</div>
		)
	}
}

export default MyDogs