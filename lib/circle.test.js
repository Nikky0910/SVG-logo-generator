const Circle = require("./circle");

describe("Circle", ()=> {

    describe("text", ()=> {
        it ("test text", ()=> {
            const circle = new Circle("MN", "white", "blue");
            expect(circle.text).toEqual("MN");
        })
    })

    describe("textColor", ()=> {
        it("test textColor", ()=> {
            const circle = new Circle("MN", "white", "blue");
            expect(circle.textColor).toEqual("white");
        })
    })

    describe("shapeColor", ()=> {
        it("test shapeColor", ()=> {
            const circle = new Circle("MN", "white", "blue");
            expect(circle.shapeColor).toEqual("blue");
        })
    })

    describe("render", ()=> {
        it ("test circle's SVG logo", ()=> {
            const circle = new Circle("MN", "white", "blue");
            expect(circle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill=${circle.shapeColor}/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${circle.textColor}>${circle.text}</text></svg>`);
        })
    })
})