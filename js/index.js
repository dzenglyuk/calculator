(function() {

    let basicButtons = document.getElementsByClassName('basic-buttons');

    for (let i = 0; i < basicButtons.length; i++) {
        basicButtons[i].addEventListener('click', function(e) {
            e.preventDefault();
            const buttonValue = basicButtons[i].value;
            document.querySelector('.screen string').innerHTML += buttonValue;
        });
    }
})();

(function(){
    
    document.getElementsByClassName('clear-button')[0]
        .addEventListener('click', clearScreen);
        
    function clearScreen(e) {
        e.preventDefault();
        document.querySelector('.screen string').innerHTML = "";
    }
})(); 

(function(){
    
    document.getElementsByClassName('correct-button')[0]
        .addEventListener('click', correctScreen);
        
    function correctScreen(e) {
        e.preventDefault();
        let correction = document.querySelector('.screen string').innerHTML;
        correction = correction.slice(0, -1);
        document.querySelector('.screen string').innerHTML = correction;
    }
})(); 

(function(){
    
    document.getElementsByClassName('equal-button')[0]
        .addEventListener('click', getResult);
        
    function getResult(e) {
        e.preventDefault();
        let result = eval(document.querySelector('.screen string').innerHTML);
        
        document.querySelector('.screen string').innerHTML = result;
    }
})();     
    
    
