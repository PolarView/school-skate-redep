import Image from "next/image";
import React from "react";
import NextLink from "next/link";
import Link from "next/link";
import bunkerMainImage from "/public/bunker/bunker.webp";
import cherdakMainImage from "/public/cherdak/cherdak1.jpg";
import view1 from "/public/bunker/view1.webp";
import view2 from "/public/bunker/view2.webp";

const Bunker = () => {
  return (
    <section id="bunker" className="w-full pt-14 pb-10 max-md:pt-10 max-md:pb-7">
      <div className="w-full relative max-[900px]:px-2">
        <div className="absolute z-20 top-6 left-1/2 -translate-x-1/2 w-[94%] max-w-[860px] max-[900px]:static max-[900px]:translate-x-0 max-[900px]:w-full max-[900px]:max-w-none max-[900px]:mb-4">
          <div className="rounded-[22px] border border-[#93A4FF]/55 bg-[#111623]/82 backdrop-blur-lg shadow-[0_14px_45px_rgba(0,0,0,0.42)] px-7 py-5 text-center max-[900px]:border-[#111623] max-[900px]:bg-[#111623] max-[900px]:shadow-none max-md:px-4 max-md:py-4">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="w-8 h-[2px] bg-[#93A4FF] rounded-full"></span>
              <p className="font-['Unbounded'] text-white text-[24px] max-md:text-[17px] tracking-[0.08em] uppercase">
                Скейт-парки
              </p>
              <span className="w-8 h-[2px] bg-[#93A4FF] rounded-full"></span>
            </div>
            <p className="font-['Roboto'] text-white text-[20px] max-md:text-[15px] leading-[1.35]">
              Два авторских пространства Schoolskate: продуманная геометрия фигур, безопасный
              прогресс и тренировки под любой уровень.
            </p>
          </div>
        </div>

        <div className="w-full grid grid-cols-2 gap-0 max-[900px]:grid-cols-1 max-[900px]:gap-4">
          <div className="relative h-[680px] max-[1200px]:h-[560px] max-[900px]:h-[420px] max-[500px]:h-[300px]">
            <Image
              placeholder="blur"
              src={bunkerMainImage}
              fill
              alt="Фото скейт-парка Bunker"
              className="object-cover max-[900px]:rounded-[18px]"
            />
            <div className="absolute top-[50%] left-[50%] select-none -translate-x-[50%] -translate-y-[50%] flex items-center justify-center w-[360px] max-md:w-[280px] h-[140px] max-md:h-[100px] bg-[#191E28] rounded-[18px] rotate-2">
              <div className="text-center -rotate-2 text-white">
                <h2 className="font-['Unbounded'] font-semibold text-center text-[56px] max-md:text-[38px]">
                  Bunker
                </h2>
                <p className="font-['Unbounded'] text-center font-normal text-[20px] max-md:text-[13px]">
                  скейт-парк
                </p>
              </div>
            </div>
            <Link
              href="#bunker-details"
              className="absolute bottom-5 left-[50%] -translate-x-[50%] w-11 h-11 rounded-full bg-white/90 text-[#191E28] flex items-center justify-center text-[22px]">
              &darr;
            </Link>
          </div>

          <div className="relative h-[680px] max-[1200px]:h-[560px] max-[900px]:h-[420px] max-[500px]:h-[300px]">
            <Image
              placeholder="blur"
              src={cherdakMainImage}
              fill
              alt="Фото скейт-парка Cherdak"
              className="object-cover max-[900px]:rounded-[18px]"
            />
            <div className="absolute top-[50%] left-[50%] select-none -translate-x-[50%] -translate-y-[50%] flex items-center justify-center w-[360px] max-md:w-[280px] h-[140px] max-md:h-[100px] bg-[#191E28] rounded-[18px] -rotate-2">
              <div className="text-center rotate-2 text-white">
                <h2 className="font-['Unbounded'] font-semibold text-center text-[56px] max-md:text-[38px]">
                  Чердак
                </h2>
                <p className="font-['Unbounded'] text-center font-normal text-[20px] max-md:text-[13px]">
                  скейт-парк
                </p>
              </div>
            </div>
            <Link
              href="#cherdak"
              className="absolute bottom-5 left-[50%] -translate-x-[50%] w-11 h-11 rounded-full bg-white/90 text-[#191E28] flex items-center justify-center text-[22px]">
              &darr;
            </Link>
          </div>
        </div>
      </div>

      <div
        id="bunker-details"
        className="max-w-[1200px] mx-auto px-2 mt-10 flex flex-col gap-y-10 scroll-mt-[130px] max-md:scroll-mt-[80px]">
        <div className="grid grid-cols-12 gap-5 items-stretch max-[900px]:grid-cols-1">
          <div className="col-span-7 max-[900px]:col-span-1 relative min-h-[520px] max-md:min-h-[320px]">
            <Image
              placeholder="blur"
              src={bunkerMainImage}
              fill
              alt="Главное фото скейт-парка Bunker"
              className="object-cover rounded-[18px]"
            />
            <div className="absolute left-4 top-4 bg-white/95 rounded-[14px] px-4 py-2">
              <p className="font-['Unbounded'] text-[17px] text-[#191E28] uppercase tracking-[0.06em]">
                Парк №1
              </p>
            </div>
          </div>

          <div className="col-span-5 max-[900px]:col-span-1 bg-[#F4F7FF] rounded-[18px] p-7 max-md:p-5 flex flex-col justify-between gap-y-6">
            <div>
              <h2 className="font-['Unbounded'] text-[56px] max-md:text-[38px] leading-[1.05] text-[#191E28]">
                Bunker
              </h2>
              <p className="font-['Roboto'] text-[23px] max-md:text-[18px] leading-[1.35] text-[#324164] mt-4">
                Плотный тренировочный ритм, стабильные линии и продуманная логика фигур. Здесь
                удобно расти от базовой техники до уверенного катания в потоке.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 max-[500px]:grid-cols-1">
              <div className="rounded-[14px] bg-white p-4">
                <p className="font-['Unbounded'] text-[24px] text-[#191E28]">База</p>
                <p className="font-['Roboto'] text-[16px] text-[#324164]">
                  Техника, контроль, стабильность
                </p>
              </div>
              <div className="rounded-[14px] bg-white p-4">
                <p className="font-['Unbounded'] text-[24px] text-[#191E28]">Поток</p>
                <p className="font-['Roboto'] text-[16px] text-[#324164]">
                  Связки и уверенное движение
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[18px] bg-[#191E28] px-6 py-7 max-md:px-4 max-md:py-5 grid grid-cols-3 gap-4 max-[900px]:grid-cols-1">
          <div>
            <p className="font-['Unbounded'] text-[22px] text-white">Продуманная геометрия</p>
            <p className="font-['Roboto'] text-[17px] text-white/85 mt-2">
              Фигуры собраны в понятную последовательность для комфортного прогресса.
            </p>
          </div>
          <div>
            <p className="font-['Unbounded'] text-[22px] text-white">Разные сценарии катания</p>
            <p className="font-['Roboto'] text-[17px] text-white/85 mt-2">
              Можно работать и над базой, и над сериями трюков в одном пространстве.
            </p>
          </div>
          <div>
            <p className="font-['Unbounded'] text-[22px] text-white">Контроль нагрузки</p>
            <p className="font-['Roboto'] text-[17px] text-white/85 mt-2">
              Тренировки строятся по уровню, чтобы прогресс был быстрым и безопасным.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-5 max-[900px]:grid-cols-1">
          <div className="col-span-5 max-[900px]:col-span-1 rounded-[18px] border border-[#D5DCEC] p-6 flex flex-col justify-between">
            <div>
              <p className="font-['Unbounded'] text-[34px] max-md:text-[28px] text-[#191E28]">
                Как проходят занятия
              </p>
              <p className="font-['Roboto'] text-[20px] max-md:text-[17px] text-[#324164] mt-3 leading-[1.35]">
                Тренер задает темп под вашу задачу: базовые навыки, скорость прохождения линий,
                уверенность на фигурах и стабильное приземление.
              </p>
            </div>
            <Link
              href="#bunker-location"
              className="mt-6 w-fit text-[#191E28] font-['Unbounded'] text-[16px] underline">
              Перейти к локации
            </Link>
          </div>

          <div className="col-span-7 max-[900px]:col-span-1 grid grid-cols-2 gap-5 max-[600px]:grid-cols-1">
            <div className="relative h-[360px] max-[700px]:h-[280px]">
              <Image
                placeholder="blur"
                src={view1}
                fill
                alt="Тренировочная зона в Bunker"
                className="object-cover rounded-[18px]"
              />
            </div>
            <div className="relative h-[360px] max-[700px]:h-[280px]">
              <Image
                placeholder="blur"
                src={view2}
                fill
                alt="Фигуры и линии в Bunker"
                className="object-cover rounded-[18px]"
              />
            </div>
          </div>
        </div>

        <div className="rounded-[18px] bg-[#F4F7FF] p-6 max-md:p-4 flex items-center justify-between gap-4 max-[760px]:flex-col max-[760px]:items-start">
          <div>
            <p className="font-['Unbounded'] text-[34px] max-md:text-[26px] text-[#191E28]">
              Трансляция из Bunker
            </p>
            <p className="font-['Roboto'] text-[20px] max-md:text-[17px] text-[#324164] mt-2">
              Посмотрите загруженность и атмосферу парка в реальном времени.
            </p>
          </div>
          <NextLink href="translation">
            <button className="relative h-[56px] min-w-[230px] font-normal font-['Unbounded'] flex justify-center items-center bg-[#546EFF] hover:bg-primaryHovered text-white rounded-[40px] px-8 py-4">
              <span>Смотреть трансляцию</span>
              <div className="absolute top-0 right-0">
                <span className="relative flex items-center justify-center size-6">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
                </span>
              </div>
            </button>
          </NextLink>
        </div>

        <div
          id="bunker-location"
          className="grid grid-cols-12 gap-5 max-[950px]:grid-cols-1 items-start scroll-mt-[130px] max-md:scroll-mt-[80px]">
          <div className="col-span-4 max-[950px]:col-span-1 rounded-[18px] bg-white border border-[#D5DCEC] p-6">
            <p className="font-['Unbounded'] text-[38px] max-md:text-[30px] text-[#191E28]">
              Bunker
            </p>
            <p className="font-['Roboto'] text-[24px] max-md:text-[20px] text-[#191E28] mt-2">
              Ленинградский просп. 37, к3
            </p>

            <div className="mt-6 space-y-2 font-['Roboto'] text-[20px] text-[#324164]">
              <p>Будни: 10:00-22:00</p>
              <p>Выходные: 9:00-22:00</p>
              <Link href="https://wa.me/79099148469?text=" className="underline text-[#191E28]">
                +7 909 914 84 69
              </Link>
            </div>
          </div>

          <div className="col-span-8 max-[950px]:col-span-1 h-[520px] max-[560px]:h-[360px] relative">
            <iframe
              title="Расположение скейт-парка Bunker"
              style={{ borderRadius: "18px", position: "relative", zIndex: "2" }}
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A0a6085ea7a16ff1b81096e196aadeddc744e92b3a886eb5cfb1285a009f0ac82&amp;source=constructor"
              width="100%"
              height="100%"
              frameBorder="0"></iframe>
            <div className="absolute w-full h-full top-3 left-3 rounded-[18px] bg-[#191E28]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bunker;
