function bounceOff(sp,spp)
{

  if ((sp.x-spp.x)<=(sp.width+spp.width)/2 && (spp.x-sp.x)<=(sp.width+spp.width)/2 && 
  (sp.y-spp.y)<=(sp.height+spp.height)/2 &&(spp.y-sp.y)<=(spp.height+sp.height)/2){
    
    spp.velocityX=-spp.velocityX
    sp.velocityX=-sp.velocityX
    
  
  }
 
  



}
