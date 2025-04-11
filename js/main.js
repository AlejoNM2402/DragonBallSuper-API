
// Datos predefinidos de planetas (añadidos manualmente)
const predefinedPlanets = [
    {
        id: 1,
        name: "Tierra",
        description: "Planeta de origen de los humanos y hogar de muchos de los personajes principales.",
        image: "https://tse3.mm.bing.net/th?id=OIP.eUXR2nUXqYBqtF6Mtog0WwHaFj&pid=Api&P=0&h=180",
        isDestroyed: false,
        residents: ["Goku", "Gohan", "Krillin", "Bulma", "Vegeta"],
        gravity: "Normal (1G)",
        climate: "Variado (Templado a tropical)",
        population: "Varios miles de millones"
    },
    {
        id: 2,
        name: "Planet Vegeta",
        description: "Planeta natal de los Saiyajin, destruido por Freezer.",
        image: "https://tse1.mm.bing.net/th?id=OIP.SqDHZD28DsZWVY09dQPb1QHaFj&pid=Api&P=0&h=180",
        isDestroyed: true,
        residents: ["Rey Vegeta", "Bardock", "Raditz", "Nappa"],
        gravity: "Alta (10G)",
        climate: "Árido y rocoso",
        population: "Extinta"
    },
    {
        id: 3,
        name: "Namek",
        description: "Planeta de origen de los Namekianos, con tres soles que nunca permiten la noche.",
        image: "https://tse1.mm.bing.net/th?id=OIP.E2TDi1FJ9LwCI2ezm2cTDwHaFj&pid=Api&P=0&h=180",
        isDestroyed: true,
        residents: ["Guru", "Nail", "Dende", "Moori"],
        gravity: "Ligeramente mayor que la Tierra",
        climate: "Tropical con abundante vegetación",
        population: "Pocos cientos antes de su destrucción"
    },
    {
        id: 4,
        name: "Nuevo Namek",
        description: "Planeta donde se reubicaron los Namekianos tras la destrucción de su planeta original.",
        image: "https://tse4.mm.bing.net/th?id=OIP.Qn5yoP94EY8WsbMg_OwnEgHaFj&pid=Api&P=0&h=180",
        isDestroyed: false,
        residents: ["Moori", "Dende"],
        gravity: "Similar a Namek",
        climate: "Tropical",
        population: "Pocos cientos"
    },
    {
        id: 5,
        name: "Planeta Freezer #79",
        description: "Base principal de operaciones para el ejército de Freezer.",
        image: "https://tse3.mm.bing.net/th?id=OIP.oloIWPokLR67TIO4a-WaoAHaFj&pid=Api&P=0&h=180",
        isDestroyed: false,
        residents: ["Soldados de Freezer"],
        gravity: "Desconocida",
        climate: "Templado, adaptado para bases militares",
        population: "Variable, principalmente militares"
    },
    {
        id: 6,
        name: "Planeta Yardrat",
        description: "Planeta donde Goku aprende la técnica de Transmisión Instantánea.",
        image: "https://tse1.mm.bing.net/th?id=OIP.NCH40E4bHRrsk0bRpi6B_AHaFj&pid=Api&P=0&h=180",
        isDestroyed: false,
        residents: ["Yardrats"],
        gravity: "Desconocida",
        climate: "Templado",
        population: "Desconocida"
    },
    {
        id: 7,
        name: "Planeta Vampa",
        description: "Planeta árido y hostil donde Broly fue exiliado.",
        image: "https://tse3.mm.bing.net/th?id=OIP.BaJNOieHRIZLg0_mbt2sqgHaEK&pid=Api&P=0&h=180",
        isDestroyed: false,
        residents: ["Broly", "Paragus", "Bah"],
        gravity: "Alta",
        climate: "Desértico extremo",
        population: "Mínima"
    },
    {
        id: 8,
        name: "Planeta Supremo",
        description: "Hogar de los Kaioshin, los dioses creadores del universo.",
        image: "https://vignette.wikia.nocookie.net/dragonball/images/6/6f/Planeta_Sagrado.png/revision/latest?cb=20180512215148&path-prefix=es",
        isDestroyed: false,
        residents: ["Shin", "Kibito", "Anciano Kaioshin"],
        gravity: "Desconocida",
        climate: "Paradisíaco",
        population: "Pocos dioses"
    },
    {
        id: 9,
        name: "Planeta Cereal",
        description: "Hogar de los Cerealians, conquistado por los Saiyajin bajo órdenes de Freezer.",
        image: "https://i.pinimg.com/originals/e5/60/16/e560160c3dcc8e034a47c469b99ab663.jpg",
        isDestroyed: false,
        residents: ["Granolah", "Monaito"],
        gravity: "Similar a la Tierra",
        climate: "Templado con grandes bosques",
        population: "Casi extinta"
    },
    {
        id: 10,
        name: "Planeta Beerus",
        description: "Hogar del Dios de la Destrucción Beerus y su asistente Whis.",
        image: "https://tse1.mm.bing.net/th?id=OIP.P9YXv-diEZmgU_I8VrsGhQHaEK&pid=Api&P=0&h=180",
        isDestroyed: false,
        residents: ["Beerus", "Whis"],
        gravity: "Desconocida",
        climate: "Variado",
        population: "2"
    },
    {
        id: 11,
        name: "Planeta Zeno",
        description: "Residencia del Rey de Todo (Zeno-sama), la entidad más poderosa del multiverso.",
        image: "https://vignette.wikia.nocookie.net/dragonuniverse/images/e/eb/Zeno_Palace.png/revision/latest?cb=20160822095740",
        isDestroyed: false,
        residents: ["Zeno", "Gran Sacerdote", "Guardias de Zeno"],
        gravity: "Desconocida",
        climate: "Desconocido",
        population: "Desconocida"
    },
    {
        id: 12,
        name: "Planeta Potaufeu",
        description: "Planeta donde se encuentra el 'Agua Superhumana', capaz de clonar habilidades.",
        image: "https://tse1.mm.bing.net/th?id=OIP.M3qg0pTxrJT5qg3QHHWThQHaEK&pid=Api&P=0&h=180",
        isDestroyed: false,
        residents: ["Potage"],
        gravity: "Similar a la Tierra",
        climate: "Árido",
        population: "Casi deshabitado"
    },
    {
        id: 13,
        name: "Planeta Sadala (U6)",
        description: "Planeta natal de los Saiyajin del Universo 6, que evolucionaron de forma pacífica.",
        image: "https://tse1.mm.bing.net/th?id=OIP.mQWP_JsppZAncQbd4dOqqgAAAA&pid=Api&P=0&h=180",
        isDestroyed: false,
        residents: ["Cabba", "Saiyajin del U6"],
        gravity: "Alta",
        climate: "Desconocido",
        population: "Millones (Saiyajin)"
    },
    {
        id: 14,
        name: "Planeta Kaioshin (U7)",
        description: "Hogar sagrado de los Kaioshin del Universo 7.",
        image: "https://tse3.mm.bing.net/th?id=OIP.FxyGYny2oFctYJtLHLP9tgHaFj&pid=Api&P=0&h=180",
        isDestroyed: false,
        residents: ["Shin", "Kibito", "Anciano Kaioshin"],
        gravity: "Desconocida",
        climate: "Paradisíaco",
        population: "Pocos dioses"
    },
    {
        id: 15,
        name: "Planeta del Universo 11",
        description: "Hogar de las Tropas del Orgullo, un grupo de superhéroes liderados por Toppo.",
        image: "https://tse4.mm.bing.net/th?id=OIP.yFU5IcDjh3LUjxh3ETiUiAAAAA&pid=Api&P=0&h=180",
        isDestroyed: false,
        residents: ["Jiren", "Toppo", "Dyspo"],
        gravity: "Desconocida",
        climate: "Desconocido",
        population: "Desconocida"
    },
    {
        id: 16,
        name: "Planeta Metamor",
        description: "Lugar de origen de la técnica de fusión Metamoran, usada por Goku y Vegeta.",
        image: "https://tse4.mm.bing.net/th?id=OIP.fd0wyKrGtyaSxN7gtzCdIQHaEM&pid=Api&P=0&h=180",
        isDestroyed: false,
        residents: ["Metamoranos"],
        gravity: "Desconocida",
        climate: "Desconocido",
        population: "Desconocida"
    },
    {
        id: 17,
        name: "Planeta del Gran Kaio",
        description: "Lugar donde residen los guerreros heroicos fallecidos y el Gran Kaio.",
        image: "https://tse4.mm.bing.net/th?id=OIP.fdQH7Pt2qOQRe3eCUksuFAHaFF&pid=Api&P=0&h=180",
        isDestroyed: false,
        residents: ["Gran Kaio", "Olibu", "Paikuhan"],
        gravity: "Similar a la Tierra",
        climate: "Templado y agradable",
        population: "Almas de guerreros"
    },
    {
        id: 18,
        name: "Planeta Prisión Galáctico",
        description: "Prisión de máxima seguridad donde son enviados los criminales más peligrosos de la galaxia.",
        image: "https://tse4.mm.bing.net/th?id=OIP.axZCq1uVyii4j4ZPqAxuPQHaEK&pid=Api&P=0&h=180",
        isDestroyed: false,
        residents: ["Criminales galácticos", "Moro"],
        gravity: "Alta",
        climate: "Árido y hostil",
        population: "Millares de prisioneros"
    },
    {
        id: 19,
        name: "Planeta Konats",
        description: "Planeta natal de Tapion y su hermano Minosha, atacado por Hirudegarn.",
        image: "https://tse2.mm.bing.net/th?id=OIP.o-z5-vFL8ING3CG-IDJOjAAAAA&pid=Api&P=0&h=180",
        isDestroyed: false,
        residents: ["Tapion", "Minosha"],
        gravity: "Similar a la Tierra",
        climate: "Templado",
        population: "Desconocida"
    },
    {
        id: 20,
        name: "Planeta Imegga",
        description: "Planeta con avanzada tecnología y altos impuestos, gobernado por Don Kee.",
        image: "https://tse3.mm.bing.net/th?id=OIP.10c9sWjtGpXAc56qJAcZhwHaFj&pid=Api&P=0&h=180",
        isDestroyed: false,
        residents: ["Don Kee", "Ledgic"],
        gravity: "Similar a la Tierra",
        climate: "Templado, urbanizado",
        population: "Millones"
    }
];

 // Función para cargar datos de un endpoint específico (una página)
async function loadDataPage(endpoint, page = 1) {
    try {
        // URL base correcta de la API
        const baseUrl = 'https://dragonball-api.com/api';
        const url = `${baseUrl}/${endpoint}?page=${page}&limit=10`;
        showDebug(`Realizando petición a: ${url}`);
        
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        showDebug(`Datos recibidos correctamente de: ${url}`);
        return data;
    } catch (error) {
        console.error(`Error fetching ${endpoint} page ${page}:`, error);
        showError(`Error al cargar datos: ${error.message}`);
        return null;
    }
}

 // Función para cargar todos los datos de un endpoint específico
async function loadAllData(endpoint) {
    showDebug(`Comenzando carga de datos para: ${endpoint}`);
    let allData = [];
    
    // Si estamos cargando planetas, usamos los datos predefinidos
    if (endpoint === 'planets') {
        showDebug(`Usando datos predefinidos para planetas`);
        return predefinedPlanets;
    }
    
    // Para otros endpoints, cargamos desde la API
    const firstPageData = await loadDataPage(endpoint, 1);
    
    if (!firstPageData) {
        showError(`No se pudieron cargar datos para ${endpoint}`);
        return [];
    }
    
    // Verificar la estructura de la respuesta
    if (firstPageData.items && Array.isArray(firstPageData.items)) {
        // Añadir los elementos de la primera página
        allData = [...firstPageData.items];
        
        // Determinar el número total de páginas según los metadatos
        const totalPages = firstPageData.meta?.totalPages || 1;
        showDebug(`Detectadas ${totalPages} páginas en total para ${endpoint}`);
        
        // Cargar páginas adicionales si hay más de una
        if (totalPages > 1) {
            for (let page = 2; page <= totalPages; page++) {
                showDebug(`Cargando página ${page} de ${totalPages} para ${endpoint}`);
                const pageData = await loadDataPage(endpoint, page);
                
                if (pageData && pageData.items && Array.isArray(pageData.items)) {
                    allData = [...allData, ...pageData.items];
                    showDebug(`Añadidos ${pageData.items.length} elementos de la página ${page}`);
                } else {
                    showDebug(`No se pudieron cargar datos de la página ${page}`);
                }
            }
        }
    } else {
        showDebug(`Estructura de respuesta no reconocida para ${endpoint}`);
        if (Array.isArray(firstPageData)) {
            allData = firstPageData;
        }
    }
    
    showDebug(`Total de ${allData.length} elementos cargados para ${endpoint}`);
    return allData;
}

 // Función principal para cargar todos los datos de la API
async function loadAllDragonBallData() {
    const endpoints = ['characters', 'planets'];
    const allData = {};

    for (const endpoint of endpoints) {
        showDebug(`Iniciando carga de ${endpoint}...`);
        try {
            allData[endpoint] = await loadAllData(endpoint);
            showDebug(`${allData[endpoint].length} registros de ${endpoint} cargados`);
        } catch (error) {
            showError(`Error al cargar ${endpoint}: ${error.message}`);
            allData[endpoint] = [];
        }
    }

    document.getElementById('loading').style.display = 'none';
    updateUI(allData);
    
    window.dragonBallData = allData;  // Guardamos los datos para buscar luego
    
    return allData;
}

 // Función para actualizar la interfaz
function updateUI(data) {
    // Personajes
    const charactersSection = document.getElementById('characters-section');
    if (charactersSection && data.characters && data.characters.length > 0) {
        showDebug(`Actualizando UI con ${data.characters.length} personajes`);
        const grid = document.createElement('div');
        grid.className = 'grid-container';
        
        data.characters.forEach(character => {
            const card = document.createElement('div');
            card.className = 'card';
            
            // Extraer información del personaje
            const name = character.name || 'Sin nombre';
            const image = character.image || '/api/placeholder/240/200';
            const race = character.race || 'Desconocida';
            const originPlanet = character.originPlanet || 'Desconocido';
            const ki = character.ki || character.maxKi || 0;
            const powerPercentage = Math.min(ki / 10000 * 100, 100);
            
            card.innerHTML = `
                <div class="card-image">
                    <img src="${image}" alt="${name}" onerror="this.src='/api/placeholder/240/200'">
                </div>
                <div class="card-content">
                    <h3>${name}</h3>
                    <p><strong>Raza:</strong> ${race}</p>
                    <p><strong>Planeta:</strong> ${originPlanet}</p>
                    <p><strong>Ki:</strong> ${ki || 'Desconocido'}</p>
                    <div class="stat-bar"><div class="stat-fill" style="width: ${powerPercentage}%"></div></div>
                </div>
            `;
            
            grid.appendChild(card);
        });
        
        charactersSection.innerHTML = '';
        charactersSection.appendChild(grid);
    } else if (charactersSection) {
        charactersSection.innerHTML = '<div class="no-results">No se encontraron personajes</div>';
    }
    
    // Planetas con datos más detallados
    const planetsSection = document.getElementById('planets-section');
    if (planetsSection && data.planets && data.planets.length > 0) {
        showDebug(`Actualizando UI con ${data.planets.length} planetas detallados`);
        const grid = document.createElement('div');
        grid.className = 'grid-container';
        
        data.planets.forEach(planet => {
            const card = document.createElement('div');
            card.className = 'card';
            
            // Crear tarjetas con información detallada de los planetas
            const name = planet.name || 'Sin nombre';
            const image = planet.image || '/api/placeholder/240/200';
            const description = planet.description || 'Sin descripción';
            const isDestroyed = planet.isDestroyed;
            
            // Mostrar residentes en etiquetas
            let residentsHTML = '';
            if (planet.residents && planet.residents.length > 0) {
                let residentTags = planet.residents.map(resident => 
                    `<span class="resident-tag">${resident}</span>`
                ).join('');
                residentsHTML = `
                    <p><strong>Residentes:</strong></p>
                    <div class="planet-residents">${residentTags}</div>
                `;
            } else {
                residentsHTML = `<p><strong>Residentes:</strong> Desconocidos</p>`;
            }
            
            // Estado del planeta (destruido o no)
            const statusClass = isDestroyed ? 'planet-destroyed' : 'planet-not-destroyed';
            const statusText = isDestroyed ? 'Destruido' : 'Intacto';
            
            card.innerHTML = `
                <div class="card-image">
                    <img src="${image}" alt="${name}" onerror="this.src='/api/placeholder/240/200'">
                </div>
                <div class="card-content">
                    <h3>${name}</h3>
                    <div class="planet-details">
                        <p><strong>Descripción:</strong> ${description}</p>
                        <p><strong>Estado:</strong> <span class="${statusClass}">${statusText}</span></p>
                        <p><strong>Gravedad:</strong> ${planet.gravity || "Desconocida"}</p>
                        <p><strong>Clima:</strong> ${planet.climate || "Desconocido"}</p>
                        <p><strong>Población:</strong> ${planet.population || "Desconocida"}</p>
                        ${residentsHTML}
                    </div>
                </div>
            `;
            
            grid.appendChild(card);
        });
        
        planetsSection.innerHTML = '';
        planetsSection.appendChild(grid);
    } else if (planetsSection) {
        planetsSection.innerHTML = '<div class="no-results">No se encontraron planetas</div>';
    }
}

 // Funciones para las pestañas
function setupTabs() {
    const tabs = document.querySelectorAll('.tab');
    const contentSections = document.querySelectorAll('.content-section');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-target');
            
            // Activar la pestaña
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Mostrar la sección correspondiente
            contentSections.forEach(section => {
                section.classList.remove('active');
                if (section.id === `${target}-section`) {
                    section.classList.add('active');
                }
            });
        });
    });
}

// Función de búsqueda
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const data = window.dragonBallData;
        
        if (!data) return;
        
        
        const activeSection = document.querySelector('.content-section.active');
        const activeTab = document.querySelector('.tab.active').getAttribute('data-target');
        
        if (activeSection && data[activeTab]) {
            const filteredData = data[activeTab].filter(item => {
                const name = item.name || '';
                return name.toLowerCase().includes(searchTerm);
            });
            
            
            const tempData = {};
            tempData[activeTab] = filteredData;
            
            
            updateUI(tempData);
        }
    });
}

// Función para mostrar errores
function showError(message) {
    const errorContainer = document.getElementById('error-container');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorContainer.appendChild(errorDiv);
}

// Función para mostrar información de depuración
function showDebug(message) {
    const debugContainer = document.getElementById('debug-container');
    const timestamp = new Date().toLocaleTimeString();
    debugContainer.scrollTop = debugContainer.scrollHeight;
}

 // Iniciar la aplicación cuando la página se cargue
document.addEventListener('DOMContentLoaded', () => {
    setupTabs();
    showDebug('Iniciando aplicación...');
    loadAllDragonBallData().then(() => {
        setupSearch();
        showDebug('Carga completa');
    }).catch(error => {
        showError(`Error general: ${error.message}`);
        document.getElementById('loading').style.display = 'none';
    });
}); 