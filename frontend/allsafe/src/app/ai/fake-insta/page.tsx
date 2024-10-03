'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { TypographyH1 } from '@/typography/h1'
import { TypographyLead } from '@/typography/lead'
import { Checkbox } from '@/components/ui/checkbox'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { z } from 'zod'

// import sharp from 'sharp'

export default function FakeInstaDetect() {
    const [file, setFile] = useState<File | null>()

    const submit = async () => {
        console.log('file ', file)
        if (file === null) return

        console.log('file ', file)
        // await asyncDetectFakeInstaAccount(file)

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
                    Take a screenshot of the account
                </TypographyLead>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="screenshot">Screenshot</Label>
                    <Input
                        id="screenshot"
                        type="file"
                        onChange={(e) => {
                            if (e.target.files !== null)
                                setFile(e.target.files[0])
                        }}
                        accept="image/*"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-y-16">
                <div className="flex flex-col">
                    <p>Is there a profile picture?</p>
                    <div className="flex justify-around w-full">
                        <div>
                            <Checkbox id="terms" />
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Yes
                            </label>
                        </div>
                        <div>
                            <Checkbox id="terms" />
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                No
                            </label>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <p>Is the account private</p>
                    <div className="flex justify-around w-full">
                        <div>
                            <Checkbox id="terms" />
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Yes
                            </label>
                        </div>
                        <div>
                            <Checkbox id="terms" />
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                No
                            </label>
                        </div>
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
    )
}
