import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
const labs = JSON.parse(await readFile(new URL('../exercises.json', import.meta.url), 'utf8'));
assert.equal(labs.length, 6);
assert.equal(new Set(labs.map(lab => lab.id)).size, 6);
for (const lab of labs) {
  test(lab.id + ': assertions and recorded output', () => {
    assert.match(lab.script, /^exercises\/[a-z]+\.mjs$/);
    const path = fileURLToPath(new URL('../' + lab.script, import.meta.url));
    const stdout = execFileSync(process.execPath, [path], { encoding: 'utf8', timeout: 5000, maxBuffer: 65536 });
    assert.equal(stdout.trim(), lab.expectedOutput.trim());
  });
}
