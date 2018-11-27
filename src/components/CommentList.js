import React from "react";
import {connect} from "react-redux";

class CommentList extends React.Component{
    renderComments(){
        return this.props.comments.map((comment) => { //make sure you are returning this - common mistake
            return (
                <li key={comment}>
                    {comment}
                </li>
            )
        })
    }

    render(){
        return (
            <div>
                <ul>
                    {this.renderComments()}
                </ul>
            </div>
        )
    }
}

export default connect(state => {return {comments: state.comments}})(CommentList);