"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRightIcon,
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  XIcon,
} from "lucide-react";

type Variant = "hero" | "cta";

const VARIANT_CLASSES: Record<Variant, string> = {
  hero: "px-7 py-3.5 bg-black text-white hover:opacity-85",
  cta: "px-8 py-4 bg-brand text-white hover:opacity-90",
};

export default function BookConsultationButton({
  variant = "hero",
}: {
  variant?: Variant;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const close = () => dialogRef.current?.close();
  const open = () => dialogRef.current?.showModal();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onClick = (e: MouseEvent) => {
      const rect = dialog.getBoundingClientRect();
      const outside =
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom;
      if (outside) dialog.close();
    };
    dialog.addEventListener("click", onClick);
    return () => dialog.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={open}
        className={`inline-flex items-center justify-center gap-2 rounded-md font-medium transition group ${VARIANT_CLASSES[variant]}`}
      >
        Book a free consultation
        <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby="book-consult-title"
        className="modal-anim fixed inset-0 m-auto bg-transparent p-0 max-w-md w-[calc(100%-2rem)] rounded-2xl"
      >
        <div className="relative bg-page/95 backdrop-blur-xl border border-black/10 rounded-2xl p-8 text-black">
          <button
            type="button"
            onClick={close}
            aria-label="Close dialog"
            className="absolute top-4 right-4 p-1.5 rounded-md text-black/60 hover:text-black hover:bg-black/5 transition"
          >
            <XIcon className="h-5 w-5" />
          </button>

          <div className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-black/60 mb-4">
            <span className="h-px w-8 bg-black/40" />
            Get in touch
          </div>
          <h2
            id="book-consult-title"
            className="text-2xl md:text-3xl font-bold tracking-tight mb-3"
          >
            Book a free consultation
          </h2>
          <p className="text-black/70 leading-relaxed mb-6">
            Reach our New York team to discuss bookkeeping, payroll, tax
            planning, or full-spectrum cost management.
          </p>

          <ul className="space-y-4 mb-7">
            <li className="flex items-start gap-3">
              <MailIcon
                className="h-5 w-5 text-brand mt-0.5 shrink-0"
                strokeWidth={1.75}
              />
              <div>
                <div className="text-xs uppercase tracking-[0.14em] text-black/50">
                  Email
                </div>
                <a
                  href="mailto:info@360costmanagement.com"
                  className="font-medium hover:text-brand transition-colors"
                >
                  info@360costmanagement.com
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <PhoneIcon
                className="h-5 w-5 text-brand mt-0.5 shrink-0"
                strokeWidth={1.75}
              />
              <div>
                <div className="text-xs uppercase tracking-[0.14em] text-black/50">
                  Phone / Fax
                </div>
                <a
                  href="tel:+19292967431"
                  className="font-medium hover:text-brand transition-colors"
                >
                  (929) 296-7431
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <ClockIcon
                className="h-5 w-5 text-brand mt-0.5 shrink-0"
                strokeWidth={1.75}
              />
              <div>
                <div className="text-xs uppercase tracking-[0.14em] text-black/50">
                  Hours
                </div>
                <div className="font-medium">
                  Mon–Fri · 9:00 AM – 5:00 PM
                </div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPinIcon
                className="h-5 w-5 text-brand mt-0.5 shrink-0"
                strokeWidth={1.75}
              />
              <div>
                <div className="text-xs uppercase tracking-[0.14em] text-black/50">
                  Location
                </div>
                <div className="font-medium">New York, NY</div>
              </div>
            </li>
          </ul>

          <Link
            href="/contact"
            onClick={close}
            className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:gap-3 transition-all"
          >
            Or send a detailed message
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </dialog>
    </>
  );
}
