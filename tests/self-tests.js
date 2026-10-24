'use strict';
/**
 * Skin-Case Tracker — runs the app's own in-page self-test suite headlessly.
 * Loads the real index.html in happy-dom (plus web-kit.js when present) and
 * calls the app's runSelfTests().
 *   node tests/self-tests.js [path-to-index.html]
 */
const fs = require('fs');
const path = require('path');
const { Window } = require('happy-dom');

const root = path.join(__dirname, '..');
const file = process.argv[2] || path.join(root, 'index.html');
const html = fs.readFileSync(file, 'utf8');
const wkPath = path.join(path.dirname(file), 'web-kit.js');
const wk = fs.existsSync(wkPath) ? fs.readFileSync(wkPath, 'utf8') : '';
const xkPath = path.join(path.dirname(file), 'export-kit.js');
const xk = fs.existsSync(xkPath) ? fs.readFileSync(xkPath, 'utf8') : '';

const inline = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
const htmlNoScripts = html.replace(/<script[\s\S]*?<\/script>/g, '');

const w = new Window({ url: 'https://local.test/' });
w.document.write(htmlNoScripts);
if (wk) w.eval(wk);
if (xk) w.eval(xk);
for (const s of inline) w.eval(s);

let out;
try { out = w.eval('runSelfTests()'); }
catch (e) { console.error('could not run the in-page suite:', e && e.message); process.exit(2); }

const failed = out.filter(r => r[0] !== 'pass');
console.log('\n==== SELF-TESTS ====');
out.forEach(([st, n, m]) => console.log(`${st === 'pass' ? 'PASS' : 'FAIL'}  ${n}${m ? '  [' + m + ']' : ''}`));
console.log(`\n${out.length - failed.length}/${out.length} passed`);
process.exit(failed.length ? 1 : 0);
