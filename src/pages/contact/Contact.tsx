import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  IconButton,
  Modal,
  TextField,
  Typography,
} from '@mui/material';
import Header from '../../components/header/Header';
import './style/contact.css';
import { email, emailSubject } from '../../utils';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface FormData {
  voornaam: string;
  achternaam: string;
  leeftijd: number | '';
  email: string;
  telefoon: string;
  vraag: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    voornaam: '',
    achternaam: '',
    leeftijd: '',
    email: '',
    telefoon: '',
    vraag: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [modalOpen, setModalOpen] = useState(false);
  const [copyStatus, setCopyStatus] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let errorMessages: { [key: string]: string } = {};

    if (!formData.voornaam) errorMessages.voornaam = 'Voornaam is verplicht';
    if (!formData.achternaam)
      errorMessages.achternaam = 'Achternaam is verplicht';
    if (!formData.leeftijd || formData.leeftijd < 3 || formData.leeftijd > 100)
      errorMessages.leeftijd =
        'Leeftijd is verplicht en moet tussen 3 jaar en 100 jaar zijn';
    if (!formData.email) errorMessages.email = 'Email is verplicht';
    if (!formData.telefoon)
      errorMessages.telefoon = 'Telefoon nummer is verplicht';
    if (!formData.vraag) errorMessages.vraag = 'Vraag is verplicht';

    setErrors(errorMessages);
    return Object.keys(errorMessages).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const emailBody = `
      Voornaam: ${formData.voornaam}
      Achternaam: ${formData.achternaam}
      Leeftijd: ${formData.leeftijd}
      Email: ${formData.email}
      Telefoon: ${formData.telefoon}
      Vraag: ${formData.vraag}
    `;
      window.location.href = `mailto:${email}?subject=${emailSubject}: ${formData.voornaam}&body=${encodeURIComponent(emailBody)}`;
      setModalOpen(true);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopyStatus(true);
      setTimeout(() => {
        setModalOpen(false);
        setCopyStatus(false);
        setFormData({
          voornaam: '',
          achternaam: '',
          leeftijd: '',
          email: '',
          telefoon: '',
          vraag: '',
        });
      }, 3000);
    });
  };

  return (
    <Container maxWidth="sm" id="contact">
      <Header text="Contact" />
      <form onSubmit={handleSubmit}>
        <TextField
          label="voornaam"
          name="voornaam"
          value={formData.voornaam}
          onChange={handleChange}
          error={!!errors.voornaam}
          helperText={errors.voornaam}
          fullWidth
          margin="normal"
        />
        <TextField
          label="achternaam"
          name="achternaam"
          value={formData.achternaam}
          onChange={handleChange}
          error={!!errors.achternaam}
          helperText={errors.achternaam}
          fullWidth
          margin="normal"
        />
        <TextField
          label="leeftijd"
          name="leeftijd"
          type="number"
          value={formData.leeftijd}
          onChange={handleChange}
          error={!!errors.leeftijd}
          helperText={errors.leeftijd}
          fullWidth
          margin="normal"
          inputProps={{ inputMode: 'numeric', pattern: '\\d*' }}
          onInput={(e) => {
            const input = e.target as HTMLInputElement;
            input.value = input.value.replace(/[^0-9]/g, '');
          }}
        />
        <TextField
          label="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          fullWidth
          margin="normal"
        />
        <TextField
          label="telefoon"
          name="telefoon"
          value={formData.telefoon}
          onChange={handleChange}
          error={!!errors.telefoon}
          helperText={errors.telefoon}
          fullWidth
          margin="normal"
          inputProps={{ inputMode: 'numeric', pattern: '\\d*' }}
          onInput={(e) => {
            const input = e.target as HTMLInputElement;
            input.value = input.value.replace(/[^0-9]/g, '');
          }}
        />
        <TextField
          label="vraag"
          name="vraag"
          value={formData.vraag}
          onChange={handleChange}
          error={!!errors.vraag}
          helperText={errors.vraag}
          fullWidth
          margin="normal"
          multiline={true}
          rows={4}
        />
        <Button type="submit" variant="contained" color="primary">
          Stuur
        </Button>
      </form>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" component="h2">
            Thank you
          </Typography>
          <Typography sx={{ mt: 2 }}>
            De e-mailapplicatie moet op uw apparaat zijn geopend. Als dit niet
            het geval is, stuur dan uw e-mail naar dit adres:&nbsp;
            {email}
            <span>
              <IconButton color="primary" onClick={handleCopy} sx={{ ml: 2 }}>
                <ContentCopyIcon />
              </IconButton>
            </span>
          </Typography>
          {copyStatus && (
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
              <CheckCircleIcon color="success" />
              <Typography sx={{ ml: 1 }}>Copied</Typography>
            </Box>
          )}
        </Box>
      </Modal>
    </Container>
  );
};

export default Contact;
