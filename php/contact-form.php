<?php 

if (isset($_POST['submit'])) {
    
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $persons = $_POST['persons'];
    $number = $_POST['number'];
    $datei = $_POST['datei'];
    $datev = $_POST['datev'];
    $maleta = $_POST['maleta'];
    $lugar = $_POST['lugar'];
    $hospedaje = $_POST['hospedaje'];

    $mailTo = "consultas@agenciadeviajesgodsblessing.site";
    // $mailTo = "luisdejesus200122@gmail.com";

    $headers = "De: Agencia de viajes God's Blessing\n $email";
    $txt = "Nueva Cotizacion de Vuelo.\n $name acaba de hacer una cotizacion de viaje con los siguientes datos:\n\n 
    Nombre:πββοΈ $name\n Correo:π§ $email\n 
    Mensaje:π© $message\n 
    Cantidad de Personas: $persons\n 
    Numero de telefono:π± $number\n 
    Fechas de viaje:πFecha de Ida: $datei - Fecha de Vuelta: $datev\n";

    $txt2 = "Gracias por comunicarse con Agencia de Viajes God's Blessing βοΈ\n
    $name Nos pondremos en contacto con usted a la brevedad posible.\n\n
    $name acabas de hacer una cotizacion de viaje con los siguientes datos:\n\n
    Nombre:πββοΈ $name\n Correo:π§ $email\n 
    Mensaje:π© $message\n 
    Cantidad de Personas: $persons\n 
    Numero de telefono:π± $number\n 
    Fechas de viaje:πFecha de Ida: $datei - Fecha de Vuelta: $datev\n
    Lugar de viaje:πΊοΈ $lugar\n
    Desea Agregar Hospedaje:π¨ $hospedaje\n
    Desea Agregar Maleta:π $maleta\n";
    
    $to = "consultas@agenciadeviajesgodsblessing.site";
    mail(
        $mailTo,
        "Nueva Cotizacion de Vuelo",
        $txt,
        $headers
        
    );
    mail(
        $email,
        "Has Realizado una Cotizacion de Vuelo",
        $txt2,
        $headers
        
    );
    header("Location: ../index.html?mailsend");
}


?>