package com.jiageiwo.controller;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.jiageiwo.bean.ReserveBean;
import com.jiageiwo.common.Result;
import com.jiageiwo.common.ResultGenerator;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.jiageiwo.dao.ReserveDao;
import com.jiageiwo.utils.CommonUtil;
import com.jiageiwo.utils.TimeUtli;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.sql.Timestamp;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class ReserveController {

    private Logger logger = LoggerFactory.getLogger(ReserveController.class);
    @Autowired
    private ReserveDao reserveDao;

    @RequestMapping(value="/reserve",method= RequestMethod.POST)
    @ResponseBody
    public Result addReserve(HttpServletRequest request, @RequestBody ReserveBean reserve){


        reserve.setGenTime(TimeUtli.genCurTimeStamp());
        reserveDao.addReserve(reserve);
        if(reserve.isValidId()) {
            return ResultGenerator.genSuccessResult(reserve);
        }
        return ResultGenerator.genFailResult("预约失败！");
    }

    @RequestMapping(value="/apartment",method= RequestMethod.GET)
    @ResponseBody
    public Result getApartmentList(HttpServletRequest request, HttpServletResponse response){

        //response.setHeader("Access-Control-Allow-Origin", "*");
        Map map = request.getParameterMap();

        //System.out.println(map.toString());

        //logger.debug("genMap:"+CommonUtil.genRequestMap(map));
        //logger.error("genMap:"+CommonUtil.genRequestMap(map));

        List list = reserveDao.getApartmentList(CommonUtil.genRequestMap(map));

        return ResultGenerator.genSuccessResult(list);
    }

    @RequestMapping(value="/reserve",method= RequestMethod.GET)
    @ResponseBody
    public Result getReserveList(HttpServletRequest request, HttpServletResponse response){

        //response.setHeader("Access-Control-Allow-Origin", "*");
        Map map = request.getParameterMap();

        //System.out.println(map.toString());

        logger.debug("genMap:"+CommonUtil.genRequestMap(map));
        //logger.error("genMap:"+CommonUtil.genRequestMap(map));

        List list = reserveDao.getReserveList(CommonUtil.genRequestMap(map));

        return ResultGenerator.genSuccessResult(list);
    }
}
