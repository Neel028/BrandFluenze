import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { FC } from 'react'
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Textarea } from "../ui/textarea"
import { Separator } from "../ui/separator"

interface WaitListModalProps {
    open: boolean,
    close: () => void
}

const formSchema = z.object({
    fullName: z.string().min(1, { message: "Full Name is required" }),
    email: z.string().min(1, { message: "Email is required" }).email({ message: "Invalid email format" }),
    userType: z.string().min(1, { message: "User Type is required" }),
    phoneNumber: z
    .string()
    .regex(/^[0-9]+$/, { message: "Phone number should contain only digits" })
    .min(10, { message: "Phone number should be at least 10 digits" })
    .max(15, { message: "Phone number should be at most 15 digits" }).optional(),
    interest: z.string().min(1, { message: "Interest is required" })    
})

const WaitListModal: FC<WaitListModalProps> = ({ open, close }) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            phoneNumber: "",
            userType: "",
            interest: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <Dialog open={open} onOpenChange={close}>
            <DialogContent className="w-[95%] rounded-lg sm:max-w-[425px] p-0 gap-0">
                <DialogHeader className="py-4 px-6">
                    <DialogTitle className="text-xl">Be the First to Know!</DialogTitle>
                    <DialogDescription className="text-xs leading-[1.6]">
                        Join our exclusive waitlist to get early access, updates, and special perks. Don’t miss out—secure your spot today!
                    </DialogDescription>
                </DialogHeader>
                <Separator className="my-0" />
                <div className="py-4 px-6">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                            <FormField
                                control={form.control}
                                name="fullName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-sm">Full Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter Full Name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-sm">Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter Email Address" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="userType"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-sm">User Type</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select user type" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent className="bg-background">
                                                <SelectItem className="cursor-pointer" value="brand">Brand</SelectItem>
                                                <SelectItem className="cursor-pointer" value="influencer">Influencer</SelectItem>
                                                <SelectItem className="cursor-pointer" value="digital expert">Digital Expert</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                             <FormField
                                control={form.control}
                                name="phoneNumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-sm">Phone Number (Optional)</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter Phone Number" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="interest"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-sm">Interest</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                rows={3}
                                                placeholder="Describe What You Are Lookiing For"
                                                className="resize-none"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full bg-theme text-white hover:bg-theme">Submit</Button>
                        </form>
                    </Form>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default WaitListModal
