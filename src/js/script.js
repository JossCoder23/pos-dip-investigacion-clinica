window.addEventListener("load", () => { 
  let button1 = document.querySelectorAll('.bloque2__top--item')[0];
  let button2 = document.querySelectorAll('.bloque2__top--item')[1];
  let button3 = document.querySelectorAll('.bloque2__top--item')[2];
  let button4 = document.querySelectorAll('.bloque2__top--item')[3];
  let dirigido = document.querySelector('.bloque2__dirigido');
  let objetivos = document.querySelector('.bloque2__objetivos');
  let docentes = document.querySelector('.bloque2__docentes');
  let planEstudios = document.querySelector('.bloque2__planEstudios');
  button1.addEventListener("click", (e) => {
    e.preventDefault();
    button1.classList.add('active');
    button2.classList.remove('active');
    button3.classList.remove('active');
    button4.classList.remove('active');
    dirigido.style.display = "flex";
    objetivos.style.display = "none";
    planEstudios.style.display = "none";
    docentes.style.display = "none";
  });
  button2.addEventListener("click", (e) => {
    e.preventDefault();
    button2.classList.add('active');
    button1.classList.remove('active');
    button3.classList.remove('active');
    button4.classList.remove('active');
    dirigido.style.display = "none";
    objetivos.style.display = "block";
    planEstudios.style.display = "none";
    docentes.style.display = "none";
  });
  button3.addEventListener("click", (e) => {
    e.preventDefault();
    button3.classList.add('active');
    button2.classList.remove('active');
    button1.classList.remove('active');
    button4.classList.remove('active');
    dirigido.style.display = "none";
    objetivos.style.display = "none";
    planEstudios.style.display = "flex";
    docentes.style.display = "none";
  });
  button4.addEventListener("click", (e) => {
    e.preventDefault();
    button4.classList.add('active');
    button3.classList.remove('active');
    button2.classList.remove('active');
    button1.classList.remove('active');
    dirigido.style.display = "none";
    objetivos.style.display = "none";
    planEstudios.style.display = "none";
    docentes.style.display = "flex";
  });

})