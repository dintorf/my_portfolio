app
	.controller('NavController', ['$scope', function ($scope, $location) {
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
	}])
	.controller('MainController', ['$scope', function ($scope, $location) {
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

		$scope.scroll = 0;

		GitHubActivity.feed({
		    username: "dintorf",
		    selector: "#feed"
		});
	}])
	.controller('InfoController', ['$scope', function ($scope, $location) {
		$scope.details = [
			{
				title: 'Info',
				details: [
					{
						icon: 'map-marker',
						link: false,
						href: '',
						content: 'Phoenix, AZ',
						subContent: ''
					},
					{
						icon: 'envelope',
						link: true,
						href: 'mailto:dylan@dintorf.com',
						content: 'dylan@dintorf.com',
						subContent: ''
					},
					{
						icon: 'globe',
						link: true,
						href: 'http://www.dintorf.com',
						content: 'dintorf.com',
						subContent: ''
					}
				]
			},
			{
				title: 'Education',
				details: [
					{
						icon: 'graduation-cap',
						link: false,
						href: '',
						content: 'BS in Computer Science (IA)',
						subContent: 'Arizona State University (2013-2015)'
					},
					{
						icon: 'graduation-cap',
						link: false,
						href: '',
						content: 'AAS in Computer Programming',
						subContent: 'Mesa Community College (2011-2013)'
					}
				]
			}
		];
	}])
	.controller('SkillsController', ['$scope', function($scope, $location) {
		$scope.languages = [
			{
				title: 'JavaScript & jQuery',
				label: 'Expert',
				proficiency: '90%',
				set: false
			},
			{
				title: 'HTML5 & CSS3',
				label: 'Expert',
				proficiency: '95%',
				set: false
			},
			{
				title: 'C# & .NET',
				label: 'Pro',
				proficiency: '85%',
				set: false
			},
			{
				title: 'Swift & Objective-C',
				label: 'Pro',
				proficiency: '80%',
				set: false
			},
			{
				title: 'Java',
				label: 'Expert',
				proficiency: '90%',
				set: false
			},
			{
				title: 'SQL',
				label: 'Expert',
				proficiency: '90%',
				set: false
			},
			{
				title: 'Python',
				label: 'Pro',
				proficiency: '80%',
				set: false
			}
		];

		$scope.systems = [
			{
				title: 'Mac OS X',
				label: 'Expert',
				proficiency: '100%',
				set: false
			},
			{
				title: 'Linux',
				label: 'Pro',
				proficiency: '85%',
				set: false
			},
			{
				title: 'iOS',
				label: 'Pro',
				proficiency: '85%',
				set: false
			},
			{
				title: 'Windows Server',
				label: 'Pro',
				proficiency: '80%',
				set: false
			},
			{
				title: 'Android',
				label: 'Expert',
				proficiency: '90%',
				set: false
			},
			{
				title: 'Windows',
				label: 'Expert',
				proficiency: '100%',
				set: false
			}
		];

		$scope.setProg = function(item) {
			item.set = true;
			return item.proficiency;
		}
		
	}]);