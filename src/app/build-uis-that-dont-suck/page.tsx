import { SignUpForm } from "./call-to-action";
import { GridContainer } from "./grid-container";

import type { Metadata } from "next";
import { HeroSection } from "./hero-section";

import card from "./card.jpg";

export const metadata: Metadata = {
  title: "Создавайте интерфейсы, которые не отстой",
  description: "Бесплатная серия видео от создателя Tailwind CSS.",
  openGraph: {
    type: "website",
    title: "Создавайте интерфейсы, которые не отстой",
    description: "Бесплатная серия видео от создателя Tailwind CSS.",
    images: card.src,
    url: "https://tailwindcss.ru/build-uis-that-dont-suck",
  },
};

export default async function Course() {
  return (
    <div className="dark relative px-4 py-8 sm:px-0">
      <header>
        <HeroSection />
      </header>
      <main className="pt-14 pb-28">
        <GridContainer>
          <div className="max-w-xl space-y-8 text-base/7 text-gray-400 marker:text-white/60 **:[li]:pl-2 **:[strong]:font-medium **:[strong]:text-white **:[ul]:list-[square] **:[ul]:space-y-4 **:[ul]:pl-8">
            <p>
              Когда вы создаете UI компоненты, которые используются <strong>десятками тысяч разработчиков</strong>, вы учитесь
              действительно заботиться о деталях, таких как:
            </p>
            <ul>
              <li>
                <strong>Создание макетов, которые не ломаются</strong> когда контент длиннее, чем вы планировали в
                Figma
              </li>
              <li>
                Делать таблицу прокручиваемой, <strong>без обрезания контента</strong> отступом страницы
              </li>
              <li>
                <strong>Автоматическое выравнивание иконок</strong> в выпадающих меню, даже когда некоторые элементы — просто текст
              </li>
              <li>
                Делать всю карточку кликабельной, <strong>не разрушая опыт</strong> для пользователей скринридеров
              </li>
              <li>
                <strong>Точная настройка областей клика для мобильных устройств</strong>, не усложняя поддержку всего остального
              </li>
              <li>
                Получение идеального радиуса границы <strong>математически точно</strong> на вложенных элементах, без
                жесткого кодирования магических чисел
              </li>
            </ul>
            <p>
              <strong>"Создавайте интерфейсы, которые не отстой"</strong> — это интенсивный курс по некоторым из самых крутых трюков, которые я подобрал
              за годы создания вещей, которые должны быть одновременно красивыми и надежными.
            </p>

            <p>
              <strong>Каждый день в течение недели я буду отправлять вам короткий видеоурок</strong>, проводя вас через
              интересную проблему UI, <strong>а также код</strong>, чтобы вы могли поэкспериментировать с ним сами и адаптировать
              для своих собственных проектов.
            </p>
          </div>
          <div className="mt-8">
            <SignUpForm />
          </div>
        </GridContainer>
      </main>
    </div>
  );
}
