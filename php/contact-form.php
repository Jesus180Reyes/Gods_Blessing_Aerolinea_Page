<?php 

if (isset($_POST['submit'])) {
    
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $persons = $_POST['persons'];
    $number = $_POST['number'];
    $date = $_POST['date'];

    $mailTo = "consultas@agenciadeviajesgodsblessing.site";

    $headers = "De: Agencia de viajes God's Blessing\n $email";
    $txt = "Nueva Cotizacion de Vuelo.\n $name acaba de hacer una cotizacion de viaje con los siguientes datos:\n\n Nombre:🙍‍♂️ $name\n Correo:📧 $email\n Mensaje:📩 $message\n Cantidad de Personas: $persons\n Numero de telefono:📱 $number\n Fecha de viaje:📅 $date";
    $to = "consultas@agenciadeviajesgodsblessing.site";
    mail(
        $mailTo,
        "Nueva Cotizacion de Vuelo",
        $txt,
        $headers
        
    );
    header("Location: index.html");
}
?>