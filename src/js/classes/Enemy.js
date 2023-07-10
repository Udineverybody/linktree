class Enemy {
    constructor (props){

        this.width = props.width
        this.height = props.height
        this.speed = props.speed
        this.color = props.color
        this.position = {
            x: props.position.x,
            y: props.position.y
        }

    }

    movement(direction){
        switch (key) {
            case "ArrowUp":
            console.log('loncat')   
            this.position.y -= 1 
            break;
            case"ArrowLeft":
            console.log('ke kiri')
            this.position.x -= 1
            break;
            case "ArrowDown":
            console.log('ke kanan')
            this.position.x += 1
            break;
        
            default:
                break;
        }
    }

    update() {
        //this.position.x +=1
        //this.position.y -= 1
    }

    create() {
        board.fillStyle = this.color
        board.fillRect (this.position.x, this.position.y, this.width, this.height)
    }
}