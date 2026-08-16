/**
 * SOE Performance Chart Component for PEDMIS Dashboard
 * 
 * Features:
 * - Common Strategic & Non-Strategic Header spanning all entity categories
 * - Horizontal Stacked Bar Rows for Company, Commercial Corp, and Non-Commercial Corp
 * - Stacked segments displaying SOE Count and total Profit/Loss LKR amounts
 * - Interactive Modals showing 4-Year Financial Trends (FY 2023 - FY 2026) per SOE
 */

const soeStackedData = {
  // --- COMPANY ---
  'Company - Strategic Net Profit SOEs': [
    { name: 'Bank of Ceylon', y2023: '+18.2B', y2024: '+20.1B', y2025: '+22.5B', y2026: '+24.0B' },
    { name: 'People\'s Bank', y2023: '+14.5B', y2024: '+16.2B', y2025: '+18.0B', y2026: '+19.5B' },
    { name: 'Sri Lanka Telecom PLC', y2023: '+6.8B', y2024: '+7.5B', y2025: '+8.4B', y2026: '+9.1B' },
    { name: 'National Savings Bank', y2023: '+4.2B', y2024: '+4.8B', y2025: '+5.5B', y2026: '+6.0B' },
    { name: 'Sri Lanka Insurance Corp', y2023: '+3.9B', y2024: '+4.2B', y2025: '+4.8B', y2026: '+5.1B' },
    { name: 'Lanka Electricity Co (LECO)', y2023: '+2.1B', y2024: '+2.5B', y2025: '+2.9B', y2026: '+3.1B' },
    { name: 'Litro Gas Lanka Ltd', y2023: '+1.8B', y2024: '+2.1B', y2025: '+2.4B', y2026: '+2.7B' },
    { name: 'Sri Lanka Ports Management Co', y2023: '+1.1B', y2024: '+1.3B', y2025: '+1.5B', y2026: '+1.6B' },
    { name: 'Lanka IOC Public Share Unit', y2023: '+0.7B', y2024: '+0.8B', y2025: '+0.9B', y2026: '+1.0B' },
    { name: 'Lanka Phosphate Ltd', y2023: '+0.15B', y2024: '+0.18B', y2025: '+0.2B', y2026: '+0.22B' }
  ],
  'Company - Strategic Net Loss SOEs': [
    { name: 'SriLankan Airlines Ltd', y2023: '-10.2B', y2024: '-9.1B', y2025: '-8.5B', y2026: '-7.8B' }
  ],
  'Company - Non-Strategic Net Profit SOEs': [
    { name: 'Lanka Hospitals PLC', y2023: '+2.8B', y2024: '+3.1B', y2025: '+3.5B', y2026: '+3.8B' },
    { name: 'Hotel Developers (Lanka) Ltd', y2023: '+1.5B', y2024: '+1.8B', y2025: '+2.1B', y2026: '+2.4B' },
    { name: 'BCI Campus Ltd', y2023: '+0.8B', y2024: '+1.0B', y2025: '+1.2B', y2026: '+1.3B' },
    { name: 'Lanka Mineral Sands Ltd', y2023: '+0.7B', y2024: '+0.9B', y2025: '+1.0B', y2026: '+1.1B' },
    { name: 'Lanka Sugar Company (Pvt) Ltd', y2023: '+0.6B', y2024: '+0.8B', y2025: '+0.9B', y2026: '+1.0B' },
    { name: 'Lanka Coal Company (Pvt) Ltd', y2023: '+0.2B', y2024: '+0.3B', y2025: '+0.4B', y2026: '+0.5B' },
    { name: 'Lanka Cement PLC', y2023: '+0.1B', y2024: '+0.2B', y2025: '+0.3B', y2026: '+0.35B' }
  ],
  'Company - Non-Strategic Net Loss SOEs': [
    { name: 'Kahawatte Plantations Entity', y2023: '-1.2B', y2024: '-1.0B', y2025: '-0.9B', y2026: '-0.8B' },
    { name: 'Elpitiya Plantations Entity', y2023: '-0.9B', y2024: '-0.8B', y2025: '-0.7B', y2026: '-0.6B' },
    { name: 'Kurunegala Plantations Ltd', y2023: '-0.7B', y2024: '-0.6B', y2025: '-0.5B', y2026: '-0.4B' },
    { name: 'Chilaw Plantations Ltd', y2023: '-0.4B', y2024: '-0.35B', y2025: '-0.3B', y2026: '-0.25B' },
    { name: 'National Paper Company Entity', y2023: '-0.3B', y2024: '-0.25B', y2025: '-0.2B', y2026: '-0.15B' },
    { name: 'Ceylon Fertilizer Co Ltd', y2023: '-0.2B', y2024: '-0.15B', y2025: '-0.1B', y2026: '-0.08B' }
  ],

  // --- COMMERCIAL CORPORATION ---
  'Commercial Corporation - Strategic Net Profit SOEs': [
    { name: 'Sri Lanka Ports Authority', y2023: '+11.5B', y2024: '+12.8B', y2025: '+14.2B', y2026: '+15.5B' },
    { name: 'Airport & Aviation Services Ltd', y2023: '+4.8B', y2024: '+5.5B', y2025: '+6.1B', y2026: '+6.8B' },
    { name: 'State Pharmaceuticals Corporation', y2023: '+2.5B', y2024: '+2.8B', y2025: '+3.2B', y2026: '+3.5B' },
    { name: 'State Timber Corporation', y2023: '+0.25B', y2024: '+0.3B', y2025: '+0.4B', y2026: '+0.45B' },
    { name: 'State Printing Corporation', y2023: '+0.05B', y2024: '+0.08B', y2025: '+0.1B', y2026: '+0.12B' }
  ],
  'Commercial Corporation - Strategic Net Loss SOEs': [
    { name: 'Ceylon Petroleum Corporation (CPC)', y2023: '-18.5B', y2024: '-15.2B', y2025: '-12.1B', y2026: '-9.5B' },
    { name: 'Ceylon Electricity Board (CEB)', y2023: '-9.8B', y2024: '-7.1B', y2025: '-5.2B', y2026: '-3.8B' },
    { name: 'Sri Lanka Transport Board (SLTB)', y2023: '-2.8B', y2024: '-2.2B', y2025: '-1.8B', y2026: '-1.4B' }
  ],
  'Commercial Corporation - Non-Strategic Net Profit SOEs': [
    { name: 'Sri Lanka State Trading Corp', y2023: '+1.2B', y2024: '+1.5B', y2025: '+1.8B', y2026: '+2.0B' },
    { name: 'State Engineering Corporation', y2023: '+0.5B', y2024: '+0.65B', y2025: '+0.8B', y2026: '+0.95B' },
    { name: 'State Fertilizer Corporation', y2023: '+0.2B', y2024: '+0.3B', y2025: '+0.4B', y2026: '+0.45B' },
    { name: 'State Gem & Jewellery Corporation', y2023: '+0.1B', y2024: '+0.15B', y2025: '+0.2B', y2026: '+0.22B' },
    { name: 'Sri Lanka Rubber Manufacturing Corp', y2023: '+0.1B', y2024: '+0.15B', y2025: '+0.2B', y2026: '+0.22B' },
    { name: 'Ceylon Fisheries Corporation', y2023: '+0.05B', y2024: '+0.08B', y2025: '+0.1B', y2026: '+0.12B' },
    { name: 'Ceylon Fishery Harbours Corporation', y2023: '+0.05B', y2024: '+0.08B', y2025: '+0.1B', y2026: '+0.12B' },
    { name: 'Building Materials Corporation', y2023: '+0.05B', y2024: '+0.08B', y2025: '+0.1B', y2026: '+0.12B' }
  ],
  'Commercial Corporation - Non-Strategic Net Loss SOEs': [
    { name: 'Spices & Allied Products Board', y2023: '-1.5B', y2024: '-1.3B', y2025: '-1.1B', y2026: '-0.9B' }
  ],

  // --- NON-COMMERCIAL CORPORATION ---
  'Non-Commercial Corporation - Strategic Net Profit SOEs': [
    { name: 'Development Lotteries Board', y2023: '+1.4B', y2024: '+1.6B', y2025: '+1.9B', y2026: '+2.1B' },
    { name: 'National Lotteries Board', y2023: '+1.2B', y2024: '+1.4B', y2025: '+1.7B', y2026: '+1.85B' },
    { name: 'Civil Aviation Authority', y2023: '+0.9B', y2024: '+1.1B', y2025: '+1.3B', y2026: '+1.4B' },
    { name: 'Marine Environment Protection Auth', y2023: '+0.8B', y2024: '+0.95B', y2025: '+1.1B', y2026: '+1.2B' },
    { name: 'Export Development Board', y2023: '+0.5B', y2024: '+0.65B', y2025: '+0.8B', y2026: '+0.9B' },
    { name: 'Sri Lanka Standards Institution', y2023: '+0.4B', y2024: '+0.55B', y2025: '+0.7B', y2026: '+0.8B' },
    { name: 'Tea Small Holdings Dev Authority', y2023: '+0.3B', y2024: '+0.45B', y2025: '+0.6B', y2026: '+0.7B' },
    { name: 'Coconut Development Authority', y2023: '+0.2B', y2024: '+0.35B', y2025: '+0.5B', y2026: '+0.6B' },
    { name: 'Central Engineering Consultancy Bureau', y2023: '+0.15B', y2024: '+0.2B', y2025: '+0.3B', y2026: '+0.35B' },
    { name: 'Sri Lanka Handicrafts Board', y2023: '+0.05B', y2024: '+0.08B', y2025: '+0.1B', y2026: '+0.12B' }
  ],
  'Non-Commercial Corporation - Strategic Net Loss SOEs': [
    { name: 'Sri Lanka Railway Department', y2023: '-4.5B', y2024: '-3.8B', y2025: '-3.1B', y2026: '-2.5B' }
  ],
  'Non-Commercial Corporation - Non-Strategic Net Profit SOEs': [
    { name: 'National Water Supply & Drainage Board', y2023: '+3.1B', y2024: '+3.6B', y2025: '+4.2B', y2026: '+4.7B' },
    { name: 'Urban Development Authority (UDA)', y2023: '+0.4B', y2024: '+0.55B', y2025: '+0.7B', y2026: '+0.8B' },
    { name: 'Coast Conservation Department', y2023: '+0.3B', y2024: '+0.45B', y2025: '+0.6B', y2026: '+0.7B' },
    { name: 'National Design Centre', y2023: '+0.2B', y2024: '+0.35B', y2025: '+0.5B', y2026: '+0.6B' },
    { name: 'National Livestock Development Board', y2023: '+0.1B', y2024: '+0.2B', y2025: '+0.3B', y2026: '+0.35B' }
  ],
  'Non-Commercial Corporation - Non-Strategic Net Loss SOEs': []
};

let currentSoePage = 1;
let currentSoeKey = '';
const soeItemsPerPage = 5;

function initSOEPerformanceChart(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <style>
      .soe-chart-wrapper {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .soe-legend-bar {
        display: flex;
        justify-content: center;
        gap: 16px;
        background: #ffffff;
        border: 1px solid var(--border-color);
        padding: 6px 12px;
        border-radius: 6px;
        font-size: 11px;
        font-weight: 600;
      }
      .soe-legend-item-pill {
        display: flex;
        align-items: center;
        gap: 6px;
      }
      .soe-dot {
        width: 10px;
        height: 10px;
        border-radius: 2px;
        display: inline-block;
      }

      /* Common Header for Strategic & Non-Strategic */
      .soe-common-header-grid {
        display: grid;
        grid-template-columns: 140px 1fr 1fr;
        gap: 10px;
        padding: 4px 10px;
        background: var(--accent-bg);
        border: 1px solid var(--border-color);
        border-radius: 6px;
        align-items: center;
        text-align: center;
      }
      .soe-common-header-title {
        font-size: 11px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      /* Horizontal Rows Container */
      .soe-rows-container {
        display: flex;
        flex-direction: column;
        gap: 8px;
        background: #ffffff;
        border: 1px solid var(--border-color);
        border-radius: 8px;
        padding: 10px;
      }

      .soe-entity-row {
        display: grid;
        grid-template-columns: 140px 1fr 1fr;
        gap: 10px;
        align-items: center;
        padding: 6px 0;
        border-bottom: 1px dashed var(--border-color);
      }
      .soe-entity-row:last-child {
        border-bottom: none;
      }

      /* Entity Info Column */
      .soe-entity-label-box {
        display: flex;
        flex-direction: column;
        gap: 1px;
      }
      .soe-entity-name {
        font-size: 12px;
        font-weight: 800;
        color: var(--text-primary);
      }
      .soe-entity-meta {
        font-size: 10px;
        font-weight: 700;
        color: var(--primary-blue);
      }

      /* Horizontal Stacked Bar Track */
      .soe-bar-track-wrapper {
        display: flex;
        flex-direction: column;
        gap: 2px;
        width: 100%;
      }
      .soe-horizontal-bar {
        width: 100%;
        height: 28px;
        display: flex;
        border-radius: 4px;
        overflow: hidden;
        background: #e2e8f0;
        transition: all 0.2s ease;
      }
      .soe-horizontal-bar:hover {
        transform: scaleY(1.04);
        box-shadow: 0 2px 6px rgba(0,0,0,0.12);
      }

      /* Bar Segments */
      .soe-hbar-seg {
        height: 100%;
        cursor: pointer;
        transition: opacity 0.15s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 9px;
        font-weight: 800;
        color: #ffffff;
        padding: 0 4px;
        white-space: nowrap;
        overflow: hidden;
      }
      .soe-hbar-seg:hover {
        opacity: 0.85;
        filter: brightness(1.1);
      }
      .soe-hbar-seg.prof { background-color: var(--strat-color); }
      .soe-hbar-seg.loss { background-color: var(--danger-red); }

      /* Floating Tooltip */
      .soe-bar-tooltip {
        display: none;
        position: absolute;
        background: #0f172a;
        color: #ffffff;
        padding: 6px 10px;
        border-radius: 4px;
        font-size: 11px;
        font-weight: bold;
        z-index: 100;
        pointer-events: none;
        box-shadow: 0 2px 6px rgba(0,0,0,0.25);
        white-space: nowrap;
      }
    </style>

    <div id="soeBarTooltip" class="soe-bar-tooltip"></div>

    <div class="soe-chart-wrapper">
      
      <!-- Top Legend -->
      <div class="soe-legend-bar">
        <div class="soe-legend-item-pill">
          <span class="soe-dot" style="background: var(--strat-color);"></span>
          <span>Net Profit SOEs</span>
        </div>
        <div class="soe-legend-item-pill">
          <span class="soe-dot" style="background: var(--danger-red);"></span>
          <span>Net Loss SOEs</span>
        </div>
      </div>

      <!-- Common Header for all charts -->
      <div class="soe-common-header-grid">
        <div style="text-align: left; font-size: 11px; font-weight: 800; color: var(--text-muted);">Business Entity</div>
        <div class="soe-common-header-title" style="color: var(--strat-color);">Strategic</div>
        <div class="soe-common-header-title" style="color: var(--nonstrat-color);">Non-Strategic</div>
      </div>

      <!-- Horizontal Stacked Rows Container -->
      <div class="soe-rows-container">
        
        <!-- Row 1: Company -->
        <div class="soe-entity-row">
          <div class="soe-entity-label-box">
            <span class="soe-entity-name">Company</span>
            <span class="soe-entity-meta" style="font-size: 12px;">24 SOEs | Net +16.0B</span>
          </div>

          <!-- Strategic Company Bar -->
          <div class="soe-bar-track-wrapper">
            <div class="soe-horizontal-bar">
              <div class="soe-hbar-seg prof" style="width: 88%; font-size: 12px;" 
                   onclick="openSoeTrendModal('Company - Strategic Net Profit SOEs')"
                   onmousemove="showSoeTooltip(event, 'Company (Strategic Profit): 10 SOEs (+78.0B)')" onmouseleave="hideSoeTooltip()">
                10 SOEs (+78.0B)
              </div>
              <div class="soe-hbar-seg loss" style="width: 12%; font-size: 10px;" 
                   onclick="openSoeTrendModal('Company - Strategic Net Loss SOEs')"
                   onmousemove="showSoeTooltip(event, 'Company (Strategic Loss): 1 SOE (-8.5B)')" onmouseleave="hideSoeTooltip()">
                1 (-8.5B)
              </div>
            </div>
          </div>

          <!-- Non-Strategic Company Bar -->
          <div class="soe-bar-track-wrapper">
            <div class="soe-horizontal-bar">
              <div class="soe-hbar-seg prof" style="width: 65%; font-size: 12px;" 
                   onclick="openSoeTrendModal('Company - Non-Strategic Net Profit SOEs')"
                   onmousemove="showSoeTooltip(event, 'Company (Non-Strat Profit): 7 SOEs (+11.3B)')" onmouseleave="hideSoeTooltip()">
                7 SOEs (+11.3B)
              </div>
              <div class="soe-hbar-seg loss" style="width: 35%; font-size: 10px;" 
                   onclick="openSoeTrendModal('Company - Non-Strategic Loss SOEs')"
                   onmousemove="showSoeTooltip(event, 'Company (Non-Strat Loss): 6 SOEs (-2.7B)')" onmouseleave="hideSoeTooltip()">
                6 SOEs (-2.7B)
              </div>
            </div>
          </div>
        </div>

        <!-- Row 2: Commercial Corporation -->
        <div class="soe-entity-row">
          <div class="soe-entity-label-box">
            <span class="soe-entity-name">Commercial Corp</span>
            <span class="soe-entity-meta " style="font-size: 12px;">17 SOEs | Net +3.8B</span>
          </div>

          <!-- Strategic Commercial Corp Bar -->
          <div class="soe-bar-track-wrapper">
            <div class="soe-horizontal-bar">
              <div class="soe-hbar-seg prof" style="width: 60%; font-size: 12px;" 
                   onclick="openSoeTrendModal('Commercial Corporation - Strategic Net Profit SOEs')"
                   onmousemove="showSoeTooltip(event, 'Commercial Corp (Strat Profit): 5 SOEs (+27.0B)')" onmouseleave="hideSoeTooltip()">
                5 SOEs (+27.0B)
              </div>
              <div class="soe-hbar-seg loss" style="width: 40%; font-size: 10px;" 
                   onclick="openSoeTrendModal('Commercial Corporation - Strategic Loss SOEs')"
                   onmousemove="showSoeTooltip(event, 'Commercial Corp (Strat Loss): 3 SOEs (-19.1B)')" onmouseleave="hideSoeTooltip()">
                3 SOEs (-19.1B)
              </div>
            </div>
          </div>

          <!-- Non-Strategic Commercial Corp Bar -->
          <div class="soe-bar-track-wrapper">
            <div class="soe-horizontal-bar">
              <div class="soe-hbar-seg prof" style="width: 85%; font-size: 12px;" 
                   onclick="openSoeTrendModal('Commercial Corporation - Non-Strategic Net Profit SOEs')"
                   onmousemove="showSoeTooltip(event, 'Commercial Corp (Non-Strat Profit): 8 SOEs (+4.3B)')" onmouseleave="hideSoeTooltip()">
                8 SOEs (+4.3B)
              </div>
              <div class="soe-hbar-seg loss" style="width: 15%; font-size: 10px;" 
                   onclick="openSoeTrendModal('Commercial Corporation - Non-Strategic Loss SOEs')"
                   onmousemove="showSoeTooltip(event, 'Commercial Corp (Non-Strat Loss): 1 SOE (-1.1B)')" onmouseleave="hideSoeTooltip()">
                1 (-1.1B)
              </div>
            </div>
          </div>
        </div>

        <!-- Row 3: Non-Commercial Corporation -->
        <div class="soe-entity-row">
          <div class="soe-entity-label-box">
            <span class="soe-entity-name">Non-Comm Corp</span>
            <span class="soe-entity-meta" style="font-size: 12px;">16 SOEs | Net +11.9B</span>
          </div>

          <!-- Strategic Non-Commercial Corp Bar -->
          <div class="soe-bar-track-wrapper">
            <div class="soe-horizontal-bar">
              <div class="soe-hbar-seg prof" style="width: 80%; font-size: 12px;" 
                   onclick="openSoeTrendModal('Non-Commercial Corporation - Strategic Net Profit SOEs')"
                   onmousemove="showSoeTooltip(event, 'Non-Comm Corp (Strat Profit): 10 SOEs (+8.5B)')" onmouseleave="hideSoeTooltip()">
                10 SOEs (+8.5B)
              </div>
              <div class="soe-hbar-seg loss" style="width: 20%; font-size: 10px;" 
                   onclick="openSoeTrendModal('Non-Commercial Corporation - Strategic Net Loss SOEs')"
                   onmousemove="showSoeTooltip(event, 'Non-Comm Corp (Strat Loss): 1 SOE (-3.1B)')" onmouseleave="hideSoeTooltip()">
                1 (-3.1B)
              </div>
            </div>
          </div>

          <!-- Non-Strategic Non-Commercial Corp Bar -->
          <div class="soe-bar-track-wrapper">
            <div class="soe-horizontal-bar">
              <div class="soe-hbar-seg prof" style="width: 100%; font-size: 12px;" 
                   onclick="openSoeTrendModal('Non-Commercial Corporation - Non-Strategic Net Profit SOEs')"
                   onmousemove="showSoeTooltip(event, 'Non-Comm Corp (Non-Strat Profit): 5 SOEs (+6.5B)')" onmouseleave="hideSoeTooltip()">
                5 SOEs (+6.5B)
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>

    <!-- Modal Popup displaying Last 4 Years Amount per SOE -->
    <div class="modal-overlay" id="soeTrendModal">
      <div class="modal" style="width: 720px;">
        <div class="modal-header">
          <h3 id="soeTrendModalTitle" style="margin:0;">SOE Financial Trend (Last 4 Years)</h3>
          <button style="border:none; background:none; font-size:18px; cursor:pointer;" onclick="closeSoeTrendModal()">&times;</button>
        </div>
        <p style="color: var(--text-muted); font-size: 11px;">
          Historical net profitability performance breakdown for SOEs in this group.
        </p>

        <table>
          <thead>
            <tr>
              <th>SOE Name</th>
              <th>FY 2023</th>
              <th>FY 2024</th>
              <th>FY 2025</th>
              <th>FY 2026</th>
            </tr>
          </thead>
          <tbody id="soeTrendTableBody"></tbody>
        </table>

        <div class="pagination-container">
          <button class="pagination-btn" id="soeBtnPrev" onclick="changeSoePage(-1)">← Previous</button>
          <span class="page-indicator" id="soePageIndicator">Page 1 of 1</span>
          <button class="pagination-btn" id="soeBtnNext" onclick="changeSoePage(1)">Next →</button>
        </div>
      </div>
    </div>
  `;
}

// Tooltip Handlers
function showSoeTooltip(evt, text) {
  const tooltip = document.getElementById('soeBarTooltip');
  if (!tooltip) return;
  tooltip.innerText = text;
  tooltip.style.display = 'block';
  tooltip.style.left = (evt.pageX + 12) + 'px';
  tooltip.style.top = (evt.pageY - 28) + 'px';
}

function hideSoeTooltip() {
  const tooltip = document.getElementById('soeBarTooltip');
  if (tooltip) tooltip.style.display = 'none';
}

// Modal Handlers
function openSoeTrendModal(categoryKey) {
  currentSoeKey = categoryKey;
  currentSoePage = 1;
  document.getElementById('soeTrendModalTitle').innerText = categoryKey;
  renderSoePage();
  document.getElementById('soeTrendModal').style.display = 'flex';
}

function renderSoePage() {
  const tbody = document.getElementById('soeTrendTableBody');
  tbody.innerHTML = '';

  const items = soeStackedData[currentSoeKey] || [];
  const totalPages = Math.ceil(items.length / soeItemsPerPage) || 1;

  const startIndex = (currentSoePage - 1) * soeItemsPerPage;
  const pageItems = items.slice(startIndex, startIndex + soeItemsPerPage);

  pageItems.forEach(item => {
    const tr = document.createElement('tr');
    const isProfit = item.y2025.includes('+');
    tr.innerHTML = `
      <td><strong>${item.name}</strong></td>
      <td>${item.y2023}</td>
      <td>${item.y2024}</td>
      <td style="font-weight:700; color: ${isProfit ? 'var(--strat-color)' : 'var(--danger-red)'};">${item.y2025}</td>
      <td style="font-weight:700;">${item.y2026}</td>
    `;
    tbody.appendChild(tr);
  });

  document.getElementById('soePageIndicator').innerText = `Page ${currentSoePage} of ${totalPages} (${items.length} Total Entities)`;
  document.getElementById('soeBtnPrev').disabled = currentSoePage === 1;
  document.getElementById('soeBtnNext').disabled = currentSoePage === totalPages;
}

function changeSoePage(direction) {
  const items = soeStackedData[currentSoeKey] || [];
  const totalPages = Math.ceil(items.length / soeItemsPerPage) || 1;

  currentSoePage += direction;
  if (currentSoePage < 1) currentSoePage = 1;
  if (currentSoePage > totalPages) currentSoePage = totalPages;

  renderSoePage();
}

function closeSoeTrendModal() {
  document.getElementById('soeTrendModal').style.display = 'none';
}