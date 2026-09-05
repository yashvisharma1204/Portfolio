import React, { useEffect, useState } from 'react';

// Color scales indexed by contribution level 0-4.
const SCALES = {
    green: {
        light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
        dark: ['#262626', '#0e4429', '#006d32', '#26a641', '#39d353'],
    },
    mono: {
        light: ['#ebedf0', '#c6c6c6', '#8f8f8f', '#525252', '#1a1a1a'],
        dark: ['#262626', '#454545', '#6b6b6b', '#9c9c9c', '#e5e5e5'],
    },
};

const USERNAME = 'yashvisharma1204';
const API_URL = `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`;

const MONTH_LABELS = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

// Group a flat day array into GitHub-style weeks (columns).
// Each week starts on Sunday; pad the first week so weekday rows align.
function toWeeks(days) {
    if (!days.length) return [];
    const weeks = [];
    let current = [];

    const firstDay = new Date(days[0].date + 'T00:00:00');
    const pad = firstDay.getDay(); // 0 = Sunday
    for (let i = 0; i < pad; i += 1) current.push(null);

    days.forEach((day) => {
        current.push(day);
        if (current.length === 7) {
            weeks.push(current);
            current = [];
        }
    });
    if (current.length) {
        while (current.length < 7) current.push(null);
        weeks.push(current);
    }
    return weeks;
}

const ContributionHeatmap = ({ scale = 'mono' }) => {
    const [isDark, setIsDark] = useState(
        typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
    );
    const [days, setDays] = useState([]);

    useEffect(() => {
        if (typeof document === 'undefined') return undefined;
        const el = document.documentElement;
        const obs = new MutationObserver(() => setIsDark(el.classList.contains('dark')));
        obs.observe(el, { attributes: true, attributeFilter: ['class'] });
        return () => obs.disconnect();
    }, []);

    const LEVEL_COLORS = (SCALES[scale] || SCALES.mono)[isDark ? 'dark' : 'light'];
    const [total, setTotal] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        let active = true;
        fetch(API_URL)
            .then((res) => {
                if (!res.ok) throw new Error('bad response');
                return res.json();
            })
            .then((data) => {
                if (!active) return;
                setDays(data.contributions || []);
                setTotal(data.total?.lastYear ?? null);
            })
            .catch(() => active && setError(true));
        return () => {
            active = false;
        };
    }, []);

    if (error) {
        return (
            <p className="mt-4 text-sm text-gray-500 dark:text-neutral-400">
                Couldn&rsquo;t load contributions right now &mdash; see them on{' '}
                <a
                    href={`https://github.com/${USERNAME}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-900 underline decoration-gray-300 underline-offset-4 dark:text-neutral-100 dark:decoration-neutral-600"
                >
                    GitHub
                </a>
                .
            </p>
        );
    }

    if (!days.length) {
        return (
            <div
                className="mt-4 h-24 w-full animate-pulse rounded-md bg-gray-100 dark:bg-neutral-800"
                aria-hidden="true"
            />
        );
    }

    const weeks = toWeeks(days);

    // Compute month labels aligned to the first week each month appears in.
    const monthPositions = [];
    let lastMonth = -1;
    weeks.forEach((week, wIdx) => {
        const firstReal = week.find(Boolean);
        if (!firstReal) return;
        const month = new Date(firstReal.date + 'T00:00:00').getMonth();
        if (month !== lastMonth) {
            monthPositions.push({ month, wIdx });
            lastMonth = month;
        }
    });

    return (
        <figure
            className="mt-4"
            role="img"
            aria-label={
                total != null
                    ? `GitHub contribution graph: ${total} contributions in the last year`
                    : 'GitHub contribution graph'
            }
        >
            {total != null && (
                <p className="mb-3 text-sm text-gray-600 dark:text-neutral-400">
                    <span className="font-semibold text-gray-900 dark:text-neutral-100">{total}</span>{' '}
                    contributions in the last year
                </p>
            )}

            <div className="overflow-x-auto pb-1">
                <div className="inline-flex flex-col gap-1">
                    {/* Month labels */}
                    <div className="relative ml-0 h-4" style={{ width: weeks.length * 13 }}>
                        {monthPositions.map(({ month, wIdx }) => (
                            <span
                                key={`${month}-${wIdx}`}
                                className="absolute text-[10px] text-gray-400 dark:text-neutral-500"
                                style={{ left: wIdx * 13 }}
                            >
                                {MONTH_LABELS[month]}
                            </span>
                        ))}
                    </div>

                    {/* Weeks grid */}
                    <div className="flex gap-[3px]">
                        {weeks.map((week, wIdx) => (
                            <div key={wIdx} className="flex flex-col gap-[3px]">
                                {week.map((day, dIdx) => (
                                    <div
                                        key={dIdx}
                                        title={
                                            day
                                                ? `${day.count} contribution${day.count === 1 ? '' : 's'} on ${day.date}`
                                                : undefined
                                        }
                                        className="h-[10px] w-[10px] rounded-[2px]"
                                        style={{
                                            backgroundColor: day
                                                ? LEVEL_COLORS[day.level]
                                                : 'transparent',
                                        }}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Legend */}
            <div className="mt-3 flex items-center gap-1.5 text-[10px] text-gray-400 dark:text-neutral-500">
                <span>Less</span>
                {LEVEL_COLORS.map((c) => (
                    <span
                        key={c}
                        className="h-[10px] w-[10px] rounded-[2px]"
                        style={{ backgroundColor: c }}
                    />
                ))}
                <span>More</span>
            </div>
        </figure>
    );
};

export default ContributionHeatmap;
