// src/components/MyD3Component.jsx
import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const MyD3Component = () => {
  const svgRef = useRef();

  useEffect(() => {
    // Seleccionar el SVG usando D3 y limpiar cualquier contenido anterior
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    // Configurar las dimensiones del SVG
    const width = 800;
    const height = 400;

    // Crear una curva de ejemplo usando D3
    const data = d3.range(0, 10, 0.1).map(x => ({
      x,
      y: Math.sin(x)
    }));

    const xScale = d3.scaleLinear().domain([0, 10]).range([0, width]);
    const yScale = d3.scaleLinear().domain([-1, 1]).range([height, 0]);

    const line = d3.line()
      .x(d => xScale(d.x))
      .y(d => yScale(d.y))
      .curve(d3.curveCardinal);

    svg.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 2)
      .attr('d', line);

  }, []);

  return <svg ref={svgRef} width={800} height={400} />;
};

export default MyD3Component;
