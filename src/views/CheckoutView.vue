<script>
import { computed, ref } from 'vue';
import { useAuthStore } from '../store/auth';
import { useCartStore } from '../store/cart';
import { useToast } from 'vue-toastification';
import { BASE_API_URL } from '../config';
import axios from 'axios';
import router from '../router';
export default {
    setup() {
        const toast = useToast();
        const authStore = useAuthStore();
        const cartStore = useCartStore();
        const cartItems = computed(() => cartStore.getAllItems());

        const subtotal = computed(() => cartStore.totalCartPrice);
        const delivery_charge = cartStore.deliveryCharge;
        const total = computed(() => delivery_charge + subtotal.value);
        const user = authStore.user

        const name = ref(user.name);
        const mobile = ref(user.mobile);
        const email = ref(user.email);
        const address = ref('');
        const division = ref('Dhaka');
        const district = ref('Dhaka');
        const order_note = ref(null);

        cartStore.shops = Object.fromEntries(
            Object.entries(cartStore.shops).filter(([key, value]) => Object.keys(value).length > 0)
        );


        const handleSubmit = async () => {
            const headers = {
                Authorization: `Bearer ${authStore.token}`,
            };

            try {
                const response = await axios.post(`${BASE_API_URL}/create-order`, {
                    name: name.value,
                    mobile: mobile.value,
                    email: email.value,
                    address: address.value,
                    district: district.value,
                    division: division.value,
                    shops: cartStore.shops,
                    order_note: order_note.value,
                }, { headers });

                    cartStore.clearCart();
                    router.push('/order-placed')


            } catch (error) {
                console.log(error);
                toast.error('Something went wrong. Pleae try again');
            }
        }


        return { user, cartItems, subtotal, total, delivery_charge, name, mobile, email, address, order_note, handleSubmit }
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
                        <router-link to="/" class="fs_16 lh_23 fc_red">Home</router-link>
                    </li>
                    <li class="breadcrumb-item fs_16 lh_23 fc_black active" aria-current="page">Checkout</li>
                </ol>
            </nav>
        </div>
    </section>

    <!-- checkout -->
    <section class="checkout_page spb">
        <div class="container-fluid container-xxxl">
            <h1 class="sc_title_1">Checkout</h1>
            <div class="row row-cols-md-2 gx-xl-5 gy-4">
                <div class="row_item">
                    <div class="form_wrapper br_5 bxy_gl mb-2 mb-md-0">
                        <h4 class="pb-2 pb-md-3 fw_4 fs_24 lh_35 bb_gl">Billing details</h4>
                        <div class="pt-4 mt-0 mt-md-3">
                            <div class="input_group">
                                <label class="input_label rf">Full Name</label>
                                <input type="text" class="input_field" placeholder="Full Name" v-model="user.name" readonly>
                            </div>
                            <div class="input_group">
                                <label class="input_label rf">Phone Number</label>
                                <input type="text" class="input_field" placeholder="Phone Number" v-model="user.mobile"
                                    readonly>
                            </div>
                            <div class="input_group">
                                <label class="input_label rf">E-Mail Address</label>
                                <input type="email" class="input_field" placeholder="E-Mail Address" v-model="user.email"
                                    readonly>
                            </div>


                            <!-- dofferemt address -->
                            <div class="input_group d-flex align-items-center gap-2">
                                <!-- <input type="checkbox" class="input_check" id="sda" checked> -->
                                <label for="sda" class="fs_14 lh_20 text-uppercase fc_gd">SHIPPING
                                    ADDRESS</label>
                            </div>
                            <div class="input_group">
                                <label class="input_label rf">Full Name</label>
                                <input type="text" class="input_field" placeholder="Full Name" v-model="name">
                            </div>
                            <div class="input_group">
                                <label class="input_label rf">Phone Number</label>
                                <input type="text" class="input_field" placeholder="Phone Number" v-model="mobile">
                            </div>
                            <div class="input_group">
                                <label class="input_label rf">E-Mail Address</label>
                                <input type="email" class="input_field" placeholder="E-Mail Address" v-model="email">
                            </div>
                            <div class="input_group">
                                <label class="input_label rf">Full Address</label>
                                <textarea rows="3" class="input_field" placeholder="Enter Your Full Address"
                                    v-model="address"></textarea>
                            </div>
                            <div class="input_group bb_gl"></div>
                            <div class="input_group mb-0">
                                <label class="input_label">Order notes (optional)</label>
                                <textarea rows="5" class="input_field" v-model="order_note"
                                    placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row_item">
                    <div class="order_summery br_5 bxy_gl">
                        <h4 class="pb-2 pb-md-3 fw_4 fs_24 lh_35 bb_gl">Billing details</h4>
                        <div class="pt-4 mt-0 mt-md-3">
                            <div class="br_5 bg_white bxy_gl">
                                <table class="table summary_table">
                                    <tbody>
                                        <tr v-for="item in cartItems" :key="item.product_id">
                                            <td colspan="3">
                                                <div class="d-grid align-items-center">
                                                    <div class="grid_item">
                                                        <div class="img_box bg_e5">
                                                            <img :src="item.image" alt="thumb" class="w-100">
                                                        </div>
                                                    </div>
                                                    <div class="grid_item">
                                                        <p class="fs_15 lh_22">{{ item.name }}</p>
                                                        <div class="d-flex justify-content-between align-items-center mt-3">
                                                            <span class="fs_14 lh_20">Qty:{{ item.quantity }}</span>
                                                            <span class="fs_14 lh_20 d-lg-none">BDT {{ item.price
                                                            }}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="fs_14 lh_20 text-end">BDT {{ item.total_price }}</td>
                                        </tr>

                                        <tr>
                                            <td colspan="3" class="fs_15 lh_22">
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <span class="fs_15 lh_22">Subtotal</span>
                                                    <span class="fs_15 lh_22 d-lg-none">BDT {{ subtotal }}</span>
                                                </div>
                                            </td>
                                            <td class="fs_15 lh_22 text-end">BDT {{ subtotal }}</td>
                                        </tr>
                                        <tr>
                                            <td colspan="3" class="fs_15 lh_22">
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <span class="fs_15 lh_22">delivery fee</span>
                                                    <span class="fs_15 lh_22 d-lg-none">BDT {{ delivery_charge }}</span>
                                                </div>
                                            </td>
                                            <td class="fs_15 lh_22 text-end">BDT {{ delivery_charge }}</td>
                                        </tr>
                                        <tr>
                                            <td colspan="3" class="fw_5 fs_15 lh_22">
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <span class="fs_15 lh_22">Grand Total</span>
                                                    <span class="fs_15 lh_22 d-lg-none">BDT {{ total }}</span>
                                                </div>
                                            </td>
                                            <td class="fw_5 fs_15 lh_22 text-end">BDT {{ total }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="mt-4 br_5 bg_white bxy_gl spy_3 px-3 payment_options">
                                <!-- <div>
                                        <div class="d-flex align-items-center gap-2">
                                            <input type="radio" id="onlinePayment" name="paymentOption">
                                            <label for="onlinePayment" class="fs_17 lh_25 text-capitalize">Online
                                                Payment</label>
                                            <img src="./assets/images/ssl-commerze.png" alt="brand">
                                        </div>
                                        <p class="mt-2 fs_15 lh_22 fc_gd">Make your payment directly into our bank
                                            account. Please use your Order ID as the payment reference. Your order will
                                            not be shipped until the funds have cleared in our account.</p>
                                    </div> -->
                                <div class="">
                                    <div class="d-flex align-items-center gap-2">
                                        <input type="radio" id="onlinePayment1" name="paymentOption" checked>
                                        <label for="onlinePayment1" class="fs_17 lh_25 text-capitalize">Cash on
                                            delivery</label>
                                    </div>
                                    <p class="mt-2 fs_15 lh_22 fc_gd">Pay with cash upon delivery.</p>
                                </div>
                                <div class="spt_3">
                                    <p class="fs_15 lh_22">Your personal data will be used to process your order,
                                        support your experience throughout this website, and for other purposes
                                        described in our <a href="#" class="fc_red not_hover">privacy policy.</a>
                                    </p>
                                    <div class="mt-3 d-flex align-items-md-center gap-2">
                                        <input type="checkbox" id="onlinePayment2" name="paymentOption">
                                        <label for="onlinePayment2" class="fs_14 lh_20">I have read and agree to the
                                            website <a href="#" class="fc_red not_hover">terms and
                                                conditions.</a></label>
                                    </div>
                                </div>
                                <div class="spt_4">
                                    <!-- <button type="submit" class="mt-2 br_5 bg_red btnp_1228 tbg_3 hover">
                                            <span class="fw_5 fs_14 lh_20 fc_white text-uppercase">Place order</span>
                                        </button> -->
                                    <a type="button" @click="handleSubmit" class="mt-2 br_5 bg_red btnp_1228 tbg_3 hover">
                                        <span class="fw_5 fs_14 lh_20 fc_white text-uppercase">Place order</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
