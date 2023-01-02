let odczyt = 0
radio.setTransmitSerialNumber(true)
radio.setGroup(4)
led.setBrightness(64)
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P1, 1023)
    odczyt = pins.analogReadPin(AnalogPin.P0)
    radio.sendNumber(odczyt / 4)
    pins.analogWritePin(AnalogPin.P1, 0)
    led.plotBarGraph(
    odczyt,
    1023
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(odczyt)
    }
    basic.pause(1000)
})
