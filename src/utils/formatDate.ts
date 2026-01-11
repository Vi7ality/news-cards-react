export function formatDateWithOrdinal(isoDate: string): string {
    const date = new Date(isoDate);

    const day = date.getUTCDate();
    const month = date.toLocaleString("en-US", { month: "long", timeZone: "UTC" });
    const year = date.getUTCFullYear();

    const ordinal = (n: number): string => {
        if (n >= 11 && n <= 13) return "th";
        switch (n % 10) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    };

    return `${month} ${day}${ordinal(day)}, ${year}`;
}
