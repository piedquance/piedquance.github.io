let chamber1 = [
  ["#", "#", "#", "#", "#", "#", "#"],
  ["#", ".", ".", ".", ".", ".", "#"],
  ["#", ".", ".", ".", ".", ".", "#"],
  ["#", ".", ".", "a", ".", ".", "#"],
  ["#", ".", ".", ".", ".", ".", "#"],
  ["#", ".", ".", ".", ".", ".", "#"],
  ["#", "#", "#", "#", "#", "#", "#"]];
function place(room, thing) {
  for(let n1 = 0; n1 < room.length; n1++) {
    for(let n2 = 0; n2 < room[n1].length; n2++) {
      if (room[n1][n2] === thing) return [n1, n2];
    }
  }
}
function newMap(map, mov, char, border, tile) {
  let coor = place(map, char);
  switch(mov) {
    case 87: if(map[coor[0] - 1][coor[1]] !== border) {
      map[coor[0]][coor[1]] = tile;
      map[coor[0] - 1][coor[1]] = char;};
      break;
    case 83: if(map[coor[0] + 1][coor[1]] !== border) {
      map[coor[0]][coor[1]] = tile;
      map[coor[0] + 1][coor[1]] = char;};
      break;
    case 65: if(map[coor[0]][coor[1] - 1] !== border) {
      map[coor[0]][coor[1]] = tile;
      map[coor[0]][coor[1] - 1] = char;};
      break;
    case 68: if(map[coor[0]][coor[1] + 1] !== border) {
      map[coor[0]][coor[1]] = tile;
      map[coor[0]][coor[1] + 1] = char;};
      break;
    }
  return map;
}
function arrayToString(mapT) {
  let mapImage = "";
  for(let row = 0; row < mapT.length; row++) {
    for(let location = 0; location < mapT[row].length; location++) {
      mapImage += mapT[row][location];
    }
    mapImage += "<br>";
  }
  return mapImage;
};
document.addEventListener("keydown", function(event) {
document.getElementById("room").innerHTML = arrayToString(newMap(chamber1, event.keyCode, "a", "#", "."))
});
