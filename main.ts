input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    minute += 1
    basic.showNumber(minute)
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    basic.showNumber(stunde)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . . . .
        . . # . .
        . . . . .
        `)
    basic.showNumber(minute)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    stunde += 1
    basic.showNumber(stunde)
})
let stunde = 0
let minute = 0
minute = 0
stunde = 0
