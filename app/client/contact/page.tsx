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

function FormContact() {
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
      {/* Form fields and submit button remain unchanged */}
    </form>
 );
}

export default FormContact;
