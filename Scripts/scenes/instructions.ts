/**
 * @module scenes
 */
module scenes {
    export class Instructions extends scenes.Scene {
        private _stage: createjs.Stage;
        private _Label1: createjs.Text;
        private _Label2: createjs.Text;
        private _Label3: createjs.Text;
        private _backButton: createjs.Bitmap;
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

        public start(): void {
            this._Label1 = new createjs.Text(
                "WASD to Move",
                "80px Consolas",
                "#000000");
            this._Label1.regX = this._Label1.getMeasuredWidth() * 0.5;
            this._Label1.regY = this._Label1.getMeasuredHeight() * 0.5;
            this._Label1.x = config.Screen.WIDTH * 0.5;
            this._Label1.y = config.Screen.HEIGHT * 0.3 + -100;
            this._stage.addChild(this._Label1);

            this._Label2 = new createjs.Text(
                "Mouse to Look",
                "80px Consolas",
                "#000000");
            this._Label2.regX = this._Label2.getMeasuredWidth() * 0.5;
            this._Label2.regY = this._Label2.getMeasuredHeight() * 0.5;
            this._Label2.x = config.Screen.WIDTH * 0.5;
            this._Label2.y = config.Screen.HEIGHT * 0.3;
            this._stage.addChild(this._Label2);

            this._Label3 = new createjs.Text(
                "Space to Jump",
                "80px Consolas",
                "#000000");
            this._Label3.regX = this._Label3.getMeasuredWidth() * 0.5;
            this._Label3.regY = this._Label3.getMeasuredHeight() * 0.5;
            this._Label3.x = config.Screen.WIDTH * 0.5;
            this._Label3.y = config.Screen.HEIGHT * 0.3 + 100;
            this._stage.addChild(this._Label3);

            this._backButton = new createjs.Bitmap(assets.getResult("backButton"));
            this._backButton.regX = this._backButton.getBounds().width * 0.5;
            this._backButton.regY = this._backButton.getBounds().height * 0.5;
            this._backButton.x = config.Screen.WIDTH * 0.5;
            this._backButton.y = config.Screen.HEIGHT * 0.3 + 200;
            this._stage.addChild(this._backButton);


            this._backButton.on("mouseover", (event: createjs.MouseEvent) => {
                event.target.alpha = 0.7;
            });

            this._backButton.on("mouseout", (event: createjs.MouseEvent) => {
                event.target.alpha = 1.0;
            });

            this._backButton.on("click", (event: createjs.MouseEvent) => {
                currentScene = config.Scene.MENU;
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
            this._Label1.x = config.Screen.WIDTH * 0.5;
            this._Label1.y = config.Screen.HEIGHT * 0.5;

            this._stage.update();

        }
    }
}