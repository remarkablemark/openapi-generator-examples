# Hey API

[Documentation](https://github.com/hey-api/openapi-ts)

## Prerequisites

[Node 20+](https://nodejs.org/):

```sh
brew install node
```

## Scripts

Change to this directory before running the scripts:

```sh
cd heyapi
```

### Install

Install the dependencies:

```sh
npm i
```

### Generate

Generate the TypeScript SDK:

```sh
npm run generate
```

Add `package.json` to SDK:

```sh
cat <<EOF > sdk/package.json
{
  "name": "@your-org/sdk",
  "version": "0.1.0",
  "type": "module",
  "main": "dist/index.js",
  "files": [
    "dist"
  ]
}
EOF
```

### Build

Build the package:

```sh
npm run build
```

The package is ready to be published!

## Usage

See [example](example.ts).
