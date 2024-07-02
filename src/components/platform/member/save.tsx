import React, { useEffect, useState } from 'react';
import * as z from "zod";
import { Icon } from '@iconify/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Progress } from '../../ui/progress';
import ImageUpload from '@/components/upload/image';
import { UploadProvider, useUpload } from '@/components/upload/context';
import { MemberProvider, useMember } from './context';
import { useRouter } from 'next/navigation';

interface MemberFormData {
    terms: boolean;
    name: string;
    dob: string;
    address: string;
    gender: string;
    rank: string;
    interest: string;
    skill: string;
    club: string;
    image: string;
    contact: {
        phone: string;
        facebook: string;
        whatsapp: string;
    };
}

const formSchema = z.object({
    terms: z.boolean(),
    name: z.string(),
    dob: z.string().length(4, "Year of birth must be exactly 4 digits"),
    address: z.string(),
    gender: z.string(),
    rank: z.string(),
    interest: z.string(),
    skill: z.string(),
    club: z.string(),
    image: z.string(),
    contact: z.object({
        phone: z.string(),
        facebook: z.string(),
        whatsapp: z.string(),
    }),
});

const Registration: React.FC = () => {
    const { refreshMembers } = useMember();
    const [step, setStep] = useState(1);
   
    
    const form = useForm<MemberFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            terms: false,
            name: '',
            dob: '',
            address: '',
            gender: '',
            rank: '',
            interest: '',
            skill: '',
            club: '',
            image: '',
            contact: {
                phone: '',
                facebook: '',
                whatsapp: '',
            },
        },
    });

    const nextStep = () => {
        setStep(prevStep => (prevStep < 4 ? prevStep + 1 : 4));
    };

    const prevStep = () => {
        setStep(prevStep => (prevStep > 1 ? prevStep - 1 : 1));
    };

    const router = useRouter();
    const { image } = useUpload();

    const handleSubmit = async (data: MemberFormData) => {
        console.log('Form submitted', data);
      
        // Get the image from the useUpload context
       
    
        const requestBody = JSON.stringify({
          ...data, 
          image: image,
        });
        console.log('Request body:', requestBody);
      
        const response = await fetch('/api/member', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: requestBody,
        });
      
        console.log('Response:', response);
      
        if (!response.ok) {
          console.error('Error response from server:', await response.json());
        } else {
          form.reset();
          refreshMembers();
          router.push('/home');
        }
    };

    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const calculatedProgress = (step / 4) * 100;
        setProgress(calculatedProgress);
    }, [step]);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    return (
        <MemberProvider>
            <UploadProvider>
                <div className="flex flex-col items-center justify-center h-screen -mt-2 registration-page">
                    <div className='felx pl-[35rem] pb-4 flex-col items-start justify-start gap-2'>
                        <h1>حبابك عشرة</h1>
                        <p className='text-xl font-light'>سيكون لنا متسع من الموت للنوم</p>
                    </div>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(handleSubmit)}
                            className="w-full max-w-md flex flex-col justify-center items-start gap-6 -mt-28 relative h-full"
                        >
                            <Button
                                type='button'
                                size="icon"
                                variant='outline'
                                className={`absolute top-1/2 left-[-10rem] transform -translate-y-1/2 rounded-full ${step === 1 ? 'opacity-50 pointer-events-none' : ''}`}
                                onClick={prevStep}
                            >
                                <Icon icon="ic:sharp-arrow-back" width={25} />
                            </Button>
                            <Button
                                type='button'
                                size="icon"
                                variant='outline'
                                className={`absolute top-1/2 right-[-10rem] transform -translate-y-1/2 rounded-full ${step === 4 ? 'opacity-50 pointer-events-none' : ''}`}
                                onClick={nextStep}
                            >
                                <Icon icon="ic:sharp-arrow-forward" width={25} />
                            </Button>
                            {step === 2 && (
                                <>
                                    <FormField
                                        control={form.control}
                                        name="dob"
                                        render={({ field }) => (
                                            <FormItem className='flex gap-4 items-center'>
                                                <div className='flex flex-col gap-2'>
                                                    <FormLabel>سنة</FormLabel>
                                                    <FormLabel>الميلاد</FormLabel>
                                                </div>
                                                <FormControl>
                                                    <Input
                                                        className='w-20'
                                                        placeholder="1990" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </>
                            )}
                            {step === 4 && (
                                <>
                                    <FormField
                                        control={form.control}
                                        name="contact.whatsapp"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input
                                                        className='w-80'
                                                        placeholder="واتساب" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <ImageUpload />
                                </>
                            )}

                            <Button
                                type="submit"
                                className="font-medium text-lg absolute bottom-[44px] left-1/2 transform -translate-x-1/2 text-green-700 bg-transparent hover:bg-transparent z-50 px-28">
                                طلب العضوية
                            </Button>
                            <Progress value={progress} className="absolute bottom-10 left-1/2 transform -translate-x-1/2 h-12 w-80"
                            />
                        </form>
                    </Form>
                </div>
            </UploadProvider>
        </MemberProvider>
    );
};

export default Registration;
