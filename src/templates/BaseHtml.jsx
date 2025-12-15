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
    </head>
    <body class={clsx(lightmode ? "-light" : "", colorMode, className)}>
    {children}
    <script src="/assets/js/main.libs.js"></script>
    <script src="/assets/js/main.js"></script>
    </body>
    </html>
  );
}
