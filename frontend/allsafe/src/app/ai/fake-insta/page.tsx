'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { TypographyH1 } from '@/typography/h1'
import { TypographyLead } from '@/typography/lead'
import { Checkbox } from '@/components/ui/checkbox'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { date, z } from 'zod'
import { CloudUpload, Dot, File, Image, ImagePlus, X } from 'lucide-react'
import { detectFakeInstaAccount } from '@/actions/detect-fake-insta'

// import sharp from 'sharp'

export default function FakeInstaDetect() {
    const [file, setFile] = useState<File | null>()
    const [isPrivate, setIsPrivate] = useState(false)
    const [isProfilePic, setIsProfilePic] = useState(false)
    const [loading, onLoading] = useState(false)
    const [result, setResult] = useState<any | null>(null)
    const [error, setError] = useState<string | null>(null)

    const submit = async () => {
        console.log('file ', file)
        if (file === null) return

        console.log('file ', file)
        // await asyncDetectFakeInstaAccount(file)
        await detectFakeInstaAccount('string')

        // const file_sharp = sharp(file)
        // console.log('to sharp ', file_sharp)
    }

    const formSchema = z.object({
        username: z.string().min(2).max(50),
    })

    return (
        <div className="flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-4">
                <TypographyH1>
                    Identify if that Instagram account is fake.
                </TypographyH1>
                <TypographyLead>
                    Upload a screenshot of the profile (preferably mobile).
                </TypographyLead>
                <div className="flex flex-col w-full gap-y-8">
                    <div className="flex flex-col justify-center items-center w-full bordered border-dashed border-2 rounded-md gap-y-6 px-4 py-12">
                        {/* Upload Image  */}
                        <div>
                            <ImagePlus
                                className="w-32 h-32"
                                strokeWidth={1}
                                strokeOpacity={0.8}
                            />
                        </div>
                        <div className="flex items-center text-muted-foreground gap-x-1">
                            <div className="text-lg">
                                <Label
                                    htmlFor="profile_pic"
                                    className="text-lg underline"
                                >
                                    Click to upload
                                </Label>
                                <input
                                    type="file"
                                    id="profile_pic"
                                    name="profile_pic"
                                    accept="image/*"
                                    onChange={(e) => {
                                        if (e.target.files !== null)
                                            setFile(e.target.files[0])
                                    }}
                                    hidden
                                />
                            </div>
                            <p> or drag and drop here.</p>
                        </div>
                        <span className="text-muted-foreground">
                            Maximum file size: 5MB
                        </span>
                    </div>
                    {file !== null && file !== undefined && (
                        <div className="flex justify-between gap-x-6 w-full bordered border-2 rounded-md px-2 py-4">
                            {/* File upload */}
                            <div className="flex gap-x-6 w-full ">
                                <Image className="w-12 h-12" />
                                <div className="flex flex-col">
                                    <p className="text-lg">{file.name}</p>
                                    <div className="flex items-center">
                                        <p className="text-sm text-muted-foreground">
                                            {Math.round(file.size / 1000)} MB
                                        </p>
                                        <Dot className="w-8" />
                                        <p className="text-sm text-muted-foreground">
                                            {file.type}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setFile(null)}
                            >
                                <X className="w-4 h-4" />
                            </Button>
                        </div>
                    )}
                    <div className="flex  flex-col gap-y-6">
                        <div className="flex justify-between items-center gap-y-2 w-1/3">
                            <p className="text-lg">
                                Is there a profile picture?
                            </p>
                            <div className="flex items-center gap-x-2 w-6">
                                <Checkbox
                                    id="terms"
                                    checked={isProfilePic}
                                    onCheckedChange={(checked) =>
                                        setIsProfilePic(checked === true)
                                    }
                                />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    {isProfilePic ? 'Yes' : 'No'}
                                </label>
                            </div>
                        </div>
                        <div className="flex justify-between items-center gap-y-2 w-1/3">
                            <p className="text-lg">Is the account private</p>
                            <div className="flex items-center gap-x-2 w-6">
                                <Checkbox
                                    id="terms"
                                    checked={isPrivate}
                                    onCheckedChange={(checked) =>
                                        setIsPrivate(checked === true)
                                    }
                                />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    {isPrivate ? 'Yes' : 'No'}
                                </label>
                            </div>
                        </div>
                    </div>
                    <Button
                        onClick={() => {
                            submit()
                        }}
                    >
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    )
}
