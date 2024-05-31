const readMore = document.getElementById('read-more');
const hiddenText = document.getElementById('hidden-text');
const readMore1 = document.getElementById('read-more1');
const hiddenText1 = document.getElementById('hidden-text1');
const readMore2 = document.getElementById('read-more2');
const hiddenText2 = document.getElementById('hidden-text2');
const readMore3 = document.getElementById('read-more3');
const hiddenText3 = document.getElementById('hidden-text3');
const readMore4 = document.getElementById('read-more4');
const hiddenText4 = document.getElementById('hidden-text4');
const readMore5 = document.getElementById('read-more5');
const hiddenText5 = document.getElementById('hidden-text5');

readMore.addEventListener('click', function() {
	if (hiddenText.classList.contains('hidden-text')) {
		hiddenText.classList.remove('hidden-text');
		hiddenText.classList.add('show-hidden-text');
		readMore.textContent = 'See Less';
	} else {
		hiddenText.classList.remove('show-hidden-text');
		hiddenText.classList.add('hidden-text');
		readMore.textContent = 'Read More';
	}
});

readMore1.addEventListener('click', function() {
	if (hiddenText1.classList.contains('hidden-text1')) {
		hiddenText1.classList.remove('hidden-text1');
		hiddenText1.classList.add('show-hidden-text');
		readMore1.textContent = 'See Less';
	} else {
		hiddenText1.classList.remove('show-hidden-text');
		hiddenText1.classList.add('hidden-text1');
		readMore1.textContent = 'Read More';
	}
});

readMore2.addEventListener('click', function() {
	if (hiddenText2.classList.contains('hidden-text2')) {
		hiddenText2.classList.remove('hidden-text2');
		hiddenText2.classList.add('show-hidden-text');
		readMore2.textContent = 'See Less';
	} else {
		hiddenText2.classList.remove('show-hidden-text');
		hiddenText2.classList.add('hidden-text2');
		readMore2.textContent = 'Read More';
	}
});

readMore3.addEventListener('click', function() {
	if (hiddenText3.classList.contains('hidden-text3')) {
		hiddenText3.classList.remove('hidden-text3');
		hiddenText3.classList.add('show-hidden-text');
		readMore3.textContent = 'See Less';
	} else {
		hiddenText3.classList.remove('show-hidden-text');
		hiddenText3.classList.add('hidden-text3');
		readMore3.textContent = 'Read More';
	}
});

readMore4.addEventListener('click', function() {
	if (hiddenText4.classList.contains('hidden-text4')) {
		hiddenText4.classList.remove('hidden-text4');
		hiddenText4.classList.add('show-hidden-text');
		readMore4.textContent = 'See Less';
	} else {
		hiddenText4.classList.remove('show-hidden-text');
		hiddenText4.classList.add('hidden-text4');
		readMore4.textContent = 'Read More';
	}
});

readMore5.addEventListener('click', function() {
	if (hiddenText5.classList.contains('hidden-text5')) {
		hiddenText5.classList.remove('hidden-text5');
		hiddenText5.classList.add('show-hidden-text');
		readMore5.textContent = 'See Less';
	} else {
		hiddenText5.classList.remove('show-hidden-text');
		hiddenText5.classList.add('hidden-text5');
		readMore5.textContent = 'Read More';
	}
});


const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('#mobile-list');
const handletoggle =() => {
	nav.classList.toggle('menu-mobile')
	nav.classList.toggle('active')

}
hamburger.addEventListener('click', handletoggle)

// const hamburger = document.querySelector('.hamburger');
// const nav= document.querySelector('.nav');

// 	function burger () {
// 	nav.classList.toggle('active')
	
// }
// hamburger.addEventListener('click' , burger)

// const hamburger = document.querySelector('.hamburger');
// const nav = document.querySelector('.nav');
// hamburger.addEventListener('click', () => {
// 	nav.classList.toggle('show');
	
// });
