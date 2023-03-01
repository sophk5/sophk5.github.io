import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

// wczytywanie obrazków

loadSprite("kartka","kartka-swieta.png")
loadSprite("swiatlo","swiatlo.png")

loadSound("muzyka","Cicha_noc.mp3")

add([
    sprite("kartka"),
    pos(0,0)
])


const swiatlo = add([
    sprite("swiatlo"),
    pos(0,0)
])

onUpdate(()=>{
    if (swiatlo.pos.x < 500) swiatlo.pos.x=swiatlo.pos.x+1
})

onKeyPress("space",()=>{
    play("muzyka")
})
