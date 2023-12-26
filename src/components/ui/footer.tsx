import FooterContactUs from '@/components/ui/footer-contact-us';
import FooterOpenTime from '@/components/ui/footer-open-time';
import FooterAbout from '@/components/ui/footer-about';
import FooterMenu from '@/components/ui/footer-menu';
import FooterCopyright from '@/components/ui/footer-copyright';
import FooterNewsletter from '@/components/ui/footer-newsletter';

export default function Footer() {
  return (
    <footer className="mt-24 pt-24 space-y-8">
      <FooterNewsletter />

      <div className="flex justify-between px-12">
        <FooterAbout />
        <FooterMenu />
        <div className="space-y-8">
          <FooterContactUs />
          <FooterOpenTime />
        </div>
      </div>

      <FooterCopyright />
    </footer>
  );
}
