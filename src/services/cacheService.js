export const cacheAssets = async (srcArr, callback) => {
    const promises = await srcArr.map(src => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;

        img.onload = resolve;
        img.onerror = reject;
      })
    })

    await Promise.all(promises);
}