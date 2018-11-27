import React from "react";
import {mount} from "enzyme";
import Root from "Root";
import App from "components/App"
import moxios from "moxios";
import { WSAVERNOTSUPPORTED } from "constants";

beforeEach(()=>{
    moxios.install() //basically intercepts any moxios request and gives it fake data - we need to set it up this way before every test
    moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
        status: 200, //need this here when stubbing requests
        response: [{name: "fetched 1"}, {name: "fetched 2"}] //This is the standard reesponse property that is compulsory to define as well
    })
})

it("should render some LIs when the fetch button is clicked", (done)=>{
    //The done argument is basically telling jest that the test is only complete when the done function is invokes
    //Else, jest won't bother with asynchronous requests or timeouts
    const wrapper = mount(<Root><App /></Root>)

    wrapper.find("[data-test='fetch-button']").simulate("click");
    //Request happens asynchronously here so it takes some time - number of li may not be 2 immediately so we need to fix this
    
    
    // setTimeout(()=>{
    // wrapper.update()
    // expect(wrapper.find("li").length).toBe(2);
    // done();
    // wrapper.unmount(); //cos wrapper is not globally defined we hae to unmount here instead of afterEach
    // }, 100)
    // //This is a bit imprecise - the wait could get longer or shorter - to fix this for a precise time it takes a request to be mocked - use moxios,wait in a very similar fashion

    moxios.wait(()=>{
        wrapper.update()
        expect(wrapper.find("li").length).toBe(2);
        done();
        wrapper.unmount(); //cos wrapper is not globally defined we hae to unmount here instead of afterEach
        })
});

afterEach(()=>{
    moxios.uninstall() //This is so that any other requests in other tests are not stubbed. While other tests may need stubbing, they may want to send different responses.
    //This means that tests that require different requests need to be put in different describe bloxks with their own aftereach and before each
    //Here, because we have just one test, we dont use the describe block
})

//Integration tests are usually used when we have asynchronous requests