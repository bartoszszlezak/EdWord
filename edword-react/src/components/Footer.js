import React from 'react';
import './styles/Footer.css';

function Footer() {
    return (
        <div className='footer-section'>
            <section className='footer-informations'>
                <div className='footer-created'>
                    <h2>Created by:</h2>
                    <p>Bartosz Szlęzak</p>
                    <p>Cracow Uniwersity of Technology</p>
                </div>
                <div className='footer-contact'>
                    <h2>Contact:</h2>
                    <p>Telephone: +48 111 222 333</p>
                    <p>Email: barmikszl@gmail.com</p>
                    <div className='footer-links'>
                        <a
                        href='https://www.facebook.com/'
                        target='_blank'
                        className='social-icon-link facebook'
                        aria-label='Facebook'
                        rel='noreferrer'
                        >
                        <i className='fab fa-facebook-f' />
                        </a>
                        <a
                            href='https://www.instagram.com/'
                            target='_blank'
                            className='social-icon-link instagram'
                            aria-label='Instagram'
                            rel='noreferrer'
                        >
                            <i className='fab fa-instagram' />
                        </a>
                        </div>
                    
                </div>
                
            </section>
        </div>
    );
}

export default Footer
