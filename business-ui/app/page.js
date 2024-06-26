"use client";  // Add this line

import { useState } from 'react';
import { getAdAccounts } from './api';

export default function GetAdAccounts() {
  const [email, setEmail] = useState('');
  const [adAccounts, setAdAccounts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGetAdAccounts = async () => {
    setLoading(true);
    setError(null);
    try {
      const accounts = await getAdAccounts(email);
      setAdAccounts(accounts);
    } catch (err) {
      console.error('Error fetching ad accounts:', err);
      setError('Failed to fetch ad accounts');
    } finally {
      setLoading(false);
    }
  };


  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Get Ad Accounts</h1>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          padding: '8px',
          margin: '8px 0',
          boxSizing: 'border-box',
          color: 'black', // Ensuring the input text is black
          width: '100%',
          maxWidth: '300px',
        }}
      />
      <button
        onClick={handleGetAdAccounts}
        disabled={loading}
        style={{
          padding: '10px 15px',
          margin: '10px 0',
          cursor: loading ? 'not-allowed' : 'pointer',
        }}
      >
        {loading ? 'Loading...' : 'Get Ad Accounts'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {adAccounts && (
        <div>
          <h3>Ad Accounts:</h3>
          <ul>
            {adAccounts.resourceNames.map((account, index) => (
              <li key={index}>{account}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}