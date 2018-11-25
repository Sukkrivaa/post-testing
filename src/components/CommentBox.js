import React from "react";

class CommentBox extends React.Component {
    state = {comment: ""}

    handleChange = event => {
        this.setState({
            comment: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();

        //TODO - redux action to save the comment on to the store

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
            </div>
        )
    }
}

export default CommentBox;