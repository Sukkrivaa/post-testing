import React from "react";
import ReactDOM from "react-dom";
import App from "components/App.js";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducers from "reducers"; //By default we will get the index.js file

ReactDOM.render(
    <Provider store={createStore(reducers, {})}>
        <App />
    </Provider>
, document.querySelector("#root"));