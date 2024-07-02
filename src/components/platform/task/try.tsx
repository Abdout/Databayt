'use client';
import * as React from "react";
import * as z from "zod";
import { useForm } from 'react-hook-form';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../ui/carousel"; // Adjust the import path accordingly
import { Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField } from "../../ui/form"; // Adjust the import path accordingly
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../ui/input";

interface FormData {
    title: string;
    desc: string;
    body: string;
    image: string;
    author: string;
    // Add other fields as needed
}

const formSchema = z.object({
    title: z.string(),
    desc: z.string(),
    body: z.string(),
    image: z.string(),
    author: z.string(),
    // Add other fields as needed
});


const MultiSlideForm = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            desc: "",
            body: "",
            image: "",
            author: "",
            // Add other fields as needed
        },
    });




    const handleSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <div dir="ltr" >
            <div dir="rtl">
            <h1>حبابك عشرة</h1>
            <p className="text-lg pb-10">سيكون لنا مستع من الموت للنوم</p>

            </div>
            <div className="items-center justify-center px-[4rem]">
            <Carousel loop={false} >
                <CarouselContent>
                    <CarouselItem className="items-center justify-center">
                        <Form {...form} >
                            <form 
                            dir="rtl"
                            onSubmit={form.handleSubmit(handleSubmit)}
                            className="flex flex-col gap-4 px-20 p-4 "
                            >
                                <FormField
                                    control={form.control}
                                    name="title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input placeholder="الاسم الكامل" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                 
                                {/* Add more form fields within CarouselItem */}
                            </form>
                        </Form>
                    </CarouselItem>
                    <CarouselItem>
                        <Form {...form}>
                            <form 
                            dir="rtl"
                            onSubmit={form.handleSubmit(handleSubmit)}
                            className="flex flex-col gap-4 px-20 p-4"
                            >
                                
                                <FormField
                                    control={form.control}
                                    name="title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input placeholder="الاسم الكامل" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                 <FormField
                                    control={form.control}
                                    name="title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input placeholder="الاسم الكامل" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                 <FormField
                                    control={form.control}
                                    name="title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input placeholder="الاسم الكامل" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                 <FormField
                                    control={form.control}
                                    name="title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input placeholder="الاسم الكامل" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                {/* Add more form fields within CarouselItem */}
                            </form>
                        </Form>
                    </CarouselItem>
                    </CarouselContent>
                    
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            </div>

        </div>
    );
};

export default MultiSlideForm;
