
<script>
import EyeSvg from '../components/EyeSvg.vue';
import { useAuthStore } from '@/store/auth';
import { computed, ref } from 'vue';
import router from '../router/index';
import PasswordInput from '../components/PasswordInput.vue';


export default {
    setup() {
        const authStore = useAuthStore();
        const mobile = ref('');
        const password = ref('');
        const isSubmitDisabled = computed(() => {
            return !mobile.value || !password.value;
        });

        const handleLogin = async (e) => {
            e.preventDefault();
            await authStore.login(mobile.value, password.value);

            if (authStore.user && authStore.token) {
                router.back(); // This will navigate back to the previous page
            }
        };

    

        return {
            mobile,
            password,
            handleLogin,
            isSubmitDisabled
        };
    },
    components: { EyeSvg, PasswordInput }
}

</script>

<template>
    <section class="spy">
        <div class="container-fluid container-xxxl">
            <div class="auth_container br_5 bxy_gl">
                <div class="heading_wrapper">
                    <h2 class="fw_4 fs_30 lh_43 text-uppercase text-center">Sign In</h2>
                </div>
                <div class="auth_body">
                    <form @submit="handleLogin">
                        <div class="input_group">
                            <label class="input_label rf">Mobile Number</label>
                            <input type="number" v-model="mobile" class="input_field" placeholder="Type your number">
                        </div>
                        <div class="input_group">
                            <label class="input_label rf">Password</label>
                            <PasswordInput v-model="password"></PasswordInput>
                        </div>
                        <a class="fs_17 lh_25 fc_black not_hover text-capitalize text-decoration-underline">Forgot
                            password?</a>
                        <div class="smy_4">
                            <button type="submit" class="br_5 bg_red btnp_1228 tbg_3 hover w-100"
                                :disabled="isSubmitDisabled" :style="{ opacity: isSubmitDisabled ? '0.5' : '1' }">
                                <span class="fw_5 fs_14 lh_20 fc_white text-uppercase">Sign In</span>
                            </button>
                        </div>
                    </form>


                </div>
                <p class="fs_14 lh_20 fc_gd alreay_lr bt_gl text-center">
                    New member?
                    <router-link to="/sign-up" class="fw_5 fc_red not_hover"> Register </router-link>
                    here.
                </p>
            </div>
        </div>
    </section>
</template>