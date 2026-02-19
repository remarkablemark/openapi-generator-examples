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

Build the package:

```sh
npm run build
```

The package is ready to be published!

## Usage

See [example](example.ts).
