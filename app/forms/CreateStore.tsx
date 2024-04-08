"use client";

import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  firstName: z.string().min(3, "Full name must be at least 3 characters long"),
  lastName: z.string().min(3, "Full name must be at least 3 characters long"),
  username: z.string().min(3, "Username must be at least 3 characters long"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z
    .string()
    .min(10, "Phone number must be at least 10 characters long"),
  storeName: z.string().min(3, "Store name must be at least 3 characters long"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

function CreateStoreForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  return (
    <form
      onSubmit={form.handleSubmit((data) => console.log(data))}
      className="flex flex-col space-y-4 w-full md:w-1/2 m-auto p-4 "
    >
      <Input
        placeholder="Enter your First Name"
        type="text"
        {...form.register("firstName")}
      />
      <Input
        placeholder="Enter your Last Name"
        type="text"
        {...form.register("lastName")}
      />
      <Input placeholder="Enter your Username" {...form.register("username")} />
      <Input placeholder="Enter your Email" {...form.register("email")} />
      <Input
        placeholder="Enter your Phone Number"
        {...form.register("phoneNumber")}
      />
      <Input
        placeholder="Enter your Store Name"
        {...form.register("storeName")}
      />
      <Input
        placeholder="Enter your Password"
        {...form.register("password")}
        type="password"
      />
      <Button type="submit">Create Store</Button>
    </form>
  );
}

export default CreateStoreForm;
