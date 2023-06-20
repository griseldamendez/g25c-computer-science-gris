
const getDataFromJson = async() => {
    // 1. leer el archivo info.json con ayuda de fetch y controlando la asincronia con await
    const response = await fetch('./info.json');
    // 2. obtener del response con la funciion .json la data (pokemons)
    const pokemons =  await response.json();
    console.log('products: ', products);
};
