import clsx from "clsx";

export default function BaseHtml({ children, meta, colorMode = '', className, lightmode = false }) {
	return (
		<html lang="ru">
    <head>
      <meta charSet="UTF-8"/>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description}/>
      <link rel="stylesheet" href="/assets/css/libs.min.css"/>
      <link rel="stylesheet" href="/assets/css/main.css"/>
      <meta name="viewport" content="width=device-width,initial-scale=1"/>
      <link rel="shortcut icon" href="/assets/img/favicon.ico" type="image/x-icon"/>
    </head>
    <body class={clsx(lightmode ? "-light" : "", colorMode, className)}>
    {children}
    <script src="/assets/js/main.libs.js"></script>
    <script src="/assets/js/main.js"></script>

    {/*удалить скрипт WINDSTER ниже с прода, добавлять через шаблон CMS*/}
    <div
      dangerouslySetInnerHTML={{
        __html: `<script>(function(d, w){w.wwidget = 'bb9435b6f15e3c419394794ebb0589a8eaa577e6d7f730df85ea0469ef012a57'; var s = d.createElement('script'); s.async = true; s.src = 'https://widster.ru/embed/'+w.wwidget; s.charset = 'UTF-8'; d.currentScript.replaceWith(s);})(document, window);</script>`
      }}
    />
    </body>
    </html>
  );
}
