import ContactUs from './components/ContactUs';
import OpenTime from './components/OpenTime';
import Instagram from './components/SocialNetwork';
import About from './components/About';
import Menu from './components/Menu';
import Copyright from './components/Copyright';
import Newsletter from './components/Newsletter';

export default function Footer() {
  return (
    <footer className="mt-24 pt-24 space-y-8" data-testid="footer">
      <Newsletter />

      <div className="flex justify-between px-12">
        <About />
        <Menu />
        <Instagram />
        <div className="space-y-8">
          <ContactUs />
          <OpenTime />
        </div>
      </div>

      <Copyright />
    </footer>
  );
}
