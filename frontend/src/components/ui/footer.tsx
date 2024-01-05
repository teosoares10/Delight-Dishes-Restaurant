import ContactUsInfo from '@/components/ui/contact-us-info';
import FooterOpenTime from '@/components/ui/footer-open-time';
import FooterAbout from '@/components/ui/footer-about';
import FooterMenu from '@/components/ui/footer-menu';
import FooterCopyright from '@/components/ui/footer-copyright';
import Newsletter from '@/components/ui/newsletter';

export default function Footer() {
  return (
    <footer className="pt-24 space-y-8">
      <div className="flex justify-between px-12">
        <FooterAbout />
        <FooterMenu />
        <div className="space-y-8">
          <ContactUsInfo />
          <FooterOpenTime />
        </div>
        <Newsletter />
      </div>

      <FooterCopyright />
    </footer>
  );
}
