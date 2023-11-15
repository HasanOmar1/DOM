function Square(a, b, c, d){
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    }

Square.prototype.isSquare = function(){
    return this.a === this.b && this.b === this.c && this.c === this.d 
}

let square1 = new Square(4,4,4,4)
console.log(square1.isSquare())