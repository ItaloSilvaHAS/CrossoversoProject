// Função para mostrar os perks com base na raça escolhida
document.getElementById('race').addEventListener('change', function() {
    const perkText = document.getElementById('perkText');
    const perkBox = document.getElementById('perk');

    let perkMessage = '';
    
    // Logica para exibir o perk de acordo com a raça
    switch (this.value) {
        case 'humano':
            perkMessage = 'Raça com maior potencial de despertar (+5 EGO)';
            break;
        case 'gigante':
            perkMessage = 'Maior força de batalha (+5 Força)';
            break;
        case 'dragao':
            perkMessage = 'Controle básico de um dos 4 elementos (Fogo, Água, Vento ou Terra)';
            break;
        case 'demônio':
            perkMessage = 'Imunidade ao FOGO e controle básico de chamas';
            break;
        case 'elfoNegro':
            perkMessage = 'Imunidade a MAGIAS';
            break;
        case 'fada':
            perkMessage = 'Portal de Mana enorme (+5 Inteligência)';
            break;
        case 'bruxos':
            perkMessage = 'Habilidade de nivelar atributos com oponente por 2 turnos';
            break;
        default:
            perkMessage = 'Escolha uma raça para ver seu perk.';
    }

    perkText.innerHTML = perkMessage;
    perkBox.classList.add('active');
});

// Função para exibir os perks com base na raça escolhida
document.getElementById('race').addEventListener('change', function() {
    const perkText = document.getElementById('perkText');
    const perkBox = document.getElementById('perk');

    let perkMessage = '';
    
    // Logica para exibir o perk de acordo com a raça
    switch (this.value) {
        case 'humano':
            perkMessage = 'Raça com maior potencial de despertar (+5 EGO)';
            break;
        case 'gigante':
            perkMessage = 'Maior força de batalha (+5 Força)';
            break;
        case 'dragao':
            perkMessage = 'Controle básico de um dos 4 elementos (Fogo, Água, Vento ou Terra)';
            break;
        case 'demônio':
            perkMessage = 'Imunidade ao FOGO e controle básico de chamas';
            break;
        case 'elfoNegro':
            perkMessage = 'Imunidade a MAGIAS';
            break;
        case 'fada':
            perkMessage = 'Portal de Mana enorme (+5 Inteligência)';
            break;
        case 'bruxos':
            perkMessage = 'Habilidade de nivelar atributos com oponente por 2 turnos';
            break;
        default:
            perkMessage = 'Escolha uma raça para ver seu perk.';
    }

    perkText.innerHTML = perkMessage;
    perkBox.classList.add('active');
});

// Função para gerar e exibir a ficha do personagem com gráfico
function generateCharacter() {
    const name = document.getElementById('name').value;
    const race = document.getElementById('race').value;
    const className = document.getElementById('class').value;
    const strength = parseInt(document.getElementById('strength').value);
    const intelligence = parseInt(document.getElementById('intelligence').value);
    const agility = parseInt(document.getElementById('agility').value);

    // Preencher a ficha do personagem
    document.getElementById('characterName').textContent = 'Nome: ' + name;
    document.getElementById('characterRace').textContent = 'Raça: ' + race;
    document.getElementById('characterClass').textContent = 'Classe: ' + className;
    document.getElementById('displayStrength').textContent = strength;
    document.getElementById('displayIntelligence').textContent = intelligence;
    document.getElementById('displayAgility').textContent = agility;

    // Exibir a ficha e o gráfico
    document.getElementById('characterStats').style.display = 'block';

    // Gerar o gráfico
    const ctx = document.getElementById('characterChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Força', 'Inteligência', 'Agilidade'],
            datasets: [{
                label: 'Atributos',
                data: [strength, intelligence, agility],
                backgroundColor: ['#FF5733', '#33FF57', '#3357FF'],
                borderColor: ['#FF5733', '#33FF57', '#3357FF'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Função para exibir os perks com base na raça escolhida
document.getElementById('race').addEventListener('change', function() {
    const perkText = document.getElementById('perkText');
    const perkBox = document.getElementById('perk');

    let perkMessage = '';
    
    // Logica para exibir o perk de acordo com a raça
    switch (this.value) {
        case 'humano':
            perkMessage = 'A raça com maior potencial de despertar, recebe um bônus de +5 EGO';
            break;
        case 'gigante':
            perkMessage = 'Possui a maior força de batalha, com um bônus de +5 Força';
            break;
        case 'dragao':
            perkMessage = 'Capacidade de controlar um dos 4 elementos da natureza (Fogo, Água, Vento ou Terra)';
            break;
        case 'demônio':
            perkMessage = 'Imune a fogo e capaz de controlar chamas de maneira básica';
            break;
        case 'elfoNegro':
            perkMessage = 'Imune a magias, mas não pode aprender ou ser afetado por elas';
            break;
        case 'fada':
            perkMessage = 'Possui um enorme Portal de Mana que concede +5 de Inteligência';
            break;
        case 'bruxos':
            perkMessage = 'Capacidade de nivelar seus atributos com o oponente por 2 turnos';
            break;
        default:
            perkMessage = 'Escolha uma raça para ver seu perk.';
    }

    perkText.innerHTML = perkMessage;
    perkBox.classList.add('active');
});

// Função para garantir que a distribuição de pontos respeite o limite de 15
let totalPoints = 15;
document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', updatePoints);
});

function updatePoints() {
    let pointsUsed = 0;
    document.querySelectorAll('input[type="number"]').forEach(input => {
        pointsUsed += parseInt(input.value) || 0;
    });

    if (pointsUsed > totalPoints) {
        alert('Você excedeu o limite de 15 pontos. Tente novamente.');
        return;
    }

    document.getElementById('pointsLeft').textContent = totalPoints - pointsUsed;
}

// Função para gerar e exibir a ficha do personagem com gráfico
function generateCharacter() {
    const name = document.getElementById('name').value;
    const race = document.getElementById('race').value;
    const className = document.getElementById('class').value;
    const strength = parseInt(document.getElementById('strength').value);
    const speed = parseInt(document.getElementById('speed').value);
    const intelligence = parseInt(document.getElementById('intelligence').value);
    const ego = parseInt(document.getElementById('ego').value);

    // Preencher a ficha do personagem
    document.getElementById('characterName').textContent = 'Nome: ' + name;
    document.getElementById('characterRace').textContent = 'Raça: ' + race;
    document.getElementById('characterClass').textContent = 'Classe: ' + className;
    document.getElementById('displayStrength').textContent = strength;
    document.getElementById('displaySpeed').textContent = speed;
    document.getElementById('displayIntelligence').textContent = intelligence;
    document.getElementById('displayEgo').textContent = ego;

    // Exibir a ficha e o gráfico
    document.getElementById('characterStats').style.display = 'block';

    // Gerar o gráfico
    const ctx = document.getElementById('characterChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Força', 'Velocidade', 'Inteligência', 'Ego'],
            datasets: [{
                label: 'Atributos',
                data: [strength, speed, intelligence, ego],
                backgroundColor: ['#FF5733', '#33FF57', '#3357FF', '#FF33A1'],
                borderColor: ['#FF5733', '#33FF57', '#3357FF', '#FF33A1'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

