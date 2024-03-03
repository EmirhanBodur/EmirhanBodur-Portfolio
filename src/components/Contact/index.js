import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { Snackbar } from "@mui/material";

import {
  Container,
  Wrapper,
  Title,
  Desc,
  ContactForm,
  ContactTitle,
  ContactInput,
  ContactInputMessage,
  ContactButton,
} from './ContactStyled'



const Contact =() => {
    const [open, setOpen] = useState(false);
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <Container id="contact">
            <Wrapper>
                <Title>İletişim</Title>
                <Desc>Her türlü soru veya fırsat için bana ulaşmaktan çekinmeyin!</Desc>
                <ContactForm ref={form} onSubmit={handleSubmit}>
                  <ContactTitle>Email🚀</ContactTitle>
                  <ContactInput placeholder="E-Posta" name="from_email" />
                  <ContactInput placeholder="Ad ve Soyad" name="from_name" />
                  <ContactInput placeholder="Konu" name="subject"  />
                  <ContactInputMessage placeholder="Mesajınızı iletiniz." rows="4" name="message" />
                  <ContactButton type="submit" value="Gönder" />
                </ContactForm>
                <Snackbar 
                open={open}
                autoHideDuration={6000}
                onClose={() => setOpen(false)}
                message="Email sent successfully!"
                severity="success"
                />
            </Wrapper>
        </Container>
    )
}

export default Contact