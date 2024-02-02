async function Peticion() {

    const digimonName = document.getElementById("digimonName");
    
    const res = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${digimonName.value}`);

    if(!res.ok)
        alert("Could not fetch resource.");
    

    const json = await res.json();
    
    const digimon = json[0]
    
    const imgDigimon = digimon.img;
    const imgElement = document.getElementById("imgDigimon");

    imgElement.src = imgDigimon;
    imgElement.style.display = "block";
}