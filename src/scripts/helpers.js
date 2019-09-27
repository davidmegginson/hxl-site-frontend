export function getStaticImages(images, staticImages) {
	for (var i=0; i < images.length; i++) {
  	for (var j=0;j<staticImages.length;j++) {
    	var staticPath = staticImages[j].node.source_url.split('/');
    	staticPath = staticPath[staticPath.length-1];
    	if (images[i].src.indexOf(staticPath) > -1) { 
      	images[i].srcset = ''; 
      	if (staticImages[j].node.localFile.childImageSharp != null)
      		images[i].src = staticImages[j].node.localFile.childImageSharp.sizes.src; 
   		} 
  	} 
  }
}

export function getStaticPDFs(files, staticFiles) {
	for (var i=0; i < files.length; i++) { 
  	for (var j=0;j<staticFiles.length;j++) {
    	if (files[i].href.indexOf(staticFiles[j].node.name) > -1) { 
      	if (staticFiles[j].node.publicURL != null)
      		files[i].href = staticFiles[j].node.publicURL; 
   		} 
  	} 
  }
}