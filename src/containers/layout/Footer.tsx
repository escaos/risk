export const Footer = () => {
  return (
    <footer className="flex items-center justify-center w-full h-24 border-t">
      <a
        className="flex items-center justify-center"
        href="http://edisonsanchez.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by <img src="/vercel.svg" alt="Edison Sanchez Logo" className="h-4 ml-2" />
      </a>
    </footer>
  );
};

export default Footer;
