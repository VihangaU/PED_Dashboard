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
 * - Multi-sheet Binary OpenXML (.xlsx) Report Generator with Strategic Category and Performance Status columns
 */

const soeStackedData = {
  // --- FULL ENTITY REGISTERS FOR PIE CHART LEGENDS ---
  'Company Register (24 SOEs)': [
    { name: 'Bank of Ceylon', stratCat: 'Strategic', perfStatus: 'Net Profit', y2023: '+18.200', y2024: '+20.100', y2025: '+22.500', y2026: '+24.000' },
    { name: 'People\'s Bank', stratCat: 'Strategic', perfStatus: 'Net Profit', y2023: '+14.500', y2024: '+16.200', y2025: '+18.000', y2026: '+19.500' },
    { name: 'Sri Lanka Telecom PLC', stratCat: 'Strategic', perfStatus: 'Net Profit', y2023: '+6.800', y2024: '+7.500', y2025: '+8.400', y2026: '+9.100' },
    { name: 'National Savings Bank', stratCat: 'Strategic', perfStatus: 'Net Profit', y2023: '+4.200', y2024: '+4.800', y2025: '+5.500', y2026: '+6.000' },
    { name: 'Sri Lanka Insurance Corp', stratCat: 'Strategic', perfStatus: 'Net Profit', y2023: '+3.900', y2024: '+4.200', y2025: '+4.800', y2026: '+5.100' },
    { name: 'Lanka Electricity Co (LECO)', stratCat: 'Strategic', perfStatus: 'Net Profit', y2023: '+2.100', y2024: '+2.500', y2025: '+2.900', y2026: '+3.100' },
    { name: 'Litro Gas Lanka Ltd', stratCat: 'Strategic', perfStatus: 'Net Profit', y2023: '+1.800', y2024: '+2.100', y2025: '+2.400', y2026: '+2.700' },
    { name: 'Sri Lanka Ports Management Co', stratCat: 'Strategic', perfStatus: 'Net Profit', y2023: '+1.100', y2024: '+1.300', y2025: '+1.500', y2026: '+1.600' },
    { name: 'Lanka IOC Public Share Unit', stratCat: 'Strategic', perfStatus: 'Net Profit', y2023: '+0.700', y2024: '+0.800', y2025: '+0.900', y2026: '+1.000' },
    { name: 'Lanka Phosphate Ltd', stratCat: 'Strategic', perfStatus: 'Net Profit', y2023: '+0.150', y2024: '+0.180', y2025: '+0.200', y2026: '+0.220' },
    { name: 'SriLankan Airlines Ltd', stratCat: 'Strategic', perfStatus: 'Net Loss', y2023: '-10.200', y2024: '-9.100', y2025: '-8.500', y2026: '-7.800' },
    { name: 'Lanka Hospitals PLC', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2023: '+2.800', y2024: '+3.100', y2025: '+3.500', y2026: '+3.800' },
    { name: 'Hotel Developers (Lanka) Ltd', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2023: '+1.500', y2024: '+1.800', y2025: '+2.100', y2026: '+2.400' },
    { name: 'BCI Campus Ltd', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2023: '+0.800', y2024: '+1.000', y2025: '+1.200', y2026: '+1.300' },
    { name: 'Lanka Mineral Sands Ltd', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2023: '+0.700', y2024: '+0.900', y2025: '+1.000', y2026: '+1.100' },
    { name: 'Lanka Sugar Company (Pvt) Ltd', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2023: '+0.600', y2024: '+0.800', y2025: '+0.900', y2026: '+1.000' },
    { name: 'Lanka Coal Company (Pvt) Ltd', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2023: '+0.200', y2024: '+0.300', y2025: '+0.400', y2026: '+0.500' },
    { name: 'Lanka Cement PLC', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2023: '+0.100', y2024: '+0.200', y2025: '+0.300', y2026: '+0.350' },
    { name: 'Kahawatte Plantations Entity', stratCat: 'Non-Strategic', perfStatus: 'Net Loss', y2023: '-1.200', y2024: '-1.000', y2025: '-0.900', y2026: '-0.800' },
    { name: 'Elpitiya Plantations Entity', stratCat: 'Non-Strategic', perfStatus: 'Net Loss', y2023: '-0.900', y2024: '-0.800', y2025: '-0.700', y2026: '-0.600' },
    { name: 'Kurunegala Plantations Ltd', stratCat: 'Non-Strategic', perfStatus: 'Net Loss', y2023: '-0.700', y2024: '-0.600', y2025: '-0.500', y2026: '-0.400' },
    { name: 'Chilaw Plantations Ltd', stratCat: 'Non-Strategic', perfStatus: 'Net Loss', y2023: '-0.400', y2024: '-0.350', y2025: '-0.300', y2026: '-0.250' },
    { name: 'National Paper Company Entity', stratCat: 'Non-Strategic', perfStatus: 'Net Loss', y2023: '-0.300', y2024: '-0.250', y2025: '-0.200', y2026: '-0.150' },
    { name: 'Ceylon Fertilizer Co Ltd', stratCat: 'Non-Strategic', perfStatus: 'Net Loss', y2023: '-0.200', y2024: '-0.150', y2025: '-0.100', y2026: '-0.080' }
  ],

  'Commercial Corporation Register (17 SOEs)': [
    { name: 'Sri Lanka Ports Authority', stratCat: 'Strategic', perfStatus: 'Net Profit', y2023: '+11.500', y2024: '+12.800', y2025: '+14.200', y2026: '+15.500' },
    { name: 'Airport & Aviation Services Ltd', stratCat: 'Strategic', perfStatus: 'Net Profit', y2023: '+4.800', y2024: '+5.500', y2025: '+6.100', y2026: '+6.800' },
    { name: 'State Pharmaceuticals Corporation', stratCat: 'Strategic', perfStatus: 'Net Profit', y2023: '+2.500', y2024: '+2.800', y2025: '+3.200', y2026: '+3.500' },
    { name: 'State Timber Corporation', stratCat: 'Strategic', perfStatus: 'Net Profit', y2023: '+0.250', y2024: '+0.300', y2025: '+0.400', y2026: '+0.450' },
    { name: 'State Printing Corporation', stratCat: 'Strategic', perfStatus: 'Net Profit', y2023: '+0.050', y2024: '+0.080', y2025: '+0.100', y2026: '+0.120' },
    { name: 'Ceylon Petroleum Corporation (CPC)', stratCat: 'Strategic', perfStatus: 'Net Loss', y2023: '-18.500', y2024: '-15.200', y2025: '-12.100', y2026: '-9.500' },
    { name: 'Ceylon Electricity Board (CEB)', stratCat: 'Strategic', perfStatus: 'Net Loss', y2023: '-9.800', y2024: '-7.100', y2025: '-5.200', y2026: '-3.800' },
    { name: 'Sri Lanka Transport Board (SLTB)', stratCat: 'Strategic', perfStatus: 'Net Loss', y2023: '-2.800', y2024: '-2.200', y2025: '-1.800', y2026: '-1.400' },
    { name: 'Sri Lanka State Trading Corp', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2023: '+1.200', y2024: '+1.500', y2025: '+1.800', y2026: '+2.000' },
    { name: 'State Engineering Corporation', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2023: '+0.500', y2024: '+0.650', y2025: '+0.800', y2026: '+0.950' },
    { name: 'State Fertilizer Corporation', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2023: '+0.200', y2024: '+0.300', y2025: '+0.400', y2026: '+0.450' },
    { name: 'State Gem & Jewellery Corporation', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2023: '+0.100', y2024: '+0.150', y2025: '+0.200', y2026: '+0.220' },
    { name: 'Sri Lanka Rubber Manufacturing Corp', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2023: '+0.100', y2024: '+0.150', y2025: '+0.200', y2026: '+0.220' },
    { name: 'Ceylon Fisheries Corporation', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2023: '+0.050', y2024: '+0.080', y2025: '+0.100', y2026: '+0.120' },
    { name: 'Ceylon Fishery Harbours Corporation', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2023: '+0.050', y2024: '+0.080', y2025: '+0.100', y2026: '+0.120' },
    { name: 'Building Materials Corporation', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2023: '+0.050', y2024: '+0.080', y2025: '+0.100', y2026: '+0.120' },
    { name: 'Spices & Allied Products Board', stratCat: 'Non-Strategic', perfStatus: 'Net Loss', y2023: '-1.500', y2024: '-1.300', y2025: '-1.100', y2026: '-0.900' }
  ],

  'Non-Commercial Corporation Register (16 SOEs)': [
    { name: 'Development Lotteries Board', stratCat: 'Strategic', perfStatus: 'Net Profit', y2023: '+1.400', y2024: '+1.600', y2025: '+1.900', y2026: '+2.100' },
    { name: 'National Lotteries Board', stratCat: 'Strategic', perfStatus: 'Net Profit', y2023: '+1.200', y2024: '+1.400', y2025: '+1.700', y2026: '+1.850' },
    { name: 'Civil Aviation Authority', stratCat: 'Strategic', perfStatus: 'Net Profit', y2023: '+0.900', y2024: '+1.100', y2025: '+1.300', y2026: '+1.400' },
    { name: 'Marine Environment Protection Auth', stratCat: 'Strategic', perfStatus: 'Net Profit', y2023: '+0.800', y2024: '+0.950', y2025: '+1.100', y2026: '+1.200' },
    { name: 'Export Development Board', stratCat: 'Strategic', perfStatus: 'Net Profit', y2023: '+0.500', y2024: '+0.650', y2025: '+0.800', y2026: '+0.900' },
    { name: 'Sri Lanka Standards Institution', stratCat: 'Strategic', perfStatus: 'Net Profit', y2023: '+0.400', y2024: '+0.550', y2025: '+0.700', y2026: '+0.800' },
    { name: 'Tea Small Holdings Dev Authority', stratCat: 'Strategic', perfStatus: 'Net Profit', y2023: '+0.300', y2024: '+0.450', y2025: '+0.600', y2026: '+0.700' },
    { name: 'Coconut Development Authority', stratCat: 'Strategic', perfStatus: 'Net Profit', y2023: '+0.200', y2024: '+0.350', y2025: '+0.500', y2026: '+0.600' },
    { name: 'Central Engineering Consultancy Bureau', stratCat: 'Strategic', perfStatus: 'Net Profit', y2023: '+0.150', y2024: '+0.200', y2025: '+0.300', y2026: '+0.350' },
    { name: 'Sri Lanka Handicrafts Board', stratCat: 'Strategic', perfStatus: 'Net Profit', y2023: '+0.050', y2024: '+0.080', y2025: '+0.100', y2026: '+0.120' },
    { name: 'Sri Lanka Railway Department', stratCat: 'Strategic', perfStatus: 'Net Loss', y2023: '-4.500', y2024: '-3.800', y2025: '-3.100', y2026: '-2.500' },
    { name: 'National Water Supply & Drainage Board', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2023: '+3.100', y2024: '+3.600', y2025: '+4.200', y2026: '+4.700' },
    { name: 'Urban Development Authority (UDA)', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2023: '+0.400', y2024: '+0.550', y2025: '+0.700', y2026: '+0.800' },
    { name: 'Coast Conservation Department', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2023: '+0.300', y2024: '+0.450', y2025: '+0.600', y2026: '+0.700' },
    { name: 'National Design Centre', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2023: '+0.200', y2024: '+0.350', y2025: '+0.500', y2026: '+0.600' },
    { name: 'National Livestock Development Board', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2023: '+0.100', y2024: '+0.200', y2025: '+0.300', y2026: '+0.350' }
  ],

  // --- SUB-CATEGORY MODAL DATA (ROW BREAKDOWNS) ---
  'Company - Strategic Net Profit SOEs': [
    { name: 'Bank of Ceylon', stratCat: 'Strategic', perfStatus: 'Net Profit', y2023: '+18.200', y2024: '+20.100', y2025: '+22.500', y2026: '+24.000' },
    { name: 'People\'s Bank', stratCat: 'Strategic', perfStatus: 'Net Profit', y2023: '+14.500', y2024: '+16.200', y2025: '+18.000', y2026: '+19.500' },
    { name: 'Sri Lanka Telecom PLC', stratCat: 'Strategic', perfStatus: 'Net Profit', y2023: '+6.800', y2024: '+7.500', y2025: '+8.400', y2026: '+9.100' },
    { name: 'National Savings Bank', stratCat: 'Strategic', perfStatus: 'Net Profit', y2023: '+4.200', y2024: '+4.800', y2025: '+5.500', y2026: '+6.000' },
    { name: 'Sri Lanka Insurance Corp', stratCat: 'Strategic', perfStatus: 'Net Profit', y2023: '+3.900', y2024: '+4.200', y2025: '+4.800', y2026: '+5.100' },
    { name: 'Lanka Electricity Co (LECO)', stratCat: 'Strategic', perfStatus: 'Net Profit', y2023: '+2.100', y2024: '+2.500', y2025: '+2.900', y2026: '+3.100' },
    { name: 'Litro Gas Lanka Ltd', stratCat: 'Strategic', perfStatus: 'Net Profit', y2023: '+1.800', y2024: '+2.100', y2025: '+2.400', y2026: '+2.700' },
    { name: 'Sri Lanka Ports Management Co', stratCat: 'Strategic', perfStatus: 'Net Profit', y2023: '+1.100', y2024: '+1.300', y2025: '+1.500', y2026: '+1.600' },
    { name: 'Lanka IOC Public Share Unit', stratCat: 'Strategic', perfStatus: 'Net Profit', y2023: '+0.700', y2024: '+0.800', y2025: '+0.900', y2026: '+1.000' },
    { name: 'Lanka Phosphate Ltd', stratCat: 'Strategic', perfStatus: 'Net Profit', y2023: '+0.150', y2024: '+0.180', y2025: '+0.200', y2026: '+0.220' }
  ],
  'Company - Strategic Net Loss SOEs': [
    { name: 'SriLankan Airlines Ltd', stratCat: 'Strategic', perfStatus: 'Net Loss', y2023: '-10.200', y2024: '-9.100', y2025: '-8.500', y2026: '-7.800' }
  ],
  'Company - Non-Strategic Net Profit SOEs': [
    { name: 'Lanka Hospitals PLC', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2023: '+2.800', y2024: '+3.100', y2025: '+3.500', y2026: '+3.800' },
    { name: 'Hotel Developers (Lanka) Ltd', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2023: '+1.500', y2024: '+1.800', y2025: '+2.100', y2026: '+2.400' },
    { name: 'BCI Campus Ltd', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2023: '+0.800', y2024: '+1.000', y2025: '+1.200', y2026: '+1.300' },
    { name: 'Lanka Mineral Sands Ltd', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2023: '+0.700', y2024: '+0.900', y2025: '+1.000', y2026: '+1.100' },
    { name: 'Lanka Sugar Company (Pvt) Ltd', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2023: '+0.600', y2024: '+0.800', y2025: '+0.900', y2026: '+1.000' },
    { name: 'Lanka Coal Company (Pvt) Ltd', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2023: '+0.200', y2024: '+0.300', y2025: '+0.400', y2026: '+0.500' },
    { name: 'Lanka Cement PLC', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2023: '+0.100', y2024: '+0.200', y2025: '+0.300', y2026: '+0.350' }
  ],
  'Company - Non-Strategic Net Loss SOEs': [
    { name: 'Kahawatte Plantations Entity', stratCat: 'Non-Strategic', perfStatus: 'Net Loss', y2023: '-1.200', y2024: '-1.000', y2025: '-0.900', y2026: '-0.800' },
    { name: 'Elpitiya Plantations Entity', stratCat: 'Non-Strategic', perfStatus: 'Net Loss', y2023: '-0.900', y2024: '-0.800', y2025: '-0.700', y2026: '-0.600' },
    { name: 'Kurunegala Plantations Ltd', stratCat: 'Non-Strategic', perfStatus: 'Net Loss', y2023: '-0.700', y2024: '-0.600', y2025: '-0.500', y2026: '-0.400' },
    { name: 'Chilaw Plantations Ltd', stratCat: 'Non-Strategic', perfStatus: 'Net Loss', y2023: '-0.400', y2024: '-0.350', y2025: '-0.300', y2026: '-0.250' },
    { name: 'National Paper Company Entity', stratCat: 'Non-Strategic', perfStatus: 'Net Loss', y2023: '-0.300', y2024: '-0.250', y2025: '-0.200', y2026: '-0.150' },
    { name: 'Ceylon Fertilizer Co Ltd', stratCat: 'Non-Strategic', perfStatus: 'Net Loss', y2023: '-0.200', y2024: '-0.150', y2025: '-0.100', y2026: '-0.080' }
  ],

  'Commercial Corporation - Strategic Net Profit SOEs': [
    { name: 'Sri Lanka Ports Authority', stratCat: 'Strategic', perfStatus: 'Net Profit', y2023: '+11.500', y2024: '+12.800', y2025: '+14.200', y2026: '+15.500' },
    { name: 'Airport & Aviation Services Ltd', stratCat: 'Strategic', perfStatus: 'Net Profit', y2023: '+4.800', y2024: '+5.500', y2025: '+6.100', y2026: '+6.800' },
    { name: 'State Pharmaceuticals Corporation', stratCat: 'Strategic', perfStatus: 'Net Profit', y2023: '+2.500', y2024: '+2.800', y2025: '+3.200', y2026: '+3.500' },
    { name: 'State Timber Corporation', stratCat: 'Strategic', perfStatus: 'Net Profit', y2023: '+0.250', y2024: '+0.300', y2025: '+0.400', y2026: '+0.450' },
    { name: 'State Printing Corporation', stratCat: 'Strategic', perfStatus: 'Net Profit', y2023: '+0.050', y2024: '+0.080', y2025: '+0.100', y2026: '+0.120' }
  ],
  'Commercial Corporation - Strategic Net Loss SOEs': [
    { name: 'Ceylon Petroleum Corporation (CPC)', stratCat: 'Strategic', perfStatus: 'Net Loss', y2023: '-18.500', y2024: '-15.200', y2025: '-12.100', y2026: '-9.500' },
    { name: 'Ceylon Electricity Board (CEB)', stratCat: 'Strategic', perfStatus: 'Net Loss', y2023: '-9.800', y2024: '-7.100', y2025: '-5.200', y2026: '-3.800' },
    { name: 'Sri Lanka Transport Board (SLTB)', stratCat: 'Strategic', perfStatus: 'Net Loss', y2023: '-2.800', y2024: '-2.200', y2025: '-1.800', y2026: '-1.400' }
  ],
  'Commercial Corporation - Non-Strategic Net Profit SOEs': [
    { name: 'Sri Lanka State Trading Corp', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2023: '+1.200', y2024: '+1.500', y2025: '+1.800', y2026: '+2.000' },
    { name: 'State Engineering Corporation', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2023: '+0.500', y2024: '+0.650', y2025: '+0.800', y2026: '+0.950' },
    { name: 'State Fertilizer Corporation', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2023: '+0.200', y2024: '+0.300', y2025: '+0.400', y2026: '+0.450' },
    { name: 'State Gem & Jewellery Corporation', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2023: '+0.100', y2024: '+0.150', y2025: '+0.200', y2026: '+0.220' },
    { name: 'Sri Lanka Rubber Manufacturing Corp', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2023: '+0.100', y2024: '+0.150', y2025: '+0.200', y2026: '+0.220' },
    { name: 'Ceylon Fisheries Corporation', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2023: '+0.050', y2024: '+0.080', y2025: '+0.100', y2026: '+0.120' },
    { name: 'Ceylon Fishery Harbours Corporation', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2023: '+0.050', y2024: '+0.080', y2025: '+0.100', y2026: '+0.120' },
    { name: 'Building Materials Corporation', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2023: '+0.050', y2024: '+0.080', y2025: '+0.100', y2026: '+0.120' }
  ],
  'Commercial Corporation - Non-Strategic Net Loss SOEs': [
    { name: 'Spices & Allied Products Board', stratCat: 'Non-Strategic', perfStatus: 'Net Loss', y2023: '-1.500', y2024: '-1.300', y2025: '-1.100', y2026: '-0.900' }
  ],

  'Non-Commercial Corporation - Strategic Net Profit SOEs': [
    { name: 'Development Lotteries Board', stratCat: 'Strategic', perfStatus: 'Net Profit', y2023: '+1.400', y2024: '+1.600', y2025: '+1.900', y2026: '+2.100' },
    { name: 'National Lotteries Board', stratCat: 'Strategic', perfStatus: 'Net Profit', y2023: '+1.200', y2024: '+1.400', y2025: '+1.700', y2026: '+1.850' },
    { name: 'Civil Aviation Authority', stratCat: 'Strategic', perfStatus: 'Net Profit', y2023: '+0.900', y2024: '+1.100', y2025: '+1.300', y2026: '+1.400' },
    { name: 'Marine Environment Protection Auth', stratCat: 'Strategic', perfStatus: 'Net Profit', y2023: '+0.800', y2024: '+0.950', y2025: '+1.100', y2026: '+1.200' },
    { name: 'Export Development Board', stratCat: 'Strategic', perfStatus: 'Net Profit', y2023: '+0.500', y2024: '+0.650', y2025: '+0.800', y2026: '+0.900' },
    { name: 'Sri Lanka Standards Institution', stratCat: 'Strategic', perfStatus: 'Net Profit', y2023: '+0.400', y2024: '+0.550', y2025: '+0.700', y2026: '+0.800' },
    { name: 'Tea Small Holdings Dev Authority', stratCat: 'Strategic', perfStatus: 'Net Profit', y2023: '+0.300', y2024: '+0.450', y2025: '+0.600', y2026: '+0.700' },
    { name: 'Coconut Development Authority', stratCat: 'Strategic', perfStatus: 'Net Profit', y2023: '+0.200', y2024: '+0.350', y2025: '+0.500', y2026: '+0.600' },
    { name: 'Central Engineering Consultancy Bureau', stratCat: 'Strategic', perfStatus: 'Net Profit', y2023: '+0.150', y2024: '+0.200', y2025: '+0.300', y2026: '+0.350' },
    { name: 'Sri Lanka Handicrafts Board', stratCat: 'Strategic', perfStatus: 'Net Profit', y2023: '+0.050', y2024: '+0.080', y2025: '+0.100', y2026: '+0.120' }
  ],
  'Non-Commercial Corporation - Strategic Net Loss SOEs': [
    { name: 'Sri Lanka Railway Department', stratCat: 'Strategic', perfStatus: 'Net Loss', y2023: '-4.500', y2024: '-3.800', y2025: '-3.100', y2026: '-2.500' }
  ],
  'Non-Commercial Corporation - Non-Strategic Net Profit SOEs': [
    { name: 'National Water Supply & Drainage Board', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2023: '+3.100', y2024: '+3.600', y2025: '+4.200', y2026: '+4.700' },
    { name: 'Urban Development Authority (UDA)', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2023: '+0.400', y2024: '+0.550', y2025: '+0.700', y2026: '+0.800' },
    { name: 'Coast Conservation Department', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2023: '+0.300', y2024: '+0.450', y2025: '+0.600', y2026: '+0.700' },
    { name: 'National Design Centre', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2023: '+0.200', y2024: '+0.350', y2025: '+0.500', y2026: '+0.600' },
    { name: 'National Livestock Development Board', stratCat: 'Non-Strategic', perfStatus: 'Net Profit', y2023: '+0.100', y2024: '+0.200', y2025: '+0.300', y2026: '+0.350' }
  ],
  'Non-Commercial Corporation - Non-Strategic Net Loss SOEs': []
};

// Registered Non-Functioning Entities Dataset
const nonFunctioningEntitiesData = [
  { name: 'Janatha Estates Development Board (JEDB)', loss: '-22.500' },
  { name: 'Sri Lanka Casualty Insurance Company', loss: '-15.000' },
  { name: 'National Paper Corporation', loss: '-10.000' },
  { name: 'Selacine Television Institute', loss: '+5.000' }
];

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
      .soe-export-toolbar {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-bottom: 2px;
      }
      .btn-export-soe {
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
      .btn-export-soe:hover {
        background: #1d4ed8;
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
        font-size: 12px;
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
        font-size: 10px;
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
      
      <!-- Export Toolbar -->
      <div class="soe-export-toolbar">
        <button class="btn-export-soe" onclick="exportSOEPerformanceMultiSheetExcel()">
          📥 Export SOE Performance Report (.xlsx)
        </button>
      </div>

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
            <span><span class="soe-func-dot" style="background:#059669;"></span>Commercial Corporation</span>
            <strong>17 (27.9%)</strong>
          </div>
          <div class="soe-func-legend-item" id="legend-func-noncomm"
               onclick="openSoeTrendModal('Non-Commercial Corporation Register (16 SOEs)')"
               onmouseenter="highlightFuncStatus('noncomm')" onmouseleave="removeFuncHighlight()"
               title="Click to view all 16 Non-Commercial Corporations">
            <span><span class="soe-func-dot" style="background:#d97706;"></span>Non-Commercial Corporation</span>
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

// Multi-Worksheet XML-based .xlsx Generator for SOE Performance
async function exportSOEPerformanceMultiSheetExcel() {
  const currentYear = typeof selectedYear !== 'undefined' ? selectedYear : '2025';

  const now = new Date();
  const dd = String(now.getDate()).padStart(2, '0');
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const yyyy = now.getFullYear();
  const hh = String(now.getHours()).padStart(2, '0');
  const min = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');
  const timestamp = `${dd}${mm}${yyyy}_${hh}${min}${ss}`;
  const filename = `SOEPerformance_${timestamp}.xlsx`;

  const escapeXML = (str) => String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  // Builder with Strategic Classification and Performance Status columns before FY years
  const buildPerformanceSheetXML = (title, subtitle, categoryKey) => {
    let rows = [];
    let r = 1;

    // Title & Subtitle
    rows.push(`<row r="${r}"><c r="A${r}" t="inlineStr" s="1"><is><t>${escapeXML(title)}</t></is></c></row>`);
    r++;
    rows.push(`<row r="${r}"><c r="A${r}" t="inlineStr" s="2"><is><t>${escapeXML(subtitle)}</t></is></c></row>`);
    r += 2;

    // Header Row with Strategic Classification and Performance Status columns
    rows.push(`
      <row r="${r}">
        <c r="A${r}" t="inlineStr" s="3"><is><t>SOE Name</t></is></c>
        <c r="B${r}" t="inlineStr" s="3"><is><t>Strategic Classification</t></is></c>
        <c r="C${r}" t="inlineStr" s="3"><is><t>Performance Status</t></is></c>
        <c r="D${r}" t="inlineStr" s="3"><is><t>FY 2023</t></is></c>
        <c r="E${r}" t="inlineStr" s="3"><is><t>FY 2024</t></is></c>
        <c r="F${r}" t="inlineStr" s="3"><is><t>FY 2025</t></is></c>
        <c r="G${r}" t="inlineStr" s="3"><is><t>FY 2026 (Current)</t></is></c>
      </row>`);
    r++;

    const items = soeStackedData[categoryKey] || [];

    items.forEach(item => {
      rows.push(`
        <row r="${r}">
          <c r="A${r}" t="inlineStr" s="4"><is><t>${escapeXML(item.name)}</t></is></c>
          <c r="B${r}" t="inlineStr"><is><t>${escapeXML(item.stratCat || '')}</t></is></c>
          <c r="C${r}" t="inlineStr"><is><t>${escapeXML(item.perfStatus || '')}</t></is></c>
          <c r="D${r}" s="5"><v>${parseFloat(item.y2023) || 0}</v></c>
          <c r="E${r}" s="5"><v>${parseFloat(item.y2024) || 0}</v></c>
          <c r="F${r}" s="5"><v>${parseFloat(item.y2025) || 0}</v></c>
          <c r="G${r}" s="5"><v>${parseFloat(item.y2026) || 0}</v></c>
        </row>`);
      r++;
    });

    return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
      <worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
        <cols>
          <col min="1" max="1" width="40" customWidth="1"/>
          <col min="2" max="2" width="24" customWidth="1"/>
          <col min="3" max="3" width="20" customWidth="1"/>
          <col min="4" max="7" width="16" customWidth="1"/>
        </cols>
        <sheetData>${rows.join('')}</sheetData>
      </worksheet>`;
  };

  // Builder for Non-Functioning Sheet (Kept with its existing dedicated format)
  const buildNonFunctioningSheetXML = (title, subtitle) => {
    let rows = [];
    let r = 1;

    rows.push(`<row r="${r}"><c r="A${r}" t="inlineStr" s="1"><is><t>${escapeXML(title)}</t></is></c></row>`);
    r++;
    rows.push(`<row r="${r}"><c r="A${r}" t="inlineStr" s="2"><is><t>${escapeXML(subtitle)}</t></is></c></row>`);
    r += 2;

    rows.push(`
      <row r="${r}">
        <c r="A${r}" t="inlineStr" s="3"><is><t>SOE Name</t></is></c>
        <c r="B${r}" t="inlineStr" s="3"><is><t>Net Profit / Loss</t></is></c>
      </row>`);
    r++;

    nonFunctioningEntitiesData.forEach(item => {
      rows.push(`
        <row r="${r}">
          <c r="A${r}" t="inlineStr" s="4"><is><t>${escapeXML(item.name)}</t></is></c>
          <c r="B${r}" s="5"><v>${parseFloat(item.loss) || 0}</v></c>
        </row>`);
      r++;
    });

    return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
      <worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
        <cols>
          <col min="1" max="1" width="45" customWidth="1"/>
          <col min="2" max="2" width="22" customWidth="1"/>
        </cols>
        <sheetData>${rows.join('')}</sheetData>
      </worksheet>`;
  };

  const sheets = [
    {
      name: "Company",
      xml: buildPerformanceSheetXML(
        "PEDMIS - Company Sector Performance (4-Year Trend)",
        `Active Timeframe: FY ${currentYear} | Currency Unit: In LKR Billions | Total: 24 SOEs (Net Impact: +16.000)`,
        "Company Register (24 SOEs)"
      )
    },
    {
      name: "Commercial Corporation",
      xml: buildPerformanceSheetXML(
        "PEDMIS - Commercial Corporation Sector Performance (4-Year Trend)",
        `Active Timeframe: FY ${currentYear} | Currency Unit: In LKR Billions | Total: 17 SOEs (Net Impact: +3.800)`,
        "Commercial Corporation Register (17 SOEs)"
      )
    },
    {
      name: "Non-Commercial Corporation",
      xml: buildPerformanceSheetXML(
        "PEDMIS - Non-Commercial Corporation Sector Performance (4-Year Trend)",
        `Active Timeframe: FY ${currentYear} | Currency Unit: In LKR Billions | Total: 16 SOEs (Net Impact: +11.900)`,
        "Non-Commercial Corporation Register (16 SOEs)"
      )
    },
    {
      name: "Non-Functioning",
      xml: buildNonFunctioningSheetXML(
        "PEDMIS - Non-Functioning SOE Register",
        `Active Timeframe: FY ${currentYear} | Currency Unit: In LKR Billions | Total: 4 Entities (Inactive)`
      )
    }
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
      <cellXfs count="7">
        <xf numFmtId="0" fontId="0" fillId="0" borderId="0"/>
        <xf numFmtId="0" fontId="1" fillId="0" borderId="0"/>
        <xf numFmtId="0" fontId="2" fillId="0" borderId="0"/>
        <xf numFmtId="0" fontId="3" fillId="2" borderId="1" applyAlignment="1"><alignment horizontal="center"/></xf>
        <xf numFmtId="0" fontId="4" fillId="0" borderId="1"/>
        <xf numFmtId="164" fontId="0" fillId="0" borderId="1" applyNumberFormat="1" applyAlignment="1"><alignment horizontal="right"/></xf>
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