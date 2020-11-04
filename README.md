# Graphable Node.js Library

The Graphable Node library provides convenient access to the Graphable API from
client applications written in JavaScript.

## Documentation

See the [`graphable` API docs](https://docs.graphable.io/api?lang=node) for Node.js.

## Installation

Install the package with:

```sh
npm install graphable
# or
yarn add graphable
```

## Usage

Graphable functions require a config object containing information about the client app and current version.
Config objects are available in the [Graphable Dashboard](https://dashboard.graphable.io/).

<!-- prettier-ignore -->
```js
const config = {
    api_key: 'test_key-...',
    app_id: 'app-...',
    project_id: 'proj-...',
};
const graphable = require('graphable')(config);

graphable.logScreenChange({
  screen_id: 'home',
})
  .then(event => console.log(event.created_at))
  .catch(error => console.error(error));
```

Or using ES modules and `async`/`await`:

```js
import Graphable from 'graphable';
const config = {
    api_key: 'test_key-...',
    app_id: 'app-...',
    project_id: 'proj-...',
};
const graphable = new Graphable(config);

(async () => {
  try {
      const event = await graphable.logScreenChange({
        screen_id: 'home',
      });
    
      console.log(event.created_at);
  }
  catch (error) {
      console.error(error);
  }
})();
```

### Usage with TypeScript

Graphable maintains types for the latest [API version][api-versions].

Import Graphable as a default import (not `* as Graphable`, unlike the DefinitelyTyped version)
and instantiate it as `new Graphable()`.

```ts
import Graphable from 'graphable';
const config = {
    api_key: 'test_key-...',
    app_id: 'app-...',
    project_id: 'proj-...'
};
const graphable = new Graphable(config);

const createScreenChangeEvent = async () => {
  const params: Graphable.ScreenChangeEventCreateParams = {
    screen_id: 'home',
  };

  const event: Graphable.ScreenChangeEvent = await graphable.logScreenChange(params);

  console.log(event.created_at);
};
createScreenChangeEvent();
```


[api-versions]: https://docs.graphable.io/api/versioning