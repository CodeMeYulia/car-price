"use strict"
//определение переменных
const inputs = document.querySelectorAll('.input');
const brandSelect = document.getElementById('brandSelect');
const modelSelect = document.getElementById('modelSelect');
const price = document.querySelector('.price');
let volume = document.getElementById('volume');
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
    options = [];

    //формируем список моделей для брендов
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
    price.innerHTML = `<p> выберите модель</p>`;

    //создаем список моделей под выбранный бренд
    for (let i = 0; i < models.length; i++) {
        option = document.createElement('option');
        option.innerText = models[i];
        option.value = values[i];
        modelSelect.add(option);
        options.push(option);
    };
    //получаем базовую цену модели

    modelSelect.addEventListener('change', function (e) {
        // model = e.target.innerText;
        // console.log(model);
        basePrice = e.target.value;
        console.log(basePrice);
        price.innerHTML = `базовая цена выбранной модели - <p> ${basePrice}</p>`;
    })

    // let result = basePrice + fuelPrice + volumePrice + conditionPrice + paywayPrice;
    // price.innerHTML = `цена ${brandSelect.value} ${options.textContent} с выбранными параметрами - ${result}`;
})

//цена от типа топлива
const fuels = document.getElementById('fuel');
fuels.addEventListener('change', function () {
    const myFuel = document.querySelector('input[name = fuel]:checked').value;
    console.log(myFuel);
    return myFuel;
    price.innerHTML = 
})


//цена от объема двигателя - некорректно считает, исправить
volume.addEventListener('change', function () {
    volume = this.value;
    let volumePrice = function () {
        if (volume === 1.5) {
            return 1200;
        } else if (volume === 1.9) {
            return 1400;
        } else if (volume === 2.3) {
            return 1600;
        } else if (volume === 2.7) {
            return 1800;
        } else if (volume === 3.1) {
            return 2000;
        } else if (volume === 3.5) {
            return 2400;
        } else { return 1000 };
    }
    console.log(volume);
    console.log(volumePrice());
})