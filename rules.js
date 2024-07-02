function createPopup(){
    
    const rules = document.getElementById('rulesBtn');
    const close = document.getElementById('open-btn');

    function openPopWindow(){
        rules.classList.add('active')
    }
    function closePopWindow(){
        close.classList.remove('active')
    }
    overlay.addEventListener('click', closePopWindow)
    return openPopWindow;
}