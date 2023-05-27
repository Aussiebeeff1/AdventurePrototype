A simple adventure game by {who?} based on a simple adventure game engine by [Adam Smith](https://github.com/rndmcnlly).

Code requirements:
- **4+ scenes based on `AdventureScene`**: unsatisfied (name at least 4 of the classes).  Title, Demo1,  Closet, Shoe, 
- **2+ scenes *not* based on `AdventureScene`**: unsatisfied (name the classes). 
- **2+ methods or other enhancement added to the adventure game engine to simplify my scenes**: Dub, LossOutro, Demo2, Intro, Int1,
    - Enhancement 1: unsatisfied (name the method and explain the use of it).
    - Enhancement 2: unsatisfied (name the method and explain the use of it).

Experience requirements:
- **4+ locations in the game world**: unsatisfied (name at least 4 of the classes). Closet, Shoe, Demo1, 
- **2+ interactive objects in most scenes**: unsatisfied (describe two examples) rose, remote, knob, shirt, jeans, nike, convers
- **Many objects have `pointerover` messages**: unsatisfied (describe two examples) Remote = .on('pointerover', () => this.showMessage("Turn on TV?")) Knob = .on('pointerover', () => {
                this.showMessage("Go to your room.");
- **Many objects have `pointerdown` effects**: unsatisfied (describe two examples) Remote = Don't touch you have a date. Knob = .on('pointerdown', () => this.gotoScene('demo2'));
- **Some objects are themselves animated**: unsatisfied (describe two examples) Rose and shoes 
                this.add.tween({
                targets: Rose,
                scale: 0.25,
                duration: 800,
                yoyo: true,
                repeat: -1

Asset sources:
- (For each image/audio/video asset used, describe how it was created. What tool did you use to create it? Was it based on another work? If so, how did you change it, and where can we learn more about the original work for comparison? Use [Markdown link syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#links).) All images were made by pixle art, Beeff.png is made on https://onlinegiftools.com/convert-gif-to-sprite-sheet. 

Code sources:
- `adventure.js` and `index.html` were created for this project [Adam Smith](https://github.com/rndmcnlly) and edited by me.
- `game.js` was sketched by [Adam Smith](https://github.com/rndmcnlly) and rewritten by me.
