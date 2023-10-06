function darkMode(){

// Get a reference to the <html> tag
var htmlTag = document.documentElement;

// Add an attribute and value to the <html> tag
htmlTag.setAttribute("data-bs-theme", "dark");
}


function lightMode(){

// Get a reference to the <html> tag
var htmlTag = document.documentElement;

// Add an attribute and value to the <html> tag
htmlTag.setAttribute("data-bs-theme", "light");
}


        function appendToDisplay(value) {
            const display = document.getElementById('display');
            display.value += value;
        }

        function clearDisplay() {
            const display = document.getElementById('display');
            display.value = '';
        }

        function calculate() {
            const display = document.getElementById('display');
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        }
    
