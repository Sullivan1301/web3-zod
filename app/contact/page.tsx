"use client"
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Define the Zod schema for form validation
const formSchema = z.object({
 name: z.string().min(2, "Name should have at least 2 characters").max(50, "Name should not exceed 50 characters."),
 email: z.string().min(1, { message: "This field has to be filled." }).email("This is not a valid email."),
 number: z.string().min(10, "Your number should have 10 integer").max(15, "Your number should not have more 15 integer"),
 message: z.string()
});

export default function FormContact() {
 const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "Sullivan",
      email: "sullivan@gmail.com",
      number: "+261341060802",
      message: "Here your message",
    },
 });
  
 // Adjust the type of the onSubmit function's parameter to match the form's data structure
 const onSubmit: SubmitHandler<{ name: string; email: string; number: string; message: string; }> = (data) => {
    console.log(data);
 };

 return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-8">
      <div className="mb-4">
        <label className="block mb-1">Name</label>
        <input {...register("name")} className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-950" />
        {errors.name && <p className="text-red-700">{errors.name.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-1">Email</label>
        <input {...register("email")} className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-950" />
        {errors.email && <p className="text-red-700">{errors.email.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-1">Your Mobile Number</label>
        <input type="text" {...register("number")} className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-950" />
        {errors.number && <p className="text-red-700">{errors.number.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-1">Your message</label>
        <textarea {...register("message")} className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-950" />
      </div>

      <button type="submit" className="text-black py-2 px-4 rounded hover:border-blue-900 focus:outline-none font-semibold items-center">Submit</button>
    </form>
 );
}

