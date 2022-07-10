export enum storageTypes {
  localStorage = "localStorage",
  sessionStorage = "sessionStorage",
}

export default class StorageMethod {
  static storageTypes = {
    localStorage: window.localStorage,
    sessionStorage: window.sessionStorage,
  };

  static getStorageItem(key: string) {
    return localStorage.getItem(key) || sessionStorage.getItem(key);
  }

  static setInStorage(key: string, value: string, type: storageTypes) {
    this.storageTypes[type].setItem(key, value);
  }

  static clearStorage() {
    localStorage.clear();
    sessionStorage.clear();
  }

  static removeStorageItem(key: string) {
    localStorage.removeItem(key);
    sessionStorage.removeItem(key);
  }
}
