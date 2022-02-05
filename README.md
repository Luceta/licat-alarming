# Likelion K digital Front - discord Alarm

## Introduction

멋쟁이 사자처럼 K-digital frontend Course 쉬는시간 알람 훅입니다.

- This code is for enrolling on aws lamda to alaram in Discord Channel

## Requirements

- 먼저 gitignore 파일을 제외한 모든 파일을 zip파일로 압축해줍니다.

## Usage

1. aws lambda에 압축한 zip파일을 업로드 해줍니다.
2. 람다 트리거에 Event Bridge(cloudWatch Events)를 등록해줍니다.
3. 이벤트 일정은 cron식이나 고정비율에 맞게끔 설정해줍니다.
4. ColudWatchLog도 등록하여 매번 로그를 확인 할 수 있습니다.
