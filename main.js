const firstName = "Adam";
const age = 29;

const welcome = (name, age) => {
    console.log(`Cześć, nazywam się ${name} i mam ${age} lat :) Ta linia jest efektem działania funkcji.`);
}

welcome(firstName, age);

console.log(`Cześć, nazywam się ${firstName} i mam ${age} lat :) Ta linia jest efektem wyświetlania zmiennych w łańcuchu znaków.`);

const footer = document.querySelector('.footer');

footer.innerHTML = 'Są to podstawy frontend stworzone przy pomocy kursu WTF Macieja Korsana. Ten element został wyświetlony za pomocą DOM';