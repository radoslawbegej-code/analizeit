import Link from "next/link";

type WordmarkProps = {
  compact?: boolean;
  onClick?: () => void;
};

export function Wordmark({ compact = false, onClick }: WordmarkProps) {
  return (
    <Link aria-label="ANALIZE — strona główna" className={`wordmark${compact ? " wordmark--compact" : ""}`} href="/" onClick={onClick}>
      ANALIZE<span aria-hidden="true" className="wordmark__dot">.</span>
    </Link>
  );
}
