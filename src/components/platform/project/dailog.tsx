'use client';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { Icon } from "@iconify/react";
import CreateProject from "./create";

export function ProjectDialog() {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
            <Button 
                    size='icon'
                    className="fixed bottom-8 right-8 rounded-full bg-black reveal-less shadow-lg w-14 h-14"
                >
                    <Icon icon="ic:sharp-plus" width={40} />   
                </Button>
            </DialogTrigger>
            <DialogContent>
                <CreateProject onClose={handleClose} />
            </DialogContent>
        </Dialog>
    );
}