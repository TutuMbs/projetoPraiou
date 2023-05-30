import Menu from "./menu"
import "../App.css"
import ColorSchemesExample from "../navbar"
import Contato from "../contato"


function Login(){
    return <div className="contato">
      <ColorSchemesExample>
      </ColorSchemesExample>
      
    <header className="header">
    <img src={'https://cdn.discordapp.com/attachments/1044250932692647976/1112707497816510524/logotipo_loja_de_biquini_moda_praia_laranja.png'} alt="Workflow" />
      <h1>Contato PRAIOU </h1>
    </header>
    <div className="con">
    <Contato>
    </Contato>
    </div>
    <div className="esp">
    <p>.</p>
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
}
export default Login