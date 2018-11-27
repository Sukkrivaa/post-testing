import React from "react";
import {mount} from "enzyme";
import Root from "Root";
import CommentList from "components/CommentList"

let wrapper;
beforeEach(()=>{
    const initialState = {
        comments: ["Comment 1", "Comment 2", "Comment 3"]
    }
    wrapper = mount(<Root initialState={initialState}><CommentList /></Root>)
})

it("should render one li component for every comment", ()=>{
    //IN TDD YOU HAVE TO MAKE SURE THE TEST FAILS FIRST TO ENSURE YOU DON'T HAVE ANY ERRONIOUSLY PASSING TESTS
    expect(wrapper.find("li").length).toBe(3);
});

//enzyme's .text method returns the text inside the html tags not the html tags themselves
//To be safe, return the cheerio wrapper instead - use .render.text - no idea why just use this

it("should render the correct text inside each li", ()=>{
    expect(wrapper.render().text()).toContain("Comment 1");
    expect(wrapper.render().text()).toContain("Comment 2");
    expect(wrapper.render().text()).toContain("Comment 3");
})
