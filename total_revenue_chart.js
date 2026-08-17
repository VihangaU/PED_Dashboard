/**
 * Total Sector Revenue & GDP Share Component for PEDMIS Dashboard
 * Renders Revenue metrics for Strategic and Non-Strategic SOEs.
 * Features:
 * - Sub-category badges show Revenue values for Net Profit / Net Loss SOE groupings.
 * - Drill-down popups display SOE Name with 5-Year Historical & Current Trends (FY 2022 - FY 2026).
 * - Pagination controls supporting multi-year table navigation.
 */

const revenueCategoryData = {
  // Sector Full Overviews
  'Strategic SOE Sector Performance': [
    { name: 'Ceylon Petroleum Corp (CPC)', y2022: '380.0B', y2023: '410.0B', y2024: '430.0B', y2025: '445.0B', y2026: '450.0B' },
    { name: 'Ceylon Electricity Board (CEB)', y2022: '310.0B', y2023: '340.0B', y2024: '365.0B', y2025: '380.0B', y2026: '390.0B' },
    { name: 'SriLankan Airlines Ltd', y2022: '160.0B', y2023: '180.0B', y2024: '195.0B', y2025: '205.0B', y2026: '210.0B' },
    { name: 'Bank of Ceylon', y2022: '135.0B', y2023: '150.0B', y2024: '165.0B', y2025: '175.0B', y2026: '180.0B' },
    { name: 'Sri Lanka Telecom PLC', y2022: '92.0B', y2023: '98.5B', y2024: '105.0B', y2025: '110.5B', y2026: '115.2B' },
    { name: 'Sri Lanka Ports Authority', y2022: '72.0B', y2023: '78.0B', y2024: '85.0B', y2025: '90.5B', y2026: '95.0B' },
    { name: 'People\'s Bank', y2022: '65.0B', y2023: '70.0B', y2024: '76.0B', y2025: '81.0B', y2026: '85.0B' },
    { name: 'Airport & Aviation Services Ltd', y2022: '42.0B', y2023: '48.0B', y2024: '54.0B', y2025: '58.5B', y2026: '62.0B' }
  ],
  'Non-Strategic SOE Sector Performance': [
    { name: 'National Water Supply & Drainage Board', y2022: '32.0B', y2023: '36.0B', y2024: '40.0B', y2025: '42.5B', y2026: '45.0B' },
    { name: 'Litro Gas Lanka Ltd', y2022: '24.0B', y2023: '26.5B', y2024: '29.0B', y2025: '30.5B', y2026: '32.0B' },
    { name: 'State Pharmaceuticals Corp', y2022: '20.0B', y2023: '22.5B', y2024: '25.0B', y2025: '26.8B', y2026: '28.0B' },
    { name: 'Lanka Hospitals PLC', y2022: '13.0B', y2023: '14.5B', y2024: '16.0B', y2025: '17.2B', y2026: '18.5B' },
    { name: 'Sri Lanka Railway Dept', y2022: '10.5B', y2023: '12.0B', y2024: '13.2B', y2025: '14.0B', y2026: '15.0B' },
    { name: 'Sri Lanka Transport Board (SLTB)', y2022: '9.0B', y2023: '10.2B', y2024: '11.5B', y2025: '12.0B', y2026: '12.8B' }
  ],

  // --- STRATEGIC NET PROFIT SOEs (25 SOEs) ---
  'Total Revenue (Strategic SOEs - Net Profit)': [
    { name: '1. Bank of Ceylon', y2022: '135.0B', y2023: '150.0B', y2024: '165.0B', y2025: '175.0B', y2026: '180.0B' },
    { name: '2. People\'s Bank', y2022: '110.0B', y2023: '122.0B', y2024: '132.0B', y2025: '140.0B', y2026: '145.0B' },
    { name: '3. Sri Lanka Telecom PLC', y2022: '92.0B', y2023: '98.5B', y2024: '105.0B', y2025: '110.5B', y2026: '115.2B' },
    { name: '4. Sri Lanka Ports Authority', y2022: '72.0B', y2023: '78.0B', y2024: '85.0B', y2025: '90.5B', y2026: '95.0B' },
    { name: '5. Airport & Aviation Services Ltd', y2022: '42.0B', y2023: '48.0B', y2024: '54.0B', y2025: '58.5B', y2026: '62.0B' },
    { name: '6. National Savings Bank', y2022: '41.0B', y2023: '46.0B', y2024: '50.5B', y2025: '55.0B', y2026: '58.0B' },
    { name: '7. Sri Lanka Insurance Corporation', y2022: '35.0B', y2023: '38.5B', y2024: '42.0B', y2025: '45.0B', y2026: '48.0B' },
    { name: '8. Litro Gas Lanka Ltd', y2022: '24.0B', y2023: '26.5B', y2024: '29.0B', y2025: '30.5B', y2026: '32.0B' },
    { name: '9. State Pharmaceuticals Corporation', y2022: '20.0B', y2023: '22.5B', y2024: '25.0B', y2025: '26.8B', y2026: '28.0B' },
    { name: '10. Lanka Electricity Co (LECO)', y2022: '17.5B', y2023: '19.0B', y2024: '21.0B', y2025: '22.5B', y2026: '24.0B' },
    { name: '11. Development Lotteries Board', y2022: '13.5B', y2023: '15.0B', y2024: '16.5B', y2025: '17.5B', y2026: '18.5B' },
    { name: '12. National Lotteries Board', y2022: '12.0B', y2023: '13.2B', y2024: '14.5B', y2025: '15.5B', y2026: '16.2B' },
    { name: '13. Sri Lanka Ports Management Co', y2022: '10.0B', y2023: '11.2B', y2024: '12.5B', y2025: '13.2B', y2026: '14.0B' },
    { name: '14. Civil Aviation Authority of Sri Lanka', y2022: '8.5B', y2023: '9.5B', y2024: '10.5B', y2025: '11.2B', y2026: '12.1B' },
    { name: '15. Marine Environment Protection Authority', y2022: '7.0B', y2023: '7.8B', y2024: '8.5B', y2025: '9.2B', y2026: '9.8B' },
    { name: '16. Lanka IOC Public Share Unit', y2022: '6.2B', y2023: '6.8B', y2024: '7.5B', y2025: '8.0B', y2026: '8.5B' },
    { name: '17. Export Development Board', y2022: '5.0B', y2023: '5.6B', y2024: '6.2B', y2025: '6.8B', y2026: '7.2B' },
    { name: '18. Sri Lanka Standards Institution', y2022: '4.2B', y2023: '4.8B', y2024: '5.2B', y2025: '5.7B', y2026: '6.1B' },
    { name: '19. Tea Small Holdings Dev Authority', y2022: '3.8B', y2023: '4.2B', y2024: '4.6B', y2025: '5.0B', y2026: '5.4B' },
    { name: '20. Coconut Development Authority', y2022: '3.2B', y2023: '3.6B', y2024: '4.0B', y2025: '4.4B', y2026: '4.8B' },
    { name: '21. State Timber Corporation', y2022: '2.8B', y2023: '3.1B', y2024: '3.5B', y2025: '3.8B', y2026: '4.1B' },
    { name: '22. Central Engineering Consultancy Bureau', y2022: '2.4B', y2023: '2.7B', y2024: '3.0B', y2025: '3.2B', y2026: '3.5B' },
    { name: '23. Lanka Phosphate Ltd', y2022: '1.9B', y2023: '2.1B', y2024: '2.4B', y2025: '2.6B', y2026: '2.8B' },
    { name: '24. Sri Lanka Handicrafts Board (Laksala)', y2022: '1.2B', y2023: '1.4B', y2024: '1.6B', y2025: '1.8B', y2026: '1.9B' },
    { name: '25. State Printing Corporation', y2022: '0.8B', y2023: '0.9B', y2024: '1.0B', y2025: '1.1B', y2026: '1.2B' }
  ],

  // --- STRATEGIC NET LOSS SOEs (5 SOEs) ---
  'Total Revenue (Strategic SOEs - Net Loss)': [
    { name: '1. Ceylon Petroleum Corporation (CPC)', y2022: '380.0B', y2023: '410.0B', y2024: '430.0B', y2025: '445.0B', y2026: '450.0B' },
    { name: '2. Ceylon Electricity Board (CEB)', y2022: '310.0B', y2023: '340.0B', y2024: '365.0B', y2025: '380.0B', y2026: '390.0B' },
    { name: '3. SriLankan Airlines Ltd', y2022: '160.0B', y2023: '180.0B', y2024: '195.0B', y2025: '205.0B', y2026: '210.0B' },
    { name: '4. Sri Lanka Railway Department', y2022: '10.5B', y2023: '12.0B', y2024: '13.2B', y2025: '14.0B', y2026: '15.0B' },
    { name: '5. Sri Lanka Transport Board (SLTB)', y2022: '9.0B', y2023: '10.2B', y2024: '11.5B', y2025: '12.0B', y2026: '12.8B' }
  ],

  // --- NON-STRATEGIC NET PROFIT SOEs (20 SOEs) ---
  'Total Revenue (Non-Strategic SOEs - Net Profit)': [
    { name: '1. National Water Supply & Drainage Board', y2022: '32.0B', y2023: '36.0B', y2024: '40.0B', y2025: '42.5B', y2026: '45.0B' },
    { name: '2. Lanka Hospitals PLC', y2022: '13.0B', y2023: '14.5B', y2024: '16.0B', y2025: '17.2B', y2026: '18.5B' },
    { name: '3. Hotel Developers (Lanka) Ltd', y2022: '8.0B', y2023: '9.2B', y2024: '10.5B', y2025: '11.2B', y2026: '12.0B' },
    { name: '4. Sri Lanka State Trading Corp', y2022: '6.5B', y2023: '7.2B', y2024: '8.1B', y2025: '8.9B', y2026: '9.5B' },
    { name: '5. BCI Campus Ltd', y2022: '4.2B', y2023: '4.8B', y2024: '5.3B', y2025: '5.8B', y2026: '6.2B' },
    { name: '6. Lanka Mineral Sands Ltd', y2022: '3.9B', y2023: '4.5B', y2024: '5.0B', y2025: '5.4B', y2026: '5.8B' },
    { name: '7. Lanka Sugar Company (Pvt) Ltd', y2022: '3.5B', y2023: '3.9B', y2024: '4.4B', y2025: '4.8B', y2026: '5.1B' },
    { name: '8. State Engineering Corporation', y2022: '3.1B', y2023: '3.5B', y2024: '3.9B', y2025: '4.2B', y2026: '4.6B' },
    { name: '9. Urban Development Authority (UDA)', y2022: '2.8B', y2023: '3.2B', y2024: '3.6B', y2025: '3.9B', y2026: '4.2B' },
    { name: '10. Coast Conservation Department', y2022: '2.5B', y2023: '2.9B', y2024: '3.2B', y2025: '3.5B', y2026: '3.8B' },
    { name: '11. National Design Centre', y2022: '2.1B', y2023: '2.4B', y2024: '2.7B', y2025: '3.0B', y2026: '3.2B' },
    { name: '12. Lanka Coal Company (Pvt) Ltd', y2022: '1.9B', y2023: '2.2B', y2024: '2.5B', y2025: '2.7B', y2026: '2.9B' },
    { name: '13. State Fertilizer Corporation', y2022: '1.6B', y2023: '1.9B', y2024: '2.1B', y2025: '2.3B', y2026: '2.5B' },
    { name: '14. National Livestock Development Board', y2022: '1.4B', y2023: '1.6B', y2024: '1.8B', y2025: '1.9B', y2026: '2.1B' },
    { name: '15. Lanka Cement PLC', y2022: '1.2B', y2023: '1.3B', y2024: '1.5B', y2025: '1.6B', y2026: '1.8B' },
    { name: '16. State Gem & Jewellery Corporation', y2022: '1.0B', y2023: '1.1B', y2024: '1.3B', y2025: '1.4B', y2026: '1.5B' },
    { name: '17. Sri Lanka Rubber Manufacturing Corp', y2022: '0.8B', y2023: '0.9B', y2024: '1.0B', y2025: '1.1B', y2026: '1.2B' },
    { name: '18. Ceylon Fisheries Corporation', y2022: '0.6B', y2023: '0.7B', y2024: '0.8B', y2025: '0.85B', y2026: '0.9B' },
    { name: '19. Ceylon Fishery Harbours Corporation', y2022: '0.4B', y2023: '0.5B', y2024: '0.6B', y2025: '0.65B', y2026: '0.7B' },
    { name: '20. Building Materials Corporation', y2022: '0.3B', y2023: '0.35B', y2024: '0.4B', y2025: '0.45B', y2026: '0.5B' }
  ],

  // --- NON-STRATEGIC NET LOSS SOEs (7 SOEs) ---
  'Total Revenue (Non-Strategic SOEs - Net Loss)': [
    { name: '1. Spices & Allied Products Marketing Board', y2022: '2.8B', y2023: '3.2B', y2024: '3.6B', y2025: '3.9B', y2026: '4.2B' },
    { name: '2. Kahawatte Plantations Entity', y2022: '2.5B', y2023: '2.9B', y2024: '3.2B', y2025: '3.5B', y2026: '3.8B' },
    { name: '3. Elpitiya Plantations Entity', y2022: '2.1B', y2023: '2.4B', y2024: '2.7B', y2025: '2.9B', y2026: '3.1B' },
    { name: '4. Kurunegala Plantations Ltd', y2022: '1.6B', y2023: '1.9B', y2024: '2.1B', y2025: '2.3B', y2026: '2.5B' },
    { name: '5. Chilaw Plantations Ltd', y2022: '1.2B', y2023: '1.4B', y2024: '1.5B', y2025: '1.6B', y2026: '1.8B' },
    { name: '6. National Paper Company Entity', y2022: '0.8B', y2023: '0.9B', y2024: '1.0B', y2025: '1.1B', y2026: '1.2B' },
    { name: '7. Ceylon Fertilizer Co Ltd', y2022: '0.6B', y2023: '0.7B', y2024: '0.8B', y2025: '0.85B', y2026: '0.9B' }
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
      .revenue-card-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
        margin-bottom: 12px;
      }
      .rev-sector-box {
        background: var(--card-bg);
        border: 1px solid var(--border-color);
        border-radius: 8px;
        padding: 12px;
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
        font-size: 11px;
        font-weight: 700;
        text-transform: uppercase;
        color: var(--text-muted);
      }
      .rev-big-num {
        font-size: 18px;
        font-weight: 800;
        color: var(--text-primary);
        margin: 2px 0;
        cursor: pointer;
      }
      .rev-gdp-pill {
        font-size: 10px;
        font-weight: 700;
        background: var(--accent-bg);
        color: var(--primary-blue);
        padding: 2px 6px;
        border-radius: 10px;
      }
      
      /* Clickable Profit/Loss Revenue Sub-Badges */
      .rev-split-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 6px;
        margin-top: 2px;
      }
      .rev-split-badge {
        padding: 6px 8px;
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
        font-size: 12px;
        font-weight: 800;
      }
      .rev-footer-info {
        font-size: 11px;
        color: var(--strat-color);
        font-weight: 600;
        background: var(--accent-bg);
        padding: 8px 12px;
        border-radius: 6px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    </style>

    <div class="revenue-card-grid">
      
      <!-- Strategic Sector Card -->
      <div class="rev-sector-box strat">
        <div class="rev-header-line" onclick="openRevenueCategoryModal('Strategic SOE Sector Performance')">
          <span class="rev-header-title" style="color: var(--strat-color);">Strategic Sector</span>
        </div>
        <div onclick="openRevenueCategoryModal('Strategic SOE Sector Performance')">
          <span style="font-size:10px; color:var(--text-muted); font-weight:600;">Total Revenue:</span>
          <div class="rev-big-num">1,350.0B</div>
        </div>

        <!-- Profit and Loss Revenue Sub-Badges -->
        <div class="rev-split-container">
          <div class="rev-split-badge profit" 
               onclick="openRevenueCategoryModal('Total Revenue (Strategic SOEs - Net Profit)')"
               title="Click to view revenue trend for all 25 Strategic Net Profit SOEs">
            <span class="rev-split-label">Net Profit SOEs</span>
            <span class="rev-split-value">950.0B</span>
          </div>
          <div class="rev-split-badge loss" 
               onclick="openRevenueCategoryModal('Total Revenue (Strategic SOEs - Net Loss)')"
               title="Click to view revenue trend for all 5 Strategic Net Loss SOEs">
            <span class="rev-split-label">Net Loss SOEs</span>
            <span class="rev-split-value">400.0B</span>
          </div>
        </div>
      </div>

      <!-- Non-Strategic Sector Card -->
      <div class="rev-sector-box nonstrat">
        <div class="rev-header-line" onclick="openRevenueCategoryModal('Non-Strategic SOE Sector Performance')">
          <span class="rev-header-title" style="color: var(--nonstrat-color);">Non-Strategic Sector</span>
        </div>
        <div onclick="openRevenueCategoryModal('Non-Strategic SOE Sector Performance')">
          <span style="font-size:10px; color:var(--text-muted); font-weight:600;">Total Revenue:</span>
          <div class="rev-big-num">710.0B</div>
        </div>

        <!-- Profit and Loss Revenue Sub-Badges -->
        <div class="rev-split-container">
          <div class="rev-split-badge profit" 
               onclick="openRevenueCategoryModal('Total Revenue (Non-Strategic SOEs - Net Profit)')"
               title="Click to view revenue trend for all 20 Non-Strategic Net Profit SOEs">
            <span class="rev-split-label">Net Profit SOEs</span>
            <span class="rev-split-value">680.0B</span>
          </div>
          <div class="rev-split-badge loss" 
               onclick="openRevenueCategoryModal('Total Revenue (Non-Strategic SOEs - Net Loss)')"
               title="Click to view revenue trend for all 7 Non-Strategic Net Loss SOEs">
            <span class="rev-split-label">Net Loss SOEs</span>
            <span class="rev-split-value">30.0B</span>
          </div>
        </div>
      </div>

    </div>

    <div class="rev-footer-info">
      <span>Total SOE Revenue to National GDP: <strong>13.2%</strong></span>
      <span style="font-size: 10px; opacity: 0.8;">(Calculated using latest quarterly GDP)</span>
    </div>

    <!-- Revenue Drill-Down Modal with 5-Year Revenue Trend & Pagination -->
    <div class="modal-overlay" id="revenueCategoryModal">
      <div class="modal" style="width: 750px; max-width: 95%;">
        <div class="modal-header">
          <h3 id="revenueCategoryModalTitle" style="margin:0;">Sector Revenue Register (5-Year Trend)</h3>
          <button style="border:none; background:none; font-size:18px; cursor:pointer;" onclick="closeRevenueCategoryModal()">&times;</button>
        </div>
        <p style="color: var(--text-muted); font-size: 11px;">
          Comprehensive breakdown of entities and annual revenue contributions across the past 4 financial years and current year.
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
  document.getElementById('revenueCategoryModalTitle').innerText = sectorKey;
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