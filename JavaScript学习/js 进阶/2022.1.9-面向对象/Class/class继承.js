class Foo {
    #p = 1;
    getP() {
        return this.#p;
    }
}

class Bar extends Foo {
    constructor() {
        super();
        // console.log(this.#p)
        console.log(this.getP()); // 1
    }
}

let bar1 = new Bar()