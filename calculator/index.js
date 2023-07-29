(function () {

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn'); //gunain all karena kita mau sekalian aja ambilnya yakni untuk class btn
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

    //untuk bikin tombol = berfungsi 
    equal.addEventListener('click', function (e) {
        if (screen.value === '') { //jika layar punya value maka 
            screen.value = "Please Enter!";
        } else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })

    clear.addEventListener('click', function (e) {
        screen.value = "";
    })

})();