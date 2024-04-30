export function decodedResistorValue(colorList: Array<string>): string {
    let color1: string = colorList[0];
    let color2: string = colorList[1];
    let color3: string = colorList[2];
    
    const colorToValue: { [key: string]: number } = {
      "black": 0,
      "brown": 1,
      "red": 2,
      "orange": 3,
      "yellow": 4,
      "green": 5,
      "blue": 6,
      "violet": 7,
      "grey": 8,
      "white": 9
    };
    let value: number = colorToValue[color1] * 10 + colorToValue[color2];
    let zeros: string = " ohms";
    if (color3 === "brown") {
      value *= 10;
    } else if (color3 === "red") {
      value *= 100;
    } else if (color3 === "orange") {
      value *= 1000;
    } else if (color3 === "yellow") {
      value *= 10000;
    } else if (color3 === "green") {
      value *= 100000;
    } else if (color3 === "blue") {
      value *= 1000000;
    } else if (color3 === "violet") {
      value *= 10000000;
    } else if (color3 === "grey") {
      value *= 100000000;
    } else if (color3 === "white") {
      value *= 1000000000;
    }
    
    if (value >= 1000 && value <= 1000000) {
      value /= 1000;
      zeros = " kiloohms";
    }
    
    if (value >= 1000000  && value <= 1000000000) {
      value /= 1000000;
      zeros = " megaohms";
    }
    
    if (value >= 1000000000) {
      value /= 1000000000;
      zeros = " gigaohms";
    }
    return value.toString() + zeros;
  }