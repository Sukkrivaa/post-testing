import {saveComment} from "actions/index";

describe("SaveComment action creator", ()=>{
    it("has a correct type", ()=>{
        const action = saveComment();

        expect(action.type).toBe("SAVE_COMMENT")
    })
    it("has a right payload", ()=>{
        expect(saveComment("test comment").comment).toBe("test comment");
    });
})//We have a describe block here simply for better organisation