function pustoTu(pole){
    if (pole.length == 0){
        return true;
}
    else{
        return false;
    }
}

function weryfikacja()
{
    var formularz = document.forms["user_data"]
    var elementy = formularz.elements
    for (i= 0; i < elementy.length; i++)
    {
        if (elementy[i].name == "email")
        {
            if (poprawnyAdres(elementy[i].value))
            poprawnyAdres(elementy[i].value)
        }
        walidujNapis(elementy[i].value, "Wypełnij pole: " + elementy[i].name)
    }
}

function bialeZnaki(string){
    return string.trim().length===0;
}

function walidujNapis (ciag, komunikat)
{   

    while (true)
    {
        if (pustoTu(ciag))
        {
                alert(komunikat);
                return false;
        }
        else
        {
            if (bialeZnaki(ciag))
                {
                    alert(komunikat);
                    return false;
                }
        }
    }
}

function poprawnyAdres(adres)
{
     let email_form = /[a-zA-Z_0-9\.]+@[a-zAZ_0-9\.]+\.[a-zA-Z][a-zA-Z]+/;
     if (email_form.test(adres))
        return true;
     else
     {
        alert("Adrese-mail jest niepoprawny");
        return false;
     }
}