// module.exports = (req, res) => {
//   const userAgent = req.headers['user-agent'];
//   const isRequestingIndex = req.url === '/index.html';

//   const blockedUserAgents = [
//     // Add HTTrack user agents here
//     'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.0)',
//     'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0)',
//     'Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0)',
//     'Mozilla/4.0 (compatible; MSIE 5.0; Win32)',
//     'Mozilla/4.5 (compatible; MSIE 4.01; Windows 98)',
//     'Mozilla/4.5 (compatible; MSIE 4.01; Windows 95)',
//     'Mozilla/4.5 (compatible; MSIE 4.01; Windows NT)',
//     'Mozilla/4.78 [en] (Windows NT 5.0; U)',
//     'Mozilla/4.61 [en] (Win98; I)',
//     'Mozilla/5.0 (Windows; U; Windows NT 5.0; en-US; rv:1.1) Gecko/20020826',
//     'Mozilla/3.0 (Win95; I)',
//     'Mozilla/2.0 (compatible; MSIE 3.01; Windows 95)',
//     'Mozilla/4.5 [en] (X11; I; Linux 2.0.34 i686)',
//     'Mozilla/4.06C-EMS-1.4 [en] (X11; U; SunOS 5.5.1 sun4m)',
//     'Mozilla/4.5 (Macintosh; I; PPC)',
//     'Mozilla/3.01-C-MACOS8 (Macintosh; I; PPC)',
//     'Mozilla/2.0 (OS/2; I)',
//     'Mozilla/4.5 [en] (X11; U; SunOS 5.6 sun4u)',
//     'Mozilla/4.5 [en] (X11; I; AIX 4.1)',
//     'Mozilla/4.5 [en] (X11; I; FreeBSD 2.2.6-RELEASE i386)',
//     'Mozilla/3.01SGoldC-SGI (X11; I; IRIX 6.3 IP32)',
//     'Mozilla/3.0 WebTV/1.2 (compatible; MSIE 2.0)',
//     'Mozilla/2.0 (compatible; MS FrontPage Express 2.0)',
//     'Mozilla/4.05 [fr] (Win98; I)',
//     'Lynx/2.8rel.3 libwww-FM/2.14',
//     'Java1.1.4',
//     'Mozilla/4.5 (compatible; HTTrack 3.0x; Windows 98)',
//     'HyperBrowser (Cray; I; OrganicOS 9.7.42beta-27)',
//     'HTTrack/3.0x',
//     'HTTrack Website Copier/3.0x (offline browser; web mirror utility)'
//   ];

//   if (blockedUserAgents.some(agent => userAgent.includes(agent)) || isRequestingIndex) {
//     res.status(403).send('Access Denied');
//   } else {
//     res.writeHead(302, { Location: '/index.html' });
//     res.end();
//   }
// };


module.exports = (req, res) => {
  const userAgent = req.headers['user-agent'];
  const requestedUrl = req.url;

  const blockedUserAgents = [
    'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.0)',
    'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0)',
    'Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0)',
    'Mozilla/4.0 (compatible; MSIE 5.0; Win32)',
    'Mozilla/4.5 (compatible; MSIE 4.01; Windows 98)',
    'Mozilla/4.5 (compatible; MSIE 4.01; Windows 95)',
    'Mozilla/4.5 (compatible; MSIE 4.01; Windows NT)',
    'Mozilla/4.78 [en] (Windows NT 5.0; U)',
    'Mozilla/4.61 [en] (Win98; I)',
    'Mozilla/5.0 (Windows; U; Windows NT 5.0; en-US; rv:1.1) Gecko/20020826',
    'Mozilla/3.0 (Win95; I)',
    'Mozilla/2.0 (compatible; MSIE 3.01; Windows 95)',
    'Mozilla/4.5 [en] (X11; I; Linux 2.0.34 i686)',
    'Mozilla/4.06C-EMS-1.4 [en] (X11; U; SunOS 5.5.1 sun4m)',
    'Mozilla/4.5 (Macintosh; I; PPC)',
    'Mozilla/3.01-C-MACOS8 (Macintosh; I; PPC)',
    'Mozilla/2.0 (OS/2; I)',
    'Mozilla/4.5 [en] (X11; U; SunOS 5.6 sun4u)',
    'Mozilla/4.5 [en] (X11; I; AIX 4.1)',
    'Mozilla/4.5 [en] (X11; I; FreeBSD 2.2.6-RELEASE i386)',
    'Mozilla/3.01SGoldC-SGI (X11; I; IRIX 6.3 IP32)',
    'Mozilla/3.0 WebTV/1.2 (compatible; MSIE 2.0)',
    'Mozilla/2.0 (compatible; MS FrontPage Express 2.0)',
    'Mozilla/4.05 [fr] (Win98; I)',
    'Lynx/2.8rel.3 libwww-FM/2.14',
    'Java1.1.4',
    'Mozilla/4.5 (compatible; HTTrack 3.0x; Windows 98)',
    'HyperBrowser (Cray; I; OrganicOS 9.7.42beta-27)',
    'HTTrack/3.0x',
    'HTTrack Website Copier/3.0x (offline browser; web mirror utility)'
  ];

  const sensitivePages = [
    '/index-2.html', '/categories.html',
  ];

  if (blockedUserAgents.some(agent => userAgent.includes(agent)) || sensitivePages.some(page => requestedUrl.endsWith(page))) {
    res.status(403).send('Access Denied');
  } else {
    res.end();
  }
};
