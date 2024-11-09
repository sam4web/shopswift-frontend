const Footer = () => {
  return (
    <footer className="dark:bg-primary-dark bg-secondary-dark transition">
      <div className="py-6 px-5 text-center">
        <p className="text-light">
          &copy;
          <span> {new Date().getFullYear()} </span>
          <span className="text-primary font-medium">ShopSwift</span>. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;