class Flowers{
    constructor(){
        this.flowers = [
            {id: 1, name: 'Rose', color: 'Red'},
            {id: 2, name: 'Daisy', color: 'White'},
            {id: 3, name: 'Lily', color: 'Yellow'},
        ];
    }

    getAllCars(){
        return this.flowers;
    }
}

module.exports = Flowers;