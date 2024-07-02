'use client';
import React, { useState, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Icon } from "@iconify/react";

interface ReusableDialogProps {
    triggerText: string;
    triggerIcon: string;
    children: ReactNode;
}

export function ReusableDialog({ triggerText, triggerIcon, children }: ReusableDialogProps) {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    className="flex items-center gap-2 font-medium text-lg"
                >
                    <Icon icon={triggerIcon} width={20} />
                    {triggerText}
                </Button>
            </DialogTrigger>
            <DialogContent>
                {React.cloneElement(children as React.ReactElement<any>, { onClose: handleClose })}
            </DialogContent>
        </Dialog>
    );
}
