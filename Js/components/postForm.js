"use strict";

const postForm = {
    bindings: {
    onSubmit: "&",
    closeForm: "&"
}, 

  // & is used to bind function onSubmit

template: `
<form ng-submit="$ctrl.onSubmit({item: $ctrl.item}); $ctrl.closeForm;">
  <p ng-click="$ctrl.closeForm();">X</p>
  <label>Title</label>
  <input expand type="text" placeholder="Title" ng-model="$ctrl.item.title">
  <textarea expand ng-model="$ctrl.item.composition"></textarea> 
  <button>Add</button>
</form>
`

} 




// form with inputs and button to pop up when the function is called by pressing New Post! button on parent component


angular
  .module("app")
  .component("postForm", postForm);

/*

<button type="button" ng-click="$ctrl.openForm();">New Post!</button> 
^^ above form 

// controller goes underneath the template and take closeForm out of the bindings object 

controller: function () {
    const vm = this; 

    vm.openForm = () => {
      vm.formOpen = true;
    };

    vm.closeForm = () => {
      vm.formOpen = false; 
      vm.item = {}; 
    };

} 


c. The postForm component displays the new post form.
    i. It has one outbound binding called onSubmit.

*/ 