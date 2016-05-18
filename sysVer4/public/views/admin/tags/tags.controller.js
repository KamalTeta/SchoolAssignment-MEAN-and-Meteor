(function(){
  "use strict";
  
  angular
  .module("admin.tags", [])
  .controller("tagsController", tagsController);

  function tagsController($scope, tagsService){
    
    var getTags = function(){
      tagsService.getTags().then(function(tags){
        $scope.tags = tags;
      });
    };
    
    var resetTags = function(){
      $scope.tags = $scope.tags || {};
      $scope.tags.local = {};
      $scope.tags.local.name = "";
      $scope.tags.local._id = null;
    };
        
    $scope.openCreateTagsModal = function(){
      resetTags();
      $scope.modalTitle = "Add tag";
    };
    
    $scope.openEditTagsModal = function(id){
      $scope.modalTitle = "Edit tag";
      tagsService.getTag(id).then(function(tag){
        $scope.tag = tag;
      });
    
    };
    
    $scope.saveTag = function(){
      console.log($scope.tag);
      tagsService.saveTag($scope.tag).then(function(){
        getTags();
      });
    };
    
    $scope.deleteTag = function(id) {
      tagsService.getTag(id).then(function(tag){
        $scope.tag = tag;
      });
    };

    $scope.performDeleteTag = function() {
      tagsService.deleteTag($scope.tag._id).then(function(){
        getTags();
      });
    };
    
    getTags();
    resetTags();
  }
  
})();
