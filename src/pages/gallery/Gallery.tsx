import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Header from '../../components/header/Header';

import { galleryPhotos } from '../../assest';

function srcset(
  image: string,
  width: number,
  height: number,
  rows = 1,
  cols = 1,
) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);

  const touchStartX = React.useRef<number | null>(null);

  const handleOpen = (index: number) => {
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryPhotos.length);
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        (selectedIndex - 1 + galleryPhotos.length) % galleryPhotos.length,
      );
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current !== null) {
      const touchEndX = e.changedTouches[0].clientX;
      if (touchStartX.current - touchEndX > 50) {
        handleNext();
      } else if (touchStartX.current - touchEndX < -50) {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  return (
    <>
      <Header text="Gallery" />
      <ImageList
        sx={{
          width: '100%',
          transform: 'translateZ(0)',
        }}
        rowHeight={200}
        gap={1}
        id="gallery"
      >
        {galleryPhotos.map((item: any, index: number) => {
          const cols = item.featured ? 2 : 1;
          const rows = item.featured ? 2 : 1;

          return (
            <ImageListItem
              key={item.img}
              cols={cols}
              rows={rows}
              onClick={() => handleOpen(index)}
            >
              <img
                {...srcset(item.img, 250, 200, rows, cols)}
                alt={item.alt}
                loading="lazy"
              />
              <ImageListItemBar
                sx={{
                  background:
                    'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                    'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                }}
                title={item.title}
                position="top"
                actionPosition="left"
              />
            </ImageListItem>
          );
        })}
      </ImageList>

      <Modal
        open={selectedIndex !== null}
        onClose={handleClose}
        aria-labelledby="image-viewer"
        aria-describedby="image-viewer-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            maxWidth: '600px',
            bgcolor: '#1a1919',
            boxShadow: 24,
            p: 4,
            '@media (max-width: 600px)': {
              width: '90%',
            },
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {selectedIndex !== null && (
            <Box sx={{ position: 'relative' }}>
              <IconButton
                onClick={handleClose}
                sx={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  color: 'white',
                }}
              >
                <CloseIcon />
              </IconButton>
              <img
                src={galleryPhotos[selectedIndex].img}
                alt={galleryPhotos[selectedIndex].title}
                style={{ width: '100%' }}
              />
              <Button
                onClick={handlePrev}
                sx={{
                  position: 'absolute',
                  left: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  bgcolor: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                  fontSize: '2rem',
                  '@media (max-width: 600px)': {
                    fontSize: '1.5rem',
                  },
                }}
              >
                {'<'}
              </Button>
              <Button
                onClick={handleNext}
                sx={{
                  position: 'absolute',
                  right: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  bgcolor: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                  fontSize: '2rem',
                  '@media (max-width: 600px)': {
                    fontSize: '1.5rem',
                  },
                }}
              >
                {'>'}
              </Button>
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  bgcolor: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                  p: 1,
                  borderRadius: 1,
                }}
              >
                {selectedIndex + 1} / {galleryPhotos.length}
              </Box>
            </Box>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default Gallery;
