// IMPORT MODULES under test here:
import { getRandomThrow } from '../utils.js';

const test = QUnit.test;

test('should randomly return rock, paper or scissors', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getRandomThrow();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(typeof actual, 'string');
});
