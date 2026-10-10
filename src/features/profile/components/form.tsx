"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { ArrowUpRight, Loader2, Mail } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

import { Panel, PanelHeader, PanelTitle } from "./panel";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: data.name,
          from_name_initial: data.name.charAt(0).toUpperCase(),
          from_email: data.email,
          message: data.message,
          current_date: new Date().toLocaleString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      toast.success("Message sent!", {
        description: "Thank you for your message. I'll get back to you soon.",
      });

      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Error", {
        description: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Panel id="contact">
      <PanelHeader>
        <PanelTitle>Contact</PanelTitle>
      </PanelHeader>

      <div className="grid grid-cols-[2rem_1fr]">
        <div className="flex items-center justify-center border-r border-dashed border-edge bg-muted/20">
          <span className="rotate-270 py-8 font-mono text-[10px] tracking-widest whitespace-nowrap text-muted-foreground select-none">
            START A CONVERSATION
          </span>
        </div>

        <div className="min-w-0">
          <div className="flex items-start gap-3 border-b border-edge p-4 sm:p-6">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-dashed border-edge bg-muted/30 text-muted-foreground">
              <Mail className="size-4" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-medium">Have something in mind?</h3>
              <p className="mt-1 max-w-md text-sm leading-relaxed text-muted-foreground">
                A project to build, a problem to solve, or an idea worth
                exploring. Send me a note.
              </p>
            </div>
          </div>
          <div className="p-4 sm:p-6">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-xs text-muted-foreground">
                          Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your name"
                            autoComplete="name"
                            className="h-11 rounded-lg border-edge bg-muted/20 transition-colors focus-visible:bg-background"
                            disabled={isSubmitting}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-xs text-muted-foreground">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your.email@example.com"
                            autoComplete="email"
                            className="h-11 rounded-lg border-edge bg-muted/20 transition-colors focus-visible:bg-background"
                            disabled={isSubmitting}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-xs text-muted-foreground">
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell me a little about what you're working on…"
                          className="min-h-[160px] resize-y rounded-lg border-edge bg-muted/20 p-3 leading-relaxed transition-colors focus-visible:bg-background"
                          disabled={isSubmitting}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex flex-col gap-4 border-t border-dashed border-edge pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="font-mono text-xs text-muted-foreground">
                    Let’s make something useful.
                  </p>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-11 w-full gap-2 rounded-lg px-5 sm:w-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowUpRight className="size-4" aria-hidden="true" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </Panel>
  );
}
