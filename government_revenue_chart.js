/**
 * Government Revenue & Contributions Component for PEDMIS Dashboard
 * Renders VAT/Duties, CIT, Levy, and Dividend streams.
 * Features:
 * - 5-Year Historical & Current Performance Trends (FY 2022 - FY 2026) for all modal popups.
 * - Target vs Actual Variance breakdowns across all 5 financial years.
 * - Multi-sheet Excel Workbook generator (4 Sheets: VAT, CIT, Levy, Dividend) with full 5-year data.
 */

// Comprehensive Data Store for Government Revenue Streams & Variances (5-Year Trends)
const govtRevenueData = {
  // --- VAT, DUTIES & OTHER ---
  'VAT,Duties & Others (Strategic SOEs -Net Profit)': [
    { name: 'Bank of Ceylon', category: 'Strategic Profitable', y2022: '18.0B', y2023: '20.5B', y2024: '22.0B', y2025: '23.5B', y2026: '24.5B' },
    { name: 'People\'s Bank', category: 'Strategic Profitable', y2022: '14.0B', y2023: '16.2B', y2024: '17.8B', y2025: '19.0B', y2026: '20.0B' },
    { name: 'Airport & Aviation Services Ltd', category: 'Strategic Profitable', y2022: '12.0B', y2023: '14.0B', y2024: '15.5B', y2025: '17.0B', y2026: '18.0B' },
    { name: 'Sri Lanka Telecom PLC', category: 'Strategic Profitable', y2022: '9.0B', y2023: '10.2B', y2024: '11.0B', y2025: '11.8B', y2026: '12.5B' },
    { name: 'National Savings Bank', category: 'Strategic Profitable', y2022: '7.5B', y2023: '8.2B', y2024: '9.0B', y2025: '9.5B', y2026: '10.0B' }
  ],
  'VAT,Duties & Others (Strategic SOEs -Net Loss)': [
    { name: 'Ceylon Petroleum Corporation (CPC)', category: 'Strategic Loss', y2022: '48.0B', y2023: '54.0B', y2024: '59.0B', y2025: '62.5B', y2026: '65.0B' },
    { name: 'Ceylon Electricity Board (CEB)', category: 'Strategic Loss', y2022: '5.5B', y2023: '6.5B', y2024: '7.2B', y2025: '8.0B', y2026: '8.5B' }
  ],
  'VAT,Duties & Others (Non-Strategic SOEs -Net Profit)': [
    { name: 'National Water Supply & Drainage Board', category: 'Non-Strategic Profitable', y2022: '2.8B', y2023: '3.2B', y2024: '3.6B', y2025: '4.0B', y2026: '4.2B' },
    { name: 'Lanka Hospitals PLC', category: 'Non-Strategic Profitable', y2022: '1.5B', y2023: '1.8B', y2024: '2.0B', y2025: '2.1B', y2026: '2.3B' },
    { name: 'Litro Gas Lanka Ltd', category: 'Non-Strategic Profitable', y2022: '0.6B', y2023: '0.7B', y2024: '0.8B', y2025: '0.9B', y2026: '1.0B' }
  ],
  'VAT,Duties & Others (Non-Strategic SOEs -Net Loss)': [
    { name: 'Sri Lanka Transport Board (SLTB)', category: 'Non-Strategic Loss', y2022: '0.6B', y2023: '0.7B', y2024: '0.8B', y2025: '0.9B', y2026: '1.0B' }
  ],

  // --- CORPORATE INCOME TAX (CIT) ---
  'Corporate Income Tax (CIT)  (Strategic SOEs -Net Profit)': [
    { name: 'Bank of Ceylon', category: 'Strategic Profitable', y2022: '28.0B', y2023: '31.5B', y2024: '34.0B', y2025: '36.5B', y2026: '38.5B' },
    { name: 'People\'s Bank', category: 'Strategic Profitable', y2022: '21.0B', y2023: '23.5B', y2024: '25.8B', y2025: '27.5B', y2026: '29.0B' },
    { name: 'National Savings Bank', category: 'Strategic Profitable', y2022: '14.0B', y2023: '15.8B', y2024: '17.2B', y2025: '18.5B', y2026: '19.5B' },
    { name: 'Sri Lanka Insurance Corporation', category: 'Strategic Profitable', y2022: '10.0B', y2023: '11.2B', y2024: '12.4B', y2025: '13.2B', y2026: '14.0B' }
  ],
  'Corporate Income Tax (CIT)  (Strategic SOEs -Net Loss)': [
    { name: 'SriLankan Airlines (Withholding & Adjustments)', category: 'Strategic Loss', y2022: '0.5B', y2023: '0.6B', y2024: '0.8B', y2025: '0.9B', y2026: '1.0B' }
  ],
  'Corporate Income Tax (CIT)  (Non-Strategic SOEs -Net Profit)': [
    { name: 'Sri Lanka Ports Authority', category: 'Non-Strategic Profitable', y2022: '6.5B', y2023: '7.2B', y2024: '8.0B', y2025: '8.5B', y2026: '9.0B' },
    { name: 'Litro Gas Lanka Ltd', category: 'Non-Strategic Profitable', y2022: '2.2B', y2023: '2.6B', y2024: '3.0B', y2025: '3.2B', y2026: '3.5B' }
  ],
  'Corporate Income Tax (CIT)  (Non-Strategic SOEs -Net Loss)': [
    { name: 'Spices & Allied Products Board', category: 'Non-Strategic Loss', y2022: '0.4B', y2023: '0.5B', y2024: '0.7B', y2025: '0.8B', y2026: '1.0B' }
  ],

  // --- LEVY STREAM REVENUE ---
  'Levy  (Strategic SOEs -Net Profit)': [
    { name: 'Airport & Aviation Services Ltd', category: 'Strategic Profitable', y2022: '6.0B', y2023: '6.8B', y2024: '7.4B', y2025: '8.0B', y2026: '8.5B' },
    { name: 'Development Lotteries Board', category: 'Strategic Profitable', y2022: '3.0B', y2023: '3.4B', y2024: '3.8B', y2025: '4.0B', y2026: '4.2B' },
    { name: 'National Lotteries Board', category: 'Strategic Profitable', y2022: '2.4B', y2023: '2.7B', y2024: '2.9B', y2025: '3.1B', y2026: '3.3B' }
  ],
  'Levy  (Strategic SOEs -Net Loss)': [
    { name: 'Ceylon Electricity Board', category: 'Strategic Loss', y2022: '1.2B', y2023: '1.4B', y2024: '1.6B', y2025: '1.8B', y2026: '2.0B' }
  ],
  'Levy  (Non-Strategic SOEs -Net Profit)': [
    { name: 'Ports Authority (Levy Share)', category: 'Non-Strategic Profitable', y2022: '4.2B', y2023: '4.8B', y2024: '5.2B', y2025: '5.6B', y2026: '6.0B' }
  ],
  'Levy  (Non-Strategic SOEs -Net Loss)': [
    { name: 'State Engineering Corporation', category: 'Non-Strategic Loss', y2022: '0.6B', y2023: '0.7B', y2024: '0.8B', y2025: '0.9B', y2026: '1.0B' }
  ],

  // --- LEVY DEFICITS PER SUB-CATEGORY (5-Year Variance Data) ---
  'Levy Deficit (Strategic SOEs - Net Profit)': [
    { name: 'Civil Aviation Authority of Sri Lanka', y2022: '0.6B Deficit', y2023: '0.8B Deficit', y2024: '0.9B Deficit', y2025: '1.0B Deficit', y2026: '1.0B Deficit' }
  ],
  'Levy Deficit (Strategic SOEs - Net Loss)': [
    { name: 'Water Resources Board', y2022: '1.2B Deficit', y2023: '1.5B Deficit', y2024: '1.8B Deficit', y2025: '1.9B Deficit', y2026: '2.0B Deficit' }
  ],
  'Levy Deficit (Non-Strategic SOEs - Net Profit)': [
    { name: 'State Pharmaceuticals Corporation', y2022: '0.4B Deficit', y2023: '0.5B Deficit', y2024: '0.6B Deficit', y2025: '0.65B Deficit', y2026: '0.7B Deficit' }
  ],
  'Levy Deficit (Non-Strategic SOEs - Net Loss)': [
    { name: 'National Transport Commission', y2022: '0.8B Deficit', y2023: '0.9B Deficit', y2024: '1.1B Deficit', y2025: '1.2B Deficit', y2026: '1.3B Deficit' }
  ],

  // --- DIVIDEND STREAM REVENUE ---
  'Dividend (Strategic SOEs - Net Profit)': [
    { name: 'Sri Lanka Telecom PLC', category: 'Strategic Profitable', y2022: '4.2B', y2023: '4.8B', y2024: '5.2B', y2025: '5.6B', y2026: '6.0B' },
    { name: 'Lanka Hospitals PLC', category: 'Strategic Profitable', y2022: '2.4B', y2023: '2.7B', y2024: '3.0B', y2025: '3.2B', y2026: '3.5B' },
    { name: 'Litro Gas Lanka Ltd', category: 'Strategic Profitable', y2022: '1.2B', y2023: '1.4B', y2024: '1.6B', y2025: '1.8B', y2026: '2.0B' }
  ],
  'Dividend (Strategic SOEs - Net Loss)': [
    { name: 'Ceylon Petroleum Corporation (Residual Unit)', category: 'Strategic Loss', y2022: '0.4B', y2023: '0.5B', y2024: '0.7B', y2025: '0.8B', y2026: '1.0B' }
  ],
  'Dividend (Non-Strategic SOEs - Net Profit)': [
    { name: 'Ceylon Electricity Board (LECO Share)', category: 'Non-Strategic Profitable', y2022: '1.1B', y2023: '1.3B', y2024: '1.5B', y2025: '1.6B', y2026: '1.8B' },
    { name: 'Milco (Pvt) Ltd', category: 'Non-Strategic Profitable', y2022: '0.1B', y2023: '0.12B', y2024: '0.15B', y2025: '0.18B', y2026: '0.2B' }
  ],
  'Dividend (Non-Strategic SOEs - Net Loss)': [
    { name: 'Kurunegala Plantations Ltd', category: 'Non-Strategic Loss', y2022: '0.5B', y2023: '0.6B', y2024: '0.7B', y2025: '0.85B', y2026: '1.0B' }
  ],

  // --- DIVIDEND SURPLUSES PER SUB-CATEGORY (5-Year Variance Data) ---
  'Dividend Surplus (Strategic SOEs - Net Profit)': [
    { name: 'Sri Lanka Telecom PLC', y2022: '0.5B Surplus', y2023: '0.6B Surplus', y2024: '0.8B Surplus', y2025: '0.9B Surplus', y2026: '1.0B Surplus' }
  ],
  'Dividend Surplus (Strategic SOEs - Net Loss)': [
    { name: 'Ceylon Electricity Board Unit', y2022: '0.04B Surplus', y2023: '0.06B Surplus', y2024: '0.08B Surplus', y2025: '0.09B Surplus', y2026: '0.1B Surplus' }
  ],
  'Dividend Surplus (Non-Strategic SOEs - Net Profit)': [
    { name: 'Lanka Hospitals PLC', y2022: '0.1B Surplus', y2023: '0.12B Surplus', y2024: '0.15B Surplus', y2025: '0.18B Surplus', y2026: '0.2B Surplus' }
  ],
  'Dividend Surplus (Non-Strategic SOEs - Net Loss)': [
    { name: 'Chilaw Plantations Ltd', y2022: '0.02B Surplus', y2023: '0.03B Surplus', y2024: '0.04B Surplus', y2025: '0.045B Surplus', y2026: '0.05B Surplus' }
  ]
};

let currentGovtKey = '';

function initGovtRevenueChart(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <style>
      .govt-rev-wrapper {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .govt-export-toolbar {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-bottom: 2px;
      }
      .btn-export-govt {
        background: var(--primary-blue);
        color: #ffffff;
        border: 1px solid var(--border-color);
        padding: 5px 12px;
        border-radius: 6px;
        font-size: 11px;
        font-weight: 700;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 6px;
        transition: background 0.15s ease;
      }
      .btn-export-govt:hover {
        background: #6866e2;
      }
      .govt-stream-card {
        background: #ffffff;
        border: 1px solid var(--border-color);
        border-radius: 8px;
        padding: 10px 14px;
        display: flex;
        flex-direction: column;
        gap: 8px;
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
        font-size: 12px;
        font-weight: 700;
        color: var(--text-primary);
      }
      .govt-stream-big-val {
        font-size: 15px;
        font-weight: 800;
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
        font-size: 12px;
        font-weight: 800;
        color: var(--text-primary);
      }

      .govt-variance-pill {
        font-size: 9px;
        font-weight: 700;
        padding: 2px 6px;
        border-radius: 4px;
        margin-top: 2px;
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
      
      <!-- Export Multi-Sheet Excel Toolbar -->
      <div class="govt-export-toolbar">
        <button class="btn-export-govt" onclick="exportGovtRevenueMultiSheetExcel()">
          📥 Export Government Revenue Report (.xls)
        </button>
      </div>

      <!-- 1. VAT, Duties & Other -->
      <div class="govt-stream-card active">
        <div class="govt-stream-header">
          <span class="govt-stream-title">• VAT, Duties & Other</span>
          <span class="govt-stream-big-val">145.0B</span>
        </div>
        <div class="govt-sub-badge-grid">
          <div class="govt-sub-badge strat-prof" onclick="openGovtModal('VAT,Duties & Others (Strategic SOEs -Net Profit)', event)">
            <span class="govt-badge-label">Strategic Profit</span>
            <span class="govt-badge-val">65.0B ⓘ</span>
          </div>
          <div class="govt-sub-badge strat-loss" onclick="openGovtModal('VAT,Duties & Others (Strategic SOEs -Net Loss)', event)">
            <span class="govt-badge-label">Strategic Loss</span>
            <span class="govt-badge-val">73.5B ⓘ</span>
          </div>
          <div class="govt-sub-badge nonstrat-prof" onclick="openGovtModal('VAT,Duties & Others (Non-Strategic SOEs -Net Profit)', event)">
            <span class="govt-badge-label">Non-Strat Profit</span>
            <span class="govt-badge-val">5.5B ⓘ</span>
          </div>
          <div class="govt-sub-badge nonstrat-loss" onclick="openGovtModal('VAT,Duties & Others (Non-Strategic SOEs -Net Loss)', event)">
            <span class="govt-badge-label">Non-Strat Loss</span>
            <span class="govt-badge-val">1.0B ⓘ</span>
          </div>
        </div>
      </div>

      <!-- 2. Corporate Income Tax (CIT) -->
      <div class="govt-stream-card">
        <div class="govt-stream-header">
          <span class="govt-stream-title">• Corporate Income Tax (CIT)</span>
          <span class="govt-stream-big-val">110.0B</span>
        </div>
        <div class="govt-sub-badge-grid">
          <div class="govt-sub-badge strat-prof" onclick="openGovtModal('Corporate Income Tax (CIT)  (Strategic SOEs -Net Profit)', event)">
            <span class="govt-badge-label">Strategic Profit</span>
            <span class="govt-badge-val">95.5B ⓘ</span>
          </div>
          <div class="govt-sub-badge strat-loss" onclick="openGovtModal('Corporate Income Tax (CIT)  (Strategic SOEs -Net Loss)', event)">
            <span class="govt-badge-label">Strategic Loss</span>
            <span class="govt-badge-val">1.0B ⓘ</span>
          </div>
          <div class="govt-sub-badge nonstrat-prof" onclick="openGovtModal('Corporate Income Tax (CIT)  (Non-Strategic SOEs -Net Profit)', event)">
            <span class="govt-badge-label">Non-Strat Profit</span>
            <span class="govt-badge-val">12.5B ⓘ</span>
          </div>
          <div class="govt-sub-badge nonstrat-loss" onclick="openGovtModal('Corporate Income Tax (CIT)  (Non-Strategic SOEs -Net Loss)', event)">
            <span class="govt-badge-label">Non-Strat Loss</span>
            <span class="govt-badge-val">1.0B ⓘ</span>
          </div>
        </div>
      </div>

      <!-- 3. Levy Stream with Category Deficits -->
      <div class="govt-stream-card">
        <div class="govt-stream-header">
          <span class="govt-stream-title">• Levy</span>
          <span class="govt-stream-big-val">25.0B</span>
        </div>
        <div class="govt-sub-badge-grid">
          <div class="govt-sub-badge strat-prof" onclick="openGovtModal('Levy  (Strategic SOEs -Net Profit)', event)">
            <span class="govt-badge-label">Strategic Profit</span>
            <span class="govt-badge-val">16.0B ⓘ</span>
            <span class="govt-variance-pill deficit" onclick="openGovtModal('Levy Deficit (Strategic SOEs - Net Profit)', event)">Deficit: 1.0B</span>
          </div>
          <div class="govt-sub-badge strat-loss" onclick="openGovtModal('Levy  (Strategic SOEs -Net Loss)', event)">
            <span class="govt-badge-label">Strategic Loss</span>
            <span class="govt-badge-val">2.0B ⓘ</span>
            <span class="govt-variance-pill deficit" onclick="openGovtModal('Levy Deficit (Strategic SOEs - Net Loss)', event)">Deficit: 2.0B</span>
          </div>
          <div class="govt-sub-badge nonstrat-prof" onclick="openGovtModal('Levy  (Non-Strategic SOEs -Net Profit)', event)">
            <span class="govt-badge-label">Non-Strat Profit</span>
            <span class="govt-badge-val">6.0B ⓘ</span>
            <span class="govt-variance-pill deficit" onclick="openGovtModal('Levy Deficit (Non-Strategic SOEs - Net Profit)', event)">Deficit: 0.7B</span>
          </div>
          <div class="govt-sub-badge nonstrat-loss" onclick="openGovtModal('Levy  (Non-Strategic SOEs -Net Loss)', event)">
            <span class="govt-badge-label">Non-Strat Loss</span>
            <span class="govt-badge-val">1.0B ⓘ</span>
            <span class="govt-variance-pill deficit" onclick="openGovtModal('Levy Deficit (Non-Strategic SOEs - Net Loss)', event)">Deficit: 1.3B</span>
          </div>
        </div>
      </div>

      <!-- 4. Dividend Stream with Category Surpluses -->
      <div class="govt-stream-card">
        <div class="govt-stream-header">
          <span class="govt-stream-title">• Dividend</span>
          <span class="govt-stream-big-val">15.5B</span>
        </div>
        <div class="govt-sub-badge-grid">
          <div class="govt-sub-badge strat-prof" onclick="openGovtModal('Dividend (Strategic SOEs - Net Profit)', event)">
            <span class="govt-badge-label">Strategic Profit</span>
            <span class="govt-badge-val">11.5B ⓘ</span>
            <span class="govt-variance-pill surplus" onclick="openGovtModal('Dividend Surplus (Strategic SOEs - Net Profit)', event)">Surplus: 1.0B</span>
          </div>
          <div class="govt-sub-badge strat-loss" onclick="openGovtModal('Dividend (Strategic SOEs - Net Loss)', event)">
            <span class="govt-badge-label">Strategic Loss</span>
            <span class="govt-badge-val">1.0B ⓘ</span>
            <span class="govt-variance-pill surplus" onclick="openGovtModal('Dividend Surplus (Strategic SOEs - Net Loss)', event)">Surplus: 0.1B</span>
          </div>
          <div class="govt-sub-badge nonstrat-prof" onclick="openGovtModal('Dividend (Non-Strategic SOEs - Net Profit)', event)">
            <span class="govt-badge-label">Non-Strat Profit</span>
            <span class="govt-badge-val">2.0B ⓘ</span>
            <span class="govt-variance-pill surplus" onclick="openGovtModal('Dividend Surplus (Non-Strategic SOEs - Net Profit)', event)">Surplus: 0.2B</span>
          </div>
          <div class="govt-sub-badge nonstrat-loss" onclick="openGovtModal('Dividend (Non-Strategic SOEs - Net Loss)', event)">
            <span class="govt-badge-label">Non-Strat Loss</span>
            <span class="govt-badge-val">1.0B ⓘ</span>
            <span class="govt-variance-pill surplus" onclick="openGovtModal('Dividend Surplus (Non-Strategic SOEs - Net Loss)', event)">Surplus: 0.05B</span>
          </div>
        </div>
      </div>

    </div>

    <!-- Government Revenue Dedicated Popup Modal (5-Year Trend View) -->
    <div class="modal-overlay" id="govtRevenueModal">
      <div class="modal" style="width: 780px; max-width: 95%;">
        <div class="modal-header">
          <h3 id="govtRevenueModalTitle" style="margin:0;">Government Revenue Register (5-Year Trend)</h3>
          <button style="border:none; background:none; font-size:18px; cursor:pointer;" onclick="closeGovtModal()">&times;</button>
        </div>
        <p style="color: var(--text-muted); font-size: 11px;">
          Comprehensive breakdown of entities and contribution values across past 4 financial years and current year.
        </p>

        <table>
          <thead id="govtRevenueTableHead"></thead>
          <tbody id="govtRevenueTableBody"></tbody>
        </table>
      </div>
    </div>
  `;
}

// Open Govt Popup Modal with 5-Year Data
function openGovtModal(keyTitle, event) {
  if (event) event.stopPropagation();

  currentGovtKey = keyTitle;
  document.getElementById('govtRevenueModalTitle').innerText = keyTitle + ' (5-Year Trend)';

  const thead = document.getElementById('govtRevenueTableHead');
  const tbody = document.getElementById('govtRevenueTableBody');
  tbody.innerHTML = '';

  const items = govtRevenueData[keyTitle] || [];
  const isVariance = keyTitle.includes('Deficit') || keyTitle.includes('Surplus');

  if (isVariance) {
    thead.innerHTML = `
      <tr>
        <th>SOE Name</th>
        <th>FY 2022</th>
        <th>FY 2023</th>
        <th>FY 2024</th>
        <th>FY 2025</th>
        <th>FY 2026 (Current)</th>
      </tr>
    `;
    items.forEach(item => {
      const tr = document.createElement('tr');
      const badgeClass = keyTitle.includes('Deficit') ? 'badge-danger' : 'badge-success';
      tr.innerHTML = `
        <td><strong>${item.name}</strong></td>
        <td><span class="badge ${badgeClass}">${item.y2022}</span></td>
        <td><span class="badge ${badgeClass}">${item.y2023}</span></td>
        <td><span class="badge ${badgeClass}">${item.y2024}</span></td>
        <td><span class="badge ${badgeClass}">${item.y2025}</span></td>
        <td><span class="badge ${badgeClass}">${item.y2026}</span></td>
      `;
      tbody.appendChild(tr);
    });
  } else {
    thead.innerHTML = `
      <tr>
        <th>SOE Name</th>
        <th>Classification</th>
        <th>FY 2022</th>
        <th>FY 2023</th>
        <th>FY 2024</th>
        <th>FY 2025</th>
        <th>FY 2026 (Current)</th>
      </tr>
    `;
    items.forEach(item => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><strong>${item.name}</strong></td>
        <td style="color: var(--text-muted);">${item.category}</td>
        <td>${item.y2022}</td>
        <td>${item.y2023}</td>
        <td>${item.y2024}</td>
        <td>${item.y2025}</td>
        <td style="font-weight:700; color:var(--primary-blue);">${item.y2026}</td>
      `;
      tbody.appendChild(tr);
    });
  }

  document.getElementById('govtRevenueModal').style.display = 'flex';
}

function closeGovtModal() {
  document.getElementById('govtRevenueModal').style.display = 'none';
}

// Multi-Worksheet XML Excel Generator (Sheet 1: VAT, Sheet 2: CIT, Sheet 3: Levy, Sheet 4: Dividend) with 5-Year Trends
function exportGovtRevenueMultiSheetExcel() {
  const currentYear = typeof selectedYear !== 'undefined' ? selectedYear : '2025';

  const generateSimple5YearRows = (keys) => {
    let rowsXML = `
      <Row ss:StyleID="HeaderStyle">
        <Cell><Data ss:Type="String">SOE Name</Data></Cell>
        <Cell><Data ss:Type="String">Classification Group</Data></Cell>
        <Cell><Data ss:Type="String">FY 2022</Data></Cell>
        <Cell><Data ss:Type="String">FY 2023</Data></Cell>
        <Cell><Data ss:Type="String">FY 2024</Data></Cell>
        <Cell><Data ss:Type="String">FY 2025</Data></Cell>
        <Cell><Data ss:Type="String">FY 2026 (Current)</Data></Cell>
      </Row>`;

    keys.forEach(k => {
      const items = govtRevenueData[k] || [];
      items.forEach(item => {
        rowsXML += `
          <Row>
            <Cell ss:StyleID="BoldCell"><Data ss:Type="String">${item.name}</Data></Cell>
            <Cell><Data ss:Type="String">${item.category}</Data></Cell>
            <Cell ss:StyleID="NumberCell"><Data ss:Type="String">${item.y2022}</Data></Cell>
            <Cell ss:StyleID="NumberCell"><Data ss:Type="String">${item.y2023}</Data></Cell>
            <Cell ss:StyleID="NumberCell"><Data ss:Type="String">${item.y2024}</Data></Cell>
            <Cell ss:StyleID="NumberCell"><Data ss:Type="String">${item.y2025}</Data></Cell>
            <Cell ss:StyleID="NumberCell"><Data ss:Type="String">${item.y2026}</Data></Cell>
          </Row>`;
      });
    });
    return rowsXML;
  };

  const generateVariance5YearRows = (revKeys, varianceKeys, isDeficit) => {
    let rowsXML = `
      <Row ss:StyleID="SectionStyle"><Cell ss:MergeAcross="6"><Data ss:Type="String">1. 5-YEAR REVENUE CONTRIBUTIONS BY SOE</Data></Cell></Row>
      <Row ss:StyleID="HeaderStyle">
        <Cell><Data ss:Type="String">SOE Name</Data></Cell>
        <Cell><Data ss:Type="String">Classification Group</Data></Cell>
        <Cell><Data ss:Type="String">FY 2022</Data></Cell>
        <Cell><Data ss:Type="String">FY 2023</Data></Cell>
        <Cell><Data ss:Type="String">FY 2024</Data></Cell>
        <Cell><Data ss:Type="String">FY 2025</Data></Cell>
        <Cell><Data ss:Type="String">FY 2026 (Current)</Data></Cell>
      </Row>`;

    revKeys.forEach(k => {
      const items = govtRevenueData[k] || [];
      items.forEach(item => {
        rowsXML += `
          <Row>
            <Cell ss:StyleID="BoldCell"><Data ss:Type="String">${item.name}</Data></Cell>
            <Cell><Data ss:Type="String">${item.category}</Data></Cell>
            <Cell ss:StyleID="NumberCell"><Data ss:Type="String">${item.y2022}</Data></Cell>
            <Cell ss:StyleID="NumberCell"><Data ss:Type="String">${item.y2023}</Data></Cell>
            <Cell ss:StyleID="NumberCell"><Data ss:Type="String">${item.y2024}</Data></Cell>
            <Cell ss:StyleID="NumberCell"><Data ss:Type="String">${item.y2025}</Data></Cell>
            <Cell ss:StyleID="NumberCell"><Data ss:Type="String">${item.y2026}</Data></Cell>
          </Row>`;
      });
    });

    rowsXML += `
      <Row></Row>
      <Row ss:StyleID="SectionStyle"><Cell ss:MergeAcross="5"><Data ss:Type="String">2. 5-YEAR ${isDeficit ? 'ESTIMATED DEFICIT' : 'SURPLUS'} VARIANCE BREAKDOWN</Data></Cell></Row>
      <Row ss:StyleID="HeaderStyle">
        <Cell><Data ss:Type="String">SOE Name</Data></Cell>
        <Cell><Data ss:Type="String">FY 2022</Data></Cell>
        <Cell><Data ss:Type="String">FY 2023</Data></Cell>
        <Cell><Data ss:Type="String">FY 2024</Data></Cell>
        <Cell><Data ss:Type="String">FY 2025</Data></Cell>
        <Cell><Data ss:Type="String">FY 2026 (Current)</Data></Cell>
      </Row>`;

    varianceKeys.forEach(k => {
      const items = govtRevenueData[k] || [];
      items.forEach(item => {
        rowsXML += `
          <Row>
            <Cell ss:StyleID="BoldCell"><Data ss:Type="String">${item.name}</Data></Cell>
            <Cell ss:StyleID="${isDeficit ? 'DeficitCell' : 'SurplusCell'}"><Data ss:Type="String">${item.y2022}</Data></Cell>
            <Cell ss:StyleID="${isDeficit ? 'DeficitCell' : 'SurplusCell'}"><Data ss:Type="String">${item.y2023}</Data></Cell>
            <Cell ss:StyleID="${isDeficit ? 'DeficitCell' : 'SurplusCell'}"><Data ss:Type="String">${item.y2024}</Data></Cell>
            <Cell ss:StyleID="${isDeficit ? 'DeficitCell' : 'SurplusCell'}"><Data ss:Type="String">${item.y2025}</Data></Cell>
            <Cell ss:StyleID="${isDeficit ? 'DeficitCell' : 'SurplusCell'}"><Data ss:Type="String">${item.y2026}</Data></Cell>
          </Row>`;
      });
    });

    return rowsXML;
  };

  const vatKeys = [
    'VAT,Duties & Others (Strategic SOEs -Net Profit)',
    'VAT,Duties & Others (Strategic SOEs -Net Loss)',
    'VAT,Duties & Others (Non-Strategic SOEs -Net Profit)',
    'VAT,Duties & Others (Non-Strategic SOEs -Net Loss)'
  ];

  const citKeys = [
    'Corporate Income Tax (CIT)  (Strategic SOEs -Net Profit)',
    'Corporate Income Tax (CIT)  (Strategic SOEs -Net Loss)',
    'Corporate Income Tax (CIT)  (Non-Strategic SOEs -Net Profit)',
    'Corporate Income Tax (CIT)  (Non-Strategic SOEs -Net Loss)'
  ];

  const levyRevKeys = [
    'Levy  (Strategic SOEs -Net Profit)',
    'Levy  (Strategic SOEs -Net Loss)',
    'Levy  (Non-Strategic SOEs -Net Profit)',
    'Levy  (Non-Strategic SOEs -Net Loss)'
  ];
  const levyDeficitKeys = [
    'Levy Deficit (Strategic SOEs - Net Profit)',
    'Levy Deficit (Strategic SOEs - Net Loss)',
    'Levy Deficit (Non-Strategic SOEs - Net Profit)',
    'Levy Deficit (Non-Strategic SOEs - Net Loss)'
  ];

  const divRevKeys = [
    'Dividend (Strategic SOEs - Net Profit)',
    'Dividend (Strategic SOEs - Net Loss)',
    'Dividend (Non-Strategic SOEs - Net Profit)',
    'Dividend (Non-Strategic SOEs - Net Loss)'
  ];
  const divSurplusKeys = [
    'Dividend Surplus (Strategic SOEs - Net Profit)',
    'Dividend Surplus (Strategic SOEs - Net Loss)',
    'Dividend Surplus (Non-Strategic SOEs - Net Profit)',
    'Dividend Surplus (Non-Strategic SOEs - Net Loss)'
  ];

  const workbookXML = `<?xml version="1.0"?>
  <?mso-application progid="Excel.Sheet"?>
  <Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
            xmlns:o="urn:schemas-microsoft-com:office:office"
            xmlns:x="urn:schemas-microsoft-com:office:excel"
            xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">
    <Styles>
      <Style ss:ID="Default" ss:Name="Normal">
        <Alignment ss:Vertical="Center"/>
        <Font ss:FontName="Segoe UI" ss:Size="10"/>
      </Style>
      <Style ss:ID="TitleStyle">
        <Font ss:FontName="Segoe UI" ss:Size="13" ss:Bold="1" ss:Color="#0F172A"/>
      </Style>
      <Style ss:ID="SectionStyle">
        <Font ss:FontName="Segoe UI" ss:Size="11" ss:Bold="1" ss:Color="#1E40AF"/>
        <Interior ss:Color="#EFF6FF" ss:Pattern="Solid"/>
      </Style>
      <Style ss:ID="HeaderStyle">
        <Font ss:FontName="Segoe UI" ss:Size="10" ss:Bold="1" ss:Color="#FFFFFF"/>
        <Interior ss:Color="#1E293B" ss:Pattern="Solid"/>
        <Alignment ss:Horizontal="Center"/>
      </Style>
      <Style ss:ID="BoldCell">
        <Font ss:FontName="Segoe UI" ss:Bold="1"/>
      </Style>
      <Style ss:ID="NumberCell">
        <Alignment ss:Horizontal="Right"/>
        <Font ss:FontName="Segoe UI" ss:Bold="1" ss:Color="#1E40AF"/>
      </Style>
      <Style ss:ID="DeficitCell">
        <Font ss:FontName="Segoe UI" ss:Bold="1" ss:Color="#DC2626"/>
        <Interior ss:Color="#FEE2E2" ss:Pattern="Solid"/>
        <Alignment ss:Horizontal="Center"/>
      </Style>
      <Style ss:ID="SurplusCell">
        <Font ss:FontName="Segoe UI" ss:Bold="1" ss:Color="#16A34A"/>
        <Interior ss:Color="#DCFCE7" ss:Pattern="Solid"/>
        <Alignment ss:Horizontal="Center"/>
      </Style>
    </Styles>

    <!-- Sheet 1: VAT & Duties -->
    <Worksheet ss:Name="VAT and Duties">
      <Table ss:DefaultColumnWidth="140">
        <Column ss:Width="240"/>
        <Column ss:Width="180"/>
        <Column ss:Width="100"/>
        <Column ss:Width="100"/>
        <Column ss:Width="100"/>
        <Column ss:Width="100"/>
        <Column ss:Width="120"/>
        <Row ss:StyleID="TitleStyle"><Cell ss:MergeAcross="6"><Data ss:Type="String">PEDMIS - VAT, Duties &amp; Other Revenue (5-Year Trend: FY 2022 - FY 2026)</Data></Cell></Row>
        <Row><Cell ss:MergeAcross="6"><Data ss:Type="String">Total Stream Revenue: 145.0B LKR</Data></Cell></Row>
        <Row></Row>
        ${generateSimple5YearRows(vatKeys)}
      </Table>
    </Worksheet>

    <!-- Sheet 2: Corporate Income Tax -->
    <Worksheet ss:Name="Corporate Income Tax">
      <Table ss:DefaultColumnWidth="140">
        <Column ss:Width="240"/>
        <Column ss:Width="180"/>
        <Column ss:Width="100"/>
        <Column ss:Width="100"/>
        <Column ss:Width="100"/>
        <Column ss:Width="100"/>
        <Column ss:Width="120"/>
        <Row ss:StyleID="TitleStyle"><Cell ss:MergeAcross="6"><Data ss:Type="String">PEDMIS - Corporate Income Tax (CIT) Revenue (5-Year Trend: FY 2022 - FY 2026)</Data></Cell></Row>
        <Row><Cell ss:MergeAcross="6"><Data ss:Type="String">Total Stream Revenue: 110.0B LKR</Data></Cell></Row>
        <Row></Row>
        ${generateSimple5YearRows(citKeys)}
      </Table>
    </Worksheet>

    <!-- Sheet 3: Levy -->
    <Worksheet ss:Name="Levy and Deficits">
      <Table ss:DefaultColumnWidth="140">
        <Column ss:Width="240"/>
        <Column ss:Width="180"/>
        <Column ss:Width="100"/>
        <Column ss:Width="100"/>
        <Column ss:Width="100"/>
        <Column ss:Width="100"/>
        <Column ss:Width="120"/>
        <Row ss:StyleID="TitleStyle"><Cell ss:MergeAcross="6"><Data ss:Type="String">PEDMIS - Levy Revenue &amp; Target Deficits (5-Year Trend: FY 2022 - FY 2026)</Data></Cell></Row>
        <Row><Cell ss:MergeAcross="6"><Data ss:Type="String">Total Stream Revenue: 25.0B LKR</Data></Cell></Row>
        <Row></Row>
        ${generateVariance5YearRows(levyRevKeys, levyDeficitKeys, true)}
      </Table>
    </Worksheet>

    <!-- Sheet 4: Dividend -->
    <Worksheet ss:Name="Dividend and Surpluses">
      <Table ss:DefaultColumnWidth="140">
        <Column ss:Width="240"/>
        <Column ss:Width="180"/>
        <Column ss:Width="100"/>
        <Column ss:Width="100"/>
        <Column ss:Width="100"/>
        <Column ss:Width="100"/>
        <Column ss:Width="120"/>
        <Row ss:StyleID="TitleStyle"><Cell ss:MergeAcross="6"><Data ss:Type="String">PEDMIS - Dividend Revenue &amp; Surpluses (5-Year Trend: FY 2022 - FY 2026)</Data></Cell></Row>
        <Row><Cell ss:MergeAcross="6"><Data ss:Type="String">Total Stream Revenue: 15.5B LKR</Data></Cell></Row>
        <Row></Row>
        ${generateVariance5YearRows(divRevKeys, divSurplusKeys, false)}
      </Table>
    </Worksheet>
  </Workbook>`;

  const blob = new Blob([workbookXML], { type: 'application/vnd.ms-excel;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);

  link.setAttribute('href', url);
  link.setAttribute('download', `PEDMIS_Govt_Revenue_Detailed_Workbook_${currentYear}.xls`);
  link.style.visibility = 'hidden';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}