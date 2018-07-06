function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
    var r = window.location.search.substr(1).match(reg);
    if (r!=null) return (r[2]); return null;
}
var METHOD_GET = "GET",METHOD_POST = "POST",METHOD_PUT ="PUT",METHOD_DELETE = "DELETE";
var CONTENT_TYPE_STRING = "application/x-www-form-urlencoded",CONTENT_TYPE_JSON = "application/json";
var SUCCESS_REUSLE_CODE = 200,FAIL_RESULT_CODE = 500;



function httpRequest($http,method,url,data,params,contentType,mySuccessCallback){
    $http({
        method: method,
        url: url,
        dataType: "json",//预期服务器返回的数据类型
        data:data,
        params:params,
        headers: {
            'Content-Type': contentType,
            "Access-Token":localStorage.accessToken,
        },
    }).then(function successCallback(response) {
        console.log(response);
        if(response.data.resultCode == SUCCESS_REUSLE_CODE){
            //alert(response.data.data);
            mySuccessCallback(response.data.data);
        }else if(response.data.resultCode == 413){
            var result = confirm(response.data.message)
            if(result){
                location.href = "login.html";
            }

        }else if(response.data.resultCode == FAIL_RESULT_CODE){
            alert(response.data.message);
        }


    }, function errorCallback(response) {
        // 请求失败执行代码
        console.log(response);
    });
}

var reserveList = [
    {
        "apartName":"厘米公寓",
        "branchName":"东角头店",
        "address":"【南山区蛇口】2号线东角头地铁站B出口",
        "desc":["离地铁近","独立卫浴","定期保洁"],
        "area":"30",
        "orientation":"朝南",
        "traffic":"距离2号线东角头站50米",
        "baiduMap":{
            "Lng":"113.938922",
            "Lat":"22.490322"
        },
        "about":{
            "around":"小区内配套齐全，吃喝玩乐都可以在小区内解决，银行有工商银行、中国银行、工商银行等等，超市有华润万家，各种小便利店，小区内部配套：儿童游戏室、桌球室、乒乓球室、泳池、健身房、篮球场等等，小区绿化一级棒，晚上乘凉散步尤其舒服。",
            "traffic":"出小区东门步行就可以到达地铁2号线、东角头站，乘坐地铁出行十分方便，如果近距离出行可以选择小区门口的市政绿色出行自行车，健康环保！"
        },
        "type":[
            {
                "name":"单人间",
                "price":"900",
                "images":["../image/web/index_house_06.jpg",
                    "../image/web/index_house_07.jpg",
                    "../image/web/index_house_08.jpg",
                    "../image/web/index_house_09.jpg",
                ]
            },
            {
                "name":"四人间",
                "price":"900",
                "images":["../image/web/index_house_06.jpg",
                    "../image/web/index_house_07.jpg",
                    "../image/web/index_house_08.jpg",
                    "../image/web/index_house_09.jpg",
                ]
            },
            {
                "name":"六人间",
                "price":"900",
                "images":["../image/web/index_house_13.jpg",
                    "../image/web/index_house_14.jpg",
                    "../image/web/index_house_15.jpg",
                    "../image/web/index_house_16.jpg",
                ]
            },
            {
                "name":"八人间",
                "price":"900",
                "images":["../image/web/index_house_06.jpg",
                    "../image/web/index_house_07.jpg",
                    "../image/web/index_house_08.jpg",
                    "../image/web/index_house_09.jpg",
                ]
            },
        ]

    },
    {
        "apartName":"厘米公寓",
        "branchName":"龙井店",
        "address":"【南山区蛇口】2号线东角头地铁站B出口",
        "desc":["离地铁近","独立卫浴","定期保洁"],
        "area":"30",
        "orientation":"朝南",
        "traffic":"距离2号线东角头站50米",
        "baiduMap":{
            "Lng":"113.974715",
            "Lat":"22.573661"
        },
        "about":{
            "around":"小区内配套齐全，吃喝玩乐都可以在小区内解决，银行有工商银行、中国银行、工商银行等等，超市有华润万家，各种小便利店，小区内部配套：儿童游戏室、桌球室、乒乓球室、泳池、健身房、篮球场等等，小区绿化一级棒，晚上乘凉散步尤其舒服。",
            "traffic":"出小区东门步行就可以到达地铁2号线、东角头站，乘坐地铁出行十分方便，如果近距离出行可以选择小区门口的市政绿色出行自行车，健康环保！"
        },
        "type":[
            {
                "name":"单人间",
                "price":"900",
                "images":["../image/web/index_house_06.jpg",
                    "../image/web/index_house_07.jpg",
                    "../image/web/index_house_08.jpg",
                    "../image/web/index_house_09.jpg",
                ]
            },
            {
                "name":"四人间",
                "price":"900",
                "images":["../image/web/index_house_06.jpg",
                    "../image/web/index_house_07.jpg",
                    "../image/web/index_house_08.jpg",
                    "../image/web/index_house_09.jpg",
                ]
            },
            {
                "name":"六人间",
                "price":"900",
                "images":["../image/web/index_house_06.jpg",
                    "../image/web/index_house_07.jpg",
                    "../image/web/index_house_08.jpg",
                    "../image/web/index_house_09.jpg",
                ]
            },
            {
                "name":"八人间",
                "price":"900",
                "images":["../image/web/index_house_06.jpg",
                    "../image/web/index_house_07.jpg",
                    "../image/web/index_house_08.jpg",
                    "../image/web/index_house_09.jpg",
                ]
            },
        ]

    },
    {
        "apartName":"厘米公寓",
        "branchName":"四海店",
        "address":"【南山区蛇口】2号线东角头地铁站B出口",
        "desc":["离地铁近","独立卫浴","定期保洁"],
        "area":"30",
        "orientation":"朝南",
        "traffic":"距离2号线东角头站50米",
        "baiduMap":{
            "Lng":"113.932539",
            "Lat":"22.506796"
        },
        "about":{
            "around":"小区内配套齐全，吃喝玩乐都可以在小区内解决，银行有工商银行、中国银行、工商银行等等，超市有华润万家，各种小便利店，小区内部配套：儿童游戏室、桌球室、乒乓球室、泳池、健身房、篮球场等等，小区绿化一级棒，晚上乘凉散步尤其舒服。",
            "traffic":"出小区东门步行就可以到达地铁2号线、东角头站，乘坐地铁出行十分方便，如果近距离出行可以选择小区门口的市政绿色出行自行车，健康环保！"
        },
        "type":[
            {
                "name":"单人间",
                "price":"900",
                "images":["../image/web/index_house_06.jpg",
                    "../image/web/index_house_07.jpg",
                    "../image/web/index_house_08.jpg",
                    "../image/web/index_house_09.jpg",
                ]
            },
            {
                "name":"四人间",
                "price":"900",
                "images":["../image/web/index_house_06.jpg",
                    "../image/web/index_house_07.jpg",
                    "../image/web/index_house_08.jpg",
                    "../image/web/index_house_09.jpg",
                ]
            },
            {
                "name":"六人间",
                "price":"900",
                "images":["../image/web/index_house_06.jpg",
                    "../image/web/index_house_07.jpg",
                    "../image/web/index_house_08.jpg",
                    "../image/web/index_house_09.jpg",
                ]
            },
            {
                "name":"八人间",
                "price":"900",
                "images":["../image/web/index_house_06.jpg",
                    "../image/web/index_house_07.jpg",
                    "../image/web/index_house_08.jpg",
                    "../image/web/index_house_09.jpg",
                ]
            },
        ]

    },
    {
        "apartName":"厘米公寓",
        "branchName":"大冲店",
        "address":"【南山区蛇口】2号线东角头地铁站B出口",
        "desc":["离地铁近","独立卫浴","定期保洁"],
        "area":"30",
        "orientation":"朝南",
        "traffic":"距离2号线东角头站50米",
        "baiduMap":{
            "Lng":"113.959853",
            "Lat":"22.550034"
        },
        "about":{
            "around":"小区内配套齐全，吃喝玩乐都可以在小区内解决，银行有工商银行、中国银行、工商银行等等，超市有华润万家，各种小便利店，小区内部配套：儿童游戏室、桌球室、乒乓球室、泳池、健身房、篮球场等等，小区绿化一级棒，晚上乘凉散步尤其舒服。",
            "traffic":"出小区东门步行就可以到达地铁2号线、东角头站，乘坐地铁出行十分方便，如果近距离出行可以选择小区门口的市政绿色出行自行车，健康环保！"
        },
        "type":[
            {
                "name":"单人间",
                "price":"900",
                "images":["../image/web/index_house_06.jpg",
                    "../image/web/index_house_07.jpg",
                    "../image/web/index_house_08.jpg",
                    "../image/web/index_house_09.jpg",
                ]
            },
            {
                "name":"四人间",
                "price":"900",
                "images":["../image/web/index_house_06.jpg",
                    "../image/web/index_house_07.jpg",
                    "../image/web/index_house_08.jpg",
                    "../image/web/index_house_09.jpg",
                ]
            },
            {
                "name":"六人间",
                "price":"900",
                "images":["../image/web/index_house_06.jpg",
                    "../image/web/index_house_07.jpg",
                    "../image/web/index_house_08.jpg",
                    "../image/web/index_house_09.jpg",
                ]
            },
            {
                "name":"八人间",
                "price":"900",
                "images":["../image/web/index_house_06.jpg",
                    "../image/web/index_house_07.jpg",
                    "../image/web/index_house_08.jpg",
                    "../image/web/index_house_09.jpg",
                ]
            },
        ]

    },
    {
        "apartName":"厘米公寓",
        "branchName":"车公庙店",
        "address":"【南山区蛇口】2号线东角头地铁站B出口",
        "desc":["离地铁近","独立卫浴","定期保洁"],
        "area":"30",
        "orientation":"朝南",
        "traffic":"距离2号线东角头站50米",
        "baiduMap":{
            "Lng":"114.026735",
            "Lat":"22.539417"
        },
        "about":{
            "around":"小区内配套齐全，吃喝玩乐都可以在小区内解决，银行有工商银行、中国银行、工商银行等等，超市有华润万家，各种小便利店，小区内部配套：儿童游戏室、桌球室、乒乓球室、泳池、健身房、篮球场等等，小区绿化一级棒，晚上乘凉散步尤其舒服。",
            "traffic":"出小区东门步行就可以到达地铁2号线、东角头站，乘坐地铁出行十分方便，如果近距离出行可以选择小区门口的市政绿色出行自行车，健康环保！"
        },
        "type":[
            {
                "name":"单人间",
                "price":"900",
                "images":["../image/web/index_house_06.jpg",
                    "../image/web/index_house_07.jpg",
                    "../image/web/index_house_08.jpg",
                    "../image/web/index_house_09.jpg",
                ]
            },
            {
                "name":"四人间",
                "price":"900",
                "images":["../image/web/index_house_06.jpg",
                    "../image/web/index_house_07.jpg",
                    "../image/web/index_house_08.jpg",
                    "../image/web/index_house_09.jpg",
                ]
            },
            {
                "name":"六人间",
                "price":"900",
                "images":["../image/web/index_house_06.jpg",
                    "../image/web/index_house_07.jpg",
                    "../image/web/index_house_08.jpg",
                    "../image/web/index_house_09.jpg",
                ]
            },
            {
                "name":"八人间",
                "price":"900",
                "images":["../image/web/index_house_06.jpg",
                    "../image/web/index_house_07.jpg",
                    "../image/web/index_house_08.jpg",
                    "../image/web/index_house_09.jpg",
                ]
            },
        ]

    },
]