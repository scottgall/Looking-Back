import React from "react";
import "./ProfilePhotos.css"
import friends from "./friends.json"
import CommentBox from "../../components/CommentBox"


class ProfilePhotos extends React.Component {
    state = {
        friends: friends
      }

        // let friends = this.state.friends;
    handleClick() {
        alert('hello')
        }
          
    render(){
        return(
            <div>
                
            <div className="container-fluid bottomWrapper">
                <div className="container">
                    <div className="border pictureSegment ">
                        {this.state.friends.map(friend => (
                            <img className="picturePortfolio" onClick={this.handleClick} src={friend.image}/>
                        ))}
            
    
                    </div>
    
                    <div className="postSegment ">
                      <CommentBox/>
                    </div>
                </div>
    
    
            </div>
    
    
        </div>
    

        )
    }
}

export default ProfilePhotos;
