# Kiota

[Documentation](https://github.com/microsoft/kiota)

## Prerequisites

[Node 18+](https://nodejs.org/):

```sh
brew install node
```

## Scripts

Change to this directory before running the scripts:

```sh
cd kiota
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
  "main": "dist/apiClient.js",
  "files": [
    "dist"
  ],
  "dependencies": {
    "@microsoft/kiota-bundle": "1.0.0-preview.99"
  }
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
