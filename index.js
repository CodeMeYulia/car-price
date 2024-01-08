"use strict"
//определение переменных
const inputs = document.querySelectorAll('.input');
const brandSelect = document.getElementById('brandSelect');
const modelSelect = document.getElementById('modelSelect');
const price = document.querySelector('.price');
let models = [];
let values = [];
let options = [];
let option;
let basePrice;

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
        basePrice = Number(e.target.value);

        function addPriceOption() {

            //добавляем топливо
            //надбавка по умолчанию
            let fuels = document.getElementById('fuel');
            let fuelPrice = Number(document.querySelector('input[name = fuel]:checked').value);
            //надбавка при выборе другого топлива
            fuels.addEventListener('change', function () {
                fuelPrice = Number(document.querySelector('input[name = fuel]:checked').value);
                price.innerHTML = `
                <p>базовая цена модели: ${basePrice}</p>
                <p>надбавка за выбор топлива: ${fuelPrice}</p>
                <p>надбавка за выбор объема: ${volumePrice}</p>
                <p>Итого: ${basePrice + fuelPrice + volumePrice}</p>`;
            })

            //добавляем литраж
            //надбавка за объем по умолчанию
            let volume = document.getElementById('volume');
            let myVolume = 1.1;
            let volumePrice = 1100;
            price.innerHTML = `
                <p>базовая цена модели: ${basePrice}</p>
                <p>надбавка за выбор топлива: ${fuelPrice}</p>
                <p>надбавка за выбор объема: ${volumePrice}</p>
                <p>Итого: ${basePrice + fuelPrice + volumePrice}</p>`;
            //надбавка при выборе другого литража
            volume.addEventListener('change', function () {
                myVolume = Number(document.querySelector('input[name = volume]').value);
                if (myVolume === 1.1) { volumePrice = 1100 } else
                    if (myVolume === 1.5) { volumePrice = 1500 } else
                        if (myVolume === 1.9) { volumePrice = 1900 } else
                            if (myVolume === 2.3) { volumePrice = 2300 } else
                                if (myVolume === 2.7) { volumePrice = 2700 } else
                                    if (myVolume === 3.1) { volumePrice = 3100 } else { volumePrice = 3500 };
                price.innerHTML = `
                <p>базовая цена модели: ${basePrice}</p>
                <p>надбавка за выбор топлива: ${fuelPrice}</p>
                <p>надбавка за выбор объема: ${volumePrice}</p>
                <p>Итого: ${basePrice + fuelPrice + volumePrice}</p>`;
            })

            //добавляем состояние



        }
        addPriceOption();
    })




    //   + conditionPrice + paywayPrice;
})

