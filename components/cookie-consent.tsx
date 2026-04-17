"use client";

import Link from "next/link";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type CookiePreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

type CookieConsentContextValue = {
  openSettings: () => void;
};

const STORAGE_KEY = "bsl-cookie-consent-v1";
const COOKIE_NAME = "bsl_cookie_consent";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

function readStoredPreferences(): CookiePreferences | null {
  if (typeof window === "undefined") {
    return null;
  }

  const rawValue = window.localStorage.getItem(STORAGE_KEY);

  if (!rawValue) {
    return null;
  }

  try {
    const parsed = JSON.parse(rawValue) as Partial<CookiePreferences>;

    return {
      necessary: true,
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
    };
  } catch {
    return null;
  }
}

function persistPreferences(preferences: CookiePreferences) {
  const serialized = JSON.stringify(preferences);

  window.localStorage.setItem(STORAGE_KEY, serialized);
  document.cookie = `${COOKIE_NAME}=${encodeURIComponent(serialized)}; Max-Age=${COOKIE_MAX_AGE}; Path=/; SameSite=Lax`;
}

function CookieToggle({
  label,
  description,
  checked,
  disabled = false,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: () => void;
}) {
  return (
    <div className="flex items-start justify-between gap-6 rounded-[1.5rem] border border-black/5 bg-zinc-50 p-5">
      <div className="max-w-xl">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-navy">{label}</p>
        <p className="mt-2 text-sm leading-relaxed text-navy/65">{description}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={onChange}
        className={`relative inline-flex h-8 w-14 shrink-0 rounded-full transition-colors ${
          checked ? "bg-primary" : "bg-black/10"
        } ${disabled ? "cursor-not-allowed opacity-70" : ""}`}
      >
        <span
          className={`absolute top-1 h-6 w-6 rounded-full bg-white shadow-sm transition-transform ${
            checked ? "translate-x-7" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);
  const [isMounted, setIsMounted] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const storedPreferences = readStoredPreferences();

    if (storedPreferences) {
      setPreferences(storedPreferences);
      setIsBannerVisible(false);
      return;
    }

    setIsBannerVisible(true);
  }, []);

  useEffect(() => {
    if (!isMounted) {
      return;
    }

    const originalOverflow = document.body.style.overflow;

    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isModalOpen, isMounted]);

  function savePreferences(nextPreferences: CookiePreferences) {
    setPreferences(nextPreferences);
    persistPreferences(nextPreferences);
    setIsBannerVisible(false);
    setIsModalOpen(false);
  }

  function openSettings() {
    setIsModalOpen(true);
  }

  function closeSettings() {
    setIsModalOpen(false);
  }

  function acceptAll() {
    savePreferences({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  }

  function acceptNecessaryOnly() {
    savePreferences(defaultPreferences);
  }

  const contextValue = useMemo<CookieConsentContextValue>(
    () => ({
      openSettings,
    }),
    [],
  );

  return (
    <CookieConsentContext.Provider value={contextValue}>
      {children}

      {isMounted && isBannerVisible ? (
        <div className="fixed inset-x-0 bottom-0 z-[70] p-4 sm:p-6">
          <div className="mx-auto w-[min(96vw,1380px)] rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)] sm:p-7">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-4xl">
                <p className="text-[11px] font-black uppercase tracking-[0.3em] text-primary">
                  Cookies
                </p>
                <h2 className="mt-3 text-2xl font-black uppercase tracking-tight text-navy md:text-3xl">
                  Používame cookies pre správne fungovanie webu a vaše nastavenia súkromia.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-navy/70 md:text-base">
                  Nevyhnutné cookies sú vždy aktívne. Voliteľné analytické a marketingové
                  cookies si môžete upraviť cez{" "}
                  <button
                    type="button"
                    onClick={openSettings}
                    className="font-semibold text-primary underline underline-offset-4"
                  >
                    Nastavenia
                  </button>
                  . Viac informácií nájdete na stránke{" "}
                  <Link
                    href="/ochrana-osobnych-udajov"
                    className="font-semibold text-primary underline underline-offset-4"
                  >
                    Ochrana osobných údajov
                  </Link>
                  .
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={acceptNecessaryOnly}
                  className="inline-flex rounded-full border border-black/10 bg-white px-6 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-navy transition-colors hover:border-primary hover:text-primary"
                >
                  Len nevyhnutné
                </button>
                <button
                  type="button"
                  onClick={acceptAll}
                  className="inline-flex rounded-full bg-navy px-6 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-white transition-colors hover:bg-primary"
                >
                  Prijať všetko
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {isMounted && isModalOpen ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-3xl rounded-[2rem] bg-white p-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)] sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.3em] text-primary">
                  Nastavenia cookies
                </p>
                <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-navy">
                  Správa súhlasov
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-navy/70 md:text-base">
                  Vyberte si, ktoré typy cookies môžeme ukladať. Nevyhnutné cookies ostávajú
                  aktívne vždy, ostatné sa ukladajú len na základe vášho súhlasu.
                </p>
              </div>
              <button
                type="button"
                onClick={closeSettings}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-xl text-navy transition-colors hover:border-primary hover:text-primary"
                aria-label="Zavrieť nastavenia cookies"
              >
                ×
              </button>
            </div>

            <div className="mt-8 space-y-4">
              <CookieToggle
                label="Nevyhnutné"
                description="Tieto cookies zabezpečujú základnú funkčnosť webu, uloženie vašich preferencií a správne zobrazenie stránky."
                checked
                disabled
              />
              <CookieToggle
                label="Štatistické"
                description="Pomáhajú nám porozumieť návštevnosti a správaniu používateľov, aby sme mohli web ďalej zlepšovať."
                checked={preferences.analytics}
                onChange={() =>
                  setPreferences((current) => ({
                    ...current,
                    analytics: !current.analytics,
                  }))
                }
              />
              <CookieToggle
                label="Marketingové"
                description="Používajú sa len po vašom súhlase a iba v prípade nasadenia marketingových alebo remarketingových nástrojov."
                checked={preferences.marketing}
                onChange={() =>
                  setPreferences((current) => ({
                    ...current,
                    marketing: !current.marketing,
                  }))
                }
              />
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-black/5 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href="/ochrana-osobnych-udajov"
                className="text-sm font-semibold text-primary underline underline-offset-4"
              >
                Zobraziť ochranu osobných údajov
              </Link>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={acceptNecessaryOnly}
                  className="inline-flex rounded-full border border-black/10 bg-white px-6 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-navy transition-colors hover:border-primary hover:text-primary"
                >
                  Len nevyhnutné
                </button>
                <button
                  type="button"
                  onClick={acceptAll}
                  className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-6 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-primary transition-colors hover:bg-primary hover:text-white"
                >
                  Prijať všetko
                </button>
                <button
                  type="button"
                  onClick={() => savePreferences(preferences)}
                  className="inline-flex rounded-full bg-navy px-6 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-white transition-colors hover:bg-primary"
                >
                  Uložiť nastavenia
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </CookieConsentContext.Provider>
  );
}

export function CookieSettingsButton({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  const context = useContext(CookieConsentContext);

  if (!context) {
    throw new Error("CookieSettingsButton must be used inside CookieConsentProvider.");
  }

  return (
    <button type="button" onClick={context.openSettings} className={className}>
      {children ?? "Cookies"}
    </button>
  );
}
