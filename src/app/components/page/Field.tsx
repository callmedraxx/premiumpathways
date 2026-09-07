/* Form primitives for the night world. Labels above, help and errors below,
   pill inputs, one focus ring. Used by the contact form and the admission form. */
export const inputClass =
  "w-full rounded-full border border-chalk/[0.14] bg-night-900/70 px-5 py-3.5 text-[0.95rem] text-chalk placeholder:text-chalk/40 outline-none transition focus:border-ember/70 focus:bg-night-900";
export const textareaClass =
  "w-full rounded-card border border-chalk/[0.14] bg-night-900/70 px-5 py-4 text-[0.95rem] leading-relaxed text-chalk placeholder:text-chalk/40 outline-none transition focus:border-ember/70 focus:bg-night-900";

export function Field({ label, htmlFor, help, children }: { label: string; htmlFor: string; help?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-sm font-medium text-chalk/85">{label}</label>
      {children}
      {help && <p className="text-xs text-chalk/50">{help}</p>}
    </div>
  );
}
