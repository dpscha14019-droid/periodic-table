const elements = [
{num:1,symbol:"H",name:"Hydrogen",mass:"1.008",group:1,period:1,category:"nonmetal",config:"1s1",uses:"Fuels, industrial processes"},
{num:2,symbol:"He",name:"Helium",mass:"4.0026",group:18,period:1,category:"noble",config:"1s2",uses:"Cryogenics, balloons"},
{num:3,symbol:"Li",name:"Lithium",mass:"6.94",group:1,period:2,category:"alkali",config:"[He] 2s1",uses:"Batteries, ceramics"},
{num:4,symbol:"Be",name:"Beryllium",mass:"9.0122",group:2,period:2,category:"alkaline",config:"[He] 2s2",uses:"Aerospace, alloys"},
{num:5,symbol:"B",name:"Boron",mass:"10.81",group:13,period:2,category:"metalloid",config:"[He] 2s2 2p1",uses:"Fiberglass, detergents"},
{num:6,symbol:"C",name:"Carbon",mass:"12.011",group:14,period:2,category:"nonmetal",config:"[He] 2s2 2p2",uses:"All organic compounds"},
{num:7,symbol:"N",name:"Nitrogen",mass:"14.007",group:15,period:2,category:"nonmetal",config:"[He] 2s2 2p3",uses:"Fertilizers, industrial"},
{num:8,symbol:"O",name:"Oxygen",mass:"15.999",group:16,period:2,category:"nonmetal",config:"[He] 2s2 2p4",uses:"Respiration, combustion"},
{num:9,symbol:"F",name:"Fluorine",mass:"18.998",group:17,period:2,category:"halogen",config:"[He] 2s2 2p5",uses:"Toothpaste, refrigeration"},
{num:10,symbol:"Ne",name:"Neon",mass:"20.180",group:18,period:2,category:"noble",config:"[He] 2s2 2p6",uses:"Neon signs"},
{num:11,symbol:"Na",name:"Sodium",mass:"22.990",group:1,period:3,category:"alkali",config:"[Ne] 3s1",uses:"Salt, chemicals"},
{num:12,symbol:"Mg",name:"Magnesium",mass:"24.305",group:2,period:3,category:"alkaline",config:"[Ne] 3s2",uses:"Alloys, medicine"},
{num:13,symbol:"Al",name:"Aluminium",mass:"26.982",group:13,period:3,category:"post-transition",config:"[Ne] 3s2 3p1",uses:"Foil, construction"},
{num:14,symbol:"Si",name:"Silicon",mass:"28.085",group:14,period:3,category:"metalloid",config:"[Ne] 3s2 3p2",uses:"Electronics, glass"},
{num:15,symbol:"P",name:"Phosphorus",mass:"30.974",group:15,period:3,category:"nonmetal",config:"[Ne] 3s2 3p3",uses:"Fertilizers, matches"},
{num:16,symbol:"S",name:"Sulfur",mass:"32.06",group:16,period:3,category:"nonmetal",config:"[Ne] 3s2 3p4",uses:"Sulfuric acid, vulcanization"},
{num:17,symbol:"Cl",name:"Chlorine",mass:"35.45",group:17,period:3,category:"halogen",config:"[Ne] 3s2 3p5",uses:"Disinfectant, PVC"},
{num:18,symbol:"Ar",name:"Argon",mass:"39.948",group:18,period:3,category:"noble",config:"[Ne] 3s2 3p6",uses:"Inert gas, welding"},
{num:19,symbol:"K",name:"Potassium",mass:"39.098",group:1,period:4,category:"alkali",config:"[Ar] 4s1",uses:"Fertilizers, soaps"},
{num:20,symbol:"Ca",name:"Calcium",mass:"40.078",group:2,period:4,category:"alkaline",config:"[Ar] 4s2",uses:"Bones, cement"},
{num:21,symbol:"Sc",name:"Scandium",mass:"44.956",group:3,period:4,category:"transition",config:"[Ar] 3d1 4s2",uses:"Alloys, lamps"},
{num:22,symbol:"Ti",name:"Titanium",mass:"47.867",group:4,period:4,category:"transition",config:"[Ar] 3d2 4s2",uses:"Aerospace, implants"},
{num:23,symbol:"V",name:"Vanadium",mass:"50.942",group:5,period:4,category:"transition",config:"[Ar] 3d3 4s2",uses:"Steel alloys"},
{num:24,symbol:"Cr",name:"Chromium",mass:"51.996",group:6,period:4,category:"transition",config:"[Ar] 3d5 4s1",uses:"Plating, stainless steel"},
{num:25,symbol:"Mn",name:"Manganese",mass:"54.938",group:7,period:4,category:"transition",config:"[Ar] 3d5 4s2",uses:"Steelmaking, batteries"},
{num:26,symbol:"Fe",name:"Iron",mass:"55.845",group:8,period:4,category:"transition",config:"[Ar] 3d6 4s2",uses:"Construction, tools"},
{num:27,symbol:"Co",name:"Cobalt",mass:"58.933",group:9,period:4,category:"transition",config:"[Ar] 3d7 4s2",uses:"Batteries, pigments"},
{num:28,symbol:"Ni",name:"Nickel",mass:"58.693",group:10,period:4,category:"transition",config:"[Ar] 3d8 4s2",uses:"Alloys, coins"},
{num:29,symbol:"Cu",name:"Copper",mass:"63.546",group:11,period:4,category:"transition",config:"[Ar] 3d10 4s1",uses:"Wiring, pipes"},
{num:30,symbol:"Zn",name:"Zinc",mass:"65.38",group:12,period:4,category:"transition",config:"[Ar] 3d10 4s2",uses:"Galvanizing, alloys"},
{num:31,symbol:"Ga",name:"Gallium",mass:"69.723",group:13,period:4,category:"post-transition",config:"[Ar] 3d10 4s2 4p1",uses:"Electronics, semiconductors"},
{num:32,symbol:"Ge",name:"Germanium",mass:"72.63",group:14,period:4,category:"metalloid",config:"[Ar] 3d10 4s2 4p2",uses:"Semiconductors, optics"},
{num:33,symbol:"As",name:"Arsenic",mass:"74.922",group:15,period:4,category:"metalloid",config:"[Ar] 3d10 4s2 4p3",uses:"Alloys, pesticides"},
{num:34,symbol:"Se",name:"Selenium",mass:"78.971",group:16,period:4,category:"nonmetal",config:"[Ar] 3d10 4s2 4p4",uses:"Electronics, glass"},
{num:35,symbol:"Br",name:"Bromine",mass:"79.904",group:17,period:4,category:"halogen",config:"[Ar] 3d10 4s2 4p5",uses:"Flame retardants, photography"},
{num:36,symbol:"Kr",name:"Krypton",mass:"83.798",group:18,period:4,category:"noble",config:"[Ar] 3d10 4s2 4p6",uses:"Lighting, lasers"},
{num:37,symbol:"Rb",name:"Rubidium",mass:"85.468",group:1,period:5,category:"alkali",config:"[Kr] 5s1",uses:"Research, electronics"},
{num:38,symbol:"Sr",name:"Strontium",mass:"87.62",group:2,period:5,category:"alkaline",config:"[Kr] 5s2",uses:"Fireworks, magnets"},
{num:39,symbol:"Y",name:"Yttrium",mass:"88.906",group:3,period:5,category:"transition",config:"[Kr] 4d1 5s2",uses:"LEDs, phosphors"},
{num:40,symbol:"Zr",name:"Zirconium",mass:"91.224",group:4,period:5,category:"transition",config:"[Kr] 4d2 5s2",uses:"Alloys, nuclear reactors"},
{num:41,symbol:"Nb",name:"Niobium",mass:"92.906",group:5,period:5,category:"transition",config:"[Kr] 4d4 5s1",uses:"Superalloys, electronics"},
{num:42,symbol:"Mo",name:"Molybdenum",mass:"95.95",group:6,period:5,category:"transition",config:"[Kr] 4d5 5s1",uses:"Alloys, catalysts"},
{num:43,symbol:"Tc",name:"Technetium",mass:"98",group:7,period:5,category:"transition",config:"[Kr] 4d5 5s2",uses:"Medical imaging"},
{num:44,symbol:"Ru",name:"Ruthenium",mass:"101.07",group:8,period:5,category:"transition",config:"[Kr] 4d7 5s1",uses:"Electronics, alloys"},
{num:45,symbol:"Rh",name:"Rhodium",mass:"102.91",group:9,period:5,category:"transition",config:"[Kr] 4d8 5s1",uses:"Catalysts, jewelry"},
{num:46,symbol:"Pd",name:"Palladium",mass:"106.42",group:10,period:5,category:"transition",config:"[Kr] 4d10",uses:"Catalysts, electronics"},
{num:47,symbol:"Ag",name:"Silver",mass:"107.87",group:11,period:5,category:"transition",config:"[Kr] 4d10 5s1",uses:"Jewelry, electronics"},
{num:48,symbol:"Cd",name:"Cadmium",mass:"112.41",group:12,period:5,category:"transition",config:"[Kr] 4d10 5s2",uses:"Batteries, pigments"},
{num:49,symbol:"In",name:"Indium",mass:"114.82",group:13,period:5,category:"post-transition",config:"[Kr] 4d10 5s2 5p1",uses:"Electronics, coatings"},
{num:50,symbol:"Sn",name:"Tin",mass:"118.71",group:14,period:5,category:"post-transition",config:"[Kr] 4d10 5s2 5p2",uses:"Solder, alloys"},

{num:51,symbol:"Sb",name:"Antimony",mass:"121.76",group:15,period:5,category:"metalloid",config:"[Kr] 4d10 5s2 5p3",uses:"Alloys, flame retardants"},
{num:52,symbol:"Te",name:"Tellurium",mass:"127.60",group:16,period:5,category:"metalloid",config:"[Kr] 4d10 5s2 5p4",uses:"Alloys, semiconductors"},
{num:53,symbol:"I",name:"Iodine",mass:"126.90",group:17,period:5,category:"halogen",config:"[Kr] 4d10 5s2 5p5",uses:"Disinfectants, medicine"},
{num:54,symbol:"Xe",name:"Xenon",mass:"131.29",group:18,period:5,category:"noble",config:"[Kr] 4d10 5s2 5p6",uses:"Lighting, anesthesia"},
{num:55,symbol:"Cs",name:"Caesium",mass:"132.91",group:1,period:6,category:"alkali",config:"[Xe] 6s1",uses:"Atomic clocks, electronics"},
{num:56,symbol:"Ba",name:"Barium",mass:"137.33",group:2,period:6,category:"alkaline",config:"[Xe] 6s2",uses:"Fireworks, X-ray contrast"},
{num:57,symbol:"La",name:"Lanthanum",mass:"138.91",group:3,period:6,category:"lanthanide",config:"[Xe] 5d1 6s2",uses:"Optics, batteries"},
{num:58,symbol:"Ce",name:"Cerium",mass:"140.12",group:null,period:6,category:"lanthanide",config:"[Xe] 4f1 5d1 6s2",uses:"Catalysts, glass polishing"},
{num:59,symbol:"Pr",name:"Praseodymium",mass:"140.91",group:null,period:6,category:"lanthanide",config:"[Xe] 4f3 6s2",uses:"Magnets, alloys"},
{num:60,symbol:"Nd",name:"Neodymium",mass:"144.24",group:null,period:6,category:"lanthanide",config:"[Xe] 4f4 6s2",uses:"Magnets, lasers"},
{num:61,symbol:"Pm",name:"Promethium",mass:"145",group:null,period:6,category:"lanthanide",config:"[Xe] 4f5 6s2",uses:"Nuclear batteries"},
{num:62,symbol:"Sm",name:"Samarium",mass:"150.36",group:null,period:6,category:"lanthanide",config:"[Xe] 4f6 6s2",uses:"Magnets, lasers"},
{num:63,symbol:"Eu",name:"Europium",mass:"151.96",group:null,period:6,category:"lanthanide",config:"[Xe] 4f7 6s2",uses:"Red phosphors, lighting"},
{num:64,symbol:"Gd",name:"Gadolinium",mass:"157.25",group:null,period:6,category:"lanthanide",config:"[Xe] 4f7 5d1 6s2",uses:"MRI contrast, magnets"},
{num:65,symbol:"Tb",name:"Terbium",mass:"158.93",group:null,period:6,category:"lanthanide",config:"[Xe] 4f9 6s2",uses:"Green phosphors, magnets"},
{num:66,symbol:"Dy",name:"Dysprosium",mass:"162.50",group:null,period:6,category:"lanthanide",config:"[Xe] 4f10 6s2",uses:"Magnets, nuclear reactors"},
{num:67,symbol:"Ho",name:"Holmium",mass:"164.93",group:null,period:6,category:"lanthanide",config:"[Xe] 4f11 6s2",uses:"Magnets, lasers"},
{num:68,symbol:"Er",name:"Erbium",mass:"167.26",group:null,period:6,category:"lanthanide",config:"[Xe] 4f12 6s2",uses:"Lasers, nuclear technology"},
{num:69,symbol:"Tm",name:"Thulium",mass:"168.93",group:null,period:6,category:"lanthanide",config:"[Xe] 4f13 6s2",uses:"Lasers, X-ray devices"},
{num:70,symbol:"Yb",name:"Ytterbium",mass:"173.05",group:null,period:6,category:"lanthanide",config:"[Xe] 4f14 6s2",uses:"Lasers, atomic clocks"},
{num:71,symbol:"Lu",name:"Lutetium",mass:"174.97",group:3,period:6,category:"lanthanide",config:"[Xe] 4f14 5d1 6s2",uses:"Catalysts, PET scanners"},
{num:72,symbol:"Hf",name:"Hafnium",mass:"178.49",group:4,period:6,category:"transition",config:"[Xe] 4f14 5d2 6s2",uses:"Alloys, nuclear reactors"},
{num:73,symbol:"Ta",name:"Tantalum",mass:"180.95",group:5,period:6,category:"transition",config:"[Xe] 4f14 5d3 6s2",uses:"Capacitors, alloys"},
{num:74,symbol:"W",name:"Tungsten",mass:"183.84",group:6,period:6,category:"transition",config:"[Xe] 4f14 5d4 6s2",uses:"Filaments, alloys"},
{num:75,symbol:"Re",name:"Rhenium",mass:"186.21",group:7,period:6,category:"transition",config:"[Xe] 4f14 5d5 6s2",uses:"Alloys, catalysts"},
{num:76,symbol:"Os",name:"Osmium",mass:"190.23",group:8,period:6,category:"transition",config:"[Xe] 4f14 5d6 6s2",uses:"Alloys, fountain pens"},
{num:77,symbol:"Ir",name:"Iridium",mass:"192.22",group:9,period:6,category:"transition",config:"[Xe] 4f14 5d7 6s2",uses:"Electronics, crucibles"},
{num:78,symbol:"Pt",name:"Platinum",mass:"195.08",group:10,period:6,category:"transition",config:"[Xe] 4f14 5d9 6s1",uses:"Catalysts, jewelry"},
{num:79,symbol:"Au",name:"Gold",mass:"196.97",group:11,period:6,category:"transition",config:"[Xe] 4f14 5d10 6s1",uses:"Jewelry, electronics"},
{num:80,symbol:"Hg",name:"Mercury",mass:"200.59",group:12,period:6,category:"transition",config:"[Xe] 4f14 5d10 6s2",uses:"Thermometers, lighting"},
{num:81,symbol:"Tl",name:"Thallium",mass:"204.38",group:13,period:6,category:"post-transition",config:"[Xe] 4f14 5d10 6s2 6p1",uses:"Electronics, alloys"},
{num:82,symbol:"Pb",name:"Lead",mass:"207.2",group:14,period:6,category:"post-transition",config:"[Xe] 4f14 5d10 6s2 6p2",uses:"Batteries, shielding"},
{num:83,symbol:"Bi",name:"Bismuth",mass:"208.98",group:15,period:6,category:"post-transition",config:"[Xe] 4f14 5d10 6s2 6p3",uses:"Alloys, medicine"},
{num:84,symbol:"Po",name:"Polonium",mass:"209",group:16,period:6,category:"metalloid",config:"[Xe] 4f14 5d10 6s2 6p4",uses:"Radioactive sources"},
{num:85,symbol:"At",name:"Astatine",mass:"210",group:17,period:6,category:"halogen",config:"[Xe] 4f14 5d10 6s2 6p5",uses:"Research, radioactive studies"},
{num:86,symbol:"Rn",name:"Radon",mass:"222",group:18,period:6,category:"noble",config:"[Xe] 4f14 5d10 6s2 6p6",uses:"Radiotherapy, research"},
{num:87,symbol:"Fr",name:"Francium",mass:"223",group:1,period:7,category:"alkali",config:"[Rn] 7s1",uses:"Research, very rare"},
{num:88,symbol:"Ra",name:"Radium",mass:"226",group:2,period:7,category:"alkaline",config:"[Rn] 7s2",uses:"Radiotherapy, luminescent paints"},
{num:89,symbol:"Ac",name:"Actinium",mass:"227",group:3,period:7,category:"actinide",config:"[Rn] 6d1 7s2",uses:"Research, radiation sources"},
{num:90,symbol:"Th",name:"Thorium",mass:"232.04",group:null,period:7,category:"actinide",config:"[Rn] 6d2 7s2",uses:"Nuclear fuel, alloys"},
{num:91,symbol:"Pa",name:"Protactinium",mass:"231.04",group:null,period:7,category:"actinide",config:"[Rn] 5f2 6d1 7s2",uses:"Research"},
{num:92,symbol:"U",name:"Uranium",mass:"238.03",group:null,period:7,category:"actinide",config:"[Rn] 5f3 6d1 7s2",uses:"Nuclear fuel, weapons"},
{num:93,symbol:"Np",name:"Neptunium",mass:"237",group:null,period:7,category:"actinide",config:"[Rn] 5f4 6d1 7s2",uses:"Research, nuclear"},
{num:94,symbol:"Pu",name:"Plutonium",mass:"244",group:null,period:7,category:"actinide",config:"[Rn] 5f6 7s2",uses:"Nuclear fuel, weapons"},
{num:95,symbol:"Am",name:"Americium",mass:"243",group:null,period:7,category:"actinide",config:"[Rn] 5f7 7s2",uses:"Smoke detectors"},
{num:96,symbol:"Cm",name:"Curium",mass:"247",group:null,period:7,category:"actinide",config:"[Rn] 5f7 6d1 7s2",uses:"Research, radioisotopes"},
{num:97,symbol:"Bk",name:"Berkelium",mass:"247",group:null,period:7,category:"actinide",config:"[Rn] 5f9 7s2",uses:"Research"},
{num:98,symbol:"Cf",name:"Californium",mass:"251",group:null,period:7,category:"actinide",config:"[Rn] 5f10 7s2",uses:"Neutron sources"},
{num:99,symbol:"Es",name:"Einsteinium",mass:"252",group:null,period:7,category:"actinide",config:"[Rn] 5f11 7s2",uses:"Research"},
{num:100,symbol:"Fm",name:"Fermium",mass:"257",group:null,period:7,category:"actinide",config:"[Rn] 5f12 7s2",uses:"Research"},
{num:101,symbol:"Md",name:"Mendelevium",mass:"258",group:null,period:7,category:"actinide",config:"[Rn] 5f13 7s2",uses:"Research"},
{num:102,symbol:"No",name:"Nobelium",mass:"259",group:null,period:7,category:"actinide",config:"[Rn] 5f14 7s2",uses:"Research"},
{num:103,symbol:"Lr",name:"Lawrencium",mass:"262",group:3,period:7,category:"actinide",config:"[Rn] 5f14 7s2 7p1",uses:"Research"},
{num:104,symbol:"Rf",name:"Rutherfordium",mass:"267",group:4,period:7,category:"transition",config:"[Rn] 5f14 6d2 7s2",uses:"Research"},
{num:105,symbol:"Db",name:"Dubnium",mass:"270",group:5,period:7,category:"transition",config:"[Rn] 5f14 6d3 7s2",uses:"Research"},
{num:106,symbol:"Sg",name:"Seaborgium",mass:"271",group:6,period:7,category:"transition",config:"[Rn] 5f14 6d4 7s2",uses:"Research"},
{num:107,symbol:"Bh",name:"Bohrium",mass:"270",group:7,period:7,category:"transition",config:"[Rn] 5f14 6d5 7s2",uses:"Research"},
{num:108,symbol:"Hs",name:"Hassium",mass:"277",group:8,period:7,category:"transition",config:"[Rn] 5f14 6d6 7s2",uses:"Research"},
{num:109,symbol:"Mt",name:"Meitnerium",mass:"278",group:9,period:7,category:"transition",config:"[Rn] 5f14 6d7 7s2",uses:"Research"},
{num:110,symbol:"Ds",name:"Darmstadtium",mass:"281",group:10,period:7,category:"transition",config:"[Rn] 5f14 6d10 7s1",uses:"Research"},
{num:111,symbol:"Rg",name:"Roentgenium",mass:"282",group:11,period:7,category:"transition",config:"[Rn] 5f14 6d10 7s1",uses:"Research"},
{num:112,symbol:"Cn",name:"Copernicium",mass:"285",group:12,period:7,category:"transition",config:"[Rn] 5f14 6d10 7s2",uses:"Research"},
{num:113,symbol:"Nh",name:"Nihonium",mass:"286",group:13,period:7,category:"post-transition",config:"[Rn] 5f14 6d10 7s2 7p1",uses:"Research"},
{num:114,symbol:"Fl",name:"Flerovium",mass:"289",group:14,period:7,category:"post-transition",config:"[Rn] 5f14 6d10 7s2 7p2",uses:"Research"},
{num:115,symbol:"Mc",name:"Moscovium",mass:"290",group:15,period:7,category:"post-transition",config:"[Rn] 5f14 6d10 7s2 7p3",uses:"Research"},
{num:116,symbol:"Lv",name:"Livermorium",mass:"293",group:16,period:7,category:"post-transition",config:"[Rn] 5f14 6d10 7s2 7p4",uses:"Research"},
{num:117,symbol:"Ts",name:"Tennessine",mass:"294",group:17,period:7,category:"halogen",config:"[Rn] 5f14 6d10 7s2 7p5",uses:"Research"},
{num:118,symbol:"Og",name:"Oganesson",mass:"294",group:18,period:7,category:"noble",config:"[Rn] 5f14 6d10 7s2 7p6",uses:"Research"}

];

const categoryClass = cat => cat || '';

const table = document.getElementById('table');
elements.forEach(el => {
const div = document.createElement('div');
div.className = 'element ' + categoryClass(el.category);
div.dataset.num = el.num;
div.dataset.symbol = el.symbol.toLowerCase();
div.dataset.name = el.name.toLowerCase();
div.dataset.category = el.category;
div.innerHTML =   <div class="top"><div class="num">${el.num}</div><div class="mass">${el.mass}</div></div>   <div class="symbol">${el.symbol}</div>   <div class="nameSmall">${el.name}</div>  ;
div.addEventListener('click',()=>openPopup(el));
table.appendChild(div);
});

// Search & filter
document.getElementById('search').addEventListener('input', applyFilters);
document.getElementById('filter').addEventListener('change', applyFilters);
function applyFilters(){
const q = document.getElementById('search').value.toLowerCase();
const cat = document.getElementById('filter').value;
document.querySelectorAll('.element').forEach(el=>{
const matchesQuery = !q || el.dataset.name.includes(q) || el.dataset.symbol.includes(q) || el.dataset.num===q;
const matchesCat = cat==='all' || el.dataset.category===cat;
el.style.display = (matchesQuery && matchesCat) ? 'flex' : 'none';
});
}

// Popup
const popup=document.getElementById('popup');
const pName=document.getElementById('pName');
const pSymbolNum=document.getElementById('pSymbolNum');
const pMass=document.getElementById('pMass');
const pGroup=document.getElementById('pGroup');
const pConfig=document.getElementById('pConfig');
const pUses=document.getElementById('pUses');
const close=document.getElementById('close');
function openPopup(el){
pName.textContent = ${el.name} (${el.symbol});
pSymbolNum.textContent = ${el.symbol} • Atomic number ${el.num};
pMass.textContent = Standard atomic mass: ${el.mass};
pGroup.textContent = Group: ${el.group || '-'}  |  Period: ${el.period};
pConfig.textContent = Electron configuration: ${el.config || '-'};
pUses.textContent = Uses / Notes: ${el.uses || '-'};
popup.style.display='flex';
}
close.addEventListener('click',()=>popup.style.display='none');
popup.addEventListener('click',(e)=>{if(e.target===popup)popup.style.display='none';});

// Theme toggle
document.getElementById('theme').addEventListener('click',()=>{
const root=document.documentElement;
root.setAttribute('data-theme', root.getAttribute('data-theme')==='dark'?'light':'dark');
});
