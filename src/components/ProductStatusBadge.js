'use client';
import { useI18n } from '@/lib/i18n';

export default function ProductStatusBadge({ status }) {
    if (!status) return null;
    const { t } = useI18n();

    const normalizedStatus = status.trim().toLowerCase();
    const localizedStatus =
        normalizedStatus === 'available'
            ? t('common.status.available')
            : normalizedStatus === 'coming soon'
                ? t('common.status.comingSoon')
                : status;

    const tone =
        status === 'Available'
            ? 'bg-emerald-100 text-emerald-800 border-emerald-200'
            : 'bg-amber-100 text-amber-900 border-amber-200';
    const dotTone =
        status === 'Available' ? 'text-emerald-700' : 'text-amber-700';

    return (
        <span className={`badge border ${tone}`}>
            <span className={dotTone}>●</span>
            <span>{localizedStatus}</span>
        </span>
    );
}
