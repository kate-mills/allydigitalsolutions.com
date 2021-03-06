/* eslint-disable react/no-unescaped-entities */
/*https://medium.com/@thaotruong203/forms-with-formik-gatsby-netlify-11992b7ece99 */ 
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Link from 'components/Link'
//import {navigate} from 'gatsby'
import {contactBasic} from 'utils/form-helpers'

const validationSchema = yup.object({
  firstName: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Please specify your first name'),
  lastName: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Please specify your last name'),
  email: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required.'),
  message: yup
    .string()
    .trim()
    .required('Please specify your message'),
});


const Contact = () => {
  const theme = useTheme();

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  };


  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: contactBasic,
  });


  return (
    <Box maxWidth={600} margin={'0 auto'}>
      <Box marginBottom={4}>
        <Typography
          variant={'h3'}
          sx={{ fontWeight: 600 }}
          align={'center'}
          gutterBottom
        >
          We'd love to hear from you!
        </Typography>
        <Typography color="text.secondary" align={'center'}>Our mission is to increase your business, ease your workflow, and connect you with people who share your passions. Let's get started!
        </Typography>
      </Box>
      <Box>
        <form onSubmit={formik.handleSubmit}
          name="basic-contact-form"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="basic-contact-form"/>
          <input type="hidden" name="bot-field"/>

          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <label htmlFor="firstName" className="visuallyhidden">First name</label>
              <TextField
                sx={{ height: 54 }}
                label="First name"
                variant="outlined"
                color="primary"
                size="medium"
                id="firstName"
                name="firstName"
                fullWidth
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <label htmlFor="lastName" className="visuallyhidden">Last name</label>
              <TextField
                sx={{ height: 54 }}
                label="Last name"
                variant="outlined"
                color="primary"
                size="medium"
                id="lastName"
                name="lastName"
                fullWidth
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <label htmlFor="email" className="visuallyhidden">Email</label>
              <TextField
                sx={{ height: 54 }}
                label="Email"
                type="email"
                variant="outlined"
                color="primary"
                size="medium"
                id="email"
                name="email"
                fullWidth
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <label htmlFor="message" className="visuallyhidden">Message</label>
              <TextField
                label="Message"
                multiline
                rows={6}
                variant="outlined"
                color="primary"
                size="medium"
                id="message"
                name="message"
                fullWidth
                value={formik.values.message}
                onChange={formik.handleChange}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
              />
            </Grid>
            <Grid item container justifyContent={'center'} xs={12}>
              <Button
                sx={{ height: 54, minWidth: 150 }}
                variant="contained"
                color="primary"
                size="medium"
                type="submit"
              >
                Submit
              </Button>
            </Grid>
            <Grid item container justifyContent={'center'} xs={12}>
              <Typography color="text.secondary">
                We'll get back to you in 1-2 business days.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item container justifyContent={'center'} xs={12}>
              <Box>
                <Typography component="p" variant="body2" align="left">
                  By clicking on "submit" you agree to our{' '}
                  <Box
                    component={Link}
                    to={'/company-terms'}
                    color={theme.palette.text.primary}
                    underline={"underline"}
                  >Privacy Policy</Box>,{' '}
                  <Box
                    component={Link}
                    to={'/company-terms#data-policy'}
                    underline={"underline"}
                    color={theme.palette.text.primary}
                  >Data Policy</Box>{' '} and{' '}
                  <Box
                    component={Link}
                    to={'/company-terms#cookie-policy'}
                    underline={"underline"}
                    color={theme.palette.text.primary}
                  >Cookie Policy</Box>.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default Contact;
