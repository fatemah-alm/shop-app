import { action, makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";

class CartStore {
  items = [
    {
      product: {
        _id: "6182a8b31bd7fa38942fdf23",
        name: "Cookie",
        price: 5,
        image:
          "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg",
      },
      quantity: 5,
    },
    {
      product: {
        _id: "6182a8b31bd7fa46652fdf88",
        name: "Another cookie",
        price: 15,
        image:
          "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg",
      },
      quantity: 3,
    },
  ];

  constructor() {
    makeAutoObservable(this);
    // this will turn our class into a mobx store and all components can observe the changes that happen in the store
  }

  addItemToCart = (newItem) => {
    // {product: {
    //       name:..,
    //       image:..,
    //   }, quantity: 5}

    const foundItem = this.items.find(
      (item) => item.product.name === newItem.product.name
    );
    if (foundItem) {
      foundItem.quantity = foundItem.quantity + 1;
    } else {
      this.items.push(newItem);
    }
    this.storeData();
  };

  totalQuantity = () => {
    let total = 0;
    this.items.forEach((item) => (total += item.quantity));
    console.log(total);
    return total;
  };

  removeItemFromCart = (productId) => {
    this.items = this.items.filter((item) => item.product._id !== productId);
    this.storeData();
  };

  checkout = () => {
    this.items = [];
    this.storeData();
    alert("Thankyou for shopping!");
  };
  storeData = async () => {
    try {
      const jsonValue = JSON.stringify(this.items);
      await AsyncStorage.setItem("MyCart", jsonValue);
    } catch (e) {
      // saving error
    }
  };

  getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("MyCart");
      jsonValue != null
        ? (this.items = JSON.parse(jsonValue))
        : (this.items = []);
    } catch (e) {
      // error reading value
    }
  };
}

const cartStore = new CartStore();
// It will only call this function when the app first starts
cartStore.getData();

export default cartStore;
