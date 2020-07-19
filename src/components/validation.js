import * as Yup from 'yup';

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

export const validationSchema = Yup.object({
  Carrierrow: rowVal('Carrier', 5),
  Carriercol: colVal('Carrier', 5),
  Carrierdir: Yup.number().required('Required'),
  Battleshiprow: rowVal('Battleship', 4),
  Battleshipcol: colVal('Battleship', 4),
  Battleshipdir: Yup.number().required('Required'),
  Destroyerrow: rowVal('Destroyer', 3),
  Destroyercol: colVal('Destroyer', 3),
  Destroyerdir: Yup.number().required('Required'),
  Submarinerow: rowVal('Submarine', 3),
  Submarinecol: colVal('Submarine', 3),
  Submarinedir: Yup.number().required('Required'),
  Patrolboatrow: rowVal('Patrolboat', 2),
  Patrolboatcol: colVal('Patrolboat', 2),
  Patrolboatdir: Yup.number().required('Required'),
});

export const initialValues = {
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
