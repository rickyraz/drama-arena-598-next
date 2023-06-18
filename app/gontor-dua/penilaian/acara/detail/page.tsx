"use client";
import { Button, ButtonProps } from "@/components/ui/button";
import { ChevronRight, Edit3 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Balancer } from "react-wrap-balancer";

function Detail() {
  return (
    <div className="min-h-screen bg-[#041F14]">
      <Details />
      <Voting />
      <TabsComponent />
    </div>
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
        asdasd
      </div>
      <p className="pt-3 text-sm text-white">
        <Balancer>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam neque
          minima sit veniam voluptates placeat voluptate, provident,
        </Balancer>
      </p>
    </div>
  );
}

function Voting() {
  return (
    <div className="px-6 pt-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image src="/star.svg" alt="star" width={30} height={30} />
          <Select>
            <SelectTrigger className="ml-2 h-9 w-[100px] bg-[#CDFFEA] text-center text-lg font-medium text-[#1BA88A]">
              <SelectValue placeholder="1-10" />
            </SelectTrigger>
            <SelectContent className="w-[100px] text-center">
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
            <p className="text-[#86E7BE]">Beri Catatan</p>
          </div>
        </PopUpText>
      </div>
      <Button className=" mt-3 h-[60px] w-full bg-[#F9C97B] text-[#041F14] hover:bg-[#e8b35e]">
        Kirim
      </Button>
    </div>
  );
}

type PopUp = {
  children: any;
};

function PopUpText({ children }: PopUp) {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        {/* text area */}
        {/* simpan */}
        <p>simpannnnnnnnnnnnnnn</p>
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
          Penanggung Jawab
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
