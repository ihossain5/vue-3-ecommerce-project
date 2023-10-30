// src/store/auth.js

import { defineStore } from 'pinia';
import axios from 'axios';
import { useToast } from 'vue-toastification';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
  }),

  actions: {
    async login(mobile, password) {
      try {
        let device_id = 123655474;
        const response = await axios.post('https://api.twowheelersbd.com/api/auth/login', {
            mobile,
          password,
          device_id,
        });

        localStorage.setItem('authToken', response.data.resutls.access_token);
        localStorage.setItem('authUser', JSON.stringify(response.data.resutls));
        
        this.user = response.data.resutls;
        this.token = response.data.resutls.access_token;


    } catch (error) {
       const toast = useToast();
        toast.error(error.response.data.message); 
      }
    },
  },
});
