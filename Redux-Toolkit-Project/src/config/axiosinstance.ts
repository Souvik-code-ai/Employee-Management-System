// src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://69b17104adac80b427c530f7.mockapi.io/', 
  timeout: 5000, 
  headers: {
    'Content-Type': 'application/json',

  }
});

// // Optional: Add a request interceptor for authentication tokens
// API.interceptors.request.use((config) => {
//   const token = localStorage.getItem('authToken');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// }, (error) => {
//   return Promise.reject(error);
// });

export default API;
