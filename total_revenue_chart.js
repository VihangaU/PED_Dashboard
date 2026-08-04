/**
 * Total Sector Revenue & GDP Share Component for PEDMIS Dashboard
 * Renders Revenue metrics for Strategic and Non-Strategic SOEs.
 * Features:
 * - Sub-category badges show Revenue values for Net Profit / Net Loss SOE groupings.
 * - Drill-down popups display SOE Name and Revenue with built-in Pagination.
 */

const revenueCategoryData = {
  // Sector Full Overviews
  'Strategic SOE Sector Performance': [
    { name: 'Ceylon Petroleum Corp (CPC)', rev: '450.0B' },
    { name: 'Ceylon Electricity Board (CEB)', rev: '390.0B' },
    { name: 'SriLankan Airlines Ltd', rev: '210.0B' },
    { name: 'Bank of Ceylon', rev: '180.0B' },
    { name: 'Sri Lanka Telecom PLC', rev: '115.2B' },
    { name: 'Sri Lanka Ports Authority', rev: '95.0B' },
    { name: 'People\'s Bank', rev: '85.0B' },
    { name: 'Airport & Aviation Services Ltd', rev: '62.0B' }
  ],
  'Non-Strategic SOE Sector Performance': [
    { name: 'National Water Supply & Drainage Board', rev: '45.0B' },
    { name: 'Litro Gas Lanka Ltd', rev: '32.0B' },
    { name: 'State Pharmaceuticals Corp', rev: '28.0B' },
    { name: 'Lanka Hospitals PLC', rev: '18.5B' },
    { name: 'Sri Lanka Railway Dept', rev: '15.0B' },
    { name: 'Sri Lanka Transport Board (SLTB)', rev: '12.8B' }
  ],

  // --- STRATEGIC NET PROFIT SOEs (25 SOEs Total Revenue: 950.0B) ---
  'Strategic Sector - Net Profit SOEs Revenue Breakdown (25 SOEs)': [
    { name: '1. Bank of Ceylon', rev: '180.0B' },
    { name: '2. People\'s Bank', rev: '145.0B' },
    { name: '3. Sri Lanka Telecom PLC', rev: '115.2B' },
    { name: '4. Sri Lanka Ports Authority', rev: '95.0B' },
    { name: '5. Airport & Aviation Services Ltd', rev: '62.0B' },
    { name: '6. National Savings Bank', rev: '58.0B' },
    { name: '7. Sri Lanka Insurance Corporation', rev: '48.0B' },
    { name: '8. Litro Gas Lanka Ltd', rev: '32.0B' },
    { name: '9. State Pharmaceuticals Corporation', rev: '28.0B' },
    { name: '10. Lanka Electricity Co (LECO)', rev: '24.0B' },
    { name: '11. Development Lotteries Board', rev: '18.5B' },
    { name: '12. National Lotteries Board', rev: '16.2B' },
    { name: '13. Sri Lanka Ports Management Co', rev: '14.0B' },
    { name: '14. Civil Aviation Authority of Sri Lanka', rev: '12.1B' },
    { name: '15. Marine Environment Protection Authority', rev: '9.8B' },
    { name: '16. Lanka IOC Public Share Unit', rev: '8.5B' },
    { name: '17. Export Development Board', rev: '7.2B' },
    { name: '18. Sri Lanka Standards Institution', rev: '6.1B' },
    { name: '19. Tea Small Holdings Dev Authority', rev: '5.4B' },
    { name: '20. Coconut Development Authority', rev: '4.8B' },
    { name: '21. State Timber Corporation', rev: '4.1B' },
    { name: '22. Central Engineering Consultancy Bureau', rev: '3.5B' },
    { name: '23. Lanka Phosphate Ltd', rev: '2.8B' },
    { name: '24. Sri Lanka Handicrafts Board (Laksala)', rev: '1.9B' },
    { name: '25. State Printing Corporation', rev: '1.2B' }
  ],

  // --- STRATEGIC NET LOSS SOEs (5 SOEs Total Revenue: 400.0B) ---
  'Strategic Sector - Net Loss SOEs Revenue Breakdown (5 SOEs)': [
    { name: '1. Ceylon Petroleum Corporation (CPC)', rev: '450.0B' },
    { name: '2. Ceylon Electricity Board (CEB)', rev: '390.0B' },
    { name: '3. SriLankan Airlines Ltd', rev: '210.0B' },
    { name: '4. Sri Lanka Railway Department', rev: '15.0B' },
    { name: '5. Sri Lanka Transport Board (SLTB)', rev: '12.8B' }
  ],

  // --- NON-STRATEGIC NET PROFIT SOEs (20 SOEs Total Revenue: 680.0B) ---
  'Non-Strategic Sector - Net Profit SOEs Revenue Breakdown (20 SOEs)': [
    { name: '1. National Water Supply & Drainage Board', rev: '45.0B' },
    { name: '2. Lanka Hospitals PLC', rev: '18.5B' },
    { name: '3. Hotel Developers (Lanka) Ltd', rev: '12.0B' },
    { name: '4. Sri Lanka State Trading Corp', rev: '9.5B' },
    { name: '5. BCI Campus Ltd', rev: '6.2B' },
    { name: '6. Lanka Mineral Sands Ltd', rev: '5.8B' },
    { name: '7. Lanka Sugar Company (Pvt) Ltd', rev: '5.1B' },
    { name: '8. State Engineering Corporation', rev: '4.6B' },
    { name: '9. Urban Development Authority (UDA)', rev: '4.2B' },
    { name: '10. Coast Conservation Department', rev: '3.8B' },
    { name: '11. National Design Centre', rev: '3.2B' },
    { name: '12. Lanka Coal Company (Pvt) Ltd', rev: '2.9B' },
    { name: '13. State Fertilizer Corporation', rev: '2.5B' },
    { name: '14. National Livestock Development Board', rev: '2.1B' },
    { name: '15. Lanka Cement PLC', rev: '1.8B' },
    { name: '16. State Gem & Jewellery Corporation', rev: '1.5B' },
    { name: '17. Sri Lanka Rubber Manufacturing Corp', rev: '1.2B' },
    { name: '18. Ceylon Fisheries Corporation', rev: '0.9B' },
    { name: '19. Ceylon Fishery Harbours Corporation', rev: '0.7B' },
    { name: '20. Building Materials Corporation', rev: '0.5B' }
  ],

  // --- NON-STRATEGIC NET LOSS SOEs (7 SOEs Total Revenue: 30.0B) ---
  'Non-Strategic Sector - Net Loss SOEs Revenue Breakdown (7 SOEs)': [
    { name: '1. Spices & Allied Products Marketing Board', rev: '4.2B' },
    { name: '2. Kahawatte Plantations Entity', rev: '3.8B' },
    { name: '3. Elpitiya Plantations Entity', rev: '3.1B' },
    { name: '4. Kurunegala Plantations Ltd', rev: '2.5B' },
    { name: '5. Chilaw Plantations Ltd', rev: '1.8B' },
    { name: '6. National Paper Company Entity', rev: '1.2B' },
    { name: '7. Ceylon Fertilizer Co Ltd', rev: '0.9B' }
  ]
};

let currentRevenueCategoryKey = '';
let currentRevenuePage = 1;
const revenueItemsPerPage = 10;

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
               onclick="openRevenueCategoryModal('Strategic Sector - Net Profit SOEs Revenue Breakdown (25 SOEs)')"
               title="Click to view revenue of all 25 Strategic Net Profit SOEs">
            <span class="rev-split-label">Net Profit SOEs</span>
            <span class="rev-split-value">950.0B</span>
          </div>
          <div class="rev-split-badge loss" 
               onclick="openRevenueCategoryModal('Strategic Sector - Net Loss SOEs Revenue Breakdown (5 SOEs)')"
               title="Click to view revenue of all 5 Strategic Net Loss SOEs">
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
               onclick="openRevenueCategoryModal('Non-Strategic Sector - Net Profit SOEs Revenue Breakdown (20 SOEs)')"
               title="Click to view revenue of all 20 Non-Strategic Net Profit SOEs">
            <span class="rev-split-label">Net Profit SOEs</span>
            <span class="rev-split-value">680.0B</span>
          </div>
          <div class="rev-split-badge loss" 
               onclick="openRevenueCategoryModal('Non-Strategic Sector - Net Loss SOEs Revenue Breakdown (7 SOEs)')"
               title="Click to view revenue of all 7 Non-Strategic Net Loss SOEs">
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

    <!-- Revenue Drill-Down Modal with Pagination -->
    <div class="modal-overlay" id="revenueCategoryModal">
      <div class="modal">
        <div class="modal-header">
          <h3 id="revenueCategoryModalTitle" style="margin:0;">Sector Revenue Register</h3>
          <button style="border:none; background:none; font-size:18px; cursor:pointer;" onclick="closeRevenueCategoryModal()">&times;</button>
        </div>
        <p style="color: var(--text-muted); font-size: 11px;">
          Breakdown of individual state-owned entities and their respective annual revenues.
        </p>

        <table>
          <thead>
            <tr>
              <th>SOE Name</th>
              <th>Revenue</th>
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
      <td style="font-weight:700; color:var(--primary-blue);">${item.rev}</td>
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