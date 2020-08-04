const countEl = document.getElementById('count');

updateVistorCount();

function updateVistorCount() {
    fetch('https://api.countapi.xyz/update/dominique/best/?amount=-1')
        .then(res => res.json())
        .then(res => {
            countEl.innerHTML = res.value;
        });
}