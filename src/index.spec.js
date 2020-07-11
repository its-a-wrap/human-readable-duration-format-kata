import {placeHolder} from './index.js';
import chai from 'chai';

const {expect} = chai;

describe('some test', () => {
    it('SHOULD do something', () => {
        expect(placeHolder()).to.be.eql(0);
    });
});
