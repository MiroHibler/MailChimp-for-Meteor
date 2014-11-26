Router.configure({
	layout       : 'layout',
	trackPageView: true
});

Router.route( '/', {
	name			: 'home',
	template		: 'home'
});
