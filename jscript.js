
document.writeln("<script type='text/javascript' src='http://www.dukelearntoprogram.com/course1/common/js/image/SimpleImage.js'></script>");
var image,bgimage;

function upload(){
  var img_cs = document.getElementById("c1");
  var input = document.getElementById("fore_image");
  image = new SimpleImage(input);
  image.drawTo(img_cs)
  
}

function bgupload(){
  var img_cs = document.getElementById("c2");
  var input = document.getElementById("back_image");
  bgimage = new SimpleImage(input);
  bgimage.drawTo(img_cs)
  var id = document.getElementById("bt");
  id.className="click";
  var i = document.getElementById("btd");
  i.className="click";
}

function change(){
 
  var imgcav=document.getElementById("c2");
		var output = new SimpleImage(image.getWidth(),image.getHeight());

for(var pixel of image.values()){
		
		if(pixel.getGreen()>pixel.getRed() + pixel.getBlue()){
			var x = pixel.getX();
			var y = pixel.getY();
			var bgpixel= bgimage.getPixel(x,y);
			output.setPixel(x,y,bgpixel);
			}
		else{
			output.setPixel(pixel.getX(),pixel.getY(),pixel);
			
			}
		}
       output.drawTo(imgcav);
}

function download(){
  
 var canvas = document.getElementById( 'c2');  

 // get canvas data  
    var image = canvas.toDataURL();  
  
    // create temporary link  
    var tmpLink = document.createElement( 'a');  
    tmpLink.download = 'im'; // set the name of the download file 
    tmpLink.href = image;  
  
    // temporarily add link to body and initiate the download  
    document.body.appendChild( tmpLink );  
    tmpLink.click();  
    document.body.removeChild( tmpLink )
}
