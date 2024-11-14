const accordion = document.querySelector('#accordion');

companies_investment.forEach(company =>
    accordion.innerHTML += `
        <div class="accordion-item mb-2">
            <h2 class="row accordion-header">
              <button class="me-md-5 pe-md-5 accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${company.accordion}" aria-expanded="false" aria-controls="flush-collapse${company.accordion}">
              <div class="row">
                <div class="col-12 col-md-6">
                    <img src="${company.image}" alt="" class="img-fluid">
                </div>
                <div class="col-12 col-md-6 mt-2 mt-md-0">
                    <h5>${company.name}</h5>
                    <p>Tipo de energia: ${company.type}</p>
                    <p>Localização: ${company.city}, ${company.state}</p>
                    <p>Motivo para investimento: ${company.reason}</p>
                    <p>Taxa de retorno: ${company.financial_return}</p>
                    <p>Data de retorno: ${company.date_return}</p>
                    <a href="" class="btn btn-outline-dark bg-secundary text-light mt-2 text-center">Investir</a>
                </div>
              </button>
              </div>
              </h2>
            <div id="flush-collapse${company.accordion}" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="row p-3">
                    <div class="col">
                        <p>Valor do investimento: ${company.investment}</p>
                        <p>Valor da cota: ${company.price}</p>
                    </div>
                    <div class="col">
                        <p>CNPJ: ${company.cnpj}</p>
                        <p>Email: ${company.email} | Tel: ${company.tel}</p>
                    </div>
                </div>
            </div>
        </div>
    `
)

const cardsContainer = document.querySelector('#companies-hire');

function renderCards(companies) {
    cardsContainer.innerHTML = '';
    companies.forEach(company => {
        cardsContainer.innerHTML += `
          
        
          <div class=" col col-md-6 col-lg-3">
            <div class="card mx-auto card-hire m-2"   data-city="${company.city}" style="width: 13rem;"> 
                <img src="${company.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${company.name}</h5>
                    <p>${company.type}</p>
                    <p class="card-text">${company.city} | ${company.state}</p>
                    <a href="#" class="btn btn-primary text-center">Consultar planos</a>
                </div>
                
                
            </div>
          </div>
        
        `;
    });
}

renderCards(companies_hire);

function filterCards() {
    const input = document.getElementById('cityInput').value.toLowerCase();
    const filteredCompanies = companies_hire.filter(company =>
        company.city.toLowerCase().includes(input)
    );

    if (filteredCompanies.length === 0) {
        document.querySelector('#companies-hire').innerHTML = '<p class="text-center">No momento não temos disponibilidade para essa cidade, mas estamos trabalhando para expandir o nosso negócio o quanto antes!</p>';
    } else {
        renderCards(filteredCompanies);
    }
}