"use strict";

const postForm = {
    bindings: {
    onSubmit: "&"
}, 

template: `
<form ng-submit="$ctrl.onSubmit({ item: $ctrl.item});">
  <input type="text" placeholder="Title" ng-model="$ctrl.item.title">
  <input type="text" placeholder="Composition" ng-model="$ctrl.item.composition">
  <button>Add</button>
</form>
`

}; 


angular
  .module("app")
  .component("postForm", postForm);

/*
c. The postForm component displays the new post form.
    i. It has one outbound binding called onSubmit.

*/ 