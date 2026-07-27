/* Grade 8 SST Study Guide — Single Page Application Engine */

function safeStorageGet(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : value;
  } catch (error) {
    return fallback;
  }
}

function safeStorageSet(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    // Ignore storage errors (e.g. restricted file:// context)
  }
}

function safeParseJson(value, fallback) {
  try {
    return JSON.parse(value);
  } catch (error) {
    return fallback;
  }
}

const STATE = {
  activeTab: 'home',
  syllabusMode: safeStorageGet('g8_sst_syllabus_mode', 'Term 1'),
  bookmarks: safeParseJson(safeStorageGet('g8_sst_bookmarks', '[]'), []),
  learnedFlashcards: safeParseJson(safeStorageGet('g8_sst_learned_fc', '[]'), []),
  quizHighScore: parseInt(safeStorageGet('g8_sst_quiz_score', '0'), 10),
  currentTopicIndex: 0,
  flashcardIndex: 0,
  flashcardFiltered: [],
  flashcardSelectedTopics: [],
  quizIndex: 0,
  quizScore: 0,
  quizUserAnswers: [],
  quizActiveQuestions: [],
  quizSelectedTopics: [],
  glossarySelectedLetters: [],
  searchQuery: ''
};

const TOPICS = [
  {
    id: 'ch1-nature-vs-resources',
    chapterId: 'natural-resources',
    chapterTitle: 'Natural Resources and Their Use',
    icon: '🌱',
    title: '1. Nature vs. Resources & The Human Utility Threshold',
    difficulty: 'Easy',
    readTime: '6 min',
    preview: 'Discover why Nature and Resources are not identical. Learn how human intelligence, technology, and needs transform raw elements of nature into valuable resources.',
    contentHtml: `<p>Everything you use in daily life—your clothes, school desk, smartphone, drinking water, and pencil—originally originated from <strong>Nature</strong>. However, Nature and Resources are not identical concepts in Social Science. Nature encompasses the physical universe, while resources represent elements that have been integrated into the human socio-economic matrix.</p>
          
          <div class="callout callout-definition">
            <div class="callout-title">📖 What is Nature?</div>
            <strong>Nature</strong> includes everything that exists on Earth naturally without human creation, including sunlight, air, water bodies, wild vegetation, minerals, and atmospheric gases.
          </div>

          <div class="callout callout-definition">
            <div class="callout-title">📖 What is a Resource?</div>
            A <strong>Resource</strong> is any feature of the physical environment that has proven utility, monetary or functional value, and the capacity to satisfy human needs, desires, and societal goals.
          </div>

          <h3>The Human Utility Threshold Rule</h3>
          <p>Substances in nature remain neutral material until human knowledge, scientific curiosity, and technical skill discover their utility. For example, crude petroleum lay beneath the Arabian Desert for millions of years as neutral nature. It transformed into 'Black Gold'—a critical global resource—only when human civilization invented the internal combustion engine and oil refining technology in the 19th century.</p>

          <div class="callout callout-important">
            <div class="callout-title">⭐ Core Principle of Resource Geography</div>
            <em>"Resources are not static things; they become resources through human perception, technological application, and economic need."</em> — Erich Zimmermann
          </div>

          <h3>Key Takeaways for Exam Revision</h3>
          <ul>
            <li><strong>Human Agency:</strong> Humans are the primary resource-creating agents. Without human intelligence, natural elements remain latent.</li>
            <li><strong>Value Dimensions:</strong> Value can be economic (minerals sold in markets), aesthetic (a beautiful waterfall), legal (clean air under environmental laws), or ethical (forest preservation).</li>
            <li><strong>Dynamic Nature:</strong> A substance can gain or lose resource status based on shifting technology and cultural preferences.</li>
          </ul>`
  },
  {
    id: 'ch1-conditions-transformation',
    chapterId: 'natural-resources',
    chapterTitle: 'Natural Resources and Their Use',
    icon: '⚡',
    title: '2. Three Mandatory Conditions for Resource Transformation',
    difficulty: 'Medium',
    readTime: '7 min',
    preview: 'Understand the three indispensable criteria required for any substance in nature to be classified as a resource: Technological Accessibility, Economic Feasibility, and Cultural Acceptability.',
    contentHtml: `<p>Not everything present in nature is automatically recognized as a resource. Economists, geographers, and environmental scientists establish three indispensable criteria that must be satisfied simultaneously before a natural substance can be classified as a viable resource.</p>

          <div class="formula-block">
            Resource Status = Natural Element + Technological Accessibility + Economic Feasibility + Cultural Acceptability
          </div>

          <h3>1. Technological Accessibility</h3>
          <p>Society must possess the scientific know-how, machinery, and technical tools to extract, refine, and harness the resource. For example, water ($H_2O$) consists of hydrogen and oxygen—two highly combustible and energy-dense gases. However, because we currently lack cost-effective, large-scale technology to separate hydrogen from water efficiently, ocean water cannot yet serve as a mainstream fuel resource.</p>

          <h3>2. Economic Feasibility</h3>
          <p>The cost of extracting and processing the substance must be significantly lower than the market value and social benefit derived from it. If extracting $100 worth of gold requires $10,000 worth of machinery and energy, the deposit is economically unfeasible and cannot be classified as a commercial resource.</p>

          <h3>3. Cultural Acceptability</h3>
          <p>The extraction and usage of the resource must align with societal norms, legal frameworks, and ethical guidelines. For instance, mining in sacred groves, protected national parks, or indigenous heritage sites may be technologically possible and economically profitable, but cultural and environmental laws prohibit it, making it unviable.</p>

          <div class="callout callout-observation">
            <div class="callout-title">💡 Memory Trick: The TEC Rule</div>
            Remember <strong>TEC</strong> for Resource Status:
            <br>• <strong>T</strong> – Technological Accessibility (Tools & Science available?)
            <br>• <strong>E</strong> – Economic Feasibility (Profitable & Cost-effective?)
            <br>• <strong>C</strong> – Cultural Acceptability (Legal & Ethically approved?)
          </div>`
  },
  {
    id: 'ch1-classification-resources',
    chapterId: 'natural-resources',
    chapterTitle: 'Natural Resources and Their Use',
    icon: '📊',
    title: '3. Comprehensive Classification of Natural Resources',
    difficulty: 'Medium',
    readTime: '8 min',
    preview: 'Master the multi-dimensional classification of natural resources based on origin, exhaustibility, development stage, and ownership.',
    contentHtml: `<p>To systematically manage and conserve Earth's wealth, geographers categorize resources across four major criteria: Origin, Exhaustibility, Ownership, and Status of Development.</p>

          <h3>1. Based on Origin</h3>
          <ul>
            <li><strong>Biotic Resources:</strong> Derived from the biosphere and possess life. Examples include forests, agricultural crops, livestock, wildlife, and marine organisms.</li>
            <li><strong>Abiotic Resources:</strong> Composed of non-living inorganic matter. Examples include rocks, land, water, minerals, and atmospheric gases.</li>
          </ul>

          <h3>2. Based on Exhaustibility</h3>
          <ul>
            <li><strong>Renewable Resources:</strong> Resources that can be replenished or reproduced naturally through physical, chemical, or biological cycles within a human timeframe (e.g., solar energy, wind power, groundwater, forests).</li>
            <li><strong>Non-Renewable Resources:</strong> Resources that take millions of geological years to form. Their supply is finite, and once extracted, they are exhausted permanently (e.g., coal, crude oil, iron ore, uranium).</li>
          </ul>

          <h3>3. Based on Ownership</h3>
          <ul>
            <li><strong>Individual Resources:</strong> Privately owned by individuals (e.g., farmland, houses, private wells).</li>
            <li><strong>Community Resources:</strong> Accessible to all members of a community (e.g., village grazing grounds, public parks, burial grounds).</li>
            <li><strong>National Resources:</strong> All resources within a nation's political boundaries and territorial seas extending up to 12 nautical miles ($22.2\text{ km}$) from the coast.</li>
            <li><strong>International Resources:</strong> Regulated by international bodies outside national boundaries, such as oceanic waters beyond 200 nautical miles of the Exclusive Economic Zone (EEZ).</li>
          </ul>

          <h3>4. Based on Status of Development</h3>
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Definition</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Potential</strong></td>
                <td>Found in a region but not yet utilized due to lack of investment/infrastructure.</td>
                <td>Solar & Wind energy in Rajasthan & Gujarat deserts.</td>
              </tr>
              <tr>
                <td><strong>Developed</strong></td>
                <td>Surveyed, quantity & quality determined, actively utilized.</td>
                <td>Jharia Coal mines, Bhakra Nangal Hydro project.</td>
              </tr>
              <tr>
                <td><strong>Stock</strong></td>
                <td>Have potential to satisfy human needs, but humans lack technology to tap them.</td>
                <td>Hydrogen extraction from ocean water.</td>
              </tr>
              <tr>
                <td><strong>Reserves</strong></td>
                <td>Subset of stock which can be put into use with existing technology, kept for future.</td>
                <td>Water stored in dams for future hydroelectric generation.</td>
              </tr>
            </tbody>
          </table>`
  },
  {
    id: 'ch1-renewable-sustainability',
    chapterId: 'natural-resources',
    chapterTitle: 'Natural Resources and Their Use',
    icon: '♻️',
    title: '4. Ecosystem Services & Sustainable Resource Management',
    difficulty: 'Hard',
    readTime: '8 min',
    preview: 'Explore vital ecosystem services provided by Nature, the consequences of resource over-exploitation, and sustainable conservation strategies.',
    contentHtml: `<p>Ecosystem services represent the fundamental life-support systems and environmental benefits provided by nature that make human civilization possible. Over-exploitation of these natural capital stocks leads to irreversible ecological degradation.</p>

          <h3>The 4 Pillars of Ecosystem Services</h3>
          <ul>
            <li><strong>Provisioning Services:</strong> Tangible materials extracted directly from nature, such as food crops, drinking water, timber, fuelwood, medicinal plants, and industrial fibers.</li>
            <li><strong>Regulating Services:</strong> Natural mechanisms that maintain planetary equilibrium, such as climate regulation by rainforests, flood control by wetlands, water filtration by aquifers, and crop pollination by insects.</li>
            <li><strong>Supporting Services:</strong> Fundamental biological and physical processes that sustain all life, including soil formation, nutrient cycling (nitrogen/carbon cycles), and photosynthesis.</li>
            <li><strong>Cultural Services:</strong> Non-material aesthetic, spiritual, educational, and recreational benefits derived from natural landscapes.</li>
          </ul>

          <div class="callout callout-important">
            <div class="callout-title">🌿 Sustainable Development Definition</div>
            <strong>Sustainable Development</strong> is development that meets the economic and social needs of the present generation without compromising the ability of future generations to meet their own needs. It requires balancing economic growth, social inclusion, and environmental protection.
          </div>

          <h3>The 3R Strategy for Resource Conservation</h3>
          <p>To prevent resource depletion, environmentalists emphasize the <strong>3Rs Principle</strong>:</p>
          <ol>
            <li><strong>Reduce:</strong> Minimizing consumption and avoiding wasteful usage of electricity, water, and raw materials.</li>
            <li><strong>Reuse:</strong> Utilizing items multiple times for their original or alternative purposes instead of discarding them immediately.</li>
            <li><strong>Recycle:</strong> Processing waste materials (paper, glass, metals, plastics) into new raw materials for manufacturing.</li>
          </ol>`
  },
  {
    id: 'ch1-soil-resources-profile',
    chapterId: 'natural-resources',
    chapterTitle: 'Natural Resources and Their Use',
    icon: '🏜️',
    title: '5. Soil Resources of India, Soil Profiles & Land Degradation',
    difficulty: 'Medium',
    readTime: '8 min',
    preview: 'Explore India\'s 6 major soil types, soil horizon profile layers (O, A, B, C, R), and causes of soil erosion and land degradation.',
    contentHtml: `<p>Soil is a complex, living abiotic natural resource forming the thin top layer of the Earth's crust. It acts as the primary medium for plant growth, agriculture, and terrestrial ecosystem stability. It takes hundreds to thousands of years to form just one centimeter of fertile topsoil.</p>

          <h3>Soil Profile Horizons</h3>
          <p>A vertical cross-section of soil reveals distinct layers called <strong>Horizons</strong>:</p>
          <ul>
            <li><strong>O Horizon (Organic Layer):</strong> Top layer dominated by fresh and decomposing organic leaf litter and humus.</li>
            <li><strong>A Horizon (Topsoil):</strong> Fertile dark layer rich in decomposed organic matter (humus) and living organisms (earthworms, bacteria). Crucial for plant root growth.</li>
            <li><strong>B Horizon (Subsoil):</strong> Weathered mineral layer accumulating fine clay particles, iron oxides, and soluble minerals leached down from topsoil.</li>
            <li><strong>C Horizon (Parent Material):</strong> Partially weathered parent rock fragments devoid of organic humus.</li>
            <li><strong>R Horizon (Bedrock):</strong> Unweathered solid parent bedrock forming the base.</li>
          </ul>

          <h3>Major Soil Types of India</h3>
          <table>
            <thead>
              <tr>
                <th>Soil Type</th>
                <th>Distribution Region</th>
                <th>Key Characteristics & Suitable Crops</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Alluvial Soil</strong></td>
                <td>Northern Plains (Indus-Ganga-Brahmaputra), Coastal Deltas.</td>
                <td>Most fertile, rich in potash and lime. Divided into <em>Bhangar</em> (old, kankar-rich) & <em>Khadar</em> (new, fine silty). Crops: Rice, Wheat, Sugarcane.</td>
              </tr>
              <tr>
                <td><strong>Black (Regur) Soil</strong></td>
                <td>Deccan Trap Plateau (Maharashtra, MP, Gujarat).</td>
                <td>Volcanic basalt origin, high clay content, deep cracks in summer aiding aeration. Self-ploughing nature. Crops: Cotton, Soybean.</td>
              </tr>
              <tr>
                <td><strong>Red & Yellow Soil</strong></td>
                <td>Deccan Plateau east & south (Odisha, Chhattisgarh).</td>
                <td>Reddish color due to diffusion of iron in crystalline/metamorphic rocks. Hydrated form turns yellow. Crops: Millets, Pulses.</td>
              </tr>
              <tr>
                <td><strong>Laterite Soil</strong></td>
                <td>Western Ghats, Meghalaya Hills.</td>
                <td>Formed under intense tropical leaching due to heavy rainfall. Low humus. Crops: Cashew, Tea, Coffee with heavy manuring.</td>
              </tr>
              <tr>
                <td><strong>Arid / Desert Soil</strong></td>
                <td>Western Rajasthan.</td>
                <td>Sandy texture, saline, lacking organic humus and moisture. High salt content. Crops: Barley, Bajra under irrigation.</td>
              </tr>
            </tbody>
          </table>`
  },
  {
    id: 'ch1-water-resources-watershed',
    chapterId: 'natural-resources',
    chapterTitle: 'Natural Resources and Their Use',
    icon: '💧',
    title: '6. Water Resources, Groundwater Aquifers & Watershed Management',
    difficulty: 'Medium',
    readTime: '8 min',
    preview: 'Examine water distribution, groundwater aquifer depletion, rainwater harvesting models, and community watershed management.',
    contentHtml: `<p>Water covers approximately 71% of Earth's surface, but 97.5% is saline ocean water. Freshwater makes up only 2.5%, with nearly 70% locked in polar glaciers and ice caps. Less than 1% of total freshwater is easily accessible for human consumption in rivers, lakes, and shallow aquifers.</p>

          <div class="callout callout-important">
            <div class="callout-title">⚠️ India's Groundwater Crisis</div>
            India extracts over 250 cubic kilometers of groundwater annually—more than China and the United States combined. Over 60% of irrigated agriculture and 85% of drinking water depend on groundwater, causing severe aquifer depletion in Punjab, Haryana, and Tamil Nadu.
          </div>

          <h3>Traditional & Modern Rainwater Harvesting Systems</h3>
          <ul>
            <li><strong>Johads (Rajasthan):</strong> Small earthen check dams built across natural contour slopes to capture monsoon runoff and recharge sub-surface aquifers.</li>
            <li><strong>Taankas (Thar Desert):</strong> Underground covered storage tanks constructed inside courtyards to collect pristine rooftop rainwater for drinking during dry summers.</li>
            <li><strong>Guls / Kuls (Western Himalayas):</strong> Diversion channels built along mountain slopes to carry glacial meltwater to agricultural fields.</li>
            <li><strong>Bambo Drip Irrigation (Meghalaya):</strong> 200-year-old system using bamboo pipes to transport stream water to hilltop betel-nut crops.</li>
          </ul>

          <h3>Community Watershed Management: Case Study</h3>
          <p>In <strong>Ralegan Siddhi</strong> (Ahmednagar, Maharashtra), village leader Anna Hazare spearheaded a watershed development project building contour trenches, check dams, and continuous contour bunds. This restored the local water table, turning a drought-stricken village into a self-sufficient green agricultural economy.</p>`
  },
  {
    id: 'ch1-mineral-belts-metallurgy',
    chapterId: 'natural-resources',
    chapterTitle: 'Natural Resources and Their Use',
    icon: '⛏️',
    title: '7. Metallic & Non-Metallic Mineral Belts of India',
    difficulty: 'Hard',
    readTime: '9 min',
    preview: 'Discover India\'s rich mineral belts, metallic ores (Iron, Bauxite, Manganese), non-metallic minerals (Mica, Limestone), and rare Thorium sands.',
    contentHtml: `<p>Minerals are naturally occurring inorganic substances with a definite chemical composition and crystalline structure. India's ancient geological plate tectonic history endows it with diverse, rich mineral deposits distributed across three major peninsular belts.</p>

          <div class="callout callout-definition">
            <div class="callout-title">📖 The Mineral Storehouse of India</div>
            The <strong>Chota Nagpur Plateau</strong> (covering Jharkhand, Odisha, Chhattisgarh, and West Bengal) is known as the <em>'Ruhr of India'</em> because it contains over 80% of India's high-grade coal, iron ore, manganese, bauxite, and mica reserves.
          </div>

          <h3>3 Primary Mineral Belts of India</h3>
          <ol>
            <li><strong>North-Eastern Peninsular Belt:</strong> Chota Nagpur Plateau & Odisha Plateau. Rich in Hematite Iron Ore, Coal (Gondwana fields of Raniganj & Jharia), Manganese, Bauxite, and Mica.</li>
            <li><strong>South-Western Peninsular Belt:</strong> Karnataka Plateau & Goa. Rich in high-grade Magnetite Iron Ore (Kudremukh & Bellary-Chitradurga-Chikkamagaluru-Tumakuru belt), Bauxite, and Clay.</li>
            <li><strong>North-Western Belt:</strong> Aravalli Range (Rajasthan & Gujarat). Rich in non-ferrous metals like Copper (Khetri mines), Zinc, Lead, Sandstone, Granite, and Gypsum.</li>
          </ol>

          <h3>Key Metallic vs. Non-Metallic Minerals</h3>
          <ul>
            <li><strong>Iron Ore (Ferrous):</strong> Backbone of modern industry. High-grade ores are <em>Magnetite</em> (72% pure iron, magnetic properties) and <em>Hematite</em> (60-70% pure iron, most used industrially).</li>
            <li><strong>Bauxite (Non-Ferrous):</strong> Clay-like deposit from which <em>Alumina</em> and <em>Aluminum</em> are smelted. Lightweight, highly conductive, and corrosion-resistant.</li>
            <li><strong>Mica (Non-Metallic):</strong> Excellent dielectric strength, low power loss factor, and heat resistance. Essential for the electronics and electrical industry. Kodarma-Gaya-Hazaribagh belt in Jharkhand is the leading producer.</li>
            <li><strong>Monazite Sands (Strategic Atomic Mineral):</strong> Found along the coastal beach sands of Kerala, rich in <em>Thorium</em>—a vital fuel for India's 3-Stage Nuclear Power Program.</li>
          </ul>`
  },
  {
    id: 'ch1-energy-transition-renewable',
    chapterId: 'natural-resources',
    chapterTitle: 'Natural Resources and Their Use',
    icon: '☀️',
    title: '8. Energy Resources Transition: Fossil Fuels vs. Clean Renewable Power',
    difficulty: 'Medium',
    readTime: '8 min',
    preview: 'Analyze commercial fossil fuels (Coal, Petroleum, CNG) versus India\'s clean energy revolution (Solar PV, Wind power, Hydro, Geothermal, Biogas).',
    contentHtml: `<p>Energy is the indispensable catalyst for industrial manufacturing, agricultural pumping, transport networks, and commercial development. India is undergoing a massive structural transition from carbon-intensive commercial fossil fuels toward clean, zero-emission renewable energy grids.</p>

          <h3>Conventional Fossil Fuels</h3>
          <ul>
            <li><strong>Coal ('Buried Sunshine'):</strong> India's most abundant commercial energy fuel, accounting for over 55% of thermal electricity generation. Formed from dense swamp vegetation buried under high heat and pressure over 200 million years (Gondwana age). Types include Anthracite (highest carbon), Bituminous (commercial grade), Lignite (brown coal), and Peat.</li>
            <li><strong>Petroleum ('Black Gold'):</strong> Mined from sedimentary anticlines and fault traps. Major oilfields: <em>Mumbai High</em> (offshore), <em>Digboi</em> (Assam—India's oldest oil well), and <em>Ankleshwar</em> (Gujarat).</li>
            <li><strong>Natural Gas & CNG:</strong> Environmentally friendly alternative producing significantly lower carbon emissions. Transported via key pipelines like the $1,700\text{ km}$ Hazira-Vijaipur-Jagdishpur (HVJ) pipeline.</li>
          </ul>

          <h3>India's Renewable Clean Energy Revolution</h3>
          <div class="callout callout-observation">
            <div class="callout-title">💡 Mega Renewable Infrastructure Projects</div>
            <br>• <strong>Solar Power:</strong> <em>Bhadla Solar Park</em> in Rajasthan ($2,245\text{ MW}$) is one of the world's largest photovoltaic plants.
            <br>• <strong>Wind Energy:</strong> <em>Muppandal Wind Farm</em> in Kanyakumari, Tamil Nadu, harnesses strong coastal monsoon winds.
            <br>• <strong>Biogas (Gobar Gas):</strong> Decomposes organic cattle dung and crop residue anaerobically, producing methane for rural cooking and organic manure.
          </div>`
  },
    {
    id: "ch2-indus-valley-civilization",
    chapterId: "political-map",
    chapterTitle: "Reshaping India's Political Map",
    icon: "\ud83c\udfdb\ufe0f",
    title: "9. The Indus Valley Civilization (c. 3300\u20131300 BCE)",
    difficulty: "Medium",
    readTime: "12 min",
    preview: "Explore humanity's earliest urban civilization \u2014 city planning, drainage, Lothal dockyard, trade, script, and decline \u2014 written from first principles.",
    contentHtml: `<p>Long before the great empires of the Mauryas or the Mughals, one of humanity's earliest and most sophisticated urban civilizations flourished along the banks of the <strong>Indus River</strong> and its tributaries in northwestern South Asia. Known as the <strong>Indus Valley Civilization (IVC)</strong> — or <strong>Harappan Civilization</strong> — it covered an area larger than ancient Egypt and Mesopotamia combined.</p>

          <div class="callout callout-definition">
            <div class="callout-title">📖 What Was the Indus Valley Civilization?</div>
            A <strong>Bronze Age urban civilization</strong> (c. 3300–1300 BCE; Mature phase 2600–1900 BCE) famous for town planning, standardized brick ratios (1:2:4), covered street drainage, and extensive maritime trade with Mesopotamia.
          </div>

          <h3>Key Archaeological Sites</h3>
          <table>
            <thead>
              <tr><th>Site</th><th>Location</th><th>Key Discoveries & Significance</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Harappa</strong></td><td>Punjab, Pakistan</td><td>First site discovered (1826/1921); granaries, worker quarters, citadel mound</td></tr>
              <tr><td><strong>Mohenjo-daro</strong></td><td>Sindh, Pakistan</td><td>Great Bath, Great Granary, covered drainage, 'Priest-King' statue, Dancing Girl bronze</td></tr>
              <tr><td><strong>Lothal</strong></td><td>Gujarat, India</td><td>World's earliest known tidal dockyard; bead-making factory; fire altars</td></tr>
              <tr><td><strong>Dholavira</strong></td><td>Gujarat, India (Kutch)</td><td>Massive stone water reservoirs; stadium; signboard with Indus script (UNESCO site)</td></tr>
              <tr><td><strong>Kalibangan</strong></td><td>Rajasthan, India</td><td>Earliest ploughed agricultural field; fire altars suggesting ritual practices</td></tr>
            </tbody>
          </table>

          <div class="callout callout-tip">
            <div class="callout-title">💡 Exam Tip: Lothal Dockyard</div>
            Lothal's brick dockyard proves that the Harappans engaged in <strong>maritime sea trade</strong> across the Arabian Sea to the Persian Gulf and Mesopotamia (where Harappan seals are referred to as coming from <em>Meluhha</em>).
          </div>

          <h3>Cause → Event → Consequence Flow</h3>
          <ul>
            <li><strong>Cause:</strong> Annual Indus river silt deposits created fertile agricultural surplus →</li>
            <li><strong>Event:</strong> Development of planned cities, craft specialization, and international trade networks →</li>
            <li><strong>Consequence:</strong> Rise of South Asia's first urban civilization with high sanitation standards.</li>
          </ul>

          <h3>Decline & Transition</h3>
          <p>Around 1900 BCE, climate change, shifting monsoon rainfall, tectonic shifts altering river courses (drying of the Ghaggar-Hakra river), and droughts led to gradual urban de-population. People migrated eastward toward the Gangetic plains.</p>
          
          <div class="callout callout-important">
            <div class="callout-title">⏭️ Transition to Next Period</div>
            As the Indus cities declined, pastoral Indo-Aryan communities settled in the Punjab, composing Sanskrit hymns that ushered in the <strong>Vedic Period</strong>.
          </div>`
  },
  {
    id: "ch2-vedic-period",
    chapterId: "political-map",
    chapterTitle: "Reshaping India's Political Map",
    icon: "\ud83d\udcdc",
    title: "10. The Vedic Period (c. 1500\u2013600 BCE)",
    difficulty: "Medium",
    readTime: "12 min",
    preview: "Understand the transition from pastoral tribes in Sapta Sindhu to settled agricultural kingdoms in the Gangetic plains, the Varna system, and the Upanishads.",
    contentHtml: `<p>The <strong>Vedic Period</strong> is named after the <strong>Vedas</strong> — the oldest Sanskrit sacred texts of Hinduism. It spans two distinct phases: Early Vedic (Rig Vedic) and Later Vedic.</p>

          <div class="callout callout-definition">
            <div class="callout-title">📖 The Four Vedas</div>
            1. <strong>Rig Veda:</strong> Hymns of praise (oldest, c. 1500–1200 BCE)<br>
            2. <strong>Sama Veda:</strong> Musical chants for rituals<br>
            3. <strong>Yajur Veda:</strong> Sacrificial formulas and procedures<br>
            4. <strong>Atharva Veda:</strong> Spells, charms, and everyday medicine
          </div>

          <h3>Comparison: Early Vedic vs. Later Vedic Society</h3>
          <table>
            <thead><tr><th>Feature</th><th>Early Vedic (c. 1500–1000 BCE)</th><th>Later Vedic (c. 1000–600 BCE)</th></tr></thead>
            <tbody>
              <tr><td><strong>Geography</strong></td><td>Punjab (Sapta Sindhu)</td><td>Gangetic Plains (eastward expansion)</td></tr>
              <tr><td><strong>Economy</strong></td><td>Pastoral (cattle wealth)</td><td>Settled agriculture (iron ploughshare)</td></tr>
              <tr><td><strong>Polity</strong></td><td>Tribal chiefs (Rajan); assemblies (Sabha, Samiti)</td><td>Territorial kings (Janapadas); royal sacrifices (Ashvamedha)</td></tr>
              <tr><td><strong>Social Structure</strong></td><td>Fluid Varna based on occupation; women held rights</td><td>Rigid hereditary Varna system; decline in women's status</td></tr>
              <tr><td><strong>Religion</strong></td><td>Nature gods (Indra, Agni, Varuna); simple Yajna</td><td>Complex rituals; emergence of Upanishadic philosophy</td></tr>
            </tbody>
          </table>

          <div class="callout callout-observation">
            <div class="callout-title">🔍 Myth vs. Fact: The Varna System</div>
            <strong>Myth:</strong> The Varna system was always rigid and hereditary from its beginning.<br>
            <strong>Fact:</strong> In the Early Vedic period, Varna was flexible and based on choice of occupation. Rig Veda Hymn 9.112 states: <em>"I am a poet, my father is a physician, and my mother grinds grain."</em> It became rigid and birth-based only in the Later Vedic era.
          </div>

          <div class="callout callout-important">
            <div class="callout-title">⏭️ Transition to Next Period</div>
            By 600 BCE, settled agriculture and iron tools led to the growth of 16 territorial kingdoms called <strong>Mahajanapadas</strong>.
          </div>`
  },
  {
    id: "ch2-mahajanapadas-magadha",
    chapterId: "political-map",
    chapterTitle: "Reshaping India's Political Map",
    icon: "\u2694\ufe0f",
    title: "11. The Mahajanapadas & Rise of Magadha (c. 600\u2013321 BCE)",
    difficulty: "Medium",
    readTime: "11 min",
    preview: "Study the 16 great kingdoms, monarchies vs republics (Vajji), the rise of Magadha under Bimbisara and Ajatashatru, and the heterodox movements of Buddhism and Jainism.",
    contentHtml: `<p>By 600 BCE, northern India saw the emergence of <strong>sixteen Mahajanapadas</strong> (Great Kingdoms). This era witnessed intense rivalry for Gangetic dominance and a religious revolution.</p>

          <h3>Monarchies vs. Republics (Gana-Sanghas)</h3>
          <ul>
            <li><strong>Monarchies (Rajya):</strong> Hereditary kingship with centralized tax and standing armies. Examples: Magadha, Kosala, Avanti, Vatsa.</li>
            <li><strong>Republics (Gana-Sangha):</strong> Governed by oligarchic assemblies of clan elders. Examples: <strong>Vajji Confederacy</strong> (Lichchhavis), Malla, Shakya.</li>
          </ul>

          <h3>Why Magadha Rose to Supremacy</h3>
          <ul>
            <li><strong>Iron Ore Resources:</strong> Proximity to rich iron deposits in Jharkhand/Rajgir for weapons and tools.</li>
            <li><strong>Fertile Ganga Plain:</strong> High agricultural yield supported large armies and treasuries.</li>
            <li><strong>Strategic Capitals:</strong> Rajagriha (surrounded by 5 hills) and Pataliputra (river fort at confluence of Ganga & Son).</li>
            <li><strong>Ambitious Rulers:</strong> Bimbisara (matrimonial alliances), Ajatashatru (war engines & catapults), Mahapadma Nanda (massive standing army).</li>
          </ul>

          <div class="callout callout-fact">
            <div class="callout-title">💡 Heterodox Movement</div>
            Protest against Vedic ritualism led to <strong>Buddhism</strong> (founded by Siddhartha Gautama / The Buddha) and <strong>Jainism</strong> (propagated by Mahavira). Both rejected caste hierarchy and emphasized non-violence (<em>Ahimsa</em>).
          </div>

          <div class="callout callout-important">
            <div class="callout-title">⏭️ Transition to Next Period</div>
            In 321 BCE, Chandragupta Maurya overthrew the Nanda dynasty of Magadha, founding India's first subcontinental empire — the <strong>Mauryan Empire</strong>.
          </div>`
  },
  {
    id: "ch2-mauryan-empire",
    chapterId: "political-map",
    chapterTitle: "Reshaping India's Political Map",
    icon: "\ud83e\udd81",
    title: "12. The Mauryan Empire \u2014 Chandragupta & Ashoka (321\u2013185 BCE)",
    difficulty: "Hard",
    readTime: "15 min",
    preview: "Examine Chandragupta Maurya's conquests, Chanakya's Arthashastra, Ashoka's Kalinga War transformation, Rock Edicts, Dhamma, and Mauryan administration.",
    contentHtml: `<p>The <strong>Mauryan Empire</strong> (321–185 BCE) was the first state to unify almost the entire Indian subcontinent under a centralized administration.</p>

          <h3>Key Mauryan Rulers</h3>
          <ul>
            <li><strong>Chandragupta Maurya (321–298 BCE):</strong> Defeated the Nandas with Chanakya's guidance; defeated Seleucus Nicator (c. 305 BCE) gaining Afghanistan and Baluchistan.</li>
            <li><strong>Bindusara (298–268 BCE):</strong> Extended control southward into the Deccan.</li>
            <li><strong>Ashoka the Great (268–232 BCE):</strong> Conquered Kalinga (261 BCE); transformed by remorse into a promoter of <strong>Dhamma</strong> (non-violence, tolerance, moral welfare).</li>
          </ul>

          <div class="callout callout-definition">
            <div class="callout-title">📜 Chanakya's Arthashastra</div>
            A treatise on statecraft describing the <em>Saptanga Theory</em> (7 elements of state: King, Ministers, Territory, Fort, Treasury, Army, Allies), espionage networks, price controls, and foreign policy (Mandala theory).
          </div>

          <h3>Cause → Event → Consequence: Ashoka's Transformation</h3>
          <ul>
            <li><strong>Cause:</strong> Aggressive invasion of Kalinga (modern Odisha) in 261 BCE →</li>
            <li><strong>Event:</strong> Massive slaughter (100,000 killed, 150,000 deported) recorded in Rock Edict XIII →</li>
            <li><strong>Consequence:</strong> Ashoka renounced war (<em>Dhammavijaya</em> replaced <em>Digvijaya</em>), embraced Buddhism, and posted Rock and Pillar Edicts across Asia.</li>
          </ul>

          <div class="callout callout-important">
            <div class="callout-title">⏭️ Transition to Next Period</div>
            Weak successors after Ashoka led to Mauryan decline by 185 BCE. After centuries of decentralization, the <strong>Gupta Empire</strong> reunified northern India in 320 CE.
          </div>`
  },
  {
    id: "ch2-gupta-empire",
    chapterId: "political-map",
    chapterTitle: "Reshaping India's Political Map",
    icon: "\u2728",
    title: "13. The Gupta Empire \u2014 Golden Age of India (c. 320\u2013550 CE)",
    difficulty: "Hard",
    readTime: "14 min",
    preview: "Discover the achievements of Chandragupta I, Samudragupta, and Vikramaditya \u2014 Aryabhata's science, Kalidasa's literature, decimal system, zero, and Nalanda University.",
    contentHtml: `<p>The <strong>Gupta Empire</strong> (c. 320–550 CE) presided over an era of cultural, scientific, and mathematical brilliance known as the <strong>Golden Age of India</strong>.</p>

          <h3>Key Gupta Rulers</h3>
          <ul>
            <li><strong>Chandragupta I (320–335 CE):</strong> Married Lichchhavi princess Kumaradevi; assumed title <em>Maharajadhiraja</em>.</li>
            <li><strong>Samudragupta (335–375 CE):</strong> 'Napoleon of India'; Allahabad Pillar inscription records his conquest of 9 northern and 12 southern kings.</li>
            <li><strong>Chandragupta II Vikramaditya (375–415 CE):</strong> Defeated Shakas; court hosted the 'Nine Gems' (Navaratnas) including Kalidasa.</li>
            <li><strong>Kumaragupta I (415–455 CE):</strong> Founded <strong>Nalanda University</strong>.</li>
            <li><strong>Skandagupta (455–467 CE):</strong> Repelled initial Central Asian Huna invasions.</li>
          </ul>

          <h3>Scientific & Cultural Golden Age</h3>
          <ul>
            <li><strong>Mathematics & Astronomy:</strong> Development of zero and decimal place-value system; <strong>Aryabhata</strong> calculated pi, Earth's rotation, and explained eclipses.</li>
            <li><strong>Literature:</strong> Kalidasa wrote <em>Abhijnanashakuntalam</em> and <em>Meghaduta</em>; Vishnu Sharma authored <em>Panchatantra</em>.</li>
            <li><strong>Metallurgy:</strong> Delhi Iron Pillar remains rust-free after 1,600+ years.</li>
          </ul>

          <div class="callout callout-important">
            <div class="callout-title">⏭️ Transition to Next Period</div>
            Repeated Huna invasions and decentralization led to Gupta dissolution by 550 CE. Emperor <strong>Harshavardhana</strong> made the last major effort to unify northern India in the 7th century.
          </div>`
  },
  {
    id: "ch2-harsha-fragmentation",
    chapterId: "political-map",
    chapterTitle: "Reshaping India's Political Map",
    icon: "\ud83d\udc51",
    title: "14. Harshavardhana & Post-Harsha Regional Kingdoms (606\u20131206 CE)",
    difficulty: "Medium",
    readTime: "11 min",
    preview: "Learn about Harsha's reign at Kannauj, Xuanzang's travelogue, the Battle of Narmada, and the rise of regional powers (Pratiharas, Palas, Rashtrakutas, Cholas, Rajputs).",
    contentHtml: `<p><strong>Emperor Harshavardhana</strong> (606–647 CE) of Kannauj made the last successful attempt to unify northern India before the medieval period. His reign is documented by court poet Banabhatta (<em>Harshacharita</em>) and Chinese monk Xuanzang.</p>

          <h3>Harsha's Reign & Southern Limit</h3>
          <ul>
            <li>Ruled from <strong>Kannauj</strong>; held Prayag assemblies every 5 years giving away royal wealth.</li>
            <li><strong>Battle of Narmada (c. 618 CE):</strong> Harsha's southward expansion was halted by <strong>Pulakeshin II</strong>, Chalukya king of Badami.</li>
          </ul>

          <h3>Post-Harsha Regional Powers & Tripartite Struggle</h3>
          <p>After Harsha's death in 647 CE, India fragmented into regional dynasties. For two centuries, three powers fought the <strong>Tripartite Struggle</strong> for control of Kannauj:</p>
          <ul>
            <li><strong>Gurjara-Pratiharas:</strong> Western/Central India; defended frontiers against early Arab incursions.</li>
            <li><strong>Palas:</strong> Bengal/Bihar; patrons of Mahayana Buddhism (Vikramashila University).</li>
            <li><strong>Rashtrakutas:</strong> Deccan; built Ellora Kailasa temple.</li>
            <li><strong>Cholas:</strong> Tamil country; naval empire expanding to Sri Lanka and Southeast Asia.</li>
          </ul>

          <div class="callout callout-important">
            <div class="callout-title">⏭️ Transition to Next Period</div>
            Political fragmentation among Rajput clans left northern India vulnerable to Turkic invasions. In 1192, Muhammad Ghori defeated Prithviraj Chauhan at Tarain, leading to the establishment of the <strong>Delhi Sultanate</strong> in 1206.
          </div>`
  },
  {
    id: "ch2-delhi-sultanate-slave-khalji",
    chapterId: "political-map",
    chapterTitle: "Reshaping India's Political Map",
    icon: "\ud83c\udff0",
    title: "15. Delhi Sultanate \u2014 Mamluk & Khalji Dynasties (1206\u20131320)",
    difficulty: "Hard",
    readTime: "14 min",
    preview: "Study the founding of the Sultanate after Tarain, Mamluk consolidation (Aibak, Iltutmish, Razia, Balban), and Alauddin Khalji's military expansion and market price controls.",
    contentHtml: `<p>Following Muhammad Ghori's victory at Tarain (1192), his general <strong>Qutb-ud-din Aibak</strong> established the <strong>Delhi Sultanate</strong> in 1206. The Sultanate was ruled by five successive dynasties.</p>

          <h3>1. Mamluk (Slave) Dynasty (1206–1290)</h3>
          <ul>
            <li><strong>Qutb-ud-din Aibak (1206–1210):</strong> Founded dynasty; began Qutb Minar; known as <em>Lakh Baksh</em>.</li>
            <li><strong>Iltutmish (1211–1236):</strong> Real consolidator; introduced silver <em>Tanka</em> & copper <em>Jital</em>; instituted the <strong>Iqta system</strong>; deflected Mongol threat of Genghis Khan (1221).</li>
            <li><strong>Razia Sultan (1236–1240):</strong> First woman ruler of Delhi; defied purdah and led armies; undermined by noble faction (Chahalgani).</li>
            <li><strong>Balban (1266–1287):</strong> Destroyed the Forty nobles; enforced court prostration (<em>Sijda/Paibos</em>); divine right of kings.</li>
          </ul>

          <h3>2. Khalji Dynasty (1290–1320) & Alauddin Khalji</h3>
          <p><strong>Alauddin Khalji (1296–1316)</strong> created a powerful military state:</p>
          <ul>
            <li><strong>Conquests:</strong> Gujarat, Ranthambore (1301), Chittor (1303). Sent general <strong>Malik Kafur</strong> into the Deccan (Devagiri, Warangal, Madurai).</li>
            <li><strong>Market Price Regulations:</strong> Established 3 supervised markets in Delhi with fixed prices for grain, cloth, and livestock to maintain a huge standing army at low cost.</li>
            <li><strong>Mongol Defence:</strong> Fortified northern borders and successfully repelled multiple Mongol invasions.</li>
          </ul>

          <div class="callout callout-important">
            <div class="callout-title">⏭️ Transition to Next Period</div>
            After Khalji collapse, the <strong>Tughlaq Dynasty</strong> took power in 1320, attempting ambitious territorial expansion across the Deccan.
          </div>`
  },
  {
    id: "ch2-delhi-sultanate-tughlaq-lodi",
    chapterId: "political-map",
    chapterTitle: "Reshaping India's Political Map",
    icon: "\ud83d\udd4c",
    title: "16. Delhi Sultanate \u2014 Tughlaq, Sayyid & Lodi Dynasties (1320\u20131526)",
    difficulty: "Hard",
    readTime: "14 min",
    preview: "Examine Muhammad bin Tughlaq's experiments, Firoz Shah's canals, Timur's 1398 invasion, Sayyids, and Lodis \u2014 including full Delhi Sultanate Dynasties Comparison Table.",
    contentHtml: `<p>Under the <strong>Tughlaqs</strong>, the Delhi Sultanate reached its maximum geographical extent, followed by decline triggered by administrative errors and Timur's invasion.</p>

          <h3>Muhammad bin Tughlaq (1325–1351) — Failed Experiments</h3>
          <ul>
            <li><strong>Capital Transfer (1327):</strong> Moved capital from Delhi to Daulatabad (Deccan) causing massive civilian hardship; forced to move back.</li>
            <li><strong>Token Currency (1329):</strong> Issued bronze/copper token coins equal to silver tankas without anti-forgery measures; resulted in rampant counterfeiting and treasury loss.</li>
            <li><strong>Taxation in Doab:</strong> Increased land tax during a severe drought, causing agrarian rebellion.</li>
          </ul>

          <h3>Firoz Shah Tughlaq & Timur's Invasion</h3>
          <ul>
            <li><strong>Firoz Shah (1351–1388):</strong> Built extensive irrigation canals, hospitals, and towns (Firozabad); reduced taxes but weakened army.</li>
            <li><strong>Timur's Invasion (1398):</strong> Central Asian conqueror Timur sacked Delhi, destroying its economy and ending Tughlaq authority.</li>
          </ul>

          <h3>MANDATED COMPARISON TABLE 1: Delhi Sultanate Dynasties</h3>
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Mamluk (1206–1290)</th>
                <th>Khalji (1290–1320)</th>
                <th>Tughlaq (1320–1414)</th>
                <th>Sayyid (1414–1451)</th>
                <th>Lodi (1451–1526)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>Founder</strong></td><td>Qutb-ud-din Aibak</td><td>Jalal-ud-din Khalji</td><td>Ghiyas-ud-din Tughlaq</td><td>Khizr Khan</td><td>Bahlul Lodi</td></tr>
              <tr><td><strong>Capital</strong></td><td>Lahore / Delhi</td><td>Delhi (Siri)</td><td>Delhi / Daulatabad / Tughlaqabad</td><td>Delhi</td><td>Delhi / Agra (1504)</td></tr>
              <tr><td><strong>Famous Rulers</strong></td><td>Iltutmish, Razia, Balban</td><td>Alauddin Khalji</td><td>Muhammad bin Tughlaq, Firoz Shah</td><td>Khizr Khan, Mubarak Shah</td><td>Sikandar Lodi, Ibrahim Lodi</td></tr>
              <tr><td><strong>Expansion</strong></td><td>North India & Bengal</td><td>Deccan campaigns (Malik Kafur)</td><td>Maximum extent (South India)</td><td>Shrank to area around Delhi</td><td>Re-annexed Jaunpur & Gangetic valley</td></tr>
              <tr><td><strong>Administration</strong></td><td>Iqta system, Chahalgani nobles</td><td>Centralized, anti-noble measures, spy network</td><td>Experimental, high taxation, welfare bureaus</td><td>Weak, tributary to Timurids</td><td>Afghan tribal monarchy (first among equals)</td></tr>
              <tr><td><strong>Military Strength</strong></td><td>Turkic cavalry, Mongol defence</td><td>Massive standing army, price controls</td><td>Vast army, ruined by mountain campaigns</td><td>Feble local militia</td><td>Afghan tribal cavalry force</td></tr>
              <tr><td><strong>Economy</strong></td><td>Silver Tanka / Copper Jital</td><td>Price-regulated market control</td><td>Token currency failure, canal agriculture</td><td>Impoverished treasury</td><td>Recovery via internal trade</td></tr>
              <tr><td><strong>Architecture</strong></td><td>Qutb Minar, Quwwat-ul-Islam</td><td>Alai Darwaza, Siri Fort</td><td>Tughlaqabad Fort, Firoz Shah Kotla</td><td>Tomb architecture (Lodi Gardens)</td><td>Agra city foundation, Moth Ki Masjid</td></tr>
              <tr><td><strong>Decline Reasons</strong></td><td>Noble factions, succession disputes</td><td>Court intrigues after Alauddin</td><td>Timur's 1398 invasion, rebellions</td><td>Weak rulers, noble defiance</td><td>Defeated by Babur at Panipat (1526)</td></tr>
            </tbody>
          </table>

          <div class="callout callout-important">
            <div class="callout-title">⏭️ Transition to Next Period</div>
            Discontent with Ibrahim Lodi led Afghan noble Daulat Khan Lodi to invite <strong>Babur</strong> of Kabul, setting the stage for the <strong>First Battle of Panipat (1526)</strong> and the founding of the Mughal Empire.
          </div>`
  },
  {
    id: "ch2-rajput-kingdoms",
    chapterId: "political-map",
    chapterTitle: "Reshaping India's Political Map",
    icon: "\ud83d\udee1\ufe0f",
    title: "17. The Rajput Kingdoms (c. 800\u20131700s)",
    difficulty: "Medium",
    readTime: "11 min",
    preview: "Explore Mewar, Marwar, and Amber \u2014 martial culture, Rana Kumbha, Rana Sanga, Maharana Pratap at Haldighati, and Rajput-Mughal relations.",
    contentHtml: `<p>The <strong>Rajputs</strong> dominated western and central India. Organized into martial clans (Sisodia, Rathore, Kachwaha, Chauhan), they built formidable hill forts and defended their independence against northern powers.</p>

          <h3>Key Rajput Kingdoms & Rulers</h3>
          <ul>
            <li><strong>Mewar (Sisodia):</strong> Capital Chittor/Udaipur.
              <br>• <strong>Rana Kumbha (1433–1468):</strong> Built 32 forts (including Kumbhalgarh) and Vijay Stambha (Victory Tower).
              <br>• <strong>Rana Sanga (1509–1528):</strong> Led Rajput confederacy against Babur at Battle of Khanwa (1527).
              <br>• <strong>Maharana Pratap (1540–1597):</strong> Refused Mughal suzerainty; fought Akbar's forces at <strong>Battle of Haldighati (1576)</strong> and waged guerrilla warfare.</li>
            <li><strong>Marwar (Rathore):</strong> Capital Jodhpur; built Mehrangarh Fort.</li>
            <li><strong>Amber / Jaipur (Kachwaha):</strong> Raja Bharmal married daughter to Akbar; Raja Man Singh served as Akbar's premier general.</li>
          </ul>

          <div class="callout callout-definition">
            <div class="callout-title">📖 Jauhar & Saka</div>
            When defeat was imminent, women performed <em>Jauhar</em> (ritual self-immolation to protect honour) while men performed <em>Saka</em> (fighting to the death in saffron robes). Famous Jauhars occurred at Chittor in 1303, 1535, and 1568.
          </div>

          <div class="callout callout-important">
            <div class="callout-title">⏭️ Transition to Next Period</div>
            While Rajputs held the northwest, the <strong>Vijayanagara Empire</strong> in the south created medieval India's wealthiest Hindu state.
          </div>`
  },
  {
    id: "ch2-vijayanagara-empire",
    chapterId: "political-map",
    chapterTitle: "Reshaping India's Political Map",
    icon: "\ud83c\udfdb\ufe0f",
    title: "18. The Vijayanagara Empire (1336\u20131646)",
    difficulty: "Medium",
    readTime: "11 min",
    preview: "Discover the southern empire founded by Harihara & Bukka, Krishnadevaraya's golden age, Nayankara system, Hampi architecture, and Battle of Talikota.",
    contentHtml: `<p>Founded in 1336 by brothers <strong>Harihara I</strong> and <strong>Bukka Raya I</strong> on the banks of the Tungabhadra River, <strong>Vijayanagara</strong> ("City of Victory", Hampi) was South India's dominant empire for three centuries.</p>

          <h3>Golden Age under Krishnadevaraya (1509–1529)</h3>
          <ul>
            <li><strong>Military Success:</strong> Defeated Sultans of Bijapur, Gajapatis of Odisha, captured Raichur Doab.</li>
            <li><strong>Culture & Literature:</strong> Authored Telugu work <em>Amuktamalyada</em>; court hosted the <strong>Ashtadiggajas</strong> (8 eminent Telugu poets).</li>
            <li><strong>Trade & Wealth:</strong> Controlled diamond mines and spice trade; active trade with Portuguese (horse imports). Foreign travellers Paes and Nuniz marveled at Hampi's wealth.</li>
            <li><strong>Architecture:</strong> Vittala Temple (stone chariot, musical pillars) and Hazara Rama Temple.</li>
          </ul>

          <h3>Battle of Talikota (1565) & Fall</h3>
          <p>An alliance of four Deccan Sultanates (Bijapur, Ahmednagar, Golconda, Bidar) defeated Vijayanagara at <strong>Talikota (Rakkasa-Tangadi)</strong> in 1565. Capital Hampi was sacked and destroyed.</p>

          <div class="callout callout-important">
            <div class="callout-title">⏭️ Transition to Next Period</div>
            Vijayanagara's primary northern rivals were the <strong>Bahmani Sultanate</strong> and its successor Deccan Sultanates.
          </div>`
  },
  {
    id: "ch2-bahmani-sultanate",
    chapterId: "political-map",
    chapterTitle: "Reshaping India's Political Map",
    icon: "\ud83d\udd4c",
    title: "19. The Bahmani Sultanate & Deccan Sultanates (1347\u20131527)",
    difficulty: "Medium",
    readTime: "9 min",
    preview: "Study the Bahmani Sultanate founded by Bahman Shah, Mahmud Gawan's administration, and its breakup into 5 Deccan Sultanates.",
    contentHtml: `<p>Founded in 1347 by <strong>Alauddin Bahman Shah</strong> (Hasan Gangu), the <strong>Bahmani Sultanate</strong> was the first independent Muslim state in the Deccan, with capitals at Gulbarga and Bidar.</p>

          <h3>Key Features & Mahmud Gawan</h3>
          <ul>
            <li><strong>Mahmud Gawan (Prime Minister, 1461–1481):</strong> Reorganized provincial administration, built Bidar Madrasa, expanded borders. Factional conflict between local <em>Deccanis</em> and foreign <em>Afaqis</em> led to his execution and state collapse.</li>
          </ul>

          <h3>The Five Deccan Sultanates</h3>
          <ol>
            <li><strong>Bijapur (Adil Shahi):</strong> Built Gol Gumbaz (2nd largest dome in world).</li>
            <li><strong>Ahmednagar (Nizam Shahi):</strong> Defended by Queen Chand Bibi against Mughals.</li>
            <li><strong>Golconda (Qutb Shahi):</strong> Famed for Golconda diamond mines and Hyderabad city foundation.</li>
            <li><strong>Berar (Imad Shahi):</strong> Merged into Ahmednagar (1572).</li>
            <li><strong>Bidar (Barid Shahi):</strong> Merged into Bijapur (1619).</li>
          </ol>

          <div class="callout callout-important">
            <div class="callout-title">⏭️ Transition to Next Period</div>
            In the far northeast, the <strong>Ahom Kingdom</strong> maintained independence for nearly 600 years, successfully resisting Mughal expansion.
          </div>`
  },
  {
    id: "ch2-ahom-kingdom",
    chapterId: "political-map",
    chapterTitle: "Reshaping India's Political Map",
    icon: "\ud83d\udc18",
    title: "20. The Ahom Kingdom of Assam (1228\u20131826)",
    difficulty: "Medium",
    readTime: "10 min",
    preview: "Learn about the 600-year Ahom rule in Assam \u2014 Sukaphaa, Paik system, Buranjis, Lachit Borphukan, and the Battle of Saraighat, including Medieval Empires Summary Table.",
    contentHtml: `<p>Founded by Tai prince <strong>Sukaphaa</strong> in 1228, the <strong>Ahom Kingdom</strong> ruled Assam's Brahmaputra valley for nearly six centuries, resisting foreign conquerors.</p>

          <h3>Administration & Paik System</h3>
          <ul>
            <li><strong>Paik System:</strong> Mandatory labor service where every adult male (paik) provided labor or military service in lieu of cash tax.</li>
            <li><strong>Buranjis:</strong> Official historical chronicles written in Tai-Ahom and Assamese.</li>
          </ul>

          <h3>Battle of Saraighat (1671)</h3>
          <p>Ahom general <strong>Lachit Borphukan</strong> defeated Emperor Aurangzeb's naval force under Ram Singh I on the Brahmaputra River at Saraighat using river terrain knowledge and fast boats.</p>

          <h3>MANDATED COMPARISON TABLE 2: Major Medieval Empires Summary</h3>
          <table>
            <thead>
              <tr>
                <th>Empire</th>
                <th>Duration</th>
                <th>Capital</th>
                <th>Founder</th>
                <th>Greatest Ruler</th>
                <th>Greatest Extent</th>
                <th>Administration</th>
                <th>Decline Reason</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>Delhi Sultanate</strong></td><td>1206–1526</td><td>Delhi / Agra</td><td>Qutb-ud-din Aibak</td><td>Alauddin Khalji</td><td>North India & Deccan tip</td><td>Iqta system, Sultanate bureaucracy</td><td>First Battle of Panipat (1526)</td></tr>
              <tr><td><strong>Vijayanagara Empire</strong></td><td>1336–1646</td><td>Hampi</td><td>Harihara I & Bukka I</td><td>Krishnadevaraya</td><td>Entire South Indian Peninsula</td><td>Nayankara system, provincial Nayakas</td><td>Sacked at Battle of Talikota (1565)</td></tr>
              <tr><td><strong>Bahmani Sultanate</strong></td><td>1347–1527</td><td>Gulbarga / Bidar</td><td>Alauddin Bahman Shah</td><td>Firoz Shah / Mahmud Gawan</td><td>Deccan plateau (Konkan to AP)</td><td>Tarafs (provinces), Persianized court</td><td>Fractured into 5 Deccan Sultanates</td></tr>
              <tr><td><strong>Mughal Empire</strong></td><td>1526–1707+</td><td>Agra / Delhi</td><td>Babur</td><td>Akbar / Shah Jahan</td><td>Subcontinent (Kabul to Tamil Nadu)</td><td>Mansabdari, Zabt revenue system</td><td>Deccan ulcer, succession wars, rise of powers</td></tr>
              <tr><td><strong>Maratha Empire</strong></td><td>1674–1818</td><td>Raigad / Pune</td><td>Shivaji Maharaj</td><td>Baji Rao I / Madhavrao</td><td>Attock (Punjab) to Cuttack (Odisha)</td><td>Ashta Pradhan, Chauth/Sardeshmukhi</td><td>Third Battle of Panipat (1761), British wars</td></tr>
              <tr><td><strong>Sikh Empire</strong></td><td>1799–1849</td><td>Lahore</td><td>Maharaja Ranjit Singh</td><td>Ranjit Singh</td><td>Punjab, Kashmir, Peshawar, Ladakh</td><td>Secular administration, Europeanized army</td><td>Anglo-Sikh Wars after Ranjit Singh's death</td></tr>
            </tbody>
          </table>

          <div class="callout callout-important">
            <div class="callout-title">⏭️ Transition to Next Period</div>
            We now examine the supreme empire of medieval India — the <strong>Mughal Empire</strong>, founded by Babur in 1526.
          </div>`
  },
  {
    id: "ch2-mughal-babur-akbar",
    chapterId: "political-map",
    chapterTitle: "Reshaping India's Political Map",
    icon: "\ud83d\udc51",
    title: "21. The Mughal Empire \u2014 Babur, Humayun & Akbar (1526\u20131605)",
    difficulty: "Hard",
    readTime: "15 min",
    preview: "Study Babur's Panipat victory, Sher Shah Suri's reforms, Akbar's expansion, Mansabdari system, Todar Mal's Zabt, and Sulh-i-kul, including Babur vs Ibrahim Lodi Table.",
    contentHtml: `<p>Founded by <strong>Zahir-ud-din Muhammad Babur</strong> in 1526, the <strong>Mughal Empire</strong> became South Asia's most dominant political entity.</p>

          <h3>MANDATED COMPARISON TABLE 3: Babur vs. Ibrahim Lodi (First Battle of Panipat, 1526)</h3>
          <table>
            <thead><tr><th>Feature</th><th>Babur (Mughals)</th><th>Ibrahim Lodi (Delhi Sultanate)</th></tr></thead>
            <tbody>
              <tr><td><strong>Army Size</strong></td><td>~12,000 disciplined troops</td><td>~100,000 troops + 1,000 war elephants</td></tr>
              <tr><td><strong>Weapons & Tech</strong></td><td>Field cannons (artillery) & matchlock muskets</td><td>Traditional swords, spears, & war elephants</td></tr>
              <tr><td><strong>Tactics</strong></td><td><em>Tulughma</em> (flanking movement) & <em>Araba</em> (chained carts)</td><td>Frontal charge with war elephants</td></tr>
              <tr><td><strong>Leadership</strong></td><td>Experienced Central Asian commander</td><td>Unpopular Afghan Sultan facing noble rebellion</td></tr>
              <tr><td><strong>Outcome</strong></td><td>Decisive victory; founded Mughal Empire</td><td>Killed on battlefield; ended Delhi Sultanate</td></tr>
            </tbody>
          </table>

          <h3>Sher Shah Suri Interregnum (1540–1545)</h3>
          <p>Afghan ruler Sher Shah Suri defeated Humayun at Chausa and Kannauj. Key reforms: introduced the silver <strong>Rupiya</strong> (ancestor of Rupee), built the <strong>Grand Trunk Road</strong>, established sarais and postal stations.</p>

          <h3>Akbar the Great (1556–1605)</h3>
          <ul>
            <li><strong>Second Battle of Panipat (1556):</strong> Bairam Khan defeated Hemu.</li>
            <li><strong>Mansabdari System:</strong> Non-hereditary administrative rank combining <em>Zat</em> (status/pay) and <em>Sawar</em> (cavalry responsibility).</li>
            <li><strong>Zabt (Dahsala) Revenue System:</strong> Formulated by Raja Todar Mal; land measured and taxed in cash based on 10-year average yields.</li>
            <li><strong>Religious Policy:</strong> Abolished <em>Jizya</em> (1564); established Ibadat Khana; promoted <em>Sulh-i-kul</em> (universal peace) and Rajput alliances (marriages, high office to Raja Man Singh).</li>
          </ul>

          <div class="callout callout-important">
            <div class="callout-title">⏭️ Transition to Next Period</div>
            Akbar's administrative stability enabled his son <strong>Jahangir</strong> and grandson <strong>Shah Jahan</strong> to foster unprecedented artistic and architectural achievements.
          </div>`
  },
  {
    id: "ch2-mughal-jahangir-shahjahan",
    chapterId: "political-map",
    chapterTitle: "Reshaping India's Political Map",
    icon: "\ud83d\udd4c",
    title: "22. The Mughal Empire \u2014 Jahangir & Shah Jahan (1605\u20131658)",
    difficulty: "Medium",
    readTime: "11 min",
    preview: "Explore Jahangir's paintings and Nur Jahan, Shah Jahan's Taj Mahal, Red Fort, Jama Masjid, Peacock Throne, and Major Medieval Rulers Table.",
    contentHtml: `<p>The reigns of <strong>Jahangir</strong> (1605–1627) and <strong>Shah Jahan</strong> (1628–1658) represented the architectural and artistic peak of the empire.</p>

          <h3>Jahangir & Empress Nur Jahan</h3>
          <ul>
            <li><strong>Art & Justice:</strong> Patronized realistic miniature painting; installed the Golden 'Chain of Justice'.</li>
            <li><strong>Nur Jahan:</strong> Co-ruled effectively, issued coins in her name, held court.</li>
          </ul>

          <h3>Shah Jahan — The Architect King</h3>
          <ul>
            <li>Built <strong>Taj Mahal</strong> (Agra), <strong>Red Fort</strong> (Shahjahanabad/Delhi), <strong>Jama Masjid</strong>, and the encrusted <strong>Peacock Throne</strong>.</li>
          </ul>

          <h3>MANDATED COMPARISON TABLE 4: Major Medieval Rulers</h3>
          <table>
            <thead>
              <tr>
                <th>Ruler</th>
                <th>Reign</th>
                <th>Key Administration</th>
                <th>Military & Expansion</th>
                <th>Architecture & Culture</th>
                <th>Major Legacy</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>Alauddin Khalji</strong></td><td>1296–1316</td><td>Price controls, spy system, land tax at 50%</td><td>Conquered Gujarat, Chittor; Deccan raids</td><td>Alai Darwaza, Siri Fort</td><td>Repelled Mongol invasions</td></tr>
              <tr><td><strong>Muhammad bin Tughlaq</strong></td><td>1325–1351</td><td>Token currency, capital shift to Daulatabad</td><td>Max Sultanate extent; lost Deccan/South</td><td>Tughlaqabad Fort</td><td>Learned scholar, failed policies</td></tr>
              <tr><td><strong>Firoz Shah Tughlaq</strong></td><td>1351–1388</td><td>Welfare bureau, reduced taxes, public works</td><td>Pacifist military policy</td><td>Yamuna Canals, Firozabad city</td><td>Irrigation canal network</td></tr>
              <tr><td><strong>Akbar</strong></td><td>1556–1605</td><td>Mansabdari rank, Todar Mal's Zabt tax system</td><td>Conquered Gujarat, Bengal, Rajputs</td><td>Fatehpur Sikri, Humayun Tomb</td><td>Sulh-i-kul, pluralistic empire</td></tr>
              <tr><td><strong>Shah Jahan</strong></td><td>1628–1658</td><td>Centralized, wealthy imperial treasury</td><td>Deccan annexations, failed Balkh campaign</td><td>Taj Mahal, Red Fort, Peacock Throne</td><td>Golden age of Mughal architecture</td></tr>
              <tr><td><strong>Aurangzeb</strong></td><td>1658–1707</td><td>Re-imposed Jizya, Fatawa-e-Alamgiri law</td><td>26-yr Deccan war, annexed Bijapur/Golconda</td><td>Bibi Ka Maqbara, Badshahi Mosque</td><td>Max extent; financial exhaustion</td></tr>
            </tbody>
          </table>

          <div class="callout callout-important">
            <div class="callout-title">⏭️ Transition to Next Period</div>
            In 1658, Aurangzeb seized power after a brutal war of succession, shifting imperial policy toward orthodox intolerance.
          </div>`
  },
  {
    id: "ch2-mughal-aurangzeb-decline",
    chapterId: "political-map",
    chapterTitle: "Reshaping India's Political Map",
    icon: "\u2694\ufe0f",
    title: "23. The Mughal Empire \u2014 Aurangzeb & Imperial Decline (1658\u20131707+)",
    difficulty: "Hard",
    readTime: "15 min",
    preview: "Analyze Aurangzeb's expansion, religious policies, Deccan Ulcer, Jagirdari crisis, and fragmentation into successor states with 4 Mandated Comparison Tables.",
    contentHtml: `<p><strong>Aurangzeb Alamgir</strong> (1658–1707) expanded the empire to its maximum extent but initiated policies that triggered rapid decline after his death.</p>

          <h3>Aurangzeb's Policies & The Deccan Ulcer</h3>
          <ul>
            <li><strong>Religious Orthodoxy:</strong> Execution of Dara Shikoh; re-imposition of <em>Jizya</em> (1679); destruction of prominent temples; execution of 9th Sikh Guru Tegh Bahadur (1675).</li>
            <li><strong>Deccan Campaign (1681–1707):</strong> Spent 26 years fighting Marathas and annexing Bijapur/Golconda. The campaign drained treasury, demoralized army, and left north ungoverned.</li>
            <li><strong>Jagirdari Crisis:</strong> Shortage of productive lands (jagirs) relative to the growing number of mansabdars created noble discontent.</li>
          </ul>

          <h3>MANDATED COMPARISON TABLE 5: Akbar vs. Aurangzeb</h3>
          <table>
            <thead><tr><th>Feature</th><th>Akbar (1556–1605)</th><th>Aurangzeb (1658–1707)</th></tr></thead>
            <tbody>
              <tr><td><strong>Religious Policy</strong></td><td>Abolished Jizya; promoted <em>Sulh-i-kul</em> & Ibadat Khana</td><td>Re-imposed Jizya (1679); orthodox Islamic law (Fatawa-e-Alamgiri)</td></tr>
              <tr><td><strong>Rajput Policy</strong></td><td>Matrimonial alliances; high office (Man Singh)</td><td>Intervened in Marwar succession; alienated Rajput chiefs</td></tr>
              <tr><td><strong>Cultural Patronage</strong></td><td>Patronized painting, music (Tansen), literature</td><td>Banned music at court; discouraged court painting</td></tr>
              <tr><td><strong>Empire Extent</strong></td><td>Northern & Central India, Gujarat, Bengal</td><td>Subcontinent maximum (annexed Bijapur & Golconda)</td></tr>
              <tr><td><strong>Legacy</strong></td><td>Built inclusive, stable empire</td><td>Exhausted treasury; triggered imperial fragmentation</td></tr>
            </tbody>
          </table>

          <h3>MANDATED COMPARISON TABLE 6: Delhi Sultanate Admin vs. Mughal Admin</h3>
          <table>
            <thead><tr><th>Aspect</th><th>Delhi Sultanate Administration</th><th>Mughal Administration</th></tr></thead>
            <tbody>
              <tr><td><strong>Central Govt</strong></td><td>Sultan aided by Wazir, Diwan-i-Arz, etc.</td><td>Emperor aided by Wazir, Mir Bakshi, Chief Qazi</td></tr>
              <tr><td><strong>Provinces</strong></td><td>Iqtas governed by Muqtis / Walis</td><td>Subahs governed by Subahdars & Diwans</td></tr>
              <tr><td><strong>Military Org</strong></td><td>Iqta-based cavalry + royal guards</td><td>Mansabdari ranking (Zat/Sawar)</td></tr>
              <tr><td><strong>Revenue System</strong></td><td>Kharaj (crop sharing, high rates)</td><td>Scientific Zabt (Dahsala) cash assessment</td></tr>
              <tr><td><strong>Succession</strong></td><td>Sword / noble election (no clear rule)</td><td>War of succession among royal princes</td></tr>
            </tbody>
          </table>

          <h3>MANDATED COMPARISON TABLE 7: Delhi Sultanate vs. Mughal Empire Overview</h3>
          <table>
            <thead><tr><th>Feature</th><th>Delhi Sultanate (1206–1526)</th><th>Mughal Empire (1526–1707+)</th></tr></thead>
            <tbody>
              <tr><td><strong>Duration & Origin</strong></td><td>320 years (5 Turkic/Afghan dynasties)</td><td>200+ years (Timurid/Chagatai line)</td></tr>
              <tr><td><strong>Architecture</strong></td><td>Indo-Islamic (Qutb Minar, Tughlaqabad)</td><td>Refined marble/sandstone (Taj Mahal, Red Fort)</td></tr>
              <tr><td><strong>Extent</strong></td><td>Fluctuating; peak under Tughlaq</td><td>Unification of almost entire subcontinent</td></tr>
            </tbody>
          </table>

          <h3>MANDATED COMPARISON TABLE 8: Revenue Systems (Iqta vs. Zabt vs. Jagirdari)</h3>
          <table>
            <thead><tr><th>System</th><th>Founder</th><th>Method & Tax Collection</th><th>Military Role</th><th>Pros & Cons</th></tr></thead>
            <tbody>
              <tr><td><strong>Iqta</strong></td><td>Iltutmish</td><td>Assigning land revenue to commanders</td><td>Maintain troops for Sultan</td><td>Pro: Centralized control. Con: Noble rebellions.</td></tr>
              <tr><td><strong>Zabt</strong></td><td>Raja Todar Mal (Akbar)</td><td>Cash tax on 10-yr average crop yield</td><td>Decoupled from direct army command</td><td>Pro: Predictable revenue. Con: Complex survey.</td></tr>
              <tr><td><strong>Jagirdari</strong></td><td>Akbar / Mughals</td><td>Assigning revenue from <em>jagirs</em> to mansabdars</td><td>Pay troops from assigned revenue</td><td>Pro: Flexible pay. Con: Jagirdari shortage crisis.</td></tr>
            </tbody>
          </table>

          <div class="callout callout-important">
            <div class="callout-title">⏭️ Transition to Next Period</div>
            Aurangzeb's death in 1707 led to the rise of regional powers — chief among them the **Marathas** under Shivaji and the Peshwas.
          </div>`
  },
  {
    id: "ch2-maratha-shivaji",
    chapterId: "political-map",
    chapterTitle: "Reshaping India's Political Map",
    icon: "\ud83d\udea9",
    title: "24. The Maratha Empire \u2014 Shivaji Maharaj & Swarajya (1630\u20131680)",
    difficulty: "Hard",
    readTime: "14 min",
    preview: "Study Shivaji Maharaj's Swarajya concept, Afzal Khan encounter, Agra escape, 1674 coronation, Ganimi Kava, Ashta Pradhan, Navy, and Shivaji vs Aurangzeb Table.",
    contentHtml: `<p><strong>Chhatrapati Shivaji Maharaj</strong> (1630–1680) carved out an independent Hindu state (<em>Swarajya</em>) in the Western Ghats against Bijapur and the Mughals.</p>

          <h3>Key Milestones</h3>
          <ul>
            <li><strong>Afzal Khan Encounter (1659):</strong> Killed Bijapur general Afzal Khan at Pratapgad using <em>Wagh Nakh</em> (tiger claws).</li>
            <li><strong>Agra Escape (1666):</strong> Escaped Aurangzeb's house arrest in sweet baskets.</li>
            <li><strong>Coronation (June 6, 1674):</strong> Crowned <em>Chhatrapati</em> at Raigad Fort.</li>
            <li><strong>Administration:</strong> Council of 8 ministers (<strong>Ashta Pradhan</strong>) headed by Peshwa; levied <em>Chauth</em> (1/4th) and <em>Sardeshmukhi</em> (10%).</li>
            <li><strong>Military:</strong> Guerrilla warfare (<em>Ganimi Kava</em>), 300+ hill forts, built Maratha Navy (Konkan coast).</li>
          </ul>

          <h3>MANDATED COMPARISON TABLE 9: Shivaji vs. Aurangzeb</h3>
          <table>
            <thead><tr><th>Feature</th><th>Shivaji Maharaj</th><th>Aurangzeb</th></tr></thead>
            <tbody>
              <tr><td><strong>Objective</strong></td><td>Establish Swarajya (self-rule) & protect local culture</td><td>Universal Islamic empire & absolute Mughal hegemony</td></tr>
              <tr><td><strong>Strategy</strong></td><td>Guerrilla warfare (Ganimi Kava), hill forts, navy</td><td>Massive imperial armies, siege warfare, heavy artillery</td></tr>
              <tr><td><strong>Administration</strong></td><td>Ashta Pradhan council, direct peasant tax</td><td>Centralized bureaucracy, Mansabdari/Jagirdari system</td></tr>
              <tr><td><strong>Religious Policy</strong></td><td>Protected all places of worship, respected women</td><td>Re-imposed Jizya, destroyed prominent rival temples</td></tr>
              <tr><td><strong>Legacy</strong></td><td>Father of Maratha nation & Indian Navy</td><td>Last Great Mughal; imperial overreach led to decline</td></tr>
            </tbody>
          </table>

          <div class="callout callout-important">
            <div class="callout-title">⏭️ Transition to Next Period</div>
            After Shivaji's death, power shifted to the **Peshwas**, who expanded Maratha rule across central and northern India.
          </div>`
  },
  {
    id: "ch2-maratha-peshwas-decline",
    chapterId: "political-map",
    chapterTitle: "Reshaping India's Political Map",
    icon: "\ud83d\udde1\ufe0f",
    title: "25. The Maratha Empire \u2014 Peshwas, Panipat & Decline (1680\u20131818)",
    difficulty: "Hard",
    readTime: "12 min",
    preview: "Trace Maratha expansion under Baji Rao I, the Maratha Confederacy, the disaster of Third Battle of Panipat (1761), and Anglo-Maratha Wars.",
    contentHtml: `<p>Under the <strong>Peshwas</strong> (Prime Ministers), the Marathas became India's paramount power in the 18th century.</p>

          <h3>Peshwa Era & Confederacy</h3>
          <ul>
            <li><strong>Baji Rao I (1720–1740):</strong> Brilliant cavalry general; expanded into Malwa, Gujarat, reached Delhi (1737).</li>
            <li><strong>Maratha Confederacy:</strong> Peshwa (Pune), Scindia (Gwalior), Holkar (Indore), Gaekwad (Baroda), Bhonsle (Nagpur).</li>
          </ul>

          <h3>Third Battle of Panipat (Jan 14, 1761)</h3>
          <p>Maratha forces under Sadashivrao Bhau were defeated by Afghan invader <strong>Ahmad Shah Abdali</strong>. 40,000+ Marathas died. Panipat destroyed a generation of Maratha leaders, creating a power vacuum in northern India.</p>

          <div class="callout callout-important">
            <div class="callout-title">⏭️ Transition to Next Period</div>
            In the north, another formidable power emerged — the **Sikh Empire** under Maharaja Ranjit Singh.
          </div>`
  },
  {
    id: "ch2-sikh-empire",
    chapterId: "political-map",
    chapterTitle: "Reshaping India's Political Map",
    icon: "\u2694\ufe0f",
    title: "26. The Sikh Empire (1469\u20131849)",
    difficulty: "Medium",
    readTime: "11 min",
    preview: "Study the spiritual origins under Guru Nanak, Khalsa creation (1699), Sikh Misls, Maharaja Ranjit Singh, and Anglo-Sikh Wars.",
    contentHtml: `<p>Sikhism evolved from Guru Nanak's spiritual movement (1469) into a martial brotherhood (<strong>Khalsa</strong>, 1699 by Guru Gobind Singh Ji) and a powerful 19th-century empire.</p>

          <h3>Maharaja Ranjit Singh (1799–1839) — Lion of Punjab</h3>
          <ul>
            <li>United 12 Sikh <em>misls</em>; established capital at <strong>Lahore</strong>.</li>
            <li><strong>Secular Governance:</strong> Ministers included Muslims (Fakir Azizuddin) and Hindus.</li>
            <li><strong>Modernized Army:</strong> Trained Khalsa Army using French/Italian officers (Allard, Ventura); formidable artillery.</li>
            <li>Conquered Multan, Kashmir, Peshawar, Ladakh; acquired Koh-i-Noor diamond.</li>
          </ul>

          <div class="callout callout-important">
            <div class="callout-title">⏭️ Transition to Next Period</div>
            In southern India, the **Kingdom of Mysore** under Hyder Ali and Tipu Sultan fiercely resisted British expansion.
          </div>`
  },
  {
    id: "ch2-kingdom-mysore",
    chapterId: "political-map",
    chapterTitle: "Reshaping India's Political Map",
    icon: "\ud83d\udc2f",
    title: "27. The Kingdom of Mysore \u2014 Hyder Ali & Tipu Sultan (1761\u20131799)",
    difficulty: "Medium",
    readTime: "10 min",
    preview: "Examine Hyder Ali and Tipu Sultan's resistance, iron war rockets, four Anglo-Mysore Wars, and Tipu's last stand at Seringapatam (1799).",
    contentHtml: `<p><strong>Hyder Ali</strong> and <strong>Tipu Sultan ('Tiger of Mysore')</strong> made Mysore the most technologically advanced opponent of the British in South India.</p>

          <h3>Innovations & Anglo-Mysore Wars</h3>
          <ul>
            <li><strong>Iron War Rockets:</strong> World's first metal-cylinder rockets; inspired British Congreve rockets.</li>
            <li><strong>Four Wars:</strong> Dictated terms at Treaty of Mangalore (1784). Tipu died fighting on Seringapatam's ramparts on May 4, 1799.</li>
          </ul>

          <div class="callout callout-important">
            <div class="callout-title">⏭️ Transition to Next Period</div>
            While Mysore fought militarily, wealthy Mughal successor states (Bengal, Awadh, Hyderabad) were absorbed through diplomacy and taxation.
          </div>`
  },
  {
    id: "ch2-bengal-awadh-hyderabad",
    chapterId: "political-map",
    chapterTitle: "Reshaping India's Political Map",
    icon: "\ud83d\udcb0",
    title: "28. Bengal, Awadh & Hyderabad \u2014 Wealthy Successor States",
    difficulty: "Medium",
    readTime: "9 min",
    preview: "Understand Bengal's textile wealth, Awadh's culture, Hyderabad's diamonds, and how each fell to British commercial & political expansion.",
    contentHtml: `<p>As Mughal authority faded, Bengal, Awadh, and Hyderabad became wealthy independent states, but were gradually absorbed by the British East India Company.</p>

          <ul>
            <li><strong>Bengal:</strong> 'Paradise of the East'; rich in textiles (Dhaka muslin) and silk. Plassey (1757) and Buxar (1764) made EIC the master of Bengal.</li>
            <li><strong>Awadh (Oudh):</strong> Capital Lucknow; centre of refinement and Urdu poetry. Annexed by British in 1856 on 'misgovernment' grounds.</li>
            <li><strong>Hyderabad:</strong> Founded by Nizam-ul-Mulk (1724); Golconda diamonds. First state to sign Subsidiary Alliance (1798).</li>
          </ul>

          <div class="callout callout-important">
            <div class="callout-title">⏭️ Transition to Next Period</div>
            We now examine the European traders who competed for control of India, leading to British supremacy.
          </div>`
  },
  {
    id: "ch2-european-trading-companies",
    chapterId: "political-map",
    chapterTitle: "Reshaping India's Political Map",
    icon: "\u26f5",
    title: "29. European Trading Companies in India (1498\u20131757)",
    difficulty: "Medium",
    readTime: "10 min",
    preview: "Trace the arrival of Portuguese, Dutch, French, and British traders, factory bases, Carnatic Wars, and European Powers Comparison Table.",
    contentHtml: `<p>European powers sought direct sea routes to India to control the spice and textile trade, gradually turning from trade to territorial conquest.</p>

          <h3>MANDATED COMPARISON TABLE 10: European Powers in India</h3>
          <table>
            <thead>
              <tr>
                <th>Power</th>
                <th>Arrival Year</th>
                <th>Main Trade Centres</th>
                <th>Strengths</th>
                <th>Weaknesses & Outcome</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>Portuguese</strong></td><td>1498 (Vasco da Gama)</td><td>Goa (1510), Daman, Diu, Cochin</td><td>Early naval monopoly, fortress network</td><td>Religious intolerance, rise of Dutch/British rival fleets</td></tr>
              <tr><td><strong>Dutch (VOC)</strong></td><td>1602</td><td>Masulipatnam, Pulicat, Surat</td><td>Strong commercial navy, financial backing</td><td>Shifted focus to Spice Islands (Indonesia); lost at Colachel (1741)</td></tr>
              <tr><td><strong>French</strong></td><td>1664</td><td>Pondicherry, Chandernagore</td><td>Dupleix's political diplomacy, strong army</td><td>Defeated by British in Carnatic Wars (Wandiwash 1760)</td></tr>
              <tr><td><strong>British (EIC)</strong></td><td>1600 (Charter)</td><td>Madras (1639), Bombay (1661), Calcutta (1690)</td><td>Naval strength, financial resources, political intrigue</td><td>Emerged victorious; built subcontinental empire</td></tr>
            </tbody>
          </table>

          <div class="callout callout-important">
            <div class="callout-title">⏭️ Transition to Next Period</div>
            EIC victory over the French left them free to conquer Bengal at Plassey (1757) and Buxar (1764).
          </div>`
  },
  {
    id: "ch2-plassey-buxar",
    chapterId: "political-map",
    chapterTitle: "Reshaping India's Political Map",
    icon: "\u2694\ufe0f",
    title: "30. EIC Conquest \u2014 Plassey to Buxar (1757\u20131765)",
    difficulty: "Hard",
    readTime: "12 min",
    preview: "Examine Plassey's conspiracy, Buxar's victory, Diwani rights, Dual Government, and Major Battles Comparison Table.",
    contentHtml: `<p>The **Battle of Plassey (1757)** and **Battle of Buxar (1764)** transformed EIC from merchants into Bengal's rulers.</p>

          <h3>Plassey (1757) vs. Buxar (1764)</h3>
          <ul>
            <li><strong>Plassey (1757):</strong> Clive bribed Mir Jafar to betray Siraj-ud-Daulah. Won by conspiracy.</li>
            <li><strong>Buxar (1764):</strong> Major Hector Munro defeated joint forces of Mir Qasim, Shuja-ud-Daulah (Awadh), and Mughal Emperor Shah Alam II. Won by military tactics.</li>
            <li><strong>Treaty of Allahabad (1765):</strong> EIC granted **Diwani Rights** (revenue collection) over Bengal, Bihar, and Odisha.</li>
          </ul>

          <h3>MANDATED COMPARISON TABLE 11: Major Battles Comparison</h3>
          <table>
            <thead>
              <tr>
                <th>Battle</th>
                <th>Date</th>
                <th>Opposing Sides</th>
                <th>Commanders</th>
                <th>Cause & Winner</th>
                <th>Historical Importance</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>1st Panipat</strong></td><td>Apr 21, 1526</td><td>Babur vs Ibrahim Lodi</td><td>Babur vs Ibrahim Lodi</td><td>Babur used field cannons; **Winner: Babur**</td><td>Founded Mughal Empire; ended Delhi Sultanate</td></tr>
              <tr><td><strong>2nd Panipat</strong></td><td>Nov 5, 1556</td><td>Akbar vs Hemu</td><td>Bairam Khan vs Hemu</td><td>Hemu's arrow injury; **Winner: Akbar**</td><td>Restored & consolidated Mughal rule in North India</td></tr>
              <tr><td><strong>Plassey</strong></td><td>Jun 23, 1757</td><td>EIC vs Siraj-ud-Daulah</td><td>Robert Clive vs Mir Jafar (treason)</td><td>EIC trade dispute; **Winner: EIC**</td><td>Began British political rule in Bengal</td></tr>
              <tr><td><strong>Buxar</strong></td><td>Oct 22, 1764</td><td>EIC vs Triple Alliance</td><td>Hector Munro vs Mir Qasim/Shah Alam II</td><td>Nawab's resistance to EIC duty abuse; **Winner: EIC**</td><td>Gave EIC Diwani rights; solidified empire base</td></tr>
            </tbody>
          </table>

          <div class="callout callout-important">
            <div class="callout-title">⏭️ Transition to Next Period</div>
            With Bengal revenue secured, the British used **Subsidiary Alliance** and **Doctrine of Lapse** to annex remaining Indian states.
          </div>`
  },
  {
    id: "ch2-british-annexation-policies",
    chapterId: "political-map",
    chapterTitle: "Reshaping India's Political Map",
    icon: "\ud83d\udccb",
    title: "31. British Annexation Policies (1798\u20131856)",
    difficulty: "Hard",
    readTime: "11 min",
    preview: "Study Wellesley's Subsidiary Alliance system, Dalhousie's Doctrine of Lapse, and administrative annexations.",
    contentHtml: `<p>The British expanded using systematic legal and diplomatic annexation policies:</p>

          <h3>Subsidiary Alliance vs. Doctrine of Lapse</h3>
          <ul>
            <li><strong>Subsidiary Alliance (Lord Wellesley, 1798):</strong> Indian states surrendered foreign policy, stationed British garrison at own expense, accepted British Resident. (Hyderabad 1798, Awadh 1801).</li>
            <li><strong>Doctrine of Lapse (Lord Dalhousie, 1848):</strong> Princely states without natural male heirs lapsed to British. Rejected adoption. (Satara 1848, Jhansi 1853, Nagpur 1854).</li>
          </ul>

          <div class="callout callout-important">
            <div class="callout-title">⏭️ Transition to Next Period</div>
            These annexations and economic exploitation created resentment that exploded in the **Revolt of 1857**.
          </div>`
  },
  {
    id: "ch2-revolt-1857",
    chapterId: "political-map",
    chapterTitle: "Reshaping India's Political Map",
    icon: "\ud83d\udd25",
    title: "32. The Revolt of 1857 \u2014 First War of Independence",
    difficulty: "Hard",
    readTime: "14 min",
    preview: "Analyze the causes, greased cartridge spark, Mangal Pandey, major centers, leaders table, and consequences ending EIC rule.",
    contentHtml: `<p>The **Revolt of 1857** was the first major armed uprising against British rule, triggered by greased Enfield rifle cartridges (cow/pig fat rumours) at Meerut and Barrackpore (Mangal Pandey).</p>

          <h3>MANDATED COMPARISON TABLE 12: Revolt of 1857 Leaders</h3>
          <table>
            <thead>
              <tr>
                <th>Leader</th>
                <th>Region / Center</th>
                <th>Role & Action</th>
                <th>Outcome</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>Mangal Pandey</strong></td><td>Barrackpore (Bengal)</td><td>Struck first blow on Mar 29, 1857 against officers</td><td>Hanged; inspired sepoy mutiny</td></tr>
              <tr><td><strong>Bahadur Shah Zafar II</strong></td><td>Delhi</td><td>Proclaimed symbolic Emperor of India by rebels</td><td>Exiled to Rangoon (Myanmar); ended Mughal line</td></tr>
              <tr><td><strong>Rani Lakshmibai</strong></td><td>Jhansi / Gwalior</td><td>Fought British fiercely after Jhansi lapsed</td><td>Died fighting on horseback at Gwalior (1858)</td></tr>
              <tr><td><strong>Nana Sahib</strong></td><td>Kanpur</td><td>Adopted son of Baji Rao II; led Kanpur forces</td><td>Escaped to Nepal forests</td></tr>
              <tr><td><strong>Tantia Tope</strong></td><td>Central India / Kanpur</td><td>Genius guerrilla commander for Nana Sahib & Rani</td><td>Captured and executed in 1859</td></tr>
              <tr><td><strong>Begum Hazrat Mahal</strong></td><td>Lucknow (Awadh)</td><td>Rallied Awadh against British annexation</td><td>Escaped to Nepal</td></tr>
              <tr><td><strong>Kunwar Singh</strong></td><td>Jagdishpur (Bihar)</td><td>80-year-old Rajput chief led Bihar rebellion</td><td>Died of battle wounds after defeating British</td></tr>
            </tbody>
          </table>

          <div class="callout callout-important">
            <div class="callout-title">⏭️ Transition to Next Period</div>
            The 1857 Revolt led to the Government of India Act 1858, transferring power from EIC to direct **British Crown Rule (British Raj)**.
          </div>`
  },
  {
    id: "ch2-british-raj-administration",
    chapterId: "political-map",
    chapterTitle: "Reshaping India's Political Map",
    icon: "\ud83c\udfdb\ufe0f",
    title: "33. The British Raj \u2014 Administration, Economy & Society (1858\u20131947)",
    difficulty: "Hard",
    readTime: "13 min",
    preview: "Examine Crown governance, Viceroy system, ICS, Naoroji's Drain of Wealth, de-industrialization, and EIC vs Raj Table.",
    contentHtml: `<p>From 1858 to 1947, India was directly governed by the British Crown through a Viceroy and Secretary of State.</p>

          <h3>Economic Exploitation & Social Impact</h3>
          <ul>
            <li><strong>Drain of Wealth:</strong> Formulated by **Dadabhai Naoroji** — systematic extraction of Indian tax revenue to Britain via 'Home Charges'.</li>
            <li><strong>De-industrialization:</strong> Destruction of Indian handloom weaving to make India an exporter of raw materials (cotton) and importer of British goods.</li>
          </ul>

          <h3>MANDATED COMPARISON TABLE 13: EIC vs. British Raj</h3>
          <table>
            <thead><tr><th>Feature</th><th>East India Company Rule (1757–1858)</th><th>British Crown Raj (1858–1947)</th></tr></thead>
            <tbody>
              <tr><td><strong>Ruler</strong></td><td>Private chartered trading corporation</td><td>British Monarchy & Parliament</td></tr>
              <tr><td><strong>Head in India</strong></td><td>Governor-General of Bengal / India</td><td>Viceroy and Governor-General</td></tr>
              <tr><td><strong>Primary Goal</strong></td><td>Commercial profit & territorial plunder</td><td>Imperial governance, market exploitation, defense</td></tr>
              <tr><td><strong>Army</strong></td><td>EIC Sepoy army under Company officers</td><td>Reorganized Crown Indian Army (increased British ratio)</td></tr>
              <tr><td><strong>Annexation Policy</strong></td><td>Aggressive (Subsidiary Alliance, Lapse)</td><td>Ended annexation; preserved loyal princely states</td></tr>
            </tbody>
          </table>

          <div class="callout callout-important">
            <div class="callout-title">⏭️ Transition to Next Period</div>
            Western education and economic exploitation sparked national consciousness, leading to the formation of the **Indian National Congress (1885)**.
          </div>`
  },
  {
    id: "ch2-freedom-movement-early-gandhi",
    chapterId: "political-map",
    chapterTitle: "Reshaping India's Political Map",
    icon: "\ud83c\uddee\ud83c\uddf3",
    title: "34. Freedom Movement \u2014 Early Nationalism to Gandhian Era (1885\u20131934)",
    difficulty: "Hard",
    readTime: "14 min",
    preview: "Study INC founding (1885), Moderates vs Extremists (Lal-Bal-Pal), 1905 Bengal Partition, Jallianwala Bagh (1919), Non-Cooperation, and 1930 Salt March.",
    contentHtml: `<p>The struggle for freedom evolved from elite petitions to mass non-violent resistance under Mahatma Gandhi.</p>

          <h3>Phases of the Freedom Movement</h3>
          <ul>
            <li><strong>Moderates (1885–1905):</strong> Naoroji, Gokhale; petitions, speeches, Drain theory.</li>
            <li><strong>Extremists (1905–1919):</strong> Lal-Bal-Pal (Lajpat Rai, Tilak, Bipin Pal); Swadeshi & Boycott after 1905 Bengal Partition. Tilak: <em>"Swaraj is my birthright and I shall have it!"</em></li>
            <li><strong>Jallianwala Bagh Massacre (April 13, 1919):</strong> General Dyer fired on peaceful crowd in Amritsar, radicalizing national demand.</li>
            <li><strong>Non-Cooperation Movement (1920–1922):</strong> Gandhi's mass boycott of cloth, courts, schools; halted after Chauri Chaura violence.</li>
            <li><strong>Civil Disobedience Movement (1930–1934):</strong> Gandhi's 388-km **Salt March to Dandi** (Apr 6, 1930) breaking British salt law. Poona Pact (1932) with Dr. B.R. Ambedkar.</li>
          </ul>

          <div class="callout callout-important">
            <div class="callout-title">⏭️ Transition to Next Period</div>
            The outbreak of World War II in 1939 set off the final phase of the freedom struggle.
          </div>`
  },
  {
    id: "ch2-quit-india-independence-1947",
    chapterId: "political-map",
    chapterTitle: "Reshaping India's Political Map",
    icon: "\ud83d\uddfd",
    title: "35. Final Phase \u2014 Quit India, INA & Independence (1939\u201315 August 1947)",
    difficulty: "Hard",
    readTime: "14 min",
    preview: "Examine WWII impact, 1942 Quit India ('Do or Die'), Netaji Subhas Chandra Bose & INA, Red Fort trials, Mountbatten Plan, and August 15, 1947 Independence.",
    contentHtml: `<p>World War II weakened British rule and energized the final push for Indian independence.</p>

          <h3>Key Milestones to Freedom</h3>
          <ul>
            <li><strong>Quit India Movement (Aug 8, 1942):</strong> Gandhi's call: <em>"Do or Die"</em>. Mass resistance across India despite instant arrest of Congress leadership.</li>
            <li><strong>Subhas Chandra Bose & INA:</strong> Netaji formed Azad Hind Fauj in Singapore (1943); slogan: <em>"Give me blood, and I shall give you freedom!"</em>. Imphal-Kohima campaign.</li>
            <li><strong>INA Trials & Naval Mutiny (1945–1946):</strong> Red Fort trials sparked public fury; Royal Indian Navy mutiny (1946) showed military could no longer be relied upon by British.</li>
            <li><strong>Indian Independence Act (1947):</strong> Mountbatten Plan led to British exit.</li>
            <li><strong>Independence (August 15, 1947):</strong> At midnight, India became an independent sovereign nation. Nehru delivered his <em>"Tryst with Destiny"</em> speech: <em>"At the stroke of the midnight hour, when the world sleeps, India will awake to life and freedom."</em></li>
          </ul>

          <div class="callout callout-important">
            <div class="callout-title">🇮🇳 The Historic Milestone</div>
            On <strong>August 15, 1947</strong>, centuries of foreign colonial rule ended, marking the triumph of the Indian Freedom Movement and the birth of modern independent India.
          </div>`
  },
  {
    id: 'ch5-adult-franchise-article326',
    chapterId: 'electoral-system',
    chapterTitle: 'Universal Adult Franchise & Electoral System',
    icon: '🗳️',
    title: '36. Universal Adult Franchise & Article 326 of Indian Constitution',
    difficulty: 'Easy',
    readTime: '7 min',
    preview: 'Understand the revolutionary constitutional principle granting equal voting rights to every adult citizen regardless of gender, caste, religion, wealth, or literacy.',
    contentHtml: `<p>Universal Adult Franchise guarantees that every adult citizen possesses an equal, non-discriminatory right to vote in democratic elections regardless of gender, caste, religion, wealth, race, or educational qualification.</p>

          <div class="callout callout-definition">
            <div class="callout-title">📜 Article 326 of the Indian Constitution</div>
            "The elections to the House of the People (Lok Sabha) and to the Legislative Assembly of every State shall be on the basis of <strong>adult suffrage</strong>; that is to say, every person who is a citizen of India and who is not less than eighteen years of age... shall be entitled to be registered as a voter at any such election."
          </div>

          <div class="formula-block">
            61st Constitutional Amendment Act (1988) ➔ Lowered Minimum Voting Age from 21 Years to 18 Years (Enacted under PM Rajiv Gandhi; Effective 28 March 1989)
          </div>

          <h3>Pillars of Universal Adult Suffrage</h3>
          <ul>
            <li><strong>One Person, One Vote, One Value:</strong> Every individual citizen gets exactly one vote, and every vote carries identical mathematical weight in determining legislative seats (Article 14 equality).</li>
            <li><strong>Elimination of Colonial Franchise Barriers:</strong> Under the British <em>Government of India Act, 1935</em>, barely 10-13% of the population had voting rights based on property ownership, land revenue tax, and educational degrees. Post-1950 India granted 100% universal suffrage from Day 1.</li>
            <li><strong>Gender Equality:</strong> While Western democracies took decades to grant women voting rights (USA in 1920, UK in 1928, France in 1944), India enshrined equal voting rights for women immediately upon independence in 1947/1950.</li>
            <li><strong>Social Inclusion & Social Democracy:</strong> Empowers marginalized communities, Scheduled Castes (SC), Scheduled Tribes (ST), and poor agricultural laborers to hold political leaders accountable.</li>
          </ul>

          <div class="callout callout-important">
            <div class="callout-title">⚖️ Disqualifications under Law</div>
            Voting rights can only be restricted by law passed by Parliament on grounds of: non-residence, unsoundness of mind, crime, or corrupt and illegal election practices.
          </div>`
  },
  {
    id: 'ch5-election-commission-eci',
    chapterId: 'electoral-system',
    chapterTitle: 'Universal Adult Franchise & Electoral System',
    icon: '🏛️',
    title: '37. Structure & Constitutional Authority of Election Commission (ECI)',
    difficulty: 'Medium',
    readTime: '8 min',
    preview: 'Explore Article 324, the multi-member structure of ECI, powers of Chief Election Commissioner Sukumar Sen to present, and autonomous status.',
    contentHtml: `<p>India is the world's largest vibrant constitutional democracy. Conducting free, fair, transparent, and periodic elections serves as the bedrock of representative democracy, ensuring peaceful transfer of power.</p>

          <div class="callout callout-important">
            <div class="callout-title">⚖️ Constitutional Status of ECI (Article 324)</div>
            Article 324 of the Constitution vests the <strong>superintendence, direction, and control</strong> of the preparation of electoral rolls and the conduct of all elections to Parliament, State Legislatures, and the offices of President and Vice-President in the independent <strong>Election Commission of India (ECI)</strong>.
          </div>

          <h3>Structure & Composition of ECI</h3>
          <ul>
            <li><strong>Multi-Member Body:</strong> Consists of the <strong>Chief Election Commissioner (CEC)</strong> and two <strong>Election Commissioners (ECs)</strong>. Originally a single-member body in 1950, it became a multi-member commission in 1993 to ensure collective decision-making.</li>
            <li><strong>Appointment:</strong> Appointed by the President of India based on recommendations of a high-level selection committee.</li>
            <li><strong>Security of Tenure:</strong> The CEC cannot be removed from office except in like manner and on the like grounds as a Judge of the Supreme Court (impeachment by a two-thirds special majority in Parliament). This prevents political interference by the ruling government.</li>
            <li><strong>Salaries & Independence:</strong> Salaries and conditions of service of Commissioners are equal to Supreme Court Judges and charged to the Consolidated Fund of India.</li>
          </ul>

          <div class="callout callout-observation">
            <div class="callout-title">🏛️ Historic Pioneer: Sukumar Sen (1st CEC)</div>
            <strong>Sukumar Sen</strong> served as India's first Chief Election Commissioner (1950–1958). He successfully organized India's historic 1st General Election (1951–52) across 173 million voters, 85% of whom were unlettered, earning international acclaim for Indian democracy.
          </div>

          <h3>3 Major Functions of ECI</h3>
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Powers & Operational Responsibilities</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Administrative</strong></td>
                <td>Demarcating constituency boundaries, preparing electoral rolls, enforcing Model Code of Conduct, scheduling election dates.</td>
              </tr>
              <tr>
                <td><strong>Advisory</strong></td>
                <td>Advising President and Governors on disqualifications of MPs and MLAs under Representation of the People Act.</td>
              </tr>
              <tr>
                <td><strong>Quasi-Judicial</strong></td>
                <td>Resolving disputes regarding recognition of political parties and allocation of official election symbols (e.g., Lotus, Hand, Elephant).</td>
              </tr>
            </tbody>
          </table>`
  },
  {
    id: 'ch5-evm-vvpat-evolution',
    chapterId: 'electoral-system',
    chapterTitle: 'Universal Adult Franchise & Electoral System',
    icon: '📟',
    title: '38. Voting Technology: Paper Ballots to EVMs & VVPAT System',
    difficulty: 'Hard',
    readTime: '8 min',
    preview: 'Trace the technological transition from paper ballot boxes to Electronic Voting Machines (EVMs), VVPAT paper audit trails, and NOTA.',
    contentHtml: `<p>The evolution of voting technology in India demonstrates how continuous engineering innovation prevents electoral fraud, booth capturing, and ballot tampering while ensuring rapid, accurate vote counting.</p>

          <div class="callout callout-definition">
            <div class="callout-title">📟 Electronic Voting Machine (EVM) Architecture</div>
            An EVM is a standalone, non-networked, battery-operated electronic voting device manufactured exclusively by public sector undertakings <strong>BEL (Bharat Electronics Ltd)</strong> and <strong>ECIL (Electronics Corporation of India Ltd)</strong>.
            <br>• <strong>Control Unit (CU):</strong> Placed with the Presiding Officer; controls ballot activation and stores encrypted vote tallies in non-volatile ROM memory.
            <br>• <strong>Balloting Unit (BU):</strong> Placed inside the private voting compartment; features candidate names, party symbols, blue vote buttons, and Braille indicators for visually impaired voters.
          </div>

          <h3>Historical Timeline of Voting Innovation</h3>
          <ul>
            <li><strong>1952–1990s (Paper Ballot Era):</strong> Voters stamped physical paper ballots and dropped them into steel ballot boxes. Vulnerable to booth capturing, ballot box stuffing, and slow manual counting taking days.</li>
            <li><strong>1982 (First EVM Trial):</strong> EVMs first tested in 50 polling stations of Paravur Assembly Constituency in Kerala.</li>
            <li><strong>1998–1999 (State Pilot Rollout):</strong> EVMs deployed across selected Assembly Constituencies in Delhi, Madhya Pradesh, and Rajasthan.</li>
            <li><strong>2004 (100% Nationwide EVM Rollout):</strong> First general election where EVMs were used across all 543 Lok Sabha constituencies in India.</li>
            <li><strong>2013 (Supreme Court VVPAT Order):</strong> SC ordered ECI to introduce VVPAT in <em>Subramanian Swamy vs. ECI</em> to ensure voter verification.</li>
            <li><strong>2019 (100% VVPAT Coverage):</strong> Every EVM in the 2019 General Election was linked with a VVPAT unit.</li>
          </ul>

          <div class="callout callout-important">
            <div class="callout-title">📜 VVPAT & NOTA Mechanism</div>
            <br>• <strong>VVPAT (Voter Verifiable Paper Audit Trail):</strong> When a voter presses a button on the EVM, the VVPAT prints a paper slip displaying the candidate serial number, name, and party symbol for <strong>7 seconds</strong> behind a transparent glass window before automatically cutting and dropping it into a sealed tamper-evident box.
            <br>• <strong>NOTA (None Of The Above):</strong> Introduced in October 2013 following a Supreme Court judgment, allowing voters to exercise their right to reject all contesting candidates without violating vote secrecy.
          </div>`
  },
  {
    id: 'ch5-election-cycle-process',
    chapterId: 'electoral-system',
    chapterTitle: 'Universal Adult Franchise & Electoral System',
    icon: '🔄',
    title: '39. The Complete Election Lifecycle & Democratic Voting Ethics',
    difficulty: 'Medium',
    readTime: '8 min',
    preview: 'Follow the step-by-step electoral lifecycle from notification, nominations, scrutiny by Returning Officer, campaigning, Model Code of Conduct, polling, to vote counting.',
    contentHtml: `<p>Conducting general elections for nearly 1 billion eligible voters across 1 million polling stations requires an airtight, multi-stage administrative workflow governed by the <em>Representation of the People Act, 1950 & 1951</em>.</p>

          <h3>The 8-Stage Election Lifecycle Workflow</h3>
          <ol>
            <li><strong>Delimitation of Constituencies:</strong> Setting geographical boundaries of Parliamentary and Assembly constituencies by an independent Delimitation Commission based on census data.</li>
            <li><strong>Revision of Electoral Rolls:</strong> Updating voter lists to add new 18-year-old citizens and remove deceased/shifted voters.</li>
            <li><strong>Notification of Election:</strong> Official election call issued by the President (for Lok Sabha) or Governor (for State Assembly) upon recommendation of ECI.</li>
            <li><strong>Filing Nominations & Affidavits:</strong> Contesting candidates file nomination papers along with <strong>Form 26 Affidavit</strong> detailing criminal records, personal assets, liabilities, and educational qualifications.</li>
            <li><strong>Scrutiny of Nominations:</strong> The <strong>Returning Officer (RO)</strong> publicly examines nomination papers to accept valid candidates and reject defective ones.</li>
            <li><strong>Withdrawal of Candidature:</strong> Candidates are given a 2-day official window to withdraw their nominations, after which the final list of contesting candidates and symbols is published.</li>
            <li><strong>Election Campaigning & Silence Period:</strong> Parties publish election manifestos, hold rallies, and campaign until the mandatory <strong>48-hour Silence Period</strong> before polling ends.</li>
            <li><strong>Polling, Counting & Declaration of Results:</strong> Voters cast EVM votes on Polling Day under security. Votes are counted on a scheduled date, and the RO presents the <em>Certificate of Election</em> to the winner.</li>
          </ol>

          <div class="callout callout-observation">
            <div class="callout-title">👮 Key Administrative Personnel</div>
            <br>• <strong>District Election Officer (DEO):</strong> Usually the District Collector/Magistrate; coordinates all election machinery in the district.
            <br>• <strong>Returning Officer (RO):</strong> Responsible for conducting elections in a specific constituency and declaring the final result.
            <br>• <strong>Presiding Officer (PO):</strong> In-charge of an individual polling booth on Election Day.
          </div>`
  },
  {
    id: 'ch5-voter-registration-epic-portal',
    chapterId: 'electoral-system',
    chapterTitle: 'Universal Adult Franchise & Electoral System',
    icon: '🪪',
    title: '40. Electoral Roll Revision, Voter Registration Forms & EPIC',
    difficulty: 'Medium',
    readTime: '8 min',
    preview: 'Discover how the Electoral Roll is maintained, official ECI registration forms (Form 6, 7, 8), EPIC card features, and National Voters\' Day.',
    contentHtml: `<p>Voter registration is the essential precursor to exercising democratic rights. The ECI conducts continuous electoral roll revisions to ensure 100% voter coverage under the motto <em>"No Voter to be Left Behind"</em>.</p>

          <h3>Electoral Photo Identity Card (EPIC)</h3>
          <p>First introduced in 1993 under Chief Election Commissioner <strong>T.N. Seshan</strong>, the <strong>EPIC Card</strong> is a secure identity document issued to every registered voter to prevent impersonation, voter fraud, and bogus voting.</p>

          <h3>Official ECI Registration Forms</h3>
          <table>
            <thead>
              <tr>
                <th>Form Number</th>
                <th>Purpose & Statutory Function</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Form 6</strong></td>
                <td>Application for new voter registration / inclusion of name for first-time 18+ voters.</td>
              </tr>
              <tr>
                <td><strong>Form 6A</strong></td>
                <td>Application for registration of Non-Resident Indian (NRI) overseas electors.</td>
              </tr>
              <tr>
                <td><strong>Form 7</strong></td>
                <td>Application for objection against inclusion or deletion of a name from the electoral roll.</td>
              </tr>
              <tr>
                <td><strong>Form 8</strong></td>
                <td>Application for correction of details (name, photo, DOB) or shifting of residence address.</td>
              </tr>
            </tbody>
          </table>

          <div class="callout callout-definition">
            <div class="callout-title">📅 National Voters' Day (25th January)</div>
            Celebrated annually on <strong>25th January</strong> across India to mark the founding day of the Election Commission of India (25 Jan 1950), aiming to encourage, facilitate, and maximize new voter enrollment.
          </div>`
  },
  {
    id: 'ch5-model-code-conduct-cvigil',
    chapterId: 'electoral-system',
    chapterTitle: 'Universal Adult Franchise & Electoral System',
    icon: '⚖️',
    title: '41. Model Code of Conduct (MCC), Ethics & cVIGIL App',
    difficulty: 'Hard',
    readTime: '8 min',
    preview: 'Understand the ethical rules enforced under Model Code of Conduct (MCC), government power restrictions, silence period, and cVIGIL app.',
    contentHtml: `<p>The <strong>Model Code of Conduct (MCC)</strong> is a set of ethical rules and operational guidelines agreed upon by political parties to maintain a level playing field, prevent ruling party misuse of power, and ensure peace during elections.</p>

          <h3>Origin & Enforceability of MCC</h3>
          <p>First introduced during the 1960 Kerala State Assembly Elections, the MCC comes into force <strong>immediately upon the announcement of election schedules</strong> by the ECI and remains active until the completion of results.</p>

          <h3>Key Provisions & Restrictions under MCC</h3>
          <ul>
            <li><strong>Prohibition on Ruling Party Misuse:</strong> Ministers cannot combine official government visits with election campaigning, cannot announce new welfare projects/grants, and cannot use official government vehicles or aircraft for campaigning.</li>
            <li><strong>Ban on Communal & Caste Appeals:</strong> No party or candidate can appeal to caste, religious, or linguistic feelings to secure votes. Places of worship (temples, mosques, churches) cannot be used for election propoganda.</li>
            <li><strong>48-Hour Silence Period:</strong> All campaign speeches, music, public meetings, and political broadcasts must stop 48 hours prior to the close of polling.</li>
            <li><strong>Regulating Manifestos:</strong> Election manifestos must not contain unfeasible promises that corrupt voter integrity.</li>
          </ul>

          <div class="callout callout-important">
            <div class="callout-title">📱 cVIGIL App – Citizen-Led Enforcement</div>
            <strong>cVIGIL</strong> is an ECI mobile app enabling citizens to report live MCC violations (illegal banners, liquor distribution, cash for votes) by snapping a photo or 2-minute video. The app automatically captures GPS coordinates and dispatches Flying Squads to resolve complaints within <strong>100 minutes</strong>.
          </div>`
  },
  {
    id: 'ch5-fptp-vs-proportional-representation',
    chapterId: 'electoral-system',
    chapterTitle: 'Universal Adult Franchise & Electoral System',
    icon: '📊',
    title: '42. Electoral Systems: First-Past-The-Post (FPTP) vs. Proportional Representation',
    difficulty: 'Hard',
    readTime: '9 min',
    preview: 'Compare the First-Past-The-Post (FPTP) plurality voting system used in Lok Sabha with Proportional Representation (PR-STV) used in Rajya Sabha.',
    contentHtml: `<p>Democracies around the world adopt different electoral systems to convert citizen votes into legislative seats. India uses a dual electoral structure tailored to its governance needs.</p>

          <h3>First-Past-The-Post (FPTP) vs. Proportional Representation (PR)</h3>
          <table>
            <thead>
              <tr>
                <th>Comparison Aspect</th>
                <th>First-Past-The-Post (FPTP)</th>
                <th>Proportional Representation (PR-STV)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Core Principle</strong></td>
                <td>Plurality voting: Candidate securing the highest number of votes in a single constituency wins, regardless of 50%+ threshold.</td>
                <td>Quota voting: Seats allocated to political parties in exact proportion to the percentage of total votes received nationwide.</td>
              </tr>
              <tr>
                <td><strong>Usage in India</strong></td>
                <td>Direct elections: Lok Sabha (MPs) & State Legislative Assemblies (MLAs), Gram Panchayats.</td>
                <td>Indirect elections: Rajya Sabha, State Legislative Councils, President & Vice-President of India.</td>
              </tr>
              <tr>
                <td><strong>Constituency Type</strong></td>
                <td>Single-Member Constituencies (country divided into 543 distinct geographic units).</td>
                <td>Multi-Member Constituencies or entire state/country as a single electoral district.</td>
              </tr>
              <tr>
                <td><strong>Voter Choice</strong></td>
                <td>Voters vote directly for an individual candidate representing a party or running independently.</td>
                <td>Voters mark preferences (1, 2, 3) for candidates on a single transferable ballot paper.</td>
              </tr>
              <tr>
                <td><strong>Key Advantage</strong></td>
                <td>Simple for voters to understand; ensures clear accountability between representative and constituency.</td>
                <td>Ensures minor political parties get representation proportional to their popular vote share.</td>
              </tr>
            </tbody>
          </table>`
  },
  {
    id: 'ch5-electoral-reforms-women-reservation',
    chapterId: 'electoral-system',
    chapterTitle: 'Universal Adult Franchise & Electoral System',
    icon: '🏛️',
    title: '43. Electoral Reforms, Candidate Affidavits & Women\'s Reservation',
    difficulty: 'Hard',
    readTime: '9 min',
    preview: 'Examine major electoral reforms including CEC T.N. Seshan\'s vision, candidate wealth/criminal affidavits, and Nari Shakti Vandan Adhiniyam 2023.',
    contentHtml: `<p>Continuous electoral reforms strengthen democratic integrity, curb money and muscle power, enforce transparency, and promote equal representation for women in governance.</p>

          <h3>Pioneering Electoral Reforms in India</h3>
          <ul>
            <li><strong>T.N. Seshan Reforms (1990s):</strong> Strict enforcement of Model Code of Conduct, issuance of EPIC photo voter IDs, banning illegal wall writings, enforcing campaign expenditure caps, and deploying central observers.</li>
            <li><strong>Candidate Criminal & Asset Disclosure (Form 26):</strong> Following landmark Supreme Court rulings in 2002 and 2003, every candidate must submit a sworn affidavit disclosing personal criminal charges framed by courts, income tax details, and moveable/immoveable assets of self and spouse.</li>
            <li><strong>Ceiling on Election Expenditure:</strong> ECI places strict statutory limits on candidate campaign spending (up to Rs. 95 Lakhs for Parliamentary and Rs. 40 Lakhs for Assembly constituencies).</li>
          </ul>

          <div class="callout callout-important">
            <div class="callout-title">👩‍💼 Nari Shakti Vandan Adhiniyam (106th Constitutional Amendment Act, 2023)</div>
            A landmark constitutional reform reserving <strong>33% (one-third) of all seats for women</strong> in the Lok Sabha and State Legislative Assemblies (including SC/ST reserved seats). This landmark legislation guarantees historic gender parity in lawmaking bodies.
          </div>`
  },
  {
    id: 'ch7-intro-factors-production',
    chapterId: 'factors-production',
    chapterTitle: 'Factors of Production & Economic Systems',
    icon: '🏭',
    title: '44. What are Factors of Production & The Four Fundamental Pillars',
    difficulty: 'Easy',
    readTime: '7 min',
    preview: 'Learn the four foundational economic inputs required for manufacturing goods and supplying services: Land, Labour, Capital, and Entrepreneurship.',
    contentHtml: `<p>In economics, <strong>Factors of Production</strong> are the essential inputs, human efforts, natural resources, and capital assets required to manufacture goods and provide services to generate economic wealth.</p>

          <div class="formula-block">
            Production Function: Output (Q) = f(Land, Labour, Capital, Entrepreneurship)
          </div>

          <h3>The 4 Foundational Pillars & Their Rewards</h3>
          <table>
            <thead>
              <tr>
                <th>Factor of Production</th>
                <th>Nature & Definition</th>
                <th>Economic Factor Reward</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Land (Natural Inputs)</strong></td>
                <td>All free gifts of nature (soil, water, minerals, forests, sunshine, air).</td>
                <td><strong>Rent</strong></td>
              </tr>
              <tr>
                <td><strong>2. Labour (Human Effort)</strong></td>
                <td>Physical muscular power and mental cognitive exertion performed by human workers.</td>
                <td><strong>Wages / Salary</strong></td>
              </tr>
              <tr>
                <td><strong>3. Capital (Man-Made Assets)</strong></td>
                <td>Physical tools, machinery, equipment, buildings, and operating funds used in production.</td>
                <td><strong>Interest</strong></td>
              </tr>
              <tr>
                <td><strong>4. Entrepreneurship (Organizing Unit)</strong></td>
                <td>The visionary enterprise leader who organizes Land, Labour, and Capital while bearing commercial risk.</td>
                <td><strong>Profit</strong></td>
              </tr>
            </tbody>
          </table>

          <h3>Interplay across Production Sectors</h3>
          <p>Production transforms primary natural inputs into finished consumer goods across three interconnected economic sectors:</p>
          <ul>
            <li><strong>Primary Sector:</strong> Extraction of natural resources (Agriculture, Mining, Fishing).</li>
            <li><strong>Secondary Sector:</strong> Manufacturing and industrial processing (Textile mills, Steel plants).</li>
            <li><strong>Tertiary Sector:</strong> Service delivery enabling production and distribution (Banking, Transport, IT).</li>
          </ul>`
  },
  {
    id: 'ch7-land-natural-factor',
    chapterId: 'factors-production',
    chapterTitle: 'Factors of Production & Economic Systems',
    icon: '🌍',
    title: '45. Land – The Primary Gift of Nature & Rent',
    difficulty: 'Medium',
    readTime: '7 min',
    preview: 'Understand the unique economic characteristics of Land as a passive, geographically immobile, fixed natural input that earns Rent.',
    contentHtml: `<p><strong>Land</strong> is the primary natural factor of production, encompassing all natural resources provided freely by nature on, above, or beneath the Earth's surface without human creation cost.</p>

          <h3>6 Unique Economic Characteristics of Land</h3>
          <ul>
            <li><strong>1. Free Gift of Nature:</strong> Land has no supply price or cost of creation for society as a whole.</li>
            <li><strong>2. Fixed & Inelastic Supply:</strong> The total physical surface area of land on Earth is strictly fixed and cannot be increased by human effort ($E_s = 0$).</li>
            <li><strong>3. Permanent & Indestructible Fertility:</strong> Land possesses original, indestructible powers of fertility and mineral composition (as formulated by economist David Ricardo).</li>
            <li><strong>4. Geographic Immobility:</strong> Land cannot be physically moved from one geographical location to another.</li>
            <li><strong>5. Heterogeneous Quality:</strong> Land varies in fertility, soil texture, climate, mineral richness, and location advantage across regions.</li>
            <li><strong>6. Subject to Diminishing Returns:</strong> Applying additional units of labor and capital to a fixed plot of land eventually yields smaller increments of crop output (Law of Diminishing Marginal Returns).</li>
          </ul>

          <div class="callout callout-definition">
            <div class="callout-title">💰 Economic Rent Defined</div>
            <strong>Rent</strong> is the price or compensation paid to landowners for using the original and indestructible powers of soil and natural resources in production activities.
          </div>`
  },
  {
    id: 'ch7-labour-human-effort',
    chapterId: 'factors-production',
    chapterTitle: 'Factors of Production & Economic Systems',
    icon: '👨‍🏭',
    title: '46. Labour – Physical vs. Mental Effort & Productivity',
    difficulty: 'Medium',
    readTime: '8 min',
    preview: 'Distinguish between Physical (Manual) and Mental (Intellectual) Labour, labor perishability, and factors determining worker productivity.',
    contentHtml: `<p><strong>Labour</strong> encompasses all human physical effort (muscular exertion) and mental work (intellectual processing) performed by human beings for monetary compensation (wages or salary).</p>

          <h3>5 Peculiarities of Human Labour</h3>
          <ul>
            <li><strong>1. Inseparable from the Worker:</strong> Labour cannot be separated from the body and mind of the worker. The worker must physically present themselves to deliver labor services.</li>
            <li><strong>2. Highly Perishable:</strong> Unused labor time is lost forever. If a worker is unemployed for a day, that day's labor capacity cannot be stored or recovered.</li>
            <li><strong>3. Human Factor & Ethics:</strong> Unlike inanimate machines, human workers require safety, reasonable working hours, healthcare, fair treatment, and dignified working environments.</li>
            <li><strong>4. Weak Bargaining Power:</strong> Individual workers, especially unskilled laborers, often possess weaker bargaining power compared to capital employers, necessitating trade unions and minimum wage laws.</li>
            <li><strong>5. Labor Supply Flexibility:</strong> Labor supply depends on demographic population growth, literacy rate, health standards, and wage incentives.</li>
          </ul>

          <h3>Physical Labour vs. Mental (Cognitive) Labour</h3>
          <table>
            <thead>
              <tr>
                <th>Attribute</th>
                <th>Physical / Manual Labour</th>
                <th>Mental / Intellectual Labour</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Primary Skill</strong></td>
                <td>Physical strength, stamina, manual execution, dexterity.</td>
                <td>Cognitive reasoning, specialized knowledge, problem-solving.</td>
              </tr>
              <tr>
                <td><strong>Occupational Examples</strong></td>
                <td>Construction workers, agricultural harvesters, factory assembly line operators, porters.</td>
                <td>Surgeons, software engineers, architects, research scientists, accountants.</td>
              </tr>
            </tbody>
          </table>`
  },
  {
    id: 'ch7-human-capital-investment',
    chapterId: 'factors-production',
    chapterTitle: 'Factors of Production & Economic Systems',
    icon: '🎓',
    title: '47. Human Capital – Investing in Education & Health',
    difficulty: 'Medium',
    readTime: '8 min',
    preview: 'Discover how investment in education, Skill India vocational training, and healthcare transforms raw population into highly productive Human Capital.',
    contentHtml: `<p>Raw human population transforms into productive <strong>Human Capital</strong> when a nation invests in education, technical skill development, medical healthcare, and nutritional well-being.</p>

          <div class="callout callout-important">
            <div class="callout-title">🎓 Human Capital vs. Physical Capital</div>
            <br>• <strong>Physical Capital:</strong> Tangible, man-made assets (machinery, factory buildings, tools) that depreciate over time with physical wear and tear.
            <br>• <strong>Human Capital:</strong> Intangible skills, knowledge, expertise, health, and problem-solving abilities embodied in human beings that appreciate with education and continuous experience.
          </div>

          <h3>4 Core Pathways of Human Capital Formation</h3>
          <ol>
            <li><strong>Formal Quality Education:</strong> Building foundational literacy, numeric capabilities, analytical reasoning, and scientific aptitude from primary to higher education.</li>
            <li><strong>Technical & Skill Development:</strong> Specialized vocational training through Industrial Training Institutes (ITIs), polytechnics, and national initiatives like <em>Skill India</em> and <em>PMKVY</em>.</li>
            <li><strong>Healthcare, Nutrition & Sanitation:</strong> Clean drinking water, universal immunization, disease prevention, and hospital infrastructure reduce sick leave days, extend life expectancy, and maximize workplace output.</li>
            <li><strong>On-the-Job Training & Information Access:</strong> Up-skilling workers with modern software tools, workplace safety protocols, and digital job matching portals.</li>
          </ol>`
  },
  {
    id: 'ch7-facilitators-kaizen',
    chapterId: 'factors-production',
    chapterTitle: 'Factors of Production & Economic Systems',
    icon: '⚙️',
    title: '48. Facilitators of Human Capital & Japanese Kaizen Philosophy',
    difficulty: 'Hard',
    readTime: '8 min',
    preview: 'Learn how technology, automation, AI, and the Japanese Kaizen philosophy of continuous workplace improvement boost human capital productivity.',
    contentHtml: `<p>Modern production management relies on technology integration, operational ergonomics, supply chain value addition, and continuous workplace improvement methodologies to maximize economic efficiency.</p>

          <div class="callout callout-definition">
            <div class="callout-title">⚙️ Japanese Kaizen (改善) Philosophy</div>
            <strong>Kaizen</strong> is a Japanese business philosophy meaning <em>'continuous improvement'</em>. It involves every worker—from assembly line operators to chief executives—in making incremental, daily improvements to eliminate waste (Muda), improve safety, and elevate product quality.
          </div>

          <h3>The 5S Workplace Methodology</h3>
          <ul>
            <li><strong>Seiri (Sort):</strong> Separate necessary items from unnecessary clutter.</li>
            <li><strong>Seiton (Set in Order):</strong> Organize tools so they are easily accessible.</li>
            <li><strong>Seiso (Shine):</strong> Keep equipment and work areas spotlessly clean.</li>
            <li><strong>Seiketsu (Standardize):</strong> Establish standardized procedures for maintenance.</li>
            <li><strong>Shitsuke (Sustain):</strong> Build self-discipline and habits to maintain standards.</li>
          </ul>

          <h3>Value Addition across the Supply Chain</h3>
          <p>Value Addition occurs when raw inputs are processed through successive stages to increase their utility and market price:</p>
          <div class="formula-block">
            Raw Agricultural Cotton (₹100/kg) ➔ Spun Cotton Thread (₹250/kg) ➔ Woven Fabric (₹600/m) ➔ Tailored Designer Garment (₹2,500)
          </div>`
  },
  {
    id: 'ch7-demographic-dividend-india',
    chapterId: 'factors-production',
    chapterTitle: 'Factors of Production & Economic Systems',
    icon: '🇮🇳',
    title: '49. India\'s Demographic Dividend & Youth Potential',
    difficulty: 'Hard',
    readTime: '8 min',
    preview: 'Understand demographic transition, working-age ratio (15-64), and how India\'s median age of ~28 years offers a massive economic growth window.',
    contentHtml: `<p>India is currently experiencing a historic demographic transition, providing a unique strategic economic growth window over the coming decades.</p>

          <div class="callout callout-important">
            <div class="callout-title">📈 What is the Demographic Dividend?</div>
            The <strong>Demographic Dividend</strong> refers to the accelerated economic growth potential that results when a country's working-age population ($15-64	ext{ years}$) is significantly larger than its non-working dependent population ($<15	ext{ children and }>65	ext{ elderly}$).
          </div>

          <div class="formula-block">
            Dependency Ratio = [(Population &lt; 15 + Population &gt; 65) / Working-Age Population (15–64)] &times; 100
          </div>

          <h3>Key Demographic Facts for India</h3>
          <ul>
            <li><strong>Median Age Advantage:</strong> India's median population age is approximately <strong>28 years</strong>, making it one of the youngest major economies in the world (compared to 38 in China and USA, 48 in Japan).</li>
            <li><strong>Working-Age Majority:</strong> Over 65% of India's total population falls within the productive working-age bracket ($15-64	ext{ years}$).</li>
            <li><strong>Window of Opportunity:</strong> India's demographic dividend window opened around 2005-06 and is projected to last until 2055-56 (nearly 50 years).</li>
            <li><strong>Strategic Imperatives:</strong> Fully realizing this dividend requires creating formal employment opportunities, promoting female labor force participation (FLFP), providing quality technical education, and fostering entrepreneurial ecosystems.</li>
          </ul>`
  },
  {
    id: 'ch7-capital-fixed-working',
    chapterId: 'factors-production',
    chapterTitle: 'Factors of Production & Economic Systems',
    icon: '🚜',
    title: '50. Capital – Physical, Financial, Fixed & Working Capital',
    difficulty: 'Medium',
    readTime: '8 min',
    preview: 'Differentiate between Fixed Capital (durable machinery, factory buildings) and Working Capital (raw materials, daily cash reserves).',
    contentHtml: `<p><strong>Capital</strong> is the man-made factor of production comprising all durable tools, machinery, infrastructure buildings, raw materials, and financial funds utilized in producing goods and services.</p>

          <h3>Fixed Capital vs. Working Capital</h3>
          <table>
            <thead>
              <tr>
                <th>Comparison Parameter</th>
                <th>Fixed Capital</th>
                <th>Working Capital</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Definition & Nature</strong></td>
                <td>Durable man-made assets that remain in the production process over multiple production cycles spanning several years.</td>
                <td>Short-term operating assets that get completely used up or transformed within a single production cycle.</td>
              </tr>
              <tr>
                <td><strong>Exhaustion Rate</strong></td>
                <td>Does not get exhausted in a single production run; undergoes gradual physical depreciation.</td>
                <td>Gets fully consumed or converted into finished goods during a single production cycle.</td>
              </tr>
              <tr>
                <td><strong>Concrete Examples</strong></td>
                <td>Industrial machinery, factory land & buildings, tractors, combine harvesters, computer servers.</td>
                <td>Raw cotton, sugarcane, seeds, fertilizers, fuel, cash reserves for daily wage payments.</td>
              </tr>
              <tr>
                <td><strong>Financial Recovery</strong></td>
                <td>Recovered slowly through long-term asset usage and product sales margins.</td>
                <td>Recovered quickly as soon as finished goods are sold in the market.</td>
              </tr>
            </tbody>
          </table>

          <div class="callout callout-definition">
            <div class="callout-title">🔄 The Capital Formation Process</div>
            <strong>Capital Formation</strong> involves three sequential steps: 1. <em>Creation of Savings</em> by households ➔ 2. <em>Mobilization of Savings</em> through commercial banks ➔ 3. <em>Investment of Capital</em> in productive capital assets (machinery & technology).
          </div>`
  },
  {
    id: 'ch7-entrepreneurship-startups',
    chapterId: 'factors-production',
    chapterTitle: 'Factors of Production & Economic Systems',
    icon: '🚀',
    title: '51. Entrepreneurship – Innovation, Risk-Taking & Global Supply Chains',
    difficulty: 'Hard',
    readTime: '9 min',
    preview: 'Examine the organizing role of the Entrepreneur, Schumpeterian innovation, risk-taking, startups, and supply chain logistics management.',
    contentHtml: `<p>The <strong>Entrepreneur</strong> is the central organizing figure and risk-taker who combines Land, Labour, and Capital to establish, operate, and innovate commercial business enterprises.</p>

          <div class="callout callout-definition">
            <div class="callout-title">💡 Joseph Schumpeter's Innovation Model</div>
            Renowned economist Joseph Schumpeter defined the entrepreneur as an <strong>innovator</strong> who drives economic development by introducing:
            <br>1. A brand new product or service.
            <br>2. A novel method of production or automation.
            <br>3. Opening a new consumer market.
            <br>4. Securing new sources of raw material supply.
            <br>5. Reorganizing industry market structures.
          </div>

          <h3>4 Fundamental Functions of an Entrepreneur</h3>
          <ol>
            <li><strong>Initiation & Conceptualization:</strong> Identifying market gaps, formulating business ideas, and taking initial operational decisions.</li>
            <li><strong>Risk & Uncertainty Bearing:</strong> Facing potential commercial losses due to market demand fluctuations, technological changes, or price shifts. Unlike workers (wages) or landlords (rent), an entrepreneur's profit can be positive, zero, or negative.</li>
            <li><strong>Resource Assembly & Organization:</strong> Hiring skilled labor, acquiring factory land, securing bank capital, and establishing supply chains.</li>
            <li><strong>Continuous Innovation & Adaptation:</strong> Up-skilling workforce, implementing digital technology, and adapting to global market trends.</li>
          </ol>

          <div class="callout callout-observation">
            <div class="callout-title">🚀 Indian Startup Ecosystem & MSMEs</div>
            Micro, Small, and Medium Enterprises (MSMEs) and India's thriving startup ecosystem (with over 100+ Unicorns) act as vital engines of innovation, creating massive employment opportunities and driving national economic growth.
          </div>`
  }

];

const FLASHCARDS = [
  {
    "topic": "Political Map",
    "q": "What river system formed the core of the Indus Valley Civilization?",
    "a": "The Indus River and its tributaries."
  },
  {
    "topic": "Political Map",
    "q": "Which Harappan site features the world's earliest known tidal dockyard?",
    "a": "Lothal in Gujarat, India."
  },
  {
    "topic": "Political Map",
    "q": "What unique sanitation feature characterized Harappan cities?",
    "a": "Covered brick street drains connected to individual house bathrooms."
  },
  {
    "topic": "Political Map",
    "q": "What bronze sculpture was discovered at Mohenjo-daro?",
    "a": "The 'Dancing Girl' bronze sculpture."
  },
  {
    "topic": "Political Map",
    "q": "What does the term 'Veda' mean in Sanskrit?",
    "a": "Knowledge (from the root 'vid')."
  },
  {
    "topic": "Political Map",
    "q": "Name the four Vedas in order of their age.",
    "a": "Rig Veda, Sama Veda, Yajur Veda, and Atharva Veda."
  },
  {
    "topic": "Political Map",
    "q": "What were the two popular tribal assemblies in the Early Vedic period?",
    "a": "The Sabha (council of elders) and Samiti (general assembly)."
  },
  {
    "topic": "Political Map",
    "q": "What technology enabled Gangetic forest clearing in the Later Vedic period?",
    "a": "Iron technology (Krishna Ayas)."
  },
  {
    "topic": "Political Map",
    "q": "What are the four Varnas in traditional Indian society?",
    "a": "Brahmins, Kshatriyas, Vaishyas, and Shudras."
  },
  {
    "topic": "Political Map",
    "q": "How many Mahajanapadas existed around 600 BCE?",
    "a": "Sixteen (16) great territorial kingdoms and republics."
  },
  {
    "topic": "Political Map",
    "q": "Name an example of an ancient Indian republic (Gana-Sangha).",
    "a": "The Vajji Confederacy (Lichchhavi clan)."
  },
  {
    "topic": "Political Map",
    "q": "Which kingdom emerged as the supreme power among the Mahajanapadas?",
    "a": "Magadha (in modern Bihar)."
  },
  {
    "topic": "Political Map",
    "q": "Who founded the Mauryan Empire in 321 BCE?",
    "a": "Chandragupta Maurya, assisted by Chanakya (Kautilya)."
  },
  {
    "topic": "Political Map",
    "q": "What ancient treatise on statecraft was written by Chanakya?",
    "a": "The Arthashastra."
  },
  {
    "topic": "Political Map",
    "q": "Which battle transformed Emperor Ashoka into a promoter of Dhamma?",
    "a": "The Kalinga War (c. 261 BCE)."
  },
  {
    "topic": "Political Map",
    "q": "Why is the Gupta period called the 'Golden Age of India'?",
    "a": "Due to major breakthroughs in science (Aryabhata), literature (Kalidasa), and mathematics (zero)."
  },
  {
    "topic": "Political Map",
    "q": "Which Gupta mathematician calculated Earth's circumference and rotation?",
    "a": "Aryabhata (476–550 CE)."
  },
  {
    "topic": "Political Map",
    "q": "Who founded Nalanda University in the 5th century CE?",
    "a": "Kumaragupta I."
  },
  {
    "topic": "Political Map",
    "q": "Who was the Chinese pilgrim who visited Emperor Harshavardhana's court?",
    "a": "Xuanzang (Hiuen Tsang)."
  },
  {
    "topic": "Political Map",
    "q": "Which Chalukya king defeated Harshavardhana at the Narmada River?",
    "a": "Pulakeshin II."
  },
  {
    "topic": "Political Map",
    "q": "Which battle in 1192 opened northern India to Turkic conquest?",
    "a": "The Second Battle of Tarain (Muhammad Ghori defeated Prithviraj Chauhan)."
  },
  {
    "topic": "Political Map",
    "q": "Who founded the Delhi Sultanate in 1206?",
    "a": "Qutb-ud-din Aibak (Slave Dynasty)."
  },
  {
    "topic": "Political Map",
    "q": "Who was the first and only woman ruler of the Delhi Sultanate?",
    "a": "Razia Sultan (1236–1240)."
  },
  {
    "topic": "Political Map",
    "q": "What was the Iqta system in the Delhi Sultanate?",
    "a": "Assigning land revenue grants (iqtas) to military commanders for maintaining troops."
  },
  {
    "topic": "Political Map",
    "q": "Which Delhi Sultan enforced strict market price controls?",
    "a": "Alauddin Khalji."
  },
  {
    "topic": "Political Map",
    "q": "Name two controversial experiments of Muhammad bin Tughlaq.",
    "a": "Capital transfer to Daulatabad (1327) and token copper currency (1329)."
  },
  {
    "topic": "Political Map",
    "q": "Which Central Asian conqueror sacked Delhi in 1398?",
    "a": "Timur (Tamerlane)."
  },
  {
    "topic": "Political Map",
    "q": "Who built the Vijay Stambha (Victory Tower) at Chittor Fort?",
    "a": "Rana Kumbha of Mewar."
  },
  {
    "topic": "Political Map",
    "q": "Which 1576 battle pitted Maharana Pratap against Raja Man Singh?",
    "a": "The Battle of Haldighati."
  },
  {
    "topic": "Political Map",
    "q": "Who founded the Vijayanagara Empire in 1336?",
    "a": "Harihara I and Bukka Raya I."
  },
  {
    "topic": "Political Map",
    "q": "Who was the greatest emperor of the Vijayanagara Empire?",
    "a": "Krishnadevaraya (1509–1529)."
  },
  {
    "topic": "Political Map",
    "q": "Which 1565 battle led to the destruction of Vijayanagara's capital Hampi?",
    "a": "The Battle of Talikota (Rakkasa-Tangadi)."
  },
  {
    "topic": "Political Map",
    "q": "What was the first independent Muslim kingdom in the Deccan?",
    "a": "The Bahmani Sultanate (founded 1347 by Alauddin Bahman Shah)."
  },
  {
    "topic": "Political Map",
    "q": "What was the Paik system in the Ahom Kingdom of Assam?",
    "a": "Mandatory state service where adult males provided labor or military service."
  },
  {
    "topic": "Political Map",
    "q": "Which Ahom general defeated the Mughal navy at Saraighat in 1671?",
    "a": "Lachit Borphukan."
  },
  {
    "topic": "Political Map",
    "q": "When was the First Battle of Panipat fought?",
    "a": "April 21, 1526 (Babur defeated Ibrahim Lodi)."
  },
  {
    "topic": "Political Map",
    "q": "Which Afghan ruler introduced the silver Rupiya (Rupee)?",
    "a": "Sher Shah Suri (1540–1545)."
  },
  {
    "topic": "Political Map",
    "q": "What was Akbar's Mansabdari system?",
    "a": "A non-hereditary administrative ranking system based on Zat (rank) and Sawar (cavalry)."
  },
  {
    "topic": "Political Map",
    "q": "What was Akbar's land tax system formulated by Raja Todar Mal?",
    "a": "The Zabt (or Dahsala) system."
  },
  {
    "topic": "Political Map",
    "q": "What was Akbar's policy of universal peace and tolerance called?",
    "a": "Sulh-i-kul."
  },
  {
    "topic": "Political Map",
    "q": "Which Mughal Empress co-ruled alongside Jahangir and issued coins in her name?",
    "a": "Empress Nur Jahan."
  },
  {
    "topic": "Political Map",
    "q": "Name three major monuments built by Shah Jahan.",
    "a": "Taj Mahal, Red Fort (Delhi), and Jama Masjid."
  },
  {
    "topic": "Political Map",
    "q": "What poll tax on non-Muslims did Aurangzeb re-impose in 1679?",
    "a": "Jizya (abolished by Akbar in 1564)."
  },
  {
    "topic": "Political Map",
    "q": "What was Aurangzeb's 'Deccan Ulcer'?",
    "a": "His 26-year-long war in the Deccan (1681–1707) that drained the treasury and ruined his army."
  },
  {
    "topic": "Political Map",
    "q": "What concept of self-rule was championed by Chhatrapati Shivaji Maharaj?",
    "a": "Swarajya."
  },
  {
    "topic": "Political Map",
    "q": "What was Shivaji's council of eight ministers called?",
    "a": "The Ashta Pradhan."
  },
  {
    "topic": "Political Map",
    "q": "What were Chauth and Sardeshmukhi?",
    "a": "Maratha taxes (Chauth = 1/4th revenue, Sardeshmukhi = additional 10%)."
  },
  {
    "topic": "Political Map",
    "q": "Where and when was Shivaji crowned Chhatrapati?",
    "a": "At Raigad Fort on June 6, 1674."
  },
  {
    "topic": "Political Map",
    "q": "Which 1761 battle crushed Maratha ambitions of ruling all India?",
    "a": "The Third Battle of Panipat (against Ahmad Shah Abdali)."
  },
  {
    "topic": "Political Map",
    "q": "Who created the Khalsa military brotherhood on Baisakhi 1699?",
    "a": "Guru Gobind Singh Ji (10th Sikh Guru)."
  },
  {
    "topic": "Political Map",
    "q": "Who was the founder and greatest ruler of the Sikh Empire?",
    "a": "Maharaja Ranjit Singh ('Lion of Punjab')."
  },
  {
    "topic": "Political Map",
    "q": "What military innovation made Tipu Sultan famous worldwide?",
    "a": "Iron-cased war rockets."
  },
  {
    "topic": "Political Map",
    "q": "Where did Tipu Sultan die fighting the British in 1799?",
    "a": "On the ramparts of Seringapatam."
  },
  {
    "topic": "Political Map",
    "q": "Why was Bengal called the 'Paradise of the East' in the 18th century?",
    "a": "Due to its immense wealth from Dhaka muslin, silk, and agriculture."
  },
  {
    "topic": "Political Map",
    "q": "Who founded the independent state of Hyderabad in 1724?",
    "a": "Nizam-ul-Mulk Asaf Jah I."
  },
  {
    "topic": "Political Map",
    "q": "Who was the first European to reach India by sea in 1498?",
    "a": "Vasco da Gama at Calicut."
  },
  {
    "topic": "Political Map",
    "q": "When was the English East India Company founded?",
    "a": "December 31, 1600 under Queen Elizabeth I's charter."
  },
  {
    "topic": "Political Map",
    "q": "Which 1757 battle began EIC political rule in Bengal?",
    "a": "The Battle of Plassey (Clive vs Siraj-ud-Daulah)."
  },
  {
    "topic": "Political Map",
    "q": "What rights did the EIC gain after the Battle of Buxar (1764)?",
    "a": "Diwani Rights (revenue collection) over Bengal, Bihar, and Odisha."
  },
  {
    "topic": "Political Map",
    "q": "Who introduced the Subsidiary Alliance system in 1798?",
    "a": "Lord Wellesley."
  },
  {
    "topic": "Political Map",
    "q": "Who introduced the Doctrine of Lapse policy in 1848?",
    "a": "Lord Dalhousie."
  },
  {
    "topic": "Political Map",
    "q": "Which sepoy struck the first blow of the 1857 Revolt at Barrackpore?",
    "a": "Mangal Pandey (March 29, 1857)."
  },
  {
    "topic": "Political Map",
    "q": "Who was proclaimed symbolic leader of the 1857 Revolt in Delhi?",
    "a": "Bahadur Shah Zafar II."
  },
  {
    "topic": "Political Map",
    "q": "Who was the heroic queen of Jhansi who died fighting in 1858?",
    "a": "Rani Lakshmibai."
  },
  {
    "topic": "Political Map",
    "q": "What major administrative change occurred after the 1857 Revolt?",
    "a": "Government of India Act 1858 transferred rule from EIC to British Crown."
  },
  {
    "topic": "Political Map",
    "q": "What term did Dadabhai Naoroji coin for British economic exploitation?",
    "a": "The 'Drain of Wealth'."
  },
  {
    "topic": "Political Map",
    "q": "When and where was the Indian National Congress founded?",
    "a": "December 28, 1885 in Bombay."
  },
  {
    "topic": "Political Map",
    "q": "Who were the Extremist leaders known as 'Lal-Bal-Pal'?",
    "a": "Lala Lajpat Rai, Bal Gangadhar Tilak, and Bipin Chandra Pal."
  },
  {
    "topic": "Political Map",
    "q": "What 1905 event triggered the Swadeshi Movement?",
    "a": "The Partition of Bengal by Lord Curzon."
  },
  {
    "topic": "Political Map",
    "q": "What tragic event on April 13, 1919 shocked India?",
    "a": "The Jallianwala Bagh Massacre in Amritsar under General Dyer."
  },
  {
    "topic": "Political Map",
    "q": "Why did Gandhi call off the Non-Cooperation Movement in 1922?",
    "a": "Due to the violent Chauri Chaura incident where 22 policemen died."
  },
  {
    "topic": "Political Map",
    "q": "What event on April 6, 1930 marked the Civil Disobedience Movement?",
    "a": "Gandhi breaking the Salt Law at Dandi after his 388-km march."
  },
  {
    "topic": "Political Map",
    "q": "What agreement in 1932 resolved separate electorates for Dalits?",
    "a": "The Poona Pact between Gandhi and Dr. B.R. Ambedkar."
  },
  {
    "topic": "Political Map",
    "q": "What slogan and movement did Gandhi launch on August 8, 1942?",
    "a": "The Quit India Movement with the call 'Do or Die'."
  },
  {
    "topic": "Political Map",
    "q": "Who founded the Indian National Army (Azad Hind Fauj)?",
    "a": "Netaji Subhas Chandra Bose."
  },
  {
    "topic": "Political Map",
    "q": "What was Netaji's famous slogan for freedom?",
    "a": "Give me blood, and I shall give you freedom!"
  },
  {
    "topic": "Political Map",
    "q": "When did India achieve independence from British rule?",
    "a": "August 15, 1947."
  },
  {
    "topic": "Political Map",
    "q": "Who was the first Prime Minister of free India?",
    "a": "Jawaharlal Nehru."
  },
  {
    "topic": "Political Map",
    "q": "What famous speech did Nehru deliver on midnight August 14-15, 1947?",
    "a": "'Tryst with Destiny'."
  },
  {
    "topic": "Political Map",
    "q": "Who was the French Governor who pioneered local political interference in India?",
    "a": "Joseph François Dupleix."
  },
  {
    "topic": "Political Map",
    "q": "Which battle in 1760 ended French political ambitions in India?",
    "a": "The Battle of Wandiwash."
  },
  {
    "topic": "Political Map",
    "q": "What was the Permanent Settlement of 1793?",
    "a": "Lord Cornwallis's revenue system fixing zamindari land tax permanently in Bengal."
  },
  {
    "topic": "Political Map",
    "q": "What was the Ryotwari System?",
    "a": "Land revenue system collecting tax directly from individual cultivators (ryots)."
  },
  {
    "topic": "Political Map",
    "q": "Which 1835 minute recommended English-medium education in India?",
    "a": "Macaulay's Minute on Education."
  },
  {
    "topic": "Political Map",
    "q": "Who founded the Brahmo Samaj in 1828 and fought against Sati?",
    "a": "Raja Ram Mohan Roy."
  },
  {
    "topic": "Political Map",
    "q": "Who was the British Governor-General who abolished Sati in 1829?",
    "a": "Lord William Bentinck."
  },
  {
    "topic": "Political Map",
    "q": "Who was the first President of the Indian National Congress in 1885?",
    "a": "Womesh Chandra Bonnerjee (W.C. Bonnerjee)."
  },
  {
    "topic": "Political Map",
    "q": "Who was known as the 'Grand Old Man of India'?",
    "a": "Dadabhai Naoroji."
  },
  {
    "topic": "Political Map",
    "q": "Who was Mahatma Gandhi's political guru?",
    "a": "Gopal Krishna Gokhale."
  },
  {
    "topic": "Political Map",
    "q": "Which Indian leader said 'Swaraj is my birthright and I shall have it'?",
    "a": "Bal Gangadhar Tilak."
  },
  {
    "topic": "Political Map",
    "q": "When was the All-India Muslim League founded?",
    "a": "1906 at Dhaka."
  },
  {
    "topic": "Political Map",
    "q": "Which act introduced separate electorates for Muslims in 1909?",
    "a": "The Morley-Minto Reforms (Indian Councils Act 1909)."
  },
  {
    "topic": "Political Map",
    "q": "Who launched the Home Rule Movement in India in 1916?",
    "a": "Bal Gangadhar Tilak and Annie Besant."
  },
  {
    "topic": "Political Map",
    "q": "What 1916 pact brought the Congress and Muslim League together?",
    "a": "The Lucknow Pact."
  },
  {
    "topic": "Political Map",
    "q": "Where did Gandhi conduct his first Satyagraha in India in 1917?",
    "a": "Champaran (Bihar) for indigo farmers."
  },
  {
    "topic": "Political Map",
    "q": "What oppressive law in 1919 allowed detention without trial?",
    "a": "The Rowlatt Act."
  },
  {
    "topic": "Political Map",
    "q": "Who renounced his British Knighthood after Jallianwala Bagh?",
    "a": "Rabindranath Tagore."
  },
  {
    "topic": "Political Map",
    "q": "What movement did Gandhi unite with Non-Cooperation in 1920?",
    "a": "The Khilafat Movement (led by the Ali brothers)."
  },
  {
    "topic": "Political Map",
    "q": "Who founded the Swaraj Party within Congress in 1923?",
    "a": "Chittaranjan Das (C.R. Das) and Motilal Nehru."
  },
  {
    "topic": "Political Map",
    "q": "Why was the 1928 Simon Commission boycotted by Indians?",
    "a": "Because it had no Indian members ('all-White commission')."
  },
  {
    "topic": "Political Map",
    "q": "Which leader died after being injured in a lathi charge against Simon Commission?",
    "a": "Lala Lajpat Rai ('Lion of Punjab')."
  },
  {
    "topic": "Political Map",
    "q": "At which 1929 session did Congress adopt 'Purna Swaraj' (Complete Independence)?",
    "a": "The Lahore Session under Jawaharlal Nehru."
  },
  {
    "topic": "Political Map",
    "q": "What date was originally celebrated as Independence Day starting in 1930?",
    "a": "January 26, 1930."
  },
  {
    "topic": "Political Map",
    "q": "Who was the legendary female leader who ran underground radio during Quit India?",
    "a": "Usha Mehta (alongside Aruna Asaf Ali)."
  },
  {
    "topic": "Political Map",
    "q": "What resolution demanding separate Muslim-majority states was passed in 1940?",
    "a": "The Lahore / Pakistan Resolution."
  },
  {
    "topic": "Political Map",
    "q": "What 1946 military revolt accelerated British decision to leave India?",
    "a": "The Royal Indian Navy (RIN) Mutiny in Bombay."
  },
  {
    "topic": "Political Map",
    "q": "Which British plan announced the division of India in June 1947?",
    "a": "The Mountbatten Plan (June 3 Plan)."
  },
  {
    "topic": "Political Map",
    "q": "Which British act granted independence to India?",
    "a": "The Indian Independence Act 1947."
  },
  {
    "topic": "Political Map",
    "q": "What was the capital of the Mauryan and Gupta Empires?",
    "a": "Pataliputra (modern Patna)."
  },
  {
    "topic": "Political Map",
    "q": "What was the primary trade export of Bengal before British rule?",
    "a": "Fine cotton muslin textiles and silk."
  },
  {
    "topic": "Political Map",
    "q": "Which Mughal Emperor abolished Jizya in 1564?",
    "a": "Akbar the Great."
  },
  {
    "topic": "Political Map",
    "q": "Which Mughal Emperor built the Shalimar Bagh in Kashmir?",
    "a": "Jahangir."
  },
  {
    "topic": "Political Map",
    "q": "Who was the Afghan chief who defeated Humayun and built the Grand Trunk Road?",
    "a": "Sher Shah Suri."
  },
  {
    "topic": "Political Map",
    "q": "Which ancient site in Rajasthan has the earliest ploughed field?",
    "a": "Kalibangan."
  },
  {
    "topic": "Political Map",
    "q": "What was the royal assembly of elders in the Early Vedic period called?",
    "a": "The Sabha."
  },
  {
    "topic": "Political Map",
    "q": "Which dynasty ruled Magadha before Chandragupta Maurya?",
    "a": "The Nanda Dynasty (Mahapadma Nanda)."
  },
  {
    "topic": "Political Map",
    "q": "Which Chinese pilgrim wrote about Harsha's religious assembly at Prayag?",
    "a": "Xuanzang (Hiuen Tsang)."
  },
  {
    "topic": "Political Map",
    "q": "What was the silver currency coin introduced by Iltutmish?",
    "a": "The Tanka."
  },
  {
    "topic": "Political Map",
    "q": "Which Maratha Peshwa never lost a battle in 40+ engagements?",
    "a": "Baji Rao I."
  },
  {
    "topic": "Political Map",
    "q": "What was the symbol adopted by Tipu Sultan for his empire?",
    "a": "The Tiger."
  },
  {
    "topic": "Political Map",
    "q": "What was the capital of the Chola Dynasty?",
    "a": "Tanjore (Thanjavur)."
  },
  {
    "topic": "Political Map",
    "q": "Who was the founder of the Rashtrakuta Dynasty?",
    "a": "Dantidurga (c. 753 CE)."
  },
  {
    "topic": "Political Map",
    "q": "Which Mughal Emperor constructed the Pearl Mosque (Moti Masjid) in Agra?",
    "a": "Shah Jahan."
  },
  {
    "topic": "Political Map",
    "q": "What title was assumed by Babur after defeating Rana Sanga at Khanwa in 1527?",
    "a": "Ghazi."
  },
  {
    "topic": "Political Map",
    "q": "Who was the Viceroy when the Partition of Bengal was enacted in 1905?",
    "a": "Lord Curzon."
  },
  {
    "topic": "Natural Resources",
    "q": "What is a Natural Resource?",
    "a": "Anything available in nature that has utility, value, and satisfies human needs."
  },
  {
    "topic": "Natural Resources",
    "q": "Distinguish between Nature and a Resource.",
    "a": "Nature includes all raw elements existing without human creation; a Resource is a natural element whose utility has been discovered and extracted using technology."
  },
  {
    "topic": "Natural Resources",
    "q": "What is the Human Utility Threshold Rule?",
    "a": "The principle that natural elements become resources only when human knowledge discovers their utility and possesses technology to extract them."
  },
  {
    "topic": "Natural Resources",
    "q": "What is the TEC Rule for resource status?",
    "a": "Technological Accessibility, Economic Feasibility, and Cultural Acceptability."
  },
  {
    "topic": "Natural Resources",
    "q": "Define Technological Accessibility.",
    "a": "Humans possessing appropriate tools, scientific knowledge, and technical know-how to extract and process a natural substance."
  },
  {
    "topic": "Natural Resources",
    "q": "Define Economic Feasibility.",
    "a": "The financial benefit derived from extracting and processing a resource exceeding the total cost of extraction."
  },
  {
    "topic": "Natural Resources",
    "q": "Define Cultural Acceptability.",
    "a": "Resource utilization aligning with societal norms, ethical values, laws, and environmental safety guidelines."
  },
  {
    "topic": "Natural Resources",
    "q": "What is a Biotic Resource?",
    "a": "A natural resource derived from living organisms or organic matter (e.g., forests, crops, wildlife, coal)."
  },
  {
    "topic": "Natural Resources",
    "q": "What is an Abiotic Resource?",
    "a": "A natural resource derived from non-living inorganic matter (e.g., land, minerals, water, air)."
  },
  {
    "topic": "Natural Resources",
    "q": "Define Renewable Resources.",
    "a": "Resources that replenish themselves naturally through environmental cycles within humanly reasonable timeframes (e.g., solar, wind, freshwater)."
  },
  {
    "topic": "Natural Resources",
    "q": "Define Non-Renewable Resources.",
    "a": "Resources formed over millions of geological years that cannot be replenished once depleted (e.g., coal, petroleum, metallic minerals)."
  },
  {
    "topic": "Natural Resources",
    "q": "What is an Individual Resource?",
    "a": "A resource privately owned and managed by an individual or household (e.g., private farmland, house)."
  },
  {
    "topic": "Natural Resources",
    "q": "What is a Community Resource?",
    "a": "A resource accessible to all members of a local community (e.g., village pastures, public parks)."
  },
  {
    "topic": "Natural Resources",
    "q": "What is a National Resource?",
    "a": "Resources belonging to the nation state within political land borders and territorial waters up to 12 nautical miles."
  },
  {
    "topic": "Natural Resources",
    "q": "What is an International Resource?",
    "a": "Oceanic resources beyond 200 nautical miles of Exclusive Economic Zones (EEZ) regulated by international treaty bodies."
  },
  {
    "topic": "Natural Resources",
    "q": "What is a Potential Resource?",
    "a": "A natural resource found in a region whose utility is known but has not been developed due to lack of technology or investment."
  },
  {
    "topic": "Natural Resources",
    "q": "What is a Developed Resource?",
    "a": "A resource that has been surveyed, quantified, and is actively being utilized with existing technology."
  },
  {
    "topic": "Natural Resources",
    "q": "What is a Stock Resource?",
    "a": "Substances in nature that have utility to satisfy human needs, but which cannot be utilized currently due to lack of extraction technology."
  },
  {
    "topic": "Natural Resources",
    "q": "Define Ecosystem Services.",
    "a": "The essential direct and indirect benefits provided by natural ecosystems to human society."
  },
  {
    "topic": "Natural Resources",
    "q": "What are Provisioning Ecosystem Services?",
    "a": "Tangible products supplied directly by nature, such as food, clean water, timber, and medicinal plants."
  },
  {
    "topic": "Natural Resources",
    "q": "What are Regulating Ecosystem Services?",
    "a": "Natural processes regulating climate, flood control, water purification, and crop pollination."
  },
  {
    "topic": "Natural Resources",
    "q": "What are Supporting Ecosystem Services?",
    "a": "Foundational ecological processes like photosynthesis, soil formation, and nutrient cycling."
  },
  {
    "topic": "Natural Resources",
    "q": "What are Cultural Ecosystem Services?",
    "a": "Non-material spiritual, aesthetic, educational, and recreational benefits derived from nature."
  },
  {
    "topic": "Natural Resources",
    "q": "Define Sustainable Development.",
    "a": "Development that satisfies present needs without compromising the ability of future generations to meet their own needs."
  },
  {
    "topic": "Natural Resources",
    "q": "State the 3Rs of Sustainable Resource Use.",
    "a": "Reduce consumption, Reuse durable goods, and Recycle scrap materials."
  },
  {
    "topic": "Natural Resources",
    "q": "What report defined Sustainable Development in 1987?",
    "a": "The Brundtland Commission Report titled 'Our Common Future'."
  },
  {
    "topic": "Natural Resources",
    "q": "Where was Agenda 21 adopted in 1992?",
    "a": "At the UN Conference on Environment and Development (Earth Summit) in Rio de Janeiro, Brazil."
  },
  {
    "topic": "Natural Resources",
    "q": "What is Contour Ploughing?",
    "a": "Ploughing across land slopes along elevation contour lines to slow water runoff and prevent soil erosion."
  },
  {
    "topic": "Natural Resources",
    "q": "What is Terrace Farming?",
    "a": "Cutting step-like flat terraces into steep hill slopes to reduce water runoff speed and prevent soil erosion."
  },
  {
    "topic": "Natural Resources",
    "q": "What are Shelter Belts?",
    "a": "Rows of trees planted along farm borders in arid or coastal areas to break wind speed and protect soil."
  },
  {
    "topic": "Natural Resources",
    "q": "What is Rainwater Harvesting?",
    "a": "Collecting and storing rooftop or surface rain runoff into tanks or aquifers for recharge and domestic reuse."
  },
  {
    "topic": "Natural Resources",
    "q": "What is Drip Irrigation?",
    "a": "A micro-irrigation technique delivering precise water drops directly to plant roots to minimize evaporation and runoff."
  },
  {
    "topic": "Natural Resources",
    "q": "What metal is extracted from Bauxite ore?",
    "a": "Aluminum metal through commercial smelting."
  },
  {
    "topic": "Natural Resources",
    "q": "Why is Coal called 'Buried Sunshine'?",
    "a": "Because coal formed from ancient plant forests nourished by solar energy millions of years ago."
  },
  {
    "topic": "Natural Resources",
    "q": "Why is Petroleum called 'Black Gold'?",
    "a": "Because of its dark commercial appearance and immense economic value in global industry and transport."
  },
  {
    "topic": "Natural Resources",
    "q": "What is Solar Photovoltaic (PV) technology?",
    "a": "Semiconductor solar cells converting sunlight photons directly into electrical energy via photoelectric effect."
  },
  {
    "topic": "Natural Resources",
    "q": "What is Geothermal Energy?",
    "a": "Clean renewable thermal energy harnessed from underground volcanic heat and steam."
  },
  {
    "topic": "Natural Resources",
    "q": "What is Biomass / Biogas Energy?",
    "a": "Renewable energy generated by fermenting cattle dung, crop waste, and organic matter into methane gas."
  },
  {
    "topic": "Natural Resources",
    "q": "What is the Exclusive Economic Zone (EEZ) ocean boundary?",
    "a": "The sea area extending up to 200 nautical miles from a coastal country's baseline."
  },
  {
    "topic": "Natural Resources",
    "q": "What is the territorial sea boundary for national resources?",
    "a": "12 nautical miles from coastal baseline."
  },
  {
    "topic": "Natural Resources",
    "q": "Which Indian state leads in installed solar park capacity at Bhadla?",
    "a": "Rajasthan."
  },
  {
    "topic": "Natural Resources",
    "q": "Which Indian state leads in wind power turbine capacity?",
    "a": "Tamil Nadu."
  },
  {
    "topic": "Natural Resources",
    "q": "What is crop rotation?",
    "a": "Alternating different crops sequentially on the same farm land across seasons to maintain soil nitrogen balance."
  },
  {
    "topic": "Natural Resources",
    "q": "What is afforestation?",
    "a": "Planting trees on barren, deforested, or unused land to establish new forests."
  },
  {
    "topic": "Natural Resources",
    "q": "What is deforestation?",
    "a": "The large-scale clearing and destruction of forest trees causing soil erosion and habitat loss."
  },
  {
    "topic": "Natural Resources",
    "q": "What is topsoil (A Horizon)?",
    "a": "The uppermost layer of soil containing organic humus, essential plant nutrients, and living organisms."
  },
  {
    "topic": "Natural Resources",
    "q": "What is humus in soil?",
    "a": "Decomposed organic plant and animal matter that imparts fertility and moisture-retention to topsoil."
  },
  {
    "topic": "Natural Resources",
    "q": "What soil covers the northern plains of India?",
    "a": "Alluvial soil deposited by Himalayan river systems."
  },
  {
    "topic": "Natural Resources",
    "q": "What soil is ideal for cotton cultivation in the Deccan Plateau?",
    "a": "Black Cotton Soil (Regur Soil)."
  },
  {
    "topic": "Natural Resources",
    "q": "Why does Black Soil retain moisture exceptionally well?",
    "a": "Because of its fine clayey texture that swells when wet and holds water long."
  },
  {
    "topic": "Natural Resources",
    "q": "What causes land degradation in Punjab and Haryana?",
    "a": "Over-irrigation causing soil salinity, alkalinity, and waterlogging."
  },
  {
    "topic": "Natural Resources",
    "q": "What is strip cropping?",
    "a": "Growing alternating strips of crops and grass to absorb rain runoff and prevent soil erosion."
  },
  {
    "topic": "Natural Resources",
    "q": "What is shifting cultivation called in Northeast India?",
    "a": "Jhum Cultivation (Slash-and-Burn)."
  },
  {
    "topic": "Natural Resources",
    "q": "What mineral is mined at Jharia in Jharkhand?",
    "a": "Coal."
  },
  {
    "topic": "Natural Resources",
    "q": "What mineral is mined at Kolar in Karnataka?",
    "a": "Gold."
  },
  {
    "topic": "Natural Resources",
    "q": "What is monazite sand in Kerala famous for containing?",
    "a": "Thorium, a valuable nuclear mineral fuel."
  },
  {
    "topic": "Natural Resources",
    "q": "What is non-point source water pollution?",
    "a": "Pollution originating from widespread diffuse areas, such as agricultural fertilizer runoff across farm fields."
  },
  {
    "topic": "Natural Resources",
    "q": "What is point source water pollution?",
    "a": "Pollution discharged from a single identifiable pipe or outlet, such as a factory waste pipe."
  },
  {
    "topic": "Natural Resources",
    "q": "What is the hydrological cycle?",
    "a": "The continuous natural cycle of water evaporation, condensation, precipitation, and runoff replenishing freshwater."
  },
  {
    "topic": "Natural Resources",
    "q": "What is the main component of Biogas produced in rural digesters?",
    "a": "Methane gas (CH4, ~65%)."
  },
  {
    "topic": "Natural Resources",
    "q": "What is the main component of Natural Gas?",
    "a": "Methane gas."
  },
  {
    "topic": "Natural Resources",
    "q": "What is CNG?",
    "a": "Compressed Natural Gas used as a clean alternative fuel for urban transport."
  },
  {
    "topic": "Natural Resources",
    "q": "What is LPG?",
    "a": "Liquefied Petroleum Gas (Propane/Butane) used for domestic cooking."
  },
  {
    "topic": "Natural Resources",
    "q": "What ecological service do mangrove forests provide along coastlines?",
    "a": "Buffering coastlines against ocean storm surges, tsunamis, and soil erosion."
  },
  {
    "topic": "Natural Resources",
    "q": "What sanctuary in Assam protects the Indian one-horned rhinoceros?",
    "a": "Kaziranga National Park."
  },
  {
    "topic": "Natural Resources",
    "q": "What national park in MP is famous for tiger reserves under Project Tiger?",
    "a": "Kanha / Bandhavgarh National Park."
  },
  {
    "topic": "Natural Resources",
    "q": "What is the main benefit of recycling scrap metals?",
    "a": "Conserving natural raw mineral ores and saving up to 95% of processing energy."
  },
  {
    "topic": "Natural Resources",
    "q": "What is the stratospheric ozone layer's function?",
    "a": "Filtering harmful solar ultraviolet (UV) radiation from reaching Earth's surface."
  },
  {
    "topic": "Natural Resources",
    "q": "What is an exhaustible mineral resource?",
    "a": "A mineral resource formed over millions of years whose total supply is finite and un-replenishable."
  },
  {
    "topic": "Natural Resources",
    "q": "What is a continuous renewable resource?",
    "a": "A flow resource like sunlight, wind, or tidal surges available continuously without human exhaustion."
  },
  {
    "topic": "Natural Resources",
    "q": "What is the primary mineral used in manufacturing cement?",
    "a": "Limestone (Calcium Carbonate)."
  },
  {
    "topic": "Natural Resources",
    "q": "What is Mica used for in industry?",
    "a": "As a high-voltage electrical insulator resistant to thermal heat."
  },
  {
    "topic": "Natural Resources",
    "q": "What is the main iron ore quality with ~70% iron content?",
    "a": "Magnetite."
  },
  {
    "topic": "Natural Resources",
    "q": "What is Hematite?",
    "a": "A major industrial iron ore containing ~60-70% iron content."
  },
  {
    "topic": "Natural Resources",
    "q": "What is watershed management?",
    "a": "Integrated management of land, water, and vegetation in a drainage basin to conserve surface runoff and groundwater."
  },
  {
    "topic": "Natural Resources",
    "q": "Which village in Maharashtra became a famous model for watershed rainwater harvesting?",
    "a": "Ralegan Siddhi."
  },
  {
    "topic": "Natural Resources",
    "q": "What is check dam?",
    "a": "A small barrier constructed across seasonal streams to slow water runoff and recharge groundwater aquifers."
  },
  {
    "topic": "Natural Resources",
    "q": "What is fallowing?",
    "a": "Leaving agricultural land uncultivated for one or more seasons to naturally restore soil fertility."
  },
  {
    "topic": "Natural Resources",
    "q": "What is green manuring?",
    "a": "Ploughing leguminous plants into the soil while green to enrich soil nitrogen and organic humus naturally."
  },
  {
    "topic": "Natural Resources",
    "q": "What is sustainable forestry?",
    "a": "Harvesting forest timber at rates equal to or lower than natural replanting and afforestation rates."
  },
  {
    "topic": "Natural Resources",
    "q": "What is biodiversity?",
    "a": "The variety of living plant and animal species, genetic diversity, and habitats in an ecosystem."
  },
  {
    "topic": "Natural Resources",
    "q": "What is a biosphere reserve?",
    "a": "A protected area designed to conserve biodiversity, traditional human lifestyles, and scientific research."
  },
  {
    "topic": "Natural Resources",
    "q": "What is Agenda 21's primary focus?",
    "a": "Achieving global sustainable development and environmental conservation in the 21st century."
  },
  {
    "topic": "Natural Resources",
    "q": "What is the primary cause of desertification in drylands?",
    "a": "Overgrazing, deforestation, and unsustainable farming practices stripping topsoil cover."
  },
  {
    "topic": "Natural Resources",
    "q": "What is Nuclear Energy?",
    "a": "Thermal energy released by nuclear fission of atomic nuclei (Uranium/Thorium) in nuclear reactors."
  },
  {
    "topic": "Natural Resources",
    "q": "What is Tidal Energy?",
    "a": "Renewable electricity generated by harnessing high and low ocean tides driven by lunar gravity."
  },
  {
    "topic": "Natural Resources",
    "q": "What is Hydroelectricity?",
    "a": "Renewable electric power produced by channeling flowing river water through water turbines."
  },
  {
    "topic": "Natural Resources",
    "q": "What is Bhakra Nangal Dam?",
    "a": "A major multi-purpose hydroelectric dam project built on the Sutlej River in northern India."
  },
  {
    "topic": "Natural Resources",
    "q": "What is an aquifer?",
    "a": "An underground layer of permeable rock or sediment holding groundwater accessible via wells."
  },
  {
    "topic": "Natural Resources",
    "q": "What is over-extraction of groundwater?",
    "a": "Pumping groundwater out faster than natural rainfall recharge, causing water table depletion."
  },
  {
    "topic": "Natural Resources",
    "q": "What is single-use plastic reduction under the 3Rs?",
    "a": "Minimizing single-use disposable plastic items to reduce non-biodegradable waste in ecosystems."
  },
  {
    "topic": "Natural Resources",
    "q": "What is recycling paper?",
    "a": "Reprocessing waste paper into pulp to make fresh paper, saving trees and energy."
  },
  {
    "topic": "Natural Resources",
    "q": "What is raw bauxite smelting?",
    "a": "Extracting pure aluminum metal from bauxite ore using intense electrical metallurgical smelting."
  },
  {
    "topic": "Natural Resources",
    "q": "What is silicon semiconductor refining?",
    "a": "Refining raw silica sand into ultra-pure silicon crystals for manufacturing computer microchips."
  },
  {
    "topic": "Natural Resources",
    "q": "What is eco-tourism?",
    "a": "Responsible travel to natural areas that conserves the environment and improves local community welfare."
  },
  {
    "topic": "Natural Resources",
    "q": "What is a non-renewable fossil fuel?",
    "a": "Coal, crude oil, or natural gas formed deep underground over millions of geological years."
  },
  {
    "topic": "Natural Resources",
    "q": "What is continuous solar radiation?",
    "a": "Sunlight falling on Earth daily, acting as an inexhaustible primary energy source for planet Earth."
  },
  {
    "topic": "Natural Resources",
    "q": "What is wind turbine generator?",
    "a": "A mechanical turbine converting kinetic wind energy into clean electrical power."
  },
  {
    "topic": "Natural Resources",
    "q": "What is monazite sand?",
    "a": "Heavy coastal beach sand rich in Thorium mineral deposits found along Kerala coastlines."
  },
  {
    "topic": "Natural Resources",
    "q": "What is rock phosphate?",
    "a": "A non-metallic mineral ore used as raw material for manufacturing nitrogenous and phosphatic chemical fertilizers."
  },
  {
    "topic": "Natural Resources",
    "q": "What is Gypsum used for?",
    "a": "As a non-metallic mineral in cement manufacturing and agricultural soil conditioning."
  },
  {
    "topic": "Natural Resources",
    "q": "What is soil erosion?",
    "a": "The removal and washing away of fertile topsoil by water runoff or wind forces."
  },
  {
    "topic": "Natural Resources",
    "q": "What is river siltation?",
    "a": "The accumulation of eroded soil sediments in river beds and reservoir dams."
  },
  {
    "topic": "Natural Resources",
    "q": "What is a check dam's primary benefit?",
    "a": "Recharging local groundwater aquifers by holding rain runoff in streamlets."
  },
  {
    "topic": "Natural Resources",
    "q": "What is zero-emission renewable power?",
    "a": "Electricity generation methods (solar, wind, hydro) emitting zero greenhouse gas pollutants."
  },
  {
    "topic": "Natural Resources",
    "q": "What is the primary goal of resource planning?",
    "a": "Achieving equitable, sustainable, and balanced resource development across all regions of a nation."
  },
  {
    "topic": "Natural Resources",
    "q": "What is an individual water harvest tank (Taanka)?",
    "a": "A traditional underground rainwater storage tank built inside households in dry Rajasthan regions."
  },
  {
    "topic": "Natural Resources",
    "q": "What is Johad?",
    "a": "A traditional earthen check dam built in Rajasthan to capture rainwater and recharge groundwater aquifers."
  },
  {
    "topic": "Natural Resources",
    "q": "What is a sanctuary?",
    "a": "A protected natural area dedicated to preserving specific endangered wildlife species."
  },
  {
    "topic": "Natural Resources",
    "q": "What is a National Park?",
    "a": "A strictly protected ecological area set aside by government for wildlife protection and ecosystem conservation."
  },
  {
    "topic": "Natural Resources",
    "q": "What is carbon sink?",
    "a": "A natural reservoir (like forests or oceans) that absorbs and stores atmospheric carbon dioxide."
  },
  {
    "topic": "Natural Resources",
    "q": "What is global warming?",
    "a": "The long-term heating of Earth's climate system driven by human greenhouse gas emissions."
  },
  {
    "topic": "Natural Resources",
    "q": "What is greenhouse effect?",
    "a": "Atmospheric gases trapping heat radiated from Earth's surface, maintaining planet thermal balance."
  },
  {
    "topic": "Natural Resources",
    "q": "What is fly ash?",
    "a": "Toxic fine mineral residue produced by coal-fired thermal power power stations."
  },
  {
    "topic": "Natural Resources",
    "q": "What is organic farming?",
    "a": "Agriculture relying on biological compost, crop rotation, and natural pest control without synthetic chemicals."
  },
  {
    "topic": "Natural Resources",
    "q": "What is nitrogen fixation?",
    "a": "The natural biological process where soil bacteria or leguminous plants convert atmospheric nitrogen into plant-usable nutrients."
  },
  {
    "topic": "Natural Resources",
    "q": "What is leguminous crop?",
    "a": "Crops like pulses, beans, and peas that host nitrogen-fixing bacteria in root nodules."
  },
  {
    "topic": "Natural Resources",
    "q": "What is mulching?",
    "a": "Covering soil between crop rows with organic straw to retain moisture and suppress weeds."
  },
  {
    "topic": "Natural Resources",
    "q": "What is rainwater catchment area?",
    "a": "The surface area (rooftop or ground slope) that collects rainwater runoff for harvesting."
  },
  {
    "topic": "Natural Resources",
    "q": "What is sustainable yield?",
    "a": "Harvesting renewable resources at a rate that allows natural replenishment without depletion."
  },
  {
    "topic": "Natural Resources",
    "q": "What is resource depletion?",
    "a": "The consumption of a resource faster than it can naturally replenish or be replaced."
  },
  {
    "topic": "Natural Resources",
    "q": "What is circular economy?",
    "a": "An economic model emphasizing reuse, repair, remanufacturing, and recycling to eliminate waste."
  },
  {
    "topic": "Natural Resources",
    "q": "What is ecological balance?",
    "a": "A state of dynamic equilibrium within a community of organisms and their environment."
  },
  {
    "topic": "Natural Resources",
    "q": "What is environmental impact assessment (EIA)?",
    "a": "Evaluating the potential environmental consequences of proposed industrial development projects before approval."
  },
  {
    "topic": "Natural Resources",
    "q": "What is the primary ecological purpose of afforestation?",
    "a": "Restoring forest canopy cover, preventing soil erosion, and sequestering atmospheric carbon dioxide."
  },
  {
    "topic": "Electoral System",
    "q": "Which Article of the Constitution guarantees Universal Adult Franchise?",
    "a": "Article 326."
  },
  {
    "topic": "Electoral System",
    "q": "Which Amendment Act lowered the voting age from 21 to 18 years?",
    "a": "The 61st Constitutional Amendment Act, 1988."
  },
  {
    "topic": "Electoral System",
    "q": "Which Article establishes the independent Election Commission of India?",
    "a": "Article 324."
  },
  {
    "topic": "Electoral System",
    "q": "Who was India's first Chief Election Commissioner?",
    "a": "Sukumar Sen (1950-1958)."
  },
  {
    "topic": "Electoral System",
    "q": "Who was India's first woman Chief Election Commissioner?",
    "a": "V.S. Ramadevi (1990)."
  },
  {
    "topic": "Electoral System",
    "q": "What photo identity document issued by ECI serves as official voter ID?",
    "a": "EPIC (Elector's Photo Identity Card)."
  },
  {
    "topic": "Electoral System",
    "q": "In which year were EVMs tested experimentally for the first time?",
    "a": "1982 in 50 polling stations of Paravur constituency in Kerala."
  },
  {
    "topic": "Electoral System",
    "q": "When were EVMs deployed nationwide in all Lok Sabha constituencies?",
    "a": "In the 2004 General Elections."
  },
  {
    "topic": "Electoral System",
    "q": "Which state companies manufacture EVMs and VVPATs for ECI?",
    "a": "BEL (Bharat Electronics Ltd) and ECIL (Electronics Corporation of India Ltd)."
  },
  {
    "topic": "Electoral System",
    "q": "What does VVPAT stand for?",
    "a": "Voter Verifiable Paper Audit Trail."
  },
  {
    "topic": "Electoral System",
    "q": "How long does a VVPAT printed paper slip remain visible through the window?",
    "a": "7 seconds before dropping into a sealed box."
  },
  {
    "topic": "Electoral System",
    "q": "In which year was VVPAT tested in an assembly election for the first time?",
    "a": "2013 in Noksen constituency, Nagaland."
  },
  {
    "topic": "Electoral System",
    "q": "What option on EVMs allows voters to reject all candidates?",
    "a": "NOTA (None of the Above)."
  },
  {
    "topic": "Electoral System",
    "q": "Which Supreme Court ruling introduced NOTA on EVMs in 2013?",
    "a": "PUCL vs Union of India (2013)."
  },
  {
    "topic": "Electoral System",
    "q": "Which Constitutional Articles reserve seats for SCs and STs?",
    "a": "Article 330 (Lok Sabha) and Article 332 (State Assemblies)."
  },
  {
    "topic": "Electoral System",
    "q": "What voting system is used for Lok Sabha elections?",
    "a": "First-Past-The-Post (FPTP) plurality voting system."
  },
  {
    "topic": "Electoral System",
    "q": "What voting system is used for Rajya Sabha elections by State MLAs?",
    "a": "Proportional Representation with Single Transferable Vote (PR-STV)."
  },
  {
    "topic": "Electoral System",
    "q": "What ECI mobile app allows citizens to report live campaign code violations?",
    "a": "cVIGIL App."
  },
  {
    "topic": "Electoral System",
    "q": "What is the campaign silence period duration before polling closes?",
    "a": "48 hours."
  },
  {
    "topic": "Electoral System",
    "q": "What official scrutinizes candidate nomination papers in a constituency?",
    "a": "The Returning Officer (RO)."
  },
  {
    "topic": "Electoral System",
    "q": "Who manages polling operations inside an individual booth on election day?",
    "a": "The Presiding Officer."
  },
  {
    "topic": "Electoral System",
    "q": "When is a candidate's security deposit forfeited?",
    "a": "When the candidate fails to secure at least 1/6th (16.66%) of total valid votes polled."
  },
  {
    "topic": "Electoral System",
    "q": "What is the Lok Sabha candidate spending limit in large states?",
    "a": "₹95 Lakhs."
  },
  {
    "topic": "Electoral System",
    "q": "What is the State Assembly candidate spending limit in large states?",
    "a": "₹40 Lakhs."
  },
  {
    "topic": "Electoral System",
    "q": "Where are election petitions challenging parliamentary results filed?",
    "a": "In the respective State High Court under RPA 1951."
  },
  {
    "topic": "Electoral System",
    "q": "Who appoints the Chief Election Commissioner and Election Commissioners?",
    "a": "The President of India."
  },
  {
    "topic": "Electoral System",
    "q": "What is the tenure of office for the Chief Election Commissioner?",
    "a": "6 years or until age 65 (whichever is earlier)."
  },
  {
    "topic": "Electoral System",
    "q": "What official document contains the list of all registered voters in a constituency?",
    "a": "The Electoral Roll / Voter List."
  },
  {
    "topic": "Electoral System",
    "q": "Which landmark act governs candidate qualifications and election conduct in India?",
    "a": "The Representation of the People Act, 1951."
  },
  {
    "topic": "Electoral System",
    "q": "What is a vote cast by a genuine voter whose vote was fraudulently cast by an impersonator?",
    "a": "A Tendered Vote."
  },
  {
    "topic": "Electoral System",
    "q": "What system enables armed forces personnel stationed far away to vote electronically?",
    "a": "ETPBS (Electronically Transmitted Postal Ballot System)."
  },
  {
    "topic": "Electoral System",
    "q": "What is the minimum age required to contest elections for Lok Sabha or Vidhan Sabha?",
    "a": "25 years."
  },
  {
    "topic": "Electoral System",
    "q": "What is the minimum age required to contest elections for Rajya Sabha or Vidhan Parishad?",
    "a": "30 years."
  },
  {
    "topic": "Electoral System",
    "q": "What is the minimum age required to run for President of India?",
    "a": "35 years."
  },
  {
    "topic": "Electoral System",
    "q": "What document must candidates submit disclosing wealth assets, liabilities, and criminal record?",
    "a": "The Election Affidavit (Form 26)."
  },
  {
    "topic": "Electoral System",
    "q": "Who allocates election symbols to recognized political parties?",
    "a": "The Election Commission of India (ECI)."
  },
  {
    "topic": "Electoral System",
    "q": "What voting procedure ensures that a voter's ballot choice remains confidential?",
    "a": "Secret Ballot."
  },
  {
    "topic": "Electoral System",
    "q": "Which Constitutional Amendment reserved 33% seats for women in Lok Sabha and Assemblies?",
    "a": "The 106th Constitutional Amendment Act 2023 (Nari Shakti Vandan Adhiniyam)."
  },
  {
    "topic": "Electoral System",
    "q": "How many Election Commissioners serve in ECI alongside the CEC?",
    "a": "Two Election Commissioners."
  },
  {
    "topic": "Electoral System",
    "q": "Can the Chief Election Commissioner be easily dismissed by the government?",
    "a": "No, removal requires parliamentary impeachment similar to a Supreme Court judge."
  },
  {
    "topic": "Electoral System",
    "q": "What is an election held when Parliament is dissolved before completing 5 years called?",
    "a": "A Mid-Term Election."
  },
  {
    "topic": "Electoral System",
    "q": "What is an election held to fill a single casual vacancy called?",
    "a": "A By-Election."
  },
  {
    "topic": "Electoral System",
    "q": "Who supervises election administration across an entire district?",
    "a": "The District Election Officer (DEO / District Collector)."
  },
  {
    "topic": "Electoral System",
    "q": "What ethical code governs candidate behavior and prevents government power misuse?",
    "a": "The Model Code of Conduct (MCC)."
  },
  {
    "topic": "Electoral System",
    "q": "What happens to EVMs after polling closes on election day?",
    "a": "They are sealed and stored in secure strongrooms under 3-tier armed security."
  },
  {
    "topic": "Electoral System",
    "q": "Within what period must a by-election be held to fill a casual vacancy?",
    "a": "Within 6 months from the occurrence of the vacancy."
  },
  {
    "topic": "Electoral System",
    "q": "What principle ensures political equality: 1 Person = 1 Vote = 1 Value?",
    "a": "Universal Adult Franchise."
  },
  {
    "topic": "Electoral System",
    "q": "What color ink is applied on a voter's left forefinger to prevent double voting?",
    "a": "Indelible Ink (Silver Nitrate ink)."
  },
  {
    "topic": "Electoral System",
    "q": "Where is indelible ink for Indian elections manufactured?",
    "a": "At Mysore Paints and Varnish Limited (MPVL) in Karnataka."
  },
  {
    "topic": "Electoral System",
    "q": "What unit of the EVM does the voter press to cast their vote?",
    "a": "The Balloting Unit (BU)."
  },
  {
    "topic": "Electoral System",
    "q": "What unit of the EVM remains with the Polling Officer to enable voting?",
    "a": "The Control Unit (CU)."
  },
  {
    "topic": "Electoral System",
    "q": "How many candidates can a single EVM Balloting Unit accommodate typically?",
    "a": "16 candidates (including NOTA)."
  },
  {
    "topic": "Electoral System",
    "q": "Up to how many Balloting Units can be joined together on an EVM?",
    "a": "Up to 24 Balloting Units (accommodating 384 candidates)."
  },
  {
    "topic": "Electoral System",
    "q": "What power source operates EVMs on polling day?",
    "a": "An internal sealed battery (requires no mains electricity)."
  },
  {
    "topic": "Electoral System",
    "q": "Why are EVMs non-networked standalone devices?",
    "a": "To prevent Wi-Fi, Bluetooth, or internet hacking."
  },
  {
    "topic": "Electoral System",
    "q": "What body conducts elections to Gram Panchayats and Municipalities in states?",
    "a": "The State Election Commission (SEC) under Article 243K."
  },
  {
    "topic": "Electoral System",
    "q": "Are State Election Commissions subordinate to the ECI?",
    "a": "No, SECs are independent constitutional bodies under Article 243K."
  },
  {
    "topic": "Electoral System",
    "q": "What document states a political party's promises and policy agenda before voting?",
    "a": "The Election Manifesto."
  },
  {
    "topic": "Electoral System",
    "q": "What is the penalty for voter impersonation under electoral law?",
    "a": "Imprisonment up to 1 year and/or fine."
  },
  {
    "topic": "Electoral System",
    "q": "What is the minimum age to register as a voter on the electoral roll?",
    "a": "18 years."
  },
  {
    "topic": "Electoral System",
    "q": "What day is celebrated across India on January 25 every year?",
    "a": "National Voters' Day (NVD)."
  },
  {
    "topic": "Electoral System",
    "q": "Why is January 25 celebrated as National Voters' Day?",
    "a": "It marks the foundation day of the Election Commission of India (Jan 25, 1950)."
  },
  {
    "topic": "Electoral System",
    "q": "Who was the 10th CEC who introduced major electoral reforms in the 1990s?",
    "a": "T.N. Seshan."
  },
  {
    "topic": "Electoral System",
    "q": "Can voters from all communities vote in a Reserved Constituency?",
    "a": "Yes, all registered voters in the constituency vote regardless of community."
  },
  {
    "topic": "Electoral System",
    "q": "How often is general election held for the Lok Sabha normally?",
    "a": "Every 5 years."
  },
  {
    "topic": "Electoral System",
    "q": "What is the term of office for a Member of the Rajya Sabha?",
    "a": "6 years (with 1/3rd members retiring every 2 years)."
  },
  {
    "topic": "Electoral System",
    "q": "Is the Rajya Sabha subject to complete dissolution?",
    "a": "No, Rajya Sabha is a permanent body not subject to dissolution."
  },
  {
    "topic": "Electoral System",
    "q": "Who is the ex-officio Chairman of the Rajya Sabha?",
    "a": "The Vice-President of India."
  },
  {
    "topic": "Electoral System",
    "q": "Who presides over joint sittings of both Houses of Parliament?",
    "a": "The Speaker of the Lok Sabha."
  },
  {
    "topic": "Electoral System",
    "q": "What proportion of total valid votes must a candidate secure to retain their security deposit?",
    "a": "At least 1/6th (16.66%) of total valid votes."
  },
  {
    "topic": "Electoral System",
    "q": "What is the security deposit amount for a Lok Sabha candidate?",
    "a": "₹25,000 (₹12,500 for SC/ST)."
  },
  {
    "topic": "Electoral System",
    "q": "What is the security deposit amount for an Assembly candidate?",
    "a": "₹10,000 (₹5,000 for SC/ST)."
  },
  {
    "topic": "Electoral System",
    "q": "What technology allows citizens to check voter roll details online?",
    "a": "The ECI Voter Service Portal (voters.eci.gov.in) and Voter Helpline App."
  },
  {
    "topic": "Electoral System",
    "q": "Does the VVPAT paper slip display the voter's personal name or Aadhaar number?",
    "a": "No, VVPAT slips contain NO voter personal identity to preserve secret ballot."
  },
  {
    "topic": "Electoral System",
    "q": "How many polling stations per assembly constituency undergo mandatory physical VVPAT counting?",
    "a": "5 randomly selected polling stations per assembly segment."
  },
  {
    "topic": "Electoral System",
    "q": "What is the total number of elected constituencies in the Lok Sabha?",
    "a": "543 constituencies."
  },
  {
    "topic": "Electoral System",
    "q": "Which amendment abolished nominated Anglo-Indian seats in Lok Sabha?",
    "a": "The 104th Constitutional Amendment Act, 2019."
  },
  {
    "topic": "Electoral System",
    "q": "What system is used to elect the President of India?",
    "a": "Proportional Representation with Single Transferable Vote (PR-STV)."
  },
  {
    "topic": "Electoral System",
    "q": "Who elects the President of India?",
    "a": "An Electoral College comprising elected MPs of both Houses and elected MLAs of State Assemblies."
  },
  {
    "topic": "Electoral System",
    "q": "Are nominated members of Parliament eligible to vote in Presidential elections?",
    "a": "No, nominated members cannot vote in Presidential elections."
  },
  {
    "topic": "Electoral System",
    "q": "Who elects the Vice-President of India?",
    "a": "An Electoral College comprising ALL members (elected + nominated) of both Houses of Parliament."
  },
  {
    "topic": "Electoral System",
    "q": "What is a Plurality Winner in First-Past-The-Post system?",
    "a": "The candidate who receives the highest number of votes, even if short of 50%."
  },
  {
    "topic": "Electoral System",
    "q": "What document is issued by the RO to the winning candidate after counting?",
    "a": "The Certificate of Election (Form 22)."
  },
  {
    "topic": "Electoral System",
    "q": "What is the maximum time gap allowed between two sessions of Parliament?",
    "a": "6 months."
  },
  {
    "topic": "Electoral System",
    "q": "Who summons and prorogues sessions of Parliament?",
    "a": "The President of India."
  },
  {
    "topic": "Electoral System",
    "q": "What is the quorum required to hold a sitting of Lok Sabha or Rajya Sabha?",
    "a": "1/10th (10%) of the total members of the House."
  },
  {
    "topic": "Electoral System",
    "q": "Can exit polls be broadcast while voting is ongoing in any phase?",
    "a": "No, exit polls are legally banned under Section 126A until voting closes in all phases."
  },
  {
    "topic": "Electoral System",
    "q": "What is a Polling Agent?",
    "a": "A representative appointed by a candidate to sit inside the polling station and verify voter identity."
  },
  {
    "topic": "Electoral System",
    "q": "What is a Counting Agent?",
    "a": "A representative appointed by a candidate to observe vote counting inside counting centers."
  },
  {
    "topic": "Electoral System",
    "q": "How is a tie (exact equal votes) resolved in an election?",
    "a": "The Returning Officer decides the winner by drawing lots under Section 102 of RPA 1951."
  },
  {
    "topic": "Electoral System",
    "q": "Can ministers launch new government infrastructure projects after election announcement?",
    "a": "No, the Model Code of Conduct forbids launching new government projects after election dates are announced."
  },
  {
    "topic": "Electoral System",
    "q": "What is Form 6 used for in elections?",
    "a": "Applying for fresh voter registration on the electoral roll."
  },
  {
    "topic": "Electoral System",
    "q": "What is Form 7 used for in elections?",
    "a": "Objecting to inclusion or requesting deletion of a voter name from the roll."
  },
  {
    "topic": "Electoral System",
    "q": "What is Form 8 used for in elections?",
    "a": "Correction of entries in the electoral roll."
  },
  {
    "topic": "Electoral System",
    "q": "What is the Representation of the People Act 1950?",
    "a": "Act providing for allocation of seats and delimitation of constituencies for elections."
  },
  {
    "topic": "Electoral System",
    "q": "What is Article 330 of the Constitution?",
    "a": "Reservation of seats for Scheduled Castes and Scheduled Tribes in the Lok Sabha."
  },
  {
    "topic": "Electoral System",
    "q": "What is Article 332 of the Constitution?",
    "a": "Reservation of seats for Scheduled Castes and Scheduled Tribes in State Assemblies."
  },
  {
    "topic": "Electoral System",
    "q": "What is an election observer?",
    "a": "An independent senior civil servant appointed by ECI to observe poll fairness and campaign spending."
  },
  {
    "topic": "Electoral System",
    "q": "What is micro-observer?",
    "a": "A central government officer deployed inside sensitive polling stations on election day."
  },
  {
    "topic": "Electoral System",
    "q": "What is strongroom?",
    "a": "A heavily guarded secure hall where sealed EVMs and VVPATs are stored until counting day."
  },
  {
    "topic": "Electoral System",
    "q": "What is 3-tier security for strongrooms?",
    "a": "Armed security forces guarding strongrooms in 3 perimeter layers (Central Forces, Armed State Police, District Police)."
  },
  {
    "topic": "Electoral System",
    "q": "What is Form 26?",
    "a": "The legal affidavit filed by candidates detailing wealth, education, and criminal cases."
  },
  {
    "topic": "Electoral System",
    "q": "What is an election petition timeline?",
    "a": "Must be filed within 45 days of result declaration in the State High Court."
  },
  {
    "topic": "Electoral System",
    "q": "What is First-Past-The-Post simplicity?",
    "a": "Voters vote for 1 candidate; candidate with most votes wins immediately."
  },
  {
    "topic": "Electoral System",
    "q": "What is PR-STV preference voting?",
    "a": "Voters rank candidates (1, 2, 3...); quota determines winner via vote transfer."
  },
  {
    "topic": "Electoral System",
    "q": "What is National Voters' Day theme?",
    "a": "Promoting active civic participation: 'Nothing Like Voting, I Vote for Sure'."
  },
  {
    "topic": "Electoral System",
    "q": "What is voter turn-out ratio?",
    "a": "The percentage of eligible registered voters who actually cast ballots in an election."
  },
  {
    "topic": "Electoral System",
    "q": "What is electoral roll revision?",
    "a": "Annual update of voter list to add new 18-year-old voters and remove deceased/shifted voters."
  },
  {
    "topic": "Electoral System",
    "q": "What is election spending monitoring?",
    "a": "ECI tracking candidate bank accounts, rallies, and media ads to enforce spending limits."
  },
  {
    "topic": "Electoral System",
    "q": "What is cVIGIL 100-minute rule?",
    "a": "ECI squad responding to reported MCC violations within 100 minutes of citizen upload."
  },
  {
    "topic": "Electoral System",
    "q": "What is postal ballot for senior citizens?",
    "a": "ECI home-voting facility via postal ballot for voters aged 80+ / 85+ and disabled citizens."
  },
  {
    "topic": "Electoral System",
    "q": "What is election symbol reservation?",
    "a": "Reserving permanent symbols (like Lotus, Hand, Elephant) for recognized political parties."
  },
  {
    "topic": "Electoral System",
    "q": "What is free symbol pool?",
    "a": "A list of unreserved symbols allocated to independent candidates by the Returning Officer."
  },
  {
    "topic": "Electoral System",
    "q": "What is election manifesto binding status?",
    "a": "Manifestos are moral promises, not legally enforceable contracts in courts."
  },
  {
    "topic": "Electoral System",
    "q": "What is election notification date?",
    "a": "The official date on which nominations open following President's/Governor's call to elect."
  },
  {
    "topic": "Electoral System",
    "q": "What is last date for withdrawal?",
    "a": "The designated date by which candidates can legally withdraw their nomination papers."
  },
  {
    "topic": "Electoral System",
    "q": "What is election counting day?",
    "a": "The day when sealed EVM Control Units are unsealed and votes tallied in counting centers."
  },
  {
    "topic": "Electoral System",
    "q": "What is Model Code of Conduct activation date?",
    "a": "The instant the ECI announces the election schedule in a press conference."
  },
  {
    "topic": "Electoral System",
    "q": "What is democratic accountability?",
    "a": "The ability of citizens to re-elect or vote out government leaders through regular periodic elections."
  },
  {
    "topic": "Electoral System",
    "q": "What is the primary virtue of Universal Adult Franchise?",
    "a": "Establishing fundamental political equality where every citizen holds equal democratic power."
  },
  {
    "topic": "Electoral System",
    "q": "What is EVM Control Unit memory capacity?",
    "a": "Stores up to 2,000 to 3,840 votes securely in non-volatile EEPROM memory."
  },
  {
    "topic": "Electoral System",
    "q": "What is election security deposit forfeiture threshold?",
    "a": "Candidate securing less than 1/6th of total valid votes polled."
  },
  {
    "topic": "Electoral System",
    "q": "What is Election Commission of India headquarters called?",
    "a": "Nirvachan Sadan in New Delhi."
  },
  {
    "topic": "Electoral System",
    "q": "What is the total number of Parliamentary Constituencies in Lok Sabha?",
    "a": "543 single-member elected constituencies."
  },
  {
    "topic": "Electoral System",
    "q": "What is the role of the Returning Officer on result declaration?",
    "a": "Declaring the winner and issuing the official Certificate of Election (Form 22)."
  },
  {
    "topic": "Factors of Production",
    "q": "What are the four fundamental Factors of Production?",
    "a": "Land, Labour, Capital, and Entrepreneurship."
  },
  {
    "topic": "Factors of Production",
    "q": "What is the economic reward earned by Land?",
    "a": "Rent."
  },
  {
    "topic": "Factors of Production",
    "q": "What is the economic reward earned by Labour?",
    "a": "Wages or Salary."
  },
  {
    "topic": "Factors of Production",
    "q": "What is the economic reward earned by Capital?",
    "a": "Interest."
  },
  {
    "topic": "Factors of Production",
    "q": "What is the economic reward earned by Entrepreneurship?",
    "a": "Profit."
  },
  {
    "topic": "Factors of Production",
    "q": "What is Fixed Capital?",
    "a": "Durable physical assets (machinery, tools, factory buildings, tractors) used repeatedly over years."
  },
  {
    "topic": "Factors of Production",
    "q": "What is Working Capital?",
    "a": "Raw materials, seeds, fuel, and daily cash reserves consumed during a single production cycle."
  },
  {
    "topic": "Factors of Production",
    "q": "What is Human Capital?",
    "a": "The accumulated knowledge, skills, technical expertise, and health embodied in a workforce."
  },
  {
    "topic": "Factors of Production",
    "q": "What is Kaizen?",
    "a": "The Japanese business philosophy of continuous, incremental workplace improvement."
  },
  {
    "topic": "Factors of Production",
    "q": "What is the Demographic Dividend?",
    "a": "Economic growth potential realized when working-age population (15-64) exceeds dependents."
  },
  {
    "topic": "Factors of Production",
    "q": "What is the defined working-age population range?",
    "a": "15 to 64 years old."
  },
  {
    "topic": "Factors of Production",
    "q": "What is India's approximate median age?",
    "a": "Approximately 28 years, providing a young workforce advantage."
  },
  {
    "topic": "Factors of Production",
    "q": "Who pioneered civil aviation in India (Tata Airlines)?",
    "a": "J.R.D. Tata."
  },
  {
    "topic": "Factors of Production",
    "q": "What is a Supply Chain?",
    "a": "The full sequence of processes from raw resource extraction to final customer retail sale."
  },
  {
    "topic": "Factors of Production",
    "q": "What is Physical / Manual Labour?",
    "a": "Work relying primarily on muscular strength, manual dexterity, and physical exertion."
  },
  {
    "topic": "Factors of Production",
    "q": "What is Mental / Intellectual Labour?",
    "a": "Work requiring cognitive analysis, scientific knowledge, professional skill, and problem-solving."
  },
  {
    "topic": "Factors of Production",
    "q": "Why is Labour described as a perishable economic factor?",
    "a": "Because unworked labour capacity cannot be stored; if a worker is unemployed today, today's labour is lost forever."
  },
  {
    "topic": "Factors of Production",
    "q": "Why is Land geographically immobile?",
    "a": "Because land plots cannot be physically moved from one geographical location to another."
  },
  {
    "topic": "Factors of Production",
    "q": "What is a Startup?",
    "a": "A young innovative company designed to scale rapidly with new business models."
  },
  {
    "topic": "Factors of Production",
    "q": "Is Technology a separate 5th factor of production in classical economics?",
    "a": "No, technology is an enabler that enhances the productivity of all 4 factors."
  },
  {
    "topic": "Factors of Production",
    "q": "What major government initiative aims to train youth in vocational skills?",
    "a": "Skill India."
  },
  {
    "topic": "Factors of Production",
    "q": "How does healthcare expenditure function as an economic investment?",
    "a": "Improves worker stamina, reduces absenteeism, and extends long-term workforce productivity."
  },
  {
    "topic": "Factors of Production",
    "q": "What is the Upstream stage of a supply chain?",
    "a": "Early stages involving raw material extraction and component manufacturing."
  },
  {
    "topic": "Factors of Production",
    "q": "What is the Downstream stage of a supply chain?",
    "a": "Late stages involving warehousing, logistics, wholesale, and retail distribution to consumers."
  },
  {
    "topic": "Factors of Production",
    "q": "Which economist highlighted the entrepreneur as an 'innovator'?",
    "a": "Joseph Schumpeter."
  },
  {
    "topic": "Factors of Production",
    "q": "What is the primary characteristic of Land?",
    "a": "It is a passive, fixed gift of nature limited in total supply."
  },
  {
    "topic": "Factors of Production",
    "q": "Why is Labour inseparable from the labourer?",
    "a": "Because the worker must be physically or mentally present to exert labour effort."
  },
  {
    "topic": "Factors of Production",
    "q": "What type of capital asset is a farmer's tractor?",
    "a": "Fixed Capital."
  },
  {
    "topic": "Factors of Production",
    "q": "What type of capital asset is cotton yarn in a textile mill?",
    "a": "Working Capital."
  },
  {
    "topic": "Factors of Production",
    "q": "What is the primary economic risk assumed by an entrepreneur?",
    "a": "Financial loss if production costs exceed market sales revenue."
  },
  {
    "topic": "Factors of Production",
    "q": "What philosophy compounds tiny daily workplace improvements into massive quality gains?",
    "a": "Japanese Kaizen Philosophy."
  },
  {
    "topic": "Factors of Production",
    "q": "What metric measures total output divided by worker hours?",
    "a": "Labour Productivity."
  },
  {
    "topic": "Factors of Production",
    "q": "How does education enhance Human Capital?",
    "a": "Develops scientific analytical skills, cognitive problem-solving, and technical expertise."
  },
  {
    "topic": "Factors of Production",
    "q": "What type of labour does a civil engineer designing a bridge perform?",
    "a": "Mental (Intellectual) Labour."
  },
  {
    "topic": "Factors of Production",
    "q": "What type of labour does a construction worker hauling bricks perform?",
    "a": "Physical (Manual) Labour."
  },
  {
    "topic": "Factors of Production",
    "q": "Why is Entrepreneurship called the 'organizing factor'?",
    "a": "Because the entrepreneur coordinates and combines land, labour, and capital into a working business."
  },
  {
    "topic": "Factors of Production",
    "q": "What is the effect of automation on assembly lines?",
    "a": "Increases output speed and precision while shifting workforce skill requirements."
  },
  {
    "topic": "Factors of Production",
    "q": "What is Artificial Intelligence (AI) in production?",
    "a": "Computer software analyzing data, diagnosing issues, and automating complex robotics."
  },
  {
    "topic": "Factors of Production",
    "q": "What happens to an economy when its working-age population is educated and employed?",
    "a": "Economic output and per capita income rise rapidly (Demographic Dividend)."
  },
  {
    "topic": "Factors of Production",
    "q": "Which of the following is physical fixed capital in a bakery?",
    "a": "Commercial Baking Oven."
  },
  {
    "topic": "Factors of Production",
    "q": "Which of the following is working capital in a bakery?",
    "a": "Wheat flour, sugar, and baking powder."
  },
  {
    "topic": "Factors of Production",
    "q": "What is Financial Capital?",
    "a": "Monetary funds, cash liquidity, and credit used to purchase physical capital assets."
  },
  {
    "topic": "Factors of Production",
    "q": "What is the primary incentive driving entrepreneurship?",
    "a": "Profit and societal value creation."
  },
  {
    "topic": "Factors of Production",
    "q": "Why can't Land produce goods by itself?",
    "a": "Land is a passive factor requiring active human labour and capital inputs."
  },
  {
    "topic": "Factors of Production",
    "q": "What is Sustainable / Green Production?",
    "a": "Manufacturing goods using methods that minimize carbon emissions, pollution, and resource depletion."
  },
  {
    "topic": "Factors of Production",
    "q": "What is the Dependency Ratio formula?",
    "a": "[(Population <15 + Population >65) / Working-Age Population (15-64)] * 100."
  },
  {
    "topic": "Factors of Production",
    "q": "What role do Industrial Training Institutes (ITIs) play?",
    "a": "Imparting hands-on technical and vocational skills to young workers."
  },
  {
    "topic": "Factors of Production",
    "q": "What is an example of an upstream supply chain disruption?",
    "a": "Shortage of raw cocoa beans due to drought in farming regions."
  },
  {
    "topic": "Factors of Production",
    "q": "What is the fundamental goal of economic production?",
    "a": "Transforming resources to satisfy human needs and create economic value."
  },
  {
    "topic": "Factors of Production",
    "q": "Who established India's first modern integrated steel plant in Jamshedpur?",
    "a": "Jamsetji Tata."
  },
  {
    "topic": "Factors of Production",
    "q": "Who founded Reliance Industries, revolutionizing Indian textile and petrochemical industries?",
    "a": "Dhirubhai Ambani."
  },
  {
    "topic": "Factors of Production",
    "q": "Which factor of production is a passive gift of nature?",
    "a": "Land."
  },
  {
    "topic": "Factors of Production",
    "q": "Which factor of production is an active human effort?",
    "a": "Labour."
  },
  {
    "topic": "Factors of Production",
    "q": "What is physical capital wear and tear called in accounting?",
    "a": "Depreciation."
  },
  {
    "topic": "Factors of Production",
    "q": "What happens to working capital during a production run?",
    "a": "It gets completely consumed or transformed into finished goods in one cycle."
  },
  {
    "topic": "Factors of Production",
    "q": "Which type of capital includes patents, software code, and brand trademarks?",
    "a": "Intellectual / Intangible Capital."
  },
  {
    "topic": "Factors of Production",
    "q": "What is Occupational Mobility of Labour?",
    "a": "The ease with which workers can switch from one occupation or industry to another."
  },
  {
    "topic": "Factors of Production",
    "q": "What is Geographical Mobility of Labour?",
    "a": "The ease with which workers can relocate from one city or state to another for employment."
  },
  {
    "topic": "Factors of Production",
    "q": "Why is raw physical labour alone insufficient for modern economic development?",
    "a": "Modern industry requires specialized technical skills, education, and health (Human Capital)."
  },
  {
    "topic": "Factors of Production",
    "q": "What is Schumpeterian 'Creative Destruction'?",
    "a": "The process where innovative entrepreneurs introduce new tech that replaces obsolete production methods."
  },
  {
    "topic": "Factors of Production",
    "q": "What is an example of an upstream stage in chocolate making?",
    "a": "Harvesting raw cocoa pods on farms."
  },
  {
    "topic": "Factors of Production",
    "q": "What is an example of a downstream stage in chocolate making?",
    "a": "Distributing finished chocolate bars to retail grocery stores."
  },
  {
    "topic": "Factors of Production",
    "q": "What is a supply chain bottleneck?",
    "a": "A point of congestion or delay that slows down the entire production flow."
  },
  {
    "topic": "Factors of Production",
    "q": "What is Just-In-Time (JIT) inventory management?",
    "a": "Delivering raw materials exactly when needed in production to minimize storage costs."
  },
  {
    "topic": "Factors of Production",
    "q": "Which country originated Just-In-Time (JIT) manufacturing?",
    "a": "Japan (Toyota Production System)."
  },
  {
    "topic": "Factors of Production",
    "q": "What is the Primary Sector of the economy?",
    "a": "Economic activities involving natural resource extraction (agriculture, forestry, fishing, mining)."
  },
  {
    "topic": "Factors of Production",
    "q": "What is the Secondary Sector of the economy?",
    "a": "Economic activities involving manufacturing factories and industrial processing."
  },
  {
    "topic": "Factors of Production",
    "q": "What is the Tertiary Sector of the economy?",
    "a": "Economic activities providing services (banking, transport, trade, education, health)."
  },
  {
    "topic": "Factors of Production",
    "q": "What is the Quaternary Sector of the economy?",
    "a": "Knowledge-based service activities involving research, IT, software development, and analytics."
  },
  {
    "topic": "Factors of Production",
    "q": "Why is Labour heterogeneous?",
    "a": "Because workers differ in skill, experience, education, intelligence, and physical stamina."
  },
  {
    "topic": "Factors of Production",
    "q": "What is Division of Labour?",
    "a": "Breaking a complex production process into specialized simple tasks assigned to different workers."
  },
  {
    "topic": "Factors of Production",
    "q": "What is the main benefit of Division of Labour?",
    "a": "Increasing production speed, dexterity, and output efficiency through specialization."
  },
  {
    "topic": "Factors of Production",
    "q": "Who illustrated Division of Labour using the Pin Factory example in 1776?",
    "a": "Adam Smith in 'The Wealth of Nations'."
  },
  {
    "topic": "Factors of Production",
    "q": "What is Pradhan Mantri MUDRA Yojana (PMMY)?",
    "a": "Government scheme providing collateral-free loans to micro-entrepreneurs in India."
  },
  {
    "topic": "Factors of Production",
    "q": "How does technology act as a force multiplier?",
    "a": "Increases output yield produced per unit of land, labour, and capital."
  },
  {
    "topic": "Factors of Production",
    "q": "What is Circular Flow of Income?",
    "a": "The continuous movement of money payments, factor services, and goods between firms and households."
  },
  {
    "topic": "Factors of Production",
    "q": "In circular flow, what do households supply to firms?",
    "a": "Factor services (Land, Labour, Capital, Entrepreneurship)."
  },
  {
    "topic": "Factors of Production",
    "q": "In circular flow, what do firms supply to households?",
    "a": "Finished goods & services and factor income payments (wages, rent, interest, profit)."
  },
  {
    "topic": "Factors of Production",
    "q": "What is Total Quality Management (TQM)?",
    "a": "An organization-wide approach focused on continuous product and service quality improvement."
  },
  {
    "topic": "Factors of Production",
    "q": "What happens if an entrepreneur's sales fall below production costs?",
    "a": "The entrepreneur incurs a financial Loss."
  },
  {
    "topic": "Factors of Production",
    "q": "Who founded Infosys, pioneering Indian IT software exports?",
    "a": "N.R. Narayana Murthy."
  },
  {
    "topic": "Factors of Production",
    "q": "Who built Wipro into a global IT service leader?",
    "a": "Azim Premji."
  },
  {
    "topic": "Factors of Production",
    "q": "Who is the pioneering woman entrepreneur who founded Biocon?",
    "a": "Kiran Mazumdar-Shaw."
  },
  {
    "topic": "Factors of Production",
    "q": "What is supply chain visibility?",
    "a": "The ability to track every product component live from raw extraction to customer delivery."
  },
  {
    "topic": "Factors of Production",
    "q": "What is a supply chain audit?",
    "a": "Evaluating every step of a supply chain for efficiency, cost, safety, and sustainability."
  },
  {
    "topic": "Factors of Production",
    "q": "What is capital accumulation?",
    "a": "Increasing total physical machinery, buildings, and infrastructure in an economy over time."
  },
  {
    "topic": "Factors of Production",
    "q": "What is gross fixed capital formation?",
    "a": "The net addition to fixed capital assets (buildings, machinery) during an accounting year."
  },
  {
    "topic": "Factors of Production",
    "q": "What is labour intensive production?",
    "a": "Manufacturing processes relying more on human labour than automated machinery."
  },
  {
    "topic": "Factors of Production",
    "q": "What is capital intensive production?",
    "a": "Manufacturing processes relying more on automated machinery and financial capital than manual labour."
  },
  {
    "topic": "Factors of Production",
    "q": "What is opportunity cost of capital?",
    "a": "The financial return forgone by investing capital in one project instead of the next best alternative."
  },
  {
    "topic": "Factors of Production",
    "q": "What is human resource development (HRD)?",
    "a": "Systematic training, education, and health programs designed to upgrade workforce skills."
  },
  {
    "topic": "Factors of Production",
    "q": "What is factor productivity?",
    "a": "The ratio of economic output generated per unit of factor input (e.g. land yield per acre)."
  },
  {
    "topic": "Factors of Production",
    "q": "What is fixed factor of production?",
    "a": "An input (like factory land) whose quantity cannot be easily changed in the short run."
  },
  {
    "topic": "Factors of Production",
    "q": "What is variable factor of production?",
    "a": "An input (like raw materials or daily wages) whose quantity changes directly with output volume."
  },
  {
    "topic": "Factors of Production",
    "q": "What is entrepreneur risk bearing?",
    "a": "Accepting financial uncertainty and market price fluctuations in business operations."
  },
  {
    "topic": "Factors of Production",
    "q": "What is startup incubator?",
    "a": "An institution offering seed capital, mentorship, and workspace to help young startups scale."
  },
  {
    "topic": "Factors of Production",
    "q": "What is intellectual property right (IPR)?",
    "a": "Legal protection (patents, copyrights, trademarks) granted to creators for intellectual innovations."
  },
  {
    "topic": "Factors of Production",
    "q": "What is patent?",
    "a": "An exclusive legal right granted for a new technological invention for a fixed period."
  },
  {
    "topic": "Factors of Production",
    "q": "What is trademark?",
    "a": "A legally registered logo, symbol, or brand name identifying a company's products."
  },
  {
    "topic": "Factors of Production",
    "q": "What is corporate social responsibility (CSR)?",
    "a": "Business initiatives contributing to social welfare, education, and environmental sustainability."
  },
  {
    "topic": "Factors of Production",
    "q": "What is logistics management?",
    "a": "Planning and controlling the efficient storage and flow of goods from point of origin to consumption."
  },
  {
    "topic": "Factors of Production",
    "q": "What is cold chain logistics?",
    "a": "Refrigerated supply chain transport maintaining perishable goods (milk, vaccines) at controlled low temperatures."
  },
  {
    "topic": "Factors of Production",
    "q": "What is third-party logistics (3PL)?",
    "a": "Outsourcing warehousing and freight transport operations to specialized logistics companies."
  },
  {
    "topic": "Factors of Production",
    "q": "What is retail distribution?",
    "a": "Selling finished commodities directly to end consumers through stores or e-commerce."
  },
  {
    "topic": "Factors of Production",
    "q": "What is wholesale trade?",
    "a": "Buying goods in large bulk quantities from manufacturers and selling in smaller lots to retailers."
  },
  {
    "topic": "Factors of Production",
    "q": "What is business process automation?",
    "a": "Using technology to automate repetitive business workflows and data management."
  },
  {
    "topic": "Factors of Production",
    "q": "What is lean manufacturing?",
    "a": "A production methodology aimed at eliminating waste and optimizing value-added steps."
  },
  {
    "topic": "Factors of Production",
    "q": "What is total factor productivity (TFP)?",
    "a": "Economic growth efficiency driven by technological innovation and managerial quality beyond raw inputs."
  },
  {
    "topic": "Factors of Production",
    "q": "What is economic efficiency?",
    "a": "Producing maximum goods and services using the minimum required factor inputs without waste."
  },
  {
    "topic": "Factors of Production",
    "q": "What is factor market?",
    "a": "The market where factors of production (land, labour, capital) are bought, sold, and rented."
  },
  {
    "topic": "Factors of Production",
    "q": "What is product market?",
    "a": "The market where finished goods and services are bought and sold by consumers."
  },
  {
    "topic": "Factors of Production",
    "q": "What is per capita income?",
    "a": "Total national income divided by total population, measuring average living standard."
  },
  {
    "topic": "Factors of Production",
    "q": "What is skill mismatch?",
    "a": "A situation where worker qualifications do not align with skills demanded by employers."
  },
  {
    "topic": "Factors of Production",
    "q": "What is vocational education?",
    "a": "Practical training equipping students with specific technical skills for trades and crafts."
  },
  {
    "topic": "Factors of Production",
    "q": "What is Make in India?",
    "a": "A national campaign encouraging domestic and global companies to manufacture products in India."
  },
  {
    "topic": "Factors of Production",
    "q": "What is Digital India?",
    "a": "A flagship program transforming India into a digitally empowered knowledge economy."
  },
  {
    "topic": "Factors of Production",
    "q": "What is economic infrastructure?",
    "a": "Foundational physical assets like roads, railways, ports, power grids, and telecom networks."
  },
  {
    "topic": "Factors of Production",
    "q": "What is social infrastructure?",
    "a": "Civic assets like schools, universities, hospitals, and housing that build human capital."
  },
  {
    "topic": "Factors of Production",
    "q": "What is economic rent?",
    "a": "Surplus payment earned by a factor of production over and above its transfer earnings."
  },
  {
    "topic": "Factors of Production",
    "q": "What is real wage?",
    "a": "The purchasing power of monetary wages after adjusting for inflation."
  },
  {
    "topic": "Factors of Production",
    "q": "What is nominal wage?",
    "a": "The actual monetary amount paid to a worker in cash currency."
  },
  {
    "topic": "Factors of Production",
    "q": "What is ultimate outcome of combining 4 factors?",
    "a": "Generating economic value, goods, services, and maximizing societal living standards."
  },
  {
    "topic": "Factors of Production",
    "q": "What is working capital turnover ratio?",
    "a": "A financial metric measuring how efficiently a firm uses working capital to support sales."
  },
  {
    "topic": "Factors of Production",
    "q": "What is human capital depreciation?",
    "a": "The decline in worker skills and productivity due to technological obsolescence or long unemployment."
  },
  {
    "topic": "Factors of Production",
    "q": "What is factor substitution?",
    "a": "Replacing one factor of production with another (such as replacing manual labour with capital machinery)."
  }
];

const MCQS = [
  {
    "topic": "Political Map",
    "q": "Which Harappan site features the world's earliest known tidal dockyard?",
    "opts": [
      "Lothal",
      "Mohenjo-daro",
      "Harappa",
      "Kalibangan"
    ],
    "ans": 0,
    "exp": "Lothal in Gujarat possessed a brick-lined tidal dockyard connected to the Arabian Sea via the Bhogavo River."
  },
  {
    "topic": "Political Map",
    "q": "The Vedic text containing the oldest hymns of praise to nature deities is the:",
    "opts": [
      "Rig Veda",
      "Sama Veda",
      "Yajur Veda",
      "Atharva Veda"
    ],
    "ans": 0,
    "exp": "The Rig Veda (c. 1500–1200 BCE) is the oldest of the four Vedas and contains 1,028 Sanskrit hymns."
  },
  {
    "topic": "Political Map",
    "q": "Which technology enabled Gangetic forest clearing during the Later Vedic period?",
    "opts": [
      "Iron technology (Krishna Ayas)",
      "Bronze tools",
      "Copper ploughs",
      "Stone axes"
    ],
    "ans": 0,
    "exp": "The discovery of iron (Krishna Ayas) around 1000 BCE enabled deep ploughing and forest clearing in the Gangetic plain."
  },
  {
    "topic": "Political Map",
    "q": "Which Mahajanapada emerged as the most dominant kingdom in the Gangetic plain by 400 BCE?",
    "opts": [
      "Magadha",
      "Kosala",
      "Avanti",
      "Vatsa"
    ],
    "ans": 0,
    "exp": "Magadha's iron ore access, fertile soil, strategic location, and military innovations made it the supreme power."
  },
  {
    "topic": "Political Map",
    "q": "The Vajji Confederacy was an ancient example of which political system?",
    "opts": [
      "A Republic (Gana-Sangha)",
      "An Absolute Monarchy",
      "A Theocracy",
      "A Military Dictatorship"
    ],
    "ans": 0,
    "exp": "Vajji was governed by an assembly of oligarchic clan elders (Lichchhavis), making it an early republic."
  },
  {
    "topic": "Political Map",
    "q": "Who was the author of the ancient political treatise 'Arthashastra'?",
    "opts": [
      "Chanakya (Kautilya)",
      "Megasthenes",
      "Kalidasa",
      "Banabhatta"
    ],
    "ans": 0,
    "exp": "Chanakya (Kautilya), mentor to Chandragupta Maurya, wrote the Arthashastra on statecraft and economy."
  },
  {
    "topic": "Political Map",
    "q": "Emperor Ashoka embraced Dhamma and renounced aggressive war after which battle?",
    "opts": [
      "Kalinga War",
      "Battle of Panipat",
      "Battle of Hydaspes",
      "Battle of Tarain"
    ],
    "ans": 0,
    "exp": "Horrified by the slaughter of over 100,000 people in the Kalinga War (c. 261 BCE), Ashoka turned to non-violence."
  },
  {
    "topic": "Political Map",
    "q": "India's national emblem (Lion Capital) is adapted from Ashoka's pillar at:",
    "opts": [
      "Sarnath",
      "Sanchi",
      "Pataliputra",
      "Lumbini"
    ],
    "ans": 0,
    "exp": "The Lion Capital featuring four back-to-back lions was erected by Ashoka at Sarnath."
  },
  {
    "topic": "Political Map",
    "q": "Which Gupta-era mathematician approximated pi and proposed that the Earth rotates on its axis?",
    "opts": [
      "Aryabhata",
      "Varahamihira",
      "Brahmagupta",
      "Bhaskara I"
    ],
    "ans": 0,
    "exp": "Aryabhata (476–550 CE) wrote the Aryabhatiya, introducing advanced concepts in astronomy and mathematics."
  },
  {
    "topic": "Political Map",
    "q": "Who was known as the 'Napoleon of India' for his military conquests recorded on the Allahabad Pillar?",
    "opts": [
      "Samudragupta",
      "Chandragupta I",
      "Chandragupta II",
      "Skandagupta"
    ],
    "ans": 0,
    "exp": "Historian V.A. Smith dubbed Samudragupta the 'Napoleon of India' due to his widespread military conquests."
  },
  {
    "topic": "Political Map",
    "q": "Who founded Nalanda University in the 5th century CE?",
    "opts": [
      "Kumaragupta I",
      "Chandragupta Vikramaditya",
      "Samudragupta",
      "Harshavardhana"
    ],
    "ans": 0,
    "exp": "Kumaragupta I of the Gupta dynasty founded Nalanda, which became a world-renowned Buddhist university."
  },
  {
    "topic": "Political Map",
    "q": "Who was the Chinese Buddhist pilgrim who visited India during Emperor Harshavardhana's reign?",
    "opts": [
      "Xuanzang (Hiuen Tsang)",
      "Faxian (Fa-Hien)",
      "I-Tsing",
      "Zheng He"
    ],
    "ans": 0,
    "exp": "Xuanzang spent over a decade in India (630–644 CE) and left detailed records of Harsha's court and Nalanda."
  },
  {
    "topic": "Political Map",
    "q": "Which Chalukya king halted Harshavardhana's southward expansion at the Battle of Narmada?",
    "opts": [
      "Pulakeshin II",
      "Vikramaditya II",
      "Kirtivarman I",
      "Mangalesha"
    ],
    "ans": 0,
    "exp": "Pulakeshin II of the Badami Chalukyas defeated Harsha on the banks of the Narmada River around 618 CE."
  },
  {
    "topic": "Political Map",
    "q": "Which three dynasties fought the 'Tripartite Struggle' for control of Kannauj?",
    "opts": [
      "Pratiharas, Palas, & Rashtrakutas",
      "Cholas, Cheras, & Pandyas",
      "Mauryas, Guptas, & Kushans",
      "Mamluks, Khaljis, & Tughlaqs"
    ],
    "ans": 0,
    "exp": "The Gurjara-Pratiharas, Palas, and Rashtrakutas fought for over two centuries for supremacy over Kannauj."
  },
  {
    "topic": "Political Map",
    "q": "The Second Battle of Tarain (1192) resulted in the defeat of which Rajput king?",
    "opts": [
      "Prithviraj Chauhan III",
      "Rana Sanga",
      "Rana Kumbha",
      "Jaichand"
    ],
    "ans": 0,
    "exp": "Muhammad Ghori defeated Prithviraj Chauhan III at Tarain in 1192, opening northern India to Turkic rule."
  },
  {
    "topic": "Political Map",
    "q": "Who founded the Delhi Sultanate in 1206?",
    "opts": [
      "Qutb-ud-din Aibak",
      "Iltutmish",
      "Alauddin Khalji",
      "Balban"
    ],
    "ans": 0,
    "exp": "Qutb-ud-din Aibak, a former slave general of Muhammad Ghori, established the Slave Dynasty in 1206."
  },
  {
    "topic": "Political Map",
    "q": "Who was the first and only woman ruler of the Delhi Sultanate?",
    "opts": [
      "Razia Sultan",
      "Chand Bibi",
      "Nur Jahan",
      "Mumtaz Mahal"
    ],
    "ans": 0,
    "exp": "Razia Sultan, daughter of Iltutmish, ruled Delhi from 1236 to 1240."
  },
  {
    "topic": "Political Map",
    "q": "What was the Iqta system introduced by Iltutmish?",
    "opts": [
      "Assigning land revenue grants to military officers",
      "A direct cash tax on peasants",
      "A market price control system",
      "A temple taxation policy"
    ],
    "ans": 0,
    "exp": "Under the Iqta system, officers (Muqtis) received revenue assignments in exchange for military service."
  },
  {
    "topic": "Political Map",
    "q": "Which Delhi Sultan established strict market price controls to maintain a massive standing army?",
    "opts": [
      "Alauddin Khalji",
      "Muhammad bin Tughlaq",
      "Firoz Shah Tughlaq",
      "Balban"
    ],
    "ans": 0,
    "exp": "Alauddin Khalji (1296–1316) regulated prices of food, cloth, and horses to afford his large army against the Mongols."
  },
  {
    "topic": "Political Map",
    "q": "Muhammad bin Tughlaq shifted the capital of the Sultanate from Delhi to which southern city in 1327?",
    "opts": [
      "Daulatabad (Devagiri)",
      "Golconda",
      "Bijapur",
      "Madurai"
    ],
    "ans": 0,
    "exp": "Muhammad bin Tughlaq ordered the capital transfer to Daulatabad, causing immense hardship before abandoning it."
  },
  {
    "topic": "Political Map",
    "q": "Which Central Asian conqueror invaded India and sacked Delhi in 1398?",
    "opts": [
      "Timur (Tamerlane)",
      "Genghis Khan",
      "Nadir Shah",
      "Ahmad Shah Abdali"
    ],
    "ans": 0,
    "exp": "Timur sacked Delhi in 1398, devastating the city and effectively destroying Tughlaq authority."
  },
  {
    "topic": "Political Map",
    "q": "Who built the 37-metre Vijay Stambha (Victory Tower) at Chittor Fort?",
    "opts": [
      "Rana Kumbha",
      "Rana Sanga",
      "Maharana Pratap",
      "Raja Man Singh"
    ],
    "ans": 0,
    "exp": "Rana Kumbha built the Vijay Stambha at Chittor to commemorate his victory over the Sultan of Malwa."
  },
  {
    "topic": "Political Map",
    "q": "The ritual self-immolation performed by Rajput women to protect their honour before imminent defeat was called:",
    "opts": [
      "Jauhar",
      "Sati",
      "Saka",
      "Sallekhana"
    ],
    "ans": 0,
    "exp": "Jauhar was the mass self-immolation of Rajput women, while men engaged in Saka (fighting to the death)."
  },
  {
    "topic": "Political Map",
    "q": "Who founded the Vijayanagara Empire in 1336?",
    "opts": [
      "Harihara I & Bukka Raya I",
      "Krishnadevaraya",
      "Rama Raya",
      "Saluva Narasimha"
    ],
    "ans": 0,
    "exp": "Brothers Harihara I and Bukka Raya I founded Vijayanagara on the banks of the Tungabhadra River."
  },
  {
    "topic": "Political Map",
    "q": "Which Vijayanagara ruler authored 'Amuktamalyada' and hosted the Ashtadiggajas in his court?",
    "opts": [
      "Krishnadevaraya",
      "Harihara I",
      "Bukka I",
      "Rama Raya"
    ],
    "ans": 0,
    "exp": "Krishnadevaraya (1509–1529) presided over Vijayanagara's golden age of culture, literature, and military victory."
  },
  {
    "topic": "Political Map",
    "q": "The Battle of Talikota (1565) resulted in the destruction of which empire's capital?",
    "opts": [
      "Vijayanagara Empire",
      "Bahmani Sultanate",
      "Maratha Empire",
      "Ahom Kingdom"
    ],
    "ans": 0,
    "exp": "An alliance of four Deccan Sultanates defeated Vijayanagara at Talikota and sacked Hampi."
  },
  {
    "topic": "Political Map",
    "q": "Who founded the Bahmani Sultanate in 1347?",
    "opts": [
      "Alauddin Bahman Shah (Hasan Gangu)",
      "Mahmud Gawan",
      "Firoz Shah Bahmani",
      "Yusuf Adil Shah"
    ],
    "ans": 0,
    "exp": "Hasan Gangu assumed the title Alauddin Bahman Shah and founded the first independent Muslim kingdom in the Deccan."
  },
  {
    "topic": "Political Map",
    "q": "Which of the following was NOT one of the five Deccan Sultanates?",
    "opts": [
      "Jaunpur",
      "Bijapur",
      "Golconda",
      "Ahmednagar"
    ],
    "ans": 0,
    "exp": "Jaunpur was a northern Sultanate (Sharqi dynasty). The five Deccan Sultanates were Bijapur, Ahmednagar, Golconda, Berar, and Bidar."
  },
  {
    "topic": "Political Map",
    "q": "What was the mandatory labor service system in the Ahom Kingdom of Assam called?",
    "opts": [
      "Paik System",
      "Iqta System",
      "Mansabdari System",
      "Zabt System"
    ],
    "ans": 0,
    "exp": "Under the Paik system, every adult male (paik) was obligated to provide labor or military service to the state."
  },
  {
    "topic": "Political Map",
    "q": "Which Ahom general defeated the Mughal river fleet at the Battle of Saraighat (1671)?",
    "opts": [
      "Lachit Borphukan",
      "Sukaphaa",
      "Rudra Singha",
      "Maniram Dewan"
    ],
    "ans": 0,
    "exp": "Lachit Borphukan used brilliant naval tactics on the Brahmaputra River to crush the invading Mughal fleet."
  },
  {
    "topic": "Political Map",
    "q": "In which year was the First Battle of Panipat fought?",
    "opts": [
      "1526",
      "1556",
      "1761",
      "1192"
    ],
    "ans": 0,
    "exp": "On April 21, 1526, Babur defeated Ibrahim Lodi at Panipat, founding the Mughal Empire."
  },
  {
    "topic": "Political Map",
    "q": "Which Afghan ruler introduced the silver Rupiya (precursor to modern Rupee) and built the Grand Trunk Road?",
    "opts": [
      "Sher Shah Suri",
      "Bahlul Lodi",
      "Ahmad Shah Abdali",
      "Mahmud Ghazni"
    ],
    "ans": 0,
    "exp": "Sher Shah Suri (1540–1545) introduced the silver Rupiya, built the GT Road, and reorganized land revenue."
  },
  {
    "topic": "Political Map",
    "q": "The Mansabdari system introduced by Akbar assigned ranks based on two components: Zat and ____?",
    "opts": [
      "Sawar",
      "Jagir",
      "Subah",
      "Faujdar"
    ],
    "ans": 0,
    "exp": "Zat indicated personal status/salary, while Sawar indicated the required cavalry contingent size."
  },
  {
    "topic": "Political Map",
    "q": "What was Akbar's land tax system formulated by Raja Todar Mal called?",
    "opts": [
      "Zabt (Dahsala) System",
      "Iqta System",
      "Ryotwari System",
      "Permanent Settlement"
    ],
    "ans": 0,
    "exp": "The Zabt (Dahsala) system assessed land tax as a cash amount based on 10-year average yields and prices."
  },
  {
    "topic": "Political Map",
    "q": "Akbar's policy of universal peace and religious tolerance was known as:",
    "opts": [
      "Sulh-i-kul",
      "Din-i-Ilahi",
      "Jizya",
      "Ibadat Khana"
    ],
    "ans": 0,
    "exp": "Sulh-i-kul ('universal peace') was Akbar's official policy of equal treatment and tolerance for all religions."
  },
  {
    "topic": "Political Map",
    "q": "Which Mughal Emperor built the Taj Mahal, Red Fort, and Jama Masjid?",
    "opts": [
      "Shah Jahan",
      "Akbar",
      "Jahangir",
      "Aurangzeb"
    ],
    "ans": 0,
    "exp": "Shah Jahan (1628–1658) presided over the golden age of Mughal architecture, building the Taj Mahal and Red Fort."
  },
  {
    "topic": "Political Map",
    "q": "What poll tax on non-Muslims did Aurangzeb re-impose in 1679?",
    "opts": [
      "Jizya",
      "Zakat",
      "Kharaj",
      "Chauth"
    ],
    "ans": 0,
    "exp": "Aurangzeb re-imposed the Jizya tax in 1679, which had been abolished by Akbar over a century earlier."
  },
  {
    "topic": "Political Map",
    "q": "What was Aurangzeb's 'Deccan Ulcer'?",
    "opts": [
      "His 26-year-long war in the Deccan that drained the treasury",
      "A tropical disease that struck his army",
      "A major peasant rebellion in Delhi",
      "A naval war against the Portuguese"
    ],
    "ans": 0,
    "exp": "Aurangzeb spent 26 years (1681–1707) in the Deccan fighting Marathas and annexing Sultanates, ruining his empire."
  },
  {
    "topic": "Political Map",
    "q": "What was the council of eight ministers in Chhatrapati Shivaji's government called?",
    "opts": [
      "Ashta Pradhan",
      "Navaratnas",
      "Ashtadiggajas",
      "Mantri Parishad"
    ],
    "ans": 0,
    "exp": "Shivaji created the Ashta Pradhan (Council of Eight), headed by the Peshwa (Prime Minister)."
  },
  {
    "topic": "Political Map",
    "q": "What were Chauth and Sardeshmukhi in Maratha administration?",
    "opts": [
      "Taxes levied on non-Maratha territories",
      "Military ranks in Shivaji's navy",
      "Titles granted to ministers",
      "Land grant categories"
    ],
    "ans": 0,
    "exp": "Chauth (1/4th revenue) and Sardeshmukhi (additional 10%) were protection taxes collected from neighboring areas."
  },
  {
    "topic": "Political Map",
    "q": "Where and when was Shivaji formally crowned Chhatrapati?",
    "opts": [
      "Raigad Fort (1674)",
      "Shivneri Fort (1630)",
      "Pratapgad (1659)",
      "Pune (1646)"
    ],
    "ans": 0,
    "exp": "Shivaji was crowned Chhatrapati at Raigad Fort on June 6, 1674 by Gaga Bhatt."
  },
  {
    "topic": "Political Map",
    "q": "The Third Battle of Panipat (1761) was fought between the Marathas and:",
    "opts": [
      "Ahmad Shah Abdali (Afghan)",
      "Nadir Shah",
      "East India Company",
      "Mughals"
    ],
    "ans": 0,
    "exp": "The Afghan conqueror Ahmad Shah Abdali defeated the Marathas in 1761, crushing their all-India imperial ambitions."
  },
  {
    "topic": "Political Map",
    "q": "Who created the Khalsa military-spiritual brotherhood on Baisakhi 1699?",
    "opts": [
      "Guru Gobind Singh Ji",
      "Guru Nanak Dev Ji",
      "Guru Arjan Dev Ji",
      "Guru Tegh Bahadur Ji"
    ],
    "ans": 0,
    "exp": "Guru Gobind Singh Ji, the 10th Sikh Guru, established the Khalsa to fight oppression and protect righteousness."
  },
  {
    "topic": "Political Map",
    "q": "Who was the founder and greatest ruler of the Sikh Empire?",
    "opts": [
      "Maharaja Ranjit Singh",
      "Banda Singh Bahadur",
      "Charat Singh",
      "Duleep Singh"
    ],
    "ans": 0,
    "exp": "Maharaja Ranjit Singh ('Lion of Punjab') united the Sikh misls and established an empire centered at Lahore."
  },
  {
    "topic": "Political Map",
    "q": "Which Indian ruler was famous for developing iron-cased war rockets used against the British?",
    "opts": [
      "Tipu Sultan",
      "Hyder Ali",
      "Shivaji Maharaj",
      "Ranjit Singh"
    ],
    "ans": 0,
    "exp": "Tipu Sultan of Mysore developed iron-cased war rockets that inspired the British Congreve rocket design."
  },
  {
    "topic": "Political Map",
    "q": "Tipu Sultan died fighting British forces in 1799 during which battle?",
    "opts": [
      "Siege of Seringapatam",
      "Battle of Wandiwash",
      "Battle of Buxar",
      "Battle of Pollilur"
    ],
    "ans": 0,
    "exp": "Tipu Sultan died on May 4, 1799, defending the ramparts of Seringapatam in the 4th Anglo-Mysore War."
  },
  {
    "topic": "Political Map",
    "q": "Why was Bengal called the 'Paradise of the East' in the 18th century?",
    "opts": [
      "Due to immense wealth from textiles, silk, and agriculture",
      "Because of its pleasant climate",
      "Because it had no taxation",
      "Due to gold mines"
    ],
    "ans": 0,
    "exp": "Bengal was the richest Mughal province, renowned for Dhaka muslin textiles, silk, and agricultural surplus."
  },
  {
    "topic": "Political Map",
    "q": "Who founded the independent state of Hyderabad in 1724?",
    "opts": [
      "Nizam-ul-Mulk Asaf Jah I",
      "Saadat Khan",
      "Murshid Quli Khan",
      "Tipu Sultan"
    ],
    "ans": 0,
    "exp": "Nizam-ul-Mulk Asaf Jah I established the Asaf Jahi dynasty in Hyderabad in 1724."
  },
  {
    "topic": "Political Map",
    "q": "Vasco da Gama reached Calicut, India by sea in which year?",
    "opts": [
      "1498",
      "1600",
      "1757",
      "1510"
    ],
    "ans": 0,
    "exp": "Vasco da Gama arrived at Calicut (Kozhikode) on May 20, 1498, discovering the direct sea route from Europe."
  },
  {
    "topic": "Political Map",
    "q": "Which battle in 1760 ended French political ambitions in India?",
    "opts": [
      "Battle of Wandiwash",
      "Battle of Plassey",
      "Battle of Buxar",
      "Battle of Colachel"
    ],
    "ans": 0,
    "exp": "The British under Eyre Coote defeated the French under Lally at Wandiwash in 1760."
  },
  {
    "topic": "Political Map",
    "q": "The Battle of Plassey (1757) was won by the British primarily through:",
    "opts": [
      "Conspiracy and treason of Mir Jafar",
      "Superior artillery firepower",
      "Naval blockade",
      "Fierce cavalry charges"
    ],
    "ans": 0,
    "exp": "Robert Clive secretly bribed Mir Jafar to defect during the battle, securing victory by conspiracy."
  },
  {
    "topic": "Political Map",
    "q": "The EIC obtained Diwani (revenue collection) rights over Bengal after which battle?",
    "opts": [
      "Battle of Buxar (1764)",
      "Battle of Plassey (1757)",
      "Battle of Wandiwash (1760)",
      "Battle of Assaye (1803)"
    ],
    "ans": 0,
    "exp": "The Treaty of Allahabad (1765) following the Battle of Buxar granted Diwani rights over Bengal, Bihar, and Odisha."
  },
  {
    "topic": "Political Map",
    "q": "The Subsidiary Alliance system was introduced in 1798 by which Governor-General?",
    "opts": [
      "Lord Wellesley",
      "Lord Dalhousie",
      "Lord Cornwallis",
      "Lord Hastings"
    ],
    "ans": 0,
    "exp": "Lord Wellesley introduced the Subsidiary Alliance system, forcing Indian rulers to station and pay for British garrisons."
  },
  {
    "topic": "Political Map",
    "q": "The Doctrine of Lapse was introduced by which Governor-General?",
    "opts": [
      "Lord Dalhousie",
      "Lord Wellesley",
      "Lord Cornwallis",
      "Lord Curzon"
    ],
    "ans": 0,
    "exp": "Lord Dalhousie (1848–1856) used the Doctrine of Lapse to annex Satara, Jhansi, Nagpur, and other states."
  },
  {
    "topic": "Political Map",
    "q": "Which sepoy struck the first blow of the 1857 Revolt at Barrackpore?",
    "opts": [
      "Mangal Pandey",
      "Pandey Bechar",
      "Bhakt Khan",
      "Tantia Tope"
    ],
    "ans": 0,
    "exp": "Mangal Pandey of the 34th Bengal Native Infantry attacked British officers on March 29, 1857."
  },
  {
    "topic": "Political Map",
    "q": "Who was proclaimed symbolic leader of the Revolt of 1857 in Delhi?",
    "opts": [
      "Bahadur Shah Zafar II",
      "Nana Sahib",
      "Rani Lakshmibai",
      "Kunwar Singh"
    ],
    "ans": 0,
    "exp": "Sepoys declared the 82-year-old last Mughal Emperor Bahadur Shah Zafar II as Emperor of India."
  },
  {
    "topic": "Political Map",
    "q": "What major administrative change occurred after the Revolt of 1857?",
    "opts": [
      "Government of India Act 1858 transferred rule from EIC to British Crown",
      "India was partitioned immediately",
      "East India Company rule was expanded",
      "Princely states were abolished"
    ],
    "ans": 0,
    "exp": "The 1858 Act ended East India Company rule and established direct British Crown governance (the Raj)."
  },
  {
    "topic": "Political Map",
    "q": "The 'Drain of Wealth' theory detailing British economic extraction from India was articulated by:",
    "opts": [
      "Dadabhai Naoroji",
      "Gopal Krishna Gokhale",
      "Bal Gangadhar Tilak",
      "Mahatma Gandhi"
    ],
    "ans": 0,
    "exp": "Dadabhai Naoroji in 'Poverty and Un-British Rule in India' proved Britain extracted millions annually."
  },
  {
    "topic": "Political Map",
    "q": "The Indian National Congress (INC) was founded in December 1885 in which city?",
    "opts": [
      "Bombay",
      "Calcutta",
      "Madras",
      "Delhi"
    ],
    "ans": 0,
    "exp": "The INC was founded at Gokuldas Tejpal Sanskrit College in Bombay on December 28, 1885."
  },
  {
    "topic": "Political Map",
    "q": "The Partition of Bengal in 1905 was ordered by which Viceroy?",
    "opts": [
      "Lord Curzon",
      "Lord Minto",
      "Lord Irwin",
      "Lord Ripon"
    ],
    "ans": 0,
    "exp": "Lord Curzon partitioned Bengal in 1905 on religious lines, triggering the Swadeshi Movement."
  },
  {
    "topic": "Political Map",
    "q": "Which leader famously declared 'Swaraj is my birthright, and I shall have it!'?",
    "opts": [
      "Bal Gangadhar Tilak",
      "Lala Lajpat Rai",
      "Bipin Chandra Pal",
      "Subhas Chandra Bose"
    ],
    "ans": 0,
    "exp": "Bal Gangadhar Tilak gave this famous slogan during the Extremist phase of the national movement."
  },
  {
    "topic": "Political Map",
    "q": "The Jallianwala Bagh massacre (April 13, 1919) took place in which city?",
    "opts": [
      "Amritsar",
      "Lahore",
      "Jalandhar",
      "Ludhiana"
    ],
    "ans": 0,
    "exp": "General Dyer ordered troops to fire on trapped peaceful protesters at Jallianwala Bagh in Amritsar."
  },
  {
    "topic": "Political Map",
    "q": "Why did Gandhi abruptly call off the Non-Cooperation Movement in February 1922?",
    "opts": [
      "Chauri Chaura violent police station attack",
      "Jallianwala Bagh massacre",
      "Arrest of Jawaharlal Nehru",
      "British offered independence"
    ],
    "ans": 0,
    "exp": "Horrified by the death of 22 policemen at Chauri Chaura, Gandhi halted the movement due to violence."
  },
  {
    "topic": "Political Map",
    "q": "Gandhi's 388-km march from Sabarmati to Dandi in 1930 was launched to break which law?",
    "opts": [
      "The Salt Law",
      "The Rowlatt Act",
      "The Press Act",
      "The Arms Act"
    ],
    "ans": 0,
    "exp": "Gandhi broke the British salt monopoly at Dandi on April 6, 1930, launching Civil Disobedience."
  },
  {
    "topic": "Political Map",
    "q": "The Poona Pact of 1932 was signed between Mahatma Gandhi and:",
    "opts": [
      "Dr. B.R. Ambedkar",
      "Jawaharlal Nehru",
      "Muhammad Ali Jinnah",
      "Subhas Chandra Bose"
    ],
    "ans": 0,
    "exp": "The Poona Pact replaced separate electorates for Depressed Classes with reserved seats in joint electorates."
  },
  {
    "topic": "Political Map",
    "q": "What historic slogan did Gandhi give during the Quit India Movement on August 8, 1942?",
    "opts": [
      "Do or Die",
      "Jai Hind",
      "Swaraj is my birthright",
      "Inquilab Zindabad"
    ],
    "ans": 0,
    "exp": "Gandhi called on Indians to 'Do or Die' for immediate independence during the Quit India Movement."
  },
  {
    "topic": "Political Map",
    "q": "Who took command of the Indian National Army (Azad Hind Fauj) in Singapore in 1943?",
    "opts": [
      "Subhas Chandra Bose",
      "Captain Mohan Singh",
      "Rash Behari Bose",
      "Bhagat Singh"
    ],
    "ans": 0,
    "exp": "Netaji Subhas Chandra Bose reorganized the INA in 1943 to fight British rule militarily."
  },
  {
    "topic": "Political Map",
    "q": "Which 1946 military revolt in Bombay showed the British that Indian armed forces would no longer obey them?",
    "opts": [
      "Royal Indian Navy (RIN) Mutiny",
      "Meerut Mutiny",
      "Barrackpore Uprising",
      "Ghadar Mutiny"
    ],
    "ans": 0,
    "exp": "The RIN Mutiny across 78 ships in Feb 1946 convinced the British that military control was lost."
  },
  {
    "topic": "Political Map",
    "q": "On what date did India achieve independence from British colonial rule?",
    "opts": [
      "August 15, 1947",
      "January 26, 1950",
      "August 8, 1942",
      "June 3, 1947"
    ],
    "ans": 0,
    "exp": "India became a free, sovereign nation at midnight on August 15, 1947."
  },
  {
    "topic": "Political Map",
    "q": "Who delivered the iconic 'Tryst with Destiny' speech at midnight on August 14-15, 1947?",
    "opts": [
      "Jawaharlal Nehru",
      "Mahatma Gandhi",
      "Sardar Patel",
      "Dr. Rajendra Prasad"
    ],
    "ans": 0,
    "exp": "Jawaharlal Nehru delivered the 'Tryst with Destiny' speech to the Constituent Assembly."
  },
  {
    "topic": "Political Map",
    "q": "What was the Permanent Settlement introduced by Lord Cornwallis in 1793?",
    "opts": [
      "Fixed land revenue demand paid by zamindars permanently",
      "Direct tax on individual peasants",
      "Village community land tax",
      "Temporary 10-year land assessment"
    ],
    "ans": 0,
    "exp": "Permanent Settlement fixed zamindari tax demands permanently in Bengal, Bihar, and Odisha."
  },
  {
    "topic": "Political Map",
    "q": "Who was the founder of the Brahmo Samaj (1828) who campaigned against Sati?",
    "opts": [
      "Raja Ram Mohan Roy",
      "Swami Dayananda Saraswati",
      "Ishwar Chandra Vidyasagar",
      "Swami Vivekananda"
    ],
    "ans": 0,
    "exp": "Raja Ram Mohan Roy ('Father of Modern India') led campaigns for social reform and against Sati."
  },
  {
    "topic": "Political Map",
    "q": "Who was the first Indian officer to pass the Indian Civil Service (ICS) examination in 1863?",
    "opts": [
      "Satyendra Nath Tagore",
      "Subhas Chandra Bose",
      "Surendranath Banerjee",
      "W.C. Bonnerjee"
    ],
    "ans": 0,
    "exp": "Satyendra Nath Tagore (elder brother of Rabindranath Tagore) was the first Indian ICS officer."
  },
  {
    "topic": "Political Map",
    "q": "Which paper passage or act in 1919 allowed the British government to detain Indians without trial?",
    "opts": [
      "Rowlatt Act",
      "Vernacular Press Act",
      "Government of India Act 1919",
      "Arms Act"
    ],
    "ans": 0,
    "exp": "The Rowlatt Act gave emergency powers to detain political suspects without trial."
  },
  {
    "topic": "Political Map",
    "q": "Who was the founder of the Servants of India Society in 1905?",
    "opts": [
      "Gopal Krishna Gokhale",
      "Dadabhai Naoroji",
      "Bal Gangadhar Tilak",
      "Mahatma Gandhi"
    ],
    "ans": 0,
    "exp": "Gokhale founded the Servants of India Society to promote education and social welfare."
  },
  {
    "topic": "Political Map",
    "q": "Which 1916 pact united the Moderates, Extremists, and Muslim League on a common platform?",
    "opts": [
      "Lucknow Pact",
      "Poona Pact",
      "Delhi Pact",
      "Gandhi-Irwin Pact"
    ],
    "ans": 0,
    "exp": "The Lucknow Pact of 1916 brought Congress and Muslim League together for joint self-governance demands."
  },
  {
    "topic": "Political Map",
    "q": "Where did Mahatma Gandhi conduct his first successful Satyagraha in India in 1917?",
    "opts": [
      "Champaran (Bihar)",
      "Kheda (Gujarat)",
      "Ahmedabad",
      "Dandi"
    ],
    "ans": 0,
    "exp": "Gandhi's Champaran Satyagraha in 1917 defended tenant farmers forced to cultivate indigo."
  },
  {
    "topic": "Political Map",
    "q": "Who founded the Swaraj Party in 1923 to contest legislative council elections?",
    "opts": [
      "C.R. Das & Motilal Nehru",
      "Jawaharlal Nehru & Subhas Bose",
      "Gandhi & Patel",
      "Tilak & Lajpat Rai"
    ],
    "ans": 0,
    "exp": "Chittaranjan Das and Motilal Nehru founded the Swaraj Party within Congress after Non-Cooperation was halted."
  },
  {
    "topic": "Political Map",
    "q": "At which 1929 Congress session was the resolution for 'Purna Swaraj' (Complete Independence) passed?",
    "opts": [
      "Lahore Session",
      "Karachi Session",
      "Nagpur Session",
      "Belgaum Session"
    ],
    "ans": 0,
    "exp": "Under Jawaharlal Nehru's presidency, the 1929 Lahore session declared Purna Swaraj as the goal."
  },
  {
    "topic": "Political Map",
    "q": "What slogan was given by Netaji Subhas Chandra Bose from Singapore in 1943?",
    "opts": [
      "Give me blood, and I shall give you freedom!",
      "Do or Die",
      "Swaraj is my birthright",
      "Vande Mataram"
    ],
    "ans": 0,
    "exp": "Netaji rallied the INA with the famous call: 'Tum mujhe khoon do, main tumhe azadi dunga!'."
  },
  {
    "topic": "Political Map",
    "q": "What was the official court language of the Mughal Empire?",
    "opts": [
      "Persian",
      "Chagatai Turkish",
      "Arabic",
      "Urdu"
    ],
    "ans": 0,
    "exp": "Persian was the official language of administration, law, and diplomacy in the Mughal Empire."
  },
  {
    "topic": "Political Map",
    "q": "Which Mauryan minister authored Kautilya's Arthashastra?",
    "opts": [
      "Chanakya",
      "Megasthenes",
      "Upagupta",
      "Radhagupta"
    ],
    "ans": 0,
    "exp": "Chanakya (Kautilya/Vishnugupta) was the Chief Minister of Chandragupta Maurya."
  },
  {
    "topic": "Political Map",
    "q": "What was the capital of the Vijayanagara Empire?",
    "opts": [
      "Hampi (Vijayanagara)",
      "Badami",
      "Kanchipuram",
      "Madurai"
    ],
    "ans": 0,
    "exp": "Hampi in Karnataka served as the magnificent capital of the Vijayanagara Empire."
  },
  {
    "topic": "Political Map",
    "q": "Which Maratha Peshwa built the Shaniwar Wada palace in Pune?",
    "opts": [
      "Baji Rao I",
      "Balaji Vishwanath",
      "Nanasaheb Peshwa",
      "Madhavrao"
    ],
    "ans": 0,
    "exp": "Peshwa Baji Rao I built Shaniwar Wada in 1732 as the seat of the Peshwas in Pune."
  },
  {
    "topic": "Political Map",
    "q": "What famous diamond was acquired by Maharaja Ranjit Singh from Shah Shuja of Afghanistan?",
    "opts": [
      "Koh-i-Noor",
      "Hope Diamond",
      "Daria-i-Noor",
      "Orlov Diamond"
    ],
    "ans": 0,
    "exp": "Ranjit Singh acquired the Koh-i-Noor diamond, which was later taken by the British upon Punjab's annexation."
  },
  {
    "topic": "Political Map",
    "q": "Which battle in 1527 saw Babur defeat Rana Sanga of Mewar?",
    "opts": [
      "Battle of Khanwa",
      "First Battle of Panipat",
      "Battle of Chanderi",
      "Battle of Ghagra"
    ],
    "ans": 0,
    "exp": "Babur defeated Rana Sanga at Khanwa in 1527 using field artillery, securing Mughal control over North India."
  },
  {
    "topic": "Political Map",
    "q": "Which Mughal Emperor constructed the city of Fatehpur Sikri?",
    "opts": [
      "Akbar",
      "Shah Jahan",
      "Humayun",
      "Jahangir"
    ],
    "ans": 0,
    "exp": "Akbar built Fatehpur Sikri near Agra as his capital, featuring Buland Darwaza and Panch Mahal."
  },
  {
    "topic": "Political Map",
    "q": "Who was the 9th Sikh Guru executed by Mughal Emperor Aurangzeb in 1675?",
    "opts": [
      "Guru Tegh Bahadur Ji",
      "Guru Arjan Dev Ji",
      "Guru Hargobind Ji",
      "Guru Gobind Singh Ji"
    ],
    "ans": 0,
    "exp": "Guru Tegh Bahadur Ji was executed at Chandni Chowk in Delhi for defending religious freedom."
  },
  {
    "topic": "Political Map",
    "q": "What was the capital of the Ahom Kingdom in Assam?",
    "opts": [
      "Charaideo / Garhgaon / Jorhat",
      "Guwahati",
      "Shillong",
      "Imphal"
    ],
    "ans": 0,
    "exp": "Charaideo was the first capital established by Sukaphaa, followed by Garhgaon and Jorhat."
  },
  {
    "topic": "Political Map",
    "q": "Which British officer led the victory at the Battle of Plassey in 1757?",
    "opts": [
      "Robert Clive",
      "Hector Munro",
      "Eyre Coote",
      "Warren Hastings"
    ],
    "ans": 0,
    "exp": "Robert Clive commanded the EIC forces and engineered the conspiracy with Mir Jafar."
  },
  {
    "topic": "Political Map",
    "q": "Which 1799 battle marked the death of Tipu Sultan and British control of Mysore?",
    "opts": [
      "Fourth Anglo-Mysore War (Seringapatam)",
      "Third Anglo-Mysore War",
      "Battle of Pollilur",
      "Battle of Porto Novo"
    ],
    "ans": 0,
    "exp": "Tipu Sultan died on May 4, 1799, during the storming of Seringapatam in the 4th Anglo-Mysore War."
  },
  {
    "topic": "Political Map",
    "q": "What was the title of the Governor-General after the Government of India Act 1858?",
    "opts": [
      "Viceroy and Governor-General",
      "Chief Commissioner",
      "High Commissioner",
      "President of India"
    ],
    "ans": 0,
    "exp": "The Governor-General was given the title of Viceroy ('representative of the Crown')."
  },
  {
    "topic": "Political Map",
    "q": "Who wrote 'Abhijnanashakuntalam', the famous Sanskrit play of the Gupta period?",
    "opts": [
      "Kalidasa",
      "Banabhatta",
      "Bhasa",
      "Harsha"
    ],
    "ans": 0,
    "exp": "Kalidasa, one of the Navaratnas in Chandragupta II's court, authored Shakuntala."
  },
  {
    "topic": "Political Map",
    "q": "Which ancient university in Bihar was destroyed by Bakhtiyar Khalji around 1200 CE?",
    "opts": [
      "Nalanda University",
      "Takshashila",
      "Ujjain",
      "Varanasi"
    ],
    "ans": 0,
    "exp": "Nalanda University was destroyed by Bakhtiyar Khalji in the late 12th century."
  },
  {
    "topic": "Political Map",
    "q": "Which Rajput general commanded Akbar's army at the Battle of Haldighati in 1576?",
    "opts": [
      "Raja Man Singh of Amber",
      "Raja Todar Mal",
      "Raja Birbal",
      "Raja Bharmal"
    ],
    "ans": 0,
    "exp": "Raja Man Singh of Amber commanded the Mughal forces against Maharana Pratap at Haldighati."
  },
  {
    "topic": "Political Map",
    "q": "What were the gold coins issued by the Vijayanagara Empire called?",
    "opts": [
      "Varaha (Pagoda)",
      "Tanka",
      "Mohur",
      "Dinar"
    ],
    "ans": 0,
    "exp": "Vijayanagara gold coins bore the image of a boar (Varaha) and were prized in Indian Ocean trade."
  },
  {
    "topic": "Political Map",
    "q": "On which day did India officially gain independence from British rule?",
    "opts": [
      "August 15, 1947",
      "January 26, 1950",
      "August 14, 1947",
      "June 3, 1947"
    ],
    "ans": 0,
    "exp": "India became an independent nation on August 15, 1947."
  },
  {
    "topic": "Political Map",
    "q": "What was the capital of the Chola Dynasty?",
    "opts": [
      "Tanjore (Thanjavur)",
      "Kanchipuram",
      "Madurai",
      "Uraiyur"
    ],
    "ans": 0,
    "exp": "Tanjore (Thanjavur) served as the grand capital of the Chola Dynasty."
  },
  {
    "topic": "Political Map",
    "q": "Who was the founder of the Rashtrakuta Dynasty?",
    "opts": [
      "Dantidurga",
      "Amoghavarsha",
      "Krishna I",
      "Govinda III"
    ],
    "ans": 0,
    "exp": "Dantidurga founded the Rashtrakuta dynasty in 753 CE."
  },
  {
    "topic": "Political Map",
    "q": "Which Mughal Emperor constructed the Pearl Mosque (Moti Masjid) in Agra?",
    "opts": [
      "Shah Jahan",
      "Akbar",
      "Jahangir",
      "Aurangzeb"
    ],
    "ans": 0,
    "exp": "Shah Jahan built the Moti Masjid inside the Agra Fort."
  },
  {
    "topic": "Political Map",
    "q": "What title was assumed by Babur after defeating Rana Sanga at Khanwa in 1527?",
    "opts": [
      "Ghazi",
      "Chhatrapati",
      "Badshah",
      "Maharajadhiraja"
    ],
    "ans": 0,
    "exp": "Babur assumed the title 'Ghazi' after victory at Khanwa."
  },
  {
    "topic": "Political Map",
    "q": "Who was the Viceroy when the Partition of Bengal was enacted in 1905?",
    "opts": [
      "Lord Curzon",
      "Lord Minto",
      "Lord Hardinge",
      "Lord Chelmsford"
    ],
    "ans": 0,
    "exp": "Lord Curzon enacted the Partition of Bengal in 1905."
  },
  {
    "topic": "Political Map",
    "q": "Who was the second Mughal Emperor who lost and regained his empire?",
    "opts": [
      "Humayun",
      "Babur",
      "Akbar",
      "Jahangir"
    ],
    "ans": 0,
    "exp": "Humayun lost his empire to Sher Shah Suri in 1540 and recaptured Delhi in 1555."
  },
  {
    "topic": "Political Map",
    "q": "Which treaty in 1765 granted Diwani rights of Bengal to the East India Company?",
    "opts": [
      "Treaty of Allahabad",
      "Treaty of Paris",
      "Treaty of Mangalore",
      "Treaty of Bassein"
    ],
    "ans": 0,
    "exp": "The Treaty of Allahabad was signed between Lord Clive and Mughal Emperor Shah Alam II."
  },
  {
    "topic": "Political Map",
    "q": "Who founded the Home Rule League in Maharashtra in 1916?",
    "opts": [
      "Bal Gangadhar Tilak",
      "Annie Besant",
      "Gopal Krishna Gokhale",
      "Lala Lajpat Rai"
    ],
    "ans": 0,
    "exp": "Tilak founded his Home Rule League at Belgaum in April 1916."
  },
  {
    "topic": "Political Map",
    "q": "What was the primary goal of the Swadeshi Movement (1905)?",
    "opts": [
      "Promote Indian goods and boycott British products",
      "Demand immediate armed revolution",
      "Abolish the Salt tax",
      "Support British war effort"
    ],
    "ans": 0,
    "exp": "Swadeshi promoted indigenous Indian goods and boycotted foreign British imports."
  },
  {
    "topic": "Political Map",
    "q": "What was the capital of the Bahmani Sultanate before Bidar?",
    "opts": [
      "Gulbarga",
      "Bijapur",
      "Golconda",
      "Daulatabad"
    ],
    "ans": 0,
    "exp": "Gulbarga was the initial capital of the Bahmani Sultanate before Ahmad Shah I moved it to Bidar."
  },
  {
    "topic": "Political Map",
    "q": "Which Maratha general conducted brilliant guerrilla warfare after Shivaji's death?",
    "opts": [
      "Santaji Ghorpade / Dhanaji Jadhav",
      "Baji Rao I",
      "Sadashivrao Bhau",
      "Nana Sahib"
    ],
    "ans": 0,
    "exp": "Santaji Ghorpade and Dhanaji Jadhav conducted relentless guerrilla resistance against Aurangzeb."
  },
  {
    "topic": "Political Map",
    "q": "Who was the founder of the Servants of India Society?",
    "opts": [
      "Gopal Krishna Gokhale",
      "Dadabhai Naoroji",
      "Tilak",
      "Gandhi"
    ],
    "ans": 0,
    "exp": "Gokhale founded the Servants of India Society in 1905."
  },
  {
    "topic": "Political Map",
    "q": "At which site was the earliest ploughed field in India discovered?",
    "opts": [
      "Kalibangan",
      "Lothal",
      "Harappa",
      "Banawali"
    ],
    "ans": 0,
    "exp": "Kalibangan in Rajasthan features the earliest discovered ploughed agricultural field."
  },
  {
    "topic": "Political Map",
    "q": "What was the famous architectural gateway built by Akbar at Fatehpur Sikri?",
    "opts": [
      "Buland Darwaza",
      "Alai Darwaza",
      "Rumi Darwaza",
      "India Gate"
    ],
    "ans": 0,
    "exp": "Akbar built the Buland Darwaza ('Gate of Magnificence') to commemorate his Gujarat victory."
  },
  {
    "topic": "Political Map",
    "q": "Who was the 5th Sikh Guru who compiled the Adi Granth and built Harmandir Sahib?",
    "opts": [
      "Guru Arjan Dev Ji",
      "Guru Nanak Dev Ji",
      "Guru Hargobind Ji",
      "Guru Tegh Bahadur Ji"
    ],
    "ans": 0,
    "exp": "Guru Arjan Dev Ji compiled the Adi Granth and constructed Harmandir Sahib in Amritsar."
  },
  {
    "topic": "Political Map",
    "q": "Which British Act transferred India's governance from the EIC to the British Crown?",
    "opts": [
      "Government of India Act 1858",
      "Regulating Act 1773",
      "Pitt's India Act 1784",
      "Indian Independence Act 1947"
    ],
    "ans": 0,
    "exp": "The Government of India Act 1858 established direct Crown Rule after the 1857 Revolt."
  },
  {
    "topic": "Political Map",
    "q": "What date in 1947 marks the official end of British colonial rule in India?",
    "opts": [
      "August 15, 1947",
      "January 26, 1950",
      "August 14, 1947",
      "June 3, 1947"
    ],
    "ans": 0,
    "exp": "August 15, 1947 marks Indian Independence Day."
  },
  {
    "topic": "Political Map",
    "q": "Which Mauryan Emperor established Rock and Pillar Edicts promoting Dhamma across South Asia?",
    "opts": [
      "Emperor Ashoka",
      "Chandragupta Maurya",
      "Bindusara",
      "Brihadratha"
    ],
    "ans": 0,
    "exp": "Ashoka the Great commissioned major Rock and Pillar Edicts in Brahmi, Kharosthi, and Greek scripts."
  },
  {
    "topic": "Political Map",
    "q": "What was the capital of Harsha's empire in northern India?",
    "opts": [
      "Kannauj",
      "Thanesar",
      "Pataliputra",
      "Ujjain"
    ],
    "ans": 0,
    "exp": "Harshavardhana shifted his capital from Thanesar to Kannauj."
  },
  {
    "topic": "Political Map",
    "q": "Which treaty in 1765 granted Diwani rights over Bengal to the British East India Company?",
    "opts": [
      "Treaty of Allahabad",
      "Treaty of Paris",
      "Treaty of Mangalore",
      "Treaty of Bassein"
    ],
    "ans": 0,
    "exp": "The Treaty of Allahabad was signed between Lord Clive and Mughal Emperor Shah Alam II."
  },
  {
    "topic": "Political Map",
    "q": "Which movement was launched by Gandhi on August 8, 1942 with the slogan 'Do or Die'?",
    "opts": [
      "Quit India Movement",
      "Non-Cooperation Movement",
      "Civil Disobedience Movement",
      "Swadeshi Movement"
    ],
    "ans": 0,
    "exp": "The Quit India Movement demanded immediate British withdrawal from India."
  },
  {
    "topic": "Political Map",
    "q": "Who was the chief revenue minister of Akbar who formulated the Zabt (Dahsala) system?",
    "opts": [
      "Raja Todar Mal",
      "Raja Man Singh",
      "Raja Birbal",
      "Bairam Khan"
    ],
    "ans": 0,
    "exp": "Raja Todar Mal formulated the Zabt land revenue assessment system."
  },
  {
    "topic": "Political Map",
    "q": "What was the primary military innovation of Babur at the First Battle of Panipat (1526)?",
    "opts": [
      "Field artillery (cannons) and Tulughma tactics",
      "Elephant charges",
      "Heavy armored cavalry",
      "Naval blockade"
    ],
    "ans": 0,
    "exp": "Babur deployed field cannons (artillery) and Tulughma flanking tactics to defeat Ibrahim Lodi."
  },
  {
    "topic": "Political Map",
    "q": "Which Maratha Peshwa expanded Maratha control up to Attock (Punjab) in 1758?",
    "opts": [
      "Raghunathrao / Balaji Baji Rao",
      "Baji Rao I",
      "Balaji Vishwanath",
      "Madhavrao"
    ],
    "ans": 0,
    "exp": "Maratha forces under Raghunathrao captured Attock in 1758 during Peshwa Balaji Baji Rao's reign."
  },
  {
    "topic": "Political Map",
    "q": "Who was the female ruler of Ahmednagar who resisted Mughal forces under Akbar?",
    "opts": [
      "Chand Bibi",
      "Razia Sultan",
      "Begum Hazrat Mahal",
      "Rani Lakshmibai"
    ],
    "ans": 0,
    "exp": "Chand Bibi defended Ahmednagar Fort against Mughal armies in 1595–1600."
  },
  {
    "topic": "Political Map",
    "q": "What was the capital of the Sikh Empire under Maharaja Ranjit Singh?",
    "opts": [
      "Lahore",
      "Amritsar",
      "Peshawar",
      "Multan"
    ],
    "ans": 0,
    "exp": "Lahore served as the capital of the Sikh Empire from 1799 to 1849."
  },
  {
    "topic": "Political Map",
    "q": "Which famous resolution adopted by Congress in 1929 demanded 'Purna Swaraj'?",
    "opts": [
      "Lahore Resolution (1929)",
      "Karachi Resolution",
      "Bombay Resolution",
      "Delhi Resolution"
    ],
    "ans": 0,
    "exp": "The Lahore Session of Congress under Jawaharlal Nehru declared Purna Swaraj."
  },
  {
    "topic": "Political Map",
    "q": "On which day did India awaken to freedom on August 15, 1947?",
    "opts": [
      "Friday, August 15, 1947",
      "Sunday, August 15, 1947",
      "Monday, August 15, 1947",
      "Wednesday, August 15, 1947"
    ],
    "ans": 0,
    "exp": "India gained independence at midnight on August 15, 1947."
  },
  {
    "topic": "Natural Resources",
    "q": "What is defined as anything present in nature that has utility, value, and satisfies human needs?",
    "opts": [
      "A Natural Resource",
      "A Chemical Element",
      "A Physical Force",
      "A Synthetic Product"
    ],
    "ans": 0,
    "exp": "A Natural Resource is any natural element that has utility and satisfies human needs."
  },
  {
    "topic": "Natural Resources",
    "q": "Which of the following is an abiotic natural resource?",
    "opts": [
      "Land and Minerals",
      "Forests",
      "Livestock",
      "Crop plants"
    ],
    "ans": 0,
    "exp": "Land and minerals are abiotic resources because they derive from non-living inorganic matter."
  },
  {
    "topic": "Natural Resources",
    "q": "Which of the following is a biotic natural resource?",
    "opts": [
      "Coal and Forests",
      "Silica sand",
      "Iron ore",
      "Freshwater"
    ],
    "ans": 0,
    "exp": "Coal and forests are biotic resources because they originate from organic living matter."
  },
  {
    "topic": "Natural Resources",
    "q": "What rule specifies the three mandatory conditions for a substance to become a resource?",
    "opts": [
      "The TEC Rule",
      "The 3R Rule",
      "The ECI Rule",
      "The SRC Rule"
    ],
    "ans": 0,
    "exp": "The TEC Rule stands for Technological Accessibility, Economic Feasibility, and Cultural Acceptability."
  },
  {
    "topic": "Natural Resources",
    "q": "Resources found in a region that have not yet been utilized due to lack of technology or investment are called:",
    "opts": [
      "Potential Resources",
      "Developed Resources",
      "Biotic Resources",
      "Community Resources"
    ],
    "ans": 0,
    "exp": "Potential resources exist in a region but have not been developed or utilized yet."
  },
  {
    "topic": "Natural Resources",
    "q": "Which of the following is a non-renewable natural resource?",
    "opts": [
      "Coal and Petroleum",
      "Solar energy",
      "Freshwater",
      "Wind power"
    ],
    "ans": 0,
    "exp": "Coal and petroleum take millions of years to form in Earth's crust and cannot be replenished once exhausted."
  },
  {
    "topic": "Natural Resources",
    "q": "What is the territorial sea boundary for national resources off a country's coast?",
    "opts": [
      "12 nautical miles",
      "200 nautical miles",
      "50 nautical miles",
      "5 nautical miles"
    ],
    "ans": 0,
    "exp": "Oceanic resources within 12 nautical miles of a coast belong legally to national territory."
  },
  {
    "topic": "Natural Resources",
    "q": "Resources regulated by international treaty organizations beyond 200 nautical miles of EEZ are:",
    "opts": [
      "International Resources",
      "National Resources",
      "Individual Resources",
      "Biotic Resources"
    ],
    "ans": 0,
    "exp": "International oceanic resources beyond the 200-nautical-mile EEZ require international agreement."
  },
  {
    "topic": "Natural Resources",
    "q": "Which ecosystem service category includes climate regulation and water purification?",
    "opts": [
      "Regulating Services",
      "Provisioning Services",
      "Supporting Services",
      "Cultural Services"
    ],
    "ans": 0,
    "exp": "Regulating services control natural processes like climate, floods, water purification, and pollination."
  },
  {
    "topic": "Natural Resources",
    "q": "The concept of meeting present needs without compromising future generations is called:",
    "opts": [
      "Sustainable Development",
      "Resource Exploitation",
      "Industrialization",
      "Urbanization"
    ],
    "ans": 0,
    "exp": "Sustainable Development satisfies present socio-economic needs without compromising future generations."
  },
  {
    "topic": "Natural Resources",
    "q": "What transformation turns raw silica sand into high-tech silicon microchips?",
    "opts": [
      "Semiconductor Refining & Metallurgy",
      "Biological Composting",
      "Nuclear Fission",
      "Hydroelectric Generation"
    ],
    "ans": 0,
    "exp": "Semiconductor refining converts silica sand into pure silicon for computer chips."
  },
  {
    "topic": "Natural Resources",
    "q": "Which of the following is a provisioning ecosystem service provided by forests?",
    "opts": [
      "Timber and medicinal herbs",
      "Climate regulation",
      "Photosynthesis oxygen cycle",
      "Ecotourism aesthetics"
    ],
    "ans": 0,
    "exp": "Provisioning services supply physical goods like timber, fruits, and medicinal plants."
  },
  {
    "topic": "Natural Resources",
    "q": "What type of resource is solar radiation falling on Earth's surface?",
    "opts": [
      "Continuous renewable resource",
      "Non-renewable resource",
      "Abiotic exhaustible mineral",
      "Recycled synthetic capital"
    ],
    "ans": 0,
    "exp": "Sunlight is a continuous inexhaustible renewable natural resource."
  },
  {
    "topic": "Natural Resources",
    "q": "Where was Agenda 21 adopted during the historic Earth Summit in 1992?",
    "opts": [
      "Rio de Janeiro, Brazil",
      "Washington D.C., USA",
      "Paris, France",
      "Geneva, Switzerland"
    ],
    "ans": 0,
    "exp": "Agenda 21 was adopted at the 1992 UN Conference on Environment and Development in Rio de Janeiro."
  },
  {
    "topic": "Natural Resources",
    "q": "What soil conservation practice cuts step-like flat terraces into steep hill slopes?",
    "opts": [
      "Terrace Farming",
      "Strip Mining",
      "Open Grazing",
      "Slash and Burn"
    ],
    "ans": 0,
    "exp": "Terrace farming creates flat steps on hill slopes to slow runoff and prevent soil erosion."
  },
  {
    "topic": "Natural Resources",
    "q": "Rows of trees planted along arid farm boundaries to break wind speed are known as:",
    "opts": [
      "Shelter Belts",
      "Contour Lines",
      "Check Dams",
      "Canal Bunds"
    ],
    "ans": 0,
    "exp": "Shelter belts reduce wind velocity and protect soil from wind erosion."
  },
  {
    "topic": "Natural Resources",
    "q": "Which mineral ore is the primary commercial source of Aluminum metal?",
    "opts": [
      "Bauxite",
      "Hematite",
      "Magnetite",
      "Galena"
    ],
    "ans": 0,
    "exp": "Bauxite ore is smelted to produce pure aluminum metal."
  },
  {
    "topic": "Natural Resources",
    "q": "What type of resource is a privately owned village water well?",
    "opts": [
      "Individual Resource",
      "Community Resource",
      "International Resource",
      "National Resource"
    ],
    "ans": 0,
    "exp": "A privately owned well is an Individual Resource."
  },
  {
    "topic": "Natural Resources",
    "q": "Substances present in nature that humans lack technology to extract are termed:",
    "opts": [
      "Stock Resources",
      "Developed Resources",
      "Biotic Reserves",
      "Flow Resources"
    ],
    "ans": 0,
    "exp": "Stock resources have potential utility but lack technology for extraction."
  },
  {
    "topic": "Natural Resources",
    "q": "What is the primary cause of groundwater depletion in urban and agricultural zones?",
    "opts": [
      "Over-extraction exceeding natural recharge rates",
      "Excessive rainfall",
      "Afforestation programs",
      "Organic farming"
    ],
    "ans": 0,
    "exp": "Pumping groundwater faster than natural rainfall recharge causes depletion."
  },
  {
    "topic": "Natural Resources",
    "q": "Which report introduced the classic definition of Sustainable Development in 1987?",
    "opts": [
      "Brundtland Commission Report ('Our Common Future')",
      "Fazl Ali Report",
      "Shah Commission Report",
      "Kothari Education Report"
    ],
    "ans": 0,
    "exp": "The 1987 Brundtland Commission report 'Our Common Future' defined Sustainable Development."
  },
  {
    "topic": "Natural Resources",
    "q": "What type of energy is generated by harnessing underground volcanic thermal heat?",
    "opts": [
      "Geothermal Energy",
      "Hydroelectric Energy",
      "Tidal Energy",
      "Nuclear Energy"
    ],
    "ans": 0,
    "exp": "Geothermal energy harnesses underground thermal heat."
  },
  {
    "topic": "Natural Resources",
    "q": "Which of the following is a supporting ecosystem service?",
    "opts": [
      "Photosynthesis and soil formation",
      "Timber supply",
      "Flood control",
      "Spiritual recreation"
    ],
    "ans": 0,
    "exp": "Supporting services underpin all ecological processes like photosynthesis and soil formation."
  },
  {
    "topic": "Natural Resources",
    "q": "What practice involves growing different crops sequentially on the same land to maintain soil nutrients?",
    "opts": [
      "Crop Rotation",
      "Monoculture",
      "Deforestation",
      "Urban Sprawl"
    ],
    "ans": 0,
    "exp": "Crop rotation alternates crops across seasons to replenish soil nutrients naturally."
  },
  {
    "topic": "Natural Resources",
    "q": "Which of the following is an exhaustible metallic mineral resource?",
    "opts": [
      "Iron Ore",
      "Solar Light",
      "Atmospheric Oxygen",
      "Wind Current"
    ],
    "ans": 0,
    "exp": "Iron ore is a non-renewable metallic mineral found in Earth's crust."
  },
  {
    "topic": "Natural Resources",
    "q": "What process converts organic plant cellulose into commercial paper pulp?",
    "opts": [
      "Chemical pulp digestion",
      "Smelting",
      "Nuclear fusion",
      "Distillation"
    ],
    "ans": 0,
    "exp": "Cellulose fibers from trees are digested into paper pulp chemically."
  },
  {
    "topic": "Natural Resources",
    "q": "Which gas constitutes ~78% of Earth's natural atmosphere?",
    "opts": [
      "Nitrogen",
      "Oxygen",
      "Carbon Dioxide",
      "Argon"
    ],
    "ans": 0,
    "exp": "Nitrogen makes up approximately 78% of Earth's atmosphere."
  },
  {
    "topic": "Natural Resources",
    "q": "What type of resource is crude petroleum locked under deep oceanic crust?",
    "opts": [
      "Abiotic Non-Renewable Resource",
      "Biotic Continuous Resource",
      "Flow Energy Resource",
      "Synthetic Resource"
    ],
    "ans": 0,
    "exp": "Crude oil is an abiotic non-renewable hydrocarbon resource formed over geological time."
  },
  {
    "topic": "Natural Resources",
    "q": "Which conservation rule encourages minimizing single-use plastics?",
    "opts": [
      "Reduce",
      "Reuse",
      "Recycle",
      "Replenish"
    ],
    "ans": 0,
    "exp": "Reducing consumption minimizes waste generation at the source."
  },
  {
    "topic": "Natural Resources",
    "q": "What is the term for a natural resource whose total quantity has been surveyed and mapped?",
    "opts": [
      "Developed Resource",
      "Stock Resource",
      "Potential Resource",
      "Unusable Resource"
    ],
    "ans": 0,
    "exp": "Developed resources are surveyed and quantified for active exploitation."
  },
  {
    "topic": "Natural Resources",
    "q": "Which region in India holds vast potential for wind and solar energy but lacks infrastructure?",
    "opts": [
      "Thar Desert, Rajasthan",
      "Sundarbans Delta",
      "Western Ghats Rainforest",
      "Gangetic Alluvial Plains"
    ],
    "ans": 0,
    "exp": "The Thar desert receives immense solar radiation suitable for solar power plants."
  },
  {
    "topic": "Natural Resources",
    "q": "What micro-irrigation system delivers water directly to plant roots with zero runoff?",
    "opts": [
      "Drip Irrigation",
      "Flood Irrigation",
      "Canal Siphon",
      "Sprinkler Over-spray"
    ],
    "ans": 0,
    "exp": "Drip irrigation delivers precise water drops to roots, conserving water."
  },
  {
    "topic": "Natural Resources",
    "q": "Which of the following is a cultural ecosystem service?",
    "opts": [
      "Ecotourism and aesthetic enjoyment",
      "Timber logging",
      "Pollination of crops",
      "Soil nutrient cycling"
    ],
    "ans": 0,
    "exp": "Cultural services provide recreational, spiritual, and aesthetic benefits."
  },
  {
    "topic": "Natural Resources",
    "q": "What type of water resource is stored in underground rock aquifers?",
    "opts": [
      "Groundwater",
      "Surface Runoff",
      "Atmospheric Moisture",
      "Glacial Calving"
    ],
    "ans": 0,
    "exp": "Groundwater resides underground in permeable aquifer layers."
  },
  {
    "topic": "Natural Resources",
    "q": "Which natural element was converted into hydroelectricity after turbine technology was invented?",
    "opts": [
      "Fast-flowing River Water",
      "Atmospheric Nitrogen",
      "Volcanic Ash",
      "Deep Ocean Basalt"
    ],
    "ans": 0,
    "exp": "Flowing river water drives hydroelectric turbines to generate electricity."
  },
  {
    "topic": "Natural Resources",
    "q": "What is the primary ecological risk of widespread deforestation?",
    "opts": [
      "Loss of biodiversity and soil erosion",
      "Increase in groundwater levels",
      "Reduction in global temperatures",
      "Enhancement of oxygen levels"
    ],
    "ans": 0,
    "exp": "Deforestation causes habitat destruction, biodiversity loss, and severe soil erosion."
  },
  {
    "topic": "Natural Resources",
    "q": "Which treaty framework addresses global climate change and resource conservation?",
    "opts": [
      "UNFCCC Framework Convention",
      "Treaty of Versailles",
      "Geneva Convention",
      "Bretton Woods Agreement"
    ],
    "ans": 0,
    "exp": "The UNFCCC framework guides international climate change mitigation."
  },
  {
    "topic": "Natural Resources",
    "q": "What type of resource is a public village pasture ground open to all residents?",
    "opts": [
      "Community Owned Resource",
      "Private Individual Resource",
      "International Deep Seabed",
      "Stock Resource"
    ],
    "ans": 0,
    "exp": "Public pastures accessible to all village residents are Community Resources."
  },
  {
    "topic": "Natural Resources",
    "q": "Which natural resource is harnessed by solar photovoltaic (PV) panels?",
    "opts": [
      "Sunlight photons",
      "Wind currents",
      "Tidal surges",
      "Geothermal steam"
    ],
    "ans": 0,
    "exp": "Solar PV panels convert sunlight photons directly into DC electrical energy."
  },
  {
    "topic": "Natural Resources",
    "q": "What soil conservation method involves ploughing along natural slope elevation lines?",
    "opts": [
      "Contour Ploughing",
      "Clear-cutting",
      "Over-irrigation",
      "Slash and Burn"
    ],
    "ans": 0,
    "exp": "Contour ploughing cuts across slopes along contour lines to break water runoff speed."
  },
  {
    "topic": "Natural Resources",
    "q": "Which mineral is heavily mined in Jharkhand's Jharia region?",
    "opts": [
      "Coal",
      "Bauxite",
      "Gold",
      "Copper"
    ],
    "ans": 0,
    "exp": "Jharia in Jharkhand is famous for major coal reserves."
  },
  {
    "topic": "Natural Resources",
    "q": "What term describes energy produced from animal manure and agricultural plant waste?",
    "opts": [
      "Biomass / Biogas Energy",
      "Geothermal Energy",
      "Nuclear Fission",
      "Tidal Surge Energy"
    ],
    "ans": 0,
    "exp": "Biomass energy harnesses organic waste like cow dung and agricultural residue."
  },
  {
    "topic": "Natural Resources",
    "q": "Why is freshwater considered a renewable natural resource?",
    "opts": [
      "Hydrological cycle naturally replenishes it",
      "It never evaporates",
      "It can be manufactured synthetically easily",
      "It exists in unlimited underground ocean beds"
    ],
    "ans": 0,
    "exp": "The hydrological cycle (evaporation, condensation, precipitation) continuously replenishes freshwater."
  },
  {
    "topic": "Natural Resources",
    "q": "What ocean distance defines a coastal country's Exclusive Economic Zone (EEZ)?",
    "opts": [
      "200 nautical miles",
      "12 nautical miles",
      "50 nautical miles",
      "500 nautical miles"
    ],
    "ans": 0,
    "exp": "The EEZ extends up to 200 nautical miles from baseline."
  },
  {
    "topic": "Natural Resources",
    "q": "Which agency regulates mining rights in deep ocean international waters?",
    "opts": [
      "International Seabed Authority (ISA)",
      "World Trade Organization",
      "UNESCO",
      "International Red Cross"
    ],
    "ans": 0,
    "exp": "The ISA regulates international ocean floor mineral exploration beyond national EEZs."
  },
  {
    "topic": "Natural Resources",
    "q": "What type of resource is bauxite ore before smelting technology exists?",
    "opts": [
      "Stock / Potential Resource",
      "Developed Commercial Resource",
      "Flow Energy",
      "Recycled Material"
    ],
    "ans": 0,
    "exp": "Without smelting technology, bauxite remains a potential/stock natural substance."
  },
  {
    "topic": "Natural Resources",
    "q": "Which state in India leads in installed wind power capacity?",
    "opts": [
      "Tamil Nadu",
      "Bihar",
      "Delhi",
      "Punjab"
    ],
    "ans": 0,
    "exp": "Tamil Nadu is a leader in wind energy infrastructure in India."
  },
  {
    "topic": "Natural Resources",
    "q": "What is the main advantage of rainwater harvesting?",
    "opts": [
      "Recharges groundwater aquifers and reduces surface runoff",
      "Increases soil salinity",
      "Causes immediate urban flooding",
      "Consumes high electricity"
    ],
    "ans": 0,
    "exp": "Rainwater harvesting recharges groundwater aquifers and reduces city street flooding."
  },
  {
    "topic": "Natural Resources",
    "q": "Which energy source generates zero carbon emissions during operation?",
    "opts": [
      "Solar and Wind Power",
      "Thermal Coal Power",
      "Diesel Generators",
      "Kerosene Stoves"
    ],
    "ans": 0,
    "exp": "Solar and wind power generate electricity without carbon emissions."
  },
  {
    "topic": "Natural Resources",
    "q": "What is the main component of natural gas?",
    "opts": [
      "Methane (CH4)",
      "Oxygen",
      "Carbon Monoxide",
      "Helium"
    ],
    "ans": 0,
    "exp": "Natural gas consists predominantly of methane gas."
  },
  {
    "topic": "Natural Resources",
    "q": "Which ecosystem service includes bees pollinating agricultural fruit crops?",
    "opts": [
      "Regulating Service",
      "Provisioning Service",
      "Cultural Service",
      "Mineral Mining Service"
    ],
    "ans": 0,
    "exp": "Insect pollination is a natural regulating ecosystem service."
  },
  {
    "topic": "Natural Resources",
    "q": "What is slash-and-burn shifting cultivation called in Northeast India?",
    "opts": [
      "Jhum Cultivation",
      "Terrace Bunding",
      "Step Farming",
      "Hydroponics"
    ],
    "ans": 0,
    "exp": "Shifting agriculture is locally known as Jhum cultivation in Northeast India."
  },
  {
    "topic": "Natural Resources",
    "q": "Which layer of soil contains highest organic humus and plant nutrients?",
    "opts": [
      "Topsoil (A Horizon)",
      "Subsoil (B Horizon)",
      "Weathered Rock (C Horizon)",
      "Bedrock (R Horizon)"
    ],
    "ans": 0,
    "exp": "Topsoil contains organic humus vital for plant growth."
  },
  {
    "topic": "Natural Resources",
    "q": "What is the key objective of resource planning in India?",
    "opts": [
      "Equitable distribution and sustainable utilization",
      "Rapid depletion of minerals",
      "Exporting all raw materials",
      "Ignoring regional disparities"
    ],
    "ans": 0,
    "exp": "Resource planning ensures balanced, sustainable, and equitable resource allocation."
  },
  {
    "topic": "Natural Resources",
    "q": "Which fuel is known as 'Buried Sunshine'?",
    "opts": [
      "Coal",
      "Petroleum",
      "Uranium",
      "Natural Gas"
    ],
    "ans": 0,
    "exp": "Coal is called 'Buried Sunshine' as it formed from ancient solar-nourished forests."
  },
  {
    "topic": "Natural Resources",
    "q": "What type of resource is tidal energy generated in the Gulf of Khambhat?",
    "opts": [
      "Renewable Ocean Resource",
      "Non-renewable Fossil Energy",
      "Abiotic Mineral Ore",
      "Synthetic Fuel"
    ],
    "ans": 0,
    "exp": "Tidal energy is a renewable marine flow resource."
  },
  {
    "topic": "Natural Resources",
    "q": "Which river in India is famous for the Bhakra Nangal Dam hydroelectric power project?",
    "opts": [
      "Sutlej River",
      "Ganga River",
      "Kaveri River",
      "Narmada River"
    ],
    "ans": 0,
    "exp": "Bhakra Nangal dam is built on the Sutlej river in Himachal Pradesh/Punjab."
  },
  {
    "topic": "Natural Resources",
    "q": "What causes soil salinization in canal-irrigated arid farmland?",
    "opts": [
      "Excessive over-watering causing evaporation salt buildup",
      "Afforestation",
      "Organic composting",
      "Crop rotation"
    ],
    "ans": 0,
    "exp": "Over-irrigation in hot arid zones causes waterlogging and surface salt accumulation."
  },
  {
    "topic": "Natural Resources",
    "q": "Which type of iron ore has the highest iron content (~70%)?",
    "opts": [
      "Magnetite",
      "Hematite",
      "Limonite",
      "Siderite"
    ],
    "ans": 0,
    "exp": "Magnetite is the highest quality iron ore with up to 70% iron content."
  },
  {
    "topic": "Natural Resources",
    "q": "What is the primary constituent of crude petroleum oil?",
    "opts": [
      "Liquid hydrocarbons",
      "Silicon dioxide",
      "Calcium carbonate",
      "Sodium chloride"
    ],
    "ans": 0,
    "exp": "Crude oil consists of complex liquid hydrocarbon compounds."
  },
  {
    "topic": "Natural Resources",
    "q": "Which of the following is a non-point source of water pollution?",
    "opts": [
      "Agricultural pesticide runoff across farm fields",
      "A factory discharge pipe",
      "A sewage outlet hose",
      "An oil tanker spill pipe"
    ],
    "ans": 0,
    "exp": "Diffuse agricultural runoff across wide fields is a non-point source of pollution."
  },
  {
    "topic": "Natural Resources",
    "q": "What ecological term refers to total variety of plant and animal species in a habitat?",
    "opts": [
      "Biodiversity",
      "Biomass",
      "Biofuel",
      "Biosphere Reserve"
    ],
    "ans": 0,
    "exp": "Biodiversity refers to the variety of life forms in an ecosystem."
  },
  {
    "topic": "Natural Resources",
    "q": "Which Indian state has major reserves of Thorium in monazite sands?",
    "opts": [
      "Kerala",
      "Punjab",
      "Haryana",
      "Delhi"
    ],
    "ans": 0,
    "exp": "Monazite beach sands of Kerala contain rich deposits of nuclear Thorium."
  },
  {
    "topic": "Natural Resources",
    "q": "What is the goal of the 'Replenish' rule in sustainable forestry?",
    "opts": [
      "Replanting trees to equal or exceed harvest rates",
      "Cutting down virgin rainforests",
      "Burning timber for fuel",
      "Using plastic furniture"
    ],
    "ans": 0,
    "exp": "Replenishing ensures harvested timber is replaced by afforestation."
  },
  {
    "topic": "Natural Resources",
    "q": "Which zone of Earth contains all living organisms and their interaction environments?",
    "opts": [
      "Biosphere",
      "Lithosphere",
      "Atmosphere",
      "Hydrosphere"
    ],
    "ans": 0,
    "exp": "The biosphere encompasses all living organisms on Earth."
  },
  {
    "topic": "Natural Resources",
    "q": "What type of resource is nuclear fuel like Uranium?",
    "opts": [
      "Non-Renewable Mineral Resource",
      "Renewable Biotic Resource",
      "Flow Energy",
      "Continuous Resource"
    ],
    "ans": 0,
    "exp": "Uranium is an exhaustible non-renewable radioactive mineral resource."
  },
  {
    "topic": "Natural Resources",
    "q": "Which agricultural practice prevents soil wind erosion in dry sandy fields?",
    "opts": [
      "Planting shelter belts and cover crops",
      "Deep ploughing in summer",
      "Over-grazing livestock",
      "Removing natural grass"
    ],
    "ans": 0,
    "exp": "Cover crops and shelter belts anchor sandy soil against wind erosion."
  },
  {
    "topic": "Natural Resources",
    "q": "What is the economic reward derived from developing a breakthrough green technology?",
    "opts": [
      "Profit and societal value",
      "Wages",
      "Rent",
      "Tax penalty"
    ],
    "ans": 0,
    "exp": "Developing green tech earns financial profit and societal environmental value."
  },
  {
    "topic": "Natural Resources",
    "q": "Which natural phenomenon drives the continuous replenishment of freshwater on land?",
    "opts": [
      "The Global Water / Hydrological Cycle",
      "Earth's Magnetic Field",
      "Plate Tectonics",
      "Lunar Eclipses"
    ],
    "ans": 0,
    "exp": "The hydrological cycle redistributes evaporated ocean water as land precipitation."
  },
  {
    "topic": "Natural Resources",
    "q": "What is the status of hydrogen energy in water (H2O) currently?",
    "opts": [
      "Potential / Stock Resource (awaiting cost-effective commercial extraction tech)",
      "Fully exhausted resource",
      "Non-renewable mineral",
      "Abiotic fossil fuel"
    ],
    "ans": 0,
    "exp": "Hydrogen in water is a major stock resource awaiting economic extraction tech."
  },
  {
    "topic": "Natural Resources",
    "q": "Which fossil fuel is known as 'Black Gold'?",
    "opts": [
      "Petroleum / Crude Oil",
      "Coal",
      "Iron Ore",
      "Bauxite"
    ],
    "ans": 0,
    "exp": "Petroleum is termed 'Black Gold' due to its immense economic commercial value."
  },
  {
    "topic": "Natural Resources",
    "q": "What is a major environmental benefit of solar energy over coal energy?",
    "opts": [
      "Zero greenhouse gas emissions during generation",
      "Works 24 hours without sunlight",
      "Requires zero land area",
      "Produces radioactive waste"
    ],
    "ans": 0,
    "exp": "Solar generation emits zero carbon dioxide or air pollutants during operation."
  },
  {
    "topic": "Natural Resources",
    "q": "Which sanctuary in Assam is world-famous for protecting one-horned rhinoceroses?",
    "opts": [
      "Kaziranga National Park",
      "Jim Corbett National Park",
      "Gir National Park",
      "Sundarbans National Park"
    ],
    "ans": 0,
    "exp": "Kaziranga National Park in Assam protects the Indian one-horned rhinoceros."
  },
  {
    "topic": "Natural Resources",
    "q": "What is the term for converting discarded paper and glass into raw industrial stock?",
    "opts": [
      "Recycling",
      "Combustion",
      "Landfilling",
      "Incineration"
    ],
    "ans": 0,
    "exp": "Recycling reprocesses scrap materials into new raw stock."
  },
  {
    "topic": "Natural Resources",
    "q": "Which mineral is used as a insulating non-metallic material in electrical equipment?",
    "opts": [
      "Mica",
      "Copper",
      "Iron",
      "Gold"
    ],
    "ans": 0,
    "exp": "Mica is an excellent electrical insulator resistant to high voltage."
  },
  {
    "topic": "Natural Resources",
    "q": "What ecological service is provided by mangrove forests along coastlines?",
    "opts": [
      "Shielding coasts from storm surges and coastal erosion",
      "Generating heavy snowfall",
      "Providing desert timber",
      "Increasing soil salinity inland"
    ],
    "ans": 0,
    "exp": "Mangroves buffer coastal communities against storm surges and erosion."
  },
  {
    "topic": "Natural Resources",
    "q": "Which non-conventional energy source relies on lunar gravitational pull on oceans?",
    "opts": [
      "Tidal Energy",
      "Solar Energy",
      "Geothermal Energy",
      "Wind Energy"
    ],
    "ans": 0,
    "exp": "Tidal energy harnesses ocean water surges driven by lunar gravity."
  },
  {
    "topic": "Natural Resources",
    "q": "What is the main component of Biogas produced in rural digesters?",
    "opts": [
      "Methane and Carbon Dioxide",
      "Pure Oxygen",
      "Nitrogen Dioxide",
      "Sulfur Dioxide"
    ],
    "ans": 0,
    "exp": "Biogas produced from organic waste contains ~65% methane gas."
  },
  {
    "topic": "Natural Resources",
    "q": "Which soil type covers the largest area in northern India's river plains?",
    "opts": [
      "Alluvial Soil",
      "Black Cotton Soil",
      "Laterite Soil",
      "Arid Red Soil"
    ],
    "ans": 0,
    "exp": "Alluvial soil deposited by Himalayan rivers covers northern plains."
  },
  {
    "topic": "Natural Resources",
    "q": "What characteristic defines Black Soil (Regur soil) in the Deccan Trap region?",
    "opts": [
      "High moisture-retention capacity ideal for cotton",
      "Low fertility sandy texture",
      "High acidity requiring lime",
      "Inability to hold water"
    ],
    "ans": 0,
    "exp": "Black cotton soil holds moisture exceptionally well, perfect for cotton cultivation."
  },
  {
    "topic": "Natural Resources",
    "q": "Which Indian state created the famous 'Ralegan Siddhi' model of watershed management?",
    "opts": [
      "Maharashtra",
      "Kerala",
      "West Bengal",
      "Assam"
    ],
    "ans": 0,
    "exp": "Ralegan Siddhi village in Maharashtra is a pioneer in watershed rainwater harvesting."
  },
  {
    "topic": "Natural Resources",
    "q": "What is the principal cause of soil degradation in hilly slopes of India?",
    "opts": [
      "Water erosion and deforestation",
      "Glacier advance",
      "Volcanic ash deposition",
      "Industrial sand mining"
    ],
    "ans": 0,
    "exp": "Heavy rain runoff on deforested hill slopes causes severe water erosion."
  },
  {
    "topic": "Natural Resources",
    "q": "Which metal is extracted from Hematite and Magnetite ores?",
    "opts": [
      "Iron",
      "Copper",
      "Aluminum",
      "Lead"
    ],
    "ans": 0,
    "exp": "Hematite and Magnetite are major iron ores."
  },
  {
    "topic": "Natural Resources",
    "q": "What is the term for a natural resource owned by a nation state within its 12nm waters?",
    "opts": [
      "National Resource",
      "International Resource",
      "Individual Resource",
      "Stock Resource"
    ],
    "ans": 0,
    "exp": "Resources within national land and 12nm territorial waters are National Resources."
  },
  {
    "topic": "Natural Resources",
    "q": "Which non-renewable fuel is most commonly burned in thermal power stations in India?",
    "opts": [
      "Coal",
      "Uranium",
      "Natural Gas",
      "Kerosene"
    ],
    "ans": 0,
    "exp": "Coal generates the majority of thermal electricity in India."
  },
  {
    "topic": "Natural Resources",
    "q": "What is the process of collecting rooftop rainwater into storage tanks called?",
    "opts": [
      "Roof-top Rainwater Harvesting",
      "Canal Diversion",
      "Sub-surface Smelting",
      "Desalination"
    ],
    "ans": 0,
    "exp": "Roof-top harvesting captures rain runoff for domestic or aquifer recharge use."
  },
  {
    "topic": "Natural Resources",
    "q": "Which of the following is a non-metallic mineral resource?",
    "opts": [
      "Limestone",
      "Iron Ore",
      "Bauxite",
      "Copper"
    ],
    "ans": 0,
    "exp": "Limestone is a non-metallic mineral used extensively in cement manufacturing."
  },
  {
    "topic": "Natural Resources",
    "q": "What type of resource is wind power harnessed by wind turbine farms?",
    "opts": [
      "Continuous Renewable Resource",
      "Exhaustible Fossil Resource",
      "Abiotic Ore",
      "Biotic Reserve"
    ],
    "ans": 0,
    "exp": "Wind power is a clean continuous renewable energy flow."
  },
  {
    "topic": "Natural Resources",
    "q": "Which international body organized the 1992 Earth Summit in Rio de Janeiro?",
    "opts": [
      "UNCED (UN Conference on Environment and Development)",
      "WHO",
      "NATO",
      "OPEC"
    ],
    "ans": 0,
    "exp": "UNCED organized the landmark 1992 Earth Summit in Rio."
  },
  {
    "topic": "Natural Resources",
    "q": "What is the primary goal of the 3R strategy (Reduce, Reuse, Recycle)?",
    "opts": [
      "Minimizing natural resource depletion and waste generation",
      "Maximizing industrial dumping",
      "Stopping all economic growth",
      "Increasing single-use plastics"
    ],
    "ans": 0,
    "exp": "The 3Rs promote sustainable resource consumption and waste minimization."
  },
  {
    "topic": "Natural Resources",
    "q": "Which type of resource is timber harvested from a private mahogany plantation?",
    "opts": [
      "Biotic Individual Resource",
      "Abiotic National Resource",
      "International Flow",
      "Stock Resource"
    ],
    "ans": 0,
    "exp": "Trees on private land are Biotic Individual Resources."
  },
  {
    "topic": "Natural Resources",
    "q": "What causes desertification in semi-arid grazing lands?",
    "opts": [
      "Overgrazing and removal of vegetation cover",
      "Excessive tree planting",
      "Drip irrigation",
      "Organic farming"
    ],
    "ans": 0,
    "exp": "Overgrazing strips protective vegetation, exposing topsoil to desertification."
  },
  {
    "topic": "Natural Resources",
    "q": "Which energy source uses photovoltaic cells to convert solar radiation into electricity?",
    "opts": [
      "Solar Power",
      "Nuclear Power",
      "Hydro Power",
      "Geothermal Power"
    ],
    "ans": 0,
    "exp": "Photovoltaic cells directly convert sunlight into electricity."
  },
  {
    "topic": "Natural Resources",
    "q": "What is the status of deep seabed manganese nodules beyond 200nm of EEZ?",
    "opts": [
      "International Resource under ISA regulation",
      "National resource of nearest coastal state",
      "Private individual resource",
      "Exhausted resource"
    ],
    "ans": 0,
    "exp": "Deep seabed nodules beyond 200nm EEZ are International Resources."
  },
  {
    "topic": "Natural Resources",
    "q": "Which forest type in India acts as a major natural carbon sink and coastal buffer?",
    "opts": [
      "Mangrove Forests (Sundarbans)",
      "Thorn Scrub Deserts",
      "Alpine Meadows",
      "Coniferous Pines"
    ],
    "ans": 0,
    "exp": "Sundarbans mangrove forests store vast carbon and protect coastlines from cyclones."
  },
  {
    "topic": "Natural Resources",
    "q": "What ecological service is provided by Earth's ozone layer in the stratosphere?",
    "opts": [
      "Filtering harmful solar ultraviolet (UV) radiation",
      "Producing rain showers",
      "Generating wind currents",
      "Filtering ocean salt"
    ],
    "ans": 0,
    "exp": "The stratospheric ozone layer absorbs harmful UV radiation from the sun."
  },
  {
    "topic": "Natural Resources",
    "q": "Which mineral resource is essential for manufacturing nitrogenous fertilizers?",
    "opts": [
      "Rock Phosphate / Gypsum",
      "Iron Ore",
      "Gold",
      "Bauxite"
    ],
    "ans": 0,
    "exp": "Rock phosphate and gypsum are key inputs for chemical fertilizer production."
  },
  {
    "topic": "Natural Resources",
    "q": "What type of resource development stage describes India's commercial solar power plants?",
    "opts": [
      "Developed Resources",
      "Stock Resources",
      "Potential Resources",
      "Unusable Resources"
    ],
    "ans": 0,
    "exp": "Operational commercial solar plants represent Developed Resources."
  },
  {
    "topic": "Natural Resources",
    "q": "Which of the following is an example of reuse in resource conservation?",
    "opts": [
      "Using a glass water bottle repeatedly instead of throwing single-use plastic bottles",
      "Melting copper scrap",
      "Burning dry leaves",
      "Mining raw bauxite"
    ],
    "ans": 0,
    "exp": "Reusing durable items extends product lifespan without re-processing energy."
  },
  {
    "topic": "Natural Resources",
    "q": "What type of natural resource is atmospheric oxygen replenished by plant photosynthesis?",
    "opts": [
      "Biotic Continuous Renewable Resource",
      "Non-renewable Mineral",
      "Abiotic Fossil Fuel",
      "Stock Ore"
    ],
    "ans": 0,
    "exp": "Oxygen is a vital biotic renewable resource replenished by plant photosynthesis."
  },
  {
    "topic": "Natural Resources",
    "q": "Which river basin in India has the highest hydroelectric power potential?",
    "opts": [
      "Brahmaputra River Basin",
      "Thar Desert Basin",
      "Luni River Basin",
      "Sabarmati Basin"
    ],
    "ans": 0,
    "exp": "The Brahmaputra basin in Northeast India holds immense hydroelectric potential."
  },
  {
    "topic": "Natural Resources",
    "q": "What is the primary drawback of thermal power generation from coal?",
    "opts": [
      "High emission of carbon dioxide and fly ash pollution",
      "Requires zero fuel inputs",
      "Generates zero waste",
      "Infinite lifetime supply"
    ],
    "ans": 0,
    "exp": "Coal burning releases large quantities of CO2 and toxic fly ash."
  },
  {
    "topic": "Natural Resources",
    "q": "Which soil conservation method plants strips of grass between crop rows to absorb runoff?",
    "opts": [
      "Strip Cropping",
      "Clear Felling",
      "Monoculture",
      "Deep Trenching"
    ],
    "ans": 0,
    "exp": "Strip cropping plants grass strips between crops to reduce water erosion."
  },
  {
    "topic": "Natural Resources",
    "q": "What is the term for natural substances whose total volume is known and technology is available?",
    "opts": [
      "Developed Reserves / Resources",
      "Stock Resources",
      "Potential Resources",
      "Flow Resources"
    ],
    "ans": 0,
    "exp": "Developed reserves are quantified and actively extractable with current tech."
  },
  {
    "topic": "Natural Resources",
    "q": "Which state in India is home to the world's largest solar park at Bhadla?",
    "opts": [
      "Rajasthan",
      "Kerala",
      "Goa",
      "Sikkim"
    ],
    "ans": 0,
    "exp": "Bhadla Solar Park in Rajasthan is one of the world's largest solar installations."
  },
  {
    "topic": "Natural Resources",
    "q": "What type of energy is generated by releasing atomic binding energy in Uranium atoms?",
    "opts": [
      "Nuclear Energy",
      "Geothermal Energy",
      "Biomass Energy",
      "Tidal Energy"
    ],
    "ans": 0,
    "exp": "Nuclear energy is released by splitting Uranium/Thorium atomic nuclei."
  },
  {
    "topic": "Natural Resources",
    "q": "Which practice helps maintain long-term soil fertility without chemical fertilizers?",
    "opts": [
      "Green Manuring and Organic Composting",
      "Excessive synthetic NPK spraying",
      "Stubble burning",
      "Monoculture cropping"
    ],
    "ans": 0,
    "exp": "Green manure and organic compost build natural soil humus and fertility."
  },
  {
    "topic": "Natural Resources",
    "q": "What is the primary component of CNG (Compressed Natural Gas) used in transport?",
    "opts": [
      "Methane",
      "Propane",
      "Butane",
      "Hydrogen"
    ],
    "ans": 0,
    "exp": "CNG consists primarily of compressed methane gas."
  },
  {
    "topic": "Natural Resources",
    "q": "Which geographical feature in India acts as a major natural water tower for northern rivers?",
    "opts": [
      "The Himalayan Mountain Range",
      "The Thar Desert",
      "The Deccan Plateau",
      "The Rann of Kutch"
    ],
    "ans": 0,
    "exp": "Himalayan glaciers feed major perennial rivers like Ganga, Yamuna, and Indus."
  },
  {
    "topic": "Natural Resources",
    "q": "What ecological principle requires balancing economic growth with environmental preservation?",
    "opts": [
      "Sustainable Development",
      "Laissez-Faire Exploitation",
      "Resource Depletion Strategy",
      "Unlimited Mining Policy"
    ],
    "ans": 0,
    "exp": "Sustainable Development balances economic growth with environmental conservation."
  },
  {
    "topic": "Natural Resources",
    "q": "Which mineral is extracted from Kolar and Hutti mines in Karnataka?",
    "opts": [
      "Gold",
      "Coal",
      "Iron Ore",
      "Mica"
    ],
    "ans": 0,
    "exp": "Kolar and Hutti in Karnataka are historically famous gold mining centers."
  },
  {
    "topic": "Natural Resources",
    "q": "What type of resource is geothermal steam in Manikaran, Himachal Pradesh?",
    "opts": [
      "Renewable Thermal Energy Resource",
      "Non-renewable Fossil Fuel",
      "Abiotic Mineral Ore",
      "Synthetic Chemical"
    ],
    "ans": 0,
    "exp": "Manikaran geothermal hot springs provide clean renewable thermal energy."
  },
  {
    "topic": "Natural Resources",
    "q": "Which of the following is a key cause of land degradation in northwestern India?",
    "opts": [
      "Over-irrigation causing salinity and waterlogging",
      "Afforestation",
      "Terrace farming",
      "Drip irrigation"
    ],
    "ans": 0,
    "exp": "Over-irrigation in Punjab/Haryana causes land degradation via salinization."
  },
  {
    "topic": "Natural Resources",
    "q": "What is the economic classification of ocean fish stocks within a country's 12nm waters?",
    "opts": [
      "National Biotic Resource",
      "International Stock",
      "Private Individual Resource",
      "Non-renewable Mineral"
    ],
    "ans": 0,
    "exp": "Marine life within 12nm coastal waters belongs to National Biotic Resources."
  },
  {
    "topic": "Natural Resources",
    "q": "Which non-metallic mineral is the main raw material for manufacturing cement?",
    "opts": [
      "Limestone (Calcium Carbonate)",
      "Bauxite",
      "Gold",
      "Mica"
    ],
    "ans": 0,
    "exp": "Limestone is the foundational raw material for cement production."
  },
  {
    "topic": "Natural Resources",
    "q": "What type of ecosystem service is flood control provided by wetlands?",
    "opts": [
      "Regulating Service",
      "Provisioning Service",
      "Cultural Service",
      "Supporting Service"
    ],
    "ans": 0,
    "exp": "Wetlands regulate hydrological flow, absorbing excess flood water."
  },
  {
    "topic": "Natural Resources",
    "q": "Which renewable resource capacity has grown rapidly under India's National Solar Mission?",
    "opts": [
      "Solar Photovoltaic Power",
      "Coal Thermal Power",
      "Kerosene Power",
      "Wood Burning"
    ],
    "ans": 0,
    "exp": "The National Solar Mission has dramatically expanded India's solar PV capacity."
  },
  {
    "topic": "Natural Resources",
    "q": "What practice involves leaving farmland uncultivated for a season to restore natural fertility?",
    "opts": [
      "Fallowing / Leaving Land Fallow",
      "Over-cropping",
      "Deforestation",
      "Urbanization"
    ],
    "ans": 0,
    "exp": "Fallowing allows land time to naturally regenerate soil nutrients."
  },
  {
    "topic": "Natural Resources",
    "q": "Which energy source harnesses organic waste from cattle in rural Gobar Gas plants?",
    "opts": [
      "Biogas / Biomass Energy",
      "Nuclear Fission",
      "Hydroelectric Energy",
      "Geothermal Energy"
    ],
    "ans": 0,
    "exp": "Rural Gobar Gas plants convert cattle dung into clean methane biogas."
  },
  {
    "topic": "Natural Resources",
    "q": "What is the main goal of rainwater check dams built across seasonal streamlets?",
    "opts": [
      "Slowing water runoff to recharge groundwater aquifers",
      "Blocking all fish movement",
      "Diverting water to oceans",
      "Generating high-voltage nuclear power"
    ],
    "ans": 0,
    "exp": "Check dams slow rain runoff, allowing water to percolate into underground aquifers."
  },
  {
    "topic": "Natural Resources",
    "q": "Which fossil fuel releases the lowest amount of carbon dioxide per unit of energy produced?",
    "opts": [
      "Natural Gas",
      "Coal",
      "Lignite",
      "Crude Oil"
    ],
    "ans": 0,
    "exp": "Natural gas burns cleaner than coal or oil, producing lower CO2 emissions."
  },
  {
    "topic": "Natural Resources",
    "q": "What type of natural resource is air containing life-sustaining oxygen?",
    "opts": [
      "Continuous Abiotic/Biotic Renewable Resource",
      "Exhaustible Mineral",
      "Stock Resource",
      "Individual Resource"
    ],
    "ans": 0,
    "exp": "Air is an indispensable continuous renewable resource for all living beings."
  },
  {
    "topic": "Natural Resources",
    "q": "Which national park in Madhya Pradesh is famous for tiger conservation under Project Tiger?",
    "opts": [
      "Kanha / Bandhavgarh National Park",
      "Kaziranga",
      "Gir Forest",
      "Periyar"
    ],
    "ans": 0,
    "exp": "Kanha and Bandhavgarh in MP are premier Project Tiger reserves."
  },
  {
    "topic": "Natural Resources",
    "q": "What is the primary benefit of recycling scrap aluminum metal?",
    "opts": [
      "Saves ~95% of the electrical energy required to smelt raw bauxite ore",
      "Consumes more energy than smelting",
      "Increases air pollution",
      "Destroys metal strength"
    ],
    "ans": 0,
    "exp": "Recycling aluminum consumes only 5% of the energy needed to refine raw bauxite."
  },
  {
    "topic": "Natural Resources",
    "q": "Which term describes natural resources that can be replenished continuously by natural cycles?",
    "opts": [
      "Renewable Resources",
      "Non-renewable Resources",
      "Exhaustible Resources",
      "Stock Ores"
    ],
    "ans": 0,
    "exp": "Renewable resources naturally replenish themselves across reasonable timeframes."
  },
  {
    "topic": "Electoral System",
    "q": "Which Article of the Indian Constitution guarantees Universal Adult Franchise?",
    "opts": [
      "Article 326",
      "Article 324",
      "Article 14",
      "Article 21"
    ],
    "ans": 0,
    "exp": "Article 326 guarantees Universal Adult Franchise for all adult citizens aged 18+."
  },
  {
    "topic": "Electoral System",
    "q": "Which Constitutional Amendment Act lowered the minimum voting age from 21 to 18 years?",
    "opts": [
      "61st Constitutional Amendment Act, 1988",
      "44th Amendment",
      "73rd Amendment",
      "86th Amendment"
    ],
    "ans": 0,
    "exp": "The 61st Amendment Act of 1988 lowered the voting age from 21 to 18."
  },
  {
    "topic": "Electoral System",
    "q": "Which Article of the Constitution establishes the independent Election Commission of India (ECI)?",
    "opts": [
      "Article 324",
      "Article 326",
      "Article 280",
      "Article 370"
    ],
    "ans": 0,
    "exp": "Article 324 establishes the Election Commission of India."
  },
  {
    "topic": "Electoral System",
    "q": "Who was the first Chief Election Commissioner of independent India?",
    "opts": [
      "Sukumar Sen",
      "V.S. Ramadevi",
      "T.N. Seshan",
      "Sunil Arora"
    ],
    "ans": 0,
    "exp": "Sukumar Sen served as India's first Chief Election Commissioner (1950-1958)."
  },
  {
    "topic": "Electoral System",
    "q": "Who was the first woman Chief Election Commissioner of India?",
    "opts": [
      "V.S. Ramadevi",
      "Pratibha Patil",
      "Sarojini Naidu",
      "Sushma Swaraj"
    ],
    "ans": 0,
    "exp": "V.S. Ramadevi served as the 9th CEC of India in November-December 1990."
  },
  {
    "topic": "Electoral System",
    "q": "What photo identity document issued by ECI serves as official voter identification?",
    "opts": [
      "EPIC (Elector's Photo Identity Card)",
      "Ration Card",
      "PAN Card",
      "Driving License"
    ],
    "ans": 0,
    "exp": "EPIC is the official voter photo identity card issued by ECI."
  },
  {
    "topic": "Electoral System",
    "q": "In which year were EVMs tested for the first time in India on an experimental basis?",
    "opts": [
      "1982 (Paravur, Kerala)",
      "1951",
      "1999",
      "2004"
    ],
    "ans": 0,
    "exp": "EVMs were first tested in 50 polling stations of Paravur constituency in Kerala in 1982."
  },
  {
    "topic": "Electoral System",
    "q": "When were Electronic Voting Machines (EVMs) deployed nationwide in all Lok Sabha constituencies?",
    "opts": [
      "2004 General Elections",
      "1999 General Elections",
      "1982 General Elections",
      "2014 General Elections"
    ],
    "ans": 0,
    "exp": "EVMs were implemented nationwide across all 543 Lok Sabha seats in 2004."
  },
  {
    "topic": "Electoral System",
    "q": "Which state companies manufacture EVMs and VVPATs for the Election Commission of India?",
    "opts": [
      "BEL and ECIL",
      "ISRO and DRDO",
      "TCS and Infosys",
      "HAL and BHEL"
    ],
    "ans": 0,
    "exp": "Bharat Electronics Ltd (BEL) and Electronics Corporation of India Ltd (ECIL) manufacture EVMs."
  },
  {
    "topic": "Electoral System",
    "q": "What does VVPAT stand for in Indian voting technology?",
    "opts": [
      "Voter Verifiable Paper Audit Trail",
      "Verified Voter Paper Access Tool",
      "Voluntary Voting Paper Action Tracking",
      "Variable Voter Print Audit Test"
    ],
    "ans": 0,
    "exp": "VVPAT stands for Voter Verifiable Paper Audit Trail."
  },
  {
    "topic": "Electoral System",
    "q": "How long does a VVPAT printed slip remain visible behind the transparent glass window before dropping into the sealed box?",
    "opts": [
      "7 seconds",
      "15 seconds",
      "3 seconds",
      "30 seconds"
    ],
    "ans": 0,
    "exp": "The VVPAT paper slip displays candidate details for 7 seconds before dropping into a locked box."
  },
  {
    "topic": "Electoral System",
    "q": "In which year was VVPAT tested for the first time in an Indian assembly election?",
    "opts": [
      "2013 (Noksen, Nagaland)",
      "2004",
      "1982",
      "2019"
    ],
    "ans": 0,
    "exp": "VVPAT was first used in Noksen assembly constituency in Nagaland in 2013."
  },
  {
    "topic": "Electoral System",
    "q": "What option on EVMs allows voters to express rejection of all contesting candidates?",
    "opts": [
      "NOTA (None of the Above)",
      "VVPAT",
      "EPIC",
      "ETPBS"
    ],
    "ans": 0,
    "exp": "NOTA allows voters to register a vote of rejection against all candidates."
  },
  {
    "topic": "Electoral System",
    "q": "Which Supreme Court judgment introduced the NOTA option on ballot papers and EVMs in 2013?",
    "opts": [
      "PUCL vs Union of India (2013)",
      "Kesavananda Bharati Case",
      "Minerva Mills Case",
      "Maneka Gandhi Case"
    ],
    "ans": 0,
    "exp": "The Supreme Court mandated NOTA in the 2013 PUCL vs Union of India judgment."
  },
  {
    "topic": "Electoral System",
    "q": "What constitutional articles reserve parliamentary and assembly seats for SC and ST communities?",
    "opts": [
      "Article 330 and Article 332",
      "Article 14 and Article 19",
      "Article 324 and Article 326",
      "Article 352 and Article 356"
    ],
    "ans": 0,
    "exp": "Article 330 (Lok Sabha) and Article 332 (Assemblies) reserve seats for SCs and STs."
  },
  {
    "topic": "Electoral System",
    "q": "What voting system is used for electing Members of Parliament to the Lok Sabha?",
    "opts": [
      "First-Past-The-Post (FPTP) System",
      "Proportional Representation with Single Transferable Vote",
      "List System",
      "Alternative Vote"
    ],
    "ans": 0,
    "exp": "Lok Sabha elections use the First-Past-The-Post plurality voting system."
  },
  {
    "topic": "Electoral System",
    "q": "What voting system is used for electing Members of the Rajya Sabha by State MLAs?",
    "opts": [
      "Proportional Representation with Single Transferable Vote (PR-STV)",
      "First-Past-The-Post",
      "Simple Majority Hand Vote",
      "Direct Popular Ballot"
    ],
    "ans": 0,
    "exp": "Rajya Sabha MPs are elected by state MLAs using PR-STV."
  },
  {
    "topic": "Electoral System",
    "q": "What mobile app released by ECI enables citizens to report live campaign code violations?",
    "opts": [
      "cVIGIL",
      "BHIM",
      "UMANG",
      "e-Pathshala"
    ],
    "ans": 0,
    "exp": "cVIGIL lets citizens upload live photos/videos of Model Code of Conduct violations."
  },
  {
    "topic": "Electoral System",
    "q": "What is the mandatory campaign silence period before polling concludes in a constituency?",
    "opts": [
      "48 hours",
      "24 hours",
      "72 hours",
      "12 hours"
    ],
    "ans": 0,
    "exp": "All public campaigning is legally banned during the 48-hour Silence Period."
  },
  {
    "topic": "Electoral System",
    "q": "What official scrutinizes nomination papers filed by candidates in a constituency?",
    "opts": [
      "Returning Officer (RO)",
      "Presiding Officer",
      "Polling Clerk",
      "Chief Minister"
    ],
    "ans": 0,
    "exp": "The Returning Officer scrutinizes nomination papers for legal validity."
  },
  {
    "topic": "Electoral System",
    "q": "Who manages and supervises voting operations at an individual polling station on election day?",
    "opts": [
      "Presiding Officer",
      "Chief Election Commissioner",
      "District Judge",
      "Governor"
    ],
    "ans": 0,
    "exp": "The Presiding Officer manages polling station operations on election day."
  },
  {
    "topic": "Electoral System",
    "q": "What happens to a candidate's security deposit if they secure less than 1/6th of total valid votes?",
    "opts": [
      "Security deposit is forfeited",
      "Candidate goes to prison",
      "Party is banned",
      "Votes are invalidated"
    ],
    "ans": 0,
    "exp": "Candidates forfeit their security deposit if they receive less than 1/6th of valid votes polled."
  },
  {
    "topic": "Electoral System",
    "q": "What is the candidate expenditure limit for Lok Sabha elections in large states currently?",
    "opts": [
      "₹95 Lakhs",
      "₹25 Lakhs",
      "₹1 Crore",
      "₹50 Lakhs"
    ],
    "ans": 0,
    "exp": "The ECI candidate spending limit for Lok Sabha in large states is ₹95 Lakhs."
  },
  {
    "topic": "Electoral System",
    "q": "What is the candidate expenditure limit for State Assembly elections in large states currently?",
    "opts": [
      "₹40 Lakhs",
      "₹10 Lakhs",
      "₹75 Lakhs",
      "₹20 Lakhs"
    ],
    "ans": 0,
    "exp": "The ECI candidate spending limit for Assembly elections in large states is ₹40 Lakhs."
  },
  {
    "topic": "Electoral System",
    "q": "Where are election petitions challenging the legal validity of a parliamentary election filed?",
    "opts": [
      "State High Court",
      "Gram Panchayat",
      "Election Commission Office",
      "District Civil Court"
    ],
    "ans": 0,
    "exp": "Election petitions challenging election validity are filed in the respective State High Court."
  },
  {
    "topic": "Electoral System",
    "q": "What constitutional amendment lowered voting age to 18 in 1988?",
    "opts": [
      "61st Amendment Act",
      "42nd Amendment",
      "44th Amendment",
      "86th Amendment"
    ],
    "ans": 0,
    "exp": "Electoral system principle: 61st Amendment Act is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "Who appoints the Chief Election Commissioner and Election Commissioners in India?",
    "opts": [
      "President of India",
      "Prime Minister",
      "Chief Justice",
      "Parliament Speaker"
    ],
    "ans": 0,
    "exp": "Electoral system principle: President of India is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What is the tenure of office for the Chief Election Commissioner of India?",
    "opts": [
      "6 years or until age 65 (whichever is earlier)",
      "5 years or age 60",
      "4 years or age 62",
      "10 years fixed"
    ],
    "ans": 0,
    "exp": "Electoral system principle: 6 years or until age 65 (whichever is earlier) is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What document contains the list of all registered voters in a constituency?",
    "opts": [
      "Electoral Roll / Voter List",
      "Party Manifesto",
      "Constitution Schedule",
      "Census Gazette"
    ],
    "ans": 0,
    "exp": "Electoral system principle: Electoral Roll / Voter List is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "Which law governs candidate registration, election conduct, and corrupt practices in India?",
    "opts": [
      "Representation of the People Act, 1951",
      "Indian Penal Code 1860",
      "Companies Act 2013",
      "RTI Act 2005"
    ],
    "ans": 0,
    "exp": "Electoral system principle: Representation of the People Act, 1951 is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What is a vote cast by a genuine voter whose vote was fraudulently cast by an impersonator called?",
    "opts": [
      "Tendered Vote",
      "Postal Ballot",
      "Invalid Ballot",
      "Challenged Vote"
    ],
    "ans": 0,
    "exp": "Electoral system principle: Tendered Vote is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What system enables armed forces personnel stationed far away to vote electronically?",
    "opts": [
      "ETPBS (Electronically Transmitted Postal Ballot System)",
      "VVPAT",
      "cVIGIL",
      "NOTA"
    ],
    "ans": 0,
    "exp": "Electoral system principle: ETPBS (Electronically Transmitted Postal Ballot System) is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What is the minimum age required to contest elections for Lok Sabha or State Vidhan Sabha?",
    "opts": [
      "25 years",
      "18 years",
      "30 years",
      "35 years"
    ],
    "ans": 0,
    "exp": "Electoral system principle: 25 years is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What is the minimum age required to contest elections for Rajya Sabha or Vidhan Parishad?",
    "opts": [
      "30 years",
      "25 years",
      "18 years",
      "35 years"
    ],
    "ans": 0,
    "exp": "Electoral system principle: 30 years is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What is the minimum age required to run for President of India?",
    "opts": [
      "35 years",
      "25 years",
      "30 years",
      "18 years"
    ],
    "ans": 0,
    "exp": "Electoral system principle: 35 years is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What document must candidates submit disclosing their wealth assets, liabilities, and criminal records?",
    "opts": [
      "Election Affidavit (Form 26)",
      "Identity Card",
      "Income Tax Return",
      "Ration Card"
    ],
    "ans": 0,
    "exp": "Electoral system principle: Election Affidavit (Form 26) is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "Who allocates election symbols to recognized national and state political parties?",
    "opts": [
      "Election Commission of India",
      "Supreme Court",
      "Ministry of Home Affairs",
      "President"
    ],
    "ans": 0,
    "exp": "Electoral system principle: Election Commission of India is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What type of ballot ensures that no one knows which candidate a voter voted for?",
    "opts": [
      "Secret Ballot",
      "Open Voice Vote",
      "Show of Hands",
      "Public Acclamation"
    ],
    "ans": 0,
    "exp": "Electoral system principle: Secret Ballot is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "Which Constitutional Amendment reserved 33% seats for women in Lok Sabha and Assemblies?",
    "opts": [
      "106th Amendment Act 2023 (Nari Shakti Vandan Adhiniyam)",
      "73rd Amendment",
      "86th Amendment",
      "44th Amendment"
    ],
    "ans": 0,
    "exp": "Electoral system principle: 106th Amendment Act 2023 (Nari Shakti Vandan Adhiniyam) is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "How many Election Commissioners serve in the Election Commission of India alongside the CEC?",
    "opts": [
      "Two Election Commissioners",
      "One Commissioner",
      "Five Commissioners",
      "Ten Commissioners"
    ],
    "ans": 0,
    "exp": "Electoral system principle: Two Election Commissioners is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "Can the Chief Election Commissioner be easily removed by the government at will?",
    "opts": [
      "No, removal requires parliamentary impeachment similar to a Supreme Court judge",
      "Yes, Prime Minister can dismiss anytime",
      "Yes, Home Minister can fire",
      "Yes, Governor can remove"
    ],
    "ans": 0,
    "exp": "Electoral system principle: No, removal requires parliamentary impeachment similar to a Supreme Court judge is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What is an election held when Parliament is dissolved before completing 5 years called?",
    "opts": [
      "Mid-Term Election",
      "By-Election",
      "Primary Election",
      "Local Election"
    ],
    "ans": 0,
    "exp": "Electoral system principle: Mid-Term Election is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What is an election held to fill a single casual vacancy caused by candidate death or resignation?",
    "opts": [
      "By-Election",
      "Mid-Term Election",
      "General Election",
      "Civic Election"
    ],
    "ans": 0,
    "exp": "Electoral system principle: By-Election is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "Who supervises election administration across an entire district?",
    "opts": [
      "District Election Officer (DEO / District Collector)",
      "Presiding Officer",
      "Polling Clerk",
      "Mayor"
    ],
    "ans": 0,
    "exp": "Electoral system principle: District Election Officer (DEO / District Collector) is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What code governs campaign ethics and prevents ruling parties from misusing government machinery?",
    "opts": [
      "Model Code of Conduct (MCC)",
      "Civil Procedure Code",
      "Industrial Code",
      "Police Code"
    ],
    "ans": 0,
    "exp": "Electoral system principle: Model Code of Conduct (MCC) is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What happens when polling finishes on election day?",
    "opts": [
      "EVMs are sealed and transported to secure strongrooms under armed security",
      "EVMs are thrown away",
      "Votes are counted on street",
      "Ballot boxes are sent overseas"
    ],
    "ans": 0,
    "exp": "Electoral system principle: EVMs are sealed and transported to secure strongrooms under armed security is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "Who verifies candidate nomination forms during the scrutiny stage?",
    "opts": [
      "Returning Officer (RO)",
      "Polling Clerk",
      "Voter",
      "Journalist"
    ],
    "ans": 0,
    "exp": "Electoral system principle: Returning Officer (RO) is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What is the maximum period within which a by-election must be held to fill a casual vacancy?",
    "opts": [
      "6 months",
      "1 year",
      "2 years",
      "3 months"
    ],
    "ans": 0,
    "exp": "Electoral system principle: 6 months is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "Which court hears election petitions challenging parliamentary election results?",
    "opts": [
      "State High Court",
      "District Court",
      "Gram Panchayat",
      "Supreme Court directly"
    ],
    "ans": 0,
    "exp": "Electoral system principle: State High Court is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What principle ensures political equality in voting: 1 Person = 1 Vote = 1 Value?",
    "opts": [
      "Universal Adult Franchise",
      "Property Qualification",
      "Educational Preference",
      "Taxpayer Franchise"
    ],
    "ans": 0,
    "exp": "Electoral system principle: Universal Adult Franchise is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What color ink is applied on a voter's left forefinger to prevent double voting?",
    "opts": [
      "Indelible Ink (Silver Nitrate)",
      "Red Marker Ink",
      "Blue Stamp Ink",
      "Black Paint"
    ],
    "ans": 0,
    "exp": "Electoral system principle: Indelible Ink (Silver Nitrate) is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "Which government company in Mysore manufactures indelible ink for Indian elections?",
    "opts": [
      "Mysore Paints and Varnish Limited (MPVL)",
      "Tata Chemical",
      "Reliance Industries",
      "Asian Paints"
    ],
    "ans": 0,
    "exp": "Electoral system principle: Mysore Paints and Varnish Limited (MPVL) is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What unit of the EVM does the voter press to register their vote?",
    "opts": [
      "Balloting Unit (BU)",
      "Control Unit (CU)",
      "VVPAT Unit",
      "Battery Unit"
    ],
    "ans": 0,
    "exp": "Electoral system principle: Balloting Unit (BU) is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What unit of the EVM remains with the Polling Officer to release votes?",
    "opts": [
      "Control Unit (CU)",
      "Balloting Unit (BU)",
      "Printer Unit",
      "Display Screen"
    ],
    "ans": 0,
    "exp": "Electoral system principle: Control Unit (CU) is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "How many candidates can a single EVM Balloting Unit accommodate typically?",
    "opts": [
      "16 candidates (including NOTA)",
      "5 candidates",
      "100 candidates",
      "50 candidates"
    ],
    "ans": 0,
    "exp": "Electoral system principle: 16 candidates (including NOTA) is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "Up to how many Balloting Units can be joined together to accommodate more candidates on an EVM?",
    "opts": [
      "Up to 24 Balloting Units (384 candidates)",
      "Only 1 BU",
      "Only 2 BUs",
      "10 BUs"
    ],
    "ans": 0,
    "exp": "Electoral system principle: Up to 24 Balloting Units (384 candidates) is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What power source operates EVMs during polling day?",
    "opts": [
      "Internal sealed battery (no mains electricity required)",
      "AC wall plug",
      "Solar panel",
      "Diesel generator"
    ],
    "ans": 0,
    "exp": "Electoral system principle: Internal sealed battery (no mains electricity required) is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "Why are EVMs non-networked standalone machines?",
    "opts": [
      "Prevents Wi-Fi, Bluetooth, or internet hacking",
      "Saves money",
      "Requires no battery",
      "Reduces size"
    ],
    "ans": 0,
    "exp": "Electoral system principle: Prevents Wi-Fi, Bluetooth, or internet hacking is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What body conducts elections to Gram Panchayats and Municipalities in states?",
    "opts": [
      "State Election Commission (SEC)",
      "Election Commission of India (ECI)",
      "UPSC",
      "District Court"
    ],
    "ans": 0,
    "exp": "Electoral system principle: State Election Commission (SEC) is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "Are State Election Commissions subordinate branches of the Election Commission of India?",
    "opts": [
      "No, SECs are independent constitutional bodies under Article 243K",
      "Yes, SECs are branches of ECI",
      "Yes, SECs report to CEC daily",
      "No, SECs belong to NITI Aayog"
    ],
    "ans": 0,
    "exp": "Electoral system principle: No, SECs are independent constitutional bodies under Article 243K is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "Which Article of the Constitution establishes State Election Commissions for local body elections?",
    "opts": [
      "Article 243K and Article 243ZA",
      "Article 324",
      "Article 370",
      "Article 280"
    ],
    "ans": 0,
    "exp": "Electoral system principle: Article 243K and Article 243ZA is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What document states a political party's election promises and policy agenda before voting?",
    "opts": [
      "Election Manifesto",
      "White Paper",
      "Budget Speech",
      "Gazette Notification"
    ],
    "ans": 0,
    "exp": "Electoral system principle: Election Manifesto is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What is the term for illegal cash or gift distribution to buy voter votes?",
    "opts": [
      "Electoral Bribery / Corrupt Practice",
      "Campaign Expense",
      "Public Subsidy",
      "Party Dividend"
    ],
    "ans": 0,
    "exp": "Electoral system principle: Electoral Bribery / Corrupt Practice is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What is the maximum fine or penalty for voter impersonation under electoral law?",
    "opts": [
      "Imprisonment up to 1 year and/or fine",
      "No penalty",
      "Small ₹10 fine",
      "Lifetime ban on working"
    ],
    "ans": 0,
    "exp": "Electoral system principle: Imprisonment up to 1 year and/or fine is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What is the minimum age to register as a voter on the electoral roll in India?",
    "opts": [
      "18 years",
      "21 years",
      "16 years",
      "25 years"
    ],
    "ans": 0,
    "exp": "Electoral system principle: 18 years is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "On what qualifying date of a year does a citizen attaining 18 years become eligible to register as a voter?",
    "opts": [
      "January 1 (plus April 1, July 1, Oct 1 under revised rules)",
      "December 31",
      "August 15",
      "January 26"
    ],
    "ans": 0,
    "exp": "Electoral system principle: January 1 (plus April 1, July 1, Oct 1 under revised rules) is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What form is used by a citizen to apply for fresh voter registration on the electoral roll?",
    "opts": [
      "Form 6",
      "Form 7",
      "Form 8",
      "Form 16"
    ],
    "ans": 0,
    "exp": "Electoral system principle: Form 6 is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What form is used to object to inclusion or request deletion of a voter name from the roll?",
    "opts": [
      "Form 7",
      "Form 6",
      "Form 8",
      "Form 26"
    ],
    "ans": 0,
    "exp": "Electoral system principle: Form 7 is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What form is used for correction of entries in the electoral roll?",
    "opts": [
      "Form 8",
      "Form 6",
      "Form 7",
      "Form 12"
    ],
    "ans": 0,
    "exp": "Electoral system principle: Form 8 is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What day is celebrated across India every year on January 25 to promote voter awareness?",
    "opts": [
      "National Voters' Day (NVD)",
      "Constitution Day",
      "Republic Day",
      "Independence Day"
    ],
    "ans": 0,
    "exp": "Electoral system principle: National Voters' Day (NVD) is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "Why is January 25 celebrated as National Voters' Day?",
    "opts": [
      "It marks the foundation day of the Election Commission of India (Jan 25, 1950)",
      "First election held on this day",
      "EVM invented on this day",
      "Voting age lowered on this day"
    ],
    "ans": 0,
    "exp": "Electoral system principle: It marks the foundation day of the Election Commission of India (Jan 25, 1950) is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "Who was the Chief Election Commissioner who introduced major electoral reforms and strict MCC enforcement in the 1990s?",
    "opts": [
      "T.N. Seshan (10th CEC)",
      "Sukumar Sen",
      "M.S. Gill",
      "S.Y. Quraishi"
    ],
    "ans": 0,
    "exp": "Electoral system principle: T.N. Seshan (10th CEC) is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What is a constituency where candidates must belong to Scheduled Castes or Scheduled Tribes called?",
    "opts": [
      "Reserved Constituency",
      "General Constituency",
      "Special District",
      "Union Ward"
    ],
    "ans": 0,
    "exp": "Electoral system principle: Reserved Constituency is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "Can voters from all communities vote in a Reserved Constituency?",
    "opts": [
      "Yes, all registered voters in the constituency vote regardless of community",
      "No, only SC/ST citizens can vote",
      "No, only landowners vote",
      "No, only graduates vote"
    ],
    "ans": 0,
    "exp": "Electoral system principle: Yes, all registered voters in the constituency vote regardless of community is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What commission determines the number of reserved SC/ST seats based on census population?",
    "opts": [
      "Delimitation Commission",
      "Finance Commission",
      "Planning Commission",
      "UPSC"
    ],
    "ans": 0,
    "exp": "Electoral system principle: Delimitation Commission is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "How often is general election held for the Lok Sabha under normal constitutional circumstances?",
    "opts": [
      "Every 5 years",
      "Every 4 years",
      "Every 6 years",
      "Every 3 years"
    ],
    "ans": 0,
    "exp": "Electoral system principle: Every 5 years is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "How often is general election held for a State Legislative Assembly?",
    "opts": [
      "Every 5 years",
      "Every 6 years",
      "Every 4 years",
      "Every 2 years"
    ],
    "ans": 0,
    "exp": "Electoral system principle: Every 5 years is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What is the term of office for a Member of the Rajya Sabha?",
    "opts": [
      "6 years (with 1/3rd members retiring every 2 years)",
      "5 years",
      "4 years",
      "Permanent for life"
    ],
    "ans": 0,
    "exp": "Electoral system principle: 6 years (with 1/3rd members retiring every 2 years) is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "Is the Rajya Sabha subject to complete dissolution like the Lok Sabha?",
    "opts": [
      "No, Rajya Sabha is a permanent body not subject to dissolution",
      "Yes, dissolved every 5 years",
      "Yes, dissolved every 6 years",
      "Yes, dissolved by Prime Minister"
    ],
    "ans": 0,
    "exp": "Electoral system principle: No, Rajya Sabha is a permanent body not subject to dissolution is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "Who is the ex-officio Chairman of the Rajya Sabha?",
    "opts": [
      "Vice-President of India",
      "Prime Minister",
      "Speaker of Lok Sabha",
      "Chief Justice"
    ],
    "ans": 0,
    "exp": "Electoral system principle: Vice-President of India is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "Who presides over joint sittings of both Houses of Parliament?",
    "opts": [
      "Speaker of the Lok Sabha",
      "Vice-President",
      "Prime Minister",
      "President"
    ],
    "ans": 0,
    "exp": "Electoral system principle: Speaker of the Lok Sabha is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What proportion of total valid votes must a candidate secure to retain their security deposit?",
    "opts": [
      "At least 1/6th (16.66%) of valid votes",
      "At least 50%",
      "At least 10%",
      "At least 33%"
    ],
    "ans": 0,
    "exp": "Electoral system principle: At least 1/6th (16.66%) of valid votes is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What is the security deposit amount required for a Lok Sabha election candidate currently?",
    "opts": [
      "₹25,000 (₹12,500 for SC/ST)",
      "₹5,000",
      "₹1 Lakh",
      "₹50,000"
    ],
    "ans": 0,
    "exp": "Electoral system principle: ₹25,000 (₹12,500 for SC/ST) is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What is the security deposit amount for an Assembly election candidate currently?",
    "opts": [
      "₹10,000 (₹5,000 for SC/ST)",
      "₹25,000",
      "₹2,000",
      "₹50,000"
    ],
    "ans": 0,
    "exp": "Electoral system principle: ₹10,000 (₹5,000 for SC/ST) is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What official leads poll counting operations in a constituency on counting day?",
    "opts": [
      "Returning Officer (RO)",
      "Presiding Officer",
      "Police Chief",
      "Governor"
    ],
    "ans": 0,
    "exp": "Electoral system principle: Returning Officer (RO) is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What technology allows citizens to check their name on the voter list online?",
    "opts": [
      "ECI Voter Service Portal (voters.eci.gov.in) / Voter Helpline App",
      "BHIM App",
      "Ration Portal",
      "IRCTC"
    ],
    "ans": 0,
    "exp": "Electoral system principle: ECI Voter Service Portal (voters.eci.gov.in) / Voter Helpline App is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What is the color of ballot papers used for Lok Sabha elections when paper ballots were used?",
    "opts": [
      "White ballot paper",
      "Pink ballot paper",
      "Green ballot paper",
      "Yellow ballot paper"
    ],
    "ans": 0,
    "exp": "Electoral system principle: White ballot paper is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What was the color of ballot papers used for State Assembly elections historically?",
    "opts": [
      "Pink ballot paper",
      "White ballot paper",
      "Blue ballot paper",
      "Red ballot paper"
    ],
    "ans": 0,
    "exp": "Electoral system principle: Pink ballot paper is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What feature on VVPAT slip confirms that the printed vote matches the candidate selected?",
    "opts": [
      "Candidate Serial Number, Name, and Party Symbol printed on slip",
      "Only a barcode",
      "Only total count",
      "Voter's name and address"
    ],
    "ans": 0,
    "exp": "Electoral system principle: Candidate Serial Number, Name, and Party Symbol printed on slip is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "Does the VVPAT paper slip display the voter's personal name or Aadhaar number?",
    "opts": [
      "No, VVPAT slips contain NO voter personal identity to preserve secret ballot",
      "Yes, prints voter name",
      "Yes, prints voter photo",
      "Yes, prints phone number"
    ],
    "ans": 0,
    "exp": "Electoral system principle: No, VVPAT slips contain NO voter personal identity to preserve secret ballot is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "How many randomly selected polling stations per assembly constituency undergo mandatory physical VVPAT paper tally counting?",
    "opts": [
      "5 polling stations per assembly segment",
      "1 polling station",
      "All 100% polling stations",
      "Zero polling stations"
    ],
    "ans": 0,
    "exp": "Electoral system principle: 5 polling stations per assembly segment is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What is the total number of elected constituencies in the Lok Sabha?",
    "opts": [
      "543 constituencies",
      "500 constituencies",
      "552 constituencies",
      "245 constituencies"
    ],
    "ans": 0,
    "exp": "Electoral system principle: 543 constituencies is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "Prior to 2020, how many Anglo-Indian members could be nominated to Lok Sabha by the President?",
    "opts": [
      "2 members (abolished by 104th Amendment Act 2019)",
      "5 members",
      "10 members",
      "1 member"
    ],
    "ans": 0,
    "exp": "Electoral system principle: 2 members (abolished by 104th Amendment Act 2019) is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "Which Constitutional Amendment Act abolished nominated Anglo-Indian seats in Lok Sabha and Assemblies?",
    "opts": [
      "104th Constitutional Amendment Act, 2019",
      "42nd Amendment",
      "61st Amendment",
      "106th Amendment"
    ],
    "ans": 0,
    "exp": "Electoral system principle: 104th Constitutional Amendment Act, 2019 is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What is the system where voters rank candidates in order of preference (1st choice, 2nd choice)?",
    "opts": [
      "Proportional Representation with Single Transferable Vote (PR-STV)",
      "First-Past-The-Post",
      "Simple Plurality",
      "Block Voting"
    ],
    "ans": 0,
    "exp": "Electoral system principle: Proportional Representation with Single Transferable Vote (PR-STV) is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "Which high office in India is elected using the PR-STV voting system?",
    "opts": [
      "President of India / Vice-President / Rajya Sabha MPs",
      "Lok Sabha MPs",
      "State Assembly MLAs",
      "Panchayat Sarpanch"
    ],
    "ans": 0,
    "exp": "Electoral system principle: President of India / Vice-President / Rajya Sabha MPs is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "Who elects the President of India?",
    "opts": [
      "An Electoral College comprising elected MPs of both Houses and elected MLAs of State Assemblies",
      "Direct voting by all citizens",
      "Prime Minister alone",
      "Supreme Court judges"
    ],
    "ans": 0,
    "exp": "Electoral system principle: An Electoral College comprising elected MPs of both Houses and elected MLAs of State Assemblies is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "Are nominated members of Parliament eligible to vote in Presidential elections?",
    "opts": [
      "No, nominated members cannot vote in Presidential elections",
      "Yes, all nominated members vote",
      "Yes, only Rajya Sabha nominated members vote",
      "Yes, only if invited"
    ],
    "ans": 0,
    "exp": "Electoral system principle: No, nominated members cannot vote in Presidential elections is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "Who elects the Vice-President of India?",
    "opts": [
      "Electoral College comprising ALL members (elected + nominated) of both Houses of Parliament",
      "Direct citizen vote",
      "State MLAs only",
      "Governors only"
    ],
    "ans": 0,
    "exp": "Electoral system principle: Electoral College comprising ALL members (elected + nominated) of both Houses of Parliament is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What is the term for a candidate who wins an election because they got more votes than any other candidate, even if below 50%?",
    "opts": [
      "First-Past-The-Post Winner / Plurality Winner",
      "Absolute Majority Winner",
      "Proportional Representative",
      "Consensus Appointee"
    ],
    "ans": 0,
    "exp": "Electoral system principle: First-Past-The-Post Winner / Plurality Winner is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What document is issued by the Returning Officer to the winning candidate after counting?",
    "opts": [
      "Certificate of Election (Form 22)",
      "Identity Card",
      "Voter Slip",
      "Passport"
    ],
    "ans": 0,
    "exp": "Electoral system principle: Certificate of Election (Form 22) is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What is the maximum time gap allowed between two sessions of Parliament under the Constitution?",
    "opts": [
      "6 months",
      "3 months",
      "1 year",
      "1 month"
    ],
    "ans": 0,
    "exp": "Electoral system principle: 6 months is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "Who summons and prorogues sessions of Parliament?",
    "opts": [
      "President of India",
      "Prime Minister",
      "Speaker",
      "Chief Justice"
    ],
    "ans": 0,
    "exp": "Electoral system principle: President of India is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What is the minimum quorum required to hold a sitting of Lok Sabha or Rajya Sabha?",
    "opts": [
      "1/10th (10%) of the total members of the House",
      "50% of members",
      "2/3rd of members",
      "1 member"
    ],
    "ans": 0,
    "exp": "Electoral system principle: 1/10th (10%) of the total members of the House is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What is the Silence Period duration prior to the close of poll?",
    "opts": [
      "48 hours",
      "24 hours",
      "12 hours",
      "72 hours"
    ],
    "ans": 0,
    "exp": "Electoral system principle: 48 hours is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "Can political exit polls be broadcast on television while voting is ongoing in any phase of election?",
    "opts": [
      "No, exit polls are legally prohibited until voting closes in all phases",
      "Yes, exit polls run anytime",
      "Yes, only on radio",
      "Yes, only after 12 PM"
    ],
    "ans": 0,
    "exp": "Electoral system principle: No, exit polls are legally prohibited until voting closes in all phases is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "Which section of the Representation of the People Act 1951 bans exit polls during multi-phase elections?",
    "opts": [
      "Section 126A",
      "Section 144",
      "Section 370",
      "Section 66"
    ],
    "ans": 0,
    "exp": "Electoral system principle: Section 126A is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What mobile app allows citizens to check polling station location and officer details?",
    "opts": [
      "Voter Helpline App (VHA)",
      "cVIGIL",
      "DigiLocker",
      "Aadhaar App"
    ],
    "ans": 0,
    "exp": "Electoral system principle: Voter Helpline App (VHA) is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What is an election manifesto?",
    "opts": [
      "A formal statement of party policies, programs, and promises published for voters",
      "A financial tax return",
      "A court judgment",
      "A police code"
    ],
    "ans": 0,
    "exp": "Electoral system principle: A formal statement of party policies, programs, and promises published for voters is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What is the main democratic purpose of free and fair elections?",
    "opts": [
      "Ensuring citizens choose their government peacefully and hold leaders accountable",
      "Increasing government revenue",
      "Testing electronic machines",
      "Creating public holidays"
    ],
    "ans": 0,
    "exp": "Electoral system principle: Ensuring citizens choose their government peacefully and hold leaders accountable is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What color paper is used for printing VVPAT slips?",
    "opts": [
      "White paper with black thermal printing",
      "Pink paper",
      "Green paper",
      "Yellow paper"
    ],
    "ans": 0,
    "exp": "Electoral system principle: White paper with black thermal printing is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "Where are VVPAT paper slips stored after counting?",
    "opts": [
      "Sealed trunk boxes in secure government treasuries for 1 year",
      "Recycled immediately",
      "Buried in soil",
      "Returned to voters"
    ],
    "ans": 0,
    "exp": "Electoral system principle: Sealed trunk boxes in secure government treasuries for 1 year is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "Which constitutional body conducts elections for President and Vice-President of India?",
    "opts": [
      "Election Commission of India (ECI)",
      "Supreme Court",
      "UPSC",
      "Parliament Secretariat"
    ],
    "ans": 0,
    "exp": "Electoral system principle: Election Commission of India (ECI) is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "Who handles disputes arising out of Presidential or Vice-Presidential elections?",
    "opts": [
      "Supreme Court of India (Exclusive Jurisdiction under Article 71)",
      "Election Commission",
      "Delhi High Court",
      "Parliament"
    ],
    "ans": 0,
    "exp": "Electoral system principle: Supreme Court of India (Exclusive Jurisdiction under Article 71) is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What is the role of an Election Observer appointed by the ECI?",
    "opts": [
      "Monitoring campaign spending, law and order, and fair poll process independently",
      "Counting votes manually",
      "Filing nomination forms",
      "Driving EVM trucks"
    ],
    "ans": 0,
    "exp": "Electoral system principle: Monitoring campaign spending, law and order, and fair poll process independently is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What is Micro-Observer during polling day?",
    "opts": [
      "Central government officer deployed inside sensitive polling booths to observe fairness",
      "A small camera",
      "A local constable",
      "A candidate representative"
    ],
    "ans": 0,
    "exp": "Electoral system principle: Central government officer deployed inside sensitive polling booths to observe fairness is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What is a Polling Agent?",
    "opts": [
      "A representative appointed by a candidate to sit inside the polling station and verify voter identity",
      "An ECI officer",
      "A police inspector",
      "A government clerk"
    ],
    "ans": 0,
    "exp": "Electoral system principle: A representative appointed by a candidate to sit inside the polling station and verify voter identity is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What is a Counting Agent?",
    "opts": [
      "A representative appointed by a candidate to watch the vote counting process inside counting centers",
      "An EVM technician",
      "A judge",
      "A bank manager"
    ],
    "ans": 0,
    "exp": "Electoral system principle: A representative appointed by a candidate to watch the vote counting process inside counting centers is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What happens if two candidates receive an EXACT equal number of votes (a tie)?",
    "opts": [
      "The Returning Officer decides the winner by drawing lots (a draw)",
      "Election is cancelled forever",
      "Both become MPs",
      "Re-election held after 5 years"
    ],
    "ans": 0,
    "exp": "Electoral system principle: The Returning Officer decides the winner by drawing lots (a draw) is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "Under what section of Representation of the People Act 1951 is a tie resolved by drawing lots?",
    "opts": [
      "Section 102",
      "Section 126",
      "Section 324",
      "Section 14"
    ],
    "ans": 0,
    "exp": "Electoral system principle: Section 102 is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What is the role of Media Center set up by ECI during elections?",
    "opts": [
      "Providing official real-time updates and results to news journalists",
      "Printing newspapers",
      "Broadcasting movies",
      "Selling tickets"
    ],
    "ans": 0,
    "exp": "Electoral system principle: Providing official real-time updates and results to news journalists is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What is Model Code of Conduct enforced by ECI?",
    "opts": [
      "A set of consensus guidelines agreed by political parties to ensure ethical campaigning",
      "A criminal law passed by Parliament",
      "A police handbook",
      "A tax manual"
    ],
    "ans": 0,
    "exp": "Electoral system principle: A set of consensus guidelines agreed by political parties to ensure ethical campaigning is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "Can government ministers launch new infrastructure schemes or inaugurate projects after election dates are announced?",
    "opts": [
      "No, the Model Code of Conduct forbids launching new government projects after election announcement",
      "Yes, ministers can launch projects anytime",
      "Yes, only on weekends",
      "Yes, if approved by Governor"
    ],
    "ans": 0,
    "exp": "Electoral system principle: No, the Model Code of Conduct forbids launching new government projects after election announcement is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What is the primary virtue of Universal Adult Franchise in a constitutional democracy?",
    "opts": [
      "Establishing absolute political equality where every citizen's vote carries equal weight",
      "Restricting power to wealthy citizens",
      "Giving extra votes to graduates",
      "Excluding rural voters"
    ],
    "ans": 0,
    "exp": "Electoral system principle: Establishing absolute political equality where every citizen's vote carries equal weight is the correct answer."
  },
  {
    "topic": "Electoral System",
    "q": "What feature on EVMs prevents double voting by a voter in the same election?",
    "opts": [
      "Indelible ink application on forefinger & voter list tick mark",
      "Fingerprint scanner lock",
      "Iris scan verification",
      "Facial recognition camera"
    ],
    "ans": 0,
    "exp": "Electoral system principle: Indelible ink application on forefinger & voter list tick mark is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What are the four fundamental Factors of Production in economics?",
    "opts": [
      "Land, Labour, Capital, Entrepreneurship",
      "Soil, Water, Air, Fire",
      "Money, Banks, Shares, Loans",
      "Raw Materials, Transport, Sales, Profit"
    ],
    "ans": 0,
    "exp": "The four factors of production are Land, Labour, Capital, and Entrepreneurship."
  },
  {
    "topic": "Factors of Production",
    "q": "What is the primary economic income/reward earned by Land?",
    "opts": [
      "Rent",
      "Wages",
      "Interest",
      "Profit"
    ],
    "ans": 0,
    "exp": "Land earns Rent as its primary economic reward."
  },
  {
    "topic": "Factors of Production",
    "q": "What is the primary economic reward earned by Labour?",
    "opts": [
      "Wages / Salary",
      "Rent",
      "Interest",
      "Profit"
    ],
    "ans": 0,
    "exp": "Labour earns Wages or Salary for human effort expended."
  },
  {
    "topic": "Factors of Production",
    "q": "What is the primary economic reward earned by Capital?",
    "opts": [
      "Interest",
      "Rent",
      "Wages",
      "Profit"
    ],
    "ans": 0,
    "exp": "Capital assets earn Interest as their economic return."
  },
  {
    "topic": "Factors of Production",
    "q": "What is the primary economic reward earned by Entrepreneurship?",
    "opts": [
      "Profit",
      "Rent",
      "Wages",
      "Interest"
    ],
    "ans": 0,
    "exp": "Entrepreneurship earns Profit in exchange for risk-taking and organization."
  },
  {
    "topic": "Factors of Production",
    "q": "Assets like machinery, factory buildings, and tractors used repeatedly over years are classified as:",
    "opts": [
      "Fixed Capital",
      "Working Capital",
      "Human Capital",
      "Financial Capital"
    ],
    "ans": 0,
    "exp": "Fixed Capital consists of durable long-term assets used across multiple production cycles."
  },
  {
    "topic": "Factors of Production",
    "q": "Raw materials, seeds, fuel, and daily wage cash consumed during a single production cycle are:",
    "opts": [
      "Working Capital",
      "Fixed Capital",
      "Human Capital",
      "Social Capital"
    ],
    "ans": 0,
    "exp": "Working Capital gets consumed or transformed during a single production cycle."
  },
  {
    "topic": "Factors of Production",
    "q": "The accumulated knowledge, skills, health, and expertise in a workforce is called:",
    "opts": [
      "Human Capital",
      "Fixed Capital",
      "Financial Capital",
      "Natural Capital"
    ],
    "ans": 0,
    "exp": "Human Capital represents the skill, education, and health embodied in people."
  },
  {
    "topic": "Factors of Production",
    "q": "Which Japanese business philosophy focuses on continuous workplace improvement?",
    "opts": [
      "Kaizen",
      "Ikigai",
      "Kanban",
      "Origami"
    ],
    "ans": 0,
    "exp": "Kaizen is the Japanese philosophy of continuous, incremental productivity improvement."
  },
  {
    "topic": "Factors of Production",
    "q": "The economic potential when working-age population (15-64) exceeds dependents is:",
    "opts": [
      "Demographic Dividend",
      "Population Explosion",
      "Capital Accumulation",
      "Inflation Deficit"
    ],
    "ans": 0,
    "exp": "Demographic Dividend occurs when the working-age ratio is higher than dependent children/elderly."
  },
  {
    "topic": "Factors of Production",
    "q": "What is the age range defined for the working-age population in demographic studies?",
    "opts": [
      "15 to 64 years",
      "18 to 60 years",
      "21 to 65 years",
      "0 to 50 years"
    ],
    "ans": 0,
    "exp": "The working-age population is defined as individuals between 15 and 64 years old."
  },
  {
    "topic": "Factors of Production",
    "q": "What is India's approximate median age, reflecting its young workforce advantage?",
    "opts": [
      "~28 years",
      "38 years",
      "48 years",
      "20 years"
    ],
    "ans": 0,
    "exp": "India's median age is approximately 28 years, offering a major demographic advantage."
  },
  {
    "topic": "Factors of Production",
    "q": "Who was the visionary entrepreneur who pioneered civil aviation in India (Tata Airlines)?",
    "opts": [
      "J.R.D. Tata",
      "G.D. Birla",
      "Dhirubhai Ambani",
      "Jamsetji Tata"
    ],
    "ans": 0,
    "exp": "J.R.D. Tata founded Tata Airlines in 1932 (later Air India) and led Tata Group."
  },
  {
    "topic": "Factors of Production",
    "q": "The full sequence of processes from raw resource extraction to final customer sale is a:",
    "opts": [
      "Supply Chain",
      "Production Line",
      "Banking System",
      "Trade Deficit"
    ],
    "ans": 0,
    "exp": "A Supply Chain encompasses extraction, processing, manufacturing, logistics, and retail distribution."
  },
  {
    "topic": "Factors of Production",
    "q": "Which type of labour involves muscular effort and physical stamina primarily?",
    "opts": [
      "Physical (Manual) Labour",
      "Mental Labour",
      "Human Capital",
      "Entrepreneurship"
    ],
    "ans": 0,
    "exp": "Physical labour relies primarily on manual strength and physical exertion."
  },
  {
    "topic": "Factors of Production",
    "q": "Which type of labour involves cognitive analysis, knowledge, and problem-solving?",
    "opts": [
      "Mental (Intellectual) Labour",
      "Physical Labour",
      "Unskilled Labour",
      "Raw Land"
    ],
    "ans": 0,
    "exp": "Mental labour relies on cognitive intelligence, specialized education, and analysis."
  },
  {
    "topic": "Factors of Production",
    "q": "Why is Labour described as a perishable economic factor?",
    "opts": [
      "Unworked labour time is lost forever",
      "Workers get tired easily",
      "Labour changes every day",
      "Wages fluctuate"
    ],
    "ans": 0,
    "exp": "Labour cannot be stored; if a worker is unemployed today, today's labour capacity is lost forever."
  },
  {
    "topic": "Factors of Production",
    "q": "Why is Land geographically immobile?",
    "opts": [
      "Land plots cannot be physically moved from one location to another",
      "Land soil changes color",
      "Land has fixed price",
      "Land belongs to state"
    ],
    "ans": 0,
    "exp": "Land cannot be transported physically from one geographical location to another."
  },
  {
    "topic": "Factors of Production",
    "q": "Young innovative companies designed to scale rapidly with new business models are:",
    "opts": [
      "Startups",
      "Public Utilities",
      "Monopolies",
      "Cooperatives"
    ],
    "ans": 0,
    "exp": "Startups are agile young ventures introducing innovative solutions to markets."
  },
  {
    "topic": "Factors of Production",
    "q": "Is Technology classified as a separate 5th factor of production in classical economics?",
    "opts": [
      "No, it is an enabler enhancing all 4 factors",
      "Yes, it is the 5th factor",
      "No, it belongs only to land",
      "Yes, it replaces labour"
    ],
    "ans": 0,
    "exp": "Technology is an enabler that boosts the productivity of Land, Labour, Capital, and Entrepreneurship."
  },
  {
    "topic": "Factors of Production",
    "q": "What major government initiative aims to train millions of Indian youth in vocational skills?",
    "opts": [
      "Skill India",
      "Digital India",
      "Make in India",
      "Swachh Bharat"
    ],
    "ans": 0,
    "exp": "Skill India builds technical vocational capabilities in the workforce."
  },
  {
    "topic": "Factors of Production",
    "q": "How does healthcare expenditure function as an economic investment?",
    "opts": [
      "Improves worker stamina, attendance, and long-term productivity",
      "Consumes government money without return",
      "Only helps hospital owners",
      "Reduces birth rate"
    ],
    "ans": 0,
    "exp": "Healthy workers lose fewer working days and maintain high physical and mental output."
  },
  {
    "topic": "Factors of Production",
    "q": "What stage of a supply chain involves extracting cocoa pods or mining bauxite ore?",
    "opts": [
      "Upstream (Raw Extraction)",
      "Downstream (Retail)",
      "Logistics Marketing",
      "Customer Service"
    ],
    "ans": 0,
    "exp": "Upstream stages extract raw natural resources and produce basic components."
  },
  {
    "topic": "Factors of Production",
    "q": "What stage of a supply chain involves selling packaged goods in local kirana stores?",
    "opts": [
      "Downstream (Retail Distribution)",
      "Upstream Extraction",
      "Smelting",
      "Refining"
    ],
    "ans": 0,
    "exp": "Downstream stages distribute and sell finished commodities to end consumers."
  },
  {
    "topic": "Factors of Production",
    "q": "Which economist emphasized the entrepreneur as an 'innovator' introducing new tech?",
    "opts": [
      "Joseph Schumpeter",
      "Adam Smith",
      "Karl Marx",
      "John Maynard Keynes"
    ],
    "ans": 0,
    "exp": "Schumpeter highlighted innovation as the core function of entrepreneurship."
  },
  {
    "topic": "Factors of Production",
    "q": "What is the primary characteristic of Land as a factor of production?",
    "opts": [
      "Fixed & Limited in Natural Supply",
      "Easily relocatable geographically",
      "Man-made asset",
      "Perishable input"
    ],
    "ans": 0,
    "exp": "Production factor detail: Fixed & Limited in Natural Supply is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "Why is Labour inseparable from the labourer?",
    "opts": [
      "Worker must be present to exert physical or mental effort",
      "Wages are paid in cash",
      "Labour is owned by machines",
      "Labour is fixed"
    ],
    "ans": 0,
    "exp": "Production factor detail: Worker must be present to exert physical or mental effort is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What type of capital asset is a farmer's tractor?",
    "opts": [
      "Fixed Capital",
      "Working Capital",
      "Human Capital",
      "Natural Land"
    ],
    "ans": 0,
    "exp": "Production factor detail: Fixed Capital is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What type of capital asset is cotton yarn in a textile mill?",
    "opts": [
      "Working Capital",
      "Fixed Capital",
      "Human Capital",
      "Natural Land"
    ],
    "ans": 0,
    "exp": "Production factor detail: Working Capital is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What is the main economic risk assumed by an entrepreneur?",
    "opts": [
      "Financial loss if production costs exceed sales revenue",
      "Losing physical health",
      "Paying worker wages",
      "Buying machinery"
    ],
    "ans": 0,
    "exp": "Production factor detail: Financial loss if production costs exceed sales revenue is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What philosophy compounds tiny daily workplace improvements into massive quality gains?",
    "opts": [
      "Japanese Kaizen Philosophy",
      "Laissez-faire Capitalism",
      "Feudal System",
      "Mercantilism"
    ],
    "ans": 0,
    "exp": "Production factor detail: Japanese Kaizen Philosophy is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What economic metric measures total production output divided by worker hours?",
    "opts": [
      "Labour Productivity",
      "Inflation Rate",
      "Bank Interest Rate",
      "Import Tariff"
    ],
    "ans": 0,
    "exp": "Production factor detail: Labour Productivity is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "How does education enhance Human Capital?",
    "opts": [
      "Develops scientific problem-solving & technical skills",
      "Increases physical height",
      "Eliminates need for capital",
      "Reduces land value"
    ],
    "ans": 0,
    "exp": "Production factor detail: Develops scientific problem-solving & technical skills is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What type of labour does a civil engineer designing a bridge perform?",
    "opts": [
      "Mental (Intellectual) Labour",
      "Physical Manual Labour",
      "Unskilled Labour",
      "Raw Natural Input"
    ],
    "ans": 0,
    "exp": "Production factor detail: Mental (Intellectual) Labour is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What type of labour does a construction worker hauling bricks perform?",
    "opts": [
      "Physical (Manual) Labour",
      "Mental Intellectual Labour",
      "Financial Capital",
      "Entrepreneurship"
    ],
    "ans": 0,
    "exp": "Production factor detail: Physical (Manual) Labour is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "Why is Entrepreneurship called the 'organizing factor'?",
    "opts": [
      "Combines land, labour, and capital into a functioning business",
      "Owns all natural rivers",
      "Pays government taxes",
      "Exports raw materials"
    ],
    "ans": 0,
    "exp": "Production factor detail: Combines land, labour, and capital into a functioning business is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What is the effect of automation on manufacturing assembly lines?",
    "opts": [
      "Increases output speed & precision while altering labour skills required",
      "Stops all production",
      "Increases physical fatigue",
      "Eliminates electricity use"
    ],
    "ans": 0,
    "exp": "Production factor detail: Increases output speed & precision while altering labour skills required is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What is Artificial Intelligence (AI) in modern production systems?",
    "opts": [
      "Computer software analyzing data, diagnosing issues, and driving robotics",
      "A type of physical soil",
      "A manual hand tool",
      "A cash banknote"
    ],
    "ans": 0,
    "exp": "Production factor detail: Computer software analyzing data, diagnosing issues, and driving robotics is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What happens to a nation's economy when its working-age population is educated and employed?",
    "opts": [
      "Economic output and per capita income rise rapidly (Demographic Dividend)",
      "Economy collapses",
      "Inflation stops completely",
      "No impact"
    ],
    "ans": 0,
    "exp": "Production factor detail: Economic output and per capita income rise rapidly (Demographic Dividend) is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "Which of the following is a physical fixed capital asset in a bakery?",
    "opts": [
      "Commercial Baking Oven",
      "Baking Powder",
      "Wheat Flour",
      "Daily Worker Cash"
    ],
    "ans": 0,
    "exp": "Production factor detail: Commercial Baking Oven is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "Which of the following is working capital in a bakery?",
    "opts": [
      "Wheat flour and sugar",
      "Baking oven",
      "Delivery van vehicle",
      "Bakery building"
    ],
    "ans": 0,
    "exp": "Production factor detail: Wheat flour and sugar is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What is financial capital?",
    "opts": [
      "Monetary funds, cash, and credit used to purchase physical capital assets",
      "Factory machinery",
      "Worker health",
      "Natural minerals"
    ],
    "ans": 0,
    "exp": "Production factor detail: Monetary funds, cash, and credit used to purchase physical capital assets is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What is the primary incentive driving entrepreneurship in market economies?",
    "opts": [
      "Profit & Societal Value Creation",
      "Paying rent",
      "Earning daily wages",
      "Filing taxes"
    ],
    "ans": 0,
    "exp": "Production factor detail: Profit & Societal Value Creation is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "Why can't Land produce goods by itself without Labour and Capital?",
    "opts": [
      "Land is a passive factor of production requiring human action",
      "Land is too expensive",
      "Land is liquid",
      "Land is man-made"
    ],
    "ans": 0,
    "exp": "Production factor detail: Land is a passive factor of production requiring human action is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What term describes sustainable manufacturing that minimizes carbon emissions and waste?",
    "opts": [
      "Sustainable / Green Production",
      "Resource Depletion",
      "Industrial Waste Dumping",
      "Deforestation"
    ],
    "ans": 0,
    "exp": "Production factor detail: Sustainable / Green Production is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What is the dependency ratio formula in population economics?",
    "opts": [
      "(Dependents <15 & >65 / Working-age 15-64) * 100",
      "(Total Pop / Total Land Area)",
      "(Exports / Imports) * 100",
      "(Wages / Rent)"
    ],
    "ans": 0,
    "exp": "Production factor detail: (Dependents <15 & >65 / Working-age 15-64) * 100 is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What role do Industrial Training Institutes (ITIs) play in human capital?",
    "opts": [
      "Imparting practical technical skills to young workers",
      "Issuing voter ID cards",
      "Conducting elections",
      "Mining iron ore"
    ],
    "ans": 0,
    "exp": "Production factor detail: Imparting practical technical skills to young workers is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What is an example of an upstream supply chain disruption?",
    "opts": [
      "Shortage of raw cocoa beans due to drought",
      "Supermarket store closing",
      "TV ad cancellation",
      "Customer changing preference"
    ],
    "ans": 0,
    "exp": "Production factor detail: Shortage of raw cocoa beans due to drought is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What is the fundamental goal of economic production?",
    "opts": [
      "Transforming resources to satisfy human needs and create economic value",
      "Depleting natural wealth",
      "Increasing paperwork",
      "Stopping trade"
    ],
    "ans": 0,
    "exp": "Production factor detail: Transforming resources to satisfy human needs and create economic value is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "Which factor of production receives Rent as compensation?",
    "opts": [
      "Land",
      "Labour",
      "Capital",
      "Entrepreneurship"
    ],
    "ans": 0,
    "exp": "Production factor detail: Land is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "Which factor of production receives Wages or Salary as compensation?",
    "opts": [
      "Labour",
      "Land",
      "Capital",
      "Entrepreneurship"
    ],
    "ans": 0,
    "exp": "Production factor detail: Labour is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "Which factor of production receives Interest as compensation?",
    "opts": [
      "Capital",
      "Land",
      "Labour",
      "Entrepreneurship"
    ],
    "ans": 0,
    "exp": "Production factor detail: Capital is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "Which factor of production receives Profit as compensation?",
    "opts": [
      "Entrepreneurship",
      "Land",
      "Labour",
      "Capital"
    ],
    "ans": 0,
    "exp": "Production factor detail: Entrepreneurship is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "Who was the pioneering Indian industrialist who established Tata Steel in Jamshedpur?",
    "opts": [
      "Jamsetji Tata",
      "J.R.D. Tata",
      "G.D. Birla",
      "Dhirubhai Ambani"
    ],
    "ans": 0,
    "exp": "Production factor detail: Jamsetji Tata is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "Who was the founder of Reliance Industries who revolutionized Indian textile and petrochemical industries?",
    "opts": [
      "Dhirubhai Ambani",
      "Jamsetji Tata",
      "Azim Premji",
      "Narayana Murthy"
    ],
    "ans": 0,
    "exp": "Production factor detail: Dhirubhai Ambani is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "Which factor of production is a passive gift of nature?",
    "opts": [
      "Land",
      "Labour",
      "Entrepreneurship",
      "Working Capital"
    ],
    "ans": 0,
    "exp": "Production factor detail: Land is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "Which factor of production is an active human effort?",
    "opts": [
      "Labour",
      "Land",
      "Fixed Capital",
      "Raw Material"
    ],
    "ans": 0,
    "exp": "Production factor detail: Labour is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "Why is Land fixed in supply for society as a whole?",
    "opts": [
      "Earth's total geographical surface area cannot be increased by humans",
      "Land can be manufactured in factories",
      "Land shrinks every day",
      "Land expands with rainfall"
    ],
    "ans": 0,
    "exp": "Production factor detail: Earth's total geographical surface area cannot be increased by humans is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What is the term for physical machinery and tools used in manufacturing?",
    "opts": [
      "Physical / Fixed Capital",
      "Working Capital",
      "Human Capital",
      "Social Capital"
    ],
    "ans": 0,
    "exp": "Production factor detail: Physical / Fixed Capital is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What is the term for cash reserves kept by a firm to pay daily wages and electricity bills?",
    "opts": [
      "Working Capital",
      "Fixed Capital",
      "Human Capital",
      "Natural Land"
    ],
    "ans": 0,
    "exp": "Production factor detail: Working Capital is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What is Human Capital Formation?",
    "opts": [
      "Investing in education, skill training, and healthcare to enhance worker productivity",
      "Buying new factory buildings",
      "Printing cash banknotes",
      "Mining coal deposits"
    ],
    "ans": 0,
    "exp": "Production factor detail: Investing in education, skill training, and healthcare to enhance worker productivity is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What term describes the shift of workers from agricultural farming to industrial factories?",
    "opts": [
      "Occupational Mobility of Labour",
      "Geographical Immobility",
      "Capital Depreciation",
      "Land Rent"
    ],
    "ans": 0,
    "exp": "Production factor detail: Occupational Mobility of Labour is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What is geographical mobility of labour?",
    "opts": [
      "The ability of workers to move from one city or state to another for employment",
      "Workers changing jobs within the same building",
      "Machines moving on wheels",
      "Farmland moving across rivers"
    ],
    "ans": 0,
    "exp": "Production factor detail: The ability of workers to move from one city or state to another for employment is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "Why is raw human physical effort alone insufficient for modern economic development?",
    "opts": [
      "Modern industry requires specialized technical skills, education, and health (Human Capital)",
      "Raw labour is too expensive",
      "Raw labour never tires",
      "Machines do not need human control"
    ],
    "ans": 0,
    "exp": "Production factor detail: Modern industry requires specialized technical skills, education, and health (Human Capital) is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What is the impact of quality healthcare on workforce productivity?",
    "opts": [
      "Reduces absenteeism, increases physical stamina, and extends working life",
      "Increases sickness",
      "Reduces GDP",
      "Stops technical innovation"
    ],
    "ans": 0,
    "exp": "Production factor detail: Reduces absenteeism, increases physical stamina, and extends working life is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What is the role of an Entrepreneur in an economic supply chain?",
    "opts": [
      "Organizing factors, securing capital, taking risks, and managing production to market",
      "Working as a manual porter",
      "Renting out land plots",
      "Filing tax forms only"
    ],
    "ans": 0,
    "exp": "Production factor detail: Organizing factors, securing capital, taking risks, and managing production to market is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "Which economist described 'Creative Destruction' where entrepreneurs introduce new technologies that replace old methods?",
    "opts": [
      "Joseph Schumpeter",
      "Adam Smith",
      "David Ricardo",
      "Thomas Malthus"
    ],
    "ans": 0,
    "exp": "Production factor detail: Joseph Schumpeter is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What is an example of an upstream stage in chocolate manufacturing?",
    "opts": [
      "Cocoa bean farming and harvesting",
      "Packaging chocolate bars",
      "TV advertising",
      "Selling in kirana stores"
    ],
    "ans": 0,
    "exp": "Production factor detail: Cocoa bean farming and harvesting is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What is an example of a downstream stage in chocolate manufacturing?",
    "opts": [
      "Distributing finished chocolate bars to retail grocery stores",
      "Roasting raw cocoa beans",
      "Fermenting cocoa pods",
      "Milking dairy cows"
    ],
    "ans": 0,
    "exp": "Production factor detail: Distributing finished chocolate bars to retail grocery stores is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What is a supply chain bottleneck?",
    "opts": [
      "A point of congestion or delay that slows down the entire production flow",
      "A glass milk bottle",
      "A marketing campaign",
      "A bank loan"
    ],
    "ans": 0,
    "exp": "Production factor detail: A point of congestion or delay that slows down the entire production flow is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What caused major global supply chain disruptions during 2020-2021?",
    "opts": [
      "COVID-19 pandemic lockdowns and port congestion",
      "Excess supply of ships",
      "Zero demand for goods",
      "Lower fuel prices"
    ],
    "ans": 0,
    "exp": "Production factor detail: COVID-19 pandemic lockdowns and port congestion is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What is Kaizen in manufacturing management?",
    "opts": [
      "Continuous small incremental daily workplace improvements",
      "Replacing all workers with robots overnight",
      "Closing factories on weekends",
      "Increasing worker hours without break"
    ],
    "ans": 0,
    "exp": "Production factor detail: Continuous small incremental daily workplace improvements is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "Which country originated the Kaizen management philosophy?",
    "opts": [
      "Japan",
      "USA",
      "Germany",
      "China"
    ],
    "ans": 0,
    "exp": "Production factor detail: Japan is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What metric measures economic output produced per worker hour?",
    "opts": [
      "Labour Productivity",
      "Inflation Index",
      "Tariff Rate",
      "Interest Rate"
    ],
    "ans": 0,
    "exp": "Production factor detail: Labour Productivity is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "How does automation affect assembly line manufacturing?",
    "opts": [
      "Increases production speed, precision, and safety while shifting skill requirements",
      "Stops factory output",
      "Increases physical worker fatigue",
      "Requires no electricity"
    ],
    "ans": 0,
    "exp": "Production factor detail: Increases production speed, precision, and safety while shifting skill requirements is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What technology uses software algorithms to analyze data and automate complex tasks?",
    "opts": [
      "Artificial Intelligence (AI)",
      "Manual Typewriter",
      "Hand Loom",
      "Water Wheel"
    ],
    "ans": 0,
    "exp": "Production factor detail: Artificial Intelligence (AI) is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "Which sector of the economy includes agriculture, forestry, fishing, and mining?",
    "opts": [
      "Primary Sector",
      "Secondary Sector",
      "Tertiary Sector",
      "Quaternary Sector"
    ],
    "ans": 0,
    "exp": "Production factor detail: Primary Sector is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "Which sector of the economy includes manufacturing factories and industrial processing?",
    "opts": [
      "Secondary Sector",
      "Primary Sector",
      "Tertiary Sector",
      "Quaternary Sector"
    ],
    "ans": 0,
    "exp": "Production factor detail: Secondary Sector is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "Which sector of the economy includes services like banking, transport, trade, and education?",
    "opts": [
      "Tertiary Sector",
      "Primary Sector",
      "Secondary Sector",
      "Quaternary Sector"
    ],
    "ans": 0,
    "exp": "Production factor detail: Tertiary Sector is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "Which sector includes knowledge-based services, research, IT, and software development?",
    "opts": [
      "Quaternary Sector",
      "Primary Sector",
      "Secondary Sector",
      "Raw Material Sector"
    ],
    "ans": 0,
    "exp": "Production factor detail: Quaternary Sector is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What is the primary factor of production provided by nature free of cost?",
    "opts": [
      "Land",
      "Fixed Capital",
      "Working Capital",
      "Human Capital"
    ],
    "ans": 0,
    "exp": "Production factor detail: Land is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "Why is Labour heterogeneous?",
    "opts": [
      "Workers differ in skill, experience, intelligence, physical stamina, and training",
      "All workers produce identical output",
      "Labour is made in factories",
      "Labour never changes"
    ],
    "ans": 0,
    "exp": "Production factor detail: Workers differ in skill, experience, intelligence, physical stamina, and training is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What is fixed capital depreciation?",
    "opts": [
      "The wear and tear loss in value of machinery and buildings over time",
      "Interest paid to banks",
      "Daily worker wages",
      "Raw material cost"
    ],
    "ans": 0,
    "exp": "Production factor detail: The wear and tear loss in value of machinery and buildings over time is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What happens to working capital during production?",
    "opts": [
      "It gets completely consumed or transformed into finished goods in one cycle",
      "It lasts for 50 years",
      "It never gets used up",
      "It turns into land"
    ],
    "ans": 0,
    "exp": "Production factor detail: It gets completely consumed or transformed into finished goods in one cycle is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "Which type of capital includes patents, software code, and brand trademarks?",
    "opts": [
      "Intellectual / Intangible Capital",
      "Working Capital",
      "Raw Land",
      "Physical Steel"
    ],
    "ans": 0,
    "exp": "Production factor detail: Intellectual / Intangible Capital is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What is the main objective of the 'Skill India' mission launched by Government of India?",
    "opts": [
      "Training youth in market-relevant technical skills to boost human capital",
      "Building highways",
      "Mining gold",
      "Printing voter cards"
    ],
    "ans": 0,
    "exp": "Production factor detail: Training youth in market-relevant technical skills to boost human capital is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What term describes the proportion of population in the 15-64 age group?",
    "opts": [
      "Working-Age Population Ratio",
      "Dependency Ratio",
      "Infant Mortality Rate",
      "Literacy Rate"
    ],
    "ans": 0,
    "exp": "Production factor detail: Working-Age Population Ratio is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "Why is India's demographic dividend considered a major economic opportunity?",
    "opts": [
      "India has over 65% of its population in the working age group (~28 yrs median age)",
      "India has no elderly citizens",
      "India has no children",
      "India relies only on imports"
    ],
    "ans": 0,
    "exp": "Production factor detail: India has over 65% of its population in the working age group (~28 yrs median age) is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What is required to convert a high working-age population into an actual demographic dividend?",
    "opts": [
      "Quality education, skill development, healthcare, and job creation",
      "Closing schools",
      "Stopping technical training",
      "Increasing imports"
    ],
    "ans": 0,
    "exp": "Production factor detail: Quality education, skill development, healthcare, and job creation is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What is the reward earned by an entrepreneur if market demand for their product is high?",
    "opts": [
      "Profit",
      "Wages",
      "Rent",
      "Interest"
    ],
    "ans": 0,
    "exp": "Production factor detail: Profit is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What happens to an entrepreneur if product sales fall below total production costs?",
    "opts": [
      "The entrepreneur incurs a financial Loss",
      "The government pays wages",
      "The bank pays rent",
      "Workers pay the deficit"
    ],
    "ans": 0,
    "exp": "Production factor detail: The entrepreneur incurs a financial Loss is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "Which Indian industrialist founded Infosys and pioneered the Indian IT software export industry?",
    "opts": [
      "N.R. Narayana Murthy",
      "J.R.D. Tata",
      "Dhirubhai Ambani",
      "G.D. Birla"
    ],
    "ans": 0,
    "exp": "Production factor detail: N.R. Narayana Murthy is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "Which Indian entrepreneur built Wipro into a global IT service leader?",
    "opts": [
      "Azim Premji",
      "Jamsetji Tata",
      "Kiran Mazumdar-Shaw",
      "Shiv Nadar"
    ],
    "ans": 0,
    "exp": "Production factor detail: Azim Premji is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "Who is the pioneering woman entrepreneur who founded Biocon, India's leading biopharmaceutical firm?",
    "opts": [
      "Kiran Mazumdar-Shaw",
      "V.S. Ramadevi",
      "Sarojini Naidu",
      "Indra Nooyi"
    ],
    "ans": 0,
    "exp": "Production factor detail: Kiran Mazumdar-Shaw is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What is an example of an upstream logistics activity?",
    "opts": [
      "Transporting raw iron ore from mines to a steel plant",
      "Delivering steel cars to showrooms",
      "Selling spare parts in stores",
      "TV ad broadcasting"
    ],
    "ans": 0,
    "exp": "Production factor detail: Transporting raw iron ore from mines to a steel plant is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What is an example of a downstream logistics activity?",
    "opts": [
      "Transporting packaged goods from regional warehouses to retail stores",
      "Mining bauxite ore",
      "Harvesting raw cotton",
      "Smelting iron ore"
    ],
    "ans": 0,
    "exp": "Production factor detail: Transporting packaged goods from regional warehouses to retail stores is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What is a supply chain audit?",
    "opts": [
      "Evaluating every step of a supply chain for efficiency, cost, safety, and sustainability",
      "Counting cash in a bank",
      "Printing receipts",
      "Filing tax returns"
    ],
    "ans": 0,
    "exp": "Production factor detail: Evaluating every step of a supply chain for efficiency, cost, safety, and sustainability is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What is just-in-time (JIT) inventory management?",
    "opts": [
      "Delivering raw materials exactly when needed in production to minimize storage costs",
      "Storing 10 years of raw stock in warehouses",
      "Buying raw stock at double price",
      "Stopping production daily"
    ],
    "ans": 0,
    "exp": "Production factor detail: Delivering raw materials exactly when needed in production to minimize storage costs is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "Which country pioneered Just-In-Time (JIT) manufacturing system (Toyota Production System)?",
    "opts": [
      "Japan",
      "USA",
      "UK",
      "Russia"
    ],
    "ans": 0,
    "exp": "Production factor detail: Japan is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What is the primary benefit of Just-In-Time (JIT) inventory systems?",
    "opts": [
      "Reduces warehouse storage costs and waste while improving inventory turnover",
      "Increases warehouse storage space needed",
      "Increases raw material damage",
      "Requires no transport"
    ],
    "ans": 0,
    "exp": "Production factor detail: Reduces warehouse storage costs and waste while improving inventory turnover is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What term describes manufacturing goods in ways that minimize pollution and resource depletion?",
    "opts": [
      "Sustainable / Green Production",
      "Resource Depletion",
      "Industrial Waste Dumping",
      "Unrestricted Extraction"
    ],
    "ans": 0,
    "exp": "Production factor detail: Sustainable / Green Production is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "Which factor of production organizes all other three factors into an enterprise?",
    "opts": [
      "Entrepreneurship",
      "Land",
      "Labour",
      "Fixed Capital"
    ],
    "ans": 0,
    "exp": "Production factor detail: Entrepreneurship is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "Why is Capital called a 'produced means of production'?",
    "opts": [
      "Capital assets (machines, tools) were themselves produced by human labour and land earlier",
      "Capital grows on trees",
      "Capital is a free gift of nature",
      "Capital never breaks down"
    ],
    "ans": 0,
    "exp": "Production factor detail: Capital assets (machines, tools) were themselves produced by human labour and land earlier is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What is physical capital wear and tear called in accounting?",
    "opts": [
      "Depreciation",
      "Appreciation",
      "Inflation",
      "Dividends"
    ],
    "ans": 0,
    "exp": "Production factor detail: Depreciation is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "Which factor of production is geographically mobile?",
    "opts": [
      "Capital (Machinery, Money) and Labour",
      "Land",
      "Natural Rivers",
      "Mineral Deposits"
    ],
    "ans": 0,
    "exp": "Production factor detail: Capital (Machinery, Money) and Labour is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What is division of labour?",
    "opts": [
      "Breaking a complex production process into specialized simple tasks assigned to different workers",
      "Dividing workers into two groups",
      "Stopping work at lunch",
      "Paying workers in cash"
    ],
    "ans": 0,
    "exp": "Production factor detail: Breaking a complex production process into specialized simple tasks assigned to different workers is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What is the main benefit of Division of Labour in manufacturing?",
    "opts": [
      "Increases production speed, dexterity, and efficiency through specialization",
      "Causes worker confusion",
      "Reduces production output",
      "Eliminates machinery"
    ],
    "ans": 0,
    "exp": "Production factor detail: Increases production speed, dexterity, and efficiency through specialization is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "Which famous economist illustrated Division of Labour using the Pin Factory example in 1776?",
    "opts": [
      "Adam Smith ('The Wealth of Nations')",
      "Karl Marx",
      "John Maynard Keynes",
      "Joseph Schumpeter"
    ],
    "ans": 0,
    "exp": "Production factor detail: Adam Smith ('The Wealth of Nations') is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What is the primary reward paid to a landlord for leasing out a factory building plot?",
    "opts": [
      "Rent",
      "Wages",
      "Interest",
      "Profit"
    ],
    "ans": 0,
    "exp": "Production factor detail: Rent is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What is the primary reward paid to a commercial bank for lending business capital?",
    "opts": [
      "Interest",
      "Rent",
      "Wages",
      "Profit"
    ],
    "ans": 0,
    "exp": "Production factor detail: Interest is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What is the primary reward paid to factory workers operating assembly machines?",
    "opts": [
      "Wages / Salary",
      "Rent",
      "Interest",
      "Profit"
    ],
    "ans": 0,
    "exp": "Production factor detail: Wages / Salary is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What is the primary reward earned by a business owner for launching an innovative venture?",
    "opts": [
      "Profit",
      "Rent",
      "Wages",
      "Interest"
    ],
    "ans": 0,
    "exp": "Production factor detail: Profit is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "Which government scheme in India provides collateral-free loans to micro-entrepreneurs?",
    "opts": [
      "Pradhan Mantri MUDRA Yojana (PMMY)",
      "Skill India",
      "Digital India",
      "Swachh Bharat"
    ],
    "ans": 0,
    "exp": "Production factor detail: Pradhan Mantri MUDRA Yojana (PMMY) is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What term describes a young technology company aiming to disrupt markets with scalable innovation?",
    "opts": [
      "Startup",
      "Monopoly",
      "Public Utility",
      "State Cartel"
    ],
    "ans": 0,
    "exp": "Production factor detail: Startup is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What is Startup India?",
    "opts": [
      "A flagship initiative of the Indian Government to foster innovation and startup ventures",
      "A highway project",
      "A river cleanup mission",
      "A voter registration drive"
    ],
    "ans": 0,
    "exp": "Production factor detail: A flagship initiative of the Indian Government to foster innovation and startup ventures is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "How does technology act as a force multiplier for the 4 factors of production?",
    "opts": [
      "Increases the output efficiency and yield produced per unit of land, labour, and capital",
      "Decreases total output",
      "Destroys physical capital",
      "Eliminates human intelligence"
    ],
    "ans": 0,
    "exp": "Production factor detail: Increases the output efficiency and yield produced per unit of land, labour, and capital is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What is circular flow of income in a two-sector economy?",
    "opts": [
      "The continuous flow of factor payments (rent, wages, interest, profit) from firms to households and spending from households to firms",
      "Money locked in bank vaults",
      "Tax collection by government",
      "Foreign aid transfers"
    ],
    "ans": 0,
    "exp": "Production factor detail: The continuous flow of factor payments (rent, wages, interest, profit) from firms to households and spending from households to firms is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "In the circular flow of income, what do households supply to business firms?",
    "opts": [
      "Factor services (Land, Labour, Capital, Entrepreneurship)",
      "Finished goods",
      "Raw materials",
      "Factory buildings"
    ],
    "ans": 0,
    "exp": "Production factor detail: Factor services (Land, Labour, Capital, Entrepreneurship) is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "In the circular flow of income, what do business firms supply to households?",
    "opts": [
      "Finished goods & services and factor income payments (wages, rent, interest, profit)",
      "Raw land",
      "Free machinery",
      "Taxes"
    ],
    "ans": 0,
    "exp": "Production factor detail: Finished goods & services and factor income payments (wages, rent, interest, profit) is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What is supply chain visibility?",
    "opts": [
      "The ability to track every product component live from raw extraction to final customer delivery",
      "Looking through a window",
      "Counting store employees",
      "Reading newspapers"
    ],
    "ans": 0,
    "exp": "Production factor detail: The ability to track every product component live from raw extraction to final customer delivery is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What term describes unexpected disruptions like canal blockages (e.g. Suez Canal obstruction)?",
    "opts": [
      "Supply Chain Disruption / Bottleneck",
      "Market Equilibrium",
      "Trade Surplus",
      "Fiscal Deficit"
    ],
    "ans": 0,
    "exp": "Production factor detail: Supply Chain Disruption / Bottleneck is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What is total quality management (TQM)?",
    "opts": [
      "An organization-wide management approach focused on continuous product and service quality improvement",
      "Inspecting goods once a year",
      "Firing workers randomly",
      "Ignoring customer complaints"
    ],
    "ans": 0,
    "exp": "Production factor detail: An organization-wide management approach focused on continuous product and service quality improvement is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "Which Japanese concept translates literally to 'change for the better'?",
    "opts": [
      "Kaizen",
      "Tsunami",
      "Origami",
      "Karaoke"
    ],
    "ans": 0,
    "exp": "Production factor detail: Kaizen is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What is the ultimate economic outcome of combining high-quality Human Capital with advanced Capital Machinery?",
    "opts": [
      "Maximizing national output, economic growth, and living standards",
      "Resource depletion",
      "Higher unemployment",
      "Economic stagnation"
    ],
    "ans": 0,
    "exp": "Production factor detail: Maximizing national output, economic growth, and living standards is the correct answer."
  },
  {
    "topic": "Factors of Production",
    "q": "What is the ultimate economic purpose of combining Land, Labour, Capital, and Entrepreneurship?",
    "opts": [
      "Creating goods and services to satisfy human wants and maximize societal welfare",
      "Accumulating cash in bank vaults",
      "Exporting all raw materials",
      "Halting industrial production"
    ],
    "ans": 0,
    "exp": "Production factor detail: Creating goods and services to satisfy human wants and maximize societal welfare is the correct answer."
  }
];

const GLOSSARY = [
{
    "term": "Ahimsa",
    "def": "The principle of absolute non-violence in thought, word, and deed, central to Buddhism, Jainism, and Gandhian philosophy."
},
{
    "term": "Ahom Kingdom",
    "def": "A Tai-origin dynasty that ruled Assam for nearly 600 years (1228–1826), famous for defeating Mughal invasions."
},
{
    "term": "Arthashastra",
    "def": "Ancient Sanskrit treatise on statecraft, economic policy, and military strategy written by Chanakya (Kautilya)."
},
{
    "term": "Ashoka Chakra",
    "def": "A 24-spoke wheel depicted on the Lion Capital of Ashoka at Sarnath, featured at the centre of India's national flag."
},
{
    "term": "Ashta Pradhan",
    "def": "The council of eight ministers created by Chhatrapati Shivaji Maharaj to administer the Maratha state."
},
{
    "term": "Bahmani Sultanate",
    "def": "The first independent Muslim kingdom in the Deccan (1347–1527), founded by Alauddin Bahman Shah."
},
{
    "term": "Chauth",
    "def": "A land revenue tax equal to one-fourth of produce, levied by the Maratha Empire on non-Maratha territories for protection."
},
{
    "term": "Citadel",
    "def": "The raised, fortified upper portion of Indus Valley cities, housing administrative, religious, or public structures."
},
{
    "term": "Deccan Sultanates",
    "def": "Five successor states (Bijapur, Ahmednagar, Golconda, Berar, Bidar) formed after the collapse of the Bahmani Sultanate."
},
{
    "term": "Dhamma",
    "def": "Emperor Ashoka's moral code of social conduct, compassion, religious tolerance, and non-violence based on Buddhist ethics."
},
{
    "term": "Diwani Rights",
    "def": "The right to collect land revenue and administer civil justice, granted to the EIC for Bengal, Bihar, and Odisha in 1765."
},
{
    "term": "Doctrine of Lapse",
    "def": "Lord Dalhousie's annexation policy stating that princely states without a natural male heir would revert to British control."
},
{
    "term": "Dual Government",
    "def": "System in Bengal (1765–1772) where EIC held revenue collection (Diwani) while Nawab held judicial authority (Nizamat)."
},
{
    "term": "Gana-Sangha",
    "def": "An oligarchic republic or clan assembly in ancient India (e.g., Vajji Confederacy) as opposed to a monarchy."
},
{
    "term": "Great Bath",
    "def": "A watertight public pool measuring 12m × 7m at Mohenjo-daro, likely used for ritual purification."
},
{
    "term": "Indus Script",
    "def": "The undeciphered system of symbols used by the Indus Valley Civilization found on over 4,000 seals and artifacts."
},
{
    "term": "Instrument of Accession (IoA)",
    "def": "Legal document signed by princely state rulers in 1947–1948 acceding their state to India or Pakistan."
},
{
    "term": "Iqta System",
    "def": "Land revenue assignment system in the Delhi Sultanate where military officers received land grants in lieu of cash salary."
},
{
    "term": "Jagirdari System",
    "def": "Mughal revenue system assigning land revenue rights (jagirs) to mansabdars for military service."
},
{
    "term": "Jallianwala Bagh",
    "def": "Public garden in Amritsar where British troops under General Dyer massacred hundreds of unarmed protesters on April 13, 1919."
},
{
    "term": "Jauhar",
    "def": "Traditional Rajput practice of mass self-immolation by women to avoid capture, rape, and enslavement by invading forces."
},
{
    "term": "Jizya",
    "def": "A poll tax levied on non-Muslim subjects in Islamic states; abolished by Akbar in 1564, re-imposed by Aurangzeb in 1679."
},
{
    "term": "Khalsa",
    "def": "The military-spiritual order of initiated Sikhs established by Guru Gobind Singh Ji on Baisakhi 1699."
},
{
    "term": "Kalinga War",
    "def": "Mauryan conquest of Kalinga (c. 261 BCE) that caused immense casualties, prompting Ashoka's conversion to Buddhism."
},
{
    "term": "Lachit Borphukan",
    "def": "Legendary Ahom general who defeated the Mughal fleet at the naval Battle of Saraighat (1671)."
},
{
    "term": "Lothal",
    "def": "Harappan port city in Gujarat featuring the world's earliest known tidal dockyard and bead manufacturing."
},
{
    "term": "Mahajanapadas",
    "def": "Sixteen great territorial kingdoms and republics that dominated northern India around 600 BCE."
},
{
    "term": "Mansabdari System",
    "def": "Mughal administrative-military hierarchy introduced by Akbar, ranking officials by Zat (status) and Sawar (cavalry)."
},
{
    "term": "Mohenjo-daro",
    "def": "Major Harappan urban city in Sindh, Pakistan, featuring grid planning, Great Bath, and sophisticated drainage."
},
{
    "term": "Operation Polo",
    "def": "The 5-day Indian military operation in September 1948 that integrated Hyderabad State into the Indian Union."
},
{
    "term": "Paik System",
    "def": "Ahom system of compulsory state service where adult males provided labour or military service in lieu of cash tax."
},
{
    "term": "Peshwa",
    "def": "The Prime Minister of the Maratha Empire, who became hereditary de facto ruler under the Maratha Confederacy."
},
{
    "term": "Radcliffe Line",
    "def": "The boundary line drawn by Sir Cyril Radcliffe dividing India and Pakistan in August 1947."
},
{
    "term": "Ryotwari System",
    "def": "British land revenue system where tax was collected directly from individual cultivators (ryots) in Madras and Bombay."
},
{
    "term": "Satyagraha",
    "def": "Mahatma Gandhi's method of non-violent resistance insistence on truth through active, courageous civil disobedience."
},
{
    "term": "Permanent Settlement",
    "def": "Lord Cornwallis's 1793 land revenue system fixing zamindari tax demands permanently in Bengal, Bihar, and Odisha."
},
{
    "term": "Standstill Agreement",
    "def": "Temporary agreement signed between India and princely states in 1947 preserving existing administrative arrangements."
},
{
    "term": "Subsidiary Alliance",
    "def": "Lord Wellesley's treaty system forcing Indian states to accept British garrisons, residents, and foreign policy control."
},
{
    "term": "Sulh-i-kul",
    "def": "Emperor Akbar's policy of universal peace, harmony, and equal treatment for all religious communities."
},
{
    "term": "Swarajya",
    "def": "Self-rule or independence, championed by Chhatrapati Shivaji Maharaj and later revived during the freedom movement."
},
{
    "term": "Two-Nation Theory",
    "def": "The ideology advocated by Jinnah and the Muslim League claiming Hindus and Muslims were two distinct nations."
},
{
    "term": "Varna System",
    "def": "The four-fold social classification (Brahmin, Kshatriya, Vaishya, Shudra) originating in Vedic India."
},
{
    "term": "Vedas",
    "def": "The oldest sacred scriptures of Hinduism, composed in archaic Sanskrit (Rig, Sama, Yajur, Atharva)."
},
{
    "term": "Vijayanagara Empire",
    "def": "Powerful Hindu empire of southern India (1336–1646) based at Hampi, famed for Dravidian architecture and trade."
},
{
    "term": "Zabt System",
    "def": "Akbar's 10-year land revenue assessment system (Dahsala) developed by revenue minister Raja Todar Mal."
},
  {
    "term": "Andhra State",
    "def": "India's first language-based state created on October 1, 1953 for Telugu-speaking people following Potti Sreeramulu's 56-day fast."
  },
  {
    "term": "Aquifer",
    "def": "An underground layer of water-bearing permeable rock, rock fractures, or unconsolidated materials from which groundwater can be extracted."
  },
  {
    "term": "Arbitration",
    "def": "A formal method of dispute resolution outside courts where an independent third party makes a binding decision."
  },
  {
    "term": "Article 1",
    "def": "Constitutional article stating that India, that is Bharat, shall be a Union of States."
  },
  {
    "term": "Article 2",
    "def": "Constitutional article empowering Parliament to admit new states into the Union or establish new states."
  },
  {
    "term": "Article 3",
    "def": "Constitutional article empowering Parliament to form new states, alter state boundaries, or change state names."
  },
  {
    "term": "Article 324",
    "def": "Constitutional article establishing the independent Election Commission of India (ECI) to superintend and conduct elections."
  },
  {
    "term": "Article 326",
    "def": "Constitutional article guaranteeing Universal Adult Franchise for all Indian citizens aged 18 and above."
  },
  {
    "term": "Article 330",
    "def": "Constitutional article providing reservation of seats for Scheduled Castes and Scheduled Tribes in the Lok Sabha."
  },
  {
    "term": "Article 332",
    "def": "Constitutional article providing reservation of seats for Scheduled Castes and Scheduled Tribes in State Legislative Assemblies."
  },
  {
    "term": "Article 356",
    "def": "Constitutional provision for President's Rule in a state when state governance cannot be carried out according to constitutional provisions."
  },
  {
    "term": "Arzi Hukumat",
    "def": "The provisional popular government formed by citizens of Junagadh state in 1947 to oppose accession to Pakistan and demand union with India."
  },
  {
    "term": "Automation",
    "def": "The application of computerized machinery, software, and robotics to perform industrial tasks with minimal human intervention."
  },
  {
    "term": "Ballot Box",
    "def": "A sealed metal or plastic container into which voters deposit physical paper ballot slips during elections."
  },
  {
    "term": "Ballot Paper",
    "def": "A sheet of paper containing the names and election symbols of contesting candidates used by voters to mark their vote."
  },
  {
    "term": "Bauxite",
    "def": "The primary sedimentary rock mineral ore from which Aluminum metal is extracted through commercial smelting."
  },
  {
    "term": "Bharat Electronics Limited (BEL)",
    "def": "Indian state-owned defense electronics company that manufactures Electronic Voting Machines for the ECI alongside ECIL."
  },
  {
    "term": "Biomass Energy",
    "def": "Renewable organic energy generated from plant cellulose, agricultural waste, cow dung, and forestry residue."
  },
  {
    "term": "Biotic Resource",
    "def": "A natural resource derived from living organisms or organic matter, such as forests, crops, wildlife, livestock, and fossil fuels."
  },
  {
    "term": "Bombay Reorganisation Act 1960",
    "def": "Legislation splitting Bombay State into Gujarati-speaking Gujarat and Marathi-speaking Maharashtra on May 1, 1960."
  },
  {
    "term": "British Paramountcy",
    "def": "The supreme political authority exercised by the British Crown over Indian Princely States prior to August 15, 1947."
  },
  {
    "term": "Brundtland Commission",
    "def": "The 1987 UN World Commission on Environment and Development that defined Sustainable Development in the landmark report 'Our Common Future'."
  },
  {
    "term": "By-Election",
    "def": "An election held to fill a single casual vacancy in Parliament or State Assembly caused by candidate death, resignation, or disqualification."
  },
  {
    "term": "Campaign Silence Period",
    "def": "The mandatory 48-hour period before polling closes during which all public political campaigning and rallies are legally banned."
  },
  {
    "term": "Capital",
    "def": "Man-made physical assets, machinery, tools, industrial buildings, and monetary liquidity utilized in the economic production of goods."
  },
  {
    "term": "Capital Formation",
    "def": "The net addition to physical and financial capital assets in an economy over a given accounting period."
  },
  {
    "term": "Chief Election Commissioner (CEC)",
    "def": "The constitutional head of the Election Commission of India who oversees free, fair, and transparent democratic elections nationwide."
  },
  {
    "term": "Circulation of Income",
    "def": "The continuous flow of money payments, resource services, and finished goods between production factors and households."
  },
  {
    "term": "Civil Rights",
    "def": "Enforceable rights of personal liberty, equality, and political participation guaranteed to citizens under democratic laws."
  },
  {
    "term": "Coalition Government",
    "def": "A government formed jointly by multiple political parties when no single party secures an absolute legislative majority."
  },
  {
    "term": "Code of Conduct",
    "def": "Set of ethical rules and operational standards governing candidate campaign practices during election cycles."
  },
  {
    "term": "Command Economy",
    "def": "An economic system where production targets, resource allocation, and prices are directly controlled by central government planners."
  },
  {
    "term": "Community Resource",
    "def": "A natural or civic resource accessible for use by all members of a local community, such as village grazing pastures or public parks."
  },
  {
    "term": "Conservation",
    "def": "The planned management, protective preservation, and wise utilization of natural resources to prevent exhaustion and environmental decay."
  },
  {
    "term": "Constituency",
    "def": "A demographically and geographically demarcated territorial unit whose voters elect a single representative to a legislative body."
  },
  {
    "term": "Contour Ploughing",
    "def": "The soil conservation practice of ploughing across land slopes along elevation contour lines to slow down water runoff and prevent erosion."
  },
  {
    "term": "Crop Rotation",
    "def": "The practice of growing different crops sequentially on the same land across seasons to preserve soil fertility and nitrogen balance."
  },
  {
    "term": "Cultural Acceptability",
    "def": "The condition requiring resource utilization to align with societal values, ethical standards, cultural heritage, and environmental norms."
  },
  {
    "term": "Cultural Ecosystem Services",
    "def": "Non-material spiritual, aesthetic, educational, and recreational benefits derived by humans from natural ecosystems."
  },
  {
    "term": "cVIGIL App",
    "def": "An official ECI mobile app enabling citizens to upload live photo/video evidence of Model Code of Conduct violations within minutes."
  },
  {
    "term": "Delimitation Commission",
    "def": "An independent high-power statutory body appointed by Parliament under Article 82 to redraw constituency boundaries based on census data."
  },
  {
    "term": "Demographic Dividend",
    "def": "The accelerated economic growth potential realized when a nation's working-age population (15-64 years) outnumbers dependent children and elderly."
  },
  {
    "term": "Dependency Ratio",
    "def": "The economic ratio comparing non-working dependents (under 15 and over 65) to the active working-age population (15-64)."
  },
  {
    "term": "Depletion",
    "def": "The reduction in quantity or economic quality of a natural resource stock due to unsustainable over-extraction."
  },
  {
    "term": "Developed Resource",
    "def": "A natural resource that has been surveyed, scientifically evaluated, and is actively being utilized with existing technology."
  },
  {
    "term": "Dhar Commission",
    "def": "The 1948 Linguistic Provinces Commission led by S.K. Dhar which initially recommended reorganizing states based on administrative convenience rather than language."
  },
  {
    "term": "District Election Officer (DEO)",
    "def": "The officer (typically the District Collector/Magistrate) in charge of supervising election operations across a district."
  },
  {
    "term": "Downstream Supply Chain",
    "def": "The final stages of a supply chain encompassing warehousing, logistics, wholesale distribution, retail marketing, and sales to end consumers."
  },
  {
    "term": "Drip Irrigation",
    "def": "A micro-irrigation method that saves water and fertilizer by allowing water to drip slowly to plant roots through pipe networks."
  },
  {
    "term": "Earth Summit 1992",
    "def": "The historic UN Conference on Environment and Development held in Rio de Janeiro establishing global environmental protection frameworks."
  },
  {
    "term": "Ecology",
    "def": "The scientific study of interactions between living organisms and their non-living physical environment."
  },
  {
    "term": "Economic Feasibility",
    "def": "The condition where the total financial and social returns derived from extracting a natural resource exceed total processing costs."
  },
  {
    "term": "Economic Growth",
    "def": "The quantitative increase in a nation's total output of goods and services (Gross Domestic Product) over time."
  },
  {
    "term": "Ecosystem Services",
    "def": "The indispensable direct and indirect benefits nature provides to human society (provisioning, regulating, supporting, cultural)."
  },
  {
    "term": "Election Affidavit",
    "def": "A legally sworn affidavit (Form 26) filed by election candidates disclosing educational qualifications, total wealth assets, liabilities, and criminal record cases."
  },
  {
    "term": "Election Commission of India (ECI)",
    "def": "An autonomous constitutional authority established under Article 324 responsible for administering national and state elections in India."
  },
  {
    "term": "Election Manifesto",
    "def": "A public declaration of policies, legislative promises, and socio-economic programs published by a political party prior to elections."
  },
  {
    "term": "Election Petition",
    "def": "A formal legal challenge filed in a State High Court under the Representation of the People Act 1951 questioning the validity of an election result."
  },
  {
    "term": "Election Symbol",
    "def": "An official pictorial symbol allocated by the ECI to political parties and independent candidates to help literate and illiterate voters identify ballots."
  },
  {
    "term": "Elector's Photo Identity Card (EPIC)",
    "def": "The official photo identity card issued by the Election Commission of India to registered voters for identification at polling stations."
  },
  {
    "term": "Electronic Voting Machine (EVM)",
    "def": "A tamper-evident electronic device comprising a Control Unit and Balloting Unit used to cast and count votes in Indian elections."
  },
  {
    "term": "Electronics Corporation of India Limited (ECIL)",
    "def": "State-owned technology corporation under the Department of Atomic Energy that manufactures EVMs and VVPATs with BEL."
  },
  {
    "term": "Entrepreneurship",
    "def": "The human economic factor that organizes land, labour, and capital, introduces technological innovations, and assumes commercial financial risks for profit."
  },
  {
    "term": "Exclusive Economic Zone (EEZ)",
    "def": "An oceanic zone extending up to 200 nautical miles from a coastal baseline over which a sovereign state has exclusive rights to marine resources."
  },
  {
    "term": "Factors of Production",
    "def": "The four fundamental inputs required to manufacture goods and provide services in an economy: Land, Labour, Capital, and Entrepreneurship."
  },
  {
    "term": "Fazl Ali Commission",
    "def": "The 1953 States Reorganisation Commission (SRC) chaired by Justice Fazl Ali that recommended redrawing state boundaries on linguistic grounds."
  },
  {
    "term": "Financial Capital",
    "def": "Monetary liquid funds, bank loans, and equity capital invested to acquire physical capital assets like machinery and factories."
  },
  {
    "term": "First-Past-The-Post (FPTP)",
    "def": "An electoral voting system where the candidate who receives the highest number of votes in a single constituency wins, regardless of majority percentage."
  },
  {
    "term": "Fixed Capital",
    "def": "Durable physical capital assets (machinery, tools, industrial plants, transport vehicles) that remain usable across multiple production cycles over years."
  },
  {
    "term": "Fossil Fuels",
    "def": "Non-renewable hydrocarbon energy resources (coal, crude oil, natural gas) formed deep underground from ancient buried organic remains over geological epochs."
  },
  {
    "term": "Franchise",
    "def": "The constitutional right or privilege granted to citizens to vote in public political elections."
  },
  {
    "term": "General Election",
    "def": "Nationwide or state-wide democratic elections held every five years to elect representatives to the Lok Sabha or State Vidhan Sabhas."
  },
  {
    "term": "Geothermal Energy",
    "def": "Renewable thermal heat energy naturally generated and stored within the Earth's interior crust, harnessed for clean power generation."
  },
  {
    "term": "Goa Liberation 1961",
    "def": "The military police action (Operation Vijay) on December 18-19, 1961 that ended 450 years of Portuguese colonial rule over Goa, Daman, and Diu."
  },
  {
    "term": "Green Energy",
    "def": "Clean energy generated from zero-emission renewable sources such as solar power, wind energy, small hydro, and geothermal energy."
  },
  {
    "term": "Gross Domestic Product (GDP)",
    "def": "The total monetary value of all finished goods and services produced within a country's geographical borders during a specific period."
  },
  {
    "term": "Human Capital",
    "def": "The accumulated knowledge, technical skills, cognitive capabilities, physical health, and expertise embodied in a country's workforce."
  },
  {
    "term": "Human Capital Formation",
    "def": "The process of enhancing workforce capabilities through sustained investments in quality education, vocational skill training, and healthcare."
  },
  {
    "term": "Human Utility Threshold Rule",
    "def": "The principle stating that natural substances become economic resources only when human knowledge discovers their utility and technology enables processing."
  },
  {
    "term": "Hung Assembly",
    "def": "A political situation after legislative elections where no single political party or pre-poll alliance wins an absolute majority of seats."
  },
  {
    "term": "Hydroelectricity",
    "def": "Renewable electric power produced by channeling high-pressure flowing water through water turbines connected to electrical generators."
  },
  {
    "term": "Independent Candidate",
    "def": "An election contestant who runs for public office individually without affiliation to any registered political party."
  },
  {
    "term": "Individual Resource",
    "def": "A natural or physical resource privately owned and managed by an individual or single household, such as private farmland or housing."
  },
  {
    "term": "Industrial Training Institute (ITI)",
    "def": "Government vocational training institutes in India providing technical skill education to post-secondary youth."
  },
  {
    "term": "Instrument of Accession (IoA)",
    "def": "The legal instrument executed by rulers of Indian Princely States in 1947 to accede to the Dominion of India on Defence, External Affairs, and Communications."
  },
  {
    "term": "Intellectual Labour",
    "def": "Mental work involving cognitive analysis, complex decision-making, scientific research, problem-solving, and software design."
  },
  {
    "term": "Interest",
    "def": "The economic reward or income payment earned by owners of Capital assets for supplying financial or physical capital in production."
  },
  {
    "term": "International Resource",
    "def": "Oceanic and atmospheric resources located beyond 200 nautical miles of coastal EEZs, managed under international treaty organizations."
  },
  {
    "term": "J&K Reorganisation Act 2019",
    "def": "Landmark parliamentary legislation effective October 31, 2019 reorganizing the state of Jammu & Kashmir into two Union Territories: J&K and Ladakh."
  },
  {
    "term": "J.R.D. Tata",
    "def": "Visionary Indian industrial entrepreneur who launched Tata Airlines (Air India) in 1932 and pioneered civil aviation in India."
  },
  {
    "term": "Jamsetji Tata",
    "def": "Pioneering Indian industrialist who founded the Tata Group and established India's first modern integrated steel plant in Jamshedpur."
  },
  {
    "term": "Junagadh Plebiscite",
    "def": "The democratic referendum held in Junagadh state in February 1948 where over 99% of citizens voted for integration into the Indian Union."
  },
  {
    "term": "JVP Committee",
    "def": "The 1948 Congress committee consisting of Jawaharlal Nehru, Vallabhbhai Patel, and Pattabhi Sitaramayya formed to evaluate linguistic state demands."
  },
  {
    "term": "Kaizen",
    "def": "A Japanese business philosophy emphasizing continuous, incremental, daily workplace improvements to boost quality and productivity."
  },
  {
    "term": "Labour",
    "def": "The physical and mental human effort expended in the economic production of goods and services in exchange for financial wages or salary."
  },
  {
    "term": "Labour Mobility",
    "def": "The ease with which workers can geographically relocate or shift between different occupations and industries."
  },
  {
    "term": "Labour Productivity",
    "def": "An economic metric calculating total production output divided by the number of labour hours worked."
  },
  {
    "term": "Land",
    "def": "In economics, all natural resources and physical gifts provided free of cost by nature above, on, or beneath Earth's surface."
  },
  {
    "term": "Lapse of Paramountcy",
    "def": "The legal termination of British Crown sovereign rights over Indian Princely States under Section 7 of the Indian Independence Act 1947."
  },
  {
    "term": "Linguistic States",
    "def": "Indian states organized primarily on the basis of shared spoken languages, initiated by the States Reorganisation Act 1956."
  },
  {
    "term": "Logistics",
    "def": "The detailed coordination, storage, transportation, and supply movement of raw materials and finished goods along a supply chain."
  },
  {
    "term": "Lok Sabha",
    "def": "The House of the People, the directly elected lower house of India's bicameral Parliament consisting of up to 543 elected MPs."
  },
  {
    "term": "Manual Labour",
    "def": "Physical work relying primarily on muscular strength, manual dexterity, and physical exertion."
  },
  {
    "term": "Market Feasibility",
    "def": "The commercial viability of producing a product based on consumer demand and prevailing market prices."
  },
  {
    "term": "Mental Labour",
    "def": "Work requiring cognitive intelligence, specialized professional education, analysis, and problem-solving skills."
  },
  {
    "term": "Mid-Term Election",
    "def": "An election held for Parliament or a State Assembly before the completion of its full 5-year constitutional term due to dissolution."
  },
  {
    "term": "Model Code of Conduct (MCC)",
    "def": "A set of guidelines issued by the ECI governing candidate behavior, speech, campaigning, and government power usage during elections."
  },
  {
    "term": "Nari Shakti Vandan Adhiniyam",
    "def": "The 106th Constitutional Amendment Act 2023 reserving 33% of seats for women in the Lok Sabha and State Legislative Assemblies."
  },
  {
    "term": "National Resource",
    "def": "Resources located within a nation's political land borders and territorial coastal waters extending up to 12 nautical miles."
  },
  {
    "term": "Natural Resource",
    "def": "Any element, substance, or force occurring in nature that possesses utility, economic value, and capacity to satisfy human needs."
  },
  {
    "term": "Nizam of Hyderabad",
    "def": "Mir Osman Ali Khan, ruler of Hyderabad state whose territory was integrated into the Indian Union following Operation Polo in September 1948."
  },
  {
    "term": "Non-Renewable Resource",
    "def": "A natural resource formed over millions of geological years that cannot be replenished naturally within human timeframes once depleted."
  },
  {
    "term": "None of the Above (NOTA)",
    "def": "An option on Indian EVMs allowing voters to officially record a vote of rejection against all contesting candidates in a constituency."
  },
  {
    "term": "Operation Polo",
    "def": "The 5-day military police action conducted by Indian armed forces in September 1948 integrating the princely state of Hyderabad into India."
  },
  {
    "term": "Operation Vijay 1961",
    "def": "The military operation that liberated Goa, Daman, and Diu from 450 years of Portuguese colonial rule in December 1961."
  },
  {
    "term": "Opportunity Cost",
    "def": "The value of the next best alternative forgone when choosing one economic option over another."
  },
  {
    "term": "Ore",
    "def": "A naturally occurring solid rock or sediment containing valuable minerals or metals that can be economically extracted."
  },
  {
    "term": "Parliament of India",
    "def": "The supreme legislative body of the Republic of India, comprising the President, Lok Sabha, and Rajya Sabha."
  },
  {
    "term": "Perishable Labour",
    "def": "The economic characteristic of labour capacity which cannot be stored or saved; unused daily labour capacity is lost forever."
  },
  {
    "term": "Photovoltaic Cell",
    "def": "A semiconductor electronic device that converts sunlight directly into electrical energy via the photoelectric effect."
  },
  {
    "term": "Physical Capital",
    "def": "Man-made tangible assets (buildings, machinery, tools, vehicles, equipment) used directly in producing goods and services."
  },
  {
    "term": "Plebiscite",
    "def": "A direct vote by citizens of an entire territory to decide a crucial political or constitutional issue such as national accession."
  },
  {
    "term": "Political Party",
    "def": "An organized group of citizens sharing political ideologies that fields candidates in elections to achieve legislative power."
  },
  {
    "term": "Polling Station",
    "def": "A designated official location where registered voters cast their secret ballots on election day under election officers."
  },
  {
    "term": "Postal Ballot",
    "def": "A ballot paper issued to service voters (armed forces, election duty staff) who cast votes via postal mail or electronic transmission."
  },
  {
    "term": "Potential Resource",
    "def": "A resource existing in a region whose utility is known but has not been developed due to lack of capital or advanced technology."
  },
  {
    "term": "Potti Sreeramulu",
    "def": "Revered Gandhian freedom fighter who fasted unto death for 56 days in 1952 demanding a separate Telugu-speaking Andhra State."
  },
  {
    "term": "Presiding Officer",
    "def": "The election officer in charge of supervising polling operations and maintaining security at an individual polling station on election day."
  },
  {
    "term": "Princely State",
    "def": "A semi-autonomous state in British India ruled by a native Indian monarch under British Paramountcy prior to August 1947."
  },
  {
    "term": "Privy Purse",
    "def": "A tax-free annual financial allowance granted to former princely state rulers upon merger with India (abolished by 26th Amendment in 1971)."
  },
  {
    "term": "Provisioning Services",
    "def": "Ecosystem services providing tangible products used directly by humans, including food, freshwater, timber, and medicinal plants."
  },
  {
    "term": "Quota",
    "def": "A fixed targeted limit or legislative reservation assigned to specific groups or categories."
  },
  {
    "term": "Rainwater Harvesting",
    "def": "The collection and storage of rainwater from rooftops or ground catchments into tanks or underground aquifers for reuse."
  },
  {
    "term": "Razakars",
    "def": "The private radical paramilitary militia in Hyderabad that committed atrocities against citizens demanding integration into India prior to Operation Polo."
  },
  {
    "term": "Recycling",
    "def": "The process of converting waste materials and scrap metals back into reusable raw manufacturing inventory to conserve natural resources."
  },
  {
    "term": "Regulating Ecosystem Services",
    "def": "Ecosystem services controlling vital environmental processes such as climate stabilization, flood prevention, and water purification."
  },
  {
    "term": "Renewable Resource",
    "def": "A natural resource that can replenish itself naturally through environmental cycles within humanly reasonable timeframes."
  },
  {
    "term": "Rent",
    "def": "The primary economic reward or income payment earned by the owners of Land resources for providing natural inputs in production."
  },
  {
    "term": "Representation of the People Act 1951",
    "def": "Landmark Indian legislation detailing election administration, candidate qualifications, party registration, and electoral dispute resolution."
  },
  {
    "term": "Reserved Constituency",
    "def": "An electoral constituency set aside exclusively for candidates belonging to Scheduled Castes (SC) or Scheduled Tribes (ST)."
  },
  {
    "term": "Resource Conservation",
    "def": "The ethical and efficient management of natural resources to minimize waste and ensure availability for future generations."
  },
  {
    "term": "Returning Officer (RO)",
    "def": "The officer designated by the ECI in a constituency responsible for conducting elections and scrutinizing nomination papers."
  },
  {
    "term": "Sardar Vallabhbhai Patel",
    "def": "India's first Deputy Prime Minister and Home Minister known as the 'Iron Man of India' who unified 565+ Princely States."
  },
  {
    "term": "Schumpeterian Innovation",
    "def": "The economic theory by Joseph Schumpeter identifying technological innovation as the core driving force of entrepreneurship."
  },
  {
    "term": "Secret Ballot",
    "def": "A voting procedure ensuring total privacy and confidentiality so that a voter's choice cannot be known by anyone else."
  },
  {
    "term": "Shelter Belts",
    "def": "Rows of trees planted along coastal or arid farm field borders to reduce wind speed and prevent soil erosion."
  },
  {
    "term": "Silence Period",
    "def": "The legally enforced 48-hour ban on political campaigning prior to the conclusion of voting in a constituency."
  },
  {
    "term": "Skill India",
    "def": "A major national campaign launched by the Government of India to empower youth through vocational and technical skill training."
  },
  {
    "term": "Soil Conservation",
    "def": "A combination of agricultural practices (terrace farming, contour ploughing, crop rotation) designed to prevent soil erosion and fertility loss."
  },
  {
    "term": "Solar Photovoltaic (PV)",
    "def": "Technology converting solar sunlight directly into electrical current using silicon semiconductor solar cells."
  },
  {
    "term": "State Legislative Assembly (Vidhan Sabha)",
    "def": "The lower or sole legislative house in Indian state legislatures whose members (MLAs) are directly elected by voters."
  },
  {
    "term": "States Reorganisation Act 1956",
    "def": "Landmark parliamentary act redrawing Indian state boundaries primarily along linguistic lines into 14 States and 6 Union Territories."
  },
  {
    "term": "States Reorganisation Commission (SRC)",
    "def": "The 1953 commission led by Justice Fazl Ali, H.N. Kunzru, and K.M. Panikkar that recommended linguistic reorganization of state boundaries."
  },
  {
    "term": "Stock Resource",
    "def": "Substances in nature possessing utility to satisfy human needs, but which cannot be utilized currently due to lack of extraction technology."
  },
  {
    "term": "Supply Chain",
    "def": "The complete interconnected network of operations, organizations, activities, and resources involved in creating and delivering a product."
  },
  {
    "term": "Supply Chain Disruption",
    "def": "An unforeseen breakdown or interruption in the flow of goods along a supply chain caused by natural disasters, wars, or canal blockages."
  },
  {
    "term": "Supporting Ecosystem Services",
    "def": "Foundational ecosystem processes (photosynthesis, soil formation, nutrient cycling) necessary for producing all other ecosystem services."
  },
  {
    "term": "Sustainable Development",
    "def": "Development that satisfies present socio-economic needs without compromising the ability of future generations to meet their own needs."
  },
  {
    "term": "Technological Accessibility",
    "def": "The condition requiring human society to possess practical scientific knowledge, tools, and equipment to extract and refine natural resources."
  },
  {
    "term": "Tendered Vote",
    "def": "A special ballot vote allowed to a genuine voter who discovers that an impersonator has already fraudulently voted in their name."
  },
  {
    "term": "Terrace Farming",
    "def": "The practice of cutting step-like flat terraces into steep mountain slopes to reduce water runoff speed and prevent soil erosion."
  },
  {
    "term": "Territorial Waters",
    "def": "A belt of coastal waters extending up to 12 nautical miles from a coastal baseline regarded as sovereign national territory."
  },
  {
    "term": "Three Rs (3Rs)",
    "def": "The ecological golden rules for sustainable resource use: Reduce consumption, Reuse durable goods, and Recycle scrap materials."
  },
  {
    "term": "Universal Adult Franchise",
    "def": "The democratic constitutional principle granting every adult citizen (aged 18+) equal voting rights without socio-economic discrimination."
  },
  {
    "term": "Upstream Supply Chain",
    "def": "The initial supply chain stages involving natural resource extraction, raw material refining, and component manufacturing."
  },
  {
    "term": "V.P. Menon",
    "def": "Senior Indian civil servant who worked alongside Sardar Vallabhbhai Patel as Secretary of the Ministry of States to integrate princely states."
  },
  {
    "term": "V.S. Ramadevi",
    "def": "Distinguished Indian administrator who served as the first woman Chief Election Commissioner of India in November-December 1990."
  },
  {
    "term": "Vidhan Parishad",
    "def": "The Legislative Council, the upper house present in select Indian state legislatures whose members are indirectly elected."
  },
  {
    "term": "Vidhan Sabha",
    "def": "The Legislative Assembly, the directly elected lower house in Indian state legislatures."
  },
  {
    "term": "Voter Verifiable Paper Audit Trail (VVPAT)",
    "def": "An independent paper verification machine linked to EVMs printing a 7-second visual paper slip confirming the registered vote."
  },
  {
    "term": "Wages",
    "def": "The primary economic reward or financial remuneration paid to workers for physical or mental labour performed in production."
  },
  {
    "term": "Wind Farm",
    "def": "A large cluster of wind turbines installed in coastal or high-wind areas to generate commercial wind electricity."
  },
  {
    "term": "Working Capital",
    "def": "Raw materials, fuel inputs, and short-term cash reserves that are consumed or transformed within a single production cycle."
  },
  {
    "term": "Working-Age Population",
    "def": "The demographic segment of a population aged 15 to 64 years capable of participating in economic labour."
  },
  {
    "term": "X-Ray Spectrometry",
    "def": "Geological analytical technique used by mineralogists to identify elemental composition and crystalline structures in natural mineral ores."
  },
  {
    "term": "Xerophyte",
    "def": "Drought-adapted desert plants (such as cacti and acacia) featuring thick fleshy stems, waxy cuticles, and deep root systems to conserve water in arid environments."
  },
  {
    "term": "Xerophytic Vegetation",
    "def": "Desert and semi-arid plant communities adapted to extreme dry conditions and low rainfall, typical of the Thar Desert in Rajasthan."
  },
  {
    "term": "Yamuna River",
    "def": "Major northern Indian river and primary tributary of the Ganga, providing vital freshwater resources, irrigation canals, and water supply across northern plains."
  },
  {
    "term": "Yield (Agricultural)",
    "def": "The quantitative output of crop produce harvested per unit area of cultivated agricultural land."
  },
  {
    "term": "Yojana",
    "def": "Government socio-economic developmental programs and public welfare schemes launched to foster infrastructure, skill training, and employment."
  },
  {
    "term": "Youth Demographic",
    "def": "The energetic young workforce segment of a population (under 30) driving economic productivity, technological innovation, and demographic dividend."
  },
  {
    "term": "Zaid Crop Season",
    "def": "The short summer cropping season in India between Rabi and Kharif (March to June) producing watermelon, cucumber, fodder crops, and vegetables."
  },
  {
    "term": "Zero Emission Energy",
    "def": "Clean energy sources (such as solar, wind, hydro, and green hydrogen) that produce zero greenhouse gas emissions during electricity generation."
  },
  {
    "term": "Zero Waste Management",
    "def": "An eco-friendly waste management strategy designed to eliminate landfill waste by maximizing recycling, composting, and resource recovery."
  },
  {
    "term": "Zila Parishad",
    "def": "The highest elected tier of the Panchayati Raj system of local self-government operating at the district level in India."
  },
  {
    "term": "Zirconium",
    "def": "A corrosion-resistant metallic mineral used in high-temperature industrial alloys and nuclear reactor fuel rod cladding."
  },
  {
    "term": "Zonal Council",
    "def": "Statutory advisory councils created under the States Reorganisation Act 1956 to foster inter-state cooperation and economic coordination among regions."
  }
];

const SVG_DIAGRAMS = [
  {
    title: "1. India Administrative & Political Map",
    desc: "Complete political map of India detailing states, union territories, and capital cities.",
    imgUrl: "https://www.mapsofindia.com/maps/india/india-political-map.htm",
    directImgUrl: "https://www.mapsofindia.com/maps/india/india-political-map.gif",
    fallbackUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/India_political_map.svg/1024px-India_political_map.svg.png"
  },
  {
    title: "2. Historical Map of Pre-1947 British India & Princely States",
    desc: "Historical administrative map depicting integration of Princely States and British Indian Provinces.",
    imgUrl: "princely.png",
    directImgUrl: "princely.png",
    fallbackUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/India_1947_partition.svg/1024px-India_1947_partition.svg.png"
  },
  {
    title: "3. Indian Electronic Voting Machine (EVM) & VVPAT System",
    desc: "Transparency and operational schematic for EVMs and VVPAT from Election Commission of India.",
    imgUrl: "https://pucl.org/manage-writings/require-transparency-around-use-of-evms-from-the-election-commission-of-india/",
    directImgUrl: "https://pucl.org/wp-content/uploads/2024/05/1lj4blt8_evm-and-vvpat_625x300_12_March_19.jpg",
    fallbackUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Indian_EVM_with_VVPAT.jpg/1024px-Indian_EVM_with_VVPAT.jpg"
  },
  {
    title: "4. Mind Map - Social Science & Natural Resources",
    desc: "Comprehensive mind map illustrating key topics, natural resources, and social science concepts.",
    imgUrl: "mindmap.png",
    directImgUrl: "mindmap.png",
    fallbackUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Renewable_energy_sources.svg/1024px-Renewable_energy_sources.svg.png"
  },
  {
    title: "5. Factors of Production & Circular Flow of Economic Income",
    desc: "Economic diagram illustrating how factors of production and income circulate in an economy.",
    imgUrl: "flow diagram.png",
    directImgUrl: "flow diagram.png",
    fallbackUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Circular_flow_of_income_model.svg/1024px-Circular_flow_of_income_model.svg.png"
  },
  {
    title: "6. Global Supply Chain & Business Workflow System",
    desc: "Key components of supply chain and business workflow system outline diagram.",
    imgUrl: "supply chain.png",
    directImgUrl: "supply chain.png",
    fallbackUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Supply_chain_stages.svg/1024px-Supply_chain_stages.svg.png"
  },
  {
    title: "7. India's Demographic Dividend Analysis",
    desc: "Statistical analysis and demographic dividend metrics for working-age population.",
    imgUrl: "https://www.amulyacharan.com/2025/07/18/indias-demographic-dividend-are-we-ready-to-reap-it/",
    directImgUrl: "https://www.amulyacharan.com/wp-content/uploads/2025/07/1-Image-Jul-14-2025-at-02_23_07-PM.jpg",
    fallbackUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/India_single_age_population_pyramid_2020.png/1024px-India_single_age_population_pyramid_2020.png"
  },
  {
    title: "8. Election Commission of India",
    desc: "Constitutional framework and operational structure of the Election Commission of India.",
    imgUrl: "eci.png",
    directImgUrl: "eci.png",
    fallbackUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Election_Commission_of_India_Logo.svg/1024px-Election_Commission_of_India_Logo.svg.png"
  }
];

function showToast(msg) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.style.cssText = 'position:fixed; bottom:20px; right:20px; z-index:99999; display:flex; flex-direction:column; gap:10px; pointer-events:none;';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.style.cssText = 'background:var(--navy-dark); color:var(--white-soft); border:1px solid var(--cyan); padding:12px 20px; border-radius:8px; box-shadow:0 10px 25px rgba(0,0,0,0.5); font-size:0.9rem; pointer-events:auto; transition:all 0.3s cubic-bezier(.22,.9,.35,1); transform:translateY(20px); opacity:0;';
  toast.innerHTML = msg;
  container.appendChild(toast);
  requestAnimationFrame(() => {
    toast.style.transform = 'translateY(0)';
    toast.style.opacity = '1';
  });
  setTimeout(() => {
    toast.style.transform = 'translateY(20px)';
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function initNavigation() {
  const nav = document.querySelector('header nav');
  const navLinks = document.querySelectorAll('.nav-link, .hero-link');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const section = document.querySelector(targetId);
        if (section) {
          document.querySelectorAll('.nav-link').forEach(n => n.classList.remove('active'));
          const matchingNavLink = document.querySelector(`.nav-link[href="${targetId}"]`);
          if (matchingNavLink) matchingNavLink.classList.add('active');
        }
      }

      // Automatically close mobile menu when any nav link is clicked
      if (nav && nav.classList.contains('open')) {
        nav.classList.remove('open');
      }
    });
  });

  // Close mobile nav when clicking anywhere outside header/nav
  document.addEventListener('click', (e) => {
    const navToggle = document.querySelector('.nav-toggle');
    if (nav && nav.classList.contains('open')) {
      if (!nav.contains(e.target) && navToggle && !navToggle.contains(e.target)) {
        nav.classList.remove('open');
      }
    }
  });

  const navToggle = document.querySelector('.nav-toggle');
  if (navToggle && nav) {
    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      nav.classList.toggle('open');
    });
  }

  window.addEventListener('scroll', handleScroll);
}

function handleScroll() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;

  const progressBar = document.getElementById('progress-bar');
  if (progressBar) progressBar.style.width = scrolled + '%';

  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    if (winScroll > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }
}

if (document.getElementById('back-to-top')) {
  document.getElementById('back-to-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function setSyllabusMode(mode) {
  STATE.syllabusMode = mode;
  safeStorageSet('g8_sst_syllabus_mode', mode);

  const isPA1 = mode === 'PA 1';
  document.querySelectorAll('#header-mode-pa1, #hero-mode-pa1').forEach(b => {
    b.classList.toggle('active', isPA1);
  });
  document.querySelectorAll('#header-mode-term1, #hero-mode-term1').forEach(b => {
    b.classList.toggle('active', !isPA1);
  });

  showToast(isPA1 ? '📝 Exam Mode: PA 1 (Chapters 1 & 2 Only)' : '🎓 Exam Mode: Term 1 (All 4 Chapters)');

  applySyllabusFilter();
}

function applySyllabusFilter() {
  const isPA1 = STATE.syllabusMode === 'PA 1';

  // 1. Section Visibility & Nav Styling
  const ch5Sec = document.getElementById('electoral-system');
  const ch7Sec = document.getElementById('factors-production');
  const navCh5 = document.getElementById('nav-electoral-system');
  const navCh7 = document.getElementById('nav-factors-production');

  if (ch5Sec) ch5Sec.style.display = isPA1 ? 'none' : 'block';
  if (ch7Sec) ch7Sec.style.display = isPA1 ? 'none' : 'block';

  if (navCh5) {
    navCh5.style.opacity = isPA1 ? '0.4' : '1';
    navCh5.style.pointerEvents = isPA1 ? 'none' : 'auto';
    navCh5.title = isPA1 ? 'Term 1 Only' : '';
  }
  if (navCh7) {
    navCh7.style.opacity = isPA1 ? '0.4' : '1';
    navCh7.style.pointerEvents = isPA1 ? 'none' : 'auto';
    navCh7.title = isPA1 ? 'Term 1 Only' : '';
  }

  // 2. Re-render Grid Views
  renderTopics();
  renderFlashcards();
  renderQuiz();
  renderImportantQuestions();
  renderGlossary();
  renderDiagrams();
  renderQuickRevision();
  updateHeroStats();
}

function updateHeroStats() {
  const isPA1 = STATE.syllabusMode === 'PA 1';
  const pa1Topics = TOPICS.filter(t => t.chapterId === 'natural-resources' || t.chapterId === 'political-map');
  const pa1Flashcards = FLASHCARDS.filter(c => c.topic === 'Natural Resources' || c.topic === 'Political Map');
  const pa1Mcqs = MCQS.filter(q => q.topic === 'Natural Resources' || q.topic === 'Political Map');

  const totalFc = isPA1 ? pa1Flashcards.length : FLASHCARDS.length;
  const totalMcqs = isPA1 ? pa1Mcqs.length : MCQS.length;

  const statTopics = document.getElementById('stat-total-topics');
  if (statTopics) statTopics.textContent = isPA1 ? `${pa1Topics.length} (PA 1)` : `${TOPICS.length} (Term 1)`;

  const statFc = document.getElementById('stat-fc-learned');
  if (statFc) statFc.textContent = `${STATE.learnedFlashcards.length} / ${totalFc}`;

  const statQuiz = document.getElementById('stat-quiz-high');
  if (statQuiz) statQuiz.textContent = `${STATE.quizHighScore} / ${totalMcqs}`;

  const statBm = document.getElementById('stat-bookmarks');
  if (statBm) statBm.textContent = STATE.bookmarks.length;
}

function getActiveTopics() {
  const isPA1 = STATE.syllabusMode === 'PA 1';
  const query = (document.getElementById('search-input')?.value || '').toLowerCase().trim();

  return TOPICS.filter(topic => {
    if (isPA1 && (topic.chapterId === 'electoral-system' || topic.chapterId === 'factors-production')) {
      return false;
    }
    if (query) {
      return (
        topic.title.toLowerCase().includes(query) ||
        topic.preview.toLowerCase().includes(query) ||
        topic.contentHtml.toLowerCase().includes(query)
      );
    }
    return true;
  });
}

function renderTopics() {
  const grids = {
    'natural-resources': document.getElementById('natural-resources-grid'),
    'political-map': document.getElementById('political-map-grid'),
    'electoral-system': document.getElementById('electoral-system-grid'),
    'factors-production': document.getElementById('factors-production-grid')
  };

  Object.values(grids).forEach(grid => { if (grid) grid.innerHTML = ''; });

  const activeTopics = getActiveTopics();

  activeTopics.forEach((topic) => {
    const grid = grids[topic.chapterId];
    if (!grid) return;

    const fullIdx = TOPICS.findIndex(t => t.id === topic.id);
    const isBookmarked = STATE.bookmarks.includes(topic.id);

    const card = document.createElement('div');
    card.className = 'card topic-card';
    card.setAttribute('data-topic-id', topic.id);
    card.innerHTML = `
      <div class="card-top">
        <span class="card-icon">${topic.icon}</span>
        <span class="difficulty-badge ${topic.difficulty.toLowerCase()}">${topic.difficulty}</span>
      </div>
      <h3 class="card-title">${topic.title}</h3>
      <p class="card-preview">${topic.preview}</p>
      <div class="card-meta">
        <span>⏱️ ${topic.readTime}</span>
        <button class="bm-btn ${isBookmarked ? 'active' : ''}" onclick="event.stopPropagation(); toggleBookmark('${topic.id}')" title="Bookmark Topic">
          ${isBookmarked ? '★ Bookmarked' : '☆ Bookmark'}
        </button>
      </div>
    `;

    card.addEventListener('click', () => openModal(fullIdx));
    grid.appendChild(card);
  });
}

function toggleBookmark(id) {
  const idx = STATE.bookmarks.indexOf(id);
  if (idx === -1) {
    STATE.bookmarks.push(id);
    showToast('✨ Topic bookmarked!');
  } else {
    STATE.bookmarks.splice(idx, 1);
    showToast('Removed from bookmarks');
  }
  localStorage.setItem('g8_sst_bookmarks', JSON.stringify(STATE.bookmarks));

  const isBookmarked = STATE.bookmarks.includes(id);
  const cardBtns = document.querySelectorAll(`[data-topic-id="${id}"] .bm-btn`);
  cardBtns.forEach(btn => {
    btn.classList.toggle('active', isBookmarked);
    btn.innerHTML = isBookmarked ? '★ Bookmarked' : '☆ Bookmark';
  });

  const statBm = document.getElementById('stat-bookmarks');
  if (statBm) statBm.textContent = STATE.bookmarks.length;

  const modalBm = document.getElementById('modal-bookmark');
  if (modalBm) {
    modalBm.textContent = isBookmarked ? '★' : '☆';
  }

  updateHeroStats();
}

function openModal(index) {
  if (index < 0 || index >= TOPICS.length) return;
  STATE.currentTopicIndex = index;
  const topic = TOPICS[index];
  if (!topic) return;

  const overlay = document.getElementById('modal-overlay');
  const icon = document.getElementById('modal-icon');
  const title = document.getElementById('modal-title');
  const body = document.getElementById('modal-body');
  const bookmarkBtn = document.getElementById('modal-bookmark');

  if (icon) icon.textContent = topic.icon;
  if (title) title.textContent = topic.title;
  if (body) {
    body.innerHTML = topic.contentHtml;
    body.scrollTop = 0; // Reset scroll to beginning of topic
    body.style.opacity = '1'; // Fix opacity bug
    body.style.transform = 'none'; // Fix transform bug
  }
  if (bookmarkBtn) {
    bookmarkBtn.textContent = STATE.bookmarks.includes(topic.id) ? '★' : '☆';
    bookmarkBtn.onclick = (e) => {
      e.stopPropagation();
      toggleBookmark(topic.id);
    };
  }

  if (overlay) {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  setupModalBodyScroll();
  setupKeyboardListeners();
  setupModalSwipeGestures();
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  if (overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

}

function applySyllabusFilter() {
  const isPA1 = STATE.syllabusMode === 'PA 1';

  // 1. Section Visibility & Nav Styling
  const ch5Sec = document.getElementById('electoral-system');
  const ch7Sec = document.getElementById('factors-production');
  const navCh5 = document.getElementById('nav-electoral-system');
  const navCh7 = document.getElementById('nav-factors-production');

  if (ch5Sec) ch5Sec.style.display = isPA1 ? 'none' : 'block';
  if (ch7Sec) ch7Sec.style.display = isPA1 ? 'none' : 'block';

  if (navCh5) {
    navCh5.style.opacity = isPA1 ? '0.4' : '1';
    navCh5.style.pointerEvents = isPA1 ? 'none' : 'auto';
    navCh5.title = isPA1 ? 'Term 1 Only' : '';
  }
  if (navCh7) {
    navCh7.style.opacity = isPA1 ? '0.4' : '1';
    navCh7.style.pointerEvents = isPA1 ? 'none' : 'auto';
    navCh7.title = isPA1 ? 'Term 1 Only' : '';
  }

  // 2. Re-render Grid Views
  renderTopics();
  renderFlashcards();
  renderQuiz();
  renderImportantQuestions();
  renderGlossary();
  renderDiagrams();
  renderQuickRevision();
  updateHeroStats();
}

function updateHeroStats() {
  const isPA1 = STATE.syllabusMode === 'PA 1';
  const pa1Topics = TOPICS.filter(t => t.chapterId === 'natural-resources' || t.chapterId === 'political-map');
  const pa1Flashcards = FLASHCARDS.filter(c => c.topic === 'Natural Resources' || c.topic === 'Political Map');
  const pa1Mcqs = MCQS.filter(q => q.topic === 'Natural Resources' || q.topic === 'Political Map');

  const totalFc = isPA1 ? pa1Flashcards.length : FLASHCARDS.length;
  const totalMcqs = isPA1 ? pa1Mcqs.length : MCQS.length;

  const statTopics = document.getElementById('stat-total-topics');
  if (statTopics) statTopics.textContent = isPA1 ? `${pa1Topics.length} (PA 1)` : `${TOPICS.length} (Term 1)`;

  const statFc = document.getElementById('stat-fc-learned');
  if (statFc) statFc.textContent = `${STATE.learnedFlashcards.length} / ${totalFc}`;

  const statQuiz = document.getElementById('stat-quiz-high');
  if (statQuiz) statQuiz.textContent = `${STATE.quizHighScore} / ${totalMcqs}`;

  const statBm = document.getElementById('stat-bookmarks');
  if (statBm) statBm.textContent = STATE.bookmarks.length;
}

function getActiveTopics() {
  const isPA1 = STATE.syllabusMode === 'PA 1';
  const query = (document.getElementById('search-input')?.value || '').toLowerCase().trim();

  return TOPICS.filter(topic => {
    if (isPA1 && (topic.chapterId === 'electoral-system' || topic.chapterId === 'factors-production')) {
      return false;
    }
    if (query) {
      return (
        topic.title.toLowerCase().includes(query) ||
        topic.preview.toLowerCase().includes(query) ||
        topic.contentHtml.toLowerCase().includes(query)
      );
    }
    return true;
  });
}


let isKeyboardListenerSet = false;

function navigateModalTopic(direction) {
  const activeTopics = getActiveTopics();
  if (!activeTopics || activeTopics.length === 0) return;

  const currentTopic = TOPICS[STATE.currentTopicIndex];
  let activeIdx = -1;
  if (currentTopic) {
    activeIdx = activeTopics.findIndex(t => t.id === currentTopic.id);
  }
  if (activeIdx === -1) {
    activeIdx = direction > 0 ? -1 : 0;
  }

  let newActiveIdx = (activeIdx + direction + activeTopics.length) % activeTopics.length;
  const targetTopic = activeTopics[newActiveIdx];
  if (!targetTopic || !targetTopic.id) return;

  const targetFullIdx = TOPICS.findIndex(t => t.id === targetTopic.id);
  if (targetFullIdx !== -1) {
    openModal(targetFullIdx);
  }
}

function setupKeyboardListeners() {
  if (isKeyboardListenerSet) return;
  isKeyboardListenerSet = true;
  document.addEventListener('keydown', (e) => {
    const overlay = document.getElementById('modal-overlay');
    if (!overlay || !overlay.classList.contains('open')) return;

    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowRight') {
      navigateModalTopic(1);
    } else if (e.key === 'ArrowLeft') {
      navigateModalTopic(-1);
    }
  });
}

function setupModalSwipeGestures() {
  const modalBox = document.querySelector('#modal-overlay .modal-box');
  if (!modalBox || modalBox.dataset.swipeInitialized) return;
  modalBox.dataset.swipeInitialized = 'true';

  let startX = 0;
  let startY = 0;

  modalBox.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }
  }, { passive: true });

  modalBox.addEventListener('touchend', (e) => {
    if (e.changedTouches.length === 1) {
      const diffX = e.changedTouches[0].clientX - startX;
      const diffY = e.changedTouches[0].clientY - startY;

      if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY) * 1.4) {
        if (diffX < 0) {
          navigateModalTopic(1);
        } else {
          navigateModalTopic(-1);
        }
      }
    }
  }, { passive: true });
}

function setupModalBodyScroll() {
  const body = document.getElementById('modal-body');
  const progress = document.getElementById('modal-progress');
  if (!body || !progress) return;

  body.scrollTop = 0;
  progress.style.width = '0%';

  body.onscroll = () => {
    const scrolled = (body.scrollTop / (body.scrollHeight - body.clientHeight)) * 100;
    progress.style.width = (scrolled || 0) + '%';
  };
}

function copyModalContent() {
  const topic = TOPICS[STATE.currentTopicIndex];
  if (!topic) return;
  const temp = document.createElement('div');
  temp.innerHTML = topic.contentHtml;
  const text = `${topic.title}\n\n${temp.textContent || temp.innerText}`;
  navigator.clipboard.writeText(text).then(() => {
    showToast('📋 Topic notes copied to clipboard!');
  });
}

function getFlashcardTopicCards(topicName) {
  const cards = FLASHCARDS.filter(card => card.topic === topicName);
  if (topicName === 'Political Map') {
    return cards.slice(0, 125);
  }
  return cards;
}

function getFlashcardCount(topicName) {
  return getFlashcardTopicCards(topicName).length;
}

function renderFlashcards() {
  const isPA1 = STATE.syllabusMode === 'PA 1';
  const basePool = isPA1
    ? [...getFlashcardTopicCards('Natural Resources'), ...getFlashcardTopicCards('Political Map')]
    : FLASHCARDS;

  if (isPA1) {
    STATE.flashcardFiltered = basePool;
  } else if (STATE.flashcardSelectedTopics && STATE.flashcardSelectedTopics.length > 0) {
    STATE.flashcardFiltered = FLASHCARDS.filter(c => STATE.flashcardSelectedTopics.includes(c.topic));
  } else {
    STATE.flashcardFiltered = [...FLASHCARDS];
  }

  const filterBtns = document.querySelectorAll('#flashcards .flashcard-controls button');
  filterBtns.forEach(btn => {
    const txt = String(btn ? btn.textContent || '' : '').trim();
    if (txt.includes('Shuffle') || txt.includes('🔀')) return;

    if (txt.includes('All Topics')) {
      btn.textContent = `All Topics (${basePool.length})`;
    } else if (txt.includes('Natural Resources')) {
      const cnt = getFlashcardCount('Natural Resources');
      btn.textContent = `Natural Resources (${cnt})`;
    } else if (txt.includes('Political Map')) {
      const cnt = getFlashcardCount('Political Map');
      btn.textContent = `Political Map (${cnt})`;
    } else if (txt.includes('Electoral System')) {
      const cnt = getFlashcardCount('Electoral System');
      btn.textContent = `Electoral System (${cnt})`;
      btn.style.opacity = isPA1 ? '0.35' : '1';
      btn.style.pointerEvents = isPA1 ? 'none' : 'auto';
      btn.title = isPA1 ? 'Term 1 Only' : '';
    } else if (txt.includes('Factors of Production')) {
      const cnt = getFlashcardCount('Factors of Production');
      btn.textContent = `Factors of Production (${cnt})`;
      btn.style.opacity = isPA1 ? '0.35' : '1';
      btn.style.pointerEvents = isPA1 ? 'none' : 'auto';
      btn.title = isPA1 ? 'Term 1 Only' : '';
    }
  });

  if (STATE.flashcardIndex >= STATE.flashcardFiltered.length) {
    STATE.flashcardIndex = 0;
  }
  updateFlashcardUI();
}

function updateFlashcardUI() {
  if (!STATE.flashcardFiltered || STATE.flashcardFiltered.length === 0) return;

  if (STATE.flashcardIndex >= STATE.flashcardFiltered.length || STATE.flashcardIndex < 0) {
    STATE.flashcardIndex = 0;
  }

  const card = STATE.flashcardFiltered[STATE.flashcardIndex];
  if (!card) return;

  const tag = document.getElementById('fc-tag');
  const q = document.getElementById('fc-question');
  const a = document.getElementById('fc-answer');
  const counter = document.getElementById('fc-counter');
  const markBtn = document.getElementById('fc-mark-btn');
  const fcEl = document.getElementById('flashcard');

  if (fcEl) fcEl.classList.remove('flipped');

  if (tag) tag.textContent = card.topic.toUpperCase();
  if (q) q.textContent = card.q;
  if (a) a.textContent = card.a;
  if (counter) counter.textContent = `${STATE.flashcardIndex + 1} / ${STATE.flashcardFiltered.length}`;

  const isLearned = STATE.learnedFlashcards.includes(card.q);
  if (markBtn) {
    markBtn.textContent = isLearned ? '✓ Learned' : 'Mark as Learned';
    markBtn.style.background = isLearned ? 'var(--emerald)' : '';
  }
}

function flipFlashcard() {
  const fc = document.getElementById('flashcard');
  if (fc) fc.classList.toggle('flipped');
}

function nextFlashcard() {
  if (!STATE.flashcardFiltered || STATE.flashcardFiltered.length === 0) return;
  STATE.flashcardIndex = (STATE.flashcardIndex + 1) % STATE.flashcardFiltered.length;
  updateFlashcardUI();
}

function prevFlashcard() {
  if (!STATE.flashcardFiltered || STATE.flashcardFiltered.length === 0) return;
  STATE.flashcardIndex = (STATE.flashcardIndex - 1 + STATE.flashcardFiltered.length) % STATE.flashcardFiltered.length;
  updateFlashcardUI();
}

function toggleMarkLearned() {
  const card = STATE.flashcardFiltered[STATE.flashcardIndex];
  if (!card) return;

  const idx = STATE.learnedFlashcards.indexOf(card.q);
  if (idx === -1) {
    STATE.learnedFlashcards.push(card.q);
    showToast('🎉 Flashcard marked as learned!');
  } else {
    STATE.learnedFlashcards.splice(idx, 1);
    showToast('Flashcard un-marked');
  }
  safeStorageSet('g8_sst_learned_fc', JSON.stringify(STATE.learnedFlashcards));
  updateFlashcardUI();
  updateHeroStats();
};

function printModalContent() {
  const topic = TOPICS[STATE.currentTopicIndex];
  if (!topic) return;
  const printWin = window.open('', '_blank');
  printWin.document.write(`
    <html><head><title>${topic.title} — SST Study Guide</title></head><body>
      <h1>${topic.title}</h1>
      ${topic.contentHtml}
    </body></html>
  `);
  printWin.document.close();
  printWin.focus();
  printWin.print();
}
  safeStorageSet('g8_sst_learned_fc', JSON.stringify(STATE.learnedFlashcards));
  updateFlashcardUI();
  updateHeroStats();
// end fc

function filterFlashcards(event, topicName) {
  if (!STATE.flashcardSelectedTopics) STATE.flashcardSelectedTopics = [];

  if (topicName === 'All') {
    STATE.flashcardSelectedTopics = [];
  } else {
    const idx = STATE.flashcardSelectedTopics.indexOf(topicName);
    if (idx >= 0) {
      STATE.flashcardSelectedTopics.splice(idx, 1);
    } else {
      STATE.flashcardSelectedTopics.push(topicName);
    }
  }

  const buttons = document.querySelectorAll('#flashcards .flashcard-controls button');
  buttons.forEach(btn => {
    const text = (btn.textContent || '').trim();
    if (text.includes('Shuffle') || text.includes('🔀')) return;

    if (STATE.flashcardSelectedTopics.length === 0) {
      if (text.includes('All Topics')) btn.classList.add('active');
      else btn.classList.remove('active');
    } else {
      if (text.includes('All Topics')) {
        btn.classList.remove('active');
      } else {
        const isSel = STATE.flashcardSelectedTopics.some(t => text.includes(t));
        if (isSel) btn.classList.add('active');
        else btn.classList.remove('active');
      }
    }
  });

  const isPA1 = STATE.syllabusMode === 'PA 1';
  const basePool = isPA1
    ? [...getFlashcardTopicCards('Natural Resources'), ...getFlashcardTopicCards('Political Map')]
    : FLASHCARDS;

  if (STATE.flashcardSelectedTopics.length === 0) {
    STATE.flashcardFiltered = [...basePool];
    showToast(`Flashcards: All Topics (${basePool.length} Cards)`);
  } else {
    STATE.flashcardFiltered = basePool.filter(c => STATE.flashcardSelectedTopics.includes(c.topic));
    const countLabel = STATE.flashcardSelectedTopics.length === 1
      ? STATE.flashcardSelectedTopics[0]
      : `${STATE.flashcardSelectedTopics.length} Topics Selected`;
    showToast(`Flashcards: ${countLabel} (${STATE.flashcardFiltered.length} Cards)`);
  }

  STATE.flashcardIndex = 0;
  updateFlashcardUI();
}

function shuffleFlashcards() {
  const isPA1 = STATE.syllabusMode === 'PA 1';
  if (isPA1) {
    STATE.flashcardFiltered = STATE.flashcardFiltered.filter(c => c.topic === 'Natural Resources' || c.topic === 'Political Map');
  }
  for (let i = STATE.flashcardFiltered.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [STATE.flashcardFiltered[i], STATE.flashcardFiltered[j]] = [STATE.flashcardFiltered[j], STATE.flashcardFiltered[i]];
  }
  STATE.flashcardIndex = 0;
  updateFlashcardUI();
  showToast('🔀 Flashcards shuffled!');
}

function renderQuiz() {
  const isPA1 = STATE.syllabusMode === 'PA 1';
  const basePool = isPA1
    ? MCQS.filter(q => q.topic === 'Natural Resources' || q.topic === 'Political Map')
    : MCQS;

  if (isPA1) {
    STATE.quizActiveQuestions = basePool;
  } else if (!STATE.quizSelectedTopics || STATE.quizSelectedTopics.length === 0) {
    STATE.quizActiveQuestions = [...MCQS];
  } else {
    STATE.quizActiveQuestions = MCQS.filter(q => STATE.quizSelectedTopics.includes(q.topic));
  }

  const filterBtns = document.querySelectorAll('.quiz-controls button, .mcq-filter-btn');
  filterBtns.forEach(btn => {
    const txt = (btn.textContent || '').trim();
    if (txt.includes('Shuffle') || txt.includes('🔀')) return;

    if (txt.includes('All Topics')) {
      btn.textContent = `All Topics (${basePool.length})`;
    } else if (txt.includes('Natural Resources')) {
      const cnt = MCQS.filter(q => q.topic === 'Natural Resources').length;
      btn.textContent = `Natural Resources (${cnt})`;
    } else if (txt.includes('Political Map')) {
      const cnt = MCQS.filter(q => q.topic === 'Political Map').length;
      btn.textContent = `Political Map (${cnt})`;
    } else if (txt.includes('Electoral System')) {
      const cnt = MCQS.filter(q => q.topic === 'Electoral System').length;
      btn.textContent = `Electoral System (${cnt})`;
      btn.style.opacity = isPA1 ? '0.35' : '1';
      btn.style.pointerEvents = isPA1 ? 'none' : 'auto';
      btn.title = isPA1 ? 'Term 1 Only' : '';
    } else if (txt.includes('Factors of Production')) {
      const cnt = MCQS.filter(q => q.topic === 'Factors of Production').length;
      btn.textContent = `Factors of Production (${cnt})`;
      btn.style.opacity = isPA1 ? '0.35' : '1';
      btn.style.pointerEvents = isPA1 ? 'none' : 'auto';
      btn.title = isPA1 ? 'Term 1 Only' : '';
    }
  });

  STATE.quizIndex = 0;
  STATE.quizScore = 0;
  resetQuizContainerUI();
  updateQuizQuestion();
}

function filterQuiz(event, topicName) {
  if (!STATE.quizSelectedTopics) STATE.quizSelectedTopics = [];

  if (topicName === 'All') {
    STATE.quizSelectedTopics = [];
  } else {
    const idx = STATE.quizSelectedTopics.indexOf(topicName);
    if (idx >= 0) {
      STATE.quizSelectedTopics.splice(idx, 1);
    } else {
      STATE.quizSelectedTopics.push(topicName);
    }
  }

  const buttons = document.querySelectorAll('.quiz-controls button, .mcq-filter-btn');
  buttons.forEach(btn => {
    const text = (btn.textContent || '').trim();
    if (text.includes('Shuffle') || text.includes('🔀')) return;

    if (STATE.quizSelectedTopics.length === 0) {
      if (text.includes('All Topics')) btn.classList.add('active');
      else btn.classList.remove('active');
    } else {
      if (text.includes('All Topics')) {
        btn.classList.remove('active');
      } else {
        const isSel = STATE.quizSelectedTopics.some(t => text.includes(t));
        if (isSel) btn.classList.add('active');
        else btn.classList.remove('active');
      }
    }
  });

  const isPA1 = STATE.syllabusMode === 'PA 1';
  const basePool = isPA1
    ? MCQS.filter(q => q.topic === 'Natural Resources' || q.topic === 'Political Map')
    : MCQS;

  if (STATE.quizSelectedTopics.length === 0) {
    STATE.quizActiveQuestions = [...basePool];
    showToast(`Quiz Filtered: All Topics (${basePool.length} Questions)`);
  } else {
    STATE.quizActiveQuestions = basePool.filter(q => STATE.quizSelectedTopics.includes(q.topic));
    const countLabel = STATE.quizSelectedTopics.length === 1
      ? STATE.quizSelectedTopics[0]
      : `${STATE.quizSelectedTopics.length} Topics Selected`;
    showToast(`Quiz Filtered: ${countLabel} (${STATE.quizActiveQuestions.length} Questions)`);
  }

  STATE.quizIndex = 0;
  STATE.quizScore = 0;
  resetQuizContainerUI();
  updateQuizQuestion();
}

function shuffleQuiz() {
  const isPA1 = STATE.syllabusMode === 'PA 1';
  const basePool = isPA1
    ? MCQS.filter(q => q.topic === 'Natural Resources' || q.topic === 'Political Map')
    : MCQS;

  if (!STATE.quizSelectedTopics) STATE.quizSelectedTopics = [];
  if (!STATE.quizActiveQuestions || STATE.quizActiveQuestions.length === 0) {
    if (STATE.quizSelectedTopics.length === 0) {
      STATE.quizActiveQuestions = [...basePool];
    } else {
      STATE.quizActiveQuestions = basePool.filter(q => STATE.quizSelectedTopics.includes(q.topic));
    }
  }

  STATE.quizActiveQuestions.forEach(q => { delete q._shuffledOpts; delete q._shuffledAns; });

  for (let i = STATE.quizActiveQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [STATE.quizActiveQuestions[i], STATE.quizActiveQuestions[j]] = [STATE.quizActiveQuestions[j], STATE.quizActiveQuestions[i]];
  }
  STATE.quizIndex = 0;
  STATE.quizScore = 0;
  resetQuizContainerUI();
  updateQuizQuestion();
  showToast('🔀 Quiz MCQs Shuffled!');
}

function resetQuizContainerUI() {
  const container = document.getElementById('quiz-container');
  if (!container) return;

  if (!document.getElementById('quiz-q-title')) {
    container.innerHTML = `
      <div class="quiz-header">
        <span class="quiz-progress-text" id="quiz-count">Question 1 of ${STATE.quizActiveQuestions.length}</span>
        <span class="quiz-score-badge" id="quiz-score-badge">Score: 0 / ${STATE.quizActiveQuestions.length}</span>
      </div>
      <div class="quiz-progress-bar">
        <div class="quiz-progress-fill" id="quiz-fill"></div>
      </div>

      <h3 class="quiz-q-title" id="quiz-q-title">Question loading...</h3>
      <div class="quiz-options" id="quiz-options"></div>

      <div class="quiz-explanation" id="quiz-explanation"></div>

      <div style="margin-top:20px; display:flex; justify-content:space-between; align-items:center;">
        <span id="quiz-badge-topic" style="font-size:0.8rem; font-weight:700; color:var(--cyan); text-transform:uppercase; letter-spacing:1px;"></span>
        <button class="cta-btn" id="quiz-next-btn" style="display:none;" onclick="nextQuizQuestion()">
          Next Question →
        </button>
      </div>
    `;
  }
}

function prepareQuestionOptions(q) {
  if (!q._shuffledOpts) {
    const indexedOpts = q.opts.map((opt, idx) => ({ text: opt, isCorrect: idx === (q.ans !== undefined ? q.ans : 0) }));
    for (let i = indexedOpts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indexedOpts[i], indexedOpts[j]] = [indexedOpts[j], indexedOpts[i]];
    }
    q._shuffledOpts = indexedOpts.map(o => o.text);
    q._shuffledAns = indexedOpts.findIndex(o => o.isCorrect);
  }
}

function updateQuizQuestion() {
  resetQuizContainerUI();
  const q = STATE.quizActiveQuestions[STATE.quizIndex];
  if (!q) return;

  prepareQuestionOptions(q);

  const count = document.getElementById('quiz-count');
  const scoreBadge = document.getElementById('quiz-score-badge');
  const fill = document.getElementById('quiz-fill');
  const title = document.getElementById('quiz-q-title');
  const optionsWrap = document.getElementById('quiz-options');
  const expWrap = document.getElementById('quiz-explanation');
  const nextBtn = document.getElementById('quiz-next-btn');
  const topicBadge = document.getElementById('quiz-badge-topic');

  if (count) count.textContent = `Question ${STATE.quizIndex + 1} of ${STATE.quizActiveQuestions.length}`;
  if (scoreBadge) scoreBadge.textContent = `Score: ${STATE.quizScore} / ${STATE.quizActiveQuestions.length}`;
  if (fill) fill.style.width = `${((STATE.quizIndex + 1) / STATE.quizActiveQuestions.length) * 100}%`;
  if (title) title.textContent = q.q;
  if (topicBadge) topicBadge.textContent = `🏷️ ${q.topic || 'General'}`;

  if (expWrap) { expWrap.style.display = 'none'; expWrap.innerHTML = ''; }
  if (nextBtn) nextBtn.style.display = 'none';

  if (optionsWrap) {
    optionsWrap.innerHTML = '';
    const displayOpts = q._shuffledOpts || q.opts;
    displayOpts.forEach((optText, optIdx) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-opt-btn';
      btn.innerHTML = `<span class="opt-letter">${String.fromCharCode(65 + optIdx)}</span> ${optText}`;
      btn.onclick = () => selectQuizOption(optIdx);
      optionsWrap.appendChild(btn);
    });
  }
}

function selectQuizOption(selectedIdx) {
  const q = STATE.quizActiveQuestions[STATE.quizIndex];
  if (!q) return;

  const buttons = document.querySelectorAll('.quiz-opt-btn');
  buttons.forEach(btn => btn.disabled = true);

  const targetAns = q._shuffledAns !== undefined ? q._shuffledAns : (q.ans || 0);
  const isCorrect = selectedIdx === targetAns;
  if (isCorrect) {
    buttons[selectedIdx].classList.add('correct');
    STATE.quizScore++;
    showToast('✨ Correct Answer!');
  } else {
    buttons[selectedIdx].classList.add('wrong');
    if (buttons[targetAns]) buttons[targetAns].classList.add('correct');
    showToast('❌ Incorrect answer');
  }

  const scoreBadge = document.getElementById('quiz-score-badge');
  if (scoreBadge) scoreBadge.textContent = `Score: ${STATE.quizScore} / ${STATE.quizActiveQuestions.length}`;

  if (STATE.quizScore > STATE.quizHighScore) {
    STATE.quizHighScore = STATE.quizScore;
    safeStorageSet('g8_sst_quiz_score', STATE.quizHighScore.toString());
    updateHeroStats();
  }

  const expWrap = document.getElementById('quiz-explanation');
  if (expWrap) {
    expWrap.style.display = 'block';
    expWrap.innerHTML = `<strong>${isCorrect ? '💡 Explanation:' : '💡 Correct Answer & Rationale:'}</strong> ${q.exp}`;
  }



  const nextBtn = document.getElementById('quiz-next-btn');
  if (nextBtn) nextBtn.style.display = 'inline-block';
}

function nextQuizQuestion() {
  if (STATE.quizIndex < STATE.quizActiveQuestions.length - 1) {
    STATE.quizIndex++;
    updateQuizQuestion();
  } else {
    renderQuizResults();
  }
}

function renderQuizResults() {
  const container = document.getElementById('quiz-container');
  if (!container) return;

  const percent = Math.round((STATE.quizScore / STATE.quizActiveQuestions.length) * 100);
  container.innerHTML = `
    <div style="text-align:center; padding:30px 10px;">
      <h2 style="color:var(--cyan); font-size:2rem; margin-bottom:10px;">🎉 Quiz Completed!</h2>
      <p style="font-size:1.1rem; color:var(--gray-light);">Filtered Topic: <strong style="color:var(--cyan);">${STATE.quizCurrentTopicFilter || 'All Topics'}</strong></p>
      <p style="font-size:1.3rem; color:var(--white-soft); margin:15px 0;">Final Score: <strong style="color:var(--emerald);">${STATE.quizScore} / ${STATE.quizActiveQuestions.length}</strong> (${percent}%)</p>
      <div style="margin:25px 0; display:flex; gap:15px; justify-content:center; flex-wrap:wrap;">
        <button class="cta-btn" onclick="filterQuiz(null, '${STATE.quizCurrentTopicFilter || 'All'}')">🔄 Restart Quiz</button>
        <button class="cta-btn" style="background:linear-gradient(135deg, var(--rose), #e11d48);" onclick="shuffleQuiz()">🔀 Shuffle & Re-try</button>
      </div>
    </div>
  `;
}


const IMPORTANT_QUESTIONS = {
  m1: [{'topic': 'Natural Resources', 'q': 'What is a resource?', 'a': 'Anything found in nature or created by human effort that has utility and value to satisfy human needs is called a resource.'}, {'topic': 'Natural Resources', 'q': "Define 'Ubiquitous Resources' with an example.", 'a': 'Resources that are found everywhere on Earth are called ubiquitous resources. <em>Example:</em> Air (Oxygen), Sunlight.'}, {'topic': 'Natural Resources', 'q': 'Which factor converts a natural substance into a resource?', 'a': 'Human intelligence, technology, and utility convert natural substances into valuable resources.'}, {'topic': 'Natural Resources', 'q': 'Give one example of a non-renewable resource.', 'a': 'Coal, Petroleum, or Natural Gas.'}, {'topic': 'Natural Resources', 'q': 'What is land degradation?', 'a': 'The decline in the productive quality and fertility of land due to natural or human factors is known as land degradation.'}, {'topic': 'Natural Resources', 'q': 'Which parent rock factor determines the color, texture, and mineral content of soil?', 'a': 'The Parent Rock (or Bedrock).'}, {'topic': 'Natural Resources', 'q': "What percentage of Earth's surface is covered by water?", 'a': "Approximately 71% of the Earth's surface is covered by water."}, {'topic': 'Natural Resources', 'q': "Define 'Rainwater Harvesting'.", 'a': 'Rainwater harvesting is the technique of collecting and storing rainwater runoff from rooftops and land surfaces for future productive use and groundwater recharge.'}, {'topic': 'Natural Resources', 'q': 'What is biosphere?', 'a': 'Biosphere is the narrow zone of contact between the lithosphere, hydrosphere, and atmosphere where life exists.'}, {'topic': 'Natural Resources', 'q': 'Name one measure to conserve wildlife.', 'a': 'Establishing National Parks, Wildlife Sanctuaries, and Biosphere Reserves, or enforcing strict anti-poaching laws.'}, {'topic': 'Political Map', 'q': 'What is a Constitution?', 'a': 'A Constitution is a supreme written legal document containing fundamental laws, rules, and principles according to which a nation is governed.'}, {'topic': 'Political Map', 'q': "Who is known as the 'Father of the Indian Constitution'?", 'a': 'Dr. B. R. Ambedkar.'}, {'topic': 'Political Map', 'q': 'On which date did the Constitution of India come into effect?', 'a': '26th January 1950.'}, {'topic': 'Political Map', 'q': "Define 'Secularism' in the Indian context.", 'a': 'Secularism means that the State has no official religion, treats all religions equally, and guarantees freedom of faith to every citizen.'}, {'topic': 'Political Map', 'q': 'Which organ of the government makes laws for the nation?', 'a': 'The Legislature (Parliament).'}, {'topic': 'Political Map', 'q': 'What is the lower house of the Indian Parliament called?', 'a': 'Lok Sabha (House of the People).'}, {'topic': 'Political Map', 'q': 'Who is the Constitutional Head of the State in India?', 'a': 'The President of India.'}, {'topic': 'Political Map', 'q': "What is 'Rule of Law'?", 'a': 'Rule of Law means that all laws apply equally to all citizens regardless of their status, wealth, power, or gender, and no person is above the law.'}, {'topic': 'Political Map', 'q': 'Name the highest court of justice in India.', 'a': 'The Supreme Court of India.'}, {'topic': 'Political Map', 'q': 'What is Judicial Review?', 'a': 'Judicial Review is the power of the Judiciary to declare any law passed by Parliament unconstitutional if it violates fundamental provisions of the Constitution.'}, {'topic': 'Electoral System', 'q': 'What is Universal Adult Franchise?', 'a': 'It is the democratic right of every adult citizen (aged 18 and above) to vote in elections without discrimination based on caste, gender, religion, wealth, or status.'}, {'topic': 'Electoral System', 'q': 'What was the minimum voting age in India before the 61st Constitutional Amendment?', 'a': '21 years.'}, {'topic': 'Electoral System', 'q': 'What is an Electoral Roll?', 'a': 'An Electoral Roll (voter list) is an official list prepared by the Election Commission containing names of all eligible voters in a constituency.'}, {'topic': 'Electoral System', 'q': "Expand the acronym 'EVM'.", 'a': 'Electronic Voting Machine.'}, {'topic': 'Electoral System', 'q': 'What is a General Election?', 'a': 'Elections held simultaneously across all constituencies nationwide or statewide at the end of a regular 5-year legislative term.'}, {'topic': 'Electoral System', 'q': 'What is a By-Election?', 'a': 'An election held to fill a vacant legislative seat caused by the death, resignation, or disqualification of an incumbent member before their term ends.'}, {'topic': 'Electoral System', 'q': 'What is an Election Manifesto?', 'a': 'A published document issued by a political party before elections outlining its policies, programs, and promises to the public if elected to power.'}, {'topic': 'Electoral System', 'q': "Define 'Constituency'.", 'a': 'A geographical area demarcated for electoral purposes whose registered voters elect a representative to the legislature.'}, {'topic': 'Electoral System', 'q': 'What is the Model Code of Conduct (MCC)?', 'a': 'A set of ethical guidelines issued by the ECI for political parties and candidates to ensure free, fair, and peaceful campaigning.'}, {'topic': 'Electoral System', 'q': 'What is an Opposition Party?', 'a': 'The political party or alliance that does not form the government but sits in the legislature to scrutinize, question, and criticize ruling party policies.'}, {'topic': 'Factors of Production', 'q': 'What are Factors of Production?', 'a': 'Inputs and resources (Land, Labour, Capital, Entrepreneurship) required to produce goods and services.'}, {'topic': 'Factors of Production', 'q': 'Name the primary natural factor of production.', 'a': 'Land.'}, {'topic': 'Factors of Production', 'q': 'What is the economic reward paid for using Land?', 'a': 'Rent.'}, {'topic': 'Factors of Production', 'q': "Define 'Labour' in economics.", 'a': 'Any human physical or mental exertion undertaken for monetary compensation (wages).'}, {'topic': 'Factors of Production', 'q': 'What is Fixed Capital?', 'a': 'Man-made durable production assets that can be used repeatedly over many years (e.g., Machinery, Factory building).'}, {'topic': 'Factors of Production', 'q': 'Give an example of Working Capital.', 'a': 'Raw materials (Cotton, Seeds) or Cash in hand.'}, {'topic': 'Factors of Production', 'q': 'Who is an Entrepreneur?', 'a': 'The visionary organizer and risk-taker who combines Land, Labour, and Capital to establish a business enterprise.'}, {'topic': 'Factors of Production', 'q': 'What is the economic reward earned by an Entrepreneur?', 'a': 'Profit.'}, {'topic': 'Factors of Production', 'q': 'What is Human Capital?', 'a': "The accumulated knowledge, skills, health, and expertise embodied in a nation's workforce."}, {'topic': 'Factors of Production', 'q': "Define 'Value Addition'.", 'a': 'The increase in value created at each stage of processing raw materials into finished consumer goods.'}],
  m2: [{'topic': 'Natural Resources', 'q': 'Differentiate between Renewable and Non-Renewable resources with examples.', 'a': '<strong>Renewable Resources:</strong> Resources that can be replenished naturally over a short period (e.g., Solar, Wind energy).<br><strong>Non-Renewable Resources:</strong> Resources with fixed stock taking millions of years to form (e.g., Coal, Petroleum).'}, {'topic': 'Natural Resources', 'q': 'What are Actual and Potential resources?', 'a': '<strong>Actual Resources:</strong> Quantity is known and currently utilized (e.g., Ruhr coalfields).<br><strong>Potential Resources:</strong> Quantity unknown/unused due to technical limits (e.g., Uranium in Ladakh).'}, {'topic': 'Natural Resources', 'q': 'State two natural causes of soil erosion.', 'a': '1. <strong>Running Water / Floods:</strong> Heavy rainfall washes away topsoil.<br>2. <strong>Wind Action:</strong> High-velocity winds blow away loose soil in dry regions.'}, {'topic': 'Natural Resources', 'q': 'Why is land considered an important natural resource? State two reasons.', 'a': '1. Land provides the physical platform for agriculture, human settlements, forests, roads, and factories.<br>2. It holds all essential mineral deposits, water bodies, and soil profiles.'}, {'topic': 'Natural Resources', 'q': "Explain the term 'Water Scarcity'.", 'a': 'Water scarcity refers to the lack of sufficient freshwater resources to meet local water demands, caused by over-exploitation, wastage, pollution, and unequal distribution.'}, {'topic': 'Natural Resources', 'q': 'What is shelterbelt planting in soil conservation?', 'a': 'In dry or coastal regions, rows of trees are planted in lines to check wind speed and movement, thereby protecting soil cover from wind erosion.'}, {'topic': 'Natural Resources', 'q': 'Mention two consequences of deforestation.', 'a': '1. Loss of natural wildlife habitats leading to species extinction.<br>2. Accelerated soil erosion and atmospheric carbon-oxygen imbalance.'}, {'topic': 'Natural Resources', 'q': 'Differentiate between Localized and Ubiquitous resources.', 'a': '<strong>Localized:</strong> Found only in specific regions (e.g., Copper, Gold).<br><strong>Ubiquitous:</strong> Present everywhere across Earth (e.g., Air, Sunlight).'}, {'topic': 'Natural Resources', 'q': 'What is Mulching?', 'a': 'A soil conservation technique where bare ground between plants is covered with organic matter like straw to retain soil moisture.'}, {'topic': 'Natural Resources', 'q': 'Why is fresh water considered a limited resource?', 'a': 'Out of 71% water on Earth, 97% is saline ocean water. Only 2.7% is fresh water, and nearly 70% of that is frozen in ice sheets, leaving under 1% for human use.'}, {'topic': 'Political Map', 'q': 'Why does a democratic country need a Constitution? State two reasons.', 'a': '1. Defines government powers and limits to prevent tyranny or abuse of authority.<br>2. Guarantees Fundamental Rights to citizens and protects minorities against discrimination.'}, {'topic': 'Political Map', 'q': 'Differentiate between Parliamentary and Presidential forms of government.', 'a': '<strong>Parliamentary Form:</strong> Executive is selected from Legislature and accountable to it (e.g., India, UK).<br><strong>Presidential Form:</strong> President is directly elected and independent of Legislature (e.g., USA).'}, {'topic': 'Political Map', 'q': 'What are Fundamental Rights? Mention any two Fundamental Rights.', 'a': 'Basic constitutional guarantees granted to citizens ensuring dignity and equality.<br><em>Examples:</em> 1. Right to Equality (Art 14-18), 2. Right to Freedom (Art 19-22).'}, {'topic': 'Political Map', 'q': "Explain the concept of 'Federalism'.", 'a': 'A system of government where power is constitutionally divided between a central national government and regional state governments (e.g., Union & State Govts in India).'}, {'topic': 'Political Map', 'q': 'What are Directive Principles of State Policy (DPSP)?', 'a': 'DPSPs (Part IV) are non-justiciable constitutional guidelines given to Federal and State governments to establish a social and economic welfare state.'}, {'topic': 'Political Map', 'q': 'State the composition of the Indian Parliament.', 'a': 'The Indian Parliament consists of three constituent elements: 1. The President of India, 2. The Lok Sabha (Lower House), and 3. The Rajya Sabha (Upper House).'}, {'topic': 'Political Map', 'q': 'What is the difference between Lok Sabha and Rajya Sabha regarding elections?', 'a': '<strong>Lok Sabha:</strong> Members are directly elected by citizens via universal adult suffrage.<br><strong>Rajya Sabha:</strong> Members are indirectly elected by State MLAs.'}, {'topic': 'Political Map', 'q': 'Explain the role of the Prime Minister in the Executive.', 'a': 'The Prime Minister is the real executive head, leader of the Council of Ministers, leader of the ruling party in Lok Sabha, and chief advisor to the President.'}, {'topic': 'Political Map', 'q': "What is an 'Independent Judiciary'? Why is it necessary?", 'a': 'Means courts are free from executive or legislative control. It is necessary to impart impartial justice and safeguard Fundamental Rights without political interference.'}, {'topic': 'Political Map', 'q': 'What are Fundamental Duties? Give one example.', 'a': 'Moral obligations incorporated in Article 51A promoting patriotism and national harmony.<br><em>Example:</em> Respecting the National Flag and National Anthem.'}, {'topic': 'Electoral System', 'q': 'Why is voting called the cornerstone of democracy?', 'a': 'Voting empowers citizens to choose leaders, hold governments accountable, participate in lawmaking, and ensure peaceful political succession.'}, {'topic': 'Electoral System', 'q': 'Differentiate between General Elections and Mid-Term Elections.', 'a': '<strong>General Elections:</strong> Held at the end of regular 5-year constitutional term.<br><strong>Mid-Term Elections:</strong> Held when Lok Sabha or Assembly is dissolved prematurely.'}, {'topic': 'Electoral System', 'q': 'State two key functions of the Election Commission of India.', 'a': '1. Preparing and revising updated Electoral Rolls (voter lists).<br>2. Enforcing Model Code of Conduct and scheduling election dates.'}, {'topic': 'Electoral System', 'q': 'What is the significance of the 61st Constitutional Amendment Act (1988)?', 'a': 'It lowered the minimum voting age in India from 21 years to 18 years, empowering youth participation in democratic governance.'}, {'topic': 'Electoral System', 'q': "Explain the term 'Secret Ballot'.", 'a': "A voting method ensuring a voter's choice remains confidential, protecting voters from intimidation, threats, or political coercion."}, {'topic': 'Electoral System', 'q': 'What is VVPAT? Why was it introduced?', 'a': 'VVPAT (Voter Verifiable Paper Audit Trail) prints a paper slip showing candidate details for 7 seconds. Introduced to verify EVM vote accuracy and boost trust.'}, {'topic': 'Electoral System', 'q': 'What is an Independent Candidate?', 'a': 'A candidate contesting an election without affiliation or nomination from any registered political party.'}, {'topic': 'Electoral System', 'q': 'Why are political party symbols important in Indian elections?', 'a': 'Party symbols help illiterate or semi-literate voters instantly identify their preferred candidate/party on ballot papers or EVMs.'}, {'topic': 'Electoral System', 'q': 'What is the Silence Period before polling?', 'a': 'A mandatory 48-hour period prior to the close of polling during which all campaign speeches, public rallies, and broadcasts are legally banned.'}, {'topic': 'Electoral System', 'q': "Define 'Single-Member Constituency'.", 'a': 'An electoral district from which only one representative is elected to the legislature (used in Lok Sabha and State Assembly elections).'}, {'topic': 'Factors of Production', 'q': 'State the four factors of production and their respective factor rewards.', 'a': '1. Land ➔ Rent<br>2. Labour ➔ Wages<br>3. Capital ➔ Interest<br>4. Entrepreneurship ➔ Profit'}, {'topic': 'Factors of Production', 'q': 'Differentiate between Fixed Capital and Working Capital.', 'a': '<strong>Fixed Capital:</strong> Durable assets used over multiple years without getting consumed immediately (e.g., Machines, Buildings).<br><strong>Working Capital:</strong> Inputs consumed in a single production run (e.g., Fuel, Raw materials).'}, {'topic': 'Factors of Production', 'q': 'Why is Land considered a unique factor of production? State two reasons.', 'a': '1. It is a free gift of nature with zero social creation cost.<br>2. Its physical supply is strictly fixed and geographically immobile.'}, {'topic': 'Factors of Production', 'q': 'Explain the difference between Physical Labour and Mental Labour.', 'a': '<strong>Physical Labour:</strong> Exertion of muscular power and stamina (e.g., Construction worker).<br><strong>Mental Labour:</strong> Exertion of brainpower, analytical skill, and intellect (e.g., Software engineer).'}, {'topic': 'Factors of Production', 'q': 'What is the Demographic Dividend?', 'a': 'The economic growth potential resulting from a country having a higher proportion of working-age population (15–64 years) compared to dependents (<15 & >65).'}, {'topic': 'Factors of Production', 'q': "Why is human labour called a 'perishable' factor?", 'a': "Because unused labor capacity cannot be stored. A day's labor lost due to unemployment cannot be recovered or used in the future."}, {'topic': 'Factors of Production', 'q': 'What role does Education play in Human Capital formation?', 'a': 'Education enhances foundational literacy, technical skills, critical thinking, and productivity, enabling workers to earn higher wages and drive economic growth.'}, {'topic': 'Factors of Production', 'q': "Explain the term 'Kaizen' in production management.", 'a': "Kaizen is a Japanese business philosophy meaning 'continuous incremental improvement' in workplace workflow to eliminate waste and boost product quality."}, {'topic': 'Factors of Production', 'q': 'What is the difference between Goods and Services?', 'a': '<strong>Goods:</strong> Tangible physical objects that can be touched and stored (e.g., Machinery, Shirts).<br><strong>Services:</strong> Intangible activities delivered without physical ownership (e.g., Teaching, Medical care).'}, {'topic': 'Factors of Production', 'q': "Why is an Entrepreneur called a 'Risk-Bearer'?", 'a': "Because an entrepreneur invests capital under market uncertainty; while Land, Labour, and Capital get fixed rewards (Rent, Wages, Interest), the entrepreneur's Profit can be negative (Loss)."}],
  m3: [{'topic': 'Natural Resources', 'q': 'Explain the three mandatory criteria required for a natural substance to be classified as a resource.', 'a': '1. <strong>Technological Accessibility:</strong> Advanced technology must exist to extract and harness the substance.<br>2. <strong>Economic Feasibility:</strong> The financial cost of extraction must yield net economic value.<br>3. <strong>Cultural Acceptability:</strong> The usage must be accepted by society without violating cultural norms.'}, {'topic': 'Natural Resources', 'q': 'Describe the factors affecting land use patterns in a country.', 'a': '1. <strong>Physical Factors:</strong> Topography, soil fertility, climate, water availability, mineral deposits.<br>2. <strong>Human Factors:</strong> Population density, technology, industrialization, land ownership laws.<br>3. <strong>Economic Factors:</strong> Land commercial value for housing vs farming.'}, {'topic': 'Natural Resources', 'q': 'Explain three key factors responsible for soil formation.', 'a': '1. <strong>Parent Rock:</strong> Dictates color, mineral composition, chemical properties, and permeability.<br>2. <strong>Climate:</strong> Temperature and rainfall influence weathering rates and humus formation.<br>3. <strong>Time:</strong> Dictates soil profile thickness; older soil profiles are mature and deep.'}, {'topic': 'Natural Resources', 'q': 'Detail three methods of soil conservation suitable for hilly regions.', 'a': '1. <strong>Terrace Farming:</strong> Flat steps cut into steep slopes to reduce runoff and erosion.<br>2. <strong>Contour Ploughing:</strong> Ploughing along slope contour lines to check water velocity.<br>3. <strong>Contour Barriers:</strong> Stones and soil barriers built along contours with water-collecting trenches.'}, {'topic': 'Natural Resources', 'q': 'What are the main causes of growing water scarcity worldwide?', 'a': '1. <strong>Population & Urbanization:</strong> Surging domestic and agricultural water demand.<br>2. <strong>Agricultural Over-exploitation:</strong> Excessive groundwater pumping for crops.<br>3. <strong>Industrial Pollution:</strong> Discharge of untreated chemical effluents into freshwater bodies.'}, {'topic': 'Natural Resources', 'q': 'Explain the ecological importance of natural vegetation and forests.', 'a': '1. <strong>Oxygen & Carbon Sink:</strong> Forests photosynthesize, supplying oxygen and absorbing carbon dioxide.<br>2. <strong>Soil Protection:</strong> Tree roots anchor topsoil, preventing erosion and landslides.<br>3. <strong>Biodiversity & Water Cycle:</strong> Provide wildlife habitats and regulate regional rainfall patterns.'}, {'topic': 'Natural Resources', 'q': 'Differentiate between Evergreen and Deciduous forests.', 'a': '<strong>Evergreen:</strong> Trees do not shed leaves simultaneously; remain green year-round in heavy rainfall zones.<br><strong>Deciduous:</strong> Shed leaves in dry summer months to conserve transpiration moisture.<br><strong>Timber:</strong> Evergreen yields dense hardwood; Deciduous yields Teak and Sal.'}, {'topic': 'Natural Resources', 'q': "Explain the concept of 'Sustainable Development' regarding natural resources.", 'a': 'Utilizing natural resources carefully to satisfy current human needs while conserving them for future generations without ecological degradation.<br><em>Core Principles:</em> Minimizing depletion, recycling materials, reducing pollution, and developing renewables.'}, {'topic': 'Natural Resources', 'q': 'What are human-made resources? How do they differ from natural resources?', 'a': 'Human-made resources are artificial structures, tools, machinery, and technology synthesized by humans using natural resources.<br><em>Difference:</em> Natural resources are gifts of nature, whereas human-made resources are created via human engineering, skill, and capital.'}, {'topic': 'Natural Resources', 'q': 'HOTS Question: Imagine a region experiencing severe deforestation. Predict three environmental impacts on the local community.', 'a': '1. <strong>Soil Erosion & Floods:</strong> Lack of root anchors leads to rapid topsoil wash-out and flash floods.<br>2. <strong>Water Table Drop:</strong> Lower transpiration reduces rainfall while groundwater tables drop.<br>3. <strong>Human-Wildlife Conflict:</strong> Animals enter villages in search of food, threatening crops and human safety.'}, {'topic': 'Political Map', 'q': 'Explain the three organs of government and their primary functions under Separation of Powers.', 'a': '1. <strong>Legislature (Parliament):</strong> Frames, enacts, and amends national laws.<br>2. <strong>Executive (President, PM, Cabinet, Bureaucracy):</strong> Enforces and implements laws passed by Parliament.<br>3. <strong>Judiciary (Supreme Court, High Courts):</strong> Interprets laws, resolves disputes, and safeguards Fundamental Rights.'}, {'topic': 'Political Map', 'q': 'Describe three key features of the Indian Constitution.', 'a': '1. <strong>Federalism with Strong Centre:</strong> Two-tier governance (Union & State) with Union, State, Concurrent lists.<br>2. <strong>Parliamentary Governance:</strong> Executive is directly accountable to elected legislature.<br>3. <strong>Secular State & Fundamental Rights:</strong> Guarantees freedom of religion and protects civil liberties.'}, {'topic': 'Political Map', 'q': 'How does a Bill become a Law in the Indian Parliament? Outline the key stages.', 'a': '1. <strong>Readings & Committee Review:</strong> Introduced, debated, and scrutinized by parliamentary committees.<br>2. <strong>Voting in Both Houses:</strong> Must be passed by majority in Lok Sabha and Rajya Sabha.<br>3. <strong>Presidential Assent:</strong> Upon signature by the President of India, the Bill becomes an Act.'}, {'topic': 'Political Map', 'q': 'Explain the composition and special powers of the Rajya Sabha.', 'a': '<strong>Composition:</strong> Max 250 members (238 elected by MLAs + 12 nominated by President).<br><strong>Special Powers:</strong> 1. Permanent house not subject to dissolution (1/3rd retire every 2 years). 2. Can authorize creation of new All-India Services (Art 312). 3. Can permit Parliament to legislate on State List subjects during emergencies.'}, {'topic': 'Political Map', 'q': 'Distinguish between the powers of the President and the Prime Minister of India.', 'a': '<strong>President:</strong> Constitutional Head of State, nominal executive powers, signs Bills, appoints CEC/Judges.<br><strong>Prime Minister:</strong> Real Executive Head of Govt, forms Cabinet, directs govt policy, leads ruling party in Lok Sabha.'}, {'topic': 'Political Map', 'q': 'Explain the structure of the judicial hierarchy in India.', 'a': '1. <strong>Supreme Court:</strong> Apex court in New Delhi, headed by CJI; decisions binding nationwide.<br>2. <strong>High Courts:</strong> Top judicial authority at State level.<br>3. <strong>Subordinate Courts:</strong> District & Sessions Courts handling civil and criminal matters at local levels.'}, {'topic': 'Political Map', 'q': "Why is the Right to Constitutional Remedies (Article 32) called the 'Heart and Soul' of the Constitution?", 'a': 'Article 32 empowers citizens to directly move Supreme Court/High Courts if Fundamental Rights are violated. Courts issue legal writs (Habeas Corpus, Mandamus, etc.) to enforce rights. Without Article 32, other rights would be unenforceable.'}, {'topic': 'Political Map', 'q': 'Explain the principles of Equality and Justice in a democracy.', 'a': '1. <strong>Legal Equality:</strong> All individuals equal before law without status discrimination (Art 14).<br>2. <strong>Social Justice:</strong> Abolition of untouchability/caste bias and affirmative action for oppressed classes.<br>3. <strong>Economic Justice:</strong> Reducing income disparities and guaranteeing livelihood opportunities.'}, {'topic': 'Political Map', 'q': 'What is a Coalition Government? When is it formed?', 'a': 'A Coalition Government is an alliance formed by multiple political parties coming together to form a government when no single party wins an absolute majority in general elections. They rule on a Common Minimum Program.'}, {'topic': 'Political Map', 'q': 'HOTS Question: If Parliament passes an Act banning women from higher education, which organ can intervene and why?', 'a': 'The <strong>Judiciary (Supreme Court of India)</strong> will intervene.<br><em>Reasoning:</em> Under <strong>Judicial Review</strong>, the Supreme Court can strike down laws violating Fundamental Rights (Articles 14, 15, 21A equality & education rights), declaring the Act unconstitutional and null.'}, {'topic': 'Electoral System', 'q': 'Explain the importance of Universal Adult Franchise in promoting social equality.', 'a': '1. <strong>Political Equality:</strong> Gives equal weight (1 vote = 1 value) to wealthy and poor alike.<br>2. <strong>Empowering Vulnerable Groups:</strong> Compels parties to address needs of SCs, STs, women, and rural poor.<br>3. <strong>National Unity:</strong> Instills shared citizenship and equal dignity across diverse groups.'}, {'topic': 'Electoral System', 'q': 'Describe the three major types of elections conducted in India.', 'a': '1. <strong>General Elections:</strong> Held every 5 years for Lok Sabha or State Assemblies.<br>2. <strong>Mid-Term Elections:</strong> Held when Parliament/Assembly is dissolved before completing 5 years.<br>3. <strong>By-Elections:</strong> Held in a single constituency to fill a seat vacated by death/resignation.'}, {'topic': 'Electoral System', 'q': 'Explain the key steps involved in the Candidate Nomination process.', 'a': '1. <strong>Filing Nomination Form:</strong> Contesting candidate submits nomination to Returning Officer.<br>2. <strong>Form 26 Affidavit:</strong> Declaring criminal history, income tax, personal assets & liabilities.<br>3. <strong>Security Deposit & Scrutiny:</strong> Paying security deposit; RO scrutinizes papers for approval.'}, {'topic': 'Electoral System', 'q': 'Detail three measures taken by ECI to ensure free and fair elections.', 'a': '1. <strong>Model Code of Conduct:</strong> Banning government machinery or grant misuse by ruling parties.<br>2. <strong>Security & Observers:</strong> Deploying Central Armed Police Forces and independent observers.<br>3. <strong>cVIGIL App:</strong> Real-time digital tracking and resolution of illegal cash/liquor reports.'}, {'topic': 'Electoral System', 'q': 'Explain the role and importance of Political Parties in a democracy.', 'a': '1. <strong>Policy Manifestos:</strong> Aggregating public opinions into coherent governance programs.<br>2. <strong>Forming Government:</strong> Ruling party selects ministers and executes election promises.<br>3. <strong>Role of Opposition:</strong> Scrutinizing government actions and preventing dictatorial power.'}, {'topic': 'Electoral System', 'q': 'What is the First-Past-The-Post (FPTP) system? Give two features.', 'a': '<strong>Meaning:</strong> Plurality voting where single-member constituencies elect the candidate with highest votes.<br><em>Feature 1:</em> Winner does not need >50% votes, just more than any runner-up.<br><em>Feature 2:</em> Direct representative link between local voters and their MP/MLA.'}, {'topic': 'Electoral System', 'q': 'What is the NOTA option on EVMs? Explain its significance.', 'a': "<strong>Meaning:</strong> 'None Of The Above' button introduced in 2013 on SC orders.<br><em>Significance:</em> 1. Allows voters to express rejection of all candidates. 2. Protects vote secrecy. 3. Pressures parties to nominate clean candidates."}, {'topic': 'Electoral System', 'q': 'Explain the role of the Returning Officer (RO) and Presiding Officer.', 'a': '<strong>Returning Officer (RO):</strong> Conducts election in a constituency—receives nominations, scrutinizes, allocates symbols, counts votes, declares winner.<br><strong>Presiding Officer:</strong> In-charge of single polling booth—manages EVMs, checks voter IDs, ensures secret voting.'}, {'topic': 'Electoral System', 'q': 'Why is an independent Election Commission necessary in India?', 'a': '1. Prevents ruling party from manipulating voter lists or election machinery.<br>2. Guarantees equal level playing field for small regional parties and independents.<br>3. Maintains public confidence in peaceful democratic succession.'}, {'topic': 'Electoral System', 'q': 'HOTS Question: Candidate A gets 30,000 votes, B gets 28,000, C gets 25,000. Who wins under FPTP and what is the criticism?', 'a': '<strong>Winner:</strong> Candidate A wins (highest individual vote tally).<br><strong>Criticism:</strong> Candidate A won despite 63% of voters (53,000) voting <em>against</em> them. Shows how FPTP can yield winners without majority popular vote share.'}, {'topic': 'Factors of Production', 'q': 'Explain the Production Function and its four constituent components.', 'a': '<strong>Function:</strong> Mathematical relationship between physical inputs and maximum output: Q = f(Land, Labour, Capital, Entrepreneurship).<br><em>Components:</em> 1. Land (Natural gifts). 2. Labour (Human effort). 3. Capital (Machines & cash). 4. Entrepreneurship (Organizing unit).'}, {'topic': 'Factors of Production', 'q': 'Describe three distinct characteristics of Land as a factor of production.', 'a': '1. <strong>Fixed Supply:</strong> Total surface land area is fixed by nature (Es = 0).<br>2. <strong>Indestructible Powers:</strong> Soil has original, permanent fertility.<br>3. <strong>Heterogeneous Quality:</strong> Fertility and location advantage vary across plots.'}, {'topic': 'Factors of Production', 'q': 'Analyze three factors that determine the productivity of Labour in a nation.', 'a': '1. <strong>Education & Skills:</strong> Trained skilled labor operates machines faster with fewer errors.<br>2. <strong>Health Standards:</strong> Healthy workers take fewer sick leaves and maintain high stamina.<br>3. <strong>Working Tools & Technology:</strong> Ergonomic automated tools raise output per worker-hour.'}, {'topic': 'Factors of Production', 'q': 'How does investment in Healthcare contribute to Human Capital formation?', 'a': '1. <strong>Increases Working Lifespan:</strong> Healthy people stay active in workforce longer.<br>2. <strong>Reduces Absenteeism:</strong> Prevents working day loss from chronic diseases.<br>3. <strong>Boosts Cognitive Efficiency:</strong> Proper nutrition enhances workplace focus and stamina.'}, {'topic': 'Factors of Production', 'q': 'Explain the process of Capital Formation in an economy.', 'a': '1. <strong>Creation of Savings:</strong> Households save a portion of disposable income.<br>2. <strong>Mobilization of Savings:</strong> Commercial banks accumulate deposits.<br>3. <strong>Investment in Capital Assets:</strong> Entrepreneurs borrow funds to buy factories and equipment.'}, {'topic': 'Factors of Production', 'q': 'Explain the concept of Value Addition using an agricultural supply chain example.', 'a': 'Value Addition is the incremental price added at each processing stage:<br>1. Raw Cotton (₹100/kg) ➔ 2. Thread (₹250/kg) ➔ 3. Woven Fabric (₹600/m) ➔ 4. Tailored Shirt (₹2,500).'}, {'topic': 'Factors of Production', 'q': "What is Joseph Schumpeter's theory regarding the role of an Entrepreneur?", 'a': 'Schumpeter defined the Entrepreneur as an <strong>Innovator</strong> who drives development by: 1. Introducing new products. 2. Adopting new production technology. 3. Opening new markets or raw material sources.'}, {'topic': 'Factors of Production', 'q': 'Explain the 5S Methodology used in Japanese Kaizen production management.', 'a': '1. <strong>Seiri (Sort):</strong> Remove unneeded items.<br>2. <strong>Seiton (Set in Order):</strong> Organize tools systematically.<br>3. <strong>Seiso (Shine):</strong> Clean equipment daily.<br>4. <strong>Seiketsu (Standardize):</strong> Establish uniform operational guidelines.<br>5. <strong>Shitsuke (Sustain):</strong> Build long-term workplace discipline.'}, {'topic': 'Factors of Production', 'q': "Why is India's Demographic Dividend a competitive advantage?", 'a': '1. <strong>Low Dependency Ratio:</strong> Over 65% population in working age (15-64), lowering dependent burden.<br>2. <strong>Young Median Age:</strong> Average age ~28 years provides energetic technical workforce.<br>3. <strong>Attracting Global Investment:</strong> Vast supply of affordable skilled labor attracting global manufacturing.'}, {'topic': 'Factors of Production', 'q': 'HOTS Question: A farmer buys a tractor, seeds, diesel, and hires two laborers. Classify each input.', 'a': '1. <strong>Tractor:</strong> Fixed Capital (Durable machinery used over years).<br>2. <strong>Seeds & Diesel:</strong> Working Capital (Inputs consumed in single season).<br>3. <strong>Hired Laborers:</strong> Labour (Human effort earning wages).<br>4. <strong>Farmer (Owner):** Entrepreneur (Organizes inputs and bears crop risk).'}],
  m5: [{'topic': 'Natural Resources', 'q': 'Examine the major human and natural causes of land degradation. Propose five comprehensive conservation measures.', 'a': '<strong>Causes:</strong> Deforestation, overgrazing, chemical overuse, mining pits, over-irrigation leading to salinity, industrial effluents.<br><strong>5 Conservation Measures:</strong><br>1. <em>Afforestation & Shelterbelts:</em> Planting trees to stabilize topsoil.<br>2. <em>Regulated Grazing:</em> Managing pasturelands to prevent vegetation destruction.<br>3. <em>Mining Land Reclamation:</em> Refilling and re-vegetating abandoned quarries.<br>4. <em>Effluent Treatment:</em> Treating industrial wastewater prior to discharge.<br>5. <em>Organic Farming:</em> Bio-fertilizers and crop rotation to preserve soil carbon.'}, {'topic': 'Natural Resources', 'q': 'Describe the soil profile and analyze five distinct factors that govern soil formation.', 'a': '<strong>Soil Profile:</strong> Topsoil (humus) ➔ Subsoil (clay/sand) ➔ Weathered rock ➔ Parent bedrock.<br><strong>5 Formation Factors:</strong><br>1. <em>Parent Rock:</em> Determines chemical properties, minerals, color, texture.<br>2. <em>Climate:</em> Rainfall and temperature dictate weathering speed and humus rate.<br>3. <em>Topography:</em> Altitude and slope control soil accumulation depth.<br>4. <em>Organic Matter:</em> Flora, fauna, micro-organisms produce fertile humus.<br>5. <em>Time:</em> Long timeframes determine complete mature profile depth.'}, {'topic': 'Natural Resources', 'q': 'Analyze the global freshwater crisis. Explain five effective rainwater harvesting and water conservation techniques.', 'a': '<strong>Freshwater Crisis:</strong> Population growth, industrial pollution, over-irrigation, climate change depletion.<br><strong>5 Conservation Techniques:</strong><br>1. <em>Rooftop Rainwater Harvesting:</em> Piping rooftop rain to underground storage/recharge pits.<br>2. <em>Check Dams & Bunds:</em> Earthen dams across streams recharging deep aquifers.<br>3. <em>Drip Irrigation:</em> Delivering water straight to crop roots, eliminating evaporation.<br>4. <em>Industrial Water Recycling:</em> Mandatory zero-discharge recycling systems in factories.<br>5. <em>Watershed Management:</em> Community-led afforestation of catchment areas.'}, {'topic': 'Natural Resources', 'q': 'Provide a detailed classification of natural resources based on: (a) Development, (b) Origin, (c) Renewability, (d) Distribution.', 'a': '<strong>1. By Development:</strong> Actual (quantified/used) vs Potential (unused due to technology limits).<br><strong>2. By Origin:</strong> Biotic (forests, fauna) vs Abiotic (land, minerals).<br><strong>3. By Renewability:</strong> Renewable (solar, water) vs Non-renewable (coal, oil).<br><strong>4. By Distribution:</strong> Ubiquitous (air everywhere) vs Localized (copper/gold in specific spots).'}, {'topic': 'Natural Resources', 'q': 'Case Study & HOTS: An agricultural village in Punjab faces severe groundwater depletion and soil salinization. Outline a 5-step recovery plan.', 'a': '<strong>Root Causes:</strong> Over-irrigation, monoculture (paddy), synthetic chemical overuse.<br><strong>5-Step Recovery Plan:</strong><br>1. <em>Crop Diversification:</em> Shift from rice to pulses/millets requiring less water.<br>2. <em>Micro-Irrigation Mandate:</em> Subsidized drip and sprinkler installation.<br>3. <em>Organic Farming Shift:</em> Replace synthetics with vermicompost and bio-pesticides.<br>4. <em>Recharge Wells:</em> Mandatory rainwater recharge shafts into deep aquifers.<br>5. <em>Soil Health Testing:</em> Quarterly soil diagnostics to apply precise micro-nutrients.'}, {'topic': 'Political Map', 'q': 'Examine the six fundamental rights guaranteed by the Indian Constitution. Highlight their significance.', 'a': '1. <strong>Right to Equality (Art 14-18):</strong> Equal protection, abolition of untouchability & titles.<br>2. <strong>Right to Freedom (Art 19-22):</strong> Speech, assembly, association, movement, trade, life liberty.<br>3. <strong>Right against Exploitation (Art 23-24):</strong> Banning human trafficking, forced labor, child labor.<br>4. <strong>Right to Freedom of Religion (Art 25-28):</strong> Conscience, practice, religious affairs management.<br>5. <strong>Cultural & Educational Rights (Art 29-30):</strong> Minority script/culture protection & educational institutions.<br>6. <strong>Right to Constitutional Remedies (Art 32):</strong> Moving Supreme Court via writs to enforce rights.'}, {'topic': 'Political Map', 'q': 'Detail the detailed legislative procedure of how an Ordinary Bill becomes an Act of Parliament.', 'a': '1. <strong>First Reading:</strong> Title and objectives read out; published in Gazette.<br>2. <strong>Second Reading:</strong> Clause-by-clause debate and Standing Committee review.<br>3. <strong>Third Reading:</strong> Final voting on Bill as a whole.<br>4. <strong>Procedure in 2nd House:</strong> Passes 3 readings. (Joint Sitting under Art 108 if deadlocked 6 months).<br>5. <strong>Presidential Assent:</strong> President signs Bill into an official Act of Parliament.'}, {'topic': 'Political Map', 'q': 'Evaluate the powers, functions, and constitutional position of the President of India.', 'a': "<strong>Executive Powers:</strong> Appoints PM, Cabinet, Governors, Judges, CEC; decisions in President's name.<br><strong>Legislative Powers:</strong> Summons Parliament, signs Bills, issues Ordinances (Art 123).<br><strong>Financial Powers:</strong> Money Bills require prior Presidential recommendation.<br><strong>Emergency Powers:</strong> National (Art 352), President's Rule (Art 356), Financial (Art 360).<br><strong>Constitutional Position:</strong> Nominal Head acting on binding advice of Cabinet (Art 74)."}, {'topic': 'Political Map', 'q': 'Analyze the importance of an Independent Judiciary. How does the Constitution ensure judicial independence?', 'a': '<strong>Importance:</strong> Protects Fundamental Rights, guards Constitution, executes Judicial Review.<br><strong>Constitutional Mechanisms:</strong><br>1. <em>Security of Tenure:</em> Removed only via complex parliamentary impeachment.<br>2. <em>Fixed Salaries:</em> Charged on Consolidated Fund; cannot be reduced.<br>3. <em>No Conduct Debate:</em> Parliament cannot debate judicial conduct.<br>4. <em>Contempt Power:</em> Courts can punish for non-compliance.<br>5. <em>Separation of Powers:</em> Art 50 separates Judiciary from Executive.'}, {'topic': 'Political Map', 'q': 'Case Study: A State Government refuses to implement a Central Law passed by Parliament. Detail the constitutional remedies.', 'a': "1. <strong>Central Directives (Art 256/257):</strong> Union Govt issues binding directives to State.<br>2. <strong>Supreme Court Review (Art 131):</strong> Inter-state legal dispute resolved under Original Jurisdiction.<br>3. <strong>Article 365 Application:</strong> Failure to comply allows President to hold State governance unconstitutional.<br>4. <strong>President's Rule (Art 356):</strong> Dismissal of State Cabinet and direct governance by Union.<br>5. <strong>Result:</strong> Protects constitutional supremacy and national integrity."}, {'topic': 'Electoral System', 'q': 'Describe the complete step-by-step Election Process in India from Delimitation to Result Declaration.', 'a': '1. <strong>Delimitation & Roll Revision:</strong> Boundary demarcation and updating voter lists.<br>2. <strong>Notification:</strong> Official schedule announcement by ECI.<br>3. <strong>Nomination & Scrutiny:</strong> Filing nomination forms & Form 26 affidavits; RO scrutiny.<br>4. <strong>Campaigning:</strong> Rallies and manifestos under MCC, ending 48h before poll close.<br>5. <strong>Polling Day:</strong> Citizens cast secret EVM-VVPAT votes at designated booths.<br>6. <strong>Counting & Results:</strong> Votes tallied under RO supervision; winner awarded Certificate of Election.'}, {'topic': 'Electoral System', 'q': 'Examine the powers, functions, and constitutional independence of the Election Commission of India.', 'a': '<strong>Constitutional Mandate:</strong> Article 324 grants superintendence over all elections.<br><strong>Functions:</strong><br>1. <em>Administrative:</em> Preparing rolls, scheduling dates, assigning booths, enforcing MCC.<br>2. <em>Advisory:</em> Advising President/Governors on MP/MLA disqualifications.<br>3. <em>Quasi-Judicial:</em> Recognizing political parties and settling symbol disputes.<br><strong>Independence:</strong> CEC has Supreme Court judge removal protection; salary charged on Consolidated Fund.'}, {'topic': 'Electoral System', 'q': 'Analyze the Model Code of Conduct (MCC). List five major restrictions it places on political parties and ruling governments.', 'a': '1. <strong>No Government Misuse:</strong> Ruling ministers cannot use official vehicles or machinery for campaigning.<br>2. <strong>No Welfare Grants:</strong> Government cannot announce new grants or schemes once MCC is active.<br>3. <strong>No Communal Appeals:</strong> Complete ban on using religion, caste, or places of worship for votes.<br>4. <strong>Silence Period Enforcement:</strong> All rallies and broadcasts stop 48 hours before polling closes.<br>5. <strong>No Government Ads:</strong> Public-funded ads highlighting ruling party achievements are banned.'}, {'topic': 'Electoral System', 'q': 'Compare the First-Past-The-Post (FPTP) system and Proportional Representation (PR) system across five parameters.', 'a': '<strong>1. Voting Focus:</strong> FPTP votes for candidates; PR votes for party lists.<br><strong>2. Constituency:</strong> FPTP uses single-member districts; PR uses multi-member/national districts.<br><strong>3. Winning Margin:</strong> FPTP requires plurality; PR gives seats in exact vote %.<br><strong>4. Local MP:</strong> FPTP has direct known representative; PR has list-selected MPs.<br><strong>5. Usage in India:</strong> FPTP used in Lok Sabha/Assemblies; PR used in Rajya Sabha.'}, {'topic': 'Electoral System', 'q': 'Case Study & HOTS: An election observer detects a candidate distributing cash and free appliances 24 hours before polling. Detail actions.', 'a': '<strong>Violations:</strong> Voter bribery under RP Act 1951 & breach of 48-Hour Silence Period.<br><strong>Reporting:</strong> Captured live on <strong>cVIGIL mobile app</strong> with GPS tracking.<br><strong>ECI Action:</strong><br>1. Flying Squads seize cash/goods within 100 minutes.<br>2. Police file FIR against candidate under IPC.<br>3. Candidate issued 48-hour campaign ban / show-cause notice.<br>4. ECI can countermand polling in affected polling stations.'}, {'topic': 'Factors of Production', 'q': 'Examine the four factors of production in detail. Compare their characteristics, factor rewards, and manufacturing roles.', 'a': '1. <strong>Land:</strong> Natural gifts. <em>Reward:</em> Rent. <em>Features:</em> Fixed supply, immobile, indestructible.<br>2. <strong>Labour:</strong> Human exertion. <em>Reward:</em> Wages. <em>Features:</em> Inseparable, perishable, ethical needs.<br>3. <strong>Capital:</strong> Man-made physical assets. <em>Reward:</em> Interest. <em>Features:</em> Fixed & Working capital.<br>4. <strong>Entrepreneurship:</strong> Organizing unit. <em>Reward:</em> Profit. <em>Features:</em> Innovation, risk-bearing.<br><em>Manufacturing Role:</em> Land provides site ➔ Capital provides machines ➔ Labour operates tools ➔ Entrepreneur coordinates workflow.'}, {'topic': 'Factors of Production', 'q': 'Differentiate exhaustively between Fixed Capital and Working Capital across five distinct parameters with real-world examples.', 'a': '<strong>1. Definition:</strong> Fixed = Durable assets spanning years; Working = Short-term operating inputs.<br><strong>2. Lifespan:</strong> Fixed = Long-term (5-30+ yrs); Working = Single production cycle.<br><strong>3. Depreciation:</strong> Fixed = Undergoes gradual physical wear; Working = Completely consumed.<br><strong>4. Investment:</strong> Fixed = Large initial capital outlay; Working = Daily operational cash flow.<br><strong>5. Examples:</strong> Fixed = Factories, tractors, servers; Working = Cotton, seeds, fuel, wage cash.'}, {'topic': 'Factors of Production', 'q': 'Analyze Human Capital Formation. Detail five key strategies governments must implement to convert population into a productive asset.', 'a': '1. <strong>Universal Technical Education:</strong> NEP policies expanding STEM and vocational skills.<br>2. <strong>Public Healthcare & Immunization:</strong> Primary health centers reducing sick leave loss.<br>3. <strong>Skill India & ITIs:</strong> Specialized technical apprenticeships bridging industry skill gaps.<br>4. <strong>Female Labour Participation:</strong> Creches, safe transport, and equal pay integrating women.<br>5. <strong>Digital Infrastructure:</strong> Rural internet and digital job portals connecting workers.'}, {'topic': 'Factors of Production', 'q': "Examine India's Demographic Dividend. Calculate Dependency Ratio and discuss four challenges in realizing this dividend.", 'a': '<strong>Demographic Dividend:</strong> Window when working-age pop (15-64) exceeds dependents (<15 & >65).<br><strong>Dependency Ratio Formula:</strong> [(Pop < 15 + Pop > 65) / Working-Age Pop (15-64)] × 100.<br><strong>4 Challenges:</strong><br>1. <em>Skill Gap:</em> Unskilled workforce lacking technical capabilities.<br>2. <em>Informal Sector:</em> High proportion in low-wage informal jobs without security.<br>3. <em>Female Labour Rate:</em> Low participation of women in formal economy.<br>4. <em>Job Creation Pace:</em> Manufacturing growth lagging behind young job seekers.'}, {'topic': 'Factors of Production', 'q': 'Case Study & HOTS: An entrepreneur opens a garment manufacturing factory in Gujarat. Detail how they organize the 4 factors.', 'a': '1. <strong>Land:</strong> Leasing GIDC industrial plot with water/power/freight connectivity. (<em>Rent</em>).<br>2. <strong>Labour:</strong> Hiring tailors for sewing and loaders for packing. (<em>Wages</em>).<br>3. <strong>Capital:</strong> Buying 50 automated sewing machines (Fixed) & buying raw fabric/thread (Working). (<em>Interest</em>).<br>4. <strong>Entrepreneurship:</strong> Designing fashion styles, managing cotton price risks, export orders. (<em>Profit</em>).'}]
};

function renderImportantQuestions() {
  const container = document.getElementById('important-questions-wrap');
  if (!container) return;

  const isPA1 = STATE.syllabusMode === 'PA 1';
  if (!STATE.iqTopicFilter) STATE.iqTopicFilter = 'All';

  const filterByPA1 = item => item.topic === 'Natural Resources' || item.topic === 'Political Map';
  let m1List = isPA1 ? IMPORTANT_QUESTIONS.m1.filter(filterByPA1) : IMPORTANT_QUESTIONS.m1;
  let m2List = isPA1 ? IMPORTANT_QUESTIONS.m2.filter(filterByPA1) : IMPORTANT_QUESTIONS.m2;
  let m3List = isPA1 ? IMPORTANT_QUESTIONS.m3.filter(filterByPA1) : IMPORTANT_QUESTIONS.m3;
  let m5List = isPA1 ? IMPORTANT_QUESTIONS.m5.filter(filterByPA1) : IMPORTANT_QUESTIONS.m5;

  if (STATE.iqTopicFilter !== 'All') {
    const filterByTopic = item => item.topic === STATE.iqTopicFilter;
    m1List = m1List.filter(filterByTopic);
    m2List = m2List.filter(filterByTopic);
    m3List = m3List.filter(filterByTopic);
    m5List = m5List.filter(filterByTopic);
  }

  const hasContent = m1List.length + m2List.length + m3List.length + m5List.length > 0;

  const availableTopics = isPA1 
    ? ['All', 'Natural Resources', 'Political Map'] 
    : ['All', 'Natural Resources', 'Political Map', 'Electoral System', 'Factors of Production'];

  const filterBtnsHtml = `
    <div style="display:flex; flex-wrap:wrap; gap:10px; margin-bottom:24px; justify-content:center;">
      ${availableTopics.map(top => `
        <button class="fc-filter-btn ${STATE.iqTopicFilter === top ? 'active' : ''}" onclick="filterIQTopic('${top}')" style="padding:6px 16px; font-weight:600;">${top === 'All' ? '🌐 All Chapters' : top}</button>
      `).join('')}
    </div>
  `;

  function renderAccordionSection(title, list, badgeColor = 'var(--cyan)') {
    if (!list || list.length === 0) return '';
    return `
      <div class="accordion-group" style="margin-bottom:30px;">
        <h3 style="color:${badgeColor}; margin-bottom:15px;">${title} (${list.length} Questions)</h3>
        ${list.map(item => `
          <div class="accordion-item" style="background:var(--glass-card); border:1px solid var(--glass-border); border-radius:12px; margin-bottom:12px; overflow:hidden; transition:all 0.3s var(--ease);">
            <div class="accordion-header" onclick="this.parentElement.classList.toggle('active')" style="padding:16px 20px; color:var(--white-soft); font-weight:600; font-size:0.98rem; cursor:pointer; display:flex; justify-content:space-between; align-items:center; gap:12px;">
              <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                <span>❓ ${item.q}</span>
                <span style="font-size:0.72rem; background:rgba(34,211,238,0.15); color:var(--cyan); padding:2px 8px; border-radius:6px; border:1px solid rgba(34,211,238,0.3); font-weight:700;">${item.topic}</span>
              </div>
              <span class="acc-icon" style="color:var(--cyan); font-size:1.2rem; transition:transform 0.3s var(--ease); flex-shrink:0;">+</span>
            </div>
            <div class="accordion-body" style="padding:0 20px; max-height:0; overflow:hidden; transition:all 0.3s var(--ease); color:var(--gray-light); line-height:1.6;">
              <div style="padding-bottom:16px; border-top:1px solid var(--glass-border); padding-top:14px; font-size:0.95rem;">
                <strong style="color:var(--cyan);">Model Answer:</strong><br>${item.a}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  container.innerHTML = `
    ${isPA1 ? `<div class="callout callout-important" style="margin-bottom:20px; background:rgba(34,211,238,0.1); border-color:var(--cyan);"><div class="callout-title" style="color:var(--cyan);">📝 PA 1 Exam Mode Active</div>Showing 1, 2, 3 & 5 Mark NCERT Questions from Chapter 1 (Natural Resources) & Chapter 2 (Political Map).</div>` : ''}

    ${filterBtnsHtml}

    ${hasContent ? `
      ${renderAccordionSection('⭐ 1 Mark Questions', m1List, 'var(--cyan)')}
      ${renderAccordionSection('⭐⭐ 2 Marks Short Answer Questions', m2List, '#38bdf8')}
      ${renderAccordionSection('⭐⭐⭐ 3 Marks Conceptual Questions', m3List, '#818cf8')}
      ${renderAccordionSection('🏆 5 Marks Long Essay & Case Study Questions', m5List, 'var(--rose)')}
    ` : `<div class="card" style="height:auto; max-width:900px; margin:0 auto; text-align:center; padding:30px;"><h3 style="color:var(--cyan); margin-bottom:8px;">🔍 No Questions Found</h3><p style="color:var(--gray-light);">No questions match the selected chapter filter for this syllabus mode.</p></div>`}
  `;

  if (!document.getElementById('accordion-style')) {
    const style = document.createElement('style');
    style.id = 'accordion-style';
    style.textContent = `
      .accordion-item.active .accordion-body { max-height: 4000px !important; padding-top: 10px !important; padding-bottom: 20px !important; }
      .accordion-item.active .acc-icon { transform: rotate(45deg); color: var(--rose) !important; }
      .accordion-item.active { border-color: var(--cyan) !important; box-shadow: 0 0 15px rgba(34, 211, 238, 0.2); }
    `;
    document.head.appendChild(style);
  }
}

function filterIQTopic(topic) {
  STATE.iqTopicFilter = topic;
  renderImportantQuestions();
}


function renderGlossary() {
  const container = document.getElementById('glossary-grid');
  if (!container) return;

  const isPA1 = STATE.syllabusMode === 'PA 1';

  const topicBtns = document.querySelectorAll('#glossary-topic-wrap button');
  topicBtns.forEach(btn => {
    const txt = btn.textContent;
    if (isPA1 && (txt.includes('Electoral System') || txt.includes('Factors of Production'))) {
      btn.style.display = 'none';
    } else {
      btn.style.display = 'inline-block';
    }
  });
  const lettersWrap = document.getElementById('glossary-letters');
  const alphabet = ['ALL', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];
  if (lettersWrap) {
    lettersWrap.innerHTML = alphabet.map(l => `
      <button class="glossary-letter-btn ${l === 'ALL' ? 'active' : ''}" onclick="filterGlossaryLetter(event, '${l}')">${l}</button>
    `).join('');
  }

  filterGlossaryCombined();
}

function displayGlossaryTerms(terms) {
  const grid = document.getElementById('glossary-grid');
  if (!grid) return;

  if (!terms || terms.length === 0) {
    grid.innerHTML = '<div class="card glossary-card" style="height:auto;"><h4 style="color:var(--cyan); margin-bottom:8px;">📖 Glossary Ready</h4><p style="color:var(--gray-light); line-height:1.55;">No glossary terms match the current filters yet, so this card stays visible as a placeholder.</p></div>';
    return;
  }

  grid.innerHTML = terms.map(item => `
    <div class="card glossary-card" style="height:auto;">
      <h4 style="color:var(--cyan); margin-top:0; margin-bottom:8px;">${item.term}</h4>
      <p style="color:var(--gray-light); font-size:0.9rem; margin:0; line-height:1.5;">${item.def}</p>
    </div>
  `).join('');
}

function filterGlossaryTopic(event, topicName) {
  if (!STATE.glossarySelectedTopics) STATE.glossarySelectedTopics = [];

  const btns = document.querySelectorAll('#glossary-topic-wrap .glossary-topic-btn');
  if (topicName === 'All') {
    STATE.glossarySelectedTopics = [];
    btns.forEach(b => b.classList.remove('active'));
    if (event && event.target) event.target.classList.add('active');
  } else {
    const idx = STATE.glossarySelectedTopics.indexOf(topicName);
    if (idx >= 0) {
      STATE.glossarySelectedTopics.splice(idx, 1);
      if (event && event.target) event.target.classList.remove('active');
    } else {
      STATE.glossarySelectedTopics.push(topicName);
      if (event && event.target) event.target.classList.add('active');
    }
    const allBtn = document.querySelector('#glossary-topic-wrap .glossary-topic-btn');
    if (allBtn) {
      if (STATE.glossarySelectedTopics.length === 0) allBtn.classList.add('active');
      else allBtn.classList.remove('active');
    }
  }

  filterGlossaryCombined();
}

function filterGlossaryLetter(event, letter) {
  if (!STATE.glossarySelectedLetters) STATE.glossarySelectedLetters = [];

  if (letter === 'ALL') {
    STATE.glossarySelectedLetters = [];
  } else {
    const idx = STATE.glossarySelectedLetters.indexOf(letter);
    if (idx >= 0) {
      STATE.glossarySelectedLetters.splice(idx, 1);
    } else {
      STATE.glossarySelectedLetters.push(letter);
    }
  }

  const buttons = document.querySelectorAll('.glossary-letter-btn');
  buttons.forEach(btn => {
    const btnLetter = btn.textContent.trim();
    if (STATE.glossarySelectedLetters.length === 0) {
      if (btnLetter === 'ALL') btn.classList.add('active');
      else btn.classList.remove('active');
    } else {
      if (btnLetter === 'ALL') {
        btn.classList.remove('active');
      } else {
        if (STATE.glossarySelectedLetters.includes(btnLetter)) btn.classList.add('active');
        else btn.classList.remove('active');
      }
    }
  });

  filterGlossaryCombined();
}

function filterGlossaryCombined() {
  const isPA1 = STATE.syllabusMode === 'PA 1';
  let filtered = [...GLOSSARY];

  const ch5ch7Keywords = ['article 324', 'article 326', '61st constitutional amendment', 'election commission', 'evm', 'vvpat', 'fptp', 'model code of conduct', 'nota', 'single transferable vote', 'universal adult franchise', 'labour', 'capital', 'factors of production', 'fixed capital', 'working capital', 'entrepreneurship', 'rent', 'wages', 'interest', 'profit', 'human capital', 'kaizen', 'demographic dividend'];

  if (isPA1) {
    filtered = filtered.filter(t => !ch5ch7Keywords.some(kw => t.term.toLowerCase().includes(kw)));
  }

  if (STATE.glossarySelectedTopics && STATE.glossarySelectedTopics.length > 0) {
    filtered = filtered.filter(t => {
      const termLower = (t.term + ' ' + t.def).toLowerCase();
      return STATE.glossarySelectedTopics.some(topic => {
        if (topic === 'Natural Resources') {
          return ['resource', 'soil', 'water', 'taanka', 'mineral', 'bauxite', 'energy', 'renewable', 'abiotic', 'biotic', '3rs', 'terracing', 'stock', 'reserve', 'sustainable'].some(k => termLower.includes(k));
        }
        if (topic === 'Political Map') {
          return ['princely', 'patel', 'accession', 'reorganisation', 'fazl', 'sriramulu', 'junagadh', 'hyderabad', 'goa', 'ahom', 'mughal', 'sultanate', 'balkan', 'lapse', 'article 1', 'article 2', 'article 3'].some(k => termLower.includes(k));
        }
        if (topic === 'Electoral System') {
          return ['election', 'evm', 'vvpat', 'franchise', 'article 324', 'article 326', '61st constitutional', 'constituency', 'fptp', 'nota', 'cvigil', 'epic', 'voter'].some(k => termLower.includes(k));
        }
        if (topic === 'Factors of Production') {
          return ['factor', 'production', 'land', 'labour', 'capital', 'entrepreneur', 'rent', 'wages', 'interest', 'profit', 'kaizen', 'demographic dividend', 'human capital'].some(k => termLower.includes(k));
        }
        return true;
      });
    });
  }

  if (STATE.glossarySelectedLetters && STATE.glossarySelectedLetters.length > 0) {
    filtered = filtered.filter(t => {
      const firstChar = t.term.charAt(0).toUpperCase();
      return STATE.glossarySelectedLetters.includes(firstChar);
    });
  }

  displayGlossaryTerms(filtered);
}

function renderDiagrams() {
  const container = document.getElementById('diagrams-grid');
  if (!container) return;
  container.innerHTML = '';

  const isPA1 = STATE.syllabusMode === 'PA 1';
  let visibleCount = 0;

  SVG_DIAGRAMS.forEach((d) => {
    // In PA 1 mode: ONLY show Diagram 1, 2, and 4 (hide 3, 5, 6, 7, 8)
    if (isPA1 && !(d.title.startsWith('1.') || d.title.startsWith('2.') || d.title.startsWith('4.'))) {
      return;
    }

    const card = document.createElement('div');
    card.className = 'diagram-card card';
    card.style.cssText = 'height:auto; display:flex; flex-direction:column; gap:12px; cursor:pointer;';
    const displaySrc = (d.imgUrl && (d.imgUrl.endsWith('.png') || d.imgUrl.endsWith('.jpg') || d.imgUrl.endsWith('.jpeg') || d.imgUrl.endsWith('.svg') || d.imgUrl.endsWith('.webp') || d.imgUrl.endsWith('.gif'))) ? d.imgUrl : (d.directImgUrl || d.fallbackUrl);

    card.innerHTML = `
      <div class="diagram-img-wrap" style="position:relative; width:100%; height:220px; border-radius:8px; overflow:hidden; background:var(--navy-darker);" onclick="openDiagramLightbox('${d.imgUrl.replace(/'/g, "\\'")}', '${d.title.replace(/'/g, "\\'")}', '${(d.directImgUrl || d.fallbackUrl || '').replace(/'/g, "\\'")}')">
        <img src="${displaySrc}" alt="${d.title}" loading="lazy" style="width:100%; height:100%; object-fit:cover; transition:transform 0.3s var(--ease);" onerror="this.onerror=null; this.src='${d.fallbackUrl}';">
        <div class="diagram-img-overlay" style="position:absolute; inset:0; background:rgba(7,26,46,0.7); color:var(--cyan); display:flex; align-items:center; justify-content:center; opacity:0; transition:opacity 0.3s var(--ease); font-weight:700; font-size:0.9rem;">
          🔍 Click to View High-Res Diagram
        </div>
      </div>
      <div class="diagram-info" style="padding:5px 0;">
        <h4 style="color:var(--cyan); margin:0 0 6px 0; font-size:1.05rem;">${d.title}</h4>
        <p style="color:var(--gray-light); font-size:0.85rem; margin:0 0 6px 0; line-height:1.5;">${d.desc}</p>
        <a href="${d.imgUrl}" target="_blank" onclick="event.stopPropagation()" style="color:var(--cyan); font-size:0.8rem; font-weight:600; display:inline-flex; align-items:center; gap:4px; text-decoration:none; opacity:0.9;">
          🔗 Link: ${d.imgUrl.length > 38 ? d.imgUrl.substring(0, 35) + '...' : d.imgUrl}
        </a>
      </div>
    `;

    card.addEventListener('mouseenter', () => {
      const overlay = card.querySelector('.diagram-img-overlay');
      if (overlay) overlay.style.opacity = '1';
    });
    card.addEventListener('mouseleave', () => {
      const overlay = card.querySelector('.diagram-img-overlay');
      if (overlay) overlay.style.opacity = '0';
    });

    container.appendChild(card);
    visibleCount += 1;
  });

  if (visibleCount === 0) {
    container.innerHTML = '<div class="diagram-card card" style="height:auto;"><div class="diagram-img-wrap" style="height:220px;"><div style="color:var(--cyan); font-weight:700; text-align:center;">🗺️ Diagrams & Maps Loaded</div></div><div class="diagram-info"><h4 style="color:var(--cyan);">Visual Learning Hub</h4><p>The diagrams and maps will appear here once the selected study content is available.</p></div></div>';
  }
}

function openDiagramLightbox(imgUrl, title, directImgUrl) {
  let lightbox = document.getElementById('diagram-lightbox');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.id = 'diagram-lightbox';
    lightbox.className = 'modal-overlay';
    lightbox.onclick = (e) => { if (e.target === lightbox) lightbox.classList.remove('open'); };
    document.body.appendChild(lightbox);
  }
  const isDirectImg = (imgUrl && (imgUrl.endsWith('.png') || imgUrl.endsWith('.jpg') || imgUrl.endsWith('.jpeg') || imgUrl.endsWith('.svg') || imgUrl.endsWith('.webp') || imgUrl.endsWith('.gif')));
  const displaySrc = isDirectImg ? imgUrl : (directImgUrl || imgUrl);

  lightbox.innerHTML = `
    <div class="modal-box" style="max-width:950px; text-align:center; padding:24px; background:var(--glass-modal); border:1px solid var(--cyan); border-radius:16px;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
        <h3 style="margin:0; color:var(--cyan); font-size:1.2rem;">${title}</h3>
        <button class="icon-btn close-btn" onclick="document.getElementById('diagram-lightbox').classList.remove('open')">✕</button>
      </div>
      <div style="background:var(--navy-darker); padding:20px; border-radius:14px; max-height:75vh; overflow:auto; display:flex; flex-direction:column; justify-content:center; align-items:center; border:1px solid var(--glass-border); gap:14px;">
        <img src="${displaySrc}" alt="${title}" style="max-width:100%; max-height:60vh; object-fit:contain; border-radius:8px; box-shadow:0 10px 30px rgba(0,0,0,0.6);" onerror="this.onerror=null; this.src='${directImgUrl}';">
        <a href="${imgUrl}" target="_blank" rel="noopener noreferrer" class="btn primary-btn" style="padding:8px 18px; font-size:0.88rem; text-decoration:none; display:inline-flex; align-items:center; gap:6px;">
          🌐 Open Source URL / High-Res Image
        </a>
      </div>
    </div>
  `;
  lightbox.classList.add('open');
}

function openTableModal(title, tableHtml) {
  let modal = document.getElementById('table-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'table-modal';
    modal.className = 'modal-overlay';
    modal.onclick = (e) => { if (e.target === modal) modal.classList.remove('open'); };
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="modal-box" style="max-width:950px; width:92vw; padding:26px; background:linear-gradient(165deg, rgba(13, 30, 48, 0.98), rgba(7, 20, 36, 0.99)); border:1px solid rgba(34, 211, 238, 0.45); border-radius:20px; box-shadow:0 25px 70px rgba(0,0,0,0.85), 0 0 50px rgba(34, 211, 238, 0.25);">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; border-bottom:1px solid rgba(34, 211, 238, 0.25); padding-bottom:14px;">
        <div style="display:flex; align-items:center; gap:10px;">
          <span style="font-size:1.4rem;">📊</span>
          <h3 style="margin:0; color:var(--cyan); font-size:1.25rem; font-weight:700;">${title}</h3>
        </div>
        <button class="icon-btn close-btn" onclick="document.getElementById('table-modal').classList.remove('open')" title="Close (Esc)" style="background:rgba(225, 29, 72, 0.2); border:1px solid rgba(225, 29, 72, 0.5); color:#f43f5e; font-weight:700; width:34px; height:34px; border-radius:50%; cursor:pointer; font-size:1rem; display:flex; align-items:center; justify-content:center;">✕</button>
      </div>
      <div style="max-height:72vh; overflow:auto; padding:4px;">
        ${tableHtml}
      </div>
      <div style="margin-top:18px; text-align:right; font-size:0.82rem; color:var(--gray-muted);">
        Click outside or press Esc to close • Full Screen View
      </div>
    </div>
  `;
  modal.classList.add('open');
}

function renderQuickRevision() {
  const container = document.getElementById('quick-revision-wrap');
  if (!container) return;

  const isPA1 = STATE.syllabusMode === 'PA 1';

  container.innerHTML = `
    <div class="chapter-section" style="padding-top:10px;">
      ${isPA1 ? `<div class="callout callout-important" style="margin-bottom:24px; background:rgba(34,211,238,0.1); border-color:var(--cyan);"><div class="callout-title" style="color:var(--cyan);">📝 Exam Mode Active: PA 1 (Chapters 1 & 2)</div>Focusing 15-minute rapid summary on <strong>Natural Resources & Their Use</strong> and <strong>Reshaping India's Political Map</strong>.</div>` : ''}

      <div class="callout callout-important" style="margin-bottom:30px;">
        <div class="callout-title">⚡ 15-Minute Rapid Exam Summary</div>
        Review key constitutional articles, economic formulas, historical timelines, golden memory tricks, comparison tables, and common pitfalls before stepping into your Social Science examination.
      </div>

      <!-- KEY FORMULAS & CONSTITUTIONAL ARTICLES -->
      <h3 style="color:var(--cyan); margin-bottom:14px;">📜 Key Constitutional Articles & Economic Formulas</h3>
      <div class="formula-block" style="text-align:left; margin-bottom:30px;">
        <ul style="line-height:1.9;">
          ${isPA1 ? '' : '<li><strong>Article 326 (Universal Adult Franchise):</strong> Elections to Lok Sabha & Legislative Assemblies on adult suffrage (Voting age 18+).</li>'}
          ${isPA1 ? '' : '<li><strong>Article 324 (Election Commission):</strong> Independent constitutional authority for election superintendence and control.</li>'}
          <li><strong>Resource Status Threshold:</strong> Resource = Natural Substance + Technological Accessibility + Economic Feasibility + Cultural Acceptability.</li>
          ${isPA1 ? '' : '<li><strong>Dependency Ratio Formula:</strong> Dependency Ratio = [(Population &lt; 15 + Population &gt; 65) / Working-Age Population (15–64)] &times; 100</li>'}
          ${isPA1 ? '' : '<li><strong>61st Constitutional Amendment Act (1988):</strong> Lowered minimum voting age from 21 to 18 years.</li>'}
          <li><strong>States Reorganisation Act 1956 (7th Amendment):</strong> Created 14 States & 6 Union Territories on linguistic lines.</li>
          <li><strong>26th Constitutional Amendment Act (1971):</strong> Abolished Privy Purse pensions for former princely state rulers.</li>
        </ul>
      </div>

      <!-- HIGH-YIELD COMPARISON TABLES -->
      <h3 style="color:var(--cyan); margin-bottom:14px;">⚔️ High-Yield Exam Comparison Tables <span style="font-size:0.8rem; font-weight:400; color:var(--gray-muted); margin-left:8px;">(Click any table card to expand full-screen ⤢)</span></h3>

      <div style="display:flex; flex-direction:column; gap:24px; margin-bottom:30px;">
        <div class="card clickable-table-card" style="width:100%; cursor:pointer;" onclick="openTableModal('Biotic vs. Abiotic Resources', this.querySelector('table').outerHTML)">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
            <h4 style="color:var(--cyan); margin:0;">Biotic vs. Abiotic Resources</h4>
            <span style="font-size:0.75rem; background:rgba(34,211,238,0.12); color:var(--cyan); padding:3px 10px; border-radius:12px; border:1px solid rgba(34,211,238,0.3);">🔍 Expand ⤢</span>
          </div>
          <table style="width:100%; border-collapse:collapse; font-size:0.9rem; border:1px solid rgba(34,211,238,0.3);">
            <thead>
              <tr style="background:rgba(15,23,42,0.9); color:var(--cyan);">
                <th style="padding:10px 14px; border:1px solid rgba(34,211,238,0.25);">Feature</th>
                <th style="padding:10px 14px; border:1px solid rgba(34,211,238,0.25);">Biotic Resources</th>
                <th style="padding:10px 14px; border:1px solid rgba(34,211,238,0.25);">Abiotic Resources</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style="padding:10px 14px; border:1px solid rgba(34,211,238,0.2); font-weight:600;">Origin</td><td style="padding:10px 14px; border:1px solid rgba(34,211,238,0.2);">Living organic matter</td><td style="padding:10px 14px; border:1px solid rgba(34,211,238,0.2);">Non-living inorganic matter</td></tr>
              <tr><td style="padding:10px 14px; border:1px solid rgba(34,211,238,0.2); font-weight:600;">Renewability</td><td style="padding:10px 14px; border:1px solid rgba(34,211,238,0.2);">Biological reproduction</td><td style="padding:10px 14px; border:1px solid rgba(34,211,238,0.2);">Geological time / Cycles</td></tr>
              <tr><td style="padding:10px 14px; border:1px solid rgba(34,211,238,0.2); font-weight:600;">Examples</td><td style="padding:10px 14px; border:1px solid rgba(34,211,238,0.2);">Forests, Crops, Fish, Coal</td><td style="padding:10px 14px; border:1px solid rgba(34,211,238,0.2);">Land, Air, Water, Iron Ore</td></tr>
            </tbody>
          </table>
        </div>

        ${isPA1 ? '' : `
        <div class="card clickable-table-card" style="width:100%; cursor:pointer;" onclick="openTableModal('Fixed Capital vs. Working Capital', this.querySelector('table').outerHTML)">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
            <h4 style="color:var(--cyan); margin:0;">Fixed Capital vs. Working Capital</h4>
            <span style="font-size:0.75rem; background:rgba(34,211,238,0.12); color:var(--cyan); padding:3px 10px; border-radius:12px; border:1px solid rgba(34,211,238,0.3);">🔍 Expand ⤢</span>
          </div>
          <table style="width:100%; border-collapse:collapse; font-size:0.9rem; border:1px solid rgba(34,211,238,0.3);">
            <thead>
              <tr style="background:rgba(15,23,42,0.9); color:var(--cyan);">
                <th style="padding:10px 14px; border:1px solid rgba(34,211,238,0.25);">Feature</th>
                <th style="padding:10px 14px; border:1px solid rgba(34,211,238,0.25);">Fixed Capital</th>
                <th style="padding:10px 14px; border:1px solid rgba(34,211,238,0.25);">Working Capital</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style="padding:10px 14px; border:1px solid rgba(34,211,238,0.2); font-weight:600;">Lifespan</td><td style="padding:10px 14px; border:1px solid rgba(34,211,238,0.2);">Durable over years</td><td style="padding:10px 14px; border:1px solid rgba(34,211,238,0.2);">Single production cycle</td></tr>
              <tr><td style="padding:10px 14px; border:1px solid rgba(34,211,238,0.2); font-weight:600;">Exhaustion</td><td style="padding:10px 14px; border:1px solid rgba(34,211,238,0.2);">Does not get used up</td><td style="padding:10px 14px; border:1px solid rgba(34,211,238,0.2);">Consumed/transformed completely</td></tr>
              <tr><td style="padding:10px 14px; border:1px solid rgba(34,211,238,0.2); font-weight:600;">Examples</td><td style="padding:10px 14px; border:1px solid rgba(34,211,238,0.2);">Machinery, Tractor, Factory</td><td style="padding:10px 14px; border:1px solid rgba(34,211,238,0.2);">Seeds, Raw Cotton, Cash</td></tr>
            </tbody>
          </table>
        </div>

        <div class="card clickable-table-card" style="width:100%; cursor:pointer;" onclick="openTableModal('Lok Sabha vs. Vidhan Sabha', this.querySelector('table').outerHTML)">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
            <h4 style="color:var(--cyan); margin:0;">Lok Sabha vs. Vidhan Sabha</h4>
            <span style="font-size:0.75rem; background:rgba(34,211,238,0.12); color:var(--cyan); padding:3px 10px; border-radius:12px; border:1px solid rgba(34,211,238,0.3);">🔍 Expand ⤢</span>
          </div>
          <table style="width:100%; border-collapse:collapse; font-size:0.9rem; border:1px solid rgba(34,211,238,0.3);">
            <thead>
              <tr style="background:rgba(15,23,42,0.9); color:var(--cyan);">
                <th style="padding:10px 14px; border:1px solid rgba(34,211,238,0.25);">Feature</th>
                <th style="padding:10px 14px; border:1px solid rgba(34,211,238,0.25);">Lok Sabha</th>
                <th style="padding:10px 14px; border:1px solid rgba(34,211,238,0.25);">Vidhan Sabha</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style="padding:10px 14px; border:1px solid rgba(34,211,238,0.2); font-weight:600;">Level</td><td style="padding:10px 14px; border:1px solid rgba(34,211,238,0.2);">Union National Parliament</td><td style="padding:10px 14px; border:1px solid rgba(34,211,238,0.2);">State Legislative Assembly</td></tr>
              <tr><td style="padding:10px 14px; border:1px solid rgba(34,211,238,0.2); font-weight:600;">Members</td><td style="padding:10px 14px; border:1px solid rgba(34,211,238,0.2);">543 MPs</td><td style="padding:10px 14px; border:1px solid rgba(34,211,238,0.2);">MLAs (Varies by state size)</td></tr>
              <tr><td style="padding:10px 14px; border:1px solid rgba(34,211,238,0.2); font-weight:600;">Head</td><td style="padding:10px 14px; border:1px solid rgba(34,211,238,0.2);">Prime Minister</td><td style="padding:10px 14px; border:1px solid rgba(34,211,238,0.2);">Chief Minister</td></tr>
            </tbody>
          </table>
        </div>

        <div class="card clickable-table-card" style="width:100%; cursor:pointer;" onclick="openTableModal('Physical Labour vs. Mental Labour', this.querySelector('table').outerHTML)">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
            <h4 style="color:var(--cyan); margin:0;">Physical Labour vs. Mental Labour</h4>
            <span style="font-size:0.75rem; background:rgba(34,211,238,0.12); color:var(--cyan); padding:3px 10px; border-radius:12px; border:1px solid rgba(34,211,238,0.3);">🔍 Expand ⤢</span>
          </div>
          <table style="width:100%; border-collapse:collapse; font-size:0.9rem; border:1px solid rgba(34,211,238,0.3);">
            <thead>
              <tr style="background:rgba(15,23,42,0.9); color:var(--cyan);">
                <th style="padding:10px 14px; border:1px solid rgba(34,211,238,0.25);">Feature</th>
                <th style="padding:10px 14px; border:1px solid rgba(34,211,238,0.25);">Physical Labour</th>
                <th style="padding:10px 14px; border:1px solid rgba(34,211,238,0.25);">Mental Labour</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style="padding:10px 14px; border:1px solid rgba(34,211,238,0.2); font-weight:600;">Effort</td><td style="padding:10px 14px; border:1px solid rgba(34,211,238,0.2);">Muscular strength & stamina</td><td style="padding:10px 14px; border:1px solid rgba(34,211,238,0.2);">Cognitive analysis & skill</td></tr>
              <tr><td style="padding:10px 14px; border:1px solid rgba(34,211,238,0.2); font-weight:600;">Input</td><td style="padding:10px 14px; border:1px solid rgba(34,211,238,0.2);">Manual execution</td><td style="padding:10px 14px; border:1px solid rgba(34,211,238,0.2);">Problem-solving & design</td></tr>
              <tr><td style="padding:10px 14px; border:1px solid rgba(34,211,238,0.2); font-weight:600;">Examples</td><td style="padding:10px 14px; border:1px solid rgba(34,211,238,0.2);">Construction worker, Porter</td><td style="padding:10px 14px; border:1px solid rgba(34,211,238,0.2);">Surgeon, Software engineer</td></tr>
            </tbody>
          </table>
        </div>
        `}
      </div>

      <!-- THE BIG ERAS AT A GLANCE TABLE -->
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
        <h3 style="color:var(--cyan); margin:0;">📚 The "Big Eras" at a Glance</h3>
        <button onclick="openTableModal('📚 The Big Eras at a Glance', this.parentElement.nextElementSibling.outerHTML)" class="cta-btn-outline" style="padding:5px 12px; font-size:0.8rem; display:inline-flex; align-items:center; gap:5px; cursor:pointer;">🔍 Expand View ⤢</button>
      </div>
      <table style="width:100%; border-collapse:collapse; margin-bottom:30px;">
        <thead>
          <tr>
            <th style="background:var(--navy-dark); color:var(--cyan); padding:10px; border:1px solid var(--glass-border);">Era</th>
            <th style="background:var(--navy-dark); color:var(--cyan); padding:10px; border:1px solid var(--glass-border);">Years</th>
            <th style="background:var(--navy-dark); color:var(--cyan); padding:10px; border:1px solid var(--glass-border);">Main Political Power</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>Ancient & Early Medieval Kingdoms</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Before 1206</td><td style="padding:8px; border:1px solid var(--glass-border);">Cholas, Rajputs, Pandyas, Hoysalas, Kakatiyas, Palas, Senas, etc.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>Delhi Sultanate</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">1206–1526</td><td style="padding:8px; border:1px solid var(--glass-border);">Mamluk, Khalji, Tughlaq, Sayyid, Lodi Dynasties</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>Regional Kingdoms</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">1228–1707</td><td style="padding:8px; border:1px solid var(--glass-border);">Ahoms, Vijayanagara, Bahmani Sultanate, Rajputs</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>Mughal Empire</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">1526–1707 (continued in decline until 1857)</td><td style="padding:8px; border:1px solid var(--glass-border);">Babur to Aurangzeb and successors</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>Maratha Confederacy</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">1674–1818</td><td style="padding:8px; border:1px solid var(--glass-border);">Shivaji and the Peshwas</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>East India Company Rule</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">1757–1858</td><td style="padding:8px; border:1px solid var(--glass-border);">British East India Company</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>British Crown Rule</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">1858–1947</td><td style="padding:8px; border:1px solid var(--glass-border);">British Raj</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>Independent India</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">15 August 1947</td><td style="padding:8px; border:1px solid var(--glass-border);">Transfer of power and Indian Independence Act</td></tr>
        </tbody>
      </table>

      <!-- HISTORICAL TIMELINE TABLE -->
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
        <h3 style="color:var(--cyan); margin:0;">🗺️ Complete Timeline of India's Political Map (1206–1947)</h3>
        <button onclick="openTableModal('🗺️ Complete Timeline of India\'s Political Map (1206–1947)', this.parentElement.nextElementSibling.outerHTML)" class="cta-btn-outline" style="padding:5px 12px; font-size:0.8rem; display:inline-flex; align-items:center; gap:5px; cursor:pointer;">🔍 Expand Timeline Fullscreen ⤢</button>
      </div>
      <table style="width:100%; border-collapse:collapse; margin-bottom:30px;">
        <thead>
          <tr>
            <th style="background:var(--navy-dark); color:var(--cyan); padding:10px; border:1px solid var(--glass-border);">Year / Period</th>
            <th style="background:var(--navy-dark); color:var(--cyan); padding:10px; border:1px solid var(--glass-border);">Event</th>
            <th style="background:var(--navy-dark); color:var(--cyan); padding:10px; border:1px solid var(--glass-border);">Significance</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>Before 1206</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">India divided into many kingdoms (Cholas, Pandyas, Rajputs, Hoysalas, Kakatiyas, Palas, Senas, etc.)</td><td style="padding:8px; border:1px solid var(--glass-border);">No unified Indian state; independent regional kingdoms ruled different parts of the subcontinent.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1191</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">First Battle of Tarain</td><td style="padding:8px; border:1px solid var(--glass-border);">Prithviraj Chauhan defeated Muhammad Ghori.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1192</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Second Battle of Tarain</td><td style="padding:8px; border:1px solid var(--glass-border);">Muhammad Ghori defeated Prithviraj Chauhan, paving the way for Turkish rule in North India.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1206</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Delhi Sultanate founded by Qutb-ud-din Aibak</td><td style="padding:8px; border:1px solid var(--glass-border);">Beginning of Muslim rule from Delhi.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1206–1290</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Mamluk (Slave) Dynasty</td><td style="padding:8px; border:1px solid var(--glass-border);">Qutb-ud-din Aibak, Iltutmish, Razia Sultan and Balban consolidated the Sultanate.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1228</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Ahom Kingdom founded by Sukaphaa</td><td style="padding:8px; border:1px solid var(--glass-border);">Began nearly 600 years of Ahom rule in Assam.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1290–1320</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Khalji Dynasty</td><td style="padding:8px; border:1px solid var(--glass-border);">Alauddin Khalji expanded into Gujarat, Rajasthan and the Deccan; introduced market reforms.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1320–1414</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Tughlaq Dynasty</td><td style="padding:8px; border:1px solid var(--glass-border);">Muhammad bin Tughlaq shifted the capital to Daulatabad (later reversed); token currency introduced; Firoz Shah built canals and cities.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1336</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Vijayanagara Empire founded</td><td style="padding:8px; border:1px solid var(--glass-border);">Largest Hindu empire in South India; capital at Hampi.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1347</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Bahmani Sultanate founded</td><td style="padding:8px; border:1px solid var(--glass-border);">First independent Muslim kingdom in the Deccan.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1398</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Timur invades Delhi</td><td style="padding:8px; border:1px solid var(--glass-border);">Delhi was devastated, weakening the Sultanate.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1414–1451</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Sayyid Dynasty</td><td style="padding:8px; border:1px solid var(--glass-border);">Weak rulers who controlled only a small region around Delhi.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1451–1526</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Lodi Dynasty</td><td style="padding:8px; border:1px solid var(--glass-border);">Last ruling dynasty of the Delhi Sultanate.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1498</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Vasco da Gama reaches Calicut</td><td style="padding:8px; border:1px solid var(--glass-border);">Beginning of European maritime trade with India.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1526</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">First Battle of Panipat</td><td style="padding:8px; border:1px solid var(--glass-border);">Babur defeated Ibrahim Lodi; Mughal Empire founded.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1530–1540</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Humayun's first reign</td><td style="padding:8px; border:1px solid var(--glass-border);">Lost the empire to Sher Shah Suri.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1540–1545</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Sher Shah Suri's rule</td><td style="padding:8px; border:1px solid var(--glass-border);">Grand Trunk Road expanded; standard currency and efficient administration introduced.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1555</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Humayun regains the throne</td><td style="padding:8px; border:1px solid var(--glass-border);">Restored Mughal rule before his death.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1556–1605</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Akbar's reign</td><td style="padding:8px; border:1px solid var(--glass-border);">Empire expanded greatly; Mansabdari system introduced; Rajput alliances; Sulh-i-Kul (universal peace).</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1565</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Battle of Talikota</td><td style="padding:8px; border:1px solid var(--glass-border);">Vijayanagara defeated by the Deccan Sultanates; Hampi destroyed.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1576</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Battle of Haldighati</td><td style="padding:8px; border:1px solid var(--glass-border);">Maharana Pratap fought Mughal forces led by Man Singh; resistance continued.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1600</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">British East India Company established</td><td style="padding:8px; border:1px solid var(--glass-border);">Granted a royal charter by Queen Elizabeth I.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1602</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Dutch East India Company established</td><td style="padding:8px; border:1px solid var(--glass-border);">Dutch entered Indian trade.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1605–1627</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Jahangir's reign</td><td style="padding:8px; border:1px solid var(--glass-border);">Promoted art, painting and stable administration.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1628–1658</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Shah Jahan's reign</td><td style="padding:8px; border:1px solid var(--glass-border);">Taj Mahal, Red Fort and Jama Masjid built.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1630</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Birth of Shivaji Maharaj</td><td style="padding:8px; border:1px solid var(--glass-border);">Founder of the Maratha Empire.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1639</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Madras (Fort St. George) established</td><td style="padding:8px; border:1px solid var(--glass-border);">Major British trading centre.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1664</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">French East India Company established</td><td style="padding:8px; border:1px solid var(--glass-border);">French entered Indian trade.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1668</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Bombay transferred to the British East India Company</td><td style="padding:8px; border:1px solid var(--glass-border);">Became an important British port.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1671</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Battle of Saraighat</td><td style="padding:8px; border:1px solid var(--glass-border);">Ahoms under Lachit Borphukan defeated the Mughals in Assam.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1674</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Shivaji crowned Chhatrapati</td><td style="padding:8px; border:1px solid var(--glass-border);">Official beginning of the Maratha Kingdom.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1680</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Death of Shivaji</td><td style="padding:8px; border:1px solid var(--glass-border);">Maratha expansion continued under later rulers.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1690</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Calcutta established</td><td style="padding:8px; border:1px solid var(--glass-border);">Became a major British administrative centre.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1707</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Death of Aurangzeb</td><td style="padding:8px; border:1px solid var(--glass-border);">Mughal decline begins; rise of regional powers.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1707–1818</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Maratha Confederacy</td><td style="padding:8px; border:1px solid var(--glass-border);">Marathas became the dominant power across much of India.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1757</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Battle of Plassey</td><td style="padding:8px; border:1px solid var(--glass-border);">British defeated Siraj-ud-Daulah; beginning of British political rule.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1761</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Third Battle of Panipat</td><td style="padding:8px; border:1px solid var(--glass-border);">Marathas defeated by Ahmad Shah Abdali; major setback for Maratha expansion.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1764</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Battle of Buxar</td><td style="padding:8px; border:1px solid var(--glass-border);">British defeated Mir Qasim, Nawab of Awadh and Shah Alam II; gained Diwani rights.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1773</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Regulating Act</td><td style="padding:8px; border:1px solid var(--glass-border);">Governor-General of Bengal created; Warren Hastings appointed.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1798</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Subsidiary Alliance introduced</td><td style="padding:8px; border:1px solid var(--glass-border);">Indian rulers accepted British troops and influence.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1848–1856</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Doctrine of Lapse</td><td style="padding:8px; border:1px solid var(--glass-border);">British annexed states without natural heirs.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1849</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Punjab annexed</td><td style="padding:8px; border:1px solid var(--glass-border);">Sikh Empire incorporated into British India.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1856</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Awadh annexed</td><td style="padding:8px; border:1px solid var(--glass-border);">Annexation caused widespread resentment.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1857</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Revolt of 1857</td><td style="padding:8px; border:1px solid var(--glass-border);">Major uprising against British rule; First War of Independence.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1858</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">British Crown Rule begins</td><td style="padding:8px; border:1px solid var(--glass-border);">East India Company abolished; India came under the British Crown.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1885</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Indian National Congress founded</td><td style="padding:8px; border:1px solid var(--glass-border);">Beginning of organised national politics.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1905</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Partition of Bengal</td><td style="padding:8px; border:1px solid var(--glass-border);">Bengal divided by Lord Curzon; widespread protests followed.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1911</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Bengal reunited; capital shifted to Delhi</td><td style="padding:8px; border:1px solid var(--glass-border);">Delhi became the capital of British India.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1919</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Government of India Act & Jallianwala Bagh Massacre</td><td style="padding:8px; border:1px solid var(--glass-border);">Limited reforms introduced; massacre intensified the freedom struggle.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1920</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Non-Cooperation Movement</td><td style="padding:8px; border:1px solid var(--glass-border);">Gandhi launched a nationwide movement against British rule.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1930</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Salt March (Dandi March)</td><td style="padding:8px; border:1px solid var(--glass-border);">Civil Disobedience Movement gained momentum.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1935</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Government of India Act</td><td style="padding:8px; border:1px solid var(--glass-border);">Provincial autonomy introduced; basis for later constitutional developments.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1942</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Quit India Movement</td><td style="padding:8px; border:1px solid var(--glass-border);">Final mass movement demanding immediate British withdrawal.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1946</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Cabinet Mission</td><td style="padding:8px; border:1px solid var(--glass-border);">Proposed a federal India; negotiations ultimately failed.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>3 June 1947</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Mountbatten Plan</td><td style="padding:8px; border:1px solid var(--glass-border);">Announced Partition of British India into India and Pakistan.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>July 1947</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Indian Independence Act</td><td style="padding:8px; border:1px solid var(--glass-border);">British Parliament approved the creation of India and Pakistan.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>15 August 1947</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">India becomes independent</td><td style="padding:8px; border:1px solid var(--glass-border);">Lapse of British Paramountcy and achievement of Indian Independence.</td></tr>
        </tbody>
      </table>

      <!-- GOLDEN MEMORY TRICKS -->
      <h3 style="color:var(--cyan); margin-bottom:14px;">💡 Golden Memory Tricks</h3>
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:15px; margin-bottom:30px;">
        <div class="callout callout-observation" style="margin:0;">
          <div class="callout-title">⭐ TEC Rule</div>
          <strong>T</strong> – Technological Accessibility<br>
          <strong>E</strong> – Economic Feasibility<br>
          <strong>C</strong> – Cultural Acceptability
        </div>
        <div class="callout callout-observation" style="margin:0;">
          <div class="callout-title">⭐ The 3Rs</div>
          <strong>R</strong> – Reduce non-renewable consumption<br>
          <strong>R</strong> – Reuse durable items<br>
          <strong>R</strong> – Recycle industrial waste
        </div>
        <div class="callout callout-observation" style="margin:0;">
          <div class="callout-title">⭐ 4 Factors & Rewards</div>
          Land ➔ <strong>Rent</strong><br>
          Labour ➔ <strong>Wages</strong><br>
          Capital ➔ <strong>Interest</strong><br>
          Entrepreneur ➔ <strong>Profit</strong>
        </div>
      </div>

      <!-- COMMON EXAM MISTAKES -->
      <h3 style="color:var(--rose); margin-bottom:14px;">⚠️ Common Exam Pitfalls & Errors to Avoid</h3>
      <div class="callout callout-warning">
        <ul>
          <li><strong>Mistake 1:</strong> Writing that <em>Nature</em> and <em>Resource</em> are identical. (Nature becomes a resource ONLY when utility is discovered and technology exists).</li>
          <li><strong>Mistake 2:</strong> Confusing <em>Fixed Capital</em> with <em>Working Capital</em>. (Fixed capital lasts years like machinery; working capital is consumed in 1 production run like raw material).</li>
          <li><strong>Mistake 3:</strong> Writing that voting age is 21. (Voting age was lowered to <strong>18 years</strong> by the 61st Amendment Act, 1988).</li>
          <li><strong>Mistake 4:</strong> Believing <em>Technology</em> is a 5th separate factor of production. (Technology is an <em>enabler</em> that enhances the productivity of Land, Labour, Capital, and Entrepreneurship).</li>
          <li><strong>Mistake 5:</strong> Forgetting that campaign activity must stop <strong>48 hours before polling closes</strong> (Silence Period).</li>
        </ul>
      </div>
    </div>
  `;
}


  function setupSearch() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      if (!query) {
        renderTopics();
        renderFlashcards();
        renderGlossary();
        return;
      }

      const filteredTopics = TOPICS.filter(t =>
        t.title.toLowerCase().includes(query) ||
        t.preview.toLowerCase().includes(query) ||
        t.contentHtml.toLowerCase().includes(query)
      );

      const filteredGlossary = GLOSSARY.filter(g =>
        g.term.toLowerCase().includes(query) ||
        g.def.toLowerCase().includes(query)
      );

      const filteredFc = FLASHCARDS.filter(f =>
        f.q.toLowerCase().includes(query) ||
        f.a.toLowerCase().includes(query) ||
        f.topic.toLowerCase().includes(query)
      );

      displayGlossaryTerms(filteredGlossary);

      STATE.flashcardFiltered = filteredFc;
      STATE.flashcardIndex = 0;
      updateFlashcardUI();
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    setSyllabusMode(STATE.syllabusMode);
    setupSearch();

    console.log('SST Study Guide SPA Engine Initialized!');
  });

// ==========================================================================
// Universal Multi-Token Flow Launcher (Ctrl + K) Search Engine
// ==========================================================================

let activeSearchFilter = 'all';
let currentSearchResults = [];
let selectedSearchIndex = 0;

function openSearchModal() {
  const overlay = document.getElementById('search-modal-overlay');
  const input = document.getElementById('search-modal-input');
  if (!overlay) return;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  if (input) {
    input.value = '';
    input.focus();
  }
  performSearch('');
}

function closeSearchModal() {
  const overlay = document.getElementById('search-modal-overlay');
  if (!overlay) return;

  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function handleSearchModalClick(e) {
  if (e.target.id === 'search-modal-overlay') {
    closeSearchModal();
  }
}

function setSearchFilter(filter) {
  activeSearchFilter = filter;
  const filterBtns = document.querySelectorAll('.search-filter-tag');
  filterBtns.forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-filter') === filter);
  });
  const input = document.getElementById('search-modal-input');
  performSearch(input ? input.value : '');
}

function highlightText(text, query) {
  if (!text || !query || !query.trim()) return text || '';
  const tokens = query.trim().split(/\s+/).filter(t => t.length > 0);
  if (tokens.length === 0) return text;
  
  const escapedTokens = tokens.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const pattern = new RegExp(`(${escapedTokens.join('|')})`, 'gi');
  
  return text.replace(pattern, '<mark class="search-highlight">$1</mark>');
}

function performSearch(query) {
  query = (query || '').trim().toLowerCase();
  const resultsContainer = document.getElementById('search-modal-results');
  if (!resultsContainer) return;

  currentSearchResults = [];
  selectedSearchIndex = 0;

  if (!query) {
    resultsContainer.innerHTML = '';
    resultsContainer.style.display = 'none';
    return;
  }
  resultsContainer.style.display = 'flex';

  const queryTokens = query.split(/\s+/).filter(t => t.length > 0);

  function calcScore(text, title) {
    if (!text) return 0;
    const lowerText = text.toLowerCase();
    const lowerTitle = (title || '').toLowerCase();
    let score = 0;

    if (lowerTitle.includes(query)) score += 100;
    if (lowerText.includes(query)) score += 40;

    let matchedTokens = 0;
    queryTokens.forEach(token => {
      if (lowerTitle.includes(token)) {
        score += 25;
        matchedTokens++;
      } else if (lowerText.includes(token)) {
        score += 10;
        matchedTokens++;
      }
    });

    return matchedTokens > 0 ? score : 0;
  }

  // 1. Scan Topics
  TOPICS.forEach(topic => {
    const fullIdx = TOPICS.findIndex(t => t.id === topic.id);
    const cleanContent = topic.contentHtml.replace(/<[^>]+>/g, ' ');
    const fullText = topic.title + ' ' + topic.preview + ' ' + cleanContent;
    const score = calcScore(fullText, topic.title);

    if (score > 0) {
      let snippetText = topic.preview;
      const matchIdx = cleanContent.toLowerCase().indexOf(queryTokens[0]);
      if (matchIdx !== -1 && !topic.preview.toLowerCase().includes(queryTokens[0])) {
        const start = Math.max(0, matchIdx - 35);
        const end = Math.min(cleanContent.length, matchIdx + 110);
        snippetText = '...' + cleanContent.substring(start, end) + '...';
      }

      currentSearchResults.push({
        type: 'topics',
        badge: '📘 Topic',
        title: topic.title,
        location: topic.chapterTitle,
        snippet: snippetText,
        score: score,
        action: () => {
          closeSearchModal();
          openModal(fullIdx);
        }
      });
    }
  });

  // 2. Scan Glossary
  GLOSSARY.forEach(item => {
    const score = calcScore(item.term + ' ' + item.def, item.term);
    if (score > 0) {
      currentSearchResults.push({
        type: 'glossary',
        badge: '📖 Glossary',
        title: item.term,
        location: `Category: ${item.cat}`,
        snippet: item.def,
        score: score,
        action: () => {
          closeSearchModal();
          const el = document.getElementById('glossary');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  });

  // 3. Scan Flashcards
  FLASHCARDS.forEach(fc => {
    const score = calcScore(fc.q + ' ' + fc.a, fc.q);
    if (score > 0) {
      currentSearchResults.push({
        type: 'flashcards',
        badge: '🎴 Flashcard',
        title: fc.q,
        location: `Topic: ${fc.topic}`,
        snippet: `Answer: ${fc.a}`,
        score: score,
        action: () => {
          closeSearchModal();
          const el = document.getElementById('flashcards');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  });

  // 4. Scan MCQs
  MCQS.forEach(mcq => {
    const optsText = (mcq.opts || []).join(' ');
    const score = calcScore(mcq.q + ' ' + optsText + ' ' + mcq.exp, mcq.q);
    if (score > 0) {
      currentSearchResults.push({
        type: 'mcqs',
        badge: '❓ MCQ',
        title: mcq.q,
        location: `Topic: ${mcq.topic}`,
        snippet: `Explanation: ${mcq.exp}`,
        score: score,
        action: () => {
          closeSearchModal();
          const el = document.getElementById('mcqs');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  });

  currentSearchResults.sort((a, b) => b.score - a.score);
  renderSearchResults(query);
}

function renderSearchResults(query) {
  const container = document.getElementById('search-modal-results');
  if (!container) return;

  if (currentSearchResults.length === 0) {
    container.innerHTML = `
      <div class="search-modal-empty">
        🔍 No matching results found for "<strong>${query}</strong>"<br>
        <span style="font-size:0.85rem; color:var(--gray-muted); margin-top:6px; display:inline-block;">Try searching for any terms, dates, kings, laws, or concepts.</span>
      </div>`;
    return;
  }

  container.innerHTML = '';
  currentSearchResults.slice(0, 35).forEach((item, idx) => {
    const itemEl = document.createElement('div');
    itemEl.className = `search-result-item ${idx === selectedSearchIndex ? 'selected' : ''}`;
    itemEl.setAttribute('data-search-idx', idx);

    const highlightedTitle = highlightText(item.title, query);
    const highlightedSnippet = highlightText(item.snippet, query);

    itemEl.innerHTML = `
      <div class="search-result-top">
        <span class="search-result-title">${highlightedTitle}</span>
        <span class="search-result-badge">${item.badge}</span>
      </div>
      <div class="search-result-location">📍 ${item.location}</div>
      <div class="search-result-snippet">${highlightedSnippet}</div>
    `;

    itemEl.addEventListener('click', () => item.action());
    container.appendChild(itemEl);
  });
}

document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    const overlay = document.getElementById('search-modal-overlay');
    if (overlay && overlay.classList.contains('open')) {
      closeSearchModal();
    } else {
      openSearchModal();
    }
    return;
  }

  const searchOverlay = document.getElementById('search-modal-overlay');
  if (!searchOverlay || !searchOverlay.classList.contains('open')) return;

  if (e.key === 'Escape') {
    closeSearchModal();
  } else if (e.key === 'ArrowDown') {
    e.preventDefault();
    if (currentSearchResults.length > 0) {
      selectedSearchIndex = (selectedSearchIndex + 1) % Math.min(35, currentSearchResults.length);
      updateSelectedSearchResult();
    }
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (currentSearchResults.length > 0) {
      selectedSearchIndex = (selectedSearchIndex - 1 + Math.min(35, currentSearchResults.length)) % Math.min(35, currentSearchResults.length);
      updateSelectedSearchResult();
    }
  } else if (e.key === 'Enter') {
    e.preventDefault();
    if (currentSearchResults[selectedSearchIndex]) {
      currentSearchResults[selectedSearchIndex].action();
    }
  }
});

function updateSelectedSearchResult() {
  const items = document.querySelectorAll('.search-result-item');
  items.forEach((item, idx) => {
    const isSel = idx === selectedSearchIndex;
    item.classList.toggle('selected', isSel);
    if (isSel) {
      item.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-modal-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      performSearch(e.target.value);
    });
  }
});
