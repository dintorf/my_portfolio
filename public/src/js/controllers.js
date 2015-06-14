app.controller('MainController', function ($scope, $location) {
	$scope.myPic = '../images/dist/me.jpg';
	$scope.bgImage = '../images/dist/creek2.jpg';
	$scope.socialSites = [
		{
			href: 'https://twitter.com/dintorf',
			class: 'twitter',
			icon: 'twitter'
		},
		{
			href: 'https://plus.google.com/u/0/+DylanIntorf',
			class: 'google-plus',
			icon: 'google-plus'
		},
		{
			href: 'https://www.linkedin.com/in/dintorf',
			class: 'linkedin',
			icon: 'linkedin'
		},
		{
			href: 'https://github.com/dintorf',
			class: 'github',
			icon: 'github-alt'
		}
	];

	$scope.details = [
		{
			icon: 'map-marker',
			link: false,
			href: '',
			content: 'Phoenix, AZ'
		},
		{
			icon: 'envelope',
			link: true,
			href: 'mailto:dylan@dintorf.com',
			content: 'dylan@dintorf.com'
		},
		{
			icon: 'globe',
			link: true,
			href: 'http://www.dintorf.com',
			content: 'dintorf.com'
		}
	];

	GitHubActivity.feed({
	    username: "dintorf",
	    selector: "#feed"
	});
});

app.controller('NavController', function ($scope, $location) {
	$scope.links = [
		{
			href: '#',
			title: 'Resume'
		},
		{
			href: '#',
			title: 'Projects'
		},
		{
			href: '#',
			title: 'Contact'
		}
	];
});