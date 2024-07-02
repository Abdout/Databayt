import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Editor from '@/components/editor/ui';
import ImageUpload from '@/components/upload/image';
import { useProject } from "./context";
import { useState } from "react";
import { useUpload } from "@/components/upload/context";
import { Icon } from "@iconify/react";
import SelectPopover from "@/components/atom/popover";
import { lead, leads, statuses } from "./constant";

interface FormData {
  title: string;
  desc: string;
  lead: string;
  status: string;
  // Add other fields as needed
}

const formSchema = z.object({
  title: z.string(),
  desc: z.string(),
  lead: z.string(),
  status: z.string(),
  // Add other fields as needed
});

interface CreateProps {
  onClose: () => void;
}

const CreateProject: React.FC<CreateProps> = ({ onClose }) => {
  const { refreshProjects } = useProject();
  const { image } = useUpload();
  const [step, setStep] = useState(1);
  const [selectedLead, setSelectedLead] = useState<lead | null>(null);
  const [stauts, setStauts] = useState<lead | null>(null);

  const nextStep = () => { setStep(prevStep => prevStep < 2 ? prevStep + 1 : 2) };
  const prevStep = () => { setStep(prevStep => prevStep > 1 ? prevStep - 1 : 1) };

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      desc: "",
      lead: "",
      status: "",
      // Add other fields as needed
    },
  });

  const handleSubmit = async (data: FormData) => {
    console.log("Form submitted", data);

    const response = await fetch('/api/project', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...data, }),
    });
    console.log(response);

    if (response.ok) {
      form.reset();
      refreshProjects();
      onClose();
    }
  };

  return (
    <div className="flex items-top h-screen w-5/6">
      <Form  {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className={`${step === 1 ? 'w-screen px-72 pt-20' : 'w-screen px-32 pt-10 items-top justify-center '}`}
        >
          {step === 1 && (
            <div className="flex flex-col gap-6">
              {/* <Button size='icon' className="absolute top-4 right-[4.5rem]" onClick={nextStep}>
                <Icon icon='ic:sharp-arrow-back' width={25} />
              </Button> */}
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="الاسم" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="desc"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input className="h-14" placeholder="الوصف" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <SelectPopover
                items={leads}
                selectedItem={selectedLead}
                setSelectedItem={setSelectedLead}
                label="+ الامانة"
              />
              <SelectPopover
                items={statuses}
                selectedItem={stauts}
                setSelectedItem={setStauts}
                label="+ الحالة"
              />
              
              <Button
                type="submit"
                className="mt-6 h-12 font-medium text-lg">
                انشاء مشروع
              </Button>
            </div>
          )}
          {/* {step === 2 && (
            <div>
              <Button size='icon' className="absolute top-4 right-[4.5rem]" onClick={prevStep}>
                <Icon icon='ic:sharp-arrow-forward' width={25} />
              </Button>
              <FormField
                control={form.control}
                name="body"
                render={({ field }) => (
                  <Editor value={field.value} onChange={(value) => field.onChange(value)} />
                )}
              />
              <Button
                type="submit"
                className="mt-6 font-medium text-lg">
                نشر المشروع
              </Button>
            </div>
          )} */}
        </form>
      </Form>
    </div>
  );
};

export default CreateProject;