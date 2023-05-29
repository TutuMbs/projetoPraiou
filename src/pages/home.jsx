import Menu from "./menu"

import ColorSchemesExample from "../navbar"
import { Navbar } from "react-bootstrap"


function Home(){
    return(
        <div class="Nav">    
       <ColorSchemesExample height={100} width={100}>
       </ColorSchemesExample >
        <div class="HomeFundo">
         
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
      
    <div class="carousel-item active">
        
    <img src={'https://cdn.discordapp.com/attachments/1044250932692647976/1112707497816510524/logotipo_loja_de_biquini_moda_praia_laranja.png'} alt="Workflow" height={400} width={600}     />

        
    
    </div>
    <div class="carousel-item">
    <img src={'https://cdn.discordapp.com/attachments/1044250932692647976/1112712887396470945/Design_sem_nome.png'} alt="Workflow"   height={300} width={800}  />
    </div>
    <div class="carousel-item">
    <img src={'https://cdn.discordapp.com/attachments/1044250932692647976/1112712875618861087/Design_sem_nome_1.png'}  alt="Workflow" height={300} width={800} />
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
      
        <div className="SobreNos">
            <h2>Sobre Nós</h2>
            <p>Somos a Praiou, loja especialista em moda praia e estamos prontos para o atendermos da melhor forma possivel, porque afinal não é porque vamos para a praia que temos que deixar a moda em casa </p>
        </div>
        

        <div className="espacoB1">

        
        <div className="link">
        
        </div>
        </div>

        <div className="espacoB2">

       
        
        
        
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