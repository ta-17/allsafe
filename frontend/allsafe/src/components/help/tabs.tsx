import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import InstagramReportingGuide from './instagram'
import FacebookReportingGuide from './facebook'
import TikTokReportingGuide from './tiktok'

export function PlatformTabs() {
    return (
        <Tabs defaultValue="instagram" className="w-full">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <TabsTrigger value="instagram">Instagram</TabsTrigger>
                <TabsTrigger value="facebook">Facebook</TabsTrigger>
                <TabsTrigger value="tiktok">Tiktok</TabsTrigger>
            </TabsList>
            <TabsContent value="instagram">
                <InstagramReportingGuide />
            </TabsContent>
            <TabsContent value="facebook">
                <FacebookReportingGuide />
            </TabsContent>
            <TabsContent value="tiktok">
                <TikTokReportingGuide />
            </TabsContent>
        </Tabs>
    )
}
