<template>
    <section class="spy">
        <div class="container-fluid container-xxxl">
            <div class="auth_container br_5 bxy_gl">
                <div class="heading_wrapper">
                    <h2 class="fw_4 fs_30 lh_43 text-uppercase text-center">Forgot Password</h2>
                    <p class="mt-2 fs_15 lh_22 fc_gd text-center">Enter your phone number below and we’ll send you otp code
                        to
                        <br> reset your password
                    </p>
                </div>
                <div class="auth_body">
                    <form action="#">
                        <div class="input_group">
                            <label class="input_label rf">Phone Number</label>
                            <input type="text" v-model="mobile" class="input_field"
                                placeholder="Enter your Phone Number or Email">
                        </div>
                        <div class="smy_4">
                            <a @click="handleSubmit" type="button" :disabled="isSubmitDisabled"
                                :style="{ opacity: isSubmitDisabled ? '0.5' : '1' }"
                                class="br_5 bg_red btnp_1228 tbg_3 hover d-block text-center">
                                <span class="fw_5 fs_14 lh_20 fc_white text-uppercase">continue</span>
                            </a>
                        </div>
                    </form>
                    <div class="text-center">
                        <router-link to="/sign-in" class="fw_5 fs_15 lh_22 fc_red text-decoration-underline not_hover">Go
                            Back</router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { computed, ref } from 'vue';
import { BASE_API_URL } from '../config';
import axios from 'axios';
import { useToast } from 'vue-toastification';
import router from '../router';
import { useAuthStore } from '../store/auth';
export default {
    setup() {
        const toast = useToast();
        const mobile = ref('');
        const isSubmitDisabled = computed(() => {
            return !mobile.value;
        });

        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                const response = await axios.post(`${BASE_API_URL}/auth/forget-password`, { mobile: mobile.value });

                router.push({
                    name: 'otpVerify',
                    params: { url: 'forget-password-verify-otp' },
                    query: { mobile: mobile.value, user_id: response.data.resutls.user_id },
                });

            } catch (error) {
                if (error.response.status == 422) {
                    toast.error('This mobile number does not exist in our records');
                } else {
                    toast.error(error.response.data.errors);
                }
            }
        };


        return {
            mobile,
            handleSubmit,
            isSubmitDisabled
        };
    },

}
</script>

