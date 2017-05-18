/* eslint-env mocha */

import { expect } from 'chai';
import sinon from 'sinon';

describe('Testing Framework', function() {
    it('should support chai', function() {
        expect(expect).to.be.a('function', "CHAI NON FUNZIONANTE");
    });
    it('should support sinon', function() {
        expect(sinon).to.be.a('object', "SINON NON FUNZIONANTE");
        expect(sinon.spy).to.be.a('function', "SINON SPY NON FUNZIONANTE");
    });
});