// utils/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

export const getAdAccounts = async (email) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/ads/google/account`, {
        params: { email }
      });
      return response.data;
    } catch (error) {
      console.error('API call failed:', error.response || error.message);
      throw error;
    }
  };

export const createBudget = async (email, customerId, budgetDTO) => {
  const response = await axios.post(`${API_BASE_URL}/ads/google/create-budget`, budgetDTO, {
    params: { email },
    headers: { customerId }
  });
  return response.data;
};

export const createCampaign = async (email, customerId, budgetId) => {
  const response = await axios.post(`${API_BASE_URL}/ads/google/create-campaign`, null, {
    params: { email },
    headers: { customerId, budgetId }
  });
  return response.data;
};

export const createAdGroup = async (email, customerId, campaignId) => {
  const response = await axios.post(`${API_BASE_URL}/ads/google/create-adgroup`, null, {
    params: { email },
    headers: { customerId, campaignId }
  });
  return response.data;
};
