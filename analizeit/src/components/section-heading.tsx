type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "wide";
};

export function SectionHeading({ title, description, align = "wide" }: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <div>
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
    </div>
  );
}
