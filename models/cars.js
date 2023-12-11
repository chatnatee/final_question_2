class Cars{
    constructor(){
        this.cars = [
            {id: 1, year: 2019, make: 'Toyota', model: 'Camry', color: 'White'},
            {id: 2, year: 2018, make: 'Honda', model: 'Accord', color: 'Black'},
            {id: 3, year: 2017, make: 'Hyundai', model: 'Elantra', color: 'Red'},
        ];
    }

    getAllCars(){
        return this.cars;
    }
}

module.exports = Cars;