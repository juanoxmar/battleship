import * as Yup from 'yup';
import _ from 'lodash';

const rowVal = (ship, length) =>
  Yup.number()
    .required('Required')
    .when(ship + 'dir', {
      is: (val) => val === 1,
      then: Yup.number()
        .required('Required')
        .test('isOnBoard', 'Ship is off the board!', (value) =>
          value + length > 10 ? false : true
        ),
    });

const colVal = (ship, length) =>
  Yup.number()
    .required('Required')
    .when(ship + 'dir', {
      is: (val) => val === 0,
      then: Yup.number()
        .required('Required')
        .test('isOnBoard', 'Ship is off the board!', (value) =>
          value + length > 10 ? false : true
        ),
    });

const dirCar = () =>
  Yup.number()
    .required('Required')
    .test('collide Car/BS', 'Collision with Battleship!', function (value) {
      return !inter(
        shipSquares(this.parent.Carrierrow, this.parent.Carriercol, value, 5),
        shipSquares(
          this.parent.Battleshiprow,
          this.parent.Battleshipcol,
          this.parent.Battleshipdir,
          4
        )
      );
    })
    .test('collide Car/Des', 'Collision with Destroyer!', function (value) {
      return !inter(
        shipSquares(this.parent.Carrierrow, this.parent.Carriercol, value, 5),
        shipSquares(
          this.parent.Destroyerrow,
          this.parent.Destroyercol,
          this.parent.Destroyerdir,
          3
        )
      );
    })
    .test('collide Car/Sub', 'Collision with Submarine!', function (value) {
      return !inter(
        shipSquares(this.parent.Carrierrow, this.parent.Carriercol, value, 5),
        shipSquares(
          this.parent.Submarinerow,
          this.parent.Submarinecol,
          this.parent.Submarinedir,
          3
        )
      );
    })
    .test('collide Car/Pat', 'Collision with Patrolboat!', function (value) {
      return !inter(
        shipSquares(this.parent.Carrierrow, this.parent.Carriercol, value, 5),
        shipSquares(
          this.parent.Patrolboatrow,
          this.parent.Patrolboatcol,
          this.parent.Patrolboatdir,
          2
        )
      );
    });

const dirBattle = () =>
  Yup.number()
    .required('Required')
    .test('collide BS/Des', 'Collision with Destroyer!', function (value) {
      return !inter(
        shipSquares(
          this.parent.Battleshiprow,
          this.parent.Battleshipcol,
          value,
          4
        ),
        shipSquares(
          this.parent.Destroyerrow,
          this.parent.Destroyercol,
          this.parent.Destroyerdir,
          3
        )
      );
    })
    .test('collide BS/Sub', 'Collision with Submarine!', function (value) {
      return !inter(
        shipSquares(
          this.parent.Battleshiprow,
          this.parent.Battleshipcol,
          value,
          4
        ),
        shipSquares(
          this.parent.Submarinerow,
          this.parent.Submarinecol,
          this.parent.Submarinedir,
          3
        )
      );
    })
    .test('collide BS/Pat', 'Collision with Patrolboat!', function (value) {
      return !inter(
        shipSquares(
          this.parent.Battleshiprow,
          this.parent.Battleshipcol,
          value,
          4
        ),
        shipSquares(
          this.parent.Patrolboatrow,
          this.parent.Patrolboatcol,
          this.parent.Patrolboatdir,
          2
        )
      );
    });

const dirDes = () =>
  Yup.number()
    .required('Required')
    .test('collide Des/Sub', 'Collision with Submarine!', function (value) {
      return !inter(
        shipSquares(
          this.parent.Destroyerrow,
          this.parent.Destroyercol,
          value,
          3
        ),
        shipSquares(
          this.parent.Submarinerow,
          this.parent.Submarinecol,
          this.parent.Submarinedir,
          3
        )
      );
    })
    .test('collide Des/Sub', 'Collision with Submarine!', function (value) {
      return !inter(
        shipSquares(
          this.parent.Destroyerrow,
          this.parent.Destroyercol,
          value,
          3
        ),
        shipSquares(
          this.parent.Patrolboatrow,
          this.parent.Patrolboatcol,
          this.parent.Patrolboatdir,
          2
        )
      );
    });

const dirSub = () =>
  Yup.number()
    .required('Required')
    .test('collide Sub/Pat', 'Collision with Patrolboat!', function (value) {
      return !inter(
        shipSquares(
          this.parent.Submarinerow,
          this.parent.Submarinecol,
          value,
          3
        ),
        shipSquares(
          this.parent.Patrolboatrow,
          this.parent.Patrolboatcol,
          this.parent.Patrolboatdir,
          2
        )
      );
    });

export const validationSchema = Yup.object({
  Carrierrow: rowVal('Carrier', 5),
  Carriercol: colVal('Carrier', 5),
  Carrierdir: dirCar(),
  Battleshiprow: rowVal('Battleship', 4),
  Battleshipcol: colVal('Battleship', 4),
  Battleshipdir: dirBattle(),
  Destroyerrow: rowVal('Destroyer', 3),
  Destroyercol: colVal('Destroyer', 3),
  Destroyerdir: dirDes(),
  Submarinerow: rowVal('Submarine', 3),
  Submarinecol: colVal('Submarine', 3),
  Submarinedir: dirSub(),
  Patrolboatrow: rowVal('Patrolboat', 2),
  Patrolboatcol: colVal('Patrolboat', 2),
  Patrolboatdir: Yup.number().required('Required'),
});

export const initialValues = {
  Carrierrow: 0,
  Carriercol: 0,
  Carrierdir: 0,
  Battleshiprow: 1,
  Battleshipcol: 0,
  Battleshipdir: 0,
  Destroyerrow: 2,
  Destroyercol: 0,
  Destroyerdir: 0,
  Submarinerow: 3,
  Submarinecol: 0,
  Submarinedir: 0,
  Patrolboatrow: 4,
  Patrolboatcol: 0,
  Patrolboatdir: '',
};

export const bk = {};
export const keys = (r, c) =>
  'ABCDEFGHIJ'.split('')[r] + Array.from(Array(10), (_, i) => i + 1)[c];

for (let j = 0; j < 10; j++) {
  for (let i = 0; i < 10; i++) {
    bk[keys(i, j)] = [i, j];
  }
}

export const inter = (arr1, arr2) => _.intersection(arr1, arr2).length > 0;
export const shipSquares = (r, c, direction, l) => {
  const arr = [];
  for (let i = 0; i < l; i++) {
    let j = 0,
      k = 0;
    direction === 1 ? (j = i) : (k = i);
    arr.push(keys(r + j, c + k));
  }
  return arr;
};
