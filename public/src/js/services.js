app
	.factory("GitHubRepos", function($resource) {
  		return $resource("https://api.github.com/users/dintorf/repos", {}, {
		    query: { method: "GET", isArray: true }
		});
	});