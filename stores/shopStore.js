import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class ShopStore {
  shops = [];
  constructor() {
    makeAutoObservable(this);
    // this will turn our class into a mobx store and all components can observe the changes that happen in the store
  }

  fetchShops = async () => {
    try {
      const response = await instance.get("/shops");
      this.shops = response.data;
    } catch (error) {
      console.log("ShopStore -> fetchShops -> error", error);
    }
  };
}

const shopStore = new ShopStore();
shopStore.fetchShops();
// It will only call this function when the app first starts

export default shopStore;
