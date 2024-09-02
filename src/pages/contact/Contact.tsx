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
import './style/contact.css';
import Header from '../../components/header/Header';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    question: '',
    age: '',
    email: '',
    phone: '',
  });

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

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
          <Grid item xs={12} sm={6} lg={12}>
            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              variant="outlined"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="custom-text-field"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={12}>
            <TextField
              fullWidth
              label="Middle Name"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
              className="custom-text-field"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={12}>
            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="custom-text-field"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={12}>
            <TextField
              fullWidth
              label="Age"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              required
              className="custom-text-field"
            />
          </Grid>

          <Grid item xs={12} lg={12}>
            <TextField
              fullWidth
              label="Email ID"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="custom-text-field"
            />
          </Grid>
          <Grid item xs={12} lg={12}>
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="custom-text-field"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={12}>
            <TextField
              fullWidth
              label="Question"
              name="question"
              type="text"
              value={formData.question}
              onChange={handleChange}
              required
              multiline={true}
              rows={4}
              className="custom-text-field"
            />
          </Grid>
          <Grid item xs={3} lg={3}>
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
