'use client'

import Link from 'next/link';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import { TypeHandler } from '../Type';

export default function PokemonCard({ name, image, types, id }) {
  return (
    <Link href={`/Pokemon/${name}`} passHref style={{ textDecoration: 'none' }}>
      <Card sx={{ maxWidth: 345, cursor: 'pointer' }}>
        <CardMedia component="img" height="200" image={image} alt="pokemon" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}
          </Typography>
          <TypeHandler types={types} />
        </CardContent>
      </Card>
    </Link>
  );
}