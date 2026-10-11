export function SectionHeading({
  eyebrow, title, intro, as: As = 'h2', center
}: { eyebrow?: string; title: string; intro?: string; as?: 'h1' | 'h2'; center?: boolean }) {
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow ? <p className="eyebrow mb-2">{eyebrow}</p> : null}
      <As className={As === 'h1' ? 'text-4xl font-extrabold tracking-tight text-brand sm:text-5xl' : 'h-section'}>{title}</As>
      {intro ? <p className="prose-muted mt-4 text-xl">{intro}</p> : null}
    </div>
  );
}
