// src/store/auth.js

import { defineStore } from 'pinia';
import axios from 'axios';

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
        
        this.user = response.data.resutls;
        this.token = response.data.resutls.access_token;


    } catch (error) {
        // Handle login error
      }
    },
  },
});
