export function getStaticImages(images, staticImages) {
	for (var i=0; i < images.length; i++) { 
    for (var j=0;j<staticImages.length;j++) { 
      if (images[i].src.indexOf(staticImages[j].node.source_url) > -1) { 
        images[i].srcset = ''; 
        images[i].src = staticImages[j].node.localFile.childImageSharp.sizes.src; 
      } 
    } 
  }
}