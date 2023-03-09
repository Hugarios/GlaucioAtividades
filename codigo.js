var count = nMulheres = alHomens = nHomens = 0;
var alts = [];

function setTitle()
{
    document.querySelector('#title').innerHTML = 'Informe a altura e sexo da ' + (count) + '° pessoa';
}

function clearForm()
{
    if(!document.querySelector('input[name="sex"]:checked'))
        document.querySelector('input[name="sex"]').checked = false;
    else 
        document.querySelector('input[name="sex"]:checked').checked = false;
    document.querySelector('#height').value = '';
}


function getForm()
{
    if(count == 15)
    {
        alert("Limite de pessoas atingido.\nMostrando resultados:\nQuantidade de homens: " + nHomens +  
        "\nNúmero de mulheres: " + nMulheres + "\nMédia da altura dos homens: " + parseFloat(alHomens/nHomens) + "\nMaior altura: " + Math.max(...alts)
        + "\nMenor altura: " + Math.min(...alts));
        return false;
    }

    var sex = document.querySelector('input[name="sex"]:checked').value;
    var altura = document.querySelector('#altura').value;
    altura = parseFloat(altura);
    hgs.push(altura)

    if(sex == 'M')
    {
        alHomens += altura;
        nHomens++;       
    }
    else if(sex == 'F') nMulheres++;

    count++;
    clearForm();
}
