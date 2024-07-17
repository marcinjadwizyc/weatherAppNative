# Weather App Native

## Setup

1. Create `.env` file in root directory and add your Open Weather API key as `EXPO_PUBLIC_API_KEY` (see `.env.example` file for reference).
2. Run `yarn` to install dependencies.
3. Run `yarn start` to open the project in dev mode

## Disclaimer

Developed and tested on Android due to lack of access to iOS device / MacBook simulator.

## Todo

-   Revisiting unit tests as they were not written with TDD in mind, coverage should be improved.
-   Displaying more data for forecasts.
-   Improve handling of API requests - chaching etc.
-   Debounce for search calls and in generall look into performance (useCallback, useMemo if necessary).
-   Adding Husky for pre-commit: lint:fix and run tests.
