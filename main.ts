input.onSound(DetectedSound.Loud, function () {
	
})
let a = 500
input.setSoundThreshold(SoundThreshold.Loud, a)
basic.forever(function () {
    basic.showNumber(100)
})
