import { PageBanner } from '@/components/lvl2/banner/pageBanner/PageBanner';
import {ContactInfo} from '@/components/pages/contact/contactInfo/ContactInfo';
import ContactForm from '@/components/pages/contact/contactForm/ContactForm';

export default function Contact() {
  return (
    <>
      <PageBanner heading={'WE’D LOVE TO HEAR FROM YOU'} desc={'Reach out to us for reservations, inquiries, or feedback'} />
      <ContactInfo />
      <ContactForm />
    </>
  );
}
