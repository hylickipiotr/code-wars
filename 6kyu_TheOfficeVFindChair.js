function meeting(x, need) {
  if (need == 0) {
    return 'Game On';
  }

  let availebeChairs = x.map(room =>
    room[1] - room[0].length < 0 ? 0 : room[1] - room[0].length
  );

  let roomIndex = 0;
  let neededChairs = [];
  
  while (need > 0 && roomIndex < x.length) {
    if (availebeChairs[roomIndex] > 0) {
      neededChairs[roomIndex] == null ? (neededChairs[roomIndex] = 1) : (neededChairs[roomIndex] += 1);
      availebeChairs[roomIndex] -= 1;
      need -= 1;
    } else {
      neededChairs[roomIndex] == null ? (neededChairs[roomIndex] = 0) : '';
      roomIndex++;
    }
  }

  if (need == 0) {
    return neededChairs;
  } else {
    return 'Not enough!';
  }
}

console.log(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4), [0, 1, 3]);
console.log(meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5), [0, 0, 1, 2, 2]);
console.log(meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0), 'Game On');