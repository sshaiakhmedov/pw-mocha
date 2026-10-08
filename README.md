# Playwright with Mocha
- PW - is the browersr automation tool n\
- Mocha - test framework setup: describe, hooks, reporting
Chai - assertion library

PW has its own `expect` asseritons but only when using its builtin test runner.

1.  before, after, beforeEach are Mocha globals that only exist when Mocha loads test files. That is why `/tests/setup.spec` should be as spec.js even though there are no tests.
This is the standard Mocha pattern for setup files. The .spec.js extension is what tells Mocha to load it and give it access to before()/after() hooks.

### How to they work together!

```
// Mocha provides the structure
describe('Login Tests', () => {
  
  // Playwright does the browser work
  it('should login successfully', async () => {
    await page.goto('https://example.com');//  Playwright
    await page.fill('#username', 'test');     // Playwright
    await page.click('#submit');              // Playwright
    
    // Mocha runs this test and reports if it passes
  });
});
```
## Ho to run tests in HEADLESS mode
```
npm run test
```

## Run in HEADED mode
```
npm run test:headed
```

For other scripts see `package.json`
