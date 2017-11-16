import React, {Component} from 'react'

import '../../styles/wall/History.css'

import Like from './history/Like'
import BalloonCommentaries from './history/BalloonCommentaries'
import Dislike from './history/Dislike'
import FramedPicture from './history/FramedPicture'
import Commentaries from './history/Commentaries'

class History extends Component{

	constructor(){
		super()

		this.state={
			showComments: false,
		}
	}

	handlerShowHideComment = () => {
    	if(this.state.showComments)
      		this.setState({'showComments': false})
    	else
      		this.setState({'showComments': true})
	}

	componentWillReceiveProps(){
		this.setState({'showComments': false})
	}
	

	render(){
		return (
				<div className="marginHistory">
					<div className="container-fluid">
						<div className="row">
							<div className="col-xs-2 col-md-1 col-lg-1 col-xs-offset-0 col-md-offset-1 col-lg-offset-3">
								<Like/>
								<BalloonCommentaries
									handlerShowHideComment = {this.handlerShowHideComment}
								/>
								<Dislike/>
							</div>
							<div className="col-xs-10 col-md-8 col-lg-6 col-xs-offset-0 col-md-offset-1 col-lg-offset-1">
								<FramedPicture 
									nameDog = {this.props.nameDog}
									imgDog = {this.props.imgDog}
								/>
								<Commentaries
									comments = {this.props.comments}
									idHistory = {this.props.idHistory}
									show = {this.state.showComments}
									handlerShowHideComment = {this.handlerShowHideComment}
								/>
							</div>
							<div className="col-xs-offset-0 col-md-offset-1 col-lg-offset-1">
							</div>
						</div>
					</div>
				</div>
		)
	}
}

export default History