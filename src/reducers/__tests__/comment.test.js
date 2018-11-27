import commentsReducer from "reducers/comment"

it("handles actions of type SAVE_COMMENT", ()=>{
    var action = {
        type: "SAVE_COMMENT",
        comment: "test comment"
    }

    expect(commentsReducer([], action)).toEqual(["test comment"]);

})