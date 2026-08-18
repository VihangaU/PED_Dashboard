/**
 * Budget Support Component for PEDMIS Dashboard
 * Features:
 * - Side-by-Side Recurrent (36.6%), Capital (63.4%), and Equity Support detail columns
 * - Sub-Category cards with explicit percentage and values
 * - Direct popups displaying SOE Names with 5-Year Historical & Current Allocations (FY 2022 - FY 2026)
 * - Standardized 3-decimal numeric format without repeated 'B' symbols
 * - Unit "(Values in LKR Billions)" stated explicitly in headers & modal titles
 * - Multi-sheet Binary OpenXML (.xlsx) Report Generator across 3 support streams
 */

// Data Store for Budget Support Allocations per Category (5-Year Trends)
const budgetSupportData = {
  // --- RECURRENT SUPPORT ---
  'Recurrent Budget Support (Strategic SOEs - Net Profit)': [
    { name: 'National Water Supply Board (Operational Support)', stratCat: 'Strategic', perfStatus: 'Net Profit', y2022: '2.100', y2023: '2.400', y2024: '2.700', y2025: '2.900', y2026: '3.000' },
    { name: 'Airport & Aviation Services (Regional Airfield Maintenance)', stratCat: 'Strategic', perfStatus: 'Net Profit', y2022: '1.100', y2023: '1.300', y2024: '1.500', y2025: '1.700', y2026: '1.800' }
  ],
  'Recurrent Budget Support (Strategic SOEs - Net Loss)': [
    { name: 'Sri Lanka Railway Dept (Operational Subsidy)', stratCat: 'Strategic', perfStatus: 'Net Loss', y2022: '14.000', y2023: '15.500', y2024: '16.800', y2025: '17.500', y2026: '18.500' },
    { name: 'Ceylon Electricity Board (Fuel Subsidy Grant)', stratCat: 'Strategic', perfStatus: 'Net Loss', y2022: '8.500', y2023: '9.800', y2024: '10.500', y2025: '11.200', y2026: '12.000' }
  ],
  'Recurrent Budget Support (Non-Strategic SOEs - Net Profit)': [
    { name: 'State Engineering Corporation (Restructuring Grant)', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2022: '0.700', y2023: '0.800', y2024: '1.000', y2025: '1.100', y2026: '1.200' },
    { name: 'Ceylon Fisheries Corporation (Cold Chain Support)', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2022: '0.400', y2023: '0.500', y2024: '0.600', y2025: '0.700', y2026: '0.800' }
  ],
  'Recurrent Budget Support (Non-Strategic SOEs - Net Loss)': [
    { name: 'Sri Lanka Transport Board (SLTB Fleet Subsidy)', stratCat: 'Non-Strategic', perfStatus: 'Net Loss', y2022: '3.800', y2023: '4.200', y2024: '4.600', y2025: '4.900', y2026: '5.200' },
    { name: 'Spices & Allied Products Board (Admin Support)', stratCat: 'Non-Strategic', perfStatus: 'Net Loss', y2022: '0.300', y2023: '0.350', y2024: '0.400', y2025: '0.450', y2026: '0.500' }
  ],

  // --- CAPITAL SUPPORT ---
  'Capital Budget Support (Strategic SOEs - Net Profit)': [
    { name: 'Ports Authority Infrastructure Expansion', stratCat: 'Strategic', perfStatus: 'Net Profit', y2022: '3.200', y2023: '3.800', y2024: '4.200', y2025: '4.700', y2026: '5.000' },
    { name: 'Sri Lanka Telecom (Rural Connectivity Project)', stratCat: 'Strategic', perfStatus: 'Net Profit', y2022: '2.000', y2023: '2.500', y2024: '2.900', y2025: '3.200', y2026: '3.500' }
  ],
  'Capital Budget Support (Strategic SOEs - Net Loss)': [
    { name: 'Road Development Authority (Highway Network Grant)', stratCat: 'Strategic', perfStatus: 'Net Loss', y2022: '24.000', y2023: '26.500', y2024: '28.500', y2025: '30.000', y2026: '32.000' },
    { name: 'Sri Lanka Railway Dept (Rolling Stock & Track Upgrades)', stratCat: 'Strategic', perfStatus: 'Net Loss', y2022: '7.500', y2023: '8.200', y2024: '9.000', y2025: '9.800', y2026: '10.500' }
  ],
  'Capital Budget Support (Non-Strategic SOEs - Net Profit)': [
    { name: 'National Water Supply Board (Water Treatment Capital Grant)', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2022: '14.000', y2023: '15.500', y2024: '17.000', y2025: '18.200', y2026: '19.000' }
  ],
  'Capital Budget Support (Non-Strategic SOEs - Net Loss)': [
    { name: 'Urban Development Authority (Urban Renewal Grant)', stratCat: 'Non-Strategic', perfStatus: 'Net Loss', y2022: '2.200', y2023: '2.500', y2024: '2.800', y2025: '3.100', y2026: '3.500' }
  ],

  // --- EQUITY SUPPORT ---
  'Equity Budget Support (Strategic SOEs - Net Profit)': [
    { name: 'Ports Authority (Terminal Expansion Equity)', stratCat: 'Strategic', perfStatus: 'Net Profit', y2022: '5.800', y2023: '6.400', y2024: '7.100', y2025: '7.800', y2026: '8.500' }
  ],
  'Equity Budget Support (Strategic SOEs - Net Loss)': [
    { name: 'Ceylon Petroleum Corporation (Balance Sheet Restructuring)', stratCat: 'Strategic', perfStatus: 'Net Loss', y2022: '32.000', y2023: '35.500', y2024: '38.000', y2025: '40.500', y2026: '42.500' }
  ],
  'Equity Budget Support (Non-Strategic SOEs - Net Profit)': [
    { name: 'National Water Supply Board (Capacity Equity Infusion)', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2022: '11.000', y2023: '12.500', y2024: '13.800', y2025: '14.800', y2026: '15.500' }
  ],
  'Equity Budget Support (Non-Strategic SOEs - Net Loss)': [
    { name: 'Urban Development Authority (Asset Restructuring Equity)', stratCat: 'Non-Strategic', perfStatus: 'Net Loss', y2022: '2.200', y2023: '2.500', y2024: '2.800', y2025: '3.100', y2026: '3.500' }
  ]
};

let currentBudgetKey = '';

function initBudgetSupportChart(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <style>
      .budget-card-container {
        display: flex;
        flex-direction: column;
        gap: 12px;
        height: 100%;
      }

      .budget-export-toolbar {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-bottom: 2px;
      }
      .btn-export-budget {
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
      .btn-export-budget:hover {
        background: #1d4ed8;
      }

      /* Side-by-Side Dual Stream Grid (Stretches Vertically) */
      .budget-streams-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
        flex-grow: 1;
      }

      .budget-stream-column {
        background: #ffffff;
        border: 1px solid var(--border-color);
        border-radius: 8px;
        padding: 12px;
        display: flex;
        flex-direction: column;
        gap: 14px;
        height: 100%;
        transition: all 0.2s ease;
      }
      .budget-stream-column.highlighted {
        border-color: var(--primary-blue);
        box-shadow: 0 2px 8px rgba(0,0,0,0.08);
      }

      .budget-stream-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid var(--border-color);
        padding-bottom: 14px;
        flex-shrink: 0;
      }
      .budget-stream-title {
        font-size: 12px;
        font-weight: 700;
        color: var(--text-primary);
      }
      .budget-stream-total {
        font-size: 16px;
        font-weight: 800;
      }
      .budget-stream-percentage {
        font-size: 13px;
        font-weight: 800;
        color: var(--primary-blue);
      }

      /* Sub-Grid Stretches Equal to Column Height */
      .budget-sub-grid {
        display: flex;
        flex-direction: column;
        gap: 12px;
        flex-grow: 1;
        justify-content: space-between;
      }

      .budget-cat-card {
        background: var(--accent-bg);
        border: 1px solid var(--border-color);
        border-radius: 6px;
        padding: 8px 10px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 6px;
        flex-grow: 1;
        transition: all 0.15s ease;
      }
      .budget-cat-card:hover {
        border-color: var(--primary-blue);
        transform: translateY(-1px);
        box-shadow: 0 2px 5px rgba(0,0,0,0.05);
      }
      .budget-cat-card.strat-prof { border-left: 4px solid var(--strat-color); }
      .budget-cat-card.strat-loss { border-left: 4px solid var(--danger-red); }
      .budget-cat-card.nonstrat-prof { border-left: 4px solid #3b82f6; }
      .budget-cat-card.nonstrat-loss { border-left: 4px solid var(--nonstrat-color); }

      .budget-cat-meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 11px;
        font-weight: 600;
        color: var(--text-muted);
      }
      .budget-cat-val {
        font-size: 13px;
        font-weight: 800;
        color: var(--text-primary);
      }

      .budget-progress-track {
        width: 100%;
        height: 6px;
        background: #cbd5e1;
        border-radius: 3px;
        overflow: hidden;
      }
      .budget-progress-fill {
        height: 100%;
        border-radius: 3px;
      }

      /* Net Fiscal Summary Banner */
      .net-revenue-prominent {
        background: #f0fdf4;
        border: 1px solid #bbf7d0;
        padding: 12px;
        border-radius: 8px;
        text-align: center;
        flex-shrink: 0;
      }
      .net-revenue-prominent h3 {
        margin: 2px 0 0 0;
        font-size: 18px;
        font-weight: 800;
        color: var(--strat-color);
      }
    </style>

    <div class="budget-card-container">

      <!-- Export Toolbar -->
      <div class="budget-export-toolbar">
        <button class="btn-export-budget" onclick="exportBudgetSupportMultiSheetExcel()">
          📥 Export Budget Support Report (.xlsx)
        </button>
      </div>

      <!-- Side-by-Side Streams View -->
      <div class="budget-streams-grid">
        
        <!-- Stream 1: Recurrent Support -->
        <div class="budget-stream-column" id="stream-col-recurrent">
          <div class="budget-stream-header">
            <span class="budget-stream-title">• Recurrent Support</span>
            <span class="budget-stream-percentage">(36.6%)</span>
            <span class="budget-stream-total">40.500</span>
          </div>

          <div class="budget-sub-grid">
            <!-- Strategic Profit -->
            <div class="budget-cat-card strat-prof" onclick="openBudgetModal('Recurrent Budget Support (Strategic SOEs - Net Profit)')">
              <div class="budget-cat-meta">
                <span>Strategic SOEs - Net Profit (11.9%)</span>
                <span class="budget-cat-val">4.800</span>
              </div>
              <div class="budget-progress-track">
                <div class="budget-progress-fill" style="width: 11.9%; background: var(--strat-color);"></div>
              </div>
            </div>

            <!-- Strategic Loss -->
            <div class="budget-cat-card strat-loss" onclick="openBudgetModal('Recurrent Budget Support (Strategic SOEs - Net Loss)')">
              <div class="budget-cat-meta">
                <span>Strategic SOEs - Net Loss (75.3%)</span>
                <span class="budget-cat-val">30.500</span>
              </div>
              <div class="budget-progress-track">
                <div class="budget-progress-fill" style="width: 75.3%; background: var(--danger-red);"></div>
              </div>
            </div>

            <!-- Non-Strategic Profit -->
            <div class="budget-cat-card nonstrat-prof" onclick="openBudgetModal('Recurrent Budget Support (Non-Strategic SOEs - Net Profit)')">
              <div class="budget-cat-meta">
                <span>Non-Strategic SOEs - Net Profit (4.9%)</span>
                <span class="budget-cat-val">2.000</span>
              </div>
              <div class="budget-progress-track">
                <div class="budget-progress-fill" style="width: 4.9%; background: #3b82f6;"></div>
              </div>
            </div>

            <!-- Non-Strategic Loss -->
            <div class="budget-cat-card nonstrat-loss" onclick="openBudgetModal('Recurrent Budget Support (Non-Strategic SOEs - Net Loss)')">
              <div class="budget-cat-meta">
                <span>Non-Strategic SOEs - Net Loss (14.1%)</span>
                <span class="budget-cat-val">5.700</span>
              </div>
              <div class="budget-progress-track">
                <div class="budget-progress-fill" style="width: 14.1%; background: var(--nonstrat-color);"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Stream 2: Capital Support -->
        <div class="budget-stream-column" id="stream-col-capital">
          <div class="budget-stream-header">
            <span class="budget-stream-title">• Capital Support</span>
            <span class="budget-stream-percentage">(63.4%)</span>
            <span class="budget-stream-total">70.000</span>
          </div>

          <div class="budget-sub-grid">
            <!-- Strategic Profit -->
            <div class="budget-cat-card strat-prof" onclick="openBudgetModal('Capital Budget Support (Strategic SOEs - Net Profit)')">
              <div class="budget-cat-meta">
                <span>Strategic Profit (12.1%)</span>
                <span class="budget-cat-val">8.500</span>
              </div>
              <div class="budget-progress-track">
                <div class="budget-progress-fill" style="width: 12.1%; background: var(--strat-color);"></div>
              </div>
            </div>

            <!-- Strategic Loss -->
            <div class="budget-cat-card strat-loss" onclick="openBudgetModal('Capital Budget Support (Strategic SOEs - Net Loss)')">
              <div class="budget-cat-meta">
                <span>Strategic Loss (60.7%)</span>
                <span class="budget-cat-val">42.500</span>
              </div>
              <div class="budget-progress-track">
                <div class="budget-progress-fill" style="width: 60.7%; background: var(--danger-red);"></div>
              </div>
            </div>

            <!-- Non-Strategic Profit -->
            <div class="budget-cat-card nonstrat-prof" onclick="openBudgetModal('Capital Budget Support (Non-Strategic SOEs - Net Profit)')">
              <div class="budget-cat-meta">
                <span>Non-Strategic Profit (22.1%)</span>
                <span class="budget-cat-val">15.500</span>
              </div>
              <div class="budget-progress-track">
                <div class="budget-progress-fill" style="width: 22.1%; background: #3b82f6;"></div>
              </div>
            </div>

            <!-- Non-Strategic Loss -->
            <div class="budget-cat-card nonstrat-loss" onclick="openBudgetModal('Capital Budget Support (Non-Strategic SOEs - Net Loss)')">
              <div class="budget-cat-meta">
                <span>Non-Strategic Loss (5.1%)</span>
                <span class="budget-cat-val">3.500</span>
              </div>
              <div class="budget-progress-track">
                <div class="budget-progress-fill" style="width: 5.1%; background: var(--nonstrat-color);"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Stream 3: Equity Support -->
        <div class="budget-stream-column" id="stream-col-equity">
          <div class="budget-stream-header">
            <span class="budget-stream-title">• Equity Contribution</span>
            <span class="budget-stream-percentage">(63.4%)</span>
            <span class="budget-stream-total">70.000</span>
          </div>

          <div class="budget-sub-grid">
            <!-- Strategic Profit -->
            <div class="budget-cat-card strat-prof" onclick="openBudgetModal('Equity Budget Support (Strategic SOEs - Net Profit)')">
              <div class="budget-cat-meta">
                <span>Strategic Profit (12.1%)</span>
                <span class="budget-cat-val">8.500</span>
              </div>
              <div class="budget-progress-track">
                <div class="budget-progress-fill" style="width: 12.1%; background: var(--strat-color);"></div>
              </div>
            </div>

            <!-- Strategic Loss -->
            <div class="budget-cat-card strat-loss" onclick="openBudgetModal('Equity Budget Support (Strategic SOEs - Net Loss)')">
              <div class="budget-cat-meta">
                <span>Strategic Loss (60.7%)</span>
                <span class="budget-cat-val">42.500</span>
              </div>
              <div class="budget-progress-track">
                <div class="budget-progress-fill" style="width: 60.7%; background: var(--danger-red);"></div>
              </div>
            </div>

            <!-- Non-Strategic Profit -->
            <div class="budget-cat-card nonstrat-prof" onclick="openBudgetModal('Equity Budget Support (Non-Strategic SOEs - Net Profit)')">
              <div class="budget-cat-meta">
                <span>Non-Strategic Profit (22.1%)</span>
                <span class="budget-cat-val">15.500</span>
              </div>
              <div class="budget-progress-track">
                <div class="budget-progress-fill" style="width: 22.1%; background: #3b82f6;"></div>
              </div>
            </div>

            <!-- Non-Strategic Loss -->
            <div class="budget-cat-card nonstrat-loss" onclick="openBudgetModal('Equity Budget Support (Non-Strategic SOEs - Net Loss)')">
              <div class="budget-cat-meta">
                <span>Non-Strategic Loss (5.1%)</span>
                <span class="budget-cat-val">3.500</span>
              </div>
              <div class="budget-progress-track">
                <div class="budget-progress-fill" style="width: 5.1%; background: var(--nonstrat-color);"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Stream 4: Net Fiscal Impact Banner -->
        <div class="budget-stream-column" id="stream-col-net-fiscal">
          <div class="net-revenue-prominent">
            <span style="font-size: 10px; text-transform: uppercase; color: var(--text-muted); font-weight: 700;">Net Revenue to Government</span>
            <h3>+185.000</h3>
            <small style="color: var(--text-muted); font-size: 10px;">(Calculated as Total Govt Revenue 295.500 minus Budget Support 110.500, In Billions)</small>
          </div>
        </div>

      </div>

    </div>

    <!-- Modal Popup for Budget Allocations (5-Year Historical & Current Data) -->
    <div class="modal-overlay" id="budgetSupportModal">
      <div class="modal" style="width: 820px; max-width: 95%;">
        <div class="modal-header">
          <h3 id="budgetSupportModalTitle" style="margin:0;">Budget Support Register (Values in LKR Billions)</h3>
          <button style="border:none; background:none; font-size:18px; cursor:pointer;" onclick="closeBudgetModal()">&times;</button>
        </div>
        <p style="color: var(--text-muted); font-size: 11px;">
          Breakdown of individual state-owned entities and allocated amounts across past 4 financial years and current year (Values in LKR Billions).
        </p>

        <table>
          <thead>
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
          </thead>
          <tbody id="budgetSupportTableBody"></tbody>
        </table>
      </div>
    </div>
  `;
}

// Open Budget Support Modal (Populates 5-Year Allocation Trend)
function openBudgetModal(keyTitle) {
  currentBudgetKey = keyTitle;
  document.getElementById('budgetSupportModalTitle').innerText = `${keyTitle} (Values in LKR Billions)`;

  const tbody = document.getElementById('budgetSupportTableBody');
  tbody.innerHTML = '';

  const items = budgetSupportData[keyTitle] || [];

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

  document.getElementById('budgetSupportModal').style.display = 'flex';
}

function closeBudgetModal() {
  document.getElementById('budgetSupportModal').style.display = 'none';
}

// Multi-Worksheet XML-based .xlsx Generator across 3 dedicated streams
async function exportBudgetSupportMultiSheetExcel() {
  const currentYear = typeof selectedYear !== 'undefined' ? selectedYear : '2025';

  const now = new Date();
  const dd = String(now.getDate()).padStart(2, '0');
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const yyyy = now.getFullYear();
  const hh = String(now.getHours()).padStart(2, '0');
  const min = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');
  const timestamp = `${dd}${mm}${yyyy}_${hh}${min}${ss}`;
  const filename = `BudgetSupport_${timestamp}.xlsx`;

  const escapeXML = (str) => String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  const buildStreamSheetXML = (title, subtitle, keys) => {
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
      const items = budgetSupportData[k] || [];
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
          <col min="1" max="1" width="40" customWidth="1"/>
          <col min="2" max="2" width="24" customWidth="1"/>
          <col min="3" max="3" width="20" customWidth="1"/>
          <col min="4" max="8" width="16" customWidth="1"/>
        </cols>
        <sheetData>${rows.join('')}</sheetData>
      </worksheet>`;
  };

  const recurrentKeys = [
    'Recurrent Budget Support (Strategic SOEs - Net Profit)',
    'Recurrent Budget Support (Strategic SOEs - Net Loss)',
    'Recurrent Budget Support (Non-Strategic SOEs - Net Profit)',
    'Recurrent Budget Support (Non-Strategic SOEs - Net Loss)'
  ];

  const capitalKeys = [
    'Capital Budget Support (Strategic SOEs - Net Profit)',
    'Capital Budget Support (Strategic SOEs - Net Loss)',
    'Capital Budget Support (Non-Strategic SOEs - Net Profit)',
    'Capital Budget Support (Non-Strategic SOEs - Net Loss)'
  ];

  const equityKeys = [
    'Equity Budget Support (Strategic SOEs - Net Profit)',
    'Equity Budget Support (Strategic SOEs - Net Loss)',
    'Equity Budget Support (Non-Strategic SOEs - Net Profit)',
    'Equity Budget Support (Non-Strategic SOEs - Net Loss)'
  ];

  const sheets = [
    { name: "Recurrent Support", xml: buildStreamSheetXML("PEDMIS - Recurrent Budget Support (5-Year Trend)", "Currency Unit: In LKR Billions | Total Allocation: 40.500", recurrentKeys) },
    { name: "Capital Support", xml: buildStreamSheetXML("PEDMIS - Capital Budget Support (5-Year Trend)", "Currency Unit: In LKR Billions | Total Allocation: 70.000", capitalKeys) },
    { name: "Equity Contribution", xml: buildStreamSheetXML("PEDMIS - Equity Contribution (5-Year Trend)", "Currency Unit: In LKR Billions | Total Allocation: 70.000", equityKeys) }
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