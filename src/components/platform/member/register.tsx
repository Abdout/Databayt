import React, { useEffect, useState } from 'react';
import * as z from "zod";
import { Icon } from '@iconify/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from "@/components/ui/checkbox";
import Link from 'next/link';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../../ui/input-otp';
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp';
import { RadioGroup, RadioGroupItem } from '../../ui/radio-group';
import { Label } from '../../ui/label';
import Rank from '../../atom/popover';
import { rank, ranks } from './rank';
import { Progress } from '../../ui/progress';
import SelectPopover from '../../atom/popover';
import { skill, skills } from './skill';
import { interest, interests } from './interest';
import ImageUpload from '@/components/upload/image';
import { UploadProvider, useUpload } from '@/components/upload/context';
import { MemberProvider, useMember } from './context';
import Member from './model';
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

const countries = [
    { name: 'السودان', cities: ['الخرطوم', 'أم درمان', 'بحري'] },
    { name: 'السعودية', cities: ['الرياض', 'جدة', 'الدمام'] },
    { name: 'قطر', cities: ['الدوحة', 'الخور', 'الريان'] },
    { name: 'الإمارات ', cities: ['أبوظبي', 'دبي', 'الشارقة'] }
];

const Registration: React.FC = () => {
    const { refreshMembers } = useMember();
    const [step, setStep] = useState(1);
    const { image } = useUpload();
    console.log('Image URL from context:', image);
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

    useEffect(() => {
        if (image !== null) {
            form.setValue('image', image);
        }
    }, [image, form]);

    const nextStep = () => {
        setStep(prevStep => (prevStep < 4 ? prevStep + 1 : 4));
    };

    const prevStep = () => {
        setStep(prevStep => (prevStep > 1 ? prevStep - 1 : 1));
    };

    const router = useRouter();

    const handleSubmit = async (data: MemberFormData) => {
        console.log('Form submitted', data);
      
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

    const handleCheck = (event: React.MouseEvent<HTMLButtonElement>) => {
        const checked = form.watch("terms");
        if (checked) {
            prevStep();
        }
    };

    const [selectedRank, setSelectedRank] = useState<rank | null>(null);
    const [selectedInterests, setSelectedInterests] = useState<interest | null>(null);
    const [selectedSkills, setSelectedSkills] = useState<skill | null>(null);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [cities, setCities] = useState<string[]>([]);

    const handleCountryChange = (event: any) => {
        const selectedCountryName = event.target.value;
        const selectedCountryObj = countries.find(country => country.name === selectedCountryName);
        setSelectedCountry(selectedCountryName);
        setCities(selectedCountryObj ? selectedCountryObj.cities : []);
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

                            {step === 1 && (
                                <div className="text-right">
                                    <p>
                                        لا تستثني الحركة احداَ من عامة السودانين الصالحين في ان تتقدم لهم بدعوتها، وهي كذلك تحرص على أن ينتمي لقياداتها وصفها من عرف عنه نظافة اليد، وصالح المسعى، ومن يتقي معوج المسلك وفاسد العمل.
                                    </p>
                                    <div className="flex items-center gap-2 pt-8">
                                        <Checkbox
                                            id="terms"
                                            {...form.register("terms")}
                                            onClick={handleCheck}
                                        />
                                        <label
                                            htmlFor="terms"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            اقرأ <Link href="#" className='text-blue-800'>ارشادات</Link> و <Link href="#" className='text-blue-800'>اوراق</Link> الحركة قبل البدء
                                        </label>
                                    </div>
                                </div>
                            )}

                            {step === 2 && (
                                <>
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input
                                                        className='w-80'
                                                        placeholder="الاسم الكامل" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="gender"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <RadioGroup {...field} value={form.watch("gender")} onValueChange={field.onChange}>
                                                        <div className="flex items-center justify-end space-x-6">
                                                            <div className="flex items-center space-x-2">
                                                                <Label htmlFor="r2">أنثى</Label>
                                                                <RadioGroupItem value="أنثى" id="r2" />
                                                            </div>
                                                            <div className="flex items-center space-x-2">
                                                                <Label htmlFor="r1">ذكر</Label>
                                                                <RadioGroupItem value="ذكر" id="r1" />
                                                            </div>
                                                        </div>
                                                    </RadioGroup>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
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

                                    <FormField
                                        control={form.control}
                                        name="address"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <select value={selectedCountry} onChange={handleCountryChange}>
                                                        <option value=""> البلد</option>
                                                        {countries.map((country, index) => (
                                                            <option key={index} value={country.name}>{country.name}</option>
                                                        ))}
                                                    </select>
                                                </FormControl>
                                                <FormControl className='pr-10'>
                                                    <select {...field}>
                                                        <option value=""> المدينة</option>
                                                        {cities.map((city, index) => (
                                                            <option key={index} value={city}>{city}</option>
                                                        ))}
                                                    </select>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </>
                            )}

                            {step === 3 && (
                                <>
                                    <FormField
                                        control={form.control}
                                        name="rank"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <SelectPopover
                                                        {...field}
                                                        items={ranks}
                                                        selectedItem={selectedRank}
                                                        setSelectedItem={(item) => {
                                                            setSelectedRank(item);
                                                            field.onChange(item?.label); // Update form state with the selected rank name
                                                        }}
                                                        label="التخصص"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="skill"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <SelectPopover {...field}
                                                        items={skills}
                                                        selectedItem={selectedSkills}
                                                        setSelectedItem={(item) => {
                                                            setSelectedSkills(item);
                                                            field.onChange(item?.label); // Update form state with the selected rank name
                                                        }}
                                                        label="مهارة"
                                                    />
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
                                                <FormControl>
                                                    <SelectPopover {...field}
                                                        items={interests}
                                                        selectedItem={selectedInterests}
                                                        setSelectedItem={(item) => {
                                                            setSelectedInterests(item);
                                                            field.onChange(item?.label); // Update form state with the selected rank name
                                                        }}
                                                        label="اهتمام"
                                                    />
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
                                        name="contact.phone"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input
                                                        className='w-80'
                                                        placeholder="رقم الهاتف" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="contact.facebook"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input
                                                        className='w-80'
                                                        placeholder="فيسبوك" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
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
