package com.jiageiwo.utils;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

public class CommonUtil {

    public static Map<String,Object> genRequestMap(Map paramMap) {
        //遍历
        Map<String, Object> map = new HashMap<>();
        for (Iterator iter = paramMap.entrySet().iterator(); iter.hasNext(); ) {
            Map.Entry element = (Map.Entry) iter.next();
            //key值
            String strKey = element.getKey().toString();
            //value,数组形式
            String[] value = (String[]) element.getValue();

            //System.out.print(strKey.toString() +"=");
            String strVal = "";
            int intVal = -1;
            for (int i = 0; i < value.length; i++) {
                strVal += value[i];
            }
            try {
               intVal = Integer.parseInt(strVal);
            }catch (Exception e){
                e.printStackTrace();
            }
            if(intVal != -1){
                map.put(strKey,intVal);
            }else{
                map.put(strKey, strVal);
            }

        }
        return map;
    }
}
