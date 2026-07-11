export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // 1. Ruta para la clave PGP
    if (url.pathname === '/.well-known/pgp-key.txt') {
      // Reemplazá este string con el contenido de tu archivo pgp-key.txt
      const pgpKeyContent = `-----BEGIN PGP PUBLIC KEY BLOCK-----

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
/ET3jG0TkEVr0w==
=EsdF
-----END PGP PUBLIC KEY BLOCK-----`;

      return new Response(pgpKeyContent, {
        status: 200,
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Cache-Control': 'public, max-age=86400',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    // 2. Ruta para el security.txt
    if (url.pathname === '/.well-known/security.txt' || url.pathname === '/security.txt') {
      const securityTxtContent = `# RFC 9116 - https://securitytxt.org/
Contact: mailto:seguridad@huracanescomodoro.com.ar
Encryption: https://huracanescomodoro.com.ar/.well-known/pgp-key.txt
Policy: https://huracanescomodoro.com.ar/seguridad
Acknowledgments: https://huracanescomodoro.com.ar/seguridad/reconocimientos
Expires: 2027-06-30T18:00:00.000Z
Preferred-Languages: es`;

      return new Response(securityTxtContent, {
        status: 200,
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Cache-Control': 'public, max-age=86400',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    // Respuesta por defecto
    return new Response('Not Found', { status: 404 });
  },
};
