class Demo1 extends AdventureScene {
    constructor() {
        super("demo1", "First Room");
    }
    preload() {
        this.load.path = "./assets/";
        this.load.image('room1', 'room1.png');
        this.load.image('room2', 'room2.png');
        this.load.image('knob', 'knob.png');
    }
    onEnter() {
        this.imageObject = this.add.image(
            0,//x
            0,//y
            'room1',//imagename
            
        ).setOrigin(0);
        var bg = this.add.sprite(0, 0, 'room1').setOrigin(0);
    bg.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);
        
        this.imageObject.setScale(1)
        let clip = this.add.text(this.w * 0.3, this.w * 0.3, "📎  paperclip")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("This leads to your"))
            .on('pointerdown', () => {
                this.showMessage("No touching!");
                this.tweens.add({
                    targets: clip,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            });

        let key = this.add.text(this.w * 0.5, this.w * 0.1, "🔑 key")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("It's a nice key.")
            })
            .on('pointerdown', () => {
                this.showMessage("You pick up the key.");
                this.gainItem('key');
                this.tweens.add({
                    targets: key,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => key.destroy()
                });
            })

        let door = this.add.text(this.w * 0.1, this.w * 0.15, "🚪 locked door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("key")) {
                    this.showMessage("You've got the key for this door.");
                } else {
                    this.showMessage("It's locked. Can you find a key?");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("key")) {
                    this.loseItem("key");
                    this.showMessage("*squeak*");
                    door.setText("🚪 unlocked door");
                    this.gotoScene('demo2');
                }
            })

    }
}

class Demo2 extends AdventureScene {
    constructor() {
        super("demo2", "The second room has a long name (it truly does).");
    }
    onEnter() {
        this.add.text(this.w * 0.3, this.w * 0.4, "just go back")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("You've got no other choice, really.");
            })
            .on('pointerdown', () => {
                this.gotoScene('demo1');
            });

        let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('*giggles*');
                this.tweens.add({
                    targets: finish,
                    x: this.s + (this.h - 2 * this.s) * Math.random(),
                    y: this.s + (this.h - 2 * this.s) * Math.random(),
                    ease: 'Sine.inOut',
                    duration: 500
                });
            })
            .on('pointerdown', () => this.gotoScene('outro'));
    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    create() {
        this.add.text(50,50, "Adventure awaits!").setFontSize(50);
        this.add.text(50,100, "Click anywhere to begin.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('int1'));
        });
    }
}



class Int1 extends Phaser.Scene {
    constructor() {
        super('int1')
    }

    preload() {
        this.load.path = "./assets/";
        this.load.spritesheet('beeff', 'beeff.png', {
            frameWidth: 600,
            frameHeight: 500
        });
        
    }


create() {
      
         this.imageObject = this.add.sprite(
            900,
            500,
            'beeff',
        );
         this.imageObject.setScale(1.9); //resize
        this.anims.create({
            key: 'beeff',
            frames: this.anims.generateFrameNumbers('beeff', {
                start: 0,
                end: 20
            }),
            frameRate: 10,
            repeat: 0
        });
        this.imageObject.anims.play('beeff', true);
        this.textObj = this.add.text(700, 800, "Click to start Game", { font: "30px Impact",
        color: "#f00060", align: "left"})
        this.tweens.add({
            targets: this.textObj,
            alpha:{start: 0, to: 1},
            duration:3000,
            delay:1100,
        });
        this.input.on('pointerdown', () => this.scene.start('demo1'));
    }
    




}
    
  

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    create() {
        this.add.text(50, 50, "That's all!").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}



const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Demo1, Intro, Int1, Demo2, Outro],
    title: "Adventure Game",
});

