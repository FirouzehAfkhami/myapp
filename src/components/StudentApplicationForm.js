import React, { useState } from 'react';
import {
  Container, Typography, TextField, MenuItem, FormControl, InputLabel, Select, FormGroup, FormControlLabel, Checkbox, Button
} from '@mui/material';

const StudentApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    bestTimeToCall: '',
    province: '',
    program: '',
    citizenship: '',
    studyTime: '',
    educationLevel: '',
    startTiming: '',
    referral: '',
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Student Application Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Typography variant="h6">Applicant Information</Typography>
          
          <TextField
            label="First Name *"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Last Name *"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Email Address *"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Best Phone Number to reach you *"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Best Time to Call"
            name="bestTimeToCall"
            value={formData.bestTimeToCall}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          
          <FormControl fullWidth margin="normal">
            <InputLabel>Province</InputLabel>
            <Select
              name="province"
              value={formData.province}
              onChange={handleChange}
              required
            >
              {/* Add province options */}
              <MenuItem value="Ontario">Ontario</MenuItem>
              <MenuItem value="Alberta">Alberta</MenuItem>
              {/* More options */}
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel>Select Your Program*</InputLabel>
            <Select
              name="program"
              value={formData.program}
              onChange={handleChange}
              required
            >
              <MenuItem value="Program1">Program 1</MenuItem>
              <MenuItem value="Program2">Program 2</MenuItem>
              {/* More options */}
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel>Are you a Canadian Citizen or Permanent Resident? *</InputLabel>
            <Select
              name="citizenship"
              value={formData.citizenship}
              onChange={handleChange}
              required
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel>What is your preferred study time? *</InputLabel>
            <Select
              name="studyTime"
              value={formData.studyTime}
              onChange={handleChange}
              required
            >
              <MenuItem value="Morning">Morning</MenuItem>
              <MenuItem value="Afternoon">Afternoon</MenuItem>
              <MenuItem value="Evening">Evening</MenuItem>
              <MenuItem value="Weekend">Weekend</MenuItem>
              <MenuItem value="Any">Any / No Preference</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel>Highest level of education you have completed? *</InputLabel>
            <Select
              name="educationLevel"
              value={formData.educationLevel}
              onChange={handleChange}
              required
            >
              <MenuItem value="High School">High School, GED or equivalent</MenuItem>
              <MenuItem value="College">College</MenuItem>
              <MenuItem value="University">University</MenuItem>
              <MenuItem value="Trade">Trade, Technical or Vocational training</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel>How soon are you looking to start school? *</InputLabel>
            <Select
              name="startTiming"
              value={formData.startTiming}
              onChange={handleChange}
              required
            >
              <MenuItem value="1-3 months">In the next 1-3 months</MenuItem>
              <MenuItem value="4-12 months">In the next 4-12 months</MenuItem>
              <MenuItem value="1 year or more">In 1 year or more</MenuItem>
              <MenuItem value="Not sure">Not sure</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="How did you hear about ABM College?"
            name="referral"
            value={formData.referral}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />

          <FormControlLabel
            control={
              <Checkbox
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
              />
            }
            label="I understand that by submitting this form, I consent to be contacted by email, phone, or any other form of communication by ABM College. My consent can be withdrawn at any time."
          />

          <Button variant="contained" color="primary" type="submit" style={{ marginTop: '20px' }}>
            Submit
          </Button>
        </FormGroup>
      </form>
    </Container>
  );
};

export default StudentApplicationForm;
