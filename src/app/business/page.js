'use client';
import { useState, useRef, useEffect } from 'react';
import { useI18n } from '@/lib/i18n';
import ProductStatusBadge from '@/components/ProductStatusBadge';

export default function Page(){
  const { t, lang } = useI18n();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [touched, setTouched] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const inputRef = useRef(null);

  const txt = {
    title: t('product.business.title'),
    body: t('product.business.body'),
    notify: t('business.notify.me') || 'Notify me',
    dialogTitle: (t('business.notify.dialogTitle') || 'Get notified'),
    emailLabel: (t('business.notify.email') || 'Email address'),
    emailPlaceholder: (t('business.notify.placeholder') || 'you@example.com'),
    cancel: (t('common.cancel') || 'Cancel'),
    submit: (t('common.submit') || 'Submit'),
    success: (t('business.notify.success') || 'Thanks! We’ll email you when it’s ready.'),
    invalid: (t('common.invalidEmail') || 'Please enter a valid email.'),
  };

  const isValidEmail = (v) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(v.trim());

  const onOpen = () => {
    setOpen(true);
    setSubmitted(false);
    setTouched(false);
    // keep existing email if user reopens
  };

  const onClose = () => {
    setOpen(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setTouched(true);
    if (!isValidEmail(email)) return;
    // simulate success; no real network call
    setSubmitted(true);
    // auto-close after a brief moment
    setTimeout(() => setOpen(false), 1200);
  };

  // focus input when dialog opens; ESC to close
  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const showError = touched && !isValidEmail(email);

  return (
      <main className="section">
        <div className="container-pad grid md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="h">{txt.title}</h1>
              <ProductStatusBadge status="Waiting for license" />
            </div>
            <p className="mt-3 text-gray-700">{txt.body}</p>
            <ul className="mt-6 space-y-2 text-sm">
              <li className="card">Mobile Money, cards & crypto supported</li>
              <li className="card">Clear dashboard & controls</li>
              <li className="card">Business API coming soon</li>
            </ul>

            <button
                type="button"
                onClick={onOpen}
                className="btn btn-primary mt-6 w-fit"
            >
              {txt.notify}
            </button>
          </div>

          <div className="card">
            <img
                src="https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1932"
                alt=""
                className="w-full h-80 object-cover rounded-2xl border"
            />
          </div>
        </div>

        {/* Dialog */}
        {open && (
            <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
                role="dialog"
                aria-modal="true"
                aria-labelledby="notify-dialog-title"
            >
              <div className="w-full max-w-md rounded-2xl bg-white shadow-soft p-6">
                <div className="flex items-start justify-between">
                  <h2 id="notify-dialog-title" className="text-lg font-semibold">
                    {txt.dialogTitle}
                  </h2>
                  <button
                      onClick={onClose}
                      aria-label="Close"
                      className="rounded-lg p-2 hover:bg-fondeka-light"
                  >
                    ✕
                  </button>
                </div>

                <form onSubmit={onSubmit} className="mt-4">
                  <label className="block text-sm font-medium text-gray-700">
                    {txt.emailLabel}
                  </label>
                  <input
                      ref={inputRef}
                      type="email"
                      inputMode="email"
                      placeholder={txt.emailPlaceholder}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={() => setTouched(true)}
                      className={`mt-2 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-fondeka-mint ${
                          showError ? 'border-red-400' : 'border-gray-300'
                      }`}
                  />
                  {showError && (
                      <p className="mt-2 text-xs text-red-600">{txt.invalid}</p>
                  )}

                  <div className="mt-5 flex items-center justify-end gap-3">
                    <button
                        type="button"
                        onClick={onClose}
                        className="btn btn-ghost"
                    >
                      {txt.cancel}
                    </button>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={!isValidEmail(email)}
                    >
                      {txt.submit}
                    </button>
                  </div>

                  {/* Local success message */}
                  {submitted && (
                      <div className="mt-4 rounded-xl border border-fondeka-mint/30 bg-fondeka-light px-3 py-2 text-sm text-fondeka-green">
                        {txt.success}
                      </div>
                  )}
                </form>
              </div>
            </div>
        )}
      </main>
  );
}
