'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { profile } from 'console'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../ui/form'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

const formSchema = z.object({
    file: z.any(),
    profilePic: z.any(),
    profilePrivate: z.any(),
})

export function ProfileForm() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            file: null,
            profilePic: [],
            profilePrivate: [],
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="file"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Instagram account screenshot</FormLabel>
                            <FormControl>
                                <Input
                                    type="file"
                                    accept="image/*"
                                    placeholder="insta_profile.jpg"
                                />
                            </FormControl>
                            <FormDescription>
                                This is the screenshot of the instagram account.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="profilePic"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Profile Pic</FormLabel>
                            <FormControl>
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
                            </FormControl>
                            <FormDescription>
                                This is the screenshot of the instagram account.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="profilePic"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Profile Pic</FormLabel>
                            <FormControl>
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
                            </FormControl>
                            <FormDescription>
                                This is the screenshot of the instagram account.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}
