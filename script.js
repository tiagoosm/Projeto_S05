let x = 0;

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