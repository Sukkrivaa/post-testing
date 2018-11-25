import React from "react";
// import ReactDOM from "react-dom";
import {shallow} from "enzyme"
import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
//The function of App.js is to render the comment box and comment list - always write something like this on top of your test files

let wrapper; //We use this so that the it statements have access to this variable that would have otherwise been out of scope
//We use let instead of var or const because we intentionally want to let it jump values
//let is used in this case as it is configured for such a use

beforeEach(()=>{
    wrapper = shallow(<App />);
});

it("renders the commentBox", ()=> {
    // const div = document.createElement("div"); //Not a real div - a fake div inside of JSDOM that mimicks the real div
    // ReactDOM.render(<App />, div);


    // expect(div.innerHTML).toContain("Comment Box"); //not good code
    // //Because the String "Comment Box" is defined in our comment box component but we are testing it in our app.test.js
    // //This is bad code because we should not be making assertions that pertain to the inner workings (in this case, what is being shown by the comment box component) any other components in this component
    // //If we change the text in the commentBox component this will cause this test file to break even though it should still pass
    // //When making tests ALWAYS ask yourself, if I change any other files in valid ways (eg classes, methods etc etc), will this test break?
    // //should just know that it exists

    // //Looks inside the div and sees if the comment Box is in there
    // ReactDOM.unmountComponentAtNode(div) //Cleanup - leaving it here will not change our tests - however, it will run faster because we don't have rouge div elements taking up time when the App is being rendered for each new test
    // //Always clean something up when you render something

    //This is the better code
    
    expect(wrapper.find(CommentBox).length).toEqual(1);
})

it("renders the commentList", () => {
    expect(wrapper.find(CommentList).length).toEqual(1);
});