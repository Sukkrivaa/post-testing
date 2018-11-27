import React from "react";
import {connect} from "react-redux";
import * as actions from "actions";


class CommentBox extends React.Component {
    state = {comment: ""}

    handleChange = event => {
        this.setState({
            comment: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();

        this.props.saveComment(this.state.comment);


        this.setState({
            comment: ""
        })
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a Comment</h4>
                    <textarea value={this.state.comment} onChange={this.handleChange}/>
                    <button>Submit this comment</button>
                </form>
                <button data-test={"fetch-button"} onClick={this.props.fetchComments}>Fetch Comments</button>
            </div>
        )
    }
}

export default connect(null, actions/*Short cut for wiring up all action creators */)(CommentBox);