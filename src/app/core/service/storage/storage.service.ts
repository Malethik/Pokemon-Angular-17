import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService<T> {
  storeName = 'tasks';

  constructor(@Inject('STORE_NAME') storeName: string) {
    this.storeName = storeName;
  }

  getStorage(): T[] {
    return JSON.parse(localStorage.getItem(this.storeName) || '[]');
  }

  setStorage(data: T[]) {
    localStorage.setItem(this.storeName, JSON.stringify(data));
  }

  removeStorage() {
    localStorage.removeItem(this.storeName);
  }
}
