const assert = require('assert');

function test(actual: number, expected: number): void {
    assert.equal(actual, expected);
    console.log(`\u001B[32m✓\u001B[39m ${expected}`);
}

const now: number = Date.now()

test(now, now)