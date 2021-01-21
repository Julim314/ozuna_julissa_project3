while True:

    if input.sound_level() > 110:
        light.set_all(color.rgb(100,25,50))
        music.magic_wand.play_until_done()
    else:
        light.clear