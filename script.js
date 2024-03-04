


async function fetchData() {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data1 = await response.json();
      bar(data1);
    } catch (error) {
      console.error(error);
    }
  }
  
  function foo(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9270f33496cedea3d81a8b07d6fd27d8`)
      .then((data2) => data2.json())
      .then((data3) => console.log(data3.main.temp));
  }
  
  var container = document.createElement("div")
container.className = "container"

var row = document.createElement("div")
row.className = "row"


  function bar(data1) {
    console.log(data1);
    for (var i = 6; i <= 8; i++) {
      var col = document.createElement("div");
      col.className = "col-md-4";
      col.id = "col";
      col.innerHTML += `<div class="card" style="width: 18rem;">
          <h4 class="head">${data1[i].capital}<h4>
          <img src=${data1[i].flags.png} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Capital:${data1[i].name.common}</h5>
            <h5 class="card-title">Region:${data1[i].region}</h5>
            <h5 class="card-title">Country Code:${data1[i].cioc}</h5>
            
            <a href="blank" onclick="foo(${data1[i].latlng[0]}, ${data1[i].latlng[1]})" class="btn btn-primary">Click for weather</a>
            
          </div>
        </div>`;
      row.append(col);
      container.append(row);
      document.body.append(container);
    }
  }
  
  // Call fetchData to initiate the process
  fetchData();
  