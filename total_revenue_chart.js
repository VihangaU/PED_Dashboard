/**
 * Total Sector Revenue & GDP Share Component for PEDMIS Dashboard
 * Renders Revenue metrics for Strategic and Non-Strategic SOEs.
 * Features:
 * - Column-wise stacked cards (Strategic Sector on top, Non-Strategic Sector below).
 * - Sub-category badges show Revenue values for Net Profit / Net Loss SOE groupings.
 * - Drill-down popups display SOE Name with 5-Year Historical & Current Trends (FY 2022 - FY 2026).
 * - Standardized 3-decimal numeric format without repeated 'B' symbols.
 * - Unit "(Values in LKR Billions)" stated explicitly in headers & modal titles.
 * - Multi-sheet Binary OpenXML (.xlsx) Report Generator across 4 sector performance categories.
 */

const revenueCategoryData = {
  // Sector Full Overviews
  'Strategic SOE Sector Performance': [
    { name: 'Ceylon Petroleum Corp (CPC)', y2022: '380.000', y2023: '410.000', y2024: '430.000', y2025: '445.000', y2026: '450.000' },
    { name: 'Ceylon Electricity Board (CEB)', y2022: '310.000', y2023: '340.000', y2024: '365.000', y2025: '380.000', y2026: '390.000' },
    { name: 'SriLankan Airlines Ltd', y2022: '160.000', y2023: '180.000', y2024: '195.000', y2025: '205.000', y2026: '210.000' },
    { name: 'Bank of Ceylon', y2022: '135.000', y2023: '150.000', y2024: '165.000', y2025: '175.000', y2026: '180.000' },
    { name: 'Sri Lanka Telecom PLC', y2022: '92.000', y2023: '98.500', y2024: '105.000', y2025: '110.500', y2026: '115.200' },
    { name: 'Sri Lanka Ports Authority', y2022: '72.000', y2023: '78.000', y2024: '85.000', y2025: '90.500', y2026: '95.000' },
    { name: 'People\'s Bank', y2022: '65.000', y2023: '70.000', y2024: '76.000', y2025: '81.000', y2026: '85.000' },
    { name: 'Airport & Aviation Services Ltd', y2022: '42.000', y2023: '48.000', y2024: '54.000', y2025: '58.500', y2026: '62.000' }
  ],
  'Non-Strategic SOE Sector Performance': [
    { name: 'National Water Supply & Drainage Board', y2022: '32.000', y2023: '36.000', y2024: '40.000', y2025: '42.500', y2026: '45.000' },
    { name: 'Litro Gas Lanka Ltd', y2022: '24.000', y2023: '26.500', y2024: '29.000', y2025: '30.500', y2026: '32.000' },
    { name: 'State Pharmaceuticals Corp', y2022: '20.000', y2023: '22.500', y2024: '25.000', y2025: '26.800', y2026: '28.000' },
    { name: 'Lanka Hospitals PLC', y2022: '13.000', y2023: '14.500', y2024: '16.000', y2025: '17.200', y2026: '18.500' },
    { name: 'Sri Lanka Railway Dept', y2022: '10.500', y2023: '12.000', y2024: '13.200', y2025: '14.000', y2026: '15.000' },
    { name: 'Sri Lanka Transport Board (SLTB)', y2022: '9.000', y2023: '10.200', y2024: '11.500', y2025: '12.000', y2026: '12.800' }
  ],

  // --- STRATEGIC NET PROFIT SOEs (25 SOEs) ---
  'Total Revenue (Strategic SOEs - Net Profit)': [
    { name: '1. Bank of Ceylon', y2022: '135.000', y2023: '150.000', y2024: '165.000', y2025: '175.000', y2026: '180.000' },
    { name: '2. People\'s Bank', y2022: '110.000', y2023: '122.000', y2024: '132.000', y2025: '140.000', y2026: '145.000' },
    { name: '3. Sri Lanka Telecom PLC', y2022: '92.000', y2023: '98.500', y2024: '105.000', y2025: '110.500', y2026: '115.200' },
    { name: '4. Sri Lanka Ports Authority', y2022: '72.000', y2023: '78.000', y2024: '85.000', y2025: '90.500', y2026: '95.000' },
    { name: '5. Airport & Aviation Services Ltd', y2022: '42.000', y2023: '48.000', y2024: '54.000', y2025: '58.500', y2026: '62.000' },
    { name: '6. National Savings Bank', y2022: '41.000', y2023: '46.000', y2024: '50.500', y2025: '55.000', y2026: '58.000' },
    { name: '7. Sri Lanka Insurance Corporation', y2022: '35.000', y2023: '38.500', y2024: '42.000', y2025: '45.000', y2026: '48.000' },
    { name: '8. Litro Gas Lanka Ltd', y2022: '24.000', y2023: '26.500', y2024: '29.000', y2025: '30.500', y2026: '32.000' },
    { name: '9. State Pharmaceuticals Corporation', y2022: '20.000', y2023: '22.500', y2024: '25.000', y2025: '26.800', y2026: '28.000' },
    { name: '10. Lanka Electricity Co (LECO)', y2022: '17.500', y2023: '19.000', y2024: '21.000', y2025: '22.500', y2026: '24.000' },
    { name: '11. Development Lotteries Board', y2022: '13.500', y2023: '15.000', y2024: '16.500', y2025: '17.500', y2026: '18.500' },
    { name: '12. National Lotteries Board', y2022: '12.000', y2023: '13.200', y2024: '14.500', y2025: '15.500', y2026: '16.200' },
    { name: '13. Sri Lanka Ports Management Co', y2022: '10.000', y2023: '11.200', y2024: '12.500', y2025: '13.200', y2026: '14.000' },
    { name: '14. Civil Aviation Authority of Sri Lanka', y2022: '8.500', y2023: '9.500', y2024: '10.500', y2025: '11.200', y2026: '12.100' },
    { name: '15. Marine Environment Protection Authority', y2022: '7.000', y2023: '7.800', y2024: '8.500', y2025: '9.200', y2026: '9.800' },
    { name: '16. Lanka IOC Public Share Unit', y2022: '6.200', y2023: '6.800', y2024: '7.500', y2025: '8.000', y2026: '8.500' },
    { name: '17. Export Development Board', y2022: '5.000', y2023: '5.600', y2024: '6.200', y2025: '6.800', y2026: '7.200' },
    { name: '18. Sri Lanka Standards Institution', y2022: '4.200', y2023: '4.800', y2024: '5.200', y2025: '5.700', y2026: '6.100' },
    { name: '19. Tea Small Holdings Dev Authority', y2022: '3.800', y2023: '4.200', y2024: '4.600', y2025: '5.000', y2026: '5.400' },
    { name: '20. Coconut Development Authority', y2022: '3.200', y2023: '3.600', y2024: '4.000', y2025: '4.400', y2026: '4.800' },
    { name: '21. State Timber Corporation', y2022: '2.800', y2023: '3.100', y2024: '3.500', y2025: '3.800', y2026: '4.100' },
    { name: '22. Central Engineering Consultancy Bureau', y2022: '2.400', y2023: '2.700', y2024: '3.000', y2025: '3.200', y2026: '3.500' },
    { name: '23. Lanka Phosphate Ltd', y2022: '1.900', y2023: '2.100', y2024: '2.400', y2025: '2.600', y2026: '2.800' },
    { name: '24. Sri Lanka Handicrafts Board (Laksala)', y2022: '1.200', y2023: '1.400', y2024: '1.600', y2025: '1.800', y2026: '1.900' },
    { name: '25. State Printing Corporation', y2022: '0.800', y2023: '0.900', y2024: '1.000', y2025: '1.100', y2026: '1.200' }
  ],

  // --- STRATEGIC NET LOSS SOEs (5 SOEs) ---
  'Total Revenue (Strategic SOEs - Net Loss)': [
    { name: '1. Ceylon Petroleum Corporation (CPC)', y2022: '380.000', y2023: '410.000', y2024: '430.000', y2025: '445.000', y2026: '450.000' },
    { name: '2. Ceylon Electricity Board (CEB)', y2022: '310.000', y2023: '340.000', y2024: '365.000', y2025: '380.000', y2026: '390.000' },
    { name: '3. SriLankan Airlines Ltd', y2022: '160.000', y2023: '180.000', y2024: '195.000', y2025: '205.000', y2026: '210.000' },
    { name: '4. Sri Lanka Railway Department', y2022: '10.500', y2023: '12.000', y2024: '13.200', y2025: '14.000', y2026: '15.000' },
    { name: '5. Sri Lanka Transport Board (SLTB)', y2022: '9.000', y2023: '10.200', y2024: '11.500', y2025: '12.000', y2026: '12.800' }
  ],

  // --- NON-STRATEGIC NET PROFIT SOEs (20 SOEs) ---
  'Total Revenue (Non-Strategic SOEs - Net Profit)': [
    { name: '1. National Water Supply & Drainage Board', y2022: '32.000', y2023: '36.000', y2024: '40.000', y2025: '42.500', y2026: '45.000' },
    { name: '2. Lanka Hospitals PLC', y2022: '13.000', y2023: '14.500', y2024: '16.000', y2025: '17.200', y2026: '18.500' },
    { name: '3. Hotel Developers (Lanka) Ltd', y2022: '8.000', y2023: '9.200', y2024: '10.500', y2025: '11.200', y2026: '12.000' },
    { name: '4. Sri Lanka State Trading Corp', y2022: '6.500', y2023: '7.200', y2024: '8.100', y2025: '8.900', y2026: '9.500' },
    { name: '5. BCI Campus Ltd', y2022: '4.200', y2023: '4.800', y2024: '5.300', y2025: '5.800', y2026: '6.200' },
    { name: '6. Lanka Mineral Sands Ltd', y2022: '3.900', y2023: '4.500', y2024: '5.000', y2025: '5.400', y2026: '5.800' },
    { name: '7. Lanka Sugar Company (Pvt) Ltd', y2022: '3.500', y2023: '3.900', y2024: '4.400', y2025: '4.800', y2026: '5.100' },
    { name: '8. State Engineering Corporation', y2022: '3.100', y2023: '3.500', y2024: '3.900', y2025: '4.200', y2026: '4.600' },
    { name: '9. Urban Development Authority (UDA)', y2022: '2.800', y2023: '3.200', y2024: '3.600', y2025: '3.900', y2026: '4.200' },
    { name: '10. Coast Conservation Department', y2022: '2.500', y2023: '2.900', y2024: '3.200', y2025: '3.500', y2026: '3.800' },
    { name: '11. National Design Centre', y2022: '2.100', y2023: '2.400', y2024: '2.700', y2025: '3.000', y2026: '3.200' },
    { name: '12. Lanka Coal Company (Pvt) Ltd', y2022: '1.900', y2023: '2.200', y2024: '2.500', y2025: '2.700', y2026: '2.900' },
    { name: '13. State Fertilizer Corporation', y2022: '1.600', y2023: '1.900', y2024: '2.100', y2025: '2.300', y2026: '2.500' },
    { name: '14. National Livestock Development Board', y2022: '1.400', y2023: '1.600', y2024: '1.800', y2025: '1.900', y2026: '2.100' },
    { name: '15. Lanka Cement PLC', y2022: '1.200', y2023: '1.300', y2024: '1.500', y2025: '1.600', y2026: '1.800' },
    { name: '16. State Gem & Jewellery Corporation', y2022: '1.000', y2023: '1.100', y2024: '1.300', y2025: '1.400', y2026: '1.500' },
    { name: '17. Sri Lanka Rubber Manufacturing Corp', y2022: '0.800', y2023: '0.900', y2024: '1.000', y2025: '1.100', y2026: '1.200' },
    { name: '18. Ceylon Fisheries Corporation', y2022: '0.600', y2023: '0.700', y2024: '0.800', y2025: '0.850', y2026: '0.900' },
    { name: '19. Ceylon Fishery Harbours Corporation', y2022: '0.400', y2023: '0.500', y2024: '0.600', y2025: '0.650', y2026: '0.700' },
    { name: '20. Building Materials Corporation', y2022: '0.300', y2023: '0.350', y2024: '0.400', y2025: '0.450', y2026: '0.500' }
  ],

  // --- NON-STRATEGIC NET LOSS SOEs (7 SOEs) ---
  'Total Revenue (Non-Strategic SOEs - Net Loss)': [
    { name: '1. Spices & Allied Products Marketing Board', y2022: '2.800', y2023: '3.200', y2024: '3.600', y2025: '3.900', y2026: '4.200' },
    { name: '2. Kahawatte Plantations Entity', y2022: '2.500', y2023: '2.900', y2024: '3.200', y2025: '3.500', y2026: '3.800' },
    { name: '3. Elpitiya Plantations Entity', y2022: '2.100', y2023: '2.400', y2024: '2.700', y2025: '2.900', y2026: '3.100' },
    { name: '4. Kurunegala Plantations Ltd', y2022: '1.600', y2023: '1.900', y2024: '2.100', y2025: '2.300', y2026: '2.500' },
    { name: '5. Chilaw Plantations Ltd', y2022: '1.200', y2023: '1.400', y2024: '1.500', y2025: '1.600', y2026: '1.800' },
    { name: '6. National Paper Company Entity', y2022: '0.800', y2023: '0.900', y2024: '1.000', y2025: '1.100', y2026: '1.200' },
    { name: '7. Ceylon Fertilizer Co Ltd', y2022: '0.600', y2023: '0.700', y2024: '0.800', y2025: '0.850', y2026: '0.900' }
  ]
};

let currentRevenueCategoryKey = '';
let currentRevenuePage = 1;
const revenueItemsPerPage = 5;

function initTotalRevenueChart(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <style>
      .revenue-card-column-layout {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-bottom: 12px;
      }
      .revenue-export-toolbar {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-bottom: 2px;
      }
      .btn-export-revenue {
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
      .btn-export-revenue:hover {
        background: #1d4ed8;
      }
      .rev-sector-box {
        background: var(--card-bg);
        border: 1px solid var(--border-color);
        border-radius: 8px;
        padding: 12px 14px;
        transition: all 0.2s ease-in-out;
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .rev-sector-box.strat {
        border-left: 4px solid var(--strat-color);
      }
      .rev-sector-box.nonstrat {
        border-left: 4px solid var(--nonstrat-color);
      }
      .rev-header-line {
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
      }
      .rev-header-title {
        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;
      }
      .rev-main-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
      }
      .rev-total-block {
        cursor: pointer;
        flex-shrink: 0;
        min-width: 140px;
      }
      .rev-big-num {
        font-size: 20px;
        font-weight: 800;
        color: var(--text-primary);
        line-height: 1.1;
      }
      
      /* Clickable Profit/Loss Revenue Sub-Badges */
      .rev-split-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
        flex-grow: 1;
      }
      .rev-split-badge {
        padding: 6px 10px;
        border-radius: 6px;
        font-size: 11px;
        display: flex;
        flex-direction: column;
        gap: 2px;
        cursor: pointer;
        transition: all 0.15s ease-in-out;
      }
      .rev-split-badge.profit {
        background: #f0fdf4;
        border: 1px solid #bbf7d0;
        color: var(--strat-color);
      }
      .rev-split-badge.loss {
        background: #fef2f2;
        border: 1px solid #fecaca;
        color: var(--danger-red);
      }
      .rev-split-badge:hover {
        transform: translateY(-1px);
        box-shadow: 0 2px 4px rgba(0,0,0,0.08);
      }
      .rev-split-label {
        font-size: 9px;
        font-weight: 700;
        text-transform: uppercase;
        opacity: 0.85;
      }
      .rev-split-value {
        font-size: 13px;
        font-weight: 800;
      }
      .rev-footer-hero {
        background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
        border: 1px solid #bbf7d0;
        border-radius: 10px;
        padding: 14px 18px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
        margin-top: 4px;
      }
      .rev-footer-content {
        display: flex;
        flex-direction: column;
        gap: 3px;
      }
      .rev-footer-title {
        font-size: 13px;
        font-weight: 800;
        color: #14532d;
        display: flex;
        align-items: center;
        gap: 6px;
      }
      .rev-footer-sub {
        font-size: 11px;
        color: #166534;
        font-weight: 500;
        opacity: 0.9;
      }
      .rev-footer-stat {
        display: flex;
        align-items: baseline;
        gap: 4px;
        background: #ffffff;
        border: 1px solid #86efac;
        padding: 6px 14px;
        border-radius: 8px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
        flex-shrink: 0;
      }
      .rev-footer-val {
        font-size: 22px;
        font-weight: 900;
        color: var(--strat-color);
        line-height: 1;
      }
      .rev-footer-unit {
        font-size: 11px;
        font-weight: 700;
        color: var(--text-muted);
        text-transform: uppercase;
      }
    </style>

    <div class="revenue-card-column-layout">
      
      <!-- Export Toolbar -->
      <div class="revenue-export-toolbar">
        <button class="btn-export-revenue" onclick="exportTotalRevenueMultiSheetExcel()">
          📥 Export Total Revenue Report (.xlsx)
        </button>
      </div>

      <!-- 1. Strategic Sector Card (Top) -->
      <div class="rev-sector-box strat">
        <div class="rev-header-line" onclick="openRevenueCategoryModal('Strategic SOE Sector Performance')">
          <span class="rev-header-title" style="color: var(--strat-color);">Strategic Sector</span>
        </div>
        
        <div class="rev-main-row">
          <div class="rev-total-block" onclick="openRevenueCategoryModal('Strategic SOE Sector Performance')">
            <span style="font-size:10px; color:var(--text-muted); font-weight:600; display:block;">Total Revenue:</span>
            <div class="rev-big-num">1,350.000</div>
          </div>

          <!-- Profit and Loss Revenue Sub-Badges -->
          <div class="rev-split-container">
            <div class="rev-split-badge profit" 
                 onclick="openRevenueCategoryModal('Total Revenue (Strategic SOEs - Net Profit)')"
                 title="Click to view revenue trend for all 25 Strategic Net Profit SOEs">
              <span class="rev-split-label">Net Profit SOEs</span>
              <span class="rev-split-value">950.000</span>
            </div>
            <div class="rev-split-badge loss" 
                 onclick="openRevenueCategoryModal('Total Revenue (Strategic SOEs - Net Loss)')"
                 title="Click to view revenue trend for all 5 Strategic Net Loss SOEs">
              <span class="rev-split-label">Net Loss SOEs</span>
              <span class="rev-split-value">400.000</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 2. Non-Strategic Sector Card (Bottom) -->
      <div class="rev-sector-box nonstrat">
        <div class="rev-header-line" onclick="openRevenueCategoryModal('Non-Strategic SOE Sector Performance')">
          <span class="rev-header-title" style="color: var(--nonstrat-color);">Non-Strategic Sector</span>
        </div>
        
        <div class="rev-main-row">
          <div class="rev-total-block" onclick="openRevenueCategoryModal('Non-Strategic SOE Sector Performance')">
            <span style="font-size:10px; color:var(--text-muted); font-weight:600; display:block;">Total Revenue:</span>
            <div class="rev-big-num">710.000</div>
          </div>

          <!-- Profit and Loss Revenue Sub-Badges -->
          <div class="rev-split-container">
            <div class="rev-split-badge profit" 
                 onclick="openRevenueCategoryModal('Total Revenue (Non-Strategic SOEs - Net Profit)')"
                 title="Click to view revenue trend for all 20 Non-Strategic Net Profit SOEs">
              <span class="rev-split-label">Net Profit SOEs</span>
              <span class="rev-split-value">680.000</span>
            </div>
            <div class="rev-split-badge loss" 
                 onclick="openRevenueCategoryModal('Total Revenue (Non-Strategic SOEs - Net Loss)')"
                 title="Click to view revenue trend for all 7 Non-Strategic Net Loss SOEs">
              <span class="rev-split-label">Net Loss SOEs</span>
              <span class="rev-split-value">30.000</span>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="rev-footer-hero">
      <div class="rev-footer-content">
        <span class="rev-footer-title">
          <span>📊</span> National Economic Contribution
        </span>
        <span class="rev-footer-sub">Total SOE Sector Revenue share of Annual National GDP</span>
      </div>
      <div class="rev-footer-stat">
        <span class="rev-footer-val">13.20%</span>
        <span class="rev-footer-unit">GDP Share</span>
      </div>
    </div>

    <!-- Revenue Drill-Down Modal with 5-Year Revenue Trend & Pagination -->
    <div class="modal-overlay" id="revenueCategoryModal">
      <div class="modal" style="width: 750px; max-width: 95%;">
        <div class="modal-header">
          <h3 id="revenueCategoryModalTitle" style="margin:0;">Sector Revenue Register (Values in LKR Billions)</h3>
          <button style="border:none; background:none; font-size:18px; cursor:pointer;" onclick="closeRevenueCategoryModal()">&times;</button>
        </div>
        <p style="color: var(--text-muted); font-size: 11px;">
          Comprehensive breakdown of entities and annual revenue contributions across the past 4 financial years and current year (Values in LKR Billions).
        </p>

        <table>
          <thead>
            <tr>
              <th>SOE Name</th>
              <th>FY 2022</th>
              <th>FY 2023</th>
              <th>FY 2024</th>
              <th>FY 2025</th>
              <th>FY 2026 (Current)</th>
            </tr>
          </thead>
          <tbody id="revenueCategoryTableBody"></tbody>
        </table>

        <!-- Modal Pagination Controls -->
        <div class="pagination-container">
          <button class="pagination-btn" id="revBtnPrev" onclick="changeRevenuePage(-1)">← Previous</button>
          <span class="page-indicator" id="revPageIndicator">Page 1 of 1</span>
          <button class="pagination-btn" id="revBtnNext" onclick="changeRevenuePage(1)">Next →</button>
        </div>
      </div>
    </div>
  `;
}

function openRevenueCategoryModal(sectorKey) {
  currentRevenueCategoryKey = sectorKey;
  currentRevenuePage = 1;
  document.getElementById('revenueCategoryModalTitle').innerText = `${sectorKey} (Values in LKR Billions)`;
  renderRevenuePage();
  document.getElementById('revenueCategoryModal').style.display = 'flex';
}

function renderRevenuePage() {
  const tbody = document.getElementById('revenueCategoryTableBody');
  tbody.innerHTML = '';

  const items = revenueCategoryData[currentRevenueCategoryKey] || [];
  const totalPages = Math.ceil(items.length / revenueItemsPerPage) || 1;

  const startIndex = (currentRevenuePage - 1) * revenueItemsPerPage;
  const pageItems = items.slice(startIndex, startIndex + revenueItemsPerPage);

  pageItems.forEach(item => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${item.name}</strong></td>
      <td>${item.y2022}</td>
      <td>${item.y2023}</td>
      <td>${item.y2024}</td>
      <td>${item.y2025}</td>
      <td style="font-weight:700; color:var(--primary-blue);">${item.y2026}</td>
    `;
    tbody.appendChild(tr);
  });

  document.getElementById('revPageIndicator').innerText = `Page ${currentRevenuePage} of ${totalPages} (${items.length} Total Entities)`;
  document.getElementById('revBtnPrev').disabled = currentRevenuePage === 1;
  document.getElementById('revBtnNext').disabled = currentRevenuePage === totalPages;
}

function changeRevenuePage(direction) {
  const items = revenueCategoryData[currentRevenueCategoryKey] || [];
  const totalPages = Math.ceil(items.length / revenueItemsPerPage) || 1;

  currentRevenuePage += direction;
  if (currentRevenuePage < 1) currentRevenuePage = 1;
  if (currentRevenuePage > totalPages) currentRevenuePage = totalPages;

  renderRevenuePage();
}

function closeRevenueCategoryModal() {
  document.getElementById('revenueCategoryModal').style.display = 'none';
}

// Multi-Worksheet XML-based .xlsx Generator for Total Sector Revenue
async function exportTotalRevenueMultiSheetExcel() {
  const currentYear = typeof selectedYear !== 'undefined' ? selectedYear : '2025';

  const now = new Date();
  const dd = String(now.getDate()).padStart(2, '0');
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const yyyy = now.getFullYear();
  const hh = String(now.getHours()).padStart(2, '0');
  const min = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');
  const timestamp = `${dd}${mm}${yyyy}_${hh}${min}${ss}`;
  const filename = `TotalSectorRevenue_${timestamp}.xlsx`;

  const escapeXML = (str) => String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  const buildRevenueSheetXML = (title, subtitle, categoryKey) => {
    let rows = [];
    let r = 1;

    // Title & Subtitle
    rows.push(`<row r="${r}"><c r="A${r}" t="inlineStr" s="1"><is><t>${escapeXML(title)}</t></is></c></row>`);
    r++;
    rows.push(`<row r="${r}"><c r="A${r}" t="inlineStr" s="2"><is><t>${escapeXML(subtitle)}</t></is></c></row>`);
    r += 2;

    // Header Row
    rows.push(`
      <row r="${r}">
        <c r="A${r}" t="inlineStr" s="3"><is><t>SOE Name</t></is></c>
        <c r="B${r}" t="inlineStr" s="3"><is><t>FY 2022</t></is></c>
        <c r="C${r}" t="inlineStr" s="3"><is><t>FY 2023</t></is></c>
        <c r="D${r}" t="inlineStr" s="3"><is><t>FY 2024</t></is></c>
        <c r="E${r}" t="inlineStr" s="3"><is><t>FY 2025</t></is></c>
        <c r="F${r}" t="inlineStr" s="3"><is><t>FY 2026 (Current)</t></is></c>
      </row>`);
    r++;

    const items = revenueCategoryData[categoryKey] || [];

    items.forEach(item => {
      rows.push(`
        <row r="${r}">
          <c r="A${r}" t="inlineStr" s="4"><is><t>${escapeXML(item.name)}</t></is></c>
          <c r="B${r}" s="5"><v>${parseFloat(item.y2022) || 0}</v></c>
          <c r="C${r}" s="5"><v>${parseFloat(item.y2023) || 0}</v></c>
          <c r="D${r}" s="5"><v>${parseFloat(item.y2024) || 0}</v></c>
          <c r="E${r}" s="5"><v>${parseFloat(item.y2025) || 0}</v></c>
          <c r="F${r}" s="5"><v>${parseFloat(item.y2026) || 0}</v></c>
        </row>`);
      r++;
    });

    return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
      <worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
        <cols>
          <col min="1" max="1" width="42" customWidth="1"/>
          <col min="2" max="6" width="18" customWidth="1"/>
        </cols>
        <sheetData>${rows.join('')}</sheetData>
      </worksheet>`;
  };

  const sheets = [
    {
      name: "Strategic Profitable",
      xml: buildRevenueSheetXML(
        "PEDMIS - Strategic Profitable SOEs Total Revenue (5-Year Trend)",
        `Active Timeframe: FY ${currentYear} | Currency Unit: In LKR Billions | Total Revenue: 950.000`,
        "Total Revenue (Strategic SOEs - Net Profit)"
      )
    },
    {
      name: "Strategic Loss",
      xml: buildRevenueSheetXML(
        "PEDMIS - Strategic Loss SOEs Total Revenue (5-Year Trend)",
        `Active Timeframe: FY ${currentYear} | Currency Unit: In LKR Billions | Total Revenue: 400.000`,
        "Total Revenue (Strategic SOEs - Net Loss)"
      )
    },
    {
      name: "Non-Strategic Profitable",
      xml: buildRevenueSheetXML(
        "PEDMIS - Non-Strategic Profitable SOEs Total Revenue (5-Year Trend)",
        `Active Timeframe: FY ${currentYear} | Currency Unit: In LKR Billions | Total Revenue: 680.000`,
        "Total Revenue (Non-Strategic SOEs - Net Profit)"
      )
    },
    {
      name: "Non-Strategic Loss",
      xml: buildRevenueSheetXML(
        "PEDMIS - Non-Strategic Loss SOEs Total Revenue (5-Year Trend)",
        `Active Timeframe: FY ${currentYear} | Currency Unit: In LKR Billions | Total Revenue: 30.000`,
        "Total Revenue (Non-Strategic SOEs - Net Loss)"
      )
    }
  ];

  const stylesXML = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
      <numFmts count="1">
        <numFmt numFmtId="164" formatCode="#,##0.000;(#,##0.000);0.000"/>
      </numFmts>
      <fonts count="5">
        <font><name val="Calibri"/><sz val="11"/></font>
        <font><b/><name val="Calibri"/><sz val="13"/><color rgb="FF0F172A"/></font>
        <font><i/><name val="Calibri"/><sz val="10"/><color rgb="FF64748B"/></font>
        <font><b/><name val="Calibri"/><sz val="11"/><color rgb="FFFFFFFF"/></font>
        <font><b/><name val="Calibri"/><sz val="11"/></font>
      </fonts>
      <fills count="3">
        <fill><patternFill patternType="none"/></fill>
        <fill><patternFill patternType="gray125"/></fill>
        <fill><patternFill patternType="solid"><fgColor rgb="FF1E293B"/></patternFill></fill>
      </fills>
      <borders count="2">
        <border><left/><right/><top/><bottom/></border>
        <border>
          <left style="thin"><color rgb="FFCBD5E1"/></left>
          <right style="thin"><color rgb="FFCBD5E1"/></right>
          <top style="thin"><color rgb="FFCBD5E1"/></top>
          <bottom style="thin"><color rgb="FFCBD5E1"/></bottom>
        </border>
      </borders>
      <cellXfs count="6">
        <xf numFmtId="0" fontId="0" fillId="0" borderId="0"/>
        <xf numFmtId="0" fontId="1" fillId="0" borderId="0"/>
        <xf numFmtId="0" fontId="2" fillId="0" borderId="0"/>
        <xf numFmtId="0" fontId="3" fillId="2" borderId="1" applyAlignment="1"><alignment horizontal="center"/></xf>
        <xf numFmtId="0" fontId="4" fillId="0" borderId="1"/>
        <xf numFmtId="164" fontId="0" fillId="0" borderId="1" applyNumberFormat="1" applyAlignment="1"><alignment horizontal="right"/></xf>
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