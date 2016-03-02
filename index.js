//.rc container for search
//<cite> ._Rm 

var sheet = document.createElement('style')
sheet.innerHTML = `
    .matched:after { 
        background-color: red;
        -webkit-mask-image: url(https://upload.wikimedia.org/wikipedia/commons/8/85/Pfeil_links.svg);
        top: 50%;
        right: -25%;
        position: absolute;
        -webkit-mask-size: cover;
        content: '';
        background-size: cover;
        width: 50px;
        height: 50px;
        display: block;
        transform: translate(0,-50%); 
    }
`;
document.body.appendChild(sheet);

var matchClass = "matched";
var searchedClass = "searched";
var domains = [ 
    {name: "daheza.com", class: "daheza"}  
];
function addClassesForDomains(matchObject) {
    var searchResults = document.querySelectorAll('.rc:not(.'+searchedClass+')');
    if(searchResults.length < 1) { return; }

    for (var i = 0; i < searchResults.length; i++) 
    {
        var searchElement = searchResults[i].querySelectorAll('cite')[0];
        var searchSite = searchElement.innerText;

        for(var j = 0; j < matchObject.length; j++) {
            if(searchSite.indexOf(matchObject[j].name) > -1) {
                //hey we matched
                searchResults[i].classList.add(matchClass, matchObject[j].class);
                console.log('Matched',matchObject[j].name );
            }
        }
        searchResults[i].classList.add(searchedClass);
    }
}
addClassesForDomains(domains);
window.setInterval(addClassesForDomains, 100, domains );

