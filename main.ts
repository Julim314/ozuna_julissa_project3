while (true) {
    if (input.soundLevel() > 110) {
        light.setAll(color.rgb(100, 25, 50))
    }
    
    if (input.lightLevel() < 6) {
        music.magicWand.playUntilDone()
    } else {
        light.clear
    }
    
}
