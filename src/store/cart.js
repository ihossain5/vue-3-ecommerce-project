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
        totalCartPrice: (state) => {
            return Object.values(state.shops)
                .flatMap((items) => Object.values(items))
                .reduce((total, item) => total + parseInt(item.total_price), 0);
        },

        deliveryCharge: () => {
            return 70;
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
                existingItem.quantity = (parseInt(existingItem.quantity)) + parseInt(item.quantity);
                existingItem.total_price = (
                    parseInt(existingItem.quantity) * parseInt(existingItem.price)
                ).toString();
            } else {

                const itemId = Object.keys(this.shops[shopId]).length + 1;

                this.shops[shopId][item.product_id] = {
                    product_id: item.product_id,
                    shop_id: item.shop_id,
                    name: item.name,
                    image: item.image,
                    price: item.price,
                    quantity: item.quantity,
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

        increaseQuantity(shopId, itemId) {
            console.log(shopId, itemId);
            // Increase quantity logic
            if (this.shops[shopId] && this.shops[shopId][itemId]) {

                const item = this.shops[shopId][itemId];
                item.quantity = (parseInt(item.quantity)) + 1;
                item.total_price = (
                    parseInt(item.quantity) * parseInt(item.price)
                ).toString();

                this.saveToLocalStorage();
            }
        },

        decreaseQuantity(shopId, itemId) {
            // Decrease quantity logic
            if (this.shops[shopId] && this.shops[shopId][itemId]) {
                const item = this.shops[shopId][itemId];
                if (parseInt(item.quantity) > 1) {
                    item.quantity = parseInt(item.quantity) - 1;
                    item.total_price = (
                        parseInt(item.quantity) * parseInt(item.price)
                    ).toString();

                    this.saveToLocalStorage();
                }
            }
        },

        saveToLocalStorage() {
            localStorage.setItem('cart_shops', JSON.stringify(this.shops));
        },
    },
});