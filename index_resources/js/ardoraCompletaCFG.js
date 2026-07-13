//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=350; timeIni=350; timeBon=0;
var successes=0; successesMax=3; attempts=0; attemptsMax=1;
var score=0; scoreMax=3; scoreInc=1; scoreDec=1
var typeGame=2;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Muy bien "; messageTime=""; messageError="Debe de practicar"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
var consolidateSuccess=0; var consolidateScore=0;
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var indexTXT=0; var txtC=['<p>El formulario IR-17 se utiliza para declarar las retenciones de impuestos realizadas por las empresas. Si la empresa contrata a un contador independiente y le paga 30,000 pesos por sus honorarios, la tasa de retención aplicable es del  <input aria-label="Item 1" type="text" name="item1" id="item1" class="ardoraInput" > </p><p> </p>','<p>Lo que equivale a un monto retenido de <input aria-label="Item 2" type="text" name="item2" id="item2" class="ardoraInput" >,pesos. </p><p>  </p><p> </p>','<p>Por otro lado, si la empresa realiza un pago por concepto de alquiler de local por 45,000 pesos, la retención correspondiente que se debe reportar es de <input aria-label="Item 3" type="text" name="item3" id="item3" class="ardoraInput" > pesos </p><p>  </p><p> </p>'];
var b=["Mg==","Mw==","MQ==","Mw==","Mg==","NA=="];
var c=[4,4,3,4,3,4];
var answers=["MzAwMA==","MzAwMA==","MTAl","NDUwMA==","MTAl","NDUwMA=="];
var a=["2","1","1","3","1","1"];
var itemCorr=["0","0","0"];
var itemHelp=["","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="aW5kZXg="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tiUD=false;
var fHelp="Verdana, Geneva, sans-serif";
var imaW=["300","300","300","300"];
var imaH=["225","225","225","225"];
var info=["","","",""];
