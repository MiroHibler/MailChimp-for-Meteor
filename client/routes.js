Router.configure({
	layout: 'layout'
});

Router.map(function() {
	this.route( 'home', {
		path			: '/',
		template		: 'home',
		onAfterAction	: function() {
			GAnalytics.pageview();
		}
	});
});

