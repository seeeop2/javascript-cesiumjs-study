import * as config from './config.js';

// =============================
// CesiumJS 기본 초기화 스크립트
// =============================

// 1. Cesium Ion Access Token 설정 (필수)
//    - js/config.js에서 토큰을 import하여 사용합니다.
Cesium.Ion.defaultAccessToken = config.CESIUM_ION_TOKEN;

// 2. Cesium Viewer 생성
//    - 'cesiumContainer'라는 id를 가진 div에 3D 지구를 렌더링합니다.
const viewer = new Cesium.Viewer('cesiumContainer');
