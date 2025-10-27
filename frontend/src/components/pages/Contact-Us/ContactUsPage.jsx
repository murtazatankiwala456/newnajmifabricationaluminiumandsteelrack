import MainLayout from "../../common/Layout/MainLayout/MainLayout";
import ContactUsForm from "./ContactUsForm/ContactUsForm";
import SocialLinks from "./SocialLinks/SocialLinks";
const ContactUsPage = () => {
  return (
    <MainLayout>
      <ContactUsForm />
      <SocialLinks />
    </MainLayout>
  );
};
export default ContactUsPage;
