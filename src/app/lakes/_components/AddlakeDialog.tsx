"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { useFormState, useFormStatus } from "react-dom";
import { addLake } from "~/app/actions/addLake";
import { FormState } from "~/app/types";

const initialState: FormState = {
  success: false,
  errors: {},
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Saving..." : "Save changes"}
    </Button>
  );
}

export function AddLakeDialog() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [state, formAction] = useFormState(addLake, initialState);

  useEffect(() => {
    if (state.success) {
      setOpen(false);
      router.refresh();
    }
  }, [state.success, router]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" onClick={() => setOpen(true)}>
          <Plus className="h-4 w-4 text-black" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form action={formAction}>
          <DialogHeader>
            <DialogTitle>Add New Lake</DialogTitle>
            <DialogDescription>
              Enter the details of the new lake here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {state.errors && Object.keys(state.errors).length > 0 && (
              <div className="text-red-500">
                {Object.values(state.errors).map((error, index) => (
                  <p key={index}>{error}</p>
                ))}
              </div>
            )}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" name="name" className="col-span-3" required />
              {state.errors?.name && <div className="col-start-2 col-span-3 text-red-500">{state.errors.name}</div>}
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="ph" className="text-right">
                pH
              </Label>
              <Input id="ph" name="ph" type="number" step="0.1" className="col-span-3" required />
              {state.errors?.ph && <div className="col-start-2 col-span-3 text-red-500">{state.errors.ph}</div>}
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="temperature" className="text-right">
                Temperature
              </Label>
              <Input id="temperature" name="temperature" type="number" step="0.1" className="col-span-3" required />
              {state.errors?.temperature && <div className="col-start-2 col-span-3 text-red-500">{state.errors.temperature}</div>}
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="tds" className="text-right">
                TDS
              </Label>
              <Input id="tds" name="tds" type="number" step="0.1" className="col-span-3" required />
              {state.errors?.tds && <div className="col-start-2 col-span-3 text-red-500">{state.errors.tds}</div>}
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="turbidity" className="text-right">
                Turbidity
              </Label>
              <Input id="turbidity" name="turbidity" type="number" step="0.1" className="col-span-3" required />
              {state.errors?.turbidity && <div className="col-start-2 col-span-3 text-red-500">{state.errors.turbidity}</div>}
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="location" className="text-right">
                Location
              </Label>
              <Input id="location" name="location" className="col-span-3" required />
              {state.errors?.location && <div className="col-start-2 col-span-3 text-red-500">{state.errors.location}</div>}
            </div>
          </div>
          <DialogFooter>
            <SubmitButton />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
