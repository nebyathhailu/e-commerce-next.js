interface FooterColumnProps {
    title: string;
    links: {
      href: string;
      label: string;
    }[];
  }
  export default function FooterColumn({ title, links }: FooterColumnProps) {
    return (
      <div className="flex flex-col space-y-2">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <ul className="space-y-1 text-gray-400">
          {links.map((link, i) => (
            <li key={i}>
              <a href={link.href} className="hover:text-white transition">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }