fetch("api cla liga.json")
    .then(response => response.json())
    .then(data => afficherClassement(data))
    .catch(error => console.error("Erreur lors du chargement JSON :", error));


// Fonction pour récupérer une stat dans details[]
function getStat(details, code) {
    const item = details.find(d => d.type.code === code);
    return item ? item.value : 0;
}


function afficherClassement(data) {
    const tbody = document.getElementById("classement");
    tbody.innerHTML = "";

    data.forEach(team => {

        const details = team.details;

        // Récupération des stats via leur code
        const gagnes = getStat(details, "overall-won");
        const nuls = getStat(details, "overall-draw");
        const perdus = getStat(details, "overall-lost");
        const butsPour = getStat(details, "overall-goals-for");
        const butsContre = getStat(details, "overall-goals-against");
        const diff = getStat(details, "goal-difference");

        // Calcul des matchs joués
        const joues = gagnes + nuls + perdus;

        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${team.position}</td>

            <td>
                <img src="${team.participant.image_path}" 
                     alt="${team.participant.name}" 
                     style="height:20px; vertical-align:middle; margin-right:8px;">
                ${team.participant.name}
            </td>

            <td>${joues}</td>
            <td>${gagnes}</td>
            <td>${nuls}</td>
            <td>${perdus}</td>
            <td>${diff}</td>
            <td><b>${team.points}</b></td>
        `;

        tbody.appendChild(tr);
    });
}
