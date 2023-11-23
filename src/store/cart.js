// src/store.js
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    shops: JSON.parse(localStorage.getItem('cart_shops')) || {},
  }),
  getters: {
    totalItems() {
      return Object.values(this.shops)
        .reduce((total, shop) => total + Object.values(shop).length, 0);
    },
  },
  actions: {
    addToCart(shopId, item) {
      if (!this.shops[shopId]) {
        this.shops[shopId] = {};
      }

      const existingItem = Object.values(this.shops[shopId]).find(
        (cartItem) => cartItem.product_id === item.product_id
      );

      if (existingItem) {
        existingItem.quantity = (parseInt(existingItem.quantity) || 1) + 1;
        existingItem.total_price = (
          parseInt(existingItem.quantity) * parseInt(existingItem.price)
        ).toString();
      } else {

        const itemId = Object.keys(this.shops[shopId]).length + 1;

        this.shops[shopId][itemId] = {
          product_id: item.product_id,
          name: item.name,
          image: item.image,
          price: item.price,
          quantity: "1", 
          total_price: item.price, 
          size: item.size || null,
          color: item.color || null,
        };
      }

      this.saveToLocalStorage();
    },

    getAllItems() {
        return Object.values(this.shops).flatMap(shop => Object.values(shop));
      },
    removeFromCart(shopId, item) {
        const itemId = Object.keys(this.shops[shopId]).find(
            (key) => this.shops[shopId][key] === item
          );
    
          if (itemId) {
            delete this.shops[shopId][itemId];
            this.saveToLocalStorage();
          }
    },
    clearCart() {
      this.shops = {};
      this.saveToLocalStorage();
    },
    saveToLocalStorage() {
        localStorage.setItem('cart_shops', JSON.stringify(this.shops));
      },
  },
});
