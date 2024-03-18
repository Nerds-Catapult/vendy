"use client"
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"
import {Button} from "@/components/ui/button"
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Input} from "@/components/ui/input"

const formSchema = z.object({})

const SignUpPage = () => {
    return (
        <div>
            <h1>Sign Up Page</h1>
        </div>
    )
}


export default SignUpPage;