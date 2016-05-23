# Changelog

## 0.5.0

- Implemented basic CQRS event library for Cubitt.

## 0.5.1

- Fixed issues with EventType being number based

## 1.0.0

- Changed all event constructors to not require a command to allow for parsing from JSON.
- Implemented EventFactory for parsing events from JSON.
- Added hierarchical model support.
