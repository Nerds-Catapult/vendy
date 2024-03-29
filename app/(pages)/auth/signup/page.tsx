"use client"
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm}  from "react-hook-form"
import {z} from "zod"
import {Button} from "@/components/ui/button"
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Input} from "@/components/ui/input"



import "./signup.css"


const formSchema = z.object({
    username: z.string()
        .min(3, "Username must be at least 3 characters long")
        .max(8, "Username must be at most 8 characters long"),
    email: z.string()
        .email("Please enter a valid email"),
    phoneNumber: z.number()
        .min(10, "Please enter a valid phone number")
        .max(10, "Please enter a valid phone number"),
    password: z.string()
        .min(6, "Password must be at least 6 characters long")
        .max(12, "Password must be at most 12 characters long"),
})


const SignUpPage = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
    })
    return (
        <div className="s-form">
            <h1 className="s-h1">Create Your Account</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit((data) => console.log(data))} className="flex flex-col space-y-4 w-full p-4">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your username" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your email" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your phone number" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your password" {...field} type="password" />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="s-button">Sign Up</Button>
                </form>
            </Form>
        </div>
    )
}


export default SignUpPage;


//prefixing css classname with s- to indicate that it is a class only relevant to sign up page