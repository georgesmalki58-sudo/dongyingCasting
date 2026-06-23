import Script from 'next/script';

// Baidu Tongji (百度统计). Set NEXT_PUBLIC_BAIDU_TONGJI to your hm.js site id to enable.
export function BaiduAnalytics() {
  const id = process.env.NEXT_PUBLIC_BAIDU_TONGJI;
  if (!id) return null;
  return (
    <Script id="baidu-tongji" strategy="afterInteractive">
      {`var _hmt=_hmt||[];(function(){var hm=document.createElement("script");hm.src="https://hm.baidu.com/hm.js?${id}";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm,s);})();`}
    </Script>
  );
}
