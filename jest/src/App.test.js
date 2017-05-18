/*eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createValidator } from '../src/utils/validators'


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render( < App / > , div);
});

describe("prova", function() {
    it("creates validators", function() {
        createValidator({})();
    });
})