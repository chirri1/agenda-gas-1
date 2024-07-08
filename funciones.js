const HOJA = SpreadsheetApp.openById('1rWa_QRZAFIU3sgZA4uHGEHT154XoV0kmGlKadtvTrO0').getActiveSheet();
const CARPETA = DriveApp.getFolderById('1nuObTYtuwO48tTY7Cgm17yNxDPshBQVI');
const CABECERA_URL_IMAGEN_DRIVE = 'https://drive.google.com/file/d/18-Jk-jK1-Uh5';

function doGet()
{
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google Apps Script');
}

function doPost(datos)
{
return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google Apps Script');
}

function obtenerDatosHTML(nombre)
{
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerDatos()
{
    return HOJA.getDataRange().getValues();
}

function insertarContacto(contacto, imagen)
{
    if(imagen) contacto.imagen = guardarImagen(imagen);
   HOJA.appendRow([contacto.nombre, contacto.apellidos, contacto.correo, contacto.telf, contacto.imagen]);
}

function modificarContacto(contacto, imagen)
{
    if(imagen) contacto.imagen = guardarImagen(imagen);
    let celdas = HOJA.getRange('A'+contacto.fila+':E'+contacto.fila);
    celdas.setValues([[contacto.nombre, contacto.apellidos, contacto.correo, contacto.telf, contacto.imagen]]);
}

function guardarImagen(imagen)
{
    let blob = Utilities.newBlob(imagen.datos, imagen.tipo, imagen.nombre);
    let archivo = CARPETA.createFile(blob);
    return CABECERA_URL_IMAGEN_DRIVE+archivo.getId();
}

function borrarContacto(numFila)
{
    HOJA.deleteRow(numFila);
}

function importarContactos()
{
    let url = 'https://randomuser.me/api/?results=5&inc=,name,email,phone,picture';
    let respuesta = UrlFetchApp.fetch(url).getContentText();
    let datos = JSON.parse(respuesta);

    datos.results.forEach(insertarContactoJSON);
    
}
function insertarContactoJSON(contacto)
{
  HOJA.appendRow([contacto.name.first, contacto.name.last, contacto.email, contacto.phone, contacto.picture.large]);

}





