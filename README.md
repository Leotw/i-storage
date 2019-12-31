# See [rollup-starter-lib](https://github.com/rollup/rollup-starter-lib) and [rollup-starter-app](https://github.com/rollup/rollup-starter-app) for a simpler, up-to-date example of how to create a library or application with Rollup

---

# i-storage

A localStorage package [ES6 support]

## Usage

Initialize
```js
import iStorage from 'i-storage';
const storage = new iStorage();
```

Set handler
```js
storage.setValue('key', 'Hi, book');
storage.setValue('key', 'Hi, book', Date.now()); // use expire
storage.setValue('key', 'Hi, book', (new Date('1995-12-17T03:24:00')).getTime()); // use expire
```

Get hanler
```js
storage.getValue('key');
```
