(function() {

    const basicButtons = document.querySelectorAll('.basic-buttons');

    for (let i = 0; i < basicButtons.length; i++) {
        basicButtons[i].addEventListener('click', function(e) {
            const buttonValue = basicButtons[i].value;
            document.querySelector('.screen span').innerHTML += buttonValue;
        });
    }

    document.querySelector('.clear-button')
        .addEventListener('click', clearScreen);
        
    function clearScreen(e) {
        document.querySelector('.screen span').innerHTML = "";
    }
 
    document.querySelector('.correct-button')
        .addEventListener('click', correctScreen);
        
    function correctScreen(e) {
        let correction = document.querySelector('.screen span').innerHTML;
        correction = correction.slice(0, -1);
        document.querySelector('.screen span').innerHTML = correction;
    }

    document.querySelector('.equal-button')
        .addEventListener('click', getResult);
        
    function getResult(e) {
        let result = eval(document.querySelector('.screen span').innerHTML);
        
        document.querySelector('.screen span').innerHTML = result;
    }
})();     
    
    
