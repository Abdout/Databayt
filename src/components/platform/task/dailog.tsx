'use client';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { Icon } from "@iconify/react";
import Create from "./create";

export function TaskDialog() {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button 
                    size='icon'
                    className="fixed bottom-8 right-8 rounded-full bg-black reveal-less shadow-lg w-14 h-14 dark:bg-gray-200 dark:text-black"
                >
                    <Icon icon="ic:sharp-plus" width={40} />   
                </Button>
            </DialogTrigger>
            <DialogContent>
                <Create onClose={handleClose} />
            </DialogContent>
        </Dialog>
    );
}