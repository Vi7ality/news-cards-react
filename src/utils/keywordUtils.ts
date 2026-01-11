// src/utils/keywordUtils.ts
import type { Article } from "@/types/article";

export interface KeywordMatch {
    keywords: string[];
    hasTitleMatch: boolean;
    hasDescriptionMatch: boolean;
}

export interface TextPart {
    text: string;
    highlight: boolean;
}

export function parseKeywords(query: string): string[] {
    if (!query.trim()) return [];
    return query
        .trim()
        .split(/\s+/)
        .filter((keyword) => keyword.length > 0)
        .map((keyword) => keyword.toLowerCase());
}

export function findKeywordMatches(text: string, keywords: string[]): boolean {
    if (!text || keywords.length === 0) return false;
    const lowerText = text.toLowerCase();
    return keywords.some((keyword) => lowerText.includes(keyword));
}

export function getArticleMatchInfo(article: Article, keywords: string[]): KeywordMatch {
    const hasTitleMatch = findKeywordMatches(article.title, keywords);
    const hasDescriptionMatch = findKeywordMatches(article.summary || "", keywords);

    return {
        keywords,
        hasTitleMatch,
        hasDescriptionMatch,
    };
}

export function sortArticlesByPriority(articles: Article[], keywords: string[]): Article[] {
    if (keywords.length === 0) return articles;

    return [...articles].sort((a, b) => {
        const aMatch = getArticleMatchInfo(a, keywords);
        const bMatch = getArticleMatchInfo(b, keywords);

        // Priority: title match > description match
        if (aMatch.hasTitleMatch && !bMatch.hasTitleMatch) return -1;
        if (!aMatch.hasTitleMatch && bMatch.hasTitleMatch) return 1;

        return 0;
    });
}

export function highlightKeywords(text: string, keywords: string[]): TextPart[] {
    if (!text || keywords.length === 0) return [{ text, highlight: false }];

    const lowerText = text.toLowerCase();
    const parts: TextPart[] = [];
    let lastIndex = 0;
    const matches: Array<{ start: number; end: number; keyword: string }> = [];

    keywords.forEach((keyword) => {
        let searchIndex = 0;
        while (true) {
            const index = lowerText.indexOf(keyword.toLowerCase(), searchIndex);
            if (index === -1) break;
            matches.push({
                start: index,
                end: index + keyword.length,
                keyword: text.substring(index, index + keyword.length),
            });
            searchIndex = index + 1;
        }
    });

    matches.sort((a, b) => a.start - b.start);

    const mergedMatches: Array<{ start: number; end: number; text: string }> = [];
    matches.forEach((match) => {
        if (mergedMatches.length === 0) {
            mergedMatches.push({ start: match.start, end: match.end, text: match.keyword });
        } else {
            const last = mergedMatches[mergedMatches.length - 1];
            if (match.start <= last.end) {
                // Overlapping or adjacent - merge
                last.end = Math.max(last.end, match.end);
                last.text = text.substring(last.start, last.end);
            } else {
                mergedMatches.push({ start: match.start, end: match.end, text: match.keyword });
            }
        }
    });

    mergedMatches.forEach((match) => {
        if (match.start > lastIndex) {
            parts.push({ text: text.substring(lastIndex, match.start), highlight: false });
        }
        parts.push({ text: match.text, highlight: true });
        lastIndex = match.end;
    });

    if (lastIndex < text.length) {
        parts.push({ text: text.substring(lastIndex), highlight: false });
    }

    return parts.length > 0 ? parts : [{ text, highlight: false }];
}
