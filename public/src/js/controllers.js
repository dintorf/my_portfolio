app.controller('MainController', function ($scope, $location) {
	$scope.myPic = '../images/me.jpg';
	$scope.bgImage = '../images/creek2.jpg';
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