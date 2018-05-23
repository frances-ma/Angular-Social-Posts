"use strict"; 

const socialPosts = {
  template: `
  <div id="thing">
    <button type="button" ng-click="$ctrl.openForm();">New Post!</button>
    <h1 id="title">BB Twitter</h1>
    <post ng-repeat="post in $ctrl.post" post="post"></post>
    <post-form ng-show="$ctrl.formOpen" on-submit="$ctrl.onSubmit(item);"></post-form>
  </div>
  `,
  controller: function() {
    const vm = this;
    vm.post = [
      {title: "My Ideas", composition: "here are some thoughts."},
      {title: "My Ideas", composition: "here are some thoughts."},
      {title: "My Ideas", composition: "here are some thoughts."},
      {title: "My Ideas", composition: "here are some thoughts."},
      {title: "My Ideas", composition: "here are some thoughts."},
      {title: "My Ideas", composition: "here are some thoughts."}
    ];

    vm.openForm = () => {
      vm.formOpen = true;
    };

    vm.onSubmit = (item) => {
      vm.post.unshift({
        title: item.title,
        composition: item.composition
      })
      item.title = "";
      item.composition = "";
      vm.formOpen = false;
      console.log();
    }
  }
};


angular 
.module("app")
.component("socialPosts", socialPosts); 

/*

a. The socialPosts component is the parent component.
i. It owns the list of posts.
ii. Its template contains the ng-repeat for posts and the “New Post” button.
iii. The other two components are created inside of its template.


b. The post component displays a single post in the list.
    i. It has one inbound binding called post.

c. The postForm component displays the new post form.
    i. It has one outbound binding called onSubmit.

2. Create an expandOnFocus directive that increases the size when item is focused. The
size returns to normal on blur. Apply this directive to both form inputs.



*/ 