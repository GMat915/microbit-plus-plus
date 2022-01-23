PlusPlus.flash(2,2,100,4)


PlusPlus.pointhorizontal(Horizontal.Left)
PlusPlus.pointhorizontal(Horizontal.Right)

PlusPlus.pointvertical(Vertical.Up)
PlusPlus.pointvertical(Vertical.Down)

basic.clearScreen()
basic.pause(1000)

basic.showString("Press a For Coin Flip!")

input.onButtonPressed(Button.A, () => {
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    if (Math.randomBoolean()) {
        basic.showIcon(IconNames.Skull)
    } else {
        basic.showIcon(IconNames.Square)
    }
})