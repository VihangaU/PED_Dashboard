/**
 * SOE Performance (Count) Chart Component for PEDMIS Dashboard
 * Renders solid 2D Pie Charts for Strategic and Non-Strategic SOE counts.
 * Features:
 * - Solid Pie Charts (No inner doughnut hole)
 * - Hover tooltips on arcs displaying exact percentages
 * - Dynamic modals reflecting exact category counts (25, 5, 20, 7) matching the card numbers
 */

function initSOEPerformanceChart(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <style>
      .soe-perf-wrapper {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .soe-flat-pie-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 8px;
        margin-top: 6px;
        margin-bottom: 6px;
        padding: 10px;
        border-radius: 6px;
        background: #ffffff;
        border: 1px solid var(--border-color);
        position: relative;
      }
      .soe-pie-2d-box {
        width: 70px;
        height: 70px;
        flex-shrink: 0;
        position: relative;
      }
      .soe-pie-svg {
        width: 100%;
        height: 100%;
        transform: rotate(-90deg);
        border-radius: 50%;
      }
      /* Solid Pie Chart Slices using full stroke-width fill */
      .soe-pie-svg circle {
        fill: none;
        stroke-width: 32;
        cursor: pointer;
        transition: all 0.2s ease;
      }
      .soe-pie-svg circle.highlighted, .soe-pie-svg circle:hover {
        stroke-width: 36;
        filter: drop-shadow(0px 2px 5px rgba(0,0,0,0.25));
      }

      .soe-bar-legend {
        display: flex;
        flex-direction: column;
        gap: 6px;
        font-size: 14px;
        color: var(--text-primary);
        flex-grow: 1;
      }
      .soe-clickable-badge {
        cursor: pointer;
        padding: 6px 10px;
        border-radius: 6px;
        transition: all 0.15s ease-in-out;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 6px;
        border: 1px solid transparent;
      }
      .soe-clickable-badge.profit-legend {
        background: #f0fdf4;
        color: var(--strat-color);
        border-color: #bbf7d0;
      }
      .soe-clickable-badge.loss-legend {
        background: #fef2f2;
        color: var(--danger-red);
        border-color: #fecaca;
      }
      .soe-clickable-badge:hover, .soe-clickable-badge.highlighted {
        transform: translateY(-1px);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
      }

      /* Arc Percentage Hover Tooltip */
      .pie-tooltip {
        display: none;
        position: absolute;
        background: #0f172a;
        color: #ffffff;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 12px;
        font-weight: bold;
        z-index: 100;
        pointer-events: none;
        box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        white-space: nowrap;
      }
    </style>

    <!-- Floating Arc Tooltip -->
    <div id="soePieTooltip" class="pie-tooltip"></div>

    <div class="soe-perf-wrapper">
      <div class="dual-values">

        <!-- Strategic Box (Solid 2D Pie Chart) -->
        <div class="val-box strat">
          <h4>Strategic SOEs (30 Total)</h4>
          <div class="soe-flat-pie-wrapper">
            <div class="soe-pie-2d-box">
              <svg viewBox="0 0 32 32" class="soe-pie-svg">
                <!-- Strategic Loss Arc: 16.7% (5 / 30) -->
                <circle id="soe-arc-strat-loss" r="16" cx="16" cy="16" stroke="var(--danger-red)" stroke-dasharray="100 100" stroke-dashoffset="-83.3"
                        onclick="openCategoryModal('Strategic Net Loss SOEs')"
                        onmouseenter="highlightSOECategory('strat-loss')" 
                        onmousemove="showPieTooltip(event, 'Strategic Loss: 16.7% (5 SOEs)')" 
                        onmouseleave="hidePieTooltip()" />
                <!-- Strategic Profitable Arc: 83.3% (25 / 30) -->
                <circle id="soe-arc-strat-prof" r="16" cx="16" cy="16" stroke="var(--strat-color)" stroke-dasharray="83.3 100" stroke-dashoffset="0"
                        onclick="openCategoryModal('Strategic Net Profit SOEs')"
                        onmouseenter="highlightSOECategory('strat-prof')" 
                        onmousemove="showPieTooltip(event, 'Strategic Profitable: 83.3% (25 SOEs)')" 
                        onmouseleave="hidePieTooltip()" />
              </svg>
            </div>
            <div class="soe-bar-legend">
              <div class="soe-clickable-badge profit-legend" id="soe-legend-strat-prof"
                   onclick="openCategoryModal('Strategic Net Profit SOEs')"
                   onmouseenter="highlightSOECategory('strat-prof')" onmouseleave="hidePieTooltip()">
                <div>
                  <span style="font-size: 16px; font-weight: 800;">25 </span>
                  <span style="font-size: 12px; font-weight: 800;">Net Profit SOEs</span>
                </div>
                <small style="font-size:11px;">(+72.0B )</small>
              </div>
              <div class="soe-clickable-badge loss-legend" id="soe-legend-strat-loss"
                   onclick="openCategoryModal('Strategic Net Loss SOEs')"
                   onmouseenter="highlightSOECategory('strat-loss')" onmouseleave="hidePieTooltip()">
                <div>
                  <span style="font-size: 15px; font-weight: 800;">5 Net Loss SOEs</span>
                </div>
                <small style="font-size:11px;">(-12.1B )</small>
              </div>
            </div>
          </div>
        </div>

        <!-- Non-Strategic Box (Solid 2D Pie Chart) -->
        <div class="val-box nonstrat">
          <h4>Non-Strategic SOEs (27 Total)</h4>
          <div class="soe-flat-pie-wrapper">
            <div class="soe-pie-2d-box">
              <svg viewBox="0 0 32 32" class="soe-pie-svg">
                <!-- Non-Strategic Loss Arc: 25.9% (7 / 27) -->
                <circle id="soe-arc-nonstrat-loss" r="16" cx="16" cy="16" stroke="var(--danger-red)" stroke-dasharray="100 100" stroke-dashoffset="-74.1"
                        onclick="openCategoryModal('Non-Strategic Net Loss SOEs')"
                        onmouseenter="highlightSOECategory('nonstrat-loss')" 
                        onmousemove="showPieTooltip(event, 'Non-Strategic Loss: 25.9% (7 SOEs)')" 
                        onmouseleave="hidePieTooltip()" />
                <!-- Non-Strategic Profitable Arc: 74.1% (20 / 27) -->
                <circle id="soe-arc-nonstrat-prof" r="16" cx="16" cy="16" stroke="var(--strat-color)" stroke-dasharray="74.1 100" stroke-dashoffset="0"
                        onclick="openCategoryModal('Non-Strategic Net Profit SOEs')"
                        onmouseenter="highlightSOECategory('nonstrat-prof')" 
                        onmousemove="showPieTooltip(event, 'Non-Strategic Profitable: 74.1% (20 SOEs)')" 
                        onmouseleave="hidePieTooltip()" />
              </svg>
            </div>
            <div class="soe-bar-legend">
              <div class="soe-clickable-badge profit-legend" id="soe-legend-nonstrat-prof"
                   onclick="openCategoryModal('Non-Strategic Net Profit SOEs')"
                   onmouseenter="highlightSOECategory('nonstrat-prof')" onmouseleave="hidePieTooltip()">
                <div>
                  <span style="font-size: 16px; font-weight: 800;">20 </span>
                  <span style="font-size: 12px; font-weight: 800;">Net Profit SOEs</span>
                </div>
                <small style="font-size:11px;">(+13.4B )</small>
              </div>
              <div class="soe-clickable-badge loss-legend" id="soe-legend-nonstrat-loss"
                   onclick="openCategoryModal('Non-Strategic Net Loss SOEs')"
                   onmouseenter="highlightSOECategory('nonstrat-loss')" onmouseleave="hidePieTooltip()">
                <div>
                  <span style="font-size: 15px; font-weight: 800;">7 Net Loss SOEs</span>
                </div>
                <small style="font-size:11px;">(-3.8B )</small>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;
}

// Hover Tooltip Handlers
function showPieTooltip(evt, text) {
  const tooltip = document.getElementById('soePieTooltip');
  if (!tooltip) return;
  tooltip.innerText = text;
  tooltip.style.display = 'block';
  tooltip.style.left = (evt.pageX + 12) + 'px';
  tooltip.style.top = (evt.pageY - 28) + 'px';
}

function hidePieTooltip() {
  removeSOEHighlight();
  const tooltip = document.getElementById('soePieTooltip');
  if (tooltip) tooltip.style.display = 'none';
}

// Synchronized Hover Highlight Handler
function highlightSOECategory(catId) {
  removeSOEHighlight();
  const arc = document.getElementById(`soe-arc-${catId}`);
  const legend = document.getElementById(`soe-legend-${catId}`);
  if (arc) arc.classList.add('highlighted');
  if (legend) legend.classList.add('highlighted');
}

function removeSOEHighlight() {
  document.querySelectorAll('.soe-pie-svg circle').forEach(c => c.classList.remove('highlighted'));
  document.querySelectorAll('.soe-clickable-badge').forEach(l => l.classList.remove('highlighted'));
}