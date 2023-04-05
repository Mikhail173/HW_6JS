```
<a href="#" class="card-link">Card link</a>
<a href="#" class="card-link">Another link</a>

<div class="card" style="width: 18rem;">
<div class="card-body">
<h5 class="card-title" data-number="100">Card title</h5>
<h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
<p class="card-text" data-number="50">
Some quick example text to build on the card title and make up the bulk of the card's
content.
</p>
<a href="#" id="super_link" class="card-link">Card link</a>
<a href="#" class="card-link" data-number="50">Another link</a>
</div>
</div>

<script>
"use strict";`;

//1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
const link = document.getElementById("super_link");
console.log(link);

//2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
const cardlinks = document.querySelectorAll(".card-link");
cardlinks.forEach((element) => {
  element.textContent = "cсылка";
});

//3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
const card = document.querySelectorAll(".card-body .card-link");
console.log(card);

//4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
const el = document.querySelector("*[50]");
console.log(el);

//5. Выведите содержимое тега title в консоль.
const content = document.getElementsByClassName("title");
console.log(content);

//6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
const item = document.querySelector("card-title");
const parent = item.parentElement;
console.log(parent);

//7. Создайте тег, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
const articleDiv = document.querySelector("div.card");
const elem = document.createElement("h2");
const elemText = document.createTextNode("Привет");
elem.appendChild(elemText);
const firstElem = articleDiv.firstChild.nextSibling;
articleDiv.insertBefore(elem, firstElem);

//8. Удалите тег h6 на странице.
const h6 = document.querySelector("h6");
const Parent = h6.parentNode;
Parent.removeChild(h6);
