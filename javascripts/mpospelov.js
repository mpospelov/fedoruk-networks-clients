(function() {
  this.FormController = (function() {
    function FormController($http, $scope) {
      this.$http = $http;
      this.$scope = $scope;
      this.$scope.cabinClasses = ["Первый класс", "Второй класс", "Третий класс", "Член экипажа"];
      this.$scope.ageClasses = ["Ребенок", "Взрослый"];
      this.$scope.sexClasses = ["Женщина", "Мужчина"];
      this.$scope.formData = {};
      this.$scope.responseValue = "";
    }

    FormController.prototype.submitForm = function() {
      var self;
      self = this;
      return this.$http.post('http://localhost:4567/mpospelov', this.$scope.formData).then(function(response) {
        return self.$scope.responseValue = response.data;
      });
    };

    return FormController;

  })();

  this.App = angular.module('app', []).controller("FormController", FormController);

}).call(this);
