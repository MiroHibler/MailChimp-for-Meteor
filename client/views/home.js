Template.home.helpers({
	welcome: function() {
		return 'Welcome to MailChimp for Meteor!';
	},

	additional: function() {
		return 'Add MailChimp subscription form to your app in a snap!';
	}
});

Template.home.rendered = function () {
	$( '.email' ).addClass( 'input-lg' );
	$( '.subscribe' ).addClass( 'btn btn-success' );
};
