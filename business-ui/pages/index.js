// // pages/index.js
// import { useState } from 'react';
// import { getAdAccounts, createBudget, createCampaign, createAdGroup } from '../utils/api';

// export default function Home() {
//   const [email, setEmail] = useState('');
//   const [customerId, setCustomerId] = useState('');
//   const [budgetId, setBudgetId] = useState('');
//   const [campaignId, setCampaignId] = useState('');
//   const [adAccounts, setAdAccounts] = useState(null);

//   const handleGetAdAccounts = async () => {
//     const accounts = await getAdAccounts(email);
//     setAdAccounts(accounts);
//   };

//   const handleCreateBudget = async () => {
//     const budgetDTO = { /* your budget data */ };
//     const budgetResponse = await createBudget(email, customerId, budgetDTO);
//     console.log(budgetResponse);
//   };

//   const handleCreateCampaign = async () => {
//     const campaignResponse = await createCampaign(email, customerId, budgetId);
//     console.log(campaignResponse);
//   };

//   const handleCreateAdGroup = async () => {
//     const adGroupResponse = await createAdGroup(email, customerId, campaignId);
//     console.log(adGroupResponse);
//   };

//   return (
//     <div>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Customer ID"
//         value={customerId}
//         onChange={(e) => setCustomerId(e.target.value)}
//       />
//       <button onClick={handleGetAdAccounts}>Get Ad Accounts</button>
//       <button onClick={handleCreateBudget}>Create Budget</button>
//       <button onClick={handleCreateCampaign}>Create Campaign</button>
//       <button onClick={handleCreateAdGroup}>Create Ad Group</button>

//       {adAccounts && (
//         <div>
//           <h3>Ad Accounts:</h3>
//           <pre>{JSON.stringify(adAccounts, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// }
