const container=document.querySelector('.container');
const request=new XMLHttpRequest();
request.open('GET',"https://restcountries.eu/rest/v2/name/Bharat");
request.send();

request.addEventListener('load',function(){
    const [data]=JSON.parse(this.responseText);
    const htmlData=`
    <div id="card">
    <article class="card">
    <div class="card-body">
    <img src="${data.flag} "alt="indianflag" class="card-body-img"/>
    <h1 class="card-body-title">
    ${data.name}<span></span>
    </h1>
    <p class="card-body-text">Capital : ${data.capital}</p>
    </div>
    <div class="card-footer">
    <div class="card-footer-social" id="block">
    <h3>${data.altSpellings}</h3>
    <p>Alternative Name</p>
    </div>
    <div class="card-footer-social">
    <h3>${data.population}</h3>
    <p>Population</p>
    </div>
    <div class="card-footer-social">
    <h3>${data.demonym}</h3>
    <p>Demonym</p>
    </div>
    </div>
    </article>
    </div>
    `;
    container.insertAdjacentHTML("afterbegin",htmlData);
})