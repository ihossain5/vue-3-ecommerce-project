// src/store/auth.js

import { defineStore } from 'pinia';
import axios from 'axios';
import { useToast } from 'vue-toastification';
import { BASE_API_URL } from '../config';
import router from '../router';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
    user_id: null,
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
    async register(form) {
      try {
        const response = await axios.post(`${BASE_API_URL}/auth/register`, form, {
          headers: {
              'Content-Type': 'multipart/form-data',
          },
      });

        localStorage.setItem('user_id', response.data.resutls.user_id);
        
        this.user_id = response.data.resutls.user_id;


    } catch (error) {
        if(error.response.status == 503){
          router.push('/otp-verification');
        }else{
          const toast = useToast();
          toast.error(error.response.data.errors); 
        }
        
      }
    },
  },
});
