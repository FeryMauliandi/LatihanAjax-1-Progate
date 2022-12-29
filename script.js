async function fetchData() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu", {
        method: "GET"
    });

    const json = await response.json();
    let id = json.id;
    let name = json.name;
    let image = json.sprites.front_default;
    let types = json.types[0].type.name;

    console.log(image);
    

    const divPoke = document.getElementById("main");
    let p1 = document.createElement("p");
    p1.innerHTML = `${id} : ${name}`;
    let img = document.createElement("img");
    img.src = `${image}`;
    let p2 = document.createElement("p");
    p2.innerHTML = `type: ${types}`;
    divPoke.append(p1,img,p2);
}