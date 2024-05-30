function doGet()
{
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google Apps Script');
}

function obtenerDatosHTML(nombre)
{
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos()
{
    let hoja = SpreadsheetApp.openById('1rWa_QRZAFIU3sgZA4uHGEHT154XoV0kmGlKadtvTrO0').getActiveSheet();
    let datos = hoja.getDataRange().getValues();
    return datos;
}