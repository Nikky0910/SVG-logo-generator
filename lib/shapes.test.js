const Shape = require("./shapes");

describe("Shape", () => {
    
    describe("text", () => {
        it ("test text", () => {
            const shape = new Shape("HP", "blue", "grey");
            expect(shape.text).toEqual("HP");
        })
    })

    describe("textColor", () => {
        it ("test textColor", () => {
            const shape = new Shape("HP", "blue", "grey");
            expect(shape.textColor).toEqual("blue");
        })
    })

    describe("shapeColor", () => {
        it ("test shapeColor", () => {
            const shape = new Shape("HP", "blue", "grey");
            expect(shape.shapeColor).toEqual("grey");
        })
    })

    describe("render", () => {
        it ("test Error", () => {
            const shape = new Shape("HP", "blue", "grey");
            expect(shape.render()).toEqual(new Error("Child is required to use its own render() function"));
        })
    })

})