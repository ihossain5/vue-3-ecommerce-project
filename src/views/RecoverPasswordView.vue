<template>
    <section class="spy">
        <div class="container-fluid container-xxxl">
            <div class="auth_container br_5 bxy_gl">
                <div class="heading_wrapper">
                    <h2 class="fw_4 fs_30 lh_43 text-uppercase text-center">Recover Password</h2>
                </div>
                <div class="auth_body">
                    <form @submit="handleSubmit">
                        <div class="input_group">
                            <label class="input_label rf">New Password</label>
                            <div class="position-relative passowrd_field">
                                <PasswordInput v-model="password"></PasswordInput>
                            </div>
                        </div>
                        <div class="input_group">
                            <label class="input_label rf">Confirm Password</label>
                            <div class="position-relative passowrd_field">
                                <PasswordInput v-model="password_confirmation"></PasswordInput>
                            </div>
                        </div>
                        <div class="smt_4">
                            <button type="submit" class="br_5 bg_red btnp_1228 tbg_3 hover w-100">
                                <span class="fw_5 fs_14 lh_20 fc_white text-uppercase">Confirm Password</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { ref } from 'vue';
import PasswordInput from '../components/PasswordInput.vue';
import { useToast } from 'vue-toastification';
import { useAuthStore } from '../store/auth';
import router from '../router';


export default {
    props: {
        user_id: String,
    },
    setup(props) {
        const toast = useToast();
        const password = ref('');
        const password_confirmation = ref('');
        const authStore = useAuthStore();

        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                await authStore.recoverPassword({
                    password: password.value,
                    password_confirmation: password_confirmation.value,
                    user_id: props.user_id,
                });

                if (authStore.user && authStore.token) {
                    router.push('/');
                }

            } catch (error) {
                toast.error(error.response.data.errors);
            }
        };

        return {
            password,
            password_confirmation,
            handleSubmit
        };
    },
    components: { PasswordInput }
}
</script>
