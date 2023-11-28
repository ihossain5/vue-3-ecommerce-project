<script>
import { computed, ref } from 'vue';
import { useCartStore } from '../store/cart'
export default {
 setup(){
    const cartStore = useCartStore();
    const cartItems = computed(() => cartStore.getAllItems());
    const subtotal = computed(() => cartStore.totalCartPrice);
    const delivery_charge =cartStore.deliveryCharge;
    const total =  computed(() =>  delivery_charge + subtotal.value);

    const clearCart = () => {
      cartStore.clearCart();
    };

    const removeItem = (item) => {
      cartStore.removeFromCart(item.shop_id, item);
    };

    const increaseQuantity = (shop_id, item_id) => {
        
      cartStore.increaseQuantity(shop_id, item_id);
    };    
    
    const decreaseQuantity = (shop_id, item_id) => {
        cartStore.decreaseQuantity(shop_id, item_id);
    };

    return {
      cartItems, clearCart ,removeItem, decreaseQuantity, increaseQuantity, subtotal, delivery_charge, total
    };
}   
}
</script>

<template>
  
    <!-- breadcrumb -->
    <section class="breadcrum_sc">
        <div class="container-fluid container-xxxl">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="/" class="fs_16 lh_23 fc_red">Home</a>
                    </li>
                    <li class="breadcrumb-item fs_16 lh_23 fc_black active" aria-current="page">cart</li>
                </ol>
            </nav>
        </div>
    </section>

    <!-- cart -->
    <section class="cart_page spb">
        <div class="container-fluid container-xxxl">
            <h1 class="sc_title_1">Shopping Cart</h1>
            <div class="overflow-hidden cart_wrapper br_5 bxy_gl">
                <div class="p-4 cart_header bb_gl d-flex justify-content-between align-items-center">
                    <div class="flex_item d-flex justify-content-between align-items-center gap-2 gap-lg-4">
                        <!-- <input type="checkbox" class="input_check input_head">
                        <span class="fs_17 lh_25 fc_gd">Select All (4 Items)</span> -->
                    </div>
                    <div class="flex_item">
                        <button class="d-flex align-items-center gap-2 svg_20" @click="clearCart">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21"
                                fill="none">
                                <path d="M2.5 5.5H4.16667H17.5" stroke="#666666" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M15.8327 5.5013V17.168C15.8327 17.61 15.6571 18.0339 15.3445 18.3465C15.032 18.659 14.608 18.8346 14.166 18.8346H5.83268C5.39065 18.8346 4.96673 18.659 4.65417 18.3465C4.34161 18.0339 4.16602 17.61 4.16602 17.168V5.5013M6.66602 5.5013V3.83464C6.66602 3.39261 6.84161 2.96868 7.15417 2.65612C7.46673 2.34356 7.89065 2.16797 8.33268 2.16797H11.666C12.108 2.16797 12.532 2.34356 12.8445 2.65612C13.1571 2.96868 13.3327 3.39261 13.3327 3.83464V5.5013"
                                    stroke="#666666" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M8.33398 9.66797V14.668" stroke="#666666" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M11.666 9.66797V14.668" stroke="#666666" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span class="fs_17 lh_22 fc_gd">Remove</span>
                        </button>
                    </div>
                </div>
                <table class="table cart_table">
                    <tbody>
                        <tr v-for="item in cartItems" :key="item.product_id">
                            <td colspan="5">
                                <div class="d-grid align-items-start align-items-md-center">
                                    <div class="grid_item">
                                        <!-- <input type="checkbox" class="input_check input_child"> -->
                                    </div>
                                    <div class="grid_item">
                                        <div class="img_box bg_e5">
                                            <img :src="item.image" alt="thumb" class="w-100">
                                        </div>
                                    </div>
                                    <div class="grid_item">
                                        <p class="fs_15 lh_22">{{ item.name }}</p>
                                        <span class="mt-3 fs_17 lh_22 fc_gd"> Color: {{ item.color ?? 'N/A' }}, Size: {{ item.size ?? 'N/A' }}</span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p class="fs_17 lh_25"><span class="fc_gd d-md-none">Unit Price: </span> BDT {{ item.price }}
                                </p>
                                <p class="fs_17 lh_25 d-md-none"><span class="mt-2 fc_gd">Total Price: </span> BDT
                                    {{ item.total_price }}
                                </p>
                            </td>
                            <td>
                                <div class="quantity_2 d-inline-block">
                                    <div class="d-grid br_5 bxy_gl svg_28">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" @click="decreaseQuantity(item.shop_id, item.product_id)"
                                            viewBox="0 0 28 28" fill="none">
                                            <path
                                                d="M22.1081 12.8667H6.25265C5.95228 12.8667 5.66422 12.986 5.45183 13.1984C5.23944 13.4108 5.12012 13.6989 5.12012 13.9992C5.12012 14.2996 5.23944 14.5877 5.45183 14.8C5.66422 15.0124 5.95228 15.1318 6.25265 15.1318H22.1081C22.4084 15.1318 22.6965 15.0124 22.9089 14.8C23.1213 14.5877 23.2406 14.2996 23.2406 13.9992C23.2406 13.6989 23.1213 13.4108 22.9089 13.1984C22.6965 12.986 22.4084 12.8667 22.1081 12.8667Z"
                                                fill="#999999" />
                                        </svg>
                                        <span class="fw_5 fs_17">{{ item.quantity }}</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" @click="increaseQuantity(item.shop_id, item.product_id)"
                                            viewBox="0 0 28 28" fill="none">
                                            <path
                                                d="M14.9531 21.9279L14.9531 15.1327L21.7483 15.1327C22.0487 15.1327 22.3368 15.0134 22.5491 14.801C22.7615 14.5886 22.8809 14.3005 22.8809 14.0002C22.8809 13.6998 22.7615 13.4118 22.5491 13.1994C22.3368 12.987 22.0487 12.8677 21.7483 12.8677L14.9531 12.8677L14.9531 6.07247C14.9531 5.7721 14.8338 5.48404 14.6214 5.27165C14.409 5.05926 14.121 4.93994 13.8206 4.93994C13.5203 4.93994 13.2322 5.05926 13.0198 5.27165C12.8074 5.48404 12.6881 5.7721 12.6881 6.07247L12.6881 12.8677L5.89291 12.8677C5.59254 12.8677 5.30448 12.987 5.09209 13.1994C4.8797 13.4118 4.76038 13.6998 4.76038 14.0002C4.76038 14.3005 4.8797 14.5886 5.09209 14.801C5.30448 15.0134 5.59254 15.1327 5.89291 15.1327L12.6881 15.1327L12.6881 21.9279C12.6881 22.2283 12.8074 22.5163 13.0198 22.7287C13.2322 22.9411 13.5203 23.0604 13.8206 23.0604C14.121 23.0604 14.409 22.9411 14.6214 22.7287C14.8338 22.5163 14.9531 22.2283 14.9531 21.9279Z"
                                                fill="#999999" />
                                        </svg>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p class="fs_17 lh_25"><span class="fc_gd d-md-none">Total Price: </span> BDT {{ item.total_price }}
                                </p>
                            </td>
                            <td class="text-md-end" @click="removeItem(item)">
                                <button class="d-flex align-items-center gap-2 ms-md-auto svg_20">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21"
                                        fill="none">
                                        <path d="M2.5 5.5H4.16667H17.5" stroke="#666666" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M15.8327 5.5013V17.168C15.8327 17.61 15.6571 18.0339 15.3445 18.3465C15.032 18.659 14.608 18.8346 14.166 18.8346H5.83268C5.39065 18.8346 4.96673 18.659 4.65417 18.3465C4.34161 18.0339 4.16602 17.61 4.16602 17.168V5.5013M6.66602 5.5013V3.83464C6.66602 3.39261 6.84161 2.96868 7.15417 2.65612C7.46673 2.34356 7.89065 2.16797 8.33268 2.16797H11.666C12.108 2.16797 12.532 2.34356 12.8445 2.65612C13.1571 2.96868 13.3327 3.39261 13.3327 3.83464V5.5013"
                                            stroke="#666666" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M8.33398 9.66797V14.668" stroke="#666666" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M11.666 9.66797V14.668" stroke="#666666" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span class="fs_17 lh_22 fc_gd">Remove</span>
                                </button>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>

          <div class="pt-4 mt-0 mt-md-3">
                <div class="row row-cols-md-2 gy-4">
                    <div class="row_item">
                    </div>
                    <div class="row_item">
                        <div class="table_2_wrapper br_5 bxy_gl mt-2 mt-md-0">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td class="fs_17 lh_25 text-uppercase">SUb-Total</td>
                                        <td class="fs_17 lh_25 text-end">BDT {{subtotal}}</td>
                                    </tr>
                                    <tr>
                                        <td class="fs_17 lh_25 text-uppercase">delivery fee</td>
                                        <td class="fs_17 lh_25 text-end">BDT {{ delivery_charge }}</td>
                                    </tr>
                                    <tr>
                                        <td class="fw_5 fs_17 lh_25 text-uppercase">Grand Total</td>
                                        <td class="fw_5 fs_17 lh_25 text-end">BDT {{ total }}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="text-end">
                                <router-link to="/checkout" class="d-inline-block br_5 bg_red btnp_1228 tbg_3 hover">
                                    <span class="fw_5 fs_14 lh_20 fc_white text-uppercase"> Proceed to Checkout</span>
                                </router-link>
                            </div>
                        </div>
                        <div class="text-center d-md-none mt-4">
                            <a href="#" class="d-inline-block fw_5 fs_15 lh_22 fc_red text-decoration-underline">Go Back
                                Shopping</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
