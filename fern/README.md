# Fern

[Documentation](https://github.com/fern-api/fern)

## Prerequisites

[Node 18+](https://nodejs.org/):

```sh
brew install node
```

[Docker](https://www.docker.com/):

```sh
brew install docker
```

## Scripts

Change to this directory before running the scripts:

```sh
cd fern
```

### Install

Install the dependencies:

```sh
npm i
```

### Init

Initialize Fern with your OpenAPI spec:

```sh
npm run init
```

### Generate

Generate the TypeScript SDK with Docker:

```sh
npm run generate
```

### Build

Install and build the package:

```sh
npm --prefix sdks/typescript i
npm --prefix sdks/typescript run build
```

The package is ready to be published!
