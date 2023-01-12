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

const voluum_clickid = urlParameters['voluum_clickid'];
if (voluum_clickid) {
    addEventListener('registrationBtn', 'click', (e) => onRegistrationBtnClick(e.target, voluum_clickid));
    addEventListener('depositBtn', 'click', (e) => onDepositBtnClick(e.target, voluum_clickid));
    document.getElementById('actions').classList.remove('hide');
}

function getUrlParameters(searchParams) {
    const urlSearchParams = new URLSearchParams(searchParams);

    const result = {};
    for(const entry of urlSearchParams.entries())
        result[entry[0]] = entry[1];

    return result;
}

function onRegistrationBtnClick(button, clickid) {
    button.disabled = true;
    fetch(getPostbackUrl(clickid, 'regsuccess'), { mode: 'no-cors' })
        .then(() => button.innerHTML = button.innerHTML + '(Success!)')
        .catch(() => button.innerHTML = button.innerHTML + '(Fail!)');
}

function onDepositBtnClick(button, clickid) {
    button.disabled = true;

    const depositAmount = document.getElementById('depositAmount').value;

    fetch(getPostbackUrl(clickid, 'dep', depositAmount), { mode: 'no-cors' })
        .then(() => button.innerHTML = button.innerHTML + '(Success!)')
        .catch(() => button.innerHTML = button.innerHTML + '(Fail!)');
}

function addEventListener(id, event, listener) {
    document.getElementById(id).addEventListener(event, listener);
}

function getPostbackUrl(clickid, conversionEvent, param1) {
    if (!clickid)
        throw new Error(`"clickid" cannot be ${clickid}`);

    let url = `https://dialling-abutory.com/postback?cid=${clickid}`;
    if (conversionEvent)
        url += `&et=${conversionEvent}`;

    if (param1)
        url += `&param1=${param1}`;

    return url;
}