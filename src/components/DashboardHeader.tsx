import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardContent, Grid } from '@material-ui/core';
import SelectionBar from './SelectionBar';
import { Measurement } from './../interface';
import { DataChips } from './DataChips';

const useStyles = makeStyles({
  taskBar: {
    backgroundColor: '#c0c0c036',
  },
});

export default (props: {
  metrics: string[];
  selection: (string | undefined)[];
  setSelection: Function;
  latestData: Measurement[];
}) => {

  const { metrics, selection, setSelection, latestData } = props;
  const classes = useStyles();
  
  return (
    <CardContent className={classes.taskBar}>
      <Grid container spacing={4} justify="space-between">
        <Grid item xs={12} sm={6}>
          {latestData.map(measurement => {
            return selection.includes(measurement.metric) ? (
              <DataChips key={`${measurement.metric}: ${measurement.value}`} measurement={measurement} />
            ) : null;
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectionBar metrics={metrics} selection={selection} setSelection={setSelection} />
        </Grid>
      </Grid>
    </CardContent>
  );
};
