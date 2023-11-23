<script>
import { ref, onMounted, nextTick, computed } from "vue";
import { useAuthStore } from '../store/auth';
import { BASE_API_URL } from '../config';
import axios from 'axios';
import { useToast } from 'vue-toastification';
import router from '../router';

export default {
  props: {
    url: String,
    mobile: String,
    user_id: String,
  },

  setup(props) {
    const otpInputs = ref(["", "", "", ""]);

    const handleInput = (index, event) => {
      let sanitizedValue = event.target.value.replace(/[^0-9]/g, '');

      if (sanitizedValue.length > 1) {
        sanitizedValue = sanitizedValue.charAt(0);
      }

      otpInputs.value[index] = sanitizedValue;

      if (sanitizedValue.length === 1) {
        moveCursorToNextInput(index);
      }
    };

    const handleKeyDown = (index, event) => {
      if (event.key === 'ArrowLeft' && index > 0) {
        moveCursorToPreviousInput(index);
      } else if (event.key === 'ArrowRight' && index < 3) {
        moveCursorToNextInput(index);
      } else if ((event.key === 'Backspace' || event.key === 'Delete') && index > 0 && otpInputs.value[index] === "") {
        moveCursorToPreviousInput(index);
      } else if (event.key === 'Enter' && isOtpFilled.value) {
        verifyOtp();
      }
    };

    const moveCursorToNextInput = (index) => {
      if (index < 3) {
        nextTick(() => {
          const nextInput = document.querySelector(`#otpInput${index + 1}`);
          if (nextInput) {
            nextInput.focus();
          }
        });
      }
    };

    const moveCursorToPreviousInput = (index) => {
      if (index > 0) {
        otpInputs.value[index - 1] = "";
        nextTick(() => {
          const previousInput = document.querySelector(`#otpInput${index - 1}`);
          if (previousInput) {
            previousInput.focus();
          }
        });
      }
    };

    const isOtpFilled = computed(() => {
      return otpInputs.value.every(input => input !== "");
    });

    const verifyOtp = async () => {
      const authStore = useAuthStore();
      const otpValue = otpInputs.value.join("");
      try {
        const response = await axios.post(`${BASE_API_URL}/auth/${props.url}`, { otp: otpValue, id: props.user_id, mobile: props.mobile });

        if (response.data.resutls && typeof response.data.resutls === "object" && "message" in response.data.resutls && "user_id" in response.data.resutls) {
          router.push({
            name: 'RecoverPassword',
            params: { user_id: response.data.resutls.user_id },
          });

        } else {
          localStorage.setItem('authToken', response.data.resutls.access_token);
          localStorage.setItem('authUser', JSON.stringify(response.data.resutls));

          authStore.token = response.data.resutls.access_token
          authStore.user = response.data.resutls

          router.push('/');
        }


      } catch (error) {
        const toast = useToast();
        toast.error(error.response.data.errors);
      }
    };

    onMounted(() => {
      const firstInput = document.querySelector("#otpInput0");
      if (firstInput) {
        firstInput.focus();
      }
    });

    return {
      otpInputs,
      isOtpFilled,
      verifyOtp,
      handleInput,
      handleKeyDown,
    };
  },
};
</script>
<template>
  <section class="spy">
    <div class="container-fluid container-xxxl">
      <div class="auth_container br_5 bxy_gl">
        <div class="heading_wrapper">
          <h2 class="fw_4 fs_30 lh_43 text-uppercase text-center">OTP Verification</h2>
          <p class="mt-2 fs_15 lh_22 fc_gd text-center">We will send an OTP to your mobile number.</p>
        </div>
        <div class="auth_body">
          <div class="otp_verification smb_4">
            <div v-for="(input, index) in otpInputs" :key="index">
              <input ref="otpInput" v-model="otpInputs[index]" @input="handleInput(index, $event)" :maxlength="1"
                @keydown="handleKeyDown(index, $event)" :id="`otpInput${index}`" />
            </div>
          </div>
          <p class="fs_14 lh_20 fc_gd text-center">Don’t you receive the OTP? <button type="button"
              class="fw_5 fc_red not_hover text-capitalize text-decoration-underline">resend
              Code</button></p>
          <div class="smt_4">
            <button @click="verifyOtp()" class="w-100 br_5 bg_red btnp_1228 tbg_3 hover d-block text-center"
              :disabled="!isOtpFilled" :style="{ opacity: !isOtpFilled ? '0.5' : '1' }">
              <span class="fw_5 fs_14 lh_20 fc_white text-uppercase">Verify</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>