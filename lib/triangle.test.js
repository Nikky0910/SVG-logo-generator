const Triangle = require("./triangle");

describe("Triangle", () => {

    describe("text", () => {
        it("test text", () => {
            const triangle = new Triangle("CPU", "orange", "white");
            expect(triangle.text).toEqual("CPU");
        })
    })

    describe("textColor", () => {
        it("test textColor", () => {
            const triangle = new Triangle("CPU", "orange", "white");
            expect(triangle.textColor).toEqual("orange");
        })
    })

    describe("shapeColor", () => {
        it("test shapeColor", () => {
            const triangle = new Triangle("CPU", "orange", "white");
            expect(triangle.shapeColor).toEqual("white");
        })
    })

    describe("render", () => {
        it("test triangle's SVG logo", () => {
            const triangle = new Triangle("CPU", "orange", "white");
            expect(triangle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon width="300" height="200" points="150, 18 244, 182 56, 182" fill="${triangle.shapeColor}" stroke="${triangle.textColor}"/><text x="150" y="125" font-size="30" text-anchor="middle" fill="${triangle.textColor}">${triangle.text}</text></svg>`);
        })
    })
})