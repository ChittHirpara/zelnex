const fs = require('fs');
const d3 = require('d3-geo');
const topojson = require('topojson-client');
const world = require('world-atlas/countries-110m.json');

// Projection setup matching SVG coordinate system: 1000 x 540
// Center: (500, 290), Scale: 145
const projection = d3.geoMercator()
  .scale(145)
  .translate([500, 290]);

const geojson = topojson.feature(world, world.objects.countries);
const pathGenerator = d3.geoPath().projection(projection);

function sanitizePathD(d) {
  if (!d) return '';
  const subpaths = d.match(/M[^M]+/g) || [];
  const clean = subpaths.filter(p => {
    // Drop sub-paths with negative Y coordinates (Arctic polar artifact boxes)
    if (p.includes(',-') || p.includes('M-') || p.includes('L-')) return false;
    return true;
  });
  return clean.join('');
}

const cleanCountries = geojson.features
  .filter(feature => feature.id !== '010' && feature.id !== 'ATA') // Exclude Antarctica
  .map(feature => {
    let d = pathGenerator(feature);
    if (!d) return null;

    // Clean out any polar box loops
    d = sanitizePathD(d);
    if (!d) return null;

    // Round path coordinates to 2 decimal places to keep crisp & compact
    d = d.replace(/([0-9]+\.[0-9]{2})[0-9]*/g, '$1');

    return {
      id: String(feature.id),
      name: feature.properties ? feature.properties.name : '',
      d: d
    };
  }).filter(Boolean);

console.log('Clean sanitized countries generated:', cleanCountries.length);

const fileContent = `// Geographically accurate 100% real World Map vector paths (Clean Mercator without polar loops)
export const WORLD_PATHS = ${JSON.stringify(cleanCountries, null, 2)};

export function getProjectedCoords(lng: number, lat: number): [number, number] {
  // Mercator projection matching the SVG map paths
  const clampedLat = Math.max(-58, Math.min(72, lat));
  const lambda = (lng * Math.PI) / 180;
  const phi = (clampedLat * Math.PI) / 180;
  const scale = 145;
  const x = Math.round((500 + scale * lambda) * 1e4) / 1e4;
  const y = Math.round((290 - scale * Math.log(Math.tan(Math.PI / 4 + phi / 2))) * 1e4) / 1e4;
  return [x, y];
}
`;

fs.writeFileSync('./data/worldMapData.ts', fileContent, 'utf8');
console.log('Successfully written data/worldMapData.ts with 0 negative artifacts!');
