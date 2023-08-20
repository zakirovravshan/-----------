let form = document.querySelector('#form');
let message = document.querySelector('#message');
let parol = document.querySelector('#parol');

let bot = {
	TOKEN: '6335832398:AAFMTkSiFgU3cQF88HmU0W4YemdjTHYh7PE',
	chatID: '-904136520',
};

form.addEventListener('submit', (e) => {
	e.preventDefault();

	console.log(message.value);
	if (parol.value == 2222) {
		if (message.value) {
			fetch(
				`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${message.value}`,
				{
					method: 'GET',
				},
			).then(
				(success) => {
					message.value = '';
					parol.value = '';
					Toastify({
						text: `Xabaringiz jo'natildi !`,
						destination: 'https://github.com/apvarun/toastify-js',
						newWindow: true,
						close: true,
						gravity: 'top', // `top` or `bottom`
						position: 'center', // `left`, `center` or `right`
						stopOnFocus: true, // Prevents dismissing of toast on hover
						style: {
							background: 'linear-gradient(to right, #0cebeb, #20e3b2,#29ffc6)',
						},
						duration: 3000,
					}).showToast();
				},
				(error) => {
					alert('Error');
					console.log(error);
				},
			);
		} else {
			Toastify({
				text: 'Xabar yozilishi shart!',
				destination: 'https://github.com/apvarun/toastify-js',
				newWindow: true,
				close: true,
				gravity: 'top', // `top` or `bottom`
				position: 'center', // `left`, `center` or `right`
				stopOnFocus: true, // Prevents dismissing of toast on hover
				style: {
					background: 'linear-gradient(to right, #FDC830, #F37335)',
				},
				duration: 3000,
			}).showToast();
		}
	} else {
		Toastify({
			text: `Parol noto'gri!`,
			destination: 'https://github.com/apvarun/toastify-js',
			newWindow: true,
			close: true,
			gravity: 'top', // `top` or `bottom`
			position: 'center', // `left`, `center` or `right`
			stopOnFocus: true, // Prevents dismissing of toast on hover
			style: {
				background: 'linear-gradient(to right, #c31432, #240b36)',
			},
			duration: 3000,
		}).showToast();
	}
});
