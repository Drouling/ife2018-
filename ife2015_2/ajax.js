// 
/*
options是一个对象，里面可以包括的参数为：
    type: post或者get，可以有一个默认值
    data: 发送的数据，为一个键值对象或者为一个用&连接的赋值字符串
    onsuccess: 成功时的调用函数
    onfail: 失败时的调用函数
*/
function ajax(url, options) {
    var xmlhttp;
    if(window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    //IE6,IE5
    else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    //type
    var type = options.type;
    if(!options.type) {
        type = "GET";
    }

    //data
    //let dataStr = JSON.stringify(options.data);
    function toDataStr(data){
        if((typeof(data)).toLowerCase() == "string" && data.length > 0){
            if(type.toUpperCase() == "GET") {
                url += data;
                return null;
            }
            else {
                return data;
            }
        }
        else if((typeof(data)).toLowerCase()  == "object" && data.length > 0){
            let str = "";
            for (let i = 0; i <data.length; i++) {
                if(i = 0) {
                    str += i + "=" + data[i];
                }
                else{
                    str += "&" + i + "=" + data[i];
                }
            }
            return str
        }
        else{
            return null;
        }
    }
    let dataStr = toDataStr(options.data);


    
    xmlhttp.onreadystatechange = function(){
        //onsuccess
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            if(options.onfail){
                options.onsuccess(xmlhttp.responseText, xmlhttp);
            }
        }
        //onfail
        else {
            if(options.onfail){
                options.onfail(xmlhttp.responseText, xmlhttp);
            }
        }
    }

    xmlhttp.open(type, url, true);
    if(type.toUpperCase() == "POST"){
        xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    }
    xmlhttp.send(dataStr);
    
}

// 使用示例：

ajax(
    'http://localhost:8080/server/ajaxtest',
    {
        data: {
            name: 'simon',
            password: '123456'
        },
        onsuccess: function (responseText, xhr) {
            console.log(responseText);
        }
    }
);
