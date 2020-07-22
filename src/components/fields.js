import React from 'react';
import { useField } from 'formik';
import { MenuItem, TextField } from '@material-ui/core';
import './form.css';

const Row = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <TextField
      label={label + ' Row'}
      {...field}
      helperText={errorText}
      error={!!errorText}
      margin='dense'
      className='input'
      type='number'
      select
    >
      <MenuItem value={0}>A</MenuItem>
      <MenuItem value={1}>B</MenuItem>
      <MenuItem value={2}>C</MenuItem>
      <MenuItem value={3}>D</MenuItem>
      <MenuItem value={4}>E</MenuItem>
      <MenuItem value={5}>F</MenuItem>
      <MenuItem value={6}>G</MenuItem>
      <MenuItem value={7}>H</MenuItem>
      <MenuItem value={8}>I</MenuItem>
      <MenuItem value={9}>J</MenuItem>
    </TextField>
  );
};

const Column = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <TextField
      label={label + ' Column'}
      {...field}
      helperText={errorText}
      error={!!errorText}
      margin='dense'
      className='input'
      type='number'
      select
    >
      <MenuItem value={0}>1</MenuItem>
      <MenuItem value={1}>2</MenuItem>
      <MenuItem value={2}>3</MenuItem>
      <MenuItem value={3}>4</MenuItem>
      <MenuItem value={4}>5</MenuItem>
      <MenuItem value={5}>6</MenuItem>
      <MenuItem value={6}>7</MenuItem>
      <MenuItem value={7}>8</MenuItem>
      <MenuItem value={8}>9</MenuItem>
      <MenuItem value={9}>10</MenuItem>
    </TextField>
  );
};

const Direction = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <TextField
      label={label + ' Direction'}
      {...field}
      helperText={errorText}
      error={!!errorText}
      margin='dense'
      className='input'
      type='number'
      select
    >
      <MenuItem value={0}>Right</MenuItem>
      <MenuItem value={1}>Down</MenuItem>
    </TextField>
  );
};

export default (props) => {
  return (
    <div className='shipRow'>
      <Row label={props.name} name={props.name + 'row'} />
      <Column label={props.name} name={props.name + 'col'} />
      <Direction label={props.name} name={props.name + 'dir'} />
    </div>
  );
};
