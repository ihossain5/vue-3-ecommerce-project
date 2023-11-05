<script>
export default {
  data() {
    return {
      otpInputs: ['', '', '', ''],
    };
  },
  methods: {
    handleInput(index, event) {
      const sanitizedValue = event.target.value.replace(/[^0-9]/g, '');

      if (sanitizedValue) {
        // Preserve the last typed value
        this.otpInputs[index] = sanitizedValue.charAt(sanitizedValue.length - 1);

        if (index < 3) {
          this.$nextTick(() => {
            this.$refs['otpInput' + (index + 1)][0].focus();
          });
        }
      }
    },
  },
};

</script>
<template>
  <section class="spy">
    <div class="container-fluid container-xxxl">
      <div class="auth_container br_5 bxy_gl">
        <div class="heading_wrapper">
          <h2 class="fw_4 fs_30 lh_43 text-uppercase text-center">OTP Verification</h2>
          <p class="mt-2 fs_15 lh_22 fc_gd text-center">We will send an OTP to your email address.</p>
        </div>
        <div class="auth_body">
          <form action="#">
            <div class="otp_verification smb_4">
              <div v-for="(input, index) in otpInputs" :key="index">
                <input v-model="otpInputs[index]" :disabled="index > 0 && !otpInputs[index - 1]"
                  @input="handleInput(index, $event)" :ref="'otpInput' + index" type="text">
              </div>
            </div>
            <p class="fs_14 lh_20 fc_gd text-center">Don’t you receive the OTP? <button type="button"
                class="fw_5 fc_red not_hover text-capitalize text-decoration-underline">resend
                Code</button></p>
            <div class="smt_4">
              <button class="w-100 br_5 bg_red btnp_1228 tbg_3 hover d-block text-center">
                <span class="fw_5 fs_14 lh_20 fc_white text-uppercase">Verify</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>