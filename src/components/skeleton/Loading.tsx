import * as React from 'react';
import { Skeleton } from '@mui/material';

export default function Loading() {
  return (
    <Skeleton
      sx={{ bgcolor: 'grey.900' }}
      variant="rectangular"
      width={210}
      height={118}
    />
  );
}
