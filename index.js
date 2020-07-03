const express = require('express');

const app = express();

app.get('/', (req, res) => res.end('Hello World'));

function load(time = 1000) {
	const min = 0;
	const max = 1000;
	const num = Math.floor(Math.random() * (max - min + 1) + min);
	return new Promise((resolve) => {
		setTimeout(() => resolve(num), time + num)
	});
}

app.get('/load', async (req, res) => {
	const response = await load(500);
	res.end(String(response));
});

app.listen(5000, () => {
	console.log('Listening on 5000');
});
