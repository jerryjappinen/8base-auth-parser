# 8base/auth parser error

Minumum repro for this stack trace:

Uncaught (in promise) TypeError: (0 , import_defineToJSON.default) is not a function

```
Uncaught (in promise) TypeError: (0 , import_defineToJSON.default) is not a function
    at node_modules/graphql/language/parser.mjs (@8base_auth.js:17154:37)
    at __init (chunk-6DBBYCL5.js:16:56)
    at node_modules/graphql-prettier/lib/index.js (@8base_auth.js:17728:20)
    at __require2 (chunk-6DBBYCL5.js:19:50)
    at node_modules/@8base/utils/dist/queryGenerators/queryGenerators.js (@8base_auth.js:18088:46)
    at __require2 (chunk-6DBBYCL5.js:19:50)
    at node_modules/@8base/utils/dist/queryGenerators/index.js (@8base_auth.js:18370:18)
    at __require2 (chunk-6DBBYCL5.js:19:50)
    at node_modules/@8base/utils/dist/index.js (@8base_auth.js:18517:18)
    at __require2 (chunk-6DBBYCL5.js:19:50)
```

Tested on Node 16.14.0 (latest LTS) and 14.19.0.

# Original readme

We recommend to look at the [documentation](https://v3.nuxtjs.org).
## Setup

Make sure to install the dependencies

```bash
yarn install
```

## Development

Start the development server on http://localhost:3000

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn build
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment).