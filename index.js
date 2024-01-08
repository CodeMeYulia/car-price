"use strict"
//определение переменных
const input = document.querySelectorAll('.input');
const brandSelect = document.getElementById('brandSelect');
const modelSelect = document.getElementById('modelSelect');
const price = document.querySelector('.price');
price.innerHTML = '';
let models = [];
let values = [];
let options = [];
let option;
let model;
let basePrice = 0;
let myCar;

brandSelect.addEventListener('change', function () {
    //очищаем список моделей при смене бренда
    modelSelect.innerHTML = `<option value="0" selected>--выберите модель авто--</option>`;

    if (brandSelect.value === "Renault") {
        models = ['Duster', 'Kangoo', 'Espace', 'Arkana', 'Fluence'];
        values = [355465, 655000, 450000, 850000, 710500, 500900];
    } else if (brandSelect.value === "Opel") {
        models = ['Crossland', 'Combo Cargo', 'Zafira Life', 'Combo Life', 'Grandland', 'Vivaro'];
        values = [650800, 155000, 630000, 410000, 355000, 880000];
    } else if (brandSelect.value === "Mazda") {
        models = ['CX-9', 'CX', 'CX-4', '6'];
        values = [500650, 355000, 610000, 450000];
    } else {
        return null;
    };

    //подсказка выбрать модель
    price.innerHTML = `hoba!выбран бренд ${brandSelect.value} <p> выберите модель</p>`;

    //создаем список моделей под выбранный бренд
    for (let i = 0; i < models.length; i++) {
        option = document.createElement('option');
        option.innerText = models[i];
        option.value = values[i];
        modelSelect.add(option);
        options.push(option);
    };


})

// let fuelPrice = 100;
// let volumePrice = 200;
// let conditionPrice = 300;
// let paywayPrice = 10;

// for (let item of input) {
//     item.addEventListener('change', getprice())
// }

// function getprice() {
//     let result = basePrice + fuelPrice + volumePrice + conditionPrice + paywayPrice;
//     price.innerHTML = `цена ${brandSelect.value} ${options.textContent} с выбранными параметрами - ${result}`;
// }