
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
                <h2 class="fw_4 fs_30 lh_43 text-uppercase text-center">Sign In</h2>
            </div>
            <div class="auth_body">
                <form  method="POST" id="loginForm">
                    <div class="input_group">
                        <label class="input_label rf">Mobile Number</label>
                        <input type="number" name="mobile" class="input_field" placeholder="Type your number">
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
                    <a 
                        class="fs_17 lh_25 fc_black not_hover text-capitalize text-decoration-underline">Forgot
                        password?</a>
                    <div class="smy_4">
                        <button type="submit" class="br_5 bg_red btnp_1228 tbg_3 hover w-100">
                            <span class="fw_5 fs_14 lh_20 fc_white text-uppercase">Sign In</span>
                        </button>
                    </div>
                </form>


            </div>
            <p class="fs_14 lh_20 fc_gd alreay_lr bt_gl text-center">
                New member?
                <router-link to="/sign-up"  class="fw_5 fc_red not_hover"> Register </router-link>
                here.
            </p>
        </div>
    </div>
</section>
</template>