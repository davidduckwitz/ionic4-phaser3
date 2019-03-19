import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotBoringHelloSceneService extends Phaser.Scene {
  platforms;
  stars;
  bombs;
  gameOver = false;
  dude;
  keys;
  scoreText;
  score = 0;
  sceneWidthHalf: number;

  public constructor() {
    super({ key: 'Scene' });
  }

  public preload() {
	this.load.image('sky', 'assets/sky.png');
	
	// game.load.image('sky', 'examples/assets/skies/fog.png');
    this.load.image('ground', 'assets/platform.png');
    // game.load.image('star', 'assets/star.png');
	this.load.image('star', 'assets/star.png');
	//this.stage.backgroundColor = '#007236';

    this.load.image('mushroom', 'assets/sprites/mushroom2.png');
	this.load.image('bomb', 'assets/sprites/bomb.png');
    this.load.image('phaser', 'assets/sprites/sonic_havok_sanity.png');
    this.load.image('ground', 'assets/images/ground.png');
    this.load.image('grass', 'assets/images/grass.png');

		this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
		this.load.spritesheet('girl', 'assets/girl-1.png', { frameWidth: 32, frameHeight: 48 });
    this.sceneWidthHalf = window.innerWidth / 2;
	
  }

  public create(): void {
	this.add.image(800, 600, 'sky');
	//  A simple background for our game
    this.add.sprite(800, 600, 'sky');
    // this.add.image(400, 300, 'star');
	this.add.text(50, 50, "Arina Adventures - The Mobile Game", { 
		font: "32px Arial", 
		fill: "#330088", 
		align: "center" 
	});

	this.platforms = this.physics.add.staticGroup();
	this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();
	this.platforms.create(600, 400, 'ground');
	this.platforms.create(50, 250, 'ground');
	this.platforms.create(750, 220, 'ground');
	
    this.dude = this.physics.add.sprite(this.sceneWidthHalf, 0, 'girl');
	this.physics.add.collider(this.dude, this.platforms);
	//  We need to enable physics on the player
    // this.physics.arcade.enable(this.dude);
    this.dude.setBounce(0.2);
    this.dude.setCollideWorldBounds(true);

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('girl', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'turn',
      frames: [{ key: 'girl', frame: 4 }],
      frameRate: 20
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('girl', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
    });

    this.keys = this.input.keyboard.createCursorKeys();
	//  Finally some stars to collect
    this.stars = this.physics.add.group({
		key: 'star',
		repeat: 11,
		setXY: { x: 12, y: 0, stepX: 70 }
	});
	
	this.stars.children.iterate(function (child) {
		child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
	});
	this.physics.add.collider(this.stars, this.platforms);
	this.physics.add.overlap(this.dude, this.stars, this.collectStar, null, this);
	
	this.bombs = this.physics.add.group();
	this.physics.add.collider(this.bombs, this.platforms);
	this.physics.add.collider(this.dude, this.bombs, this.hitBomb, null, this);

    //  The score
    this.scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
	this.dude.setActive(true);	
	
  }

  public update() {
    if (this.keys.left.isDown || this.isLeftTouch()) {
      this.dude.setVelocityX(-160);
      this.dude.anims.play('left', true);
    } else if (this.keys.right.isDown  || this.isRightTouch()) {
      this.dude.setVelocityX(160);
      this.dude.anims.play('right', true);
    } else {
      this.dude.setVelocityX(0);
      this.dude.anims.play('turn');
    }
	
	if (this.keys.up.isDown && this.dude.body.touching.down) {		
		this.dude.body.velocity.y = -350;
	}

  }

  private isLeftTouch() {
    return this.input.activePointer.isDown && this.input.activePointer.downX < this.sceneWidthHalf;
  }

	  private isRightTouch() {
		return this.input.activePointer.isDown && this.input.activePointer.downX >= this.sceneWidthHalf;
	  }
  
	public collectStar (player, star) {    
		// Removes the star from the screen
		star.disableBody(true, true);
		//  Add and update the score
		this.score += 10;		
		this.scoreText.text = 'Score: ' + this.score;
		if (this.stars.countActive(true) === 0) {
			this.stars.children.iterate(function (child) {
				child.enableBody(true, child.x, 0, true, true);
			});
			let x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
			let bomb = this.bombs.create(x, 16, 'bomb');
			bomb.setBounce(1);
			bomb.setCollideWorldBounds(true);
			bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
		}
		if(this.score >= 100){
			this.add.text(100, 100, "Ich liebe dich !", { 
				font: "64px Arial", 
				fill: "#FF0000", 
				align: "center" 
			});
		}
	}

	public hitBomb (player, bomb) {
		this.physics.pause();
		player.setTint(0xff0000);
		player.anims.play('turn');
		this.gameOver = true;
	}
}
