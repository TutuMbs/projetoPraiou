import Menu from "./menu"

import ColorSchemesExample from "../navbar"
import { Navbar } from "react-bootstrap"
import BasicExample from "../../card"
import BasicExample2 from "../../card2"
import BasicExample3 from "../../card3"


function Home(){
    return(
        <div class="Nav">    
       <ColorSchemesExample height={100} width={100}>
       </ColorSchemesExample >
        <div class="HomeFundo">
         
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
      
    <div class="carousel-item active">
        
    <img src={'https://cdn.discordapp.com/attachments/1044250932692647976/1113081744237809777/Banner_Mercado_Shops_Divulgacao_de_Loja_Moda_Praia_Moderno_Verde_Claro.png'} alt="Workflow" height={500} width={1250}     />

        
    
    </div>
    <div class="carousel-item">
    <img src={'https://cdn.discordapp.com/attachments/1044250932692647976/1112710568374181999/praia_-_preocupacoes.png'} alt="Workflow"   height={500} width={1250}  />
    </div>
    <div class="carousel-item">
    <img src={'https://cdn.discordapp.com/attachments/1044250932692647976/1112710762369142875/Banner_Mercado_Shops_Divulgacao_de_Loja_Moda_Praia_Moderno_Verde_Claro.png'}  alt="Workflow" height={500} width={1250} />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      
        <div className="espacoB1">
        <BasicExample></BasicExample>  
        <BasicExample2></BasicExample2>  
        <BasicExample3></BasicExample3>  
        
       
        </div>

      

        <div className="Rodape">
        <footer>
         <h5 class="T1">Contato</h5>  
         <p>11 99999-9999</p>
         <h5 className="T2">Redes sociais</h5> 
         <p>Instagram: @PraiouModaPraia</p>    
        </footer> 
        </div>
      
        </div>

        
        </div>
    )
}
export default Home