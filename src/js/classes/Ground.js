class Ground{
    constructor(width, height,image){
        this.image = new Image()
        this.image.src = image
        this.width = width
        this.height = height
        this.position = {
            x: 0,
            y: 0
        }
        
    }

    
    create(){
        board.drawImage(this.image, this.position.x, this.position.y)
    }
}