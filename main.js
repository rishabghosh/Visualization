const main = function() {
  const container = d3.select("#chart-container");
  const svg = container
    .append("svg")
    .attr("width", 600)
    .attr("height", 400);

  const circle = svg
    .append("circle")
    .attr("r", 50)
    .attr("cx", 150)
    .attr("cy", 150)
    .attr("fill", "green");
};

window.onload = main;
