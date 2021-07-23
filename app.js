let button = document.getElementById('btn');

function generateImage() {
    axios.get('https://foodish-api.herokuapp.com/api/').then(makeAnElement).catch(failedToLoad);
}

function makeAnElement(response){
    let randomPhoto = document.createElement('img');
    randomPhoto.setAttribute('src', response.data.image);
    document.getElementById('container').appendChild(randomPhoto);
}

function failedToLoad(){
    console.log();("Unable to load images.");
}

button.addEventListener('click', generateImage);