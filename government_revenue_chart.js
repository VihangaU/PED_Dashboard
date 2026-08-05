/**
 * Government Revenue & Contributions Component for PEDMIS Dashboard
 * Renders VAT/Duties, CIT, Levy, and Dividend streams broken down into:
 * - Strategic Profitable
 * - Strategic Loss
 * - Non-Strategic Profitable
 * - Non-Strategic Loss
 * Also includes Deficit & Surplus breakdowns for EACH performance category.
 */

// Comprehensive Data Store for Government Revenue Streams & Variances
const govtRevenueData = {
  // --- VAT, DUTIES & OTHER ---
  'VAT,Duties & Others (Strategic SOEs -Net Profit)': [
    { name: 'Bank of Ceylon', category: 'Strategic Profitable', value: '24.5B ' },
    { name: 'Sri Lanka Telecom PLC', category: 'Strategic Profitable', value: '12.5B ' },
    { name: 'Airport & Aviation Services Ltd', category: 'Strategic Profitable', value: '18.0B ' },
    { name: 'National Savings Bank', category: 'Strategic Profitable', value: '10.0B ' }
  ],
  'VAT,Duties & Others (Strategic SOEs -Net Loss)': [
    { name: 'Ceylon Petroleum Corporation (CPC)', category: 'Strategic Loss', value: '65.0B ' },
    { name: 'Ceylon Electricity Board (CEB)', category: 'Strategic Loss', value: '8.5B ' }
  ],
  'VAT,Duties & Others (Non-Strategic SOEs -Net Profit)': [
    { name: 'National Water Supply & Drainage Board', category: 'Non-Strategic Profitable', value: '4.2B ' },
    { name: 'Lanka Hospitals PLC', category: 'Non-Strategic Profitable', value: '2.3B ' }
  ],
  'VAT,Duties & Others (Non-Strategic SOEs -Net Loss)': [
    { name: 'Sri Lanka Transport Board (SLTB)', category: 'Non-Strategic Loss', value: '1.0B ' }
  ],

  // --- CORPORATE INCOME TAX (CIT) ---
  'Corporate Income Tax (CIT)  (Strategic SOEs -Net Profit)': [
    { name: 'Bank of Ceylon', category: 'Strategic Profitable', value: '38.5B ' },
    { name: 'People\'s Bank', category: 'Strategic Profitable', value: '29.0B ' },
    { name: 'National Savings Bank', category: 'Strategic Profitable', value: '19.5B ' },
    { name: 'Sri Lanka Insurance Corporation', category: 'Strategic Profitable', value: '14.0B ' }
  ],
  'Corporate Income Tax (CIT)  (Strategic SOEs -Net Loss)': [
    { name: 'SriLankan Airlines (Tax Adjustments)', category: 'Strategic Loss', value: '1.0B ' }
  ],
  'Corporate Income Tax (CIT)  (Non-Strategic SOEs -Net Profit)': [
    { name: 'Sri Lanka Ports Authority', category: 'Non-Strategic Profitable', value: '9.0B ' },
    { name: 'Litro Gas Lanka Ltd', category: 'Non-Strategic Profitable', value: '3.5B ' }
  ],
  'Corporate Income Tax (CIT)  (Non-Strategic SOEs -Net Loss)': [
    { name: 'Spices & Allied Products Board', category: 'Non-Strategic Loss', value: '0.5B ' }
  ],

  // --- LEVY STREAM REVENUE ---
  'Levy  (Strategic SOEs -Net Profit)': [
    { name: 'Airport & Aviation Services Ltd', category: 'Strategic Profitable', value: '8.5B ' },
    { name: 'Development Lotteries Board', category: 'Strategic Profitable', value: '4.2B ' },
    { name: 'National Lotteries Board', category: 'Strategic Profitable', value: '3.3B ' }
  ],
  'Levy  (Strategic SOEs -Net Loss)': [
    { name: 'Ceylon Electricity Board', category: 'Strategic Loss', value: '2.0B ' }
  ],
  'Levy  (Non-Strategic SOEs -Net Profit)': [
    { name: 'Ports Authority (Levy Portion)', category: 'Non-Strategic Profitable', value: '6.0B ' }
  ],
  'Levy  (Non-Strategic SOEs -Net Loss)': [
    { name: 'State Engineering Corporation', category: 'Non-Strategic Loss', value: '1.0B ' }
  ],

  // --- LEVY DEFICITS PER SUB-CATEGORY ---
  'Levy Deficit (Strategic SOEs - Net Profit)': [
    { name: 'Civil Aviation Authority', target: '2.0B ', actual: '1.0B ', variance: '1.0B  Deficit' }
  ],
  'Levy Deficit (Strategic SOEs - Net Loss)': [
    { name: 'Water Resources Board', target: '3.0B ', actual: '1.0B ', variance: '2.0B  Deficit' }
  ],
  'Levy Deficit (Non-Strategic SOEs - Net Profit)': [
    { name: 'State Pharmaceuticals Corporation', target: '1.5B ', actual: '0.8B ', variance: '0.7B  Deficit' }
  ],
  'Levy Deficit (Non-Strategic SOEs - Net Loss)': [
    { name: 'National Transport Commission', target: '1.8B ', actual: '0.5B ', variance: '1.3B  Deficit' }
  ],

  // --- DIVIDEND STREAM REVENUE ---
  'Dividend (Strategic SOEs - Net Profit)': [
    { name: 'Sri Lanka Telecom PLC', category: 'Strategic Profitable', value: '6.0B ' },
    { name: 'Lanka Hospitals PLC', category: 'Strategic Profitable', value: '3.5B ' },
    { name: 'Litro Gas Lanka Ltd', category: 'Strategic Profitable', value: '2.0B ' }
  ],
  'Dividend (Strategic SOEs - Net Loss)': [
    { name: 'Ceylon Petroleum Corporation (N/A)', category: 'Strategic Loss', value: '1.0B ' }
  ],
  'Dividend (Non-Strategic SOEs - Net Profit)': [
    { name: 'Ceylon Electricity Board (Dividend Share)', category: 'Non-Strategic Profitable', value: '1.8B ' },
    { name: 'Milco (Pvt) Ltd', category: 'Non-Strategic Profitable', value: '0.2B ' }
  ],
  'Dividend (Non-Strategic SOEs - Net Loss)': [
    { name: 'Kurunegala Plantations Ltd', category: 'Non-Strategic Loss', value: '1.0B ' }
  ],

  // --- DIVIDEND SURPLUSES PER SUB-CATEGORY ---
  'Dividend Surplus (Strategic SOEs - Net Profit)': [
    { name: 'Sri Lanka Telecom PLC', target: '5.0B ', actual: '6.0B ', variance: '1.0B  Surplus' }
  ],
  'Dividend Surplus (Strategic SOEs - Net Loss)': [
    { name: 'Ceylon Electricity Board Special Unit', target: '0.5B ', actual: '0.6B ', variance: '0.1B  Surplus' }
  ],
  'Dividend Surplus (Non-Strategic SOEs - Net Profit)': [
    { name: 'Lanka Hospitals PLC', target: '3.3B ', actual: '3.5B ', variance: '0.2B  Surplus' }
  ],
  'Dividend Surplus (Non-Strategic SOEs - Net Loss)': [
    { name: 'Chilaw Plantations Ltd', target: '0.1B ', actual: '0.15B ', variance: '0.05B  Surplus' }
  ]
};

// Dynamic Top 5 Data for Government Revenue Streams
const govtTop5Data = {
  VAT: {
    title: "TOP 5 CONTRIBUTORS (VAT, DUTIES & OTHER)",
    items: [
      { name: "1. Ceylon Petroleum Corp", val: "65.0B " },
      { name: "2. Ports Authority", val: "28.0B " },
      { name: "3. Bank of Ceylon", val: "24.5B " },
      { name: "4. Airport & Aviation Services", val: "18.0B " },
      { name: "5. Sri Lanka Telecom", val: "12.5B " }
    ]
  },
  CIT: {
    title: "TOP 5 CONTRIBUTORS (CORPORATE INCOME TAX)",
    items: [
      { name: "1. Bank of Ceylon", val: "38.5B " },
      { name: "2. People's Bank", val: "29.0B " },
      { name: "3. National Savings Bank", val: "19.5B " },
      { name: "4. Sri Lanka Insurance", val: "14.0B " },
      { name: "5. Ports Authority", val: "9.0B " }
    ]
  },
  Levy: {
    title: "TOP 5 CONTRIBUTORS (LEVY)",
    items: [
      { name: "1. Airport & Aviation Services", val: "8.5B " },
      { name: "2. Ports Authority", val: "7.0B " },
      { name: "3. Development Lotteries Board", val: "4.2B " },
      { name: "4. National Lotteries Board", val: "3.3B " },
      { name: "5. State Pharmaceuticals", val: "2.0B " }
    ]
  },
  Dividend: {
    title: "TOP 5 CONTRIBUTORS (DIVIDEND)",
    items: [
      { name: "1. Sri Lanka Telecom", val: "6.0B " },
      { name: "2. Lanka Hospitals", val: "3.5B " },
      { name: "3. Ceylon Electricity Board", val: "2.8B " },
      { name: "4. Litro Gas Lanka", val: "2.0B " },
      { name: "5. Milco (Pvt) Ltd", val: "1.2B " }
    ]
  }
};

let currentGovtKey = '';

/**
 * Initializes and injects the Government Revenue Component into the main dashboard container
 */
function initGovtRevenueChart(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <style>
      .govt-rev-wrapper {
        display: flex;
        flex-direction: column;
        gap: 14px;
      }
      .govt-stream-card {
        background: #ffffff;
        border: 1px solid var(--border-color);
        border-radius: 8px;
        padding: 12px 14px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        transition: border-color 0.15s ease, box-shadow 0.15s ease;
      }
      .govt-stream-card.active, .govt-stream-card:hover {
        border-color: var(--primary-blue);
        box-shadow: 0 2px 6px rgba(0,0,0,0.04);
      }
      .govt-stream-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .govt-stream-title {
        font-size: 13px;
        font-weight: 700;
        color: var(--text-primary);
      }
      .govt-stream-big-val {
        font-size: 17px;
        font-weight: 800;
        //color: var(--primary-blue);
      }
      .govt-sub-badge-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 8px;
      }
      .govt-sub-badge {
        font-size: 11px;
        padding: 6px 8px;
        border-radius: 6px;
        background: var(--accent-bg);
        border: 1px solid var(--border-color);
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 3px;
        transition: all 0.15s ease;
      }
      .govt-sub-badge:hover {
        transform: translateY(-1px);
        box-shadow: 0 2px 5px rgba(0,0,0,0.06);
        border-color: var(--primary-blue);
      }
      .govt-sub-badge.strat-prof { border-left: 4px solid var(--strat-color); }
      .govt-sub-badge.strat-loss { border-left: 4px solid var(--danger-red); }
      .govt-sub-badge.nonstrat-prof { border-left: 4px solid #3b82f6; }
      .govt-sub-badge.nonstrat-loss { border-left: 4px solid var(--nonstrat-color); }

      .govt-badge-label {
        font-size: 10px;
        font-weight: 600;
        color: var(--text-muted);
      }
      .govt-badge-val {
        font-size: 13px;
        font-weight: 800;
        color: var(--text-primary);
      }

      /* Variance Pills for Deficits and Surpluses */
      .govt-variance-pill {
        font-size: 10px;
        font-weight: 700;
        padding: 2px 6px;
        border-radius: 4px;
        margin-top: 3px;
        cursor: pointer;
        display: inline-block;
      }
      .govt-variance-pill.deficit {
        background: #fee2e2;
        color: var(--danger-red);
        border: 1px solid #fecaca;
      }
      .govt-variance-pill.surplus {
        background: #dcfce7;
        color: var(--strat-color);
        border: 1px solid #bbf7d0;
      }
    </style>

    <div class="govt-rev-wrapper">
      
      <!-- 1. VAT, Duties & Other -->
      <div class="govt-stream-card active" onclick="selectGovtTop5('VAT', this)">
        <div class="govt-stream-header">
          <span class="govt-stream-title">• VAT, Duties & Other</span>
          <span class="govt-stream-big-val">145.0B </span>
        </div>
        <div class="govt-sub-badge-grid">
          <div class="govt-sub-badge strat-prof" onclick="openGovtModal('VAT,Duties & Others (Strategic SOEs -Net Profit)', event)">
            <span class="govt-badge-label">Strategic SOEs - Net Profit</span>
            <span class="govt-badge-val">65.0B</span>
          </div>
          <div class="govt-sub-badge strat-loss" onclick="openGovtModal('VAT,Duties & Others (Strategic SOEs -Net Loss)', event)">
            <span class="govt-badge-label">Strategic SOEs - Net Loss</span>
            <span class="govt-badge-val">73.5B</span>
          </div>
          <div class="govt-sub-badge nonstrat-prof" onclick="openGovtModal('VAT,Duties & Others (Non-Strategic SOEs -Net Profit)', event)">
            <span class="govt-badge-label">Non-Strategic SOEs - Net Profit</span>
            <span class="govt-badge-val">5.5B</span>
          </div>
          <div class="govt-sub-badge nonstrat-loss" onclick="openGovtModal('VAT,Duties & Others (Non-Strategic SOEs -Net Loss)', event)">
            <span class="govt-badge-label">Non-Strategic SOEs - Net Loss</span>
            <span class="govt-badge-val">1.0B</span>
          </div>
        </div>
      </div>

      <!-- 2. Corporate Income Tax (CIT) -->
      <div class="govt-stream-card" onclick="selectGovtTop5('CIT', this)">
        <div class="govt-stream-header">
          <span class="govt-stream-title">• Corporate Income Tax (CIT)</span>
          <span class="govt-stream-big-val">110.0B </span>
        </div>
        <div class="govt-sub-badge-grid">
          <div class="govt-sub-badge strat-prof" onclick="openGovtModal('Corporate Income Tax (CIT)  (Strategic SOEs -Net Profit)', event)">
            <span class="govt-badge-label">Strategic SOEs - Net Profit</span>
            <span class="govt-badge-val">95.5B</span>
          </div>
          <div class="govt-sub-badge strat-loss" onclick="openGovtModal('Corporate Income Tax (CIT)  (Strategic SOEs -Net Loss)', event)">
            <span class="govt-badge-label">Strategic SOEs - Net Loss</span>
            <span class="govt-badge-val">1.0B</span>
          </div>
          <div class="govt-sub-badge nonstrat-prof" onclick="openGovtModal('Corporate Income Tax (CIT)  (Non-Strategic SOEs -Net Profit)', event)">
            <span class="govt-badge-label">Non-Strategic SOEs - Net Profit</span>
            <span class="govt-badge-val">12.5B</span>
          </div>
          <div class="govt-sub-badge nonstrat-loss" onclick="openGovtModal('Corporate Income Tax (CIT)  (Non-Strategic SOEs -Net Loss)', event)">
            <span class="govt-badge-label">Non-Strategic SOEs - Net Loss</span>
            <span class="govt-badge-val">1.0B</span>
          </div>
        </div>
      </div>

      <!-- 3. Levy Stream with Category Deficits -->
      <div class="govt-stream-card" onclick="selectGovtTop5('Levy', this)">
        <div class="govt-stream-header">
          <span class="govt-stream-title">• Levy</span>
          <span class="govt-stream-big-val">25.0B </span>
        </div>
        <div class="govt-sub-badge-grid">
          <div class="govt-sub-badge strat-prof" onclick="openGovtModal('Levy  (Strategic SOEs -Net Profit)', event)">
            <span class="govt-badge-label">Strategic SOEs - Net Profit</span>
            <span class="govt-badge-val">16.0B</span>
            <span class="govt-variance-pill deficit" onclick="openGovtModal('Levy Deficit (Strategic SOEs - Net Profit)', event)">Deficit: 1.0B ⓘ</span>
          </div>
          <div class="govt-sub-badge strat-loss" onclick="openGovtModal('Levy  (Strategic SOEs -Net Loss)', event)">
            <span class="govt-badge-label">Strategic SOEs - Net Loss</span>
            <span class="govt-badge-val">2.0B</span>
            <span class="govt-variance-pill deficit" onclick="openGovtModal('Levy Deficit (Strategic SOEs - Net Loss)', event)">Deficit: 2.0B ⓘ</span>
          </div>
          <div class="govt-sub-badge nonstrat-prof" onclick="openGovtModal('Levy  (Non-Strategic SOEs -Net Profit)', event)">
            <span class="govt-badge-label">Non-Strategic SOEs - Net Profit</span>
            <span class="govt-badge-val">6.0B</span>
            <span class="govt-variance-pill deficit" onclick="openGovtModal('Levy Deficit (Non-Strategic SOEs - Net Profit)', event)">Deficit: 0.7B ⓘ</span>
          </div>
          <div class="govt-sub-badge nonstrat-loss" onclick="openGovtModal('Levy  (Non-Strategic SOEs -Net Loss)', event)">
            <span class="govt-badge-label">Non-Strategic SOEs - Net Loss</span>
            <span class="govt-badge-val">1.0B</span>
            <span class="govt-variance-pill deficit" onclick="openGovtModal('Levy Deficit (Non-Strategic SOEs - Net Loss)', event)">Deficit: 1.3B ⓘ</span>
          </div>
        </div>
      </div>

      <!-- 4. Dividend Stream with Category Surpluses -->
      <div class="govt-stream-card" onclick="selectGovtTop5('Dividend', this)">
        <div class="govt-stream-header">
          <span class="govt-stream-title">• Dividend</span>
          <span class="govt-stream-big-val">15.5B </span>
        </div>
        <div class="govt-sub-badge-grid">
          <div class="govt-sub-badge strat-prof" onclick="openGovtModal('Dividend (Strategic SOEs - Net Profit)', event)">
            <span class="govt-badge-label">Strategic SOEs - Net Profit</span>
            <span class="govt-badge-val">11.5B</span>
            <span class="govt-variance-pill surplus" onclick="openGovtModal('Dividend Surplus (Strategic SOEs - Net Profit)', event)">Surplus: 1.0B ⓘ</span>
          </div>
          <div class="govt-sub-badge strat-loss" onclick="openGovtModal('Dividend (Strategic SOEs - Net Loss)', event)">
            <span class="govt-badge-label">Strategic SOEs - Net Loss</span>
            <span class="govt-badge-val">1.0B</span>
            <span class="govt-variance-pill surplus" onclick="openGovtModal('Dividend Surplus (Strategic SOEs - Net Loss)', event)">Surplus: 0.1B ⓘ</span>
          </div>
          <div class="govt-sub-badge nonstrat-prof" onclick="openGovtModal('Dividend (Non-Strategic SOEs - Net Profit)', event)">
            <span class="govt-badge-label">Non-Strategic SOEs - Net Profit</span>
            <span class="govt-badge-val">2.0B</span>
            <span class="govt-variance-pill surplus" onclick="openGovtModal('Dividend Surplus (Non-Strategic SOEs - Net Profit)', event)">Surplus: 0.2B ⓘ</span>
          </div>
          <div class="govt-sub-badge nonstrat-loss" onclick="openGovtModal('Dividend (Non-Strategic SOEs - Net Loss)', event)">
            <span class="govt-badge-label">Non-Strategic SOEs - Net Loss</span>
            <span class="govt-badge-val">1.0B</span>
            <span class="govt-variance-pill surplus" onclick="openGovtModal('Dividend Surplus (Non-Strategic SOEs - Net Loss)', event)">Surplus: 0.05B ⓘ</span>
          </div>
        </div>
      </div>

      

    </div>

    <!-- Government Revenue Dedicated Popup Modal -->
    <div class="modal-overlay" id="govtRevenueModal">
      <div class="modal">
        <div class="modal-header">
          <h3 id="govtRevenueModalTitle" style="margin:0;">Government Revenue Register</h3>
          <button style="border:none; background:none; font-size:18px; cursor:pointer;" onclick="closeGovtModal()">&times;</button>
        </div>
        <p style="color: var(--text-muted); font-size: 11px;">
          Breakdown of individual state-owned entities contributing to this fiscal stream or target variance.
        </p>

        <table>
          <thead id="govtRevenueTableHead"></thead>
          <tbody id="govtRevenueTableBody"></tbody>
        </table>
      </div>
    </div>
  `;
}

// Top 5 Dynamic Switcher
function selectGovtTop5(category, element) {
  document.querySelectorAll('.govt-stream-card').forEach(card => card.classList.remove('active'));
  if (element) element.classList.add('active');

  const data = govtTop5Data[category];
  if (!data) return;

  document.getElementById('govt-top5-category-title').innerText = data.title;
  const listContainer = document.getElementById('govt-top5-list-container');
  listContainer.innerHTML = '';

  data.items.forEach(item => {
    const li = document.createElement('li');
    li.className = 'top5-item';
    li.innerHTML = `<span>${item.name}</span><span style="font-weight: 700;">${item.val}</span>`;
    listContainer.appendChild(li);
  });
}

// Open Govt Popup Modal
function openGovtModal(keyTitle, event) {
  if (event) event.stopPropagation();

  currentGovtKey = keyTitle;
  document.getElementById('govtRevenueModalTitle').innerText = keyTitle;

  const thead = document.getElementById('govtRevenueTableHead');
  const tbody = document.getElementById('govtRevenueTableBody');
  tbody.innerHTML = '';

  const items = govtRevenueData[keyTitle] || [];
  const isVariance = keyTitle.includes('Deficit') || keyTitle.includes('Surplus');

  if (isVariance) {
    thead.innerHTML = `
      <tr>
        <th>SOE Name</th>
        <th>Target Amount</th>
        <th>Actual Received</th>
        <th>Variance Value</th>
      </tr>
    `;
    items.forEach(item => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><strong>${item.name}</strong></td>
        <td>${item.target}</td>
        <td>${item.actual}</td>
        <td><span class="badge ${keyTitle.includes('Deficit') ? 'badge-danger' : 'badge-success'}">${item.variance}</span></td>
      `;
      tbody.appendChild(tr);
    });
  } else {
    thead.innerHTML = `
      <tr>
        <th>SOE Name</th>
        <th>Contribution Value</th>
      </tr>
    `;
    items.forEach(item => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><strong>${item.name}</strong></td>
        <td style="font-weight:700; color:var(--primary-blue);">${item.value}</td>
      `;
      tbody.appendChild(tr);
    });
  }

  document.getElementById('govtRevenueModal').style.display = 'flex';
}

function closeGovtModal() {
  document.getElementById('govtRevenueModal').style.display = 'none';
}