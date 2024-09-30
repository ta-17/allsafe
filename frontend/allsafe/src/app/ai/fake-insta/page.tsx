import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { TypographyH1 } from '@/typography/h1'
import { TypographyLead } from '@/typography/lead'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Checkbox } from '@/components/ui/checkbox'

export default function FakeInstaDetect() {
    return (
        <div>
            <TypographyH1>
                Identify if that Instagram account is fake.
            </TypographyH1>
            <TypographyLead>Take a screenshot of the account</TypographyLead>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="screenshot">Screenshot</Label>
                <Input id="screenshot" type="file" />
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
        </div>
    )
}
