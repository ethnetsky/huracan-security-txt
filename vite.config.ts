import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";
import fs from 'fs'
import path from 'path'

export default defineConfig({
	plugins: [react(), cloudflare(),
			   {
                 name: 'serve-well-known',
                 configureServer(server) {
                   server.middlewares.use((req, res, next) => {
                     // Si la petición es para la carpeta .well-known
                     if (req.url && req.url.startsWith('/.well-known/')) {
                       // Buscamos el archivo físico dentro de public
                       const filePath = path.resolve('public', req.url.slice(1));
            
                       if (fs.existsSync(filePath)) {
                         // Si existe, lo devolvemos como texto plano y cortamos la ejecución
                         res.setHeader('Content-Type', 'text/plain; charset=utf-8');
                         res.end(fs.readFileSync(filePath));
                         return;
                       }
                     }
                     // Si no es esa ruta, dejamos que Vite siga su curso normal
                     next();
                   });
                 }
                }
			 ],
});
