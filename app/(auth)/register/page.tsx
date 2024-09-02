"use client"
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import Link from 'next/link'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'




const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }).email({
    message: "Email must be a valid email address.",
  }),
  birthDate: z.string().refine(date => {
    const birthDate = new Date(date)
    const age = new Date().getFullYear() - birthDate.getFullYear()
    return age >= 18
  }, {
    message: "You must be at least 18 years old."
  }),
  startDate: z.string().refine(date => {
    const startDate = new Date(date)
    return startDate >= new Date()

  }, {
    message: "Start date must be a valid date and must be today or later."
  }),
  gender: z.enum(["Male", "Female"], {
    required_error: "Please select a gender"
  }),
  jobType: z.array(z.enum(["Remote", "Hybrid", "Office"]))
    .min(1, {
      message: "You must select at least one job type.",
    })

})
const RegisterPage = () => {

  //giriş değerleri
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      email: "",
      birthDate: "",
      startDate: "",
      gender: undefined,
      jobType: [],
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-4/5">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='validateLabel'>Email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
              </FormControl>
              <FormMessage className='validateError' />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='validateLabel'>Username</FormLabel>
              <FormControl>
                <Input placeholder="username" {...field} />
              </FormControl>
              <FormMessage className='validateError' />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='validateLabel'>Password</FormLabel>
              <FormControl>
                <Input type='password' placeholder="password" {...field} />
              </FormControl>
              <FormMessage className='validateError' />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="birthDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='validateLabel'>Birth of Date</FormLabel>
              <FormControl>
                <Input type='date' className='w-36' placeholder="birthDate" {...field} />
              </FormControl>
              <FormMessage className='validateError' />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="startDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='validateLabel'>Start Date</FormLabel>
              <FormControl>
                <Input type='date' className='w-36' placeholder="startDate" {...field} />
              </FormControl>
              <FormMessage className='validateError' />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='validateLabel'>gender</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  {...field}
                  className="flex flex-row space-x-2"
                >
                  <RadioGroupItem value="Male" id="gender-male" />
                  <Label htmlFor="gender-male">Male</Label>
                  <RadioGroupItem value="Female" id="gender-female" />
                  <Label htmlFor="gender-female">Female</Label>
                </RadioGroup>
              </FormControl>
              <FormMessage className='validateError' />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="jobType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='validateLabel'>Job Type</FormLabel>
              <FormControl>
                <div className="space-x-2">
                  <Checkbox
                    checked={field.value.includes("Remote")}
                    onCheckedChange={(checked) => {
                      const newValue = checked
                        ? [...field.value, "Remote"]
                        : field.value.filter((value: string) => value !== "Remote")
                      field.onChange(newValue)
                    }}
                  />
                  <Label>Remote</Label>
                  <Checkbox
                    checked={field.value.includes("Hybrid")}
                    onCheckedChange={(checked) => {
                      const newValue = checked
                        ? [...field.value, "Hybrid"]
                        : field.value.filter((value: string) => value !== "Hybrid")
                      field.onChange(newValue)
                    }}
                  />
                  <Label>Hybrid</Label>
                  <Checkbox
                    checked={field.value.includes("Office")}
                    onCheckedChange={(checked) => {
                      const newValue = checked
                        ? [...field.value, "Office"]
                        : field.value.filter((value: string) => value !== "Office")
                      field.onChange(newValue)
                    }}
                  />
                  <Label>Office</Label>
                </div>


              </FormControl>
              <FormMessage className='validateError' />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
      <div className='mt-5'>
        <span className='mr-5'>Do you have an account?</span>
        <Link href="/login">Login</Link>
      </div>
    </Form>
  )
}

export default RegisterPage