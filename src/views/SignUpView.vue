<template>
    <section class="spy">
        <div class="container-fluid container-xxxl">
            <div class="auth_container br_5 bxy_gl">
                <div class="heading_wrapper">
                    <h2 class="fw_4 fs_30 lh_43 text-uppercase text-center">Create Account</h2>
                </div>
                <div class="auth_body">
                    <form id="registerForm" @submit.prevent="registerUser" method="POST" enctype="multipart/form-data">
                        <div class="input_group">
                            <div class="file_input_box position-relative">
                                <img :src="imageSrc" alt="user" id="acImgPrev1">
                                <input type="file" name="photo" id="acFileInp1" @change="previewImage">
                                <label for="acFileInp1">
                                    <img src="https://twowheelersbd.com/frontend/assets/icons/file-edit.svg" alt="icon">
                                </label>
                            </div>
                        </div>
                        <div class="input_group">
                            <label class="input_label rf">Full Name</label>
                            <input type="text" name="name" class="input_field" placeholder="Full Name"
                                v-model="formData.name">
                        </div>
                        <div class="input_group">
                            <label class="input_label rf">Phone Number</label>
                            <input type="text" name="mobile" class="input_field" placeholder="Phone Number"
                                v-model="formData.mobile">
                        </div>
                        <div class="input_group">
                            <label class="input_label rf">E-Mail Address</label>
                            <input type="email" name="email" class="input_field" placeholder="E-Mail Address"
                                v-model="formData.email">
                        </div>
                        <div class="input_group">
                            <label class="input_label rf">Password</label>
                            <PasswordInput v-model="formData.password"></PasswordInput>
                        </div>
                        <div class="d-flex align-items-md-center gap-2">
                            <input type="checkbox" id="usePolicy" v-model="formData.agreeToTerms">
                            <label for="usePolicy" class="fs_14 lh_20">I agree to TwoWheelersBD’s <a href="#"
                                    class="fw_5 fc_red not_hover">Terms of Use </a> and <a href="#"
                                    class="fw_5 fc_red not_hover">Use
                                    Privacy Policy.</a></label>
                        </div>
                        <div class="smy_4">
                            <button type="submit" class="br_5 bg_red btnp_1228 tbg_3 hover w-100">
                                <span class="fw_5 fs_14 lh_20 fc_white text-uppercase">Sign Up</span>
                            </button>
                        </div>
                    </form>
                </div>
                <p class="fs_14 lh_20 fc_gd alreay_lr bt_gl text-center">
                    Already a member?
                    <router-link to="/sign-in" class="fw_5 fc_red not_hover"> Login </router-link>
                    here.
                </p>
            </div>
        </div>
    </section>
</template>
  
<script>
import { ref } from 'vue';
import EyeSvg from '../components/EyeSvg.vue';
import PasswordInput from '../components/PasswordInput.vue';
import axios from 'axios';
import { BASE_API_URL } from '../config';
import router from '../router';
import { useToast } from 'vue-toastification';

export default {
    setup() {
        const imageSrc = ref('https://twowheelersbd.com/frontend/assets/images/user-avater.png');
        const formData = ref({
            name: '',
            mobile: '',
            email: '',
            password: '',
            agreeToTerms: false,
        });

        const previewImage = (event) => {
            const file = event.target.files[0];

            if (file) {
                const reader = new FileReader();

                reader.onload = (e) => {
                    imageSrc.value = e.target.result;
                };

                reader.readAsDataURL(file);
            }
        };

        const registerUser = async () => {
            try {
                const form = new FormData();
                if (document.getElementById('acFileInp1').files.length > 0) {
                    form.append('photo', document.getElementById('acFileInp1').files[0]);
                }
                form.append('name', formData.value.name);
                form.append('mobile', formData.value.mobile);
                form.append('email', formData.value.email);
                form.append('password', formData.value.password);

                const response = await axios.post(`${BASE_API_URL}/auth/register`, form, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                if (response.status === 200) {
                    router.push('/otp-verification');
                }
            } catch (error) {
                const toast = useToast();
                toast.error(error.response.data.message.email); 
            }
        };

        return {
            imageSrc,
            formData,
            previewImage,
            registerUser,
        };
    },
    components: { EyeSvg, PasswordInput },
};
</script>
  