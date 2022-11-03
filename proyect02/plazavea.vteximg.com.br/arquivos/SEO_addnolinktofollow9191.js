let observerHref = new MutationObserver(function () {
    const linkshashtag = document.querySelectorAll('a[href="#"]:not([rel="follow"])');
    if(linkshashtag.length > 0){
    linkshashtag.forEach(item=>{
        item.setAttribute('rel', 'nofollow')
    });
    }
    if(location.href.includes('map=')){
        const canonicalLinks = document.querySelectorAll('link[rel="canonical"]');
        if(canonicalLinks){
            if(canonicalLinks.length){
            canonicalLinks.forEach((link)=>{
                link.remove();
            });
            }
        }
    }
    
});
observerHref.observe(document.body, {
        childList: true,
        subtree: true
});
if(location.href.includes('map=')){
    document.head.insertAdjacentHTML('beforeend','<meta name="robots" content="noindex,nofollow" />');
}