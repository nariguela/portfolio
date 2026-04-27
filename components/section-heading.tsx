type SectionHeadingProps = {
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  number,
  eyebrow,
  title,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <p className="eyebrow">
        <span className="text-swiss-accent">{number}.</span> {eyebrow}
      </p>
      <h2 className="section-title">{title}</h2>
      {description ? <p className="section-copy">{description}</p> : null}
    </div>
  );
}
