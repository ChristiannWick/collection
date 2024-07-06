@echo off

echo %cd%
echo "===================="
call php artisan cache:clear
call php artisan view:clear
call php artisan route:clear
call php artisan clear-compiled
call php artisan config:cache
call php artisan config:clear
