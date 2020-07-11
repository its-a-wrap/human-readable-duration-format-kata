import {formatDuration} from './index.js';
import chai from 'chai';

const {expect} = chai;

describe('GIVEN formatDuration function', () => {
    describe(`AND the input is '1'`, () => {
        it('SHOULD return `1 second`', () => {
            expect(formatDuration(1)).to.be.eql('1 second');
        });
    })

    describe(`AND the input is '62'`, () => {
        it('SHOULD return `1 minute and 2 seconds`', () => {
            expect(formatDuration(62)).to.be.eql('1 minute and 2 seconds');
        });
    });

    describe(`AND the input is '120'`, () => {
        it('SHOULD return `2 minutes`', () => {
            expect(formatDuration(120)).to.be.eql('2 minutes');
        });
    });

    describe(`AND the input is '3600'`, () => {
        it('SHOULD return `1 hour', () => {
            expect(formatDuration(3600)).to.be.eql('1 hour');
        });
    });

    describe(`AND the input is '3662'`, () => {
        it('SHOULD return `1 hour, 1 minute and 2 seconds', () => {
            expect(formatDuration(3662)).to.be.eql('1 hour, 1 minute and 2 seconds');
        });
    });
});
