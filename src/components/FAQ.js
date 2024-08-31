import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Container, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {
  const faqs = [
    {
      question: 'What are the job prospects with a college diploma and do you actually get students employed after graduation?',
      answer: 'Our college diploma programs are designed to prepare you for the workforce. We offer career services that assist students in finding employment after graduation.',
    },
    {
      question: 'Are your programs fully online or do I have to physically attend classes at the college?',
      answer: 'We offer both fully online programs and on-campus classes. You can choose the mode of study that best fits your needs.',
    },
    {
      question: 'If I enroll for an online course, what kind of schedule options are available?',
      answer: 'Our online courses offer flexible scheduling options, including part-time and full-time study, allowing you to balance your studies with other commitments.',
    },
    {
      question: 'What are the start dates for your programs and what are your semesters like?',
      answer: 'Our programs have multiple start dates throughout the year. Each semester is structured to provide comprehensive learning, with breaks in between.',
    },
    {
      question: 'Can I still work at my current job while I attend classes?',
      answer: 'Yes, many of our students work while attending classes. Our programs offer flexible scheduling to accommodate working professionals.',
    },
    {
      question: 'Get In Touch For More',
      answer: 'If you have more questions or need further information, please contact our support team at support@example.com or call us at +123 456 7890.',
    },
  ];

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Frequently Asked Questions
        </Typography>
        {faqs.map((faq, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography variant="h6">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
};

export default FAQ;
