/* Grade 8 SST Study Guide — Single Page Application Engine */

const STATE = {
  activeTab: 'home',
  bookmarks: JSON.parse(localStorage.getItem('g8_sst_bookmarks') || '[]'),
  learnedFlashcards: JSON.parse(localStorage.getItem('g8_sst_learned_fc') || '[]'),
  quizHighScore: parseInt(localStorage.getItem('g8_sst_quiz_score') || '0', 10),
  currentTopicIndex: 0,
  flashcardIndex: 0,
  flashcardFiltered: [],
  quizIndex: 0,
  quizScore: 0,
  quizUserAnswers: [],
  quizActiveQuestions: [],
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
    contentHtml: `
      <p>Everything you use in daily life—your clothes, school desk, smartphone, drinking water, and pencil—originally originated from <strong>Nature</strong>. However, Nature and Resources are not identical concepts in Social Science.</p>

      <div class="callout callout-definition">
        <div class="callout-title">📖 What is Nature?</div>
        <strong>Nature</strong> includes everything that exists on Earth without being created by human intervention. It comprises both biotic components (plants, animals, fungi, bacteria) and abiotic components (land, air, water, minerals, sunlight, rivers, mountains).
      </div>

      <div class="callout callout-definition">
        <div class="callout-title">📖 What is a Resource?</div>
        A <strong>Resource</strong> is anything available in nature that has utility, value, and the capacity to satisfy human needs and desires.
      </div>

      <div class="callout callout-important">
        <div class="callout-title">⭐ The Human Utility Threshold Rule</div>
        Nature becomes a resource <em>only when humans discover its utility and possess the technological capability to extract and process it</em>. For example, crude petroleum hidden deep beneath ocean beds was simply part of abiotic Nature for thousands of years; it became a global resource only after offshore drilling technology was developed.
      </div>

      <h3>Resource Transformation Journey</h3>
      <table>
        <thead>
          <tr><th>Natural State (Nature)</th><th>Human Knowledge & Technology</th><th>Transformed Resource</th><th>Human Utility</th></tr>
        </thead>
        <tbody>
          <tr><td>Forest Trees</td><td>Timber Logging & Carpentry</td><td>Wooden Desk & Paper</td><td>Education & Furniture</td></tr>
          <tr><td>Bauxite Ore</td><td>Smelting & Metallurgy</td><td>Aluminum Alloy</td><td>Aircraft & Utensils</td></tr>
          <tr><td>Sunlight</td><td>Photovoltaic Solar Cells</td><td>Solar Electricity</td><td>Clean Energy Power</td></tr>
          <tr><td>Silicon Sand</td><td>Semiconductor Refining</td><td>Microchips</td><td>Computers & Smartphones</td></tr>
          <tr><td>Fast-flowing River</td><td>Hydroelectric Turbines</td><td>Hydroelectricity</td><td>Industrial Power</td></tr>
        </tbody>
      </table>

      <div class="callout callout-activity">
        <div class="callout-title">🔍 Think About It: The 10 Objects Challenge</div>
        Look around your room. Trace 5 everyday objects back to their original natural resource state:
        <ul>
          <li><strong>Pencil:</strong> Cedar wood + Graphite mineral</li>
          <li><strong>Shirt:</strong> Cotton plant fibers or Petroleum synthetic polymers</li>
          <li><strong>Window Glass:</strong> Silica sand melted at high temperatures</li>
          <li><strong>Spoon:</strong> Iron ore alloyed with Chromium and Nickel</li>
          <li><strong>Book:</strong> Plant cellulose fiber processed into pulp</li>
        </ul>
      </div>
    `
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
    contentHtml: `
      <p>Not everything present in nature is automatically a resource. Economists and geographers establish three indispensable criteria that must be satisfied simultaneously for any natural element to qualify as a resource.</p>

      <div class="formula-block">
        Resource = Substance + Technological Accessibility + Economic Feasibility + Cultural Acceptability
      </div>

      <h3>The Three Pillars of Resource Status</h3>
      <ol>
        <li>
          <strong>Technological Accessibility:</strong>
          <p>Humans must possess appropriate tools, scientific knowledge, and technical know-how to extract and process the substance. For instance, hydrogen gas in ocean water (H₂O) contains vast energy, but until cost-effective commercial extraction technology exists, ocean hydrogen is not yet a fully realized commercial resource.</p>
        </li>
        <li>
          <strong>Economic Feasibility:</strong>
          <p>The financial benefit derived from extracting and using the resource must exceed the financial cost of extraction. If extracting ₹100 worth of gold from deep rocks costs ₹10,000 in drilling expenses, the deposit is economically unfeasible.</p>
        </li>
        <li>
          <strong>Cultural & Social Acceptability:</strong>
          <p>The usage of the resource must align with societal norms, laws, ethical values, and environmental safety guidelines. Mining in sacred groves or protected biodiversity heritage sites may be technologically and economically possible, but culturally and legally unacceptable.</p>
        </li>
      </ol>

      <div class="callout callout-observation">
        <div class="callout-title">💡 Memory Trick: The TEC Rule</div>
        Remember <strong>TEC</strong> for Resource Status:
        <br>• <strong>T</strong> – Technological Accessibility
        <br>• <strong>E</strong> – Economic Feasibility
        <br>• <strong>C</strong> – Cultural Acceptability
      </div>

      <div class="callout callout-warning">
        <div class="callout-title">⚠️ Common Mistake</div>
        Do not confuse <em>Value</em> with <em>Price</em>. Air has immense value for human survival (life-sustaining value), even though it has no price tag in natural open markets.
      </div>
    `
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
    contentHtml: `
      <p>Geographers classify natural resources into distinct categories to analyze their distribution, management, and conservation requirements.</p>

      <h3>1. Based on Origin</h3>
      <ul>
        <li><strong>Biotic Resources:</strong> Derived from living organisms and organic matter (e.g., forests, crops, wildlife, livestock, coal, petroleum).</li>
        <li><strong>Abiotic Resources:</strong> Derived from non-living physical inorganic matter (e.g., land, rocks, minerals, water, solar energy, air).</li>
      </ul>

      <h3>2. Based on Exhaustibility & Renewability</h3>
      <ul>
        <li><strong>Renewable Resources:</strong> Resources that can replenish themselves naturally through physical, chemical, or biological cycles within a humanly reasonable timeframe (e.g., solar energy, wind energy, tidal power, freshwater, forests).</li>
        <li><strong>Non-Renewable Resources:</strong> Resources formed over millions of geological years that cannot be replenished once exhausted (e.g., fossil fuels like coal, crude oil, natural gas, metallic minerals).</li>
      </ul>

      <h3>3. Based on Ownership</h3>
      <ul>
        <li><strong>Individual Resources:</strong> Owned privately by individuals (e.g., private farmland, houses, personal wells).</li>
        <li><strong>Community Resources:</strong> Accessible to all members of a community (e.g., village grazing grounds, public parks, burial grounds).</li>
        <li><strong>National Resources:</strong> Belonging to the nation state within political boundaries and exclusive economic zones up to 12 nautical miles from coastlines (e.g., Indian Railways, mineral deposits, public forests).</li>
        <li><strong>International Resources:</strong> Regulated by international treaties beyond 200 nautical miles of Exclusive Economic Zones (e.g., open oceans and deep international seabed minerals).</li>
      </ul>
    `
  },
  {
    id: 'ch1-renewable-sustainability',
    chapterId: 'natural-resources',
    chapterTitle: 'Natural Resources and Their Use',
    icon: '♻️',
    title: '4. Ecosystem Services & Sustainable Resource Management',
    difficulty: 'Hard',
    readTime: '8 min',
    preview: 'Explore vital ecosystem services provided by Nature, the consequences of resource over-exploitation, and sustainable development principles.',
    contentHtml: `
      <p>Nature provides humanity with invaluable services known as <strong>Ecosystem Services</strong>. These functions maintain ecological balance and enable economic life.</p>

      <div class="callout callout-important">
        <div class="callout-title">🌿 Four Categories of Ecosystem Services</div>
        <ul>
          <li><strong>Provisioning Services:</strong> Supply of food, clean water, timber, medicinal plants, and raw fibers.</li>
          <li><strong>Regulating Services:</strong> Climate regulation, flood control, water purification, disease prevention, and pollination.</li>
          <li><strong>Supporting Services:</strong> Soil formation, nutrient cycling, oxygen production via photosynthesis, and habitat maintenance.</li>
          <li><strong>Cultural Services:</strong> Aesthetic beauty, recreational spaces, spiritual connection, and eco-tourism.</li>
        </ul>
      </div>

      <h3>Sustainable Development Principles</h3>
      <div class="callout callout-definition">
        <div class="callout-title">📖 Sustainable Development</div>
        Development that meets the needs of the present generation without compromising the ability of future generations to meet their own needs.
      </div>

      <div class="callout callout-activity">
        <div class="callout-title">🛡️ The Golden Rules of Resource Conservation</div>
        <ol>
          <li><strong>Reduce:</strong> Minimize consumption of non-renewable fossil fuels and single-use plastics.</li>
          <li><strong>Reuse:</strong> Extend product lifecycles by repurposing materials before discarding.</li>
          <li><strong>Recycle:</strong> Process scrap metals, glass, and paper back into raw industrial stock.</li>
          <li><strong>Replenish:</strong> Practice afforestation and rainwater harvesting to restore renewable reserves.</li>
        </ol>
      </div>
    `
  },

  // CHAPTER 2: RESHAPING INDIA'S POLITICAL MAP
  {
    id: 'ch2-colonial-partition-princely',
    chapterId: 'political-map',
    chapterTitle: "Reshaping India's Political Map",
    icon: '🗺️',
    title: '5. Colonial Partition & The Challenge of 565+ Princely States',
    difficulty: 'Medium',
    readTime: '8 min',
    preview: 'Understand the administrative chaos at Indian independence in August 1947, split between British Indian Provinces and over 565 semi-autonomous Princely States.',
    contentHtml: `
      <p>When India achieved independence on August 15, 1947, the country faced an unprecedented geopolitical challenge. The British empire left behind a fragmented subcontinent divided into two distinct administrative components.</p>

      <h3>Dual Structure of Pre-Independence India</h3>
      <table>
        <thead>
          <tr><th>Category</th><th>British Indian Provinces</th><th>Princely States (Rajwadas)</th></tr>
        </thead>
        <tbody>
          <tr><td>Governance</td><td>Directly ruled by British Governors & Viceroy</td><td>Ruled by native hereditary Princes (Maharajas, Nawabs, Rajas)</td></tr>
          <tr><td>Sovereignty</td><td>British Crown Jurisdiction</td><td>British Paramountcy (Internal autonomy subject to British approval)</td></tr>
          <tr><td>Number / Area</td><td>11 Large Provinces (e.g., Bengal, Madras, Bombay)</td><td>Over 565 Princely States covering 48% of land area & 28% of population</td></tr>
        </tbody>
      </table>

      <div class="callout callout-important">
        <div class="callout-title">⚡ The Indian Independence Act 1947 Loophole</div>
        The British Parliament declared that upon independence, <em>British Paramountcy would lapse</em>. This legal clause gave all 565+ princely states three options:
        <br>1. Join the Dominion of India.
        <br>2. Join the Dominion of Pakistan.
        <br>3. Remain independent sovereign states.
        <br>If several large princely states chose independence, India would have faced balkanization into dozens of hostile landlocked countries!
      </div>
    `
  },
  {
    id: 'ch2-sardar-patel-integration',
    chapterId: 'political-map',
    chapterTitle: "Reshaping India's Political Map",
    icon: '🏛️',
    title: '6. Sardar Vallabhbhai Patel & Diplomatic Integration',
    difficulty: 'Hard',
    readTime: '9 min',
    preview: "Learn how India's first Deputy Prime Minister and Home Minister, Sardar Vallabhbhai Patel, alongside V.P. Menon, integrated hundreds of princely states into a unified democratic union.",
    contentHtml: `
      <p>Sardar Vallabhbhai Patel, known as the <strong>"Iron Man of India"</strong>, spearheaded the diplomatic, legal, and political integration of princely states into the Indian Union.</p>

      <div class="callout callout-definition">
        <div class="callout-title">📖 Instrument of Accession (IoA)</div>
        A legal document signed by the rulers of princely states acceding to the Union of India, surrendering control over three core national subjects: <strong>Defense, External Affairs, and Communications</strong>, while retaining internal administrative autonomy initially.
      </div>

      <h3>Patel's Diplomatic Strategy</h3>
      <ul>
        <li><strong>Appeal to Patriotism & Common Destiny:</strong> Reminding rulers of shared cultural heritage and economic interdependence.</li>
        <li><strong>Privy Purse Guarantee:</strong> Offering rulers tax-free financial allowances (Privy Purses) proportional to their state revenue in exchange for political merger.</li>
        <li><strong>Firm Realpolitik:</strong> Demonstrating that independent existence was unviable surrounded by democratic India.</li>
      </ul>

      <div class="callout callout-activity">
        <div class="callout-title">🏆 Historical Achievement</div>
        Through masterly persuasion and resolute leadership, Sardar Patel negotiated the peaceful accession of over 560 princely states before August 15, 1947, securing national unity without bloodshed in the vast majority of regions.
      </div>
    `
  },
  {
    id: 'ch2-case-studies-integration',
    chapterId: 'political-map',
    chapterTitle: "Reshaping India's Political Map",
    icon: '🗡️',
    title: '7. Case Studies in Accession: Junagadh, Hyderabad & Kashmir',
    difficulty: 'Hard',
    readTime: '9 min',
    preview: 'Examine the dramatic accession stories of the three princely states that resisted initial integration: Junagadh, Hyderabad, and Jammu & Kashmir.',
    contentHtml: `
      <p>While most princely states signed the Instrument of Accession smoothly, three key states posed severe diplomatic and military complications.</p>

      <h3>1. Junagadh (Gujarat)</h3>
      <p>The Nawab of Junagadh opted to accede to Pakistan despite Junagadh being geographically surrounded by Indian territory with an overwhelmingly Hindu population desiring to join India. Citizens revolted, formed a provisional government (Arzi Hukumat), and forced the Nawab to flee. A democratic plebiscite (referendum) was conducted in February 1948, where over 99% of citizens voted to join India.</p>

      <h3>2. Hyderabad (Operation Polo)</h3>
      <p>Hyderabad was the largest and wealthiest princely state, ruled by Nizam Mir Osman Ali Khan. The Nizam desired independence and unleashed a ruthless paramilitary force called the <em>Razakars</em> upon citizens protesting for union with India. In September 1948, the Indian Army initiated <strong>Operation Polo</strong> (a 5-day police action), restoring order and integrating Hyderabad into India.</p>

      <h3>3. Jammu & Kashmir</h3>
      <p>Ruled by Maharaja Hari Singh, J&K initially remained neutral. However, in October 1947, armed tribal raiders backed by the Pakistani army invaded J&K. Facing military collapse, Maharaja Hari Singh appealed to India and signed the <strong>Instrument of Accession</strong> on October 26, 1947. Indian troops were airlifted to Srinagar, securing Kashmir Valley and establishing J&K as an integral part of India.</p>
    `
  },
  {
    id: 'ch2-states-reorganisation-act',
    chapterId: 'political-map',
    chapterTitle: "Reshaping India's Political Map",
    icon: '📜',
    title: '8. States Reorganisation Commission (SRC 1953) & Act of 1956',
    difficulty: 'Hard',
    readTime: '9 min',
    preview: "Explore the reorganization of Indian state boundaries along linguistic lines following Potti Sreeramulu's martyrdom and the recommendations of the Fazl Ali Commission.",
    contentHtml: `
      <p>Initial state boundaries in 1950 were classified into Part A, B, C, and D states based on historical colonial convenience rather than linguistic unity. Citizens demanded state boundaries aligned with regional languages.</p>

      <div class="callout callout-important">
        <div class="callout-title">⚡ The Catalyst: Andhra Movement (1952)</div>
        Telugu-speaking people in Madras State demanded a separate state for Telugu speakers. Veteran freedom fighter <strong>Potti Sreeramulu</strong> undertook a fast unto death, passing away after 56 days. Widespread public anger compelled Prime Minister Jawaharlal Nehru to announce the creation of <strong>Andhra State</strong> on October 1, 1953—India's first language-based state.
      </div>

      <h3>The Fazl Ali Commission (SRC 1953)</h3>
      <p>In December 1953, the central government appointed the <strong>States Reorganisation Commission (SRC)</strong> consisting of:</p>
      <ul>
        <li><strong>Justice Fazl Ali</strong> (Chairman)</li>
        <li><strong>H.N. Kunzru</strong> (Member)</li>
        <li><strong>K.M. Panikkar</strong> (Member)</li>
      </ul>

      <h3>The States Reorganisation Act 1956</h3>
      <p>Based on the SRC recommendations, Parliament enacted the landmark <strong>States Reorganisation Act in 1956</strong> (and 7th Constitutional Amendment), abolishing Part A/B/C classification and redrawing India into:</p>
      <div class="formula-block">
        1956 Map = 14 States + 6 Union Territories (UTs)
      </div>
    `
  },

  // CHAPTER 5: UNIVERSAL ADULT FRANCHISE & ELECTORAL SYSTEM
  {
    id: 'ch5-adult-franchise-article326',
    chapterId: 'electoral-system',
    chapterTitle: 'Universal Adult Franchise & Electoral System',
    icon: '🗳️',
    title: '9. Universal Adult Franchise & Article 326 of Indian Constitution',
    difficulty: 'Easy',
    readTime: '7 min',
    preview: 'Understand the revolutionary constitutional principle granting equal voting rights to every adult citizen regardless of gender, caste, religion, wealth, or literacy.',
    contentHtml: `
      <p>When India adopted its Constitution on January 26, 1950, it took a revolutionary step that many Western democracies took centuries to achieve: granting immediate, equal voting rights to all adult citizens.</p>

      <div class="callout callout-definition">
        <div class="callout-title">📖 Universal Adult Franchise (Suffrage)</div>
        The democratic principle that every citizen of a country who has attained a specified minimum age has the right to vote in democratic elections without any discrimination based on caste, creed, religion, gender, literacy, or wealth status.
      </div>

      <div class="callout callout-important">
        <div class="callout-title">📜 Article 326 of the Constitution of India</div>
        Elections to the House of the People (Lok Sabha) and to the Legislative Assemblies (Vidhan Sabha) of every State shall be on the basis of adult suffrage; that is to say, every person who is a citizen of India and who is not less than <strong>18 years of age</strong> shall be entitled to be registered as a voter.
      </div>

      <h3>Evolution of Voting Age in India</h3>
      <table>
        <thead>
          <tr><th>Era / Amendment</th><th>Minimum Voting Age</th><th>Key Milestone</th></tr>
        </thead>
        <tbody>
          <tr><td>1950 – 1988</td><td>21 Years</td><td>Original Constitutional Voting Age</td></tr>
          <tr><td>61st Constitutional Amendment Act (1988)</td><td>18 Years</td><td>Enacted under Rajiv Gandhi govt; came into effect on March 28, 1989 to empower youth.</td></tr>
        </tbody>
      </table>
    `
  },
  {
    id: 'ch5-election-commission-eci',
    chapterId: 'electoral-system',
    chapterTitle: 'Universal Adult Franchise & Electoral System',
    icon: '⚖️',
    title: '10. Structure & Constitutional Authority of Election Commission (ECI)',
    difficulty: 'Medium',
    readTime: '8 min',
    preview: 'Explore Article 324, the independent multi-member structure of the Election Commission of India, and its powers in conducting free and fair democratic elections.',
    contentHtml: `
      <p>To ensure that elections are not manipulated by ruling political parties, the Constitution of India established an autonomous constitutional authority under <strong>Article 324</strong>: the <strong>Election Commission of India (ECI)</strong>.</p>

      <div class="callout callout-important">
        <div class="callout-title">🏛️ Article 324 Mandate</div>
        The superintendence, direction, and control of the preparation of electoral rolls for, and the conduct of, all elections to Parliament and State Legislatures, and to offices of President and Vice-President, shall be vested in the Election Commission.
      </div>

      <h3>Composition of ECI</h3>
      <ul>
        <li><strong>Chief Election Commissioner (CEC):</strong> Heads the commission.</li>
        <li><strong>Two Election Commissioners (ECs):</strong> Equal voting power with CEC in decision-making.</li>
      </ul>

      <h3>Core Responsibilities of ECI</h3>
      <ol>
        <li><strong>Electoral Rolls Preparation:</strong> Updating voter lists continuously to register new 18-year-old voters and remove deceased names.</li>
        <li><strong>Election Scheduling:</strong> Announcing notification dates, polling phases, and counting days.</li>
        <li><strong>Political Party Recognition:</strong> Allotting official election symbols (e.g., Lotus, Hand, Elephant, Broom) to national and state recognized parties.</li>
        <li><strong>Enforcing Model Code of Conduct (MCC):</strong> Monitoring campaign expenditures, speeches, and preventing government machinery misuse.</li>
      </ol>
    `
  },
  {
    id: 'ch5-evm-vvpat-evolution',
    chapterId: 'electoral-system',
    chapterTitle: 'Universal Adult Franchise & Electoral System',
    icon: '📟',
    title: '11. Voting Technology: Paper Ballots to EVMs & VVPAT',
    difficulty: 'Medium',
    readTime: '7 min',
    preview: 'Learn how India transitioned from paper ballot stamps to Electronic Voting Machines (EVMs) and Voter Verifiable Paper Audit Trail (VVPAT) for transparent voting.',
    contentHtml: `
      <p>Conducting elections for nearly 1 billion eligible voters is the largest logistical administrative operation on Earth. Technology has transformed Indian voting transparency.</p>

      <h3>Evolution of Voting Systems</h3>
      <ol>
        <li><strong>Paper Ballot Era (1951 – 1990s):</strong> Voters stamped physical ink seals next to party symbols on paper ballot sheets and dropped them into steel ballot boxes. Counting took days, and paper theft or ballot box stuffing occurred in vulnerable booths.</li>
        <li><strong>Electronic Voting Machine (EVM) Era:</strong> Developed by BEL (Bharat Electronics Ltd) and ECIL (Electronics Corporation of India Ltd). First used in Paravur constituency (Kerala) in 1982; implemented nationwide in the 2004 General Elections.</li>
        <li><strong>VVPAT Era (Voter Verifiable Paper Audit Trail):</strong> Introduced in 2013 (Nagaland) and fully integrated nationwide in 2019. When a voter presses a blue button on the EVM, the connected VVPAT machine prints a paper slip showing candidate name, serial number, and symbol for <strong>7 seconds</strong> behind a sealed glass window before automatically dropping into a locked tamper-proof box.</li>
      </ol>
    `
  },
  {
    id: 'ch5-election-cycle-process',
    chapterId: 'electoral-system',
    chapterTitle: 'Universal Adult Franchise & Electoral System',
    icon: '🔄',
    title: '12. The Complete Election Lifecycle & Democratic Voting Ethics',
    difficulty: 'Medium',
    readTime: '8 min',
    preview: 'Step-by-step walkthrough of the 7 stages of Indian elections: Notification, Nomination, Scrutiny, Withdrawal, Campaigning, Secret Ballot Voting, and Counting.',
    contentHtml: `
      <p>An Indian election follows a strict legal lifecycle governed by the Representation of the People Act, 1951.</p>

      <h3>The 7 Stages of the Electoral Process</h3>
      <div class="callout callout-activity">
        <ol>
          <li><strong>Notification:</strong> ECI issues official election notification on President/Governor order.</li>
          <li><strong>Nomination Filing:</strong> Candidates submit nomination papers and financial/criminal disclosure affidavits along with security deposits.</li>
          <li><strong>Scrutiny of Nominations:</strong> Returning Officers (RO) verify paperwork validity.</li>
          <li><strong>Withdrawal of Candidature:</strong> Candidates get a deadline window to withdraw nominations.</li>
          <li><strong>Campaigning:</strong> Parties hold rallies, distribute manifestos, and broadcast media ads. Campaigning must stop <strong>48 hours before voting ends</strong> (Silence Period).</li>
          <li><strong>Secret Ballot Polling:</strong> Voters cast secret votes at local polling stations manned by Presiding Officers.</li>
          <li><strong>Counting & Declaration of Results:</strong> EVM votes counted under observer supervision; winner receives Certificate of Election.</li>
        </ol>
      </div>
    `
  },

  // CHAPTER 7: FACTORS OF PRODUCTION
  {
    id: 'ch7-intro-factors-production',
    chapterId: 'factors-production',
    chapterTitle: 'Factors of Production & Economic Systems',
    icon: '🏭',
    title: '13. What are Factors of Production & The Four Fundamental Pillars',
    difficulty: 'Easy',
    readTime: '7 min',
    preview: 'Introduction to economic production. Learn how Land, Labour, Capital, and Entrepreneurship work together to manufacture goods and provide services.',
    contentHtml: `
      <p>Every single economic good or service created in an economy—whether a loaf of bread, a smartphone, a haircut, or a software app—requires the combination of inputs called <strong>Factors of Production</strong>.</p>

      <div class="callout callout-definition">
        <div class="callout-title">📖 Factors of Production</div>
        The economic resources or inputs required to produce goods and services to satisfy human needs.
      </div>

      <div class="formula-block">
        Total Output (Production) = Function of (Land + Labour + Capital + Entrepreneurship)
      </div>

      <h3>The Four Factors & Their Economic Rewards</h3>
      <table>
        <thead>
          <tr><th>Factor of Production</th><th>Nature of Input</th><th>Primary Reward / Income</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>1. Land</strong></td><td>All natural resources provided by Earth (soil, water, minerals, forests)</td><td><strong>Rent</strong></td></tr>
          <tr><td><strong>2. Labour</strong></td><td>Human physical and mental effort exerted in production</td><td><strong>Wages / Salary</strong></td></tr>
          <tr><td><strong>3. Capital</strong></td><td>Man-made physical assets & financial tools (machinery, factory, cash)</td><td><strong>Interest</strong></td></tr>
          <tr><td><strong>4. Entrepreneurship</strong></td><td>Human initiative that combines land, labour, and capital while bearing risk</td><td><strong>Profit</strong></td></tr>
        </tbody>
      </table>

      <div class="callout callout-important">
        <div class="callout-title">⭐ Interdependence Principle</div>
        No single factor can produce anything in isolation. Land without labour produces no crops; labour without machinery (capital) has low productivity; capital without an entrepreneur lies idle in bank vaults.
      </div>
    `
  },
  {
    id: 'ch7-land-natural-factor',
    chapterId: 'factors-production',
    chapterTitle: 'Factors of Production & Economic Systems',
    icon: '🌾',
    title: '14. Land — The Primary Gift of Nature',
    difficulty: 'Easy',
    readTime: '6 min',
    preview: 'Explore Land as a factor of production. Characteristics of land: limited supply, passive factor, geographically immobile, and heterogeneous quality.',
    contentHtml: `
      <p>In economics, <strong>Land</strong> means far more than mere soil or real estate plots. It encompasses all free gifts of Nature available above, on, or below Earth's surface.</p>

      <h3>What Does Land Include?</h3>
      <ul>
        <li><strong>Surface Land:</strong> Agricultural fields, factory sites, forest cover, mountains.</li>
        <li><strong>Sub-Surface Resources:</strong> Coal reserves, iron ore, petroleum crude, natural gas, groundwater.</li>
        <li><strong>Atmospheric & Water Resources:</strong> Sunlight, rainfall, wind energy, rivers, ocean fisheries.</li>
      </ul>

      <h3>Key Economic Characteristics of Land</h3>
      <ol>
        <li><strong>Fixed & Limited Supply:</strong> Earth's total land area cannot be increased by human effort.</li>
        <li><strong>Passive Input:</strong> Land cannot produce output by itself until human labour and capital are applied.</li>
        <li><strong>Geographical Immobility:</strong> A plot of agricultural land in Punjab cannot be physically relocated to Mumbai.</li>
        <li><strong>Heterogeneity (Variation in Quality):</strong> Soil fertility, mineral richness, and climate vary across locations.</li>
      </ol>
    `
  },
  {
    id: 'ch7-labour-human-effort',
    chapterId: 'factors-production',
    chapterTitle: 'Factors of Production & Economic Systems',
    icon: '👷',
    title: '15. Labour — Physical vs. Mental Effort & Productivity',
    difficulty: 'Medium',
    readTime: '7 min',
    preview: 'Understand Labour as an active factor. Examine Physical vs Mental Labour, characteristics of labour, and factors influencing worker productivity.',
    contentHtml: `
      <p><strong>Labour</strong> represents the human effort—both physical and intellectual—directed toward economic production in exchange for monetary remuneration (wages).</p>

      <h3>Two Types of Labour</h3>
      <ul>
        <li><strong>Physical (Manual) Labour:</strong> Work requiring primarily muscular effort and physical stamina (e.g., construction workers, farm harvesters, rickshaw pullers).</li>
        <li><strong>Mental (Intellectual) Labour:</strong> Work requiring cognitive skills, analysis, creativity, and knowledge (e.g., software engineers, surgeons, teachers, accountants).</li>
      </ul>

      <div class="callout callout-important">
        <div class="callout-title">⭐ Distinct Characteristics of Labour</div>
        <br>1. <strong>Perishable Nature:</strong> Unworked labour time is lost forever. An unemployed day cannot be stored or recovered later.
        <br>2. <strong>Inseparable from the Labourer:</strong> A worker must be physically or digitally present to perform work.
        <br>3. <strong>Active Factor:</strong> Labour activates passive land and capital.
      </div>
    `
  },
  {
    id: 'ch7-human-capital-investment',
    chapterId: 'factors-production',
    chapterTitle: 'Factors of Production & Economic Systems',
    icon: '🧠',
    title: '16. Human Capital — Investing in Education & Health',
    difficulty: 'Hard',
    readTime: '8 min',
    preview: 'Learn how raw human labour transforms into productive Human Capital through sustained investments in education, skill training, and healthcare.',
    contentHtml: `
      <p>Raw human population is not automatically productive. Raw labour transforms into <strong>Human Capital</strong> when society invests heavily in education, healthcare, technical skills, and nutritional well-being.</p>

      <div class="callout callout-definition">
        <div class="callout-title">📖 Human Capital</div>
        The accumulated knowledge, skills, health, expertise, and capabilities embodied in a nation's workforce that enable them to produce economic value.
      </div>

      <h3>Comparison: Raw Labour vs. Human Capital</h3>
      <table>
        <thead>
          <tr><th>Attribute</th><th>Raw Labour</th><th>Human Capital</th></tr>
        </thead>
        <tbody>
          <tr><td>Level of Skill</td><td>Unskilled / Basic physical strength</td><td>Highly skilled, educated, & specialized</td></tr>
          <tr><td>Productivity</td><td>Low output per working hour</td><td>High output per working hour via technology</td></tr>
          <tr><td>Economic Value</td><td>Low wage earning capacity</td><td>High wage & innovation creation capacity</td></tr>
          <tr><td>Example</td><td>Manual ditch digger without tools</td><td>Civil engineer operating computerized excavator</td></tr>
        </tbody>
      </table>

      <h3>Key Pillars of Human Capital Development</h3>
      <ul>
        <li><strong>Education & Literacy:</strong> Builds problem-solving abilities and scientific comprehension.</li>
        <li><strong>Vocational Skill Training:</strong> Hands-on technical competence (ITIs, coding bootcamps, apprenticeships).</li>
        <li><strong>Healthcare & Preventive Medicine:</strong> Healthy workers take fewer sick leaves, live longer, and maintain high physical and mental stamina.</li>
      </ul>
    `
  },
  {
    id: 'ch7-facilitators-kaizen',
    chapterId: 'factors-production',
    chapterTitle: 'Factors of Production & Economic Systems',
    icon: '🏥',
    title: '17. Facilitators of Human Capital & Japanese Kaizen Philosophy',
    difficulty: 'Medium',
    readTime: '7 min',
    preview: 'Discover healthcare as a productive investment, social environments, and the famous Japanese Kaizen philosophy of continuous workplace improvement.',
    contentHtml: `
      <p>Human capital development requires enabling social institutions and productivity philosophies.</p>

      <h3>Healthcare as an Economic Investment</h3>
      <p>Healthcare expenditure is not merely consumption; it is a direct capital investment. Healthy children attend school regularly, absorb lessons faster, and grow into highly productive adult workers.</p>

      <div class="callout callout-important">
        <div class="callout-title">🇯🇵 Japanese Kaizen Philosophy (Continuous Improvement)</div>
        <strong>Kaizen</strong> (Kai = Change, Zen = Good) is a Japanese business philosophy of continuous, incremental improvement in manufacturing quality, worker efficiency, and workplace safety involving every employee from factory line workers to CEOs.
        <br>Instead of waiting for massive expensive overhauls, workers suggest tiny daily improvements that compound into enormous productivity gains over time.
      </div>
    `
  },
  {
    id: 'ch7-demographic-dividend-india',
    chapterId: 'factors-production',
    chapterTitle: 'Factors of Production & Economic Systems',
    icon: '🇮🇳',
    title: "18. India's Demographic Dividend & Youth Potential",
    difficulty: 'Hard',
    readTime: '8 min',
    preview: "Understand demographic transition, working-age ratio, and how India's young workforce offers an unprecedented economic growth window up to 2055.",
    contentHtml: `
      <p>India currently enjoys a unique historic economic advantage known as the <strong>Demographic Dividend</strong>.</p>

      <div class="callout callout-definition">
        <div class="callout-title">📖 Demographic Dividend</div>
        The economic growth potential that results when a nation's share of working-age population (ages 15 to 64) is significantly larger than the non-working dependent population (children under 15 and elderly over 65).
      </div>

      <div class="formula-block">
        Dependency Ratio = [(Population under 15 + Population over 65) / Working-Age Population (15-64)] × 100
      </div>

      <h3>Why is India's Demographic Dividend Crucial?</h3>
      <ul>
        <li><strong>Average Age:</strong> India's median age is ~28 years, compared to 38 in the US/China and 48 in Japan.</li>
        <li><strong>Window of Opportunity:</strong> This favorable demographic window will last until roughly 2055.</li>
        <li><strong>Required Pre-conditions:</strong> To unlock this dividend, India must provide quality education, skill training (Skill India), healthcare, and expand employment opportunities. Otherwise, a youth bulge without jobs risks turning into a demographic liability.</li>
      </ul>
    `
  },
  {
    id: 'ch7-capital-fixed-working',
    chapterId: 'factors-production',
    chapterTitle: 'Factors of Production & Economic Systems',
    icon: '💰',
    title: '19. Capital — Physical, Financial, Fixed & Working Capital',
    difficulty: 'Medium',
    readTime: '7 min',
    preview: 'Master Capital as a produced factor of production. Differentiate clearly between Fixed Capital (machinery, buildings) and Working Capital (raw materials, cash).',
    contentHtml: `
      <p><strong>Capital</strong> refers to all man-made assets, tools, equipment, buildings, and financial resources used in the production of further goods and services.</p>

      <div class="callout callout-important">
        <div class="callout-title">⭐ Two Main Types of Physical Capital</div>
        <ul>
          <li>
            <strong>1. Fixed Capital:</strong>
            <p>Assets, tools, machines, computers, and factory buildings that can be used repeatedly in production over many years. They do not get exhausted in a single production run (e.g., a farmer's tractor, a weaver's loom, a bakery oven).</p>
          </li>
          <li>
            <strong>2. Working Capital:</strong>
            <p>Raw materials and liquidity (cash in hand) that are used up or converted during a single production cycle (e.g., cotton yarn for cloth, seeds & fertilizers for farming, cash to pay daily worker wages).</p>
          </li>
        </ul>
      </div>

      <h3>Comparison Matrix</h3>
      <table>
        <thead>
          <tr><th>Feature</th><th>Fixed Capital</th><th>Working Capital</th></tr>
        </thead>
        <tbody>
          <tr><td>Lifespan</td><td>Long-term (Years / Decades)</td><td>Short-term (Single production cycle)</td></tr>
          <tr><td>Exhaustion</td><td>Used repeatedly without vanishing</td><td>Consumed/transformed completely into product</td></tr>
          <tr><td>Examples</td><td>Baking Oven, Factory Building, Tractor</td><td>Flour, Sugar, Electricity Bill Cash</td></tr>
        </tbody>
      </table>
    `
  },
  {
    id: 'ch7-entrepreneurship-startups',
    chapterId: 'factors-production',
    chapterTitle: 'Factors of Production & Economic Systems',
    icon: '💡',
    title: '20. Entrepreneurship — Innovation, Risk-Taking & Startups',
    difficulty: 'Hard',
    readTime: '8 min',
    preview: 'Discover Entrepreneurship as the fourth factor. Learn the role of risk-takers, visionaries like J.R.D. Tata, innovation, and startup ecosystems.',
    contentHtml: `
      <p>Land, Labour, and Capital cannot produce anything by themselves. They require a visionary human catalyst: the <strong>Entrepreneur</strong>.</p>

      <div class="callout callout-definition">
        <div class="callout-title">📖 Entrepreneurship</div>
        The capability and willingness to organize, combine, and manage land, labour, and capital, introduce innovations, and assume business risks in pursuit of profit and societal value.
      </div>

      <h3>Core Functions of an Entrepreneur</h3>
      <ol>
        <li><strong>Organizing Factors:</strong> Assembling land, hiring workers, and securing capital equipment.</li>
        <li><strong>Bearing Uncertainty & Risk:</strong> Taking financial risks because future sales, costs, and profits are never guaranteed.</li>
        <li><strong>Innovating (Schumpeterian Innovation):</strong> Introducing new products, new production technology, or tapping new markets.</li>
        <li><strong>Creating Employment:</strong> Startup ventures generate new jobs for the broader workforce.</li>
      </ol>

      <div class="callout callout-activity">
        <div class="callout-title">🏆 Inspiring Case Study: J.R.D. Tata</div>
        <strong>Jehangir Ratanji Dadabhoy Tata (J.R.D. Tata)</strong> pioneered Indian civil aviation (founding Tata Airlines / Air India in 1932) and built Tata Motors and TCS, proving that ethical entrepreneurship creates nation-building institutions.
      </div>
    `
  },
  {
    id: 'ch7-supply-chains-sustainability',
    chapterId: 'factors-production',
    chapterTitle: 'Factors of Production & Economic Systems',
    icon: '🌐',
    title: '21. Global Supply Chains, Disruptions & Sustainable Production',
    difficulty: 'Hard',
    readTime: '9 min',
    preview: 'Trace the step-by-step supply chain journey of products from raw natural resources to end consumers. Understand disruptions, bottlenecks, and sustainable supply chains.',
    contentHtml: `
      <p>Modern economic products rarely come from a single factory. They pass through intricate networks called <strong>Supply Chains</strong>.</p>

      <div class="callout callout-definition">
        <div class="callout-title">📖 Supply Chain</div>
        The complete sequence of processes involved in the production and distribution of a commodity, from raw natural resource extraction to final customer delivery.
      </div>

      <h3>5 Stages of a Chocolate Bar Supply Chain</h3>
      <div class="callout callout-activity">
        <ol>
          <li><strong>Raw Natural Resource Extraction:</strong> Cocoa farmers harvest cocoa pods on farms in Ghana; dairy cows produce milk in Anand, Gujarat.</li>
          <li><strong>Processing & Refining:</strong> Cocoa beans roasted and ground into cocoa butter; milk pasteurized and powdered.</li>
          <li><strong>Manufacturing (Capital & Labour):</strong> Industrial factory mixes cocoa butter, sugar, and milk powder into chocolate bars.</li>
          <li><strong>Logistics & Warehousing:</strong> Refrigerated trucks transport packaged chocolate to regional distribution centers.</li>
          <li><strong>Retail Sale:</strong> Local kirana store or supermarket sells the chocolate bar to the consumer.</li>
        </ol>
      </div>

      <h3>Supply Chain Disruptions</h3>
      <p>Events like natural disasters, geopolitical conflict, shipping canal blockages (e.g., Suez Canal), or global pandemics interrupt supply flows, leading to shortages and price inflation.</p>
    `
  }
];


const FLASHCARDS = [
  {
    "topic": "Natural Resources",
    "q": "What is Nature?",
    "a": "Everything that exists naturally on Earth without human creation, comprising biotic (living) and abiotic (non-living) elements."
  },
  {
    "topic": "Natural Resources",
    "q": "What is a Resource?",
    "a": "Anything present in nature that has utility, value, and satisfies human needs."
  },
  {
    "topic": "Natural Resources",
    "q": "When does Nature become a Resource?",
    "a": "Only when humans discover its utility and possess the technology to extract and process it."
  },
  {
    "topic": "Natural Resources",
    "q": "What are the 3 mandatory conditions for resource status?",
    "a": "Technological Accessibility, Economic Feasibility, and Cultural Acceptability (The TEC Rule)."
  },
  {
    "topic": "Natural Resources",
    "q": "What are Biotic Resources?",
    "a": "Resources derived from living organisms or organic matter, such as forests, crops, wildlife, coal, and petroleum."
  },
  {
    "topic": "Natural Resources",
    "q": "What are Abiotic Resources?",
    "a": "Resources derived from non-living inorganic matter, such as land, rocks, water, air, and minerals."
  },
  {
    "topic": "Natural Resources",
    "q": "What are Renewable Resources?",
    "a": "Resources that replenish naturally through physical, chemical, or biological cycles within a human timeframe (e.g. solar energy, wind, freshwater)."
  },
  {
    "topic": "Natural Resources",
    "q": "What are Non-Renewable Resources?",
    "a": "Resources formed over millions of geological years that cannot be replenished once exhausted (e.g. coal, crude oil, iron ore)."
  },
  {
    "topic": "Natural Resources",
    "q": "What is the territorial sea limit for national resources?",
    "a": "12 nautical miles from a country's coastline."
  },
  {
    "topic": "Natural Resources",
    "q": "What is the Exclusive Economic Zone (EEZ)?",
    "a": "Sea area extending up to 200 nautical miles from coastline where a country holds exclusive economic rights."
  },
  {
    "topic": "Natural Resources",
    "q": "What are Individual Resources?",
    "a": "Resources privately owned by individuals, such as personal houses, plots, and private wells."
  },
  {
    "topic": "Natural Resources",
    "q": "What are Community Resources?",
    "a": "Resources accessible to all members of a community, like public parks and village grazing grounds."
  },
  {
    "topic": "Natural Resources",
    "q": "What are National Resources?",
    "a": "Resources belonging to the nation state within political boundaries and 12 nautical miles of territorial waters."
  },
  {
    "topic": "Natural Resources",
    "q": "What are International Resources?",
    "a": "Oceanic resources beyond 200 nautical miles of EEZ regulated by international treaty organizations."
  },
  {
    "topic": "Natural Resources",
    "q": "What are Potential Resources?",
    "a": "Resources found in a region that have not yet been utilized due to lack of technology or investment."
  },
  {
    "topic": "Natural Resources",
    "q": "What are Developed Resources?",
    "a": "Resources surveyed, quantified, and currently being utilized with existing technology."
  },
  {
    "topic": "Natural Resources",
    "q": "What are Stock Resources?",
    "a": "Materials in nature with potential to satisfy needs, but humans lack technology to use them (e.g. hydrogen fuel from water)."
  },
  {
    "topic": "Natural Resources",
    "q": "What are Reserves?",
    "a": "Subsets of stock resources that can be put into use with existing technology but are saved for future needs."
  },
  {
    "topic": "Natural Resources",
    "q": "What is Sustainable Development?",
    "a": "Development that meets present needs without compromising the ability of future generations to meet their own needs."
  },
  {
    "topic": "Natural Resources",
    "q": "What are Ecosystem Services?",
    "a": "Essential natural functions provided by ecosystems: provisioning, regulating, supporting, and cultural services."
  },
  {
    "topic": "Natural Resources",
    "q": "What are Provisioning Services?",
    "a": "Direct natural products supplied to humans, such as food, clean water, timber, and medicinal plants."
  },
  {
    "topic": "Natural Resources",
    "q": "What are Regulating Services?",
    "a": "Natural climate regulation, flood control, water purification, and crop pollination by ecosystems."
  },
  {
    "topic": "Natural Resources",
    "q": "What are Supporting Services?",
    "a": "Underlying ecosystem processes like soil formation, nutrient cycling, and oxygen production."
  },
  {
    "topic": "Natural Resources",
    "q": "What are Cultural Services?",
    "a": "Non-material benefits from nature: aesthetic enjoyment, spiritual connection, and eco-tourism."
  },
  {
    "topic": "Natural Resources",
    "q": "What is a Ubiquitous Resource?",
    "a": "A resource found everywhere on Earth, such as air (oxygen) and sunlight."
  },
  {
    "topic": "Natural Resources",
    "q": "What is a Localized Resource?",
    "a": "A resource found only in specific geographical locations, like copper and iron ore deposits."
  },
  {
    "topic": "Natural Resources",
    "q": "What is Conservation of Resources?",
    "a": "Using natural resources carefully and giving them time to get renewed naturally."
  },
  {
    "topic": "Natural Resources",
    "q": "What is the 3R Principle?",
    "a": "Reduce consumption, Reuse materials, and Recycle waste products."
  },
  {
    "topic": "Natural Resources",
    "q": "Why is air considered a valuable resource?",
    "a": "Because it has life-sustaining value essential for human and biological survival."
  },
  {
    "topic": "Natural Resources",
    "q": "What is patenting?",
    "a": "The exclusive legal right granted over an invention, idea, or resource processing technique."
  },
  {
    "topic": "Natural Resources",
    "q": "How does technology transform substances into resources?",
    "a": "By enabling humans to extract, refine, and convert raw natural materials into useful items."
  },
  {
    "topic": "Natural Resources",
    "q": "What metal is extracted from Bauxite ore?",
    "a": "Aluminum alloy."
  },
  {
    "topic": "Natural Resources",
    "q": "What is Silica Sand used for?",
    "a": "Manufacturing glass and silicon semiconductor microchips for electronics."
  },
  {
    "topic": "Natural Resources",
    "q": "What is Hydroelectricity?",
    "a": "Electricity generated by harnessing the kinetic energy of fast-falling water through turbines."
  },
  {
    "topic": "Natural Resources",
    "q": "What is Geothermal Energy?",
    "a": "Heat energy trapped inside the Earth used to generate electricity."
  },
  {
    "topic": "Natural Resources",
    "q": "What is Afforestation?",
    "a": "Planting trees on barren or deforested land to restore forest cover."
  },
  {
    "topic": "Natural Resources",
    "q": "What is Rainwater Harvesting?",
    "a": "Collecting and storing rooftop rainwater to recharge groundwater aquifers and irrigate crops."
  },
  {
    "topic": "Natural Resources",
    "q": "What causes soil degradation?",
    "a": "Overuse of chemical fertilizers, deforestation, overgrazing, and soil erosion."
  },
  {
    "topic": "Natural Resources",
    "q": "What products are refined from Crude Oil?",
    "a": "Petrol, diesel, kerosene, LPG, asphalt, and petrochemical polymers."
  },
  {
    "topic": "Natural Resources",
    "q": "Why does India have immense solar energy potential?",
    "a": "Because of its geographical location in the tropical sunshine belt receiving year-round sunlight."
  },
  {
    "topic": "Political Map",
    "q": "How many Princely States existed in India in August 1947?",
    "a": "Over 565 semi-autonomous princely states."
  },
  {
    "topic": "Political Map",
    "q": "What was British Paramountcy?",
    "a": "The supreme political authority exercised by the British Crown over Indian Princely States."
  },
  {
    "topic": "Political Map",
    "q": "Who was known as the Iron Man of India?",
    "a": "Sardar Vallabhbhai Patel."
  },
  {
    "topic": "Political Map",
    "q": "Who was Secretary of the Ministry of States alongside Sardar Patel?",
    "a": "V.P. Menon."
  },
  {
    "topic": "Political Map",
    "q": "What is the Instrument of Accession (IoA)?",
    "a": "A legal document signed by princes joining India, ceding Defense, External Affairs, and Communications."
  },
  {
    "topic": "Political Map",
    "q": "What three options did the Indian Independence Act 1947 give princely rulers?",
    "a": "Join India, join Pakistan, or remain independent sovereign states."
  },
  {
    "topic": "Political Map",
    "q": "What were Privy Purses?",
    "a": "Tax-free state pensions guaranteed to princely rulers in exchange for merging their states into India."
  },
  {
    "topic": "Political Map",
    "q": "When were Privy Purses abolished in India?",
    "a": "In 1971 by the 26th Constitutional Amendment Act under Prime Minister Indira Gandhi."
  },
  {
    "topic": "Political Map",
    "q": "Which three princely states resisted initial accession to India?",
    "a": "Junagadh, Hyderabad, and Jammu & Kashmir."
  },
  {
    "topic": "Political Map",
    "q": "How was Junagadh integrated into India?",
    "a": "Through a democratic referendum (plebiscite) in February 1948 where over 99% voted to join India."
  },
  {
    "topic": "Political Map",
    "q": "What was Operation Polo?",
    "a": "A 5-day Indian Army police action in September 1948 that integrated Hyderabad into India."
  },
  {
    "topic": "Political Map",
    "q": "Who was the ruler of Hyderabad in 1948?",
    "a": "Nizam Mir Osman Ali Khan."
  },
  {
    "topic": "Political Map",
    "q": "Who were the Razakars?",
    "a": "A violent paramilitary force in Hyderabad that suppressed citizens protesting for union with India."
  },
  {
    "topic": "Political Map",
    "q": "Who signed the Instrument of Accession for Jammu & Kashmir?",
    "a": "Maharaja Hari Singh on October 26, 1947."
  },
  {
    "topic": "Political Map",
    "q": "What triggered Jammu & Kashmir's accession to India?",
    "a": "An invasion by armed tribal raiders backed by the Pakistani army in October 1947."
  },
  {
    "topic": "Political Map",
    "q": "What was the provisional government formed by Junagadh citizens called?",
    "a": "Arzi Hukumat."
  },
  {
    "topic": "Political Map",
    "q": "Who fasted unto death for the creation of Andhra State?",
    "a": "Potti Sreeramulu, who passed away after 56 days of fasting in 1952."
  },
  {
    "topic": "Political Map",
    "q": "What was the first linguistic state formed in independent India?",
    "a": "Andhra State on October 1, 1953."
  },
  {
    "topic": "Political Map",
    "q": "When was the States Reorganisation Commission (SRC) appointed?",
    "a": "In December 1953."
  },
  {
    "topic": "Political Map",
    "q": "Who was the Chairman of the States Reorganisation Commission?",
    "a": "Justice Fazl Ali."
  },
  {
    "topic": "Political Map",
    "q": "Who were the three members of SRC 1953?",
    "a": "Justice Fazl Ali, H.N. Kunzru, and K.M. Panikkar."
  },
  {
    "topic": "Political Map",
    "q": "When was the landmark States Reorganisation Act enacted?",
    "a": "In 1956."
  },
  {
    "topic": "Political Map",
    "q": "How many States and UTs were created under the States Reorganisation Act 1956?",
    "a": "14 States and 6 Union Territories."
  },
  {
    "topic": "Political Map",
    "q": "When was Bombay State split into Gujarat and Maharashtra?",
    "a": "In 1960, separating Gujarati and Marathi speakers."
  },
  {
    "topic": "Political Map",
    "q": "When was Nagaland created as India's 16th State?",
    "a": "In 1963."
  },
  {
    "topic": "Political Map",
    "q": "When was Punjab bifurcated into Punjab and Haryana?",
    "a": "In 1966 under the Shah Commission recommendations."
  },
  {
    "topic": "Political Map",
    "q": "When was Goa liberated from Portuguese rule?",
    "a": "In December 1961 through Operation Vijay."
  },
  {
    "topic": "Political Map",
    "q": "When did Goa become a full state of India?",
    "a": "In 1987."
  },
  {
    "topic": "Political Map",
    "q": "When were French enclaves (Pondicherry, Karaikal, Mahe, Yanam) merged into India?",
    "a": "In 1954 (de facto) and 1962 (de jure)."
  },
  {
    "topic": "Political Map",
    "q": "Which three new states were created in the year 2000?",
    "a": "Chhattisgarh (from MP), Uttarakhand (from UP), and Jharkhand (from Bihar)."
  },
  {
    "topic": "Political Map",
    "q": "When was Telangana formed as India's 29th State?",
    "a": "On June 2, 2014, bifurcated from Andhra Pradesh."
  },
  {
    "topic": "Political Map",
    "q": "When was Jammu & Kashmir reorganized into two Union Territories?",
    "a": "On October 31, 2019 (J&K UT and Ladakh UT)."
  },
  {
    "topic": "Political Map",
    "q": "How many States and Union Territories does India currently have?",
    "a": "28 States and 8 Union Territories."
  },
  {
    "topic": "Political Map",
    "q": "What was Part A, B, C, D state classification?",
    "a": "Post-1950 temporary administrative grouping of states abolished by SRC in 1956."
  },
  {
    "topic": "Political Map",
    "q": "What is a Union Territory?",
    "a": "An administrative division governed directly by the Central Government of India."
  },
  {
    "topic": "Political Map",
    "q": "Which Union Territories have elected Legislative Assemblies?",
    "a": "Delhi, Puducherry, and Jammu & Kashmir."
  },
  {
    "topic": "Political Map",
    "q": "Where is the Statue of Unity located?",
    "a": "Kevadia (Ekta Nagar), Gujarat, honoring Sardar Vallabhbhai Patel."
  },
  {
    "topic": "Political Map",
    "q": "What was PEPSU?",
    "a": "Patiala and East Punjab States Union (a post-1948 princely state union)."
  },
  {
    "topic": "Political Map",
    "q": "Why were linguistic states beneficial for Indian democracy?",
    "a": "They strengthened national integration, preserved regional language identity, and made administration accessible."
  },
  {
    "topic": "Political Map",
    "q": "Which Constitutional Amendment enacted the 1956 state reorganization?",
    "a": "7th Constitutional Amendment Act, 1956."
  },
  {
    "topic": "Electoral System",
    "q": "What is Universal Adult Franchise?",
    "a": "The democratic right of all adult citizens to vote in elections without discrimination based on caste, gender, religion, or wealth."
  },
  {
    "topic": "Electoral System",
    "q": "Which Article of the Constitution guarantees Universal Adult Franchise?",
    "a": "Article 326 of the Indian Constitution."
  },
  {
    "topic": "Electoral System",
    "q": "What is the current minimum voting age in India?",
    "a": "18 years of age."
  },
  {
    "topic": "Electoral System",
    "q": "Which constitutional amendment lowered the voting age from 21 to 18?",
    "a": "61st Constitutional Amendment Act, 1988 (came into effect in March 1989)."
  },
  {
    "topic": "Electoral System",
    "q": "Which Article establishes the Election Commission of India (ECI)?",
    "a": "Article 324 of the Indian Constitution."
  },
  {
    "topic": "Electoral System",
    "q": "Who heads the Election Commission of India?",
    "a": "The Chief Election Commissioner (CEC)."
  },
  {
    "topic": "Electoral System",
    "q": "How many Election Commissioners assist the CEC in decision-making?",
    "a": "Two Election Commissioners."
  },
  {
    "topic": "Electoral System",
    "q": "Who appoints the Chief Election Commissioner and Election Commissioners?",
    "a": "The President of India."
  },
  {
    "topic": "Electoral System",
    "q": "What is the tenure of the Chief Election Commissioner?",
    "a": "6 years or until reaching 65 years of age, whichever occurs earlier."
  },
  {
    "topic": "Electoral System",
    "q": "Who was the first Chief Election Commissioner of India?",
    "a": "Sukumar Sen (1950\u20131958)."
  },
  {
    "topic": "Electoral System",
    "q": "Who was the first woman Chief Election Commissioner of India?",
    "a": "V.S. Ramadevi (1990)."
  },
  {
    "topic": "Electoral System",
    "q": "What is an Electoral Roll?",
    "a": "The official list of eligible voters in a constituency (voter list)."
  },
  {
    "topic": "Electoral System",
    "q": "What does EPIC stand for?",
    "a": "Elector's Photo Identity Card issued by the ECI."
  },
  {
    "topic": "Electoral System",
    "q": "What does EVM stand for?",
    "a": "Electronic Voting Machine used for casting and counting votes electronically."
  },
  {
    "topic": "Electoral System",
    "q": "What does VVPAT stand for?",
    "a": "Voter Verifiable Paper Audit Trail machine connected to EVM."
  },
  {
    "topic": "Electoral System",
    "q": "How long does a VVPAT paper slip display behind the glass window?",
    "a": "7 seconds."
  },
  {
    "topic": "Electoral System",
    "q": "When were EVMs first used experimentally in India?",
    "a": "In 1982 in Paravur assembly constituency, Kerala."
  },
  {
    "topic": "Electoral System",
    "q": "When were EVMs used nationwide for the first time in Lok Sabha elections?",
    "a": "In the 2004 General Elections."
  },
  {
    "topic": "Electoral System",
    "q": "What is the Model Code of Conduct (MCC)?",
    "a": "A set of ethical guidelines issued by ECI for political parties and candidates during elections."
  },
  {
    "topic": "Electoral System",
    "q": "When does the Model Code of Conduct come into effect?",
    "a": "Immediately upon the official announcement of election dates by the ECI."
  },
  {
    "topic": "Electoral System",
    "q": "What is the Silence Period before voting ends?",
    "a": "48 hours before polling closes, during which all public election campaigning must stop."
  },
  {
    "topic": "Electoral System",
    "q": "What is a General Election?",
    "a": "Elections held every 5 years to elect members to the Lok Sabha or State Vidhan Sabhas."
  },
  {
    "topic": "Electoral System",
    "q": "What is a By-Election?",
    "a": "An election held to fill a casual vacancy in a single constituency caused by death or resignation."
  },
  {
    "topic": "Electoral System",
    "q": "What is a Mid-Term Election?",
    "a": "An election held when a legislative house is dissolved before completing its 5-year term."
  },
  {
    "topic": "Electoral System",
    "q": "What is an Electoral Constituency?",
    "a": "A specific geographical area whose registered voters elect a representative to a legislative body."
  },
  {
    "topic": "Electoral System",
    "q": "How many Lok Sabha constituencies are there in India?",
    "a": "543 elected constituencies."
  },
  {
    "topic": "Electoral System",
    "q": "What is a Reserved Constituency?",
    "a": "A constituency set aside exclusively for candidates belonging to SC or ST communities."
  },
  {
    "topic": "Electoral System",
    "q": "Who conducts elections at the district level?",
    "a": "The District Election Officer (DEO), usually the District Collector or Magistrate."
  },
  {
    "topic": "Electoral System",
    "q": "Who is the Returning Officer (RO)?",
    "a": "The official responsible for overseeing the election process in a specific constituency."
  },
  {
    "topic": "Electoral System",
    "q": "Who is the Presiding Officer?",
    "a": "The official in charge of a single polling station on election day."
  },
  {
    "topic": "Electoral System",
    "q": "What is NOTA?",
    "a": "None of the Above option on EVMs allowing voters to reject all contesting candidates."
  },
  {
    "topic": "Electoral System",
    "q": "When was NOTA introduced in Indian elections?",
    "a": "In 2013 following a landmark Supreme Court judgment."
  },
  {
    "topic": "Electoral System",
    "q": "What is a Secret Ballot?",
    "a": "A voting method ensuring that a voter's choice remains completely private and confidential."
  },
  {
    "topic": "Electoral System",
    "q": "What is a Recognized Political Party?",
    "a": "A party meeting ECI polling percentage standards, earning an exclusive reserved election symbol."
  },
  {
    "topic": "Electoral System",
    "q": "What is an Independent Candidate?",
    "a": "A candidate contesting an election without belonging to any registered political party."
  },
  {
    "topic": "Electoral System",
    "q": "What is an Election Affidavit?",
    "a": "A sworn legal document filed by candidates disclosing assets, liabilities, and criminal antecedents."
  },
  {
    "topic": "Electoral System",
    "q": "What is the term of office for Lok Sabha and Vidhan Sabha members?",
    "a": "5 years."
  },
  {
    "topic": "Electoral System",
    "q": "Which constitutional amendment reserved 33% seats for women in Parliament/Assemblies?",
    "a": "Nari Shakti Vandan Adhiniyam (106th Amendment Act, 2023)."
  },
  {
    "topic": "Electoral System",
    "q": "What is the maximum candidate expenditure limit for Lok Sabha in large states?",
    "a": "\u20b995 Lakhs."
  },
  {
    "topic": "Electoral System",
    "q": "What is cVIGIL?",
    "a": "An ECI mobile app enabling citizens to report Model Code of Conduct violations with geotagged photos."
  },
  {
    "topic": "Factors of Production",
    "q": "What are Factors of Production?",
    "a": "The economic inputs required to produce goods and services: Land, Labour, Capital, and Entrepreneurship."
  },
  {
    "topic": "Factors of Production",
    "q": "What is Land in economics?",
    "a": "All natural resources provided free by nature: soil, water, minerals, forests, sunlight, and air."
  },
  {
    "topic": "Factors of Production",
    "q": "What is the economic reward for Land?",
    "a": "Rent."
  },
  {
    "topic": "Factors of Production",
    "q": "What is Labour in economics?",
    "a": "Human physical and mental effort exerted in economic production for monetary remuneration."
  },
  {
    "topic": "Factors of Production",
    "q": "What is the economic reward for Labour?",
    "a": "Wages or Salary."
  },
  {
    "topic": "Factors of Production",
    "q": "What is Physical Capital?",
    "a": "Man-made tools, machinery, buildings, raw materials, and cash used in production."
  },
  {
    "topic": "Factors of Production",
    "q": "What is the economic reward for Capital?",
    "a": "Interest."
  },
  {
    "topic": "Factors of Production",
    "q": "What is Entrepreneurship?",
    "a": "The human capability to combine land, labour, and capital, introduce innovations, and bear business risks."
  },
  {
    "topic": "Factors of Production",
    "q": "What is the economic reward for Entrepreneurship?",
    "a": "Profit."
  },
  {
    "topic": "Factors of Production",
    "q": "What is Fixed Capital?",
    "a": "Long-term man-made assets used repeatedly over years, like machinery, factory buildings, and tractors."
  },
  {
    "topic": "Factors of Production",
    "q": "What is Working Capital?",
    "a": "Short-term assets consumed or converted during a single production cycle, like raw materials and cash."
  },
  {
    "topic": "Factors of Production",
    "q": "What is Human Capital?",
    "a": "The accumulated knowledge, skills, health, and expertise embodied in a nation's workforce."
  },
  {
    "topic": "Factors of Production",
    "q": "How does raw labour transform into Human Capital?",
    "a": "Through sustained investments in education, technical skill training, and healthcare."
  },
  {
    "topic": "Factors of Production",
    "q": "What is the Demographic Dividend?",
    "a": "Economic growth potential when working-age population (15-64) exceeds dependent population."
  },
  {
    "topic": "Factors of Production",
    "q": "What is the working-age population range?",
    "a": "15 to 64 years of age."
  },
  {
    "topic": "Factors of Production",
    "q": "What is Dependency Ratio?",
    "a": "The ratio of non-working dependents (under 15 & over 65) to the working-age population."
  },
  {
    "topic": "Factors of Production",
    "q": "What is India's median age?",
    "a": "Approximately 28 years."
  },
  {
    "topic": "Factors of Production",
    "q": "What is Japanese Kaizen philosophy?",
    "a": "A business philosophy of continuous, incremental workplace improvement involving every employee."
  },
  {
    "topic": "Factors of Production",
    "q": "Who was J.R.D. Tata?",
    "a": "A visionary Indian entrepreneur who founded Tata Airlines (Air India) and expanded Indian industry."
  },
  {
    "topic": "Factors of Production",
    "q": "What is a Supply Chain?",
    "a": "The full network of processes from raw natural resource extraction to final customer delivery."
  },
  {
    "topic": "Factors of Production",
    "q": "What is a Supply Chain Disruption?",
    "a": "An interruption in production or logistics caused by natural disasters, wars, or pandemics."
  },
  {
    "topic": "Factors of Production",
    "q": "What is Physical Labour?",
    "a": "Manual work requiring primarily physical strength and muscular stamina."
  },
  {
    "topic": "Factors of Production",
    "q": "What is Mental Labour?",
    "a": "Intellectual work requiring cognitive analysis, skill, and professional knowledge."
  },
  {
    "topic": "Factors of Production",
    "q": "Why is Labour perishable?",
    "a": "Because unworked labour time is lost forever and cannot be stored for later use."
  },
  {
    "topic": "Factors of Production",
    "q": "Why is Land geographically immobile?",
    "a": "Because land plots cannot be physically relocated from one location to another."
  },
  {
    "topic": "Factors of Production",
    "q": "What is Financial Capital?",
    "a": "Monetary funds and credit used to purchase physical capital assets."
  },
  {
    "topic": "Factors of Production",
    "q": "What is Technology in production?",
    "a": "The application of scientific knowledge to improve production efficiency and output quality."
  },
  {
    "topic": "Factors of Production",
    "q": "Is Technology a separate 5th factor of production?",
    "a": "Technically no; it is an enabler that enhances the productivity of all 4 factors."
  },
  {
    "topic": "Factors of Production",
    "q": "What is Automation?",
    "a": "The use of automatic machinery and software to perform tasks previously done manually."
  },
  {
    "topic": "Factors of Production",
    "q": "What is Artificial Intelligence (AI) in economics?",
    "a": "Computer systems performing complex tasks like data analysis, medical diagnosis, and robotics."
  },
  {
    "topic": "Factors of Production",
    "q": "What is a Startup?",
    "a": "A young innovative venture designed to scale rapidly with new business models."
  },
  {
    "topic": "Factors of Production",
    "q": "What is Upstream in a supply chain?",
    "a": "Early stages involving raw material extraction and component manufacturing."
  },
  {
    "topic": "Factors of Production",
    "q": "What is Downstream in a supply chain?",
    "a": "Late stages involving distribution, retail, and final sales to consumers."
  },
  {
    "topic": "Factors of Production",
    "q": "What is Skill India?",
    "a": "A government initiative aimed at training millions of Indian youth in technical vocational skills."
  },
  {
    "topic": "Factors of Production",
    "q": "What is Sustainable Production?",
    "a": "Manufacturing goods using methods that minimize environmental damage and resource depletion."
  }
];

const MCQS = [
  {
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
    "q": "Which of the following is an abiotic natural resource?",
    "opts": [
      "Forests",
      "Land and Minerals",
      "Livestock",
      "Crop plants"
    ],
    "ans": 1,
    "exp": "Land and minerals are abiotic resources because they derive from non-living inorganic matter."
  },
  {
    "q": "Which of the following is a biotic natural resource?",
    "opts": [
      "Silica sand",
      "Coal and Forests",
      "Iron ore",
      "Freshwater"
    ],
    "ans": 1,
    "exp": "Coal and forests are biotic resources because they originate from organic living matter."
  },
  {
    "q": "What rule specifies the three mandatory conditions for a substance to become a resource?",
    "opts": [
      "The 3R Rule",
      "The TEC Rule",
      "The ECI Rule",
      "The SRC Rule"
    ],
    "ans": 1,
    "exp": "The TEC Rule stands for Technological Accessibility, Economic Feasibility, and Cultural Acceptability."
  },
  {
    "q": "Resources found in a region that have not yet been utilized due to lack of technology or investment are called:",
    "opts": [
      "Developed Resources",
      "Potential Resources",
      "Biotic Resources",
      "Community Resources"
    ],
    "ans": 1,
    "exp": "Potential resources exist in a region but have not been developed or utilized yet."
  },
  {
    "q": "Which of the following is a non-renewable natural resource?",
    "opts": [
      "Solar energy",
      "Coal and Petroleum",
      "Freshwater",
      "Wind power"
    ],
    "ans": 1,
    "exp": "Coal and petroleum take millions of years to form in Earth's crust and cannot be replenished once exhausted."
  },
  {
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
    "q": "Resources regulated by international treaty organizations beyond 200 nautical miles of EEZ are:",
    "opts": [
      "National Resources",
      "International Resources",
      "Individual Resources",
      "Biotic Resources"
    ],
    "ans": 1,
    "exp": "International oceanic resources beyond the 200-nautical-mile EEZ require international agreement."
  },
  {
    "q": "Which ecosystem service category includes climate regulation and water purification?",
    "opts": [
      "Provisioning Services",
      "Regulating Services",
      "Supporting Services",
      "Cultural Services"
    ],
    "ans": 1,
    "exp": "Regulating services control natural processes like climate, floods, water purification, and pollination."
  },
  {
    "q": "The concept of meeting present needs without compromising future generations is called:",
    "opts": [
      "Resource Exploitation",
      "Sustainable Development",
      "Industrialization",
      "Urbanization"
    ],
    "ans": 1,
    "exp": "Sustainable development balances current consumption with conservation for future generations."
  },
  {
    "q": "Which metal is extracted from Bauxite ore?",
    "opts": [
      "Iron",
      "Aluminum",
      "Copper",
      "Gold"
    ],
    "ans": 1,
    "exp": "Bauxite is the primary mineral ore from which Aluminum metal is smelted."
  },
  {
    "q": "Silica sand is processed into microchips for electronics because it contains high purity:",
    "opts": [
      "Silicon",
      "Carbon",
      "Nitrogen",
      "Sulfur"
    ],
    "ans": 0,
    "exp": "Silica sand is refined into pure silicon semiconductors used in computer microchips."
  },
  {
    "q": "Hydroelectricity generates clean power by harnessing the kinetic energy of:",
    "opts": [
      "Wind gusts",
      "Fast-flowing water",
      "Geothermal steam",
      "Sunlight"
    ],
    "ans": 1,
    "exp": "Hydroelectric turbines convert the kinetic energy of flowing water into electric power."
  },
  {
    "q": "What is the process of planting trees on barren or deforested land called?",
    "opts": [
      "Deforestation",
      "Afforestation",
      "Erosion",
      "Mining"
    ],
    "ans": 1,
    "exp": "Afforestation is the deliberate planting of trees to create new forest cover."
  },
  {
    "q": "Which of the following is an example of an individual resource?",
    "opts": [
      "Public park",
      "Private farmland plot",
      "Railway network",
      "Open ocean"
    ],
    "ans": 1,
    "exp": "Private farmland owned by a farmer is an individual resource."
  },
  {
    "q": "Village grazing grounds and public burial sites are examples of:",
    "opts": [
      "Individual Resources",
      "Community Resources",
      "International Resources",
      "Stock Resources"
    ],
    "ans": 1,
    "exp": "Community resources are accessible to all residents in a local community."
  },
  {
    "q": "What term describes materials in nature that have energy potential but lack extraction tech?",
    "opts": [
      "Reserves",
      "Stock",
      "Potential",
      "Biotic"
    ],
    "ans": 1,
    "exp": "Stock refers to materials in nature that humans lack the technological capacity to harness currently."
  },
  {
    "q": "Hydrogen in ocean water is classified under which resource category currently?",
    "opts": [
      "Developed Resource",
      "Stock Resource",
      "Individual Resource",
      "Abiotic Resource"
    ],
    "ans": 1,
    "exp": "Ocean hydrogen is a stock resource because cheap commercial extraction technology is not yet widespread."
  },
  {
    "q": "Ecosystem services like soil formation and oxygen production are classified as:",
    "opts": [
      "Provisioning Services",
      "Supporting Services",
      "Cultural Services",
      "Regulating Services"
    ],
    "ans": 1,
    "exp": "Supporting services are underlying ecological processes essential for all life."
  },
  {
    "q": "Which of the following is a localized natural resource?",
    "opts": [
      "Air / Oxygen",
      "Sunlight",
      "Copper Ore",
      "Rainwater"
    ],
    "ans": 2,
    "exp": "Copper ore is localized because it occurs only in specific geographic mineral deposits."
  },
  {
    "q": "Which of the following is a ubiquitous natural resource?",
    "opts": [
      "Sunlight",
      "Petroleum",
      "Gold ore",
      "Diamond"
    ],
    "ans": 0,
    "exp": "Sunlight is ubiquitous because it is available everywhere across Earth's surface."
  },
  {
    "q": "What is the exclusive legal right granted over an invention or resource process called?",
    "opts": [
      "Patent",
      "Copyright",
      "Trademark",
      "Lease"
    ],
    "ans": 0,
    "exp": "A patent grants exclusive legal rights over an invention or technical processing method."
  },
  {
    "q": "What are the 3Rs of resource conservation?",
    "opts": [
      "Reduce, Reuse, Recycle",
      "Remove, Replace, Refine",
      "Read, Record, Remember",
      "Rebuild, Restock, Reopen"
    ],
    "ans": 0,
    "exp": "The 3Rs of conservation stand for Reduce, Reuse, and Recycle."
  },
  {
    "q": "Collecting rooftop rainwater for groundwater recharge and irrigation is called:",
    "opts": [
      "Rainwater Harvesting",
      "Damming",
      "Canalizing",
      "Desalination"
    ],
    "ans": 0,
    "exp": "Rainwater harvesting collects and stores rainfall to recharge aquifers and soil."
  },
  {
    "q": "What causes soil degradation in intensive agriculture?",
    "opts": [
      "Overuse of chemical fertilizers & erosion",
      "Organic composting",
      "Crop rotation",
      "Afforestation"
    ],
    "ans": 0,
    "exp": "Excessive chemical fertilizers, deforestation, and erosion degrade soil fertility."
  },
  {
    "q": "What is crude oil refined into in petroleum refineries?",
    "opts": [
      "Petrol, diesel, kerosene, LPG, asphalt",
      "Steel, iron, copper",
      "Paper and pulp",
      "Cellulose fiber"
    ],
    "ans": 0,
    "exp": "Crude petroleum yields petrol, diesel, kerosene, LPG, asphalt, and petrochemicals."
  },
  {
    "q": "Why does India possess immense solar energy potential?",
    "opts": [
      "Located in the tropical sunshine belt",
      "Located at the North Pole",
      "Surrounded by cold ocean currents",
      "Covered in rain clouds year-round"
    ],
    "ans": 0,
    "exp": "India receives year-round tropical sunlight due to its geographical location."
  },
  {
    "q": "Geothermal energy harnesses heat energy trapped inside:",
    "opts": [
      "Earth's interior crust",
      "Ocean waves",
      "Solar flares",
      "Wind turbines"
    ],
    "ans": 0,
    "exp": "Geothermal energy utilizes natural heat from Earth's deep interior crust."
  },
  {
    "q": "Which category of ecosystem services includes aesthetic enjoyment and eco-tourism?",
    "opts": [
      "Cultural Services",
      "Provisioning Services",
      "Regulating Services",
      "Supporting Services"
    ],
    "ans": 0,
    "exp": "Cultural services encompass non-material aesthetic, spiritual, and recreational benefits."
  },
  {
    "q": "What type of resource is solar power?",
    "opts": [
      "Renewable and Inexhaustible",
      "Non-renewable and Fossil",
      "Individual and Private",
      "Abiotic and Exhaustible"
    ],
    "ans": 0,
    "exp": "Solar power is a renewable, inexhaustible natural energy resource."
  },
  {
    "q": "Which entity regulates international ocean resources beyond 200 nautical miles?",
    "opts": [
      "International Treaty Organizations (UN)",
      "Private Corporations",
      "Individual Nations",
      "Local Gram Panchayats"
    ],
    "ans": 0,
    "exp": "International oceanic resources are regulated under UN international conventions."
  },
  {
    "q": "What is the main cause of deforestation?",
    "opts": [
      "Agricultural expansion and logging",
      "Rainfall",
      "Solar radiation",
      "Glacier melting"
    ],
    "ans": 0,
    "exp": "Clearing land for farming, timber logging, and urban development drive deforestation."
  },
  {
    "q": "What mineral is the main source of Iron metal?",
    "opts": [
      "Iron Ore (Hematite/Magnetite)",
      "Bauxite",
      "Gold Quartz",
      "Limestone"
    ],
    "ans": 0,
    "exp": "Iron ore is the natural mineral from which iron metal is extracted."
  },
  {
    "q": "What is a reserve in resource terminology?",
    "opts": [
      "A subset of stock usable with existing tech saved for future needs",
      "Waste material",
      "Imported goods",
      "Exported commodities"
    ],
    "ans": 0,
    "exp": "Reserves are surveyed resource stocks saved for future emergency or strategic needs."
  },
  {
    "q": "Which of the following is a non-metallic mineral resource?",
    "opts": [
      "Limestone and Mica",
      "Gold and Silver",
      "Iron and Copper",
      "Aluminum and Lead"
    ],
    "ans": 0,
    "exp": "Limestone and mica are non-metallic mineral resources."
  },
  {
    "q": "Which of the following is a metallic mineral resource?",
    "opts": [
      "Iron Ore and Copper",
      "Sand and Clay",
      "Coal and Petroleum",
      "Salt and Potash"
    ],
    "ans": 0,
    "exp": "Iron ore and copper are metallic mineral resources."
  },
  {
    "q": "What is sustainable development's primary goal regarding natural resources?",
    "opts": [
      "Balanced conservation for present & future generations",
      "Maximum immediate depletion",
      "Stopping all economic growth",
      "Exporting all raw materials"
    ],
    "ans": 0,
    "exp": "Sustainable development aims to balance current usage with long-term ecological conservation."
  },
  {
    "q": "Which human activity causes marine resource depletion?",
    "opts": [
      "Overfishing and ocean pollution",
      "Rainwater harvesting",
      "Solar power installation",
      "Organic farming"
    ],
    "ans": 0,
    "exp": "Overfishing and dumping plastic/industrial pollutants harm marine ecosystems."
  },
  {
    "q": "What renewable resource is replenished by the hydrological cycle?",
    "opts": [
      "Freshwater",
      "Crude Oil",
      "Coal",
      "Natural Gas"
    ],
    "ans": 0,
    "exp": "Freshwater is continuously recycled and replenished through precipitation and the hydrological cycle."
  },
  {
    "q": "What type of resource is cedar timber from a forest?",
    "opts": [
      "Biotic and Renewable",
      "Abiotic and Non-renewable",
      "International and Ocean",
      "Synthetic and Artificial"
    ],
    "ans": 0,
    "exp": "Wood timber is a biotic, renewable natural resource when managed sustainably."
  },
  {
    "q": "What transforms raw bauxite rock into usable aluminum cookware?",
    "opts": [
      "Metallurgical smelting & human technology",
      "Natural weathering",
      "Wind erosion",
      "Volcanic heat"
    ],
    "ans": 0,
    "exp": "Industrial smelting technology converts raw bauxite ore into pure aluminum metal."
  },
  {
    "q": "What type of resource is a privately owned groundwater well?",
    "opts": [
      "Individual Resource",
      "Community Resource",
      "International Resource",
      "National Ocean"
    ],
    "ans": 0,
    "exp": "A well on private property is an individual resource."
  },
  {
    "q": "What type of resource is a national highway network?",
    "opts": [
      "National Resource",
      "Individual Resource",
      "Abiotic International",
      "Biotic Reserve"
    ],
    "ans": 0,
    "exp": "National highways built within political borders are national resources."
  },
  {
    "q": "What is the primary benefit of afforestation?",
    "opts": [
      "Restoring forest cover & soil retention",
      "Increasing soil erosion",
      "Reducing oxygen levels",
      "Depleting groundwater"
    ],
    "ans": 0,
    "exp": "Afforestation restores biodiversity, absorbs carbon dioxide, and prevents soil erosion."
  },
  {
    "q": "What energy source uses fast winds to turn generator blades?",
    "opts": [
      "Wind Energy",
      "Geothermal",
      "Hydroelectric",
      "Biomass"
    ],
    "ans": 0,
    "exp": "Wind turbines harness atmospheric wind kinetic energy to generate electricity."
  },
  {
    "q": "What natural resource is essential for crop agriculture?",
    "opts": [
      "Fertile Topsoil & Water",
      "Crude Petroleum",
      "Bauxite Ore",
      "Silicon Sand"
    ],
    "ans": 0,
    "exp": "Fertile topsoil and freshwater are essential natural resources for farming."
  },
  {
    "q": "What is the term for wise, non-wasteful usage of resources?",
    "opts": [
      "Resource Conservation",
      "Resource Exploitation",
      "Resource Neglect",
      "Resource Hoarding"
    ],
    "ans": 0,
    "exp": "Resource conservation means using natural wealth wisely without waste."
  },
  {
    "q": "Which resource provides the primary energy for photosynthesis in plants?",
    "opts": [
      "Sunlight",
      "Coal",
      "Petroleum",
      "Uranium"
    ],
    "ans": 0,
    "exp": "Sunlight provides radiant solar energy driving photosynthesis."
  },
  {
    "q": "What natural resource is refined into kerosene and petrol?",
    "opts": [
      "Crude Petroleum Oil",
      "Iron Ore",
      "Bauxite Ore",
      "Limestone"
    ],
    "ans": 0,
    "exp": "Crude petroleum is refined into liquid fuels like petrol, diesel, and kerosene."
  },
  {
    "q": "What resource classification applies to wild animal species in a national park?",
    "opts": [
      "Biotic and National",
      "Abiotic and Individual",
      "Synthetic and Artificial",
      "International Stock"
    ],
    "ans": 0,
    "exp": "Wildlife in a national park represents biotic national resources."
  },
  {
    "q": "How many princely states existed in India at the time of independence in August 1947?",
    "opts": [
      "100",
      "565+",
      "1000",
      "14"
    ],
    "ans": 1,
    "exp": "There were over 565 semi-autonomous princely states across the Indian subcontinent in 1947."
  },
  {
    "q": "Who was the Deputy Prime Minister & Home Minister who led the integration of princely states?",
    "opts": [
      "Jawaharlal Nehru",
      "Sardar Vallabhbhai Patel",
      "B.R. Ambedkar",
      "Mahatma Gandhi"
    ],
    "ans": 1,
    "exp": "Sardar Vallabhbhai Patel, the 'Iron Man of India', spearheaded the political integration of states."
  },
  {
    "q": "What legal document did princely rulers sign to accede to the Union of India?",
    "opts": [
      "Instrument of Accession",
      "Treaty of Versailles",
      "Purna Swaraj Act",
      "Mountbatten Plan"
    ],
    "ans": 0,
    "exp": "The Instrument of Accession (IoA) surrendered Defense, External Affairs, and Communications to India."
  },
  {
    "q": "Who served as the senior Secretary in the Ministry of States working alongside Sardar Patel?",
    "opts": [
      "V.P. Menon",
      "Sukumar Sen",
      "Fazl Ali",
      "Potti Sreeramulu"
    ],
    "ans": 0,
    "exp": "V.P. Menon was the civil servant who drafted the Instrument of Accession alongside Patel."
  },
  {
    "q": "Which three core subjects were surrendered to India under the initial Instrument of Accession?",
    "opts": [
      "Defense, External Affairs, Communications",
      "Taxation, Police, Judiciary",
      "Education, Health, Agriculture",
      "Railways, Trade, Forests"
    ],
    "ans": 0,
    "exp": "Initial accession required ceding control over Defense, External Affairs, and Communications."
  },
  {
    "q": "What were the tax-free financial allowances guaranteed to former princely rulers called?",
    "opts": [
      "Privy Purses",
      "Royal Dividends",
      "Zamindari Tax",
      "Crown Pensions"
    ],
    "ans": 0,
    "exp": "Privy Purses were tax-free state pensions guaranteed to princely rulers in exchange for merger."
  },
  {
    "q": "In which year were Privy Purses abolished in India?",
    "opts": [
      "1947",
      "1956",
      "1971",
      "1991"
    ],
    "ans": 2,
    "exp": "Privy Purses were abolished by the 26th Constitutional Amendment Act in 1971 under Indira Gandhi."
  },
  {
    "q": "How was the princely state of Junagadh integrated into India?",
    "opts": [
      "Military invasion",
      "Democratic Plebiscite (Referendum)",
      "Royal Purchase",
      "British Order"
    ],
    "ans": 1,
    "exp": "A democratic plebiscite was conducted in Junagadh in Feb 1948 where over 99% voted to join India."
  },
  {
    "q": "What was the name of the Indian Army operation that integrated Hyderabad in September 1948?",
    "opts": [
      "Operation Vijay",
      "Operation Polo",
      "Operation Blue Star",
      "Operation Meghdoot"
    ],
    "ans": 1,
    "exp": "Operation Polo was a 5-day police action in September 1948 that integrated Hyderabad into India."
  },
  {
    "q": "Who was the ruler of Jammu & Kashmir who signed the Instrument of Accession on Oct 26, 1947?",
    "opts": [
      "Maharaja Hari Singh",
      "Nizam Mir Osman Ali Khan",
      "Nawab of Junagadh",
      "Raja of Travancore"
    ],
    "ans": 0,
    "exp": "Maharaja Hari Singh signed the Instrument of Accession following a Pakistani tribal invasion."
  },
  {
    "q": "Who was the veteran leader whose 56-day fast unto death led to the creation of Andhra State?",
    "opts": [
      "Potti Sreeramulu",
      "Tanguturi Prakasam",
      "K. Kamaraj",
      "C. Rajagopalachari"
    ],
    "ans": 0,
    "exp": "Potti Sreeramulu's martyrdom in 1952 sparked public protests leading to Andhra State in 1953."
  },
  {
    "q": "What was the first linguistic state created in independent India on October 1, 1953?",
    "opts": [
      "Gujarat",
      "Andhra State",
      "Nagaland",
      "Kerala"
    ],
    "ans": 1,
    "exp": "Andhra State was created on October 1, 1953 for Telugu-speaking citizens."
  },
  {
    "q": "Who chaired the States Reorganisation Commission (SRC) appointed in December 1953?",
    "opts": [
      "Justice Fazl Ali",
      "H.N. Kunzru",
      "K.M. Panikkar",
      "Sardar Patel"
    ],
    "ans": 0,
    "exp": "Justice Fazl Ali chaired the SRC alongside members H.N. Kunzru and K.M. Panikkar."
  },
  {
    "q": "How many States and Union Territories were established by the States Reorganisation Act 1956?",
    "opts": [
      "14 States and 6 UTs",
      "28 States and 8 UTs",
      "20 States and 5 UTs",
      "12 States and 4 UTs"
    ],
    "ans": 0,
    "exp": "The 1956 Act redrew India's map into 14 States and 6 Union Territories."
  },
  {
    "q": "In which year was Bombay State divided into Gujarat and Maharashtra along linguistic lines?",
    "opts": [
      "1950",
      "1956",
      "1960",
      "1966"
    ],
    "ans": 2,
    "exp": "In 1960, Bombay State was split into Gujarat (Gujarati) and Maharashtra (Marathi)."
  },
  {
    "q": "When was Goa liberated from Portuguese rule through Operation Vijay?",
    "opts": [
      "1947",
      "1950",
      "1961",
      "1987"
    ],
    "ans": 2,
    "exp": "Goa was liberated from Portuguese rule in December 1961 by the Indian Armed Forces."
  },
  {
    "q": "Which three new states were carved out in November 2000?",
    "opts": [
      "Chhattisgarh, Uttarakhand, Jharkhand",
      "Telangana, Goa, Sikkim",
      "Nagaland, Meghalaya, Mizoram",
      "Haryana, Himachal, Punjab"
    ],
    "ans": 0,
    "exp": "In Nov 2000, Chhattisgarh (from MP), Uttarakhand (from UP), and Jharkhand (from Bihar) were created."
  },
  {
    "q": "When was Telangana formed as India's 29th state?",
    "opts": [
      "June 2, 2014",
      "August 15, 1947",
      "January 26, 1950",
      "October 31, 2019"
    ],
    "ans": 0,
    "exp": "Telangana was officially formed on June 2, 2014, bifurcated from Andhra Pradesh."
  },
  {
    "q": "When was Jammu & Kashmir reorganized into two separate Union Territories (J&K and Ladakh)?",
    "opts": [
      "October 31, 2019",
      "August 15, 1947",
      "January 26, 1950",
      "June 2, 2014"
    ],
    "ans": 0,
    "exp": "J&K was reorganized into J&K UT and Ladakh UT on October 31, 2019."
  },
  {
    "q": "Where is the Statue of Unity, the world's tallest statue honoring Sardar Patel, located?",
    "opts": [
      "Kevadia (Ekta Nagar), Gujarat",
      "Mumbai, Maharashtra",
      "New Delhi",
      "Hyderabad, Telangana"
    ],
    "ans": 0,
    "exp": "The Statue of Unity is located in Kevadia (Ekta Nagar), Gujarat, standing 182 meters tall."
  },
  {
    "q": "What legal loophole in the Indian Independence Act 1947 created administrative uncertainty?",
    "opts": [
      "Lapse of British Paramountcy",
      "Abolition of Taxes",
      "Immediate Division of Army",
      "Closure of Railways"
    ],
    "ans": 0,
    "exp": "The lapse of British Paramountcy gave 565+ princely states the option to stay independent."
  },
  {
    "q": "Who was the last Nizam of the princely state of Hyderabad in 1948?",
    "opts": [
      "Nizam Mir Osman Ali Khan",
      "Nizam-ul-Mulk",
      "Salimullah Khan",
      "Sir Syed Ahmad"
    ],
    "ans": 0,
    "exp": "Nizam Mir Osman Ali Khan ruled Hyderabad before Operation Polo in Sept 1948."
  },
  {
    "q": "What was the name of the violent paramilitary force in Hyderabad that suppressed pro-union citizens?",
    "opts": [
      "Razakars",
      "Sepoys",
      "Pindaris",
      "Thugs"
    ],
    "ans": 0,
    "exp": "The Razakars were a paramilitary militia backed by the Nizam's administration."
  },
  {
    "q": "What provisional government was formed by citizens of Junagadh to demand merger with India?",
    "opts": [
      "Arzi Hukumat",
      "Azad Hind Government",
      "Swaraj Sabha",
      "Jan Samiti"
    ],
    "ans": 0,
    "exp": "Arzi Hukumat was the provisional government formed by Junagadh citizens."
  },
  {
    "q": "Which state was formed as India's 16th state in 1963?",
    "opts": [
      "Nagaland",
      "Goa",
      "Sikkim",
      "Manipur"
    ],
    "ans": 0,
    "exp": "Nagaland achieved full statehood in 1963 as India's 16th state."
  },
  {
    "q": "Under whose recommendations was Punjab bifurcated into Punjab and Haryana in 1966?",
    "opts": [
      "Shah Commission",
      "Fazl Ali Commission",
      "Sarkaria Commission",
      "Mandal Commission"
    ],
    "ans": 0,
    "exp": "The Shah Commission recommended the reorganization of Punjab into Punjab and Haryana in 1966."
  },
  {
    "q": "When did Goa become a full state of the Union of India?",
    "opts": [
      "1987",
      "1961",
      "1950",
      "1999"
    ],
    "ans": 0,
    "exp": "Goa became a full state in 1987 after being a Union Territory since 1961."
  },
  {
    "q": "Which French enclaves were integrated into India in 1954/1962?",
    "opts": [
      "Puducherry, Karaikal, Mahe, Yanam",
      "Goa, Daman, Diu",
      "Dada and Nagar Haveli",
      "Lakshadweep"
    ],
    "ans": 0,
    "exp": "Puducherry, Karaikal, Mahe, and Yanam were French enclaves merged into India."
  },
  {
    "q": "What primary basis was chosen by the Fazl Ali Commission for state reorganization?",
    "opts": [
      "Linguistic boundaries & Administrative unity",
      "Religious majority",
      "Land area size",
      "Tax collection volume"
    ],
    "ans": 0,
    "exp": "Language alignment and administrative efficiency were the primary criteria of SRC 1953."
  },
  {
    "q": "What temporary classification of Indian states existed between 1950 and 1956?",
    "opts": [
      "Part A, B, C, and D States",
      "Zone 1, 2, 3, and 4",
      "Tier I, II, and III",
      "Provinces & Cantons"
    ],
    "ans": 0,
    "exp": "The 1950 Constitution grouped states into Part A, B, C, and D states before 1956 abolishment."
  },
  {
    "q": "What is an administrative region governed directly by the Central Government of India called?",
    "opts": [
      "Union Territory (UT)",
      "Sovereign State",
      "Princely Estate",
      "Autonomous Canton"
    ],
    "ans": 0,
    "exp": "Union Territories are administrative divisions governed directly by the Union Government."
  },
  {
    "q": "How many States and Union Territories exist in India today?",
    "opts": [
      "28 States and 8 Union Territories",
      "29 States and 7 Union Territories",
      "25 States and 6 Union Territories",
      "30 States and 9 Union Territories"
    ],
    "ans": 0,
    "exp": "India currently comprises 28 States and 8 Union Territories."
  },
  {
    "q": "Which Union Territory has its own elected Legislative Assembly and Chief Minister?",
    "opts": [
      "Delhi, Puducherry, and Jammu & Kashmir",
      "Chandigarh and Ladakh",
      "Lakshadweep and Daman",
      "Andaman and Nicobar"
    ],
    "ans": 0,
    "exp": "Delhi, Puducherry, and J&K have elected legislative assemblies."
  },
  {
    "q": "What was PEPSU in post-independence India?",
    "opts": [
      "Patiala and East Punjab States Union",
      "Punjab Economic & Public Services Union",
      "Pakistan Border Security Unit",
      "Patna State Union"
    ],
    "ans": 0,
    "exp": "PEPSU was a political union of princely states in Punjab merged into Punjab state in 1956."
  },
  {
    "q": "Why did Sardar Patel guarantee Privy Purses to princely rulers?",
    "opts": [
      "To persuade them to surrender sovereign state power peacefully",
      "To build palaces",
      "To pay British debts",
      "To fund elections"
    ],
    "ans": 0,
    "exp": "Privy Purses incentivized rulers to merge their territories peacefully into democratic India."
  },
  {
    "q": "Which Constitutional Amendment Act executed the 1956 State Reorganisation recommendations?",
    "opts": [
      "7th Constitutional Amendment Act, 1956",
      "42nd Amendment",
      "1st Amendment",
      "44th Amendment"
    ],
    "ans": 0,
    "exp": "The 7th Amendment Act, 1956 put the SRC state boundary recommendations into effect."
  },
  {
    "q": "Who was the Maharaja of Jammu & Kashmir in 1947?",
    "opts": [
      "Maharaja Hari Singh",
      "Maharaja Ranjit Singh",
      "Maharaja Pratap Singh",
      "Maharaja Gulab Singh"
    ],
    "ans": 0,
    "exp": "Maharaja Hari Singh ruled J&K when tribal raiders invaded in October 1947."
  },
  {
    "q": "What was the capital of the princely state of Hyderabad?",
    "opts": [
      "Hyderabad",
      "Secunderabad",
      "Warangal",
      "Gulbarga"
    ],
    "ans": 0,
    "exp": "Hyderabad was the capital of the Nizam's princely state."
  },
  {
    "q": "Which freedom fighter led the demand for a separate Marathi-speaking state?",
    "opts": [
      "Samyukta Maharashtra Movement leaders",
      "Potti Sreeramulu",
      "Sukumar Sen",
      "Fazl Ali"
    ],
    "ans": 0,
    "exp": "The Samyukta Maharashtra Samiti spearheaded the movement for a Marathi linguistic state."
  },
  {
    "q": "Which movement demanded a separate Gujarati-speaking state from Bombay in 1956-60?",
    "opts": [
      "Mahagujarat Movement",
      "Andhra Movement",
      "Chipko Movement",
      "Bhoodan Movement"
    ],
    "ans": 0,
    "exp": "The Mahagujarat Movement led to the creation of Gujarat state in 1960."
  },
  {
    "q": "When did Sikkim become the 22nd State of India?",
    "opts": [
      "1975",
      "1947",
      "1956",
      "1990"
    ],
    "ans": 0,
    "exp": "Sikkim merged into India as the 22nd state through the 36th Constitutional Amendment Act in 1975."
  },
  {
    "q": "What is the official legislative body of a State in India called?",
    "opts": [
      "Vidhan Sabha (Legislative Assembly)",
      "Lok Sabha",
      "Rajya Sabha",
      "Zila Parishad"
    ],
    "ans": 0,
    "exp": "The Vidhan Sabha is the Legislative Assembly of an Indian state."
  },
  {
    "q": "What body determines state boundaries in India under Article 3 of the Constitution?",
    "opts": [
      "Parliament of India",
      "Supreme Court",
      "State High Courts",
      "United Nations"
    ],
    "ans": 0,
    "exp": "Article 3 empowers the Parliament of India to alter state boundaries and create new states."
  },
  {
    "q": "Who was Prime Minister of India when the States Reorganisation Act 1956 was enacted?",
    "opts": [
      "Jawaharlal Nehru",
      "Lal Bahadur Shastri",
      "Indira Gandhi",
      "Morarji Desai"
    ],
    "ans": 0,
    "exp": "Jawaharlal Nehru was Prime Minister when the 1956 State Reorganisation Act was enacted."
  },
  {
    "q": "Which princely state in Kerala acceded smoothly to India in 1947?",
    "opts": [
      "Travancore & Cochin",
      "Hyderabad",
      "Junagadh",
      "Bhopal"
    ],
    "ans": 0,
    "exp": "Travancore and Cochin signed the Instrument of Accession and merged into Kerala."
  },
  {
    "q": "What was the main outcome of Operation Polo in September 1948?",
    "opts": [
      "Accession of Hyderabad into the Indian Union",
      "Liberation of Goa",
      "Partition of Punjab",
      "Boundary agreement with China"
    ],
    "ans": 0,
    "exp": "Operation Polo integrated Hyderabad into the democratic Indian Union."
  },
  {
    "q": "Which Union Territory was merged with Dadra & Nagar Haveli in 2020?",
    "opts": [
      "Daman and Diu",
      "Puducherry",
      "Chandigarh",
      "Lakshadweep"
    ],
    "ans": 0,
    "exp": "Dadra & Nagar Haveli and Daman & Diu were merged into a single UT in Jan 2020."
  },
  {
    "q": "What historical event occurred on October 31, 2019 regarding Indian political geography?",
    "opts": [
      "J&K Reorganisation Act came into effect",
      "Goa Liberation",
      "Telangana Creation",
      "States Reorganisation 1956"
    ],
    "ans": 0,
    "exp": "The J&K Reorganisation Act 2019 created the Union Territories of J&K and Ladakh on Oct 31, 2019."
  },
  {
    "q": "Why did Sardar Patel appeal to 'common destiny' during princely state negotiations?",
    "opts": [
      "To foster national unity & economic strength",
      "To increase tax rates",
      "To annex neighboring countries",
      "To restore monarchy"
    ],
    "ans": 0,
    "exp": "Patel highlighted economic interdependence and shared heritage to unite the nation."
  },
  {
    "q": "Which city serves as the joint capital of both Punjab and Haryana states?",
    "opts": [
      "Chandigarh",
      "Amritsar",
      "Gurugram",
      "Shimla"
    ],
    "ans": 0,
    "exp": "Chandigarh serves as a Union Territory and joint capital for Punjab and Haryana."
  },
  {
    "q": "Which Article of the Indian Constitution guarantees Universal Adult Franchise?",
    "opts": [
      "Article 326",
      "Article 324",
      "Article 14",
      "Article 21"
    ],
    "ans": 0,
    "exp": "Article 326 guarantees that elections to Lok Sabha and Vidhan Sabhas shall be on the basis of adult suffrage."
  },
  {
    "q": "What is the current minimum voting age for Indian citizens in democratic elections?",
    "opts": [
      "21 years",
      "18 years",
      "25 years",
      "16 years"
    ],
    "ans": 1,
    "exp": "Every Indian citizen who has reached 18 years of age is entitled to register as a voter."
  },
  {
    "q": "Which Constitutional Amendment Act lowered the voting age from 21 to 18 years?",
    "opts": [
      "61st Amendment Act, 1988",
      "42nd Amendment Act, 1976",
      "44th Amendment Act, 1978",
      "73rd Amendment Act, 1992"
    ],
    "ans": 0,
    "exp": "The 61st Amendment Act of 1988 lowered the minimum voting age from 21 to 18 years."
  },
  {
    "q": "Which Article of the Constitution establishes the Election Commission of India (ECI)?",
    "opts": [
      "Article 324",
      "Article 326",
      "Article 370",
      "Article 280"
    ],
    "ans": 0,
    "exp": "Article 324 vests superintendence, direction, and control of elections in the ECI."
  },
  {
    "q": "Who appoints the Chief Election Commissioner and Election Commissioners in India?",
    "opts": [
      "Prime Minister",
      "President of India",
      "Chief Justice of India",
      "Parliament"
    ],
    "ans": 1,
    "exp": "The President of India appoints the CEC and Election Commissioners."
  },
  {
    "q": "What is the official tenure of the Chief Election Commissioner?",
    "opts": [
      "6 years or until age 65",
      "5 years or until age 60",
      "4 years",
      "Life tenure"
    ],
    "ans": 0,
    "exp": "The CEC serves for a term of 6 years or until reaching 65 years of age, whichever is earlier."
  },
  {
    "q": "Who was the first Chief Election Commissioner of independent India?",
    "opts": [
      "Sukumar Sen",
      "T.N. Seshan",
      "V.S. Ramadevi",
      "Sunil Arora"
    ],
    "ans": 0,
    "exp": "Sukumar Sen served as India's first Chief Election Commissioner from 1950 to 1958."
  },
  {
    "q": "What is the official list of eligible voters in a constituency called?",
    "opts": [
      "Electoral Roll (Voter List)",
      "Census Sheet",
      "Gazetteer",
      "Voter Manifesto"
    ],
    "ans": 0,
    "exp": "The Electoral Roll is the official registered voter list maintained and updated by the ECI."
  },
  {
    "q": "What does EVM stand for in Indian election technology?",
    "opts": [
      "Electronic Voting Machine",
      "Electrical Voter Mechanism",
      "Elective Voting Matrix",
      "Engineered Voting Module"
    ],
    "ans": 0,
    "exp": "EVM stands for Electronic Voting Machine."
  },
  {
    "q": "What does VVPAT stand for in voting transparency?",
    "opts": [
      "Voter Verifiable Paper Audit Trail",
      "Visual Voter Paper Verification",
      "Voluntary Voter Paper Audit System",
      "Verified Voting Paper Printout"
    ],
    "ans": 0,
    "exp": "VVPAT stands for Voter Verifiable Paper Audit Trail."
  },
  {
    "q": "How many seconds does a VVPAT paper slip display behind the glass window?",
    "opts": [
      "7 seconds",
      "10 seconds",
      "3 seconds",
      "15 seconds"
    ],
    "ans": 0,
    "exp": "The VVPAT slip displays candidate details for 7 seconds before dropping into the sealed ballot box."
  },
  {
    "q": "When were EVMs used nationwide across all Lok Sabha constituencies for the first time?",
    "opts": [
      "2004 General Elections",
      "1951 General Elections",
      "1989 General Elections",
      "2019 General Elections"
    ],
    "ans": 0,
    "exp": "EVMs were deployed nationwide in all 543 Lok Sabha constituencies during the 2004 General Elections."
  },
  {
    "q": "What code of conduct comes into effect immediately when election dates are announced?",
    "opts": [
      "Model Code of Conduct (MCC)",
      "Civil Procedure Code",
      "Indian Penal Code",
      "Parliamentary Code"
    ],
    "ans": 0,
    "exp": "The Model Code of Conduct (MCC) enforces rules on parties and candidates during election season."
  },
  {
    "q": "How many hours before polling closes must public election campaigning stop?",
    "opts": [
      "48 hours (Silence Period)",
      "24 hours",
      "72 hours",
      "12 hours"
    ],
    "ans": 0,
    "exp": "Public campaigning must cease 48 hours prior to the close of voting (Silence Period)."
  },
  {
    "q": "Elections held every 5 years to elect representatives to the Lok Sabha or Vidhan Sabha are:",
    "opts": [
      "General Elections",
      "By-Elections",
      "Mid-Term Elections",
      "Local Body Elections"
    ],
    "ans": 0,
    "exp": "General Elections take place every 5 years to elect a new legislative house."
  },
  {
    "q": "An election held to fill a casual vacancy in a single constituency due to death or resignation is a:",
    "opts": [
      "By-Election",
      "General Election",
      "Mid-Term Election",
      "Referendum"
    ],
    "ans": 0,
    "exp": "By-elections fill individual vacant seats between general elections."
  },
  {
    "q": "How many elected constituencies are there in the Lok Sabha (House of the People)?",
    "opts": [
      "543",
      "552",
      "245",
      "500"
    ],
    "ans": 0,
    "exp": "India is divided into 543 single-member Lok Sabha parliamentary constituencies."
  },
  {
    "q": "Constituencies set aside exclusively for candidates from SC and ST communities are called:",
    "opts": [
      "Reserved Constituencies",
      "General Constituencies",
      "Special Constituencies",
      "Union Constituencies"
    ],
    "ans": 0,
    "exp": "Reserved Constituencies ensure political representation for SC and ST communities."
  },
  {
    "q": "What does NOTA stand for on Indian Electronic Voting Machines?",
    "opts": [
      "None of the Above",
      "No Option To Access",
      "National Order of Trade Association",
      "Neutral Option Tracking Tool"
    ],
    "ans": 0,
    "exp": "NOTA allows voters to register a vote of rejection against all contesting candidates."
  },
  {
    "q": "What mobile app released by ECI allows citizens to report election code violations live?",
    "opts": [
      "cVIGIL",
      "BHIM",
      "UMANG",
      "e-Pathshala"
    ],
    "ans": 0,
    "exp": "cVIGIL allows citizens to upload photos/videos of code violations directly to election officers."
  },
  {
    "q": "Who was the first woman Chief Election Commissioner of India?",
    "opts": [
      "V.S. Ramadevi",
      "Pratibha Patil",
      "Sarojini Naidu",
      "Sushma Swaraj"
    ],
    "ans": 0,
    "exp": "V.S. Ramadevi served as the 9th Chief Election Commissioner of India in 1990."
  },
  {
    "q": "What photo document issued by ECI serves as official voter identification?",
    "opts": [
      "EPIC (Elector's Photo Identity Card)",
      "Ration Card",
      "PAN Card",
      "Driving License"
    ],
    "ans": 0,
    "exp": "EPIC is the official voter identity card issued by the ECI."
  },
  {
    "q": "In which year were EVMs tested for the first time in India on an experimental basis?",
    "opts": [
      "1982 (Paravur, Kerala)",
      "1951",
      "1999",
      "2014"
    ],
    "ans": 0,
    "exp": "EVMs were first tested in 1982 in 50 polling stations of Paravur constituency in Kerala."
  },
  {
    "q": "What electronic companies manufacture EVMs for the Election Commission of India?",
    "opts": [
      "BEL and ECIL",
      "ISRO and DRDO",
      "TCS and Infosys",
      "Reliance and Tata"
    ],
    "ans": 0,
    "exp": "Bharat Electronics Ltd (BEL) and Electronics Corporation of India Ltd (ECIL) manufacture EVMs."
  },
  {
    "q": "What happens to candidate security deposits if they fail to secure 1/6th of total valid votes?",
    "opts": [
      "Security deposit is forfeited",
      "Candidate goes to jail",
      "Party is banned",
      "Votes are cancelled"
    ],
    "ans": 0,
    "exp": "Candidates forfeit their security deposit if they receive less than 1/6th of total valid votes polled."
  },
  {
    "q": "Who conducts and supervises election operations at the polling booth level?",
    "opts": [
      "Presiding Officer and Polling Officers",
      "Supreme Court Judges",
      "Police Commissioner",
      "State Governor"
    ],
    "ans": 0,
    "exp": "Presiding Officers manage polling stations on election day."
  },
  {
    "q": "Which body determines constituency territorial boundaries based on population census data?",
    "opts": [
      "Delimitation Commission",
      "Finance Commission",
      "Planning Commission",
      "UPSC"
    ],
    "ans": 0,
    "exp": "The Delimitation Commission redraws constituency boundaries based on population census."
  },
  {
    "q": "What voting principle ensures that a voter's ballot choice remains private?",
    "opts": [
      "Secret Ballot",
      "Public Acclamation",
      "Open Voice Vote",
      "Show of Hands"
    ],
    "ans": 0,
    "exp": "Secret Ballot ensures total voter confidentiality."
  },
  {
    "q": "What is the term for an election held when Parliament is dissolved before completing 5 years?",
    "opts": [
      "Mid-Term Election",
      "By-Election",
      "Primary Election",
      "Local Election"
    ],
    "ans": 0,
    "exp": "Mid-term elections take place when a house is dissolved prematurely."
  },
  {
    "q": "Which Act governs the conduct of elections and registration of political parties in India?",
    "opts": [
      "Representation of the People Act, 1951",
      "Indian Penal Code, 1860",
      "Companies Act, 2013",
      "Right to Information Act, 2005"
    ],
    "ans": 0,
    "exp": "The Representation of the People Act, 1951 lays down rules for elections and party registration."
  },
  {
    "q": "What is the minimum age required to contest elections for Lok Sabha or Vidhan Sabha?",
    "opts": [
      "25 years",
      "18 years",
      "30 years",
      "35 years"
    ],
    "ans": 0,
    "exp": "Candidates must be at least 25 years old to contest Lok Sabha or Assembly elections."
  },
  {
    "q": "What is the minimum age required to contest elections for Rajya Sabha or Vidhan Parishad?",
    "opts": [
      "30 years",
      "25 years",
      "18 years",
      "35 years"
    ],
    "ans": 0,
    "exp": "Candidates must be at least 30 years old for Rajya Sabha or Legislative Council elections."
  },
  {
    "q": "What is the minimum age required to be eligible to run for President of India?",
    "opts": [
      "35 years",
      "25 years",
      "30 years",
      "18 years"
    ],
    "ans": 0,
    "exp": "A presidential candidate must be at least 35 years of age."
  },
  {
    "q": "Which Constitutional Amendment reserved 33% seats for women in Parliament and Assemblies?",
    "opts": [
      "Nari Shakti Vandan Adhiniyam (106th Amendment, 2023)",
      "73rd Amendment",
      "44th Amendment",
      "86th Amendment"
    ],
    "ans": 0,
    "exp": "The 106th Constitutional Amendment Act, 2023 reserves 33% seats for women."
  },
  {
    "q": "What is an election symbol?",
    "opts": "An official graphic icon allotted by ECI to political parties and candidates on ballot papers/EVMs.",
    "ans": 0,
    "exp": "Election symbols help literate and illiterate voters identify candidates easily."
  },
  {
    "q": "Who allocates election symbols to recognized national and state political parties?",
    "opts": [
      "Election Commission of India (ECI)",
      "Supreme Court",
      "Ministry of Home Affairs",
      "President"
    ],
    "ans": 0,
    "exp": "The ECI reserves and allocates election symbols to political parties."
  },
  {
    "q": "What document outlines a political party's promises and policies before elections?",
    "opts": [
      "Election Manifesto",
      "Constitutional Amendment",
      "Annual Budget",
      "White Paper"
    ],
    "ans": 0,
    "exp": "An election manifesto presents a party's planned policies and promises to voters."
  },
  {
    "q": "What is the maximum expenditure limit for Lok Sabha candidates in large states currently?",
    "opts": [
      "\u20b995 Lakhs",
      "\u20b925 Lakhs",
      "\u20b91 Crore",
      "\u20b950 Lakhs"
    ],
    "ans": 0,
    "exp": "The ECI revised the candidate spending limit to \u20b995 Lakhs for Lok Sabha seats in large states."
  },
  {
    "q": "What is the term for political bribery or giving cash/gifts to voters during campaigns?",
    "opts": [
      "Corrupt Electoral Practice / Bribery",
      "Campaign Promotion",
      "Lobbying",
      "Public Welfare"
    ],
    "ans": 0,
    "exp": "Distributing money or gifts to influence voters is an illegal corrupt practice under electoral law."
  },
  {
    "q": "When was VVPAT introduced in Indian elections for the first time?",
    "opts": [
      "2013 (Noksen, Nagaland)",
      "2004",
      "1982",
      "1951"
    ],
    "ans": 0,
    "exp": "VVPAT was first tested in Noksen constituency in Nagaland in 2013."
  },
  {
    "q": "What is the primary function of the Model Code of Conduct (MCC)?",
    "opts": [
      "Ensuring fair campaign competition and preventing government machinery misuse",
      "Raising tax rates",
      "Cancelling elections",
      "Writing laws"
    ],
    "ans": 0,
    "exp": "MCC ensures ruling parties do not misuse government power for campaign advantages."
  },
  {
    "q": "What happens after polling ends on election day?",
    "opts": [
      "EVMs and VVPATs are sealed and stored in strongrooms under 3-tier security",
      "EVMs are thrown away",
      "Votes are counted immediately in street",
      "Ballot boxes are shipped overseas"
    ],
    "ans": 0,
    "exp": "Sealed EVMs are transported to secure strongrooms guarded by armed security until counting day."
  },
  {
    "q": "Who verifies nomination papers during the scrutiny stage of elections?",
    "opts": [
      "Returning Officer (RO)",
      "Polling Clerk",
      "Voter",
      "Journalist"
    ],
    "ans": 0,
    "exp": "The Returning Officer scrutinizes nomination papers for legal validity."
  },
  {
    "q": "What is the term for voters living away from home who cast votes via postal mail or proxy?",
    "opts": [
      "Postal Ballot / Electronically Transmitted Postal Ballot (ETPBS)",
      "Invalid Vote",
      "Tendered Vote",
      "Challenged Vote"
    ],
    "ans": 0,
    "exp": "Armed forces and election staff cast votes via Postal Ballot / ETPBS."
  },
  {
    "q": "What is a tendered vote?",
    "opts": "A vote cast by a genuine voter whose vote was already fraudulently cast by someone else.",
    "ans": 0,
    "exp": "A tendered vote is recorded on paper when a voter discovers an impersonator voted in their name."
  },
  {
    "q": "Which body hears election petitions challenging the validity of a parliamentary election result?",
    "opts": [
      "State High Court",
      "Gram Panchayat",
      "Election Commission",
      "District Court"
    ],
    "ans": 0,
    "exp": "Election petitions challenging election validity are filed in the respective State High Court."
  },
  {
    "q": "How often are general elections held in India under normal constitutional conditions?",
    "opts": [
      "Every 5 years",
      "Every 4 years",
      "Every 6 years",
      "Every 10 years"
    ],
    "ans": 0,
    "exp": "Lok Sabha and State Assembly general elections occur every 5 years."
  },
  {
    "q": "What voting system is used for electing Lok Sabha Members of Parliament?",
    "opts": [
      "First-Past-The-Post (FPTP) System",
      "Proportional Representation",
      "Single Transferable Vote",
      "System of Preference"
    ],
    "ans": 0,
    "exp": "Lok Sabha elections follow the First-Past-The-Post (FPTP) plurality voting system."
  },
  {
    "q": "Who takes over state administration if a State Assembly election leads to a hung assembly?",
    "opts": [
      "Governor / President's Rule (Article 356)",
      "Chief Election Commissioner",
      "Army Chief",
      "High Court Chief Justice"
    ],
    "ans": 0,
    "exp": "President's Rule under Article 356 can be imposed if no party can form a stable majority government."
  },
  {
    "q": "What is the main democratic purpose of Universal Adult Franchise?",
    "opts": [
      "Ensuring political equality where 1 Person = 1 Vote = 1 Value",
      "Limiting votes to landowners",
      "Giving extra votes to graduates",
      "Restricting voting to city residents"
    ],
    "ans": 0,
    "exp": "Universal Adult Franchise establishes fundamental political equality: One Person, One Vote, One Value."
  },
  {
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
    "q": "What is the economic reward earned by Labour?",
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
    "q": "What is the economic reward earned by Capital?",
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
    "q": "What is the economic reward earned by Entrepreneurship?",
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
    "q": "Assets like machinery, factory buildings, and tools used repeatedly over years are:",
    "opts": [
      "Fixed Capital",
      "Working Capital",
      "Human Capital",
      "Financial Capital"
    ],
    "ans": 0,
    "exp": "Fixed Capital consists of durable long-term assets that do not get consumed in one production cycle."
  },
  {
    "q": "Raw materials, seeds, fuel, and daily wage cash consumed during a single cycle are:",
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
    "q": "The accumulated knowledge, skills, health, and expertise in a workforce is called:",
    "opts": [
      "Human Capital",
      "Fixed Capital",
      "Financial Capital",
      "Natural Capital"
    ],
    "ans": 0,
    "exp": "Human capital represents the skill, education, and health embodied in people."
  },
  {
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
    "q": "Who was the visionary entrepreneur who pioneered civil aviation in India (Tata Airlines)?",
    "opts": [
      "J.R.D. Tata",
      "G.D. Birla",
      "Dhirubhai Ambani",
      "Jamsetji Tata"
    ],
    "ans": 0,
    "exp": "J.R.D. Tata founded Tata Airlines in 1932 (later Air India) and led Tata Group for over 50 years."
  },
  {
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
    "q": "Why is Labour described as a perishable economic factor?",
    "opts": [
      "Unworked labour time is lost forever",
      "Workers get tired easily",
      "Labour changes every day",
      "Wages fluctuate"
    ],
    "ans": 0,
    "exp": "Labour cannot be stored; if a worker is unemployed for a day, that day's labour capacity is lost forever."
  },
  {
    "q": "Why is Land geographically immobile?",
    "opts": [
      "Land plots cannot be physically moved",
      "Land soil changes color",
      "Land has fixed price",
      "Land belongs to state"
    ],
    "ans": 0,
    "exp": "Land cannot be transported from one geographical location to another."
  },
  {
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
    "q": "What is the primary characteristic of Land as a factor of production?",
    "opts": [
      "Fixed & Limited in Supply",
      "Easily relocatable",
      "Man-made asset",
      "Perishable input"
    ],
    "ans": 0,
    "exp": "Land has a fixed total natural supply that cannot be increased by human creation."
  },
  {
    "q": "Why is Labour inseparable from the labourer?",
    "opts": [
      "Worker must be present to exert physical/mental effort",
      "Wages are paid in cash",
      "Labour is owned by machines",
      "Labour is fixed"
    ],
    "ans": 0,
    "exp": "A worker cannot send their labour to a factory while remaining away."
  },
  {
    "q": "What type of capital asset is a farmer's tractor?",
    "opts": [
      "Fixed Capital",
      "Working Capital",
      "Human Capital",
      "Natural Land"
    ],
    "ans": 0,
    "exp": "A tractor is a durable fixed capital asset used over many crop seasons."
  },
  {
    "q": "What type of capital asset is cotton yarn in a textile mill?",
    "opts": [
      "Working Capital",
      "Fixed Capital",
      "Human Capital",
      "Natural Land"
    ],
    "ans": 0,
    "exp": "Cotton yarn gets transformed into woven cloth in a single manufacturing cycle."
  },
  {
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
    "q": "How does healthcare expenditure function as an economic investment?",
    "opts": [
      "Improves worker stamina, attendance, and long-term productivity",
      "Consumes government money without return",
      "Only helps hospital owners",
      "Reduces birth rate"
    ],
    "ans": 0,
    "exp": "Healthy workers lose fewer working days and maintain high physical/mental output."
  },
  {
    "q": "What is the term for an unexpected event disrupting production logistics worldwide?",
    "opts": [
      "Supply Chain Disruption",
      "Market Equilibrium",
      "Trade Surplus",
      "Fiscal Stimulus"
    ],
    "ans": 0,
    "exp": "Pandemics, wars, or canal blockages cause supply chain disruptions."
  },
  {
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
    "q": "What is the main economic risk assumed by an entrepreneur?",
    "opts": [
      "Financial loss if production costs exceed sales revenue",
      "Losing physical health",
      "Paying worker wages",
      "Buying machinery"
    ],
    "ans": 0,
    "exp": "Entrepreneurs bear financial uncertainty if consumer market demand falls short."
  },
  {
    "q": "What philosophy compounds tiny daily workplace improvements into massive quality gains?",
    "opts": [
      "Japanese Kaizen Philosophy",
      "Laissez-faire Capitalism",
      "Feudal System",
      "Mercantilism"
    ],
    "ans": 0,
    "exp": "Kaizen encourages continuous incremental improvements compounding over time."
  },
  {
    "q": "What economic metric measures total production output divided by worker hours?",
    "opts": [
      "Labour Productivity",
      "Inflation Rate",
      "Bank Interest Rate",
      "Import Tariff"
    ],
    "ans": 0,
    "exp": "Productivity measures total output produced per unit of labour input."
  },
  {
    "q": "How does education enhance Human Capital?",
    "opts": [
      "Develops scientific problem-solving & technical skills",
      "Increases physical height",
      "Eliminates need for capital",
      "Reduces land value"
    ],
    "ans": 0,
    "exp": "Education equips workers with cognitive abilities, analytical skills, and technical knowledge."
  },
  {
    "q": "What type of labour does a civil engineer designing a bridge perform?",
    "opts": [
      "Mental (Intellectual) Labour",
      "Physical Manual Labour",
      "Unskilled Labour",
      "Raw Natural Input"
    ],
    "ans": 0,
    "exp": "Designing structures involves cognitive analysis and intellectual mental labour."
  },
  {
    "q": "What type of labour does a construction worker hauling bricks perform?",
    "opts": [
      "Physical (Manual) Labour",
      "Mental Intellectual Labour",
      "Financial Capital",
      "Entrepreneurship"
    ],
    "ans": 0,
    "exp": "Hauling bricks relies primarily on muscular effort and physical manual labour."
  },
  {
    "q": "Why is Entrepreneurship called the 'organizing factor'?",
    "opts": [
      "Combines land, labour, and capital into a functioning business",
      "Owns all natural rivers",
      "Pays government taxes",
      "Exports raw materials"
    ],
    "ans": 0,
    "exp": "The entrepreneur coordinates and combines all other passive factors into production."
  },
  {
    "q": "What is the effect of automation on manufacturing assembly lines?",
    "opts": [
      "Increases output speed & precision while altering labour skills required",
      "Stops all production",
      "Increases physical fatigue",
      "Eliminates electricity use"
    ],
    "ans": 0,
    "exp": "Automation enhances output volume and precision using computerized machinery."
  },
  {
    "q": "What is Artificial Intelligence (AI) in modern production systems?",
    "opts": [
      "Computer software analyzing data, diagnosing issues, and driving robotics",
      "A type of physical soil",
      "A manual hand tool",
      "A cash banknote"
    ],
    "ans": 0,
    "exp": "AI automates complex cognitive data analysis and robotic manufacturing tasks."
  },
  {
    "q": "What happens to a nation's economy when its working-age population is educated and employed?",
    "opts": [
      "Economic output and per capita income rise rapidly (Demographic Dividend)",
      "Economy collapses",
      "Inflation stops completely",
      "No impact"
    ],
    "ans": 0,
    "exp": "A skilled working population maximizes total national output and living standards."
  },
  {
    "q": "Which of the following is a physical fixed capital asset in a bakery?",
    "opts": [
      "Commercial Baking Oven",
      "Baking Powder",
      "Wheat Flour",
      "Daily Worker Cash"
    ],
    "ans": 0,
    "exp": "The commercial baking oven is a durable fixed capital asset."
  },
  {
    "q": "Which of the following is working capital in a bakery?",
    "opts": [
      "Wheat flour and sugar",
      "Baking oven",
      "Delivery van vehicle",
      "Bakery building"
    ],
    "ans": 0,
    "exp": "Flour and sugar are raw material inputs consumed during baking."
  },
  {
    "q": "What is financial capital?",
    "opts": "Monetary funds, cash, and credit used to purchase physical capital assets.",
    "ans": 0,
    "exp": "Financial capital provides the liquid money needed to acquire physical machinery and land."
  },
  {
    "q": "What is the primary incentive driving entrepreneurship in market economies?",
    "opts": [
      "Profit & Societal Value Creation",
      "Paying rent",
      "Earning daily wages",
      "Filing taxes"
    ],
    "ans": 0,
    "exp": "Profit and creating value motivate entrepreneurs to take financial risks."
  },
  {
    "q": "Why can't Land produce goods by itself without Labour and Capital?",
    "opts": [
      "Land is a passive factor of production",
      "Land is too expensive",
      "Land is liquid",
      "Land is man-made"
    ],
    "ans": 0,
    "exp": "Land is a passive input requiring active human labour and capital to generate output."
  },
  {
    "q": "What term describes sustainable manufacturing that minimizes carbon emissions and waste?",
    "opts": [
      "Sustainable / Green Production",
      "Resource Depletion",
      "Industrial Waste Dumping",
      "Deforestation"
    ],
    "ans": 0,
    "exp": "Sustainable green production minimizes environmental pollution and conserves resources."
  },
  {
    "q": "What is the dependency ratio formula in population economics?",
    "opts": [
      "(Dependents <15 & >65 / Working-age 15-64) * 100",
      "(Total Pop / Total Land Area)",
      "(Exports / Imports) * 100",
      "(Wages / Rent)"
    ],
    "ans": 0,
    "exp": "Dependency ratio compares non-working dependents to the active working population."
  },
  {
    "q": "What role do Vocational Training Institutes (ITIs) play in human capital?",
    "opts": [
      "Imparting practical technical skills to young workers",
      "Issuing voter ID cards",
      "Conducting elections",
      "Mining iron ore"
    ],
    "ans": 0,
    "exp": "Vocational institutes build hands-on technical skills required in modern industries."
  },
  {
    "q": "What is an example of an upstream supply chain disruption?",
    "opts": [
      "Shortage of raw cocoa beans due to drought",
      "Supermarket store closing",
      "TV ad cancellation",
      "Customer changing preference"
    ],
    "ans": 0,
    "exp": "Raw material shortages (like cocoa crop failure) disrupt upstream supply chain stages."
  },
  {
    "q": "What is the fundamental goal of economic production?",
    "opts": [
      "Transforming resources to satisfy human needs and create economic value",
      "Depleting natural wealth",
      "Increasing paperwork",
      "Stopping trade"
    ],
    "ans": 0,
    "exp": "Economic production transforms inputs into useful goods and services satisfying needs."
  }
];

const IMPORTANT_QUESTIONS = {
  "m1": [
    {
      "q": "What is a Natural Resource?",
      "a": "Anything available in nature that has utility, value, and satisfies human needs and desires."
    },
    {
      "q": "State the TEC Rule for resource status.",
      "a": "Technological Accessibility, Economic Feasibility, and Cultural Acceptability."
    },
    {
      "q": "Define Universal Adult Franchise.",
      "a": "The democratic right of every adult citizen (aged 18+) to vote without discrimination based on caste, gender, religion, or wealth."
    },
    {
      "q": "Which Article of the Constitution guarantees Universal Adult Franchise in India?",
      "a": "Article 326 of the Constitution of India."
    },
    {
      "q": "What is the minimum voting age in India currently?",
      "a": "18 years of age (lowered from 21 by the 61st Constitutional Amendment Act, 1988)."
    },
    {
      "q": "Who was known as the 'Iron Man of India'?",
      "a": "Sardar Vallabhbhai Patel, India's first Deputy Prime Minister and Home Minister."
    },
    {
      "q": "What is the Instrument of Accession (IoA)?",
      "a": "A legal document signed by princely state rulers acceding to India, ceding Defense, External Affairs, and Communications."
    },
    {
      "q": "Name the four fundamental Factors of Production.",
      "a": "Land, Labour, Capital, and Entrepreneurship."
    },
    {
      "q": "What is the primary economic reward earned by Land?",
      "a": "Rent."
    },
    {
      "q": "What is the economic reward earned by Labour?",
      "a": "Wages or Salary."
    },
    {
      "q": "What is Fixed Capital?",
      "a": "Durable man-made physical assets used repeatedly over years, such as machinery, factory buildings, and tractors."
    },
    {
      "q": "What is Working Capital?",
      "a": "Short-term assets consumed or converted during a single production cycle, like raw materials and cash liquidity."
    },
    {
      "q": "Define Human Capital.",
      "a": "The accumulated knowledge, skills, technical expertise, and health embodied in a nation's workforce."
    },
    {
      "q": "What is Japanese Kaizen philosophy?",
      "a": "A business philosophy focused on continuous, incremental workplace productivity improvement involving all workers."
    },
    {
      "q": "What is VVPAT?",
      "a": "Voter Verifiable Paper Audit Trail machine connected to EVMs that displays a 7-second paper slip for vote verification."
    }
  ],
  "m2": [
    {
      "q": "Differentiate between Nature and Resources with suitable examples.",
      "a": "<strong>Nature</strong> includes everything existing naturally without human creation (e.g. forest trees, crude oil). A <strong>Resource</strong> is part of nature transformed by human knowledge and technology to satisfy needs (e.g. wooden desks, refined petrol)."
    },
    {
      "q": "Explain the three options given to Princely States by the Indian Independence Act 1947.",
      "a": "1. Accede to the Dominion of India.<br>2. Accede to the Dominion of Pakistan.<br>3. Remain an independent sovereign state."
    },
    {
      "q": "Why was the States Reorganisation Commission (SRC 1953) appointed?",
      "a": "The SRC was appointed under Justice Fazl Ali in Dec 1953 to recommend redrawing state boundaries along linguistic lines following Potti Sreeramulu's 56-day fast and public demand."
    },
    {
      "q": "Differentiate between Fixed Capital and Working Capital.",
      "a": "<strong>Fixed Capital</strong> consists of durable long-term assets used repeatedly (e.g., machines, buildings). <strong>Working Capital</strong> consists of inputs consumed in a single cycle (e.g., raw cotton, cash)."
    },
    {
      "q": "What is the Demographic Dividend and why is it crucial for India?",
      "a": "Demographic Dividend is economic growth potential when the working-age population (15-64) exceeds non-working dependents. India's median age of ~28 offers a major growth window until 2055."
    },
    {
      "q": "Differentiate between Biotic and Abiotic Resources.",
      "a": "<strong>Biotic Resources</strong> originate from living organic matter (forests, crops, fish, coal). <strong>Abiotic Resources</strong> originate from non-living physical inorganic matter (land, water, minerals)."
    },
    {
      "q": "What is the Model Code of Conduct (MCC) in elections?",
      "a": "A set of guidelines issued by the Election Commission of India governing political party behavior, speeches, and campaign spending once election dates are announced."
    },
    {
      "q": "Why is Labour considered a 'perishable' factor of production?",
      "a": "Unworked labour time is lost forever. If a worker remains unemployed for a day, that day's labour capacity cannot be stored or recovered later."
    },
    {
      "q": "What is the role of a Returning Officer (RO)?",
      "a": "An officer appointed by ECI responsible for overseeing the entire election process, nomination scrutiny, and result declaration in a specific constituency."
    },
    {
      "q": "What are Ecosystem Services?",
      "a": "Essential benefits provided by natural ecosystems: Provisioning (food/water), Regulating (climate/floods), Supporting (soil/oxygen), and Cultural (beauty/tourism)."
    }
  ],
  "m3": [
    {
      "q": "Explain the three mandatory conditions required for any natural substance to become a resource.",
      "a": "1. <strong>Technological Accessibility:</strong> Humans must possess tools, scientific knowledge, and know-how to extract it.<br>2. <strong>Economic Feasibility:</strong> Financial benefit derived from extraction must exceed total costs.<br>3. <strong>Cultural Acceptability:</strong> Usage must align with societal ethics, laws, and environmental safety."
    },
    {
      "q": "Describe the accession process of Junagadh, Hyderabad, and Jammu & Kashmir.",
      "a": "1. <strong>Junagadh:</strong> Integrated via a democratic plebiscite (referendum) in Feb 1948 where >99% voted for India.<br>2. <strong>Hyderabad:</strong> Integrated through Operation Polo (5-day police action) in Sept 1948, suppressing the Razakar militia.<br>3. <strong>Jammu & Kashmir:</strong> Maharaja Hari Singh signed the Instrument of Accession on Oct 26, 1947 during a Pakistani tribal invasion."
    },
    {
      "q": "Explain the structure, composition, and core responsibilities of the Election Commission of India (ECI).",
      "a": "Established under <strong>Article 324</strong>, ECI consists of Chief Election Commissioner and 2 Election Commissioners appointed by the President.<br><strong>Responsibilities:</strong> 1. Updating electoral rolls. 2. Scheduling elections. 3. Recognizing parties & symbols. 4. Enforcing Model Code of Conduct."
    },
    {
      "q": "What is Human Capital and how does raw human labour transform into human capital?",
      "a": "Human Capital is the accumulated knowledge, skills, health, and expertise in a workforce. Raw labour transforms into human capital through sustained investments in quality education, technical skill training (Skill India), and healthcare."
    },
    {
      "q": "Explain the 5 stages of a product Supply Chain using the example of a Chocolate Bar.",
      "a": "1. <strong>Extraction:</strong> Cocoa farming & milk production.<br>2. <strong>Processing:</strong> Cocoa roasting & grinding.<br>3. <strong>Manufacturing:</strong> Mixing cocoa butter, milk powder, & sugar into chocolate bars.<br>4. <strong>Logistics:</strong> Refrigerated truck transport to distribution centers.<br>5. <strong>Retail:</strong> Kirana store sale to consumers."
    }
  ],
  "m5": [
    {
      "q": "Detailed Essay: Explain the Four Factors of Production, their economic rewards, and how they interact in an economic supply chain.",
      "a": "<strong>Introduction:</strong> Every economic good/service requires 4 Factors of Production: Land, Labour, Capital, and Entrepreneurship.<br><br><strong>1. Land (Reward: Rent):</strong> All gifts of nature (soil, water, minerals, sunlight). Passive & fixed in supply.<br><strong>2. Labour (Reward: Wages):</strong> Physical & mental human effort. Active & perishable factor.<br><strong>3. Capital (Reward: Interest):</strong> Man-made physical tools, machinery (Fixed Capital), and raw materials/cash (Working Capital).<br><strong>4. Entrepreneurship (Reward: Profit):</strong> Human visionary catalyst combining land, labour, and capital while bearing financial risk.<br><br><strong>Interdependence:</strong> No factor produces alone. In manufacturing, land provides raw inputs, labour operates capital machinery, while the entrepreneur organizes production and manages market supply chains."
    },
    {
      "q": "Historical Analysis: Discuss Sardar Vallabhbhai Patel's diplomatic strategy in integrating 565+ Princely States into the Indian Union after 1947.",
      "a": "<strong>Background:</strong> The Indian Independence Act 1947 declared that British Paramountcy would lapse, giving 565+ princely states options to join India, Pakistan, or stay independent.<br><br><strong>Sardar Patel's Strategy:</strong><br>1. <strong>Instrument of Accession (IoA):</strong> Negotiated accession on 3 key national subjects\u2014Defense, External Affairs, and Communications.<br>2. <strong>Privy Purse Incentive:</strong> Offered tax-free financial allowances proportional to state revenues.<br>3. <strong>Appeals to Patriotism:</strong> Highlighted shared history, culture, and economic survival.<br>4. <strong>Firm Realpolitik:</strong> Conducted Operation Polo in Hyderabad (Sept 1948) and held a plebiscite in Junagadh (Feb 1948) when rulers resisted democratic integration.<br><br><strong>Outcome:</strong> Unified India into a contiguous democratic nation."
    },
    {
      "q": "Civics Deep-Dive: Explain Universal Adult Franchise, Article 326, election voting technology evolution (Ballots to EVMs & VVPAT), and democratic ethics.",
      "a": "<strong>Universal Adult Franchise (Article 326):</strong> Grants equal voting rights to every citizen aged 18+ without discrimination based on caste, gender, religion, or wealth. Voting age was lowered from 21 to 18 by the 61st Amendment Act, 1988.<br><br><strong>Voting Technology Evolution:</strong><br>1. <strong>Paper Ballots (1951-1990s):</strong> Physical ink stamps on paper ballot sheets dropped into steel boxes.<br>2. <strong>EVMs (2004 Nationwide):</strong> Electronic Voting Machines manufactured by BEL/ECIL providing fast, tamper-proof vote recording.<br>3. <strong>VVPAT (2013/2019):</strong> Prints a 7-second paper slip behind a sealed window before dropping into a locked box for verification.<br><br><strong>Democratic Ethics:</strong> Enforcing the Model Code of Conduct (MCC), maintaining 48-hour Silence Period, and reporting violations via cVIGIL app."
    }
  ]
};

const GLOSSARY = [
  {
    "term": "Abiotic Resource",
    "def": "A natural resource derived from non-living physical inorganic matter, such as land, minerals, water, and air."
  },
  {
    "term": "Afforestation",
    "def": "The practice of establishing a forest by planting trees on barren or deforested land."
  },
  {
    "term": "Andhra State",
    "def": "India's first language-based state created on October 1, 1953 for Telugu-speaking people following Potti Sreeramulu's fast."
  },
  {
    "term": "Article 324",
    "def": "Constitutional article establishing the independent Election Commission of India (ECI)."
  },
  {
    "term": "Article 326",
    "def": "Constitutional article guaranteeing Universal Adult Franchise for all Indian citizens aged 18+."
  },
  {
    "term": "Automation",
    "def": "The use of automatic machinery and software to perform production tasks with minimal human intervention."
  },
  {
    "term": "Ballot Box",
    "def": "A sealed container into which voters deposit marked paper ballot sheets during an election."
  },
  {
    "term": "Bauxite",
    "def": "The primary mineral ore from which Aluminum metal is extracted through smelting."
  },
  {
    "term": "Biotic Resource",
    "def": "A natural resource derived from living organisms or organic matter, such as forests, crops, wildlife, and coal."
  },
  {
    "term": "British Paramountcy",
    "def": "The supreme political authority exercised by the British Crown over Indian Princely States prior to August 1947."
  },
  {
    "term": "By-Election",
    "def": "An election held to fill a casual vacancy in a single constituency caused by a member's death or resignation."
  },
  {
    "term": "Capital",
    "def": "Man-made assets, machinery, tools, buildings, and financial liquidity used in economic production."
  },
  {
    "term": "Chief Election Commissioner",
    "def": "The head of the Election Commission of India responsible for conducting free and fair democratic elections."
  },
  {
    "term": "Community Resource",
    "def": "A resource accessible to all members of a specific community, such as public parks or village grazing grounds."
  },
  {
    "term": "Constituency",
    "def": "A specific geographical division whose registered voters elect a representative to a legislative body."
  },
  {
    "term": "cVIGIL",
    "def": "An ECI mobile app enabling citizens to report Model Code of Conduct violations with geotagged photos."
  },
  {
    "term": "Demographic Dividend",
    "def": "Economic growth potential resulting from a higher ratio of working-age population (15-64) to non-working dependents."
  },
  {
    "term": "Dependency Ratio",
    "def": "The economic ratio of non-working dependents (under 15 & over 65) to the working-age population."
  },
  {
    "term": "Developed Resource",
    "def": "A natural resource that has been surveyed, quantified, and is currently being utilized with available technology."
  },
  {
    "term": "District Election Officer (DEO)",
    "def": "The official (usually District Collector) overseeing election logistics at the district level."
  },
  {
    "term": "Economic Feasibility",
    "def": "The condition where the financial benefit derived from resource extraction exceeds the total extraction cost."
  },
  {
    "term": "Ecosystem Services",
    "def": "The essential benefits provided by natural ecosystems to humanity (provisioning, regulating, supporting, cultural)."
  },
  {
    "term": "Election Affidavit",
    "def": "A sworn legal document filed by election candidates disclosing financial assets, liabilities, and criminal records."
  },
  {
    "term": "Election Commission of India",
    "def": "An autonomous constitutional body administering election processes in India."
  },
  {
    "term": "Entrepreneurship",
    "def": "The human capacity to combine land, labour, and capital, introduce innovations, and assume business risks for profit."
  },
  {
    "term": "EPIC",
    "def": "Elector's Photo Identity Card issued by the Election Commission of India to registered voters."
  },
  {
    "term": "EVM",
    "def": "Electronic Voting Machine used in Indian elections to record and tally votes electronically."
  },
  {
    "term": "Exclusive Economic Zone (EEZ)",
    "def": "Sea area extending up to 200 nautical miles from coastline where a country holds exclusive resource rights."
  },
  {
    "term": "Factors of Production",
    "def": "The four economic inputs required to produce goods and services: Land, Labour, Capital, and Entrepreneurship."
  },
  {
    "term": "Fazl Ali Commission",
    "def": "The 1953 States Reorganisation Commission chaired by Justice Fazl Ali recommending linguistic state boundaries."
  },
  {
    "term": "Fixed Capital",
    "def": "Durable physical capital assets used repeatedly in production over long periods, like machinery and buildings."
  },
  {
    "term": "General Election",
    "def": "Elections held every 5 years nationwide to elect members to the Lok Sabha or State Legislative Assemblies."
  },
  {
    "term": "Geothermal Energy",
    "def": "Heat energy trapped inside the Earth harnessed to generate clean electricity."
  },
  {
    "term": "Human Capital",
    "def": "The knowledge, skills, technical expertise, and health embodied in a nation's working population."
  },
  {
    "term": "Hydroelectricity",
    "def": "Electricity generated by harnessing the kinetic energy of fast-flowing water through turbines."
  },
  {
    "term": "Independent Candidate",
    "def": "A candidate contesting an election without belonging to any registered political party."
  },
  {
    "term": "Individual Resource",
    "def": "A resource privately owned by an individual person, such as a private house or farmland plot."
  },
  {
    "term": "Instrument of Accession",
    "def": "A legal document signed by princely state rulers in 1947 acceding to the Union of India."
  },
  {
    "term": "International Resource",
    "def": "Oceanic resources beyond 200 nautical miles of EEZ regulated by international treaty organizations."
  },
  {
    "term": "J.R.D. Tata",
    "def": "Visionary Indian entrepreneur who founded Tata Airlines (Air India) and pioneered Indian industrial development."
  },
  {
    "term": "Junagadh",
    "def": "Princely state in Gujarat integrated into India following a democratic plebiscite in February 1948."
  },
  {
    "term": "Kaizen",
    "def": "A Japanese business philosophy of continuous, incremental improvement in workplace efficiency and quality."
  },
  {
    "term": "Labour",
    "def": "The human physical and mental effort exerted in the production of goods and services for wages."
  },
  {
    "term": "Land",
    "def": "In economics, all natural resources provided by nature free of cost above, on, or below Earth's surface."
  },
  {
    "term": "Lok Sabha",
    "def": "The House of the People, the lower house of the Parliament of India consisting of 543 elected MPs."
  },
  {
    "term": "Mental Labour",
    "def": "Intellectual work requiring cognitive analysis, skill, professional knowledge, and problem-solving."
  },
  {
    "term": "Model Code of Conduct",
    "def": "Ethical guidelines issued by ECI governing political parties and candidates during elections."
  },
  {
    "term": "National Resource",
    "def": "Resources belonging to the nation state within political borders and 12 nautical miles of territorial waters."
  },
  {
    "term": "Nizam of Hyderabad",
    "def": "Ruler Mir Osman Ali Khan of Hyderabad whose state was integrated into India via Operation Polo in Sept 1948."
  },
  {
    "term": "Non-Renewable Resource",
    "def": "A natural resource formed over millions of years that cannot be replenished once depleted."
  },
  {
    "term": "NOTA",
    "def": "None of the Above option on EVMs allowing voters to express rejection of all contesting candidates."
  },
  {
    "term": "Operation Polo",
    "def": "The 1948 military police action that integrated the princely state of Hyderabad into India."
  },
  {
    "term": "Physical Labour",
    "def": "Manual work requiring primarily muscular strength and physical stamina."
  },
  {
    "term": "Potti Sreeramulu",
    "def": "Freedom fighter whose 56-day fast unto death in 1952 led to the creation of Andhra State."
  },
  {
    "term": "Potential Resource",
    "def": "A natural resource found in a region that has not yet been utilized due to lack of technology or investment."
  },
  {
    "term": "Privy Purse",
    "def": "Tax-free financial allowances granted to princely state rulers upon merger with India (abolished 1971)."
  },
  {
    "term": "Razakars",
    "def": "Paramilitary militia in Hyderabad that suppressed citizens protesting for union with India before Operation Polo."
  },
  {
    "term": "Renewable Resource",
    "def": "A natural resource that replenishes naturally through environmental cycles in a short timeframe."
  },
  {
    "term": "Reserved Constituency",
    "def": "An electoral constituency set aside exclusively for candidates belonging to SC or ST communities."
  },
  {
    "term": "Returning Officer (RO)",
    "def": "The official responsible for overseeing the election process and nomination scrutiny in a constituency."
  },
  {
    "term": "Sardar Vallabhbhai Patel",
    "def": "India's first Deputy Prime Minister and Home Minister who unified 565+ princely states."
  },
  {
    "term": "Secret Ballot",
    "def": "A voting method ensuring that a voter's ballot choice remains confidential and private."
  },
  {
    "term": "Silence Period",
    "def": "The 48-hour window before polling closes during which all public election campaigning is legally prohibited."
  },
  {
    "term": "States Reorganisation Act 1956",
    "def": "Landmark legislation redrawing Indian state boundaries primarily along linguistic lines (14 States + 6 UTs)."
  },
  {
    "term": "Supply Chain",
    "def": "The complete network of processes involved in producing and delivering a product from raw material to customer."
  },
  {
    "term": "Sustainable Development",
    "def": "Development satisfying present needs without compromising the ability of future generations to satisfy theirs."
  },
  {
    "term": "Universal Adult Franchise",
    "def": "The democratic right of every adult citizen (aged 18+) to vote without discrimination."
  },
  {
    "term": "Vidhan Sabha",
    "def": "The Legislative Assembly of an Indian State whose members (MLAs) are directly elected by voters."
  },
  {
    "term": "VVPAT",
    "def": "Voter Verifiable Paper Audit Trail machine printing a 7-second paper slip for EVM vote verification."
  },
  {
    "term": "Working Capital",
    "def": "Raw materials and cash liquidity consumed or converted during a single production cycle."
  }
];

const SVG_DIAGRAMS = [
  {
    title: "1. India Administrative & Political Map (States & Union Territories)",
    desc: "Complete high-resolution political map of India detailing all 28 States and 8 Union Territories with state capitals.",
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/India_political_map.svg/1024px-India_political_map.svg.png",
    fallbackUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/India_administrative_map.svg/1024px-India_administrative_map.svg.png"
  },
  {
    title: "2. Historical Map of Pre-1947 British India & Princely States",
    desc: "Historical administrative map depicting British Indian Provinces alongside over 565 Princely States before August 1947 accession.",
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/India_1947_partition.svg/1024px-India_1947_partition.svg.png",
    fallbackUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/British_Indian_Empire_1909_imperial_gazetteer_map.jpg/1024px-British_Indian_Empire_1909_imperial_gazetteer_map.jpg"
  },
  {
    title: "3. Indian Electronic Voting Machine (EVM) & VVPAT System",
    desc: "Detailed photographic schematic of the Control Unit, Balloting Unit, and Voter Verifiable Paper Audit Trail (VVPAT) unit used in Indian democratic elections.",
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Indian_EVM_with_VVPAT.jpg/1024px-Indian_EVM_with_VVPAT.jpg",
    fallbackUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Indian_Electronic_Voting_Machine.jpg/1024px-Indian_Electronic_Voting_Machine.jpg"
  },
  {
    title: "4. Natural Resources Classification Tree Diagram",
    desc: "Comprehensive geographical classification tree of natural resources based on origin (biotic/abiotic), exhaustibility (renewable/non-renewable), and ownership.",
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Renewable_energy_sources.svg/1024px-Renewable_energy_sources.svg.png",
    fallbackUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Resource_classification_chart.svg/1024px-Resource_classification_chart.svg.png"
  },
  {
    title: "5. Factors of Production & Circular Flow of Economic Income",
    desc: "Economic diagram illustrating how Land, Labour, Capital, and Entrepreneurship generate Rent, Wages, Interest, and Profit across households and firms.",
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Circular_flow_of_income_model.svg/1024px-Circular_flow_of_income_model.svg.png",
    fallbackUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Factors_of_production_diagram.svg/1024px-Factors_of_production_diagram.svg.png"
  },
  {
    title: "6. Global Supply Chain & Manufacturing Logistics Network",
    desc: "5-stage supply chain flow diagram showing raw material extraction, component manufacturing, assembly, warehouse logistics, and retail sale.",
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Supply_chain_management_diagram.svg/1024px-Supply_chain_management_diagram.svg.png",
    fallbackUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Supply_chain_stages.svg/1024px-Supply_chain_stages.svg.png"
  },
  {
    title: "7. India Demographic Dividend & Age-Group Population Pyramid",
    desc: "Statistical demographic pyramid showing India's youth workforce advantage with over 65% of the population in the 15–64 working-age bracket.",
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/India_single_age_population_pyramid_2020.png/1024px-India_single_age_population_pyramid_2020.png",
    fallbackUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/India_demographic_transition.png/1024px-India_demographic_transition.png"
  },
  {
    title: "8. Election Commission of India & Democratic Voting Booth",
    desc: "Constitutional structure diagram and polling booth setup illustrating secret ballot voting, Presiding Officers, and EVM security.",
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Indian_General_Election_Polling_Station.jpg/1024px-Indian_General_Election_Polling_Station.jpg",
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
    });
  });

  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('header nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
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

function updateHeroStats() {
  const statTopics = document.getElementById('stat-total-topics');
  if (statTopics) statTopics.textContent = TOPICS.length;

  const statFc = document.getElementById('stat-fc-learned');
  if (statFc) statFc.textContent = `${STATE.learnedFlashcards.length} / ${FLASHCARDS.length}`;

  const statQuiz = document.getElementById('stat-quiz-high');
  if (statQuiz) statQuiz.textContent = `${STATE.quizHighScore} / ${MCQS.length}`;

  const statBm = document.getElementById('stat-bookmarks');
  if (statBm) statBm.textContent = STATE.bookmarks.length;
}

function renderTopics() {
  const grids = {
    'natural-resources': document.getElementById('natural-resources-grid'),
    'political-map': document.getElementById('political-map-grid'),
    'electoral-system': document.getElementById('electoral-system-grid'),
    'factors-production': document.getElementById('factors-production-grid')
  };

  Object.values(grids).forEach(grid => { if (grid) grid.innerHTML = ''; });

  TOPICS.forEach((topic, idx) => {
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
  renderTopics();
  updateHeroStats();
  
  const modalBm = document.getElementById('modal-bookmark');
  if (modalBm) {
    modalBm.textContent = STATE.bookmarks.includes(id) ? '★' : '☆';
  }
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
  if (body) body.innerHTML = topic.contentHtml;
  if (bookmarkBtn) {
    bookmarkBtn.textContent = STATE.bookmarks.includes(topic.id) ? '★' : '☆';
    bookmarkBtn.onclick = () => toggleBookmark(topic.id);
  }

  if (overlay) {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  setupModalBodyScroll();
  setupKeyboardListeners();
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  if (overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function navigateModalTopic(direction) {
  let newIdx = STATE.currentTopicIndex + direction;
  if (newIdx < 0) newIdx = TOPICS.length - 1;
  if (newIdx >= TOPICS.length) newIdx = 0;
  openModal(newIdx);
}

function setupModalBodyScroll() {
  const body = document.getElementById('modal-body');
  const progress = document.getElementById('modal-progress');
  if (!body || !progress) return;

  body.onscroll = () => {
    const scrolled = (body.scrollTop / (body.scrollHeight - body.clientHeight)) * 100;
    progress.style.width = scrolled + '%';
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
    <html>
      <head>
        <title>${topic.title} — SST Study Guide</title>
        <style>
          body { font-family: sans-serif; padding: 30px; line-height: 1.6; color: #111; }
          h1 { color: #0f172a; border-bottom: 2px solid #0284c7; padding-bottom: 10px; }
          table { width: 100%; border-collapse: collapse; margin: 20px 0; }
          th, td { border: 1px solid #cbd5e1; padding: 10px; text-align: left; }
          th { background: #f1f5f9; }
          .callout { background: #f8fafc; border-left: 4px solid #0284c7; padding: 15px; margin: 15px 0; }
        </style>
      </head>
      <body>
        <h1>${topic.title}</h1>
        ${topic.contentHtml}
      </body>
    </html>
  `);
  printWin.document.close();
  printWin.focus();
  printWin.print();
}

function setupKeyboardListeners() {
  document.onkeydown = (e) => {
    const overlay = document.getElementById('modal-overlay');
    if (overlay && overlay.classList.contains('open')) {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') navigateModalTopic(-1);
      if (e.key === 'ArrowRight') navigateModalTopic(1);
    }
  };
}

function renderFlashcards() {
  if (STATE.flashcardFiltered.length === 0) {
    STATE.flashcardFiltered = [...FLASHCARDS];
  }
  updateFlashcardUI();
}

function updateFlashcardUI() {
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
  STATE.flashcardIndex = (STATE.flashcardIndex + 1) % STATE.flashcardFiltered.length;
  updateFlashcardUI();
}

function prevFlashcard() {
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
  localStorage.setItem('g8_sst_learned_fc', JSON.stringify(STATE.learnedFlashcards));
  updateFlashcardUI();
  updateHeroStats();
}

function filterFlashcards(event, topicName) {
  document.querySelectorAll('.fc-filter-btn').forEach(btn => btn.classList.remove('active'));
  if (event && event.target) event.target.classList.add('active');

  if (topicName === 'All') {
    STATE.flashcardFiltered = [...FLASHCARDS];
  } else {
    STATE.flashcardFiltered = FLASHCARDS.filter(c => c.topic === topicName);
  }
  STATE.flashcardIndex = 0;
  updateFlashcardUI();
}

function shuffleFlashcards() {
  for (let i = STATE.flashcardFiltered.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [STATE.flashcardFiltered[i], STATE.flashcardFiltered[j]] = [STATE.flashcardFiltered[j], STATE.flashcardFiltered[i]];
  }
  STATE.flashcardIndex = 0;
  updateFlashcardUI();
  showToast('🔀 Flashcards shuffled!');
}

function renderQuiz() {
  STATE.quizActiveQuestions = [...MCQS];
  STATE.quizIndex = 0;
  STATE.quizScore = 0;
  updateQuizQuestion();
}

function updateQuizQuestion() {
  const q = STATE.quizActiveQuestions[STATE.quizIndex];
  if (!q) return;

  const count = document.getElementById('quiz-count');
  const fill = document.getElementById('quiz-fill');
  const title = document.getElementById('quiz-q-title');
  const optionsWrap = document.getElementById('quiz-options');
  const expWrap = document.getElementById('quiz-explanation');
  const nextBtn = document.getElementById('quiz-next-btn');

  if (count) count.textContent = `Question ${STATE.quizIndex + 1} of ${STATE.quizActiveQuestions.length}`;
  if (fill) fill.style.width = `${((STATE.quizIndex + 1) / STATE.quizActiveQuestions.length) * 100}%`;
  if (title) title.textContent = q.q;

  if (expWrap) { expWrap.style.display = 'none'; expWrap.innerHTML = ''; }
  if (nextBtn) nextBtn.style.display = 'none';

  if (optionsWrap) {
    optionsWrap.innerHTML = '';
    q.opts.forEach((optText, optIdx) => {
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

  const isCorrect = selectedIdx === q.ans;
  if (isCorrect) {
    buttons[selectedIdx].classList.add('correct');
    STATE.quizScore++;
    showToast('✨ Correct Answer!');
  } else {
    buttons[selectedIdx].classList.add('wrong');
    buttons[q.ans].classList.add('correct');
    showToast('❌ Incorrect answer');
  }

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
      <p style="font-size:1.2rem; color:var(--gray-light);">Your Score: <strong style="color:var(--emerald);">${STATE.quizScore} / ${STATE.quizActiveQuestions.length}</strong> (${percent}%)</p>
      <div style="margin:25px 0;">
        <button class="cta-btn" onclick="location.reload()">Restart Full Quiz</button>
      </div>
    </div>
  `;
}


function renderImportantQuestions() {
  const container = document.getElementById('important-questions-wrap');
  if (!container) return;

  container.innerHTML = `
    <div class="accordion-group" style="margin-bottom:30px;">
      <h3 style="color:var(--cyan); margin-bottom:15px;">⭐ 1 Mark Questions</h3>
      ${IMPORTANT_QUESTIONS.m1.map(item => `
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
      ${IMPORTANT_QUESTIONS.m2.map(item => `
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
      ${IMPORTANT_QUESTIONS.m3.map(item => `
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
      ${IMPORTANT_QUESTIONS.m5.map(item => `
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
      .accordion-item.active .accordion-body { max-height: 1500px !important; padding-top: 10px !important; padding-bottom: 20px !important; }
      .accordion-item.active .acc-icon { transform: rotate(45deg); color: var(--rose) !important; }
      .accordion-item.active { border-color: var(--cyan) !important; box-shadow: 0 0 15px rgba(34, 211, 238, 0.2); }
    `;
    document.head.appendChild(style);
  }
}


function renderGlossary() {
  const lettersWrap = document.getElementById('glossary-letters');
  const grid = document.getElementById('glossary-grid');
  if (!grid) return;

  const alphabet = ['ALL', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];
  if (lettersWrap) {
    lettersWrap.innerHTML = alphabet.map(l => `
      <button class="glossary-letter-btn ${l === 'ALL' ? 'active' : ''}" onclick="filterGlossaryLetter(event, '${l}')">${l}</button>
    `).join('');
  }

  displayGlossaryTerms(GLOSSARY);
}

function displayGlossaryTerms(terms) {
  const grid = document.getElementById('glossary-grid');
  if (!grid) return;

  grid.innerHTML = terms.map(item => `
    <div class="card glossary-card" style="height:auto;">
      <div style="font-weight:700; color:var(--cyan); font-size:1.1rem; margin-bottom:6px;">${item.term}</div>
      <p style="color:var(--gray-light); font-size:0.9rem; margin:0; line-height:1.5;">${item.def}</p>
    </div>
  `).join('');
}

function filterGlossaryLetter(event, letter) {
  document.querySelectorAll('.glossary-letter-btn').forEach(btn => btn.classList.remove('active'));
  if (event && event.target) event.target.classList.add('active');

  if (letter === 'ALL') {
    displayGlossaryTerms(GLOSSARY);
  } else {
    const filtered = GLOSSARY.filter(item => item.term.toUpperCase().startsWith(letter));
    displayGlossaryTerms(filtered);
  }
}

function renderDiagrams() {
  const container = document.getElementById('diagrams-grid');
  if (!container) return;
  container.innerHTML = '';

  SVG_DIAGRAMS.forEach((d) => {
    const card = document.createElement('div');
    card.className = 'diagram-card card';
    card.style.cssText = 'height:auto; display:flex; flex-direction:column; gap:12px; cursor:pointer;';
    card.innerHTML = `
      <div class="diagram-img-wrap" style="position:relative; width:100%; height:220px; border-radius:8px; overflow:hidden; background:var(--navy-darker);" onclick="openDiagramLightbox('${d.imgUrl}', '${d.title.replace(/'/g, "\'")}')">
        <img src="${d.imgUrl}" alt="${d.title}" loading="lazy" style="width:100%; height:100%; object-fit:cover; transition:transform 0.3s var(--ease);" onerror="this.onerror=null; this.src='${d.fallbackUrl}';">
        <div class="diagram-img-overlay" style="position:absolute; inset:0; background:rgba(7,26,46,0.7); color:var(--cyan); display:flex; align-items:center; justify-content:center; opacity:0; transition:opacity 0.3s var(--ease); font-weight:700; font-size:0.9rem;">
          🔍 Click to View High-Res Diagram
        </div>
      </div>
      <div class="diagram-info" style="padding:5px 0;">
        <h4 style="color:var(--cyan); margin:0 0 6px 0; font-size:1.05rem;">${d.title}</h4>
        <p style="color:var(--gray-light); font-size:0.85rem; margin:0; line-height:1.5;">${d.desc}</p>
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

function openDiagramLightbox(imgUrl, title) {
  let lightbox = document.getElementById('diagram-lightbox');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.id = 'diagram-lightbox';
    lightbox.className = 'modal-overlay';
    lightbox.onclick = (e) => { if (e.target === lightbox) lightbox.classList.remove('open'); };
    document.body.appendChild(lightbox);
  }
  lightbox.innerHTML = `
    <div class="modal-box" style="max-width:950px; text-align:center; padding:24px; background:var(--glass-modal); border:1px solid var(--cyan); border-radius:16px;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
        <h3 style="margin:0; color:var(--cyan); font-size:1.2rem;">${title}</h3>
        <button class="icon-btn" onclick="document.getElementById('diagram-lightbox').classList.remove('open')">✕</button>
      </div>
      <div style="background:var(--navy-darker); padding:16px; border-radius:14px; max-height:75vh; overflow:auto; display:flex; justify-content:center; align-items:center; border:1px solid var(--glass-border);">
        <img src="${imgUrl}" alt="${title}" style="max-width:100%; max-height:70vh; object-fit:contain; border-radius:8px; box-shadow:0 10px 30px rgba(0,0,0,0.6);">
      </div>
    </div>
  `;
  lightbox.classList.add('open');
}

function renderQuickRevision() {
  const container = document.getElementById('quick-revision-wrap');
  if (!container) return;

  container.innerHTML = `
    <div class="chapter-section" style="padding-top:10px;">
      <div class="callout callout-important" style="margin-bottom:30px;">
        <div class="callout-title">⚡ 15-Minute Rapid Exam Summary</div>
        Review key constitutional articles, economic formulas, historical timelines, golden memory tricks, comparison tables, and common pitfalls before stepping into your Social Science examination.
      </div>

      <!-- KEY FORMULAS & CONSTITUTIONAL ARTICLES -->
      <h3 style="color:var(--cyan); margin-bottom:14px;">📜 Key Constitutional Articles & Economic Formulas</h3>
      <div class="formula-block" style="text-align:left; margin-bottom:30px;">
        <ul style="line-height:1.9;">
          <li><strong>Article 326 (Universal Adult Franchise):</strong> Elections to Lok Sabha & Legislative Assemblies on adult suffrage (Voting age 18+).</li>
          <li><strong>Article 324 (Election Commission):</strong> Independent constitutional authority for election superintendence and control.</li>
          <li><strong>Resource Status Threshold:</strong> Resource = Natural Substance + Technological Accessibility + Economic Feasibility + Cultural Acceptability.</li>
          <li><strong>Dependency Ratio Formula:</strong> Dependency Ratio = [(Population < 15 + Population > 65) / Working-Age Population (15–64)] &times; 100</li>
          <li><strong>61st Constitutional Amendment Act (1988):</strong> Lowered minimum voting age from 21 to 18 years.</li>
          <li><strong>States Reorganisation Act 1956 (7th Amendment):</strong> Created 14 States & 6 Union Territories on linguistic lines.</li>
          <li><strong>26th Constitutional Amendment Act (1971):</strong> Abolished Privy Purse pensions for former princely state rulers.</li>
        </ul>
      </div>

      <!-- HISTORICAL TIMELINE TABLE -->
      <h3 style="color:var(--cyan); margin-bottom:14px;">📅 Major Historical & Constitutional Milestones</h3>
      <table style="width:100%; border-collapse:collapse; margin-bottom:30px;">
        <thead>
          <tr><th style="background:var(--navy-dark); color:var(--cyan); padding:10px; border:1px solid var(--glass-border);">Year</th><th style="background:var(--navy-dark); color:var(--cyan); padding:10px; border:1px solid var(--glass-border);">Historical Event / Milestone</th><th style="background:var(--navy-dark); color:var(--cyan); padding:10px; border:1px solid var(--glass-border);">Significance in Social Science</th></tr>
        </thead>
        <tbody>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>Aug 15, 1947</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Indian Independence</td><td style="padding:8px; border:1px solid var(--glass-border);">Lapse of British Paramountcy over 565+ Princely States.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>Oct 26, 1947</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">J&K Instrument of Accession</td><td style="padding:8px; border:1px solid var(--glass-border);">Maharaja Hari Singh acceded to India during tribal invasion.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>Feb 1948</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Junagadh Plebiscite</td><td style="padding:8px; border:1px solid var(--glass-border);">Over 99% voted for merger with India in referendum.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>Sept 1948</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Operation Polo (Hyderabad)</td><td style="padding:8px; border:1px solid var(--glass-border);">5-day police action integrating Nizam's state into India.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>Jan 26, 1950</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Constitution of India Enacted</td><td style="padding:8px; border:1px solid var(--glass-border);">Article 326 granted Universal Adult Franchise.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>Dec 1952</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Potti Sreeramulu Fasting</td><td style="padding:8px; border:1px solid var(--glass-border);">Passed away after 56 days; catalyzed Andhra State in Oct 1953.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>Dec 1953</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">States Reorganisation Commission</td><td style="padding:8px; border:1px solid var(--glass-border);">Appointed under Justice Fazl Ali, H.N. Kunzru, K.M. Panikkar.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1956</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">States Reorganisation Act</td><td style="padding:8px; border:1px solid var(--glass-border);">Redrew map into 14 States and 6 Union Territories on linguistic lines.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>Dec 1961</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Operation Vijay (Goa)</td><td style="padding:8px; border:1px solid var(--glass-border);">Liberated Goa, Daman & Diu from 450 years of Portuguese rule.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1982</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">First EVM Trial</td><td style="padding:8px; border:1px solid var(--glass-border);">Tested in Paravur Assembly Constituency, Kerala.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>1988 (1989)</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">61st Amendment Act</td><td style="padding:8px; border:1px solid var(--glass-border);">Voting age reduced from 21 to 18 years.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>2004</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Nationwide EVM Rollout</td><td style="padding:8px; border:1px solid var(--glass-border);">EVMs used in all 543 Lok Sabha constituencies.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>2013 / 2019</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">VVPAT & NOTA Integration</td><td style="padding:8px; border:1px solid var(--glass-border);">7-second paper trail & None of the Above option added.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>June 2, 2014</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">Telangana Statehood</td><td style="padding:8px; border:1px solid var(--glass-border);">Formed as India's 29th State from Andhra Pradesh.</td></tr>
          <tr><td style="padding:8px; border:1px solid var(--glass-border);"><strong>Oct 31, 2019</strong></td><td style="padding:8px; border:1px solid var(--glass-border);">J&K Reorganisation</td><td style="padding:8px; border:1px solid var(--glass-border);">J&K reorganized into two Union Territories (J&K and Ladakh).</td></tr>
        </tbody>
      </table>

      <!-- HIGH-YIELD COMPARISON TABLES -->
      <h3 style="color:var(--cyan); margin-bottom:14px;">⚔️ High-Yield Exam Comparison Tables</h3>

      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(380px, 1fr)); gap:20px; margin-bottom:30px;">
        <div class="card" style="height:auto;">
          <h4 style="color:var(--cyan); margin-top:0;">Fixed Capital vs. Working Capital</h4>
          <table style="width:100%; border-collapse:collapse; font-size:0.85rem;">
            <thead><tr><th>Feature</th><th>Fixed Capital</th><th>Working Capital</th></tr></thead>
            <tbody>
              <tr><td><strong>Lifespan</strong></td><td>Durable over years</td><td>Single production cycle</td></tr>
              <tr><td><strong>Exhaustion</strong></td><td>Does not get used up</td><td>Consumed/transformed completely</td></tr>
              <tr><td><strong>Examples</strong></td><td>Machinery, Tractor, Factory</td><td>Seeds, Raw Cotton, Cash</td></tr>
            </tbody>
          </table>
        </div>

        <div class="card" style="height:auto;">
          <h4 style="color:var(--cyan); margin-top:0;">Biotic vs. Abiotic Resources</h4>
          <table style="width:100%; border-collapse:collapse; font-size:0.85rem;">
            <thead><tr><th>Feature</th><th>Biotic Resources</th><th>Abiotic Resources</th></tr></thead>
            <tbody>
              <tr><td><strong>Origin</strong></td><td>Living organic matter</td><td>Non-living inorganic matter</td></tr>
              <tr><td><strong>Renewability</strong></td><td>Biological reproduction</td><td>Geological time / Cycles</td></tr>
              <tr><td><strong>Examples</strong></td><td>Forests, Crops, Fish, Coal</td><td>Land, Air, Water, Iron Ore</td></tr>
            </tbody>
          </table>
        </div>

        <div class="card" style="height:auto;">
          <h4 style="color:var(--cyan); margin-top:0;">Lok Sabha vs. Vidhan Sabha</h4>
          <table style="width:100%; border-collapse:collapse; font-size:0.85rem;">
            <thead><tr><th>Feature</th><th>Lok Sabha</th><th>Vidhan Sabha</th></tr></thead>
            <tbody>
              <tr><td><strong>Level</strong></td><td>Union National Parliament</td><td>State Legislative Assembly</td></tr>
              <tr><td><strong>Members</strong></td><td>543 MPs</td><td>MLAs (Varies by state size)</td></tr>
              <tr><td><strong>Head</strong></td><td>Prime Minister</td><td>Chief Minister</td></tr>
            </tbody>
          </table>
        </div>

        <div class="card" style="height:auto;">
          <h4 style="color:var(--cyan); margin-top:0;">Physical Labour vs. Mental Labour</h4>
          <table style="width:100%; border-collapse:collapse; font-size:0.85rem;">
            <thead><tr><th>Feature</th><th>Physical Labour</th><th>Mental Labour</th></tr></thead>
            <tbody>
              <tr><td><strong>Effort</strong></td><td>Muscular strength & stamina</td><td>Cognitive analysis & skill</td></tr>
              <tr><td><strong>Input</strong></td><td>Manual execution</td><td>Problem-solving & design</td></tr>
              <tr><td><strong>Examples</strong></td><td>Construction worker, Porter</td><td>Surgeon, Software engineer</td></tr>
            </tbody>
          </table>
        </div>
      </div>

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
  renderTopics();
  renderFlashcards();
  renderQuiz();
  renderImportantQuestions();
  renderGlossary();
  renderDiagrams();
  renderQuickRevision();
  setupSearch();
  updateHeroStats();

  console.log('SST Study Guide SPA Engine Initialized!');
});
