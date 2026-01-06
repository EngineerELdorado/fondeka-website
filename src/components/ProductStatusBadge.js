'use client';

export default function ProductStatusBadge({ status }) {
    if (!status) return null;

    const tone =
        status === 'Available'
            ? 'bg-emerald-100 text-emerald-800 border-emerald-200'
            : 'bg-amber-100 text-amber-900 border-amber-200';
    const dotTone =
        status === 'Available' ? 'text-emerald-700' : 'text-amber-700';

    return (
        <span className={`badge border ${tone}`}>
            <span className={dotTone}>●</span>
            <span>{status}</span>
        </span>
    );
}
