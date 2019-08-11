# Farmdrop Code Test (JavaScript)

Arjan Jassal's submission for https://github.com/FarmDrop/farmdrop-code-test-js

## Demo

View the live demo here: [Demo](https://farmdrop.arjanjassal.me/)

## Setup

### Clone repo

Clone this git repo.

```
git clone https://github.com/ArjanJ/farmdrop-code-test-js.git
```

### Install dependencies

```
npm install
```

### View in browser

http://localhost:3000/ should open automatically.

### Run tests

```
npm run test
```

To see a coverage report run this command. Currently at ~96% coverage.

```
npm run coverage
```

## Overview

### Stack

- React
- Redux
- Styled Components
- GraphQL
- Jest + React Testing Library

You will find everything in `src/modules`. I've organized the folders by feature, e.g. Product and Basket are their own isolated modules that have their corresponding actions and reducers grouped together.

### Misc

One requirement I wasn't entirely clear on was updating the `price` when selecting a `variant` in the dropdown. Each `variant` has a `pricePerUnit` but no corresponding "amount" of the product. The `displayName` contains the amount in the string e.g. `BONE IN (2KG)` so I parsed that to extract the "amount" of the product and used that value to calculate the new price based on which `variant` was selected.
