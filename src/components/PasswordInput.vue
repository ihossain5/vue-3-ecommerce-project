<template>
    <div class="position-relative passowrd_field">
        <input
      v-model="password"
      :type="showPassword ? 'text' : 'password'"
      class="input_field"
      placeholder="Password"
    />
        <button type="button"  @click="togglePasswordVisibility">
            <EyeSvg v-if="!showPassword"></EyeSvg>
            <EyeIcon v-if="showPassword"></EyeIcon>
        </button>
    </div>
</template>
  
<script>
import EyeSvg from './EyeSvg.vue';
import EyeIcon from './EyeIcon.vue';
import { ref, watch } from 'vue';

export default {
    props: ['modelValue'],
    setup(props, { emit }) {
        const password = ref(props.modelValue);
        const showPassword = ref(false);
        const togglePasswordVisibility = () => {
            showPassword.value = !showPassword.value;
        };

    watch(password, (newPassword) => {
      emit('update:modelValue', newPassword);
    });

        return {
            password,
            showPassword,
            togglePasswordVisibility,
        };
    },
    components: { EyeSvg, EyeIcon }
};
</script>
