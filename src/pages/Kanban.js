import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const Kanban = () => {
  const tasks = {
    todo: ['Create UI', 'Write Docs'],
    inProgress: ['Build Kanban'],
    done: ['Setup Project'],
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Kanban Board
      </Typography>
      <Grid container spacing={2}>
        {Object.entries(tasks).map(([status, items]) => (
          <Grid item xs={12} md={4} key={status}>
            <Typography variant="h6" align="center" sx={{ mb: 1, textTransform: 'capitalize' }}>
              {status}
            </Typography>
            {items.map((task, index) => (
              <Card key={index} sx={{ mb: 2 }}>
                <CardContent>
                  <Typography>{task}</Typography>
                </CardContent>
              </Card>
            ))}
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Kanban;
