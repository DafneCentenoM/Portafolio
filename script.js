//alert("Hola Mundo");

let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

//reconoces una acción porque tiene parentesis después del nombre de la acción
//a veces tiene el operador punto
typewriter
  .pauseFor(2500)//milisegundos 2.5 segundos
  .typeString('Delia Dafne Centeno Méndez')
  .pauseFor(300)
  .deleteAll()
  .typeString('Desarrolladora FRONTEND JR')
  .pauseFor(1000)
  .start();




  let frase = document.getElementById('frase');

let typewriterFrase = new Typewriter(frase, {
  loop: true,
  delay: 75,
});

//reconoces una acción porque tiene parentesis después del nombre de la acción
//a veces tiene el operador punto
typewriterFrase
  .pauseFor(2500)//milisegundos 2.5 segundos
  .typeString('Haz hoy lo que otros no quieren, haz mañana lo que otros no pueden')
  .pauseFor(300)
  .deleteAll()
  .typeString('Jerry Rice')
  .pauseFor(1000)
  .start();