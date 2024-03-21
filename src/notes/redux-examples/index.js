import React from "react";
import todos from "./reducers/todos-reducer";
import {Provider} from "react-redux";
import {configureStore} from '@reduxjs/toolkit';
import Todos from "./todos-component";

const store = configureStore({ reducer: {todos} });

const ReduxExamples = () => {
    return (
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <Todos/>
            </div>
        </Provider>
    );
};
export default ReduxExamples;