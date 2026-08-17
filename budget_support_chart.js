/**
 * Budget Support Component for PEDMIS Dashboard
 * Features:
 * - Side-by-Side Recurrent (36.6%), Capital (63.4%), and Equity Support detail columns
 * - Sub-Category cards with explicit percentage and values
 * - Direct popups displaying SOE Names with 5-Year Historical & Current Allocations (FY 2022 - FY 2026)
 */

// Data Store for Budget Support Allocations per Category (5-Year Trends)
const budgetSupportData = {
  // --- RECURRENT SUPPORT ---
  'Recurrent Budget Support (Strategic SOEs - Net Profit)': [
    { name: 'National Water Supply Board (Operational Support)', y2022: '2.1B', y2023: '2.4B', y2024: '2.7B', y2025: '2.9B', y2026: '3.0B' },
    { name: 'Airport & Aviation Services (Regional Airfield Maintenance)', y2022: '1.1B', y2023: '1.3B', y2024: '1.5B', y2025: '1.7B', y2026: '1.8B' }
  ],
  'Recurrent Budget Support (Strategic SOEs - Net Loss)': [
    { name: 'Sri Lanka Railway Dept (Operational Subsidy)', y2022: '14.0B', y2023: '15.5B', y2024: '16.8B', y2025: '17.5B', y2026: '18.5B' },
    { name: 'Ceylon Electricity Board (Fuel Subsidy Grant)', y2022: '8.5B', y2023: '9.8B', y2024: '10.5B', y2025: '11.2B', y2026: '12.0B' }
  ],
  'Recurrent Budget Support (Non-Strategic SOEs - Net Profit)': [
    { name: 'State Engineering Corporation (Restructuring Grant)', y2022: '0.7B', y2023: '0.8B', y2024: '1.0B', y2025: '1.1B', y2026: '1.2B' },
    { name: 'Ceylon Fisheries Corporation (Cold Chain Support)', y2022: '0.4B', y2023: '0.5B', y2024: '0.6B', y2025: '0.7B', y2026: '0.8B' }
  ],
  'Recurrent Budget Support (Non-Strategic SOEs - Net Loss)': [
    { name: 'Sri Lanka Transport Board (SLTB Fleet Subsidy)', y2022: '3.8B', y2023: '4.2B', y2024: '4.6B', y2025: '4.9B', y2026: '5.2B' },
    { name: 'Spices & Allied Products Board (Admin Support)', y2022: '0.3B', y2023: '0.35B', y2024: '0.4B', y2025: '0.45B', y2026: '0.5B' }
  ],

  // --- CAPITAL SUPPORT ---
  'Capital Budget Support (Strategic SOEs - Net Profit)': [
    { name: 'Ports Authority Infrastructure Expansion', y2022: '3.2B', y2023: '3.8B', y2024: '4.2B', y2025: '4.7B', y2026: '5.0B' },
    { name: 'Sri Lanka Telecom (Rural Connectivity Project)', y2022: '2.0B', y2023: '2.5B', y2024: '2.9B', y2025: '3.2B', y2026: '3.5B' }
  ],
  'Capital Budget Support (Strategic SOEs - Net Loss)': [
    { name: 'Road Development Authority (Highway Network Grant)', y2022: '24.0B', y2023: '26.5B', y2024: '28.5B', y2025: '30.0B', y2026: '32.0B' },
    { name: 'Sri Lanka Railway Dept (Rolling Stock & Track Upgrades)', y2022: '7.5B', y2023: '8.2B', y2024: '9.0B', y2025: '9.8B', y2026: '10.5B' }
  ],
  'Capital Budget Support (Non-Strategic SOEs - Net Profit)': [
    { name: 'National Water Supply Board (Water Treatment Capital Grant)', y2022: '14.0B', y2023: '15.5B', y2024: '17.0B', y2025: '18.2B', y2026: '19.0B' }
  ],
  'Capital Budget Support (Non-Strategic SOEs - Net Loss)': [
    { name: 'Urban Development Authority (Urban Renewal Grant)', y2022: '2.2B', y2023: '2.5B', y2024: '2.8B', y2025: '3.1B', y2026: '3.5B' }
  ],

  // --- EQUITY SUPPORT ---
  'Equity Budget Support (Strategic SOEs - Net Profit)': [
    { name: 'Ports Authority (Terminal Expansion Equity)', y2022: '5.8B', y2023: '6.4B', y2024: '7.1B', y2025: '7.8B', y2026: '8.5B' }
  ],
  'Equity Budget Support (Strategic SOEs - Net Loss)': [
    { name: 'Ceylon Petroleum Corporation (Balance Sheet Restructuring)', y2022: '32.0B', y2023: '35.5B', y2024: '38.0B', y2025: '40.5B', y2026: '42.5B' }
  ],
  'Equity Budget Support (Non-Strategic SOEs - Net Profit)': [
    { name: 'National Water Supply Board (Capacity Equity Infusion)', y2022: '11.0B', y2023: '12.5B', y2024: '13.8B', y2025: '14.8B', y2026: '15.5B' }
  ],
  'Equity Budget Support (Non-Strategic SOEs - Net Loss)': [
    { name: 'Urban Development Authority (Asset Restructuring Equity)', y2022: '2.2B', y2023: '2.5B', y2024: '2.8B', y2025: '3.1B', y2026: '3.5B' }
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

      <!-- Side-by-Side Streams View -->
      <div class="budget-streams-grid">
        
        <!-- Stream 1: Recurrent Support -->
        <div class="budget-stream-column" id="stream-col-recurrent">
          <div class="budget-stream-header">
            <span class="budget-stream-title">• Recurrent Support</span>
            <span class="budget-stream-percentage">(36.6%)</span>
            <span class="budget-stream-total">40.5B</span>
          </div>

          <div class="budget-sub-grid">
            <!-- Strategic Profit -->
            <div class="budget-cat-card strat-prof" onclick="openBudgetModal('Recurrent Budget Support (Strategic SOEs - Net Profit)')">
              <div class="budget-cat-meta">
                <span>Strategic SOEs - Net Profit (11.9%)</span>
                <span class="budget-cat-val">4.8B  ⓘ</span>
              </div>
              <div class="budget-progress-track">
                <div class="budget-progress-fill" style="width: 11.9%; background: var(--strat-color);"></div>
              </div>
            </div>

            <!-- Strategic Loss -->
            <div class="budget-cat-card strat-loss" onclick="openBudgetModal('Recurrent Budget Support (Strategic SOEs - Net Loss)')">
              <div class="budget-cat-meta">
                <span>Strategic SOEs - Net Loss (75.3%)</span>
                <span class="budget-cat-val">30.5B  ⓘ</span>
              </div>
              <div class="budget-progress-track">
                <div class="budget-progress-fill" style="width: 75.3%; background: var(--danger-red);"></div>
              </div>
            </div>

            <!-- Non-Strategic Profit -->
            <div class="budget-cat-card nonstrat-prof" onclick="openBudgetModal('Recurrent Budget Support (Non-Strategic SOEs - Net Profit)')">
              <div class="budget-cat-meta">
                <span>Non-Strategic SOEs - Net Profit (4.9%)</span>
                <span class="budget-cat-val">2.0B  ⓘ</span>
              </div>
              <div class="budget-progress-track">
                <div class="budget-progress-fill" style="width: 4.9%; background: #3b82f6;"></div>
              </div>
            </div>

            <!-- Non-Strategic Loss -->
            <div class="budget-cat-card nonstrat-loss" onclick="openBudgetModal('Recurrent Budget Support (Non-Strategic SOEs - Net Loss)')">
              <div class="budget-cat-meta">
                <span>Non-Strategic SOEs - Net Loss (14.1%)</span>
                <span class="budget-cat-val">5.7B  ⓘ</span>
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
            <span class="budget-stream-total">70.0B</span>
          </div>

          <div class="budget-sub-grid">
            <!-- Strategic Profit -->
            <div class="budget-cat-card strat-prof" onclick="openBudgetModal('Capital Budget Support (Strategic SOEs - Net Profit)')">
              <div class="budget-cat-meta">
                <span>Strategic Profit (12.1%)</span>
                <span class="budget-cat-val">8.5B  ⓘ</span>
              </div>
              <div class="budget-progress-track">
                <div class="budget-progress-fill" style="width: 12.1%; background: var(--strat-color);"></div>
              </div>
            </div>

            <!-- Strategic Loss -->
            <div class="budget-cat-card strat-loss" onclick="openBudgetModal('Capital Budget Support (Strategic SOEs - Net Loss)')">
              <div class="budget-cat-meta">
                <span>Strategic Loss (60.7%)</span>
                <span class="budget-cat-val">42.5B  ⓘ</span>
              </div>
              <div class="budget-progress-track">
                <div class="budget-progress-fill" style="width: 60.7%; background: var(--danger-red);"></div>
              </div>
            </div>

            <!-- Non-Strategic Profit -->
            <div class="budget-cat-card nonstrat-prof" onclick="openBudgetModal('Capital Budget Support (Non-Strategic SOEs - Net Profit)')">
              <div class="budget-cat-meta">
                <span>Non-Strategic Profit (22.1%)</span>
                <span class="budget-cat-val">15.5B  ⓘ</span>
              </div>
              <div class="budget-progress-track">
                <div class="budget-progress-fill" style="width: 22.1%; background: #3b82f6;"></div>
              </div>
            </div>

            <!-- Non-Strategic Loss -->
            <div class="budget-cat-card nonstrat-loss" onclick="openBudgetModal('Capital Budget Support (Non-Strategic SOEs - Net Loss)')">
              <div class="budget-cat-meta">
                <span>Non-Strategic Loss (5.1%)</span>
                <span class="budget-cat-val">3.5B  ⓘ</span>
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
            <span class="budget-stream-total">70.0B</span>
          </div>

          <div class="budget-sub-grid">
            <!-- Strategic Profit -->
            <div class="budget-cat-card strat-prof" onclick="openBudgetModal('Equity Budget Support (Strategic SOEs - Net Profit)')">
              <div class="budget-cat-meta">
                <span>Strategic Profit (12.1%)</span>
                <span class="budget-cat-val">8.5B  ⓘ</span>
              </div>
              <div class="budget-progress-track">
                <div class="budget-progress-fill" style="width: 12.1%; background: var(--strat-color);"></div>
              </div>
            </div>

            <!-- Strategic Loss -->
            <div class="budget-cat-card strat-loss" onclick="openBudgetModal('Equity Budget Support (Strategic SOEs - Net Loss)')">
              <div class="budget-cat-meta">
                <span>Strategic Loss (60.7%)</span>
                <span class="budget-cat-val">42.5B  ⓘ</span>
              </div>
              <div class="budget-progress-track">
                <div class="budget-progress-fill" style="width: 60.7%; background: var(--danger-red);"></div>
              </div>
            </div>

            <!-- Non-Strategic Profit -->
            <div class="budget-cat-card nonstrat-prof" onclick="openBudgetModal('Equity Budget Support (Non-Strategic SOEs - Net Profit)')">
              <div class="budget-cat-meta">
                <span>Non-Strategic Profit (22.1%)</span>
                <span class="budget-cat-val">15.5B  ⓘ</span>
              </div>
              <div class="budget-progress-track">
                <div class="budget-progress-fill" style="width: 22.1%; background: #3b82f6;"></div>
              </div>
            </div>

            <!-- Non-Strategic Loss -->
            <div class="budget-cat-card nonstrat-loss" onclick="openBudgetModal('Equity Budget Support (Non-Strategic SOEs - Net Loss)')">
              <div class="budget-cat-meta">
                <span>Non-Strategic Loss (5.1%)</span>
                <span class="budget-cat-val">3.5B  ⓘ</span>
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
            <h3>+185.0 Billion</h3>
            <small style="color: var(--text-muted); font-size: 10px;">(Calculated as Total Govt Revenue 295.5B minus Budget Support 110.5B)</small>
          </div>
        </div>

      </div>

    </div>

    <!-- Modal Popup for Budget Allocations (5-Year Historical & Current Data) -->
    <div class="modal-overlay" id="budgetSupportModal">
      <div class="modal" style="width: 780px; max-width: 95%;">
        <div class="modal-header">
          <h3 id="budgetSupportModalTitle" style="margin:0;">Budget Support Register</h3>
          <button style="border:none; background:none; font-size:18px; cursor:pointer;" onclick="closeBudgetModal()">&times;</button>
        </div>
        <p style="color: var(--text-muted); font-size: 11px;">
          Breakdown of individual state-owned entities and allocated amounts across past 4 financial years and current year.
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
          <tbody id="budgetSupportTableBody"></tbody>
        </table>
      </div>
    </div>
  `;
}

// Open Budget Support Modal (Populates 5-Year Allocation Trend)
function openBudgetModal(keyTitle) {
  currentBudgetKey = keyTitle;
  document.getElementById('budgetSupportModalTitle').innerText = keyTitle + ' (5-Year Trend)';

  const tbody = document.getElementById('budgetSupportTableBody');
  tbody.innerHTML = '';

  const items = budgetSupportData[keyTitle] || [];

  items.forEach(item => {
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

  document.getElementById('budgetSupportModal').style.display = 'flex';
}

function closeBudgetModal() {
  document.getElementById('budgetSupportModal').style.display = 'none';
}