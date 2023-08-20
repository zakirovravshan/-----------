let form = document.querySelector('#form');
let message = document.querySelector('#message');

let bot = {
	TOKEN: '6335832398:AAFMTkSiFgU3cQF88HmU0W4YemdjTHYh7PE',
	chatID: '-904136520',
};

form.addEventListener('submit', (e) => {
	e.preventDefault();

	console.log(message.value);
	fetch(
		`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${message.value}`,
		{
			method: 'GET',
		},
	);
});
