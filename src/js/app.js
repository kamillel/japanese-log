var december = angular.module('december', []);
// var december = angular.module('december', ['ng']);

december.controller('VocabController', function($scope, $http) {
    var vocab = this;
    vocab.words = [];

    $http.get('./data/words.json').success(function(data){
      vocab.words = data;
    })
    .error(function (data) {
        // 残念! json loading fail!
    });
});

// directive from https://github.com/gate8team/socialMood
december.directive('ngGate8Masonry', function($timeout) {
    return function(scope, element, attrs) {

        if (scope.$last){
            $timeout(function () {
                var parent = element.parent();
                var masonry = new Masonry(parent[0], {
                    itemSelector: '.word',
				    gutter: 10,
                    isAnimated: true,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    },
                    transitionDuration : "0.4s",
                    isResizable: false
                });
            });
        }
    };
});