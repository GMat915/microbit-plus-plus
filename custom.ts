
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
//% weight=100 color=#0fbc11 icon=""
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
        if (Vertical == "Up") {
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
        if (Horizontal == "Left") {
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
}