import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Editor from '@/components/editor/ui';
import ImageUpload from '@/components/upload/image';
import { useTask } from "./context";
import { useEffect, useState } from "react";
import { useUpload } from "@/components/upload/context";
import { Icon } from "@iconify/react";
import { author, authors } from "@/components/root/article/constant";
import SelectPopover from "@/components/atom/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { rank, ranks } from "./rank";
import { interest, interests } from "./interest";
import { skill, skills } from "./skill";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";

interface FormData {
    terms: boolean;
    title: string;
    club: string;
    skill: string[];
    team: string[];
    status: string;
    priority: string;
    duration: number;
    remark: string;
}

const formSchema = z.object({
    terms: z.boolean(),
    title: z.string(),
    club: z.string(),
    skill: z.array(z.string()),
    team: z.array(z.string()),
    status: z.string(),
    priority: z.string(),
    duration: z.number(),
    remark: z.string(),
});

interface CreateProps {
    onClose: () => void;
  }
  
  const CreateTask: React.FC<CreateProps> = ({ onClose }) => {
    const { refreshTasks } = useTask(); // Assuming you have a useTask hook
    const { image } = useUpload();
    const [step, setStep] = useState(1);
    const nextStep = () => {
        setStep(prevStep => (prevStep < 4 ? prevStep + 1 : 4));
    };

    const prevStep = () => {
        setStep(prevStep => (prevStep > 1 ? prevStep - 1 : 1));
    };

    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const calculatedProgress = (step / 4) * 100;
        setProgress(calculatedProgress);
    }, [step]);

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            terms: false,
            title: '',
            club: '',
            skill: [],
            team: [],
            status: '',
            priority: '',
            duration: 0,
            remark: '',
        },
    });

    

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    const router = useRouter();

    const handleSubmit = async (data: FormData) => {
        console.log("Form submitted", data);
    
        const response = await fetch('/api/task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...data }),
        });
        console.log(response);
    
        if (response.ok) {
            form.reset();
            refreshTasks(); // Assuming you have a refreshTasks function
            onClose();
            
        }
    };

    const [selectedAuthor, setSelectedAuthor] = useState<author | null>(null);

    return (
        <div className="flex flex-col items-center justify-center h-screen registration-page">
            <div className='felx pl-[35rem] pb-4 flex-col items-start justify-start gap-2 mt-4'>
                <h1>مهمة جديدة</h1>
                <p className='text-xl font-light'>لا يتحرك المرء نحو واجهة, انما يتحرك ليصنع واحدة</p>
            </div>
            <Form  {...form}>
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
                                name="title"
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
                                name="club"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <SelectPopover
                                                {...field}
                                                items={authors}
                                                selectedItem={selectedAuthor}
                                                setSelectedItem={(item) => {
                                                    setSelectedAuthor(item);
                                                    field.onChange(item?.label); // Update form state with the selected author name
                                                }}
                                                label="النادي"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="team"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <SelectPopover
                                                {...field}
                                                items={authors}
                                                selectedItem={selectedAuthor}
                                                setSelectedItem={(item) => {
                                                    setSelectedAuthor(item);
                                                    field.onChange(item?.label); // Update form state with the selected author name
                                                }}
                                                label="الفريق"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="status"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <SelectPopover
                                                {...field}
                                                items={authors}
                                                selectedItem={selectedAuthor}
                                                setSelectedItem={(item) => {
                                                    setSelectedAuthor(item);
                                                    field.onChange(item?.label); // Update form state with the selected author name
                                                }}
                                                label="الحالة"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="priority"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <SelectPopover
                                                {...field}
                                                items={authors}
                                                selectedItem={selectedAuthor}
                                                setSelectedItem={(item) => {
                                                    setSelectedAuthor(item);
                                                    field.onChange(item?.label); // Update form state with the selected author name
                                                }}
                                                label="الأولوية"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="duration"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                className='w-80'
                                                placeholder="المدة" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="remark"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                className='w-80'
                                                placeholder="ملاحظات" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />


                        </>
                    )}
                    {step === 3 && (
                        <>
                            
                        </>
                    )}
                    {step === 4 && (
                        <>

                           
                        </>
                    )}
                    <Button
                        type="submit"
                        className="font-medium text-lg absolute bottom-[44px] left-1/2 transform -translate-x-1/2 text-green-700 bg-transparent hover:bg-transparent z-50 px-28">
                        انشاء مهمة
                    </Button>
                    <Progress value={progress} className="absolute bottom-10 left-1/2 transform -translate-x-1/2 h-12 w-80"
                    />

                </form>
            </Form>
        </div>
    );
};

export default CreateTask;
