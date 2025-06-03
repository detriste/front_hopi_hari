document.addEventListener('DOMContentLoaded', async function() {
    const urlParams = new URLSearchParams(window.location.search);
    const area = urlParams.get('area');
    
    const token = String(localStorage.getItem('token').replaceAll('"', ''));

    const response = await fetch(`/http://localhost:3000/brinquedos/area/${area}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "AUthorization": "Bearer " + token
        },
     
    });

    const data = await response.json();
    console.log(data);

});
const grid = document.querySelector('.grid');
grid.innerHTML = grid.innerHTML + 

                   ` <div class="ride-card">
                <div class="ride-image" style="background-image: url('https://36b7b97122.cbaul-cdnwnd.com/a929c8f5bc1fba6c13d5199567947203/system_preview_detail_200000075-c5003c579f/Kastel%20di%20Lendas.png')"></div>
                <div class="ride-info">
                    <h3 class="ride-name">${brinquedo.name}</h3>
                    <div class="ride-time">${brinquedo.waiting_time}</div>
                    <span class="ride-status status-open">${brinquedo.status}</span>
                </div>`;