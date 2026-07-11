export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Validar que la petición sea estrictamente para security.txt
    if (url.pathname === '/.well-known/security.txt' || url.pathname === '/security.txt') {
      const securityTxtContent = `# RFC 9116 - https://securitytxt.org/
Contact: mailto:seguridad@huracanescomodoro.com.ar
Expires: 2027-06-30T18:00:00.000Z
Preferred-Languages: es`;

      return new Response(securityTxtContent, {
        status: 200,
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Cache-Control': 'public, max-age=86400', // Cachea por 24 horas en el navegador
          'Access-Control-Allow-Origin': '*'        // Permite lectura a scanners de seguridad externos
        }
      });
    }

    // Si no coincide con las rutas, deja pasar la petición al origen o devuelve 404
    return new Response('Not Found', { status: 404 });
  },
};
