import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const EMAIL = 'yashvi.sharma1204@gmail.com';

const CopyEmail = ({ className = '' }) => {
    const [copied, setCopied] = useState(false);

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
            setTimeout(() => setCopied(false), 1800);
        } catch {
            // Clipboard unavailable — fall back to selecting via mailto is handled by the link.
        }
    };

    return (
        <span className={`inline-flex items-center gap-1.5 ${className}`}>
            <a
                href={`mailto:${EMAIL}`}
                className="text-gray-900 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900 dark:text-neutral-100 dark:decoration-neutral-600 dark:hover:decoration-neutral-200"
            >
                {EMAIL}
            </a>
            <button
                type="button"
                onClick={copy}
                aria-label={copied ? 'Email copied' : 'Copy email to clipboard'}
                className="inline-flex h-6 w-6 items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 dark:text-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
            >
                {copied ? (
                    <Check className="h-3.5 w-3.5 text-green-600 dark:text-green-400" strokeWidth={2} />
                ) : (
                    <Copy className="h-3.5 w-3.5" strokeWidth={1.75} />
                )}
            </button>
            <span aria-live="polite" className="sr-only">
                {copied ? 'Email copied to clipboard' : ''}
            </span>
        </span>
    );
};

export default CopyEmail;
