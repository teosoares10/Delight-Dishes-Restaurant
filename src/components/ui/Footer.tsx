import FooterContactUs from './FooterContactUs';
import FooterOpenTime from './FooterOpenTime';
import FooterAbout from './FooterAbout';
import FooterMenu from './FooterMenu';
import FooterCopyright from './FooterCopyright';
import FooterNewsletter from './FooterNewsletter';

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
