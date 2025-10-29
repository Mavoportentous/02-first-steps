import { expect, test, describe } from "vitest";
import { add, divide, multiply, subtract } from "./math.helper";
describe(add, () => {
    test('should add two positives numbers', () => {

        //! 1. Arrange
        const a = 1;
        const b = 2;
        //! 2. Act
        const result = add(a, b);
        //! 3. Assert
        expect(result).toBe(a + b);
    });
});

describe(subtract, () => {
    test('should subtract two positives numbers', () => {

        //! 1. Arrange
        const a = 2;
        const b = 1;
        //! 2. Act
        const result = subtract(a, b);
        //! 3. Assert
        expect(result).toBe(a - b);
    });

    test('should subtract two negatives numbers', () => {

        //! 1. Arrange
        const a = -2;
        const b = -1;
        //! 2. Act
        const result = subtract(a, b);
        //! 3. Assert
        expect(result).toBe(a - b);
    });
});


describe(multiply, () => {
    test('should multiply two positives numbers', () => {

        //! 1. Arrange
        const a = 2;
        const b = 5;
        //! 2. Act
        const result = multiply(a, b);
        //! 3. Assert
        console.log({ result });
        expect(result).toBe(a * b);
    });

    test('should multiply by cero ', () => {

        //! 1. Arrange
        const a = 2;
        const b = 0;
        //! 2. Act
        const result = multiply(a, b);
        //! 3. Assert
        console.log({ result });
        expect(result).toBe(a * b);
    });
});


describe(divide, () => {
    test('should divide two positives numbers', () => {

        //! 1. Arrange
        const a = 2;
        const b = 5;
        //! 2. Act
        const result = divide(a, b);
        //! 3. Assert
        console.log({ result });
        expect(result).toBe(a / b);
    });

    test('should divide by cero ', () => {

        //! 1. Arrange
        const a = 2;
        const b = 0;
        //! 2. Act
        const result = divide(a, b);
        //! 3. Assert
        console.log({ result });
        expect(result).toBe(a / b);
    });
});