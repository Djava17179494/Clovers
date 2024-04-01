import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography'; // Импортируем Typography для стилизованного текста





export default function MinimumDistanceSlider({onChange, min, max, value1}) {
  
  let valuetext = (value) => {
     return `${value}°C`;
  }

  return (
    <Box sx={{ width: 180, pt: 2 }}>
      <Slider
        getAriaLabel={() => 'Minimum distance slider'}
        value={value1}
        min={min}
        max={max}
        step={0.01}
        onChange={onChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
        sx={{
          '& .MuiSlider-track': {
            color: 'black', // Цвет трека
          },
          '& .MuiSlider-thumb': {
            color: 'black', // Цвет бегунков
          },
          '& .MuiSlider-rail': {
            color: 'black', // Цвет рельса
          },
        }}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="body2" color="textSecondary">${min.toFixed(2)}</Typography>
        <Typography variant="body2" color="textSecondary">${max.toFixed(2)}</Typography>
      </Box>
    </Box>
  );
}
