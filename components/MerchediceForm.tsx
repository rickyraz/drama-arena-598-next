"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";

// Phone and Username Schema
const formSchema = z.object({
  phone: z
    .string()
    .min(10)
    .max(13)
    .refine((value) => /^08[1-9][0-9]{7,10}$/s.test(value), {
      message: "Nomor telepon tidak valid",
    }),
  username: z.string().min(2).max(25),
});

/* VERIFIKASI NO TELP --------------------

// menghilangkan +62
function normalisasiNomorHP(phone: string) {
  phone = String(phone).trim();
  if (phone.startsWith("+62")) {
    phone = "0" + phone.slice(3);
  } else if (phone.startsWith("62")) {
    phone = "0" + phone.slice(2);
  }
  return phone.replace(/[- .]/g, "");
}

// Deteksi panjang dan pola nomor yang digunakan : normal 10-13
function tesNomorHP(phone: string) {
  if (!phone || !/^08[1-9][0-9]{7,10}$/.test(phone)) {
    return false;
  }
  return true;
}

// Deteksi Operator
function detectMobileOperator(phone: string): string | null {
  const prefix = phone.slice(0, 4);
  if (["0831", "0832", "0833", "0838"].includes(prefix)) return "axis";
  if (["0895", "0896", "0897", "0898", "0899"].includes(prefix)) return "three";
  if (["0817", "0818", "0819", "0859", "0878", "0877"].includes(prefix))
    return "xl";
  if (["0814", "0815", "0816", "0855", "0856", "0857", "0858"].includes(prefix))
    return "indosat";
  if (
    [
      "0812",
      "0813",
      "0852",
      "0853",
      "0821",
      "0823",
      "0822",
      "0851",
      "0811",
    ].includes(prefix)
  )
    return "telkomsel";
  if (
    [
      "0881",
      "0882",
      "0883",
      "0884",
      "0885",
      "0886",
      "0887",
      "0888",
      "0889",
    ].includes(prefix)
  )
    return "smartfren";
  return null;
}

*/

export function MerchediceForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#041F14]">Nama</FormLabel>
              <FormControl>
                <Input
                  placeholder="Masukkan nama"
                  className="h-12"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field, formState }) => (
            <FormItem>
              <FormLabel className="text-[#041F14]">
                Nomor Telepon(Whatsapp)
              </FormLabel>
              <FormControl>
                <Input
                  type="tel"
                  placeholder="Masukkan nomormu"
                  className="h-12"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                isi dengan nomor yang akan kami hubungi
              </FormDescription>
              {formState.errors.phone && (
                <FormMessage>{formState.errors.phone.message}</FormMessage>
              )}
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="h-16 w-full bg-[#0FA383] hover:bg-[#0b8066]"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
