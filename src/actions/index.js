import axios from "axios";

export const saveComment = (comment) => {
    return {
        type: "SAVE_COMMENT",
        comment
    }
}

export const fetchComments = () => {
    return (dispatch)=>{
        axios.get("http://jsonplaceholder.typicode.com/comments").then((res)=>{
        dispatch({
            type: "FETCH_COMMENTS",
            commentsPayload: res.data
            })
        })
    }
} //We use an integration test here because we are playing with the commentBox and the commentList - could have used unit tests but it is also useful have integration tests as well on top of unit tests