function Paragrafo7(){
    
    const lista=['Dropbox','Tesla','Airbnb','Netflix',
        'Buscapé','Hotmart','iFood','Reddit','BBC','Cloudfare, entre outros.']
    const listaEmp = lista.map(
        (e)=>
        <li>{e}</li>
    )

    return(

        <><><div>
            <h1>Casos de Uso</h1>
            <p>Seguindo o exemplo do Facebook, seu criador, o React é utilizado por outras redes do grupo, como Instagram e WhatsApp.
                Demais sites e empresas que possuem suas interfaces digitais construídas com React.JS são:</p>
        </div>
            <strong><ul>{listaEmp}</ul></strong></>
            <h1>VOCÊ SAIU DA MATRIX !</h1>
            <center><img src="https://mysteryplanet.com.ar/site/wp-content/uploads/2016/04/sim-universe2.jpg"></img></center></>
    )
}

export default Paragrafo7