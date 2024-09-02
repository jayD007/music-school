import React, { useState } from 'react';
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header';
import './style/contact.css';
import { FormData } from '../../types';

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    middleName: '',
    lastName: '',
    question: '',
    age: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name as keyof FormData]: value });
  };

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (parseInt(formData.age) > 120) {
      alert('Please enter an appropriate age.');
      return;
    }
    window.location.href = `mailto:jayanta7.deb@gmail.com?subject=Contact Form Submission&body=${encodeURIComponent(
      `First Name: ${formData.firstName}\nMiddle Name: ${formData.middleName}\nLast Name: ${formData.lastName}\nAge: ${formData.age}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nQuestion: ${formData.question}`,
    )}`;
  };

  const handleClose = () => {
    setOpen(false);
    navigate('/');
  };

  return (
    <Container maxWidth="sm" id="contact">
      <Header text="Contact" />
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {(
            [
              'firstName',
              'middleName',
              'lastName',
              'age',
              'email',
              'phone',
              'question',
            ] as (keyof FormData)[]
          ).map((field, index) => (
            <Grid item xs={12} key={index}>
              <TextField
                fullWidth
                label={field
                  .replace(/([A-Z])/g, ' $1')
                  .replace(/^./, (str) => str.toUpperCase())}
                name={field}
                type={
                  field === 'age'
                    ? 'number'
                    : field === 'email'
                      ? 'email'
                      : 'text'
                }
                value={formData[field]}
                onChange={handleChange}
                required={field !== 'middleName'}
                multiline={field === 'question'}
                rows={field === 'question' ? 4 : 1}
                className="custom-text-field"
              />
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="success" fullWidth>
              Send
            </Button>
          </Grid>
        </Grid>
      </form>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Thank You</DialogTitle>
        <DialogContent>
          <DialogContentText>
            It has opened the mail for you. Thanks for contacting us.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Contact;
