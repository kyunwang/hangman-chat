exports.homePage = (req, res) => {
	res.render('chatScreen', { message: 'Hello Server' });
}