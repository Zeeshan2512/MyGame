window.addEventListener('keydown', (event) =>{
    if(player.preventInput) return

    switch (event.key) {
        case 'w':
            for(let i=0; i<doors.length; i++){
                const door = doors[i]
            
            if(
                player.hitbox.position.x + player.hitbox.width <= door.position.x + door.width && 
                player.hitbox.position.x  >= door.position.x &&
                player.hitbox.position.y + player.hitbox.height >= door.position.y &&
                player.hitbox.position.y <= door.position.y + door.height
            ){
                player.velocity.x=0
                player.velocity.y=0
                player.preventInput= true
                player.switchSprite('enterDoor')
                door.play()
                return 
            }
            }
            if(player.velocity.y===0)player.velocity.y=-25

            break
        
        case 'a':
            // Move in left direction
            // player.velocity.x=-4
            keys.d.pressed = false
            keys.a.pressed = true
            break
        
        case 'd':
            //  Move in right direction
            // player.velocity.x=4
            keys.a.pressed = false
            keys.d.pressed = true
            break
    }
})

window.addEventListener('keyup', (event) =>{
    console.log(event)

    switch (event.key) {
        case 'a':
            // Move in left direction
            keys.a.pressed = false
            // keys.d.pressed = true
            break
        
        case 'd':
            //  Move in right direction
            keys.d.pressed = false
            // keys.a.pressed = true
            break
    }
})