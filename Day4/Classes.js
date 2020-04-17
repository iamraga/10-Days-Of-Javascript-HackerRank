/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon {
    constructor(array) {
        this.sides = array;
    }
    perimeter() {
        let peri = 0;
        for(let i=0; i<this.sides.length; i++) {
            peri += this.sides[i];
        }
        return peri;
    }
}