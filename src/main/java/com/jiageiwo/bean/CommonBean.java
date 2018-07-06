package com.jiageiwo.bean;

import java.io.Serializable;
import java.sql.Timestamp;

public class CommonBean implements Serializable{
    private static final long serialVersionUID = 1L;
    public static final int INVALID_ID = 0;
    protected int id = INVALID_ID;
    protected Timestamp genTime;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public boolean isValidId(){
        if(id != INVALID_ID){
            return true;
        }
        return false;
    }

    public Timestamp getGenTime() {
        return genTime;
    }

    public void setGenTime(Timestamp genTime) {
        this.genTime = genTime;
    }
}
