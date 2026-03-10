/**
 * Background is set to the purple holes and then the first instructions are given to the player
 */
/**
 * A start song will be played as the moles will apear and scale up to 150%
 */
/**
 * The hemmer is set as the player and able to be controled by keys. also it will move fast
 */
/**
 * The countdown is started and it is decided that the high score will aditionaly be displayed along the players score at the end. 
 * 
 * the name of the game is also at the bottom.
 */
/**
 * This segment just means if the "mole" is not hit in 1000 ms then it will move to another spot
 */
/**
 * When the hammer overlaps the "mole" then it will add to the score and switch spots in the grid
 */
/**
 * A hit sound will be made. The mole will be animated to shake when it is "hit". the hammmer will make a swinging motion also.
 */
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    simplified.moveToRandomHoleOnGrid(myMole)
    music.knock.play()
    animation.runMovementAnimation(
    myMole,
    animation.animationPresets(animation.bobbing),
    100,
    false
    )
    animation.runImageAnimation(
    myHammer,
    assets.animation`hammerAnimation`,
    50,
    false
    )
})
let myHammer: Sprite = null
let myMole: Sprite = null
scene.setBackgroundImage(assets.image`grid`)
game.showLongText("Use the arrow keys to move the hammer and hit the giraffes! Get as many as you can in 15 seconds!!!", DialogLayout.Center)
music.play(music.createSong(hex`0078000408020100001c00010a006400f401640000040000000000000000000000000005000004420000000400011d04000800012008000c0001240c001000012210001400012414001800012218001c0001201c002000012020002400012024002800012228002c000120`), music.PlaybackMode.InBackground)
myMole = sprites.create(img`
    . . . . . . 5 5 5 5 5 . . . . . 
    . . . e . 5 5 5 5 5 5 5 . e . . 
    . . . e e 5 5 5 5 5 5 5 e e . . 
    . . . . 5 1 f 5 5 5 f 1 5 . . . 
    . . . . 5 5 5 5 5 5 5 5 5 . . . 
    . f e 5 5 5 5 5 5 5 5 e e . . . 
    . c e e e e 5 5 5 5 5 e . . . . 
    c c 5 5 5 5 5 5 5 5 5 5 . . . . 
    . . . . . . 5 5 5 5 5 5 . . . . 
    . . . . . . e 5 5 5 e e . . . . 
    . . . . . . e e 5 5 5 5 . . . . 
    . . . . . . 5 5 e e 5 e . . . . 
    . . . . . . 5 5 5 e e 5 . . . . 
    . . . . . . e 5 5 5 5 5 . . . . 
    . . . . . . e e 5 5 e e . . . . 
    . . . . . . 5 e 5 e 5 5 . . . . 
    `, SpriteKind.Enemy)
scaling.scaleToPercent(myMole, 150, ScaleDirection.Uniformly, ScaleAnchor.Top)
myHammer = sprites.create(img`
    .................44.............
    ...............442255...........
    ...............442255...........
    .............4422555555.........
    .............4422555555.........
    ...........44225555555555.......
    ...........44225555555555.......
    .........442255555555555555.....
    .........442255555555555555.....
    ...........555555555555555555...
    ...........555555555555555555...
    .............555555555555558866.
    .............555555555555558866.
    .............ccdd555555558866...
    .............ccdd555555558866...
    ...........ccddbb5555558866.....
    ...........ccddbb5555558866.....
    .........ccddbb....558866.......
    .........ccddbb....558866.......
    .......ccddbb........66.........
    .......ccddbb........66.........
    .....ccddbb.....................
    .....ccddbb.....................
    ...ccddbb.......................
    ...ccddbb.......................
    .ccddbb.........................
    .ccddbb.........................
    .ddbb...........................
    .ddbb...........................
    ................................
    ................................
    ................................
    `, SpriteKind.Player)
simplified.moveOnlyOnscreenWithArrows(myHammer, simplified.Speeds.Fast)
carnival.startCountdownGame(15, carnival.WinTypes.Score, effects.bubbles)
carnival.addLabelTo("Whack-the-Giraffe", carnival.Areas.Bottom, 5)
game.onUpdateInterval(1000, function () {
    animation.runMovementAnimation(
    myMole,
    animation.animationPresets(animation.shake),
    100,
    false
    )
    simplified.moveToRandomHoleOnGrid(myMole)
})
