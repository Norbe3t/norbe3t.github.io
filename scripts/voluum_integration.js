const urlParameters = getUrlParameters(window.location.search);
const informationContainer = document.getElementById('info');

const parameterNames = Object.keys(urlParameters);
if (parameterNames.length) {
    informationContainer.innerHTML = '';

    parameterNames.forEach(name => {
        informationContainer.innerHTML += `<p>${name}: ${urlParameters[name]}</p>`;
    });
}
else {
    informationContainer.innerHTML = 'No Info :c';
}

function getUrlParameters(searchParams) {
    const urlSearchParams = new URLSearchParams(searchParams);

    const result = {};
    for(const entry of urlSearchParams.entries()) {
        result[entry[0]] = entry[1];
    }

    return result;
}