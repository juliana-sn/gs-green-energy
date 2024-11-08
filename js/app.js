const accordion = document.querySelector('#accordion');

companies_investment.forEach(company =>
    accordion.innerHTML += `
        <div class="accordion-item mb-2">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${company.accordion}" aria-expanded="false" aria-controls="flush-collapse${company.accordion}">

                <div class="col">
                    <img src="${company.image}" alt="" class="img-fluid">
                </div>
                <div class="col">
                    <h5>${company.name}</h5>
                    <p class="btn btn-outline-dark bg-button">Tipo de energia: ${company.type}</p>
                    <p>Localização: ${company.city}, ${company.state}</p>
                    <p>Motivo para investimento: ${company.reason}</p>
                    <p>Taxa de retorno: ${company.financial_return}</p>
                    <p>Data de retorno: ${company.date_return}</p>
                    <a href="" class="btn btn-outline-dark bg-secundary text-light mt-2 text-center">Investir</a>
                </div>
              </button>
            </h2>
            <div id="flush-collapse${company.accordion}" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="row p-3">
                    <div class="col">
                        <p>Valor do investimento: ${company.investment}</p>
                        <p>Valor da cota: ${company.price}</p>
                        <p>Valor atual arrecadado: ${company.value}</p>
                    </div>
                    <div class="col">
                        <p>CNPJ: ${company.cnpj}</p>
                        <p>Nome do responsável: ${company.responsible}</p>
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
            <div class="card col card-hire m-2" style="width: 18rem;" data-city="${company.city}">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${company.name}</h5>
                    <p class="card-text">${company.city}</p>
                    <a href="#" class="btn btn-primary">Contratar</a>
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
        document.querySelector('#companies-hire').innerHTML = '<p class="text-center">No momento não temos disponibilidade para essa cidade. Mas estamos trabalhando para expandir o nosso negócio o quanto antes!</p>';
    } else {
        renderCards(filteredCompanies);
    }
}