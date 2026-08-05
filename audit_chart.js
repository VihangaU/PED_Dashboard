/**
 * Audit Opinion Chart Component for PEDMIS Dashboard
 * Renders a Horizontal Stacked Row Graph for Clean, Unclean, and Unavailable Audit Statuses
 * 
 * Classifications:
 * - Clean: True and Fair
 * - Unclean: Qualified / Adverse / Disclaimer
 * - Unavailable: Not Uploaded Yet
 * 
 * Segregated into 4 performance categories:
 * - Strategic Profitable
 * - Strategic Loss
 * - Non-Strategic Profitable
 * - Non-Strategic Loss
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

  // --- UNCLEAN OPINIONS (Qualified / Adverse / Disclaimer) ---
  'Unclean Audit Opinions (Qualified / Adverse / Disclaimer) - (Strategic SOEs - Net Profit)': [
    { name: 'State Printing Corporation', category: 'Strategic', opinion: 'Qualified' },
    { name: 'Lanka Phosphate Ltd', category: 'Strategic', opinion: 'Qualified' },
    { name: 'Sri Lanka Handicrafts Board', category: 'Strategic', opinion: 'Adverse' },
    { name: 'Sri Lanka Ports Management', category: 'Strategic', opinion: 'Qualified' },
    { name: 'Lanka IOC Share Entity', category: 'Strategic', opinion: 'Disclaimer' }
  ],
  'Unclean Audit Opinions (Qualified / Adverse / Disclaimer) - (Strategic SOEs - Net Loss)': [
    { name: 'Ceylon Electricity Board', category: 'Strategic', opinion: 'Qualified' },
    { name: 'Sri Lanka Railway Dept', category: 'Strategic', opinion: 'Adverse' },
    { name: 'Sri Lanka Transport Board', category: 'Strategic', opinion: 'Disclaimer' }
  ],
  'Unclean Audit Opinions (Qualified / Adverse / Disclaimer) - (Non-Strategic SOEs - Net Profit)': [
    { name: 'National Water Supply Board', category: 'Non-Strategic', opinion: 'Qualified' },
    { name: 'Sri Lanka State Trading Corp', category: 'Non-Strategic', opinion: 'Adverse' },
    { name: 'Hotel Developers (Lanka) Ltd', category: 'Non-Strategic', opinion: 'Qualified' },
    { name: 'National Livestock Development Board', category: 'Non-Strategic', opinion: 'Disclaimer' },
    { name: 'Coast Conservation Dept', category: 'Non-Strategic', opinion: 'Qualified' },
    { name: 'Lanka Coal Company', category: 'Non-Strategic', opinion: 'Adverse' },
    { name: 'State Fertilizer Corp', category: 'Non-Strategic', opinion: 'Qualified' },
    { name: 'Lanka Cement PLC', category: 'Non-Strategic', opinion: 'Disclaimer' },
    { name: 'Sri Lanka Rubber Manufacturing', category: 'Non-Strategic', opinion: 'Qualified' },
    { name: 'Ceylon Fishery Harbours Corp', category: 'Non-Strategic', opinion: 'Adverse' }
  ],
  'Unclean Audit Opinions (Qualified / Adverse / Disclaimer) - (Non-Strategic SOEs - Net Loss)': [
    { name: 'Kahawatte Plantations Entity', category: 'Non-Strategic', opinion: 'Adverse' },
    { name: 'Elpitiya Plantations Entity', category: 'Non-Strategic', opinion: 'Qualified' },
    { name: 'Chilaw Plantations Ltd', category: 'Non-Strategic', opinion: 'Disclaimer' },
    { name: 'National Paper Company Entity', category: 'Non-Strategic', opinion: 'Adverse' },
    { name: 'Ceylon Fertilizer Co Ltd', category: 'Non-Strategic', opinion: 'Qualified' }
  ],

  // --- UNAVAILABLE (Not Uploaded Yet) ---
  'Audit Opinion Unavailable (Not Uploaded Yet) - (Strategic SOEs - Net Loss)': [
    { name: 'Mahanagera Transport Corp', category: 'Strategic', opinion: 'Not Uploaded Yet' }
  ],
  'Audit Opinion Unavailable (Not Uploaded Yet) - (Non-Strategic SOEs - Net Loss)': [
    { name: 'Janatha Estates Development Board', category: 'Non-Strategic', opinion: 'Not Uploaded Yet' },
    { name: 'Selacine Television Institute', category: 'Non-Strategic', opinion: 'Not Uploaded Yet' },
    { name: 'Sri Lanka Casualty Insurance', category: 'Non-Strategic', opinion: 'Not Uploaded Yet' }
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
      .audit-definitions-bar {
        font-size: 11px;
        color: var(--text-muted);
        line-height: 1.6;
        background: #ffffff;
        padding: 8px 12px;
        border-radius: 6px;
        border: 1px solid var(--border-color);
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
        width: 110px;
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
        height: 26px;
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
    </style>

    <div class="audit-card-wrapper">
      <!-- Classification Definitions -->
      <div class="audit-definitions-bar">
        <div>• <strong>Clean:</strong> True and Fair</div>
        <div>• <strong>Unclean:</strong> Qualified / Adverse / Disclaimer</div>
        <div>• <strong>Unavailable:</strong> Audit Opinion Not Issued</div>
      </div>

      <!-- Interactive Legend -->
      <div class="audit-legend-container">
        <div class="audit-legend-item" id="legend-strat-prof"
             onmouseenter="highlightAuditCategory('strat-prof')" onmouseleave="removeAuditHighlight()">
          <span class="audit-color-dot" style="background:#16a34a;"></span>Strategic SOEs - Net Profit
        </div>
        <div class="audit-legend-item" id="legend-strat-loss"
             onmouseenter="highlightAuditCategory('strat-loss')" onmouseleave="removeAuditHighlight()">
          <span class="audit-color-dot" style="background:#dc2626;"></span>Strategic SOEs - Net Loss
        </div>
        <div class="audit-legend-item" id="legend-nonstrat-prof"
             onmouseenter="highlightAuditCategory('nonstrat-prof')" onmouseleave="removeAuditHighlight()">
          <span class="audit-color-dot" style="background:#3b82f6;"></span>Non-Strategic SOEs - Net Profit
        </div>
        <div class="audit-legend-item" id="legend-nonstrat-loss"
             onmouseenter="highlightAuditCategory('nonstrat-loss')" onmouseleave="removeAuditHighlight()">
          <span class="audit-color-dot" style="background:#d97706;"></span>Non-Strategic SOEs - Net Loss
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
            <div class="row-segment seg-strat-prof" style="width: 58.8%; background:#5fb880;"
                 onclick="openAuditPopup('Clean Audit Opinions (True and Fair) - (Strategic SOEs - Net Profit)')"
                 onmouseenter="highlightAuditCategory('strat-prof')" onmouseleave="removeAuditHighlight()"
                 title="Clean (True and Fair) - Strategic Profitable: 20 SOEs">20</div>
            <div class="row-segment seg-strat-loss" style="width: 5.9%; background:#f07575;"
                 onclick="openAuditPopup('Clean Audit Opinions (True and Fair) - (Strategic SOEs - Net Loss)')"
                 onmouseenter="highlightAuditCategory('strat-loss')" onmouseleave="removeAuditHighlight()"
                 title="Clean (True and Fair) - Strategic Loss: 2 SOEs">2</div>
            <div class="row-segment seg-nonstrat-prof" style="width: 29.4%; background:#82adf5;"
                 onclick="openAuditPopup('Clean Audit Opinions (True and Fair) - (Non-Strategic SOEs - Net Profit)')"
                 onmouseenter="highlightAuditCategory('nonstrat-prof')" onmouseleave="removeAuditHighlight()"
                 title="Clean (True and Fair) - Non-Strategic Profitable: 10 SOEs">10</div>
            <div class="row-segment seg-nonstrat-loss" style="width: 5.9%; background:#d19754;"
                 onclick="openAuditPopup('Clean Audit Opinions (True and Fair) - (Non-Strategic SOEs - Net Loss)')"
                 onmouseenter="highlightAuditCategory('nonstrat-loss')" onmouseleave="removeAuditHighlight()"
                 title="Clean (True and Fair) - Non-Strategic Loss: 2 SOEs">2</div>
          </div>
        </div>

        <!-- Row 2: Unclean (23 Total) -->
        <div class="stacked-row-group">
          <div class="row-label-container">
            <span class="row-label">Unclean</span>
            <span class="row-total-badge badge-danger">23</span>
          </div>
          <div class="stacked-row-track">
            <div class="row-segment seg-strat-prof" style="width: 21.7%; background:#5fb880;"
                 onclick="openAuditPopup('Unclean Audit Opinions (Qualified / Adverse / Disclaimer) - (Strategic SOEs - Net Profit)')"
                 onmouseenter="highlightAuditCategory('strat-prof')" onmouseleave="removeAuditHighlight()"
                 title="Unclean (Qualified / Adverse / Disclaimer) - Strategic Profitable: 5 SOEs">5</div>
            <div class="row-segment seg-strat-loss" style="width: 13.0%; background:#f07575;"
                 onclick="openAuditPopup('Unclean Audit Opinions (Qualified / Adverse / Disclaimer) - (Strategic SOEs - Net Loss)')"
                 onmouseenter="highlightAuditCategory('strat-loss')" onmouseleave="removeAuditHighlight()"
                 title="Unclean (Qualified / Adverse / Disclaimer) - Strategic Loss: 3 SOEs">3</div>
            <div class="row-segment seg-nonstrat-prof" style="width: 43.5%; background:#82adf5;"
                 onclick="openAuditPopup('Unclean Audit Opinions (Qualified / Adverse / Disclaimer) - (Non-Strategic SOEs - Net Profit)')"
                 onmouseenter="highlightAuditCategory('nonstrat-prof')" onmouseleave="removeAuditHighlight()"
                 title="Unclean (Qualified / Adverse / Disclaimer) - Non-Strategic Profitable: 10 SOEs">10</div>
            <div class="row-segment seg-nonstrat-loss" style="width: 21.8%; background:#d19754;"
                 onclick="openAuditPopup('Unclean Audit Opinions (Qualified / Adverse / Disclaimer) - (Non-Strategic SOEs - Net Loss)')"
                 onmouseenter="highlightAuditCategory('nonstrat-loss')" onmouseleave="removeAuditHighlight()"
                 title="Unclean (Qualified / Adverse / Disclaimer) - Non-Strategic Loss: 5 SOEs">5</div>
          </div>
        </div>

        <!-- Row 3: Unavailable (4 Total) -->
        <div class="stacked-row-group">
          <div class="row-label-container">
            <span class="row-label">Unavailable</span>
            <span class="row-total-badge" style="background:#cbd5e1; color:#334155;">4</span>
          </div>
          <div class="stacked-row-track">
            <div class="row-segment seg-strat-loss" style="width: 25.0%; background:#f07575;"
                 onclick="openAuditPopup('Audit Opinion Unavailable (Not Uploaded Yet) - (Strategic SOEs - Net Loss)')"
                 onmouseenter="highlightAuditCategory('strat-loss')" onmouseleave="removeAuditHighlight()"
                 title="Unavailable (Not Uploaded Yet) - Strategic Loss: 1 SOE">1</div>
            <div class="row-segment seg-nonstrat-loss" style="width: 75.0%; background:#d19754;"
                 onclick="openAuditPopup('Audit Opinion Unavailable (Not Uploaded Yet) - (Non-Strategic SOEs - Net Loss)')"
                 onmouseenter="highlightAuditCategory('nonstrat-loss')" onmouseleave="removeAuditHighlight()"
                 title="Unavailable (Not Uploaded Yet) - Non-Strategic Loss: 3 SOEs">3</div>
          </div>
        </div>

      </div>
    </div>

    <!-- Modal Popup Component for Audit Segments -->
    <div class="modal-overlay" id="auditSegmentModal">
      <div class="modal">
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

// Open Paginated Modal
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

  const isUnclean = currentAuditCategoryKey.includes('Unclean');

  // Conditional Table Columns based on requirement
  if (isUnclean) {
    thead.innerHTML = `
      <tr>
        <th>SOE Name</th>
        <th>Specific Audit Opinion</th>
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
    
    if (isUnclean) {
      tr.innerHTML = `
        <td><strong>${item.name}</strong></td>
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