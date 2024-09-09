document.querySelector('.selected-language').addEventListener('click', function() {
    document.querySelector('.language-selector').classList.toggle('active');
});

document.querySelectorAll('.language-dropdown div').forEach(function(item) {
    item.addEventListener('click', function() {
        // Cambia la bandera seleccionada
        const selectedFlag = this.querySelector('img.flag').src;
        document.querySelector('.selected-language img.flag').src = selectedFlag;
        document.querySelector('.language-selector').classList.remove('active');
    });
});

const flagElement = document.getElementById('flags');

const textsToChange = document.querySelectorAll('[data-section]');

const changeLanguage = async language =>{
    const requestJson = await fetch (`./languages/${language}.json`);
    const texts = await requestJson.json();

    for(const textToChange of textsToChange){
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value; 
        textToChange.innerText = texts[section][value];
    }
}

flagElement.addEventListener('click', (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
});