// Exercise 2

function changeBackgroundColor() {
    const colorInput = document.getElementById("colorInput").value;
    const body = document.getElementsByTagName("body")[0];
    
    switch (colorInput.toLowerCase()) {
      case "red":
        body.style.backgroundColor = "red";
        break;
      case "blue":
        body.style.backgroundColor = "blue";
        break;
      case "green":
        body.style.backgroundColor = "green";
        break;
      case "black":
        body.style.backgroundColor = "black";
        break;
      case "white":
        body.style.backgroundColor = "white";
        break;
      default:
        alert("Invalid color entered!");
    }
  }
  

//   Exercise 3

function calculateAverage() {
    var input = document.getElementById("numbers").value;
    var numbers = input.split(":");
    var sum = 0;
    var count = 0;

    for (var i = 0; i < numbers.length; i++) {
      var num = parseInt(numbers[i]);

      if (!isNaN(num)) {
        sum += num;
        count++;
      }
    }

    var average = sum / count;
    document.getElementById("result").textContent = average;
  }