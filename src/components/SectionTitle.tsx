// Section heading in the style of the CV: a Font Awesome icon, a light navy title, and a thin rule under it.
export const SectionTitle = ({ icon, children }: { icon: string; children: string }) => (
  <h2 className="flex items-center gap-3 border-b border-foreground/80 pb-1 text-2xl font-light text-brand">
    <i className={`fa ${icon} w-7 text-xl`} aria-hidden="true" />
    {children}
  </h2>
);

// A list with the CV's chevron as the bullet.
export const BulletList = ({ items, className = "" }: { items: React.ReactNode[]; className?: string }) => (
  <ul className={`space-y-1 text-sm leading-relaxed text-muted-foreground ${className}`}>
    {items.map((item, index) => (
      <li key={index} className="flex gap-2.5">
        <i className="fa fa-angle-right mt-[0.22rem] shrink-0 text-foreground" aria-hidden="true" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);
