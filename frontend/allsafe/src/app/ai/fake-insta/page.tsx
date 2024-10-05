'use client'

import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from '@/components/ui/form'
import { TypographyH1 } from '@/typography/h1'
import { TypographyLead } from '@/typography/lead'
import { Dot, Image, ImagePlus, X } from 'lucide-react'
import { detectFakeInstaAccount } from '@/actions/detect-fake-insta'

const formSchema = z.object({
    profileImage: z.any().optional(),
    isProfilePic: z.boolean().default(false),
    isPrivate: z.boolean().default(false),
})

export default function FakeInstaDetect() {
    const [file, setFile] = useState<File | null>(null)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            isProfilePic: false,
            isPrivate: false,
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Here you would typically send the form data to your server
        console.log(values)

        // Example of how you might call your detection function
        // Note: You'll need to adjust this based on how detectFakeInstaAccount is implemented
        if (file) {
            try {
                const result = await detectFakeInstaAccount({
                    file,
                    isProfilePic: values.isProfilePic,
                    isPrivate: values.isPrivate,
                })
                console.log(result)
                // Handle the result (e.g., update state to show the result to the user)
            } catch (error) {
                console.error('Error detecting fake account:', error)
                // Handle the error (e.g., show an error message to the user)
            }
        }
    }

    return (
        <div className="flex flex-col gap-y-8">
            <TypographyH1>
                Identify if that Instagram account is fake.
            </TypographyH1>
            <TypographyLead>
                Upload a screenshot of the profile (preferably mobile).
            </TypographyLead>

            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex flex-col space-y-8 justify-end"
                >
                    <div className="flex flex-col justify-center w-full gap-y-8">
                        <div className="flex flex-col justify-center items-center w-full bordered border-dashed border-2 rounded-md gap-y-6 px-4 py-12">
                            <div>
                                <ImagePlus
                                    className="w-32 h-32"
                                    strokeWidth={1}
                                    strokeOpacity={0.8}
                                />
                            </div>
                            <div className="flex items-center text-muted-foreground gap-x-1">
                                <div className="text-lg">
                                    <label
                                        htmlFor="profile_pic"
                                        className="text-lg underline cursor-pointer"
                                    >
                                        Click to upload
                                    </label>
                                    <input
                                        type="file"
                                        id="profile_pic"
                                        name="profile_pic"
                                        accept="image/*"
                                        onChange={(e) => {
                                            const selectedFile =
                                                e.target.files?.[0]
                                            if (selectedFile) {
                                                setFile(selectedFile)
                                                form.setValue(
                                                    'profileImage',
                                                    selectedFile
                                                )
                                            }
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

                        {file && (
                            <div className="flex self-center gap-x-6 w-11/12 bordered border rounded-md px-2 py-4">
                                <div className="flex gap-x-6 w-full">
                                    <Image className="w-12 h-12" />
                                    <div className="flex flex-col">
                                        <p className="text-lg">{file.name}</p>
                                        <div className="flex items-center">
                                            <p className="text-sm text-muted-foreground">
                                                {Math.round(file.size / 1000)}{' '}
                                                KB
                                            </p>
                                            <Dot className="w-8" />
                                            <p className="text-sm text-muted-foreground">
                                                {file.type}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => {
                                        setFile(null)
                                        form.setValue('profileImage', undefined)
                                    }}
                                >
                                    <X className="w-4 h-4" />
                                </Button>
                            </div>
                        )}

                        <FormField
                            control={form.control}
                            name="isProfilePic"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                        <FormLabel>
                                            Is there a profile picture?
                                        </FormLabel>
                                    </div>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="isPrivate"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                        <FormLabel>
                                            Is the account private?
                                        </FormLabel>
                                    </div>
                                </FormItem>
                            )}
                        />
                    </div>

                    <Button className="self-end" type="submit">
                        Submit
                    </Button>
                </form>
            </Form>
        </div>
    )
}
