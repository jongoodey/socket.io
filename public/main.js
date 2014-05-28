var app = angular.module('chatApp', []);

app.factory('socket', function(){
    return io.connect('http://localhost:5000');
});

app.controller('ChatCtrl', function($scope, socket){
    $scope.msgs = [];

    $scope.sendMsg = function() {
        socket.emit('send msg', $scope.chat.msg);
        $scope.chat.msg = '';
    };


    socket.on('get msg', function(data) {
        $scope.msgs.push(data);
        $scope.$digest();
    });

    $scope.show = function(name){
    // Do whatever you want here
        console.log(name);
        $.ajax({
          type: "POST",
          data: $('#booking').serialize(),
          url: 'http://simplebojirails.herokuapp.com/blogs',
          // complete: function(e, xhr, settings){
          //   $('#ajax_form').slideUp(800, function(){
          //       $('#thank_you').slideDown(800);
          //   });
          // }
        });
    };
});