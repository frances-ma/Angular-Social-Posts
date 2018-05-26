"use strict"; 

const post = {
    bindings: {
        post: "<"
    },
    // inbound binding of expression (array)
    template: `
    <h2> {{$ctrl.post.title}} </h2>
    <p> {{$ctrl.post.composition}} </p>
`


};


angular 
.module("app")
.component("post", post); 


/* 

b. The post component displays a single post in the list.
    i. It has one inbound binding called post.



*/ 