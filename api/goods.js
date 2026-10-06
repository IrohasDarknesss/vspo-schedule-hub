// Vercel Serverless Function: Real-time official store sync (store.vspo.jp)
// Fetches official Shopify product catalog with direct product links and stock status

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');

  try {
    const response = await fetch('https://store.vspo.jp/products.json?limit=250', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });

    if (!response.ok) {
      throw new Error(`Shopify API responded with status ${response.status}`);
    }

    const data = await response.json();
    const products = data.products || [];

    // Map each product to direct product link and formatted metadata
    const formatted = products.map(p => {
      const variant = p.variants && p.variants[0] ? p.variants[0] : null;
      const price = variant ? parseInt(variant.price, 10) : 0;
      const available = variant ? variant.available : true;
      const firstImage = p.images && p.images[0] ? p.images[0].src : '';

      return {
        id: `official-${p.id}`,
        title: p.title,
        handle: p.handle,
        // DIRECT PRODUCT PAGE LINK:
        productUrl: `https://store.vspo.jp/products/${p.handle}`,
        officialUrl: `https://store.vspo.jp/products/${p.handle}`,
        price: price,
        priceFormatted: `¥${price.toLocaleString()} (税込)`,
        image: firstImage,
        images: (p.images || []).map(img => img.src),
        status: available ? 'onsale' : 'soldout',
        statusLabel: available ? '販売中' : 'SOLD OUT',
        statusBadgeColor: available 
          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' 
          : 'bg-slate-700/60 text-slate-400 border-slate-600/60',
        tags: p.tags || [],
        publishedAt: p.published_at,
        category: p.product_type || 'goods'
      };
    });

    return res.status(200).json({
      status: 'success',
      count: formatted.length,
      syncedAt: new Date().toISOString(),
      goods: formatted
    });
  } catch (err) {
    console.error('Store sync error:', err);
    return res.status(500).json({
      status: 'error',
      message: err.message
    });
  }
}
