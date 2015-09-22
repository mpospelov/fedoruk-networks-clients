(function() {
  this.FormController = (function() {
    function FormController($http, $scope) {
      this.$http = $http;
      this.$scope = $scope;
      this.$scope.formData = [];
      this.$scope.responseValue = "";
    }

    FormController.prototype.submitForm = function() {
      var self;
      self = this;
      return this.$http.post('http://fedoruk-networks.herokuapp.com/akultisheva', this.$scope.formData).then(function(response) {
        self.$scope.responseValue = response.data;
        return self.$scope.imageUrl = response.data.output.url;
      });
    };

    return FormController;

  })();

  this.App = angular.module('app', []).controller("FormController", FormController);

}).call(this);
