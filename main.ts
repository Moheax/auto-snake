input.onButtonPressed(Button.A, function () {
    headSprite.change(LedSpriteProperty.Direction, -90)
})
function blabla () {
    tailSprite.set(LedSpriteProperty.X, bodySprite.get(LedSpriteProperty.X))
    tailSprite.set(LedSpriteProperty.Y, bodySprite.get(LedSpriteProperty.Y))
    bodySprite.set(LedSpriteProperty.X, headSprite.get(LedSpriteProperty.X))
    bodySprite.set(LedSpriteProperty.Y, headSprite.get(LedSpriteProperty.Y))
    headSprite.move(1)
}
input.onButtonPressed(Button.B, function () {
    headSprite.change(LedSpriteProperty.Direction, 90)
})
let tailSprite: game.LedSprite = null
let bodySprite: game.LedSprite = null
let headSprite: game.LedSprite = null
headSprite = game.createSprite(2, 2)
bodySprite = game.createSprite(2, 3)
tailSprite = game.createSprite(2, 4)
bodySprite.set(LedSpriteProperty.Brightness, 75)
tailSprite.set(LedSpriteProperty.Brightness, 25)
basic.forever(function () {
    basic.pause(500)
    blabla()
    if (headSprite.get(LedSpriteProperty.X) == 0) {
        headSprite.change(LedSpriteProperty.Direction, 90)
    } else if (headSprite.get(LedSpriteProperty.X) == 4) {
        headSprite.change(LedSpriteProperty.Direction, -90)
    } else if (headSprite.get(LedSpriteProperty.Y) == 0) {
        headSprite.change(LedSpriteProperty.Direction, 90)
    } else if (headSprite.get(LedSpriteProperty.Y) == 4) {
        headSprite.change(LedSpriteProperty.Direction, -90)
    } else {
    	
    }
})
