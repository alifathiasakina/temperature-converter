class Converter{
  fromCelcius(selectTo, tempinput){
    if (selectTo == "celcius"){
      return tempinput;
    }
    if (selectTo == "reamur"){
      return (4 / 5) * tempinput;
    }
    if (selectTo == "fahrenheit"){
      return (9 / 5) * tempinput + 32;
    }
    if (selectTo == "kelvin"){
      return (5 / 5) * tempinput + 273.15;
    }
  }
  fromReamur(selectTo, tempinput){
    if (selectTo == "reamur"){
      return tempinput;
    }
    if (selectTo == "celcius"){
      return (5 / 4) * tempinput;
    }
    if (selectTo == "fahrenheit"){
      return (9 / 4) * tempinput + 32;
    }
    if (selectTo == "kelvin"){
      return (5 / 4) * tempinput + 273.15;
    }
  }
  fromFarenheit(selectTo, tempinput){
    if (selectTo == "fahrenheit"){
      return tempinput;
    }
    if (selectTo == "celcius"){
      return (5 / 9) * (tempinput - 32);
    }
    if (selectTo == "reamur"){
      return (4 / 9) * (tempinput - 32);
    }
    if (selectTo == "kelvin"){
      return (5 / 9) * (tempinput + 459.67);
    }
  }
  fromKelvin(selectTo, tempinput){
      if (selectTo == "kelvin"){
        return tempinput;
      }
      if (selectTo == "celcius"){
        return (5 / 5) * (tempinput - 273.15);
      }
      if (selectTo == "reamur"){
        return (4 / 5) * (tempinput - 273.15);
      }
      if (selectTo == "fahrenheit"){
        return (9 / 5 * tempinput) - 459.67;
      }
    }
}

module.exports = Converter;
