import React, { useState } from 'react';
import { Box, Typography, IconButton, Collapse } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

function FilterSection({ title, children }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="p" onClick={handleExpandClick}
         style={{
          cursor: "pointer",
         }}>
          {title}
         </Typography>
        <IconButton onClick={handleExpandClick}>
          {expanded ? <RemoveIcon /> : <AddIcon />}
        </IconButton>
      </Box>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {children}
      </Collapse>
    </Box>
  );
}

export default FilterSection;
