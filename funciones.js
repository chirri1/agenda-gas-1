const HOJA = SpreadsheetApp.openById('1rWa_QRZAFIU3sgZA4uHGEHT154XoV0kmGlKadtvTrO0').getActiveSheet();

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

function obtenerContactos()
{
    return HOJA.getDataRange().getValues();
   
}

function insertarContactos(nombre, correo)
{
   HOJA.appendRow([nombre,correo]);
}