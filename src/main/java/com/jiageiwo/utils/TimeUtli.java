package com.jiageiwo.utils;

import java.sql.Timestamp;

public class TimeUtli {

    public static Timestamp genCurTimeStamp(){
        return new Timestamp(new java.util.Date().getTime());
    }
}
