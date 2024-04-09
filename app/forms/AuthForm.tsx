"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z
    .string()
    .min(3, "Username must be at least 3 characters long")
    .max(8, "Username must be at most 8 characters long"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .max(12, "Password must be at most 12 characters long"),
});

const ProfileForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-4 w-full md:w-1/2 m-auto p-4 "
      >
        <h1 className="text-3xl font-bold">Welcome Back</h1>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your Email" {...field} />
              </FormControl>
              <FormDescription>Provide your email</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your Password"
                  {...field}
                  type="password"
                />
              </FormControl>
              <FormDescription>Enter your password</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-1/2 ">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default ProfileForm;
