input.onButtonPressed(Button.A, function () {
    NumberInTheBucket += 1
    basic.showNumber(NumberInTheBucket, 50)
})
input.onButtonPressed(Button.AB, function () {
    NumberInTheBucket = 0
    basic.showNumber(NumberInTheBucket, 50)
})
input.onButtonPressed(Button.B, function () {
    NumberInTheBucket += -1
    basic.showNumber(NumberInTheBucket, 50)
})
let NumberInTheBucket = 0
NumberInTheBucket = 0
basic.showNumber(NumberInTheBucket, 50)
