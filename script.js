document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const saveProfileBtn = document.getElementById("save-profile");
    const body = document.body;

    // Carregar o tema salvo do localStorage
    const savedTheme = localStorage.getItem("theme");

    // Se já houver um tema salvo, aplicá-lo
    if (savedTheme) {
        body.classList.add(savedTheme);
    } else {
        // Se não, aplicar o tema claro por padrão
        body.classList.add("light-theme");
        localStorage.setItem("theme", "light-theme");
    }

    // Alterar tema quando clicar no botão
    themeToggle.addEventListener("click", () => {
        // Verificar qual tema está atualmente aplicado
        if (body.classList.contains("dark-theme")) {
            // Se estiver no tema escuro, mudar para o claro
            body.classList.remove("dark-theme");
            body.classList.add("light-theme");
            localStorage.setItem("theme", "light-theme"); // Salvar o tema no localStorage
        } else {
            // Se estiver no tema claro, mudar para o escuro
            body.classList.remove("light-theme");
            body.classList.add("dark-theme");
            localStorage.setItem("theme", "dark-theme"); // Salvar o tema no localStorage
        }
    });

    // Botão de salvar perfil
    saveProfileBtn.addEventListener("click", () => {
        const username = prompt("Digite seu nome");
        if (username) {
            alert(`Perfil de ${username} salvo!`);
        }
    });

    // Dados dos eventos
    const eventos = [
        {
            id: 1,
            title: 'Semana do Software 2025',
            date: '12/05',
            time: '10:00',
            location: 'Salão de Eventos',
            type: 'tech',
            description: 'Uma semana inteira dedicada à tecnologia e inovação, com palestras, workshops e hackathons.',
            image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800&h=400'
        },
        {
            id: 2,
            title: 'Workshop de IoT',
            date: '12/01',
            time: '08:00',
            location: 'Laboratório CS&I',
            type: 'tech',
            description: 'Workshop prático sobre Internet das Coisas e suas aplicações na indústria 4.0.',
            image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=400'
        },
        {
            id: 3,
            title: 'Festa dos Alunos 2025',
            date: '18/05',
            time: '19:00',
            location: 'Área Esportiva do Inatel',
            type: 'cultural',
            description: 'Venha comemorar a melhor Festa dos Alunos de todos os tempos!',
            image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800&h=400'
        },
        {
            id: 4,
            title: 'Feira de Oportunidades',
            date: '04/05',
            time: '10:00',
            location: 'Salão de Eventos',
            type: 'academic',
            description: 'Venha conhecer empresas e projetos com destaque na área da engenharia.',
            image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=400'
        }
    ];

    // Criar e adicionar os cards de eventos dinamicamente
    const carouselContainer = document.querySelector('.carousel'); // Aonde vamos adicionar os cards

    eventos.forEach(evento => {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = evento.image;
        img.alt = evento.title;

        const info = document.createElement('div');
        info.classList.add('info');
        
        const title = document.createElement('h3');
        title.textContent = evento.title;

        const date = document.createElement('p');
        date.textContent = `${evento.date} - ${evento.time}`;
        
        const location = document.createElement('p');
        location.textContent = evento.location;

        info.appendChild(title);
        info.appendChild(date);
        info.appendChild(location);

        const description = document.createElement('div');
        description.classList.add('description');
        description.textContent = evento.description;

        card.appendChild(img);
        card.appendChild(info);
        card.appendChild(description);

        carouselContainer.appendChild(card);
    });
});

