import './Footer.css'
import facebook from './assets/facebookLogo.png'
import telephone from './assets/telephoneLogo.png'
import web from './assets/webLogo.png'


function Footer(){
    const text = "CHEMICALS & PROCESS| POWER| WATER & WASTE WATER| OILS & GAS | PHARMA| SUGARS & DISTILLERIES | PAPER & PULP| MARINE & DEFENCE| METAL & MINING | FOOD & BEVERAGE | PETROCHEMICAL & REFINERIES | SOLAR | BUILDING | HVAC | FIRE FIGHTING| AGRICULTURE & RESIDENTIAL";
    const parts = text.split('|');

    function handleClickFacebook(){
        window.open('https://www.facebook.com/cripumps','_blank')
    }
     function handleClickWeb(){
        window.open('https://www.crigroups.com/','_blank')
     }
    return(
    <div >
    <h4 style={{textAlign:'center'}}><strong>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</strong></h4>
       <p style={{margin:'10px', paddingBottom:'10px',textAlign:'center'}}>
            {parts.map((part, index) => (
            <>
              {index > 0 && <span style={{ color: 'red' }}>|</span>}
             <span> {part}</span> 
          </>
           ))}
        </p>
       <div className='details'>
               <div className='telephone'>
                 <img src={telephone} alt="telephone logo"/>
                  <span>Toll free</span> <span style={{fontWeight:'bold',color:'white'}}>1800 200 1234</span>
               </div>
              
              <div className='facebook'>
                 <img onClick={handleClickFacebook} src={facebook} alt="facebook logo"/> <span style={{ color:'white',cursor:'pointer'}} onClick={handleClickFacebook}>www.facebook.com/cripumps</span>
                 
              </div>
              <div className='web'>
              
                 <img onClick={handleClickWeb} src={web} alt="web logo"/> <span onClick={handleClickWeb} style={{ cursor:'pointer',color:'white'}}>https://www.crigroups.com/</span>
                 
              </div>
           
       </div>

     </div>
  
    )
}

export default Footer;