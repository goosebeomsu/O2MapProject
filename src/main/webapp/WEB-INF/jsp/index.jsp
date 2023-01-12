<%@ page language="java" contentType="text/html; charset=utf-8"
         pageEncoding="utf-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>map index</title>
    <link href="/css/index.css" rel="stylesheet" />
</head>
<body>

<div class="map-area">
    <div id="o2map" style="height:400px;"></div>
</div>

<div style="margin-top: 5px">
    <select class="changeMap">
        <option value="VWORLD">VWorld</option>
        <option value="KAKAO">KaKao</option>
    </select>
</div>

<div>
    <button class="zoomIn">지도 확대</button>
    <button class="zoomOut">지도 축소</button>
    <button class="viewAll">전체보기</button>
    <button class="prev">이전</button>
    <button class="next">이후</button>
</div>

<div>
    <button class="distance">길이재기</button>
    <button class="measurement">면적측정</button>
    <button class="radius">반경</button>
    <button class="clear">초기화</button>
</div>

<div style="margin-top: 5px">
    <button class="saveImage">이미지 저장</button>
    <button class="objectInfo">정보조회</button>
</div>

<div>
    <select class="userLayer">
        <option value="none">사용자 레이어</option>
        <c:forEach var="layerName" items="${layerNamesMap}">
            <option value=${layerName.key}>${layerName.value}</option>
        </c:forEach>
    </select>
</div>

<div class="background">
    <div class="window">
        <div class="popup">
            <div class="inner-popup">

            </div>
            <button id="close">팝업닫기</button>
        </div>
    </div>
</div>
<%@ include file="./include/header_inc.jsp"%>

</body>
</html>