fetch("api%20cla%20pl.json")
    .then(response => response.json())
    .then(data => afficherClassement(data))
    .catch(error => console.error("Erreur lors du chargement JSON :", error));


function afficherClassement(data) {
    const tbody = document.getElementById("classement");
    tbody.innerHTML = ""; // vider avant affichage

    data.forEach(team => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${team.position}</td>
            <td>
                <img src="${team.participant.image_path}" alt="${team.participant.name}" 
                     style="height:20px; vertical-align:middle; margin-right:8px;">
                ${team.participant.name}
            </td>
            <td></td>  <!-- Joués - non disponible dans le JSON -->
            <td></td>  <!-- Gagnés -->
            <td></td>  <!-- Nuls -->
            <td></td>  <!-- Perdus -->
            <td></td>  <!-- Diff -->
            <td><b>${team.points}</b></td>
        `;

        tbody.appendChild(tr);
    });
}