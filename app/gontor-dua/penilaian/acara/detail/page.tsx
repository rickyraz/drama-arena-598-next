"use client";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { ChevronRight, Edit3 } from "lucide-react";
import Index from "@/components/Header/Main";
import Image from "next/image";
import React, { ChangeEvent } from "react";
import { create } from "zustand";

function Detail() {
  return (
    <>
      <Index />
      <section className="min-h-screen bg-[#041F14]">
        <Details />
        <Voting />
        <TabsComponent />
      </section>
    </>
  );
}

export default Detail;

function Details() {
  return (
    <div className="px-6 pt-9">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-[#0FA383]">
          Tari Reog Ponorogo
        </h1>
        <Button variant="ghost" className="hover:bg-white/30">
          <ChevronRight className="stroke-white" />
        </Button>
      </div>
      <div className="mt-3 aspect-[3/2]  w-full rounded-lg bg-[#83B5A0]">
        gambar
      </div>
    </div>
  );
}

interface FormData {
  selectValue: string;
  textareaValue: string;
}

interface FormDataStore {
  formData: FormData;
  isSubmitted: boolean;
  isDisabled: boolean;
  noteStatus: string;
  warning: string;
  // eslint-disable-next-line no-unused-vars
  setFormData: (data: Partial<FormData>) => void;
  // eslint-disable-next-line no-unused-vars
  setIsSubmitted: (value: boolean) => void;
  // eslint-disable-next-line no-unused-vars
  setIsDisabled: (value: boolean) => void;
  // eslint-disable-next-line no-unused-vars
  setNoteStatus: (status: string) => void;
  // eslint-disable-next-line no-unused-vars
  setWarnings: (message: string) => void;
}

const useFormDataStore = create<FormDataStore>((set) => ({
  formData: { selectValue: "", textareaValue: "" },
  isSubmitted: false,
  isDisabled: false,
  noteStatus: "",
  warning: "",
  setFormData: (data: any) =>
    set((state: { formData: any }) => ({
      formData: { ...state.formData, ...data },
    })),
  setIsSubmitted: (value: any) => set({ isSubmitted: value }),
  setIsDisabled: (value: any) => set({ isDisabled: value }),
  setNoteStatus: (status: any) => set({ noteStatus: status }),
  setWarnings: (message: any) => set({ warning: message }),
}));

function Voting() {
  const formDataStore = useFormDataStore();

  // eslint-disable-next-line no-unused-vars
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault(); // Menghentikan aksi default submit form

    const { selectValue, textareaValue } = formDataStore.formData;

    if (selectValue === "") {
      formDataStore.setWarnings("Mohon pilih opsi pada select tag.");
      return;
    }

    console.log("Data yang di-submit: ", selectValue, textareaValue); // Mencetak data ke console
    formDataStore.setIsSubmitted(true);
    formDataStore.setIsDisabled(true);
    formDataStore.setWarnings("");

    if (textareaValue === "") {
      formDataStore.setNoteStatus("Catatan Kosong");
    } else {
      formDataStore.setNoteStatus("Tanda Tercatat");
    }
  };

  const handleSelectChange = (value: string) => {
    formDataStore.setFormData({ selectValue: value });
  };

  return (
    <div className="px-6 pt-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Select
            value={formDataStore.formData.selectValue}
            onValueChange={handleSelectChange}
            disabled={formDataStore.isSubmitted || formDataStore.isDisabled}
          >
            <SelectTrigger className="w-full bg-[#CDFFEA] text-center text-lg font-medium text-[#1BA88A]">
              <Image
                src="/star.svg"
                alt="star"
                width={24}
                height={24}
                className="mr-2"
              />
              <SelectValue placeholder="1-10 " className="px-6 py-2 " />
            </SelectTrigger>
            <SelectContent className="px-6 py-2 ">
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="6">6</SelectItem>
              <SelectItem value="7">7</SelectItem>
              <SelectItem value="8">8</SelectItem>
              <SelectItem value="9">9</SelectItem>
              <SelectItem value="10">10</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <PopUpText>
          <div className="flex rounded-lg border border-[#86E7BE] px-4 py-2">
            <Edit3 className="stroke-[#86E7BE]" />
            <div className="ml-2 text-[#86E7BE]">
              {formDataStore.noteStatus ? (
                <p>{formDataStore.noteStatus}</p>
              ) : (
                <p>Catatan</p>
              )}
            </div>
          </div>
        </PopUpText>
      </div>

      <input
        type="submit"
        value={formDataStore.isSubmitted ? "Sudah Dikirim" : "Kirim"}
        disabled={formDataStore.isSubmitted || formDataStore.isDisabled}
        className=" mt-3 h-[60px] w-full rounded-lg bg-[#F9C97B] text-[#041F14] hover:bg-[#e8b35e]"
      />

      {formDataStore.warning && (
        <p className="mt-2 text-red-500">{formDataStore.warning}</p>
      )}
    </div>
  );
}

type PopUpProps = {
  children: React.ReactNode;
};

function PopUpText({ children }: PopUpProps) {
  const formDataStore = useFormDataStore();

  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    formDataStore.setFormData({ [name]: value });
  };
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <Textarea
          name="textareaValue"
          value={formDataStore.formData.textareaValue}
          onChange={handleTextareaChange}
          placeholder="berikan komentar disini"
          readOnly={formDataStore.isSubmitted || formDataStore.isDisabled}
          onFocus={() => {
            if (!formDataStore.formData.textareaValue) {
              formDataStore.setNoteStatus("Catatan Kosong");
            } else {
              formDataStore.setNoteStatus("Tercatat");
            }
          }}
          onBlur={() => {
            if (!formDataStore.formData.textareaValue) {
              formDataStore.setNoteStatus("Catatan Kosong");
            } else {
              formDataStore.setNoteStatus("Tercatat");
            }
          }}
        />
      </DialogContent>
    </Dialog>
  );
}

function TabsComponent() {
  return (
    <Tabs
      defaultValue="informasi-acara"
      className="min-w-[375px] px-6 pb-9 pt-6 text-white "
    >
      <TabsList className="grid w-full grid-cols-2 rounded-lg">
        <TabsTrigger value="informasi-acara">Informasi Acara</TabsTrigger>
        <TabsTrigger value="penilaian">Penilaian</TabsTrigger>
      </TabsList>
      <TabsContent value="informasi-acara">
        <h3 className="mt-3 text-lg font-semibold text-[#0FA383]">
          Pembimbing Acara
        </h3>
        <p>Al-Ustadz Muhammad Faizar</p>
        <h3 className="mt-3 text-lg font-semibold text-[#0FA383]">
          Penanggung Jawab Acara
        </h3>
        <p>Al-Ustadz Muhammad Faizar</p>
        <h3 className="mt-2 text-lg font-semibold text-[#0FA383]">Penampil</h3>
        <div className="grid grid-cols-2 ">
          <p>Sirya</p>
          <p>Cahyo</p>
          <p>Sirya</p>
          <p>Cahyo</p>
          <p>Sirya</p>
          <p>Cahyo</p>
          <p>Sirya</p>
          <p>Cahyo</p>
          <p>Sirya</p>
          <p>Cahyo</p>
          <p>Sirya</p>
          <p>Cahyo</p>
          <p>Sirya</p>
          <p>Cahyo</p>
        </div>
      </TabsContent>
      <TabsContent value="penilaian">Penilaian</TabsContent>
    </Tabs>
  );
}
