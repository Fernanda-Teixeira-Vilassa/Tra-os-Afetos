document.getElementById("btnWhatsApp").addEventListener("click",()=>{
  const nome=document.getElementById("nome").value;
  const tel=document.getElementById("telefone").value;
  const serv=document.getElementById("servico").value;
  const end=document.getElementById("endereco").value;
  const evento=document.getElementById("nomeEvento").value;
  const data=document.getElementById("dataEvento").value;
  const hora=document.getElementById("horarioEvento").value;
  const tema=document.getElementById("tema").value;
  const detalhes=document.getElementById("detalhes").value;

  if(!nome||!tel||!serv){alert("Preencha os campos obrigatórios!");return;}

  const msg=`Olá! Gostaria de solicitar um orçamento:%0A%0A*Nome:* ${nome}%0A*Telefone:* ${tel}%0A*Serviço:* ${serv}%0A*Endereço:* ${end}%0A*Evento:* ${evento}%0A*Data:* ${data}%0A*Horário:* ${hora}%0A*TEMA:* ${tema}%0A*Detalhes:* ${detalhes}`;

  window.open(`https://wa.me/5527998372584?text=${msg}`,"_blank");
});
