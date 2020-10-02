// IMPORT MODULES under test here:
import { getRandomThrow, didUserWin } from '../utils.js';

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

test('should return who won', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('Rock', 'Paper');
    const expected = 'Computer';

    // Finish fixing code below
    // const actual2 = whoWon('rock', 'scissors');
    // const expected2 = 'win';

    // const actual3 = whoWon('rock', 'rock');
    // const expected3 = 'draw';

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
