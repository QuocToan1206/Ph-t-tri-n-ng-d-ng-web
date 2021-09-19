function sc(){
    //tạo bảng để nhập giới hạn
    rng = prompt ('Enter the range');
    res = rng.split("-");
    if (res.length != 2){
        alert("invalid range ");
        return;
    }
    //xét điều kiện giới hạn
    first = parseInt (res[0]);
    second = parseInt(res[1]);
    if  (first > second){
        alert ("invalid range");
        return;
    }
    //tính toán
    str = "<table border=2><tr><th>Number</th><th>Square</th><th>Cube</th></tr>";
    for (i = first; i <= second; i++)
    {
        str = str + "<tr><td>" + "<td>" +(i*i) +"<td>" +(i*i*i);
    }
    document.write(str);

}