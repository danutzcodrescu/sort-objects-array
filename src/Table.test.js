const Table = require("./Table")
// @ponicode
describe("sort", () => {
    let inst

    beforeEach(() => {
        inst = new Table.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.sort(-100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.sort("status")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.sort(100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.sort("group")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.sort("phone")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.sort(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
