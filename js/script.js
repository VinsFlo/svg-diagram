// скрипт, который позволит выделять нужную секцию при наведении на её название в легенде


let captionsList = document.querySelectorAll('.caption-item'); // найти все названия секций в легенде.
let unitsList = document.querySelectorAll('.unit');  // найти все секции диаграммы.

captionsList.forEach(function (item, index) {
	item.addEventListener('mouseover', function () { //добавить каждому названию секции отслеживание событий наведения и снятия курсора.
		unitsList[index].classList.add('hovered'); //добавлять или удалять класс hovered у секций диаграммы в зависимости от положения курсора.
	});

	item.addEventListener('mouseout', function () {
		unitsList[index].classList.remove('hovered');
	});
});

