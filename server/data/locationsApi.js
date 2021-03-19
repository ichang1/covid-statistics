const locationsApi = {
  "North America": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/continents/North America",
  },
  "South America": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/continents/South America",
  },
  Asia: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/continents/Asia",
  },
  Europe: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/continents/Europe",
  },
  Africa: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/continents/Africa",
  },
  "Australia/Oceania": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/continents/Australia/Oceania",
  },
  California: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/California",
  },
  Texas: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/Texas",
  },
  Florida: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/Florida",
  },
  "New York": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/New York",
  },
  Illinois: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/Illinois",
  },
  Georgia: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Georgia",
  },
  Ohio: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/Ohio",
  },
  Pennsylvania: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/Pennsylvania",
  },
  "North Carolina": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/North Carolina",
  },
  "New Jersey": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/New Jersey",
  },
  Arizona: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/Arizona",
  },
  Tennessee: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/Tennessee",
  },
  Michigan: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/Michigan",
  },
  Indiana: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/Indiana",
  },
  Massachusetts: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/Massachusetts",
  },
  Virginia: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/Virginia",
  },
  Wisconsin: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/Wisconsin",
  },
  Missouri: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/Missouri",
  },
  "South Carolina": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/South Carolina",
  },
  Alabama: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/Alabama",
  },
  Minnesota: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/Minnesota",
  },
  Colorado: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/Colorado",
  },
  Louisiana: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/Louisiana",
  },
  Oklahoma: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/Oklahoma",
  },
  Kentucky: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/Kentucky",
  },
  Maryland: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/Maryland",
  },
  Utah: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/Utah",
  },
  Iowa: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/Iowa",
  },
  Washington: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/Washington",
  },
  Arkansas: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/Arkansas",
  },
  Mississippi: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/Mississippi",
  },
  Kansas: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/Kansas",
  },
  Nevada: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/Nevada",
  },
  Connecticut: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/Connecticut",
  },
  Nebraska: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/Nebraska",
  },
  "New Mexico": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/New Mexico",
  },
  Idaho: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/Idaho",
  },
  Oregon: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/Oregon",
  },
  "West Virginia": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/West Virginia",
  },
  "Rhode Island": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/Rhode Island",
  },
  "South Dakota": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/South Dakota",
  },
  Montana: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/Montana",
  },
  "North Dakota": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/North Dakota",
  },
  Delaware: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/Delaware",
  },
  "New Hampshire": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/New Hampshire",
  },
  Alaska: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/Alaska",
  },
  Wyoming: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/Wyoming",
  },
  Maine: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/Maine",
  },
  "District Of Columbia": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/District Of Columbia",
  },
  Hawaii: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/Hawaii",
  },
  Vermont: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/Vermont",
  },
  "Puerto Rico": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/Puerto Rico",
  },
  Guam: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/Guam",
  },
  "United States Virgin Islands": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/United States Virgin Islands",
  },
  "Northern Mariana Islands": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/Northern Mariana Islands",
  },
  "American Samoa": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/American Samoa",
  },
  "Navajo Nation": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/states/Navajo Nation",
  },
  Afghanistan: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Afghanistan",
  },
  Albania: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Albania",
  },
  Algeria: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Algeria",
  },
  Andorra: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Andorra",
  },
  Angola: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Angola",
  },
  Anguilla: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Antigua and Barbuda": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Antigua and Barbuda",
  },
  Argentina: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Argentina",
  },
  Armenia: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Armenia",
  },
  Aruba: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Australia: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Australia",
  },
  Austria: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Austria",
  },
  Azerbaijan: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Azerbaijan",
  },
  Bahamas: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Bahamas",
  },
  Bahrain: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Bahrain",
  },
  Bangladesh: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Bangladesh",
  },
  Barbados: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Barbados",
  },
  Belarus: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Belarus",
  },
  Belgium: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Belgium",
  },
  Belize: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Belize",
  },
  Benin: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Benin",
  },
  Bermuda: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Bhutan: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Bhutan",
  },
  Bolivia: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Bolivia",
  },
  Bosnia: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Bosnia",
  },
  Botswana: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Botswana",
  },
  Brazil: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Brazil",
  },
  "British Virgin Islands": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Brunei: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Brunei",
  },
  Bulgaria: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Bulgaria",
  },
  "Burkina Faso": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Burkina Faso",
  },
  Burundi: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Burundi",
  },
  "Cabo Verde": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Cabo Verde",
  },
  Cambodia: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Cambodia",
  },
  Cameroon: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Cameroon",
  },
  Canada: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Canada",
  },
  "Caribbean Netherlands": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Caribbean Netherlands",
  },
  "Cayman Islands": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Central African Republic": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Central African Republic",
  },
  Chad: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Chad",
  },
  "Channel Islands": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Chile: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Chile",
  },
  China: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/China",
  },
  Colombia: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Colombia",
  },
  Comoros: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Comoros",
  },
  Congo: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Congo",
  },
  "Costa Rica": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Costa Rica",
  },
  Croatia: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Croatia",
  },
  Cuba: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Cuba",
  },
  Curaçao: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Curaçao",
  },
  Cyprus: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Cyprus",
  },
  Czechia: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Czechia",
  },
  "Côte d'Ivoire": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Côte d'Ivoire",
  },
  DRC: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/DRC",
  },
  Denmark: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Denmark",
  },
  Djibouti: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Djibouti",
  },
  Dominica: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Dominica",
  },
  "Dominican Republic": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Dominican Republic",
  },
  Ecuador: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Ecuador",
  },
  Egypt: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Egypt",
  },
  "El Salvador": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/El Salvador",
  },
  "Equatorial Guinea": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Equatorial Guinea",
  },
  Eritrea: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Eritrea",
  },
  Estonia: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Estonia",
  },
  Ethiopia: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Ethiopia",
  },
  "Falkland Islands (Malvinas)": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Faroe Islands": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Fiji: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Fiji",
  },
  Finland: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Finland",
  },
  France: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/France",
  },
  "French Guiana": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "French Polynesia": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Gabon: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Gabon",
  },
  Gambia: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Gambia",
  },
  Germany: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Germany",
  },
  Ghana: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Ghana",
  },
  Gibraltar: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Greece: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Greece",
  },
  Greenland: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Grenada: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Grenada",
  },
  Guadeloupe: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Guatemala: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Guatemala",
  },
  Guinea: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Guinea",
  },
  "Guinea-Bissau": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Guinea-Bissau",
  },
  Guyana: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Guyana",
  },
  Haiti: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Haiti",
  },
  "Holy See (Vatican City State)": {
    api: "Worldometers",
    path:
      "https://disease.sh/v3/covid-19/countries/Holy See (Vatican City State)",
  },
  Honduras: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Honduras",
  },
  "Hong Kong": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Hungary: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Hungary",
  },
  Iceland: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Iceland",
  },
  India: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/India",
  },
  Indonesia: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Indonesia",
  },
  Iran: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Iran",
  },
  Iraq: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Iraq",
  },
  Ireland: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Ireland",
  },
  "Isle of Man": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Israel: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Israel",
  },
  Italy: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Italy",
  },
  Jamaica: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Jamaica",
  },
  Japan: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Japan",
  },
  Jordan: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Jordan",
  },
  Kazakhstan: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Kazakhstan",
  },
  Kenya: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Kenya",
  },
  Kuwait: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Kuwait",
  },
  Kyrgyzstan: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Kyrgyzstan",
  },
  "Lao People's Democratic Republic": {
    api: "Worldometers",
    path:
      "https://disease.sh/v3/covid-19/countries/Lao People's Democratic Republic",
  },
  Latvia: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Latvia",
  },
  Lebanon: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Lebanon",
  },
  Lesotho: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Lesotho",
  },
  Liberia: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Liberia",
  },
  "Libyan Arab Jamahiriya": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Libyan Arab Jamahiriya",
  },
  Liechtenstein: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Liechtenstein",
  },
  Lithuania: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Lithuania",
  },
  Luxembourg: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "MS Zaandam": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/MS Zaandam",
  },
  Macao: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Macao",
  },
  Macedonia: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Macedonia",
  },
  Madagascar: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Madagascar",
  },
  Malawi: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Malawi",
  },
  Malaysia: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Malaysia",
  },
  Maldives: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Maldives",
  },
  Mali: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Mali",
  },
  Malta: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Malta",
  },
  "Marshall Islands": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Marshall Islands",
  },
  Martinique: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Mauritania: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Mauritania",
  },
  Mauritius: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Mauritius",
  },
  Mayotte: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Mexico: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Micronesia: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Micronesia",
  },
  Moldova: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Moldova",
  },
  Monaco: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Monaco",
  },
  Mongolia: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Mongolia",
  },
  Montenegro: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Montenegro",
  },
  Montserrat: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Morocco: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Morocco",
  },
  Mozambique: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Mozambique",
  },
  Myanmar: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Myanmar",
  },
  Namibia: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Namibia",
  },
  Nepal: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Nepal",
  },
  Netherlands: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Netherlands",
  },
  "New Caledonia": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "New Zealand": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/New Zealand",
  },
  Nicaragua: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Nicaragua",
  },
  Niger: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Niger",
  },
  Nigeria: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Nigeria",
  },
  Norway: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Norway",
  },
  Oman: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Oman",
  },
  Pakistan: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Pakistan",
  },
  Palestine: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Palestine",
  },
  Panama: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Panama",
  },
  "Papua New Guinea": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Papua New Guinea",
  },
  Paraguay: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Paraguay",
  },
  Peru: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Peru",
  },
  Philippines: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Philippines",
  },
  Poland: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Poland",
  },
  Portugal: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Portugal",
  },
  Qatar: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Qatar",
  },
  Romania: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Romania",
  },
  Russia: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Russia",
  },
  Rwanda: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Rwanda",
  },
  Réunion: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Réunion",
  },
  "S. Korea": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/S. Korea",
  },
  "Saint Kitts and Nevis": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Saint Kitts and Nevis",
  },
  "Saint Lucia": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Saint Lucia",
  },
  "Saint Martin": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Saint Martin",
  },
  "Saint Pierre Miquelon": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Saint Pierre Miquelon",
  },
  "Saint Vincent and the Grenadines": {
    api: "Worldometers",
    path:
      "https://disease.sh/v3/covid-19/countries/Saint Vincent and the Grenadines",
  },
  Samoa: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Samoa",
  },
  "San Marino": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/San Marino",
  },
  "Sao Tome and Principe": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Sao Tome and Principe",
  },
  "Saudi Arabia": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Saudi Arabia",
  },
  Senegal: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Senegal",
  },
  Serbia: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Serbia",
  },
  Seychelles: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Seychelles",
  },
  "Sierra Leone": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Sierra Leone",
  },
  Singapore: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Singapore",
  },
  "Sint Maarten": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Slovakia: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Slovakia",
  },
  Slovenia: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Slovenia",
  },
  "Solomon Islands": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Solomon Islands",
  },
  Somalia: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Somalia",
  },
  "South Africa": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/South Africa",
  },
  "South Sudan": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/South Sudan",
  },
  Spain: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Spain",
  },
  "Sri Lanka": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Sri Lanka",
  },
  "St. Barth": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/St. Barth",
  },
  Sudan: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Sudan",
  },
  Suriname: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Suriname",
  },
  Swaziland: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Swaziland",
  },
  Sweden: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Sweden",
  },
  Switzerland: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Switzerland",
  },
  "Syrian Arab Republic": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Syrian Arab Republic",
  },
  Taiwan: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Taiwan",
  },
  Tajikistan: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Tajikistan",
  },
  Tanzania: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Tanzania",
  },
  Thailand: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Thailand",
  },
  "Timor-Leste": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Timor-Leste",
  },
  Togo: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Togo",
  },
  "Trinidad and Tobago": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Trinidad and Tobago",
  },
  Tunisia: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Tunisia",
  },
  Turkey: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Turkey",
  },
  "Turks and Caicos Islands": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  UAE: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/UAE",
  },
  "United Kingdom": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/UK",
  },
  USA: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/USA",
  },
  Uganda: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Uganda",
  },
  Ukraine: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Ukraine",
  },
  Uruguay: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Uruguay",
  },
  Uzbekistan: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Uzbekistan",
  },
  Vanuatu: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Vanuatu",
  },
  Venezuela: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Venezuela",
  },
  Vietnam: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Vietnam",
  },
  "Wallis and Futuna": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Western Sahara": {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Western Sahara",
  },
  Yemen: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Yemen",
  },
  Zambia: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Zambia",
  },
  Zimbabwe: {
    api: "Worldometers",
    path: "https://disease.sh/v3/covid-19/countries/Zimbabwe",
  },
  "Australian Capital Territory": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "New South Wales": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Northern Territory": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Queensland: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "South Australia": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Tasmania: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Victoria: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Western Australia": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Antwerp: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Brussels: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "East Flanders": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Flemish Brabant": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Hainaut: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Liege: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Limburg: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Namur: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Walloon Brabant": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "West Flanders": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Acre: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Alagoas: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Amapa: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Amazonas: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Bahia: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Ceara: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Distrito Federal": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Espirito Santo": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Goias: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Maranhao: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Mato Grosso": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Mato Grosso do Sul": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Minas Gerais": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Para: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Paraiba: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Parana: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Pernambuco: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Piaui: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Rio Grande do Norte": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Rio Grande do Sul": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Rio de Janeiro": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Rondonia: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Roraima: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Santa Catarina": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Sao Paulo": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Sergipe: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Tocantins: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Alberta: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "British Columbia": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Manitoba: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "New Brunswick": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Newfoundland and Labrador": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Northwest Territories": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Nova Scotia": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Nunavut: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Ontario: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Prince Edward Island": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Quebec: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Repatriated Travellers": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Saskatchewan: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Yukon: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Antofagasta: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Araucania: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Arica y Parinacota": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Atacama: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Aysen: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Biobio: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Coquimbo: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Los Lagos": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Los Rios": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Magallanes: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Maule: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Metropolitana: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Nuble: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  OHiggins: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Tarapaca: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Valparaiso: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Anhui: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Beijing: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Chongqing: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Fujian: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Gansu: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Guangdong: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Guangxi: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Guizhou: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Hainan: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Hebei: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Heilongjiang: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Henan: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Hubei: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Hunan: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Inner Mongolia": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Jiangsu: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Jiangxi: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Jilin: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Liaoning: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Macau: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Ningxia: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Qinghai: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Shaanxi: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Shandong: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Shanghai: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Shanxi: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Sichuan: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Tianjin: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Tibet: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Xinjiang: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Yunnan: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Zhejiang: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Antioquia: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Arauca: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Atlantico: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Bolivar: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Boyaca: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Caldas: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Capital District": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Caqueta: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Casanare: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Cauca: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Cesar: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Choco: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Cordoba: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Cundinamarca: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Guainia: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Guaviare: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Huila: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "La Guajira": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Magdalena: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Meta: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Narino: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Norte de Santander": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Putumayo: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Quindio: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Risaralda: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "San Andres y Providencia": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Santander: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Sucre: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Tolima: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Valle del Cauca": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Vaupes: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Vichada: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Reunion: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Saint Barthelemy": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Saint Pierre and Miquelon": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "St Martin": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Baden-Wurttemberg": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Bayern: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Berlin: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Brandenburg: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Bremen: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Hamburg: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Hessen: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Mecklenburg-Vorpommern": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Niedersachsen: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Nordrhein-Westfalen": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Rheinland-Pfalz": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Saarland: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Sachsen: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Sachsen-Anhalt": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Schleswig-Holstein": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Thuringen: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Andaman and Nicobar Islands": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Andhra Pradesh": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Arunachal Pradesh": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Assam: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Bihar: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Chandigarh: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Chhattisgarh: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Dadra and Nagar Haveli and Daman and Diu": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Delhi: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Goa: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Gujarat: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Haryana: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Himachal Pradesh": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Jammu and Kashmir": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Jharkhand: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Karnataka: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Kerala: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Ladakh: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Lakshadweep: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Madhya Pradesh": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Maharashtra: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Manipur: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Meghalaya: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Mizoram: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Nagaland: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Odisha: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Puducherry: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Punjab: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Rajasthan: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Sikkim: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Tamil Nadu": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Telangana: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Tripura: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Uttar Pradesh": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Uttarakhand: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "West Bengal": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Abruzzo: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Basilicata: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Calabria: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Campania: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Emilia-Romagna": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Friuli Venezia Giulia": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Lazio: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Liguria: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Lombardia: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Marche: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Molise: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "P.A. Bolzano": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "P.A. Trento": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Piemonte: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Puglia: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Sardegna: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Sicilia: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Toscana: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Umbria: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Valle d'Aosta": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Veneto: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Aichi: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Akita: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Aomori: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Chiba: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Ehime: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Fukui: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Fukuoka: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Fukushima: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Gifu: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Gunma: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Hiroshima: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Hokkaido: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Hyogo: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Ibaraki: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Ishikawa: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Iwate: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Kagawa: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Kagoshima: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Kanagawa: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Kochi: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Kumamoto: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Kyoto: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Mie: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Miyagi: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Miyazaki: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Nagano: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Nagasaki: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Nara: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Niigata: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Oita: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Okayama: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Okinawa: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Osaka: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Port Quarantine": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Saga: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Saitama: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Shiga: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Shimane: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Shizuoka: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Tochigi: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Tokushima: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Tokyo: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Tottori: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Toyama: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Wakayama: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Yamagata: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Yamaguchi: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Yamanashi: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Aguascalientes: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Baja California": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Baja California Sur": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Campeche: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Chiapas: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Chihuahua: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Ciudad de Mexico": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Coahuila: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Colima: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Durango: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Guanajuato: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Guerrero: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Hidalgo: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Jalisco: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Michoacan: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Morelos: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Nayarit: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Nuevo Leon": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Oaxaca: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Puebla: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Queretaro: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Quintana Roo": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "San Luis Potosi": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Sinaloa: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Sonora: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Tabasco: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Tamaulipas: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Tlaxcala: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Veracruz: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Yucatan: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Zacatecas: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Bonaire, Sint Eustatius and Saba": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Curacao: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Drenthe: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Flevoland: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Friesland: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Gelderland: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Groningen: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Noord-Brabant": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Noord-Holland": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Overijssel: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Utrecht: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Zeeland: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Zuid-Holland": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Azad Jammu and Kashmir": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Balochistan: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Gilgit-Baltistan": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Islamabad: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Khyber Pakhtunkhwa": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Sindh: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Ancash: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Apurimac: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Arequipa: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Ayacucho: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Cajamarca: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Callao: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Cusco: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Huancavelica: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Huanuco: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Ica: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Junin: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "La Libertad": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Lambayeque: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Lima: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Loreto: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Madre de Dios": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Moquegua: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Pasco: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Piura: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Puno: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "San Martin": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Tacna: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Tumbes: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Ucayali: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Adygea Republic": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Altai Krai": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Altai Republic": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Amur Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Arkhangelsk Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Astrakhan Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Bashkortostan Republic": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Belgorod Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Bryansk Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Buryatia Republic": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Chechen Republic": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Chelyabinsk Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Chukotka Autonomous Okrug": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Chuvashia Republic": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Dagestan Republic": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Ingushetia Republic": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Irkutsk Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Ivanovo Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Jewish Autonomous Okrug": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Kabardino-Balkarian Republic": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Kaliningrad Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Kalmykia Republic": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Kaluga Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Kamchatka Krai": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Karachay-Cherkess Republic": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Karelia Republic": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Kemerovo Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Khabarovsk Krai": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Khakassia Republic": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Khanty-Mansi Autonomous Okrug": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Kirov Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Komi Republic": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Kostroma Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Krasnodar Krai": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Krasnoyarsk Krai": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Kurgan Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Kursk Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Leningrad Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Lipetsk Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Magadan Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Mari El Republic": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Mordovia Republic": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Moscow: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Moscow Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Murmansk Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Nenets Autonomous Okrug": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Nizhny Novgorod Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "North Ossetia - Alania Republic": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Novgorod Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Novosibirsk Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Omsk Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Orel Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Orenburg Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Penza Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Perm Krai": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Primorsky Krai": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Pskov Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Rostov Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Ryazan Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Saint Petersburg": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Sakha (Yakutiya) Republic": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Sakhalin Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Samara Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Saratov Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Smolensk Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Stavropol Krai": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Sverdlovsk Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Tambov Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Tatarstan Republic": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Tomsk Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Tula Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Tver Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Tyumen Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Tyva Republic": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Udmurt Republic": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Ulyanovsk Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Vladimir Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Volgograd Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Vologda Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Voronezh Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Yamalo-Nenets Autonomous Okrug": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Yaroslavl Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Zabaykalsky Krai": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Andalusia: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Aragon: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Asturias: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Baleares: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "C. Valenciana": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Canarias: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Cantabria: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Castilla - La Mancha": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Castilla y Leon": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Catalonia: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Ceuta: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Extremadura: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Galicia: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "La Rioja": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Madrid: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Melilla: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Murcia: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Navarra: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Pais Vasco": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Blekinge: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Dalarna: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Gavleborg: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Gotland: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Halland: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Jamtland Harjedalen": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Jonkoping: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Kalmar: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Kronoberg: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Norrbotten: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Orebro: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Ostergotland: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Skane: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Sormland: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Stockholm: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Uppsala: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Varmland: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Vasterbotten: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Vasternorrland: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Vastmanland: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Vastra Gotaland": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Cherkasy Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Chernihiv Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Chernivtsi Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Crimea Republic*": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Dnipropetrovsk Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Donetsk Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Ivano-Frankivsk Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Kharkiv Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Kherson Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Khmelnytskyi Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Kiev: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Kiev Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Kirovohrad Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Luhansk Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Lviv Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Mykolaiv Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Odessa Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Poltava Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Rivne Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Sevastopol*": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Sumy Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Ternopil Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Vinnytsia Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Volyn Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Zakarpattia Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Zaporizhia Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Zhytomyr Oblast": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  England: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Northern Ireland": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  "Saint Helena, Ascension and Tristan da Cunha": {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Scotland: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
  Wales: {
    api: "JHUCSSE",
    path: "https://disease.sh/v3/covid-19/jhucsse",
  },
};

export default locationsApi;
