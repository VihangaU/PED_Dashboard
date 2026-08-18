/**
 * SOE Performance Chart Component for PEDMIS Dashboard
 * 
 * Features:
 * - Dedicated popup registers for Pie Chart slices/legends:
 *   - Company (24 SOEs)
 *   - Commercial Corporation (17 SOEs)
 *   - Non-Commercial Corporation (16 SOEs)
 *   - Non-Functioning Register (4 SOEs)
 * - Horizontal Stacked Bar Rows with sub-category 4-Year Financial Trends (FY 2023 - FY 2026)
 * - Standardized 3-decimal numeric format without repeated 'B' symbols
 * - Unit "(Values in LKR Billions)" stated explicitly in headers & modal titles
 */

const soeStackedData = {
  // --- FULL ENTITY REGISTERS FOR PIE CHART LEGENDS ---
  'Company Register (24 SOEs)': [
    { name: 'Bank of Ceylon', y2023: '+18.200', y2024: '+20.100', y2025: '+22.500', y2026: '+24.000' },
    { name: 'People\'s Bank', y2023: '+14.500', y2024: '+16.200', y2025: '+18.000', y2026: '+19.500' },
    { name: 'Sri Lanka Telecom PLC', y2023: '+6.800', y2024: '+7.500', y2025: '+8.400', y2026: '+9.100' },
    { name: 'National Savings Bank', y2023: '+4.200', y2024: '+4.800', y2025: '+5.500', y2026: '+6.000' },
    { name: 'Sri Lanka Insurance Corp', y2023: '+3.900', y2024: '+4.200', y2025: '+4.800', y2026: '+5.100' },
    { name: 'Lanka Electricity Co (LECO)', y2023: '+2.100', y2024: '+2.500', y2025: '+2.900', y2026: '+3.100' },
    { name: 'Litro Gas Lanka Ltd', y2023: '+1.800', y2024: '+2.100', y2025: '+2.400', y2026: '+2.700' },
    { name: 'Sri Lanka Ports Management Co', y2023: '+1.100', y2024: '+1.300', y2025: '+1.500', y2026: '+1.600' },
    { name: 'Lanka IOC Public Share Unit', y2023: '+0.700', y2024: '+0.800', y2025: '+0.900', y2026: '+1.000' },
    { name: 'Lanka Phosphate Ltd', y2023: '+0.150', y2024: '+0.180', y2025: '+0.200', y2026: '+0.220' },
    { name: 'SriLankan Airlines Ltd', y2023: '-10.200', y2024: '-9.100', y2025: '-8.500', y2026: '-7.800' },
    { name: 'Lanka Hospitals PLC', y2023: '+2.800', y2024: '+3.100', y2025: '+3.500', y2026: '+3.800' },
    { name: 'Hotel Developers (Lanka) Ltd', y2023: '+1.500', y2024: '+1.800', y2025: '+2.100', y2026: '+2.400' },
    { name: 'BCI Campus Ltd', y2023: '+0.800', y2024: '+1.000', y2025: '+1.200', y2026: '+1.300' },
    { name: 'Lanka Mineral Sands Ltd', y2023: '+0.700', y2024: '+0.900', y2025: '+1.000', y2026: '+1.100' },
    { name: 'Lanka Sugar Company (Pvt) Ltd', y2023: '+0.600', y2024: '+0.800', y2025: '+0.900', y2026: '+1.000' },
    { name: 'Lanka Coal Company (Pvt) Ltd', y2023: '+0.200', y2024: '+0.300', y2025: '+0.400', y2026: '+0.500' },
    { name: 'Lanka Cement PLC', y2023: '+0.100', y2024: '+0.200', y2025: '+0.300', y2026: '+0.350' },
    { name: 'Kahawatte Plantations Entity', y2023: '-1.200', y2024: '-1.000', y2025: '-0.900', y2026: '-0.800' },
    { name: 'Elpitiya Plantations Entity', y2023: '-0.900', y2024: '-0.800', y2025: '-0.700', y2026: '-0.600' },
    { name: 'Kurunegala Plantations Ltd', y2023: '-0.700', y2024: '-0.600', y2025: '-0.500', y2026: '-0.400' },
    { name: 'Chilaw Plantations Ltd', y2023: '-0.400', y2024: '-0.350', y2025: '-0.300', y2026: '-0.250' },
    { name: 'National Paper Company Entity', y2023: '-0.300', y2024: '-0.250', y2025: '-0.200', y2026: '-0.150' },
    { name: 'Ceylon Fertilizer Co Ltd', y2023: '-0.200', y2024: '-0.150', y2025: '-0.100', y2026: '-0.080' }
  ],

  'Commercial Corporation Register (17 SOEs)': [
    { name: 'Sri Lanka Ports Authority', y2023: '+11.500', y2024: '+12.800', y2025: '+14.200', y2026: '+15.500' },
    { name: 'Airport & Aviation Services Ltd', y2023: '+4.800', y2024: '+5.500', y2025: '+6.100', y2026: '+6.800' },
    { name: 'State Pharmaceuticals Corporation', y2023: '+2.500', y2024: '+2.800', y2025: '+3.200', y2026: '+3.500' },
    { name: 'State Timber Corporation', y2023: '+0.250', y2024: '+0.300', y2025: '+0.400', y2026: '+0.450' },
    { name: 'State Printing Corporation', y2023: '+0.050', y2024: '+0.080', y2025: '+0.100', y2026: '+0.120' },
    { name: 'Ceylon Petroleum Corporation (CPC)', y2023: '-18.500', y2024: '-15.200', y2025: '-12.100', y2026: '-9.500' },
    { name: 'Ceylon Electricity Board (CEB)', y2023: '-9.800', y2024: '-7.100', y2025: '-5.200', y2026: '-3.800' },
    { name: 'Sri Lanka Transport Board (SLTB)', y2023: '-2.800', y2024: '-2.200', y2025: '-1.800', y2026: '-1.400' },
    { name: 'Sri Lanka State Trading Corp', y2023: '+1.200', y2024: '+1.500', y2025: '+1.800', y2026: '+2.000' },
    { name: 'State Engineering Corporation', y2023: '+0.500', y2024: '+0.650', y2025: '+0.800', y2026: '+0.950' },
    { name: 'State Fertilizer Corporation', y2023: '+0.200', y2024: '+0.300', y2025: '+0.400', y2026: '+0.450' },
    { name: 'State Gem & Jewellery Corporation', y2023: '+0.100', y2024: '+0.150', y2025: '+0.200', y2026: '+0.220' },
    { name: 'Sri Lanka Rubber Manufacturing Corp', y2023: '+0.100', y2024: '+0.150', y2025: '+0.200', y2026: '+0.220' },
    { name: 'Ceylon Fisheries Corporation', y2023: '+0.050', y2024: '+0.080', y2025: '+0.100', y2026: '+0.120' },
    { name: 'Ceylon Fishery Harbours Corporation', y2023: '+0.050', y2024: '+0.080', y2025: '+0.100', y2026: '+0.120' },
    { name: 'Building Materials Corporation', y2023: '+0.050', y2024: '+0.080', y2025: '+0.100', y2026: '+0.120' },
    { name: 'Spices & Allied Products Board', y2023: '-1.500', y2024: '-1.300', y2025: '-1.100', y2026: '-0.900' }
  ],

  'Non-Commercial Corporation Register (16 SOEs)': [
    { name: 'Development Lotteries Board', y2023: '+1.400', y2024: '+1.600', y2025: '+1.900', y2026: '+2.100' },
    { name: 'National Lotteries Board', y2023: '+1.200', y2024: '+1.400', y2025: '+1.700', y2026: '+1.850' },
    { name: 'Civil Aviation Authority', y2023: '+0.900', y2024: '+1.100', y2025: '+1.300', y2026: '+1.400' },
    { name: 'Marine Environment Protection Auth', y2023: '+0.800', y2024: '+0.950', y2025: '+1.100', y2026: '+1.200' },
    { name: 'Export Development Board', y2023: '+0.500', y2024: '+0.650', y2025: '+0.800', y2026: '+0.900' },
    { name: 'Sri Lanka Standards Institution', y2023: '+0.400', y2024: '+0.550', y2025: '+0.700', y2026: '+0.800' },
    { name: 'Tea Small Holdings Dev Authority', y2023: '+0.300', y2024: '+0.450', y2025: '+0.600', y2026: '+0.700' },
    { name: 'Coconut Development Authority', y2023: '+0.200', y2024: '+0.350', y2025: '+0.500', y2026: '+0.600' },
    { name: 'Central Engineering Consultancy Bureau', y2023: '+0.150', y2024: '+0.200', y2025: '+0.300', y2026: '+0.350' },
    { name: 'Sri Lanka Handicrafts Board', y2023: '+0.050', y2024: '+0.080', y2025: '+0.100', y2026: '+0.120' },
    { name: 'Sri Lanka Railway Department', y2023: '-4.500', y2024: '-3.800', y2025: '-3.100', y2026: '-2.500' },
    { name: 'National Water Supply & Drainage Board', y2023: '+3.100', y2024: '+3.600', y2025: '+4.200', y2026: '+4.700' },
    { name: 'Urban Development Authority (UDA)', y2023: '+0.400', y2024: '+0.550', y2025: '+0.700', y2026: '+0.800' },
    { name: 'Coast Conservation Department', y2023: '+0.300', y2024: '+0.450', y2025: '+0.600', y2026: '+0.700' },
    { name: 'National Design Centre', y2023: '+0.200', y2024: '+0.350', y2025: '+0.500', y2026: '+0.600' },
    { name: 'National Livestock Development Board', y2023: '+0.100', y2024: '+0.200', y2025: '+0.300', y2026: '+0.350' }
  ],

  // --- SUB-CATEGORY MODAL DATA (ROW BREAKDOWNS) ---
  'Company - Strategic Net Profit SOEs': [
    { name: 'Bank of Ceylon', y2023: '+18.200', y2024: '+20.100', y2025: '+22.500', y2026: '+24.000' },
    { name: 'People\'s Bank', y2023: '+14.500', y2024: '+16.200', y2025: '+18.000', y2026: '+19.500' },
    { name: 'Sri Lanka Telecom PLC', y2023: '+6.800', y2024: '+7.500', y2025: '+8.400', y2026: '+9.100' },
    { name: 'National Savings Bank', y2023: '+4.200', y2024: '+4.800', y2025: '+5.500', y2026: '+6.000' },
    { name: 'Sri Lanka Insurance Corp', y2023: '+3.900', y2024: '+4.200', y2025: '+4.800', y2026: '+5.100' },
    { name: 'Lanka Electricity Co (LECO)', y2023: '+2.100', y2024: '+2.500', y2025: '+2.900', y2026: '+3.100' },
    { name: 'Litro Gas Lanka Ltd', y2023: '+1.800', y2024: '+2.100', y2025: '+2.400', y2026: '+2.700' },
    { name: 'Sri Lanka Ports Management Co', y2023: '+1.100', y2024: '+1.300', y2025: '+1.500', y2026: '+1.600' },
    { name: 'Lanka IOC Public Share Unit', y2023: '+0.700', y2024: '+0.800', y2025: '+0.900', y2026: '+1.000' },
    { name: 'Lanka Phosphate Ltd', y2023: '+0.150', y2024: '+0.180', y2025: '+0.200', y2026: '+0.220' }
  ],
  'Company - Strategic Net Loss SOEs': [
    { name: 'SriLankan Airlines Ltd', y2023: '-10.200', y2024: '-9.100', y2025: '-8.500', y2026: '-7.800' }
  ],
  'Company - Non-Strategic Net Profit SOEs': [
    { name: 'Lanka Hospitals PLC', y2023: '+2.800', y2024: '+3.100', y2025: '+3.500', y2026: '+3.800' },
    { name: 'Hotel Developers (Lanka) Ltd', y2023: '+1.500', y2024: '+1.800', y2025: '+2.100', y2026: '+2.400' },
    { name: 'BCI Campus Ltd', y2023: '+0.800', y2024: '+1.000', y2025: '+1.200', y2026: '+1.300' },
    { name: 'Lanka Mineral Sands Ltd', y2023: '+0.700', y2024: '+0.900', y2025: '+1.000', y2026: '+1.100' },
    { name: 'Lanka Sugar Company (Pvt) Ltd', y2023: '+0.600', y2024: '+0.800', y2025: '+0.900', y2026: '+1.000' },
    { name: 'Lanka Coal Company (Pvt) Ltd', y2023: '+0.200', y2024: '+0.300', y2025: '+0.400', y2026: '+0.500' },
    { name: 'Lanka Cement PLC', y2023: '+0.100', y2024: '+0.200', y2025: '+0.300', y2026: '+0.350' }
  ],
  'Company - Non-Strategic Net Loss SOEs': [
    { name: 'Kahawatte Plantations Entity', y2023: '-1.200', y2024: '-1.000', y2025: '-0.900', y2026: '-0.800' },
    { name: 'Elpitiya Plantations Entity', y2023: '-0.900', y2024: '-0.800', y2025: '-0.700', y2026: '-0.600' },
    { name: 'Kurunegala Plantations Ltd', y2023: '-0.700', y2024: '-0.600', y2025: '-0.500', y2026: '-0.400' },
    { name: 'Chilaw Plantations Ltd', y2023: '-0.400', y2024: '-0.350', y2025: '-0.300', y2026: '-0.250' },
    { name: 'National Paper Company Entity', y2023: '-0.300', y2024: '-0.250', y2025: '-0.200', y2026: '-0.150' },
    { name: 'Ceylon Fertilizer Co Ltd', y2023: '-0.200', y2024: '-0.150', y2025: '-0.100', y2026: '-0.080' }
  ],

  'Commercial Corporation - Strategic Net Profit SOEs': [
    { name: 'Sri Lanka Ports Authority', y2023: '+11.500', y2024: '+12.800', y2025: '+14.200', y2026: '+15.500' },
    { name: 'Airport & Aviation Services Ltd', y2023: '+4.800', y2024: '+5.500', y2025: '+6.100', y2026: '+6.800' },
    { name: 'State Pharmaceuticals Corporation', y2023: '+2.500', y2024: '+2.800', y2025: '+3.200', y2026: '+3.500' },
    { name: 'State Timber Corporation', y2023: '+0.250', y2024: '+0.300', y2025: '+0.400', y2026: '+0.450' },
    { name: 'State Printing Corporation', y2023: '+0.050', y2024: '+0.080', y2025: '+0.100', y2026: '+0.120' }
  ],
  'Commercial Corporation - Strategic Net Loss SOEs': [
    { name: 'Ceylon Petroleum Corporation (CPC)', y2023: '-18.500', y2024: '-15.200', y2025: '-12.100', y2026: '-9.500' },
    { name: 'Ceylon Electricity Board (CEB)', y2023: '-9.800', y2024: '-7.100', y2025: '-5.200', y2026: '-3.800' },
    { name: 'Sri Lanka Transport Board (SLTB)', y2023: '-2.800', y2024: '-2.200', y2025: '-1.800', y2026: '-1.400' }
  ],
  'Commercial Corporation - Non-Strategic Net Profit SOEs': [
    { name: 'Sri Lanka State Trading Corp', y2023: '+1.200', y2024: '+1.500', y2025: '+1.800', y2026: '+2.000' },
    { name: 'State Engineering Corporation', y2023: '+0.500', y2024: '+0.650', y2025: '+0.800', y2026: '+0.950' },
    { name: 'State Fertilizer Corporation', y2023: '+0.200', y2024: '+0.300', y2025: '+0.400', y2026: '+0.450' },
    { name: 'State Gem & Jewellery Corporation', y2023: '+0.100', y2024: '+0.150', y2025: '+0.200', y2026: '+0.220' },
    { name: 'Sri Lanka Rubber Manufacturing Corp', y2023: '+0.100', y2024: '+0.150', y2025: '+0.200', y2026: '+0.220' },
    { name: 'Ceylon Fisheries Corporation', y2023: '+0.050', y2024: '+0.080', y2025: '+0.100', y2026: '+0.120' },
    { name: 'Ceylon Fishery Harbours Corporation', y2023: '+0.050', y2024: '+0.080', y2025: '+0.100', y2026: '+0.120' },
    { name: 'Building Materials Corporation', y2023: '+0.050', y2024: '+0.080', y2025: '+0.100', y2026: '+0.120' }
  ],
  'Commercial Corporation - Non-Strategic Net Loss SOEs': [
    { name: 'Spices & Allied Products Board', y2023: '-1.500', y2024: '-1.300', y2025: '-1.100', y2026: '-0.900' }
  ],

  'Non-Commercial Corporation - Strategic Net Profit SOEs': [
    { name: 'Development Lotteries Board', y2023: '+1.400', y2024: '+1.600', y2025: '+1.900', y2026: '+2.100' },
    { name: 'National Lotteries Board', y2023: '+1.200', y2024: '+1.400', y2025: '+1.700', y2026: '+1.850' },
    { name: 'Civil Aviation Authority', y2023: '+0.900', y2024: '+1.100', y2025: '+1.300', y2026: '+1.400' },
    { name: 'Marine Environment Protection Auth', y2023: '+0.800', y2024: '+0.950', y2025: '+1.100', y2026: '+1.200' },
    { name: 'Export Development Board', y2023: '+0.500', y2024: '+0.650', y2025: '+0.800', y2026: '+0.900' },
    { name: 'Sri Lanka Standards Institution', y2023: '+0.400', y2024: '+0.550', y2025: '+0.700', y2026: '+0.800' },
    { name: 'Tea Small Holdings Dev Authority', y2023: '+0.300', y2024: '+0.450', y2025: '+0.600', y2026: '+0.700' },
    { name: 'Coconut Development Authority', y2023: '+0.200', y2024: '+0.350', y2025: '+0.500', y2026: '+0.600' },
    { name: 'Central Engineering Consultancy Bureau', y2023: '+0.150', y2024: '+0.200', y2025: '+0.300', y2026: '+0.350' },
    { name: 'Sri Lanka Handicrafts Board', y2023: '+0.050', y2024: '+0.080', y2025: '+0.100', y2026: '+0.120' }
  ],
  'Non-Commercial Corporation - Strategic Net Loss SOEs': [
    { name: 'Sri Lanka Railway Department', y2023: '-4.500', y2024: '-3.800', y2025: '-3.100', y2026: '-2.500' }
  ],
  'Non-Commercial Corporation - Non-Strategic Net Profit SOEs': [
    { name: 'National Water Supply & Drainage Board', y2023: '+3.100', y2024: '+3.600', y2025: '+4.200', y2026: '+4.700' },
    { name: 'Urban Development Authority (UDA)', y2023: '+0.400', y2024: '+0.550', y2025: '+0.700', y2026: '+0.800' },
    { name: 'Coast Conservation Department', y2023: '+0.300', y2024: '+0.450', y2025: '+0.600', y2026: '+0.700' },
    { name: 'National Design Centre', y2023: '+0.200', y2024: '+0.350', y2025: '+0.500', y2026: '+0.600' },
    { name: 'National Livestock Development Board', y2023: '+0.100', y2024: '+0.200', y2025: '+0.300', y2026: '+0.350' }
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
        position: relative;
      }

      /* Top Functional Status Breakdown Card */
      .soe-func-status-card {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #ffffff;
        border: 1px solid var(--border-color);
        border-radius: 8px;
        padding: 8px 12px;
        gap: 12px;
      }
      .soe-func-pie-box {
        width: 72px;
        height: 72px;
        flex-shrink: 0;
      }
      .soe-func-svg {
        width: 100%;
        height: 100%;
        transform: rotate(-90deg);
      }
      .soe-func-svg circle {
        fill: none;
        stroke-width: 20;
        cursor: pointer;
        transition: all 0.2s ease;
      }
      .soe-func-svg circle:hover, .soe-func-svg circle.highlighted {
        stroke-width: 26;
        filter: drop-shadow(0px 2px 4px rgba(0,0,0,0.25));
      }

      .soe-func-legend-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4px 8px;
        flex-grow: 1;
      }
      .soe-func-legend-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 10px;
        padding: 3px 6px;
        border-radius: 4px;
        background: var(--accent-bg);
        border: 1px solid transparent;
        cursor: pointer;
        transition: all 0.15s ease;
      }
      .soe-func-legend-item:hover, .soe-func-legend-item.highlighted {
        border-color: var(--primary-blue);
        background: #e2e8f0;
      }
      .soe-func-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        display: inline-block;
        margin-right: 4px;
      }

      /* Profit/Loss Indicators */
      .soe-legend-bar {
        display: flex;
        justify-content: center;
        gap: 16px;
        background: #ffffff;
        border: 1px solid var(--border-color);
        padding: 5px 12px;
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
        z-index: 1000;
        pointer-events: none;
        box-shadow: 0 2px 6px rgba(0,0,0,0.25);
        white-space: nowrap;
        line-height: 1.4;
      }
    </style>

    <!-- Floating Global Tooltip -->
    <div id="soeBarTooltip" class="soe-bar-tooltip"></div>

    <div class="soe-chart-wrapper">
      
      <!-- Top Overview Pie Chart: Functioning vs Non-Functioning (61 Total SOEs) -->
      <div class="soe-func-status-card">
        <div class="soe-func-pie-box">
          <svg viewBox="0 0 100 100" class="soe-func-svg">
            <!-- Company: 24 SOEs -->
            <circle id="pie-func-comp" r="24" cx="50" cy="50" stroke="#2563eb" stroke-dasharray="59.4 151" stroke-dashoffset="0"
                    onclick="openSoeTrendModal('Company Register (24 SOEs)')"
                    onmouseenter="highlightFuncStatus('comp')"
                    onmousemove="showSoeTooltip(event, 'Company (Functioning)<br>Count: 24 SOEs (39.3%)<br>Net Impact: +16.000<br><i>Click to view Register</i>')" 
                    onmouseleave="removeFuncHighlight()" />

            <!-- Commercial Corp: 17 SOEs -->
            <circle id="pie-func-comm" r="24" cx="50" cy="50" stroke="#059669" stroke-dasharray="42.1 151" stroke-dashoffset="-59.4"
                    onclick="openSoeTrendModal('Commercial Corporation Register (17 SOEs)')"
                    onmouseenter="highlightFuncStatus('comm')"
                    onmousemove="showSoeTooltip(event, 'Commercial Corporation (Functioning)<br>Count: 17 SOEs (27.9%)<br>Net Impact: +3.800<br><i>Click to view Register</i>')" 
                    onmouseleave="removeFuncHighlight()" />

            <!-- Non-Commercial Corp: 16 SOEs -->
            <circle id="pie-func-noncomm" r="24" cx="50" cy="50" stroke="#d97706" stroke-dasharray="39.6 151" stroke-dashoffset="-101.5"
                    onclick="openSoeTrendModal('Non-Commercial Corporation Register (16 SOEs)')"
                    onmouseenter="highlightFuncStatus('noncomm')"
                    onmousemove="showSoeTooltip(event, 'Non-Commercial Corporation (Functioning)<br>Count: 16 SOEs (26.2%)<br>Net Impact: +11.900<br><i>Click to view Register</i>')" 
                    onmouseleave="removeFuncHighlight()" />

            <!-- Non-Functioning: 4 SOEs -->
            <circle id="pie-func-nonfunc" r="24" cx="50" cy="50" stroke="#dc2626" stroke-dasharray="9.9 151" stroke-dashoffset="-141.1"
                    onclick="openNonFunctionalModal()"
                    onmouseenter="highlightFuncStatus('nonfunc')"
                    onmousemove="showSoeTooltip(event, 'Non-Functioning Entities<br>Count: 4 SOEs (6.6%)<br>Status: Officially Inactive<br><i>Click to view Register</i>')" 
                    onmouseleave="removeFuncHighlight()" />
          </svg>
        </div>

        <!-- Legend for the Pie Chart with Dedicated Popups -->
        <div class="soe-func-legend-grid">
          <div class="soe-func-legend-item" id="legend-func-comp"
               onclick="openSoeTrendModal('Company Register (24 SOEs)')"
               onmouseenter="highlightFuncStatus('comp')" onmouseleave="removeFuncHighlight()"
               title="Click to view all 24 Companies">
            <span><span class="soe-func-dot" style="background:#2563eb;"></span>Company</span>
            <strong>24 (39.3%)</strong>
          </div>
          <div class="soe-func-legend-item" id="legend-func-comm"
               onclick="openSoeTrendModal('Commercial Corporation Register (17 SOEs)')"
               onmouseenter="highlightFuncStatus('comm')" onmouseleave="removeFuncHighlight()"
               title="Click to view all 17 Commercial Corporations">
            <span><span class="soe-func-dot" style="background:#059669;"></span>Commercial Corp</span>
            <strong>17 (27.9%)</strong>
          </div>
          <div class="soe-func-legend-item" id="legend-func-noncomm"
               onclick="openSoeTrendModal('Non-Commercial Corporation Register (16 SOEs)')"
               onmouseenter="highlightFuncStatus('noncomm')" onmouseleave="removeFuncHighlight()"
               title="Click to view all 16 Non-Commercial Corporations">
            <span><span class="soe-func-dot" style="background:#d97706;"></span>Non-Comm Corp</span>
            <strong>16 (26.2%)</strong>
          </div>
          <div class="soe-func-legend-item" id="legend-func-nonfunc" style="background:#fee2e2; border-color:#fecaca;"
               onclick="openNonFunctionalModal()"
               onmouseenter="highlightFuncStatus('nonfunc')" onmouseleave="removeFuncHighlight()"
               title="Click to view Non-Functioning Register">
            <span><span class="soe-func-dot" style="background:#dc2626;"></span>Non-Functioning</span>
            <strong style="color:var(--danger-red);">4 (6.6%)</strong>
          </div>
        </div>
      </div>

      <!-- Top Profit/Loss Legend -->
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
            <span class="soe-entity-meta">24 SOEs | Net +16.000</span>
          </div>

          <!-- Strategic Company Bar -->
          <div class="soe-bar-track-wrapper">
            <div class="soe-horizontal-bar">
              <div class="soe-hbar-seg prof" style="width: 88%;" 
                   onclick="openSoeTrendModal('Company - Strategic Net Profit SOEs')"
                   onmousemove="showSoeTooltip(event, 'Company (Strategic Profit): 10 SOEs (+78.000)')" onmouseleave="hideSoeTooltip()">
                10 SOEs (+78.000)
              </div>
              <div class="soe-hbar-seg loss" style="width: 12%;" 
                   onclick="openSoeTrendModal('Company - Strategic Net Loss SOEs')"
                   onmousemove="showSoeTooltip(event, 'Company (Strategic Loss): 1 SOE (-8.500)')" onmouseleave="hideSoeTooltip()">
                1 (-8.500)
              </div>
            </div>
          </div>

          <!-- Non-Strategic Company Bar -->
          <div class="soe-bar-track-wrapper">
            <div class="soe-horizontal-bar">
              <div class="soe-hbar-seg prof" style="width: 65%;" 
                   onclick="openSoeTrendModal('Company - Non-Strategic Net Profit SOEs')"
                   onmousemove="showSoeTooltip(event, 'Company (Non-Strat Profit): 7 SOEs (+11.300)')" onmouseleave="hideSoeTooltip()">
                7 SOEs (+11.300)
              </div>
              <div class="soe-hbar-seg loss" style="width: 35%;" 
                   onclick="openSoeTrendModal('Company - Non-Strategic Loss SOEs')"
                   onmousemove="showSoeTooltip(event, 'Company (Non-Strat Loss): 6 SOEs (-2.700)')" onmouseleave="hideSoeTooltip()">
                6 SOEs (-2.700)
              </div>
            </div>
          </div>
        </div>

        <!-- Row 2: Commercial Corporation -->
        <div class="soe-entity-row">
          <div class="soe-entity-label-box">
            <span class="soe-entity-name">Commercial Corp</span>
            <span class="soe-entity-meta">17 SOEs | Net +3.800</span>
          </div>

          <!-- Strategic Commercial Corp Bar -->
          <div class="soe-bar-track-wrapper">
            <div class="soe-horizontal-bar">
              <div class="soe-hbar-seg prof" style="width: 60%;" 
                   onclick="openSoeTrendModal('Commercial Corporation - Strategic Net Profit SOEs')"
                   onmousemove="showSoeTooltip(event, 'Commercial Corp (Strat Profit): 5 SOEs (+27.000)')" onmouseleave="hideSoeTooltip()">
                5 SOEs (+27.000)
              </div>
              <div class="soe-hbar-seg loss" style="width: 40%;" 
                   onclick="openSoeTrendModal('Commercial Corporation - Strategic Loss SOEs')"
                   onmousemove="showSoeTooltip(event, 'Commercial Corp (Strat Loss): 3 SOEs (-19.100)')" onmouseleave="hideSoeTooltip()">
                3 SOEs (-19.100)
              </div>
            </div>
          </div>

          <!-- Non-Strategic Commercial Corp Bar -->
          <div class="soe-bar-track-wrapper">
            <div class="soe-horizontal-bar">
              <div class="soe-hbar-seg prof" style="width: 85%;" 
                   onclick="openSoeTrendModal('Commercial Corporation - Non-Strategic Net Profit SOEs')"
                   onmousemove="showSoeTooltip(event, 'Commercial Corp (Non-Strat Profit): 8 SOEs (+4.300)')" onmouseleave="hideSoeTooltip()">
                8 SOEs (+4.300)
              </div>
              <div class="soe-hbar-seg loss" style="width: 15%;" 
                   onclick="openSoeTrendModal('Commercial Corporation - Non-Strategic Loss SOEs')"
                   onmousemove="showSoeTooltip(event, 'Commercial Corp (Non-Strat Loss): 1 SOE (-1.100)')" onmouseleave="hideSoeTooltip()">
                1 (-1.100)
              </div>
            </div>
          </div>
        </div>

        <!-- Row 3: Non-Commercial Corporation -->
        <div class="soe-entity-row">
          <div class="soe-entity-label-box">
            <span class="soe-entity-name">Non-Commercial Corp</span>
            <span class="soe-entity-meta">16 SOEs | Net +11.900</span>
          </div>

          <!-- Strategic Non-Commercial Corp Bar -->
          <div class="soe-bar-track-wrapper">
            <div class="soe-horizontal-bar">
              <div class="soe-hbar-seg prof" style="width: 80%;" 
                   onclick="openSoeTrendModal('Non-Commercial Corporation - Strategic Net Profit SOEs')"
                   onmousemove="showSoeTooltip(event, 'Non-Comm Corp (Strat Profit): 10 SOEs (+8.500)')" onmouseleave="hideSoeTooltip()">
                10 SOEs (+8.500)
              </div>
              <div class="soe-hbar-seg loss" style="width: 20%;" 
                   onclick="openSoeTrendModal('Non-Commercial Corporation - Strategic Net Loss SOEs')"
                   onmousemove="showSoeTooltip(event, 'Non-Comm Corp (Strat Loss): 1 SOE (-3.100)')" onmouseleave="hideSoeTooltip()">
                1 (-3.100)
              </div>
            </div>
          </div>

          <!-- Non-Strategic Non-Commercial Corp Bar -->
          <div class="soe-bar-track-wrapper">
            <div class="soe-horizontal-bar">
              <div class="soe-hbar-seg prof" style="width: 100%;" 
                   onclick="openSoeTrendModal('Non-Commercial Corporation - Non-Strategic Net Profit SOEs')"
                   onmousemove="showSoeTooltip(event, 'Non-Comm Corp (Non-Strat Profit): 5 SOEs (+6.500)')" onmouseleave="hideSoeTooltip()">
                5 SOEs (+6.500)
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
          <h3 id="soeTrendModalTitle" style="margin:0;">SOE Financial Trend (Values in LKR Billions)</h3>
          <button style="border:none; background:none; font-size:18px; cursor:pointer;" onclick="closeSoeTrendModal()">&times;</button>
        </div>
        <p style="color: var(--text-muted); font-size: 11px;">
          Historical net profitability performance breakdown for SOEs in this group (Values in LKR Billions).
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

// Functioning vs Non-Functioning Pie Highlight Sync
function highlightFuncStatus(key) {
  removeFuncHighlight();
  const arc = document.getElementById(`pie-func-${key}`);
  const legend = document.getElementById(`legend-func-${key}`);
  if (arc) arc.classList.add('highlighted');
  if (legend) legend.classList.add('highlighted');
}

function removeFuncHighlight() {
  hideSoeTooltip();
  document.querySelectorAll('.soe-func-svg circle').forEach(c => c.classList.remove('highlighted'));
  document.querySelectorAll('.soe-func-legend-item').forEach(l => l.classList.remove('highlighted'));
}

// Tooltip Handlers
function showSoeTooltip(evt, text) {
  const tooltip = document.getElementById('soeBarTooltip');
  if (!tooltip) return;
  tooltip.innerHTML = text;
  tooltip.style.display = 'block';
  tooltip.style.left = (evt.pageX + 12) + 'px';
  tooltip.style.top = (evt.pageY - 34) + 'px';
}

function hideSoeTooltip() {
  const tooltip = document.getElementById('soeBarTooltip');
  if (tooltip) tooltip.style.display = 'none';
}

// Modal Handlers
function openSoeTrendModal(categoryKey) {
  currentSoeKey = categoryKey;
  currentSoePage = 1;
  document.getElementById('soeTrendModalTitle').innerText = `${categoryKey} (Values in LKR Billions)`;
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