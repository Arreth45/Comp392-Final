var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * @module scenes
 */
var scenes;
(function (scenes) {
    /**
        * The Menu class is where the game starts
        * @class Menu
        * @extends Scene
        * @param _stage {createjs.Stage}
        * @param _nameLabel {createjs.Text}
        *
        * @param _blocker {HTMLElement}
        */
    var Over = (function (_super) {
        __extends(Over, _super);
        /**
         * Empty Constructor - calls _initialize and start Methods
         * @constructor
         */
        function Over() {
            _super.call(this);
            this._initialize();
            this.start();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++
        Over.prototype._setupCanvas = function () {
            canvas.style.width = "100%";
            canvas.setAttribute("height", config.Screen.HEIGHT.toString());
            canvas.style.backgroundColor = "#ffffff";
        };
        /**
         * The initialize method sets up key objects to be used in the scene
         *
         * @method _initialize
         * @returns void
         */
        Over.prototype._initialize = function () {
            this._blocker = document.getElementById("blocker");
            this._blocker.style.display = "none";
            //setup canvas
            this._setupCanvas();
            //setup stage on the canvas
            this._stage = new createjs.Stage(canvas);
            this._stage.enableMouseOver(20);
        };
        //Public Methods +++++++++++++++++++++++++++++++++++++++++++
        /**
         * The start method is the main method for the scene class
         *
         * @method start
         * @return void
         */
        Over.prototype.start = function () {
            this._nameLabel = new createjs.Text("Game Over", "80px Consolas", "#000000");
            this._nameLabel.regX = this._nameLabel.getMeasuredWidth() * 0.5;
            this._nameLabel.regY = this._nameLabel.getMeasuredHeight() * 0.5;
            this._nameLabel.x = config.Screen.WIDTH * 0.5;
            this._nameLabel.y = config.Screen.HEIGHT * 0.3;
            this._stage.addChild(this._nameLabel);
            this._restartButton = new createjs.Bitmap(assets.getResult("restartButton"));
            this._restartButton.regX = this._restartButton.getBounds().width * 0.5;
            this._restartButton.regY = this._restartButton.getBounds().height * 0.5;
            this._restartButton.x = config.Screen.WIDTH * 0.5;
            this._restartButton.y = config.Screen.HEIGHT * 0.3 + 200;
            this._stage.addChild(this._restartButton);
            this._restartButton.on("mouseover", function (event) {
                event.target.alpha = 0.7;
            });
            this._restartButton.on("mouseout", function (event) {
                event.target.alpha = 1.0;
            });
            this._restartButton.on("click", function (event) {
                currentScene = config.Scene.PLAY;
                changeScene();
            });
        };
        /**
         * The update method updates the animation loop and other objects
         *
         * @method update
         * @return void
         */
        Over.prototype.update = function () {
            this._stage.update();
        };
        /**
         * The resize method is a procedure that sets variables and objects on screen resize
         *
         * @method resize
         * @return void
         */
        Over.prototype.resize = function () {
            this._setupCanvas();
            this._nameLabel.x = config.Screen.WIDTH * 0.5;
            this._nameLabel.y = config.Screen.HEIGHT * 0.5;
            this._stage.update();
        };
        return Over;
    }(scenes.Scene));
    scenes.Over = Over;
})(scenes || (scenes = {}));

//# sourceMappingURL=over.js.map
