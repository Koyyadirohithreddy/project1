document.addEventListener("DOMContentLoaded", function () {
    let cars = [];

    document.getElementById("carForm").addEventListener("submit", function (event) {
        event.preventDefault();
        insertCar();
    });

    window.insertCar = function () {
        let model = document.getElementById("model").value;
        let year = document.getElementById("year").value;
        let color = document.getElementById("color").value;
        let make = document.getElementById("make").value;

        if (model && year && color && make) {
            cars.push({ model, year, color, make });
            displayCars();
            clearInputs();
        } else {
            alert("Please fill all fields.");
        }
    };

    window.clearInputs = function () {
        document.getElementById("model").value = "";
        document.getElementById("year").value = "";
        document.getElementById("color").value = "";
        document.getElementById("make").value = "";
    };

    window.displayCars = function () {
        let inventory = document.getElementById("Inventory");
        inventory.innerHTML = "";
        cars.forEach(car => {
            let carInfo = document.createElement("p");
            carInfo.textContent = `Model: ${car.model}, Year: ${car.year}, Color: ${car.color}, Make: ${car.make}`;
            inventory.appendChild(carInfo);
        });
    };

    window.clearDisplay = function () {
        document.getElementById("Inventory").innerHTML = "";
    };
});
