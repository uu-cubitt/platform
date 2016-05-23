# Cubitt Events

Typescript CQRS event library for the Cubitt framework.

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/uu-cubitt/events/master/LICENSE)
[![npm version](https://badge.fury.io/js/cubitt-events.svg)](https://badge.fury.io/js/cubitt-events)
[![Build Status](https://travis-ci.org/uu-cubitt/events.svg?branch=master)](https://travis-ci.org/uu-cubitt/events)
[![Test Coverage](https://codeclimate.com/github/uu-cubitt/events/badges/coverage.svg)](https://codeclimate.com/github/uu-cubitt/events/coverage)

## About

This library contains the events raised by the command handler after editing the Cubitt Graph through commands.
Events exist for all basic graph operations, such as addition and removal of nodes, edges, models and connectors.
For more information about the CQRS implementation of the Cubitt framework, please take a look [here](https://uu-cubitt.github.io/).

## Features

* 16 graph operation events for a human readable event stream.

## Usage

Install the package and then use it in your code.

```bash
npm install cubitt-events
```

```typescript
import * as Events from "cubitt-events";
```

## Documentation

* [Code documentation](https://uu-cubitt.github.io/events/)
* [Design documentation](https://uu-cubitt.github.io/events/design/)

## For developers

To get started:

```bash
npm run dev
```

To run the unit tests:

```bash
npm run test
```

To generate a test coverage report:

```bash
npm run test-coverage
```

To generate documentation:

```bash
npm run typedoc
```

## License

[MIT](LICENSE)

## Changelog

[Changelog](changelog.md)
