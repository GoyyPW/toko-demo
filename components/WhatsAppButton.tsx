type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function WhatsAppButton({ href, children, className = "" }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`pop pop-press inline-flex items-center justify-center gap-2 rounded-full bg-mint px-6 py-3 text-sm font-bold text-ink ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-5.1A8.5 8.5 0 1 1 21 11.5z" />
      </svg>
      {children}
    </a>
  );
}