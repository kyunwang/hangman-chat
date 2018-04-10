exports.homePage = (req, res) => {
	res.sendFile('index.html', { root: './server/views' });
	// res.render('homePage', { message: 'Hello Server' });
}