export default class Store {
  constructor() {
    this.__ID__ = 'identify';
    const initStateString = localStorage.getItem(this.__ID__);
    try {
      this.store = initStateString ? JSON.parse(initStateString) : null;
    } catch (err) {
      console.error('constructor error:', err);
    }
    if(!this.store) {
      this.store = {
        size: 0,
        load: {}
      };
      localStorage.setItem(this.__ID__, this.store);
    }
  }

  getValue(key) {
    let result;
    let store = this.store;
    let loadItem = store.load[key];
    if(!loadItem) return null;
    if(loadItem) {
      if(loadItem.expire) {
        if(Date.now() > loadItem.expire) {
          delete store.load[key];
          console.log(`${key} is expired`);
          return null;
        } else {
          result = loadItem.value;
        }
      } else {
        result = loadItem.value;
      }
    }
    return result;
  }

  setValue(key, value, expire = null) {
    let store;
    try {
      this.store.load[key] = {
        expire,
        value
      };
    } catch (err) {
      console.error('set error', err);
    }
    try {
      store = JSON.stringify(this.store);
    } catch (err) {
      console.error('happened JSON.stringify error in set handler', err);
    }
    localStorage.setItem(this.__ID__, store);
  }
}
