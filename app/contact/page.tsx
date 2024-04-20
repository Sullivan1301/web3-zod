"use client"
import React from 'react';
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
      name: "",
      email: "",
      number: "",
      message: "",
    },
 });
  
 // Adjust the type of the onSubmit function's parameter to match the form's data structure
 const onSubmit: SubmitHandler<{ name: string; email: string; number: string; message: string; }> = (data) => {
    console.log(data);
 };

 return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-8 items-center justify-center p-12">
      <div className='mb-4 w-full mx-auto  max-w-[600px]'>
      <div className="mb-4 mx-auto w-full max-w-[550px]">
        <label className="block mb-1">Name</label>
        <input {...register("name")} className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-950" />
        {errors.name && <p className="text-red-700">{errors.name.message}</p>}
      </div>

      <div className="mb-4 mx-auto w-full max-w-[550px]">
        <label className="block mb-1">Email</label>
        <input {...register("email")} className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-950" />
        {errors.email && <p className="text-red-700">{errors.email.message}</p>}
      </div>

      <div className="mb-4 mx-auto w-full max-w-[550px]">
        <label className="block mb-1">Your Mobile Number</label>
        <input type="text" {...register("number")} className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-950" />
        {errors.number && <p className="text-red-700">{errors.number.message}</p>}
      </div>

      <div className="mb-4 mx-auto w-full max-w-[550px]">
        <label className="block mb-1">Your message</label>
        <textarea {...register("message")} className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-950" />
      </div>

      <button type="submit" className="mx-[250px] hover:bg-blue-700 rounded-md bg-blue-900 py-3 px-8 text-base font-semibold text-white outline-none">Submit</button>
      </div>
    </form>
 );
}

