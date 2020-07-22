import { inter, shipSquares } from './validation';

export let output = {
  Carrierrow: '',
  Carriercol: '',
  Carrierdir: '',
  Battleshiprow: '',
  Battleshipcol: '',
  Battleshipdir: '',
  Destroyerrow: '',
  Destroyercol: '',
  Destroyerdir: '',
  Submarinerow: '',
  Submarinecol: '',
  Submarinedir: '',
  Patrolboatrow: '',
  Patrolboatcol: '',
  Patrolboatdir: '',
};

let loop;
do {
  loop = false;
  const arr = [
    shipSquares(output.Carrierrow, output.Carriercol, output.Carrierdir, 5),
    shipSquares(
      output.Battleshiprow,
      output.Battleshipcol,
      output.Battleshipdir,
      4
    ),
    shipSquares(
      output.Destroyerrow,
      output.Destroyercol,
      output.Destroyerdir,
      3
    ),
    shipSquares(
      output.Submarinerow,
      output.Submarinecol,
      output.Submarinedir,
      3
    ),
    shipSquares(
      output.Patrolboatrow,
      output.Patrolboatcol,
      output.Patrolboatdir,
      2
    ),
  ];

  output.Carrierrow = Math.floor(Math.random() * Math.floor(10));
  output.Carriercol = Math.floor(Math.random() * Math.floor(10));
  output.Carrierdir = Math.floor(Math.random() * Math.floor(2));
  output.Battleshiprow = Math.floor(Math.random() * Math.floor(10));
  output.Battleshipcol = Math.floor(Math.random() * Math.floor(10));
  output.Battleshipdir = Math.floor(Math.random() * Math.floor(2));
  output.Destroyerrow = Math.floor(Math.random() * Math.floor(10));
  output.Destroyercol = Math.floor(Math.random() * Math.floor(10));
  output.Destroyerdir = Math.floor(Math.random() * Math.floor(2));
  output.Submarinerow = Math.floor(Math.random() * Math.floor(10));
  output.Submarinecol = Math.floor(Math.random() * Math.floor(10));
  output.Submarinedir = Math.floor(Math.random() * Math.floor(2));
  output.Patrolboatrow = Math.floor(Math.random() * Math.floor(10));
  output.Patrolboatcol = Math.floor(Math.random() * Math.floor(10));
  output.Patrolboatdir = Math.floor(Math.random() * Math.floor(2));

  if (output.Carrierdir === 0) {
    if (output.Carriercol + 5 > 10) {
      do {
        output.Carriercol = Math.floor(Math.random() * Math.floor(10));
      } while (output.Carriercol + 5 > 10);
    }
  } else if (output.Carrierrow + 5 > 10) {
    do {
      output.Carrierrow = Math.floor(Math.random() * Math.floor(10));
    } while (output.Carrierrow + 5 > 10);
  }

  if (output.Battleshipdir === 0) {
    if (output.Battleshipcol + 5 > 10) {
      do {
        output.Battleshipcol = Math.floor(Math.random() * Math.floor(10));
      } while (output.Battleshipcol + 5 > 10);
    }
  } else if (output.Battleshiprow + 5 > 10) {
    do {
      output.Battleshiprow = Math.floor(Math.random() * Math.floor(10));
    } while (output.Battleshiprow + 5 > 10);
  }

  if (output.Destroyerdir === 0) {
    if (output.Destroyercol + 5 > 10) {
      do {
        output.Destroyercol = Math.floor(Math.random() * Math.floor(10));
      } while (output.Destroyercol + 5 > 10);
    }
  } else if (output.Destroyerrow + 5 > 10) {
    do {
      output.Destroyerrow = Math.floor(Math.random() * Math.floor(10));
    } while (output.Destroyerrow + 5 > 10);
  }

  if (output.Submarinedir === 0) {
    if (output.Submarinecol + 5 > 10) {
      do {
        output.Submarinecol = Math.floor(Math.random() * Math.floor(10));
      } while (output.Submarinecol + 5 > 10);
    }
  } else if (output.Submarinerow + 5 > 10) {
    do {
      output.Submarinerow = Math.floor(Math.random() * Math.floor(10));
    } while (output.Submarinerow + 5 > 10);
  }

  if (output.Patrolboatdir === 0) {
    if (output.Patrolboatcol + 5 > 10) {
      do {
        output.Patrolboatcol = Math.floor(Math.random() * Math.floor(10));
      } while (output.Patrolboatcol + 5 > 10);
    }
  } else if (output.Patrolboatrow + 5 > 10) {
    do {
      output.Patrolboatrow = Math.floor(Math.random() * Math.floor(10));
    } while (output.Patrolboatrow + 5 > 10);
  }

  for (let i = 0; i < 5; i++) {
    for (let j = 1 + i; j < 5; j++) {
      if (inter(arr[i], arr[j])) {
        loop = true;
      }
    }
  }
  console.log(arr);
} while (loop);

console.log(output);
