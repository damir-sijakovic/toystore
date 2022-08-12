
const Test = () => {
  
  var w = window.innerWidth;
  var h = window.innerHeight; 
  
  var path = process.env.PUBLIC_URL;
  var image = "/img/static/images/image.png";

  console.log('OKOK ', process.env);

  return (	
	<div>	
		<img src='/assets/img/01.jpg' />
	</div>	
  );

  
};

export default Test;
