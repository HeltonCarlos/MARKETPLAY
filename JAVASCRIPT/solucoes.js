var solucao = [
    {
     funcao:"Consultoria",
     resulteone:"Planejamento de marketing",
     resultetwo:"Branding",
     resultadothree:"Pesquisas de mercado"
    },
    {
     funcao:"Tecnologia e Dados",
     resulteone:"Site Institucional",
     resultetwo:"Site E-commerce",
     resultadothree:"Landing Pages"
    },
    {
     funcao:"Treinamentos",
     resulteone:"Google Marketing",
     resultetwo:"E-mail Marketing",
     resultadothree:"Marketing Digital"
    },
    {
     funcao:"Design e Criação",
     resulteone:"Identidade visual",
     resultetwo:"Criação de campanhas",
     resultadothree:"Criação gráfica"
    },
    {
     funcao:"Marketing Digital",
     resulteone:"Mídia performance",
     resultetwo:"SEO",
     resultadothree:"Inbound Marketing"
    },
    {
     funcao:"Redes Social",
     resulteone:"E-mail marketing",
     resultetwo:"Facebook Ads",
     resultadothree:"Aplicativos"
    },
 ]
 solucoes=()=>{
    var boxv = document.querySelector(".box");
    solucao.map((val)=>{
        boxv.innerHTML+=`
        <div class="box-one">
        <h4>`+val.funcao+`</h4>
        <p>`+val.resulteone+`</p>
        <p>`+val.resultetwo+`</p>
        <p>`+val.resultadothree+`</p>
        <div class="btn-boxes">
        <a href="#">VER MAIS <img src="IMAGEM/arrow-alt-circle-right.png" alt="seta-2"></a></div>
        </div>`
    });
 }
  solucoes();