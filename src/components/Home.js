import React from 'react';
import ResponsiveMenu from './ResponsiveMenu';
import LoginModal from './LoginModal';
import TodoModal from './TodoModal';
import NoteReminderModal from './NoteReminderModal'; 
import ImageCarousel from './ImageCarousel';
import BlogLinks from './BlogLinks';
import FAQ from './FAQ';
import Footer from './Footer';
import StudentApplicationForm from './StudentApplicationForm';
import TwoColumnForm from './TwoColumnForm';
import Twoscroll from './Twoscroll';
import ReviewForm from './ReviewForm';

import './home.css';
const Home = () => {
  return (
    <>
      <ResponsiveMenu />
 
    <div>
      
      <ImageCarousel />
      </div>
      <div>
      
      <FAQ/>
    </div>
    <TwoColumnForm/>
  
    <div>
     
      <BlogLinks />
    </div>
    <div>
     
      <Twoscroll/>
    </div>
    <div>
      <ReviewForm />
    <div>
   
    </div>
    </div>
    <div>
      <Footer />
    </div>
      
    </>
  );
};

export default Home;
