import { routes, type Page } from "./content";

/**
 * Mini-routeur par History API — de vraies URLs (/about) au lieu de #/about,
 * sans dépendance externe. Le serveur doit renvoyer index.html pour toutes
 * les routes (fallback SPA) afin que les URLs profondes fonctionnent au
 * chargement direct.
 */

/** Lit la page courante depuis l'URL. Route inconnue → accueil. */
export function getPageFromPath(): Page {
  const slug = decodeURIComponent(window.location.pathname.split("/").filter(Boolean)[0] ?? "");
  return routes.includes(slug as Page) ? (slug as Page) : "home";
}

/** Chemin de l'URL courante, prêt à comparer (pathname + search). */
export function currentLocation(): string {
  return window.location.pathname + window.location.search;
}

export function navigate(path: string) {
  if (path !== currentLocation()) {
    window.history.pushState({}, "", path);
  }
  // Notifie le routeur (popstate aussi déclenché par bouton retour/avant).
  window.dispatchEvent(new PopStateEvent("popstate"));
}

/**
 * Convertit une ancrée interne active en URL réelle via le click handler
 * global : tout lien interne (même origine) est intercepté et pushé dans
 * l'History API au lieu de recharger la page.
 */
export function handleLinkClick(event: MouseEvent) {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return;
  }
  const target = event.target instanceof Element ? event.target : null;
  const anchor = target?.closest("a[href]");
  if (!anchor) return;

  const href = anchor.getAttribute("href") ?? "";
  // Liens in-page (#main-content), protocoles (mailto:, tel:), externes : on ne touche pas.
  if (!href.startsWith("/") || href.startsWith("//")) return;

  const url = new URL(href, window.location.origin);
  if (url.origin !== window.location.origin) return;
  if (anchor.getAttribute("target") && anchor.getAttribute("target") !== "_self") return;
  if (anchor.hasAttribute("download")) return;

  event.preventDefault();
  navigate(url.pathname + url.search + url.hash);
}

/**
 * Anciennes URLs partagées en #/about ou #/news?article=x : on remplace
 * l'URL par son équivalent réel ("/about") pour ne rien casser.
 * Retourne true si uneOld URL hash a été convertie.
 */
export function replaceLegacyHash(): boolean {
  const { hash } = window.location;
  if (!hash.startsWith("#/")) return false;
  const path = hash.slice(1);
  window.history.replaceState({}, "", window.location.pathname + path);
  return true;
}
