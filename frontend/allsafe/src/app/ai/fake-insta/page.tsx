'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { TypographyH1 } from '@/typography/h1'
import { TypographyLead } from '@/typography/lead'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Checkbox } from '@/components/ui/checkbox'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

import sharp from 'sharp'

export default function FakeInstaDetect() {
    const [file, setFile] = useState<File | null>()

    const submit = () => {
        console.log('file ', file)
        if (file === null) return
        const file_sharp = sharp(file)
        console.log('to sharp ', file_sharp)
    }

    return (
        <div>
            <TypographyH1>
                Identify if that Instagram account is fake.
            </TypographyH1>
            <TypographyLead>Take a screenshot of the account</TypographyLead>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="screenshot">Screenshot</Label>
                <Input
                    id="screenshot"
                    type="file"
                    onChange={(e) => {
                        if (e.target.files !== null) setFile(e.target.files[0])
                    }}
                    accept="image/*"
                />
            </div>
            <div className="flex flex-col">
                <div className="flex">
                    <div>
                        <Checkbox id="terms" />
                        <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Accept terms and conditions
                        </label>
                    </div>
                    <div>
                        <Checkbox id="terms" />
                        <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Accept terms and conditions
                        </label>
                    </div>
                </div>
                <div className="flex">
                    <div>
                        <Checkbox id="terms" />
                        <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Accept terms and conditions
                        </label>
                    </div>
                    <div>
                        <Checkbox id="terms" />
                        <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Accept terms and conditions
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
    )
}
