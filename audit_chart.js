/**
 * Audit Opinion Chart Component for PEDMIS Dashboard
 * Renders a Horizontal Stacked Row Graph for Clean, Qualified, Adverse, Disclaimer, and Unavailable Audit Statuses
 * 
 * Classifications:
 * - Clean: True and Fair
 * - Qualified: Qualified Opinion
 * - Adverse: Adverse Opinion
 * - Disclaimer: Disclaimer of Opinion
 * - Unavailable: Not Uploaded Yet (Displays Latest Available Audit Year & Opinion)
 * 
 * Features:
 * - Direct Count Badges per row without sub-percentage labels.
 * - Total Audit Opinions Overall Values summary footer on the dashboard.
 * - Interactive hover highlight synchronization.
 * - Drill-down popups with pagination.
 * - Multi-sheet OpenXML (.xlsx) report export.
 */

const auditCategoryData = {
  // --- CLEAN OPINIONS (True and Fair) ---
  'Clean Audit Opinions (True and Fair) - (Strategic SOEs - Net Profit)': [
    { name: 'Bank of Ceylon', category: 'Strategic', opinion: 'True and Fair' },
    { name: 'People\'s Bank', category: 'Strategic', opinion: 'True and Fair' },
    { name: 'Ports Authority', category: 'Strategic', opinion: 'True and Fair' },
    { name: 'Sri Lanka Telecom', category: 'Strategic', opinion: 'True and Fair' },
    { name: 'Airport & Aviation Services', category: 'Strategic', opinion: 'True and Fair' },
    { name: 'National Savings Bank', category: 'Strategic', opinion: 'True and Fair' },
    { name: 'Sri Lanka Insurance Corp', category: 'Strategic', opinion: 'True and Fair' },
    { name: 'State Pharmaceuticals Corp', category: 'Strategic', opinion: 'True and Fair' },
    { name: 'Lanka Electricity Company', category: 'Strategic', opinion: 'True and Fair' },
    { name: 'Litro Gas Lanka Ltd', category: 'Strategic', opinion: 'True and Fair' },
    { name: 'Development Lotteries Board', category: 'Strategic', opinion: 'True and Fair' },
    { name: 'National Lotteries Board', category: 'Strategic', opinion: 'True and Fair' },
    { name: 'Civil Aviation Authority', category: 'Strategic', opinion: 'True and Fair' },
    { name: 'Export Development Board', category: 'Strategic', opinion: 'True and Fair' },
    { name: 'State Timber Corporation', category: 'Strategic', opinion: 'True and Fair' },
    { name: 'Central Engineering Consultancy Bureau', category: 'Strategic', opinion: 'True and Fair' },
    { name: 'Sri Lanka Standards Institution', category: 'Strategic', opinion: 'True and Fair' },
    { name: 'Coconut Development Authority', category: 'Strategic', opinion: 'True and Fair' },
    { name: 'Tea Small Holdings Authority', category: 'Strategic', opinion: 'True and Fair' },
    { name: 'Marine Environment Protection Authority', category: 'Strategic', opinion: 'True and Fair' }
  ],
  'Clean Audit Opinions (True and Fair) - (Strategic SOEs - Net Loss)': [
    { name: 'Ceylon Petroleum Corp', category: 'Strategic', opinion: 'True and Fair' },
    { name: 'SriLankan Airlines', category: 'Strategic', opinion: 'True and Fair' }
  ],
  'Clean Audit Opinions (True and Fair) - (Non-Strategic SOEs - Net Profit)': [
    { name: 'Lanka Hospitals PLC', category: 'Non-Strategic', opinion: 'True and Fair' },
    { name: 'BCI Campus Ltd', category: 'Non-Strategic', opinion: 'True and Fair' },
    { name: 'Lanka Sugar Company', category: 'Non-Strategic', opinion: 'True and Fair' },
    { name: 'Lanka Mineral Sands Ltd', category: 'Non-Strategic', opinion: 'True and Fair' },
    { name: 'State Engineering Corporation', category: 'Non-Strategic', opinion: 'True and Fair' },
    { name: 'Urban Development Authority', category: 'Non-Strategic', opinion: 'True and Fair' },
    { name: 'National Design Centre', category: 'Non-Strategic', opinion: 'True and Fair' },
    { name: 'State Gem & Jewellery Corp', category: 'Non-Strategic', opinion: 'True and Fair' },
    { name: 'Ceylon Fisheries Corporation', category: 'Non-Strategic', opinion: 'True and Fair' },
    { name: 'Building Materials Corp', category: 'Non-Strategic', opinion: 'True and Fair' }
  ],
  'Clean Audit Opinions (True and Fair) - (Non-Strategic SOEs - Net Loss)': [
    { name: 'Spices & Allied Products Board', category: 'Non-Strategic', opinion: 'True and Fair' },
    { name: 'Kurunegala Plantations Ltd', category: 'Non-Strategic', opinion: 'True and Fair' }
  ],

  // --- QUALIFIED OPINIONS ---
  'Qualified Audit Opinions - (Strategic SOEs - Net Profit)': [
    { name: 'State Printing Corporation', category: 'Strategic', opinion: 'Qualified' },
    { name: 'Lanka Phosphate Ltd', category: 'Strategic', opinion: 'Qualified' },
    { name: 'Sri Lanka Handicrafts Board', category: 'Strategic', opinion: 'Qualified' },
    { name: 'Sri Lanka Ports Management', category: 'Strategic', opinion: 'Qualified' },
    { name: 'Lanka IOC Share Entity', category: 'Strategic', opinion: 'Qualified' },
    { name: 'Sri Lanka Transport Board', category: 'Strategic', opinion: 'Qualified' }
  ],
  'Qualified Audit Opinions - (Strategic SOEs - Net Loss)': [
    { name: 'Ceylon Electricity Board', category: 'Strategic', opinion: 'Qualified' },
    { name: 'Sri Lanka Railway Dept', category: 'Strategic', opinion: 'Qualified' }
  ],
  'Qualified Audit Opinions - (Non-Strategic SOEs - Net Profit)': [
    { name: 'Lanka Cement PLC', category: 'Non-Strategic', opinion: 'Qualified' },
    { name: 'Sri Lanka Rubber Manufacturing', category: 'Non-Strategic', opinion: 'Qualified' },
    { name: 'Ceylon Fishery Harbours Corp', category: 'Non-Strategic', opinion: 'Qualified' }
  ],
  'Qualified Audit Opinions - (Non-Strategic SOEs - Net Loss)': [
    { name: 'State Fertilizer Corp', category: 'Non-Strategic', opinion: 'Qualified' }
  ],

  // --- ADVERSE OPINIONS ---
  'Adverse Audit Opinions - (Strategic SOEs - Net Profit)': [
    { name: 'National Water Supply Board', category: 'Strategic', opinion: 'Adverse' },
    { name: 'Sri Lanka State Trading Corp', category: 'Strategic', opinion: 'Adverse' }
  ],
  'Adverse Audit Opinions - (Strategic SOEs - Net Loss)': [
    { name: 'Lanka Coal Company', category: 'Strategic', opinion: 'Adverse' }
  ],
  'Adverse Audit Opinions - (Non-Strategic SOEs - Net Profit)': [
    { name: 'National Livestock Development Board', category: 'Non-Strategic', opinion: 'Adverse' },
    { name: 'Coast Conservation Dept', category: 'Non-Strategic', opinion: 'Adverse' }
  ],
  'Adverse Audit Opinions - (Non-Strategic SOEs - Net Loss)': [
    { name: 'Hotel Developers (Lanka) Ltd', category: 'Non-Strategic', opinion: 'Adverse' }
  ],

  // --- DISCLAIMER OPINIONS ---
  'Disclaimer Audit Opinions - (Strategic SOEs - Net Profit)': [
    { name: 'Kahawatte Plantations Entity', category: 'Strategic', opinion: 'Disclaimer' },
    { name: 'Elpitiya Plantations Entity', category: 'Strategic', opinion: 'Disclaimer' },
    { name: 'Chilaw Plantations Ltd', category: 'Strategic', opinion: 'Disclaimer' }
  ],
  'Disclaimer Audit Opinions - (Non-Strategic SOEs - Net Profit)': [
    { name: 'National Paper Company Entity', category: 'Non-Strategic', opinion: 'Disclaimer' },
    { name: 'Ceylon Fertilizer Co Ltd', category: 'Non-Strategic', opinion: 'Disclaimer' }
  ],

  // --- UNAVAILABLE (Not Uploaded Yet) ---
  'Audit Opinion Unavailable (Not Uploaded Yet) - (Strategic SOEs - Net Loss)': [
    { name: 'Mahanagera Transport Corp', category: 'Strategic', year: '2020', opinion: 'Adverse' }
  ],
  'Audit Opinion Unavailable (Not Uploaded Yet) - (Non-Strategic SOEs - Net Loss)': [
    { name: 'Janatha Estates Development Board', category: 'Non-Strategic', year: '2022', opinion: 'Adverse' },
    { name: 'Selacine Television Institute', category: 'Non-Strategic', year: '2023', opinion: 'Disclaimer' },
    { name: 'Sri Lanka Casualty Insurance', category: 'Non-Strategic', year: '2023', opinion: 'Qualified' }
  ]
};

let currentAuditCategoryKey = '';
let currentAuditPage = 1;
const auditItemsPerPage = 5;

/**
 * Initializes and injects the Horizontal Stacked Row Graph for Audit Opinions
 */
function initAuditChart(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <style>
      .audit-card-wrapper {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .audit-export-toolbar {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-bottom: 2px;
      }
      .btn-export-audit {
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
      .btn-export-audit:hover {
        background: #1d4ed8;
      }
      .audit-legend-container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 12px;
        background: #ffffff;
        padding: 8px 12px;
        border-radius: 6px;
        border: 1px solid var(--border-color);
      }
      .audit-legend-item {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 11px;
        font-weight: 600;
        cursor: pointer;
        padding: 3px 6px;
        border-radius: 4px;
        transition: background 0.15s ease;
      }
      .audit-legend-item:hover, .audit-legend-item.highlighted {
        background: #e2e8f0;
      }
      .audit-color-dot {
        width: 10px;
        height: 10px;
        border-radius: 2px;
        display: inline-block;
      }

      /* Horizontal Stacked Row Graph Layout */
      .stacked-rows-container {
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding: 12px;
        background: #ffffff;
        border: 1px solid var(--border-color);
        border-radius: 8px;
      }
      .stacked-row-group {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .row-label-container {
        width: 120px;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .row-label {
        font-weight: 700;
        font-size: 12px;
        color: var(--text-primary);
      }
      .row-total-badge {
        font-size: 10px;
        font-weight: 800;
        padding: 2px 6px;
        border-radius: 10px;
      }
      .stacked-row-track {
        flex-grow: 1;
        height: 28px;
        display: flex;
        border-radius: 6px;
        overflow: hidden;
        background: #f1f5f9;
        box-shadow: inset 0 1px 2px rgba(0,0,0,0.05);
      }
      .row-segment {
        height: 100%;
        transition: all 0.2s ease;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        font-size: 11px;
        font-weight: 700;
      }
      .row-segment:hover, .row-segment.highlighted {
        filter: brightness(1.15);
        box-shadow: inset 0 0 0 2px rgba(255,255,255,0.8);
      }

      /* Total Audit Opinions Summary Footer */
      .audit-total-summary-card {
        background: #f8fafc;
        border: 1px solid var(--border-color);
        border-radius: 8px;
        padding: 10px 14px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 11px;
        color: var(--text-primary);
        font-weight: 600;
      }
      .audit-stat-pill {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        background: #ffffff;
        border: 1px solid var(--border-color);
        padding: 2px 8px;
        border-radius: 12px;
        font-weight: 700;
      }
    </style>

    <div class="audit-card-wrapper">
      
      <!-- Export Toolbar -->
      <div class="audit-export-toolbar">
        <button class="btn-export-audit" onclick="exportAuditOpinionMultiSheetExcel()">
          📥 Export Audit Opinion Report (.xlsx)
        </button>
      </div>

      <!-- Interactive Legend -->
      <div class="audit-legend-container">
        <div class="audit-legend-item" id="legend-strat-prof"
             onmouseenter="highlightAuditCategory('strat-prof')" onmouseleave="removeAuditHighlight()">
          <span class="audit-color-dot" style="background:#cce8c3;"></span>Strategic SOEs - Net Profit
        </div>
        <div class="audit-legend-item" id="legend-strat-loss"
             onmouseenter="highlightAuditCategory('strat-loss')" onmouseleave="removeAuditHighlight()">
          <span class="audit-color-dot" style="background:#f5baca;"></span>Strategic SOEs - Net Loss
        </div>
        <div class="audit-legend-item" id="legend-nonstrat-prof"
             onmouseenter="highlightAuditCategory('nonstrat-prof')" onmouseleave="removeAuditHighlight()">
          <span class="audit-color-dot" style="background:#c7dbf2;"></span>Non-Strategic SOEs - Net Profit
        </div>
        <div class="audit-legend-item" id="legend-nonstrat-loss"
             onmouseenter="highlightAuditCategory('nonstrat-loss')" onmouseleave="removeAuditHighlight()">
          <span class="audit-color-dot" style="background:#e8d1ac;"></span>Non-Strategic SOEs - Net Loss
        </div>
      </div>

      <!-- Horizontal Stacked Rows Area -->
      <div class="stacked-rows-container">
        
        <!-- Row 1: Clean (34 Total) -->
        <div class="stacked-row-group">
          <div class="row-label-container">
            <span class="row-label">Clean</span>
            <span class="row-total-badge badge-success">34</span>
          </div>
          <div class="stacked-row-track">
            <div class="row-segment seg-strat-prof" style="width: 58.8%; background:#cce8c3; color:#000000;"
                 onclick="openAuditPopup('Clean Audit Opinions (True and Fair) - (Strategic SOEs - Net Profit)')"
                 onmouseenter="highlightAuditCategory('strat-prof')" onmouseleave="removeAuditHighlight()"
                 title="Clean (True and Fair) - Strategic Profitable: 20 SOEs">20</div>
            <div class="row-segment seg-strat-loss" style="width: 5.9%; background:#f5baca; color:#000000;"
                 onclick="openAuditPopup('Clean Audit Opinions (True and Fair) - (Strategic SOEs - Net Loss)')"
                 onmouseenter="highlightAuditCategory('strat-loss')" onmouseleave="removeAuditHighlight()"
                 title="Clean (True and Fair) - Strategic Loss: 2 SOEs">2</div>
            <div class="row-segment seg-nonstrat-prof" style="width: 29.4%; background:#c7dbf2; color:#000000;"
                 onclick="openAuditPopup('Clean Audit Opinions (True and Fair) - (Non-Strategic SOEs - Net Profit)')"
                 onmouseenter="highlightAuditCategory('nonstrat-prof')" onmouseleave="removeAuditHighlight()"
                 title="Clean (True and Fair) - Non-Strategic Profitable: 10 SOEs">10</div>
            <div class="row-segment seg-nonstrat-loss" style="width: 5.9%; background:#e8d1ac; color:#000000;"
                 onclick="openAuditPopup('Clean Audit Opinions (True and Fair) - (Non-Strategic SOEs - Net Loss)')"
                 onmouseenter="highlightAuditCategory('nonstrat-loss')" onmouseleave="removeAuditHighlight()"
                 title="Clean (True and Fair) - Non-Strategic Loss: 2 SOEs">2</div>
          </div>
        </div>

        <!-- Row 2: Qualified (12 Total) -->
        <div class="stacked-row-group">
          <div class="row-label-container">
            <span class="row-label">Qualified</span>
            <span class="row-total-badge badge-danger">12</span>
          </div>
          <div class="stacked-row-track">
            <div class="row-segment seg-strat-prof" style="width: 50%; background:#cce8c3; color:#000000;"
                 onclick="openAuditPopup('Qualified Audit Opinions - (Strategic SOEs - Net Profit)')"
                 onmouseenter="highlightAuditCategory('strat-prof')" onmouseleave="removeAuditHighlight()"
                 title="Qualified - Strategic Profitable: 6 SOEs">6</div>
            <div class="row-segment seg-strat-loss" style="width: 16.67%; background:#f5baca; color:#000000;"
                 onclick="openAuditPopup('Qualified Audit Opinions - (Strategic SOEs - Net Loss)')"
                 onmouseenter="highlightAuditCategory('strat-loss')" onmouseleave="removeAuditHighlight()"
                 title="Qualified - Strategic Loss: 2 SOEs">2</div>
            <div class="row-segment seg-nonstrat-prof" style="width: 25%; background:#c7dbf2; color:#000000;"
                 onclick="openAuditPopup('Qualified Audit Opinions - (Non-Strategic SOEs - Net Profit)')"
                 onmouseenter="highlightAuditCategory('nonstrat-prof')" onmouseleave="removeAuditHighlight()"
                 title="Qualified - Non-Strategic Profitable: 3 SOEs">3</div>
            <div class="row-segment seg-nonstrat-loss" style="width: 8.33%; background:#e8d1ac; color:#000000;"
                 onclick="openAuditPopup('Qualified Audit Opinions - (Non-Strategic SOEs - Net Loss)')"
                 onmouseenter="highlightAuditCategory('nonstrat-loss')" onmouseleave="removeAuditHighlight()"
                 title="Qualified - Non-Strategic Loss: 1 SOE">1</div>
          </div>
        </div>

        <!-- Row 3: Adverse (6 Total) -->
        <div class="stacked-row-group">
          <div class="row-label-container">
            <span class="row-label">Adverse</span>
            <span class="row-total-badge badge-danger">6</span>
          </div>
          <div class="stacked-row-track">
            <div class="row-segment seg-strat-prof" style="width: 33.33%; background:#cce8c3; color:#000000;"
                 onclick="openAuditPopup('Adverse Audit Opinions - (Strategic SOEs - Net Profit)')"
                 onmouseenter="highlightAuditCategory('strat-prof')" onmouseleave="removeAuditHighlight()"
                 title="Adverse - Strategic Profitable: 2 SOEs">2</div>
            <div class="row-segment seg-strat-loss" style="width: 16.66%; background:#f5baca; color:#000000;"
                 onclick="openAuditPopup('Adverse Audit Opinions - (Strategic SOEs - Net Loss)')"
                 onmouseenter="highlightAuditCategory('strat-loss')" onmouseleave="removeAuditHighlight()"
                 title="Adverse - Strategic Loss: 1 SOEs">1</div>
            <div class="row-segment seg-nonstrat-prof" style="width: 33.33%; background:#c7dbf2; color:#000000;"
                 onclick="openAuditPopup('Adverse Audit Opinions - (Non-Strategic SOEs - Net Profit)')"
                 onmouseenter="highlightAuditCategory('nonstrat-prof')" onmouseleave="removeAuditHighlight()"
                 title="Adverse - Non-Strategic Profitable: 2 SOEs">2</div>
            <div class="row-segment seg-nonstrat-loss" style="width: 16.66%; background:#e8d1ac; color:#000000;"
                 onclick="openAuditPopup('Adverse Audit Opinions - (Non-Strategic SOEs - Net Loss)')"
                 onmouseenter="highlightAuditCategory('nonstrat-loss')" onmouseleave="removeAuditHighlight()"
                 title="Adverse - Non-Strategic Loss: 1 SOEs">1</div>
          </div>
        </div>

        <!-- Row 4: Disclaimer (5 Total) -->
        <div class="stacked-row-group">
          <div class="row-label-container">
            <span class="row-label">Disclaimer</span>
            <span class="row-total-badge badge-danger">5</span>
          </div>
          <div class="stacked-row-track">
            <div class="row-segment seg-strat-prof" style="width: 60%; background:#cce8c3; color:#000000;"
                 onclick="openAuditPopup('Disclaimer Audit Opinions - (Strategic SOEs - Net Profit)')"
                 onmouseenter="highlightAuditCategory('strat-prof')" onmouseleave="removeAuditHighlight()"
                 title="Disclaimer - Strategic Profitable: 3 SOEs">3</div>
            <div class="row-segment seg-nonstrat-prof" style="width: 40%; background:#c7dbf2; color:#000000;"
                 onclick="openAuditPopup('Disclaimer Audit Opinions - (Non-Strategic SOEs - Net Profit)')"
                 onmouseenter="highlightAuditCategory('nonstrat-prof')" onmouseleave="removeAuditHighlight()"
                 title="Disclaimer - Non-Strategic Profitable: 2 SOEs">2</div>
          </div>
        </div>

        <!-- Row 5: Unavailable (4 Total) -->
        <div class="stacked-row-group">
          <div class="row-label-container">
            <span class="row-label">Unavailable</span>
            <span class="row-total-badge" style="background:#cbd5e1; color:#334155;">4</span>
          </div>
          <div class="stacked-row-track">
            <div class="row-segment seg-strat-loss" style="width: 25.0%; background:#f5baca; color:#000000;"
                 onclick="openAuditPopup('Audit Opinion Unavailable (Not Uploaded Yet) - (Strategic SOEs - Net Loss)')"
                 onmouseenter="highlightAuditCategory('strat-loss')" onmouseleave="removeAuditHighlight()"
                 title="Unavailable (Not Uploaded Yet) - Strategic Loss: 1 SOE">1</div>
            <div class="row-segment seg-nonstrat-loss" style="width: 75.0%; background:#e8d1ac; color:#000000;"
                 onclick="openAuditPopup('Audit Opinion Unavailable (Not Uploaded Yet) - (Non-Strategic SOEs - Net Loss)')"
                 onmouseenter="highlightAuditCategory('nonstrat-loss')" onmouseleave="removeAuditHighlight()"
                 title="Unavailable (Not Uploaded Yet) - Non-Strategic Loss: 3 SOEs">3</div>
          </div>
        </div>

      </div>

      <!-- Total Audit Opinion Overall Values Banner -->
      <div class="audit-total-summary-card">
        <div>
          <span>Total Audit Opinion Count:</span>
          <span class="audit-stat-pill" style="color:var(--primary-blue); font-size:16px;">61</span>
        </div>
      </div>

    </div>

    <!-- Modal Popup Component for Audit Segments -->
    <div class="modal-overlay" id="auditSegmentModal">
      <div class="modal" style="width: 680px; max-width: 90%;">
        <div class="modal-header">
          <h3 id="auditSegmentModalTitle" style="margin:0;">Audit Opinion Category Register</h3>
          <button style="border:none; background:none; font-size:18px; cursor:pointer;" onclick="closeAuditSegmentModal()">&times;</button>
        </div>
        <p style="color: var(--text-muted); font-size: 11px;">
          Comprehensive register of SOE entities under the selected audit status and performance group.
        </p>

        <!-- Dynamic Table Head & Body -->
        <table>
          <thead id="auditSegmentTableHead"></thead>
          <tbody id="auditSegmentTableBody"></tbody>
        </table>

        <!-- Modal Pagination Controls -->
        <div class="pagination-container">
          <button class="pagination-btn" id="auditSegBtnPrev" onclick="changeAuditSegmentPage(-1)">← Previous</button>
          <span class="page-indicator" id="auditSegPageIndicator">Page 1 of 1</span>
          <button class="pagination-btn" id="auditSegBtnNext" onclick="changeAuditSegmentPage(1)">Next →</button>
        </div>
      </div>
    </div>
  `;
}

// Synchronized Hover Highlight Handlers
function highlightAuditCategory(catClass) {
  removeAuditHighlight();
  document.querySelectorAll(`.seg-${catClass}`).forEach(el => el.classList.add('highlighted'));
  const legend = document.getElementById(`legend-${catClass}`);
  if (legend) legend.classList.add('highlighted');
}

function removeAuditHighlight() {
  document.querySelectorAll('.row-segment').forEach(el => el.classList.remove('highlighted'));
  document.querySelectorAll('.audit-legend-item').forEach(el => el.classList.remove('highlighted'));
}

// Open Paginated Modal (Preserving exact popup columns)
function openAuditPopup(categoryKey) {
  currentAuditCategoryKey = categoryKey;
  currentAuditPage = 1;
  document.getElementById('auditSegmentModalTitle').innerText = categoryKey;
  renderAuditSegmentPage();
  document.getElementById('auditSegmentModal').style.display = 'flex';
}

function renderAuditSegmentPage() {
  const thead = document.getElementById('auditSegmentTableHead');
  const tbody = document.getElementById('auditSegmentTableBody');

  tbody.innerHTML = '';
  thead.innerHTML = '';

  const isUnavailable = currentAuditCategoryKey.includes('Unavailable');

  // Conditional Table Columns
  if (isUnavailable) {
    thead.innerHTML = `
      <tr>
        <th>SOE Name</th>
        <th>Latest Available Audit Year</th>
        <th>Latest Available Audit Opinion</th>
      </tr>
    `;
  } else {
    thead.innerHTML = `
      <tr>
        <th>SOE Name</th>
      </tr>
    `;
  }

  const items = auditCategoryData[currentAuditCategoryKey] || [];
  const totalPages = Math.ceil(items.length / auditItemsPerPage) || 1;

  const startIndex = (currentAuditPage - 1) * auditItemsPerPage;
  const pageItems = items.slice(startIndex, startIndex + auditItemsPerPage);

  pageItems.forEach(item => {
    const tr = document.createElement('tr');

    if (isUnavailable) {
      tr.innerHTML = `
        <td><strong>${item.name}</strong></td>
        <td style="font-weight:600;">${item.year}</td>
        <td><span class="badge badge-danger">${item.opinion}</span></td>
      `;
    } else {
      tr.innerHTML = `
        <td><strong>${item.name}</strong></td>
      `;
    }

    tbody.appendChild(tr);
  });

  document.getElementById('auditSegPageIndicator').innerText = `Page ${currentAuditPage} of ${totalPages} (${items.length} Entities)`;
  document.getElementById('auditSegBtnPrev').disabled = currentAuditPage === 1;
  document.getElementById('auditSegBtnNext').disabled = currentAuditPage === totalPages;
}

function changeAuditSegmentPage(direction) {
  const items = auditCategoryData[currentAuditCategoryKey] || [];
  const totalPages = Math.ceil(items.length / auditItemsPerPage) || 1;

  currentAuditPage += direction;
  if (currentAuditPage < 1) currentAuditPage = 1;
  if (currentAuditPage > totalPages) currentAuditPage = totalPages;

  renderAuditSegmentPage();
}

function closeAuditSegmentModal() {
  document.getElementById('auditSegmentModal').style.display = 'none';
}

// Multi-Worksheet XML-based .xlsx Generator for Audit Opinions (Matching existing columns)
async function exportAuditOpinionMultiSheetExcel() {
  const currentYear = typeof selectedYear !== 'undefined' ? selectedYear : '2025';

  const now = new Date();
  const dd = String(now.getDate()).padStart(2, '0');
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const yyyy = now.getFullYear();
  const hh = String(now.getHours()).padStart(2, '0');
  const min = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');
  const timestamp = `${dd}${mm}${yyyy}_${hh}${min}${ss}`;
  const filename = `AuditOpinion_${timestamp}.xlsx`;

  const escapeXML = (str) => String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  // Sheet XML builder for standard single-column opinion sheets (Clean, Qualified, Adverse, Disclaimer)
  const buildSimpleOpinionSheetXML = (title, subtitle, keys) => {
    let rows = [];
    let r = 1;

    // Title & Subtitle
    rows.push(`<row r="${r}"><c r="A${r}" t="inlineStr" s="1"><is><t>${escapeXML(title)}</t></is></c></row>`);
    r++;
    rows.push(`<row r="${r}"><c r="A${r}" t="inlineStr" s="2"><is><t>${escapeXML(subtitle)}</t></is></c></row>`);
    r += 2;

    // Header Row (Matches popup's single column)
    rows.push(`
      <row r="${r}">
        <c r="A${r}" t="inlineStr" s="3"><is><t>SOE Name</t></is></c>
      </row>`);
    r++;

    // Data Rows
    keys.forEach(k => {
      const items = auditCategoryData[k] || [];
      items.forEach(item => {
        rows.push(`
          <row r="${r}">
            <c r="A${r}" t="inlineStr" s="4"><is><t>${escapeXML(item.name)}</t></is></c>
          </row>`);
        r++;
      });
    });

    return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
      <worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
        <cols>
          <col min="1" max="1" width="46" customWidth="1"/>
        </cols>
        <sheetData>${rows.join('')}</sheetData>
      </worksheet>`;
  };

  // Sheet XML builder for Unavailable sheet (Matches popup's 3 columns)
  const buildUnavailableSheetXML = (title, subtitle, keys) => {
    let rows = [];
    let r = 1;

    rows.push(`<row r="${r}"><c r="A${r}" t="inlineStr" s="1"><is><t>${escapeXML(title)}</t></is></c></row>`);
    r++;
    rows.push(`<row r="${r}"><c r="A${r}" t="inlineStr" s="2"><is><t>${escapeXML(subtitle)}</t></is></c></row>`);
    r += 2;

    // 3 Columns Header Row
    rows.push(`
      <row r="${r}">
        <c r="A${r}" t="inlineStr" s="3"><is><t>SOE Name</t></is></c>
        <c r="B${r}" t="inlineStr" s="3"><is><t>Latest Available Audit Year</t></is></c>
        <c r="C${r}" t="inlineStr" s="3"><is><t>Latest Available Audit Opinion</t></is></c>
      </row>`);
    r++;

    // Data Rows
    keys.forEach(k => {
      const items = auditCategoryData[k] || [];
      items.forEach(item => {
        rows.push(`
          <row r="${r}">
            <c r="A${r}" t="inlineStr" s="4"><is><t>${escapeXML(item.name)}</t></is></c>
            <c r="B${r}" t="inlineStr" s="5"><is><t>${escapeXML(item.year || '')}</t></is></c>
            <c r="C${r}" t="inlineStr" s="5"><is><t>${escapeXML(item.opinion || '')}</t></is></c>
          </row>`);
        r++;
      });
    });

    return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
      <worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
        <cols>
          <col min="1" max="1" width="46" customWidth="1"/>
          <col min="2" max="2" width="28" customWidth="1"/>
          <col min="3" max="3" width="32" customWidth="1"/>
        </cols>
        <sheetData>${rows.join('')}</sheetData>
      </worksheet>`;
  };

  const cleanKeys = [
    'Clean Audit Opinions (True and Fair) - (Strategic SOEs - Net Profit)',
    'Clean Audit Opinions (True and Fair) - (Strategic SOEs - Net Loss)',
    'Clean Audit Opinions (True and Fair) - (Non-Strategic SOEs - Net Profit)',
    'Clean Audit Opinions (True and Fair) - (Non-Strategic SOEs - Net Loss)'
  ];

  const qualifiedKeys = [
    'Qualified Audit Opinions - (Strategic SOEs - Net Profit)',
    'Qualified Audit Opinions - (Strategic SOEs - Net Loss)',
    'Qualified Audit Opinions - (Non-Strategic SOEs - Net Profit)',
    'Qualified Audit Opinions - (Non-Strategic SOEs - Net Loss)'
  ];

  const adverseKeys = [
    'Adverse Audit Opinions - (Strategic SOEs - Net Profit)',
    'Adverse Audit Opinions - (Strategic SOEs - Net Loss)',
    'Adverse Audit Opinions - (Non-Strategic SOEs - Net Profit)',
    'Adverse Audit Opinions - (Non-Strategic SOEs - Net Loss)'
  ];

  const disclaimerKeys = [
    'Disclaimer Audit Opinions - (Strategic SOEs - Net Profit)',
    'Disclaimer Audit Opinions - (Non-Strategic SOEs - Net Profit)'
  ];

  const unavailableKeys = [
    'Audit Opinion Unavailable (Not Uploaded Yet) - (Strategic SOEs - Net Loss)',
    'Audit Opinion Unavailable (Not Uploaded Yet) - (Non-Strategic SOEs - Net Loss)'
  ];

  // 5 Sheets Setup
  const sheets = [
    { name: "Clean", xml: buildSimpleOpinionSheetXML("PEDMIS - Clean Audit Opinions (True and Fair)", `Timeframe: FY ${currentYear} | Total Entities: 34`, cleanKeys) },
    { name: "Qualified", xml: buildSimpleOpinionSheetXML("PEDMIS - Qualified Audit Opinions", `Timeframe: FY ${currentYear} | Total Entities: 12`, qualifiedKeys) },
    { name: "Adverse", xml: buildSimpleOpinionSheetXML("PEDMIS - Adverse Audit Opinions", `Timeframe: FY ${currentYear} | Total Entities: 6`, adverseKeys) },
    { name: "Disclaimer", xml: buildSimpleOpinionSheetXML("PEDMIS - Disclaimer Audit Opinions", `Timeframe: FY ${currentYear} | Total Entities: 5`, disclaimerKeys) },
    { name: "Unavailable", xml: buildUnavailableSheetXML("PEDMIS - Audit Opinion Unavailable (Not Uploaded Yet)", `Timeframe: FY ${currentYear} | Total Entities: 4`, unavailableKeys) }
  ];

  const stylesXML = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
      <fonts count="4">
        <font><name val="Calibri"/><sz val="11"/></font>
        <font><b/><name val="Calibri"/><sz val="13"/><color rgb="FF0F172A"/></font>
        <font><i/><name val="Calibri"/><sz val="10"/><color rgb="FF64748B"/></font>
        <font><b/><name val="Calibri"/><sz val="11"/><color rgb="FFFFFFFF"/></font>
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
        <xf numFmtId="0" fontId="0" fillId="0" borderId="1"/>
        <xf numFmtId="0" fontId="0" fillId="0" borderId="1" applyAlignment="1"><alignment horizontal="center"/></xf>
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