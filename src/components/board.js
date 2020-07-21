import React from 'react';

const alpha = 'ABCDEFGHIJ'.split('');
const num = Array.from(Array(10), (_, i) => i + 1);
const keys = (r, c) => alpha[r] + num[c];
export const boardKey = {};

for (let j = 0; j < 10; j++) {
  for (let i = 0; i < 10; i++) {
    boardKey[keys(j, i)] = [j, i];
  }
}

export default (props) => {
  const column = [];

  for (let j = 0; j < 10; j++) {
    const row = [];
    for (let i = 0; i < 10; i++) {
      row.push(
        <button
          className={props.csquare}
          key={keys(j, i)}
          id={props.ids + keys(j, i)}
          onClick={props.event}
          disabled={props.dis}
        >
          {keys(j, i)}
        </button>
      );
    }
    column.push(
      <div className='row' key={num[j]}>
        {row}
      </div>
    );
  }

  return (
    <div className={props.cname}>
      {column}
      <span>{props.title}</span>
      <span id={props.fire}></span>
      <span id={props.eSunk}></span>
    </div>
  );
};
