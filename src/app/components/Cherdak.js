import Image from "next/image";
import React from "react";
import Link from "next/link";
import cherdakMainImage from "/public/cherdak/cherdak1.jpg";
import cherdakView1 from "/public/cherdak/cherdak2.jpg";
import cherdakView2 from "/public/cherdak/cherdak3.jpg";

const Cherdak = () => {
  return (
    <section
      id="cherdak"
      className="w-full py-10 max-md:py-7 scroll-mt-[130px] max-md:scroll-mt-[80px]">
      <div className="max-w-[1200px] mx-auto px-2 flex flex-col gap-y-10">
        <div className="grid grid-cols-12 gap-5 items-stretch max-[900px]:grid-cols-1">
          <div className="col-span-6 max-[900px]:col-span-1 bg-[#F4F7FF] rounded-[18px] p-8 max-md:p-5 flex flex-col justify-between gap-y-8">
            <div className="flex flex-col gap-y-5">
              <span className="w-fit px-4 py-2 rounded-full bg-[#191E28] text-white text-[20px] font-['Unbounded'] uppercase tracking-[0.08em]">
                Скейт-парк №2
              </span>
              <h2 className="font-['Unbounded'] text-[58px] max-md:text-[38px] leading-[1.05] text-[#191E28]">
                Чердак
              </h2>
              <p className="font-['Roboto'] text-[24px] max-md:text-[19px] leading-[1.35] text-[#324164]">
                Парк для тех, кто хочет больше динамики: быстрые линии, удобные разгоны и отдельные
                зоны для отработки трюков.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 max-[500px]:grid-cols-1">
              <div className="rounded-[14px] bg-white p-4">
                <p className="font-['Unbounded'] text-[24px] text-[#191E28]">2 зоны</p>
                <p className="font-['Roboto'] text-[16px] text-[#324164]">Новички и продвинутые</p>
              </div>
              <div className="rounded-[14px] bg-white p-4">
                <p className="font-['Unbounded'] text-[24px] text-[#191E28]">Крытый</p>
                <p className="font-['Roboto'] text-[16px] text-[#324164]">
                  Комфортно в любую погоду
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-6 max-[900px]:col-span-1 relative min-h-[520px] max-md:min-h-[320px]">
            <Image
              placeholder="blur"
              src={cherdakMainImage}
              fill
              alt="Фото скейт-парка Чердак"
              className="object-cover rounded-[18px]"
            />
            <div className="absolute right-4 bottom-4 bg-white/95 rounded-[14px] px-4 py-3 max-w-[280px]">
              <p className="font-['Unbounded'] text-[18px] text-[#191E28]">Тренировки ежедневно</p>
              <p className="font-['Roboto'] text-[15px] text-[#324164]">
                Группы по уровню, индивидуальный подход и постоянный прогресс.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-5 max-[900px]:grid-cols-1">
          <div className="col-span-7 max-[900px]:col-span-1 relative h-[520px] max-[700px]:h-[340px]">
            <Image
              placeholder="blur"
              src={cherdakView1}
              fill
              alt="Тренировки в Чердаке"
              className="object-cover rounded-[18px]"
            />
          </div>
          <div className="col-span-5 max-[900px]:col-span-1 flex flex-col gap-y-5">
            <div className="relative h-[250px] max-[700px]:h-[220px]">
              <Image
                placeholder="blur"
                src={cherdakView2}
                fill
                alt="Фигура и линии в Чердаке"
                className="object-cover rounded-[18px]"
              />
            </div>
            <div className="rounded-[18px] bg-[#191E28] p-6 text-white flex-1">
              <h3 className="font-['Unbounded'] text-[28px] max-md:text-[22px] leading-[1.2]">
                Для какого уровня?
              </h3>
              <p className="font-['Roboto'] text-[20px] max-md:text-[17px] mt-3 text-white/90 leading-[1.35]">
                От первого выезда до стабильных трюков на фигурах. Тренер подберет план именно под
                ваш темп.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 max-[900px]:grid-cols-1">
          <div className="rounded-[16px] border border-[#D5DCEC] p-5">
            <p className="font-['Unbounded'] text-[20px] text-[#191E28]">Фокус на технике</p>
            <p className="font-['Roboto'] text-[17px] text-[#324164] mt-2">
              Разбираем стойку, баланс, повороты и контроль доски без перегруза.
            </p>
          </div>
          <div className="rounded-[16px] border border-[#D5DCEC] p-5">
            <p className="font-['Unbounded'] text-[20px] text-[#191E28]">Безопасный прогресс</p>
            <p className="font-['Roboto'] text-[17px] text-[#324164] mt-2">
              Сложность растет постепенно, чтобы навыки закреплялись стабильно.
            </p>
          </div>
          <div className="rounded-[16px] border border-[#D5DCEC] p-5">
            <p className="font-['Unbounded'] text-[20px] text-[#191E28]">Живой ритм парка</p>
            <p className="font-['Roboto'] text-[17px] text-[#324164] mt-2">
              Пространство рассчитано на активные тренировки, связки и уверенное катание в движении.
            </p>
          </div>
        </div>

        <div
          id="cherdak-location"
          className="grid grid-cols-12 gap-5 max-[950px]:grid-cols-1 items-start scroll-mt-[130px] max-md:scroll-mt-[80px]">
          <div className="col-span-4 max-[950px]:col-span-1 rounded-[18px] bg-white border border-[#D5DCEC] p-6">
            <p className="font-['Unbounded'] text-[38px] max-md:text-[30px] text-[#191E28]">
              Чердак
            </p>
            <p className="font-['Roboto'] text-[24px] max-md:text-[20px] text-[#191E28] mt-2">
              Ул первого измайловского зверинца д 8
            </p>

            <div className="mt-6 space-y-2 font-['Roboto'] text-[20px] text-[#324164]">
              <p>Будни: 11:00 - 23:00</p>
              <p>Выходные: 10:00 - 23:00</p>
              <Link href="https://wa.me/79099148469?text=" className="underline text-[#191E28]">
                +7 909 914 84 69
              </Link>
            </div>
          </div>

          <div className="col-span-8 max-[950px]:col-span-1 h-[520px] max-[560px]:h-[360px] relative">
            <iframe
              title="Расположение скейт-парка Чердак"
              style={{ borderRadius: "18px", position: "relative", zIndex: "2" }}
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Acac1df104c7fbcc2854d4f76fe131dd0e33ea132d249e73e993de6d25e031b91&amp;source=constructor"
              width="100%"
              height="100%"
              frameborder="0"></iframe>
            <div className="absolute w-full h-full top-3 left-3 rounded-[18px] bg-[#191E28]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cherdak;
