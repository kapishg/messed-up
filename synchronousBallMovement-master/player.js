class Player {
    constructor(){
        this.index=null
        this.distance=0
        this.name=null
    }
    getcount () {
        var abdc=database.ref(`playercount`)
        abdc.on("value",function(data) {
 playercount=data.val()
        })
    }
    update(){
        database.ref(`players/player`+this.index).set(
         {
             name:this.name,distance:this.distance
         }   
        )
    }
    updatecount(counting){
database.ref(`/`).update({
    playercount:counting
})
    }
    static getplayerin(){
        var fer= database.ref(`players`)
        fer.on("value",(data)=>{
            playerdetails=data.val()
        })
    }
}