import React, { useState } from 'react';
import { updateFilters } from './FiltersSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { FilterData } from '../../models/IModelsData';
import { Grid, Button, Slider, Box, Typography } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { selectFilters } from './FiltersSlice';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Literals } from '../../utilities/literals';

const Filters = () => {
  const dispatch = useAppDispatch();
  const filtersState = useAppSelector(selectFilters);
  const [order, setOrder] = useState<string>(filtersState.order);
  const [range, setRange] = React.useState<number[]>([
    filtersState.rangeMin,
    filtersState.rangeMax,
  ]);
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setRange(newValue as number[]);
  };

  const handleSliderChangeCommitted = () => {
    let filterData: FilterData = {
      order,
      rangeMin: range[0],
      rangeMax: range[1],
    };
    dispatch(updateFilters(filterData));
  };

  const handleSortChange = (type: string) => {
    let filterData: FilterData = {
      order: type,
      rangeMin: range[0],
      rangeMax: range[1],
    };
    setOrder(type);
    dispatch(updateFilters(filterData));
  };

  return (
    <Box ml={4} mr={4}>
      <Grid container mb={2} sm={12} alignItems='center'>
        <Grid item xs={12} md={6}>
          <Box ml={6} mr={4}>
            <Box alignItems='center'>
              <Typography mr={4} color='secondary'>
                {Literals.range}
              </Typography>
              <Slider
                value={range}
                onChange={handleSliderChange}
                onChangeCommitted={handleSliderChangeCommitted}
                valueLabelDisplay='auto'
                step={100}
                marks
                min={0}
                max={1000}
                color='secondary'
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Grid
            container
            justifyContent={mobile ? 'center' : 'end'}
            alignItems='center'
            spacing={2}
          >
            <Grid item md={2}>
              <Typography color='secondary'>Order:</Typography>
            </Grid>
            <Grid item md={2}>
              <Button
                color='secondary'
                fullWidth
                variant={order === 'asc' ? 'contained' : 'outlined'}
                onClick={() => handleSortChange('asc')}
              >
                <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
              </Button>
            </Grid>
            <Grid item md={2}>
              <Button
                fullWidth
                color='secondary'
                variant={order === 'desc' ? 'contained' : 'outlined'}
                onClick={() => handleSortChange('desc')}
              >
                <KeyboardArrowUpIcon></KeyboardArrowUpIcon>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Filters;
