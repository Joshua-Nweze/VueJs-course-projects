import { describe, it, expect } from 'vitest'

//  here we test basic math operations

function addTwoNums(a:number, b:number): number {
    return a + b
}

function subtractTwoNums(a:number, b:number): number {
    return a - b
}

function multiplyTwoNums(a:number, b:number): number {
    return a * b
}

function divideTwoNums(a:number, b:number): number {
    return a / b
}


describe("MathOperations", () => {

    it("add two numbers", () => {
        expect(addTwoNums(2, 4)).toBe(6)
    })
    
    it("subtracts two numbers", () => {
        expect(subtractTwoNums(7, 4)).toBe(3)
    })
    
    it("multiply two numbers", () => {
        expect(multiplyTwoNums(2, 4)).toBe(8)
    })

    it("divides two numbers", () => {
        expect(divideTwoNums(10, 5)).toBe(2)
    })
})