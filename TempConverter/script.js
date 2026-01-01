const celsiusInput = document.getElementById("celsius");
const kelvinInput = document.getElementById("kelvin");
const farenheitInput = document.getElementById("fahren");
const button = document.getElementById("submit");

function temperature() {

    let choice = " ";

    if (celsiusInput.value !== "")
        choice = "c";
    else if (kelvinInput.value !== "")
        choice = "k";  
    else if (farenheitInput.value !== "")
        choice = "f";  
    else {
        alert("enter valid number");
        return;
    }

    switch (choice) {

        case "c":
            const celsius = parseFloat(celsiusInput.value);
            let kelvin = celsius + 273.15;      
            let farenheit = (celsius * 9/5) + 32;

            kelvinInput.value = kelvin;
            farenheitInput.value = farenheit;
            break;

        case "k":
            const kelvinValue = parseFloat(kelvinInput.value);
            let celsiusFromK = kelvinValue - 273.15;  
            let farenheitFromK = ((kelvinValue - 273.15) * 9/5) + 32;

            celsiusInput.value = celsiusFromK;
            farenheitInput.value = farenheitFromK;
            break;

        case "f":
            const farenheitValue = parseFloat(farenheitInput.value);
            let celsiusFromF = (farenheitValue - 32) * 5/9;
            let kelvinFromF = celsiusFromF + 273.15;

            celsiusInput.value = celsiusFromF;
            kelvinInput.value = kelvinFromF;
            break;

        default:
            alert("valid number");
    }
}
