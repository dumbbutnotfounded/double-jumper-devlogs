namespace SpriteKind {
    export const Dart = SpriteKind.create()
    export const Camera = SpriteKind.create()
    export const Red = SpriteKind.create()
    export const Yellow = SpriteKind.create()
    export const EnemyProjectile = SpriteKind.create()
    export const Green = SpriteKind.create()
    export const Ninja = SpriteKind.create()
    export const Hitbox = SpriteKind.create()
    export const TiTle = SpriteKind.create()
    export const Boss = SpriteKind.create()
    export const BossProjectile = SpriteKind.create()
    export const Effect = SpriteKind.create()
    export const ScreenEffect = SpriteKind.create()
    export const Dead = SpriteKind.create()
    export const Dialogue = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Hitbox, SpriteKind.BossProjectile, function (sprite, otherSprite) {
    gameOver()
    scene.cameraShake(4, 500)
    sprite.setFlag(SpriteFlag.GhostThroughSprites, true)
    timer.after(1500, function () {
        sprite.setFlag(SpriteFlag.GhostThroughSprites, false)
    })
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gameRunning) {
        shuriken = sprites.createProjectileFromSprite(img`
            . . f f . . . . 
            . . f d f . . . 
            . . f b b f f . 
            f f f c f b d f 
            f d b f c b f f 
            . f f b b f . . 
            . . . f d f . . 
            . . . . f f . . 
            `, ninjiHitbox, 0, 0)
        animation.runImageAnimation(
        shuriken,
        [img`
            . . . . f f . . 
            . . . f d f . . 
            . f f b b f . . 
            f d b f c f f f 
            f f b c f b d f 
            . . f b b f f . 
            . . f d f . . . 
            . . f f . . . . 
            `,img`
            . f f . . . . . 
            . f d f . f f f 
            . f b b f b d f 
            . . f c f b f . 
            . f b f c f . . 
            f d b f b b f . 
            f f f . f d f . 
            . . . . . f f . 
            `],
        100,
        true
        )
        if (characterAnimations.matchesRule(ninji, characterAnimations.rule(Predicate.FacingLeft))) {
            shuriken.vx = -100
            if (controller.up.isPressed()) {
                shuriken.vy = -100
            }
            if (controller.down.isPressed()) {
                shuriken.vy = 100
            }
        } else if (characterAnimations.matchesRule(ninji, characterAnimations.rule(Predicate.FacingRight))) {
            shuriken.vx = 100
            if (controller.up.isPressed()) {
                shuriken.vy = -100
            }
            if (controller.down.isPressed()) {
                shuriken.vy = 100
            }
        }
        characterAnimations.setCharacterAnimationsEnabled(ninji, false)
        for (let index = 0; index < 30; index++) {
            basicNinjaThrowAnims()
            pause(10)
        }
        timer.after(300, function () {
            characterAnimations.setCharacterAnimationsEnabled(ninji, true)
            basicNinjaAnims()
        })
    }
})
sprites.onOverlap(SpriteKind.Hitbox, SpriteKind.Red, function (sprite, otherSprite) {
    gameOver()
    scene.cameraShake(4, 500)
    sprite.setFlag(SpriteFlag.GhostThroughSprites, true)
    timer.after(1500, function () {
        sprite.setFlag(SpriteFlag.GhostThroughSprites, false)
    })
})
sprites.onOverlap(SpriteKind.Hitbox, SpriteKind.Boss, function (sprite, otherSprite) {
    gameOver()
    scene.cameraShake(4, 500)
    sprite.setFlag(SpriteFlag.GhostThroughSprites, true)
    timer.after(1500, function () {
        sprite.setFlag(SpriteFlag.GhostThroughSprites, false)
    })
})
scene.onOverlapTile(SpriteKind.Hitbox, assets.tile`myTile9`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency8`)
    maxJumps = 2
    achievementText = sprites.create(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f111fff11ff1ff1f111ff1fff111ffff1111f1ff1f1fff1f111ff1ff
        f1ff1f1ff1f1ff1f1ff1f1fff1ffffffff1ff1ff1f11f11f1ff1f1ff
        f1ff1f1ff1f1ff1f111ff1fff11ff11fff1ff1ff1f1f1f1f1ff1f1ff
        f1ff1f1ff1f1ff1f1ff1f1fff1ffffffff1ff1ff1f1fff1f111ff1ff
        f1ff1f1ff1f1ff1f1ff1f1fff1ffffff1f1ff1ff1f1fff1f1fffffff
        f111fff11fff11ff111ff111f111fffff1ffff11ff1fff1f1ffff1ff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `, SpriteKind.Text)
    achievementText.setFlag(SpriteFlag.Ghost, true)
    achievementText.z = -1
    achievementText.ay = 100
    achievementText.vy = -25
    tiles.placeOnTile(achievementText, location)
    animation.runImageAnimation(
    achievementText,
    [img`
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        b111bbb11bb1bb1b111bb1bbb111bbbb1111b1bb1b1bbb1b111bb1bb
        b1bb1b1bb1b1bb1b1bb1b1bbb1bbbbbbbb1bb1bb1b11b11b1bb1b1bb
        b1bb1b1bb1b1bb1b111bb1bbb11bb11bbb1bb1bb1b1b1b1b1bb1b1bb
        b1bb1b1bb1b1bb1b1bb1b1bbb1bbbbbbbb1bb1bb1b1bbb1b111bb1bb
        b1bb1b1bb1b1bb1b1bb1b1bbb1bbbbbb1b1bb1bb1b1bbb1b1bbbbbbb
        b111bbb11bbb11bb111bb111b111bbbbb1bbbb11bb1bbb1b1bbbb1bb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        `,img`
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        b111bbb11bb1bb1b111bb1bbb111bbbb1111b1bb1b1bbb1b111bb1bb
        b1bb1b1bb1b1bb1b1bb1b1bbb1bbbbbbbb1bb1bb1b11b11b1bb1b1bb
        b1bb1b1bb1b1bb1b111bb1bbb11bb11bbb1bb1bb1b1b1b1b1bb1b1bb
        b1bb1b1bb1b1bb1b1bb1b1bbb1bbbbbbbb1bb1bb1b1bbb1b111bb1bb
        b1bb1b1bb1b1bb1b1bb1b1bbb1bbbbbb1b1bb1bb1b1bbb1b1bbbbbbb
        b111bbb11bbb11bb111bb111b111bbbbb1bbbb11bb1bbb1b1bbbb1bb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        `,img`
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        b111bbb11bb1bb1b111bb1bbb111bbbb1111b1bb1b1bbb1b111bb1bb
        b1bb1b1bb1b1bb1b1bb1b1bbb1bbbbbbbb1bb1bb1b11b11b1bb1b1bb
        b1bb1b1bb1b1bb1b111bb1bbb11bb11bbb1bb1bb1b1b1b1b1bb1b1bb
        b1bb1b1bb1b1bb1b1bb1b1bbb1bbbbbbbb1bb1bb1b1bbb1b111bb1bb
        b1bb1b1bb1b1bb1b1bb1b1bbb1bbbbbb1b1bb1bb1b1bbb1b1bbbbbbb
        b111bbb11bbb11bb111bb111b111bbbbb1bbbb11bb1bbb1b1bbbb1bb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        `,img`
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        b111bbb11bb1bb1b111bb1bbb111bbbb1111b1bb1b1bbb1b111bb1bb
        b1bb1b1bb1b1bb1b1bb1b1bbb1bbbbbbbb1bb1bb1b11b11b1bb1b1bb
        b1bb1b1bb1b1bb1b111bb1bbb11bb11bbb1bb1bb1b1b1b1b1bb1b1bb
        b1bb1b1bb1b1bb1b1bb1b1bbb1bbbbbbbb1bb1bb1b1bbb1b111bb1bb
        b1bb1b1bb1b1bb1b1bb1b1bbb1bbbbbb1b1bb1bb1b1bbb1b1bbbbbbb
        b111bbb11bbb11bb111bb111b111bbbbb1bbbb11bb1bbb1b1bbbb1bb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        `,img`
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        c111ccc11cc1cc1c111cc1ccc111cccc1111c1cc1c1ccc1c111cc1cc
        c1cc1c1cc1c1cc1c1cc1c1ccc1cccccccc1cc1cc1c11c11c1cc1c1cc
        c1cc1c1cc1c1cc1c111cc1ccc11cc11ccc1cc1cc1c1c1c1c1cc1c1cc
        c1cc1c1cc1c1cc1c1cc1c1ccc1cccccccc1cc1cc1c1ccc1c111cc1cc
        c1cc1c1cc1c1cc1c1cc1c1ccc1cccccc1c1cc1cc1c1ccc1c1ccccccc
        c111ccc11ccc11cc111cc111c111ccccc1cccc11cc1ccc1c1cccc1cc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        `,img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fcccfffccffcffcfcccffcfffcccffffccccfcffcfcfffcfcccffcff
        fcffcfcffcfcffcfcffcfcfffcffffffffcffcffcfccfccfcffcfcff
        fcffcfcffcfcffcfcccffcfffccffccfffcffcffcfcfcfcfcffcfcff
        fcffcfcffcfcffcfcffcfcfffcffffffffcffcffcfcfffcfcccffcff
        fcffcfcffcfcffcfcffcfcfffcffffffcfcffcffcfcfffcfcfffffff
        fcccfffccfffccffcccffcccfcccfffffcffffccffcfffcfcffffcff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `,img`
        ........................................................
        ........................................................
        ........................................................
        ........................................................
        ........................................................
        ........................................................
        ........................................................
        ........................................................
        `],
    100,
    false
    )
    timer.after(800, function () {
        achievementText.destroy()
    })
    if (level == -1) {
        tiles.setTileAt(tiles.getTileLocation(30, 10), assets.tile`transparency8`)
        tiles.setTileAt(tiles.getTileLocation(50, 10), assets.tile`myTile18`)
        tiles.setTileAt(tiles.getTileLocation(20, 10), assets.tile`myTile19`)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gameRunning) {
        if (movement) {
            if (numJumps < maxJumps) {
                numJumps += 1
                ninjiHitbox.vy = -200
                if (numJumps > 1) {
                    scene.cameraShake(2, 500)
                    doubleJumpFx = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . b b . . . . . . . 
                        . . . . . . . b b . . . . . . . 
                        . . . . . . . b b . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . 1 b b 1 . . . . . . 
                        . . . . . 1 . 9 9 . 1 . . . . . 
                        . . . . 1 . . 9 9 . . 1 . . . . 
                        . . . . 1 9 . 9 9 . 9 1 . . . . 
                        . . . . . 9 9 9 9 9 9 . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . 1 . . 1 . . . . . . 
                        . . . . . 9 9 1 1 9 9 . . . . . 
                        . . . . . . . 9 9 . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, SpriteKind.Effect)
                    doubleJumpFx.setPosition(ninji.x, ninji.y)
                    animation.runImageAnimation(
                    doubleJumpFx,
                    [img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . b b . . . . . . . 
                        . . . . . . . b b . . . . . . . 
                        . . . . . . . b b . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . 1 b b 1 . . . . . . 
                        . . . . . 1 . 9 9 . 1 . . . . . 
                        . . . . 1 . . 9 9 . . 1 . . . . 
                        . . . . 1 9 . 9 9 . 9 1 . . . . 
                        . . . . . 9 9 9 9 9 9 . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . 1 . . 1 . . . . . . 
                        . . . . . 9 9 1 1 9 9 . . . . . 
                        . . . . . . . 9 9 . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . b . . b . . . . . . 
                        . . . . . . b . . b . . . . . . 
                        . . . . . . b . . b . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . 1 1 9 . b 9 9 b . 9 1 1 . . 
                        . 1 9 b 1 1 9 . . 9 1 1 b 9 1 . 
                        . 1 . 1 b 1 9 . . 9 1 b 1 . 1 . 
                        . 9 9 . . . 9 . . 9 . . . 9 9 . 
                        . . 9 9 . 9 9 . . 9 9 . 9 9 . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . 1 1 . . . . 1 1 . . . . 
                        . . . 9 9 1 1 1 1 1 1 9 9 . . . 
                        . . . . 9 9 9 9 9 9 9 9 . . . . 
                        . . . . . . . . . . . . . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . 1 1 1 . . . . . . 
                        . . . 1 1 . 1 1 1 1 1 . . . . . 
                        . . 1 1 1 1 . 1 1 1 . . 1 1 . . 
                        . 1 1 1 1 . . . . . . 1 1 1 1 . 
                        . 1 1 1 . . . . . . . . 1 1 1 1 
                        . . 1 . . . . . . . . . . 1 1 1 
                        . . . . . . . . . . . . . . 1 . 
                        . 1 . . . . . . . . . . . . . . 
                        1 1 1 . . . . . . . . . . 1 1 . 
                        1 1 1 1 . . . . . . . . 1 1 1 1 
                        . 1 1 1 1 . . . . . . 1 1 1 1 . 
                        . . 1 1 . . 1 1 1 . 1 1 1 1 . . 
                        . . . . . 1 1 1 1 1 . 1 1 . . . 
                        . . . . . . 1 1 1 . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . 1 1 1 . . . . . . 
                        . . . 1 1 . . . . . . . . . . . 
                        . . 1 1 . . . . . . . . 1 1 . . 
                        . . 1 . . . . . . . . . . 1 1 . 
                        . . . . . . . . . . . . . . 1 . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . 1 . . . . . . . . . . . . . . 
                        . 1 1 . . . . . . . . . . 1 1 . 
                        . . 1 1 . . . . . . . . 1 1 . . 
                        . . . . . . . . . . . 1 1 . . . 
                        . . . . . . 1 1 1 . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . 1 1 . . . . . . . 
                        . . . . 1 . . . . . . . . . . . 
                        . . . 1 . . . . . . . . 1 1 . . 
                        . . 1 . . . . . . . . . . 1 . . 
                        . . . . . . . . . . . . . . 1 . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . 1 . . . . . . . . . . . . . . 
                        . . 1 . . . . . . . . . . 1 . . 
                        . . . 1 . . . . . . . . 1 . . . 
                        . . . . . . . . . . . 1 . . . . 
                        . . . . . . 1 1 1 . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . 1 . . . . . . . 
                        . . . . 1 . . . . . . . . . . . 
                        . . . 1 . . . . . . . . . . . . 
                        . . . . . . . . . . . . . 1 . . 
                        . . . . . . . . . . . . . . 1 . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . 1 . . . . . . . . . . . 1 . . 
                        . . . 1 . . . . . . . . . . . . 
                        . . . . . . . . . . . 1 . . . . 
                        . . . . . . . 1 . 1 . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `],
                    60,
                    false
                    )
                    timer.after(540, function () {
                        doubleJumpFx.destroy()
                    })
                }
            }
        }
    }
    if (dialoguePlayed) {
        story.clearAllText()
    }
})
function ninjiDia1 () {
    ninjiDia.x = -76
    animation.runImageAnimation(
    ninjiDia,
    [img`
        cccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccc
        ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
        cbc..................................cbc
        ab....................................ba
        ab...........ffccbbbbb................ba
        ab.........cffcbbbbbbbbb..............ba
        ab........cffccbbbbbbbbbc.............ba
        ab.......cffcbbbbbbbbbbbcf............ba
        ab......cfffcbbbbbbbbbbbcff...........ba
        ab....222222222222222222bcff..........ba
        ab..22222222eeeeeeeeee22222e..........ba
        ab..222e22eeeeeeeeeeeeee2222e.........ba
        ab.222eeeeeebdddddddffeeeee2ef........ba
        ab222eeeeebbbdddddddffdddffeef........ba
        ab222effbbbbb1111111ccdddffccf........ba
        ab222effcbbbbb111111cc111ccdbf........ba
        ab.22effccbbbbbb11111c1111c1bf........ba
        ab.2eecfcccbbbbbbbbbbbbbbbbbbc........ba
        ab.2eecfccccbbbbbbbbbbbbbbbbc.........ba
        ab.2eeecffccccbbbbbbbbbbbbbcc.........ba
        ab.22eeecffcccccbbbbbbbbbbcc..........ba
        ab..22ee.cffccccccbbbbbbbcc...........ba
        ab.222eee.cffbcccccccccccc............ba
        ab222eee....fbbcccccccccc.............ba
        ab.2eee........fffffff......bbb.......ba
        ab22ee...................bbbdddb......ba
        ab2ee...................bb3dddddbb....ba
        ab.....................bb3ddddddddb...ba
        ab....................b3bdddd3dddddb..ba
        ab....................b33bdd3dddddddb.ba
        ab.....................b3bd3dddddddd3bba
        ab......................b3b3dddddddd3bba
        ab.......................b3bdddddb33b.ba
        ab........................b3bbddd3bb..ba
        ab........................bb.bddd33b..ba
        ab............................b333b...ba
        ab.............................bbb....ba
        cbc..................................cbc
        ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
        cccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccc
        `],
    500,
    false
    )
    animation.runMovementAnimation(
    ninjiDia,
    animation.animationPresets(animation.easeRight),
    500,
    false
    )
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.EnemyProjectile, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    otherSprite.setFlag(SpriteFlag.GhostThroughSprites, true)
    otherSprite.ay = 0
    otherSprite.setVelocity(0, 0)
    animation.runImageAnimation(
    otherSprite,
    [img`
        . . . . . . . . 
        . . 1 1 1 1 . . 
        . 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 . 
        . . 1 1 1 1 . . 
        . . . . . . . . 
        `,img`
        . . 3 3 3 3 . . 
        . 3 3 1 1 3 3 . 
        3 3 1 1 1 1 3 3 
        3 1 1 1 1 1 1 3 
        3 1 1 1 1 1 1 3 
        3 3 1 1 1 1 3 3 
        . 3 3 1 1 3 3 . 
        . . 3 3 3 3 . . 
        `,img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        `,img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        `],
    50,
    false
    )
    timer.after(150, function () {
        otherSprite.destroy()
    })
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Boss, function (sprite, otherSprite) {
    sprite.destroy()
    statusbar.value += -1
    scene.cameraShake(2, 500)
})
function startDialogue () {
    dialoguePlayed = true
    gameRunning = false
    movement = false
    ninjiDia = sprites.create(img`
        cccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccc
        ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
        cbc..................................cbc
        ab....................................ba
        ab...........ffccbbbbb................ba
        ab.........cffcbbbbbbbbb..............ba
        ab........cffccbbbbbbbbbc.............ba
        ab.......cffcbbbbbbbbbbbcf............ba
        ab......cfffcbbbbbbbbbbbcff...........ba
        ab....222222222222222222bcff..........ba
        ab..22222222eeeeeeeeee22222e..........ba
        ab..222e22eeeeeeeeeeeeee2222e.........ba
        ab.222eeeeeebdddddddffeeeee2ef........ba
        ab222eeeeebbbdddddddffdddffeef........ba
        ab222effbbbbb1111111ccdddffccf........ba
        ab222effcbbbbb111111cc111ccdbf........ba
        ab.22effccbbbbbb11111c1111cdbf........ba
        ab.2eecfcccbbbbbbbbbbbbbbbbbbc........ba
        ab.2eecfccccbbbbbbbbbbbbbbbbc.........ba
        ab.2eeecffccccbbbbbbbbbbbbbcc.........ba
        ab.22eeecffcccccbbbbbbbbbbcc..........ba
        ab..22ee.cffccccccbbbbbbbcc...........ba
        ab.222eee.cffbcccccccccccc............ba
        ab222eee....fbbcccccccccc.............ba
        ab.2eee........fffffff......bbb.......ba
        ab22ee...................bbbdddb......ba
        ab2ee...................bb3dddddbb....ba
        ab.....................bb3ddddddddb...ba
        ab....................b3bdddd3dddddb..ba
        ab....................b33bdd3dddddddb.ba
        ab.....................b3bd3dddddddd3bba
        ab......................b3b3dddddddd3bba
        ab.......................b3bdddddb33b.ba
        ab........................b3bbddd3bb..ba
        ab........................bb.bddd33b..ba
        ab............................b333b...ba
        ab.............................bbb....ba
        cbc..................................cbc
        ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
        cccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccc
        `, SpriteKind.Dialogue)
    shinoDia = sprites.create(img`
        cccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccc
        ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
        cbc..................................cbc
        ab....................................ba
        ab................eeeeeccff...........ba
        ab..............eeeeeeeeecffc.........ba
        ab.............ceeeeeeeeeccffc........ba
        ab............fceeeeeeeeeeecffc.......ba
        ab...........ffceeeeeeeeeeecfffc......ba
        ab..........ffce222222222222222222....ba
        ab..........c22222cccccccccc22222222..ba
        ab.........c2222cccccccccccccc22c222..ba
        ab........fc2cccccdfffdddddecccccc222.ba
        ab........fccfdddddffddddddeeeccccc222ba
        ab........fccffdddccc111111eeeeeffc222ba
        ab........fedcc111cc111111eeeeecffc222ba
        ab........fe11cc1cc11111eeeeeeccffc22.ba
        ab........ceeeeeeeeeeeeeeeeeecccfccc2.ba
        ab.........ceeeeeeeeeeeeeeeeccccfccc2.ba
        ab.........cceeeeeeeeeeeeeccccffcccc2.ba
        ab..........cceeeeeeeeeecccccffcccc22.ba
        ab...........cceeeeeeeccccccffc.cc22..ba
        ab............cccccccccccceffc.ccc222.ba
        ab.............cccccccccceef....ccc222ba
        ab........bbb.....fffffff........ccc2.ba
        ab.......bdddbbb..................cc22ba
        ab.....bbddddd3bb..................cc2ba
        ab....bdddddddd3bb....................ba
        ab...bddddd3ddddb3b...................ba
        ab..bddddddd3ddb33b...................ba
        ab.b3dddddddd3db3b....................ba
        ab.b3dddddddd3b3b.....................ba
        ab..b33bdddddb3b......................ba
        ab...bb3dddbb3b.......................ba
        ab...b33dddb.bb.......................ba
        ab....b333b...........................ba
        ab.....bbb............................ba
        cbc..................................cbc
        ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
        cccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccc
        `, SpriteKind.Dialogue)
    ninjiDia.setPosition(24, 40)
    shinoDia.setPosition(136, 40)
    ninjiDia2()
    story.printCharacterText("Brother?", "Ninji")
    ninjiDia3()
    story.printCharacterText("Why have you gone rogue? There is no reason for your actions!", "Ninji")
    shinoDia3()
    story.printCharacterText("Wha-", "Shino")
    ninjiDia1()
    story.printCharacterText("Really?", "Shino")
    story.printCharacterText("You know what? Your words have touched me, really. I don't even want to fight anymore.", "Shino")
    ninjiDia2()
    story.printCharacterText("Wait, really?", "Ninji")
    shinoDia2()
    story.printCharacterText("HAH! As if your feeble statement will change my ways!", "Shino")
    ninjiDia3()
    shinoDia1()
    story.printCharacterText("I left for a reason, and I will never come back!", "Shino")
    story.printCharacterText("Well, I guess we have to fight, then.", "Ninji")
    story.printCharacterText("It seems so.", "Shino")
    sprites.destroyAllSpritesOfKind(SpriteKind.Dialogue)
    gameRunning = true
    movement = true
}
function animateTitleScreen () {
    mySprite5 = sprites.create(img`
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        .......................................aa...........................................................
        ......................................aaaa..........................................................
        .....................................aa11aa.........................................................
        ....................................aa1111aa............................aa........a.................
        ....................................aa91111aa......aa..................aaaa......aaa................
        ...................................aa9991111aa....aaaa................aa11aa....aa1aa..aaaa.........
        ...................................aa9999111aa...aa11aa....aa...aa...aa111aa...aa11aa.aaaaaa........
        ..................................aaa199aa11aa..aa9111aa..aaaa.aaaa..aa911aa...aa11aaaa1111aa.......
        .................................ccc111aaa911aaaa999111aaaa11aaa11aaaa999aa...aa911aaa911111aa......
        .................................cc1111aaa991caa199aa11aaaa91aa111aaaa9999aa..aa99ccc999aa11cc......
        .................................cc1111aa9999ccc11aaa91aaa99aa111aaac11aa99cccc999ccc999911cc.......
        .................................cc111111199cccc11aa999ccc99a9111ccca11aa999ccc199ccc199ccccc.......
        .................................ccc1111111cc.cc1111999ccc199991cccc1111199ccc111cc.cc199991cc......
        ..................................cccc1111cc...cc11119cc.cc1999cc.cc111111cccc111cc..cc1999cc.......
        ...................................cccccccc.....ccccccc...cccccc...cccccccc..ccccc....cccccc........
        ..................................aaaacccc.......ccccc.....cccc.....cccccc....ccc......cccc.aaaaaaa.
        .................................aa11aa..........................aaaaaa....................aa99911aa
        ................................aa111aa..........aa.............aaaaaaaa.....aaaa.........cc11999cc.
        ................................aa111aaaa...aa..aaaaaaa.aaaa...aa999111aa...aaaaaa....aa.aaccccccc..
        ............................ccccc911ccaaaa.aaaaaa99aaaaaaaaaa..aa9999111aa.aa1111aa..aaaaaaa........
        ...........................cccccc99cccc11caa11aaa999911a1111aa..aa99aa111aaa911111aaac11a11cc.......
        ..........................ccc1cc999cccc91ac111cc1199991111111aa.aa19aa91aac999cc11ccca911111cc......
        ..........................cc111c199ccc99aa111ccc11199c9111c11ccccc11999cccc999911cccc9991c11cc......
        ...........................c111111cccc99a9111ccc1111cc991cc11cccc1111ccc.cc199ccccccc999ccccc.......
        ...........................cc11111cccc199991cccc111cc999cc11cccc1111ccc...cc199991cc119cc.cc........
        ............................cc11ccc..cc1999cc.cc11ccc19ccc11cccc111cc......cc1999ccc111cc...........
        .............................ccccc....cccccc...cccc.cccc.cccc.cc11cc........cccccc.ccccc............
        ..............................cc.......cccc.....cc...cc...cc...cccc..........cccc...ccc.............
        ................................................................cc..................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        `, SpriteKind.TiTle)
    mySprite7 = sprites.create(img`
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ........................fcbbb.......................................................................
        ......................cfcbbbbbb.....................................................................
        .....................cfcbbbbbbbf....................................................................
        ....................2222222222cff...................................................................
        .................222e2eeeeeeee22e...................................................................
        ...........222..22eeeeebddddfeeeef..................................................................
        ............ee222e..fbbb1111cddfcf..................................................................
        ..............eee...fbbbb111c11cdf..................................................................
        ....................fccbbbbbbbbb1...................................................................
        ....................cfcccbbbbbbbc...................................................................
        .............bbbbb...cfccccbbbbc....................................................................
        ..........bbbbccccbbb.ffbcccccc.....................................................................
        .........bbcccccffccccbbcffff.......................................................................
        ........ccccffffffffffccfff.........................................................................
        ........33fffbbb..ffbbbcfb.....dd3..................................................................
        .......d3333bb....fbbccfffb...3dddd.................................................................
        .......ddb3dcbc...bbbcfffbbb..dbbd3.................................................................
        ........ddbc.dc..cbbcfffbcbbbccdb3b.................................................................
        ........cccbbbdc.bbcfffb.ffcbbccccc.................................................................
        ........c.cccddcfbcfffb...ffffcccff.................................................................
        .............cc.bbcffb.bbcc..fffff..................................................................
        ...............bbbcfffbbcccc........................................................................
        ...............bbcffffffffcc........................................................................
        ..............bbbcffffffffcc........................................................................
        ..............bbccfffffcffc.........................................................................
        ......44.....bbbcff....cffc.........................................................................
        .....44ee...bbbcff.....cfff444......................................................................
        .....44ecbbbbbccf......cff44ee......................................................................
        .....44eccbbccfff......ff44eee......................................................................
        .....4eeecccffff.......44eeee.......................................................................
        ....44eeefffff.........4eeee........................................................................
        ....4eee...............4ee..........................................................................
        ....4eee............................................................................................
        .....4e.............................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        `, SpriteKind.TiTle)
    mySprite8 = sprites.create(img`
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ............................................................................................f.......
        ...........................................................................................fdf......
        ...........................................................................................fddf.....
        ...........................................................................................fdbf.....
        ...........................................................................................fbbbfff..
        .........................................................................................ffbbfcbddf.
        ........................................................................................fdbbfcfbbff.
        .........................................................................................fccbfbcff..
        ..........................................................................................ffcbcff...
        ...........................................................................................ffbcf....
        ............................................................................................fdcf....
        .............................................................................................fdf....
        ..............................................................................................f.....
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        `, SpriteKind.TiTle)
    mySprite5.setPosition(200, 40)
    mySprite7.setPosition(0, 40)
    mySprite8.setPosition(80, 0)
    story.spriteMoveToLocation(mySprite5, 80, 40, 100)
    music.knock.play()
    story.spriteMoveToLocation(mySprite7, 80, 40, 160)
    music.knock.play()
    story.spriteMoveToLocation(mySprite8, 80, 40, 300)
    music.smallCrash.play()
    color.startFade(color.White, color.originalPalette, 800)
    createStartMenu()
    gameRunning = false
    gameOverCheck = false
    movement = false
    dialoguePlayed = false
    music.playMelody(music.convertRTTTLToMelody("titlescreenmusic:d=4,o=5,b=112:8f#4,16f#4,16f#4,8f#,16f#4,8f#4,16f#,16f#4,16f#4,8f#,8f#4,8g#4,16g#4,16g#4,8g#,16g#4,8g#4,16g#,16g#4,16g#4,8g#,8g#4,8a4,16a4,16a4,8a,16a4,8a4,16a,16a4,16a4,8a,8a4,8b4,16b4,16b4,8b,16b4,8b4,16b,8b4,16f#,16b4,8a4,8f#4,16f#4,16f#4,8c#,16f#4,8f#4,16c#,16d#4,16d#4,8e4,8f4,8f#4,16f#4,16f#4,8c#,16f#4,8f#4,16c#,16d#4,16d#4,8e4,8f4,8f#4,16f#4,16f#4,8c#,16f#4,8f#4,16c#,16d#4,16d#4,8e4,8f4,8f#4,8f#4,2f#5"), 300)
}
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (gameRunning) {
        ninjiHitbox.fx = 300
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Red, function (sprite, otherSprite) {
    otherSprite.setFlag(SpriteFlag.Ghost, true)
    characterAnimations.setCharacterAnimationsEnabled(otherSprite, false)
    animation.runImageAnimation(
    otherSprite,
    [img`
        . . . . . f f f . . . . 
        . . . . f 4 4 2 f . . . 
        . . . f e e 4 4 2 f . . 
        . . . f f f e e 2 f f . 
        . . . f 4 4 f f e f e f 
        . . . . f 4 2 2 f e f . 
        . . 3 3 f f f f f f . . 
        . f f f 4 4 2 f f d d . 
        f e e f 2 2 f . . d d . 
        . . . . f f 4 f . . . . 
        . . . . . f 4 4 f . . . 
        . . . . . . f 4 f . . . 
        `],
    350,
    false
    )
    if (ninji.x < otherSprite.x) {
        otherSprite.vx = 50
    } else if (ninji.x > otherSprite.x) {
        otherSprite.vx = -50
    }
    otherSprite.vy = -150
    sprite.destroy()
    scene.cameraShake(2, 500)
    timer.after(3000, function () {
        otherSprite.destroy()
    })
})
function basicNinjaThrowAnims () {
    if (characterAnimations.matchesRule(ninji, characterAnimations.rule(Predicate.FacingLeft, Predicate.NotMoving))) {
        animation.runImageAnimation(
        ninji,
        [img`
            . . . . . . . . . . . . 
            . 3 3 f f f . . . . . . 
            . 3 f b b c f . . . . . 
            . f 2 2 2 2 c f . . . . 
            . f f 1 f 1 2 f f . . . 
            . f b b b c c f 2 f . . 
            . . f b c c f f 2 f . . 
            . . . f f f f c f f . . 
            . . . f b b c d d f . . 
            . . . f f f f d d . . . 
            . . f f f f f f f f . . 
            . f e e f . . f 4 4 f . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f . . . . . . 
            1 . f b b c f . . . . . 
            1 f 2 2 2 2 c f . . . . 
            1 f f 1 f 1 2 f f . . . 
            1 f b b b c c f 2 f . . 
            1 1 f b c c f f 2 f . . 
            1 1 . f f f f c f f . . 
            . 1 . f b b c d d f . . 
            . . . f f f f d d . . . 
            . . f f f f f f f f . . 
            . f e e f . . f 4 4 f . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f . . . . . . 
            . . f b b c f . . . . . 
            . f 2 2 2 2 c f . . . . 
            . f f 1 f 1 2 f f . . . 
            . f b b b c c f 2 f . . 
            . . f b c c f f 2 f . . 
            . 3 3 f f f f c f f . . 
            . 3 3 f b b c d d f . . 
            . . . f f f f d d . . . 
            . . f f f f f f f f . . 
            . f e e f . . f 4 4 f . 
            `],
        100,
        false
        )
    } else if (characterAnimations.matchesRule(ninji, characterAnimations.rule(Predicate.FacingRight, Predicate.NotMoving))) {
        animation.runImageAnimation(
        ninji,
        [img`
            . . . . . . . . . . . . 
            . . . . . . f f f 3 3 . 
            . . . . . f c b b f 3 . 
            . . . . f c 2 2 2 2 f . 
            . . . f f 2 1 f 1 f f . 
            . . f 2 f c c b b b f . 
            . . f 2 f f c c b f . . 
            . . f f c f f f f . . . 
            . . f d d c b b f . . . 
            . . . d d f f f f . . . 
            . . f f f f f f f f . . 
            . f 4 4 f . . f e e f . 
            `,img`
            . . . . . . . . . . . . 
            . . . . . . f f f . . . 
            . . . . . f c b b f . 1 
            . . . . f c 2 2 2 2 f 1 
            . . . f f 2 1 f 1 f f 1 
            . . f 2 f c c b b b f 1 
            . . f 2 f f c c b f 1 1 
            . . f f c f f f f . 1 1 
            . . f d d c b b f . 1 . 
            . . . d d f f f f . . . 
            . . f f f f f f f f . . 
            . f 4 4 f . . f e e f . 
            `,img`
            . . . . . . . . . . . . 
            . . . . . . f f f . . . 
            . . . . . f c b b f . . 
            . . . . f c 2 2 2 2 f . 
            . . . f f 2 1 f 1 f f . 
            . . f 2 f c c b b b f . 
            . . f 2 f f c c b f . . 
            . . f f c f f f f 3 3 . 
            . . f d d c b b f 3 3 . 
            . . . d d f f f f . . . 
            . . f f f f f f f f . . 
            . f 4 4 f . . f e e f . 
            `],
        100,
        false
        )
    } else if (characterAnimations.matchesRule(ninji, characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingUp))) {
        animation.runImageAnimation(
        ninji,
        [img`
            . . . 3 3 f f f . . . . 
            . . . 3 f b b c f . . . 
            . . . f 2 2 2 2 c f f . 
            . . . f f 1 f 1 2 f 2 f 
            . . . f b b b c c f 2 f 
            . . . . f b c c f d d . 
            . . . f f f f f c d d . 
            . . f f f b b c c . . . 
            . f e e f f f f f . . . 
            . . . . . . f 4 f . . . 
            . . . . . . f 4 f . . . 
            . . . . . . . f . . . . 
            `,img`
            . . . . . f f f . . . . 
            . . . . f b b c f . . . 
            . . 1 f 2 2 2 2 c f f . 
            . . 1 f f 1 f 1 2 f 2 f 
            . 1 1 f b b b c c f 2 f 
            . 1 1 . f b c c f d d . 
            . 1 . f f f f f c d d . 
            . . f f f b b c c . . . 
            . f e e f f f f f . . . 
            . . . . . . f 4 f . . . 
            . . . . . . f 4 f . . . 
            . . . . . . . f . . . . 
            `,img`
            . . . . . f f f . . . . 
            . . . . f b b c f . . . 
            . . . f 2 2 2 2 c f f . 
            . . . f f 1 f 1 2 f 2 f 
            . . . f b b b c c f 2 f 
            . . . . f b c c f d d . 
            . . . f f f f f c d d . 
            . . f f f b b c c . . . 
            . f e e f f f f f . . . 
            . . . . . . f 4 f . . . 
            . . . . . . f 4 f . . . 
            . . . . . . . f . . . . 
            `],
        100,
        false
        )
    } else if (characterAnimations.matchesRule(ninji, characterAnimations.rule(Predicate.FacingRight, Predicate.MovingUp))) {
        animation.runImageAnimation(
        ninji,
        [img`
            . . . . f f f 3 3 . . . 
            . . . f c b b f 3 . . . 
            . f f c 2 2 2 2 f . . . 
            f 2 f 2 1 f 1 f f . . . 
            f 2 f c c b b b f . . . 
            . d d f c c b f . . . . 
            . d d c f f f f f . . . 
            . . . c c b b f f f . . 
            . . . f f f f f e e f . 
            . . . f 4 f . . . . . . 
            . . . f 4 f . . . . . . 
            . . . . f . . . . . . . 
            `,img`
            . . . . f f f . . . . . 
            . . . f c b b f . . . . 
            . f f c 2 2 2 2 f 1 . . 
            f 2 f 2 1 f 1 f f 1 . . 
            f 2 f c c b b b f 1 1 . 
            . d d f c c b f . 1 1 . 
            . d d c f f f f f . 1 . 
            . . . c c b b f f f . . 
            . . . f f f f f e e f . 
            . . . f 4 f . . . . . . 
            . . . f 4 f . . . . . . 
            . . . . f . . . . . . . 
            `,img`
            . . . . f f f . . . . . 
            . . . f c b b f . . . . 
            . f f c 2 2 2 2 f . . . 
            f 2 f 2 1 f 1 f f . . . 
            f 2 f c c b b b f . . . 
            . d d f c c b f . . . . 
            . d d c f f f f f . . . 
            . . . c c b b f f f . . 
            . . . f f f f f e e f . 
            . . . f 4 f . . . . . . 
            . . . f 4 f . . . . . . 
            . . . . f . . . . . . . 
            `],
        100,
        false
        )
    } else if (characterAnimations.matchesRule(ninji, characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingDown))) {
        animation.runImageAnimation(
        ninji,
        [img`
            . . . 3 3 f f f . . . . 
            . . . 3 f b b c f . . . 
            . . . f 2 2 2 2 c f 2 f 
            . . . f f 1 f 1 2 f 2 f 
            . . . f b b b c c f f . 
            . . . . f b c c f d d . 
            . . . f f f f f c d d . 
            . . f f f b b c c . . . 
            . f e e f f f f f . . . 
            . . . . . . f 4 f . . . 
            . . . . . . f 4 f . . . 
            . . . . . . . f . . . . 
            `,img`
            . . . . . f f f . . . . 
            . . . . f b b c f . . . 
            . . 1 f 2 2 2 2 c f 2 f 
            . . 1 f f 1 f 1 2 f 2 f 
            . 1 1 f b b b c c f f . 
            . 1 1 . f b c c f d d . 
            . 1 . f f f f f c d d . 
            . . f f f b b c c . . . 
            . f e e f f f f f . . . 
            . . . . . . f 4 f . . . 
            . . . . . . f 4 f . . . 
            . . . . . . . f . . . . 
            `,img`
            . . . . . f f f . . . . 
            . . . . f b b c f . . . 
            . . . f 2 2 2 2 c f 2 f 
            . . . f f 1 f 1 2 f 2 f 
            . . . f b b b c c f f . 
            . . . . f b c c f d d . 
            . . . f f f f f c d d . 
            . . f f f b b c c . . . 
            . f e e f f f f f . . . 
            . . . . . . f 4 f . . . 
            . . . . . . f 4 f . . . 
            . . . . . . . f . . . . 
            `],
        100,
        false
        )
    } else if (characterAnimations.matchesRule(ninji, characterAnimations.rule(Predicate.FacingRight, Predicate.MovingDown))) {
        animation.runImageAnimation(
        ninji,
        [img`
            . . . . f f f 3 3 . . . 
            . . . f c b b f 3 . . . 
            f 2 f c 2 2 2 2 f . . . 
            f 2 f 2 1 f 1 f f . . . 
            . f f c c b b b f . . . 
            . d d f c c b f . . . . 
            . d d c f f f f f . . . 
            . . . c c b b f f f . . 
            . . . f f f f f e e f . 
            . . . f 4 f . . . . . . 
            . . . f 4 f . . . . . . 
            . . . . f . . . . . . . 
            `,img`
            . . . . f f f . . . . . 
            . . . f c b b f . . . . 
            f 2 f c 2 2 2 2 f 1 . . 
            f 2 f 2 1 f 1 f f 1 . . 
            . f f c c b b b f 1 1 . 
            . d d f c c b f . 1 1 . 
            . d d c f f f f f . 1 . 
            . . . c c b b f f f . . 
            . . . f f f f f e e f . 
            . . . f 4 f . . . . . . 
            . . . f 4 f . . . . . . 
            . . . . f . . . . . . . 
            `,img`
            . . . . f f f . . . . . 
            . . . f c b b f . . . . 
            f 2 f c 2 2 2 2 f . . . 
            f 2 f 2 1 f 1 f f . . . 
            . f f c c b b b f . . . 
            . d d f c c b f . . . . 
            . d d c f f f f f . . . 
            . . . c c b b f f f . . 
            . . . f f f f f e e f . 
            . . . f 4 f . . . . . . 
            . . . f 4 f . . . . . . 
            . . . . f . . . . . . . 
            `],
        100,
        false
        )
    } else if (characterAnimations.matchesRule(ninji, characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingLeft)) && characterAnimations.matchesRule(ninjiHitbox, characterAnimations.rule(Predicate.HittingWallDown))) {
        animation.runImageAnimation(
        ninji,
        [img`
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . 3 3 f f f . . . . . . 
            . 3 f b b c f . . . . . 
            . f 2 2 2 2 c f f . . . 
            . f f 1 f 1 2 f 2 f . . 
            . f b b b c c f f 2 f . 
            . . f b c c f f f . . . 
            . . . f f f c f c d d . 
            . . . f f f b c c d d . 
            . . f e e f f f 4 4 f . 
            . f e e . . . . f f . . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f . . . . . . 
            1 . f b b c f . . . . . 
            1 f 2 2 2 2 c f f . . . 
            1 f f 1 f 1 2 f 2 2 f . 
            1 f b b b c c f f f . . 
            1 1 f b c c f f f . . . 
            1 1 . f f f c f c d d . 
            . 1 1 f f b b c c d d . 
            . . . . . f f f f . . . 
            . . . . f e f 4 f . . . 
            . . . f e f 4 4 f . . . 
            `,img`
            . . . f f f . . . . . . 
            . . f b b c f . f . . . 
            . f 2 2 2 2 c f f 2 f . 
            . f f 1 f 1 2 f 2 f . . 
            . f b b b c c f f . . . 
            . . f b c c f f f f . . 
            . . . f f f c f c d d . 
            . . 3 f f b b c c d d . 
            . . f 4 f f f f f . . . 
            . . f 4 4 f f f f f . . 
            . . . f f . . f e e f . 
            . . . . . . f e e . . . 
            `],
        100,
        false
        )
    } else if (characterAnimations.matchesRule(ninji, characterAnimations.rule(Predicate.FacingRight, Predicate.MovingRight)) && characterAnimations.matchesRule(ninjiHitbox, characterAnimations.rule(Predicate.HittingWallDown))) {
        animation.runImageAnimation(
        ninji,
        [img`
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . f f f 3 3 . 
            . . . . . f c b b f 3 . 
            . . . f f c 2 2 2 2 f . 
            . . f 2 f 2 1 f 1 f f . 
            . f 2 f f c c b b b f . 
            . . . f f f c c b f . . 
            . d d c f c f f f . . . 
            . d d c c b f f f . . . 
            . f 4 4 f f f e e f . . 
            . . f f . . . . e e f . 
            `,img`
            . . . . . . . . . . . . 
            . . . . . . f f f . . . 
            . . . . . f c b b f . 1 
            . . . f f c 2 2 2 2 f 1 
            . f 2 2 f 2 1 f 1 f f 1 
            . . f f f c c b b b f 1 
            . . . f f f c c b f 1 1 
            . d d c f c f f f . 1 1 
            . d d c c b b f f 1 1 . 
            . . . f f f f . . . . . 
            . . . f 4 f e f . . . . 
            . . . f 4 4 f e f . . . 
            `,img`
            . . . . . . f f f . . . 
            . . . f . f c b b f . . 
            . f 2 f f c 2 2 2 2 f . 
            . . f 2 f 2 1 f 1 f f . 
            . . . f f c c b b b f . 
            . . f f f f c c b f . . 
            . d d c f c f f f . . . 
            . d d c c b b f f 3 . . 
            . . . f f f f f 4 f . . 
            . . f f f f f 4 4 f . . 
            . f e e f . . f f . . . 
            . . . e e f . . . . . . 
            `],
        100,
        false
        )
    }
}
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (gameRunning) {
        ninjiHitbox.fx = 300
    }
})
function shinoDia2 () {
    shinoDia.x = 236
    animation.runImageAnimation(
    shinoDia,
    [img`
        ccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccc
        cc444444444444444444444444444444444444cc
        c4c..................................c4c
        e4....................................4e
        e4................eeeeeccff...........4e
        e4..............eeeeeeeeecffc.........4e
        e4.............ceeeeeeeeeccffc........4e
        e4............fceeeeeeeeeeecffc.......4e
        e4...........ffceeeeeeeeeeecfffc......4e
        e4..........ffce222222222222222222....4e
        e4..........c22222cccccccccc22222222..4e
        e4.........c2222cccccccccccccc22c222..4e
        e4........fc2cccccddfffffddecccccc222.4e
        e4........fccffffdffffdddddeeeccccc2224e
        e4........fccddffdcccccccc1eeeeeffc2224e
        e4........fecccc11111ccccceeeeecffc2224e
        e4........fe1cc111111111eeeeeeccffc22.4e
        e4........ceeeeeeeeeeeeeeeeeecccfccc2.4e
        e4.........ceeeeeeeeeeeeeeeeccccfccc2.4e
        e4.........cceeeeeeeeeeeeeccccffcccc2.4e
        e4..........cceeeeeeeeeecccccffcccc22.4e
        e4...........cceeeeeeeccccccffc.cc22..4e
        e4............cccccccccccceffc.ccc222.4e
        e4.............cccccccccceef....ccc2224e
        e4...bbbbbb.bbb...fffffff........ccc2.4e
        e4..bb3dd33b333b..................cc224e
        e4..b3ddddd3bb33b..................cc24e
        e4..bdddddddddb3b.....................4e
        e4.bddddddddddb3b.....................4e
        e4.bdddddddb33b3b.....................4e
        e4.b3dddddddbb3b......................4e
        e4.b3ddddddd3bb.......................4e
        e4.b3ddddddd3b........................4e
        e4.b3dddddbd3b........................4e
        e4..b3ddbb33b.........................4e
        e4...b3d33bb..........................4e
        e4....b33b............................4e
        c4c....bb............................c4c
        cc444444444444444444444444444444444444cc
        ccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccc
        `],
    500,
    false
    )
    animation.runMovementAnimation(
    shinoDia,
    animation.animationPresets(animation.easeLeft),
    500,
    false
    )
}
info.onCountdownEnd(function () {
    mySprite6.vx = -80
    mySprite6.setFlag(SpriteFlag.GhostThroughSprites, false)
    characterAnimations.setCharacterAnimationsEnabled(mySprite6, true)
})
scene.onOverlapTile(SpriteKind.Hitbox, assets.tile`myTile14`, function (sprite, location) {
    gameOver()
})
scene.onHitWall(SpriteKind.Boss, function (sprite, location) {
    if (sprite.isHittingTile(CollisionDirection.Left)) {
        bossRunCount += 0.5
        sprite.x += 2
        sprite.vx = 80
    }
    if (sprite.isHittingTile(CollisionDirection.Right)) {
        sprite.vx = -80
        bossRunCount += 0.5
    }
})
function loadLevel () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Ninja)
    sprites.destroyAllSpritesOfKind(SpriteKind.Hitbox)
    sprites.destroyAllSpritesOfKind(SpriteKind.Red)
    sprites.destroyAllSpritesOfKind(SpriteKind.Yellow)
    sprites.destroyAllSpritesOfKind(SpriteKind.Green)
    sprites.destroyAllSpritesOfKind(SpriteKind.Boss)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    sprites.destroyAllSpritesOfKind(SpriteKind.EnemyProjectile)
    sprites.destroyAllSpritesOfKind(SpriteKind.BossProjectile)
    sprites.destroyAllSpritesOfKind(SpriteKind.Effect)
    sprites.destroyAllSpritesOfKind(SpriteKind.ScreenEffect)
    sprites.destroyAllSpritesOfKind(SpriteKind.StatusBar)
    if (level >= -1) {
        scroller.setLayerImage(scroller.BackgroundLayer.Layer0, img`
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            .................................................................................................................9999...........................................
            ............................................................................................................999999999999........................................
            ...........................................................................................................999999999999999......................................
            .......................................................................................................999999999999999999999....................................
            ....................................................................................................999999999999999999999999999.................................
            .................................................................................................99999999999999999999999999999999...............................
            ..............................................................................................999999999999999999999999999999999999..............................
            ...........................................................................................9999999999999999999999999999999999999999.............................
            .......................................................................................99999999999999999999999999999999999999999999999..........................
            ...................................................................................99999999999999999999999999999999999999999999999999999........................
            ...............................................................................99999999999999999999999999999999999999999999999dd9999999999......................
            ........................................................................999999999999999999999999999999999999999d999d9999ddddddddd999999999......................
            ....................................................................9999999999999999999999999999999999999dddd9ddddddddddddddddddddd9999999999...................
            .......99999.............................................999999999999999d9999999999999999999999999999999dddddddddddddddddddddddddd999999999999dd................
            .....9999999999................................999999999999999999999ddddd99999999999999999999999999999ddddddddddddddddddddddddddd999999dddddddddddddddd.........
            ...999999999999999.....................99999999999999ddddddddddddddddddddddddddddddddddddd99999999999ddddddddddddddddddddddddddddd99dddddddddddddddddddddd......
            dddd9dd99999ddd9999999.........9999999999999999ddddddddddddddddddddddddddddddddddddddddddddddd9999999ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd..
            ddddddddd99dddddd99999999999999999999999ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd999999ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddd999999999ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999999dddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd999999dddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9dddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            `)
        scroller.setLayerImage(scroller.BackgroundLayer.Layer1, img`
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            .................................................111.............................................................................111............................
            .....d11d.......................................11111................................d11d.......................................11111...........................
            ....111111.................................11..111111d..............................111111.................................11..111111d..........................
            ...1111111d...............................1111d11111111............................1111111d...............................1111d11111111.........................
            ...11111111d11...........................d1111111111111d...........................11111111d11...........................d1111111111111d........................
            ..1111111111111........................d11111111111111111d........................1111111111111........................d11111111111111111d......................
            1d1111111111111d.111...........................................................11d1111111111111d.111...........................................................1
            111111111111111111111.........................................................11111111111111111111111.........................................................11
            111111111111111111111.........................................................11111111111111111111111.........................................................11
            111111111111111111111111d...................................................d111111111111111111111111111d...................................................d111
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            `)
        scroller.setLayerImage(scroller.BackgroundLayer.Layer2, img`
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ...........................................................11111111.............................................................................................
            ......................................................1111111111111111..........................................................................................
            .................................................1111111111111111111111111......................................................................................
            ............................................b111111111111111111111111111111111..................................................................bbbb............
            .........................................b111111111111111111111111111111111b1111........................................................bbbbbbbbbbbbbbbb........
            ......................................b1111111111111111111111bbb11111111111111111111................................................bbbbbbbbbbbbbbbbbbbbbbb.....
            .......bbb..........................bb1111111111111111bbbbbb111bb111111111111111111111bbb........................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbb...bbbbbb...................bbb11111111b111bbb11bbbbbbbbb1bbbbbbbbb1111bb1111b111111111bb................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbb....b......bbbbbbbb1111bbb111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111b1111111bbbbbbbb.......................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbb.bbbbbbbbbbbbbbbbbbbbbbb11bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11bbbbbbbbbbbbbbbbbbbbbb.......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111111bbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc1111111111111111bbbbbb
            bbbbbbbb1b11bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccc111111111111111111111bbbbb
            bbbbb11111111111b11bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbaaaaa11111111111c11111111111111111111
            11111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbaaaaaaaaa11111111111c11111c111111aa11a11111a
            111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbb111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111aaaaaaaaaaa1111c111c11111111c1111aaaa11aa11111a
            1111111111111111111111111111bb1bbbbbbbbbbbbbbbcc1111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111111111aaaaaaaaaaaaa11111111a111c1111aaaa11aa111111a
            11111111111111111111111111111c1111111bbba111111111111111111111aa111111cbbbbbbbbbbbbbbbbbbbbbbbbb111111111111111111aa1aaaaaaaaa11111aaaaaa111111aaaaa11aaa11111aa
            111111111111111111111111111111cc111111aaaaaaaaa111111111111111aaaaaaa11111cbbbbbbbbbbbbbbbbbbbba111111cc11111111aaaaaaaaaaaaaaa1aaaaaaaa11c111aaaaa111aa11111aaa
            aa111111111111111111111111111111aaaa11aaaaaaaaaa11111aaaaaaaaaaaaaaaaaa111111aaaaabbbbbbaaaaaaaaaaaaaa111111aaaaaaaaaaaaaaaaaaaaaaaaaaa111111aaaaaaa1aaa11111aaa
            aaa111111111111111111111c111111111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1111aaaaaaaaaaaaaaaaaaaa
            aaaa11111111111111111111111111111111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1aaaaaaaaaaaaaaaaaaaaaa
            aaaaa1111111111111111111111111111c111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaa11a11111a1a1111aa1111111c111c11111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaa1aaa111aa1aa111aa111111111111aa111111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaa1111aa1aa11aaaaa111aaa11111aaaa1111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaa11aa11aa11aaaaaa111aaaaa11aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaa1aaa11aaaaaaa11aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaa1aaaa1aaaaaaaa11aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafafafafafafafafafafafafafafafafafafafaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafafafafafafafafafafafafffffffffffffffffffffffffffffffffffffffffafafafafafafafafafafafaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            afafafafafafafafafafafafafafafafafafafafafafafcfcfcfcfcfcfcfcfcfcfcfcfffffffffffffffffffffffffffffffffffffffcfcfcfcfcfcfcfcfcfcfcfcfafafafafafafafafafafafafafaf
            fcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcfcfcfcfcfcfcfcfcfcfcfcfc
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        scroller.scrollBackgroundWithSpeed(-20, 0, scroller.BackgroundLayer.Layer1)
        scroller.setCameraScrollingMultipliers(0.1, 0, scroller.BackgroundLayer.Layer0)
        scroller.setCameraScrollingMultipliers(0.25, 0, scroller.BackgroundLayer.Layer2)
        if (level >= 5) {
            scroller.setLayerImage(scroller.BackgroundLayer.Layer0, img`
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                .....................ddddddddddddd..............................................................................................................................
                .....................ddddddddddddd..............................................................................................................................
                ...................ddddddddddddddddd............................................................................................................................
                ...................ddddddddddddddddd............................................................................................................................
                .................ddddd11111111111ddddd..........................................................................................................................
                .................dddd1111111111111dddd..........................................................................................................................
                ...............ddddd111111111111111ddddd........................................................................................................................
                ...............dddd11111111111111111dddd........................................................................................................................
                ...............dddd11111111111111111dddd........................................................................................................................
                ...............dddd11111111111111111dddd........................................................................................................................
                ...............dddd11111111111111111dddd........................................................................................................................
                ...............dddd11111111111111111dddd........................................................................................................................
                ...............dddd11111111111111111dddd........................................................................................................................
                ...............dddd11111111111111111dddd........................................................................................................................
                ...............dddd11111111111111111dddd........................................................................................................................
                ...............ddddd1111111111111111dddd........................................................................................................................
                ...............ddddd111111111111111ddddd........................................................................................................................
                .................dddd1111111111111dddd..........................................................................................................................
                .................ddddd11111111111ddddd..........................................................................................................................
                ...................ddddddddddddddddd............................................................................................................................
                ...................ddddddddddddddddd............................................................................................................................
                .....................ddddddddddddd..............................................................................................................................
                .....................ddddddddddddd..............................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                `)
            scroller.setLayerImage(scroller.BackgroundLayer.Layer1, img`
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ......................1111..............................................................................1111....................................................
                .....................111111............................................................................111111...................................................
                .....................111111..11........................................................................111111..11...............................................
                ..................111111111.11111...................................................................111111111.11111.............................................
                .................1111111111111111..................................................................1111111111111111.............................................
                ................1111111111111111111...............................................................1111111111111111111...........................................
                ................11111111111111111111..............................................................11111111111111111111..........................................
                .................1111111111111111111...11..........................................................1111111111111111111...11.....................................
                .............11119111111111111111111..11111....................................................11119111111111111111111..11111...................................
                ............11111191111111111111111...11111...................................................11111191111111111111111...11111...................................
                ............11111111111111111111119111111111..................................................11111111111111111111119111111111..................................
                ............11111111111111111111111111111111..................................................11111111111111111111111111111111..................................
                .............1111111111111111111111111111111...................................................1111111111111111111111111111111..................................
                ..111....1111911111111111111111111111111111..11.............1111....................111....1111911111111111111111111111111111..11.............1111..............
                .11111..11111111111111111111111111111111111.1111...........111111..................11111..11111111111111111111111111111111111.1111...........111111.............
                .11111.111111111111111111111111111111111111.1111...........111111.111..............11111.111111111111111111111111111111111111.1111...........111111.111.........
                ..1111111111111111111111111111111111111111111111.............111111111..............1111111111111111111111111111111111111111111111.............111111111........
                .1111111111111111111111111111111111111111111111.........1111.111111111.............1111111111111111111111111111111111111111111111.........1111.111111111........
                111111111111111111111111111111111111111111111111.......11111111111111..........1..111111111111111111111111111111111111111111111111.......11111111111111.........
                1111111111111111111111111111111111111111111111111.111..111111111111111111.........1111111111111111111111111111111111111111111111111.111..111111111111111111.....
                11111111111111111111111111111111111111111111111111111111111111111111111111....111111111111111111111111111111111111111111111111111111111111111111111111111111....
                11111111111111111111111111111111111111111111111111111111111111111111111111...1111111111111111111111111111111111111111111111111111111111111111111111111111111....
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ........................................................................3.......................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                `)
            scroller.setLayerImage(scroller.BackgroundLayer.Layer2, img`
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ...........................................................................................dd...................................................................
                ...............................................................................ddd.........ddd..................................................................
                ...............................................................................ddd.........ddd..................................................................
                .............................................................................ddddddd......ddddd.................................................................
                .........................................ddddddddd...........................ddddddd......ddddd..........................................dddddddddd.............
                .........................................ddddddddd...........................ddddddd......ddddd..........................................dddddddddd.............
                ...................ddd...................d11dddddd...........................d11dddd.....ddddddd....................dd...................dd1d1ddddd.............
                ..................ddddd..................ddddddd1d...........................ddddddd.....ddddddd...................dddd..................dddddd11dd.............
                .................dddddd..................ddddddddd..........d........ddddd...d1ddddd.....ddddddd.................dddddd..................dddddddddd.............
                .................ddd1d......d............ddddddddd.........dd........ddddd...ddddddd.....ddddddd.................ddd1d......dd...........dddd1ddddd........dd...
                .................dddddd.....d............ddddddd1d.........dd........ddddd...ddddddd.....ddddddd.................dddddd.....dd...........ddddddd1dd........dd...
                ........ddd......dd11d.....ddd...........ddddddddd..dddddd.dd........ddddd...ddddddd.....ddddddd.........dd......ddd1d.....ddd...........dddddddddd.ddddddddd...
                d.dd....ddddddddddd1ddd...ddddd..........ddddddd1d..d11ddd.dd.........dd1dd..ddddddd...dddddddddd.dd....ddddddddddddd1d....dddd..........dddddd11dd.d11dddddd...
                dddd.....d1dd1ddddddddd...ddddd..........ddddddddd..dddd1d.dd........dddddd..dd1dddd...ddddddddddddd....dd1ddd1dddddddd....dddd..........dddddddddd.dddd1dddd...
                dd1d.....ddd1111ddddddd...ddddd..........ddddddddd..dddd1dddd........dddddd..ddddddd...ddddddddddd1d....dddd1d11ddddddd....dddd..........dddddddddd.dddd1dddd...
                dddd....dddddddddddddddd..dddddd..dd.dd.ddddddddddd.d11dddddd........dddddd..ddddddd...ddddddddddddd....dddddddddddddddd..dddddd...d..ddddddddddddd.d11dddddd...
                dd1d....dddddddddddddddd..dddddd..ddddddddddddddddd.ddddddddd..d..d..dddddd..ddddddd...ddddddddddd1d....dddddddddddddddd..dddddd...dddddddddddddddd.ddddddddd...
                ddddd.dd1d1ddddddddddddd..ddddddd.dddd11ddddddddddddd11ddddddddd.ddd..dd1dd..ddddddd...ddddddddddddddddddd1ddddddddddddd..ddddddd...d11dddddddddddddd11dddddd.dd
                dddddddddddddddddddddddddd1dddddd.dddddddddddddddddddddddddddddd.ddd.dddddd..ddddddd...dddddddddddddddddddddddddddddddddddddddddd.ddddddddddddddddddddddddddd.dd
                ddddddddddddddddddddddddddddddddd.dddddddddddddddddddddddddddddddddddddddddddddddddd...dddddddddddddddddddddddddddddddddddddddddd.dddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.dddddddddddddddddddddddddddddddddddddddddd.d1dddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.dddddddddddddddddddddddddddddddddddddddddd.dddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.dddddddddddddddddddddddddddddddddddddddddd.dddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddd.dddddddddddddddddddddddddddddddddddddddddd.ddddddddddddddddddddddddddd11d
                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11ddddddddddddddddddddd.dddddddddddddddddddddddddddddddddddddddddd.dddddddddddddddddddddddddddddd
                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1dddddddddddddd.ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1d
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11d
                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                `)
            scroller.setLayerImage(scroller.BackgroundLayer.Layer3, img`
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                .......................................................bb....................................................................................b.........bbb......
                ...........................................bbb.........bbb..................................................................................bb.........bbb......
                ...........................................bbb.........bbb..................................................................................bb.........bbb......
                .........................................bbbbbbb......bbbbb...............................................................................bbbbbbb.....bbbbb.....
                .....bbbbbbbbb...........................bbbbbbb......bbbbb..........................................bbbbbbbbbb...........................bbbbbbb.....bbbbb.....
                .....bbbbbbbbb...........................bbbbbbb......bbbbb..........................................bbbbbbbbbb...........................bbbbbbb.....bbbbb.....
                .....bddbbbbbb...........................bddbbbb.....bbbbbbb....................bb...................bbdbdbbbbb...........................bbbbbbb....bbbbbbbb...
                .....bbbbbbbdb...........................bbbbbbb.....bbbbbbb...................bbbb..................bbbbbbddbb...........................bbbbbbb....bbbbbbbb...
                .....bbbbbbbbb..........b........bbbbb...bdbbbbb.....bbbbbbb.................bbbbbb..................bbbbbbbbbb...................bbbb....bbbdbbb....bbbbbbbb...
                .....bbbbbbbbb.........bb........bbbbb...bbbbbbb.....bbbbbbb.................bbbdb......bb...........bbbbdbbbbb........bb.........bbbb....bbbdbbb....bbbbbbbb...
                .....bbbbbbbdb.........bb........bbbbb...bbbbbbb.....bbbbbbb.................bbbbbb.....bb...........bbbbbbbdbb........bb........bbbbbb...bbbbbbb....bbbbbbbb...
                .....bbbbbbbbb..bbbbbb.bb........bbbbb...bbbbbbb.....bbbbbbb.........bb......bbbdb.....bbb...........bbbbbbbbbb.bbbbbbbbb........bbbbbb...bbbdbbb....bbbbbbbb...
                .....bbbbbbbdb..bddbbb.bb.........bbdbb..bbbbbbb...bbbbbbbbbb.bb....bbbbbbbbbbbbbdb....bbbb..........bbbbbbddbb.bddbbbbbb........bbbbbbb..bbbbbbb..bbbbbbbbbbbbb
                .....bbbbbbbbb..bbbbdb.bb........bbbbbb..bbdbbbb...bbbbbbbbbbbbb....bbdbbbdbbbbbbbb....bbbb..........bbbbbbbbbb.bbbbdbbbb........bbbbbbb..bbbbdbb..bbbbbbbbbbbbb
                .....bbbbbbbbb..bbbbdbbbb........bbbbbb..bbbbbbb...bbbbbbbbbbbdb....bbbbdbddbbbbbbb....bbbb..........bbbbbbbbbb.bbbbdbbbb........bbbbbbb..bbbbbbb..bbbbbbbbbbbbb
                .bb.bbbbbbbbbbb.bddbbbbbb........bbbbbb..bbbbbbb...bbbbbbbbbbbbb....bbbbbbbbbbbbbbbb..bbbbbb...b..bbbbbbbbbbbbb.bddbbbbbb........bbbbbbb..bbbbbbb..bbbbbbbbbbbbb
                bbbbbbbbbbbbbbb.bbbbbbbbb..b..b..bbbbbb..bbbbbbb...bbbbbbbbbbbdb....bbbbbbbbbbbbbbbb..bbbbbb...bbbbbbbbbbbbbbbb.bbbbbbbbb.....b..bbbbbbb..bbbbbbb..bbbbbbbbbbbbb
                bbddbbbbbbbbbbbbbddddbbbbbbb.bbb..bbdbb..bbbbbbb...bbbbbbbbbbbbbbb.bbbdbbbbbbbbbbbbb..bbbbbbb...bddbbbbbbbbbbbbbbddbdbbbb.bb.bbb.bbbbbbb..bbbbbbb..bbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbb.bbb.bbbbbb..bbbbbbb...bbbbbbbbbbbbbbb.bbbbbbbbbbbbbbbbbbbbbbbbbb.bbbbbbbbbbbbbbbbbbbbbbbbbbb.bb.bbbbbbbbbbb..bbbbdbb..bbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...bbbbbbbbbbbbbbb.bbbbbbbbbbbbbbbbbbbbbbbbbb.bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..bbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.bbbbbbbbbbbbbbb.bbbbbbbbbbbbbbbbbbbbbbbbbb.bdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.bbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.bbbbbbbbbbbbbbb.bbbbbbbbbbbbbbbbbbbbbbbbbb.bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbb.bbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.bbbbbbbbbbbbbbb.bbbbbbbbbbbbbbbbbbbbbbbbbb.bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.bbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbb.bbbbbbbbbbbbbbb.bbbbbbbbbbbbbbbbbbbbbbbbbb.bbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbb.bbbbbbbbbbbbbbb.bbbbbbbbbbbbbbbbbbbbbbbbbb.bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbb.bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbfbfbfbfbfbfbfbfbfbfbfbfbf
                fcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfbfbfbfbfbfbfbfbfbfbfbfbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbfbfbfbfbfbfbfbfbfbfbfbfcfcfcfcfcfcfcfcfcfcfcfcfcfc
                ffffffffffffffffffffffffffffffffffffffffffffffcfcfcfcfcfcfcfcfcfcfcfbbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbfbbfcfcfcfcfcfcfcfcfcfcfcfffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfcfffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                `)
            scroller.setCameraScrollingMultipliers(0, 0, scroller.BackgroundLayer.Layer0)
            scroller.scrollBackgroundWithSpeed(-20, 0, scroller.BackgroundLayer.Layer1)
            scroller.setCameraScrollingMultipliers(0.1, 0, scroller.BackgroundLayer.Layer2)
            scroller.setCameraScrollingMultipliers(0.25, 0, scroller.BackgroundLayer.Layer3)
        }
    }
    if (level == -1) {
        tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level26`))
    } else if (level == 0) {
        tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level3`))
    } else if (level == 1) {
        tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level5`))
    } else if (level == 2) {
        tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level9`))
    } else if (level == 3) {
        tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level6`))
    } else if (level == 4) {
        tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level14`))
        timer.after(1, function () {
            animation.runImageAnimation(
            mySprite6,
            [img`
                . . . . . . . . . . . . 
                . . . . f f f . . . . . 
                . . . f c e e f . . . . 
                . . f c f 2 2 2 f . . . 
                . f f 2 1 f 1 f f . . . 
                f 2 f c c e e e f . . . 
                f 2 f f c c e f . . . . 
                . f f c f f f f . . . . 
                . f d d c e e f 3 . . . 
                . c d d f f f f 3 . . . 
                . . f f f f f f f f . . 
                . f 4 4 f . . f e e f . 
                `,img`
                . . . . . . . . . . . . 
                . . . . f f f . . . . . 
                . . . f c e e f . . . . 
                . . f c f 2 2 2 f . . . 
                . f f 2 1 f 1 f f . . . 
                f 2 f c c e e e f . . . 
                f 2 f f c c e f . . . . 
                . f f c f f f f . . . . 
                . f d d c e e f 3 . . . 
                . c d d f f f f 3 . . . 
                . . f f f f f f f f . . 
                . f 4 4 f . . f e e f . 
                `,img`
                . . . . . . . . . . . . 
                . . . . f f f . . . . . 
                . . . f c e e f . . . . 
                . . f c f 2 2 2 f . . . 
                . f f 2 1 f 1 f f . . . 
                f 2 f c c e e e f . . . 
                f 2 f f c c e f . . . . 
                . f f c f f f f . . . . 
                . f d d c e e f 3 . . . 
                . c d d f f f f 3 . . . 
                . . f f f f f f f f . . 
                . f 4 4 f . . f e e f . 
                `,img`
                . . . . . . . . . . . . 
                . . . . f f f . . . . . 
                . . . f c e e f . . . . 
                . . f c f 2 2 2 f . . . 
                . f f 2 1 f 1 f f . . . 
                f 2 f c c e e e f . . . 
                f 2 f f c c e f . . . . 
                . f f c f f f f . . . . 
                . f d d c e e f 3 . . . 
                . c d d f f f f 3 . . . 
                . . f f f f f f f f . . 
                . f 4 4 f . . f e e f . 
                `,img`
                . . . . . . . . . . . . 
                . . . . f f f . . . . . 
                . . . f c e e f . . . . 
                . . f c f 2 2 2 f . . . 
                . f f 2 1 f 1 f f . . . 
                f 2 f c c e e e f . . . 
                f 2 f f c c e f . . . . 
                . f f c f f f f . . . . 
                . f d d c e e f 3 . . . 
                . c d d f f f f 3 . . . 
                . . f f f f f f f f . . 
                . f 4 4 f . . f e e f . 
                `,img`
                . . . . . . . . . . . . 
                . . . . f f f . . . . . 
                . . . f c e e f . . . . 
                . . f c f 2 2 2 f . . . 
                . f f 2 1 f 1 f f . . . 
                f 2 f c c e e e f . . . 
                f 2 f f c c e f . . . . 
                . f f c f f f f . . . . 
                . f d d c e e f 3 . . . 
                . c d d f f f f 3 . . . 
                . . f f f f f f f f . . 
                . f 4 4 f . . f e e f . 
                `,img`
                . . . . . . . . . . . . 
                . . . . f f f . . . . . 
                . . . f c e e f . . . . 
                . . f c f 2 2 2 f . . . 
                . f f 2 1 f 1 f f . . . 
                f 2 f c c e e e f . . . 
                f 2 f f c c e f . . . . 
                . f f c f f f f . . . . 
                . f d d c e e f 3 . . . 
                . c d d f f f f 3 . . . 
                . . f f f f f f f f . . 
                . f 4 4 f . . f e e f . 
                `,img`
                . . . . . . . . . . . . 
                . . . . f f f . . . . . 
                . . . f c e e f . . . . 
                . . f c f 2 2 2 f . . . 
                . f f 2 1 f 1 f f . . . 
                f 2 f c c e e e f . . . 
                f 2 f f c c e f . . . . 
                . f f c f f f f . . . . 
                . f d d c e e f 3 . . . 
                . c d d f f f f 3 . . . 
                . . f f f f f f f f . . 
                . f 4 4 f . . f e e f . 
                `,img`
                . . . . . . . . . . . . 
                . . . . f f f . . . . . 
                . . . f c e e f . . . . 
                . . f c f 2 2 2 f . . . 
                . f f 2 1 f 1 f f . . . 
                f 2 f c c e e e f . . . 
                f 2 f f c c e f . . . . 
                . f f c f f f f . . . . 
                . f d d c e e f 3 . . . 
                . c d d f f f f 3 . . . 
                . . f f f f f f f f . . 
                . f 4 4 f . . f e e f . 
                `,img`
                . . . . . . . . . . . . 
                . . . . f f f . . . . . 
                . . . f c e e f . . . . 
                . . f c f 2 2 2 f . . . 
                . f f 2 1 f 1 f f . . . 
                f 2 f c c e e e f . . . 
                f 2 f f c c e f . . . . 
                . f f c f f f f . . . . 
                . f d d c e e f 3 . . . 
                . c d d f f f f 3 . . . 
                . . f f f f f f f f . . 
                . f 4 4 f . . f e e f . 
                `,img`
                . . . . . . . . . . . . 
                . . . . f f f . . . . . 
                . . . f c e e f . . . . 
                . . f c 2 2 2 2 f . . . 
                . f f 2 f f f f f . . . 
                f 2 f c c e e e f . . . 
                f 2 f f c c e f . . . . 
                . f f c f f f f . . . . 
                . f d d c e e f 3 . . . 
                . c d d f f f f 3 . . . 
                . . f f f f f f f f . . 
                . f 4 4 f . . f e e f . 
                `,img`
                . . . . . . . . . . . . 
                . . . . f f f . . . . . 
                . . . f c e e f . . . . 
                . . f c 2 2 2 2 f . . . 
                . f f 2 f f f f f . . . 
                f 2 f c c e e e f . . . 
                f 2 f f c c e f . . . . 
                . f f c f f f f . . . . 
                . f d d c e e f 3 . . . 
                . c d d f f f f 3 . . . 
                . . f f f f f f f f . . 
                . f 4 4 f . . f e e f . 
                `,img`
                . . . . . . . . . . . . 
                . . . . f f f . . . . . 
                . . . f c e e f . . . . 
                . . f c 2 2 2 2 f . . . 
                . f f 2 f f f f f . . . 
                f 2 f c c e e e f . . . 
                f 2 f f c c e f . . . . 
                . f f c f f f f . . . . 
                . f d d c e e f 3 . . . 
                . c d d f f f f 3 . . . 
                . . f f f f f f f f . . 
                . f 4 4 f . . f e e f . 
                `,img`
                . . . . . . . . . . . . 
                . . . . . f f f . . . . 
                . . . . f c e e f . . . 
                . . . f 2 2 2 2 2 f . . 
                . . . f c f f f f f . . 
                . . f f c c e e e f . . 
                . . f f f c c e f . . . 
                . . f f c f f f f . . . 
                . . d d c c e e f 3 d . 
                . . d d f f f f f 3 d . 
                . . f f f f f f f f . . 
                . f 4 4 f . . f e e f . 
                `,img`
                . . . . . . . . . . . . 
                . . . . f f f . . . . . 
                . . . f c e e f . . . . 
                . . f 2 2 2 2 2 f . . . 
                . . f f f e f f f . . . 
                . . f c e e e e f . . . 
                . . . f c c e f . . . . 
                . . f c f f f c f . . . 
                . d d c e e e c d d . . 
                . d d f c e c f d d . . 
                . . f f f f f f f f . . 
                . f 4 e f . . f e 4 f . 
                `,img`
                . . . . . . . . . . . . 
                . . . . f f f . . . . . 
                . . . f e e c f . . . . 
                . . f 2 2 2 2 2 f . . . 
                . . f f f f f c f . . . 
                . . f e e e c c f f . . 
                . . . f e c c f f f . . 
                . . . f f f f c f f . . 
                . d 3 f e e c c d d . . 
                . d 3 f f f f f d d . . 
                . . f f f f f f f f . . 
                . f e e f . . f 4 4 f . 
                `,img`
                . . . . . . . . . . . . 
                . . . . . f f f . . . . 
                . . . . f e e c f . . . 
                . . . f 2 2 2 2 c f . . 
                . . . f f f f f 2 f f . 
                . . . f e e e c c f 2 f 
                . . . . f e c c f f 2 f 
                . . . . f f f f c f f . 
                . . . 3 f e e c d d f . 
                . . . 3 f f f f d d c . 
                . . f f f f f f f f . . 
                . f e e f . . f 4 4 f . 
                `,img`
                . . . . . . . . . . . . 
                . . . . . f f f . . . . 
                . . . . f e e c f . . . 
                . . . f 2 2 2 2 c f . . 
                . . . f f f f f 2 f f . 
                . . . f e e e c c f 2 f 
                . . . . f e c c f f 2 f 
                . . . . f f f f c f f . 
                . . . 3 f e e c d d f . 
                . . . 3 f f f f d d c . 
                . . f f f f f f f f . . 
                . f e e f . . f 4 4 f . 
                `,img`
                . . . . . . . . . . . . 
                . . . . . f f f . . . . 
                . . . . f e e c f . . . 
                . . . f 2 2 2 f c f . . 
                . . . f f 1 f 1 2 f f . 
                . . . f e e e c c f 2 f 
                . . . . f e c c f f 2 f 
                . . . . f f f f c f f . 
                . . . 3 f e e c d d f . 
                . . . 3 f f f f d d c . 
                . . f f f f f f f f . . 
                . f e e f . . f 4 4 f . 
                `,img`
                . . . . . . . . . . . . 
                . . . . . f f f . . . . 
                . . . . f e e c f . . . 
                . . . f 2 2 2 f c f . . 
                . . . f f 1 f 1 2 f f . 
                . . . f e e e c c f 2 f 
                . . . . f e c c f f 2 f 
                . . . . f f f f c f f . 
                . . . 3 f e e c d d f . 
                . . . 3 f f f f d d c . 
                . . f f f f f f f f . . 
                . f e e f . . f 4 4 f . 
                `],
            100,
            false
            )
        })
        timer.after(750, function () {
            if (!(dialoguePlayed)) {
                startDialogue()
            }
            info.startCountdown(3)
        })
    } else if (level == 5) {
        statusbar.destroy()
        tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level11`))
    } else if (level == 6) {
        tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level18`))
    } else if (level == 7) {
        tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level20`))
    } else if (level == 8) {
        tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level34`))
    } else if (level == 9) {
        tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level37`))
    } else if (level == 10) {
        tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level40`))
    } else if (level == 11) {
        tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level31`))
        scroller.setLayerImage(scroller.BackgroundLayer.Layer0, img`
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            `)
        scroller.setLayerImage(scroller.BackgroundLayer.Layer1, img`
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            `)
        scroller.setLayerImage(scroller.BackgroundLayer.Layer2, img`
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            `)
        scroller.setLayerImage(scroller.BackgroundLayer.Layer3, img`
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            `)
        scroller.setLayerImage(scroller.BackgroundLayer.Layer4, img`
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            `)
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffff111f1fff1ff1ff1ff1fff1ff1ffff1ffff1ffffffff1fffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffff1ff1fffff1fffff1fff111f1fff1f1ff1f1f11fff11fff1ff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffff1ff11ff1ff1ff1ff1fff1ff11ff11fff11ff1f1f1f1ff1f1f11fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffff1ff1f1f1f1fff1f1ffff1ff1f1ff11fff11f1f1f111fff1ff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffff1111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff1ffffff1f11111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffff11111fffffffff1ffffffff1ffffff11ffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffff1111ffffffff1fffff11fffffff1ffffffff1fffff1ffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffff111ffff1ffffffff1fffff1fffffff1fffffffff1ffff1ffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffff111ffffffff1fffffff1fffff1fffffff1fffffffff1ffff1ffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffff11ffffffffffff11fffff1fffff1ffffffff1ffffffff1ffff1ffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffff111fffffffffffffff1fffff1ffffff1fffffff1ffffffff1ffff1fffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffff1ffffffffffffffffff1fffff1ffffff1fffffff1ffffffff1ffff1fffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffff1fffffffffffffffffff1fffff1ffffff111111111ffffffff1ffff1ffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffff1fffffffffffffffffff1fffff1fffffffffffffffffffffff1ffff1ffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffff1fffffffffffffffffff1ffffff1ffffffffffffffffffffff1ffff1ffffff1111ffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffff1fffffffffffff1111111ffffff1ffffffffffffffffffffff1ffff11fffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffff1fffffffffffff1ffffffffffff1fffffffffffffffffffff1fffff11fffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffff1ffffffffffffff1fffffffffff1fffffffffffffffffffff1fffff11fffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffff1f1111fffffffff1fffffffffff1fffffffffffffffffffff1fffff11fffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffff11fff1fffffffff1fffffffffff1fffffffffffffffffffff1fffff11fffff111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffff1fffffffff1fffffffffff1fffffffffffffffffffff1fffff11fffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffff1fffffffff1fffffffffff1fffffffffffffffffffff1fffff11fffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffff1fffffffff1fffffffffff1fffffffffffffffffffff1ffffff11fffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffff1fffffffff1fffffffffff1fffffffffffffffffffff1ffffff11fffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffff1ffffffff1fffffffffff1fffffffffffffffffffff1ffffff11fffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffff1ffffffff1fffffffffff1fffffffffffffffffffff1ffffff1ffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffff1ffffffff1fffffffffff1fffffffff1111111fffff1ffffff1ffffff1111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffff1ffffffff1fffffffffff1fffffffff1fffff1fffff1ffffff1ffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffff1ffffffff1fffffffffff1ffffffff11fffff1fffff1ffffff1ffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffff1fffffff1fffffffffff1ffffffff1fffff1ffffff1ffffff1ffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffff1fffffff1fffffffffff1fffffff11fffff1ffffff1fffff1fffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffff1fffffff1fffffffffff1fffffff1ffffff1ffffff1fffff1fffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffff1fffffff1fffffffffff1fffffff1ffffff1ffffff1fffff1ffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffff1fffffff1fffffffffff1fffffff1ffffff1ffffff1fffff1ffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffff1ffffff1ffffffffffff1fffffff1ffffff1f111111ffff1fffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffff1ffffff1ffffffffffff1fffffff1ffffff11ffffffffff1ffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffff1fffff11ffffffffffff111111111fffffffffffffffffff1fffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffff1111111fffffffffffffffffffffffffffffffffffffffff11ffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111ffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111fffffffffffffffffffffffffffffffffffffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fff111111111111fffffffffffffffffffffffffffffffffffff11ffffffff111fffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffff11111111111111111111ffffffffff1ffffffffffff1fffffffffffffffffffffffffffffffffffff11fffffffffffff11fffffffffffffffffffffffffffffffff
            ffff11111111111111111fffffff11fffffffffffffffffff111fffffff1ffffffffffff1111fffffffffffffffffffffffffffffffff1fffffffffffffffff1ffffffffffffffffffffffffffffffff
            fff11fffffffffffffff1fffffff1fffffffffffffffffffffff1ffffff1ffffffffffffffff111fffffffffffffffffffffffffffff1fffffffffffffffffff1fffffffffffffffffffffffffffffff
            fff1fffffffffffffffff1ffffff1fffffffffffffffffffffff1ffffff1fffffffffffffffffff111fffffffffffffffffffffffff1fffffffffffffffffffff1ffffffffffffffffffffffffffffff
            fff1ffffffffffffffffff1fffff1ffffffffffffffffffffffff1fffff1fffffffffffffffffffff1fffffffffffffffffffffffff111111111111111ffffffff1fffffffffffffffffffffffffffff
            fff1fffffffffffffffffff1ffff1ffffffffffffffffffffffff1fffff1fffffffffffffffffffff1ffffffffffffffffffffffff1ffffffffffffff11111fffff1ffffffffffffffffffffffffffff
            fff1fffffffffffffffffff1ffff1ffffffffffffffffffffffff1fffff1fffffffffffffffffffff1fffffffffffffffffffffff1fffffffffffffffffff11fffff1fffffffffffffffffffffffffff
            fff1fffff11111ffffffffff1fff1ffffffffffffffffffffffff1fffff1fffffffffffffffffffff1fffffffffffffffffffffff1ffffffffffffffffffff111ffff1ffffffffffffffffffffffffff
            ffff1ffff1ffff11111fffff1fff1fffffffffffffffffffffff1ffffff11111111ffffffffffffff1ffffffffffffffffffffff1111111111111111ffffffff1111f1ff1111ffffffffffffffffffff
            ffff1ffff1fffffffff11fff1fff1fffffffffffffffffffffff1ffffff11fffff1fffffffffffff11ffffffffffffffffffffff1fffffffffffffff111ffffffff111111ff1ffffffffffffffffffff
            ffff1ffff1ffffffffff1fff1fff1fffffffffffffffffffffff1fffffffffffff1ffff1ffffff11fffffffffffffffffffffff1f111ff1f11111ff1fff11fffffff111fffff1fffffffffffffffffff
            ffff1fff1fffffffffff1fff1fff1fffffffffffffffffffffff1ffffffffffff1fffff1111111fffffffffffffffffffffffff1f111ff1f11111ff1111ff11ffffff111ffff1fffffffffffffffffff
            ffff1fff1ffffffffff1ffff1ffff1fffffffffff1111111111f1ffffffffffff1fffff1fffffff1ffffffffffffffffffffff1f1111ffff11111ff111111ff11fffff1f1fff1fffffffffffffffffff
            ffff1fff11111111111fffff1ffff1ffffffffff1ffffffffff1fffffffffffff1fffff1ffffff1f1fffffffffffffffffffff1f11fff111fff111111111111ff1ffff1f1fff1fffffffffffffffffff
            ffff1fffffffffffffffffff1ffff1ffffffffff1ffffffffffffffffffffffff1ffffff1fffff1ff1ffffffffffffffffffff1f1f111fff111fff11ffff1111f1fff1ff1ff11fffffffffffffffffff
            ffff1ffffffffffffffffff11ffff1ffffffffff1ffffffffffffffffffffffff1ffffff1ffff1fff1fffff1f1f1ffffffffff1ff1fffffffff111ff1111ffffff11f1f1ff11ffffffffffffffffffff
            ffff1fffffffffffff11111ffffff1ffffffffff1ffffffffffffffffffffffff1ffffff1ffff1fff1fffff1f1f1fffffffffff11fffffffffffff11ffff1111111111f1f1ffffffffffffffffffffff
            fffff1fffffffffffff111fffffff1ffffffffff1ffffffffffffffffffffffff1ffffff1ffff1ffff1ffff1f1f1fffffffffff1ffffffffffffffff1fffffffff111ff1f1ffffffffffffffffffffff
            fffff1ffffffffffffffff1ffffff1ffffffffff1ffffffffffffffffffffffff1ffffff1ffff1ffff1ffff1f1f1fffffffffff1fffffffffffffffffffffffffff11ff1ff1fffffffffffffffffffff
            fffff1fffffffffffffffff11ffff1ffffffffff1ffffffffffffffffffffffff1ffffff1fff1fffff1ffff1f1f1fffffffffff1fffffffffffffffffffffffffff11ff1ff11ffffffffffffffffffff
            fffff1ffffffffffffffffff1ffff1ffffffffff1ffffffffffffffffffffffff1ffffff1fff1ff11ff1ffffffffffffffffffff1fffffffffffffffffffffffff1fffff1fff1fffffffffffffffffff
            fffff1ffffff111111fffffff1fff1ffffffffff1ffffffffffffffffffffffff1ffffff1fff1ff1f1f1fff1f1f1fffffffffffff1ffffffffffffffffffffffff1fffff111f1fffffffffffffffffff
            fffff1ffff11ffffff11fffff11fff1ffffffffff1fffffffffffffffffffffff1ffffff1fff1f1ff1f1ffffffffffffffffffffff1fffffffffffffffffffffff1fffffff11ffffffffffffffffffff
            fffff1fffff1ffffffff1fffff1fff1ffffffffff1fffffffffffffffffffffff1ffffff1ff1ff1ff1f1fffffffffffffffffffffff1fffffffffffffffffffff1ffffffffffffffffffffffffffffff
            fffff1ffff1fffffffff1fffff1fff1ffffffffff11111111111fffffffffffff1ffffff1ff1fff111ff1fffffffffffffffffffffff11ffffffffffffffffff111111ffffffffffffffffffffffffff
            fffff1ffff1fffffffff1fffff1fff1ffffffffffffffffffff1fffffffffffff1ffffff1ff1fffffffff1ffffffffffffffffffffffff11fffffffffffff111fffff11fffffffffffffffffffffffff
            fffff1ffff1fffffffff1fffff1fff1ffffffffffffffffffff1fffffffffffff1fffff1fff1fffffffff1ffffffffffffffffffffff11ff1111111111111fffffffff1fffffffffffffffffffffffff
            fffff1ffff1fffffffff1ffffff1ff1ffffffffffffffffffff1fffffffffffff1fffff1fff1fffffffff1fffffffffffffffffffff1fff11fffffffffffffffffffff1fffffffffffffffffffffffff
            fffff1ffff1fffffffff1ffffff1ff1ffffffffffffffffffff1fffffffffffff1fffff1ff1fffff1ffff1fffffffffffffffffff11ffff1ffffffffffffffffffffff1fffffffffffffffffffffffff
            fffff1ffff1ffffffff1fffffff1ff1ffffffffffffffffffff1fffffffffffff1fffff1ff1fffff111fff1fffffffffffffffff11ffff11fffffffffffff1fff11ffff1ffffffffffffffffffffffff
            fffff1ffff1ffffff11ffffffff1ff1ffffffffffffffffffff1fffffffffffff1fffff1f1ffffff1f1fff1fffffffffffffffff1fffff1ffffffffffffff1ff1ff1ffff11ffffffffffffffffffffff
            fffff1ffff1ffff11fffffffff1ffff1fffffffffffffffffff1fffffffffffff1fffff1f1ff11111f1fff1ffffffffffffff111ffffff1ffffffffffffff1f1ffff1ff1ff1fffffffffffffffffffff
            fffff1ffff1fff1ffffffffff11ffff1ffffffff11111111fff1fffffffffffff1fffff1f1111f11ff1fff1fffffffffffff11ffffffff1ffffffffffffff1f1ffff1f1ffff1ffffffffffffffffffff
            fffff1fffff111ffffffffff11fffff1ffffffff1fffffff11111ffffffffffff1fffff1ffffffffff1111fffffffffffff1ffffffffff1ffffffffffffff1f1ffff1f1ffff1ffffffffffffffffffff
            fffff1fffffffffffffffff11ffffff1fffffff1fffffffffffffffffffffffff1fffff1ffffffffff1ffffffffffffff111ffffffffff1ffffffffffffff1ff1fff11fffff1ffffffffffffffffffff
            fffff1ffffffffffffffff11fffffff1fffffff1fffffffffffffffffffffffff1fffff1ffffffffffffffffffffffff11ffff111111f1ffffffffffffff11ff1fff1fffff1fffffffffffffffffffff
            fffff1ffffffffffffff11fffffffff1fffffff1fffffffffffffffffffffffff1fffff1ffffffffffffffffffffffff1ffff11ffff111ffffffffffffff1fff1fff1ffff1ffffffffffffffffffffff
            fffff1fffffffffff1111ffffffffff1fffffff1fffffffffffffffffffffffff1fffff1ffffffffffffffffffffffff11fffffffffff1ffffffffffffff1fff1fffffff1111ffffffffffffffffffff
            fffff11ffff1111111fffffffffffff1fffffff1fffffffffffffffffffffffff1111111fffffffffffffffffffffffff1ffffff111f1ffffffffffffff1fff11fffffff1fff1fffffffffffffffffff
            ffffff111111fffffffffffffffffff1ffffffff11111111111111111111fffffffffffffffffffffffffffffffffffff1fff111fff11ffffffffffffff1fff1ffffffffffff1fffffffffffffffffff
            ffffffffffffffffffffffffffffffff11fffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffff1f11fffff11ffffffffffffff1ff1fffff111fffff1fffffffffffffffffff
            ffffffffffffffffffffffffffffffff11ffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffff11ffffff1fffffffffffffff1ff1ffff1fff1fff1ffffffffffffffffffff
            fffffffffffffffffffffffffffffffff1fffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffff1fffffff1fffffffffffffff1f1ffff11fff1fff1ffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffff1ffffffff1ffffffffffffff1f1fffffffff1fff1ffffffffffffffffffff
            ffffffffffffffffffffffffffffffff11fffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffff1fffffff111ffffffffffff1f1fffffff111ff1fffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff111ffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffff1fffff111111ffffffffff1ff1ffff111f1111fffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffff111fffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffff1fff111ffff111111111111ff11111ffff11ffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff1111ffffffffff1ffffffffffffffffffffffffffffffffffffffffffffff1ffff11ffffffffffffffff11fff1ffffff1fffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffff1111111111fffffffffffffffffffffffffffffffffffffffffffffff1ffff11fffffffffffffffff11fff111111ffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffff1111111111ffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11ffffffffffffffffffffffff1ffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff1ffffffffffffffff1ffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffff111fffffffffffff1ffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffff1111fffffffffff1fffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffff1fffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffff1ffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffff1fffffffffffff1ffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffff11ffffffffffff1ffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffff1ffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffff1fffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffff1fffffffffffff1fffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffff1fffffffffffff1fffffffffffffffffffffffffff
            `)
    }
    maxJumps = 1
    for (let value of tiles.getTilesByType(assets.tile`myTile6`)) {
        createPlayer()
        tiles.placeOnTile(ninjiHitbox, value)
        tiles.setTileAt(value, assets.tile`transparency8`)
        ninji.vx = 0
    }
    for (let value2 of tiles.getTilesByType(assets.tile`myTile7`)) {
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . 
            . . . . . f f f . . . . 
            . . . . f 4 4 2 f . . . 
            . . . f e e e e 2 f . . 
            . . . f f 1 f 1 e f f . 
            . . . f 4 4 4 2 2 f e f 
            . . . . f 4 2 2 f f e f 
            . . . . f f f f 2 f f . 
            . . . 3 f 4 4 2 d d f . 
            . . . 3 f f f f d d . . 
            . . f f f f f f f f . . 
            . f e e f . . f 4 4 f . 
            `, SpriteKind.Red)
        tiles.placeOnTile(mySprite2, value2)
        tiles.setTileAt(value2, assets.tile`transparency8`)
        characterAnimations.loopFrames(
        mySprite2,
        [img`
            . . . . . . . . . . . . 
            . . . . . f f f . . . . 
            . . . . f 4 4 2 f . . . 
            . . . f e e e e 2 f . . 
            . . . f f 1 f 1 e f f . 
            . . . f 4 4 4 2 2 f e f 
            . . . . f 4 2 2 f f e f 
            . . . . f f f f 2 f f . 
            . . . 3 f 4 4 2 d d f . 
            . . . 3 f f f f d d . . 
            . . f f f f f f f f . . 
            . f e e f . . f 4 4 f . 
            `],
        75,
        characterAnimations.rule(Predicate.HittingWallDown)
        )
        characterAnimations.loopFrames(
        mySprite2,
        [img`
            . . . . . f f f . . . . 
            . . . . f 4 4 2 f . . . 
            . . . f e e e e 2 f f . 
            . . . f f 1 f 1 e f e f 
            . . . f 4 4 4 2 2 f e f 
            . . 3 3 f 4 2 2 f d d . 
            . . 3 f f f f f 2 d d . 
            . . f f f 4 4 2 2 . . . 
            . f e e f f f f f . . . 
            . . . . . . f 4 f . . . 
            . . . . . . f 4 f . . . 
            . . . . . . . f . . . . 
            `,img`
            . . . . . f f f . . . . 
            . . . . f 4 4 2 f . . . 
            . . . f e e e e 2 f . . 
            . . . f f 1 f 1 e f e f 
            . . . f 4 4 4 2 2 f f e 
            . . 3 3 f 4 2 2 f d d . 
            . . 3 f f f f f 2 d d . 
            . . f f f 4 4 2 2 . . . 
            . f e e f f f f f . . . 
            . . . . . . f 4 f . . . 
            . . . . . . f 4 f . . . 
            . . . . . . . f . . . . 
            `],
        75,
        characterAnimations.rule(Predicate.MovingUp)
        )
        characterAnimations.loopFrames(
        mySprite2,
        [img`
            . . . . . f f f . . . . 
            . . . . f 4 4 2 f f e f 
            . . . f e e e e 2 f e f 
            . . . f f 1 f 1 e f f . 
            . . . f 4 4 4 2 2 f . . 
            . . 3 3 f 4 2 2 f d d . 
            . . 3 f f f f f 2 d d . 
            . . f f f 4 4 2 2 . . . 
            . f e e f f f f f . . . 
            . . . . . . f 4 f . . . 
            . . . . . . f 4 f . . . 
            . . . . . . . f . . . . 
            `,img`
            . . . . . f f f . . . . 
            . . . . f 4 4 2 f . f e 
            . . . f e e e e 2 f e f 
            . . . f f 1 f 1 e f f . 
            . . . f 4 4 4 2 2 f . . 
            . . 3 3 f 4 2 2 f d d . 
            . . 3 f f f f f 2 d d . 
            . . f f f 4 4 2 2 . . . 
            . f e e f f f f f . . . 
            . . . . . . f 4 f . . . 
            . . . . . . f 4 f . . . 
            . . . . . . . f . . . . 
            `],
        75,
        characterAnimations.rule(Predicate.MovingDown)
        )
    }
    for (let value3 of tiles.getTilesByType(assets.tile`myTile8`)) {
        mySprite3 = sprites.create(img`
            . . . . . . . . . . . . 
            . . . . . f f f . . . . 
            . . . . f 5 5 4 f . . . 
            . . . f e e e e 4 f . . 
            . . . f f 1 f 1 e f f . 
            . . . f 5 5 5 4 4 f e f 
            . . . . f 5 4 4 f f e f 
            . . . . f f f f 4 f f . 
            . . . 3 f 5 5 4 d d f . 
            . . . 3 f f f f d d . . 
            . . f f f f f f f f . . 
            . f e e f . . f 4 4 f . 
            `, SpriteKind.Yellow)
        tiles.placeOnTile(mySprite3, value3)
        tiles.setTileAt(value3, assets.tile`transparency8`)
    }
    for (let value4 of tiles.getTilesByType(assets.tile`myTile12`)) {
        mySprite4 = sprites.create(img`
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . f f 6 6 7 7 6 6 f f . 
            f c f c f c c f c f c f 
            . f f f f 6 6 f f f f . 
            . . . . f f f f . . . . 
            . . . . f 6 7 f . . . . 
            . . . . f 6 7 f . . . . 
            . . . . f 6 7 f . . . . 
            . . . . f 6 6 f . . . . 
            . . . . f f f f . . . . 
            `, SpriteKind.Green)
        tiles.placeOnTile(mySprite4, value4)
        tiles.setTileAt(value4, assets.tile`transparency8`)
    }
    for (let value42 of tiles.getTilesByType(assets.tile`myTile13`)) {
        sprites.destroyAllSpritesOfKind(SpriteKind.StatusBar)
        mySprite6 = sprites.create(img`
            . . . . . . . . . . . . 
            . . . . . f f f . b . . 
            . . . . f e e c f c b . 
            . . . f 2 2 2 f c f c . 
            . . . f f 1 f 1 2 f f . 
            . . . f e e e c c f 2 f 
            . . . . f e c c f f 2 f 
            . . . . f f f f c f f . 
            . . . 3 f e e c d d f . 
            . . . 3 f f f f d d c . 
            . . f f f f f f f f . . 
            . f e e f . . f 4 4 f . 
            `, SpriteKind.Boss)
        mySprite6.setFlag(SpriteFlag.GhostThroughSprites, true)
        tiles.placeOnTile(mySprite6, value42)
        tiles.setTileAt(value42, assets.tile`transparency8`)
        characterAnimations.loopFrames(
        mySprite6,
        [img`
            . . . . . . . . . . . . 
            . . . . . f f f . b . . 
            . . . . f e e c f c b . 
            . . . f 2 2 2 f c f c . 
            . . . f f 1 f 1 2 f f . 
            . . . f e e e c c f 2 f 
            . . . . f e c c f f 2 f 
            . . . . f f f f c f f . 
            . . . 3 f e e c d d f . 
            . . . 3 f f f f d d c . 
            . . f f f f f f f f . . 
            . f e e f . . f 4 4 f . 
            `,img`
            . . . . . . . . . . . . 
            . . . . . f f f . b . . 
            . . . . f e e c f c b . 
            . . . f 2 2 2 f c f c . 
            . . . f f 1 f 1 2 f f . 
            . . . f e e e c c f 2 f 
            . . . . f e c c f f 2 f 
            . . . . f f f f c f f . 
            . . . 3 f e e c d d f . 
            . . . 3 f f f f d d c . 
            . . f f f f f f f f . . 
            . f e e f . . f 4 4 f . 
            `,img`
            . . . . . . . . . . . . 
            . . . . . f f f . b . . 
            . . . . f e e c f c b . 
            . . . f 2 2 2 f c f c . 
            . . . f f 1 f 1 2 f f . 
            . . . f e e e c c f 2 f 
            . . . . f e c c f f 2 f 
            . . . . f f f f c f f . 
            . . . 3 f e e c d d f . 
            . . . 3 f f f f d d c . 
            . . f f f f f f f f . . 
            . f e e f . . f 4 4 f . 
            `,img`
            . . . . . . . . . . . . 
            . . . . . f f f . b . . 
            . . . . f e e c f c b . 
            . . . f 2 2 2 f c f c . 
            . . . f f f f f 2 f f . 
            . . . f e e e c c f 2 f 
            . . . . f e c c f f 2 f 
            . . . . f f f f c f f . 
            . . . 3 f e e c d d f . 
            . . . 3 f f f f d d c . 
            . . f f f f f f f f . . 
            . f e e f . . f 4 4 f . 
            `],
        350,
        characterAnimations.rule(Predicate.FacingLeft, Predicate.NotMoving, Predicate.HittingWallDown)
        )
        characterAnimations.loopFrames(
        mySprite6,
        [img`
            . . . . . . . . . . . . 
            . . b . f f f . . . . . 
            . b c f c e e f . . . . 
            . c f c f 2 2 2 f . . . 
            . f f 2 1 f 1 f f . . . 
            f 2 f c c e e e f . . . 
            f 2 f f c c e f . . . . 
            . f f c f f f f . . . . 
            . f d d c e e f 3 . . . 
            . c d d f f f f 3 . . . 
            . . f f f f f f f f . . 
            . f 4 4 f . . f e e f . 
            `,img`
            . . . . . . . . . . . . 
            . . b . f f f . . . . . 
            . b c f c e e f . . . . 
            . c f c f 2 2 2 f . . . 
            . f f 2 1 f 1 f f . . . 
            f 2 f c c e e e f . . . 
            f 2 f f c c e f . . . . 
            . f f c f f f f . . . . 
            . f d d c e e f 3 . . . 
            . c d d f f f f 3 . . . 
            . . f f f f f f f f . . 
            . f 4 4 f . . f e e f . 
            `,img`
            . . . . . . . . . . . . 
            . . b . f f f . . . . . 
            . b c f c e e f . . . . 
            . c f c f 2 2 2 f . . . 
            . f f 2 1 f 1 f f . . . 
            f 2 f c c e e e f . . . 
            f 2 f f c c e f . . . . 
            . f f c f f f f . . . . 
            . f d d c e e f 3 . . . 
            . c d d f f f f 3 . . . 
            . . f f f f f f f f . . 
            . f 4 4 f . . f e e f . 
            `,img`
            . . . . . . . . . . . . 
            . . b . f f f . . . . . 
            . b c f c e e f . . . . 
            . c f c f 2 2 2 f . . . 
            . f f 2 f f f f f . . . 
            f 2 f c c e e e f . . . 
            f 2 f f c c e f . . . . 
            . f f c f f f f . . . . 
            . f d d c e e f 3 . . . 
            . c d d f f f f 3 . . . 
            . . f f f f f f f f . . 
            . f 4 4 f . . f e e f . 
            `],
        350,
        characterAnimations.rule(Predicate.FacingRight, Predicate.NotMoving, Predicate.HittingWallDown)
        )
        characterAnimations.loopFrames(
        mySprite6,
        [img`
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . f f f . . . . . . 
            . . f e e c f . . . . . 
            . f 2 f 2 2 2 f f . . . 
            . f f 1 e c c f 2 2 f . 
            . f e e e c c f f f f . 
            . . f e c c f f f . . . 
            . . . f f f c f c d d . 
            . . . f f f e c c d d . 
            . . f e e f f f 4 4 f . 
            . f e e . . . . f f . . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f . . . . . . 
            . . f e e c f . . . . . 
            . f 2 f 2 2 2 f f . . . 
            . f f 1 e c c f 2 2 f . 
            . f e e e c c f f f . . 
            . . f e c c f f f . . . 
            . . . f f f c f c d d . 
            . . . f f e e c c d d . 
            . . . . . f f f f . . . 
            . . . . f e f 4 f . . . 
            . . . f e f 4 4 f . . . 
            `,img`
            . . . f f f . . . . . . 
            . . f e e c f . f . . . 
            . f 2 f 2 2 2 f f 2 f . 
            . f f 1 e c c f 2 f . . 
            . f e e e c c f f . . . 
            . . f e c c f f f f . . 
            . . . f f f c f c d d . 
            . . . f f e e c c d d . 
            . . f 4 f f f f f . . . 
            . . f 4 4 f f f f f . . 
            . . . f f . . f e e f . 
            . . . . . . f e e . . . 
            `],
        100,
        characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingLeft, Predicate.HittingWallDown)
        )
        characterAnimations.loopFrames(
        mySprite6,
        [img`
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . f f f . . . 
            . . . . . f c e e f . . 
            . . . f f 2 2 2 f 2 f . 
            . f 2 2 f c c e 1 f f . 
            . f f f f c c e e e f . 
            . . . f f f c c e f . . 
            . d d c f c f f f . . . 
            . d d c c e f f f . . . 
            . f 4 4 f f f e e f . . 
            . . f f . . . . e e f . 
            `,img`
            . . . . . . . . . . . . 
            . . . . . . f f f . . . 
            . . . . . f c e e f . . 
            . . . f f 2 2 2 f 2 f . 
            . f 2 2 f c c e 1 f f . 
            . . f f f c c e e e f . 
            . . . f f f c c e f . . 
            . d d c f c f f f . . . 
            . d d c c e e f f . . . 
            . . . f f f f . . . . . 
            . . . f 4 f e f . . . . 
            . . . f 4 4 f e f . . . 
            `,img`
            . . . . . . f f f . . . 
            . . . f . f c e e f . . 
            . f 2 f f 2 2 2 f 2 f . 
            . . f 2 f c c e 1 f f . 
            . . . f f c c e e e f . 
            . . f f f f c c e f . . 
            . d d c f c f f f . . . 
            . d d c c e e f f . . . 
            . . . f f f f f 4 f . . 
            . . f f f f f 4 4 f . . 
            . f e e f . . f f . . . 
            . . . e e f . . . . . . 
            `],
        100,
        characterAnimations.rule(Predicate.FacingRight, Predicate.MovingRight, Predicate.HittingWallDown)
        )
        characterAnimations.loopFrames(
        mySprite6,
        [img`
            . . . . . f f f . . . . 
            . . . . f e e c f . . . 
            . . . f 2 2 2 f c f f . 
            . . . f f 1 f 1 2 f 2 f 
            . . . f e e e c c f 2 f 
            . . 3 3 f e c c f d d . 
            . . 3 f f f f f c d d . 
            . . f f f e e c c . . . 
            . f e e f f f f f . . . 
            . . . . . . f 4 f . . . 
            . . . . . . f 4 f . . . 
            . . . . . . . f . . . . 
            `,img`
            . . . . . f f f . . . . 
            . . . . f e e c f . . . 
            . . . f 2 2 2 f c f . . 
            . . . f f 1 f 1 2 f 2 f 
            . . . f e e e c c f f 2 
            . . 3 3 f e c c f d d . 
            . . 3 f f f f f c d d . 
            . . f f f e e c c . . . 
            . f e e f f f f f . . . 
            . . . . . . f 4 f . . . 
            . . . . . . f 4 f . . . 
            . . . . . . . f . . . . 
            `],
        75,
        characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingUp)
        )
        characterAnimations.loopFrames(
        mySprite6,
        [img`
            . . . . f f f . . . . . 
            . . . f c e e f . . . . 
            . f f c f 2 2 2 f . . . 
            f 2 f 2 1 f 1 f f . . . 
            f 2 f c c e e e f . . . 
            . d d f c c e f 3 3 . . 
            . d d c f f f f f 3 . . 
            . . . c c e e f f f . . 
            . . . f f f f f e e f . 
            . . . f 4 f . . . . . . 
            . . . f 4 f . . . . . . 
            . . . . f . . . . . . . 
            `,img`
            . . . . f f f . . . . . 
            . . . f c e e f . . . . 
            . . f c f 2 2 2 f . . . 
            f 2 f 2 1 f 1 f f . . . 
            2 f f c c e e e f . . . 
            . d d f c c e f 3 3 . . 
            . d d c f f f f f 3 . . 
            . . . c c e e f f f . . 
            . . . f f f f f e e f . 
            . . . f 4 f . . . . . . 
            . . . f 4 f . . . . . . 
            . . . . f . . . . . . . 
            `],
        75,
        characterAnimations.rule(Predicate.FacingRight, Predicate.MovingUp)
        )
        statusbar = statusbars.create(80, 4, StatusBarKind.EnemyHealth)
        statusbar.positionDirection(CollisionDirection.Bottom)
        statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        statusbar.max = 20
        statusbar.setColor(2, 12, 14)
        statusbar.setBarBorder(1, 15)
        characterAnimations.setCharacterAnimationsEnabled(mySprite6, false)
    }
    for (let value5 of sprites.allOfKind(SpriteKind.Red)) {
        value5.ay = 600
    }
    for (let value52 of sprites.allOfKind(SpriteKind.Yellow)) {
        value52.ay = 600
    }
    for (let value522 of sprites.allOfKind(SpriteKind.Boss)) {
        value522.ay = 600
    }
    mySprite9 = sprites.create(img`
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.fff.f...
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.f.f..
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.ffffff.f.f...
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.f.ffff.f..
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.fff.f...
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.f.f..
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.ffffff.f.f...
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.f.ffff.f..
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.fff.f...
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.f.f..
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.ffffff.f.f...
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.f.ffff.f..
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.fff.f...
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.f.f..
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.ffffff.f.f...
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.f.ffff.f..
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.fff.f...
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.f.f..
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.ffffff.f.f...
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.f.ffff.f..
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.fff.f...
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.f.f..
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.ffffff.f.f...
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.f.ffff.f..
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.fff.f...
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.f.f..
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.ffffff.f.f...
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.f.ffff.f..
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.fff.f...
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.f.f..
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.ffffff.f.f...
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.f.ffff.f..
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.fff.f...
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.f.f..
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.ffffff.f.f...
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.f.ffff.f..
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.fff.f...
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.f.f..
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.ffffff.f.f...
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.f.ffff.f..
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.fff.f...
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.f.f..
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.ffffff.f.f...
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.f.ffff.f..
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.fff.f...
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.f.f..
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.ffffff.f.f...
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.f.ffff.f..
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.fff.f...
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.f.f..
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.ffffff.f.f...
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.f.ffff.f..
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.fff.f...
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.f.f..
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.ffffff.f.f...
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.f.ffff.f..
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.fff.f...
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.f.f..
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.ffffff.f.f...
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.f.ffff.f..
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.fff.f...
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.f.f..
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.ffffff.f.f...
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.f.ffff.f..
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.fff.f...
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.f.f..
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.ffffff.f.f...
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.f.ffff.f..
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.fff.f...
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.f.f..
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.ffffff.f.f...
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.f.ffff.f..
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.fff.f...
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.f.f..
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.ffffff.f.f...
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.f.ffff.f..
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.fff.f...
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.f.f..
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.ffffff.f.f...
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.f.ffff.f..
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.fff.f...
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.f.f..
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.ffffff.f.f...
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.f.ffff.f..
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.fff.f...
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.f.f..
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.ffffff.f.f...
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.f.ffff.f..
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.fff.f...
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.f.f..
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.ffffff.f.f...
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.f.ffff.f..
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.fff.f...
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.f.f..
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.ffffff.f.f...
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.f.ffff.f..
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.fff.f...
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.f.f..
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.ffffff.f.f...
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.f.ffff.f..
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.fff.f...
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.f.f..
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.ffffff.f.f...
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.f.ffff.f..
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.fff.f...
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.f.f..
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.ffffff.f.f...
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.f.ffff.f..
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.fff.f...
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.f.f..
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.ffffff.f.f...
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.f.ffff.f..
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.fff.f...
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.f.f..
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.ffffff.f.f...
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.f.ffff.f..
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.fff.f...
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.f.f..
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.ffffff.f.f...
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.f.ffff.f..
        `, SpriteKind.ScreenEffect)
    mySprite9.setFlag(SpriteFlag.RelativeToCamera, true)
    mySprite9.ax = -450
    mySprite9.startEffect(effects.ashes)
    timer.after(1000, function () {
        mySprite9.destroy()
    })
}
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    characterAnimations.setCharacterAnimationsEnabled(mySprite6, false)
    mySprite6.setVelocity(0, 0)
    mySprite6.setFlag(SpriteFlag.GhostThroughSprites, true)
    projectile5.setFlag(SpriteFlag.GhostThroughSprites, true)
    animation.runImageAnimation(
    mySprite6,
    [img`
        . . . . . f f f . . . . 
        . . . . f e e c f . . . 
        . . . f 2 2 e e c f . . 
        . . . f f f 2 2 c f f . 
        . . . f e e f f 2 f 2 f 
        . . . . f e c c f 2 f . 
        . . 3 3 f f f f f f . . 
        . f f f e e c f f d d . 
        f e e f c c f . . d d . 
        . . . . f f 4 f . . . . 
        . . . . . f 4 4 f . . . 
        . . . . . . f 4 f . . . 
        `],
    100,
    true
    )
    timer.after(1500, function () {
        mySprite6.setVelocity(50, -120)
        mySprite6.destroy(effects.disintegrate, 5000)
        timer.after(3000, function () {
            bossLevelBeat()
            sprites.destroyAllSpritesOfKind(SpriteKind.Red)
            sprites.destroyAllSpritesOfKind(SpriteKind.Yellow)
            sprites.destroyAllSpritesOfKind(SpriteKind.Green)
            sprites.destroyAllSpritesOfKind(SpriteKind.Boss)
            sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
        })
    })
})
function ninjiDia3 () {
    ninjiDia.x = -76
    animation.runImageAnimation(
    ninjiDia,
    [img`
        cccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccc
        ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
        cbc..................................cbc
        ab....................................ba
        ab...........ffccbbbbb................ba
        ab.........cffcbbbbbbbbb..............ba
        ab........cffccbbbbbbbbbc.............ba
        ab.......cffcbbbbbbbbbbbcf............ba
        ab......cfffcbbbbbbbbbbbcff...........ba
        ab....222222222222222222bcff..........ba
        ab..22222222eeeeeeeeee22222e..........ba
        ab..222e22eeeeeeeeeeeeee2222e.........ba
        ab.222eeeeeebdddddfffdeeeee2ef........ba
        ab222eeeeebbbddddddfffddddfeef........ba
        ab222effbbbbb111111cccdddffccf........ba
        ab222effcbbbbb111111ccc11ccdbf........ba
        ab.22effccbbbbbb11111cc1cc11bf........ba
        ab.2eecfcccbbbbbbbbbbbbbbbbbbc........ba
        ab.2eecfccccbbbbbbbbbbbbbbbbc.........ba
        ab.2eeecffccccbbbbbbbbbbbbbcc.........ba
        ab.22eeecffcccccbbbbbbbbbbcc..........ba
        ab..22ee.cffccccccbbbbbbbcc...........ba
        ab.222eee.cffbcccccccccccc............ba
        ab222eee....fbbcccccccccc.............ba
        ab.2eee........fffffff.....bbb........ba
        ab22ee..................bbbdddb.......ba
        ab2ee..................bb3dddddbb.....ba
        ab....................bb3ddddddddb....ba
        ab...................b3bdddd3dddddb...ba
        ab...................b33bdd3dddddddb..ba
        ab....................b3bd3dddddddd3b.ba
        ab.....................b3b3dddddddd3b.ba
        ab......................b3bdddddb33b..ba
        ab.......................b3bbddd3bb...ba
        ab.......................bb.bddd33b...ba
        ab...........................b333b....ba
        ab............................bbb.....ba
        cbc..................................cbc
        ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
        cccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccc
        `],
    500,
    false
    )
    animation.runMovementAnimation(
    ninjiDia,
    animation.animationPresets(animation.easeRight),
    500,
    false
    )
}
sprites.onOverlap(SpriteKind.Hitbox, SpriteKind.EnemyProjectile, function (sprite, otherSprite) {
    gameOver()
    scene.cameraShake(4, 500)
    sprite.setFlag(SpriteFlag.GhostThroughSprites, true)
    timer.after(1500, function () {
        sprite.setFlag(SpriteFlag.GhostThroughSprites, false)
    })
})
function gameOver () {
    ninji.setFlag(SpriteFlag.Ghost, true)
    gameOverCheck = true
    characterAnimations.setCharacterAnimationsEnabled(ninji, false)
    animation.runImageAnimation(
    ninji,
    [img`
        . . . . f f f . . . . . 
        . . . f c b b f . . . . 
        . . f c b b 2 2 f . . . 
        . f f c 2 2 f f f . . . 
        f 2 f 2 f f b b f . . . 
        . f 2 f c c b f . . . . 
        . . f f f f f f 3 3 . . 
        . d d f f c b b f f f . 
        . d d . . f c c f e e f 
        . . . . f 4 f f . . . . 
        . . . f 4 4 f . . . . . 
        . . . f 4 f . . . . . . 
        `],
    350,
    false
    )
    bossRunCount = 0
    info.changeLifeBy(-1)
    sprites.destroyAllSpritesOfKind(SpriteKind.Ninja)
    sprites.destroyAllSpritesOfKind(SpriteKind.Hitbox)
    sprites.destroyAllSpritesOfKind(SpriteKind.Camera)
    sprites.destroyAllSpritesOfKind(SpriteKind.Red)
    sprites.destroyAllSpritesOfKind(SpriteKind.Yellow)
    sprites.destroyAllSpritesOfKind(SpriteKind.Green)
    sprites.destroyAllSpritesOfKind(SpriteKind.Boss)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    sprites.destroyAllSpritesOfKind(SpriteKind.EnemyProjectile)
    sprites.destroyAllSpritesOfKind(SpriteKind.BossProjectile)
    pause(100)
    color.startFade(color.Black, color.originalPalette, 500)
    characterAnimations.setCharacterAnimationsEnabled(ninji, true)
    loadLevel()
    timer.after(3000, function () {
        gameOverCheck = false
    })
}
controller.combos.attachCombo("d d u u a", function () {
    showBossRunCount = true
})
function animateDevText () {
    color.startFade(color.Black, color.originalPalette)
    textSprite2 = textsprite.create("Developed by IMakeCode")
    textSprite2.setPosition(80, 60)
    devTextFx = sprites.create(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `, SpriteKind.Effect)
    timer.after(2000, function () {
        animation.runImageAnimation(
        devTextFx,
        [img`
            ...................................................................................................................................................bb...........
            ...................................................................................................................................................11...........
            .................................................................................................................................................1111.1.........
            .................................................................................................................................................111111.........
            .................................................................................................................................................11.111.........
            ...................................................................................................................................................111..........
            ...................................................................................................................................................11...........
            ................................................................................................................................................................
            ................................................................................................................................................................
            ...........11...................................................................................................................................................
            ..........111...................................................................................................................................................
            .........111.11.................................................................................................................................................
            .........111111.................................................................................................................................................
            .........1.1111.................................................................................................................................................
            ...........11...................................................................................................................................................
            ...........bb...................................................................................................................................................
            `,img`
            ...................................................................................................................................................bb...........
            ...................................................................................................................................................bb...........
            ...................................................................................................................................................bb...........
            ...................................................................................................................................................11...........
            ..................................................................................................................................................1111..........
            ..................................................................................................................................................111...........
            ...................................................................................................................................................1............
            ................................................................................................................................................................
            ................................................................................................................................................................
            ............1...................................................................................................................................................
            ...........111..................................................................................................................................................
            ..........1111..................................................................................................................................................
            ...........11...................................................................................................................................................
            ...........bb...................................................................................................................................................
            ...........bb...................................................................................................................................................
            ...........bb...................................................................................................................................................
            `,img`
            ...................................................................................................................................................bb...........
            ...................................................................................................................................................bb...........
            ...................................................................................................................................................bb...........
            ...................................................................................................................................................bb...........
            ...................................................................................................................................................11...........
            .................................................................................................................................................1111.1.........
            ...........11....................................................................................................................................111111.........
            ..........111....................................................................................................................................11.111.........
            .........111.11....................................................................................................................................111..........
            .........111111....................................................................................................................................11...........
            .........1.1111.................................................................................................................................................
            ...........11...................................................................................................................................................
            ...........bb...................................................................................................................................................
            ...........bb...................................................................................................................................................
            ...........bb...................................................................................................................................................
            ...........bb...................................................................................................................................................
            `,img`
            ...................................................................................................................................................bb...........
            ...................................................................................................................................................bb...........
            ...................................................................................................................................................bb...........
            ...................................................................................................................................................bb...........
            ...................................................................................................................................................bb...........
            ...................................................................................................................................................bb...........
            ............1......................................................................................................................................11...........
            ...........111....................................................................................................................................1111..........
            ..........1111....................................................................................................................................111...........
            ...........11......................................................................................................................................1............
            ...........bb...................................................................................................................................................
            ...........bb...................................................................................................................................................
            ...........bb...................................................................................................................................................
            ...........bb...................................................................................................................................................
            ...........bb...................................................................................................................................................
            ...........bb...................................................................................................................................................
            `,img`
            ...................................................................................................................................................bb...........
            ...................................................................................................................................................bb...........
            ...........11......................................................................................................................................bb...........
            ..........111......................................................................................................................................bb...........
            .........111.11....................................................................................................................................bb...........
            .........111111....................................................................................................................................bb...........
            .........1.1111....................................................................................................................................bb...........
            ...........11......................................................................................................................................bb...........
            ...........bb......................................................................................................................................11...........
            ...........bb....................................................................................................................................1111.1.........
            ...........bb....................................................................................................................................111111.........
            ...........bb....................................................................................................................................11.111.........
            ...........bb......................................................................................................................................111..........
            ...........bb......................................................................................................................................11...........
            ...........bb...................................................................................................................................................
            ...........bb...................................................................................................................................................
            `,img`
            ...................................................................................................................................................bb...........
            ...................................................................................................................................................bb...........
            ............1......................................................................................................................................bb...........
            ...........111.....................................................................................................................................bb...........
            ..........1111.....................................................................................................................................bb...........
            ...........11......................................................................................................................................bb...........
            ...........bb......................................................................................................................................bb...........
            ...........bb......................................................................................................................................bb...........
            ...........bb......................................................................................................................................bb...........
            ...........bb......................................................................................................................................bb...........
            ...........bb......................................................................................................................................11...........
            ...........bb.....................................................................................................................................1111..........
            ...........bb.....................................................................................................................................111...........
            ...........bb......................................................................................................................................1............
            ...........bb...................................................................................................................................................
            ...........bb...................................................................................................................................................
            `,img`
            ...........bb......................................................................................................................................bb...........
            ...........bb......................................................................................................................................bb...........
            ...........bb......................................................................................................................................bb...........
            ...........bb......................................................................................................................................bb...........
            ...........bb......................................................................................................................................bb...........
            ...........bb......................................................................................................................................bb...........
            ...........bb......................................................................................................................................bb...........
            ...........bb......................................................................................................................................bb...........
            ...........bb......................................................................................................................................bb...........
            ...........bb......................................................................................................................................bb...........
            ...........bb......................................................................................................................................bb...........
            ...........bb......................................................................................................................................bb...........
            ...........bb......................................................................................................................................bb...........
            ...........bb......................................................................................................................................bb...........
            ...........bb......................................................................................................................................bb...........
            ...........bb......................................................................................................................................bb...........
            `],
        100,
        false
        )
    })
    color.pauseUntilFadeDone()
    music.baDing.play()
    timer.after(3000, function () {
        color.startFade(color.originalPalette, color.Black, 500)
        color.pauseUntilFadeDone()
        devTextFx.destroy()
        textSprite2.destroy()
        timer.after(1000, function () {
            color.startFadeFromCurrent(color.originalPalette, 500)
            scroller.setLayerImage(scroller.BackgroundLayer.Layer0, img`
                ................................................................................................................................................................................................................................................
                ................................................................................................................................................................................................................................................
                ................................................................................................................................................................................................................................................
                ................................................................................................................................................................................................................................................
                ................................................................................................................................................................................................................................................
                ..........................11dddbbb..............................................................................................................................................................................................................
                ..........................11ddb.................................................................................................................................................................................................................
                ................................................................................................................................................................................................................................................
                ................................................................................................................................................................................................................................................
                ....11dddbbb....................................................................................................................................................................................................................................
                ....11ddb.......................................................................................................................................................................................................................................
                ................................................................................................................................11dddbbb........................................................................................................
                ................................................................................................................................11ddb...........................................................................................................
                ................................................................................................................................................................................................................................................
                ....................................................................................................................11dddbbb................................................................................................11dddbbb............
                ....................................................................................................................11ddb...................................................................................................11ddb...............
                ................................................................................................................................................................................................................................................
                ................................................................................................................................................................................................................................................
                .........................................................................................................................................................................11dddbbb...............................................................
                ....................................................................................................................................11dddbbb.............................11ddb..................................................................
                ....................................................................................................................................11ddb.......................................................................................................
                ................................................................................................................................................................................................................................................
                ................................................................................................................................................................................................................................................
                ...................11dddbbb..........................................................................................................................................................................11dddbbb...................................
                ...................11ddb...................................................................................11dddbbb..................................................................................11ddb......................................
                ...........................................................................................................11ddb................................................................................................................................
                ................................................................................................................................................................................................................................................
                ....................................................................................11dddbbb....................................................................................................................................................
                ....................................................................................11ddb.......................................................................................................................................................
                ................................................................................................................................................................................................................................................
                ................................................................................................................................................................................................................................................
                ................................................................................................................................................................................................................................................
                ................................................................................................................................................................................................................................................
                ................................................................................................................................................................................................................................................
                ................................................................................................................................................................................................................................................
                ...............................................................11dddbbb..............................................................................................................11dddbbb...................................................
                ...............................................................11ddb.................................................................................................................11ddb......................................................
                ................................................................................................................................................................................................................................................
                ...................................................11dddbbb.....................................................................................................................................................................................
                ...................................................11ddb........................................................................................................................................................................................
                ................................................................................................................................................................................................................................................
                ............................11dddbbb...........................................................................................................................................................................................11dddbbb.........
                ............................11ddb..............................................................................................................................................................................................11ddb............
                ................................................................................................................................................................11dddbbb........................................................................
                ................................................................................................................................................................11ddb...........................................................................
                ................................................................................................................................................................................................................................................
                ....................................................................................................................................................11dddbbb....................................................................................
                ....................................................................................................................................................11ddb.......................................................................................
                ................................................................................................................................................................................................................................................
                ................................................................................................................................................................................................................................................
                ..............................................................................................................................................................................11dddbbb..........................................................
                ...................11dddbbb...................................................................................................................................................11ddb.............................................................
                ...................11ddb........................................................................................................................................................................................................................
                ................................................................................................................................................................................................................................................
                ................................................................................................................................................................................................................................................
                ................................................................................................................................................................................................................................................
                ................................................................................................................................................................................................................................................
                ................................................................................................................................................................................................................................................
                ....................................................................................11dddbbb.......................11dddbbb..............................11dddbbb...............................................................................
                ....................................................................................11ddb..........................11ddb.................................11ddb..................................................................................
                ................................11dddbbb........................................................................................................................................................................................................
                ................................11ddb........................................................................................................11dddbbb......................................................11dddbbb.............................
                .............................................................................................................................................11ddb.........................................................11ddb................................
                ................................................................................................................................................................................................................................................
                ................................................................................................................................................................................................................................................
                ................................................................................................................................................................................................................................................
                ................................................................................................................................................................................................................................................
                ................................................................................................................................................................................................................................................
                ................................................................................................................................................................................................................................................
                ................................................................................................................................................................................................................................................
                ................................................................................................................................................................................................................................................
                ................................................................................................................................................................................................................................................
                ................................................................................................................................................................................................................................................
                ................................................................................................................................................................................................................................................
                ................................................................................................................................................................................................................................................
                ................................................................................................................................................................................................................................................
                ................................................................................................................................................................................................................................................
                ........................................................................................11dddbbb................................................................................................................................................
                ..................................................................11dddbbb..............11ddb...................................................................................................................................................
                ..................................................................11ddb.........................................................................................................................................................................
                ...............................................................................................................................................................................11dddbbb.........................................................
                ...............................................................................................................................................................................11ddb............................................................
                ................................................................................................................................................................................................................................................
                .......................................................................................................................................................................................................11dddbbb.................................
                .......................................................................................................................................................................................................11ddb....................................
                ................................................................................................................................................................................................................................................
                ................................................................................................................................................................................................................................................
                ................................................................................................................................................................................................................................................
                .........................................................11dddbbb...............................................................................................................................................................................
                .........................................................11ddb..................................................................................................................................................................................
                ................................................................................................................................................................................................................................................
                ................................................................................................................................................................................................................................................
                ................................................................................................................................................................................................................................................
                ................................................................................................................................................................................................................................................
                ................................................................................................................................................................................................................................................
                ..........................................................................................................................11dddbbb..............................................................................................................
                ..........................................................................................................................11ddb.................................................................................................................
                ................................................................................................................................................................................................................................................
                .................................................................................................................................................................................................................11dddbbb.......................
                .............................................................................................................................................................11dddbbb............................................11ddb..........................
                ......................11dddbbb...............................................................................................................................11ddb..............................................................................
                ......................11ddb.....................................................................................................................................................................................................................
                ................................................................................................................................................................................................................................................
                .....................................................................................11dddbbb...................................................................................................................................................
                .....................................................................................11ddb......................................................................................................................................................
                ......................................11dddbbb..................................................................................................................................................................................................
                ......................................11ddb..........................................................................................................................................11dddbbb...................................................
                .....................................................................................................................................................................................11ddb......................................................
                .....................................................................................................11dddbbb...................................................................................................................................
                .....................................................................................................11ddb......................................................................................................................................
                .............11dddbbb...........................................................................................................................................................................................................................
                .............11ddb..............................................................................................................................................................................................................................
                ................................................................................................................................................................................................................................................
                ............................................................................11dddbbb............................................................................................................................................................
                ............................................................................11ddb...............................................................................................................................................................
                ................................................................................................................................................................................................................................................
                .....................................................11dddbbb...................................................................................................................................................................................
                .....................................................11ddb......................................................................................................................................................................................
                ................................................................................................................................................................................................................................................
                ................................................................................................................................................................................................................................................
                `)
            scroller.scrollBackgroundWithSpeed(-200, 0, scroller.BackgroundLayer.Layer0)
            timer.after(500, function () {
                animateTitleScreen()
            })
        })
    })
}
scene.onOverlapTile(SpriteKind.Hitbox, assets.tile`myTile10`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency8`)
    if (level == -1) {
        game.splash("Tutorial Beat!", "Level Code:0.001")
    } else if (level == 0) {
        game.splash("Level 1 Beat!", "Level Code:0.111")
    } else if (level == 1) {
        game.splash("Level 2 Beat!", "Level Code:0.121")
    } else if (level == 2) {
        game.splash("Level 3 Beat!", "Level Code:0.131")
    } else if (level == 3) {
        game.splash("Level 4 Beat!", "Level Code:0.12421")
    } else if (level == 6) {
        game.splash("Level 1 Beat!", "Level Code:0.211")
    } else if (level == 7) {
        game.splash("Level 2 Beat!", "Level Code:0.221")
    } else if (level == 8) {
        game.splash("Level 3 Beat!", "Level Code:0.231")
    } else if (level == 9) {
        game.splash("Level 4 Beat!", "Level Code:0.241")
    } else if (level == 10) {
        game.splash("Level 5 Beat!", "Level Code:0.22421")
    }
    level += 1
    loadLevel()
})
function createStartMenu () {
    myMenu = miniMenu.createMenu(
    miniMenu.createMenuItem("Start", img`
        . . c c . . . . 
        . . c d c . . . 
        . . c b b c c . 
        c c b a c b d c 
        c d b c a b c c 
        . c c b b c . . 
        . . . c d c . . 
        . . . . c c . . 
        `),
    miniMenu.createMenuItem("Level Code", img`
        . b . . . . . . 
        b b a a . . . . 
        . b . . a . . . 
        . b . a . c c . 
        b b a . . . . c 
        . . a a a . c . 
        . . . . . . . c 
        . . . . . c c . 
        `),
    miniMenu.createMenuItem("How to Play", img`
        . . 2 2 2 2 . . 
        . e 9 e e e e . 
        2 2 1 1 1 2 2 2 
        e e 9 9 9 9 9 e 
        2 2 1 1 1 1 1 2 
        e e 9 9 9 e e e 
        . 2 1 2 2 2 2 . 
        . . e e e e . . 
        `),
    miniMenu.createMenuItem("Credits", img`
        . d d d d d d . 
        . d 1 1 1 1 c . 
        . d b 1 b 1 c . 
        . d 1 b 1 b c . 
        . d 1 1 1 1 c . 
        . d b 1 b 1 c . 
        . d 1 b 1 b c . 
        . c c c c c c . 
        `)
    )
    myMenu.y += 48
    myMenu.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Border, miniMenu.createBorderBox(
    4,
    0,
    0,
    0
    ))
    myMenu.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Margin, miniMenu.createBorderBox(
    0,
    0,
    0,
    2
    ))
    myMenu.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.BorderColor, 12)
    myMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.BorderColor, 11)
    myMenu.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Background, 15)
    myMenu.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Foreground, 12)
    myMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Foreground, 11)
    textSprite = textsprite.create("Ver. 0.5.9.7")
    textSprite.setPosition(124, 10)
    myMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
        music.stopAllSounds()
        soundeffect2 = soundEffects.createSound(soundEffects.waveNumber(WaveType.WhiteNoise), 1500, 200, 200, 160, 0)
        soundeffect3 = soundEffects.createSound(soundEffects.waveNumber(WaveType.TunableNoise), 2000, 200, 200, 180, 0)
        soundeffect2.play()
        soundeffect3.play()
        myMenu.setButtonEventsEnabled(false)
        for (let index = 0; index < 10; index++) {
            myMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.BorderColor, 1)
            pause(100)
            myMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.BorderColor, 11)
            pause(100)
        }
        myMenu.close()
        textSprite.destroy()
        if (selectedIndex == 0) {
            myMenu3 = miniMenu.createMenu(
            miniMenu.createMenuItem("Tutorial", img`
                . . 7 7 7 7 . . 
                . 7 7 7 7 7 7 . 
                7 7 1 7 7 1 7 7 
                7 7 9 7 7 9 7 7 
                9 7 7 7 7 7 7 9 
                6 9 1 1 1 1 9 6 
                . 6 9 9 9 9 6 . 
                . . 6 6 6 6 . . 
                `),
            miniMenu.createMenuItem("No Tutorial", img`
                . . 2 2 2 2 . . 
                . 2 2 2 2 2 2 . 
                2 4 2 2 2 2 4 2 
                2 2 4 2 2 4 2 2 
                2 2 2 2 2 2 2 2 
                e e 4 4 4 4 e e 
                . 4 e e e e 4 . 
                . . e e e e . . 
                `)
            )
            myMenu3.y += 24
            myMenu3.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Border, miniMenu.createBorderBox(
            4,
            0,
            0,
            0
            ))
            myMenu3.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Margin, miniMenu.createBorderBox(
            0,
            0,
            0,
            2
            ))
            myMenu3.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.BorderColor, 12)
            myMenu3.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.BorderColor, 11)
            myMenu3.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Background, 15)
            myMenu3.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Foreground, 12)
            myMenu3.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Foreground, 11)
            myMenu3.onButtonPressed(controller.A, function (selection, selectedIndex) {
                myMenu3.close()
                if (selectedIndex == 0) {
                    sprites.destroyAllSpritesOfKind(SpriteKind.TiTle)
                    gameRunning = true
                    movement = true
                    info.setLife(30)
                    level = -1
                    loadLevel()
                } else if (selectedIndex == 1) {
                    sprites.destroyAllSpritesOfKind(SpriteKind.TiTle)
                    gameRunning = true
                    movement = true
                    info.setLife(30)
                    level = 0
                    loadLevel()
                }
            })
            myMenu3.onSelectionChanged(function (selection, selectedIndex) {
                soundeffect = soundEffects.createSound(soundEffects.waveNumber(WaveType.WhiteNoise), 500, 440, 440, 100, 0)
                soundeffect.play()
            })
        } else if (selectedIndex == 1) {
            levelCode = game.askForNumber("Enter Code", 12)
            if (levelCode == 0.001) {
                level = -1
            } else if (levelCode == 0.111) {
                level = 0
            } else if (levelCode == 0.121) {
                level = 1
            } else if (levelCode == 0.131) {
                level = 2
            } else if (levelCode == 0.12421) {
                level = 3
            } else if (levelCode == 0.1248421) {
                level = 4
            } else if (levelCode == 0.211) {
                level = 6
            } else if (levelCode == 0.221) {
                level = 7
            } else if (levelCode == 0.231) {
                level = 8
            } else if (levelCode == 0.241) {
                level = 9
            } else if (levelCode == 0.22421) {
                level = 10
            } else {
                level = 0
            }
            sprites.destroyAllSpritesOfKind(SpriteKind.TiTle)
            gameRunning = true
            movement = true
            info.setLife(30)
            loadLevel()
        } else if (selectedIndex == 2) {
            game.setDialogCursor(img`
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................fffff...........................................................................................
                ................................................................f111f...........................................................................................
                ................................................................f111f...........................................................................................
                ...............................................................f111f............................................................................................
                ...............................................................f111f............................................................................................
                ...............................................................f111f............................................................................................
                ...............................................................f111f............................................................................................
                ...............................................................f111f............................................................................................
                ..............................................................f1111f............................................................................................
                ..............................................................f111f.............................................................................................
                ..............................................................f111f.............................................................................................
                ..............................................................f111f.............................................................................................
                ..............................................................f111f.............................................................................................
                ..............................................................f111f.............................................................................................
                ..............................................................f111f....fffff....................................................................................
                ..............................................................f111f..ff11111f...................................................................................
                ..............................................................f111f.f11111111f..................................................................................
                ..............................................................f111ff1111111111f.................................................................................
                ...............................................................f11111111fff1111f................................................................................
                ...............................................................f111111ff...f1111f...............................................................................
                ................................................................ff111f......f111f...............................................................................
                ...............................fffffffffffffff....................fff.......f111f.................................fffffffffffffff...............................
                ............................fff111111111111111fff...........................f111f..............................fff111111111111111fff............................
                ..........................ff111111111111111111111ff.........................f111f............................ff111111111111111111111ff..........................
                .........................f1111111111111111111111111f........................f111f...........................f1111111111111111111111111f.........................
                .......................ff111111111111111111111111111ff......................f111f.........................ff111111111111111111111111111ff.......................
                ......................f1111111111111111111111111111111f.....................f111f........................f1111111111111111111111111111111f......................
                .....................f111111111111111111111111111111111f...................ff111ff......................f111111111111111111111111111111111f.....................
                ....................f11111111111111111111111111111111111f.................fdddddddf....................f11111111111111111111111111111111111f....................
                ...................f1111111111111111111111111111111111111f...............ffb11111bff..................f1111111111111111111111111111111111111f...................
                ..................f111111111111111111111111111111111111111f.............fbbbbbbbbbbbf................f111111111111111111111111111111111111111f..................
                .................f11111111111111111111111111111111111111111f...........fbbdddddddddbbf..............f11111111111111111111111111111111111111111f.................
                ................f1111111111111111111111111111111111111111111ffffffffffffbdddddddddddbfffffffffffffff1111111111111111111111111111111111111111111f................
                ................f111111111111111ccccccccc111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f................
                ...............f111111111111111ccbbbbbbbcc111111111111111111111111111111111111111111111111111111111111111111111111111111111111166666661111111111f...............
                ..............f1111111111111111cbbbbbbbbbc1111111111111111111111f111f1f111111f11f1111111f111111ff111111111111111111111111111116699999661111111111f..............
                ..............f1111111111111111cbbbbbbbbbc1111111111111111111111f111f111ff11fff111ff111ff11f11ff1111111111111111111111111111166991119966111111111f..............
                .............f11111111111111111cbbbfffbbbc1111111111111111111111f1f1f1f1f1f11f11f1f1f1f1f1f1f11ff1111111111111111111111111111699199919961111111111f.............
                .............f11111111111111111cbbbfcfbbbc11111111111111111111111f1f11f1f1f11f11f1f1f1fff11f11ff11111111111111111111111111111699199919961111111111f.............
                .............f11111111111111111cbbffcffbbc11111111111111111111111111111111111111111111111111111111111111111111111111111111111699111119961111111111f.............
                ............f111111111111111111cbbfcccfbbc11111111111111111111111111111111111111111111111111111111111111111111111111111111111f991999199f11111111111f............
                ............f11111111111111111ccbbfffffbbcc1111111111111111111111111111111111111111111111111111111111111111111111111111111111f991999199f11111111111f............
                ............f1111111111111111ccbbbbbbbbbbbcc111111111111111111111111111111111111111111111111111111111111111111111111111111111ff9999999ff11111111111f............
                ............f111111111ccccccccbbbbbbbbbbbbbcccccccc111111111111ccccccccccccccc111111111111ccccc111111111111111111111111111111fff99999fff11111111111f............
                ............f11111111ccbbbbbbbbbbbbbbbbbbbbbbbbbbbcc1111111111ccfffffffffffffcc1111111111ccfffcc11111111111111111111111111111f6fffffff6f11111111111f............
                ............f11111111cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc1111111111cff1fffffff1ffffc1111111111cf1f1fc11111111111111111111111111111ff6666666ff11111111111f............
                ............f11111111cbbbbbfffbbbbfffffbbbbfffbbbbbc1111111111cff1f1f1f1fff1ffc1111111111cff1ffc111111111111111111111111111111ff66666ff111111111111f............
                ............f11111111cbbbfffcfbbbfffffffbbbfcfffbbbc1111111111cff11fff1ff1ffffc1111111111cfff1fc1111111111111111111111111111111fffffff1111111111111f............
                ............f11111111cbbbfcccfbbbfffcfffbbbfcccfbbbc1111111111ccfffffffffffffcc1111111111ccfffcc11111111111111eeeeeee111111111111111f11111111111111f............
                ............f11111111fbbbfffcfbbbffcccffbbbfcfffbbbf11111111111ccccccccccccccc111111111111ccccc11111111111111ee22222ee111111111111111f1111111111111f............
                ............f11111111fbbbbbfffbbbfffcfffbbbfffbbbbbf11111111111111111111111111111111111111111111111111111111ee2444422ee11111111111111f1111111111111f............
                ............f11111111fbbbbbbbbbbbfffffffbbbbbbbbbbbf11111111111111111111111111111111111111111111111111111111e224222422e111111111111111f111111111111f............
                ............f11111111ffbbbbbbbbbbbfffffbbbbbbbbbbbff11111111111111111111111111111111111111111111111111111111e224222422e111111111111111f111111111111f............
                ............f11111111fffffffffbbbbbbbbbbbbbfffffffff11111111111111111111111111111111111111111111111111111111e224444222e111111111111111f111111111111f............
                ............f11111111fcccccccffbbbbbbbbbbbffcccccccf11111111111111111111111111111111111111111111111111111111f224222422f1111111111111111f11111111111f............
                ............fd1111111fccccccccffbbfffffbbffccccccccf11111111111111111111111111111111111111111111111111111111f224222422f1111111111111111f1111111111df............
                ............fd11111111fffffffccfbbfcccfbbfccfffffff111111111111111111111111111111111111111111111111111111111ff2444422ff1111111111111111f1111111111df............
                ............fd111111111111111fcfbbffcffbbfcf1111111111111111111111111111111111111111111111111111111111111111fff22222fff11111111111111111f111111111df............
                ............fdd11111111111111fcfbbbfcfbbbfcf1111111111111111111111111111111111111111111111111111111111111111fefffffffef11111111111111111f11111111ddf............
                .............fd11111111111111fcfbbbfffbbbfcf1111111111111111111111111111111111111111111111111111111111111111ffeeeeeeeff11111111111111111f11111111df.............
                .............fdd1111111111111fcfbbbbbbbbbfcf11111111111111111111111111111111111111111111111111111111111111111ffeeeeeff1111111111111111111f111111ddf.............
                .............fddd111111111111fcfbbbbbbbbbfcf111111111111111111111111111111111111111111111111111111111111111111fffffff11111111111111111111f11111dddf.............
                ..............fdd111111111111fcffbbbbbbbffcf1111111111111111dddddddddddddddddddddddddddddddddddddddd1111111111111f11111111111111111111111f11111ddf..............
                ..............fddd11111111111fccfffffffffccf111111111111111dddddddddddddddddddddddddddddddddddddddddd111111111111f111111111111111111111111f111dddf..............
                ...............fddd1111111111ffcccccccccccf111111111111111dddddddddddddddddddddddddddddddddddddddddddd11111111111f111111111111111111111111f11dddf...............
                ................fddd11111111f11fcccccccccf111111111111111dddddddddddddddddddddddddddddddddddddddddddddd1111111111f111111111111111111111111f1dddf................
                ................fdddd1111111f111fffffffff111111111111111ddddffffffffffffffffffffffffffffffffffffffffdddd111111111f1111111111111111111111111fdddf................
                .................fdddd111111f11111111111111111111111111ddddf........................................fdddd11111111f111111111111111111111111dfddf.................
                ..................fdddd1111f11111111111111111111111111ddddf..........................................fdddd1111111f11111111111111111111111dddff..................
                ...................fddddd11f111111111111111111111111dddddf............................................fddddd11111f111111111111111111111dddddf...................
                ....................fdddddf111111111111111111111111dddddf..............................................fddddd1111f11111111111111111111dddddff...................
                .....................fddddfd111111111111111111111ddddddf................................................fdddddd11f111111111111111111ddddddf.f...................
                ......................fddfddddd111111111111111ddddddddf..................................................fdddddddf111111111111111ddddddddf...f..................
                .......................fffddddddddddddddddddddddddddff....................................................ffdddddfdddddddddddddddddddddff....f..................
                ........................ffdddddddddddddddddddddddddf........................................................fddddfddddddddddddddddddddf....ffffff...............
                ........................f.ffdddddddddddddddddddddff..........................................................ffddfddddddddddddddddddff.....f4444f...............
                .......................f....fffdddddddddddddddfff..............................................................fffdddddddddddddddfff.......ffff4f...............
                .......................f.......fffffffffffffff...................................................................ffffffffffffffff............f4f................
                ......................f......................................................................................fff.fff........................f4f.................
                ......................f......................................................................................f9f.f9f.......................f4ffff...............
                ......................f......................................................................................f9f.f9f.......................f4444f...............
                .....................f........................................................................................f9f9f........................ffffff...............
                .....................f.........................................................................................f9f..............................................
                ....................f............................................................ff...........................f9f9f.....................ff......................
                ....................f...........................................................f..f..f...f.........f.f......f9f.f9f...................f22f.....................
                ...................f............................................................ffff.fff.fff..ff..f.ff.......f9f.f9f..................f2ff2f....................
                ...................f............................................................f..f..f...f..f.f.f..f.f......fff.fff..................f2ff2f..fff...........ff..
                ..................f.............................................................f..f..f...f...ff..f.f.f...............................f2ff2f...f............f.f.
                ..................f.....................................................................................fffffff.......................f222ff...f..f.f.ff.f..ff..
                .................f......................................................................................f66666f........................f2f2f.f.f..f.f.f.f.f.f...
                .................f......................................................................................f6fffff........................fffff..f....ff.f.f.f.f...
                ................f.......................................................................................f6666f..................................................
                ...........fff.ffffff.fffffff...........................................................................f6ffff.....................ff...........................
                ...........f7f.f7ff7fff77f77ff..........................................................................f6fffff...................feef..........................
                ...........f7fff7f7f7f77ff7f7f..........................................................................f66666f..................feffef.........................
                ...........f7f7f7f777fff7f7f7f..........................................................................fffffff..................feffef.f....f..................
                ...........ff7f7ff7f7f77ff77ff...................................................................................................feeeef.f...fff.................
                ............fffffffffffffffff......................................................................fffff.........................feffef.ff...f..ff..............
                ...................................................................................................f8888f........................feffef.f.f..f..f.f.............
                .............ff....fff....f.....ff.................................................................f8fff8f.......................ffffff.ff...f..f.f.f...........
                ............f6fff..f6f...f6f..fff6f................................................................f8888f..f....f...............................................
                ...........f6666f.ff6ff.f666f.f6666f...............................................................f8fff8f.f...fff..............................................
                ............f6fff.f666f.ff6ff.fff6f................................................................f8fff8f.ff...f..ff...........................................
                .............ff....f6f...f6f....ff.................................................................f8888f..f.f..f..f.f..........................................
                ....................f....fff.......................................................................fffff...ff...f..f.f.f........................................
                ................................................................................................................................................................
                ...........f...f..........ff.........ff.......f.................................................................................................................
                ...........ff.ff..f..f.f.f.ff.ff.f..f.ff.ff..fff................................................................................................................
                ...........f.f.f.f.f.f.f.ff...f.f.f.ff...f.f..f.................................................................................................................
                ...........f...f..f...f...fff.f.f.f..fff.f.f..f.................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                `)
            game.showLongText("", DialogLayout.Full)
            game.setDialogCursor(img`
                . . . 7 7 . . . 
                . . 7 7 7 7 . . 
                . 6 6 6 6 6 6 . 
                . . . 6 6 . . . 
                . . . e e . . . 
                . . e e e e . . 
                . c c c c c c . 
                . . . c c . . . 
                `)
            game.showLongText("There is a powerup in every normal stage(usually to the right). You have to collect the powerup and retreat to the beginning and double-jump to the farther left platform to reach the goal.", DialogLayout.Center)
            game.showLongText("                                                                                                                The powerup looks like this-->", DialogLayout.Center)
            createStartMenu()
        } else if (selectedIndex == 3) {
            myMenu2 = miniMenu.createMenu(
            miniMenu.createMenuItem("IMakeCode - Developer, Artist, AI Designer", img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . f b b b . . . . . 
                . . . . . f f c b b b b b . . . 
                . . . . f c c b b b b b b f . . 
                . . 2 2 2 2 2 2 2 2 2 2 2 2 e . 
                . 2 2 e 2 e e e e e e e e e e . 
                . 2 e f b b b d d d f d d f d . 
                . 2 e f b b b b 1 1 c 1 1 c d . 
                2 e e e c c b b b b b b b b b . 
                . 2 2 e f c c c b b b b b b c . 
                . . 2 e f f c c c b b b b c . . 
                . 2 2 e . f f f c c c c c . . . 
                2 2 e . . . . f f f f . . . . . 
                . e . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `),
            miniMenu.createMenuItem("Inspiration - NinjaCat", img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . f b . . . . . . . . . . . 
                . . . f c b . . . . . . . . b c 
                . . . f c b b b b b b b . b c f 
                . . 2 2 2 2 2 2 2 2 2 2 c c f . 
                . . 2 2 e e e e e e e e 2 2 e . 
                . 2 2 e e b d d 6 d d 6 e e e . 
                2 e e c b b 1 1 7 d 1 7 d c . . 
                . 2 e f c b b 1 7 1 d 7 1 b c . 
                . . 2 e f c b b b b b b b c f . 
                . . 2 e f f c c c c c c c f f . 
                . 2 2 e . . f f f f f f f f . . 
                . e e . . . . f f f f . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `),
            miniMenu.createMenuItem("Engine - MakeCode Arcade", img`
                . . . c c c c c c c c c c . . . 
                . . c a a a a a a a a a a c . . 
                . . c a b b b b b b b b a c . . 
                . . c a b 1 1 1 1 1 1 b a c . . 
                . . c a b 1 1 c c 1 1 b a c . . 
                . . c a b 1 c c c c 1 b a c . . 
                . . c a b 1 c c c 1 1 b a c . . 
                . . c a b 1 c c c c 1 b a c . . 
                . . c a b 1 1 1 1 1 1 b a c . . 
                . . c a a b b b b b b a a c . . 
                . . f a a a c c a c a a a f . . 
                . . f a a a a a a a a a a f . . 
                . . f c a 1 a a a a a 1 c f . . 
                . . f c 1 1 1 a a a 1 a c f . . 
                . . . f c 1 c c c c c c f . . . 
                . . . . f f f f f f f f . . . . 
                `),
            miniMenu.createMenuItem("Ivonna - Playtester", img`
                . . . . . . . c c c . . . . . . 
                . . . . c c c b b b c c . . . . 
                . . c c c b b b b b b b c c . . 
                . c c b b b b b b b b b b c . . 
                . c b b b b b b b b b b b b c . 
                . c b b b c c b b b b c c b b c 
                c b b b b c c b b b b c c b b c 
                c b b b b c c b b b b c c b b c 
                c b b b b c c b b b b c c b b c 
                c b b b b b b b b b b b b b b c 
                . c b b b b b b b b b b b b b c 
                . c b b c c c c c c c c c b c . 
                . c c b b b b b b b b b b b c . 
                . . . c b b b b b b b b c c . . 
                . . . c c c b b b b b c c . . . 
                . . . . . c c c c c c . . . . . 
                `),
            miniMenu.createMenuItem("Quinton - Playtester", img`
                . . . . . . . c c c . . . . . . 
                . . . . c c c b b b c c . . . . 
                . . c c c b b b b b b b c c . . 
                . c c b b b b b b b b b b c . . 
                . c b b b b b b b b b b b b c . 
                . c b b b c c b b b b c c b b c 
                c b b b b c c b b b b c c b b c 
                c b b b b c c b b b b c c b b c 
                c b b b b c c b b b b c c b b c 
                c b b b b b b b b b b b b b b c 
                . c b b b b b b b b b b b b b c 
                . c b b c c c c c c c c c b c . 
                . c c b b b b b b b b b b b c . 
                . . . c b b b b b b b b c c . . 
                . . . c c c b b b b b c c . . . 
                . . . . . c c c c c c . . . . . 
                `),
            miniMenu.createMenuItem("NotHilton - Playtester", img`
                . . . . . . . . . . . . . . . . 
                . . . . . 5 5 5 5 5 5 . . . . . 
                . . . 4 4 5 5 5 5 5 5 5 5 . . . 
                . . 4 4 5 5 5 5 5 5 5 5 5 5 . . 
                . 4 4 4 5 5 5 5 5 5 5 5 5 5 5 . 
                . 4 4 4 4 4 5 5 5 5 5 5 5 5 4 . 
                4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                4 4 4 4 4 4 3 4 3 4 3 4 3 4 3 4 
                4 4 4 3 4 3 9 9 9 9 3 9 9 9 9 3 
                . 4 4 3 c c 9 f f 9 c 9 f f 9 . 
                . 4 c c d 3 9 9 9 9 3 9 9 9 9 . 
                . c 3 d d d 3 3 3 3 d 3 3 3 3 . 
                . . 3 d d f f f f f f d d d . . 
                . . . 3 d d d d d d d d d . . . 
                . . . . . 3 3 d d d d . . . . . 
                . . . . . . . . . . . . . . . . 
                `),
            miniMenu.createMenuItem("Faith - Playtester", img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . a . . . . . . . . . . . . a . 
                . . a a . . . . . . . . a a . . 
                . . a a a . . . . . . a a a . . 
                . . a a a a . . . . a a a a . . 
                . 4 a 4 a a . . . . a a 4 a 4 . 
                4 4 a 4 4 a a . . a a 4 4 a 4 4 
                4 4 a 4 4 a a . . a a 4 4 a 4 4 
                . 4 a 4 a a a . . a a a 4 a 4 . 
                . . a a a a a . . a a a a a . . 
                . . a a a a . . . . a a a a . . 
                . . a a a a . . . . a a a a . . 
                . . a a a . . . . . . a a a . . 
                . . a a . . . . . . . . a a . . 
                . a . . . . . . . . . . . . a . 
                `)
            )
            myMenu2.setPosition(1, 1)
            myMenu2.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 6)
            myMenu2.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, 8)
            myMenu2.setMenuStyleProperty(miniMenu.MenuStyleProperty.BackgroundColor, 6)
            myMenu2.setMenuStyleProperty(miniMenu.MenuStyleProperty.Border, 2)
            myMenu2.setMenuStyleProperty(miniMenu.MenuStyleProperty.BorderColor, 8)
            myMenu2.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.IconOnly, 1)
            myMenu2.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 1)
            myMenu2.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, 6)
            myMenu2.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Foreground, 15)
            myMenu2.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Border, miniMenu.createBorderBox(
            0,
            0,
            0,
            2
            ))
            myMenu2.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Background, 8)
            myMenu2.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.BorderColor, 6)
            myMenu2.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 160)
            myMenu2.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 120)
            myMenu2.onButtonPressed(controller.B, function (selection, selectedIndex) {
                myMenu2.close()
                createStartMenu()
            })
            myMenu2.onSelectionChanged(function (selection, selectedIndex) {
                myMenu2.setTitle(selection)
            })
        }
    })
    myMenu.onSelectionChanged(function (selection, selectedIndex) {
        soundeffect = soundEffects.createSound(soundEffects.waveNumber(WaveType.WhiteNoise), 500, 440, 440, 100, 0)
        soundeffect.play()
    })
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Yellow, function (sprite, otherSprite) {
    otherSprite.setKind(SpriteKind.Dead)
    otherSprite.setFlag(SpriteFlag.Ghost, true)
    characterAnimations.setCharacterAnimationsEnabled(otherSprite, false)
    animation.runImageAnimation(
    otherSprite,
    [img`
        . . . . . f f f . . . . 
        . . . . f 5 5 4 f . . . 
        . . . f e e 5 5 4 f . . 
        . . . f f f e e 4 f f . 
        . . . f 5 5 f f e f e f 
        . . . . f 5 4 4 f e f . 
        . . 3 3 f f f f f f . . 
        . f f f 5 5 4 f f d d . 
        f e e f 4 4 f . . d d . 
        . . . . f f 4 f . . . . 
        . . . . . f 4 4 f . . . 
        . . . . . . f 4 f . . . 
        `],
    350,
    false
    )
    if (ninji.x < otherSprite.x) {
        otherSprite.vx = 50
    } else if (ninji.x > otherSprite.x) {
        otherSprite.vx = -50
    }
    otherSprite.vy = -150
    sprite.destroy()
    scene.cameraShake(2, 500)
    timer.after(3000, function () {
        otherSprite.destroy()
    })
})
function ninjiDia2 () {
    ninjiDia.x = -76
    animation.runImageAnimation(
    ninjiDia,
    [img`
        cccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccc
        ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
        cbc..................................cbc
        ab....................................ba
        ab...........ffccbbbbb................ba
        ab.........cffcbbbbbbbbb..............ba
        ab........cffccbbbbbbbbbc.............ba
        ab.......cffcbbbbbbbbbbbcf............ba
        ab......cfffcbbbbbbbbbbbcff...........ba
        ab....222222222222222222bcff..........ba
        ab..22222222eeeeeeeeee22222e..........ba
        ab..222e22eeeeeeeeeeeeee2222e.........ba
        ab.222eeeeeebdddddddddeeeee2ef........ba
        ab222eeeeebbbdddddddfddddddeef........ba
        ab222effbbbbb111111111dddfdccf........ba
        ab222effcbbbbb1111111111111dbf........ba
        ab.22effccbbbbbb111111111111bf........ba
        ab.2eecfcccbbbbbbbbbbbbbbbbbbc........ba
        ab.2eecfccccbbbbbbbbbbbbbbbbc.........ba
        ab.2eeecffccccbbbbbbbbbbbbbcc.........ba
        ab.22eeecffcccccbbbbbbbbbbcc..........ba
        ab..22ee.cffccccccbbbbbbbcc...........ba
        ab.222eee.cffbcccccccccccc............ba
        ab222eee....fbbcccccccccc.............ba
        ab.2eee........fffffff......bbbb......ba
        ab22ee................bbbbbbddddb.....ba
        ab2ee................b33bb3ddddddb....ba
        ab..................bb3bb3ddddddddb...ba
        ab..................b3b3dddddddddddb..ba
        ab..................b3bdddddddddddddb.ba
        ab...................bddd3bdddddddddb.ba
        ab...................bddd3bddddddddb..ba
        ab...................b3d3bddd3bdddb...ba
        ab....................b33b3d3bddd3b...ba
        ab.....................bb.b33bddd3b...ba
        ab.........................bb.b33b....ba
        ab.............................bb.....ba
        cbc..................................cbc
        ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
        cccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccc
        `],
    500,
    false
    )
    animation.runMovementAnimation(
    ninjiDia,
    animation.animationPresets(animation.easeRight),
    500,
    false
    )
}
function bossLevelBeat () {
    movement = false
    ninjiHitbox.vx = randint(-50, 50)
    ninjiHitbox.vy = -200
    characterAnimations.setCharacterAnimationsEnabled(ninji, true)
    ninjiHitbox.setFlag(SpriteFlag.Ghost, true)
    timer.after(2000, function () {
        sprites.destroyAllSpritesOfKind(SpriteKind.Ninja)
        music.powerUp.play()
        game.splash("World 1 Completed!")
        info.setLife(30)
        level += 1
        loadLevel()
        movement = true
    })
}
scene.onHitWall(SpriteKind.Hitbox, function (sprite, location) {
    if (sprite.isHittingTile(CollisionDirection.Bottom)) {
        numJumps = 0
    }
})
function createPlayer () {
    ninjiHitbox = sprites.create(img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . 2 2 2 2 2 2 . . . 
        . . . 2 1 2 2 1 2 . . . 
        . . . 2 1 2 2 1 2 . . . 
        . . . 2 2 2 2 2 2 . . . 
        . . . 2 1 2 2 1 2 . . . 
        . . . 2 1 2 2 1 2 . . . 
        . . . 2 2 1 1 2 2 . . . 
        . . . 2 2 2 2 2 2 . . . 
        `, SpriteKind.Hitbox)
    ninji = sprites.create(img`
        . . . . . . . . . . . . 
        . . . . f f f . . . . . 
        . . . f c b b f . . . . 
        . . f c 2 2 2 2 f . . . 
        . f f 2 1 f 1 f f . . . 
        f 2 f c c b b b f . . . 
        f 2 f f c c b f . . . . 
        . f f c f f f f . . . . 
        . f d d c b b f 3 . . . 
        . . d d f f f f 3 . . . 
        . . f f f f f f f f . . 
        . f 4 4 f . . f e e f . 
        `, SpriteKind.Ninja)
    camera = sprites.create(img`
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        `, SpriteKind.Camera)
    camera.y = 200
    ninjiHitbox.setFlag(SpriteFlag.Invisible, true)
    ninji.setFlag(SpriteFlag.Ghost, true)
    camera.follow(ninji, 250)
    scene.cameraFollowSprite(camera)
    ninjiHitbox.ay = 600
    basicNinjaAnims()
    numJumps = 0
    maxJumps = 1
}
function basicNinjaAnims () {
    characterAnimations.loopFrames(
    ninji,
    [img`
        . . . . . . . . . . . . 
        . . . . . f f f . . . . 
        . . . . f b b c f . . . 
        . . . f 2 2 2 2 c f . . 
        . . . f f 1 f 1 2 f f . 
        . . . f b b b c c f 2 f 
        . . . . f b c c f f 2 f 
        . . . . f f f f c f f . 
        . . . 3 f b b c d d f . 
        . . . 3 f f f f d d . . 
        . . f f f f f f f f . . 
        . f e e f . . f 4 4 f . 
        `],
    1,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    ninji,
    [img`
        . . . . . . . . . . . . 
        . . . . f f f . . . . . 
        . . . f c b b f . . . . 
        . . f c 2 2 2 2 f . . . 
        . f f 2 1 f 1 f f . . . 
        f 2 f c c b b b f . . . 
        f 2 f f c c b f . . . . 
        . f f c f f f f . . . . 
        . f d d c b b f 3 . . . 
        . . d d f f f f 3 . . . 
        . . f f f f f f f f . . 
        . f 4 4 f . . f e e f . 
        `],
    1,
    characterAnimations.rule(Predicate.FacingRight, Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    ninji,
    [img`
        . . . . . f f f . . . . 
        . . . . f b b c f . . . 
        . . . f 2 2 2 2 c f f . 
        . . . f f 1 f 1 2 f 2 f 
        . . . f b b b c c f 2 f 
        . . 3 3 f b c c f d d . 
        . . 3 f f f f f c d d . 
        . . f f f b b c c . . . 
        . f e e f f f f f . . . 
        . . . . . . f 4 f . . . 
        . . . . . . f 4 f . . . 
        . . . . . . . f . . . . 
        `,img`
        . . . . . f f f . . . . 
        . . . . f b b c f . . . 
        . . . f 2 2 2 2 c f . . 
        . . . f f 1 f 1 2 f 2 f 
        . . . f b b b c c f f 2 
        . . 3 3 f b c c f d d . 
        . . 3 f f f f f c d d . 
        . . f f f b b c c . . . 
        . f e e f f f f f . . . 
        . . . . . . f 4 f . . . 
        . . . . . . f 4 f . . . 
        . . . . . . . f . . . . 
        `],
    75,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    ninji,
    [img`
        . . . . f f f . . . . . 
        . . . f c b b f . . . . 
        . f f c 2 2 2 2 f . . . 
        f 2 f 2 1 f 1 f f . . . 
        f 2 f c c b b b f . . . 
        . d d f c c b f 3 3 . . 
        . d d c f f f f f 3 . . 
        . . . c c b b f f f . . 
        . . . f f f f f e e f . 
        . . . f 4 f . . . . . . 
        . . . f 4 f . . . . . . 
        . . . . f . . . . . . . 
        `,img`
        . . . . f f f . . . . . 
        . . . f c b b f . . . . 
        . . f c 2 2 2 2 f . . . 
        f 2 f 2 1 f 1 f f . . . 
        2 f f c c b b b f . . . 
        . d d f c c b f 3 3 . . 
        . d d c f f f f f 3 . . 
        . . . c c b b f f f . . 
        . . . f f f f f e e f . 
        . . . f 4 f . . . . . . 
        . . . f 4 f . . . . . . 
        . . . . f . . . . . . . 
        `],
    75,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    ninji,
    [img`
        . . . . . f f f . . . . 
        . . . . f b b c f f 2 f 
        . . . f 2 2 2 2 c f 2 f 
        . . . f f 1 f 1 2 f f . 
        . . . f b b b c c f . . 
        . . . . f b c c f . . . 
        . . 3 f f f f f c d d . 
        . . f f f b b c c d d . 
        . f e e f f f f f . . . 
        . . . . . . f 4 f . . . 
        . . . . . . f 4 f . . . 
        . . . . . . . f . . . . 
        `,img`
        . . . . . f f f . . . . 
        . . . . f b b c f . f 2 
        . . . f 2 2 2 2 c f 2 f 
        . . . f f 1 f 1 2 f f . 
        . . . f b b b c c f . . 
        . . . . f b c c f . . . 
        . . 3 f f f f f c d d . 
        . . f f f b b c c d d . 
        . f e e f f f f f . . . 
        . . . . . . f 4 f . . . 
        . . . . . . f 4 f . . . 
        . . . . . . . f . . . . 
        `],
    75,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    ninji,
    [img`
        . . . . f f f . . . . . 
        f 2 f f c b b f . . . . 
        f 2 f c 2 2 2 2 f . . . 
        . f f 2 1 f 1 f f . . . 
        . . f c c b b b f . . . 
        . . . f c c b f . . . . 
        . d d c f f f f f 3 . . 
        . d d c c b b f f f . . 
        . . . f f f f f e e f . 
        . . . f 4 f . . . . . . 
        . . . f 4 f . . . . . . 
        . . . . f . . . . . . . 
        `,img`
        . . . . f f f . . . . . 
        2 f . f c b b f . . . . 
        f 2 f c 2 2 2 2 f . . . 
        . f f 2 1 f 1 f f . . . 
        . . f c c b b b f . . . 
        . . . f c c b f . . . . 
        . d d c f f f f f 3 . . 
        . d d c c b b f f f . . 
        . . . f f f f f e e f . 
        . . . f 4 f . . . . . . 
        . . . f 4 f . . . . . . 
        . . . . f . . . . . . . 
        `],
    75,
    characterAnimations.rule(Predicate.FacingRight, Predicate.MovingDown)
    )
}
scene.onOverlapTile(SpriteKind.Hitbox, assets.tile`myTile15`, function (sprite, location) {
    tileUtil.replaceAllTiles(assets.tile`myTile15`, assets.tile`myTile16`)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 3900, 3500, 255, 0, 1000, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    mySprite10 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . d d d d d d . . . . . 
        . . . . d d d d d d d d . . . . 
        . . . d d 1 1 1 1 1 1 d d . . . 
        . . d d 1 1 1 1 1 1 1 1 d d . . 
        . d d 1 1 1 1 d d 1 1 1 1 d d . 
        . d d 1 1 1 d c c d 1 1 1 d d . 
        . d d 1 1 b c c c c b 1 1 d d . 
        . d d 1 b c c 1 1 c c b 1 d d . 
        . d d 1 c 1 1 1 1 1 1 c 1 d d . 
        . d d 1 1 1 1 1 1 1 1 1 1 d d . 
        . . d d 1 1 1 1 1 1 1 1 d d . . 
        . . . d d 1 1 1 1 1 1 d d . . . 
        . . . . d d d d d d d d . . . . 
        . . . . . d d d d d d . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Effect)
    tiles.placeOnRandomTile(mySprite10, assets.tile`myTile16`)
    animation.runImageAnimation(
    mySprite10,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . d d . . . . . . . 
        . . . . . d d 1 1 d d . . . . . 
        . . . . . d 1 d d 1 d . . . . . 
        . . . . d 1 b c c b 1 d . . . . 
        . . . . d b c 1 1 c b d . . . . 
        . . . . . d 1 1 1 1 d . . . . . 
        . . . . . d d 1 1 d d . . . . . 
        . . . . . . . d d . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . d d . . . . . . . 
        . . . . . d d 1 1 d d . . . . . 
        . . . . . d 1 d d 1 d . . . . . 
        . . . . d 1 b c c b 1 d . . . . 
        . . . . d b c 1 1 c b d . . . . 
        . . . . . d 1 1 1 1 d . . . . . 
        . . . . . d d 1 1 d d . . . . . 
        . . . . . . . d d . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . d d d d . . . . . . 
        . . . . . . d d d d . . . . . . 
        . . . . . d 1 1 1 1 d . . . . . 
        . . . d d 1 d c c d 1 d d . . . 
        . . . d d 1 c c c c 1 d d . . . 
        . . . d d b c 1 1 c b d d . . . 
        . . . d d c 1 1 1 1 c d d . . . 
        . . . . . d 1 1 1 1 d . . . . . 
        . . . . . . d d d d . . . . . . 
        . . . . . . d d d d . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . d d d d . . . . . . 
        . . . . . . d d d d . . . . . . 
        . . . . . d 1 1 1 1 d . . . . . 
        . . . d d 1 d c c d 1 d d . . . 
        . . . d d 1 c c c c 1 d d . . . 
        . . . d d b c 1 1 c b d d . . . 
        . . . d d c 1 1 1 1 c d d . . . 
        . . . . . d 1 1 1 1 d . . . . . 
        . . . . . . d d d d . . . . . . 
        . . . . . . d d d d . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . d d d d . . . . . . 
        . . . . . d d d d d d . . . . . 
        . . . . d d 1 1 1 1 d d . . . . 
        . . . d d 1 1 d d 1 1 d d . . . 
        . . d d 1 1 d c c d 1 1 d d . . 
        . . d d 1 b c c c c b 1 d d . . 
        . . d d b c c 1 1 c c b d d . . 
        . . d d c 1 1 1 1 1 1 c d d . . 
        . . . d d 1 1 1 1 1 1 d d . . . 
        . . . . d d 1 1 1 1 d d . . . . 
        . . . . . d d d d d d . . . . . 
        . . . . . . d d d d . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . d d d d . . . . . . 
        . . . . . d d d d d d . . . . . 
        . . . . d d 1 1 1 1 d d . . . . 
        . . . d d 1 1 d d 1 1 d d . . . 
        . . d d 1 1 d c c d 1 1 d d . . 
        . . d d 1 b c c c c b 1 d d . . 
        . . d d b c c 1 1 c c b d d . . 
        . . d d c 1 1 1 1 1 1 c d d . . 
        . . . d d 1 1 1 1 1 1 d d . . . 
        . . . . d d 1 1 1 1 d d . . . . 
        . . . . . d d d d d d . . . . . 
        . . . . . . d d d d . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    false
    )
    mySprite10.vy = -20
    timer.after(500, function () {
        animation.runImageAnimation(
        mySprite10,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . d d d d d d . . . . . 
            . . . . d d d d d d d d . . . . 
            . . . d d 1 1 1 1 1 1 d d . . . 
            . . d d 1 1 1 1 1 1 1 1 d d . . 
            . d d 1 1 1 1 d d 1 1 1 1 d d . 
            . d d 1 1 1 d c c d 1 1 1 d d . 
            . d d 1 1 b c c c c b 1 1 d d . 
            . d d 1 b c c 1 1 c c b 1 d d . 
            . d d 1 c 1 1 1 1 1 1 c 1 d d . 
            . d d 1 1 1 1 1 1 1 1 1 1 d d . 
            . . d d 1 1 1 1 1 1 1 1 d d . . 
            . . . d d 1 1 1 1 1 1 d d . . . 
            . . . . d d d d d d d d . . . . 
            . . . . . d d d d d d . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . . d d d d d d . . . . . 
            . . . . d d 1 1 1 1 d d . . . . 
            . . . d d 1 1 d d 1 1 d d . . . 
            . . d d 1 1 d c c d 1 1 d d . . 
            . . d d 1 b c c c c b 1 d d . . 
            . . d d b c c 1 1 c c b d d . . 
            . . d d c 1 1 1 1 1 1 c d d . . 
            . . . d d 1 1 1 1 1 1 d d . . . 
            . . . . d d 1 1 1 1 d d . . . . 
            . . . . . d d d d d d . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
        timer.after(700, function () {
            mySprite10.vy = 0
            movement = false
            ninjiHitbox.vx = 0
            timer.after(500, function () {
                characterAnimations.setCharacterAnimationsEnabled(ninji, false)
                animation.runImageAnimation(
                ninji,
                [img`
                    . . . . . . . . . . . . 
                    . . . . f f f . . . . . 
                    . . . f c b b f . . . . 
                    . . f 2 2 2 2 2 f . . . 
                    . . f 1 f 1 f 1 f . . . 
                    . f f c c b b b f . . . 
                    f 2 f f c c b f . . . . 
                    . f f c f f f f . . . . 
                    . f d d c b b f 3 . . . 
                    . . d d f f f f 3 . . . 
                    . . f f f f f f f f . . 
                    . f 4 4 f . . f e e f . 
                    `,img`
                    . . . . . . . . . . . . 
                    . . . . f f f . . . . . 
                    . . 1 f c b b f . . . . 
                    . 1 1 2 2 2 2 2 f . . . 
                    . 1 1 1 f 1 f 1 f . . . 
                    . 1 1 c c b b b f . . . 
                    f 1 1 f c c b f . . . . 
                    . . 1 1 f f f f . . . . 
                    . . 1 1 c b b f 3 . . . 
                    . . f 1 f f f f 3 . . . 
                    . . f f f f f f f f . . 
                    . f 4 4 f . . f e e f . 
                    `,img`
                    . d . d . . . . . . . . 
                    . d 3 d f f f . . . . . 
                    . d d 3 c b b f . . . . 
                    . f c f 2 2 2 2 f . . . 
                    . f c f f 1 f 1 f . . . 
                    . f c f c b b b f . . . 
                    f f c f c c b f . . . . 
                    . f f c f f f f . . . . 
                    . f f c c b b f 3 . . . 
                    . . f f f f f f 3 . . . 
                    . . f f f f f f f f . . 
                    . f 4 4 f . . f e e f . 
                    `,img`
                    . . . . . . . . . . . . 
                    . d . d f f f . . . . . 
                    . d 3 d c b b f . . . . 
                    . d d 3 2 2 2 2 f . . . 
                    . f c f f 1 f 1 f . . . 
                    . f c f c b b b f . . . 
                    f f c f c c b f . . . . 
                    . f f c f f f f . . . . 
                    . f f c c b b f 3 . . . 
                    . . f f f f f f 3 . . . 
                    . . f f f f f f f f . . 
                    . f 4 4 f . . f e e f . 
                    `],
                80,
                false
                )
                timer.after(800, function () {
                    level += 1
                    loadLevel()
                    movement = true
                    characterAnimations.setCharacterAnimationsEnabled(ninji, true)
                })
            })
        })
    })
})
function shinoDia3 () {
    shinoDia.x = 236
    animation.runImageAnimation(
    shinoDia,
    [img`
        ccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccc
        cc444444444444444444444444444444444444cc
        c4c..................................c4c
        e4....................................4e
        e4................eeeeeccff...........4e
        e4..............eeeeeeeeecffc.........4e
        e4.............ceeeeeeeeeccffc........4e
        e4............fceeeeeeeeeeecffc.......4e
        e4...........ffceeeeeeeeeeecfffc......4e
        e4..........ffce222222222222222222....4e
        e4..........c22222cccccccccc22222222..4e
        e4.........c2222cccccccccccccc22c222..4e
        e4........fc2cccccdddddddddecccccc222.4e
        e4........fccddddddfdddddddeeeccccc2224e
        e4........fccdfddd111111111eeeeeffc2224e
        e4........fed1111111111111eeeeecffc2224e
        e4........fe111111111111eeeeeeccffc22.4e
        e4........ceeeeeeeeeeeeeeeeeecccfccc2.4e
        e4.........ceeeeeeeeeeeeeeeeccccfccc2.4e
        e4.........cceeeeeeeeeeeeeccccffcccc2.4e
        e4..........cceeeeeeeeeecccccffcccc22.4e
        e4...........cceeeeeeeccccccffc.cc22..4e
        e4............cccccccccccceffc.ccc222.4e
        e4.............cccccccccceef....ccc2224e
        e4......bbbb......fffffff........ccc2.4e
        e4.....bddddbbbbbb................cc224e
        e4....bdddddd3bb33b................cc24e
        e4...bdddddddd3bb3bb..................4e
        e4..bddddddddddd3b3b..................4e
        e4.bdddddddddddddb3b..................4e
        e4.bdddddddddb3dddb...................4e
        e4..bddddddddb3dddb...................4e
        e4...bdddb3dddb3d3b...................4e
        e4...b3dddb3d3b33b....................4e
        e4...b3dddb33b.bb.....................4e
        e4....b33b.bb.........................4e
        e4.....bb.............................4e
        c4c..................................c4c
        cc444444444444444444444444444444444444cc
        ccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccc
        `],
    500,
    false
    )
    animation.runMovementAnimation(
    shinoDia,
    animation.animationPresets(animation.easeLeft),
    500,
    false
    )
}
sprites.onOverlap(SpriteKind.Hitbox, SpriteKind.Yellow, function (sprite, otherSprite) {
    gameOver()
    scene.cameraShake(4, 500)
    sprite.setFlag(SpriteFlag.GhostThroughSprites, true)
    timer.after(1500, function () {
        sprite.setFlag(SpriteFlag.GhostThroughSprites, false)
    })
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Green, function (sprite, otherSprite) {
    otherSprite.setFlag(SpriteFlag.Ghost, true)
    characterAnimations.setCharacterAnimationsEnabled(otherSprite, false)
    animation.runImageAnimation(
    otherSprite,
    [img`
        . . . . . . . . 
        . . 1 1 1 1 . . 
        . 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 . 
        . . 1 1 1 1 . . 
        . . . . . . . . 
        `,img`
        . . 3 3 3 3 . . 
        . 3 3 1 1 3 3 . 
        3 3 1 1 1 1 3 3 
        3 1 1 1 1 1 1 3 
        3 1 1 1 1 1 1 3 
        3 3 1 1 1 1 3 3 
        . 3 3 1 1 3 3 . 
        . . 3 3 3 3 . . 
        `,img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        `,img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        `],
    50,
    false
    )
    sprite.destroy()
    scene.cameraShake(2, 500)
    timer.after(150, function () {
        otherSprite.destroy()
    })
})
scene.onHitWall(SpriteKind.EnemyProjectile, function (sprite, location) {
    sprite.ay = 0
    sprite.setVelocity(0, 0)
    animation.runImageAnimation(
    sprite,
    [img`
        . . . . . . . . 
        . . 1 1 1 1 . . 
        . 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 . 
        . . 1 1 1 1 . . 
        . . . . . . . . 
        `,img`
        . . 3 3 3 3 . . 
        . 3 3 1 1 3 3 . 
        3 3 1 1 1 1 3 3 
        3 1 1 1 1 1 1 3 
        3 1 1 1 1 1 1 3 
        3 3 1 1 1 1 3 3 
        . 3 3 1 1 3 3 . 
        . . 3 3 3 3 . . 
        `,img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        `,img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        `],
    50,
    false
    )
    timer.after(150, function () {
        sprite.setFlag(SpriteFlag.DestroyOnWall, true)
    })
})
sprites.onOverlap(SpriteKind.Hitbox, SpriteKind.Green, function (sprite, otherSprite) {
    gameOver()
    scene.cameraShake(4, 500)
    sprite.setFlag(SpriteFlag.GhostThroughSprites, true)
    timer.after(1500, function () {
        sprite.setFlag(SpriteFlag.GhostThroughSprites, false)
    })
})
function shinoDia1 () {
    shinoDia.x = 236
    animation.runImageAnimation(
    shinoDia,
    [img`
        ccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccc
        cc444444444444444444444444444444444444cc
        c4c..................................c4c
        e4....................................4e
        e4................eeeeeccff...........4e
        e4..............eeeeeeeeecffc.........4e
        e4.............ceeeeeeeeeccffc........4e
        e4............fceeeeeeeeeeecffc.......4e
        e4...........ffceeeeeeeeeeecfffc......4e
        e4..........ffce222222222222222222....4e
        e4..........c22222cccccccccc22222222..4e
        e4.........c2222cccccccccccccc22c222..4e
        e4........fc2cccccdfffdddddecccccc222.4e
        e4........fccfdddddffddddddeeeccccc2224e
        e4........fccffdddccc111111eeeeeffc2224e
        e4........fedcc111cc111111eeeeecffc2224e
        e4........fe11cc1cc11111eeeeeeccffc22.4e
        e4........ceeeeeeeeeeeeeeeeeecccfccc2.4e
        e4.........ceeeeeeeeeeeeeeeeccccfccc2.4e
        e4.........cceeeeeeeeeeeeeccccffcccc2.4e
        e4..........cceeeeeeeeeecccccffcccc22.4e
        e4...........cceeeeeeeccccccffc.cc22..4e
        e4............cccccccccccceffc.ccc222.4e
        e4.............cccccccccceef....ccc2224e
        e4........bbb.....fffffff........ccc2.4e
        e4.......bdddbbb..................cc224e
        e4.....bbddddd3bb..................cc24e
        e4....bdddddddd3bb....................4e
        e4...bddddd3ddddb3b...................4e
        e4..bddddddd3ddb33b...................4e
        e4.b3dddddddd3db3b....................4e
        e4.b3dddddddd3b3b.....................4e
        e4..b33bdddddb3b......................4e
        e4...bb3dddbb3b.......................4e
        e4...b33dddb.bb.......................4e
        e4....b333b...........................4e
        e4.....bbb............................4e
        c4c..................................c4c
        cc444444444444444444444444444444444444cc
        ccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccc
        `],
    500,
    false
    )
    animation.runMovementAnimation(
    shinoDia,
    animation.animationPresets(animation.easeLeft),
    500,
    false
    )
}
let projectile3: Sprite = null
let projectile2: Sprite = null
let mySprite10: Sprite = null
let camera: Sprite = null
let myMenu2: miniMenu.MenuSprite = null
let levelCode = 0
let soundeffect: SoundBuffer = null
let myMenu3: miniMenu.MenuSprite = null
let soundeffect3: SoundBuffer = null
let soundeffect2: SoundBuffer = null
let textSprite: TextSprite = null
let myMenu: miniMenu.MenuSprite = null
let devTextFx: Sprite = null
let textSprite2: TextSprite = null
let showBossRunCount = false
let projectile5: Sprite = null
let mySprite9: Sprite = null
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let bossRunCount = 0
let mySprite6: Sprite = null
let gameOverCheck = false
let mySprite8: Sprite = null
let mySprite7: Sprite = null
let mySprite5: Sprite = null
let shinoDia: Sprite = null
let statusbar: StatusBarSprite = null
let ninjiDia: Sprite = null
let dialoguePlayed = false
let doubleJumpFx: Sprite = null
let numJumps = 0
let movement = false
let level = 0
let achievementText: Sprite = null
let maxJumps = 0
let ninji: Sprite = null
let ninjiHitbox: Sprite = null
let shuriken: Sprite = null
let gameRunning = false
timer.after(500, function () {
    animateDevText()
})
game.onUpdate(function () {
    for (let value6 of sprites.allOfKind(SpriteKind.Hitbox)) {
        if (value6.y >= 148) {
            if (movement) {
                gameOver()
            }
        }
    }
})
game.onUpdate(function () {
    if (gameRunning) {
        if (movement) {
            if (controller.right.isPressed() && !(controller.left.isPressed())) {
                ninjiHitbox.fx = 0
                if (ninjiHitbox.vx < 100) {
                    ninjiHitbox.vx += 5
                } else {
                    ninjiHitbox.vx = 80
                }
            } else {
                if (controller.left.isPressed() && !(controller.right.isPressed())) {
                    ninjiHitbox.fx = 0
                    if (ninjiHitbox.vx > -100) {
                        ninjiHitbox.vx += -5
                    } else {
                        ninjiHitbox.vx = -80
                    }
                }
            }
        }
    }
})
game.onUpdate(function () {
    for (let value7 of sprites.allOfKind(SpriteKind.Ninja)) {
        value7.setPosition(ninjiHitbox.x, ninjiHitbox.y)
    }
})
game.onUpdate(function () {
    for (let value8 of sprites.allOfKind(SpriteKind.Camera)) {
        value8.y = 192
    }
})
forever(function () {
    if (!(gameOverCheck)) {
        if (bossRunCount >= 3) {
            mySprite6.vy = -240
            mySprite6.vx = -80
            if (mySprite6.isHittingTile(CollisionDirection.Bottom)) {
                if (!(gameOverCheck)) {
                    timer.after(500, function () {
                        mySprite6.vy = 0
                        timer.after(500, function () {
                            if (!(gameOverCheck)) {
                                projectile5 = sprites.createProjectileFromSprite(img`
                                    . . . d d . . . 
                                    . . d c c d . . 
                                    . b c c c c b . 
                                    b c c . . c c b 
                                    c . . . . . . c 
                                    . . . . . . . . 
                                    . . . . . . . . 
                                    . . . . . . . . 
                                    `, mySprite6, 0, 0)
                                projectile5.setKind(SpriteKind.BossProjectile)
                                projectile5.setFlag(SpriteFlag.DestroyOnWall, false)
                                projectile5.setFlag(SpriteFlag.GhostThroughWalls, true)
                                if (characterAnimations.matchesRule(mySprite6, characterAnimations.rule(Predicate.FacingLeft))) {
                                    if (!(gameOverCheck)) {
                                        projectile5.ax = 120
                                        projectile5.vx = -75
                                        animation.runImageAnimation(
                                        mySprite6,
                                        [img`
                                            . . . . . . . . . . . . 
                                            . . . . . . . . . . . . 
                                            . 3 3 f f f . . . . . . 
                                            . 3 f e e c f . . . . . 
                                            . f 2 2 2 f c f f . . . 
                                            . f f 1 f 1 2 f 2 2 f . 
                                            . f e e e c c f f f f . 
                                            . . f e c c f f f . . . 
                                            . . . f f f c f c d d . 
                                            . . . f f f e c c d d . 
                                            . . f e e f f f 4 4 f . 
                                            . f e e . . . . f f . . 
                                            `,img`
                                            . . . . . . . . . . . . 
                                            . . . f f f . . . . . . 
                                            1 . f e e c f . . . . . 
                                            1 f 2 2 2 f c f f . . . 
                                            1 f f 1 f 1 2 f 2 2 f . 
                                            1 f e e e c c f f f . . 
                                            1 1 f e c c f f f . . . 
                                            1 1 . f f f c f c d d . 
                                            . 1 1 f f e e c c d d . 
                                            . . . . . f f f f . . . 
                                            . . . . f e f 4 f . . . 
                                            . . . f e f 4 4 f . . . 
                                            `,img`
                                            . . . f f f . . . . . . 
                                            . . f e e c f . f . . . 
                                            . f 2 2 2 f c f f 2 f . 
                                            . f f 1 f 1 2 f 2 f . . 
                                            . f e e e c c f f . . . 
                                            . . f e c c f f f f . . 
                                            . . . f f f c f c d d . 
                                            . . 3 f f e e c c d d . 
                                            . . f 4 f f f f f . . . 
                                            . . f 4 4 f f f f f . . 
                                            . . . f f . . f e e f . 
                                            . . . . . . f e e . . . 
                                            `],
                                        100,
                                        false
                                        )
                                    }
                                } else {
                                    if (!(gameOverCheck)) {
                                        projectile5.ax = -120
                                        projectile5.vx = 75
                                        animation.runImageAnimation(
                                        mySprite6,
                                        [img`
                                            . . . . . . . . . . . . 
                                            . . . . . . . . . . . . 
                                            . . . . . . f f f 3 3 . 
                                            . . . . . f c e e f 3 . 
                                            . . . f f c f 2 2 2 f . 
                                            . f 2 2 f 2 1 f 1 f f . 
                                            . f f f f c c e e e f . 
                                            . . . f f f c c e f . . 
                                            . d d c f c f f f . . . 
                                            . d d c c e f f f . . . 
                                            . f 4 4 f f f e e f . . 
                                            . . f f . . . . e e f . 
                                            `,img`
                                            . . . . . . . . . . . . 
                                            . . . . . . f f f . . . 
                                            . . . . . f c e e f . 1 
                                            . . . f f c f 2 2 2 f 1 
                                            . f 2 2 f 2 1 f 1 f f 1 
                                            . . f f f c c e e e f 1 
                                            . . . f f f c c e f 1 1 
                                            . d d c f c f f f . 1 1 
                                            . d d c c e e f f 1 1 . 
                                            . . . f f f f . . . . . 
                                            . . . f 4 f e f . . . . 
                                            . . . f 4 4 f e f . . . 
                                            `,img`
                                            . . . . . . f f f . . . 
                                            . . . f . f c e e f . . 
                                            . f 2 f f c f 2 2 2 f . 
                                            . . f 2 f 2 1 f 1 f f . 
                                            . . . f f c c e e e f . 
                                            . . f f f f c c e f . . 
                                            . d d c f c f f f . . . 
                                            . d d c c e e f f 3 . . 
                                            . . . f f f f f 4 f . . 
                                            . . f f f f f 4 4 f . . 
                                            . f e e f . . f f . . . 
                                            . . . e e f . . . . . . 
                                            `],
                                        100,
                                        false
                                        )
                                    }
                                }
                                animation.runImageAnimation(
                                projectile5,
                                [img`
                                    . . . d d . . . 
                                    . . d c c d . . 
                                    . b c c c c b . 
                                    b c c . . c c b 
                                    c . . . . . . c 
                                    . . . . . . . . 
                                    . . . . . . . . 
                                    . . . . . . . . 
                                    `,img`
                                    . . . b c . . . 
                                    . . b c . . . . 
                                    . d c c . . . . 
                                    d c c . . . . . 
                                    d c c . . . . . 
                                    . d c c . . . . 
                                    . . b c . . . . 
                                    . . . b c . . . 
                                    `,img`
                                    . . . . . . . . 
                                    . . . . . . . . 
                                    . . . . . . . . 
                                    c . . . . . . c 
                                    b c c . . c c b 
                                    . b c c c c b . 
                                    . . d c c d . . 
                                    . . . d d . . . 
                                    `,img`
                                    . . . c b . . . 
                                    . . . . c b . . 
                                    . . . . c c d . 
                                    . . . . . c c d 
                                    . . . . . c c d 
                                    . . . . c c d . 
                                    . . . . c b . . 
                                    . . . c b . . . 
                                    `],
                                100,
                                true
                                )
                            }
                        })
                    })
                    for (let index = 0; index < 1200; index++) {
                        timer.after(1, function () {
                            bossRunCount = 0
                        })
                    }
                }
            }
        }
    }
})
forever(function () {
    pause(1500)
    for (let value82 of sprites.allOfKind(SpriteKind.Yellow)) {
        animation.runImageAnimation(
        value82,
        [img`
            . . . . . . . . . . . . 
            . 3 3 f f f . . . . . . 
            . 3 f 5 5 4 f . . . . . 
            . f e e e e 4 f . . . . 
            . f f 1 f 1 e f f . . . 
            . f 5 5 5 4 4 f e f . . 
            . . f 5 4 4 f f e f . . 
            . . . f f f f 4 f f . . 
            . . . f 5 5 4 d d f . . 
            . . . f f f f d d . . . 
            . . f f f f f f f f . . 
            . f e e f . . f 4 4 f . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f . . . . . . 
            1 . f 5 5 4 f . . . . . 
            1 f e e e e 4 f . . . . 
            1 f f 1 f 1 e f f . . . 
            1 f 5 5 5 4 4 f e f . . 
            1 1 f 5 4 4 f f e f . . 
            1 1 . f f f f 4 f f . . 
            . 1 . f 5 5 4 d d f . . 
            . . . f f f f d d . . . 
            . . f f f f f f f f . . 
            . f e e f . . f 4 4 f . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f . . . . . . 
            . . f 5 5 4 f . . . . . 
            . f e e e e 4 f . . . . 
            . f f 1 f 1 e f f . . . 
            . f 5 5 5 4 4 f e f . . 
            . . f 5 4 4 f f e f . . 
            . 3 3 f f f f 4 f f . . 
            . 3 3 f 5 5 4 d d f . . 
            . . . f f f f d d . . . 
            . . f f f f f f f f . . 
            . f e e f . . f 4 4 f . 
            `,img`
            . . . . . . . . . . . . 
            . . . . . f f f . . . . 
            . . . . f 5 5 4 f . . . 
            . . . f e e e e 4 f . . 
            . . . f f 1 f 1 e f f . 
            . . . f 5 5 5 4 4 f e f 
            . . . . f 5 4 4 f f e f 
            . . . . f f f f 4 f f . 
            . . . 3 f 5 5 4 d d f . 
            . . . 3 f f f f d d . . 
            . . f f f f f f f f . . 
            . f e e f . . f 4 4 f . 
            `],
        100,
        false
        )
        projectile2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . 
            . . . . . 4 5 . 
            . . . . . d 4 . 
            . . b c d . . . 
            . b c c c . . . 
            . c c c f . . . 
            . . f f . . . . 
            . . . . . . . . 
            `, value82, -32, -150)
        projectile3 = sprites.createProjectileFromSprite(img`
            . . . . . . . . 
            . . . . . 4 5 . 
            . . . . . d 4 . 
            . . b c d . . . 
            . b c c c . . . 
            . c c c f . . . 
            . . f f . . . . 
            . . . . . . . . 
            `, value82, -80, -200)
        animation.runImageAnimation(
        projectile2,
        [img`
            . . . . . . . . 
            . . . . . 4 5 . 
            . . . . . d 4 . 
            . . b c d . . . 
            . b c c c . . . 
            . c c c f . . . 
            . . f f . . . . 
            . . . . . . . . 
            `,img`
            . . . . . . . . 
            . . . . . . 4 5 
            . b b b c d d 4 
            b b c c c c . . 
            b c c c c c . . 
            c c c c c f . . 
            c c c c f f . . 
            . f f f f . . . 
            `],
        100,
        true
        )
        animation.runImageAnimation(
        projectile3,
        [img`
            . . . . . . . . 
            . . . . . 4 5 . 
            . . . . . d 4 . 
            . . b c d . . . 
            . b c c c . . . 
            . c c c f . . . 
            . . f f . . . . 
            . . . . . . . . 
            `,img`
            . . . . . . . . 
            . . . . . . 4 5 
            . b b b c d d 4 
            b b c c c c . . 
            b c c c c c . . 
            c c c c c f . . 
            c c c c f f . . 
            . f f f f . . . 
            `],
        100,
        true
        )
        projectile2.setKind(SpriteKind.EnemyProjectile)
        projectile3.setKind(SpriteKind.EnemyProjectile)
        projectile2.ay = 600
        projectile3.ay = 600
        projectile2.setFlag(SpriteFlag.DestroyOnWall, false)
        projectile3.setFlag(SpriteFlag.DestroyOnWall, false)
    }
})
forever(function () {
    pause(1500)
    for (let value72 of sprites.allOfKind(SpriteKind.Green)) {
        projectile2 = sprites.createProjectileFromSprite(img`
            . . . . . . 
            3 3 3 3 3 3 
            3 1 1 1 1 1 
            . . . . . . 
            `, value72, 72, 0)
        projectile3 = sprites.createProjectileFromSprite(img`
            . . . . . . 
            3 3 3 3 3 3 
            1 1 1 1 1 3 
            . . . . . . 
            `, value72, -72, 0)
        projectile2.z = -3
        projectile3.z = -3
        projectile2.setKind(SpriteKind.EnemyProjectile)
        projectile3.setKind(SpriteKind.EnemyProjectile)
        projectile2.setFlag(SpriteFlag.DestroyOnWall, false)
        projectile3.setFlag(SpriteFlag.DestroyOnWall, false)
    }
})
forever(function () {
    for (let value9 of sprites.allOfKind(SpriteKind.Hitbox)) {
        if (characterAnimations.matchesRule(ninjiHitbox, characterAnimations.rule(Predicate.MovingLeft, Predicate.FacingLeft, Predicate.HittingWallDown))) {
            characterAnimations.loopFrames(
            ninji,
            [img`
                . . . . . . . . . . . . 
                . . . . . . . . . . . . 
                . . . f f f . . . . . . 
                . . f b b c f . . . . . 
                . f 2 2 2 2 c f f . . . 
                . f f 1 f 1 2 f 2 f . . 
                . f b b b c c f f 2 f . 
                . . f b c c f f f . . . 
                . . . f f f c f c d d . 
                . . . f f f b c c d d . 
                . . f e e f f f 4 4 f . 
                . f e e . . . . f f . . 
                `,img`
                . . . . . . . . . . . . 
                . . . f f f . . . . . . 
                . . f b b c f . . . . . 
                . f 2 2 2 2 c f f . . . 
                . f f 1 f 1 2 f 2 2 f . 
                . f b b b c c f f f . . 
                . . f b c c f f f . . . 
                . . . f f f c f c d d . 
                . . . f f b b c c d d . 
                . . . . . f f f f . . . 
                . . . . f e f 4 f . . . 
                . . . f e f 4 4 f . . . 
                `,img`
                . . . f f f . . . . . . 
                . . f b b c f . f . . . 
                . f 2 2 2 2 c f f 2 f . 
                . f f 1 f 1 2 f 2 f . . 
                . f b b b c c f f . . . 
                . . f b c c f f f f . . 
                . . . f f f c f c d d . 
                . . . f f b b c c d d . 
                . . f 4 f f f f f . . . 
                . . f 4 4 f f f f f . . 
                . . . f f . . f e e f . 
                . . . . . . f e e . . . 
                `],
            100,
            characterAnimations.rule(Predicate.MovingLeft)
            )
        } else if (characterAnimations.matchesRule(ninjiHitbox, characterAnimations.rule(Predicate.MovingRight, Predicate.FacingRight, Predicate.HittingWallDown))) {
            characterAnimations.loopFrames(
            ninji,
            [img`
                . . . . . . . . . . . . 
                . . . . . . . . . . . . 
                . . . . . . f f f . . . 
                . . . . . f c b b f . . 
                . . . f f c 2 2 2 2 f . 
                . . f 2 f 2 1 f 1 f f . 
                . f 2 f f c c b b b f . 
                . . . f f f c c b f . . 
                . d d c f c f f f . . . 
                . d d c c b f f f . . . 
                . f 4 4 f f f e e f . . 
                . . f f . . . . e e f . 
                `,img`
                . . . . . . . . . . . . 
                . . . . . . f f f . . . 
                . . . . . f c b b f . . 
                . . . f f c 2 2 2 2 f . 
                . f 2 2 f 2 1 f 1 f f . 
                . . f f f c c b b b f . 
                . . . f f f c c b f . . 
                . d d c f c f f f . . . 
                . d d c c b b f f . . . 
                . . . f f f f . . . . . 
                . . . f 4 f e f . . . . 
                . . . f 4 4 f e f . . . 
                `,img`
                . . . . . . f f f . . . 
                . . . f . f c b b f . . 
                . f 2 f f c 2 2 2 2 f . 
                . . f 2 f 2 1 f 1 f f . 
                . . . f f c c b b b f . 
                . . f f f f c c b f . . 
                . d d c f c f f f . . . 
                . d d c c b b f f . . . 
                . . . f f f f f 4 f . . 
                . . f f f f f 4 4 f . . 
                . f e e f . . f f . . . 
                . . . e e f . . . . . . 
                `],
            100,
            characterAnimations.rule(Predicate.MovingRight)
            )
        }
    }
})
forever(function () {
    for (let value62 of sprites.allOfKind(SpriteKind.Red)) {
        if (value62.isHittingTile(CollisionDirection.Bottom)) {
            pause(100)
            value62.vy = -200
        }
    }
})
forever(function () {
    if (showBossRunCount) {
        info.setScore(bossRunCount)
    }
})
