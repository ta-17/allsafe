import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import dayjs, { Dayjs } from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import Header from '@/components/hero/header-two'
import { ArrowUpRight } from 'lucide-react'

dayjs.extend(relativeTime)

const articles = [
    {
        id: 1,
        title: 'Federal Trade Commission warns of new scam targeting young people on social media',
        source: 'CNBC WGAL',
        link: 'https://www.wgal.com/article/ftc-warns-of-new-scam-targeting-young-people-on-social-media/61757295',
        addedAt: dayjs('2024-08-29'),
        updatedAt: dayjs('2024-08-29'),
    },
    {
        id: 2,
        title: 'Social media scams are on the rise among young adults. Here’s what to look out for.',
        source: 'The Globe',
        link: 'https://www.globeslcc.com/2023/09/21/social-media-romance-employment-scams-young-adults-tips/',
        addedAt: dayjs('2024-08-29'),
        updatedAt: dayjs('2024-08-29'),
    },
    {
        id: 3,
        title: 'Gen Z And Millennials Are More Likely To Fall Victim To Online Scams',
        source: 'Tech News',
        link: 'https://www.techbusinessnews.com.au/news/gen-z-and-millennials-are-more-likely-to-fall-for-online-scams/',
        addedAt: dayjs('2024-08-29'),
        updatedAt: dayjs('2024-08-29'),
    },
    {
        id: 4,
        title: 'Gen Z the fastest growing victims of scams',
        source: 'Australian Competition & Consumer Commission',
        link: 'https://www.accc.gov.au/media-release/gen-z-the-fastest-growing-victims-of-scams',
        addedAt: dayjs('2024-08-29'),
        updatedAt: dayjs('2024-08-29'),
    },
]
export default function News() {
    return (
        <div className="">
            <Header
                title="Safety Watch"
                subtitle="Curated list of scam related news articles."
                className="p-0"
            />
            <div className="p-4">
                {articles.map((article) => (
                    <a href={article.link} key={article.id}>
                        <Card
                            key={article.id}
                            className="flex flex-col sm:flex-row items-end justify-between sm:items-center mb-4"
                        >
                            <CardHeader>
                                <p className="text-sm text-gray-500">
                                    {article.source}
                                </p>
                                <CardTitle>{article.title}</CardTitle>
                                <CardDescription>
                                    <p className="text-xs text-gray-400">
                                        Updated:
                                        {dayjs(article.updatedAt).fromNow()}
                                    </p>
                                </CardDescription>
                                <span className="text-muted-foreground text-xs break-words">
                                    {article.link}
                                </span>
                            </CardHeader>
                            <CardContent>
                                <ArrowUpRight />
                            </CardContent>
                        </Card>
                    </a>
                ))}
            </div>
        </div>
    )
}
