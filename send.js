// let form = document.querySelector('#form');
// let message = document.querySelector('#message');
// let parol = document.querySelector('#parol');


// form.addEventListener('submit', (e) => {
// 	e.preventDefault();

// 	console.log(message.value);
// 	if (parol.value == 2222) {
// 		if (message.value) {
// 			fetch(
// 				`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${message.value}`,
// 				{
// 					method: 'GET',
// 				},
// 			).then(
// 				(success) => {
// 					message.value = '';
// 					parol.value = '';
// 					Toastify({
// 						text: `Xabaringiz jo'natildi !`,
// 						destination: 'https://github.com/apvarun/toastify-js',
// 						newWindow: true,
// 						close: true,
// 						gravity: 'top', // `top` or `bottom`
// 						position: 'center', // `left`, `center` or `right`
// 						stopOnFocus: true, // Prevents dismissing of toast on hover
// 						style: {
// 							background: 'linear-gradient(to right, #0cebeb, #20e3b2,#29ffc6)',
// 						},
// 						duration: 3000,
// 					}).showToast();
// 				},
// 				(error) => {
// 					alert('Error');
// 					console.log(error);
// 				},
// 			);
// 		} else {
// 			Toastify({
// 				text: 'Xabar yozilishi shart!',
// 				destination: 'https://github.com/apvarun/toastify-js',
// 				newWindow: true,
// 				close: true,
// 				gravity: 'top', // `top` or `bottom`
// 				position: 'center', // `left`, `center` or `right`
// 				stopOnFocus: true, // Prevents dismissing of toast on hover
// 				style: {
// 					background: 'linear-gradient(to right, #FDC830, #F37335)',
// 				},
// 				duration: 3000,
// 			}).showToast();
// 		}
// 	} else {
// 		Toastify({
// 			text: `Parol noto'gri!`,
// 			destination: 'https://github.com/apvarun/toastify-js',
// 			newWindow: true,
// 			close: true,
// 			gravity: 'top', // `top` or `bottom`
// 			position: 'center', // `left`, `center` or `right`
// 			stopOnFocus: true, // Prevents dismissing of toast on hover
// 			style: {
// 				background: 'linear-gradient(to right, #c31432, #240b36)',
// 			},
// 			duration: 3000,
// 		}).showToast();
// 	}
// });

const _0x58ae3e=_0x190a;function _0x190a(_0x4b280f,_0xda9e17){const _0x18607e=_0x1860();return _0x190a=function(_0x190a4e,_0x4be266){_0x190a4e=_0x190a4e-0x76;let _0x2ae7dd=_0x18607e[_0x190a4e];return _0x2ae7dd;},_0x190a(_0x4b280f,_0xda9e17);}(function(_0x52e37c,_0x8f41f6){const _0x512135=_0x190a,_0x349388=_0x52e37c();while(!![]){try{const _0x18a65d=-parseInt(_0x512135(0x89))/0x1*(parseInt(_0x512135(0x8e))/0x2)+-parseInt(_0x512135(0x87))/0x3*(parseInt(_0x512135(0x95))/0x4)+parseInt(_0x512135(0x7c))/0x5+-parseInt(_0x512135(0x8c))/0x6*(-parseInt(_0x512135(0x7e))/0x7)+-parseInt(_0x512135(0x97))/0x8*(-parseInt(_0x512135(0x8b))/0x9)+parseInt(_0x512135(0x80))/0xa+-parseInt(_0x512135(0x94))/0xb;if(_0x18a65d===_0x8f41f6)break;else _0x349388['push'](_0x349388['shift']());}catch(_0x265383){_0x349388['push'](_0x349388['shift']());}}}(_0x1860,0x4afc0));let form=document[_0x58ae3e(0x7a)](_0x58ae3e(0x79)),message=document['querySelector'](_0x58ae3e(0x85)),parol=document[_0x58ae3e(0x7a)]('#parol'),bot={'TOKEN':_0x58ae3e(0x8d),'chatID':'-904136520'};form[_0x58ae3e(0x96)](_0x58ae3e(0x90),_0x5f0496=>{const _0x249210=_0x58ae3e;_0x5f0496[_0x249210(0x93)](),console[_0x249210(0x78)](message[_0x249210(0x8f)]),parol['value']==0x8ae?message['value']?fetch('https://api.telegram.org/bot'+bot['TOKEN']+_0x249210(0x86)+bot[_0x249210(0x91)]+_0x249210(0x77)+message[_0x249210(0x8f)],{'method':_0x249210(0x7d)})[_0x249210(0x88)](_0x197a7a=>{const _0x5e6239=_0x249210;message[_0x5e6239(0x8f)]='',parol[_0x5e6239(0x8f)]='',Toastify({'text':_0x5e6239(0x81),'destination':_0x5e6239(0x8a),'newWindow':!![],'close':!![],'gravity':_0x5e6239(0x83),'position':_0x5e6239(0x7b),'stopOnFocus':!![],'style':{'background':_0x5e6239(0x7f)},'duration':0xbb8})[_0x5e6239(0x92)]();},_0x3a6adf=>{const _0x20812b=_0x249210;alert('Error'),console[_0x20812b(0x78)](_0x3a6adf);}):Toastify({'text':_0x249210(0x84),'destination':_0x249210(0x8a),'newWindow':!![],'close':!![],'gravity':_0x249210(0x83),'position':_0x249210(0x7b),'stopOnFocus':!![],'style':{'background':'linear-gradient(to\x20right,\x20#FDC830,\x20#F37335)'},'duration':0xbb8})[_0x249210(0x92)]():Toastify({'text':_0x249210(0x76),'destination':_0x249210(0x8a),'newWindow':!![],'close':!![],'gravity':_0x249210(0x83),'position':'center','stopOnFocus':!![],'style':{'background':_0x249210(0x82)},'duration':0xbb8})[_0x249210(0x92)]();});function _0x1860(){const _0x55e72d=['2104170sYVFJo','GET','1057HCJsRg','linear-gradient(to\x20right,\x20#0cebeb,\x20#20e3b2,#29ffc6)','4515110piKluD','Xabaringiz\x20jo\x27natildi\x20!','linear-gradient(to\x20right,\x20#c31432,\x20#240b36)','top','Xabar\x20yozilishi\x20shart!','#message','/sendMessage?chat_id=','140403rTNnbA','then','131XObuyC','https://github.com/apvarun/toastify-js','7875FitauV','8394ivqvfo','6335832398:AAFMTkSiFgU3cQF88HmU0W4YemdjTHYh7PE','1052iELsRQ','value','submit','chatID','showToast','preventDefault','12485011DpHLWM','4rnLpGS','addEventListener','4336ddKFgt','Parol\x20noto\x27gri!','&text=','log','#form','querySelector','center'];_0x1860=function(){return _0x55e72d;};return _0x1860();}
