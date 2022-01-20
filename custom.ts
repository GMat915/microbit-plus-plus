
/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/

enum Vertical {
    //% block="up"
    Up,
    //% block="down"
    Down
}

enum Horizontal {
    //% block="left"
    Left,
    //% block="right"
    Right
}

 /* 
 PlusPlus
 */
//% weight=100 color=#0fbc11 icon="\uf2db"
namespace PlusPlus {
    /**
     * Flashes a Certain LED a Certain Number of Times, With a Certian Interval
     * @param x The X Location of the LED You Want to Flash!
     * @param y The Y Location of the LED You Want to Flash!
     * @param interval How Long To Wait In Between On and Off Times!
     * @param time How Many Times You Want the LED to Flash!
     */
    //% block="flash at x $x and y $y with $interval milliseconds in between, but repeat this $time times"
    export function flash(x: number, y: number, interval: number, time: number): void {
        // Add code here
        for (let index = 0; index < time; index++) {
            led.plot(x, y)
            basic.pause(interval)
            led.unplot(x, y)
            basic.pause(interval)
        }
    }

    /**
     * Shows an Arrow In a Certain Vertical Direction
     * @param vdirection The Direction the Arrow is Pointing!
     */
    //% block="point an vertical arrow facing $vdirection"
    export function pointvertical(vdirection: Vertical): void {
        if (vdirection == Vertical.Up) {
            basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
        } else {
            basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
        }
    }

    /**
     * Shows an Arrow In a Certain Horizontal Direction
     * @param hdirection The Direction the Arrow is Pointing!
     */
    //% block="point a horizontal arrow facing $hdirection"
    export function pointhorizontal(hdirection: Horizontal): void {
        if (hdirection == Horizontal.Left) {
            basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
        } else {
            basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
        }
    }

    /**
     * Flips a Coin!
     */
    //% block="coin flip"
    export function coinflip(): void {
        basic.showIcon(IconNames.Diamond)
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.Diamond)
        basic.showIcon(IconNames.SmallDiamond)
        if (Math.randomBoolean()) {
            basic.showIcon(IconNames.Skull)
        } else {
            basic.showIcon(IconNames.Square)
        }
    }

    /**
     * Play Crashy Bird!
     */
    //% block="crashy bird"
    export function crashybird(): void {
        let emptyObstacleY = 0
        let ticks = 0
        let bird: game.LedSprite = null
        let index = 0
        let obstacles: game.LedSprite[] = []
        input.onButtonPressed(Button.A, function () {
            bird.change(LedSpriteProperty.Y, -1)
        })
        input.onButtonPressed(Button.B, function () {
            bird.change(LedSpriteProperty.Y, 1)
        })
        bird = game.createSprite(0, 2)
        bird.set(LedSpriteProperty.Blink, 300)
        basic.forever(function () {
            while (obstacles.length > 0 && obstacles[0].get(LedSpriteProperty.X) == 0) {
                obstacles.removeAt(0).delete()
            }
            for (let obstacle2 of obstacles) {
                obstacle2.change(LedSpriteProperty.X, -1)
            }
            if (ticks % 3 == 0) {
                emptyObstacleY = randint(0, 4)
                for (let index2 = 0; index2 <= 4; index2++) {
                    if (index2 != emptyObstacleY) {
                        obstacles.push(game.createSprite(4, index2))
                    }
                }
            }
            for (let obstacle3 of obstacles) {
                if (obstacle3.get(LedSpriteProperty.X) == bird.get(LedSpriteProperty.X) && obstacle3.get(LedSpriteProperty.Y) == bird.get(LedSpriteProperty.Y)) {
                    game.gameOver()
                }
            }
            ticks += 1
            basic.pause(1000)
        })

    }
}