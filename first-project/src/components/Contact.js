import React from 'react';
import ContactCard from "./ContactCard";

function Contact () {
    return (
        <div className='contact-info'>
            <ContactCard
                name='Miss Jevinik'
                imgUrl='../images/female.jpg'
                email='jevinik@mailinator.com'
                phone='+2347065431289'
            />
            <ContactCard
                name='Miss Martha'
                imgUrl='../images/female.jpg'
                email='martha@mailinator.com'
                phone='+234706500089'
            />
            <ContactCard
                name='Miss Jumai'
                imgUrl='../images/female.jpg'
                email='jumai@mailinator.com'
                phone='+234701111289'
            />
            <ContactCard
                name='Miss Penelope'
                imgUrl='../images/female.jpg'
                email='penelope@mailinator.com'
                phone='+234706333389'
            />
        </div>
    )
}

export default Contact;