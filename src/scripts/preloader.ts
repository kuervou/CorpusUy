// src/scripts/preloader.ts

const hidePreloader = () => {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;
  
    preloader.classList.add('opacity-0', 'pointer-events-none');
  
    // Esperamos a que termine la transición y lo removemos del DOM
    window.setTimeout(() => {
      preloader.remove();
    }, 550);
  };
  
  const onWindowLoad = async () => {
    try {
      // Esperar a que las fuentes estén listas (si el browser soporta Font Loading API)
      // Esto ayuda a evitar el salto de fuente.
      // @ts-ignore
      if ('fonts' in document && document.fonts?.ready) {
        // @ts-ignore
        await document.fonts.ready;
      }
    } catch {
      // si falla, no pasa nada, seguimos
    } finally {
      hidePreloader();
    }
  };
  
  window.addEventListener('load', onWindowLoad);
  