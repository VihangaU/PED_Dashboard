/**
 * Budget Support Component for PEDMIS Dashboard
 * Features:
 * - Side-by-Side Recurrent (36.6%) & Capital (63.4%) Support detail columns
 * - Sub-Category cards stretch vertically to eliminate whitespace and align perfectly with left grid section
 * - Direct popups displaying SOE Names and allocated values (SOE Name & Value only)
 */

// Data Store for Budget Support Allocations per Category
const budgetSupportData = {
  // --- RECURRENT SUPPORT ---
  'Recurrent Budget Support - Strategic Profitable SOEs': [
    { name: 'National Water Supply Board (Operational Support)', value: '3.0B' },
    { name: 'Airport & Aviation Services (Regional Airfield Maintenance)', value: '1.8B' }
  ],
  'Recurrent Budget Support - Strategic Loss SOEs': [
    { name: 'Sri Lanka Railway Dept (Operational Subsidy)', value: '18.5B' },
    { name: 'Ceylon Electricity Board (Fuel Subsidy Grant)', value: '12.0B' }
  ],
  'Recurrent Budget Support - Non-Strategic Profitable SOEs': [
    { name: 'State Engineering Corporation (Restructuring Grant)', value: '1.2B' },
    { name: 'Ceylon Fisheries Corporation (Cold Chain Support)', value: '0.8B' }
  ],
  'Recurrent Budget Support - Non-Strategic Loss SOEs': [
    { name: 'Sri Lanka Transport Board (SLTB Fleet Subsidy)', value: '5.2B' },
    { name: 'Spices & Allied Products Board (Admin Support)', value: '0.5B' }
  ],

  // --- CAPITAL SUPPORT ---
  'Capital Budget Support - Strategic Profitable SOEs': [
    { name: 'Ports Authority Infrastructure Expansion', value: '5.0B' },
    { name: 'Sri Lanka Telecom (Rural Connectivity Project)', value: '3.5B' }
  ],
  'Capital Budget Support - Strategic Loss SOEs': [
    { name: 'Road Development Authority (Highway Network Grant)', value: '32.0B' },
    { name: 'Sri Lanka Railway Dept (Rolling Stock & Track Upgrades)', value: '10.5B' }
  ],
  'Capital Budget Support - Non-Strategic Profitable SOEs': [
    { name: 'National Water Supply Board (Water Treatment Capital Grant)', value: '19.0B' }
  ],
  'Capital Budget Support - Non-Strategic Loss SOEs': [
    { name: 'Urban Development Authority (Urban Renewal Grant)', value: '3.5B' }
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
        gap: 10px;
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
        padding-bottom: 8px;
        flex-shrink: 0;
      }
      .budget-stream-title {
        font-size: 12px;
        font-weight: 700;
        color: var(--text-primary);
      }
      .budget-stream-total {
        font-size: 14px;
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
        gap: 8px;
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
            <div class="budget-cat-card strat-prof" onclick="openBudgetModal('Recurrent Budget Support - Strategic Profitable SOEs')">
              <div class="budget-cat-meta">
                <span>Strategic Profit (11.9%)</span>
                <span class="budget-cat-val">4.8B  ⓘ</span>
              </div>
              <div class="budget-progress-track">
                <div class="budget-progress-fill" style="width: 11.9%; background: var(--strat-color);"></div>
              </div>
            </div>

            <!-- Strategic Loss -->
            <div class="budget-cat-card strat-loss" onclick="openBudgetModal('Recurrent Budget Support - Strategic Loss SOEs')">
              <div class="budget-cat-meta">
                <span>Strategic Loss (75.3%)</span>
                <span class="budget-cat-val">30.5B  ⓘ</span>
              </div>
              <div class="budget-progress-track">
                <div class="budget-progress-fill" style="width: 75.3%; background: var(--danger-red);"></div>
              </div>
            </div>

            <!-- Non-Strategic Profit -->
            <div class="budget-cat-card nonstrat-prof" onclick="openBudgetModal('Recurrent Budget Support - Non-Strategic Profitable SOEs')">
              <div class="budget-cat-meta">
                <span>Non-Strategic Profit (4.9%)</span>
                <span class="budget-cat-val">2.0B  ⓘ</span>
              </div>
              <div class="budget-progress-track">
                <div class="budget-progress-fill" style="width: 4.9%; background: #3b82f6;"></div>
              </div>
            </div>

            <!-- Non-Strategic Loss -->
            <div class="budget-cat-card nonstrat-loss" onclick="openBudgetModal('Recurrent Budget Support - Non-Strategic Loss SOEs')">
              <div class="budget-cat-meta">
                <span>Non-Strategic Loss (14.1%)</span>
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
            <div class="budget-cat-card strat-prof" onclick="openBudgetModal('Capital Budget Support - Strategic Profitable SOEs')">
              <div class="budget-cat-meta">
                <span>Strategic Profit (12.1%)</span>
                <span class="budget-cat-val">8.5B  ⓘ</span>
              </div>
              <div class="budget-progress-track">
                <div class="budget-progress-fill" style="width: 12.1%; background: var(--strat-color);"></div>
              </div>
            </div>

            <!-- Strategic Loss -->
            <div class="budget-cat-card strat-loss" onclick="openBudgetModal('Capital Budget Support - Strategic Loss SOEs')">
              <div class="budget-cat-meta">
                <span>Strategic Loss (60.7%)</span>
                <span class="budget-cat-val">42.5B  ⓘ</span>
              </div>
              <div class="budget-progress-track">
                <div class="budget-progress-fill" style="width: 60.7%; background: var(--danger-red);"></div>
              </div>
            </div>

            <!-- Non-Strategic Profit -->
            <div class="budget-cat-card nonstrat-prof" onclick="openBudgetModal('Capital Budget Support - Non-Strategic Profitable SOEs')">
              <div class="budget-cat-meta">
                <span>Non-Strategic Profit (22.1%)</span>
                <span class="budget-cat-val">15.5B  ⓘ</span>
              </div>
              <div class="budget-progress-track">
                <div class="budget-progress-fill" style="width: 22.1%; background: #3b82f6;"></div>
              </div>
            </div>

            <!-- Non-Strategic Loss -->
            <div class="budget-cat-card nonstrat-loss" onclick="openBudgetModal('Capital Budget Support - Non-Strategic Loss SOEs')">
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

      </div>

      <!-- Net Fiscal Impact Banner -->
      <div class="net-revenue-prominent">
        <span style="font-size: 10px; text-transform: uppercase; color: var(--text-muted); font-weight: 700;">Net Revenue to Government</span>
        <h3>+185.0 Billion</h3>
        <small style="color: var(--text-muted); font-size: 10px;">(Calculated as Total Govt Revenue 295.5B minus Budget Support 110.5B)</small>
      </div>

    </div>

    <!-- Modal Popup for Budget Allocations (Clean Two-Column Structure) -->
    <div class="modal-overlay" id="budgetSupportModal">
      <div class="modal">
        <div class="modal-header">
          <h3 id="budgetSupportModalTitle" style="margin:0;">Budget Support Register</h3>
          <button style="border:none; background:none; font-size:18px; cursor:pointer;" onclick="closeBudgetModal()">&times;</button>
        </div>
        <p style="color: var(--text-muted); font-size: 11px;">
          Breakdown of individual state-owned entities receiving budget support under this classification.
        </p>

        <table>
          <thead>
            <tr>
              <th>SOE Name</th>
              <th>Allocation Value</th>
            </tr>
          </thead>
          <tbody id="budgetSupportTableBody"></tbody>
        </table>
      </div>
    </div>
  `;
}

// Open Budget Support Modal (Only SOE Name & Value columns)
function openBudgetModal(keyTitle) {
  currentBudgetKey = keyTitle;
  document.getElementById('budgetSupportModalTitle').innerText = keyTitle;

  const tbody = document.getElementById('budgetSupportTableBody');
  tbody.innerHTML = '';

  const items = budgetSupportData[keyTitle] || [];

  items.forEach(item => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${item.name}</strong></td>
      <td style="font-weight:700; color:var(--primary-blue);">${item.value}</td>
    `;
    tbody.appendChild(tr);
  });

  document.getElementById('budgetSupportModal').style.display = 'flex';
}

function closeBudgetModal() {
  document.getElementById('budgetSupportModal').style.display = 'none';
}