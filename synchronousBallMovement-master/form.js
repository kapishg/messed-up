class Form{constructor(){
     this.input =createInput("enter your name")
    this.tittle = createElement(`h3`)
    this.button =createButton("ready set go")
     this.greet=createElement(`h4`)
}

display(){
   this. input.position(100,100)
  this.  tittle.position(200,50)
    this.tittle.html("get ready")
    this.button.position(300,350)
   this. button.mousePressed(
        function(){
           this. input.hide()
           this. button.hide()
           player.name=input.value()
            playercount++
            player.index=playercount
            player.update()
            player.updatecount(playercount)
           this. greeting.html("hello"+player.name)
            thiis.greeting.position(350,200)

        }
    )
}
}