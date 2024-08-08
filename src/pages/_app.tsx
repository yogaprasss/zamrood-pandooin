import { createContext, useEffect, useState } from 'react';

import type { AppProps } from 'next/app';

import '@/styles/globals.css';

type ScrollHandlerContextProps = {
  isScrolled: boolean
};

const defaultValueScrollHandlerContext: ScrollHandlerContextProps = {
  isScrolled: false
};

export const ScrollHandlerContext = createContext(defaultValueScrollHandlerContext);

export default function App({ Component, pageProps }: AppProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const scrollTop = document.scrollingElement?.scrollTop;
      const width = document.scrollingElement?.clientWidth;
      const isScrolledEnough =
        (width! > 1280 && scrollTop! >= 164) ||
        (width! >= 640 && width! < 1280 && scrollTop! >= 136) ||
        (width! < 640 && scrollTop! >= 173);

      setIsScrolled(isScrolledEnough);
    });
  }, []);

  return (
    <ScrollHandlerContext.Provider value={{ isScrolled }}>
      <Component {...pageProps} />
    </ScrollHandlerContext.Provider>
  );
}
