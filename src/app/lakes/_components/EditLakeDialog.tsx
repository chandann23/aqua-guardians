"use client"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog"
import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form"
import { Edit } from "lucide-react"
import axios from "axios"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  ph: z.number().min(0).max(14).step(0.1),
  temperature: z.number().step(0.1),
  tds: z.number().positive().step(0.1),
  turbidity: z.number().nonnegative().step(0.1),
  location: z.string().min(1, "Location is required")
})

type Lake = z.infer<typeof formSchema> & { id: number }

interface EditLakeDialogProps {
  lake: Lake
}

export function EditLakeDialog({ lake }: EditLakeDialogProps) {
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: lake.name,
      ph: lake.ph,
      temperature: lake.temperature,
      tds: lake.tds,
      turbidity: lake.turbidity,
      location: lake.location
    },
  })

  const { mutate: onSubmit } = useMutation({
    mutationFn: async (values: z.infer<typeof formSchema>) => {
      console.log("Sending PUT request to:", `/api/lakes/${lake.id}`);
      console.log("With data:", values);
      return await axios.put(`/api/lakes/${lake.id}`, values);
    },
    onSuccess: (response) => {
      console.log("Lake updated successfully:", response.data);
      router.refresh();
    },
    onError: (error: any) => {
      console.error("Error updating lake:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
      }
    }
  });

  const handleSubmit = form.handleSubmit((data) => {
    console.log("Form submitted with data:", data);
    onSubmit(data);
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Edit className="h-4 w-4 text-black" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit Lake</DialogTitle>
          <DialogDescription>
            Edit the details of the lake here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={handleSubmit} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ph"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>PH</FormLabel>
                  <FormControl>
                    <Input type="number" step="0.1" {...field} onChange={(e) => field.onChange(parseFloat(e.target.value))} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="temperature"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Temperature</FormLabel>
                  <FormControl>
                    <Input type="number" step="0.1" {...field} onChange={(e) => field.onChange(parseFloat(e.target.value))} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tds"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>TDS</FormLabel>
                  <FormControl>
                    <Input type="number" step="0.1" {...field} onChange={(e) => field.onChange(parseFloat(e.target.value))} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="turbidity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Turbidity</FormLabel>
                  <FormControl>
                    <Input type="number" step="0.1" {...field} onChange={(e) => field.onChange(parseFloat(e.target.value))} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter className="flex justify-between items-center">
              <DialogClose asChild>
                <Button type="button" variant="default">
                  Close
                </Button>
              </DialogClose>
              <Button type="submit" variant="default">
                Save
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
