
  function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function Voodoo(name, id, openHours, traffic, enter, avgOrder) {
    this.name = name;
    this.id = id;
    this.openHours = openHours; //Store hours using 24hr clock [open, close]
    this.traffic = traffic;     //Hourly Foot Traffic [min, max]
    this.enter = enter;         //Customer percentage that enter stores (1-100%)
    this.avgOrder = avgOrder;

    this.createCell = function(amount) {
      var rowEl = document.getElementById(this.id);
      var cellEl = document.createElement('td');
      cellEl.textContent = amount;
      rowEl.appendChild(cellEl);
    };

    this.forecast = function() {
      var forecastTotal = 0,
          footTraffic,
          forecastAmount;

      for( i = 0; i < 24; i++ ) {
        var time = i * 100;

        if ( time >= this.openHours[0] && time < this.openHours[1] ) {
          footTraffic = getRandomInt(this.traffic[0], this.traffic[1]);
          forecastAmount = Math.floor((this.enter / 100) * footTraffic * this.avgOrder);
          forecastTotal += forecastAmount;
          this.createCell(forecastAmount);
        };
      };
      this.createCell(forecastTotal);
      return forecastTotal;
    };
  };

  var vDowntown = new Voodoo('Downtown', 'downtown', [700, 1800], [80, 220], 10, 4),
      vCapitolHill = new Voodoo('Capitol Hill', 'capitolhill', [700, 1800], [5, 45], 45, 2),
      vSouthLakeUnion = new Voodoo('South Lake Union', 'slu', [700, 1800], [180, 250], 5, 6),
      vWedgewood = new Voodoo('Wedgewood', 'wedgewood', [700, 1800], [20, 60], 20, 1.5),
      vBallard = new Voodoo('Ballard', 'ballard', [700, 1800], [25, 175], 33, 1);

  var elDT = document.getElementById('cbDT'),
      elCH = document.getElementById('cbCH'),
      elSLU = document.getElementById('cbSLU'),
      elWW = document.getElementById('cbWW'),
      elBA = document.getElementById('cbBA');

  function runForecast() {
    if (this.checked) {
      switch (this.id) {
        case "cbDT":
          vDowntown.forecast();
          break;
        case "cbCH":
          vCapitolHill.forecast();
          break;
        case "cbSLU":
          vSouthLakeUnion.forecast();
          break;
        case "cbWW":
          vWedgewood.forecast();
          break;
        case "cbBA":
          vBallard.forecast();
          break;
      }
      this.disabled = true;
    }
  }

  elDT.addEventListener('change', runForecast, false);
  elCH.addEventListener('change', runForecast, false);
  elSLU.addEventListener('change', runForecast, false);
  elWW.addEventListener('change', runForecast, false);
  elBA.addEventListener('change', runForecast, false);
