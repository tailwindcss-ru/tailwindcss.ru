import Image from "next/image";
import bookPromo from "./book-promo.png";

export default function BookPromo() {
  return (
    <a href="https://www.refactoringui.com/?ref=sidebar" className="group">
      <div className="mt-12 flex flex-col items-center justify-center">
        <div className="relative origin-center -translate-x-3 rotate-6 p-6 duration-500 group-hover:rotate-0">
          <div className="absolute top-4 left-0 h-px w-full bg-[linear-gradient(to_right,_transparent_0%,_var(--gradient-bg)_9.27%,_var(--gradient-bg)_90.7%,_transparent_100%)] [--gradient-bg:var(--color-black)]/15 dark:[--gradient-bg:var(--color-white)]/10"></div>
          <div className="absolute top-0 left-4 h-full w-px bg-[linear-gradient(to_bottom,_transparent_0%,_var(--gradient-bg)_9.27%,_var(--gradient-bg)_90.7%,_transparent_100%)] [--gradient-bg:var(--color-black)]/15 dark:[--gradient-bg:var(--color-white)]/10"></div>
          <Image
            src={bookPromo}
            alt="Refactoring UI"
            width={128}
            height={171.2}
            className="shadow-[-5px_10px_15px_-3px_var(--shadow-color),_-5px_4px_6px_-4px_var(--shadow-color)] duration-500 [--shadow-color:var(--color-black)]/10 dark:[--shadow-color:var(--color-black)]"
          />
          <div className="absolute top-0 right-4 h-full w-px bg-[linear-gradient(to_bottom,_transparent_0%,_var(--gradient-bg)_9.27%,_var(--gradient-bg)_90.7%,_transparent_100%)] [--gradient-bg:var(--color-black)]/15 dark:[--gradient-bg:var(--color-white)]/10"></div>
          <div className="absolute bottom-4 left-0 h-px w-full bg-[linear-gradient(to_right,_transparent_0%,_var(--gradient-bg)_9.27%,_var(--gradient-bg)_90.7%,_transparent_100%)] [--gradient-bg:var(--color-black)]/15 dark:[--gradient-bg:var(--color-white)]/10"></div>
        </div>
      </div>
      <p className="text-[0.815rem]/6 font-semibold text-sky-500 dark:text-sky-400">
        От создателей Tailwind CSS
      </p>
      <p className="mt-1.5 text-[0.9375rem]/5 font-semibold text-gray-950 dark:text-white">
        Воплотите свои идеи в реальность, не прибегая к услугам дизайнера.
      </p>
      <blockquote className="mt-6 border-l border-black/5 pl-4 text-gray-600 dark:border-white/10 dark:text-gray-400">
        <p className="text-[0.8125rem]/5 [hanging-punctuation:first_last]">
          “Это тот набор для выживания, который мне хотелось иметь, когда я начинал создавать приложения.”
        </p>
        <p className="mt-3 text-xs">Деррик Реймер, SavvyCal</p>
      </blockquote>
    </a>
  );
}
