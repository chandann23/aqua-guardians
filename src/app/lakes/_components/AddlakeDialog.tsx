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
import { Plus } from "lucide-react"
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

export function AddLakeDialog() {
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      ph: 0,
      temperature: 0,
      tds: 0,
      turbidity: 0,
      location: ""
    },
  })

  const { mutate: onSubmit, data: response } = useMutation({
    mutationFn: async (values: z.infer<typeof formSchema>) => {
      return await axios.post("/api/lakes", values)
    },
    onSuccess: (response) => {
      console.log(response)
      router.refresh()
      form.reset() // Reset the form here
    }
  })

  const handleSubmit = form.handleSubmit((data) => {
    onSubmit(data)
  })

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Plus className="h-4 w-4 text-black" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add New Lake</DialogTitle>
          <DialogDescription>
            Enter the details of the new lake here. Click save when you&apos;re done.
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
          </form>
        </Form>
        <DialogFooter className="flex justify-between items-center">
          <DialogClose asChild>
            <Button type="button" variant="default">
              Close
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="submit"  onClick={handleSubmit} variant="default">
              Save
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
