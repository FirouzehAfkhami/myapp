import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        p: 4,
        mt: 'auto',
        borderTop: '1px solid #ddd',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Column 1 */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              We are a leading company providing the best services to our customers.
            </Typography>
          </Grid>

          {/* Column 2 */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Links
            </Typography>
            <Link href="#" variant="body2" display="block">
              Home
            </Link>
            <Link href="#" variant="body2" display="block">
              Services
            </Link>
            <Link href="#" variant="body2" display="block">
              Contact
            </Link>
          </Grid>

          {/* Column 3 */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography  variant="body2"className="custom-font" >
              Email: support@example.com
            </Typography>
            <Typography variant="body2">
              Phone: +123 456 7890
            </Typography>
            <Typography variant="body2">
              Address: 123 Main Street, City, Country
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
