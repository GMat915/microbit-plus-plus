
/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/

/**
 * PlusPlus
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
    //% block
    export function flash(x: number, y: number, interval: number, time: number): void {
        // Add code here
        for (let index = 0; index < time; index++) {
            led.plot(x, y)
            basic.pause(interval)
            led.unplot(x, y)
        }
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }
}
