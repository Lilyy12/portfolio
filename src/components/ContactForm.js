import React, { useState } from 'react';
import "../styles/ContactForm.css";
import { send } from 'emailjs-com';

function ContactForm() {

    const [sender_name,set_sender_name] = useState('');
    const [sender_email,set_sender_email] = useState('');
    const [message,set_message] = useState('');

    const handleName = (e) => {
        set_sender_name(e.target.value);
    }
    const handleEmail = (e) => {
        set_sender_email(e.target.value);
    }
    const handleMessage = (e) => {
        set_message(e.target.value);
    }

    const sendMail = (e) => {
        e.preventDefault();
        send(
            'service_szhhlnh',
            'template_0on2wsq',
            {sender_name, sender_email, message},
            'm_htXU84RmPaODeQg'
        ).then((response) => {
            console.log('Message sent successfully', response.status, response.text);
        }).catch((err)=> {
            console.log('fails',err);
        })
        set_sender_name('');
        set_sender_email('');
        set_message('');
    }

    
  return (
    <div className='ContactForm'>
        <form onSubmit={sendMail}> 
        <legend>Contact Me</legend>
            <input type="text" name="sender_name" value={sender_name} onChange={handleName} required placeholder="Enter your name *" />
            <input type="email" name="sender_email" value={sender_email} onChange={handleEmail} required placeholder="Enter your email *" />
            <textarea name="message" value={message} onChange={handleMessage} required placeholder="Type your message here..."/>
            <button>Sumbit</button>
        </form>
    </div>
  )
}

export default ContactForm