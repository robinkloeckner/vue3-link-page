export class LocalStorage {
  constructor() {
  }

  getItem(key) {
    return window.localStorage.getItem(key);
  }

  setItem(key, value) {
    window.localStorage.setItem(key, value);
  }
}
