/**
 * @module scenes
 */
module scenes {
    /**
        * The Menu class is where the game starts
        * @class Menu
        * @extends Scene
        * @param _stage {createjs.Stage}
        * @param _nameLabel {createjs.Text}
        *
        * @param _blocker {HTMLElement}
        */
    export class Menu extends scenes.Scene {
        private _stage: createjs.Stage;
        private _nameLabel: createjs.Text;
        private _playButton: createjs.Bitmap;
        private _blocker: HTMLElement;

        /**
         * Empty Constructor - calls _initialize and start Methods
         * @constructor
         */
        constructor() {
            super();

            this._initialize();
            this.start();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++

        private _setupCanvas(): void {
            canvas.style.width = "100%";
            canvas.setAttribute("height", config.Screen.HEIGHT.toString());
            canvas.style.backgroundColor = "#ffffff";
        }

        /**
         * The initialize method sets up key objects to be used in the scene
         * 
         * @method _initialize
         * @returns void
         */
        private _initialize(): void {
            this._blocker = document.getElementById("blocker");

            this._blocker.style.display = "none";
            //setup canvas
            this._setupCanvas();
            //setup stage on the canvas
            this._stage = new createjs.Stage(canvas);
            this._stage.enableMouseOver(20);
        }

        //Public Methods +++++++++++++++++++++++++++++++++++++++++++

        /**
         * The start method is the main method for the scene class
         * 
         * @method start
         * @return void
         */
        public start(): void {
            this._nameLabel = new createjs.Text(
                "Maze Platformer",
                "80px Consolas",
                "#000000");
            this._nameLabel.regX = this._nameLabel.getMeasuredWidth() * 0.5;
            this._nameLabel.regY = this._nameLabel.getMeasuredHeight() * 0.5;
            this._nameLabel.x = config.Screen.WIDTH * 0.5;
            this._nameLabel.y = config.Screen.HEIGHT * 0.3;
            this._stage.addChild(this._nameLabel);

            this._playButton = new createjs.Bitmap(assets.getResult("playButton"));
            this._playButton.regX = this._playButton.getBounds().width * 0.5;
            this._playButton.regY = this._playButton.getBounds().height * 0.5;
            this._playButton.x = config.Screen.WIDTH * 0.5;
            this._playButton.y = config.Screen.HEIGHT * 0.3 + 200;
            this._stage.addChild(this._playButton);

            this._playButton.on("mouseover", (event: createjs.MouseEvent) => {
                event.target.alpha = 0.7;
            });

            this._playButton.on("mouseout", (event: createjs.MouseEvent) => {
                event.target.alpha = 1.0;
            });

            this._playButton.on("click", (event: createjs.MouseEvent) => {
                currentScene = config.Scene.PLAY;
                changeScene();
            });

        }

        /**
         * The update method updates the animation loop and other objects
         * 
         * @method update
         * @return void
         */
        public update(): void {
            this._stage.update();

        }

        /**
         * The resize method is a procedure that sets variables and objects on screen resize
         * 
         * @method resize
         * @return void
         */
        public resize(): void {
            this._setupCanvas();
            this._nameLabel.x = config.Screen.WIDTH * 0.5;
            this._nameLabel.y = config.Screen.HEIGHT * 0.5;

            this._stage.update();

        }
    }
}