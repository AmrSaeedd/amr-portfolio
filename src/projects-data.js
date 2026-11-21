const BASE = import.meta.env.BASE_URL;

export const projectsData = [
  {
    id: 'alam-el-roum',
    title: 'Alam El Roum',
    subtitle: 'Data-Driven Adaptive Urban Planning & Coastal Resilience',
    category: 'urban',
    categories: ['urban', 'gis'],
    year: '2024',
    location: 'Matrouh Governorate, Ras El Hekma Sector, Egypt',
    role: 'Lead Urban Planner & GIS Analyst (Graduation Project)',
    tools: ['ArcGIS Pro', 'QGIS', 'Python / ML (K-Means)', 'AutoCAD', 'Photoshop'],
    coverImage: BASE + 'images/projects/alam-el-roum/Web Cover.png',
    pageUrl: BASE + 'projects/alam-el-roum.html',
    summary: 'A pioneering graduation project proposing an adaptive, data-driven master plan for the Alam El Roum coastal sector in Matrouh Governorate. The study integrates machine learning algorithms for environmental vulnerability classification with resilient spatial planning.',
    keyHighlights: [
      'Machine Learning Fragility Mapping: Utilized K-Means clustering algorithm on multi-temporal satellite imagery to classify environmental fragility zones.',
      'Predictive Environmental Analysis: Evaluated temporal shifts in NDVI (Normalized Difference Vegetation Index) and NDWI (Normalized Difference Water Index) to identify sensitive ecological zones.',
      'Resilient Land Allocation: Designed a responsive land allocation matrix separating high-density mixed uses from environmentally fragile coastal dynamics.',
      'Integrated Infrastructure: Formulated comprehensive road circulation hierarchies, surface drainage networks, and flood-safe urban corridors.',
    ],
    overview: `The Alam El Roum sector, located within the strategically vital Matrouh / Ras El Hekma coastal corridor, presents immense development potential paired with delicate environmental sensitivities. This graduation project develops an innovative methodology uniting advanced remote sensing, machine learning, and physical master planning.

By analyzing multi-spectral imagery and running K-Means clustering algorithms to detect environmental fragility, the project established clear ecological baselines. The resulting master plan balances coastal tourism, residential clusters, public amenities, and infrastructure networks while ensuring sustainable preservation of local topography and natural drainage paths.`,
    stats: [
      { label: 'Study Area', value: 'Coastal Sector' },
      { label: 'Methodology', value: 'Data-Driven & ML' },
      { label: 'Focus', value: 'Adaptive Planning' },
      { label: 'Classification', value: 'K-Means Clustering' },
    ],
    images: [
      {
        src: BASE + 'images/projects/alam-el-roum/Web Cover.png',
        title: 'Project Title & Web Cover',
        caption: 'Strategic adaptive coastal planning title board and comprehensive sector overview.',
        type: 'Cover'
      },
      {
        src: BASE + 'images/projects/alam-el-roum/masterplan-full.jpg',
        title: 'Comprehensive Master Plan',
        caption: 'Final comprehensive master plan showing zoning, road hierarchy, land allocation, and green corridors.',
        type: 'Master Plan'
      },
      {
        src: BASE + 'images/projects/alam-el-roum/sector.jpg',
        title: 'Ras El Hekma / Alam El Roum Regional Sector',
        caption: 'Regional spatial context and environmental transect across the Mediterranean coastal strip.',
        type: 'Context'
      },
      {
        src: BASE + 'images/projects/alam-el-roum/location.jpg',
        title: 'Site Location & Geographic Context',
        caption: 'Geographic positioning, regional road linkages, and coastal boundary demarcation.',
        type: 'Analysis'
      },
      {
        src: BASE + 'images/projects/alam-el-roum/methodology.png',
        title: 'Methodology & Analytical Framework',
        caption: 'Workflow diagram detailing multi-criteria spatial modeling, machine learning fragility index, and master planning.',
        type: 'Methodology'
      },
      {
        src: BASE + 'images/projects/alam-el-roum/plan.jpg',
        title: 'Urban Layout & Parcelization',
        caption: 'Detailed urban structure, street network hierarchy, and functional land allocation.',
        type: 'Plan'
      },
      {
        src: BASE + 'images/projects/alam-el-roum/board1.jpg',
        title: 'Graduation Project Board 1',
        caption: 'Complete presentation board featuring regional analysis, environmental modeling, and site diagnosis.',
        type: 'Board'
      },
      {
        src: BASE + 'images/projects/alam-el-roum/board2.jpg',
        title: 'Graduation Project Board 2',
        caption: 'Master plan development board detailing zoning parameters, infrastructure networks, and development phases.',
        type: 'Board'
      }
    ]
  },
  {
    id: 'sohag',
    title: 'Sohag',
    subtitle: 'Strategic Regional Planning & Alternatives Analysis',
    category: 'regional',
    categories: ['regional', 'gis'],
    year: '2023',
    location: 'Sohag Governorate, Upper Egypt',
    role: 'Regional Planner & GIS Specialist',
    tools: ['ArcGIS', 'AutoCAD', 'Photoshop', 'PowerPoint'],
    coverImage: BASE + 'images/projects/sohag/web cover.jpg',
    pageUrl: BASE + 'projects/sohag.html',
    summary: 'A comprehensive strategic regional planning study for Sohag Governorate, evaluating regional socio-economic drivers, demographic pressures, agricultural preservation boundaries, and spatial expansion corridors.',
    keyHighlights: [
      'Regional Diagnostic Analysis: Comprehensive spatial assessment of demographic expansion, infrastructure deficits, and prime agricultural soil protection.',
      'Regional Growth Alternatives: Developed and compared three distinct regional development scenarios (Linear Nile-oriented, Polycentric nodal, and Desert-expansion models).',
      'Multi-Criteria Decision Evaluation: Ranked regional alternatives through weighted spatial suitability analysis and stakeholder criteria.',
      'Strategic Regional Master Plan: Formulated actionable regional zoning policies, inter-city mobility networks, and specialized economic/industrial clusters.',
    ],
    overview: `Sohag Governorate in Upper Egypt confronts critical regional planning dilemmas: population growth placing heavy pressure on narrow, irreplaceable fertile agricultural lands bordering the River Nile. 

This project formulated a forward-looking strategic regional plan that redirects growth eastward and westward into desert plateau fringes while revitalizing core city service centers. The study features thorough multi-layered GIS spatial analyses, comparative regional alternatives, and land-use suitability frameworks that protect agricultural wealth and unlock sustainable regional economic development.`,
    stats: [
      { label: 'Scale', value: 'Regional / Governorate' },
      { label: 'Focus', value: 'Regional Planning' },
      { label: 'Scenarios', value: '3 Regional Alternatives' },
      { label: 'Approach', value: 'GIS Suitability Model' },
    ],
    images: [
      {
        src: BASE + 'images/projects/sohag/web cover.jpg',
        title: 'Strategic Regional Master Plan',
        caption: 'Approved strategic development framework for the designated Sohag regional sector.',
        type: 'Regional Plan'
      },
      {
        src: BASE + 'images/projects/sohag/plan.jpg',
        title: 'Sector Master Plan Detailed',
        caption: 'Strategic sector masterplan showing development corridors, services, and preservation boundaries.',
        type: 'Plan'
      },
      {
        src: BASE + 'images/projects/sohag/alternatives.jpg',
        title: 'Strategic Regional Alternatives',
        caption: 'Comparative assessment and spatial configuration of alternative regional development scenarios.',
        type: 'Analysis'
      },
      {
        src: BASE + 'images/projects/sohag/general-analysis.jpg',
        title: 'General Regional Analysis',
        caption: 'Comprehensive analysis of demographic trends, road networks, topographical features, and land capability.',
        type: 'Analysis'
      },
      {
        src: BASE + 'images/projects/sohag/about.jpg',
        title: 'Regional Sector Diagnosis & Context',
        caption: 'Regional planning sector definition, boundary constraints, and connectivity matrix.',
        type: 'Context'
      },
      {
        src: BASE + 'images/projects/sohag/analysis.jpg',
        title: 'Land Use & Socio-Economic Dynamics',
        caption: 'Detailed thematic mapping of current land occupations and physical infrastructure conditions.',
        type: 'Analysis'
      }
    ]
  },
  {
    id: 'detailed-urban-planning',
    title: 'Detailed Urban Planning',
    subtitle: 'Comprehensive District Masterplan, Parceling & Regulatory Framework',
    category: 'urban',
    categories: ['urban'],
    year: '2023',
    location: 'Urban District Sector',
    role: 'Urban Designer & CAD Specialist',
    tools: ['AutoCAD', 'ArcGIS Pro', 'Photoshop', 'Sketchup'],
    coverImage: BASE + 'images/projects/detailed/web cover.jpg',
    pageUrl: BASE + 'projects/detailed-urban-planning.html',
    summary: 'A full-scale detailed urban design and neighborhood master plan, encompassing block layouts, parcel subdivisions, building regulations, multimodal street design, and coordinated infrastructure networks.',
    keyHighlights: [
      'Neighborhood Parceling & Layout: Created human-scaled residential blocks, commercial ribbons, and civic community nodes.',
      'Regulatory Planning Controls: Drafted detailed zoning tables including maximum building heights, setbacks, floor area ratios (FAR), and lot coverage.',
      'Multimodal Street Hierarchy: Engineered street sections prioritizing pedestrian safety, shaded walkways, cycling lanes, and organized parking bays.',
      '3D Urban Massing: Developed perspective massing visualizations illustrating neighborhood character and skyline variations.',
    ],
    overview: `Bridging the gap between high-level strategic zoning and physical on-the-ground implementation, this detailed planning project provides a blueprint for a vibrant mixed-use district.

Every block and parcel is meticulously calibrated to statutory standards, ensuring balanced land utilization between residential typologies, public services, green open spaces, and vehicular/pedestrian circulation. The project includes full technical schedules, parcel tables, right-of-way street designs, and 3D architectural massing studies.`,
    stats: [
      { label: 'Scope', value: 'Detailed Urban Design' },
      { label: 'Deliverables', value: 'Master Plan & Codes' },
      { label: 'Circulation', value: 'Multimodal Network' },
      { label: 'Visualization', value: '3D Axonometrics' },
    ],
    images: [
      {
        src: BASE + 'images/projects/detailed/web cover.jpg',
        title: 'Final Detailed District Layout',
        caption: 'High-definition colored district masterplan detailing parcels, building blocks, road hierarchy, and landscaped public spaces.',
        type: 'Master Plan'
      },
      {
        src: BASE + 'images/projects/detailed/project cover.jpg',
        title: 'Project Presentation Cover',
        caption: 'Detailed urban planning presentation board and project cover layout.',
        type: 'Cover'
      },
      {
        src: BASE + 'images/projects/detailed/final-layout.jpg',
        title: 'Detailed Urban Layout with Landscape',
        caption: 'High-definition urban plan highlighting public squares, landscape buffers, and tree canopies.',
        type: 'Layout'
      },
      {
        src: BASE + 'images/projects/detailed/3d.jpg',
        title: '3D District Massing & Aerial Perspective',
        caption: 'Axonometric 3D rendering showing spatial relationships, urban fabric density, and street canyon scale.',
        type: '3D View'
      },
      {
        src: BASE + 'images/projects/detailed/layout.jpg',
        title: 'Parcel Subdivision & Street Network',
        caption: 'Technical parcelation schema detailing individual plot boundaries, setbacks, and road centerlines.',
        type: 'Plan'
      }
    ]
  },
  {
    id: 'landscape-architecture',
    title: 'Landscape Architecture – Nursery & Library',
    subtitle: 'Water-Sensitive Public Park & Cultural Realm in Desert Setting',
    category: 'landscape',
    categories: ['landscape'],
    year: '2023',
    location: 'Public Park & Cultural Realm',
    role: 'Lead Landscape Architect',
    tools: ['AutoCAD', 'Photoshop', 'Hand / Watercolor Rendering', 'SketchUp'],
    coverImage: BASE + 'images/projects/landscape/landscape project cover.jpg',
    pageUrl: BASE + 'projects/landscape-architecture.html',
    summary: 'A public park and cultural landscape featuring a central recreational lagoon, sunken reading gardens, children nursery, open-air amphitheater, and shaded botanical walking loops.',
    keyHighlights: [
      'Microclimate & Water Feature: Integrated an expansive naturalized lagoon and island serving as both a climate cooler and an aesthetic anchor.',
      'Cultural & Educational Integration: Seamlessly incorporated a botanical nursery, children learning maze, and outdoor library reading pavilions.',
      'Diverse Spatial Sequence: Designed sunken gardens, viewing mounds, pergola-covered promenades, active sports lawns, and bike loops.',
      'Handcrafted Watercolor Representation: Produced architectural watercolor plans and sectional elevations demonstrating spatial depth and vegetative hierarchy.',
    ],
    overview: `This project conceives a park landscape that revitalizes an arid environment into a lush, microclimate-moderated sanctuary. 

Centered around a water lagoon with pedestrian footbridges and an islet, the park orchestrates a journey through varied sensory experiences: from sunken reading gardens nestled alongside the public library to an open-air amphitheater, fragrant nursery gardens, playful topography, and shade pergolas. The design harmonizes softscape textures with durable, regional hardscape materials.`,
    stats: [
      { label: 'Typology', value: 'Public Park & Botanical' },
      { label: 'Feature', value: 'Central Lagoon & Island' },
      { label: 'Culture', value: 'Library & Amphitheater' },
      { label: 'Style', value: 'Watercolor Masterplan' },
    ],
    images: [
      {
        src: BASE + 'images/projects/landscape/landscape project cover.jpg',
        title: 'Landscape Project Cover',
        caption: 'Master landscape presentation cover and site layout overview.',
        type: 'Cover'
      },
      {
        src: BASE + 'images/projects/landscape/masterplan.png',
        title: 'Watercolor Park Masterplan',
        caption: 'Artistic watercolor master plan detailing planting layers, lagoon geometry, pathways, and civic nodes.',
        type: 'Master Plan'
      },
      {
        src: BASE + 'images/projects/landscape/sections.png',
        title: 'Landscape Sections & Lagoon Park Profile',
        caption: 'Watercolor elevation sections illustrating topographic variations, sunken gardens, and mature tree canopies.',
        type: 'Sections'
      },
      {
        src: BASE + 'images/projects/landscape/cover.jpg',
        title: 'Park Rendered Site Plan',
        caption: 'Fully rendered landscape master plan with road connections, sports courts, and hardscape paving.',
        type: 'Site Plan'
      },
      {
        src: BASE + 'images/projects/landscape/plan.png',
        title: 'Detailed Master Layout',
        caption: 'Comprehensive CAD/Photoshop rendered layout illustrating circulation loops and programmed zones.',
        type: 'Plan'
      },
      {
        src: BASE + 'images/projects/landscape/project2.jpg',
        title: 'Nursery & Park Phase 2 Design',
        caption: 'Detailed design board showing tree species arrangement, parking bays, and nursery greenhouse connections.',
        type: 'Detail'
      }
    ]
  },
  {
    id: 'west-qena',
    title: 'West Qena',
    subtitle: 'Strategic New City Masterplan & Sustainable Urban Development',
    category: 'urban',
    categories: ['urban'],
    year: '2023',
    location: 'West Qena New Urban Community, Upper Egypt',
    role: 'Urban Planner & Masterplan Designer',
    tools: ['AutoCAD', 'ArcGIS', 'Photoshop'],
    coverImage: BASE + 'images/projects/west-qena/web cover.jpg',
    pageUrl: BASE + 'projects/west-qena.html',
    summary: 'Master planning of West Qena New City, conceived as a smart, sustainable desert urban expansion accommodating demographic growth with climate-responsive green corridors.',
    keyHighlights: [
      'Sustainable Urban Growth Framework: Designed a master plan accommodating progressive growth stages along Upper Egypt’s desert fringes.',
      'Green Ecological Fingers: Positioned linear green corridors channeling prevailing cool winds to mitigate extreme desert temperatures.',
      'Comparative Scenario Analysis: Formulated and tested radial versus orthogonal urban form alternatives.',
      'Complete Presentation Shasieh: Compiled comprehensive presentation boards detailing site selection, land use breakdown, and civic service distribution.',
    ],
    overview: `West Qena represents one of Egypt's major Fourth-Generation new cities designed to draw population away from overcrowded agricultural zones into planned desert environments.

This project delivers a forward-thinking urban master plan characterized by strong ecological sensitivity. Strategic green fingers weave through residential districts, connecting civic nodes, neighborhood hubs, and educational clusters. The plan ensures high accessibility, active transport priority, and resilient infrastructure adaptable to future expansion.`,
    stats: [
      { label: 'Type', value: '4th Gen New City' },
      { label: 'Scale', value: 'Regional Expansion' },
      { label: 'Ecology', value: 'Green Wind Corridors' },
      { label: 'Approach', value: 'Sustainable Urbanism' },
    ],
    images: [
      {
        src: BASE + 'images/projects/west-qena/web cover.jpg',
        title: 'West Qena Web Cover Masterplan',
        caption: 'Full-scale colored urban master plan featuring sustainable neighborhood cells and green wind corridors.',
        type: 'Master Plan'
      },
      {
        src: BASE + 'images/projects/west-qena/Master Plan.jpg',
        title: 'Strategic Urban Master Plan',
        caption: 'Detailed zoning and land allocation master plan for the new city expansion.',
        type: 'Master Plan'
      },
      {
        src: BASE + 'images/projects/west-qena/new-city.png',
        title: 'West Qena New City Masterplan',
        caption: 'Macro master plan showcasing neighborhood clusters, commercial central spine, and regional transit arteries.',
        type: 'Master Plan'
      },
      {
        src: BASE + 'images/projects/west-qena/context.jpg',
        title: 'Regional Context & Definition',
        caption: 'Geographic positioning, regional road linkages, and city boundaries.',
        type: 'Context'
      },
      {
        src: BASE + 'images/projects/west-qena/plan-cover.jpg',
        title: 'Masterplan Presentation Plan',
        caption: 'Urban layout and land allocation presentation drawing.',
        type: 'Plan'
      }
    ]
  },
  {
    id: 'vocational-school',
    title: 'Vocational School',
    subtitle: 'Architectural Campus Design, Spatial Planning & Technical Detailing',
    category: 'architecture',
    categories: ['architecture'],
    year: '2023',
    location: 'Educational District',
    role: 'Architectural Designer',
    tools: ['AutoCAD', 'Revit', 'Photoshop', '3ds Max / SketchUp'],
    coverImage: BASE + 'images/projects/school/web cover.jpg',
    pageUrl: BASE + 'projects/vocational-school.html',
    summary: 'A contemporary vocational school campus featuring dedicated technical workshops, academic classrooms, administration, central courtyard, and student sports fields.',
    keyHighlights: [
      'Functional Zoning: Rational layout cleanly isolating loud industrial workshops from quiet academic instructional wings.',
      'Climate-Conscious Courtyard: Arranged campus blocks around a shaded central gathering courtyard promoting passive cross-ventilation.',
      'Comprehensive Technical Plans: Produced full architectural floor plans (ground and upper floors) with precise accessibility standards.',
      'Full Architectural Set: Generated sections, building elevations, detailed construction boards, and 3D perspectives.',
    ],
    overview: `Designed to empower technical education, this vocational school campus embodies clean modern architectural expressions with functional rigor. 

The spatial layout organizes academic classrooms, science laboratories, administration offices, and heavy-equipment workshops around an active, shaded courtyard. Special consideration was devoted to safety clearances, natural daylighting in workshops, acoustic insulation between wings, and intuitive pedestrian circulation for students and faculty.`,
    stats: [
      { label: 'Typology', value: 'Educational Campus' },
      { label: 'Components', value: 'Workshops & Academic Wings' },
      { label: 'Drawings', value: 'Plans, Sections & Elevations' },
      { label: 'Deliverables', value: 'Full Architectural Set' },
    ],
    images: [
      {
        src: BASE + 'images/projects/school/web cover.jpg',
        title: 'Campus Master Layout & Web Cover',
        caption: 'Vocational school site layout and architectural masterplan.',
        type: 'Layout'
      },
      {
        src: BASE + 'images/projects/school/render.png',
        title: 'Architectural Perspective Rendering',
        caption: 'Exterior 3D rendering showing entrance canopy, sun-shading louvers, and courtyard connectivity.',
        type: '3D Render'
      },
      {
        src: BASE + 'images/projects/school/architectural-masterplan.png',
        title: 'Architectural Campus Masterplan',
        caption: 'Master site plan illustrating building footprints, entry drop-offs, sports courts, and landscape plazas.',
        type: 'Master Plan'
      },
      {
        src: BASE + 'images/projects/school/floor-plans.jpg',
        title: 'Ground & Upper Floor Plans Visualized',
        caption: 'Detailed architectural layouts showing workshop halls, administrative suites, lecture rooms, and circulation.',
        type: 'Floor Plans'
      },
      {
        src: BASE + 'images/projects/school/elevations.jpg',
        title: 'Architectural Elevations & Building Sections',
        caption: 'Technical longitudinal sections and facade elevations detailing floor heights, louvers, and structural grids.',
        type: 'Sections'
      },
      {
        src: BASE + 'images/projects/school/3d.jpg',
        title: '3D Perspectives & Visualizations',
        caption: 'Exterior 3D renderings showcasing the entrance canopy, materiality, sun-shading fins, and courtyard interaction.',
        type: '3D View'
      },
      {
        src: BASE + 'images/projects/school/presentation-board.jpg',
        title: 'Full Presentation Board (Shasieh)',
        caption: 'Complete competition/academic presentation board gathering site concept, plans, elevations, sections, and 3D views.',
        type: 'Board'
      }
    ]
  },
  {
    id: 'villa-workshop',
    title: 'Villa Workshop',
    subtitle: 'Contemporary Residential Design & Revit BIM Modeling',
    category: 'architecture',
    categories: ['architecture'],
    year: '2023',
    location: 'Residential Suburb',
    role: 'BIM Modeler & Architectural Designer',
    tools: ['Autodesk Revit', 'Photoshop', 'Enscape / V-Ray'],
    coverImage: BASE + 'images/projects/villa/web cover.png',
    pageUrl: BASE + 'projects/villa-workshop.html',
    summary: 'A modern luxury residential villa design developed within a rigorous Autodesk Revit BIM workflow, featuring dynamic geometric volumes, indoor-outdoor garden integration, and detailed 3D perspectives.',
    keyHighlights: [
      'BIM Information Modeling: Created a fully coordinated Autodesk Revit architectural model with parametric family components.',
      'Contemporary Massing: Bold interplay of cantilevered upper volumes, textured stone cladding, and floor-to-ceiling glazing.',
      'Indoor-Outdoor Living: Open-plan ground floor living spaces seamlessly extending onto private terrace, pool, and perimeter garden.',
      'Photorealistic Visualization: Rendered multi-angle perspective studies illustrating daylight illumination and material textures.',
    ],
    overview: `This villa project serves as a showcase of modern residential architecture realized through an advanced Building Information Modeling (BIM) methodology. 

Using Autodesk Revit as the core authoring platform, every architectural element — from structural slabs and curtain walls to interior stairs and exterior hardscape — was modeled parametrically with precise material schedules. The design combines crisp modern lines, generous natural lighting, and refined private spaces tailored for luxury living.`,
    stats: [
      { label: 'Typology', value: 'Luxury Residential Villa' },
      { label: 'Platform', value: 'Autodesk Revit BIM' },
      { label: 'Style', value: 'Contemporary Geometric' },
      { label: 'Workflow', value: 'Parametric 3D Modeling' },
    ],
    images: [
      {
        src: BASE + 'images/projects/villa/web cover.png',
        title: 'Villa Exterior Perspective & Web Cover',
        caption: 'Modern luxury residential facade composition, cantilevered balcony, and private garden portal.',
        type: '3D Render'
      },
      {
        src: BASE + 'images/projects/villa/3d-view.png',
        title: 'Main Perspective View',
        caption: 'High-resolution exterior architectural rendering demonstrating volumetric massing, glazing, and landscape integration.',
        type: '3D Render'
      },
      {
        src: BASE + 'images/projects/villa/view1.jpg',
        title: 'Front Elevation Perspective',
        caption: 'Perspective view highlighting modern facade composition, cantilevered balcony, and welcoming entrance portal.',
        type: '3D View'
      },
      {
        src: BASE + 'images/projects/villa/view2.jpg',
        title: 'Garden & Poolside Perspective',
        caption: 'Rear terrace perspective showcasing seamless connection between living spaces, swimming pool, and private courtyard.',
        type: '3D View'
      },
      {
        src: BASE + 'images/projects/villa/rvt.jpg',
        title: 'Revit BIM Model Views',
        caption: 'Revit project interface showing axonometric BIM model, spatial coordinates, and floor level elevations.',
        type: 'BIM / Revit'
      }
    ]
  }
];

export function getProjectById(id) {
  return projectsData.find(project => project.id === id);
}
