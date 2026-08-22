'use client'

import { useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { navLinks, site } from '@/lib/site'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-ink text-ink-foreground">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 lg:px-8">
        <a href="#home" className="flex shrink-0 items-center gap-3" aria-label={site.name}>
          <span aria-hidden="true" className="h-9 w-0.5 bg-accent" />
          <span className="flex flex-col leading-none">
            <span className="text-base font-bold tracking-tight lg:text-lg">{site.shortName}</span>
            <span className="mt-1.5 text-[10px] text-ink-muted lg:text-xs">لزينه السيارات</span>
          </span>
        </a>

        <nav aria-label="القائمة الرئيسية" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-ink-muted transition-colors hover:text-ink-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <a
            href={site.phone.tel}
            className="hidden items-center gap-2 border border-accent px-4 py-2 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-accent-foreground lg:inline-flex"
          >
            <Phone size={16} aria-hidden="true" />
            اتصل الآن
          </a>

          <a
            href={site.phone.tel}
            aria-label={`اتصال بالهاتف ${site.phone.display}`}
            className="flex size-10 items-center justify-center text-accent lg:hidden"
          >
            <Phone size={20} aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
            className="flex size-10 items-center justify-center lg:hidden"
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-menu"
          aria-label="قائمة الجوال"
          className="border-t border-ink-border lg:hidden"
        >
          <ul className="px-5 py-1">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-ink-border last:border-b-0">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3.5 text-base"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
