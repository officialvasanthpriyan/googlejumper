controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (TRex.isHittingTile(CollisionDirection.Bottom)) {
        TRex.vy = -220
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.gameOver(false)
})
sprites.onCreated(SpriteKind.Projectile, function (sprite) {
    info.changeScoreBy(1)
})
let exit2 = 0
let exit = 0
let projectile: Sprite = null
let TRex: Sprite = null
scene.setBackgroundColor(13)
TRex = sprites.create(img`
    .................bbbb........bbbb
    .................b99bb......bb99c
    .................c999bb....bb999c
    .................c9b99bccccb99b9c
    .................c9bb99bccb99bb9c
    .................c93b99999999b39c
    .................c93399999999339c
    .................c99399999999399c
    .................c99999119999999c
    ...bbbbbb........c99ff91119ff999c
    .bb999999c.......c99ff11119ff999c
    .b99999999c......c99911111119999c
    b9999111999c.....c9911fff1111999c
    b9991111199c.....cb9911fff11c999c
    b99111dd119c.....cb9c111111cc999c
    c9911dbbddbc....ccb99cc33bb99999c
    c9911bbbdbbccccbb99999c33b999999c
    c9991bb9999999999999999bb9999999c
    c999b999999999999999999911119999c
    .c999999999999999999999111111999c
    .cc99999999999999999991111111999c
    ..c99999999999999999991111111199c
    ..c99999999999999999911111111199c
    ..c9999999999999999991111111119bc
    ..c9999999999999999991111111119f.
    ..c999999999999999999111111111ff.
    ..c99999999999999999911111111bf..
    ..c9999991111119999999111111bf...
    ..c99999111111119999991111bbbf...
    ..c9999bcccccccccc9999bfffbbf....
    ..c9999c.fbbf.....c999f..fbbf....
    .c9999cc.fbbf.....c999f..fbbf....
    .c999cc..fbf.......c99f..fbbf....
    .c99cc..fbbf.......c99f..fbbf....
    .c99c...fbbf.......c99f..fbbf....
    .c99c...fbbbf......c99f..fbbf....
    .c9bc....ffff......c99f..fbbbf...
    .c999c.............c999f..fbbf...
    .c999c.............cc99f..ffff...
    ..cccc..............cfff.........
    `, SpriteKind.Player)
TRex.setPosition(20, 70)
TRex.ay = 350
tiles.setCurrentTilemap(tilemap`level2`)
game.onUpdateInterval(1500, function () {
    projectile = sprites.createProjectileFromSide(img`
        ..........bbbbbbbbbbbb..........
        .......bbb331111333333bbb.......
        .....cbb3331111113333333bbb.....
        ....cb33333311113333333111db....
        ...cb3111133333333333311111db...
        .ccbb1111113333333333311111ddcc.
        ccbbd1111113333333333331111ddbcc
        cbbbdd11111333333111333311ddbbbc
        cbbbdddd1133333311111333bbbbbbbc
        .cbbbddddbbb33331111dbbbbbbbbbc.
        .ccbbbbbbbbbbbbbbdddbbbbbbbbbcc.
        ...cccbbbbbbbbbbbbbbbbbbbbccc...
        ......cccccccccccccccccccc......
        ............bbbd11bb............
        ...........bbbdd111bb...........
        ..........bbbdddd11dbb..........
        `, randint(-200, -120), 0)
    tiles.placeOnTile(projectile, tiles.getTileLocation(9, 5))
    projectile.setFlag(SpriteFlag.AutoDestroy, true)
    exit += 1
    if (exit > 4) {
        exit2 = randint(1, 2)
        if (exit2 == 2) {
            pause(100)
            projectile = sprites.createProjectileFromSide(img`
                ....................ccfff...........
                ..........fffffffffcbbbbf...........
                .........fbbbbbbbbbfffbf............
                .........fbb111bffbbbbff............
                .........fb11111ffbbbbbcff..........
                .........f1cccc11bbcbcbcccf.........
                ..........fc1c1c1bbbcbcbcccf...ccccc
                ............c3331bbbcbcbccccfccddbbc
                ...........c333c1bbbbbbbcccccbddbcc.
                ...........c331c11bbbbbcccccccbbcc..
                ..........cc13c111bbbbccccccffbccf..
                ..........c111111cbbbcccccbbc.fccf..
                ...........cc1111cbbbfdddddc..fbbcf.
                .............cccffbdbbfdddc....fbbf.
                ..................fbdbbfcc......fbbf
                ...................fffff.........fff
                `, randint(-120, -100), 21)
            tiles.placeOnTile(projectile, tiles.getTileLocation(9, 3))
        }
    }
})
