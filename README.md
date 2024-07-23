# Taskify

클린코드와 가독성 및 아키텍쳐 고려한 Taskify 프로젝트.

features // 기능 폴더

    - dashboard
    	- dashboard-invited
    	- dashboard-list

shared // 공유 폴더

    - @common // App 자체에서 모두 사용하는 공통 폴더
    	- hooks
    	- services // auth.service
    	- utils
    	- types // auth.type
    	- constants
    	- components

    - dashboard // 대시보드 내에서 모두 사용하는 공통 폴더
    	- components
    		- dashboard-header
    		- dashboard-sidebar
    		- dashboard-layout
    		- dashboard-modal
    	- hooks
    	- modal
    	- services // 대시보드 모든 훅
    	- types // 대시보드 모든 타입.

API 랜딩 페이지를 제외한 대시보드 내에서 사용.
