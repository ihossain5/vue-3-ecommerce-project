<script>
import EyeSvg from '../components/EyeSvg.vue';

export default {
    components: { EyeSvg }
}

</script>

<template>
<section class="spy">
    <div class="container-fluid container-xxxl">
        <div class="auth_container br_5 bxy_gl">
            <div class="heading_wrapper">
                <h2 class="fw_4 fs_30 lh_43 text-uppercase text-center">Create Account</h2>
            </div>
            <div class="auth_body">
                <form  id="registerForm" method="POST" enctype="multipart/form-data">
                    <div class="input_group">
                        <div class="file_input_box position-relative">
                            <img src="" alt="user" id="acImgPrev1">
                            <input type="file" name="photo" id="acFileInp1">
                            <label for="acFileInp1">
                                <img src="" alt="icon">
                            </label>
                        </div>
                    </div>
                    <div class="input_group">
                        <label class="input_label rf">Full Name</label>
                        <input type="text" name="name" class="input_field" placeholder="Full Name">
                    </div>
                    <div class="input_group">
                        <label class="input_label rf">Phone Number</label>
                        <input type="text" name="mobile" class="input_field" placeholder="Phone Number">
                    </div>
                    <div class="input_group">
                        <label class="input_label rf">E-Mail Address</label>
                        <input type="email" name="email" class="input_field" placeholder="E-Mail Address">
                    </div>
                    <div class="input_group">
                        <label class="input_label rf">Password</label>
                        <div class="position-relative passowrd_field">
                            <input type="password" name="password" class="input_field" placeholder="Password">
                            <button type="button">
                                <EyeSvg></EyeSvg>
                            </button>
                        </div>
                    </div>
                    <div class="d-flex align-items-md-center gap-2">
                        <input type="checkbox" id="usePolicy">
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
                Already member?
                <router-link to="/sign-in" class="fw_5 fc_red not_hover"> Login </router-link>
                here.
            </p>
        </div>
    </div>
</section>
</template>