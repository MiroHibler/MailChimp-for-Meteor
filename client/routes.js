Router.configure({
	layout: 'layout'
});

Router.map(function() {
	this.route( 'home', {
		path	: '/',
		template: 'home',
		after	: function() {
			GAnalytics.pageview();
		}
	});
});

