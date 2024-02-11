const Button = ({ text, href }: { text: string; href: string }) => (
  <a
    className="border-neutral-50 border-solid border-2 py-2 px-4 rounded-md text-neutral-50"
    href={href}
  >
    {text}
  </a>
);

export default Button;
