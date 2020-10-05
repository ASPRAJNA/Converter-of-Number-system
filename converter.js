function demo(){var n=document.getElementById("s").value;
if(n==0){
    document.getElementById("cond").innerHTML="*Please Enter Number";
    }
if(n==1){
document.getElementById("cond").innerHTML="Binary numbers should be 0 and 1.Don't enter special characters";
}
if(n==2){
document.getElementById("cond").innerHTML="Octal numbers should be 0 to 7.Don't enter special characters";
}
if(n==3){
document.getElementById("cond").innerHTML="Decimal numbers should be 0 to 9.Don't enter special characters";
}
if(n==4){
document.getElementById("cond").innerHTML="Hexadecimal numbers should be 0 to 9 and A to F.Don't enter special characters";
}
console.log(n);}

function compute(){
    var n1=document.getElementById("no1").value;
    var v1=document.getElementById("s").value;
    var v2=document.getElementById("d").value;
    if(v1==0||v2==0){
        alert("Please Select Number Systems");
        return;
    }
    console.log(n1,v1,v2);
    if(n1==""){
        alert("Please Enter Number");
        return;
    }
    if(v1==1&&v2==1){
        document.getElementById("no2").value=n1;
        return;
    }
    if(v1==2&&v2==2){
        document.getElementById("no2").value=n1;
        return;
    }
    if(v1==3&&v2==3){
        document.getElementById("no2").value=n1;
        return;
    }
    if(v1==4&&v2==4){
        document.getElementById("no2").value=n1;
        return;
    }
    if(v1==3&&v2==2){
        document.getElementById("no2").value=Number(n1).toString(8);
        return;
    }
    if(v1==3&&v2==4){
        document.getElementById("no2").value=(Number(n1).toString(16)).toUpperCase();
        return;
    }
    if(v1==3&&v2==1){
        document.getElementById("no2").value=Number(n1).toString(2);
        return;
    }
    if(v1==1&&v2==3){
        document.getElementById("no2").value=parseInt(n1,2);
        return;
    }
    if(v1==2&&v2==3){
        document.getElementById("no2").value=parseInt(n1,8);
        return;
    }
    if(v1==4&&v2==3){
        document.getElementById("no2").value=parseInt(n1,16);
        return;
    }
    if(v1==1&&v2==2){
        var binary=Number(n1);
        var octal = 0, decimal = 0, i = 0;
        while(binary != 0)
        {
        decimal += (binary%10) * Math.pow(2,i);
        ++i;
        binary=parseInt(binary/10);
        }
        i = 1;
        while (decimal != 0)
        {
        octal += (decimal % 8) * i;
        decimal =parseInt(decimal/8);
        i =i* 10;
        }
        document.getElementById("no2").value=octal;
        return;
        
    }
    if(v1==2&&v2==1){
        var oct=Number(n1);
            var dec = 0, i = 0;
            var bin = 0;
            while (oct != 0) {
                dec += (oct % 10) *Math.pow(8, i);
                ++i;
                oct =parseInt(oct/10);
            }
            i = 1;
            while (dec != 0) {
                bin += (dec % 2) * i;
                dec =parseInt(dec/2);
                i *= 10;
            }
            document.getElementById("no2").value=bin;
            return; 
        }
    if(v1==4&&v2==1){
        document.getElementById("no2").value="";
    var i = 0;
        var hexa=n1;
    while (hexa[i])
    {
        switch (hexa[i])
        {
        case '0':
            document.getElementById("no2").value+="0000"; break;
        case '1':
            document.getElementById("no2").value+="0001"; break;
        case '2':
            document.getElementById("no2").value+="0010"; break;
        case '3':
            document.getElementById("no2").value+="0011"; break;
        case '4':
            document.getElementById("no2").value+="0100"; break;
        case '5':
            document.getElementById("no2").value+="0101"; break;
        case '6':
            document.getElementById("no2").value+="0110"; break;
        case '7':
            document.getElementById("no2").value+="0111"; break;
        case '8':
            document.getElementById("no2").value+="1000"; break;
        case '9':
            printf("1001"); break;
        case 'A':
            document.getElementById("no2").value+="1010"; break;
        case 'B':
            document.getElementById("no2").value+="1011"; break;
        case 'C':
            document.getElementById("no2").value+="1100"; break;
        case 'D':
            document.getElementById("no2").value+="1101"; break;
        case 'E':
            document.getElementById("no2").value+="1110"; break;
        case 'F':
            document.getElementById("no2").value+="1111"; break;
        
        }
        i++;
    }
}
if(v1==1&&v2==4){
    var hexa = parseInt(Number(n1), 2).toString(16).toUpperCase();
    document.getElementById("no2").value=hexa;
    return;
}
if(v1==4&&v2==2){
    var n2=parseInt(n1,16);
    console.log(n2,Number(n2).toString(8));
    document.getElementById("no2").value=Number(n2).toString(8);
    return;
   
}
if(v1==2&&v2==4){
    var OCTALVALUES = [0, 1, 10, 11, 100, 101, 110, 111];
    var octal, tempOctal, binary, place;
    var hex = "";
    var rem;
     place = 1;
    binary = 0;
    octal=Number(n1);
    tempOctal = octal;
    while(tempOctal > 0)
    {
        rem = tempOctal % 10;
        binary = (OCTALVALUES[rem] * place) + binary;
        tempOctal =parseInt(tempOctal/10);
        place *= 1000;
    }
    while(binary > 0)
    {
        rem = binary % 10000;
        switch(rem)
        {
            case 0:
                hex+="0";
                break;
            case 1:
                hex+="1";
                break;
            case 10:
                hex+="2";
                break;
            case 11:
                hex+="3";
                break;
            case 100:
                hex+="4";
                break;
            case 101:
                hex+="5";
                break;
            case 110:
                hex+="6";
                break;
            case 111:
                hex+="7";
                break;
            case 1000:
                hex+="8";
                break;
            case 1001:
                hex+="9";
                break;
            case 1010:
                hex+="A";
                break;
            case 1011:
                hex+="B";
                break;
            case 1100:
                hex+="C";
                break;
            case 1101:
                hex+="D";
                break;
            case 1110:
                hex+="E";
                break;
            case 1111:
                hex+="F";
            break;
        }

        binary =parseInt(binary/10000);
    }
    var l = hex.length;
           var o = '';
        while (l > 0) {
          o += hex.substring(l- 1, l);
          l--;
        }
        document.getElementById("no2").value=o;
        return;
      
}

}
