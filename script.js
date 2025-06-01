let x = 0;
let y = 0;

function AlterarTema()
{
    if(x%2 == 0)
    {
        document.getElementById("menu-tema").style.display = "flex"
        x++;
    }
    else
    {
        document.getElementById("menu-tema").style.display = "none"
        x--
    }
}

function MostrarVagas()
{
    if(y%2 == 0)
    {
        document.getElementById("content-vagas").style.display = "flex"
        y++;
    }
    else
    {
        document.getElementById("content-vagas").style.display = "none"
        y--
    }
}

function TemaEscuro()
{
    document.getElementById("container-id").classList.add("dark");
    localStorage.setItem('tema', 'escuro');
}

function TemaClaro()
{
    document.getElementById('container-id').classList.remove('dark');
    localStorage.setItem('tema', 'claro');
}

window.addEventListener('DOMContentLoaded', () => {
    const temaSalvo = localStorage.getItem('tema');
    const container = document.querySelector('.container');
  
    if (temaSalvo === 'escuro') {
      container.classList.add('dark');
    } else {
      container.classList.remove('dark');
    }
  });  

  document.addEventListener('DOMContentLoaded', function () {
    const aulas = [
        {
            "id": 1,
            "disciplina": "S05 - Interface Homem-máquina",
            "data": "ter",
            "horario": "10:00",
            "local": "P1-S17",
            "prova_alert": false,
            "prova": "12/05",
            "frequencia": "10/25",
            "nota": "9"
        },
        {
            "id": 2,
            "disciplina": "E01 - Circuitos Elétricos em Corrente Contínua",
            "data": "ter",
            "horario": "10:00",
            "local": "P1-S17",
            "prova_alert": true,
            "prova": "12/05",
            "frequencia": "10/25",
            "nota": "5"
        },
        {
            "id": 3,
            "disciplina": "M02 - Álgebra e Geometria Analítica",
            "data": "ter",
            "horario": "10:00",
            "local": "P1-S17",
            "prova_alert": true,
            "prova": "12/05",
            "frequencia": "10/25",
            "nota": "7"
        }
    ];

    const aulasDia = aulas.filter(aula => aula.data === "ter"); 
    const aulasListElement = document.getElementById('aulas-list');

    aulasDia.forEach(aula => {
        const aulaElement = document.createElement('div');
        aulaElement.classList.add('comp-aula');
        aulaElement.setAttribute('data-id', aula.id); 

        let provaDisplay = aula.prova_alert ? '' : 'display: none;';
        aulaElement.innerHTML = `
            <div class="lable-prova p_lable" style="${provaDisplay}">PROVA: <b>${aula.prova}</b></div>
            <div class="titulo_aula">${aula.disciplina}</div>
            <p class="local-horario">Local e Horário: <b>${aula.local} - ${aula.horario}</b></p>
            <div class="lables">
                <div class="lable-frequencia p_lable">FALTAS: <b>${aula.frequencia}</b></div>
                <div class="lable-nota p_lable">CR: <b>${aula.nota}</b></div>
            </div>
        `;

        aulasListElement.appendChild(aulaElement);
    });

    aulasDia.forEach(aula => 
        {
        const nota = Number(aula.nota);

        if (nota < 6) 
        {
            const aulaElement = document.querySelector(`[data-id="${aula.id}"]`);
            const lableNota = aulaElement.querySelector(".lable-nota");
            lableNota.style.backgroundColor = "red"; 
        }

        else if(nota >= 8)
        {
            const aulaElement = document.querySelector(`[data-id="${aula.id}"]`);
            const lableNota = aulaElement.querySelector(".lable-nota");
            lableNota.style.backgroundColor = "green"; 
        }

        else
        {
            const aulaElement = document.querySelector(`[data-id="${aula.id}"]`);
            const lableNota = aulaElement.querySelector(".lable-nota");
            lableNota.style.backgroundColor = "orange"; 
        }
    });
});

const vagas = [
  {
    id: 1,
    tipo: 'emprego',
    titulo: 'Desenvolvedor Front-End',
    descricao: 'Buscamos um desenvolvedor com experiência em React e CSS.',
    link: ''
  },
  {
    id: 2,
    tipo: 'estagio',
    titulo: 'Estágio em Desenvolvimento Web',
    descricao: 'Oportunidade para estudantes com interesse em HTML, CSS e JavaScript.',
    link: ''
  },
  {
    id: 3,
    tipo: 'emprego',
    titulo: 'Engenheiro de Software Backend',
    descricao: 'Experiência em Node.js e bancos de dados relacionais.',
    link: ''
  }
];

function filtrarVagas(tipo) {
  const listaVagas = document.getElementById('lista-vagas');
  listaVagas.innerHTML = '';
  const vagasFiltradas = tipo === 'todos' ? vagas : vagas.filter(vaga => vaga.tipo === tipo);
  vagasFiltradas.forEach(vaga => {
    const div = document.createElement('div');
    div.classList.add('vaga');
    div.innerHTML = `
      <h3>${vaga.titulo}</h3>
      <p>${vaga.descricao}</p>
      <a href="${vaga.link}" target="_blank" rel="noopener noreferrer">Saiba mais</a>
    `;
    listaVagas.appendChild(div);
  });
}

document.addEventListener('DOMContentLoaded', () => filtrarVagas('todos'));