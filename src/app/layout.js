import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import YandexMetrikaHit from "./components/YandexMetrikaHit";

export const metadata = {
  title: "Skateschool - скейт школа в москве",
  description:
    "Skateschool - скейт школа в москве, школа скейтбординга для тренировок и занятий на скейте вместе с тренером и для катания на скейте скейт-парк",
  icons: {
    icon: ["/metadata/favicon.ico?v=4"],
    apple: ["/metadata/apple-touch-icon.png?v=4"],
    shortcut: ["/metadata/apple-touch-icon.png"]
  },
  manifest: "/metadata/site.webmanifest"
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        {children}
        <YandexMetrikaHit />
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a);
            })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=107738907', 'ym');

            ym(107738907, 'init', {
              defer: true,
              ssr: true,
              webvisor: true,
              clickmap: true,
              trackLinks: true,
              accurateTrackBounce: true
            });
          `}
        </Script>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/107738907"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
        <Analytics />
      </body>
    </html>
  );
}
