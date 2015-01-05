var december = angular.module('december', ['wu.masonry']);
// var december = angular.module('december', []);

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