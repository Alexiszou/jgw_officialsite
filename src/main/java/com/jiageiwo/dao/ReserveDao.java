package com.jiageiwo.dao;

import com.jiageiwo.bean.Apartment;
import com.jiageiwo.bean.ReserveBean;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;


@Repository
public interface ReserveDao {
    void addReserve(ReserveBean reserve);

    List<Apartment> getApartmentList(Map map);
    List<ReserveBean> getReserveList(Map map);
}
