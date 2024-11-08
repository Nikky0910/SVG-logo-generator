class Shape {
    constructor(text, textColor, shapeColor){
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor
    }
    render() {
        return new Error("Child is required to use its own render() function")
    }
}

module.exports = Shape;