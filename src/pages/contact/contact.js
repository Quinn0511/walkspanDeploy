import React from 'react';
import NavigationBar from "../../component/navigationBar";
import Footer from "../../component/footer";
import Contact from '../homepage/contact';

const ContactPage = () => {
    return (
        <div>
        <NavigationBar/>
        <Contact/>
        <Footer />
        </div>
    );
}

export default ContactPage;