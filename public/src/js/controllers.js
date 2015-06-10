app.controller('MainController', function ($scope, $location) {
	$scope.myPic = '../images/me.jpg';
	$scope.bgImage = '../images/creek2.jpg';
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
	]
});