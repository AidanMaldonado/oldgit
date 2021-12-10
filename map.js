// This example requires the Visualization library. Include the libraries=visualization
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=visualization">
let map, heatmap;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: { lat: 41.8781, lng: -87.6298 },
    mapTypeId: "roadmap",
  });
  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(),
    map: map,
  });
  document
    .getElementById("toggle-heatmap")
    .addEventListener("click", toggleHeatmap);
  document
    .getElementById("change-gradient")
    .addEventListener("click", changeGradient);
  document
    .getElementById("change-opacity")
    .addEventListener("click", changeOpacity);
  document
    .getElementById("change-radius")
    .addEventListener("click", changeRadius);
}

function toggleHeatmap() {
  heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeGradient() {
  const gradient = [
    "rgba(0, 255, 255, 0)",
    "rgba(0, 255, 255, 1)",
    "rgba(0, 191, 255, 1)",
    "rgba(0, 127, 255, 1)",
    "rgba(0, 63, 255, 1)",
    "rgba(0, 0, 255, 1)",
    "rgba(0, 0, 223, 1)",
    "rgba(0, 0, 191, 1)",
    "rgba(0, 0, 159, 1)",
    "rgba(0, 0, 127, 1)",
    "rgba(63, 0, 91, 1)",
    "rgba(127, 0, 63, 1)",
    "rgba(191, 0, 31, 1)",
    "rgba(255, 0, 0, 1)",
  ];

  heatmap.set("gradient", heatmap.get("gradient") ? null : gradient);
}

function changeRadius() {
  heatmap.set("radius", heatmap.get("radius") ? null : 60);
}

function changeOpacity() {
  heatmap.set("opacity", heatmap.get("opacity") ? null : 0.2);
}

// Heatmap data: 500 Points
function getPoints() {
  return [
    new google.maps.LatLng(41.8533372396358, -87.61839247576079),
    new google.maps.LatLng(41.855483002649045, -87.68649345671234),
    new google.maps.LatLng(41.857479515798595, -87.63574921068002),
    new google.maps.LatLng(41.882382520700254, -87.6257836567113),
    new google.maps.LatLng(41.881771688526875, -87.63262738739951),
    new google.maps.LatLng(41.85520881211947, -87.70026363158063),
    new google.maps.LatLng(41.8532223253734, -87.71791998740056),
    new google.maps.LatLng(41.85741731593847, -87.70805483581174),
    new google.maps.LatLng(41.86136839309954, -87.70931108369597),
    new google.maps.LatLng(41.97460179635606, -87.71306418554386),
    new google.maps.LatLng(41.8682481915753, -87.68573365671185),
    new google.maps.LatLng(41.88161914066681, -87.63186260274357),
    new google.maps.LatLng(41.88771188354709, -87.675261241367),
    new google.maps.LatLng(41.88292758305088, -87.63068180274352),
    new google.maps.LatLng(41.981230037125236, -87.86283848369139),
    new google.maps.LatLng(41.618359701298345, -87.48144919904931),
    new google.maps.LatLng(41.82714189438262, -87.65066825856553),
    new google.maps.LatLng(41.881220450351286, -87.63482788739952),
    new google.maps.LatLng(41.818766998602904, -87.61731264507394),
    new google.maps.LatLng(41.82404871055283, -87.60269484507373),
    new google.maps.LatLng(41.65570736529653, -87.5990526315882),
    new google.maps.LatLng(41.82351101632483, -87.62605051438557),
    new google.maps.LatLng(41.81668029958, -87.60623743158207),
    new google.maps.LatLng(41.81651913163443, -87.61625429904173),
    new google.maps.LatLng(41.82333392589808, -87.60726952920277),
    new google.maps.LatLng(41.82428727566125, -87.61972158740168),
    new google.maps.LatLng(41.816920619009124, -87.62013588925493),
    new google.maps.LatLng(41.779179494606545, -87.6749396604195),
    new google.maps.LatLng(41.82575459224007, -87.62448759110592),
    new google.maps.LatLng(41.825778576858696, -87.62435884507369),
    new google.maps.LatLng(41.845063653561226, -87.69365582972887),
    new google.maps.LatLng(41.888329627457004, -87.76576921623524),
    new google.maps.LatLng(41.83662742739448, -87.6484459162372),
    new google.maps.LatLng(41.865567597605555, -87.66213321623614),
    new google.maps.LatLng(41.768800825095894, -87.64601921438769),
    new google.maps.LatLng(41.76860911551194, -87.6488017278796),
    new google.maps.LatLng(41.743806491664735, -87.60524898740474),
    new google.maps.LatLng(41.73684449279643, -87.60117054507703),
    new google.maps.LatLng(41.87776381215136, -87.64778076835127),
    new google.maps.LatLng(38.765786626153925, -90.00358504518596),
    new google.maps.LatLng(42.0106179579214, -87.88964809903436),
    new google.maps.LatLng(41.88245663522438, -87.63128584321935),
    new google.maps.LatLng(41.88759207644131, -87.67546508925138),
    new google.maps.LatLng(41.8565765088724, -87.62434022602415),
    new google.maps.LatLng(41.8876879221439, -87.67531488554708),
    new google.maps.LatLng(42.13917910301451, -88.45884353156978),
    new google.maps.LatLng(41.86562560671983, -87.67681652787589),
    new google.maps.LatLng(40.002618348616835, -75.46030808746951),
    new google.maps.LatLng(41.88725814649415, -86.60869077390734),
    new google.maps.LatLng(41.880878843258095, -87.75218876041566),
    new google.maps.LatLng(42.0545424404339, -87.6957424799843),
    new google.maps.LatLng(42.026251103511704, -87.73135314136175),
    new google.maps.LatLng(42.03373293192266, -87.70452003342594),
    new google.maps.LatLng(42.042692240465115, -87.69876155670521),
    new google.maps.LatLng(41.93142168600349, -87.77492372972554),
    new google.maps.LatLng(42.114806587766985, -87.75373511860569),
    new google.maps.LatLng(42.01991791470415, -87.69356104506628),
    new google.maps.LatLng(41.69014559744757, -87.70709432900044),
    new google.maps.LatLng(41.88777331193859, -87.66560657020305),
    new google.maps.LatLng(41.91042837115826, -87.71031963157853),
    new google.maps.LatLng(41.901411475201556, -87.75122961808692),
    new google.maps.LatLng(41.87264614749377, -87.75257034136759),
    new google.maps.LatLng(41.90720249692787, -87.69421603343078),
    new google.maps.LatLng(41.907178027559, -87.72697986041469),
    new google.maps.LatLng(41.873293279685825, -87.75343511253155),
  ];
}
