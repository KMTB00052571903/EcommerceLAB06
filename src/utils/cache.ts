const CACHE_PREFIX = "ecommerce_cache_";
const TIMESTAMP_PREFIX = "ecommerce_ts_";

export async function cacheFirst(key: string, url: string): Promise<any[]> {
  const cached = localStorage.getItem(CACHE_PREFIX + key);
  if (cached) {
    return JSON.parse(cached);
  }

  const response = await fetch(url);
  const data = await response.json();
  localStorage.setItem(CACHE_PREFIX + key, JSON.stringify(data));
  return data;
}

export async function staleWhileRevalidate(key: string, url: string): Promise<any[]> {
  const cached = localStorage.getItem(CACHE_PREFIX + key);
  const parsed = cached ? JSON.parse(cached) : [];

  // Actualiza en segundo plano
  fetch(url).then(res => res.json()).then(fresh => {
    localStorage.setItem(CACHE_PREFIX + key, JSON.stringify(fresh));
    localStorage.setItem(TIMESTAMP_PREFIX + key, Date.now().toString());
  });

  return parsed;
}
