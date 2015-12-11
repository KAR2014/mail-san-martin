console.log("Ejecutando..")

/*Mandril-Function*/
function sendMail() {
	/*Messege of entry*/
	console.log("Estoy Dentro...")

	/*Random Number*/
	var day = new Date();
	var order = Math.round(Math.random() * 100)*day.getTime();


	/*Shops Dictionary*/
	var info_stors = {
	    "13 calle Zona Viva": [
	        {
	            "telephone": "2420-9916",
	            "address": "13 Calle y 2ª. Ave. Esquina Z.10, Plaza Rosa.",
	            "schedule": "de Lunes a Martes de 6:00 a 20:30 horas, Miércoles a Viernes de 6:00 a 22:00 horas y Domingos de 7:00 a 19:00 horas.",
	        }
	    ],
	    "9a Calle Zona 14": [
	        {
	            "telephone": "2420-9907",
	            "address": "9 calle 7-10 zona 14 Ciudad de Guatemala.",
	            "schedule": "de 6:00 a 22:00 horas.",
	        }
	    ],
	    "Av. Petapa": [
	        {
	            "telephone": "2420-9930",
	            "address": "Ave Petapa 50-75 zona 12, Local 1, Plaza Canadá.",
	            "schedule": "de 7:00 a 22:00 horas.",
	        }
	    ],
	    "C.C. Aguilar Batres": [
	        {
	            "telephone": "2420-9931",
	            "address": "13 calle 0-35 zona 11 Centro Comercial Aguilar Batres.",
	            "schedule": "de 7:00 a 20:00 horas.",
	        }
	    ],
	    "C.C. Arkadia Shopping": [
	        {
	            "telephone": "2420-9933",
	            "address": "Boulevard Los Próceres 18 calle 26-21, zona 10 Centro Comercial Arkadia Shopping.",
	            "schedule": "de 8:00 a 21:00 horas.",
	        }
	    ],
	    "C.C. Gran Vía": [
	        {
	            "telephone": "2420-9902",
	            "address": "Calz. Roosevelt 28-09 Z.7 Centro Comercial Gran Vía Local 30.",
	            "schedule": "de 7:00 a 20:00 horas.",
	        }
	    ],
	    "C.C. Martí 7": [
	        {
	            "telephone": "2420-9901",
	            "address": "Calle Martì 7-20 Z.2 Local No.8.",
	            "schedule": "de 7:00 a 20:30 horas.",
	        }
	    ],
	    "C.C. Metrocentro": [
	        {
	            "telephone": "2420-9910",
	            "address": "0 Calle 16-20 Zona 4 de Villa Nueva Centro Comercial Metrocentro, Locales: 185-188.",
	            "schedule": "de 7:00 a 9:00 horas.",
	        }
	    ],
	    "C.C. Miraflores": [
	        {
	            "telephone": "2420-9913",
	            "address": "21 Avenida 4-32 Zona 11 Centro Comercial Miraflores locales 2 y 3.",
	            "schedule": "de 7:00 a 22:00 horas.",
	        }
	    ],
	    "C.C. Montúfar": [
	        {
	            "telephone": "2420-9919",
	            "address": "12 Calle 0-93 Zona 9 Centro Comercial Montúfar.",
	            "schedule": "de Lunes a Sábado 7:00 a 20:30 horas y Domingos 8:00 a 20:00 horas.",
	        }
	    ],
	    "C.C. Plaza Maderos": [
	        {
	            "telephone": "2420-9935",
	            "address": "Km 21.7 Carretera a El Salvador, Z.3 de Villa Canales.",
	            "schedule": "de 7:00 a 21:00 horas.",
	        }
	    ],
	    "C.C. Portales": [
	        {
	            "telephone": "2420-9925",
	            "address": "Km 4.5 Carretera al Atlántico zona 17 C.C. Portales.",
	            "schedule": "de 7:00 a 22:00 horas.",
	        }
	    ],
	    "Col. El Maestro, Vista Hermosa": [
	        {
	            "telephone": "2420-9914",
	            "address": "2a. Calle 17-54 zona 15, Colonia El Maestro Local No.2 y 3.",
	            "schedule": "de Lunes a Sábado 6:00 a 20:00 horas y Domingo de 7:00 a 18:00 horas.",
	        }
	    ],
	    "Condado Concepción": [
	        {
	            "telephone": "2420-9905",
	            "address": "Km.15.5 Carr. a El Salvador Condado Concepción.",
	            "schedule": "de Lunes a Miércoles 6:00 a 20:30 horas y Jueves a Sábado 6:00 a 22:00 horas.",
	        }
	    ],
	    "Condado Santa Amelia": [
	        {
	            "telephone": "2420-9908",
	            "address": "Boulevard Centro Médico Militar 12-05 zona 17 Centro Comercial Plaza Santa Amelia, Locales 8 y 9.",
	            "schedule": "de 7:00 a 21:00 horas.",
	        }
	    ],
	    "Escala Carretera a El Salvador": [
	        {
	            "telephone": "2420-9912",
	            "address": "Km. 14.5 Carret. A El Salvador Sta. Catarina Pinula, Puerta Parada.",
	            "schedule": "de Domingo a Miércoles 7:00 a 21:00 horas y Jueves a Sábado 7:00 a 22:00 horas.",
	        }
	    ],
	    "Eskala Roosevelt": [
	        {
	            "telephone": "2420-9923",
	            "address": "Km.13.8 Calzada Roosvelt, Z.3 de Mixco Locales: L-143 y L-144.",
	            "schedule": "de Domingo a Jueves de 8:00 a 21:00 horas y de Viernes a Sábado de 8:00 a 22:00 horas.",
	        }
	    ],
	    "Las Puertas de San Lucas": [
	        {
	            "telephone": "2420-9928",
	            "address": "Km 29.5 Carretera Interamericana San Lucas Sacatepequez Centro Comercial Las Puertas Local C.",
	            "schedule": "de 6:00 a 22:00 horas.",
	        }
	    ],
	    "Minuto Muxbal": [
	        {
	            "telephone": "2420-9927",
	            "address": "Km. 13.5 carretera antigua a El Salvador, Finca Los Tilos zona 4, Sta Catarina Pinula.",
	            "schedule": "de 7:00 a 21:00 horas.",
	        }
	    ],
	    "Pacific Center": [
	        {
	            "telephone": "2420-9917",
	            "address": "Calzada Aguilar Batres 32-00 Zona 11 Centro Comercial Pacific Center.",
	            "schedule": "de Lunes a Sábado 8:00 a 21:00 horas y Domingos 8:00 a 20:00 horas.",
	        }
	    ],
	    "Paseo San Sebastián": [
	        {
	            "telephone": "2420-9920",
	            "address": "Km. 14.1 Carr. A El Salvador Antigua Finca Las Victorias, Aldea Puerta Parada z.8, Sta. Catarina Pinula.",
	            "schedule": "de 7:00 a 22:00 horas.",
	        }
	    ],
	    "Plaza Ferco": [
	        {
	            "telephone": "2420-9903",
	            "address": "20 Calle 12-84 Zona 10 , Locales 4 y 5.",
	            "schedule": "de Lunes a Sábado 6:00 a 20:00 horas y Domingo de 7:00 a 19:00 horas.",
	        }
	    ],
	    "Plaza San Carlos, El Encinal": [
	        {
	            "telephone": "2420-9922",
	            "address": "Calle Los Pinos 18-67 Z.7 Col. San Carlos, Plaza San Carlos El Encinal.",
	            "schedule": "de 7:00 a 20:00 horas.",
	        }
	    ],
	    "Plaza San Cristóbal": [
	        {
	            "telephone": "2420-9911",
	            "address": "Zona 8 de Mixco, Centro Comercial Plaza San Cristóbal Local 132",
	            "schedule": "de 7:00 a 20:30 horas.",
	        }
	    ],
	    "Plaza San Nicolas": [
	        {
	            "telephone": "2420-9918",
	            "address": "41 Ave. 3-10, Z.4 de Mixco Bosques de Sn Nicolás Centro Comercial Plaza San Nicolás, Local 108 y 109.",
	            "schedule": "de 7:30 a 20:30 horas.",
	        }
	    ],
	    "Plaza Subway z.13": [
	        {
	            "telephone": "2420-9924",
	            "address": "Avenida Las Américas 15-00 Z. 13, Plaza Subway, Locales 2 y 3.",
	            "schedule": "de 6:00 a 20:00 horas.",
	        }
	    ],
	    "Plaza Varietá Cayalá": [
	        {
	            "telephone": "2420-9926",
	            "address": "22 calle 03-05 lote 3 z. 16 Boulevard Rafael Landívar Centro Comercial Plaza Varietá local 12.",
	            "schedule": "-",
	        }
	    ],
	    "Pradera Xela": [
	        {
	            "telephone": "2420-9909",
	            "address": "Avenida Las Amèricas 7-04 Zona 3, Quetzaltenango, La Plaza, Pradera Xela.",
	            "schedule": "de 7:00 a 22:00 horas.",
	        }
	    ],
	    "Pradera z.10": [
	        {
	            "telephone": "2420-9904",
	            "address": "Centro Comercial La Pradera z. 10, Locales 4 y 5.",
	            "schedule": "de 7:00 a 22:00 horas.",
	        }
	    ],
	    "San Cristóbal Mix": [
	        {
	            "telephone": "2420-9906",
	            "address": "5a. Avenida 3-05 Sector A-3 zona 8 de Mixco, San Cristóbal Local No.28.",
	            "schedule": "de Domingo a Miércoles 7:00 a 21:00 horas y Jueves a Sábado 7:00 a 22:00 horas.",
	        }
	    ],
	    "Vía Majadas": [
	        {
	            "telephone": "2420-9921",
	            "address": "Parque Comercial Majadas, zona 11.",
	            "schedule": "de Domingo a Miércoles 6:00 a 20:30 horas y Jueves a Sábado 6:00 a 22:00 horas.",
	        }
	    ],
	    "Vista Hermosa I": [
	        {
	            "telephone": "2420-9929",
	            "address": "21 av 2-04 z.15 Vista Hermosa I",
	            "schedule": "de 6:00 a 22:00 horas.",
	        }
	    ],
	    "Xela Minerva": [
	        {
	            "telephone": "2420-9932",
	            "address": "23 ave 4-14 z.3 Quetzaltenango.",
	            "schedule": "de 7:00 a 22:00 horas.",
	        }
	    ]
	};

	// key genera al momento de registrar tu aoo en Mandrill esta no la copies registra tu app y ya te la dan 
	var apiKey = '2ZMRx5Wr9KOKm3hCKTfc4Q';
	//OBJETO MADRIL QUE RECIBE DE PARAMETRO TU KEY
	var m = new mandrill.Mandrill(apiKey);
	// campos del formulario 
	var from = document.getElementById("fromField").value;
	var to = document.getElementById("toField").value;
	var email = document.getElementById("emailField").value;
	var occasion = document.getElementById("occasionField").value;
	var messege = document.getElementById("messegeField").value;
	var store = document.getElementById("storeField");
	var selected = store.options[store.selectedIndex].text;
	var date = document.getElementById("dateField").value;

	/*variables of the dictionary values*/
	var address = info_stors[selected][0]["address"];
	var telephone = info_stors[selected][0]["telephone"];
	var schedule = info_stors[selected][0]["schedule"];

	document.getElementById("fromField").value = "";
	document.getElementById("toField").value = "";
	document.getElementById("emailField").value = "";
	document.getElementById("occasionField").value = "";
	document.getElementById("messegeField").value = "";
	document.getElementById("storeField").value = "";
	document.getElementById("dateField").value = "";

	/*Change the value of Occasion variable*/
	if (occasion === "Birthday"){
		occasion = "Cumpleaños";
	}
	else if(occasion === "Aniversary"){
		occasion = "Aniversario";
	}
	else if(occasion === "Holiday"){
		occasion = "Fiesta";
	}
	else if(occasion === "Special Occasion"){
		occasion = "Ocasión Especial";
	}
	else if (occasion === "Other"){
		occasion = "";
	}
	/*Content of message variable*/
	var messageBody = '<div id=":n1" class="ii gt m1518ccda66c7593b adP adO"><div id=":n0" class="a3s" style="overflow: hidden;"><u></u>'+

    '<div style="min-height:100%;margin:0;padding:0;width:100%;background-color:#fafafa">'+
        '<center>'+
            '<table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" style="border-collapse:collapse;height:100%;margin:0;padding:0;width:100%;background-color:#fafafa">'+
                '<tbody><tr>'+
                    '<td align="center" valign="top" style="height:100%;margin:0;padding:10px;width:100%;border-top:0">'+
                        
                        '<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;border:0;max-width:600px!important">'+
                            '<tbody><tr>'+
                                '<td valign="top" style="background-color:#fafafa;border-top:0;border-bottom:0;padding-top:9px;padding-bottom:9px"></td>'+
                            '</tr>'+
                            '<tr>'+
                                '<td valign="top" style="background-color:#ffffff;border-top:0;border-bottom:0;padding-top:9px;padding-bottom:0"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;border-collapse:collapse">'+
    '<tbody>'+
            '<tr>'+
                '<td valign="top" style="padding:9px">'+
                    '<table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" style="min-width:100%;border-collapse:collapse">'+
                        '<tbody><tr>'+
                            '<td valign="top" style="padding-right:9px;padding-left:9px;padding-top:0;padding-bottom:0;text-align:center">'+
                                
                                    
                                        '<img align="center" alt="" src="https://ci4.googleusercontent.com/proxy/IR9Lxd3SNX0BfwK8F2jC-Rg90FSb0Lc2o6ivb97Id2GhP9yUcK6rbfzI2XfCuLN5y5ZFSQRAMd8P4yu_vxUadMx9DwXTO83V_cKht9cg2FvHcRPHgO0ugGM15vh16tzVSWL-5DE7FHwGB4a6hu1pNPmQ5cKPQvqfoZGn5JI=s0-d-e1-ft#https://gallery.mailchimp.com/fa883edadfe16eec3ba85eaa8/images/077bcc67-8580-4f00-9521-9a22e24d029c.png" width="564" style="max-width:588px;padding-bottom:0;display:inline!important;vertical-align:bottom;border:0;min-height:auto;outline:none;text-decoration:none" class="CToWUd">'+
                                    
                                
                            '</td>'+
                        '</tr>'+
                    '</tbody></table>'+
                '</td>'+
            '</tr>'+
    '</tbody>'+
'</table></td>'+
                            '</tr>'+
                            '<tr>'+
                                '<td valign="top" style="background-color:#ffffff;border-top:0;border-bottom:2px solid #eaeaea;padding-top:0;padding-bottom:9px"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;border-collapse:collapse">'+
    '<tbody>'+
        '<tr>'+
            '<td valign="top">'+
                
                '<table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;border-collapse:collapse">'+
                    '<tbody><tr>'+
                        
                        '<td valign="top" style="padding:9px 18px;text-align:justify;word-break:break-word;color:#202020;font-family:Helvetica;font-size:16px;line-height:150%">'+
                        
                            '<h1 style="display:block;margin:0;padding:0;color:#202020;font-family:Helvetica;font-size:26px;font-style:normal;font-weight:bold;line-height:125%;letter-spacing:normal;text-align:left"><br>'+
'<span style="font-family:times new roman,times,baskerville,georgia,serif"><span style="font-size:32px"><span style="color:#696969"><em>Hola '+ to +'!</em></span></span></span></h1>'+

'<p style="text-align:justify;margin:10px 0;padding:0;color:#202020;font-family:Helvetica;font-size:16px;line-height:150%"><span style="color:#000000"><span style="font-family:arial,sans-serif;font-size:14.4px;line-height:normal"><span style="font-size:16px"><span style="font-family:times new roman,times,baskerville,georgia,serif">Te damos un cordial saludo de parte de Panadería San Martín.&nbsp;Para nosotros es un gusto notificarle que</font><span style="line-height:normal"> </span></span></span></span></span><span style="color:#696969"><span style="font-family:times new roman,times,baskerville,georgia,serif"><span style="font-size:18px"><span style="font-size:19px"><span style="line-height:normal"><strong><em>'+ from +'</em></strong></span></span></span></span></span><span style="color:#000000"><span style="font-family:times new roman,times,baskerville,georgia,serif"><span style="font-size:18px"><span style="line-height:normal">&nbsp;<span style="font-size:16px">le manda un saludo por su </span></span></span></span></span><span style="color:#696969"><span style="font-family:times new roman,times,baskerville,georgia,serif"><span style="font-size:18px"><strong><em><span style="line-height:normal"><span style="font-size:19px">'+ occasion +'</span></span></em></strong></span></span></span><span style="color:#000000"><span style="font-family:times new roman,times,baskerville,georgia,serif"><span style="font-size:18px"><span style="font-size:16px"><span style="line-height:normal">, tambien desea transmitirle el siguiente mensaje:</span></span></span></span></span><br>'+
'<br>'+
'<span style="font-size:21px"><em><span style="color:#808080"><span style="font-family:arial,sans-serif;line-height:normal"><span style="font-family:georgia,times,times new roman,serif"><span style="font-family:times new roman,times,baskerville,georgia,serif">" '+ messege +' ".</span></span></span></span></em></span><br></p>'+
'<p style="text-align:justify;margin:10px 0;padding:0;color:#202020;font-family:Helvetica;font-size:16px;line-height:150%"><span style="color:#000000"><span style="font-family:arial,sans-serif;font-size:14.4px;line-height:normal"><span style="font-size:16px"><span style="font-family:times new roman,times,baskerville,georgia,serif">Y te ha mandado un obsequio a través de nuestras tiendas online, puedes pasar a recogerlo el '+ date +' en nuestra tienda '+ selected +'. Ubicada en: '+ address +'.</span>&nbsp;</span></span><span style="font-size:16px"><span style="font-family:times new roman,times,baskerville,georgia,serif"><span style="line-height:normal">Nuestro horario de atención es </span>'+ schedule +'.</span></span></span><br>'+
'<br>'+
'<span style="color:#696969"><span style="font-family:arial,sans-serif;font-size:14.4px;line-height:normal"><span style="font-size:18px"><span style="font-family:times new roman,times,baskerville,georgia,serif"><strong><em>Tu código de orden es: </em></strong></span></span></span><br>'+
'<span style="font-family:arial,sans-serif;font-size:14.4px;line-height:normal"><span style="font-size:18px"><span style="font-family:times new roman,times,baskerville,georgia,serif"><strong><em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+ order +'.</em></strong></span></span></span></span><br>'+
'<br>'+
'<span style="color:#000000"><span style="font-family:arial,sans-serif;font-size:14.4px;line-height:normal"><span style="font-size:16px"><span style="font-family:times new roman,times,baskerville,georgia,serif">Si tienes alguna duda por favor comunícate al número '+ telephone +' para nosotros será un gusto atenderte.</span></span></span></span></p>'+

                        '</td>'+
                    '</tr>'+
                '</tbody></table>'+
                
            '</td>'+
        '</tr>'+
    '</tbody>'+
'</table></td>'+
                            '</tr>'+
                            '<tr>'+
                                '<td valign="top" style="background-color:#fafafa;border-top:0;border-bottom:0;padding-top:9px;padding-bottom:9px"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;border-collapse:collapse">'+
    '<tbody>'+
        '<tr>'+
            '<td align="center" valign="top" style="padding:9px">'+
                '<table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;border-collapse:collapse">'+
    '<tbody><tr>'+
        '<td align="center" style="padding-left:9px;padding-right:9px">'+
            '<table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;border-collapse:collapse">'+
                '<tbody><tr>'+
                    '<td align="center" valign="top" style="padding-top:9px;padding-right:9px;padding-left:9px">'+
                        '<table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse">'+
                            '<tbody><tr>'+
                                '<td align="center" valign="top">'+

                                            '<table align="left" border="0" cellpadding="0" cellspacing="0" style="display:inline;border-collapse:collapse">'+
                                                '<tbody><tr>'+
                                                    '<td valign="top" style="padding-right:10px;padding-bottom:9px">'+
                                                        '<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse">'+
                                                            '<tbody><tr>'+
                                                                '<td align="left" valign="middle" style="padding-top:5px;padding-right:10px;padding-bottom:5px;padding-left:9px">'+
                                                                    '<table align="left" border="0" cellpadding="0" cellspacing="0" width="" style="border-collapse:collapse">'+
                                                                        '<tbody><tr>'+
                                                                            
                                                                                '<td align="center" valign="middle" width="24">'+
                                                                                    '<a href="https://twitter.com/SanMartin_gt" target="_blank"><img src="https://ci5.googleusercontent.com/proxy/-SgR5D3-bPp1julTBdSE5457JLji6LNVwzZc_IzhWv_glCJmaIYrbdmJKf7oglfkeHHhMOEnTfkjdEFyTdW4nZ7I9uQz-CPztcyuJwCec3wpBJjvTFOFzAkhm_xj1bBX=s0-d-e1-ft#http://cdn-images.mailchimp.com/icons/social-block-v2/color-twitter-48.png" style="display:block;border:0;min-height:auto;outline:none;text-decoration:none" height="24" width="24" class="CToWUd"></a>'+
                                                                                '</td>'+
                                                                        '</tr>'+
                                                                    '</tbody></table>'+
                                                                '</td>'+
                                                            '</tr>'+
                                                        '</tbody></table>'+
                                                    '</td>'+
                                                '</tr>'+
                                            '</tbody></table>'+

                                            '<table align="left" border="0" cellpadding="0" cellspacing="0" style="display:inline;border-collapse:collapse">'+
                                                '<tbody><tr>'+
                                                    '<td valign="top" style="padding-right:10px;padding-bottom:9px">'+
                                                        '<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse">'+
                                                            '<tbody><tr>'+
                                                                '<td align="left" valign="middle" style="padding-top:5px;padding-right:10px;padding-bottom:5px;padding-left:9px">'+
                                                                    '<table align="left" border="0" cellpadding="0" cellspacing="0" width="" style="border-collapse:collapse">'+
                                                                        '<tbody><tr>'+
                                                                            
                                                                                '<td align="center" valign="middle" width="24">'+
                                                                                    '<a href="https://www.facebook.com/sanmartingt/" target="_blank"><img src="https://ci4.googleusercontent.com/proxy/X9MqCnSCvb5f1PshSVntsSqqm9dNg_ie7HbGsGn_ezsyhoBi1KL0re94Q0I4KPY2mGVpcW3dKRZwm_0bekmhL_IFCF7C82_1xXG2ZkrezDWf6kPh_gik805bm8zRcbMSMw=s0-d-e1-ft#http://cdn-images.mailchimp.com/icons/social-block-v2/color-facebook-48.png" style="display:block;border:0;min-height:auto;outline:none;text-decoration:none" height="24" width="24" class="CToWUd"></a>'+
                                                                                '</td>'+
                                                                        '</tr>'+
                                                                    '</tbody></table>'+
                                                                '</td>'+
                                                            '</tr>'+
                                                        '</tbody></table>'+
                                                    '</td>'+
                                                '</tr>'+
                                            '</tbody></table>'+

                                            '<table align="left" border="0" cellpadding="0" cellspacing="0" style="display:inline;border-collapse:collapse">'+
                                                '<tbody><tr>'+
                                                    '<td valign="top" style="padding-right:10px;padding-bottom:9px">'+
                                                        '<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse">'+
                                                            '<tbody><tr>'+
                                                                '<td align="left" valign="middle" style="padding-top:5px;padding-right:10px;padding-bottom:5px;padding-left:9px">'+
                                                                    '<table align="left" border="0" cellpadding="0" cellspacing="0" width="" style="border-collapse:collapse">'+
                                                                        '<tbody><tr>'+
                                                                            
                                                                                '<td align="center" valign="middle" width="24">'+
                                                                                    '<a href="https://www.instagram.com/sanmartingt/" target="_blank"><img src="https://ci5.googleusercontent.com/proxy/XArhLTsumaWkFSoA_v6pUqhA8kCDaJeTqQJ4vlCt7_0q7vURgo5DiyB29kO2klRnG49vBOqKa_PI0OAPYTaSTo1V2r0Z7hyWsptnoDC27dhgg7z2Ilwi5brdECFYWHCpXco=s0-d-e1-ft#http://cdn-images.mailchimp.com/icons/social-block-v2/color-instagram-48.png" style="display:block;border:0;min-height:auto;outline:none;text-decoration:none" height="24" width="24" class="CToWUd"></a>'+
                                                                                '</td>'+
                                                                            
                                                                            
                                                                        '</tr>'+
                                                                    '</tbody></table>'+
                                                                '</td>'+
                                                            '</tr>'+
                                                        '</tbody></table>'+
                                                    '</td>'+
                                                '</tr>'+
                                            '</tbody></table>'+

                                            '<table align="left" border="0" cellpadding="0" cellspacing="0" style="display:inline;border-collapse:collapse">'+
                                                '<tbody><tr>'+
                                                    '<td valign="top" style="padding-right:0;padding-bottom:9px">'+
                                                        '<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse">'+
                                                            '<tbody><tr>'+
                                                                '<td align="left" valign="middle" style="padding-top:5px;padding-right:10px;padding-bottom:5px;padding-left:9px">'+
                                                                    '<table align="left" border="0" cellpadding="0" cellspacing="0" width="" style="border-collapse:collapse">'+
                                                                        '<tbody><tr>'+
                                                                            
                                                                                '<td align="center" valign="middle" width="24">'+
                                                                                    '<a href="https://www.youtube.com/channel/UCKApNayq3zCDueYsyrSPXVQ/feed" target="_blank"><img src="https://ci4.googleusercontent.com/proxy/fceNLQBbIHvvIqjMEjqN2EN3ViPL0rpf4ISjEd2CsSRgQNhrGh_Bx3SzJ8nv2MdQUKRSj6Vby7y3YRa1TCXruaAoEyAtaFMUpvFYIyBh_ufCRQf49x-FiP_vN3zVHBFG=s0-d-e1-ft#http://cdn-images.mailchimp.com/icons/social-block-v2/color-youtube-48.png" style="display:block;border:0;min-height:auto;outline:none;text-decoration:none" height="24" width="24" class="CToWUd"></a>'+
                                                                                '</td>'+
                                                                            
                                                                            
                                                                        '</tr>'+
                                                                    '</tbody></table>'+
                                                                '</td>'+
                                                            '</tr>'+
                                                        '</tbody></table>'+
                                                    '</td>'+
                                                '</tr>'+
                                            '</tbody></table>'+

                                '</td>'+
                            '</tr>'+
                        '</tbody></table>'+
                    '</td>'+
                '</tr>'+
            '</tbody></table>'+
        '</td>'+
    '</tr>'+
'</tbody></table>'+

            '</td>'+
        '</tr>'+
    '</tbody>'+
'</table><table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;border-collapse:collapse;table-layout:fixed!important">'+
    '<tbody>'+
        '<tr>'+
            '<td style="min-width:100%;padding:10px 18px 25px">'+
                '<table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;border-top-width:2px;border-top-style:solid;border-top-color:#eeeeee;border-collapse:collapse">'+
                    '<tbody><tr>'+
                        '<td>'+
                            '<span></span>'+
                        '</td>'+
                    '</tr>'+
                '</tbody></table>'+

            '</td>'+
        '</tr>'+
    '</tbody>'+
'</table><table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;border-collapse:collapse">'+
    '<tbody>'+
        '<tr>'+
            '<td valign="top">'+
                
                '<table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;border-collapse:collapse">'+
                    '<tbody>'+
                        '<tr>'+
                            '<td valign="top" style="padding-top:9px;padding-right:18px;padding-bottom:9px;padding-left:18px;word-break:break-word;color:#656565;font-family:Helvetica;font-size:12px;line-height:150%;text-align:center"><em>Copyright © 2015 San Martín, Todos los derechos reservados.</em><br>No respondas este e-mail.<br><br>'+
                            '<strong>Nuestra dirección de e-mail es:&nbsp;</strong><br>'+
                            '<a href="mailto:info@san-martin.com" target="_blank">info@san-martin.com</a><br><br>Visita nuestra página:&nbsp;<a href="http://shop-san-martin.myshopify.com/" target="_blank">http://shop-san-martin.<wbr>myshopify.com/</a><br>'+
                            '</td>'+
                        '</tr>'+
                    '</tbody>'+
                '</table>'+
            '</td>'+
        '</tr>'+
    '</tbody>'+
'</table></td>'+
                            '</tr>'+
                        '</tbody></table>'+


                    '</td>'+
                '</tr>'+
            '</tbody></table>'+
        '</center><div class="yj6qo"></div><div class="adL">'+
    '</div></div><div class="adL">'+

'</div></div></div>';

	/*Json donde  se guardan los   parametros a enviar donde : from_email es el correo que es el va a parecer q envio el mail,
	to es a quien se lo vas a enviar ,subject es el titulo del correo y en text mandas todos los datos de tus campos*/
	var params = {
		"message": {
			"from_email":"kherrera16@gmail.com",
			"to":[{"email":email}],
			"subject": "Ordering Information",
			"html": messageBody
		}
	};

	/* Esta es la parte donde envias correos usando el metodo send del objeto mandril 
		aca en este caso es m 
	*/
	m.messages.send(params, function(res) {
		console.log(JSON.stringify(res));
	}, function(err) {
		console.log(JSON.stringify(err));
	});
		console.log("fin ejecucion");
		alert("Send Messege");
};
