"use strict";

function expand() {
    return {
        restict: "A", 
        link: function($scope, $element, $attrs) {
            $element.on("focus", () => {
               $element.css("width", "300px"); 
               $element.css("height", "100px"); 
            }); 
            $element.on("blur", () => {
                $element.css("width", "initial"); 
                $element.css("height", "initial"); 
            }); 
        }
    }; 
}

angular 
.module("app")
.directive("expand", expand); 

