"use client";

import { Logo } from "@/components/logo";
import { GridContainer } from "./grid-container";
import { HeroActions } from "./call-to-action";
import { useRef } from "react";
import Link from "next/link";

export function HeroSection() {
  let videoRef = useRef<HTMLVideoElement>(null);

  return (
    <>
      <div aria-hidden="true" className="absolute inset-x-0 top-0 left-1/5 -z-10 aspect-video opacity-50">
        <video ref={videoRef} autoPlay loop muted playsInline className="absolute size-full object-right">
          <source src="https://assets.tailwindcss.com/build-uis-that-dont-suck/hero-loop.mp4" type="video/mp4" />
          Ваш браузер не поддерживает тег video.
        </video>
        <div className="absolute inset-0 size-full bg-linear-to-r from-gray-950 to-75%"></div>
        <div className="absolute inset-0 size-full bg-linear-to-t from-gray-950 to-50%"></div>
      </div>
      <GridContainer>
        <div className="flex p-2">
          <Link href="/" aria-label="Главная" className="inline-flex">
            <Logo className="h-7" />
          </Link>
        </div>
      </GridContainer>
      <div className="mt-20 flex flex-col gap-4 sm:mt-24">
        <GridContainer>
          <p className="font-mono text-sm/6 tracking-wider text-gray-400 uppercase">5-частный мини-курс</p>
          <h1 className="mt-2 text-5xl tracking-tighter text-balance text-white sm:text-8xl">
            Создавайте интерфейсы, которые не отстой.
          </h1>
        </GridContainer>
        <GridContainer>
          <p className="max-w-2xl text-lg/7 font-medium text-gray-400">
            <strong className="font-medium text-white">Короткие, тактические видеоуроки</strong> от создателя
            Tailwind CSS, доставляемые прямо в ваш почтовый ящик{" "}
            <strong className="font-medium text-white">каждый день в течение недели</strong>.
          </p>
        </GridContainer>
        <GridContainer>
          <HeroActions
            onWatchPreview={() => {
              videoRef.current?.pause();
            }}
            onClosePreview={() => {
              videoRef.current?.play();
            }}
          />
        </GridContainer>
      </div>
    </>
  );
}
