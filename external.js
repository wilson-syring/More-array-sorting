//array containing the bands
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

//function for filtering past the articles
function clean(bandName){
    return bandName.replace(/^(a |the |an )/i, '').trim();
}

//sorted array
const sortedBands = bands.sort(((a,b) => clean(a) > clean(b) ? 1 : -1));

// selectors for grabbing the html element and displaying the sorted array
document.querySelector('#bands').innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');

