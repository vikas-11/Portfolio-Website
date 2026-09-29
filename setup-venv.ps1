Write-Host "Creating optional Python virtual environment..." -ForegroundColor Cyan
python -m venv .venv
Write-Host "Done. Activate it with:" -ForegroundColor Green
Write-Host ".\.venv\Scripts\Activate.ps1"
Write-Host "Note: the portfolio itself is React/Vite and runs with npm. The Python venv is optional for future backend/API work." -ForegroundColor Yellow
