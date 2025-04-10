// Función para cargar todos los datos de un endpoint específico
async function loadAllData(endpoint) {
    let allData = [];
    let currentPage = 1;
    let hasMoreData = true;

    while (hasMoreData) {
        try {
            const response = await fetch(`https://web.dragonball-api.com/api/${endpoint}?page=${currentPage}`);
            const data = await response.json();

            // Asumiendo que la API devuelve un objeto con 'results' y 'hasNext' o similar
            if (data.results && data.results.length > 0) {
                allData = [...allData, ...data.results];

                // Comprobar si hay más páginas
                if (data.hasNext === false || data.results.length === 0) {
                    hasMoreData = false;
                } else {
                    currentPage++;
                }
            } else {
                hasMoreData = false;
            }
        } catch (error) {
            console.error(`Error cargando datos de ${endpoint}:`, error);
            hasMoreData = false;
        }
    }

    return allData;
}

// Función principal para cargar todos los datos de la API
async function loadAllDragonBallData() {
    const endpoints = ['characters', 'sagas', 'planets', 'transformations'];
    const allData = {};

    for (const endpoint of endpoints) {
        console.log(`Cargando datos de ${endpoint}...`);
        allData[endpoint] = await loadAllData(endpoint);
        console.log(`${allData[endpoint].length} registros de ${endpoint} cargados`);
    }

    // Ahora tienes todos los datos en el objeto 'allData'
    console.log('Todos los datos cargados:', allData);

    // Aquí puedes actualizar tu interfaz con los datos
    updateUI(allData);

    return allData;
}

// Función para actualizar la interfaz
function updateUI(data) {
    // Implementa el código para mostrar los datos en tu página
    // Por ejemplo:
    const charactersSection = document.getElementById('characters-section');

    if (charactersSection && data.characters) {
        charactersSection.innerHTML = data.characters.map(character =>
            `<div class="character-card">
        <h3>${character.name}</h3>
        <img src="${character.image}" alt="${character.name}">
        <p>Raza: ${character.race}</p>
      </div>`
        ).join('');
    }

    // Haz lo mismo para los demás tipos de datos
}

// Llama a la función cuando la página se cargue
document.addEventListener('DOMContentLoaded', () => {
    loadAllDragonBallData();
});