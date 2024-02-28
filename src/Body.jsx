import trophyImage from './assets/trophyImage.png'
import employesImage from './assets/employes.png'
import pumpsetImage from './assets/pumpset.png'
import './Body.css';

function Body(){
    return(
        <div className='mainBody'>

          <div className='upper'>
               <div className='left'>
                  <img className='trophyImage' src={trophyImage}  alt='Trophy image'/>
               </div>

               <div className='right'> 
                   <h4> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h4>
                  
                   <ul>
                       <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, 
                           as trustworthy products for various projects across the globe to save energy.
                        </li>
                
                           <li>C.R.I. is the highest contributor in the country for the projects 
                             of EESL(Energy Efficiency Services Limited) to replace the old inefficient pumps
                             with 5 Star rated energy efficient smart pumps with IoT enabled control panel. 
                         </li>
                   </ul>

                     <img className='employesImage' src={employesImage}/>
                      <p>Government of India has awarded the <strong>National Energy Conservation Award 2018"</strong>". 
                         Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan,
                         Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
                     </p>
               </div>

           </div>
           
                      <h5>	
                         INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF
                         MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. 
                     </h5>
                  
                  <div className='lower'>
                      <img  className='pumpImage' src={pumpsetImage} alt='pumpset image'/>
                  </div>

                  <h5 className='products'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </h5>
                  <hr style={{borderTop:'2px solid red',margin:'15px'}}/>
                  
        </div>
       
    )
}

export default Body;