const cocktailscenter = document.querySelector(".cocktails-center");
const cocktailsection = document.querySelector("cocktail-section");
const loader = document.querySelector(".loader");
loader.classList.remove("hidden");

function createDrinks(data) {
  cocktailscenter.innerHTML = "";
  data.drinks.forEach((item) => {
    const article = document.createElement("article");
    article.classList.add("cocktail");
    article.innerHTML = `<div class="img-container"><img src=${item.strDrinkThumb} alt='${item.strDrink}'></div> <div class="cocktail-footer">
              <h3>${item.strDrink}</h3>
              <h4>${item.strGlass}</h4>
              <p>${item.strAlcoholic}</p>
              <a  id="details"class="btn btn-primary btn-details" href="/coctail/${item.idDrink}"
                >details</a
              >`;

    cocktailscenter.appendChild(article);
  });
}
fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
  .then((res) => res.json())
  .then((data) => {
    loader.classList.add("hidden");
    createDrinks(data);
  })
  .catch((error) => {
    loader.classList.add("hidden");
  });

function createUi(data, dataType) {
  cocktailscenter.innerHTML = "";
  data.forEach((item) => {
    const article = document.createElement("article");
    li.classList.add("list-item");
    switch (dataType) {
      case "data":
        article.innerHTML = `<div class="img-container"><img src=${item.strDrinkThumb} alt='${item.strDrink}'></div> <div class="cocktail-footer">
              <h3>${item.strDrink}</h3>
              <h4>${item.strGlass}</h4>
              <p>${item.strAlcoholic}</p>
              <a class="btn btn-primary btn-details" href="/coctail/${item.idDrink}"
                >details</a
              >`;
        break;
    }
  });
}
input.addEventListener("input", (e) => {
  getData("data");
  function getData(dataType) {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => createDrinks(data, dataType));
    /*.catch((err) => alert("Eror"));*/
  }
});

/*const enterdetails = document.getElementsByClassName("btn");
function triggerBtnClick() {
  enterdetails.addEventListener("click", () => {});
}
fetch("https:www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}")
  .then((res) => res.json())
  .then((triggerBtnClick) => {
    drink.classList.add("drink");
    createDrinks(triggerBtnClick);
  })
  .catch((error) => {
    drink.classList.add("drink");
  }); const details = document.createElement("details");
    details.classList.add("information");
function createUi(data, dataType) {
  cocktailsection.innerHTML = "";
  data.forEach((item) => {
    const details = document.createElement("details");
    details.classList.add("information");
    switch (dataType) {
      case "data":
        details.innerHTML = `<img src=${item.strDrinkThumb} alt='${item.strDrink}' />
          <div class="drink-info">
            <p><span class="drink-data">name :</span>${item.strName} </p>
            <p><span class="drink-data">category :</span> ${item.strCategory}</p>
            <p><span class="drink-data">info :</span> ${item.strInfo}</p>
            <p><span class="drink-data">glass :</span> ${item.strGlass}</p>
            <p>
              <span class="drink-data">instructons : </span> ${item.strInstructons} 
            </p>
            <p>
              <span class="drink-data">ingredients : </span><span>${item.striIngredients} </span
              ><span> ${item.striIngredients} </span><span> ${item.striIngredients} </span
              ><span> ${item.striIngredients} </span>
            </p>
          </div>`;
        break;
    }
  });
}
details.addEventListener("click", (e) => {
  getData("data");
  function getData(dataType) {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`)
      .then((res) => res.json())
      .then((data) => createDrinks(data, dataType));
    .catch((err) => alert("Eror"));
  }
});*/
