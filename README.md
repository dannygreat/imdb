# Imdb UI Tests
  
## Preparing the environment  
  
1. Install [Node.js](https://nodejs.org/en/)
2. Run: `npm install`<br>

## How to run tests

#### Locally - GoBubble UI tests:
```
npx playwright test ./tests/spec/*.spec.ts
or
npx playwright test
```

## spec path directory
`./tests/spec/`

## NOTE
By default running test with headless: `true`<br>
playwright config: `./playwright.config.ts`<br>
