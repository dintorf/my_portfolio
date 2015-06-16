app.directive('bgImage', function(){

    return function(scope, element, attrs) {
        scope.$watch(attrs.bgImage, function(value) {
            element.css({
                'background': 'url(' + value +') center center',
                'background-size' : 'cover'
            });
        });
    };
});

app.directive('scrollPosition', function($window) {
  return {
    scope: {
      scroll: '=scrollPosition'
    },
    link: function(scope, element, attrs) {
      var windowEl = angular.element($window);
      var handler = function() {
        scope.scroll = windowEl.scrollTop();
      }
      windowEl.on('scroll', scope.$apply.bind(scope, handler));
      handler();
    }
  };
});

// <a class="twitter-timeline" href="https://twitter.com/dintorf" data-widget-id="608840345837641728">Tweets by @dintorf</a> <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
/*
*  AngularJS Directive for Twitter's Embedded Timeline with support for custom CSS.
*  https://github.com/userapp-io/twitter-timeline-angularjs
*/

app.directive('twitterTimeline', [function() {
	return {
		restrict: 'A',
		scope: {
			cssUrl: "@",
			autoResize: "="
		},
		link: function (scope, element, attrs) {
			$('body').removeAttr('data-twttr-rendered');

			element
				.attr('id', 'twitter-feed')
				.attr("width", "100%" || attrs.width)
				.attr('data-chrome', 'transparent')
				.attr('data-widget-id', attrs.twitterTimeline)
				.addClass('twitter-timeline');

			function render() {
				var body = $('.twitter-timeline').contents().find('body');

				if (scope.cssUrl) {
					body.append($('<link/>', { rel: 'stylesheet', href: scope.cssUrl, type: 'text/css' }));
				}

				function setHeight() {
					if (body.find('.stream').length == 0) {
						setTimeout(setHeight, 100);
					} else {
						body.find('.stream').addClass('stream-new').removeClass('stream').css('height', 'auto');
						$('.twitter-timeline').css('height', (body.height() + 20) + 'px');
					}
				}

				if (scope.autoResize) {
					setHeight();
				}
			}

			if (!$('#twitter-wjs').length) {
				$.getScript((/^http:/.test(document.location)?'http':'https') + '://platform.twitter.com/widgets.js', function() {
					render();
					$('.twitter-timeline').load(render);
        		});
			}
		}
	};
}]);