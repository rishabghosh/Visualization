const radiousRatios = [5, 6, 2, 4, 1, 3];

const createRGB = function(index) {
  const firstColor = index * 30;
  const secondColor = index * 45;
  const thirdColor = index * 60;
  return `rgb(${firstColor}, ${secondColor}, ${thirdColor})`;
};

const main = function() {
  const container = d3.select("#chart-container");
  const svg = container
    .append("svg")
    .attr("width", 600)
    .attr("height", 400);

  svg
    .selectAll("circle")
    .data(radiousRatios)
    .enter()
    .append("circle")
    .attr("r", ratios => ratios * 5)
    .attr("cx", (ratios, index) => 60 * index + 30)
    .attr("cy", (ratios, index) => 60 * index + 30)
    .attr("fill", (ratios, index) => createRGB(index));
  //also can do .attr("fill", (_, i)=> ["green", "blue", "red", "purple", "yellow", "orange"][i])
};

window.onload = main;
