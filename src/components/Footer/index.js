import backdrop from '../../assets/images/mult-colored-hero.jpg';

function Footer() {
  return (
    <footer
      className="position-absolute bottom-0 w-100 p-2 text-center"
      style={{
        backgroundImage: `url(${backdrop})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >


        
    </footer>
  );
}

export default Footer;
