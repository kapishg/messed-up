class Game {
    constructor(){}
    readstate () {
        var abdc=database.ref(`gamestate`)
        abdc.on("value",function(data) {
gameState=data.val()
        })
    }
    updatestate(anything){
        database.ref(`/`).update(
         {
             gamestate:anything
         }   
        )
    }
    start(){
        if(gameState==0){
            player=new Player()
            player.getcount()
            form=new Form()
            form.display()
        }
    }
}