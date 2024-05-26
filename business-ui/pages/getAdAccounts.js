// pages/getAdAccounts.js
import { useState } from 'react';
import { getAdAccounts } from '../app/api';

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
      setError('Failed to fetch ad accounts');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Get Ad Accounts</h1>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleGetAdAccounts} disabled={loading}>
        {loading ? 'Loading...' : 'Get Ad Accounts'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {adAccounts && (
        <div>
          <h3>Ad Accounts:</h3>
          <pre>{JSON.stringify(adAccounts, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
