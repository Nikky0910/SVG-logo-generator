const Square = require("./square");

describe("Square", () => {
    
    describe("text", () => {
        it("test text", () => {
            const square = new Square("NVM", "black", "white");
            expect(square.text).toEqual("NVM");
        });
    })

    describe("textColor", ()=> {
        it("text textColor", () => {
            const square = new Square("NVM", "black", "white")
            expect(square.textColor).toEqual("black");
        });
    })

    describe("shapeColor", ()=> {
        it("text shapeColor", () => {
            const square = new Square("NVM", "black", "white")
            expect(square.shapeColor).toEqual("white");
        });
    })

    describe("render", ()=> {
        it("test square's SVG logo", () => {
            const square = new Square("NVM", "black", "white");
            expect(square.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><rect x="10" y="10" width="300" height="200" fill= "${square.shapeColor}" stroke="${square.textColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${square.textColor}">${square.text}</text></svg>`);
        });
    })
})