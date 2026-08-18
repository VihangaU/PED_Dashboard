/**
 * Government Revenue & Contributions Component for PEDMIS Dashboard
 * Renders VAT/Duties, CIT, Levy, and Dividend streams.
 * Features:
 * - Classification divided into 2 separate columns:
 *   1. Strategic Classification (Strategic vs Non-Strategic)
 *   2. Performance Status (Net Profit vs Net Loss)
 * - 5-Year Historical & Current Performance Trends (FY 2022 - FY 2026) for all modal popups.
 * - Standardized 3-decimal numeric format without repeated 'B' symbols.
 * - Explicit "(Values in LKR Billions)" stated in headers, popups, and export titles.
 * - 6-Sheet XML-based .xlsx Workbook export (VAT, CIT, Levy, Levy Deficit, Dividend, Dividend Surplus).
 * - Dynamic file naming: MetricTitle_DDMMYYYY_HHMMSS.xlsx.
 */

// Comprehensive Data Store for Government Revenue Streams & Variances (5-Year Trends)
const govtRevenueData = {
  // --- VAT, DUTIES & OTHER ---
  'VAT,Duties & Others (Strategic SOEs -Net Profit)': [
    { name: 'Bank of Ceylon', stratCat: 'Strategic', perfStatus: 'Net Profit', y2022: '18.000', y2023: '20.500', y2024: '22.000', y2025: '23.500', y2026: '24.500' },
    { name: 'People\'s Bank', stratCat: 'Strategic', perfStatus: 'Net Profit', y2022: '14.000', y2023: '16.200', y2024: '17.800', y2025: '19.000', y2026: '20.000' },
    { name: 'Airport & Aviation Services Ltd', stratCat: 'Strategic', perfStatus: 'Net Profit', y2022: '12.000', y2023: '14.000', y2024: '15.500', y2025: '17.000', y2026: '18.000' },
    { name: 'Sri Lanka Telecom PLC', stratCat: 'Strategic', perfStatus: 'Net Profit', y2022: '9.000', y2023: '10.200', y2024: '11.000', y2025: '11.800', y2026: '12.500' },
    { name: 'National Savings Bank', stratCat: 'Strategic', perfStatus: 'Net Profit', y2022: '7.500', y2023: '8.200', y2024: '9.000', y2025: '9.500', y2026: '10.000' }
  ],
  'VAT,Duties & Others (Strategic SOEs -Net Loss)': [
    { name: 'Ceylon Petroleum Corporation (CPC)', stratCat: 'Strategic', perfStatus: 'Net Loss', y2022: '48.000', y2023: '54.000', y2024: '59.000', y2025: '62.500', y2026: '65.000' },
    { name: 'Ceylon Electricity Board (CEB)', stratCat: 'Strategic', perfStatus: 'Net Loss', y2022: '5.500', y2023: '6.500', y2024: '7.200', y2025: '8.000', y2026: '8.500' }
  ],
  'VAT,Duties & Others (Non-Strategic SOEs -Net Profit)': [
    { name: 'National Water Supply & Drainage Board', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2022: '2.800', y2023: '3.200', y2024: '3.600', y2025: '4.000', y2026: '4.200' },
    { name: 'Lanka Hospitals PLC', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2022: '1.500', y2023: '1.800', y2024: '2.000', y2025: '2.100', y2026: '2.300' },
    { name: 'Litro Gas Lanka Ltd', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2022: '0.600', y2023: '0.700', y2024: '0.800', y2025: '0.900', y2026: '1.000' }
  ],
  'VAT,Duties & Others (Non-Strategic SOEs -Net Loss)': [
    { name: 'Sri Lanka Transport Board (SLTB)', stratCat: 'Non-Strategic', perfStatus: 'Net Loss', y2022: '0.600', y2023: '0.700', y2024: '0.800', y2025: '0.900', y2026: '1.000' }
  ],

  // --- CORPORATE INCOME TAX (CIT) ---
  'Corporate Income Tax (CIT)  (Strategic SOEs -Net Profit)': [
    { name: 'Bank of Ceylon', stratCat: 'Strategic', perfStatus: 'Net Profit', y2022: '28.000', y2023: '31.500', y2024: '34.000', y2025: '36.500', y2026: '38.500' },
    { name: 'People\'s Bank', stratCat: 'Strategic', perfStatus: 'Net Profit', y2022: '21.000', y2023: '23.500', y2024: '25.800', y2025: '27.500', y2026: '29.000' },
    { name: 'National Savings Bank', stratCat: 'Strategic', perfStatus: 'Net Profit', y2022: '14.000', y2023: '15.800', y2024: '17.200', y2025: '18.500', y2026: '19.500' },
    { name: 'Sri Lanka Insurance Corporation', stratCat: 'Strategic', perfStatus: 'Net Profit', y2022: '10.000', y2023: '11.200', y2024: '12.400', y2025: '13.200', y2026: '14.000' }
  ],
  'Corporate Income Tax (CIT)  (Strategic SOEs -Net Loss)': [
    { name: 'SriLankan Airlines (Withholding & Adjustments)', stratCat: 'Strategic', perfStatus: 'Net Loss', y2022: '0.500', y2023: '0.600', y2024: '0.800', y2025: '0.900', y2026: '1.000' }
  ],
  'Corporate Income Tax (CIT)  (Non-Strategic SOEs -Net Profit)': [
    { name: 'Sri Lanka Ports Authority', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2022: '6.500', y2023: '7.200', y2024: '8.000', y2025: '8.500', y2026: '9.000' },
    { name: 'Litro Gas Lanka Ltd', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2022: '2.200', y2023: '2.600', y2024: '3.000', y2025: '3.200', y2026: '3.500' }
  ],
  'Corporate Income Tax (CIT)  (Non-Strategic SOEs -Net Loss)': [
    { name: 'Spices & Allied Products Board', stratCat: 'Non-Strategic', perfStatus: 'Net Loss', y2022: '0.400', y2023: '0.500', y2024: '0.700', y2025: '0.800', y2026: '1.000' }
  ],

  // --- LEVY STREAM REVENUE ---
  'Levy  (Strategic SOEs -Net Profit)': [
    { name: 'Airport & Aviation Services Ltd', stratCat: 'Strategic', perfStatus: 'Net Profit', y2022: '6.000', y2023: '6.800', y2024: '7.400', y2025: '8.000', y2026: '8.500' },
    { name: 'Development Lotteries Board', stratCat: 'Strategic', perfStatus: 'Net Profit', y2022: '3.000', y2023: '3.400', y2024: '3.800', y2025: '4.000', y2026: '4.200' },
    { name: 'National Lotteries Board', stratCat: 'Strategic', perfStatus: 'Net Profit', y2022: '2.400', y2023: '2.700', y2024: '2.900', y2025: '3.100', y2026: '3.300' }
  ],
  'Levy  (Strategic SOEs -Net Loss)': [
    { name: 'Ceylon Electricity Board', stratCat: 'Strategic', perfStatus: 'Net Loss', y2022: '1.200', y2023: '1.400', y2024: '1.600', y2025: '1.800', y2026: '2.000' }
  ],
  'Levy  (Non-Strategic SOEs -Net Profit)': [
    { name: 'Ports Authority (Levy Share)', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2022: '4.200', y2023: '4.800', y2024: '5.200', y2025: '5.600', y2026: '6.000' }
  ],
  'Levy  (Non-Strategic SOEs -Net Loss)': [
    { name: 'State Engineering Corporation', stratCat: 'Non-Strategic', perfStatus: 'Net Loss', y2022: '0.600', y2023: '0.700', y2024: '0.800', y2025: '0.900', y2026: '1.000' }
  ],

  // --- LEVY DEFICITS PER SUB-CATEGORY (5-Year Variance Data) ---
  'Levy Deficit (Strategic SOEs - Net Profit)': [
    { name: 'Civil Aviation Authority of Sri Lanka', stratCat: 'Strategic', perfStatus: 'Net Profit', y2022: '0.600', y2023: '0.800', y2024: '0.900', y2025: '1.000', y2026: '1.000' }
  ],
  'Levy Deficit (Strategic SOEs - Net Loss)': [
    { name: 'Water Resources Board', stratCat: 'Strategic', perfStatus: 'Net Loss', y2022: '1.200', y2023: '1.500', y2024: '1.800', y2025: '1.900', y2026: '2.000' }
  ],
  'Levy Deficit (Non-Strategic SOEs - Net Profit)': [
    { name: 'State Pharmaceuticals Corporation', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2022: '0.400', y2023: '0.500', y2024: '0.600', y2025: '0.650', y2026: '0.700' }
  ],
  'Levy Deficit (Non-Strategic SOEs - Net Loss)': [
    { name: 'National Transport Commission', stratCat: 'Non-Strategic', perfStatus: 'Net Loss', y2022: '0.800', y2023: '0.900', y2024: '1.100', y2025: '1.200', y2026: '1.300' }
  ],

  // --- DIVIDEND STREAM REVENUE ---
  'Dividend (Strategic SOEs - Net Profit)': [
    { name: 'Sri Lanka Telecom PLC', stratCat: 'Strategic', perfStatus: 'Net Profit', y2022: '4.200', y2023: '4.800', y2024: '5.200', y2025: '5.600', y2026: '6.000' },
    { name: 'Lanka Hospitals PLC', stratCat: 'Strategic', perfStatus: 'Net Profit', y2022: '2.400', y2023: '2.700', y2024: '3.000', y2025: '3.200', y2026: '3.500' },
    { name: 'Litro Gas Lanka Ltd', stratCat: 'Strategic', perfStatus: 'Net Profit', y2022: '1.200', y2023: '1.400', y2024: '1.600', y2025: '1.800', y2026: '2.000' }
  ],
  'Dividend (Strategic SOEs - Net Loss)': [
    { name: 'Ceylon Petroleum Corporation (Residual Unit)', stratCat: 'Strategic', perfStatus: 'Net Loss', y2022: '0.400', y2023: '0.500', y2024: '0.700', y2025: '0.800', y2026: '1.000' }
  ],
  'Dividend (Non-Strategic SOEs - Net Profit)': [
    { name: 'Ceylon Electricity Board (LECO Share)', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2022: '1.100', y2023: '1.300', y2024: '1.500', y2025: '1.600', y2026: '1.800' },
    { name: 'Milco (Pvt) Ltd', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2022: '0.100', y2023: '0.120', y2024: '0.150', y2025: '0.180', y2026: '0.200' }
  ],
  'Dividend (Non-Strategic SOEs - Net Loss)': [
    { name: 'Kurunegala Plantations Ltd', stratCat: 'Non-Strategic', perfStatus: 'Net Loss', y2022: '0.500', y2023: '0.600', y2024: '0.700', y2025: '0.850', y2026: '1.000' }
  ],

  // --- DIVIDEND SURPLUSES PER SUB-CATEGORY (5-Year Variance Data) ---
  'Dividend Surplus (Strategic SOEs - Net Profit)': [
    { name: 'Sri Lanka Telecom PLC', stratCat: 'Strategic', perfStatus: 'Net Profit', y2022: '0.500', y2023: '0.600', y2024: '0.800', y2025: '0.900', y2026: '1.000' }
  ],
  'Dividend Surplus (Strategic SOEs - Net Loss)': [
    { name: 'Ceylon Electricity Board Unit', stratCat: 'Strategic', perfStatus: 'Net Loss', y2022: '0.040', y2023: '0.060', y2024: '0.080', y2025: '0.090', y2026: '0.100' }
  ],
  'Dividend Surplus (Non-Strategic SOEs - Net Profit)': [
    { name: 'Lanka Hospitals PLC', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2022: '0.100', y2023: '0.120', y2024: '0.150', y2025: '0.180', y2026: '0.200' }
  ],
  'Dividend Surplus (Non-Strategic SOEs - Net Loss)': [
    { name: 'Chilaw Plantations Ltd', stratCat: 'Non-Strategic', perfStatus: 'Net Loss', y2022: '0.020', y2023: '0.030', y2024: '0.040', y2025: '0.045', y2026: '0.050' }
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
        background: #1d4ed8;
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
      
      <!-- Export 6-Sheet Excel Toolbar -->
      <div class="govt-export-toolbar">
        <button class="btn-export-govt" onclick="exportGovtRevenueMultiSheetExcel()">
          📥 Export Government Revenue Report (.xlsx)
        </button>
      </div>

      <!-- 1. VAT, Duties & Other -->
      <div class="govt-stream-card active">
        <div class="govt-stream-header">
          <span class="govt-stream-title">• VAT, Duties & Other</span>
          <span class="govt-stream-big-val">145.000</span>
        </div>
        <div class="govt-sub-badge-grid">
          <div class="govt-sub-badge strat-prof" onclick="openGovtModal('VAT,Duties & Others (Strategic SOEs -Net Profit)', event)">
            <span class="govt-badge-label">Strategic Profit</span>
            <span class="govt-badge-val">65.000</span>
          </div>
          <div class="govt-sub-badge strat-loss" onclick="openGovtModal('VAT,Duties & Others (Strategic SOEs -Net Loss)', event)">
            <span class="govt-badge-label">Strategic Loss</span>
            <span class="govt-badge-val">73.500</span>
          </div>
          <div class="govt-sub-badge nonstrat-prof" onclick="openGovtModal('VAT,Duties & Others (Non-Strategic SOEs -Net Profit)', event)">
            <span class="govt-badge-label">Non-Strat Profit</span>
            <span class="govt-badge-val">5.500</span>
          </div>
          <div class="govt-sub-badge nonstrat-loss" onclick="openGovtModal('VAT,Duties & Others (Non-Strategic SOEs -Net Loss)', event)">
            <span class="govt-badge-label">Non-Strat Loss</span>
            <span class="govt-badge-val">1.000</span>
          </div>
        </div>
      </div>

      <!-- 2. Corporate Income Tax (CIT) -->
      <div class="govt-stream-card">
        <div class="govt-stream-header">
          <span class="govt-stream-title">• Corporate Income Tax (CIT)</span>
          <span class="govt-stream-big-val">110.000</span>
        </div>
        <div class="govt-sub-badge-grid">
          <div class="govt-sub-badge strat-prof" onclick="openGovtModal('Corporate Income Tax (CIT)  (Strategic SOEs -Net Profit)', event)">
            <span class="govt-badge-label">Strategic Profit</span>
            <span class="govt-badge-val">95.500</span>
          </div>
          <div class="govt-sub-badge strat-loss" onclick="openGovtModal('Corporate Income Tax (CIT)  (Strategic SOEs -Net Loss)', event)">
            <span class="govt-badge-label">Strategic Loss</span>
            <span class="govt-badge-val">1.000</span>
          </div>
          <div class="govt-sub-badge nonstrat-prof" onclick="openGovtModal('Corporate Income Tax (CIT)  (Non-Strategic SOEs -Net Profit)', event)">
            <span class="govt-badge-label">Non-Strat Profit</span>
            <span class="govt-badge-val">12.500</span>
          </div>
          <div class="govt-sub-badge nonstrat-loss" onclick="openGovtModal('Corporate Income Tax (CIT)  (Non-Strategic SOEs -Net Loss)', event)">
            <span class="govt-badge-label">Non-Strat Loss</span>
            <span class="govt-badge-val">1.000</span>
          </div>
        </div>
      </div>

      <!-- 3. Levy Stream with Category Deficits -->
      <div class="govt-stream-card">
        <div class="govt-stream-header">
          <span class="govt-stream-title">• Levy</span>
          <span class="govt-stream-big-val">25.000</span>
        </div>
        <div class="govt-sub-badge-grid">
          <div class="govt-sub-badge strat-prof" onclick="openGovtModal('Levy  (Strategic SOEs -Net Profit)', event)">
            <span class="govt-badge-label">Strategic Profit</span>
            <span class="govt-badge-val">16.000</span>
            <span class="govt-variance-pill deficit" onclick="openGovtModal('Levy Deficit (Strategic SOEs - Net Profit)', event)">Deficit: 1.000</span>
          </div>
          <div class="govt-sub-badge strat-loss" onclick="openGovtModal('Levy  (Strategic SOEs -Net Loss)', event)">
            <span class="govt-badge-label">Strategic Loss</span>
            <span class="govt-badge-val">2.000</span>
            <span class="govt-variance-pill deficit" onclick="openGovtModal('Levy Deficit (Strategic SOEs - Net Loss)', event)">Deficit: 2.000</span>
          </div>
          <div class="govt-sub-badge nonstrat-prof" onclick="openGovtModal('Levy  (Non-Strategic SOEs -Net Profit)', event)">
            <span class="govt-badge-label">Non-Strat Profit</span>
            <span class="govt-badge-val">6.000</span>
            <span class="govt-variance-pill deficit" onclick="openGovtModal('Levy Deficit (Non-Strategic SOEs - Net Profit)', event)">Deficit: 0.700</span>
          </div>
          <div class="govt-sub-badge nonstrat-loss" onclick="openGovtModal('Levy  (Non-Strategic SOEs -Net Loss)', event)">
            <span class="govt-badge-label">Non-Strat Loss</span>
            <span class="govt-badge-val">1.000</span>
            <span class="govt-variance-pill deficit" onclick="openGovtModal('Levy Deficit (Non-Strategic SOEs - Net Loss)', event)">Deficit: 1.300</span>
          </div>
        </div>
      </div>

      <!-- 4. Dividend Stream with Category Surpluses -->
      <div class="govt-stream-card">
        <div class="govt-stream-header">
          <span class="govt-stream-title">• Dividend</span>
          <span class="govt-stream-big-val">15.500</span>
        </div>
        <div class="govt-sub-badge-grid">
          <div class="govt-sub-badge strat-prof" onclick="openGovtModal('Dividend (Strategic SOEs - Net Profit)', event)">
            <span class="govt-badge-label">Strategic Profit</span>
            <span class="govt-badge-val">11.500</span>
            <span class="govt-variance-pill surplus" onclick="openGovtModal('Dividend Surplus (Strategic SOEs - Net Profit)', event)">Surplus: 1.000</span>
          </div>
          <div class="govt-sub-badge strat-loss" onclick="openGovtModal('Dividend (Strategic SOEs - Net Loss)', event)">
            <span class="govt-badge-label">Strategic Loss</span>
            <span class="govt-badge-val">1.000</span>
            <span class="govt-variance-pill surplus" onclick="openGovtModal('Dividend Surplus (Strategic SOEs - Net Loss)', event)">Surplus: 0.100</span>
          </div>
          <div class="govt-sub-badge nonstrat-prof" onclick="openGovtModal('Dividend (Non-Strategic SOEs - Net Profit)', event)">
            <span class="govt-badge-label">Non-Strat Profit</span>
            <span class="govt-badge-val">2.000</span>
            <span class="govt-variance-pill surplus" onclick="openGovtModal('Dividend Surplus (Non-Strategic SOEs - Net Profit)', event)">Surplus: 0.200</span>
          </div>
          <div class="govt-sub-badge nonstrat-loss" onclick="openGovtModal('Dividend (Non-Strategic SOEs - Net Loss)', event)">
            <span class="govt-badge-label">Non-Strat Loss</span>
            <span class="govt-badge-val">1.000</span>
            <span class="govt-variance-pill surplus" onclick="openGovtModal('Dividend Surplus (Non-Strategic SOEs - Net Loss)', event)">Surplus: 0.050</span>
          </div>
        </div>
      </div>

    </div>

    <!-- Government Revenue Dedicated Popup Modal (5-Year Trend View) -->
    <div class="modal-overlay" id="govtRevenueModal">
      <div class="modal" style="width: 820px; max-width: 95%;">
        <div class="modal-header">
          <h3 id="govtRevenueModalTitle" style="margin:0;">Government Revenue Register (Values in LKR Billions)</h3>
          <button style="border:none; background:none; font-size:18px; cursor:pointer;" onclick="closeGovtModal()">&times;</button>
        </div>
        <p style="color: var(--text-muted); font-size: 11px;">
          Comprehensive breakdown of entities and contribution values across past 4 financial years and current year (Values in LKR Billions).
        </p>

        <table>
          <thead id="govtRevenueTableHead"></thead>
          <tbody id="govtRevenueTableBody"></tbody>
        </table>
      </div>
    </div>
  `;
}

// Open Govt Popup Modal with Divided Classification Columns
function openGovtModal(keyTitle, event) {
  if (event) event.stopPropagation();

  currentGovtKey = keyTitle;
  document.getElementById('govtRevenueModalTitle').innerText = `${keyTitle} (Values in LKR Billions)`;

  const thead = document.getElementById('govtRevenueTableHead');
  const tbody = document.getElementById('govtRevenueTableBody');
  tbody.innerHTML = '';

  const items = govtRevenueData[keyTitle] || [];
  const isVariance = keyTitle.includes('Deficit') || keyTitle.includes('Surplus');

  if (isVariance) {
    thead.innerHTML = `
      <tr>
        <th>SOE Name</th>
        <th>Strategic Classification</th>
        <th>Performance Status</th>
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
        <td>${item.stratCat}</td>
        <td><span class="badge ${item.perfStatus === 'Net Profit' ? 'badge-success' : 'badge-danger'}">${item.perfStatus}</span></td>
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
        <th>Strategic Classification</th>
        <th>Performance Status</th>
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
        <td>${item.stratCat}</td>
        <td><span class="badge ${item.perfStatus === 'Net Profit' ? 'badge-success' : 'badge-danger'}">${item.perfStatus}</span></td>
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

// Multi-Worksheet XML-based .xlsx Generator across 6 dedicated sheets with 2-column classification
async function exportGovtRevenueMultiSheetExcel() {
  const currentYear = typeof selectedYear !== 'undefined' ? selectedYear : '2025';

  const now = new Date();
  const dd = String(now.getDate()).padStart(2, '0');
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const yyyy = now.getFullYear();
  const hh = String(now.getHours()).padStart(2, '0');
  const min = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');
  const timestamp = `${dd}${mm}${yyyy}_${hh}${min}${ss}`;
  const filename = `GovernmentRevenue_${timestamp}.xlsx`;

  const escapeXML = (str) => String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  // Sheet XML builder for regular revenue streams
  const buildSimpleSheetXML = (title, subtitle, keys) => {
    let rows = [];
    let r = 1;

    // Title & Subtitle
    rows.push(`<row r="${r}"><c r="A${r}" t="inlineStr" s="1"><is><t>${escapeXML(title)}</t></is></c></row>`);
    r++;
    rows.push(`<row r="${r}"><c r="A${r}" t="inlineStr" s="2"><is><t>${escapeXML(subtitle)}</t></is></c></row>`);
    r += 2;

    // Header Row with Divided Classification Columns
    rows.push(`
      <row r="${r}">
        <c r="A${r}" t="inlineStr" s="3"><is><t>SOE Name</t></is></c>
        <c r="B${r}" t="inlineStr" s="3"><is><t>Strategic Classification</t></is></c>
        <c r="C${r}" t="inlineStr" s="3"><is><t>Performance Status</t></is></c>
        <c r="D${r}" t="inlineStr" s="3"><is><t>FY 2022</t></is></c>
        <c r="E${r}" t="inlineStr" s="3"><is><t>FY 2023</t></is></c>
        <c r="F${r}" t="inlineStr" s="3"><is><t>FY 2024</t></is></c>
        <c r="G${r}" t="inlineStr" s="3"><is><t>FY 2025</t></is></c>
        <c r="H${r}" t="inlineStr" s="3"><is><t>FY 2026 (Current)</t></is></c>
      </row>`);
    r++;

    // Data Rows
    keys.forEach(k => {
      const items = govtRevenueData[k] || [];
      items.forEach(item => {
        rows.push(`
          <row r="${r}">
            <c r="A${r}" t="inlineStr" s="4"><is><t>${escapeXML(item.name)}</t></is></c>
            <c r="B${r}" t="inlineStr"><is><t>${escapeXML(item.stratCat)}</t></is></c>
            <c r="C${r}" t="inlineStr"><is><t>${escapeXML(item.perfStatus)}</t></is></c>
            <c r="D${r}" s="5"><v>${parseFloat(item.y2022) || 0}</v></c>
            <c r="E${r}" s="5"><v>${parseFloat(item.y2023) || 0}</v></c>
            <c r="F${r}" s="5"><v>${parseFloat(item.y2024) || 0}</v></c>
            <c r="G${r}" s="5"><v>${parseFloat(item.y2025) || 0}</v></c>
            <c r="H${r}" s="5"><v>${parseFloat(item.y2026) || 0}</v></c>
          </row>`);
        r++;
      });
    });

    return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
      <worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
        <cols>
          <col min="1" max="1" width="38" customWidth="1"/>
          <col min="2" max="2" width="24" customWidth="1"/>
          <col min="3" max="3" width="20" customWidth="1"/>
          <col min="4" max="8" width="16" customWidth="1"/>
        </cols>
        <sheetData>${rows.join('')}</sheetData>
      </worksheet>`;
  };

  // Sheet XML builder for variance streams
  const buildVarianceSheetXML = (title, subtitle, keys, isDeficit) => {
    let rows = [];
    let r = 1;

    rows.push(`<row r="${r}"><c r="A${r}" t="inlineStr" s="1"><is><t>${escapeXML(title)}</t></is></c></row>`);
    r++;
    rows.push(`<row r="${r}"><c r="A${r}" t="inlineStr" s="2"><is><t>${escapeXML(subtitle)}</t></is></c></row>`);
    r += 2;

    rows.push(`
      <row r="${r}">
        <c r="A${r}" t="inlineStr" s="3"><is><t>SOE Name</t></is></c>
        <c r="B${r}" t="inlineStr" s="3"><is><t>Strategic Classification</t></is></c>
        <c r="C${r}" t="inlineStr" s="3"><is><t>Performance Status</t></is></c>
        <c r="D${r}" t="inlineStr" s="3"><is><t>FY 2022</t></is></c>
        <c r="E${r}" t="inlineStr" s="3"><is><t>FY 2023</t></is></c>
        <c r="F${r}" t="inlineStr" s="3"><is><t>FY 2024</t></is></c>
        <c r="G${r}" t="inlineStr" s="3"><is><t>FY 2025</t></is></c>
        <c r="H${r}" t="inlineStr" s="3"><is><t>FY 2026 (Current)</t></is></c>
      </row>`);
    r++;

    const valStyle = isDeficit ? '6' : '7';

    keys.forEach(k => {
      const items = govtRevenueData[k] || [];
      items.forEach(item => {
        rows.push(`
          <row r="${r}">
            <c r="A${r}" t="inlineStr" s="4"><is><t>${escapeXML(item.name)}</t></is></c>
            <c r="B${r}" t="inlineStr"><is><t>${escapeXML(item.stratCat)}</t></is></c>
            <c r="C${r}" t="inlineStr"><is><t>${escapeXML(item.perfStatus)}</t></is></c>
            <c r="D${r}" s="${valStyle}"><v>${parseFloat(item.y2022) || 0}</v></c>
            <c r="E${r}" s="${valStyle}"><v>${parseFloat(item.y2023) || 0}</v></c>
            <c r="F${r}" s="${valStyle}"><v>${parseFloat(item.y2024) || 0}</v></c>
            <c r="G${r}" s="${valStyle}"><v>${parseFloat(item.y2025) || 0}</v></c>
            <c r="H${r}" s="${valStyle}"><v>${parseFloat(item.y2026) || 0}</v></c>
          </row>`);
        r++;
      });
    });

    return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
      <worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
        <cols>
          <col min="1" max="1" width="38" customWidth="1"/>
          <col min="2" max="2" width="24" customWidth="1"/>
          <col min="3" max="3" width="20" customWidth="1"/>
          <col min="4" max="8" width="16" customWidth="1"/>
        </cols>
        <sheetData>${rows.join('')}</sheetData>
      </worksheet>`;
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

  // 6 Sheet Definitions
  const sheets = [
    { name: "VAT, Duties and Others", xml: buildSimpleSheetXML("PEDMIS - VAT, Duties & Other Revenue (5-Year Trend)", "Currency Unit: In LKR Billions | Total Stream Revenue: 145.000", vatKeys) },
    { name: "Corporate Income Tax", xml: buildSimpleSheetXML("PEDMIS - Corporate Income Tax (CIT) Revenue (5-Year Trend)", "Currency Unit: In LKR Billions | Total Stream Revenue: 110.000", citKeys) },
    { name: "Levy", xml: buildSimpleSheetXML("PEDMIS - Levy Revenue (5-Year Trend)", "Currency Unit: In LKR Billions | Total Stream Revenue: 25.000", levyRevKeys) },
    { name: "Levy-Outstanding", xml: buildVarianceSheetXML("PEDMIS - Levy Target Deficits (5-Year Trend)", "Currency Unit: In LKR Billions", levyDeficitKeys, true) },
    { name: "Dividend", xml: buildSimpleSheetXML("PEDMIS - Dividend Revenue (5-Year Trend)", "Currency Unit: In LKR Billions | Total Stream Revenue: 15.500", divRevKeys) },
    { name: "Dividend-Outstanding", xml: buildVarianceSheetXML("PEDMIS - Dividend Surpluses (5-Year Trend)", "Currency Unit: In LKR Billions", divSurplusKeys, false) }
  ];

  const stylesXML = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
      <numFmts count="1">
        <numFmt numFmtId="164" formatCode="#,##0.000"/>
      </numFmts>
      <fonts count="4">
        <font><name val="Calibri"/><sz val="11"/></font>
        <font><b/><name val="Calibri"/><sz val="13"/><color rgb="FF0F172A"/></font>
        <font><i/><name val="Calibri"/><sz val="10"/><color rgb="FF64748B"/></font>
        <font><b/><name val="Calibri"/><sz val="11"/><color rgb="FFFFFFFF"/></font>
      </fonts>
      <fills count="5">
        <fill><patternFill patternType="none"/></fill>
        <fill><patternFill patternType="gray125"/></fill>
        <fill><patternFill patternType="solid"><fgColor rgb="FF1E293B"/></patternFill></fill>
        <fill><patternFill patternType="solid"><fgColor rgb="FFFEE2E2"/></patternFill></fill>
        <fill><patternFill patternType="solid"><fgColor rgb="FFDCFCE7"/></patternFill></fill>
      </fills>
      <borders count="1">
        <border><left/><right/><top/><bottom/></border>
      </borders>
      <cellXfs count="8">
        <xf numFmtId="0" fontId="0" fillId="0" borderId="0"/>
        <xf numFmtId="0" fontId="1" fillId="0" borderId="0"/>
        <xf numFmtId="0" fontId="2" fillId="0" borderId="0"/>
        <xf numFmtId="0" fontId="3" fillId="2" borderId="0" applyAlignment="1"><alignment horizontal="center"/></xf>
        <xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1"><font><b/></font></xf>
        <xf numFmtId="164" fontId="0" fillId="0" borderId="0" applyNumberFormat="1" applyAlignment="1"><alignment horizontal="right"/></xf>
        <xf numFmtId="164" fontId="0" fillId="3" borderId="0" applyNumberFormat="1" applyAlignment="1"><alignment horizontal="right"/></xf>
        <xf numFmtId="164" fontId="0" fillId="4" borderId="0" applyNumberFormat="1" applyAlignment="1"><alignment horizontal="right"/></xf>
      </cellXfs>
    </styleSheet>`;

  const workbookXML = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
      <sheets>
        ${sheets.map((s, i) => `<sheet name="${s.name}" sheetId="${i + 1}" r:id="rId${i + 1}"/>`).join('')}
      </sheets>
    </workbook>`;

  const workbookRelsXML = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
      ${sheets.map((_, i) => `<Relationship Id="rId${i + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet${i + 1}.xml"/>`).join('')}
      <Relationship Id="rId${sheets.length + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
    </Relationships>`;

  const contentTypesXML = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
      <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
      <Default Extension="xml" ContentType="application/xml"/>
      <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
      <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
      ${sheets.map((_, i) => `<Override PartName="/xl/worksheets/sheet${i + 1}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>`).join('')}
    </Types>`;

  const rootRelsXML = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
      <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
    </Relationships>`;

  // Pack entries into standard openxml package
  const zipEntries = [
    { path: "_rels/.rels", data: rootRelsXML },
    { path: "[Content_Types].xml", data: contentTypesXML },
    { path: "xl/workbook.xml", data: workbookXML },
    { path: "xl/_rels/workbook.xml.rels", data: workbookRelsXML },
    { path: "xl/styles.xml", data: stylesXML }
  ];

  sheets.forEach((s, idx) => {
    zipEntries.push({ path: `xl/worksheets/sheet${idx + 1}.xml`, data: s.xml });
  });

  const zipBlob = createStandardZipBlob(zipEntries);

  const link = document.createElement('a');
  const url = URL.createObjectURL(zipBlob);
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Lightweight PKZip Packager for .xlsx binary generation
function createStandardZipBlob(entries) {
  const crcTable = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    }
    crcTable[i] = c;
  }

  function crc32(buf) {
    let crc = 0xFFFFFFFF;
    for (let i = 0; i < buf.length; i++) {
      crc = (crc >>> 8) ^ crcTable[(crc ^ buf[i]) & 0xFF];
    }
    return (crc ^ 0xFFFFFFFF) >>> 0;
  }

  const textEncoder = new TextEncoder();
  const fileRecords = [];
  let currentOffset = 0;
  const parts = [];

  entries.forEach(entry => {
    const filenameBytes = textEncoder.encode(entry.path);
    const contentBytes = textEncoder.encode(entry.data);
    const crc = crc32(contentBytes);
    const size = contentBytes.length;

    // Local Header
    const localHeader = new Uint8Array(30 + filenameBytes.length);
    const view = new DataView(localHeader.buffer);
    view.setUint32(0, 0x04034b50, true);
    view.setUint16(4, 20, true);
    view.setUint16(6, 0, true);
    view.setUint16(8, 0, true);
    view.setUint16(10, 0, true);
    view.setUint16(12, 0, true);
    view.setUint32(14, crc, true);
    view.setUint32(18, size, true);
    view.setUint32(22, size, true);
    view.setUint16(26, filenameBytes.length, true);
    view.setUint16(28, 0, true);
    localHeader.set(filenameBytes, 30);

    parts.push(localHeader, contentBytes);

    fileRecords.push({
      filenameBytes,
      size,
      crc,
      offset: currentOffset
    });

    currentOffset += localHeader.length + size;
  });

  const centralDirOffset = currentOffset;
  let centralDirSize = 0;

  fileRecords.forEach(rec => {
    const cdHeader = new Uint8Array(46 + rec.filenameBytes.length);
    const view = new DataView(cdHeader.buffer);
    view.setUint32(0, 0x02014b50, true);
    view.setUint16(4, 20, true);
    view.setUint16(6, 20, true);
    view.setUint16(8, 0, true);
    view.setUint16(10, 0, true);
    view.setUint16(12, 0, true);
    view.setUint16(14, 0, true);
    view.setUint32(16, rec.crc, true);
    view.setUint32(20, rec.size, true);
    view.setUint32(24, rec.size, true);
    view.setUint16(28, rec.filenameBytes.length, true);
    view.setUint16(30, 0, true);
    view.setUint16(32, 0, true);
    view.setUint16(34, 0, true);
    view.setUint16(36, 0, true);
    view.setUint32(38, 0, true);
    view.setUint32(42, rec.offset, true);
    cdHeader.set(rec.filenameBytes, 46);

    parts.push(cdHeader);
    centralDirSize += cdHeader.length;
  });

  // End of Central Directory
  const eocd = new Uint8Array(22);
  const eocdView = new DataView(eocd.buffer);
  eocdView.setUint32(0, 0x06054b50, true);
  eocdView.setUint16(4, 0, true);
  eocdView.setUint16(6, 0, true);
  eocdView.setUint16(8, fileRecords.length, true);
  eocdView.setUint16(10, fileRecords.length, true);
  eocdView.setUint32(12, centralDirSize, true);
  eocdView.setUint32(16, centralDirOffset, true);
  eocdView.setUint16(20, 0, true);

  parts.push(eocd);

  return new Blob(parts, { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
}