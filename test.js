import fs from 'fs';
import test from 'ava';

test('strips debugging', t => {
	t.is(fs.readFileSync('tmp/fixture.js', 'utf8'), 'function test(){}\n');
});
