import './FlowerParts.css' ;

function FlowerParts({ flowerGrowth }) {
  return (
    <div>
        <div className='container'>
            <div className='sun'>
                <div className='sunrays'></div>
                <div className='circle'></div>
            </div>
            {/* SUN CLOSING DIV*/}

            <div className='shadow'></div>
            <div className='pot'>
                <div className='seed'></div>  
            </div>
            {/* POT CLOSING DIV */}

            <div className='water-jar'></div>
            <div className='water'></div>
            <div className='flower'>
                <div className='stem'></div>
                <div className='leaf'></div>
                <div class="petal petal-1"></div>
		        <div class="petal petal-2"></div>
		        <div class="petal petal-3"></div>
		        <div class="petal petal-4"></div>
		        <div class="petal petal-5"></div>
		        <div class="petal petal-6"></div>
		         <div className='dot'></div>
            </div>
            {/* FLOWER CLOSING DIV */}
        </div>
        {/* CONTAINER CLOSING DIV */}
    </div>
  )
}

export default FlowerParts