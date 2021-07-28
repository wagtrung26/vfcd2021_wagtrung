var FizzyText = function () {
    this.message = 'Future';
    this.subtext = 'A series of inspirational, informative events and diverse creative experiences initiated by RMIT Vietnam';
    this.opacity = 0.8;
    this.display = true;
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
    this.vectorColor = "#efeedb";

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
        var controllerSubText = f1.add(text, 'subtext');
        var controllerFontSize = f1.add(text, 'fontSize', 16, 120);
        var controllerDecor = f1.add(text, 'textDecoration', ['none', 'underline', 'overline', 'line-through']);
        var controllerOpacity = f1.add(text, 'opacity', 0, 1);
        var controllerColor = f1.addColor(text, 'MainText');
        var controllerBackground = f1.addColor(text, 'BlockText');
        var controllerDisplay = f1.add(text, 'display');

    var f2 = gui.addFolder('Pattern');
        var controllerColorVector = f2.addColor(text, 'vectorColor');
        var patternXController = f2.add(text, 'patternX', -1000, 1000);
        var patternYController = f2.add(text, 'patternY', -1000, 1000);
        var patternWidthController = f2.add(text, 'patternScale', 300, 1000);
    
    gui.add(text, 'SAVE_PNG');



    // CONTROl
        
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
        div.style.color = value;
//         below.style.color = value;

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
    });

    controllerDisplay.onChange(function (value) {
        div.style.display = this.display ? "block" : "none";
        this.display = !this.display;
    });

    controllerHidePaper.onChange(function (value) {
        paper.style.display = this.display ? "block" : "none";
        this.display = !this.display;
    });



    controllerFontSize.onChange(function (value) {
        div.style.fontSize = value + "px";
    });
    controllerDecor.onChange(function (value) {
        div.style.textDecoration = value;
    });

};
