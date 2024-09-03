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
        <div className="flex flex-col items-center justify-center px-12 py-24 gap-4">
            <Header
                title="News Articles"
                subtitle="We have curated a list of the most relevant news related to scams."
            />
            <div className="flex flex-col p-4 gap-y-4">
                {articles.map((article) => (
                    <a href={article.link} className="w-30" key={article.id}>
                        <Card key={article.id}>
                            <CardHeader>
                                <p className="text-sm text-gray-500">
                                    {article.source}
                                </p>
                                <CardTitle>{article.title}</CardTitle>
                                <CardDescription>
                                    {/* <p className="text-xs text-gray-400">
                                        Added:
                                        {dayjs(article.addedAt).toNow()}
                                    </p> */}
                                    <p className="text-xs text-gray-400">
                                        Updated:
                                        {dayjs(article.updatedAt).fromNow()}
                                    </p>
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex flex-col sm:flex-row items-end justify-end gap-x-4">
                                <span className="text-right text-muted-foreground overflow-scroll">
                                    {article.link}
                                </span>
                                <ArrowUpRight />
                            </CardContent>
                        </Card>
                    </a>
                ))}
            </div>
        </div>
    )
}
