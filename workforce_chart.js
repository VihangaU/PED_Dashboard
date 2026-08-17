/**
 * Workforce Distribution Chart Component for PEDMIS Dashboard
 * 
 * Includes:
 * 1. Centered "Share of Total State Staff" label.
 * 2. Dynamic arc percentage tooltips following the cursor on hover.
 * 3. Two-way synchronized hover highlighting across Progress Bar Segments, Doughnut Arcs, and Legend items.
 * 4. Modal popups displaying 5-Year Headcount Trends (FY 2022 - FY 2026) per SOE.
 */

const workforceCategoryData = {
  'Workforce - (Strategic SOEs - Net Profit)': {
    id: 'strat-prof',
    count: 78500,
    soePercentage: '42.4%',
    statePercentage: '6.04%',
    color: '#cce8c3',
    entities: [
      { name: 'Bank of Ceylon', y2022: '11,900', y2023: '12,200', y2024: '12,500', y2025: '12,700', y2026: '12,800' },
      { name: 'People\'s Bank', y2022: '13,100', y2023: '13,400', y2024: '13,700', y2025: '13,900', y2026: '14,000' },
      { name: 'Ports Authority', y2022: '9,100', y2023: '9,250', y2024: '9,350', y2025: '9,450', y2026: '9,500' },
      { name: 'Sri Lanka Telecom', y2022: '7,200', y2023: '7,400', y2024: '7,600', y2025: '7,700', y2026: '7,800' },
      { name: 'Airport & Aviation Services', y2022: '3,800', y2023: '3,950', y2024: '4,050', y2025: '4,150', y2026: '4,200' },
      { name: 'National Savings Bank', y2022: '3,700', y2023: '3,850', y2024: '3,950', y2025: '4,050', y2026: '4,100' },
      { name: 'Sri Lanka Insurance Corp', y2022: '3,500', y2023: '3,600', y2024: '3,700', y2025: '3,750', y2026: '3,800' },
      { name: 'State Pharmaceuticals Corp', y2022: '1,900', y2023: '1,950', y2024: '2,000', y2025: '2,050', y2026: '2,100' },
      { name: 'Lanka Electricity Co (LECO)', y2022: '1,750', y2023: '1,800', y2024: '1,850', y2025: '1,880', y2026: '1,900' },
      { name: 'Litro Gas Lanka Ltd', y2022: '780', y2023: '800', y2024: '820', y2025: '840', y2026: '850' },
      { name: 'Development Lotteries Board', y2022: '410', y2023: '420', y2024: '430', y2025: '440', y2026: '450' },
      { name: 'National Lotteries Board', y2022: '380', y2023: '390', y2024: '400', y2025: '410', y2026: '420' },
      { name: 'Civil Aviation Authority', y2022: '340', y2023: '350', y2024: '360', y2025: '370', y2026: '380' },
      { name: 'State Timber Corporation', y2022: '1,100', y2023: '1,120', y2024: '1,150', y2025: '1,180', y2026: '1,200' },
      { name: 'CECB', y2022: '980', y2023: '1,020', y2024: '1,050', y2025: '1,080', y2026: '1,100' },
      { name: 'Other Strategic Profitable SOEs', y2022: '12,960', y2023: '13,300', y2024: '13,590', y2025: '13,800', y2026: '14,000' }
    ]
  },
  'Workforce - (Strategic SOEs - Net Loss)': {
    id: 'strat-loss',
    count: 29500,
    soePercentage: '15.9%',
    statePercentage: '2.27%',
    color: '#f5baca',
    entities: [
      { name: 'Ceylon Petroleum Corp', y2022: '4,000', y2023: '4,050', y2024: '4,100', y2025: '4,150', y2026: '4,200' },
      { name: 'SriLankan Airlines', y2022: '6,100', y2023: '6,250', y2024: '6,350', y2025: '6,450', y2026: '6,500' },
      { name: 'Ceylon Electricity Board', y2022: '17,800', y2023: '18,100', y2024: '18,400', y2025: '18,650', y2026: '18,800' }
    ]
  },
  'Workforce - (Non-Strategic SOEs - Net Profit)': {
    id: 'nonstrat-prof',
    count: 42000,
    soePercentage: '22.7%',
    statePercentage: '3.23%',
    color: '#c7dbf2',
    entities: [
      { name: 'National Water Supply Board', y2022: '17,200', y2023: '17,600', y2024: '18,000', y2025: '18,300', y2026: '18,500' },
      { name: 'Lanka Hospitals PLC', y2022: '2,150', y2023: '2,200', y2024: '2,300', y2025: '2,350', y2026: '2,400' },
      { name: 'Sri Lanka State Trading Corp', y2022: '980', y2023: '1,020', y2024: '1,050', y2025: '1,080', y2026: '1,100' },
      { name: 'Lanka Sugar Company', y2022: '4,800', y2023: '4,950', y2024: '5,050', y2025: '5,150', y2026: '5,200' },
      { name: 'Urban Development Authority', y2022: '2,850', y2023: '2,920', y2024: '3,000', y2025: '3,050', y2026: '3,100' },
      { name: 'State Engineering Corp', y2022: '2,600', y2023: '2,680', y2024: '2,720', y2025: '2,760', y2026: '2,800' },
      { name: 'Lanka Mineral Sands Ltd', y2022: '810', y2023: '830', y2024: '850', y2025: '870', y2026: '890' },
      { name: 'National Livestock Dev Board', y2022: '1,320', y2023: '1,360', y2024: '1,400', y2025: '1,420', y2026: '1,450' },
      { name: 'Ceylon Fisheries Corp', y2022: '1,100', y2023: '1,120', y2024: '1,150', y2025: '1,180', y2026: '1,200' },
      { name: 'Other Non-Strategic Profitable SOEs', y2022: '4,920', y2023: '5,080', y2024: '5,180', y2025: '5,280', y2026: '5,360' }
    ]
  },
  'Workforce - (Non-Strategic SOEs - Net Loss)': {
    id: 'nonstrat-loss',
    count: 35000,
    soePercentage: '18.9%',
    statePercentage: '2.69%',
    color: '#e8d1ac',
    entities: [
      { name: 'Sri Lanka Railway Dept', y2022: '10,400', y2023: '10,700', y2024: '10,900', y2025: '11,050', y2026: '11,200' },
      { name: 'Sri Lanka Transport Board (SLTB)', y2022: '17,500', y2023: '17,800', y2024: '18,100', y2025: '18,250', y2026: '18,400' },
      { name: 'Spices & Allied Products Board', y2022: '1,100', y2023: '1,120', y2024: '1,150', y2025: '1,180', y2026: '1,200' },
      { name: 'Kurunegala Plantations Ltd', y2022: '1,650', y2023: '1,700', y2024: '1,740', y2025: '1,780', y2026: '1,800' },
      { name: 'Chilaw Plantations Ltd', y2022: '1,280', y2023: '1,320', y2024: '1,350', y2025: '1,380', y2026: '1,400' },
      { name: 'Other Non-Strategic Loss SOEs', y2022: '920', y2023: '940', y2024: '960', y2025: '980', y2026: '1,000' }
    ]
  }
};

let currentWorkforceCategory = '';
let currentWorkforcePage = 1;
const workforceItemsPerPage = 5;

function initWorkforceChart(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <style>
      .workforce-chart-card {
        display: flex;
        flex-direction: column;
        gap: 14px;
        position: relative;
      }
      .chart-section-title {
        font-size: 11px;
        font-weight: 700;
        color: var(--text-muted);
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 4px;
      }
      .wf-chart-body {
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 16px;
        background: #ffffff;
        border: 1px solid var(--border-color);
        padding: 14px;
        border-radius: 8px;
        position: relative;
      }
      .wf-donut-2d-box {
        width: 130px;
        height: 130px;
        flex-shrink: 0;
      }
      .wf-donut-svg {
        width: 100%;
        height: 100%;
        transform: rotate(-90deg);
      }
      .wf-donut-svg circle {
        fill: none;
        stroke-width: 20;
        cursor: pointer;
        transition: all 0.2s ease;
      }
      .wf-donut-svg circle.highlighted, .wf-donut-svg circle:hover {
        stroke-width: 26;
        filter: drop-shadow(0px 2px 4px rgba(0,0,0,0.25));
      }
      .wf-legend-list {
        display: flex;
        flex-direction: column;
        gap: 6px;
        flex-grow: 1;
      }
      .wf-legend-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 6px 10px;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.2s ease;
        border: 1px solid transparent;
        font-size: 11px;
      }
      .wf-legend-item:hover, .wf-legend-item.highlighted {
        background: #e2e8f0;
        border-color: var(--primary-blue);
        transform: translateX(4px);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
      }
      .wf-color-dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        display: inline-block;
        margin-right: 6px;
      }
      .wf-summary-bar {
        font-size: 12px;
        line-height: 1.6;
      }

      /* Centered Share Label Header */
      .wf-centered-share-header {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 13px;
        font-weight: 700;
        color: var(--primary-blue);
        margin: 8px 0 6px 0;
        text-align: center;
      }

      .wf-segmented-track {
        width: 100%;
        height: 16px;
        background-color: #e2e8f0;
        border-radius: 8px;
        overflow: hidden;
        display: flex;
        margin-top: 6px;
      }
      .wf-segment {
        height: 100%;
        transition: opacity 0.2s ease, filter 0.2s ease;
        cursor: pointer;
      }
      .wf-segment:hover, .wf-segment.highlighted {
        opacity: 0.85;
        filter: brightness(1.1);
      }
      .wf-progress-labels {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        color: var(--text-muted);
        margin-top: 4px;
      }

      /* Arc Tooltip Following Cursor */
      .wf-pie-tooltip {
        display: none;
        position: absolute;
        background: #0f172a;
        color: #ffffff;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 12px;
        font-weight: bold;
        z-index: 1000;
        pointer-events: none;
        box-shadow: 0 2px 6px rgba(0,0,0,0.25);
        white-space: nowrap;
      }
    </style>

    <!-- Arc Hover Tooltip Container -->
    <div id="wfPieTooltip" class="wf-pie-tooltip"></div>

    <div class="workforce-chart-card">
      <div class="wf-summary-bar">
        <div class="chart-section-title">Public Sector Workforce Share</div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span>• <strong>Actual SOE Staff:</strong> 185,000</span>
          <span>• <strong>Total State Staff:</strong> 1,300,000</span>
        </div>

        <!-- Centered Share Label -->
        <div class="wf-centered-share-header">
          <span>Share of Total State Staff: 14.2%</span>
          <div class="tooltip-container">
            <span class="tooltip-icon">ⓘ</span>
            <div class="tooltip-text">
              SOE workforce accounts for 14.2% of the overall public sector workforce (185,000 out of 1,300,000 total state staff).
            </div>
          </div>
        </div>

        <!-- Segmented Progress Bar (% out of Total State Staff: 1,300,000) -->
        <div class="wf-segmented-track">
          <div id="segment-strat-prof" class="wf-segment" style="width: 6.04%; background-color: #cce8c3;" 
               onclick="openWorkforceModal('Workforce - (Strategic SOEs - Net Profit)')"
               onmouseenter="highlightCategory('strat-prof')" onmouseleave="removeHighlight()"
               title="Strategic Profitable: 6.04% of Total State Staff (78,500)"></div>
          <div id="segment-strat-loss" class="wf-segment" style="width: 2.27%; background-color: #f5baca;" 
               onclick="openWorkforceModal('Workforce - (Strategic SOEs - Net Loss)')"
               onmouseenter="highlightCategory('strat-loss')" onmouseleave="removeHighlight()"
               title="Strategic Loss: 2.27% of Total State Staff (29,500)"></div>
          <div id="segment-nonstrat-prof" class="wf-segment" style="width: 3.23%; background-color: #c7dbf2;" 
               onclick="openWorkforceModal('Workforce - (Non-Strategic SOEs - Net Profit)')"
               onmouseenter="highlightCategory('nonstrat-prof')" onmouseleave="removeHighlight()"
               title="Non-Strategic Profitable: 3.23% of Total State Staff (42,000)"></div>
          <div id="segment-nonstrat-loss" class="wf-segment" style="width: 2.69%; background-color: #e8d1ac;" 
               onclick="openWorkforceModal('Workforce - (Non-Strategic SOEs - Net Loss)')"
               onmouseenter="highlightCategory('nonstrat-loss')" onmouseleave="removeHighlight()"
               title="Non-Strategic Loss: 2.69% of Total State Staff (35,000)"></div>
        </div>
        <div class="wf-progress-labels">
          <span>Filled SOE Share: 14.2% (185,000)</span>
          <span>Total State Staff: 1,300,000 (100%)</span>
        </div>
      </div>

      <!-- Flat 2D Doughnut Chart -->
      <div>
        <div class="chart-section-title">SOE Staff Distribution Breakdown</div>
        <div class="wf-chart-body">
          <div class="wf-donut-2d-box">
            <svg viewBox="0 0 100 100" class="wf-donut-svg">
              <circle id="arc-strat-prof" r="24" cx="50" cy="50" stroke="#cce8c3" stroke-dasharray="106.5 151" stroke-dashoffset="0"
                      onclick="openWorkforceModal('Workforce - (Strategic SOEs - Net Profit)')"
                      onmouseenter="highlightCategory('strat-prof')" 
                      onmousemove="showWfTooltip(event, 'Strategic SOEs - Net Profit: 42.4% (78,500)')" 
                      onmouseleave="removeHighlight()" />
              <circle id="arc-strat-loss" r="24" cx="50" cy="50" stroke="#f5baca" stroke-dasharray="40 151" stroke-dashoffset="-106.5"
                      onclick="openWorkforceModal('Workforce - (Strategic SOEs - Net Loss)')"
                      onmouseenter="highlightCategory('strat-loss')" 
                      onmousemove="showWfTooltip(event, 'Strategic SOEs - Net Loss: 15.9% (29,500)')" 
                      onmouseleave="removeHighlight()" />
              <circle id="arc-nonstrat-prof" r="24" cx="50" cy="50" stroke="#c7dbf2" stroke-dasharray="57 151" stroke-dashoffset="-146.5"
                      onclick="openWorkforceModal('Workforce - (Non-Strategic SOEs - Net Profit)')"
                      onmouseenter="highlightCategory('nonstrat-prof')" 
                      onmousemove="showWfTooltip(event, 'Non-Strategic SOEs - Net Profit: 22.7% (42,000)')" 
                      onmouseleave="removeHighlight()" />
              <circle id="arc-nonstrat-loss" r="24" cx="50" cy="50" stroke="#e8d1ac" stroke-dasharray="47.5 151" stroke-dashoffset="-203.5"
                      onclick="openWorkforceModal('Workforce - (Non-Strategic SOEs - Net Loss)')"
                      onmouseenter="highlightCategory('nonstrat-loss')" 
                      onmousemove="showWfTooltip(event, 'Non-Strategic SOEs - Net Loss: 18.9% (35,000)')" 
                      onmouseleave="removeHighlight()" />
            </svg>
          </div>

          <div class="wf-legend-list">
            <div class="wf-legend-item" id="legend-strat-prof"
                 onclick="openWorkforceModal('Workforce - (Strategic SOEs - Net Profit)')"
                 onmouseenter="highlightCategory('strat-prof')" onmouseleave="removeHighlight()">
              <span><span class="wf-color-dot" style="background:#cce8c3;"></span>Strategic SOEs - Net Profit</span>
              <strong>78,500 (42.4%)</strong>
            </div>
            <div class="wf-legend-item" id="legend-strat-loss"
                 onclick="openWorkforceModal('Workforce - (Strategic SOEs - Net Loss)')"
                 onmouseenter="highlightCategory('strat-loss')" onmouseleave="removeHighlight()">
              <span><span class="wf-color-dot" style="background:#f5baca;"></span>Strategic SOEs - Net Loss</span>
              <strong>29,500 (15.9%)</strong>
            </div>
            <div class="wf-legend-item" id="legend-nonstrat-prof"
                 onclick="openWorkforceModal('Workforce - (Non-Strategic SOEs - Net Profit)')"
                 onmouseenter="highlightCategory('nonstrat-prof')" onmouseleave="removeHighlight()">
              <span><span class="wf-color-dot" style="background:#c7dbf2;"></span>Non-Strategic SOEs - Net Profit</span>
              <strong>42,000 (22.7%)</strong>
            </div>
            <div class="wf-legend-item" id="legend-nonstrat-loss"
                 onclick="openWorkforceModal('Workforce - (Non-Strategic SOEs - Net Loss)')"
                 onmouseenter="highlightCategory('nonstrat-loss')" onmouseleave="removeHighlight()">
              <span><span class="wf-color-dot" style="background:#e8d1ac;"></span>Non-Strategic SOEs - Net Loss</span>
              <strong>35,000 (18.9%)</strong>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Popup for Workforce Details (5-Year Historical & Current Data) -->
    <div class="modal-overlay" id="workforceModal">
      <div class="modal" style="width: 780px; max-width: 95%;">
        <div class="modal-header">
          <h3 id="workforceModalTitle" style="margin:0;">SOE Workforce Register (5-Year Trend)</h3>
          <button style="border:none; background:none; font-size:18px; cursor:pointer;" onclick="closeWorkforceModal()">&times;</button>
        </div>
        <p style="color: var(--text-muted); font-size: 11px;">
          Headcount breakdown of state-owned enterprises across the past 4 financial years and current year.
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
          <tbody id="workforceTableBody"></tbody>
        </table>

        <div class="pagination-container">
          <button class="pagination-btn" id="wfBtnPrev" onclick="changeWorkforcePage(-1)">← Previous</button>
          <span class="page-indicator" id="wfPageIndicator">Page 1 of 1</span>
          <button class="pagination-btn" id="wfBtnNext" onclick="changeWorkforcePage(1)">Next →</button>
        </div>
      </div>
    </div>
  `;
}

// Tooltip position handler
function showWfTooltip(evt, text) {
  const tooltip = document.getElementById('wfPieTooltip');
  if (!tooltip) return;
  tooltip.innerText = text;
  tooltip.style.display = 'block';
  tooltip.style.left = (evt.pageX + 12) + 'px';
  tooltip.style.top = (evt.pageY - 28) + 'px';
}

function hideWfTooltip() {
  const tooltip = document.getElementById('wfPieTooltip');
  if (tooltip) tooltip.style.display = 'none';
}

// Two-Way Synchronized Hover Highlight Handler
function highlightCategory(catId) {
  removeHighlight();
  const arc = document.getElementById(`arc-${catId}`);
  const legend = document.getElementById(`legend-${catId}`);
  const segment = document.getElementById(`segment-${catId}`);

  if (arc) arc.classList.add('highlighted');
  if (legend) legend.classList.add('highlighted');
  if (segment) segment.classList.add('highlighted');
}

// Reset Highlight State
function removeHighlight() {
  hideWfTooltip();
  document.querySelectorAll('.wf-donut-svg circle').forEach(c => c.classList.remove('highlighted'));
  document.querySelectorAll('.wf-legend-item').forEach(l => l.classList.remove('highlighted'));
  document.querySelectorAll('.wf-segment').forEach(s => s.classList.remove('highlighted'));
}

function openWorkforceModal(categoryTitle) {
  currentWorkforceCategory = categoryTitle;
  currentWorkforcePage = 1;
  document.getElementById('workforceModalTitle').innerText = categoryTitle + ' (5-Year Trend)';
  renderWorkforcePage();
  document.getElementById('workforceModal').style.display = 'flex';
}

function renderWorkforcePage() {
  const tbody = document.getElementById('workforceTableBody');
  tbody.innerHTML = '';

  const catData = workforceCategoryData[currentWorkforceCategory];
  const items = catData ? catData.entities : [];
  const totalPages = Math.ceil(items.length / workforceItemsPerPage) || 1;

  const startIndex = (currentWorkforcePage - 1) * workforceItemsPerPage;
  const pageItems = items.slice(startIndex, startIndex + workforceItemsPerPage);

  pageItems.forEach(item => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${item.name}</strong></td>
      <td>${item.y2022}</td>
      <td>${item.y2023}</td>
      <td>${item.y2024}</td>
      <td>${item.y2025}</td>
      <td style="font-weight: 700; color: var(--primary-blue);">${item.y2026}</td>
    `;
    tbody.appendChild(tr);
  });

  document.getElementById('wfPageIndicator').innerText = `Page ${currentWorkforcePage} of ${totalPages} (${items.length} Entities)`;
  document.getElementById('wfBtnPrev').disabled = currentWorkforcePage === 1;
  document.getElementById('wfBtnNext').disabled = currentWorkforcePage === totalPages;
}

function changeWorkforcePage(direction) {
  const catData = workforceCategoryData[currentWorkforceCategory];
  const items = catData ? catData.entities : [];
  const totalPages = Math.ceil(items.length / workforceItemsPerPage) || 1;

  currentWorkforcePage += direction;
  if (currentWorkforcePage < 1) currentWorkforcePage = 1;
  if (currentWorkforcePage > totalPages) currentWorkforcePage = totalPages;

  renderWorkforcePage();
}

function closeWorkforceModal() {
  document.getElementById('workforceModal').style.display = 'none';
}

// Two-Way Synchronized Hover Highlight Handler
function highlightCategory(catId) {
  removeHighlight();

  // Select elements by ID
  const arc = document.getElementById(`arc-${catId}`);
  const legend = document.getElementById(`legend-${catId}`);
  const segment = document.getElementById(`segment-${catId}`);

  // Add highlighted class to arc, legend item, and bar segment
  if (arc) arc.classList.add('highlighted');
  if (legend) legend.classList.add('highlighted');
  if (segment) segment.classList.add('highlighted');
}

// Reset Highlight State
function removeHighlight() {
  hideWfTooltip();
  document.querySelectorAll('.wf-donut-svg circle').forEach(c => c.classList.remove('highlighted'));
  document.querySelectorAll('.wf-legend-item').forEach(l => l.classList.remove('highlighted'));
  document.querySelectorAll('.wf-segment').forEach(s => s.classList.remove('highlighted'));
}