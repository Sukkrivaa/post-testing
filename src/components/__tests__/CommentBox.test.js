import React from "react";
import {mount} from "enzyme";
import CommentBox from "components/CommentBox";
import Root from "Root";
//Could use the shallow render here - just using the main render for practice
let wrapper; //JUST SOMETHING THAT LETS US ACCESS THE NODES (THE DIFFERENT ELEMENTS) TO FIND THEM OR INTERACT WITH THEM, IF POSSIBLE
beforeEach(()=>{
    wrapper = mount(
        <Root>
            <CommentBox />
        </Root>
    )
    ;
}) //reruns for all tests - even those in describe blocks with their own beforeEach - they are just stacked upon each other

it("shows a text area and a 2 buttons (save comment and fetch comments)", ()=> {
    expect(wrapper.find("textarea").length).toBe(1); //The find method can seatch for both components and plain html
    expect(wrapper.find("button").length).toBe(2);
});

//Describe function used for common setup and teardown of tests

describe("the textarea behaviour", ()=>{

    beforeEach(()=>{
        wrapper.find("textarea").simulate("change", { //the method without the on-prefix is the name of the event
            target: {
                value: "test comment" //We can give a mock event object like this for every event that we simulate - 
            }
        })
        wrapper.update() //The react updating upon a state change happens asynchronously so to quicken this up for the purpose of the test we have to use this
    })

    it("Users are able to type into the text area", ()=>{
        
        //Find out how to test redux in the other course - for the sending of actions
    
        expect(wrapper.find("textarea").prop("value")).toBe("test comment");
    });
    it("clears itself when submitted", ()=>{
        expect(wrapper.find("textarea").prop("value")).toBe("test comment");
        wrapper.find("form").simulate("submit")
        wrapper.update();
        expect(wrapper.find("textarea").prop("value")).toBe("");
    
    });
})


afterEach(()=>{
    wrapper.unmount();
}) //reruns for all tests - even those in describe blocks with their own afterEach - they are just stacked upon each other
