import Image from "next/image";
import Link from "next/link";

const COMPANY = [
  { label: "Company Overview", href: "/overview" },
  { label: "Our Expertise", href: "/#expertise" },
  { label: "Regulatory Services", href: "/#expertise" },
  { label: "Contract Manufacturing", href: "/#expertise" },
  { label: "Products", href: "/#products" },
] as const;

const QUICK = [
  { label: "Packaging", href: "/#packaging" },
  { label: "Certifications", href: "/#certifications" },
  { label: "Growing Network", href: "/#network" },
  { label: "Contact Us", href: "/#contact" },
] as const;

export function Footer() {
  return (
    <footer className="bg-navy text-white section-fade-top">
      <div className="section-pad mx-auto grid max-w-7xl gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Image
            src="/brand/zelnex-logo.png"
            alt="Zelnex Pharmaceuticals"
            width={150}
            height={44}
            className="h-10 w-auto brightness-0 invert"
          />
          <p className="mt-3 text-sm font-medium text-teal-bright">
            Caring for Life
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            High-quality, affordable, and globally compliant healthcare
            solutions from India to the world.
          </p>
          <p className="mt-5 text-sm text-white/75">
            <a
              href="mailto:info@zelnex.com"
              className="transition-colors hover:text-white"
            >
              info@zelnex.com
            </a>
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-bright">
            Company
          </h3>
          <ul className="mt-4 flex flex-col gap-2">
            {COMPANY.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-bright">
            Quick Links
          </h3>
          <ul className="mt-4 flex flex-col gap-2">
            {QUICK.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-bright">
            Quality
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Products are sourced from WHO-GMP certified manufacturing partners.
            Regulatory documentation and dossiers are available to qualified
            buyers upon request.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-pad mx-auto flex max-w-7xl flex-col gap-2 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Zelnex Pharmaceuticals Pvt. Ltd. All
            rights reserved.
          </p>
          <p>Caring for Life</p>
        </div>
      </div>
    </footer>
  );
}
