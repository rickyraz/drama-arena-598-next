"use client";
import { Button } from "@/components/ui/button";
import { ChevronRight, Edit3 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Detail() {
  return (
    <div className="bg-[#041F14] min-h-screen">
      <Details />
      <Voting />
      <TabsComponent />
    </div>
  );
}

export default Detail;

function Details() {
  return (
    <div className="pt-9 px-6">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-[#0FA383] text-xl">
          Tari Reog Ponorogo
        </h1>
        <Button variant="ghost" className="hover:bg-white/30">
          <ChevronRight className="stroke-white" />
        </Button>
      </div>
      <div className="w-full bg-[#83B5A0]  rounded-lg mt-3 aspect-[3/2]">
        asdasd
      </div>
      <p className="text-white text-sm pt-3">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam neque
        minima sit veniam voluptates placeat voluptate, provident, commodi,
        obcaecati numquam blanditiis excepturi corrupti.
      </p>
    </div>
  );
}

function Voting() {
  return (
    <div className="px-6 pt-6">
      <div className="flex justify-between items-center">
        <div className="flex">
          <Image src="/star.svg" alt="star" width={30} height={30} />
          <Select>
            <SelectTrigger className="w-[90px] ml-2 h-9 bg-[#CDFFEA] text-lg text-[#1BA88A] font-medium">
              <SelectValue placeholder="1-10" />
            </SelectTrigger>
            <SelectContent className="w-[90px]">
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
        <Button variant="outline">
          <Edit3 className="stroke-[#86E7BE]" />
          <p className="text-[#86E7BE]">Beri Catatan</p>
        </Button>
      </div>
      <Button className=" h-[60px] w-full bg-[#F9C97B] hover:bg-[#e8b35e] mt-3 text-[#041F14]">
        Kirim
      </Button>
    </div>
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
        <h3 className="mt-3 font-semibold text-[#0FA383] text-lg">
          Penanggung Jawab
        </h3>
        <p>Al-Ustadz Muhammad Faizar</p>
        <h3 className="font-semibold text-[#0FA383] text-lg mt-2">Penampil</h3>
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
