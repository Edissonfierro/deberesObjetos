export function decodedValue(colors: string[]): number {
    const colorMap: { [key: string]: number } = {
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
    // Tomamos los dos primeros colores de la lista (o menos si hay menos de dos)
    const firstColor = colors[0].toLowerCase();
    const secondColor = colors[1]?.toLowerCase() || "";
    // Obtenemos los valores numéricos de los colores
    const firstValue = colorMap[firstColor];
    const secondValue = colorMap[secondColor];
    // Calculamos el valor numérico resultante
    const result = (firstValue * 10) + secondValue;
    return result;
}

//