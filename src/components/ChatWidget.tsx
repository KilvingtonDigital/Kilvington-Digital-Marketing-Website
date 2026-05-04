'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';

export default function ChatWidget() {
  const pathname = usePathname();

  // Pages with forms or data collection where the widget should not be loaded
  const excludedPaths = ['/contact'];

  const isExcluded = pathname ? excludedPaths.some(path => pathname.startsWith(path)) : false;

  if (isExcluded) {
    return null;
  }

  return (
    <Script 
      src="https://widgets.leadconnectorhq.com/loader.js" 
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js" 
      data-widget-id="69f89e45a4b26c48eb3a94bc" 
      data-source="WEB_USER"
      strategy="lazyOnload"
    />
  );
}
