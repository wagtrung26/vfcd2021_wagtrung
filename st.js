var FizzyText = function () {
    this.message = 'Future';
    this.subtext = 'A series of inspirational, informative events and diverse creative experiences initiated by RMIT Vietnam';
    this.opacity = 0.8;
    this.displayLogo = true;
    this.explode = function () {
    };
    this.MainText = "#ff9966";
    this.Background = "#ff9966";
    this.BlockText = "#336699";
    this.fontSize = 72;
    this.textDecoration = "none";

    this.patternX = 2;
    this.patternY = 2;
    this.patternScale = 20;

    this.paper = "#efeedb";
    this.hidePaper = false;
    this.hideBlock = false;
    this.vectorColor = "#efeedb";
    this.vectorWidth = 0;

    this.logoColor = "#333"

    this.SAVE_PNG = function() {
        saveSvgAsPng(document.getElementById("app"), 'pattern.png');
    }

    // Define render logic ...
};

window.onload = function () {
    var text = new FizzyText();
    var gui = new dat.GUI();

    var div = document.querySelector("#head");
    var below = document.querySelector("#below");
    var sub = document.querySelector("#sub");
    var log = document.querySelector("#log");

    var pattern = document.querySelector("#pattern");
    var bg = document.querySelector("#bg");
    var wap = document.querySelector(".wap");
    var vector = document.querySelector(".cls-1");
    var paper = document.querySelector("#some");

    var controllerColorBg = gui.addColor(text, 'Background');
    var controllerColorPaper = gui.addColor(text, 'paper');
    var controllerHidePaper = gui.add(text, 'hidePaper');


    // gui.add(text, 'explode');

    var f1 = gui.addFolder('Edit Text');
        var controllerText = f1.add(text, 'message');
        var controllerColor = f1.addColor(text, 'MainText');
        var controllerFontSize = f1.add(text, 'fontSize', 16, 120);
        var controllerDecor = f1.add(text, 'textDecoration', ['none', 'underline', 'overline', 'line-through']);
        var controllerOpacity = f1.add(text, 'opacity', 0, 1);

        var controllerSubText = f1.add(text, 'subtext');
        var controllerBackground = f1.addColor(text, 'BlockText');
        var controllerHideBlock = f1.add(text, 'hideBlock');

        


    var f2 = gui.addFolder('Pattern');
        var controllerColorVector = f2.addColor(text, 'vectorColor');
        var controllerVectorWidth = f2.add(text, 'vectorWidth', 0, 120);
        var patternXController = f2.add(text, 'patternX', -1000, 1000);
        var patternYController = f2.add(text, 'patternY', -1000, 1000);
        var patternWidthController = f2.add(text, 'patternScale', 0, 1000);
    var controllerColorLogo = gui.addColor(text, 'logoColor');
    var controllerDisplayLogo = gui.add(text, 'displayLogo');

     
    
    gui.add(text, 'SAVE_PNG');



    // CONTROl
    var strokeColorr = '';
    patternXController.onChange(function (value) {

        pattern.setAttribute('x',  value);
    });
    patternYController.onChange(function (value) {
        pattern.setAttribute('y',  value);
    });
    patternWidthController.onChange(function (value) {
        pattern.setAttribute('width',  value);
        pattern.setAttribute('height',  value);
    });


    controllerText.onChange(function (value) {
        below.innerHTML = value;
    });
    controllerSubText.onChange(function (value) {
        sub.innerHTML = value;
    });



    controllerOpacity.onChange(function (value) {
        div.style.opacity = value;
    });
    controllerColor.onChange(function (value) {
        // div.style.color = value;
        div.style.color = value;

    });
    controllerColorLogo.onChange(function (value) {
        log.style.fill = value;

    });
    controllerBackground.onChange(function (value) {
        sub.style.color = value;
    });

    controllerColorBg.onChange(function (value) {
        bg.style.fill = value;
    });

    controllerColorPaper.onChange(function (value) {
        paper.style.background = value;
    });

    controllerColorVector.onChange(function (value) {
        vector.style.fill = value;
        vector.style.stroke = value;

    });

    controllerDisplayLogo.onChange(function (value) {
        log.style.display = this.display ? "block" : "none";
        this.display = !this.display;
    });

    controllerHidePaper.onChange(function (value) {
        paper.style.display = this.display ? "block" : "none";
        this.display = !this.display;
    });

    controllerHideBlock.onChange(function (value) {
        sub.style.display = this.display ? "block" : "none";
        this.display = !this.display;
    });


    controllerVectorWidth.onChange(function (value) {
        vector.style.strokeWidth = value + "px";
    });

    controllerFontSize.onChange(function (value) {
        div.style.fontSize = value + "px";
    });
    controllerDecor.onChange(function (value) {
        div.style.textDecoration = value;
    });

};
