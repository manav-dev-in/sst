/* Grade 8 SST Study Guide — Single Page Application Engine */

const STATE = {
  activeTab: 'home',
  syllabusMode: localStorage.getItem('g8_sst_syllabus_mode') || 'Term 1',
  bookmarks: JSON.parse(localStorage.getItem('g8_sst_bookmarks') || '[]'),
  learnedFlashcards: JSON.parse(localStorage.getItem('g8_sst_learned_fc') || '[]'),
  quizHighScore: parseInt(localStorage.getItem('g8_sst_quiz_score') || '0', 10),
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
    id: 'ch2-precolonial-empires-kingdoms',
    chapterId: 'political-map',
    chapterTitle: "Reshaping India's Political Map",
    icon: '🏰',
    title: '9. Pre-Colonial India: Empires, Sultanates & Regional Kingdoms',
    difficulty: 'Medium',
    readTime: '9 min',
    preview: 'Trace India\'s pre-colonial political landscape across the Delhi Sultanate (5 dynasties), Vijayanagara Empire, Rajput Kingdoms, and the 600-year Ahom Kingdom.',
    contentHtml: `<p>Throughout history, India was rarely governed by a single monarch or central authority. Instead, it existed as a dynamic tapestry of hundreds of independent kingdoms, tribal territories, regional empires, sultanates, and confederacies.</p>

          <div class="callout callout-definition">
            <div class="callout-title">📜 Historical Reality of Pre-Colonial India</div>
            India was not a unified administrative state before British colonization. At times, powerful empires (like the Mauryas, Guptas, or Mughals) consolidated large parts of the subcontinent; at other times, India was fragmented into hundreds of sovereign kingdoms.
          </div>

          <h3>1. The Delhi Sultanate (1206–1526)</h3>
          <p>Established following the Second Battle of Tarain (1192) when Muhammad Ghori defeated Prithviraj Chauhan. The Sultanate was ruled across five successive dynasties:</p>
          <ol>
            <li><strong>Slave (Mamluk) Dynasty (1206–1290):</strong> Founded by Qutb-ud-din Aibak.</li>
            <li><strong>Khalji Dynasty (1290–1320):</strong> Expanded central control under Alauddin Khalji.</li>
            <li><strong>Tughlaq Dynasty (1320–1414):</strong> Peak territorial reach under Muhammad bin Tughlaq.</li>
            <li><strong>Sayyid Dynasty (1414–1451):</strong> Ruled post-Timur's invasion.</li>
            <li><strong>Lodi Dynasty (1451–1526):</strong> Final Afghan dynasty defeated by Babur.</li>
          </ol>

          <div class="callout callout-fact">
            <div class="callout-title">🏛️ Achievements & Unconquered Frontiers</div>
            <br>• <strong>Achievements:</strong> Centralized administration, standardized land revenue, road networks, Persian cultural synthesis, and iconic monuments (Qutb Minar, forts).
            <br>• <strong>Unconquered Regions:</strong> The Sultanate never controlled all of India. Major independent regions included the <strong>Ahoms</strong> in Assam, the <strong>Vijayanagara Empire</strong> in the South, various <strong>Rajput Kingdoms</strong>, Kashmir, and Kerala.
          </div>

          <h3>2. The Vijayanagara Empire (1336–1646)</h3>
          <p>Founded by brothers <strong>Harihara I</strong> and <strong>Bukka Raya I</strong> with its capital at <strong>Hampi</strong> (Karnataka). It became one of the wealthiest global trade cities of the medieval era.</p>
          <ul>
            <li><strong>Golden Age:</strong> Reached its peak under Emperor <strong>Krishnadevaraya</strong> (1509–1529), who promoted trade, literature, and Dravidian temple architecture.</li>
            <li><strong>Decline:</strong> Decisively defeated by an alliance of Deccan Sultanates at the <strong>Battle of Talikota (1565)</strong>.</li>
          </ul>

          <h3>3. Rajput Kingdoms</h3>
          <p>Ruled extensive territories across Western and Northern India (Mewar, Marwar, Amber/Jaipur, Bikaner, Bundi). Famous military rulers included <strong>Rana Kumbha</strong>, <strong>Rana Sanga</strong>, and <strong>Maharana Pratap</strong>. While some kingdoms forged diplomatic alliances with the Mughals, others maintained fierce independence.</p>

          <h3>4. The Ahom Kingdom (1228–1826)</h3>
          <p>Founded by <strong>Sukaphaa</strong> in Assam, the Ahom Dynasty ruled the Brahmaputra Valley for nearly <strong>600 years</strong>. In 1671, Ahom general <strong>Lachit Borphukan</strong> decisively defeated the Mughal army at the historic <strong>Battle of Saraighat</strong> using river naval tactics, ensuring Assam remained unconquered by the Mughals.</p>`
  },
  {
    id: 'ch2-mughal-governance-akbar-aurangzeb',
    chapterId: 'political-map',
    chapterTitle: "Reshaping India's Political Map",
    icon: '🕌',
    title: '10. The Mughal Era: Statecraft & Akbar vs. Aurangzeb Comparative Rule',
    difficulty: 'Hard',
    readTime: '10 min',
    preview: 'Analyze Mughal statecraft from Babur to Aurangzeb, featuring an unabridged side-by-side comparative analysis between Akbar\'s inclusive rule and Aurangzeb\'s orthodox expansionism.',
    contentHtml: `<p>The <strong>Mughal Empire (1526–1857)</strong> was founded by <strong>Babur</strong> after defeating Ibrahim Lodi at the <strong>First Battle of Panipat (1526)</strong>. Under six major emperors (<em>Great Mughals</em>), the empire created a sophisticated administrative state covering most of South Asia.</p>

          <div class="callout callout-important">
            <div class="callout-title">⚖️ The Two Contrasting Pillars of Mughal Governance</div>
            The trajectory of Mughal power was shaped by two fundamentally contrasting governance models: <strong>Akbar's syncretic integration</strong> (16th century) versus <strong>Aurangzeb's orthodox centralization</strong> (17th century).
          </div>

          <h3>Detailed Comparative Analysis: Akbar vs. Aurangzeb</h3>
          <table>
            <thead>
              <tr>
                <th>Governance Dimension</th>
                <th>👑 Akbar the Great (1556–1605)</th>
                <th>⚔️ Aurangzeb Alamgir (1658–1707)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Philosophical Approach</strong></td>
                <td><strong>Inclusive & Syncretic (*Sulh-i-kul*):</strong> Promoted 'Universal Peace' and integrated non-Muslim communities into high governance.</td>
                <td><strong>Orthodox Islamic Centralization:</strong> Governed strictly according to orthodox Sunni Islamic jurisprudence (*Fatawa-e-Alamgiri*).</td>
              </tr>
              <tr>
                <td><strong>Religious Tax & Freedom</strong></td>
                <td>Abolished the <em>Jizya</em> poll tax and pilgrim tax; built the <em>Ibadat Khana</em> for interfaith debates; promulgated <em>Din-i-Ilahi</em>.</td>
                <td>Re-imposed <em>Jizya</em> in 1679; restricted public non-Muslim religious festivals; demolished several newly constructed temples.</td>
              </tr>
              <tr>
                <td><strong>Rajput & Regional Policy</strong></td>
                <td>Forged strong matrimonial & strategic alliances; granted high imperial mansabs to Rajput kings (e.g., Raja Man Singh).</td>
                <td>Alienated Rajputs of Mewar & Marwar; engaged in prolonged conflicts with Rajputs, Sikhs, and Marathas.</td>
              </tr>
              <tr>
                <td><strong>Land Revenue & Admin</strong></td>
                <td>Standardized land measurement and tax collection under Raja Todar Mal's <strong>Zabt System</strong>; structured <strong>Mansabdari System</strong>.</td>
                <td>Maintained Mansabdari system, but efficiency declined due to severe financial stress and the <em>Jagirdari Crisis</em>.</td>
              </tr>
              <tr>
                <td><strong>Military & Territorial Reach</strong></td>
                <td>Consolidated Northern & Central India with balanced frontiers and stable local governance.</td>
                <td>Expanded empire to maximum size by annexing Bijapur & Golconda; got trapped in a 25-year Deccan campaign (*Deccan Ulcer*).</td>
              </tr>
              <tr>
                <td><strong>Financial Health</strong></td>
                <td>Prosperous, high-surplus treasury supported by flourishing trade, craftsmanship, and stable agriculture.</td>
                <td>Depleted treasury caused by relentless warfare, military maintenance, and widespread regional revolts.</td>
              </tr>
              <tr>
                <td><strong>Long-Term Imperial Stability</strong></td>
                <td>Laid a multi-ethnic administrative foundation that sustained Mughal prosperity for over a century.</td>
                <td>Achieved maximum land area, but severe internal rebellions and financial drain triggered rapid decline post-1707.</td>
              </tr>
            </tbody>
          </table>

          <div class="callout callout-observation">
            <div class="callout-title">💡 Post-Aurangzeb Imperial Fragmentation</div>
            Following Aurangzeb's death in 1707, weak central successors could not hold the vast empire together. Regional governors (*Subahdars*) broke away to establish independent successor states in Hyderabad, Bengal, and Awadh.
          </div>`
  },
  {
    id: 'ch2-regional-powers-eic-expansion',
    chapterId: 'political-map',
    chapterTitle: "Reshaping India's Political Map",
    icon: '⚔️',
    title: '11. Rise of Regional Powers & British East India Company Expansion',
    difficulty: 'Hard',
    readTime: '10 min',
    preview: 'Examine 18th-century regional powers (Marathas, Sikhs, Mysore), the rise of British EIC trade-to-empire control (Plassey, Buxar), Doctrine of Lapse, Subsidiary Alliance, and the 1857 Revolt.',
    contentHtml: `<p>As Mughal authority faded in the 18th century, powerful regional states emerged to claim political dominance before being systematically subjugated by the British East India Company (EIC).</p>

          <h3>1. Powerful 18th-Century Regional Powers</h3>
          <ul>
            <li><strong>Maratha Confederacy:</strong> Founded by <strong>Chhatrapati Shivaji Maharaj</strong> with the goal of <em>Swarajya</em> (self-rule). Developed guerrilla warfare (*Ganimi Kawa*) and a powerful coastal navy. Under the <strong>Peshwas</strong>, Marathas expanded across central and northern India before losing to the British in three Anglo-Maratha Wars (1775–1818).</li>
            <li><strong>Sikh Empire:</strong> Founded by <strong>Maharaja Ranjit Singh</strong> with capital at Lahore. Created a modern, formidable <em>Khalsa Army</em> trained by European officers. Annexed by the British following the Anglo-Sikh Wars (1845–1849).</li>
            <li><strong>Kingdom of Mysore:</strong> Led by <strong>Hyder Ali</strong> and <strong>Tipu Sultan</strong> ('Tiger of Mysore'). Tipu modernized his army and invented iron-cased <strong>rocket artillery</strong> used in four Anglo-Mysore Wars. Mysore was captured in 1799 after Tipu was killed at Seringapatam.</li>
          </ul>

          <h3>2. British East India Company: From Trade to Empire</h3>
          <p>Chartered by Queen Elizabeth I in 1600 for spice and cotton trade, the EIC gradually transformed into a sovereign territorial power through decisive military victories:</p>
          <div class="callout callout-fact">
            <div class="callout-title">⚔️ Two Battles That Gave Britain India</div>
            <br>• <strong>Battle of Plassey (1757):</strong> Robert Clive defeated Nawab Siraj-ud-Daulah of Bengal, marking the onset of British political control.
            <br>• <strong>Battle of Buxar (1764):</strong> EIC defeated combined armies of Mughal Emperor Shah Alam II, Nawab of Awadh, and Nawab of Bengal—securing <strong>Diwani Rights</strong> (revenue collection) over Bengal, Bihar, and Odisha.
          </div>

          <h3>3. Imperial Annexation Instruments</h3>
          <table>
            <thead>
              <tr>
                <th>Policy</th>
                <th>Architect</th>
                <th>Core Mechanism</th>
                <th>States Annexed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Subsidiary Alliance</strong></td>
                <td>Lord Wellesley (1798)</td>
                <td>Rulers surrendered foreign policy & defense, accepted British troops, and paid for their upkeep.</td>
                <td>Hyderabad (1798), Mysore (1799), Awadh (1801).</td>
              </tr>
              <tr>
                <td><strong>Doctrine of Lapse</strong></td>
                <td>Lord Dalhousie (1848)</td>
                <td>If a native ruler died without a direct male biological heir, his kingdom was automatically annexed.</td>
                <td>Satara (1848), Jhansi (1853), Nagpur (1854).</td>
              </tr>
            </tbody>
          </table>

          <h3>4. The Revolt of 1857 & The British Raj</h3>
          <p>Widespread political, economic, and military grievances culminated in the <strong>Revolt of 1857</strong> led by Rani Lakshmibai, Tantia Tope, Nana Sahib, Begum Hazrat Mahal, and Bahadur Shah Zafar. Though suppressed, the revolt ended EIC rule: under the <strong>Government of India Act 1858</strong>, administrative control was transferred directly to the <strong>British Crown</strong> (the <em>British Raj</em>).</p>`
  },
  {
    id: 'ch2-colonial-partition-princely',
    chapterId: 'political-map',
    chapterTitle: "Reshaping India's Political Map",
    icon: '🗺️',
    title: '12. Colonial Partition & The Challenge of 565+ Princely States',
    difficulty: 'Medium',
    readTime: '8 min',
    preview: 'Understand the administrative division under the British Raj between Direct Provinces and 565 Princely States, Partition of 1947, and the grave threat of Indian Balkanization.',
    contentHtml: `<p>Under the British Raj (1858–1947), the Indian subcontinent was politically bifurcated into two distinct administrative systems:</p>

          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>🏛️ British Indian Provinces</th>
                <th>👑 Princely States (565 Kingdom Enclaves)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Governance</strong></td>
                <td>Direct rule by British Governors reporting to the Viceroy.</td>
                <td>Internal autonomy under native Maharajas, Nizams, Nawabs, and Rajas.</td>
              </tr>
              <tr>
                <td><strong>Coverage</strong></td>
                <td>~60% of land area (Bombay, Madras, Bengal, Punjab, UP).</td>
                <td>~40% of land area, ~33% of population across <strong>565 states</strong>.</td>
              </tr>
              <tr>
                <td><strong>Sovereignty</strong></td>
                <td>Direct British territorial sovereignty & legal codes.</td>
                <td>Recognized British <strong>Paramountcy</strong> (ceded defense & foreign affairs).</td>
              </tr>
            </tbody>
          </table>

          <div class="callout callout-important">
            <div class="callout-title">⚡ The Independence & Balkanization Crisis (1947)</div>
            On August 15, 1947, India gained independence alongside Partition into India and Pakistan. Crucially, the <em>Indian Independence Act 1947</em> terminated British Paramountcy over the 565 Princely States, granting each ruler three choices:
            <br>1. Accede to <strong>India</strong>
            <br>2. Accede to <strong>Pakistan</strong>
            <br>3. Remain an <strong>Independent Sovereign Nation</strong>
            <br><br>If states chose independence, India faced total <em>Balkanization</em>—fragmenting into hundreds of landlocked, hostile countries.
          </div>`
  },
  {
    id: 'ch2-sardar-patel-integration',
    chapterId: 'political-map',
    chapterTitle: "Reshaping India's Political Map",
    icon: '🏛️',
    title: '13. Sardar Vallabhbhai Patel & Diplomatic Integration',
    difficulty: 'Hard',
    readTime: '9 min',
    preview: 'Learn how India\'s first Deputy Prime Minister and Home Minister, Sardar Vallabhbhai Patel, alongside V.P. Menon, integrated hundreds of princely states into a unified democratic union.',
    contentHtml: `<p>The territorial integration of 565 princely states into the Indian Union stands as one of history's greatest political achievements, engineered by <strong>Sardar Vallabhbhai Patel</strong> (Home Minister & Deputy PM) and civil servant <strong>V.P. Menon</strong>.</p>

          <div class="callout callout-definition">
            <div class="callout-title">📜 The Instrument of Accession (IoA)</div>
            The legal mechanism through which princely rulers surrendered control over three primary national domains to the Dominion of India: <strong>Defense</strong>, <strong>External Affairs</strong>, and <strong>Communications</strong>.
          </div>

          <h3>Patel's Masterful Strategy</h3>
          <ul>
            <li><strong>Patriotic Appeal:</strong> Appealed to rulers' historical patriotism to shape a strong, united democratic India.</li>
            <li><strong>The Carrot (Privy Purses):</strong> Offered tax-free annual state pensions (<em>Privy Purses</em>), retention of personal titles, and property rights.</li>
            <li><strong>The Stick (Firm Realpolitik):</strong> Warned that refusing accession would unleash popular democratic uprisings among their own subjects, which the Indian government could not suppress on their behalf.</li>
          </ul>

          <div class="callout callout-observation">
            <div class="callout-title">💡 The Bismarck of India</div>
            Sardar Patel is revered as the <strong>'Iron Man of India'</strong> and <strong>'Bismarck of India'</strong> for forging a unified republic without widespread civil war.
          </div>`
  },
  {
    id: 'ch2-case-studies-integration',
    chapterId: 'political-map',
    chapterTitle: "Reshaping India's Political Map",
    icon: '🗡️',
    title: '14. Case Studies in Accession: Junagadh, Hyderabad & Kashmir',
    difficulty: 'Hard',
    readTime: '9 min',
    preview: 'Examine the dramatic accession stories of the three princely states that resisted initial integration: Junagadh, Hyderabad, and Jammu & Kashmir.',
    contentHtml: `<p>While over 500 princely states signed the Instrument of Accession before August 15, 1947, three states presented complex geopolitical crises:</p>

          <div class="callout callout-definition">
            <div class="callout-title">🏛️ 1. Junagadh (Plebiscite)</div>
            The Nawab of Junagadh (Gujarat) acceded to Pakistan despite having an 80%+ Hindu population and no geographical contiguity with Pakistan. Citizens formed a provisional government (<em>Arzi Hukumat</em>); the Nawab fled to Karachi. A democratic <strong>plebiscite in February 1948</strong> saw 99.95% of voters choose India.
          </div>

          <div class="callout callout-definition">
            <div class="callout-title">🏛️ 2. Hyderabad (Operation Polo)</div>
            The Nizam of Hyderabad (Mir Osman Ali Khan) sought independence in peninsular India. A radical paramilitary group, the <strong>Razakars</strong> (led by Qasim Razvi), terrorized local citizens. India launched a 5-day police action named <strong>Operation Polo</strong> in September 1948, securing the Nizam's surrender and accession.
          </div>

          <div class="callout callout-definition">
            <div class="callout-title">🏛️ 3. Jammu & Kashmir (Tribal Invasion & IoA)</div>
            Maharaja Hari Singh initially sought independence. However, on October 22, 1947, Pakistan-backed armed Pashtun tribals invaded Kashmir. Hari Singh appealed to India for military aid and signed the <strong>Instrument of Accession on October 26, 1947</strong>. Indian forces repelled the invasion, leading to the 1947–48 war and the creation of the Line of Control (LoC).
          </div>`
  },
  {
    id: 'ch2-states-reorganisation-act',
    chapterId: 'political-map',
    chapterTitle: "Reshaping India's Political Map",
    icon: '📜',
    title: '15. States Reorganisation Commission (SRC 1953) & Act of 1956',
    difficulty: 'Hard',
    readTime: '9 min',
    preview: 'Explore the reorganization of Indian state boundaries along linguistic lines following Potti Sreeramulu\'s martyrdom and the recommendations of the Fazal Ali Commission.',
    contentHtml: `<p>Post-1947, India inherited a confusing 4-part state system (Part A, B, C, D). Citizens demanded state boundaries aligned with major spoken regional languages to make government accessible.</p>

          <div class="callout callout-important">
            <div class="callout-title">🚨 The Andhra Movement & Potti Sriramulu</div>
            Freedom fighter <strong>Potti Sriramulu</strong> undertook a fast unto death demanding a separate Telugu-speaking state carved out of Madras State. After fasting for <strong>56 days</strong>, he passed away on December 15, 1952. Widespread protests compelled Prime Minister Nehru to form <strong>Andhra State on October 1, 1953</strong>—India's first linguistic state.
          </div>

          <h3>States Reorganisation Commission (SRC 1953)</h3>
          <p>Appointed in December 1953 under <strong>Justice Fazal Ali</strong> (Chairman), <strong>H.N. Kunzru</strong>, and <strong>K.M. Panikkar</strong> to study nationwide boundary reorganization.</p>

          <div class="formula-block">
            States Reorganisation Act (1956) = Replaced Part A/B/C/D with 14 States + 6 Union Territories
          </div>

          <p>Linguistic reorganization united speakers of Malayalam (Kerala), Kannada (Karnataka/Mysore), Telugu (Andhra Pradesh), Tamil (Madras), and Marathi/Gujarati within distinct state units.</p>`
  },
  {
    id: 'ch2-post-1956-statehood-milestones',
    chapterId: 'political-map',
    chapterTitle: "Reshaping India's Political Map",
    icon: '⛰️',
    title: '16. Chronological State Creation (1960–2014) & Master Summary Timeline',
    difficulty: 'Hard',
    readTime: '10 min',
    preview: 'Follow the full timeline of state reorganisations from 1960 (Bombay split) to 2014 (Telangana), along with the complete master summary timeline table.',
    contentHtml: `<p>India's internal boundaries have continued to evolve to accommodate linguistic identity, regional economic balance, and localized governance aspirations.</p>

          <h3>Evolution of States (1960–2014)</h3>
          <table>
            <thead>
              <tr>
                <th>Year</th>
                <th>State / Territory Formed</th>
                <th>Precursor / Carved From</th>
                <th>Primary Driver</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>1960</strong></td><td>Gujarat & Maharashtra</td><td>Bombay State</td><td>Linguistic division (Gujarati vs. Marathi).</td></tr>
              <tr><td><strong>1963</strong></td><td>Nagaland</td><td>Assam (Naga Hills)</td><td>Ethnic Naga tribal autonomy.</td></tr>
              <tr><td><strong>1966</strong></td><td>Haryana & Chandigarh (UT)</td><td>Punjab State</td><td>Hindi-speaking region separated from Punjab.</td></tr>
              <tr><td><strong>1971</strong></td><td>Himachal Pradesh</td><td>Union Territory</td><td>Elevated to full statehood.</td></tr>
              <tr><td><strong>1972</strong></td><td>Meghalaya, Manipur, Tripura</td><td>Assam & UTs</td><td>Northeastern administrative reorganization.</td></tr>
              <tr><td><strong>1975</strong></td><td>Sikkim</td><td>Chogyal Kingdom</td><td>36th Amendment; voted to join India.</td></tr>
              <tr><td><strong>1987</strong></td><td>Goa, Mizoram, Arunachal Pradesh</td><td>Union Territories</td><td>Full statehood granted.</td></tr>
              <tr><td><strong>2000</strong></td><td>Chhattisgarh, Uttarakhand, Jharkhand</td><td>MP, UP, Bihar</td><td>Tribal development & hill region governance.</td></tr>
              <tr><td><strong>2014</strong></td><td>Telangana</td><td>Andhra Pradesh</td><td>Decades of regional agitation & economic disparity.</td></tr>
              <tr><td><strong>2019</strong></td><td>UTs of J&K and Ladakh</td><td>State of J&K</td><td>J&K Reorganisation Act 2019.</td></tr>
            </tbody>
          </table>

          <h3>Master Summary Timeline (1206 – 2014)</h3>
          <table>
            <thead>
              <tr>
                <th>Year</th>
                <th>Historical Milestone</th>
                <th>Key Significance</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>1206</strong></td><td>Delhi Sultanate Established</td><td>Beginning of 5-dynasty Sultanate rule in North India.</td></tr>
              <tr><td><strong>1336</strong></td><td>Vijayanagara Empire Founded</td><td>Golden era of South Indian Dravidian culture & trade.</td></tr>
              <tr><td><strong>1526</strong></td><td>First Battle of Panipat</td><td>Babur defeats Ibrahim Lodi; Mughal Empire begins.</td></tr>
              <tr><td><strong>1556–1605</strong></td><td>Reign of Akbar the Great</td><td><em>Sulh-i-kul</em> tolerance, <em>Zabt</em> tax system, Rajput alliances.</td></tr>
              <tr><td><strong>1658–1707</strong></td><td>Reign of Aurangzeb</td><td>Peak territorial expansion; <em>Deccan Ulcer</em> & imperial decline.</td></tr>
              <tr><td><strong>1671</strong></td><td>Battle of Saraighat</td><td>Lachit Borphukan's Ahoms defeat Mughal navy in Assam.</td></tr>
              <tr><td><strong>1757</strong></td><td>Battle of Plassey</td><td>EIC political rule begins in Bengal under Clive.</td></tr>
              <tr><td><strong>1764</strong></td><td>Battle of Buxar</td><td>EIC wins <em>Diwani Rights</em> over Bengal, Bihar, and Odisha.</td></tr>
              <tr><td><strong>1799</strong></td><td>Fall of Seringapatam</td><td>Tipu Sultan dies; Mysore captured by British.</td></tr>
              <tr><td><strong>1857</strong></td><td>Revolt of 1857</td><td>Great uprising against EIC; end of Company rule.</td></tr>
              <tr><td><strong>1858</strong></td><td>British Raj Begins</td><td>Direct Crown rule established under Gov of India Act.</td></tr>
              <tr><td><strong>1947</strong></td><td>Independence & Partition</td><td>India & Pakistan created; 565 princely states face accession.</td></tr>
              <tr><td><strong>1947–49</strong></td><td>Princely State Integration</td><td>Patel & Menon integrate Junagadh, Hyderabad, J&K.</td></tr>
              <tr><td><strong>1953</strong></td><td>Andhra State Created</td><td>First linguistic state post-Potti Sriramulu's fast.</td></tr>
              <tr><td><strong>1956</strong></td><td>States Reorganisation Act</td><td>Realigned India into 14 States & 6 Union Territories.</td></tr>
              <tr><td><strong>2014</strong></td><td>Telangana Created</td><td>29th state formed by bifurcating Andhra Pradesh.</td></tr>
            </tbody>
          </table>`
  },
  {
    id: 'ch5-adult-franchise-article326',
    chapterId: 'electoral-system',
    chapterTitle: 'Universal Adult Franchise & Electoral System',
    icon: '🗳️',
    title: '17. Universal Adult Franchise & Article 326 of Indian Constitution',
    difficulty: 'Easy',
    readTime: '7 min',
    preview: 'Understand the revolutionary constitutional principle granting equal voting rights to every adult citizen regardless of gender, caste, religion, wealth, or literacy.',
    contentHtml: `<p>Universal Adult Franchise guarantees that every adult citizen possesses an equal right to vote without discrimination based on caste, religion, gender, wealth, or literacy.</p>

          <div class="callout callout-definition">
            <div class="callout-title">📜 Article 326 of the Constitution</div>
            Elections to the House of the People (Lok Sabha) and Legislative Assemblies of States shall be on the basis of <strong>Universal Adult Suffrage</strong>.
          </div>

          <div class="formula-block">
            61st Constitutional Amendment Act (1988) = Lowered Voting Age from 21 Years to 18 Years
          </div>

          <h3>Pillars of Democratic Equality</h3>
          <ul>
            <li><strong>One Person, One Vote, One Value:</strong> Every vote carries identical mathematical weight in determining election results.</li>
            <li><strong>Inclusivity:</strong> Removes historic property, educational, and gender qualifications enforced during colonial elections.</li>
          </ul>`
  },
  {
    id: 'ch5-election-commission-eci',
    chapterId: 'electoral-system',
    chapterTitle: 'Universal Adult Franchise & Electoral System',
    icon: '🏛️',
    title: '18. Structure & Constitutional Authority of Election Commission (ECI)',
    difficulty: 'Medium',
    readTime: '8 min',
    preview: 'Explore Article 324, the multi-member structure of ECI, powers of Chief Election Commissioner Sukumar Sen to present, and autonomous status.',
    contentHtml: `<p>India is the world's largest vibrant democracy. Free, fair, and periodic elections serve as the bedrock of constitutional democracy, giving citizens the power to elect representatives.</p>

          <div class="callout callout-important">
            <div class="callout-title">⚖️ Constitutional Status of ECI (Article 324)</div>
            Article 324 vests the superintendence, direction, and control of all elections to Parliament, State Legislatures, and the offices of President and Vice-President in the independent <strong>Election Commission of India (ECI)</strong>.
          </div>

          <h3>Structure & Independence</h3>
          <ul>
            <li><strong>Composition:</strong> Consists of one Chief Election Commissioner (CEC) and two Election Commissioners appointed by the President.</li>
            <li><strong>Security of Tenure:</strong> The CEC cannot be removed except through impeachment by Parliament on grounds of proved misbehaviour or incapacity.</li>
          </ul>`
  },
  {
    id: 'ch5-evm-vvpat-evolution',
    chapterId: 'electoral-system',
    chapterTitle: 'Universal Adult Franchise & Electoral System',
    icon: '📟',
    title: '19. Voting Technology: Paper Ballots to EVMs & VVPAT System',
    difficulty: 'Hard',
    readTime: '8 min',
    preview: 'Trace the technological transition from paper ballot boxes to Electronic Voting Machines (EVMs), VVPAT paper audit trails, and NOTA.',
    contentHtml: `<p>Technology and regulatory frameworks preserve election integrity, preventing booth capturing and voter fraud while ensuring absolute transparency.</p>

          <div class="callout callout-definition">
            <div class="callout-title">📱 EVM & VVPAT Innovation</div>
            <br>• <strong>EVM (Electronic Voting Machine):</strong> Standalone, non-networked tamper-proof battery-powered electronic device recording votes digitally.
            <br>• <strong>VVPAT (Voter Verifiable Paper Audit Trail):</strong> Prints a paper slip showing candidate name and party symbol for 7 seconds behind a glass window before dropping into a sealed box for physical audit verification.
          </div>`
  },
  {
    id: 'ch5-election-cycle-process',
    chapterId: 'electoral-system',
    chapterTitle: 'Universal Adult Franchise & Electoral System',
    icon: '🔄',
    title: '20. The Complete Election Lifecycle & Democratic Voting Ethics',
    difficulty: 'Medium',
    readTime: '8 min',
    preview: 'Follow the step-by-step electoral lifecycle from notification, nominations, scrutiny by Returning Officer, campaigning, Model Code of Conduct, polling, to vote counting.',
    contentHtml: `<p>Conducting general elections for over 950 million registered voters involves aChoice-driven, multi-stage administrative process overseen by Returning Officers (RO) and District Election Officers (DEO).</p>

          <h3>The 6 Stages of Election Workflow</h3>
          <ol>
            <li><strong>Notification of Election:</strong> Official Gazette notification issued by President/Governor.</li>
            <li><strong>Filing Nominations:</strong> Candidates submit nomination papers and mandatory financial & criminal background affidavits.</li>
            <li><strong>Scrutiny of Nominations:</strong> RO verifies validity of candidate nomination forms.</li>
            <li><strong>Withdrawal of Candidature:</strong> Official time window for candidates to withdraw.</li>
            <li><strong>Campaigning Phase:</strong> Parties release manifestos and campaign under strict ECI guidelines.</li>
            <li><strong>Polling & Counting:</strong> Citizens cast votes using EVM-VVPATs followed by vote counting and declaration of results.</li>
          </ol>`
  },
  {
    id: 'ch5-voter-registration-epic-portal',
    chapterId: 'electoral-system',
    chapterTitle: 'Universal Adult Franchise & Electoral System',
    icon: '🪪',
    title: '21. Electoral Roll Revision, Voter Registration Forms & EPIC',
    difficulty: 'Medium',
    readTime: '8 min',
    preview: 'Discover how the Electoral Roll is maintained, official ECI registration forms (Form 6, 7, 8), EPIC card features, and National Voters\' Day.',
    contentHtml: `<p>Voter registration is the cornerstone of inclusive democracy. ECI ensures that no voter is left behind through continuous roll updates.</p>

          <h3>Electoral Photo Identity Card (EPIC)</h3>
          <p>Introduced in 1993 under CEC T.N. Seshan, the <strong>EPIC Card</strong> serves as official proof of voter identity, preventing impersonation and bogus voting.</p>

          <div class="callout callout-observation">
            <div class="callout-title">🌐 Digital Voter Services</div>
            The <strong>NVSP (National Voters' Service Portal)</strong> and <strong>Voter Helpline App</strong> allow citizens to register online (Form 6), correct details (Form 8), and track application status seamlessly.
          </div>`
  },
  {
    id: 'ch5-model-code-conduct-cvigil',
    chapterId: 'electoral-system',
    chapterTitle: 'Universal Adult Franchise & Electoral System',
    icon: '⚖️',
    title: '22. Model Code of Conduct (MCC), Ethics & cVIGIL App',
    difficulty: 'Hard',
    readTime: '8 min',
    preview: 'Understand the ethical rules enforced under Model Code of Conduct (MCC), government power restrictions, silence period, and cVIGIL app.',
    contentHtml: `<p>The Model Code of Conduct (MCC) is a set of moral guidelines agreed upon by political parties to maintain decorum and fair competition during elections.</p>

          <h3>Key Provisions of MCC</h3>
          <ul>
            <li><strong>No Misuse of Official Power:</strong> Ruling parties cannot announce new schemes, grants, or use government vehicles for campaigning once elections are declared.</li>
            <li><strong>No Hate Speech:</strong> Speeches appealing to communal or caste feelings are strictly prohibited.</li>
            <li><strong>c-VIGIL App:</strong> Enables citizens to report MCC violations by uploading photo/video proof with automatic GPS location tracking. ECI responds within 100 minutes.</li>
          </ul>`
  },
  {
    id: 'ch5-fptp-vs-proportional-representation',
    chapterId: 'electoral-system',
    chapterTitle: 'Universal Adult Franchise & Electoral System',
    icon: '📊',
    title: '23. Electoral Systems: First-Past-The-Post (FPTP) vs. Proportional Representation',
    difficulty: 'Hard',
    readTime: '9 min',
    preview: 'Compare the First-Past-The-Post (FPTP) plurality voting system used in Lok Sabha with Proportional Representation (PR-STV) used in Rajya Sabha.',
    contentHtml: `<p>Democracies adopt different electoral systems to translate citizen votes into legislative seats. India uses two distinct electoral systems.</p>

          <h3>Comparison: FPTP vs. Proportional Representation</h3>
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>First-Past-The-Post (FPTP)</th>
                <th>Proportional Representation (PR)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Usage in India</strong></td>
                <td>Lok Sabha & State Vidhan Sabha elections.</td>
                <td>Rajya Sabha & Legislative Council elections.</td>
              </tr>
              <tr>
                <td><strong>Winning Criterion</strong></td>
                <td>Candidate who secures the highest number of votes wins (plurality), even without 50%+ votes.</td>
                <td>Party gets seats in exact proportion to total percentage of votes polled nationwide.</td>
              </tr>
              <tr>
                <td><strong>Voter Choice</strong></td>
                <td>Voters vote for a specific candidate.</td>
                <td>Voters vote for a political party list.</td>
              </tr>
            </tbody>
          </table>`
  },
  {
    id: 'ch5-electoral-reforms-women-reservation',
    chapterId: 'electoral-system',
    chapterTitle: 'Universal Adult Franchise & Electoral System',
    icon: '🏛️',
    title: '24. Electoral Reforms, Candidate Affidavits & Women\'s Reservation',
    difficulty: 'Hard',
    readTime: '9 min',
    preview: 'Examine major electoral reforms including CEC T.N. Seshan\'s vision, candidate wealth/criminal affidavits, and Nari Shakti Vandan Adhiniyam 2023.',
    contentHtml: `<p>Continuous electoral reforms strengthen democratic integrity, combat corruption, and foster equal political participation.</p>

          <div class="callout callout-important">
            <div class="callout-title">🏛️ Nari Shakti Vandan Adhiniyam (2023)</div>
            The <strong>106th Constitutional Amendment Act</strong> reserves <strong>33% of seats</strong> for women in the Lok Sabha and State Legislative Assemblies to boost female political representation.
          </div>

          <h3>Key Electoral Reforms</h3>
          <ul>
            <li><strong>Mandatory Affidavits:</strong> Candidates must publicly disclose assets, educational qualifications, and criminal cases.</li>
            <li><strong>Curbing Money Power:</strong> Ceiling on campaign spending and mandatory filing of income tax returns by political parties.</li>
          </ul>`
  },
  {
    id: 'ch7-intro-factors-production',
    chapterId: 'factors-production',
    chapterTitle: 'Factors of Production & Economic Systems',
    icon: '🏭',
    title: '25. What are Factors of Production & The Four Fundamental Pillars',
    difficulty: 'Easy',
    readTime: '7 min',
    preview: 'Learn the four foundational economic inputs required for manufacturing goods and supplying services: Land, Labour, Capital, and Entrepreneurship.',
    contentHtml: `<p>In economics, <strong>Factors of Production</strong> are the fundamental inputs and resources required to produce goods and services to generate wealth.</p>

          <div class="formula-block">
            Production Function = Output = f(Land, Labour, Capital, Entrepreneurship)
          </div>

          <h3>The 4 Essential Factors</h3>
          <ol>
            <li><strong>Land (Natural Capital):</strong> All natural resources provided by nature (soil, water, minerals, forests). Earns <em>Rent</em>.</li>
            <li><strong>Labour (Human Effort):</strong> Physical muscle power and mental cognitive work performed by workers. Earns <em>Wages</em>.</li>
            <li><strong>Capital (Man-Made Assets):</strong> Tools, machinery, factories, and funds used in production. Earns <em>Interest</em>.</li>
            <li><strong>Entrepreneurship (Organization):</strong> The visionary organizer who combines Land, Labour, and Capital while taking commercial risk. Earns <em>Profit</em>.</li>
          </ol>`
  },
  {
    id: 'ch7-land-natural-factor',
    chapterId: 'factors-production',
    chapterTitle: 'Factors of Production & Economic Systems',
    icon: '🌍',
    title: '26. Land – The Primary Gift of Nature & Rent',
    difficulty: 'Medium',
    readTime: '7 min',
    preview: 'Understand the unique economic characteristics of Land as a passive, geographically immobile, fixed natural input that earns Rent.',
    contentHtml: `<p><strong>Land</strong> is the primary natural factor of production encompassing all gift resources provided by nature without human creation cost.</p>

          <h3>4 Characteristics of Land</h3>
          <ul>
            <li><strong>Free Gift of Nature:</strong> No cost of production involved in creating land.</li>
            <li><strong>Fixed & Inelastic Supply:</strong> Total surface area of Earth cannot be expanded by human effort.</li>
            <li><strong>Permanent & Indestructible:</strong> Land possesses original, indestructible fertility and location.</li>
            <li><strong>ImmOBILITY:</strong> Land cannot be physically moved from one location to another.</li>
          </ul>

          <div class="callout callout-definition">
            <div class="callout-title">💰 Economic Reward</div>
            The payment made to landowners for the usage of land in economic activity is called <strong>Rent</strong>.
          </div>`
  },
  {
    id: 'ch7-labour-human-effort',
    chapterId: 'factors-production',
    chapterTitle: 'Factors of Production & Economic Systems',
    icon: '👨‍🏭',
    title: '27. Labour – Physical vs. Mental Effort & Productivity',
    difficulty: 'Medium',
    readTime: '8 min',
    preview: 'Distinguish between Physical (Manual) and Mental (Intellectual) Labour, labor perishability, and factors determining worker productivity.',
    contentHtml: `<p><strong>Labour</strong> encompasses all human physical and cognitive mental effort exerted in economic production for monetary compensation (wages).</p>

          <h3>Physical Labour vs. Mental Labour</h3>
          <table>
            <thead>
              <tr>
                <th>Attribute</th>
                <th>Physical Labour</th>
                <th>Mental / Cognitive Labour</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Primary Input</strong></td>
                <td>Physical muscle power, stamina, manual execution.</td>
                <td>Analytical reasoning, problem-solving, decision-making.</td>
              </tr>
              <tr>
                <td><strong>Examples</strong></td>
                <td>Construction workers, farm harvesters, factory workers.</td>
                <td>Software engineers, doctors, research scientists, accountants.</td>
              </tr>
            </tbody>
          </table>`
  },
  {
    id: 'ch7-human-capital-investment',
    chapterId: 'factors-production',
    chapterTitle: 'Factors of Production & Economic Systems',
    icon: '🎓',
    title: '28. Human Capital – Investing in Education & Health',
    difficulty: 'Medium',
    readTime: '8 min',
    preview: 'Discover how investment in education, Skill India vocational training, and healthcare transforms raw population into highly productive Human Capital.',
    contentHtml: `<p>Raw human labour transforms into high-productivity <strong>Human Capital</strong> through targeted investments in human development.</p>

          <div class="callout callout-important">
            <div class="callout-title">🎓 4 Pillars of Human Capital Investment</div>
            <br>1. <strong>Quality Education:</strong> Developing foundational literacy, critical thinking, and problem-solving skills.
            <br>2. <strong>Technical & Skill Training:</strong> Specialized vocational training (ITIs, Skill India initiatives).
            <br>3. <strong>Healthcare & Nutrition:</strong> Clean drinking water, immunization, and medical facilities reducing sick days and raising productivity.
            <br>4. <strong>Information & Mobility:</strong> Access to job market portals and geographic mobility.
          </div>`
  },
  {
    id: 'ch7-facilitators-kaizen',
    chapterId: 'factors-production',
    chapterTitle: 'Factors of Production & Economic Systems',
    icon: '⚙️',
    title: '29. Facilitators of Human Capital & Japanese Kaizen Philosophy',
    difficulty: 'Hard',
    readTime: '8 min',
    preview: 'Learn how technology, automation, AI, and the Japanese Kaizen philosophy of continuous workplace improvement boost human capital productivity.',
    contentHtml: `<p>Modern production processes rely on management principles and continuous operational efficiency to maximize output quality.</p>

          <div class="callout callout-definition">
            <div class="callout-title">⚙️ What is Kaizen?</div>
            <strong>Kaizen</strong> (改善) is a Japanese business philosophy meaning <em>'continuous improvement'</em> involving all employees to eliminate waste, improve product quality, and streamline workflow.
          </div>

          <h3>Value Addition in Supply Chain</h3>
          <p>Value addition occurs when raw materials are transformed into higher utility products (e.g., Raw Cotton $\rightarrow$ Cotton Thread $\rightarrow$ Woven Fabric $\rightarrow$ Designer Shirt).</p>`
  },
  {
    id: 'ch7-demographic-dividend-india',
    chapterId: 'factors-production',
    chapterTitle: 'Factors of Production & Economic Systems',
    icon: '🇮🇳',
    title: '30. India\'s Demographic Dividend & Youth Potential',
    difficulty: 'Hard',
    readTime: '8 min',
    preview: 'Understand demographic transition, working-age ratio (15-64), and how India\'s median age of ~28 years offers a massive economic growth window.',
    contentHtml: `<p>India is currently experiencing a historic demographic transition that offers an unprecedented economic growth window.</p>

          <div class="callout callout-important">
            <div class="callout-title">📈 Demographic Dividend Defined</div>
            The <strong>Demographic Dividend</strong> occurs when a country's working-age population ($15-59\text{ years}$) is significantly larger than its dependent child ($0-14$) and elderly ($60+$) population.
          </div>

          <h3>Key Demographic Facts for India</h3>
          <ul>
            <li>Over 62% of India's population is in the working-age bracket ($15-59\text{ years}$).</li>
            <li>Average median age in India is 28 years (compared to 38 in China and 48 in Japan).</li>
            <li>Harnessing this dividend requires creating job opportunities, technical skill development, and robust healthcare.</li>
          </ul>`
  },
  {
    id: 'ch7-capital-fixed-working',
    chapterId: 'factors-production',
    chapterTitle: 'Factors of Production & Economic Systems',
    icon: '🚜',
    title: '31. Capital – Physical, Financial, Fixed & Working Capital',
    difficulty: 'Medium',
    readTime: '8 min',
    preview: 'Differentiate between Fixed Capital (durable machinery, factory buildings) and Working Capital (raw materials, daily cash reserves).',
    contentHtml: `<p><strong>Capital</strong> is the man-made factor of production consisting of tools, machinery, buildings, and financial funds used to produce future goods and services.</p>

          <h3>Fixed Capital vs. Working Capital</h3>
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Fixed Capital</th>
                <th>Working Capital</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Definition</strong></td>
                <td>Durable man-made assets used repeatedly over many production cycles spanning years.</td>
                <td>Raw materials, semi-finished goods, and cash on hand consumed in a single production cycle.</td>
              </tr>
              <tr>
                <td><strong>Examples</strong></td>
                <td>Factory buildings, heavy machinery, tractors, computers.</td>
                <td>Cotton yarn for textiles, seeds/fertilizers, cash for daily wages.</td>
              </tr>
            </tbody>
          </table>`
  },
  {
    id: 'ch7-entrepreneurship-startups',
    chapterId: 'factors-production',
    chapterTitle: 'Factors of Production & Economic Systems',
    icon: '🚀',
    title: '32. Entrepreneurship – Innovation, Risk-Taking & Global Supply Chains',
    difficulty: 'Hard',
    readTime: '9 min',
    preview: 'Examine the organizing role of the Entrepreneur, Schumpeterian innovation, risk-taking, startups, and supply chain logistics management.',
    contentHtml: `<p>The <strong>Entrepreneur</strong> is the organizer and risk-taker who combines Land, Labour, and Capital to establish and run an economic enterprise.</p>

          <div class="callout callout-definition">
            <div class="callout-title">💡 Joseph Schumpeter's Innovation Model</div>
            Economist Joseph Schumpeter defined the entrepreneur as an <strong>innovator</strong> who introduces new products, novel production technology, opens new markets, or reorganizes industry supply chains.
          </div>

          <h3>4 Functions of an Entrepreneur</h3>
          <ol>
            <li><strong>Initiation & Planning:</strong> Conceptualizing business ideas and securing initial investments.</li>
            <li><strong>Risk-Bearing:</strong> Bearing financial loss risk if market demand shifts.</li>
            <li><strong>Resource Coordination:</strong> Assembling Land, Labour, and Capital.</li>
            <li><strong>Innovation & Adaptation:</strong> Implementing cutting-edge technology and customer solutions.</li>
          </ol>`
  }

];

const FLASHCARDS = [
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
    "topic": "Political Map",
    "q": "How many Princely States existed in India prior to August 1947?",
    "a": "Over 565 Princely States."
  },
  {
    "topic": "Political Map",
    "q": "Who was known as the 'Iron Man of India' for unifying princely states?",
    "a": "Sardar Vallabhbhai Patel."
  },
  {
    "topic": "Political Map",
    "q": "Who served as Secretary of the Ministry of States assisting Sardar Patel?",
    "a": "V.P. Menon."
  },
  {
    "topic": "Political Map",
    "q": "What legal document was signed by princely rulers to accede to India?",
    "a": "The Instrument of Accession (IoA)."
  },
  {
    "topic": "Political Map",
    "q": "Which three subjects were ceded under the Instrument of Accession initially?",
    "a": "Defence, External Affairs, and Communications."
  },
  {
    "topic": "Political Map",
    "q": "Who signed the Instrument of Accession for Jammu & Kashmir on Oct 26, 1947?",
    "a": "Maharaja Hari Singh."
  },
  {
    "topic": "Political Map",
    "q": "What event forced Maharaja Hari Singh to seek immediate Indian military aid in Oct 1947?",
    "a": "An invasion by armed tribal raiders backed by the Pakistani army."
  },
  {
    "topic": "Political Map",
    "q": "What was the provisional government formed by Junagadh citizens called?",
    "a": "Arzi Hukumat."
  },
  {
    "topic": "Political Map",
    "q": "How was the accession of Junagadh resolved in February 1948?",
    "a": "Through a democratic plebiscite (referendum) where over 99% voted for union with India."
  },
  {
    "topic": "Political Map",
    "q": "Who was the ruler of Hyderabad state in 1947-48?",
    "a": "Nizam Mir Osman Ali Khan."
  },
  {
    "topic": "Political Map",
    "q": "What was the private radical militia operating in Hyderabad called?",
    "a": "The Razakars led by Kasim Razvi."
  },
  {
    "topic": "Political Map",
    "q": "What was the code name of the Indian military police action in Hyderabad in Sept 1948?",
    "a": "Operation Polo."
  },
  {
    "topic": "Political Map",
    "q": "Who fasted unto death for 56 days in 1952 demanding a separate Andhra State?",
    "a": "Potti Sreeramulu."
  },
  {
    "topic": "Political Map",
    "q": "When was Andhra State officially created as India's first linguistic state?",
    "a": "October 1, 1953 for Telugu-speaking people."
  },
  {
    "topic": "Political Map",
    "q": "Who chaired the 1953 States Reorganisation Commission (SRC)?",
    "a": "Justice Fazl Ali."
  },
  {
    "topic": "Political Map",
    "q": "Who were the three members of the 1953 SRC?",
    "a": "Justice Fazl Ali, H.N. Kunzru, and K.M. Panikkar."
  },
  {
    "topic": "Political Map",
    "q": "How many States and UTs were created by the States Reorganisation Act 1956?",
    "a": "14 States and 6 Union Territories."
  },
  {
    "topic": "Political Map",
    "q": "When was Bombay State split into Gujarat and Maharashtra?",
    "a": "May 1, 1960."
  },
  {
    "topic": "Political Map",
    "q": "What military operation liberated Goa, Daman, and Diu from Portuguese rule in Dec 1961?",
    "a": "Operation Vijay."
  },
  {
    "topic": "Political Map",
    "q": "In which year was Nagaland created as India's 16th State?",
    "a": "1963."
  },
  {
    "topic": "Political Map",
    "q": "Which commission recommended bifurcating Punjab into Punjab and Haryana in 1966?",
    "a": "The Shah Commission."
  },
  {
    "topic": "Political Map",
    "q": "Which Constitutional Amendment abolished Privy Purse pensions in 1971?",
    "a": "The 26th Constitutional Amendment Act, 1971."
  },
  {
    "topic": "Political Map",
    "q": "Which state became the 22nd state of India via 36th Amendment in 1975?",
    "a": "Sikkim."
  },
  {
    "topic": "Political Map",
    "q": "Which three states were created in November 2000?",
    "a": "Chhattisgarh (from MP), Uttarakhand (from UP), and Jharkhand (from Bihar)."
  },
  {
    "topic": "Political Map",
    "q": "When was Telangana officially formed as India's 29th State?",
    "a": "June 2, 2014 from Andhra Pradesh."
  },
  {
    "topic": "Political Map",
    "q": "What legislative act lapsed British Paramountcy over princely states?",
    "a": "The Indian Independence Act 1947 (Section 7)."
  },
  {
    "topic": "Political Map",
    "q": "Which Article of the Constitution states India is a 'Union of States'?",
    "a": "Article 1."
  },
  {
    "topic": "Political Map",
    "q": "Which Article empowers Parliament to create new states or alter boundaries?",
    "a": "Article 3."
  },
  {
    "topic": "Political Map",
    "q": "What was the tax-free financial allowance granted to former princely rulers?",
    "a": "The Privy Purse."
  },
  {
    "topic": "Political Map",
    "q": "Which princely state in Kerala acceded smoothly to India in 1947?",
    "a": "Travancore and Cochin."
  },
  {
    "topic": "Political Map",
    "q": "Who was Prime Minister when the States Reorganisation Act 1956 was enacted?",
    "a": "Jawaharlal Nehru."
  },
  {
    "topic": "Political Map",
    "q": "What committee comprised Nehru, Patel, and Sitaramayya in 1948?",
    "a": "The JVP Committee."
  },
  {
    "topic": "Political Map",
    "q": "Which commission led by S.K. Dhar in 1948 evaluated linguistic state demands?",
    "a": "The Dhar Commission (Linguistic Provinces Commission)."
  },
  {
    "topic": "Political Map",
    "q": "What city serves as joint capital of Punjab and Haryana?",
    "a": "Chandigarh."
  },
  {
    "topic": "Political Map",
    "q": "What historical event occurred on October 31, 2019 regarding J&K?",
    "a": "J&K was reorganized into two Union Territories: UT of J&K and UT of Ladakh."
  },
  {
    "topic": "Political Map",
    "q": "Which two UTs were merged into a single UT on January 26, 2020?",
    "a": "Dadra & Nagar Haveli and Daman & Diu."
  },
  {
    "topic": "Political Map",
    "q": "Which princely state ruler in Kathiawar fled to Karachi after citizens revolted?",
    "a": "Nawab Mahabat Khan of Junagadh."
  },
  {
    "topic": "Political Map",
    "q": "What was the outcome of Operation Polo in September 1948?",
    "a": "The peaceful merger of Hyderabad into the democratic Indian Union."
  },
  {
    "topic": "Political Map",
    "q": "Which state was formed out of Assam in 1972 alongside Meghalaya and Tripura?",
    "a": "Manipur."
  },
  {
    "topic": "Political Map",
    "q": "Which Constitutional Amendment reserved 33% seats for women in Lok Sabha and Assemblies?",
    "a": "The 106th Constitutional Amendment Act 2023 (Nari Shakti Vandan Adhiniyam)."
  },
  {
    "topic": "Political Map",
    "q": "What island territory in the Arabian Sea is a Union Territory of India?",
    "a": "Lakshadweep."
  },
  {
    "topic": "Political Map",
    "q": "What island territory in the Bay of Bengal is a Union Territory of India?",
    "a": "Andaman and Nicobar Islands."
  },
  {
    "topic": "Political Map",
    "q": "Who was the last Viceroy of British India who announced the Partition Plan in June 1947?",
    "a": "Lord Mountbatten."
  },
  {
    "topic": "Political Map",
    "q": "Which agreement signed in 1972 established the Line of Control (LoC) in J&K?",
    "a": "The Shimla Agreement."
  },
  {
    "topic": "Political Map",
    "q": "Which state was granted full statehood in 1987 alongside Mizoram and Arunachal Pradesh?",
    "a": "Goa (25th State)."
  },
  {
    "topic": "Political Map",
    "q": "What is the capital city of the Union Territory of Ladakh?",
    "a": "Leh."
  },
  {
    "topic": "Political Map",
    "q": "What is the summer capital city of UT of Jammu & Kashmir?",
    "a": "Srinagar."
  },
  {
    "topic": "Political Map",
    "q": "What is the winter capital city of UT of Jammu & Kashmir?",
    "a": "Jammu."
  },
  {
    "topic": "Political Map",
    "q": "Which statutory body determines constituency boundaries based on population census?",
    "a": "The Delimitation Commission (Article 82)."
  },
  {
    "topic": "Political Map",
    "q": "Which state was created from Madhya Pradesh on November 1, 2000?",
    "a": "Chhattisgarh."
  },
  {
    "topic": "Political Map",
    "q": "Which state was created from Uttar Pradesh on November 9, 2000?",
    "a": "Uttarakhand."
  },
  {
    "topic": "Political Map",
    "q": "Which state was created from Bihar on November 15, 2000?",
    "a": "Jharkhand."
  },
  {
    "topic": "Political Map",
    "q": "What state was created for Marathi speakers in 1960?",
    "a": "Maharashtra."
  },
  {
    "topic": "Political Map",
    "q": "What state was created for Gujarati speakers in 1960?",
    "a": "Gujarat."
  },
  {
    "topic": "Political Map",
    "q": "Which former French enclave on the east coast is part of Puducherry UT?",
    "a": "Karaikal / Puducherry."
  },
  {
    "topic": "Political Map",
    "q": "Which former French enclave in Kerala is part of Puducherry UT?",
    "a": "Mahe."
  },
  {
    "topic": "Political Map",
    "q": "Which former French enclave in Andhra Pradesh is part of Puducherry UT?",
    "a": "Yanam."
  },
  {
    "topic": "Political Map",
    "q": "Who was the leading woman freedom fighter who served as Governor of UP in 1947?",
    "a": "Sarojini Naidu."
  },
  {
    "topic": "Political Map",
    "q": "What was the political status of Sikkim before 1975?",
    "a": "An Indian Protectorate ruled by the Chogyal monarch."
  },
  {
    "topic": "Political Map",
    "q": "Which boundary line demarcates India and China in the northeast?",
    "a": "The McMahon Line."
  },
  {
    "topic": "Political Map",
    "q": "Which boundary line divided India and Pakistan in 1947?",
    "a": "The Radcliffe Line."
  },
  {
    "topic": "Political Map",
    "q": "Why did Sardar Patel insist on integrating Princely States into India?",
    "a": "To prevent balkanization and build a unified, contiguous democratic nation."
  },
  {
    "topic": "Political Map",
    "q": "Which princely state in Rajasthan had its ruler initially consider joining Pakistan?",
    "a": "Jodhpur (Maharaja Hanwant Singh)."
  },
  {
    "topic": "Political Map",
    "q": "Which princely state in central India delayed accession until August 1947?",
    "a": "Bhopal (Nawab Hamidullah Khan)."
  },
  {
    "topic": "Political Map",
    "q": "Which linguistic group demanded a separate state leading to Mysore State in 1956?",
    "a": "Kannada speakers."
  },
  {
    "topic": "Political Map",
    "q": "Which linguistic group demanded a separate state leading to Kerala State in 1956?",
    "a": "Malayalam speakers."
  },
  {
    "topic": "Political Map",
    "q": "Which linguistic group demanded a separate state leading to Madras State in 1956?",
    "a": "Tamil speakers."
  },
  {
    "topic": "Political Map",
    "q": "What year was Madras State renamed Tamil Nadu?",
    "a": "1969."
  },
  {
    "topic": "Political Map",
    "q": "What year was Mysore State renamed Karnataka?",
    "a": "1973."
  },
  {
    "topic": "Political Map",
    "q": "What year was Laccadive, Minicoy, and Amindivi Islands renamed Lakshadweep?",
    "a": "1973."
  },
  {
    "topic": "Political Map",
    "q": "What state was created out of Assam in 1987 as 24th State?",
    "a": "Mizoram."
  },
  {
    "topic": "Political Map",
    "q": "What state was created out of NEFA in 1987 as 23rd State?",
    "a": "Arunachal Pradesh."
  },
  {
    "topic": "Political Map",
    "q": "What is the capital city of Arunachal Pradesh?",
    "a": "Itanagar."
  },
  {
    "topic": "Political Map",
    "q": "What is the capital city of Nagaland?",
    "a": "Kohima."
  },
  {
    "topic": "Political Map",
    "q": "What is the capital city of Mizoram?",
    "a": "Aizawl."
  },
  {
    "topic": "Political Map",
    "q": "What is the capital city of Manipur?",
    "a": "Imphal."
  },
  {
    "topic": "Political Map",
    "q": "What is the capital city of Meghalaya?",
    "a": "Shillong."
  },
  {
    "topic": "Political Map",
    "q": "What is the capital city of Tripura?",
    "a": "Agartala."
  },
  {
    "topic": "Political Map",
    "q": "What is the capital city of Sikkim?",
    "a": "Gangtok."
  },
  {
    "topic": "Political Map",
    "q": "What is the capital city of Chhattisgarh?",
    "a": "Raipur."
  },
  {
    "topic": "Political Map",
    "q": "What is the winter capital city of Uttarakhand?",
    "a": "Dehradun."
  },
  {
    "topic": "Political Map",
    "q": "What is the capital city of Jharkhand?",
    "a": "Ranchi."
  },
  {
    "topic": "Political Map",
    "q": "What is the capital city of Telangana?",
    "a": "Hyderabad."
  },
  {
    "topic": "Political Map",
    "q": "What is the designated capital of Andhra Pradesh?",
    "a": "Amaravati."
  },
  {
    "topic": "Political Map",
    "q": "Which river water dispute involves Karnataka, Tamil Nadu, Kerala, and Puducherry?",
    "a": "The Kaveri (Cauvery) River Water Dispute."
  },
  {
    "topic": "Political Map",
    "q": "Which river water dispute involves Maharashtra, Karnataka, and AP/Telangana?",
    "a": "The Krishna River Water Dispute."
  },
  {
    "topic": "Political Map",
    "q": "What region in J&K was reorganized into a UT without a legislature in 2019?",
    "a": "Ladakh."
  },
  {
    "topic": "Political Map",
    "q": "Does the Union Territory of Jammu & Kashmir have provision for an assembly?",
    "a": "Yes, UT of J&K has provision for an elected Legislative Assembly."
  },
  {
    "topic": "Political Map",
    "q": "Which Union Territory serves as the national capital of India?",
    "a": "National Capital Territory (NCT) of Delhi."
  },
  {
    "topic": "Political Map",
    "q": "Which court resolves territorial boundary disputes between Indian states?",
    "a": "The Supreme Court of India under Original Jurisdiction (Article 131)."
  },
  {
    "topic": "Political Map",
    "q": "Which Article allows President's Rule to be imposed in a state?",
    "a": "Article 356."
  },
  {
    "topic": "Political Map",
    "q": "What was the former name of Odisha prior to 2011?",
    "a": "Orissa."
  },
  {
    "topic": "Political Map",
    "q": "What was the former name of Uttarakhand before 2007?",
    "a": "Uttaranchal."
  },
  {
    "topic": "Political Map",
    "q": "Which region was integrated after a treaty with France in 1954/1962?",
    "a": "Puducherry."
  },
  {
    "topic": "Political Map",
    "q": "Who was the first Indian Governor-General of independent India in 1948?",
    "a": "C. Rajagopalachari."
  },
  {
    "topic": "Political Map",
    "q": "What amendment implemented the 1956 States Reorganisation Act?",
    "a": "The 7th Constitutional Amendment Act 1956."
  },
  {
    "topic": "Political Map",
    "q": "Which state in Northeast India was created in 1963 following the Naga movement?",
    "a": "Nagaland."
  },
  {
    "topic": "Political Map",
    "q": "Which state was carved out of Assam in 1972 for hill tribes?",
    "a": "Meghalaya."
  },
  {
    "topic": "Political Map",
    "q": "Which princely state was ruled by Maharaja Bodhchandra Singh, acceding in 1949?",
    "a": "Manipur."
  },
  {
    "topic": "Political Map",
    "q": "Which princely state was ruled by Maharani Kanchan Prabha Devi acceding in 1949?",
    "a": "Tripura."
  },
  {
    "topic": "Political Map",
    "q": "Which princely state merged with West Bengal in 1950?",
    "a": "Cooch Behar."
  },
  {
    "topic": "Political Map",
    "q": "Which princely state merged with Odisha in 1949?",
    "a": "Mayurbhanj."
  },
  {
    "topic": "Political Map",
    "q": "Which major princely state in Gujarat ruled by Maharaja Gaekwad joined India?",
    "a": "Baroda (Vadodara)."
  },
  {
    "topic": "Political Map",
    "q": "What was PEPSU in post-1947 political geography?",
    "a": "Patiala and East Punjab States Union."
  },
  {
    "topic": "Political Map",
    "q": "In which year was PEPSU merged into Punjab State?",
    "a": "1956."
  },
  {
    "topic": "Political Map",
    "q": "Who has exclusive authority to create new states or alter state boundaries under Article 3?",
    "a": "The Parliament of India."
  },
  {
    "topic": "Political Map",
    "q": "Is state assembly consent legally binding on Parliament when altering state boundaries under Article 3?",
    "a": "No, Parliament can proceed even if the state assembly disagrees."
  },
  {
    "topic": "Political Map",
    "q": "Which Union Territory has a Legislative Assembly besides Delhi and J&K?",
    "a": "Puducherry."
  },
  {
    "topic": "Political Map",
    "q": "Who appoints the Lieutenant Governor of a Union Territory in India?",
    "a": "The President of India."
  },
  {
    "topic": "Political Map",
    "q": "What is the maximum strength of Lok Sabha allowed by the Constitution?",
    "a": "550 members."
  },
  {
    "topic": "Political Map",
    "q": "What is the maximum strength of Rajya Sabha allowed by the Constitution?",
    "a": "250 members."
  },
  {
    "topic": "Political Map",
    "q": "How many members are nominated to Rajya Sabha by the President?",
    "a": "12 members for contributions to art, literature, science, and social service."
  },
  {
    "topic": "Political Map",
    "q": "Which Schedule of the Constitution lists States and Union Territories?",
    "a": "The First Schedule."
  },
  {
    "topic": "Political Map",
    "q": "Which Schedule lists official recognized languages (22 languages)?",
    "a": "The Eighth Schedule."
  },
  {
    "topic": "Political Map",
    "q": "What was British Paramountcy?",
    "a": "The supreme sovereign authority exercised by the British Crown over Indian Princely States prior to 1947."
  },
  {
    "topic": "Political Map",
    "q": "What was the main outcome of the 1948 Junagadh Plebiscite?",
    "a": "Over 99% voted for accession to India."
  },
  {
    "topic": "Political Map",
    "q": "What was the primary subject of the 26th Amendment Act in 1971?",
    "a": "Abolishing the Privy Purse allowances of former princely state rulers."
  },
  {
    "topic": "Political Map",
    "q": "What is the capital city of Himachal Pradesh?",
    "a": "Shimla (Summer) / Dharamshala (Winter)."
  },
  {
    "topic": "Political Map",
    "q": "What state was created out of Punjab in 1966 for Hindi speakers?",
    "a": "Haryana."
  },
  {
    "topic": "Political Map",
    "q": "What Union Territory was created as the joint capital of Punjab and Haryana in 1966?",
    "a": "Chandigarh."
  },
  {
    "topic": "Political Map",
    "q": "What state was granted full statehood in 1971 as India's 18th State?",
    "a": "Himachal Pradesh."
  },
  {
    "topic": "Political Map",
    "q": "What state was created in 1975 after a popular referendum abolished monarchy?",
    "a": "Sikkim."
  },
  {
    "topic": "Political Map",
    "q": "What is Article 2 of the Constitution?",
    "a": "Empowering Parliament to admit new states into the Union or establish new states."
  },
  {
    "topic": "Political Map",
    "q": "What is the capital city of Gujarat?",
    "a": "Gandhinagar."
  },
  {
    "topic": "Political Map",
    "q": "What is the capital city of Maharashtra?",
    "a": "Mumbai."
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
  },
  {
    "topic": "Political Map",
    "q": "Which battle in 1671 saw Ahom general Lachit Borphukan defeat the Mughal navy?",
    "a": "Battle of Saraighat."
  },
  {
    "topic": "Political Map",
    "q": "What key religious tax was abolished by Akbar but re-imposed by Aurangzeb in 1679?",
    "a": "Jizya (tax on non-Muslims)."
  },
  {
    "topic": "Political Map",
    "q": "What land revenue system was established under Akbar by Raja Todar Mal?",
    "a": "Zabt System."
  },
  {
    "topic": "Political Map",
    "q": "Which 1757 battle established British East India Company political control in Bengal?",
    "a": "Battle of Plassey (Robert Clive defeated Siraj-ud-Daulah)."
  },
  {
    "topic": "Political Map",
    "q": "Which 1764 battle granted the EIC Diwani (tax collection) rights over Bengal, Bihar, and Odisha?",
    "a": "Battle of Buxar."
  },
  {
    "topic": "Political Map",
    "q": "Which annexation policy introduced by Lord Dalhousie annexed Jhansi and Satara?",
    "a": "Doctrine of Lapse."
  },
  {
    "topic": "Political Map",
    "q": "Which annexation alliance policy introduced by Lord Wellesley forced Hyderabad and Mysore to accept British troops?",
    "a": "Subsidiary Alliance."
  },
  {
    "topic": "Political Map",
    "q": "Who undertook a 56-day hunger strike leading to the creation of Andhra State in 1953?",
    "a": "Potti Sriramulu."
  },
  {
    "topic": "Political Map",
    "q": "What police action code name was used to integrate Hyderabad into India in September 1948?",
    "a": "Operation Polo."
  },
  {
    "topic": "Political Map",
    "q": "How was the accession of Junagadh decisively settled in February 1948?",
    "a": "Through a democratic plebiscite (99.95% voted for India)."
  }
];

const MCQS = [
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
    "topic": "Political Map",
    "q": "How many Princely States existed in India prior to Independence in August 1947?",
    "opts": [
      "565+",
      "100",
      "25",
      "1000"
    ],
    "ans": 0,
    "exp": "There were over 565 Princely States in British India prior to 1947."
  },
  {
    "topic": "Political Map",
    "q": "Who was known as the 'Iron Man of India' for integrating princely states?",
    "opts": [
      "Sardar Vallabhbhai Patel",
      "Jawaharlal Nehru",
      "Mahatma Gandhi",
      "B.R. Ambedkar"
    ],
    "ans": 0,
    "exp": "Sardar Vallabhbhai Patel led the political integration of princely states."
  },
  {
    "topic": "Political Map",
    "q": "Who served as Secretary of the Ministry of States working alongside Sardar Patel?",
    "opts": [
      "V.P. Menon",
      "Sukumar Sen",
      "Fazl Ali",
      "Potti Sreeramulu"
    ],
    "ans": 0,
    "exp": "V.P. Menon served as Secretary of the Ministry of States assisting Patel."
  },
  {
    "topic": "Political Map",
    "q": "What legal document was signed by princely state rulers to accede to India?",
    "opts": [
      "Instrument of Accession",
      "Treaty of Versailles",
      "Purna Swaraj Declaration",
      "Simla Pact"
    ],
    "ans": 0,
    "exp": "The Instrument of Accession (IoA) acceded princely states to India."
  },
  {
    "topic": "Political Map",
    "q": "Which three initial subjects were ceded to the Indian Union under the Instrument of Accession?",
    "opts": [
      "Defence, External Affairs, Communications",
      "Taxation, Police, Agriculture",
      "Education, Health, Railways",
      "Forests, Mining, Trade"
    ],
    "ans": 0,
    "exp": "Initial accession covered Defence, External Affairs, and Communications."
  },
  {
    "topic": "Political Map",
    "q": "Who signed the Instrument of Accession for Jammu & Kashmir on October 26, 1947?",
    "opts": [
      "Maharaja Hari Singh",
      "Nawab Mahabat Khan",
      "Nizam Mir Osman Ali Khan",
      "Sheikh Abdullah"
    ],
    "ans": 0,
    "exp": "Maharaja Hari Singh signed the Instrument of Accession for Jammu & Kashmir."
  },
  {
    "topic": "Political Map",
    "q": "What event triggered Jammu & Kashmir's urgent accession to India in October 1947?",
    "opts": [
      "Invasion by armed tribal raiders backed by Pakistan",
      "Chinese border dispute",
      "Goa liberation movement",
      "Potti Sreeramulu fast"
    ],
    "ans": 0,
    "exp": "An invasion by armed tribal raiders backed by Pakistan forced Maharaja Hari Singh to seek Indian military aid."
  },
  {
    "topic": "Political Map",
    "q": "What was the provisional government formed by citizens of Junagadh called?",
    "opts": [
      "Arzi Hukumat",
      "Azad Hind Government",
      "Swadeshi Sabha",
      "Lok Samiti"
    ],
    "ans": 0,
    "exp": "Junagadh citizens formed the Arzi Hukumat (Provisional Government)."
  },
  {
    "topic": "Political Map",
    "q": "How was the final accession of Junagadh resolved in February 1948?",
    "opts": [
      "A democratic plebiscite (referendum)",
      "Operation Polo military siege",
      "UN Arbitration",
      "British Royal Decree"
    ],
    "ans": 0,
    "exp": "Over 99% of Junagadh citizens voted for union with India in a February 1948 plebiscite."
  },
  {
    "topic": "Political Map",
    "q": "Who was the ruler of Hyderabad state in 1947-48?",
    "opts": [
      "Nizam Mir Osman Ali Khan",
      "Maharaja Hari Singh",
      "Nawab Mahabat Khan",
      "Raja Jiwajirao Scindia"
    ],
    "ans": 0,
    "exp": "Nizam Mir Osman Ali Khan was the ruler of Hyderabad."
  },
  {
    "topic": "Political Map",
    "q": "What was the name of the private radical militia operating in Hyderabad under Kasim Razvi?",
    "opts": [
      "Razakars",
      "Arzi Militia",
      "Sepoys",
      "Red Shirts"
    ],
    "ans": 0,
    "exp": "The Razakars were the private paramilitary militia suppressing pro-India citizens in Hyderabad."
  },
  {
    "topic": "Political Map",
    "q": "What was the code name of the Indian military police action in Hyderabad in September 1948?",
    "opts": [
      "Operation Polo",
      "Operation Vijay",
      "Operation Meghdoot",
      "Operation Blue Star"
    ],
    "ans": 0,
    "exp": "Operation Polo integrated Hyderabad into the Indian Union in September 1948."
  },
  {
    "topic": "Political Map",
    "q": "Who fasted unto death for 56 days in 1952 demanding a separate Andhra State?",
    "opts": [
      "Potti Sreeramulu",
      "Tanguturi Prakasam",
      "K. Kamaraj",
      "C. Rajagopalachari"
    ],
    "ans": 0,
    "exp": "Potti Sreeramulu sacrificed his life after 56 days of fasting for Andhra State."
  },
  {
    "topic": "Political Map",
    "q": "When was Andhra State officially created as India's first linguistic state?",
    "opts": [
      "October 1, 1953",
      "August 15, 1947",
      "January 26, 1950",
      "November 1, 1956"
    ],
    "ans": 0,
    "exp": "Andhra State was created on October 1, 1953 for Telugu-speaking people."
  },
  {
    "topic": "Political Map",
    "q": "Who chaired the 1953 States Reorganisation Commission (SRC)?",
    "opts": [
      "Justice Fazl Ali",
      "H.N. Kunzru",
      "K.M. Panikkar",
      "S.K. Dhar"
    ],
    "ans": 0,
    "exp": "Justice Fazl Ali chaired the landmark 1953 States Reorganisation Commission."
  },
  {
    "topic": "Political Map",
    "q": "Who were the three members of the 1953 States Reorganisation Commission?",
    "opts": [
      "Fazl Ali, H.N. Kunzru, K.M. Panikkar",
      "Patel, Nehru, Sitaramayya",
      "Ambedkar, Prasad, Radhakrishnan",
      "Dhar, Shah, Radcliffe"
    ],
    "ans": 0,
    "exp": "The SRC comprised Justice Fazl Ali, H.N. Kunzru, and K.M. Panikkar."
  },
  {
    "topic": "Political Map",
    "q": "How many States and Union Territories were created by the States Reorganisation Act 1956?",
    "opts": [
      "14 States and 6 Union Territories",
      "28 States and 8 UTs",
      "20 States and 5 UTs",
      "10 States and 10 UTs"
    ],
    "ans": 0,
    "exp": "The 1956 Act redrew India into 14 States and 6 Union Territories."
  },
  {
    "topic": "Political Map",
    "q": "When was Bombay State split into Gujarat and Maharashtra?",
    "opts": [
      "May 1, 1960",
      "October 1, 1953",
      "November 1, 1956",
      "December 19, 1961"
    ],
    "ans": 0,
    "exp": "Bombay State was divided into Gujarat and Maharashtra on May 1, 1960."
  },
  {
    "topic": "Political Map",
    "q": "What military operation liberated Goa, Daman, and Diu from Portuguese rule in December 1961?",
    "opts": [
      "Operation Vijay",
      "Operation Polo",
      "Operation Blue Star",
      "Operation Trident"
    ],
    "ans": 0,
    "exp": "Operation Vijay liberated Goa from 450 years of Portuguese rule in Dec 1961."
  },
  {
    "topic": "Political Map",
    "q": "In which year was Nagaland created as India's 16th State?",
    "opts": [
      "1963",
      "1956",
      "1972",
      "1987"
    ],
    "ans": 0,
    "exp": "Nagaland was inaugurated as the 16th state of India in 1963."
  },
  {
    "topic": "Political Map",
    "q": "Which commission recommended the reorganization of Punjab into Punjab and Haryana in 1966?",
    "opts": [
      "Shah Commission",
      "Fazl Ali Commission",
      "Dhar Commission",
      "JVP Committee"
    ],
    "ans": 0,
    "exp": "The Shah Commission recommended bifurcating Punjab into Punjab and Haryana in 1966."
  },
  {
    "topic": "Political Map",
    "q": "Which Constitutional Amendment abolished the Privy Purse pensions for former princely rulers in 1971?",
    "opts": [
      "26th Constitutional Amendment Act",
      "42nd Amendment",
      "61st Amendment",
      "73rd Amendment"
    ],
    "ans": 0,
    "exp": "The 26th Amendment Act of 1971 abolished Privy Purse privileges."
  },
  {
    "topic": "Political Map",
    "q": "Which state became the 22nd state of India via the 36th Constitutional Amendment in 1975?",
    "opts": [
      "Sikkim",
      "Goa",
      "Mizoram",
      "Meghalaya"
    ],
    "ans": 0,
    "exp": "Sikkim joined the Indian Union as the 22nd state in 1975."
  },
  {
    "topic": "Political Map",
    "q": "Which three new states were carved out in November 2000?",
    "opts": [
      "Chhattisgarh, Uttarakhand, Jharkhand",
      "Telangana, Andhra, Goa",
      "Gujarat, Haryana, Punjab",
      "Manipur, Meghalaya, Tripura"
    ],
    "ans": 0,
    "exp": "Chhattisgarh (from MP), Uttarakhand (from UP), and Jharkhand (from Bihar) were formed in Nov 2000."
  },
  {
    "topic": "Political Map",
    "q": "When was Telangana officially formed as India's 29th State?",
    "opts": [
      "June 2, 2014",
      "October 31, 2019",
      "November 1, 2000",
      "January 26, 2020"
    ],
    "ans": 0,
    "exp": "Telangana was carved out of Andhra Pradesh on June 2, 2014."
  },
  {
    "topic": "Political Map",
    "q": "What legislative act lapsed British Paramountcy over princely states?",
    "opts": [
      "Indian Independence Act 1947",
      "Government of India Act 1935",
      "Regulating Act 1773",
      "Cabinet Mission Plan"
    ],
    "ans": 0,
    "exp": "Political map detail: Indian Independence Act 1947 is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Which Article of the Indian Constitution states that India is a 'Union of States'?",
    "opts": [
      "Article 1",
      "Article 370",
      "Article 356",
      "Article 324"
    ],
    "ans": 0,
    "exp": "Political map detail: Article 1 is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Which Article empowers Parliament to create new states or alter state boundaries?",
    "opts": [
      "Article 3",
      "Article 14",
      "Article 21",
      "Article 368"
    ],
    "ans": 0,
    "exp": "Political map detail: Article 3 is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "What was the financial allowance granted to princely rulers called?",
    "opts": [
      "Privy Purse",
      "Royal Dividend",
      "Crown Pension",
      "Imperial Honorarium"
    ],
    "ans": 0,
    "exp": "Political map detail: Privy Purse is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Which princely state in Kerala acceded smoothly to India in 1947?",
    "opts": [
      "Travancore and Cochin",
      "Hyderabad",
      "Junagadh",
      "Bhopal"
    ],
    "ans": 0,
    "exp": "Political map detail: Travancore and Cochin is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Who was Prime Minister of India when the States Reorganisation Act 1956 was enacted?",
    "opts": [
      "Jawaharlal Nehru",
      "Lal Bahadur Shastri",
      "Indira Gandhi",
      "Morarji Desai"
    ],
    "ans": 0,
    "exp": "Political map detail: Jawaharlal Nehru is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "What committee comprised Jawaharlal Nehru, Vallabhbhai Patel, and Pattabhi Sitaramayya in 1948?",
    "opts": [
      "JVP Committee",
      "SRC Commission",
      "Dhar Committee",
      "Shah Commission"
    ],
    "ans": 0,
    "exp": "Political map detail: JVP Committee is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Which commission led by S.K. Dhar in 1948 evaluated linguistic state demands?",
    "opts": [
      "Dhar Commission",
      "Fazl Ali Commission",
      "Mandal Commission",
      "Sarkaria Commission"
    ],
    "ans": 0,
    "exp": "Political map detail: Dhar Commission is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "What city serves as the joint capital of both Punjab and Haryana?",
    "opts": [
      "Chandigarh",
      "Amritsar",
      "Gurugram",
      "Shimla"
    ],
    "ans": 0,
    "exp": "Political map detail: Chandigarh is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "What historical change occurred on October 31, 2019 regarding Jammu & Kashmir?",
    "opts": [
      "Reorganized into UT of J&K and UT of Ladakh",
      "Merged into Punjab",
      "Made a princely state",
      "Separated from India"
    ],
    "ans": 0,
    "exp": "Political map detail: Reorganized into UT of J&K and UT of Ladakh is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Which two Union Territories were merged into a single UT on January 26, 2020?",
    "opts": [
      "Dadra & Nagar Haveli and Daman & Diu",
      "Delhi and Puducherry",
      "Chandigarh and Ladakh",
      "Lakshadweep and Andaman"
    ],
    "ans": 0,
    "exp": "Political map detail: Dadra & Nagar Haveli and Daman & Diu is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Which princely state ruler initially wanted to stay independent or join Pakistan despite being inside Kathiawar?",
    "opts": [
      "Nawab of Junagadh (Mahabat Khan)",
      "Maharaja of Jaipur",
      "Maharaja of Travancore",
      "Nizam of Hyderabad"
    ],
    "ans": 0,
    "exp": "Political map detail: Nawab of Junagadh (Mahabat Khan) is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "What was the outcome of Operation Polo in September 1948?",
    "opts": [
      "Accession of Hyderabad into the Indian Union",
      "Liberation of Goa",
      "Partition of Bengal",
      "Sikkim merger"
    ],
    "ans": 0,
    "exp": "Political map detail: Accession of Hyderabad into the Indian Union is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Which state was formed out of Assam in 1972 alongside Meghalaya and Tripura?",
    "opts": [
      "Manipur",
      "Sikkim",
      "Goa",
      "Nagaland"
    ],
    "ans": 0,
    "exp": "Political map detail: Manipur is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Which Constitutional Amendment reserved 33% seats for women in Lok Sabha and Assemblies?",
    "opts": [
      "Nari Shakti Vandan Adhiniyam (106th Amendment, 2023)",
      "44th Amendment",
      "73rd Amendment",
      "86th Amendment"
    ],
    "ans": 0,
    "exp": "Political map detail: Nari Shakti Vandan Adhiniyam (106th Amendment, 2023) is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "What island territory in the Arabian Sea is a Union Territory of India?",
    "opts": [
      "Lakshadweep",
      "Andaman & Nicobar",
      "Puducherry",
      "Daman"
    ],
    "ans": 0,
    "exp": "Political map detail: Lakshadweep is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Which island territory in the Bay of Bengal is a Union Territory of India?",
    "opts": [
      "Andaman and Nicobar Islands",
      "Lakshadweep",
      "Diya Island",
      "Majuli"
    ],
    "ans": 0,
    "exp": "Political map detail: Andaman and Nicobar Islands is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Who was the last Viceroy of British India who announced the Partition Plan in June 1947?",
    "opts": [
      "Lord Mountbatten",
      "Lord Linlithgow",
      "Lord Wavell",
      "Lord Curzon"
    ],
    "ans": 0,
    "exp": "Political map detail: Lord Mountbatten is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Which agreement signed in 1972 between India and Pakistan established the Line of Control (LoC) in J&K?",
    "opts": [
      "Shimla Agreement",
      "Tashkent Declaration",
      "Lahore Declaration",
      "Agra Summit"
    ],
    "ans": 0,
    "exp": "Political map detail: Shimla Agreement is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Which state was granted full statehood in 1987 alongside Mizoram and Arunachal Pradesh?",
    "opts": [
      "Goa",
      "Sikkim",
      "Nagaland",
      "Meghalaya"
    ],
    "ans": 0,
    "exp": "Political map detail: Goa is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "What is the capital city of the Union Territory of Ladakh?",
    "opts": [
      "Leh",
      "Kargil",
      "Srinagar",
      "Jammu"
    ],
    "ans": 0,
    "exp": "Political map detail: Leh is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "What is the summer capital city of the Union Territory of Jammu & Kashmir?",
    "opts": [
      "Srinagar",
      "Jammu",
      "Leh",
      "Udhampur"
    ],
    "ans": 0,
    "exp": "Political map detail: Srinagar is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "What is the winter capital city of the Union Territory of Jammu & Kashmir?",
    "opts": [
      "Jammu",
      "Srinagar",
      "Anantnag",
      "Baramulla"
    ],
    "ans": 0,
    "exp": "Political map detail: Jammu is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Which body determines constituency boundaries based on population census data?",
    "opts": [
      "Delimitation Commission",
      "Finance Commission",
      "Planning Commission",
      "UPSC"
    ],
    "ans": 0,
    "exp": "Political map detail: Delimitation Commission is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Which state was created from Madhya Pradesh on November 1, 2000?",
    "opts": [
      "Chhattisgarh",
      "Jharkhand",
      "Uttarakhand",
      "Telangana"
    ],
    "ans": 0,
    "exp": "Political map detail: Chhattisgarh is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Which state was created from Uttar Pradesh on November 9, 2000?",
    "opts": [
      "Uttarakhand",
      "Chhattisgarh",
      "Jharkhand",
      "Himachal Pradesh"
    ],
    "ans": 0,
    "exp": "Political map detail: Uttarakhand is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Which state was created from Bihar on November 15, 2000?",
    "opts": [
      "Jharkhand",
      "Chhattisgarh",
      "Uttarakhand",
      "Odisha"
    ],
    "ans": 0,
    "exp": "Political map detail: Jharkhand is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "What state was created on language basis for Marathi speakers in 1960?",
    "opts": [
      "Maharashtra",
      "Gujarat",
      "Karnataka",
      "Goa"
    ],
    "ans": 0,
    "exp": "Political map detail: Maharashtra is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "What state was created on language basis for Gujarati speakers in 1960?",
    "opts": [
      "Gujarat",
      "Maharashtra",
      "Rajasthan",
      "Madhya Pradesh"
    ],
    "ans": 0,
    "exp": "Political map detail: Gujarat is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Which former French enclave on the east coast became part of Puducherry UT?",
    "opts": [
      "Karaikal / Puducherry",
      "Goa",
      "Daman",
      "Diu"
    ],
    "ans": 0,
    "exp": "Political map detail: Karaikal / Puducherry is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Which former French colony in Kerala is part of the Union Territory of Puducherry?",
    "opts": [
      "Mahe",
      "Yanam",
      "Karaikal",
      "Chandernagore"
    ],
    "ans": 0,
    "exp": "Political map detail: Mahe is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Which former French colony in Andhra Pradesh is part of Puducherry UT?",
    "opts": [
      "Yanam",
      "Mahe",
      "Karaikal",
      "Kakinada"
    ],
    "ans": 0,
    "exp": "Political map detail: Yanam is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Who was the leading woman freedom fighter and poet who served as Governor of UP in 1947?",
    "opts": [
      "Sarojini Naidu",
      "Sucheta Kripalani",
      "Aruna Asaf Ali",
      "Vijayalakshmi Pandit"
    ],
    "ans": 0,
    "exp": "Political map detail: Sarojini Naidu is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Which landmark 1971 constitutional amendment abolished the royal Privy Purse?",
    "opts": [
      "26th Constitutional Amendment Act",
      "42nd Amendment",
      "44th Amendment",
      "24th Amendment"
    ],
    "ans": 0,
    "exp": "Political map detail: 26th Constitutional Amendment Act is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "What was the political status of Sikkim before its integration as a state in 1975?",
    "opts": [
      "An Indian Protectorate ruled by the Chogyal monarch",
      "A British Crown Colony",
      "A French Territory",
      "A Portuguese enclave"
    ],
    "ans": 0,
    "exp": "Political map detail: An Indian Protectorate ruled by the Chogyal monarch is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Which boundary line demarcates India and China in the northeastern sector (Arunachal Pradesh)?",
    "opts": [
      "McMahon Line",
      "Radcliffe Line",
      "Durand Line",
      "Curzon Line"
    ],
    "ans": 0,
    "exp": "Political map detail: McMahon Line is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Which boundary line was drawn in 1947 to divide India and Pakistan?",
    "opts": [
      "Radcliffe Line",
      "McMahon Line",
      "Durand Line",
      "Maginot Line"
    ],
    "ans": 0,
    "exp": "Political map detail: Radcliffe Line is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "What key reason made Sardar Patel insist on integrating Princely States into India?",
    "opts": [
      "Preventing balkanization and building a unified, economically strong democratic nation",
      "Collecting personal taxes",
      "Promoting monarchy",
      "Expanding British rule"
    ],
    "ans": 0,
    "exp": "Political map detail: Preventing balkanization and building a unified, economically strong democratic nation is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Which princely state in Rajasthan had its ruler initially consider joining Pakistan before signing IoA?",
    "opts": [
      "Jodhpur (Maharaja Hanwant Singh)",
      "Udaipur",
      "Jaipur",
      "Bikaner"
    ],
    "ans": 0,
    "exp": "Political map detail: Jodhpur (Maharaja Hanwant Singh) is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Which princely state in central India delayed accession until August 1947 under Nawab Hamidullah Khan?",
    "opts": [
      "Bhopal",
      "Gwalior",
      "Indore",
      "Rewa"
    ],
    "ans": 0,
    "exp": "Political map detail: Bhopal is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "What body recommends redrawing state lines or naming new states to Parliament?",
    "opts": [
      "Ministry of Home Affairs / Parliament under Article 3",
      "Supreme Court",
      "Election Commission",
      "Governor"
    ],
    "ans": 0,
    "exp": "Political map detail: Ministry of Home Affairs / Parliament under Article 3 is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Which linguistic group demanded a separate state leading to the formation of Karnataka (Mysore) in 1956?",
    "opts": [
      "Kannada speakers",
      "Malayalam speakers",
      "Tamil speakers",
      "Telugu speakers"
    ],
    "ans": 0,
    "exp": "Political map detail: Kannada speakers is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Which linguistic group demanded a separate state leading to the formation of Kerala in 1956?",
    "opts": [
      "Malayalam speakers",
      "Kannada speakers",
      "Tulu speakers",
      "Konkani speakers"
    ],
    "ans": 0,
    "exp": "Political map detail: Malayalam speakers is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Which linguistic group demanded a separate state leading to the formation of Tamil Nadu (Madras) in 1956?",
    "opts": [
      "Tamil speakers",
      "Telugu speakers",
      "Kannada speakers",
      "Malayalam speakers"
    ],
    "ans": 0,
    "exp": "Political map detail: Tamil speakers is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "What year was the State of Madras officially renamed Tamil Nadu?",
    "opts": [
      "1969",
      "1956",
      "1972",
      "1980"
    ],
    "ans": 0,
    "exp": "Political map detail: 1969 is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "What year was Mysore State officially renamed Karnataka?",
    "opts": [
      "1973",
      "1956",
      "1960",
      "1985"
    ],
    "ans": 0,
    "exp": "Political map detail: 1973 is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "What year was Laccadive, Minicoy, and Amindivi Islands renamed Lakshadweep?",
    "opts": [
      "1973",
      "1950",
      "1965",
      "1988"
    ],
    "ans": 0,
    "exp": "Political map detail: 1973 is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "What state was created out of Assam in 1987 as the 24th State of India?",
    "opts": [
      "Mizoram",
      "Meghalaya",
      "Manipur",
      "Nagaland"
    ],
    "ans": 0,
    "exp": "Political map detail: Mizoram is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "What state was created out of NEFA as the 23rd State of India in 1987?",
    "opts": [
      "Arunachal Pradesh",
      "Sikkim",
      "Tripura",
      "Nagaland"
    ],
    "ans": 0,
    "exp": "Political map detail: Arunachal Pradesh is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "What city is the capital of Arunachal Pradesh?",
    "opts": [
      "Itanagar",
      "Dispur",
      "Shillong",
      "Kohima"
    ],
    "ans": 0,
    "exp": "Political map detail: Itanagar is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "What city is the capital of Nagaland?",
    "opts": [
      "Kohima",
      "Imphal",
      "Aizawl",
      "Agartala"
    ],
    "ans": 0,
    "exp": "Political map detail: Kohima is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "What city is the capital of Mizoram?",
    "opts": [
      "Aizawl",
      "Kohima",
      "Gangtok",
      "Itanagar"
    ],
    "ans": 0,
    "exp": "Political map detail: Aizawl is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "What city is the capital of Manipur?",
    "opts": [
      "Imphal",
      "Aizawl",
      "Shillong",
      "Agartala"
    ],
    "ans": 0,
    "exp": "Political map detail: Imphal is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "What city is the capital of Meghalaya?",
    "opts": [
      "Shillong",
      "Dispur",
      "Imphal",
      "Kohima"
    ],
    "ans": 0,
    "exp": "Political map detail: Shillong is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "What city is the capital of Tripura?",
    "opts": [
      "Agartala",
      "Aizawl",
      "Itanagar",
      "Gangtok"
    ],
    "ans": 0,
    "exp": "Political map detail: Agartala is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "What city is the capital of Sikkim?",
    "opts": [
      "Gangtok",
      "Darjeeling",
      "Siliguri",
      "Dispur"
    ],
    "ans": 0,
    "exp": "Political map detail: Gangtok is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "What city is the capital of Chhattisgarh?",
    "opts": [
      "Raipur",
      "Ranchi",
      "Dehradun",
      "Bilaspur"
    ],
    "ans": 0,
    "exp": "Political map detail: Raipur is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "What city is the capital of Uttarakhand?",
    "opts": [
      "Dehradun (Winter) / Bhararisain (Summer)",
      "Nainital",
      "Haridwar",
      "Rishikesh"
    ],
    "ans": 0,
    "exp": "Political map detail: Dehradun (Winter) / Bhararisain (Summer) is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "What city is the capital of Jharkhand?",
    "opts": [
      "Ranchi",
      "Jamshedpur",
      "Dhanbad",
      "Bokaro"
    ],
    "ans": 0,
    "exp": "Political map detail: Ranchi is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "What city is the capital of Telangana?",
    "opts": [
      "Hyderabad",
      "Amaravati",
      "Warangal",
      "Nizamabad"
    ],
    "ans": 0,
    "exp": "Political map detail: Hyderabad is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "What city is designated as the capital of Andhra Pradesh?",
    "opts": [
      "Amaravati",
      "Visakhapatnam",
      "Hyderabad",
      "Tirupati"
    ],
    "ans": 0,
    "exp": "Political map detail: Amaravati is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Which river water dispute involves Karnataka, Tamil Nadu, Kerala, and Puducherry?",
    "opts": [
      "Kaveri (Cauvery) River Water Dispute",
      "Krishna River Dispute",
      "Godavari Dispute",
      "Narmada Dispute"
    ],
    "ans": 0,
    "exp": "Political map detail: Kaveri (Cauvery) River Water Dispute is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Which river water dispute involves Maharashtra, Karnataka, and Andhra Pradesh/Telangana?",
    "opts": [
      "Krishna River Water Dispute",
      "Kaveri Dispute",
      "Periyar Dispute",
      "Mahanadi Dispute"
    ],
    "ans": 0,
    "exp": "Political map detail: Krishna River Water Dispute is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "What historical event in Dec 1952 catalysed the creation of linguistic states across India?",
    "opts": [
      "Martyrdom of Potti Sreeramulu after 56-day fast",
      "Operation Polo",
      "Junagadh Plebiscite",
      "Partition of Punjab"
    ],
    "ans": 0,
    "exp": "Political map detail: Martyrdom of Potti Sreeramulu after 56-day fast is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Which region in Jammu & Kashmir was reorganized into a separate Union Territory without a legislature in 2019?",
    "opts": [
      "Ladakh",
      "Jammu",
      "Kashmir Valley",
      "Gilgit"
    ],
    "ans": 0,
    "exp": "Political map detail: Ladakh is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Does the Union Territory of Jammu & Kashmir have provision for a Legislative Assembly under the 2019 Act?",
    "opts": [
      "Yes, with a Legislative Assembly",
      "No, it has no assembly",
      "It is governed by a King",
      "It is part of Punjab assembly"
    ],
    "ans": 0,
    "exp": "Political map detail: Yes, with a Legislative Assembly is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Which Union Territory serves as the national capital of India?",
    "opts": [
      "National Capital Territory (NCT) of Delhi",
      "Chandigarh",
      "Puducherry",
      "Daman"
    ],
    "ans": 0,
    "exp": "Political map detail: National Capital Territory (NCT) of Delhi is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Which constitutional body resolves territorial boundary disputes between Indian states?",
    "opts": [
      "Supreme Court of India (Original Jurisdiction under Article 131)",
      "High Court",
      "Election Commission",
      "NITI Aayog"
    ],
    "ans": 0,
    "exp": "Political map detail: Supreme Court of India (Original Jurisdiction under Article 131) is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Which article of the Constitution allows President's Rule to be imposed in a state?",
    "opts": [
      "Article 356",
      "Article 370",
      "Article 326",
      "Article 280"
    ],
    "ans": 0,
    "exp": "Political map detail: Article 356 is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "What was the former name of the state of Odisha prior to 2011?",
    "opts": [
      "Orissa",
      "Kalinga",
      "Utkal",
      "Kosala"
    ],
    "ans": 0,
    "exp": "Political map detail: Orissa is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "What was the former name of Uttarakhand before 2007?",
    "opts": [
      "Uttaranchal",
      "Garhwal",
      "Kumaon",
      "Devbhumi"
    ],
    "ans": 0,
    "exp": "Political map detail: Uttaranchal is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Which region was integrated into India after a treaty with France in 1954/1962?",
    "opts": [
      "Puducherry (Pondicherry)",
      "Goa",
      "Daman",
      "Sikkim"
    ],
    "ans": 0,
    "exp": "Political map detail: Puducherry (Pondicherry) is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Who was the first Prime Minister of independent India who led state reorganisation efforts?",
    "opts": [
      "Jawaharlal Nehru",
      "Sardar Patel",
      "Lal Bahadur Shastri",
      "Gulzarilal Nanda"
    ],
    "ans": 0,
    "exp": "Political map detail: Jawaharlal Nehru is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Which Princely State ruler signed the Instrument of Accession after Pakistani tribal invasion in Oct 1947?",
    "opts": [
      "Maharaja Hari Singh of Jammu & Kashmir",
      "Nizam of Hyderabad",
      "Nawab of Junagadh",
      "Maharaja of Travancore"
    ],
    "ans": 0,
    "exp": "Political map detail: Maharaja Hari Singh of Jammu & Kashmir is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "What was the primary function of the Ministry of States created in July 1947?",
    "opts": [
      "Negotiating integration and accession of 565+ Princely States into India",
      "Managing foreign trade",
      "Building railways",
      "Conducting census"
    ],
    "ans": 0,
    "exp": "Political map detail: Negotiating integration and accession of 565+ Princely States into India is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Who was the Governor-General of India during the 1947 accession process of princely states?",
    "opts": [
      "Lord Mountbatten",
      "C. Rajagopalachari",
      "Lord Wavell",
      "Lord Linlithgow"
    ],
    "ans": 0,
    "exp": "Political map detail: Lord Mountbatten is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Who became the first Indian Governor-General of independent India in 1948?",
    "opts": [
      "C. Rajagopalachari",
      "Sardar Patel",
      "Dr. Rajendra Prasad",
      "Dr. S. Radhakrishnan"
    ],
    "ans": 0,
    "exp": "Political map detail: C. Rajagopalachari is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "What constitutional amendment in 1956 implemented the recommendations of the SRC?",
    "opts": [
      "7th Constitutional Amendment Act 1956",
      "1st Amendment",
      "42nd Amendment",
      "44th Amendment"
    ],
    "ans": 0,
    "exp": "Political map detail: 7th Constitutional Amendment Act 1956 is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Which state in Northeast India was created in 1963 following the Naga national movement?",
    "opts": [
      "Nagaland",
      "Mizoram",
      "Manipur",
      "Meghalaya"
    ],
    "ans": 0,
    "exp": "Political map detail: Nagaland is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Which state was carved out of Assam in 1972 for the Khasi, Jaintia, and Garo hill tribes?",
    "opts": [
      "Meghalaya",
      "Arunachal Pradesh",
      "Nagaland",
      "Tripura"
    ],
    "ans": 0,
    "exp": "Political map detail: Meghalaya is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Which princely state was ruled by Maharaja Bodhchandra Singh, acceding to India in Sept 1949?",
    "opts": [
      "Manipur",
      "Tripura",
      "Cochin",
      "Sikkim"
    ],
    "ans": 0,
    "exp": "Political map detail: Manipur is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Which princely state was ruled by Maharani Kanchan Prabha Devi acceding to India in 1949?",
    "opts": [
      "Tripura",
      "Manipur",
      "Cooch Behar",
      "Kashipur"
    ],
    "ans": 0,
    "exp": "Political map detail: Tripura is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Which princely state in West Bengal merged with West Bengal in 1950?",
    "opts": [
      "Cooch Behar",
      "Junagadh",
      "Bhopal",
      "Mayurbhanj"
    ],
    "ans": 0,
    "exp": "Political map detail: Cooch Behar is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Which princely state in Odisha merged with Odisha state in 1949?",
    "opts": [
      "Mayurbhanj",
      "Cooch Behar",
      "Travancore",
      "Bhopal"
    ],
    "ans": 0,
    "exp": "Political map detail: Mayurbhanj is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Which princely state in Gujarat saw citizen revolt against Nawab Mahabat Khan in 1947?",
    "opts": [
      "Junagadh",
      "Baroda",
      "Jamnagar",
      "Bhavnagar"
    ],
    "ans": 0,
    "exp": "Political map detail: Junagadh is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Which major princely state in Gujarat ruled by Maharaja Gaekwad acceded smoothly to India?",
    "opts": [
      "Baroda (Vadodara)",
      "Junagadh",
      "Rajkot",
      "Porbandar"
    ],
    "ans": 0,
    "exp": "Political map detail: Baroda (Vadodara) is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Which princely state in Punjab led by Maharaja Yadavindra Singh joined India enthusiastically?",
    "opts": [
      "Patiala (PEPSU)",
      "Bahawalpur",
      "Kalat",
      "Khairpur"
    ],
    "ans": 0,
    "exp": "Political map detail: Patiala (PEPSU) is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "What was PEPSU in post-1947 political geography?",
    "opts": [
      "Patiala and East Punjab States Union",
      "Punjab Eastern Provincial State Union",
      "Pakistan East Punjab Border State",
      "Pan-East Punjab State Unit"
    ],
    "ans": 0,
    "exp": "Political map detail: Patiala and East Punjab States Union is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "In which year was PEPSU merged into Punjab State?",
    "opts": [
      "1956",
      "1950",
      "1960",
      "1966"
    ],
    "ans": 0,
    "exp": "Political map detail: 1956 is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Which state reorganisation commission recommended that language should be a primary basis for state boundaries?",
    "opts": [
      "States Reorganisation Commission 1953 (Fazl Ali Commission)",
      "Dhar Commission 1948",
      "JVP Committee 1948",
      "Simon Commission 1927"
    ],
    "ans": 0,
    "exp": "Political map detail: States Reorganisation Commission 1953 (Fazl Ali Commission) is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Which body approves the creation of new states or alteration of state boundaries under Article 3?",
    "opts": [
      "Parliament of India",
      "Supreme Court",
      "State High Courts",
      "United Nations"
    ],
    "ans": 0,
    "exp": "Political map detail: Parliament of India is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Is the consent of a State Legislature legally binding on Parliament when altering state boundaries under Article 3?",
    "opts": [
      "No, Parliament can proceed even if State Assembly disagrees",
      "Yes, state assembly holds absolute veto",
      "Yes, 100% assembly vote required",
      "No, only Governor decides"
    ],
    "ans": 0,
    "exp": "Political map detail: No, Parliament can proceed even if State Assembly disagrees is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Which Union Territory has a Legislative Assembly and Chief Minister besides Delhi and J&K?",
    "opts": [
      "Puducherry",
      "Chandigarh",
      "Ladakh",
      "Lakshadweep"
    ],
    "ans": 0,
    "exp": "Political map detail: Puducherry is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Who appoints the Lieutenant Governor of a Union Territory in India?",
    "opts": [
      "President of India",
      "Prime Minister",
      "Chief Justice",
      "State Governor"
    ],
    "ans": 0,
    "exp": "Political map detail: President of India is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Which Union Territory is administered directly by an Administrator appointed by the President without an assembly?",
    "opts": [
      "Chandigarh / Lakshadweep / Dadra & Nagar Haveli",
      "Delhi",
      "Puducherry",
      "Jammu & Kashmir"
    ],
    "ans": 0,
    "exp": "Political map detail: Chandigarh / Lakshadweep / Dadra & Nagar Haveli is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "What is the maximum number of members in the Lok Sabha allowed by the Constitution currently?",
    "opts": [
      "550 members",
      "543 members",
      "600 members",
      "500 members"
    ],
    "ans": 0,
    "exp": "Political map detail: 550 members is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "What is the maximum strength of the Rajya Sabha prescribed by the Constitution?",
    "opts": [
      "250 members",
      "245 members",
      "300 members",
      "200 members"
    ],
    "ans": 0,
    "exp": "Political map detail: 250 members is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "How many members are nominated by the President to the Rajya Sabha for contributions to art, literature, science, and social service?",
    "opts": [
      "12 members",
      "2 members",
      "10 members",
      "15 members"
    ],
    "ans": 0,
    "exp": "Political map detail: 12 members is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Which schedule of the Indian Constitution lists the names of States and Union Territories?",
    "opts": [
      "First Schedule",
      "Seventh Schedule",
      "Eighth Schedule",
      "Tenth Schedule"
    ],
    "ans": 0,
    "exp": "Political map detail: First Schedule is the correct answer."
  },
  {
    "topic": "Political Map",
    "q": "Which schedule of the Indian Constitution lists official recognized languages (22 languages)?",
    "opts": [
      "Eighth Schedule",
      "First Schedule",
      "Fifth Schedule",
      "Ninth Schedule"
    ],
    "ans": 0,
    "exp": "Political map detail: Eighth Schedule is the correct answer."
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
  },
  {
    "topic": "Political Map",
    "q": "Which Ahom military commander defeated the Mughal army at the Battle of Saraighat in 1671?",
    "opts": [
      "Lachit Borphukan",
      "Sukaphaa",
      "Harihara I",
      "Prithviraj Chauhan"
    ],
    "ans": 0,
    "exp": "Lachit Borphukan led the Ahom Kingdom to a decisive naval victory against the Mughals at Saraighat in 1671."
  },
  {
    "topic": "Political Map",
    "q": "Which of the following describes Akbar's core governance policy of universal peace and religious inclusivity?",
    "opts": [
      "Sulh-i-kul",
      "Fatawa-e-Alamgiri",
      "Doctrine of Lapse",
      "Zabt System"
    ],
    "ans": 0,
    "exp": "Sulh-i-kul (\"Universal Peace\") was Akbar's foundational policy promoting religious tolerance and syncretism."
  },
  {
    "topic": "Political Map",
    "q": "The Battle of Buxar (1764) was historically significant because it granted the British East India Company:",
    "opts": [
      "Diwani Rights (tax collection) over Bengal, Bihar, and Odisha",
      "Complete control over Punjab",
      "The title of Emperor of India",
      "Control over the Ahom Kingdom"
    ],
    "ans": 0,
    "exp": "Winning the Battle of Buxar granted the EIC Diwani rights to collect land revenues across Bengal, Bihar, and Odisha."
  },
  {
    "topic": "Political Map",
    "q": "Which freedom fighter's 56-day fast unto death led to the creation of Andhra State in 1953?",
    "opts": [
      "Potti Sriramulu",
      "V.P. Menon",
      "Sardar Patel",
      "Tanguturi Prakasam"
    ],
    "ans": 0,
    "exp": "Potti Sriramulu's martyrdom after 56 days of fasting led directly to the formation of Andhra State on Oct 1, 1953."
  },
  {
    "topic": "Political Map",
    "q": "What was the official name of the military/police operation launched in September 1948 to integrate Hyderabad?",
    "opts": [
      "Operation Polo",
      "Operation Vijay",
      "Operation Meghdoot",
      "Operation Blue Star"
    ],
    "ans": 0,
    "exp": "Operation Polo was the 5-day police action launched in September 1948 that integrated Hyderabad into India."
  }
];

const GLOSSARY = [
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
  localStorage.setItem('g8_sst_syllabus_mode', mode);

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

  const isPA1 = STATE.syllabusMode === 'PA 1';

  TOPICS.forEach((topic, idx) => {
    if (isPA1 && (topic.chapterId === 'electoral-system' || topic.chapterId === 'factors-production')) {
      return;
    }

    const grid = grids[topic.chapterId];
    if (!grid) return;

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

    card.addEventListener('click', () => openModal(idx));
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

function renderTopics() {
  const grids = {
    'natural-resources': document.getElementById('natural-resources-grid'),
    'political-map': document.getElementById('political-map-grid'),
    'electoral-system': document.getElementById('electoral-system-grid'),
    'factors-production': document.getElementById('factors-production-grid')
  };

  Object.values(grids).forEach(grid => { if (grid) grid.innerHTML = ''; });

  const isPA1 = STATE.syllabusMode === 'PA 1';

  TOPICS.forEach((topic, idx) => {
    if (isPA1 && (topic.chapterId === 'electoral-system' || topic.chapterId === 'factors-production')) {
      return;
    }

    const grid = grids[topic.chapterId];
    if (!grid) return;

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

    card.addEventListener('click', () => openModal(idx));
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

let isNavigatingModal = false;
function navigateModalTopic(direction) {
  if (isNavigatingModal) return;
  
  const activeTopics = getActiveTopics();
  if (activeTopics.length === 0) return;

  const currentTopic = TOPICS[STATE.currentTopicIndex];
  let activeIdx = activeTopics.findIndex(t => t.id === (currentTopic ? currentTopic.id : ''));
  if (activeIdx === -1) activeIdx = 0;

  let newActiveIdx = (activeIdx + direction + activeTopics.length) % activeTopics.length;
  const targetTopic = activeTopics[newActiveIdx];
  const targetFullIdx = TOPICS.findIndex(t => t.id === targetTopic.id);

  if (targetFullIdx !== -1) {
    isNavigatingModal = true;
    const body = document.getElementById('modal-body');
    if (body) {
      body.style.opacity = '0.3';
      body.style.transform = direction > 0 ? 'translateX(12px)' : 'translateX(-12px)';
      setTimeout(() => {
        openModal(targetFullIdx);
        body.style.opacity = '1';
        body.style.transform = 'none';
        isNavigatingModal = false;
      }, 70);
    } else {
      openModal(targetFullIdx);
      isNavigatingModal = false;
    }
  }
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
  localStorage.setItem('g8_sst_learned_fc', JSON.stringify(STATE.learnedFlashcards));
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

  // Update button active state highlights
  const buttons = document.querySelectorAll('.fc-filter-btn');
  buttons.forEach(btn => {
    const text = btn.textContent;
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
    ? FLASHCARDS.filter(c => c.topic === 'Natural Resources' || c.topic === 'Political Map')
    : FLASHCARDS;

  // Apply Union / OR logic multi-filtering
  if (STATE.flashcardSelectedTopics.length === 0) {
    STATE.flashcardFiltered = [...basePool];
    showToast(isPA1 ? 'Flashcards: PA 1 Topics (250 Cards)' : 'Flashcards: All Topics (500 Cards)');
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
  if (isPA1) {
    STATE.quizActiveQuestions = MCQS.filter(q => q.topic === 'Natural Resources' || q.topic === 'Political Map');
  } else if (!STATE.quizSelectedTopics || STATE.quizSelectedTopics.length === 0) {
    STATE.quizActiveQuestions = [...MCQS];
  } else {
    STATE.quizActiveQuestions = MCQS.filter(q => STATE.quizSelectedTopics.includes(q.topic));
  }

  // Dim filter buttons for Term 1 topics in PA 1 mode
  const filterBtns = document.querySelectorAll('#quiz-filter-wrap button');
  filterBtns.forEach(btn => {
    const txt = btn.textContent;
    if (isPA1 && (txt.includes('Electoral System') || txt.includes('Factors of Production'))) {
      btn.style.opacity = '0.35';
      btn.style.pointerEvents = 'none';
      btn.title = 'Term 1 Only';
    } else {
      btn.style.opacity = '1';
      btn.style.pointerEvents = 'auto';
      btn.title = '';
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

  const buttons = document.querySelectorAll('.mcq-filter-btn');
  buttons.forEach(btn => {
    const text = btn.textContent;
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
    showToast(isPA1 ? 'Quiz Filtered: PA 1 Topics (250 Questions)' : 'Quiz Filtered: All Topics (500 Questions)');
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
    localStorage.setItem('g8_sst_quiz_score', STATE.quizHighScore.toString());
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

function renderImportantQuestions() {
  const container = document.getElementById('important-questions-wrap');
  if (!container) return;

  const isPA1 = STATE.syllabusMode === 'PA 1';
  const filterByPA1 = item => item.topic === 'Natural Resources' || item.topic === 'Political Map';
  const m1List = isPA1 ? IMPORTANT_QUESTIONS.m1.filter(filterByPA1) : IMPORTANT_QUESTIONS.m1;
  const m2List = isPA1 ? IMPORTANT_QUESTIONS.m2.filter(filterByPA1) : IMPORTANT_QUESTIONS.m2;
  const m3List = isPA1 ? IMPORTANT_QUESTIONS.m3.filter(filterByPA1) : IMPORTANT_QUESTIONS.m3;
  const m5List = isPA1 ? IMPORTANT_QUESTIONS.m5.filter(filterByPA1) : IMPORTANT_QUESTIONS.m5;

  container.innerHTML = `
    ${isPA1 ? `<div class="callout callout-important" style="margin-bottom:20px; background:rgba(34,211,238,0.1); border-color:var(--cyan);"><div class="callout-title" style="color:var(--cyan);">📝 PA 1 Syllabus Active</div>Showing Important Questions from Chapter 1 (Natural Resources) & Chapter 2 (Political Map).</div>` : ''}

    <div class="accordion-group" style="margin-bottom:30px;">
      <h3 style="color:var(--cyan); margin-bottom:15px;">⭐ 1 Mark Questions</h3>
      ${m1List.map(item => `
        <div class="accordion-item" style="background:var(--glass-card); border:1px solid var(--glass-border); border-radius:10px; margin-bottom:12px; overflow:hidden; transition:all 0.3s var(--ease);">
          <div class="accordion-header" onclick="this.parentElement.classList.toggle('active')" style="padding:16px 20px; color:var(--white-soft); font-weight:600; font-size:1rem; cursor:pointer; display:flex; justify-content:space-between; align-items:center;">
            <span>❓ ${item.q}</span>
            <span class="acc-icon" style="color:var(--cyan); font-size:1.2rem; transition:transform 0.3s var(--ease);">+</span>
          </div>
          <div class="accordion-body" style="padding:0 20px; max-height:0; overflow:hidden; transition:all 0.3s var(--ease); color:var(--gray-light); line-height:1.6;">
            <div style="padding-bottom:16px; border-top:1px solid var(--glass-border); padding-top:12px;">
              ${item.a}
            </div>
          </div>
        </div>
      `).join('')}
    </div>

    <div class="accordion-group" style="margin-bottom:30px;">
      <h3 style="color:var(--cyan); margin-bottom:15px;">⭐⭐ 2 Marks Short Answer Questions</h3>
      ${m2List.map(item => `
        <div class="accordion-item" style="background:var(--glass-card); border:1px solid var(--glass-border); border-radius:10px; margin-bottom:12px; overflow:hidden; transition:all 0.3s var(--ease);">
          <div class="accordion-header" onclick="this.parentElement.classList.toggle('active')" style="padding:16px 20px; color:var(--white-soft); font-weight:600; font-size:1rem; cursor:pointer; display:flex; justify-content:space-between; align-items:center;">
            <span>❓ ${item.q}</span>
            <span class="acc-icon" style="color:var(--cyan); font-size:1.2rem; transition:transform 0.3s var(--ease);">+</span>
          </div>
          <div class="accordion-body" style="padding:0 20px; max-height:0; overflow:hidden; transition:all 0.3s var(--ease); color:var(--gray-light); line-height:1.6;">
            <div style="padding-bottom:16px; border-top:1px solid var(--glass-border); padding-top:12px;">
              ${item.a}
            </div>
          </div>
        </div>
      `).join('')}
    </div>

    <div class="accordion-group" style="margin-bottom:30px;">
      <h3 style="color:var(--cyan); margin-bottom:15px;">⭐⭐⭐ 3 Marks Conceptual Questions</h3>
      ${m3List.map(item => `
        <div class="accordion-item" style="background:var(--glass-card); border:1px solid var(--glass-border); border-radius:10px; margin-bottom:12px; overflow:hidden; transition:all 0.3s var(--ease);">
          <div class="accordion-header" onclick="this.parentElement.classList.toggle('active')" style="padding:16px 20px; color:var(--white-soft); font-weight:600; font-size:1rem; cursor:pointer; display:flex; justify-content:space-between; align-items:center;">
            <span>❓ ${item.q}</span>
            <span class="acc-icon" style="color:var(--cyan); font-size:1.2rem; transition:transform 0.3s var(--ease);">+</span>
          </div>
          <div class="accordion-body" style="padding:0 20px; max-height:0; overflow:hidden; transition:all 0.3s var(--ease); color:var(--gray-light); line-height:1.6;">
            <div style="padding-bottom:16px; border-top:1px solid var(--glass-border); padding-top:12px;">
              ${item.a}
            </div>
          </div>
        </div>
      `).join('')}
    </div>

    <div class="accordion-group" style="margin-bottom:30px;">
      <h3 style="color:var(--cyan); margin-bottom:15px;">🏆 5 Marks Long Essay Questions</h3>
      ${m5List.map(item => `
        <div class="accordion-item" style="background:var(--glass-card); border:1px solid var(--glass-border); border-radius:10px; margin-bottom:12px; overflow:hidden; transition:all 0.3s var(--ease);">
          <div class="accordion-header" onclick="this.parentElement.classList.toggle('active')" style="padding:16px 20px; color:var(--white-soft); font-weight:600; font-size:1rem; cursor:pointer; display:flex; justify-content:space-between; align-items:center;">
            <span>❓ ${item.q}</span>
            <span class="acc-icon" style="color:var(--cyan); font-size:1.2rem; transition:transform 0.3s var(--ease);">+</span>
          </div>
          <div class="accordion-body" style="padding:0 20px; max-height:0; overflow:hidden; transition:all 0.3s var(--ease); color:var(--gray-light); line-height:1.6;">
            <div style="padding-bottom:16px; border-top:1px solid var(--glass-border); padding-top:12px;">
              ${item.a}
            </div>
          </div>
        </div>
      `).join('')}
    </div>
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

function renderGlossary() {
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
  });
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
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>Independent India</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">1947–Present</td><td style="padding:8px; border:1px solid var(--glass-border);">Republic of India and state reorganisation</td></tr>
        </tbody>
      </table>

      <!-- HISTORICAL TIMELINE TABLE -->
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
        <h3 style="color:var(--cyan); margin:0;">🗺️ Complete Timeline of India's Political Map (1206–2014)</h3>
        <button onclick="openTableModal('🗺️ Complete Timeline of India\'s Political Map (1206–2014)', this.parentElement.nextElementSibling.outerHTML)" class="cta-btn-outline" style="padding:5px 12px; font-size:0.8rem; display:inline-flex; align-items:center; gap:5px; cursor:pointer;">🔍 Expand Timeline Fullscreen ⤢</button>
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
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1857</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Revolt of 1857</td><td style="padding:8px; border:1px solid var(--glass-border);">Major uprising against British rule; First War of Independence (by many Indian historians).</td></tr>
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
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>15 August 1947</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">India becomes independent</td><td style="padding:8px; border:1px solid var(--glass-border);">Partition; over 560 princely states had to choose accession; Lapse of British Paramountcy over 565+ Princely States.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1947 / Feb 1948</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Junagadh Crisis & Plebiscite</td><td style="padding:8px; border:1px solid var(--glass-border);">Referendum (over 99% voted for merger) led to Junagadh joining India.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>October 26, 1947</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Jammu & Kashmir Instrument of Accession</td><td style="padding:8px; border:1px solid var(--glass-border);">Joined India after tribal invasion supported from Pakistan; Maharaja Hari Singh acceded to India.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>September 1948</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Operation Polo (Hyderabad)</td><td style="padding:8px; border:1px solid var(--glass-border);">5-day police action integrating Nizam's state of Hyderabad into India.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>26 January 1950</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Constitution comes into force</td><td style="padding:8px; border:1px solid var(--glass-border);">India became a Republic and a Union of States; Article 326 granted Universal Adult Franchise.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>Dec 1952</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Potti Sriramulu's hunger strike and death</td><td style="padding:8px; border:1px solid var(--glass-border);">Passed away after 56 days; triggered demand for linguistic states and catalyzed Andhra State in Oct 1953.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1953</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Andhra State created</td><td style="padding:8px; border:1px solid var(--glass-border);">India's first linguistic state.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>Dec 1953</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">States Reorganisation Commission established</td><td style="padding:8px; border:1px solid var(--glass-border);">Appointed under Justice Fazl Ali, H.N. Kunzru, K.M. Panikkar; recommended reorganising states mainly on linguistic lines.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1955</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">SRC report submitted</td><td style="padding:8px; border:1px solid var(--glass-border);">Became the basis for state reorganisation.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1 November 1956</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">States Reorganisation Act</td><td style="padding:8px; border:1px solid var(--glass-border);">India reorganised into <strong>14 states and 6 Union Territories</strong> on linguistic lines.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1960</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Maharashtra and Gujarat created</td><td style="padding:8px; border:1px solid var(--glass-border);">Bombay State divided on linguistic lines.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>Dec 1961</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Operation Vijay (Goa)</td><td style="padding:8px; border:1px solid var(--glass-border);">Liberated Goa, Daman & Diu from 450 years of Portuguese rule.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1963</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Nagaland becomes a state</td><td style="padding:8px; border:1px solid var(--glass-border);">Recognition of Naga identity.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1966</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Punjab Reorganisation</td><td style="padding:8px; border:1px solid var(--glass-border);">Haryana created; Chandigarh became a Union Territory.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1971</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Himachal Pradesh becomes a state</td><td style="padding:8px; border:1px solid var(--glass-border);">Achieved full statehood.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1972</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Meghalaya, Manipur and Tripura become states</td><td style="padding:8px; border:1px solid var(--glass-border);">Strengthened representation in the North-East.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1975</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Sikkim joins India</td><td style="padding:8px; border:1px solid var(--glass-border);">Became India's 22nd state after a referendum.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1982</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">First EVM Trial</td><td style="padding:8px; border:1px solid var(--glass-border);">Tested in Paravur Assembly Constituency, Kerala.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1987</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Goa, Mizoram and Arunachal Pradesh become states</td><td style="padding:8px; border:1px solid var(--glass-border);">Further reorganisation of western and north-eastern India.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1988 (1989)</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">61st Constitutional Amendment Act</td><td style="padding:8px; border:1px solid var(--glass-border);">Voting age reduced from 21 to 18 years.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>2000</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Chhattisgarh created</td><td style="padding:8px; border:1px solid var(--glass-border);">Carved out of Madhya Pradesh.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>2000</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Uttarakhand (then Uttaranchal) created</td><td style="padding:8px; border:1px solid var(--glass-border);">Carved out of Uttar Pradesh.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>2000</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Jharkhand created</td><td style="padding:8px; border:1px solid var(--glass-border);">Carved out of Bihar.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>2004</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Nationwide EVM Rollout</td><td style="padding:8px; border:1px solid var(--glass-border);">EVMs used in all 543 Lok Sabha constituencies.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>2013 / 2019</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">VVPAT & NOTA Integration</td><td style="padding:8px; border:1px solid var(--glass-border);">7-second paper trail & None of the Above option added.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>2 June 2014</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Telangana becomes India's 29th state</td><td style="padding:8px; border:1px solid var(--glass-border);">Formed from Andhra Pradesh after a long regional movement.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>Oct 31, 2019</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">J&K Reorganisation</td><td style="padding:8px; border:1px solid var(--glass-border);">J&K reorganized into two Union Territories (J&K and Ladakh).</td></tr>
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
