/// <reference path="../typings/tsd.d.ts" />

// setup your IIFE (Immediately Invoked Function Expression)
(function() {

    "use strict";

    // Load the navbar dynamically via jQuery and Ajax
    var header = $('#mainHeader').load("partials/nav.html", function() {
        var bodyid = $('body').attr('id');
        switch (bodyid.toString()) {
            case "index":
                $('#indexLink').attr("class", "active");
                break;
            case "projects":
                $('#projectsLink').attr("class", "active");
                break;
            case "contact":
                $('#contactLink').attr("class", "active");
                break;
        }
    });

    //CreateJS Section ++++++++++++++++++++++++++++++++++++

    //global variables
    var screenWidth = window.innerWidth * 0.8;

    // reference to canvas element
    var canvas = document.getElementById("canvas");
    canvas.setAttribute("width", "250");
    canvas.setAttribute("height", "250");

    // create a stage container object
    var stage = new createjs.Stage(canvas);

    var Label = null;
    var LabelMove = 5;

    var button = null;
    var buttonMove = 5;

    var button2 = null;
    var button2Move = 5;

    function init() {
        console.log("Initialization");
        // enable mouseover effects for all buttons
        stage.enableMouseOver(20);
        
        // set frame rate to 60 fps
        createjs.Ticker.setFPS(60);
        // listen for frame changes and call the animationLoop function
        createjs.Ticker.addEventListener("tick", animationLoop);

        // call the main function
        main();
    }

    // runs every frame
    function animationLoop() {

        button.rotation += 5;
        button2.rotation += -5;
        Label.x += LabelMove;
        button.x += buttonMove;
        button2.x += button2Move;
        if ((Label.x >= 250) || (Label.x <= 0)) {
            LabelMove *= -1;
            buttonMove *= -1;
            button2Move *= -1;
        }

        // refresh the stage object
        stage.update();
    }

    // this is where all the magic happens
    function main() {
        button = new createjs.Bitmap('../Assets/images/button.jpg');
        button.regX = 250 * 0.5;
        button.regY = 250 * 0.5;
        button.scaleX = 0.5;
        button.scaleY = 0.5;
        button.x = 250 * 0.5;
        button.y = 250 * 0.5;
        stage.addChild(button);
        
        button2 = new createjs.Bitmap('../Assets/images/button2.jpg');
        button2.regX = 250 * 0.5;
        button2.regY = 250 * 0.5;
        button2.scaleX = 0.8;
        button2.scaleY = 0.8;
        button2.x = 250 * 0.5;
        button2.y = 250 * 0.5;
        stage.addChild(button2);        
        
        Label = new createjs.Text("Hello World!", "40px Consolas", "#000000");
        Label.regX = Label.getMeasuredWidth() * 0.5;
        Label.regY = Label.getMeasuredHeight() * 0.5;
        Label.x = 250 * 0.5;
        Label.y = 240 * 0.5;
        stage.addChild(Label);

        button.on("click", function() {
            Label.text = "Clicked!";
            Label.regX = Label.getMeasuredWidth() * 0.5;
            Label.regY = Label.getMeasuredHeight() * 0.5;
        });
        
        button.on('mouseover', function() {
            button.alpha = 0.5;
        })
        
        button.on('mouseout', function() {
            button.alpha = 1;
        })
    }

    window.onload = init;


})();

