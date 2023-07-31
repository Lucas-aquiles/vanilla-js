document.addEventListener("DOMContentLoaded", () => {
  /* Guardo en variables cada elemento del DOM  */
  const arrayEmojis = ["🙁", "🙁", "🤩", "🙁", "🙁"];
  const oneDiv = document.getElementById("oneDiv");
  const twoDiv = document.querySelector("#twoDiv");
  const threeDiv = document.getElementById("threeDiv");
  const fourDiv = document.getElementById("fourDiv");
  const fiveDiv = document.getElementById("fiveDiv");
  const btn = document.querySelector("#btn");
  const miElementos = document.querySelectorAll(".ocultar");
  const winDiv = document.getElementById("winDiv");
  const loserDiv = document.getElementById("loserDiv");
  var stateGral = false;


  /*  Posiciona los elementos del array en los div  */

  const arrayDiv = (array) => {
    oneDiv.textContent = array[0];
    twoDiv.textContent = array[1];
    threeDiv.textContent = array[2];
    fourDiv.textContent = array[3];
    fiveDiv.textContent = array[4];
  };
  arrayDiv(arrayEmojis);


  // Devuelve un index al azar 
  const chooseNumberRandom = (array) => {
    let longArray = array.length;
    let indexArray = Math.floor(Math.random() * longArray);
    return indexArray;
  };

  // Funcion que estable un nuevo array con el nuevo orden
  const setearEmojis = (array, fChange) => {
    const copieArray = [...array];

    let indexArray = fChange(copieArray);
    let emojiSave = copieArray[2];
    let arraySet = copieArray.copyWithin(2, 4);
    let newArray = (arraySet[indexArray] = emojiSave);
    console.log(arraySet);
    return arraySet;
  };

  //Eventos

  btn.addEventListener("click", () => {
    stateGral = true;
    let newIndexArray = setearEmojis(arrayEmojis, chooseNumberRandom);
    arrayDiv(newIndexArray);
    miElementos.forEach((elemento) => {
      elemento.classList.add("text-transparent");
    });
    btn.classList.add("hidden");
  });


  oneDiv.addEventListener("click", obtenerValor);
  twoDiv.addEventListener("click", obtenerValor);
  threeDiv.addEventListener("click", obtenerValor);
  fourDiv.addEventListener("click", obtenerValor);
  fiveDiv.addEventListener("click", obtenerValor);

  function obtenerValor(event) {
    if (stateGral === true) {
      const texto = event.target.textContent;
      if (texto == "🤩") {
        winDiv.classList.remove("invisible")
        winDiv.classList.add("visible")
        winDiv.textContent = "Bien Ahí";
        setTimeout(() => {
          location.reload();
        }, 2000);
      } else {
        loserDiv.classList.remove("invisible")
        loserDiv.classList.add("visible")
        loserDiv.textContent = "Casi.....";
        setTimeout(() => {
          location.reload();
        }, 2000);
      }
    }
  }
});
