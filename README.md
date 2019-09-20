# Tests for /posts & /comments endpoints

## TechStack

* Mocha (as testing framework)
* Chai (for assertions)
* Supertest (for requests)
* tv4 (for schema validation)

## How to run tests

```bash
git clone git@github.com:Stackustack/jsonplaceholder.git
npm install
npm test
```

## How stuff is organized

* Tests are stored in folder /test
* JSON schemas are stored inside /test/json_schemas
* All stuff (except changes in Readme) is stored inside [this](https://github.com/Stackustack/jsonplaceholder/commit/50ee1aea64decc600ebc002d5028cee0af50badd) commit.
* fyi /test-old is former /test folder (with test created by JsonPlaceholder team)