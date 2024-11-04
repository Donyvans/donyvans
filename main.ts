input.onGesture(Gesture.Shake, function () {
	
})
basic.forever(function () {
    if (true) {
        radio.sendValue("name", 39843)
    } else if (true) {
        music.play(music.createSoundExpression(WaveShape.Sine, 5000, 5000, 255, 255, 5000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    } else if (true) {
        basic.showLeds(`
            # # . # #
            # # # # #
            . # # # .
            . . # . .
            . . . . .
            `)
        music.play(music.tonePlayable(988, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
    } else {
        music.play(music.stringPlayable("C C5 C C5 C C5 C C5 ", 2490), music.PlaybackMode.LoopingInBackground)
    }
})
