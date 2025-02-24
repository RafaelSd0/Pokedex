'use client'

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import { TypeHandler } from '../Type';

export default function PokemonCard({ name, image, types}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="200" image={image} alt="pokemon" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
              {name}
        </Typography>
          <TypeHandler types={types} />
      </CardContent>
    </Card>
  );
}