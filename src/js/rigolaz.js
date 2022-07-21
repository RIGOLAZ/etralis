//index start here........................................
let meter = document.getElementById('meter-number');
let price = document.getElementById('price');
let feeze = document.getElementById('feeze');
let total = document.getElementById('total');
let resultKwh = document.getElementById('resultKwh');
let palier = document.getElementById('palier');
palier.textContent = 'Palier...';

let family = ['014277200001', '014277200002', '014277200003', '014277200004'];
let familyPlus = ['014277210001', '014277210002', '014277210003', '014277210004'];
let professional = ['014277220001', '014277220002', '014277220003', '014277220004'];
let premium = ['014277230001', '014277230002', '014277230003', '014277230004'];


meter.addEventListener('blur', dispo);
meter.addEventListener('change', raz);

function raz() {
    price.value = '';
    feeze.value = 0;
    total.value = 0;
    resultKwh.value = 0;
}

//Checking palier
let tcheckF = family.includes(meter, [0]);
let tcheckFP = familyPlus.includes(meter, [0]);
let tcheckPro = professional.includes(meter, [0]);
let tcheckPre = premium.includes(meter, [0]);

function dispo() {

    if (meter.value === '' || (tcheckF === false && tcheckFP === false && tcheckPro === false && tcheckPre === false)) {
        price.setAttribute('readonly', true);
        feeze.value = 0;
        total.value = 0;
        resultKwh.value = 0;
        palier.textContent = 'Palier...';
    } else {
        price.removeAttribute('readonly');
        if (tcheckF === true) {
            palier.textContent = 'Family';
            price.addEventListener('blur', simulfam);
            // price.addEventListener('change', simulation);

            function simulfam() {
                if (price.value < 500) {
                    feeze.value = 0;
                    total.value = 0;
                    resultKwh.value = 0;
                } else if (price.value >= 500 && price.value <= 5000) {
                    feeze.value = 150;
                } else if (price.value > 5000 && price.value <= 10000) {
                    feeze.value = 250;
                } else if (price.value > 10000 && price.value <= 50000) {
                    feeze.value = 450;
                } else if (price.value > 50000 && price.value <= 100000) {
                    feeze.value = 550;
                } else if (price.value > 100000) {
                    feeze.value = 800;
                };
                if (price.value >= 500) {
                    total.value = parseInt(price.value, 10) + parseInt(feeze.value, 10);
                    resultKwh.value = (100 * price.value) / 5000;
                }
            };
        } else if (tcheckFP === true) {
            palier.textContent = 'Family Plus';
            price.addEventListener('blur', simulFamPl);
            // price.addEventListener('change', simulation);

            function simulFamPl() {
                if (price.value < 500) {
                    feeze.value = 0;
                    total.value = 0;
                    resultKwh.value = 0;
                } else if (price.value >= 500 && price.value <= 5000) {
                    feeze.value = 200;
                } else if (price.value > 5000 && price.value <= 10000) {
                    feeze.value = 300;
                } else if (price.value > 10000 && price.value <= 50000) {
                    feeze.value = 500;
                } else if (price.value > 50000 && price.value <= 100000) {
                    feeze.value = 600;
                } else if (price.value > 100000) {
                    feeze.value = 850;
                };
                if (price.value >= 500) {
                    total.value = parseInt(price.value, 10) + parseInt(feeze.value, 10);
                    resultKwh.value = (100 * price.value) / 5000;
                }
            };
        } else if (tcheckPro === true) {
            palier.textContent = 'Professional';
            price.addEventListener('blur', simulPro);
            // price.addEventListener('change', simulation);

            function simulPro() {
                if (price.value < 500) {
                    feeze.value = 0;
                    total.value = 0;
                    resultKwh.value = 0;
                } else if (price.value >= 500 && price.value <= 5000) {
                    feeze.value = 250;
                } else if (price.value > 5000 && price.value <= 10000) {
                    feeze.value = 350;
                } else if (price.value > 10000 && price.value <= 50000) {
                    feeze.value = 550;
                } else if (price.value > 50000 && price.value <= 100000) {
                    feeze.value = 650;
                } else if (price.value > 100000) {
                    feeze.value = 900;
                };
                if (price.value >= 500) {
                    total.value = parseInt(price.value, 10) + parseInt(feeze.value, 10);
                    resultKwh.value = (100 * price.value) / 5000;
                }
            };
        } else if (tcheckPre === true) {
            palier.textContent = 'Premium';
            price.addEventListener('blur', simulPrem);
            // price.addEventListener('change', simulation);

            function simulPrem() {
                if (price.value < 500) {
                    feeze.value = 0;
                    total.value = 0;
                    resultKwh.value = 0;
                } else if (price.value >= 500 && price.value <= 5000) {
                    feeze.value = 300;
                } else if (price.value > 5000 && price.value <= 10000) {
                    feeze.value = 400;
                } else if (price.value > 10000 && price.value <= 50000) {
                    feeze.value = 500;
                } else if (price.value > 50000 && price.value <= 100000) {
                    feeze.value = 700;
                } else if (price.value > 100000) {
                    feeze.value = 950;
                };
                if (price.value >= 500) {
                    total.value = parseInt(price.value, 10) + parseInt(feeze.value, 10);
                    resultKwh.value = (100 * price.value) / 5000;
                }
            };
        } else {
            alert('Sorry, meter number don\'t match. Please verify');
        }
    }
};

// let valPurch = document.getElementById('valPurch');

//Index ends here.................................................