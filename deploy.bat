@echo off

echo %cd% 

call yarn run dev
call yarn run prod
call composer dump-autoload
call php artisan optimize
call php artisan optimize:clear

pause