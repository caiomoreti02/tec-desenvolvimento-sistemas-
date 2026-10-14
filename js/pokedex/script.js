const regions = document.querySelectorAll(".region");

regions.forEach(region => {

region.addEventListener("click", () => {

    const regionName =
        region.dataset.region;


    window.location.href =
        `pokedex.html?region=${regionName}`;

});

});