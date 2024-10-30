@echo off
title Node.js Runner

:menu
echo Choose a directory to execute main.js:
echo 1. deur
echo 2. stoel
set /p choice=Enter your choice (1 or 2): 

if %choice%==1 (
    cd deur
) else if %choice%==2 (
    cd stoel
) else (
    echo Invalid choice, please try again.
    goto menu
)

cls
node main.js
pause
