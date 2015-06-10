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